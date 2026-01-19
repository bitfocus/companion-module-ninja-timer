const { InstanceBase, runEntrypoint, InstanceStatus } = require('@companion-module/base')
const { getActions } = require('./actions')
const { getFeedbacks } = require('./feedbacks')
const { getVariables } = require('./variables')
const { getPresets } = require('./presets')
const upgrades = require('./upgrades')
const dgram = require('dgram')
const osc = require('osc-min')

class NinjaTimerInstance extends InstanceBase {
	constructor(internal) {
		super(internal)
		this.oscClient = null
		this.oscServer = null
		this.state = {
			running: false,
			time: '00:00',
			remaining: 0,
			elapsed: 0,
			progress: 0,
			overtime: false,
			ended: false,
			blackout: false,
			timerName: '',
			timerIndex: 1,
			profileName: '',
			profileIndex: 1,
			// Warning thresholds
			warnYellowSec: 60,
			warnOrangeSec: 15,
			// Timer mode
			timerMode: 'countdown',
			timeFormat: 'MM:SS',
			// Sound
			soundType: 'none',
			soundVolume: 0.7,
			// Start mode
			startMode: 'manual',
			targetTime: '',
			// Settings
			allowOvertime: true,
			// Appearance
			fontFamily: 'Inter',
			fontWeight: 700,
			fontColor: '#ffffff',
			bgColor: '#000000',
			strokeWidth: 0,
			strokeColor: '#000000',
			shadowSize: 0,
			shadowColor: '#000000',
			// Theme
			theme: 'dark',
			// Duration
			duration: 0,
		}
	}

	async init(config) {
		this.config = config
		this.updateStatus(InstanceStatus.Connecting)

		this.initOSC()
		this.setActionDefinitions(getActions(this))
		this.setFeedbackDefinitions(getFeedbacks(this))
		this.setVariableDefinitions(getVariables())
		this.setPresetDefinitions(getPresets())
		this.checkVariables()
	}

	async destroy() {
		if (this.oscServer) {
			this.oscServer.close()
			this.oscServer = null
		}
		if (this.oscClient) {
			this.oscClient.close()
			this.oscClient = null
		}
	}

	async configUpdated(config) {
		this.config = config
		this.initOSC()
	}

	getConfigFields() {
		return [
			{
				type: 'static-text',
				id: 'info',
				width: 12,
				label: 'Information',
				value: 'Connect to Ninja Timer via OSC. Enable OSC in Ninja Timer settings first.',
			},
			{
				type: 'textinput',
				id: 'host',
				label: 'Ninja Timer IP Address',
				width: 8,
				default: '127.0.0.1',
			},
			{
				type: 'number',
				id: 'sendPort',
				label: 'Send Port (Ninja Timer Listen Port)',
				width: 4,
				default: 8000,
				min: 1024,
				max: 65535,
			},
			{
				type: 'number',
				id: 'receivePort',
				label: 'Receive Port (for Feedback)',
				width: 4,
				default: 9000,
				min: 1024,
				max: 65535,
			},
			{
				type: 'checkbox',
				id: 'receiveFeedback',
				label: 'Receive Feedback',
				width: 8,
				default: true,
			},
		]
	}

	initOSC() {
		// Close existing connections
		if (this.oscServer) {
			this.oscServer.close()
			this.oscServer = null
		}
		if (this.oscClient) {
			this.oscClient.close()
			this.oscClient = null
		}

		// Create send socket
		this.oscClient = dgram.createSocket('udp4')

		// Create receive socket if feedback enabled
		if (this.config.receiveFeedback) {
			this.oscServer = dgram.createSocket('udp4')

			this.oscServer.on('message', (msg) => {
				try {
					const packet = osc.fromBuffer(msg)
					if (packet.oscType === 'message') {
						this.handleOSCMessage(packet.address, packet.args)
					} else if (packet.oscType === 'bundle') {
						for (const element of packet.elements) {
							if (element.oscType === 'message') {
								this.handleOSCMessage(element.address, element.args)
							}
						}
					}
				} catch (err) {
					this.log('error', `OSC parse error: ${err.message}`)
				}
			})

			this.oscServer.on('error', (err) => {
				this.log('error', `OSC server error: ${err.message}`)
				this.updateStatus(InstanceStatus.ConnectionFailure)
			})

			this.oscServer.bind(this.config.receivePort, () => {
				this.log('info', `Listening for feedback on port ${this.config.receivePort}`)
				this.updateStatus(InstanceStatus.Ok)
			})
		} else {
			this.updateStatus(InstanceStatus.Ok)
		}
	}

	handleOSCMessage(address, args) {
		const value = args.length > 0 ? args[0].value : null

		switch (address) {
			case '/ninja/state/running':
				this.state.running = value === 1
				break
			case '/ninja/state/time':
				this.state.time = value || '00:00'
				break
			case '/ninja/state/remaining':
				this.state.remaining = value || 0
				break
			case '/ninja/state/elapsed':
				this.state.elapsed = value || 0
				break
			case '/ninja/state/progress':
				this.state.progress = value || 0
				break
			case '/ninja/state/overtime':
				this.state.overtime = value === 1
				break
			case '/ninja/state/ended':
				this.state.ended = value === 1
				break
			case '/ninja/state/blackout':
				this.state.blackout = value === 1
				break
			case '/ninja/state/timer/name':
				this.state.timerName = value || ''
				break
			case '/ninja/state/timer/index':
				this.state.timerIndex = value || 1
				break
			case '/ninja/state/profile/name':
				this.state.profileName = value || ''
				break
			case '/ninja/state/profile/index':
				this.state.profileIndex = value || 1
				break
			// Warning thresholds
			case '/ninja/state/warn/yellow':
				this.state.warnYellowSec = value ?? 60
				break
			case '/ninja/state/warn/orange':
				this.state.warnOrangeSec = value ?? 15
				break
			// Timer mode and format
			case '/ninja/state/mode':
				this.state.timerMode = value || 'countdown'
				break
			case '/ninja/state/format':
				this.state.timeFormat = value || 'MM:SS'
				break
			// Sound settings
			case '/ninja/state/sound/type':
				this.state.soundType = value || 'none'
				break
			case '/ninja/state/sound/volume':
				this.state.soundVolume = value ?? 0.7
				break
			// Start mode and target time
			case '/ninja/state/startMode':
				this.state.startMode = value || 'manual'
				break
			case '/ninja/state/targetTime':
				this.state.targetTime = value || ''
				break
			// Settings
			case '/ninja/state/allowOvertime':
				this.state.allowOvertime = value === 1
				break
			// Appearance
			case '/ninja/state/font/family':
				this.state.fontFamily = value || 'Inter'
				break
			case '/ninja/state/font/weight':
				this.state.fontWeight = value || 700
				break
			case '/ninja/state/font/color':
				this.state.fontColor = value || '#ffffff'
				break
			case '/ninja/state/bg/color':
				this.state.bgColor = value || '#000000'
				break
			case '/ninja/state/stroke/width':
				this.state.strokeWidth = value ?? 0
				break
			case '/ninja/state/stroke/color':
				this.state.strokeColor = value || '#000000'
				break
			case '/ninja/state/shadow/size':
				this.state.shadowSize = value ?? 0
				break
			case '/ninja/state/shadow/color':
				this.state.shadowColor = value || '#000000'
				break
			// Theme
			case '/ninja/state/theme':
				this.state.theme = value || 'dark'
				break
			// Duration
			case '/ninja/state/duration':
				this.state.duration = value || 0
				break
		}

		this.checkVariables()
		this.checkFeedbacks()
	}

	sendOSC(address, ...args) {
		if (!this.oscClient || !this.config.host) {
			return
		}

		const oscArgs = args.map((arg) => {
			if (typeof arg === 'number') {
				if (Number.isInteger(arg)) {
					return { type: 'integer', value: arg }
				}
				return { type: 'float', value: arg }
			}
			return { type: 'string', value: String(arg) }
		})

		const message = osc.toBuffer({
			address: address,
			args: oscArgs,
		})

		this.oscClient.send(message, this.config.sendPort, this.config.host, (err) => {
			if (err) {
				this.log('error', `OSC send error: ${err.message}`)
			}
		})
	}

	formatSeconds(totalSeconds) {
		const mins = Math.floor(Math.abs(totalSeconds) / 60)
		const secs = Math.abs(totalSeconds) % 60
		const sign = totalSeconds < 0 ? '-' : ''
		return `${sign}${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
	}

	checkVariables() {
		this.setVariableValues({
			time: this.state.time,
			remaining: this.state.remaining,
			elapsed: this.state.elapsed,
			progress: Math.round(this.state.progress * 100),
			timer_name: this.state.timerName,
			timer_index: this.state.timerIndex,
			profile_name: this.state.profileName,
			profile_index: this.state.profileIndex,
			state: this.state.running ? 'Running' : this.state.ended ? 'Ended' : 'Stopped',
			// Warning thresholds
			warn_yellow_sec: this.state.warnYellowSec,
			warn_orange_sec: this.state.warnOrangeSec,
			// Timer mode
			timer_mode: this.state.timerMode,
			time_format: this.state.timeFormat,
			// Sound
			sound_type: this.state.soundType,
			sound_volume: this.state.soundVolume,
			// Start mode
			start_mode: this.state.startMode,
			target_time: this.state.targetTime,
			// Settings
			allow_overtime: this.state.allowOvertime ? 'Yes' : 'No',
			// Appearance
			font_family: this.state.fontFamily,
			font_weight: this.state.fontWeight,
			font_color: this.state.fontColor,
			bg_color: this.state.bgColor,
			stroke_width: this.state.strokeWidth,
			stroke_color: this.state.strokeColor,
			shadow_size: this.state.shadowSize,
			shadow_color: this.state.shadowColor,
			// Theme
			theme: this.state.theme,
			// Duration
			duration: this.state.duration,
			duration_formatted: this.formatSeconds(this.state.duration),
			// Formatted times
			remaining_formatted: this.formatSeconds(this.state.remaining),
			elapsed_formatted: this.formatSeconds(this.state.elapsed),
		})
	}
}

runEntrypoint(NinjaTimerInstance, upgrades)
