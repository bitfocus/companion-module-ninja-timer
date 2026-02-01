const { combineRgb } = require('@companion-module/base')

module.exports = {
	getPresets() {
		const presets = {}

		// =============================================
		// 1. Timer — Playback controls + duration
		// =============================================

		presets['toggle'] = {
			type: 'button',
			category: 'Timer',
			name: 'Play/Pause Toggle',
			style: {
				text: '▶ PLAY\n⏸ PAUSE',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'toggle' }],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'running',
					style: {
						bgcolor: combineRgb(0, 200, 0),
						text: '⏸ PAUSE',
					},
				},
				{
					feedbackId: 'paused',
					style: {
						bgcolor: combineRgb(200, 200, 0),
						text: '▶ RESUME',
					},
				},
			],
		}

		presets['start'] = {
			type: 'button',
			category: 'Timer',
			name: 'Start Timer',
			style: {
				text: '▶ Start',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 100, 0),
			},
			steps: [
				{
					down: [{ actionId: 'start' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['pause'] = {
			type: 'button',
			category: 'Timer',
			name: 'Pause Timer',
			style: {
				text: '⏸ Pause',
				size: '18',
				color: combineRgb(0, 0, 0),
				bgcolor: combineRgb(200, 200, 0),
			},
			steps: [
				{
					down: [{ actionId: 'pause' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['reset'] = {
			type: 'button',
			category: 'Timer',
			name: 'Reset Timer',
			style: {
				text: '↺ Reset',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(80, 80, 80),
			},
			steps: [
				{
					down: [{ actionId: 'reset' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['stop'] = {
			type: 'button',
			category: 'Timer',
			name: 'Stop Timer',
			style: {
				text: '⏹ Stop',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(200, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'stop' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// Add duration buttons
		presets['add_10s'] = {
			type: 'button',
			category: 'Timer',
			name: 'Add 10 Seconds',
			style: {
				text: '+0:10',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 100, 100),
			},
			steps: [
				{
					down: [{ actionId: 'addDuration', options: { amount: 10 } }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['add_30s'] = {
			type: 'button',
			category: 'Timer',
			name: 'Add 30 Seconds',
			style: {
				text: '+0:30',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 100, 100),
			},
			steps: [
				{
					down: [{ actionId: 'addDuration', options: { amount: 30 } }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['add_1min'] = {
			type: 'button',
			category: 'Timer',
			name: 'Add 1 Minute',
			style: {
				text: '+1:00',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 100, 100),
			},
			steps: [
				{
					down: [{ actionId: 'addDuration', options: { amount: 60 } }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// Subtract duration buttons
		presets['sub_10s'] = {
			type: 'button',
			category: 'Timer',
			name: 'Subtract 10 Seconds',
			style: {
				text: '-0:10',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(150, 60, 0),
			},
			steps: [
				{
					down: [{ actionId: 'addDuration', options: { amount: -10 } }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['sub_30s'] = {
			type: 'button',
			category: 'Timer',
			name: 'Subtract 30 Seconds',
			style: {
				text: '-0:30',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(150, 60, 0),
			},
			steps: [
				{
					down: [{ actionId: 'addDuration', options: { amount: -30 } }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['sub_1min'] = {
			type: 'button',
			category: 'Timer',
			name: 'Subtract 1 Minute',
			style: {
				text: '-1:00',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(150, 60, 0),
			},
			steps: [
				{
					down: [{ actionId: 'addDuration', options: { amount: -60 } }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// Quick set duration buttons
		presets['duration_5min'] = {
			type: 'button',
			category: 'Timer',
			name: '5 Minutes',
			style: {
				text: '5:00',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 70, 70),
			},
			steps: [
				{
					down: [{ actionId: 'setDuration5min' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['duration_10min'] = {
			type: 'button',
			category: 'Timer',
			name: '10 Minutes',
			style: {
				text: '10:00',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 70, 70),
			},
			steps: [
				{
					down: [{ actionId: 'setDuration10min' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['duration_15min'] = {
			type: 'button',
			category: 'Timer',
			name: '15 Minutes',
			style: {
				text: '15:00',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 70, 70),
			},
			steps: [
				{
					down: [{ actionId: 'setDuration15min' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// =============================================
		// 2. Select — Timer selection + navigation
		// =============================================

		presets['next_timer'] = {
			type: 'button',
			category: 'Select',
			name: 'Next Timer',
			style: {
				text: 'Next ▸',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 150),
			},
			steps: [
				{
					down: [{ actionId: 'nextTimer' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['prev_timer'] = {
			type: 'button',
			category: 'Select',
			name: 'Previous Timer',
			style: {
				text: '◂ Prev',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 150),
			},
			steps: [
				{
					down: [{ actionId: 'previousTimer' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// Timer Select Buttons (1-7)
		for (let i = 1; i <= 7; i++) {
			presets[`timer_${i}`] = {
				type: 'button',
				category: 'Select',
				name: `Select Timer ${i}`,
				style: {
					text: `T${i}`,
					size: '18',
					color: combineRgb(255, 255, 255),
					bgcolor: combineRgb(0, 50, 120),
				},
				steps: [
					{
						down: [{ actionId: 'selectTimer', options: { index: i } }],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'timerSelected',
						options: { index: i },
						style: {
							bgcolor: combineRgb(0, 100, 200),
						},
					},
				],
			}
		}

		// =============================================
		// 3. Display — Live info + display controls
		// =============================================

		presets['time_display'] = {
			type: 'button',
			category: 'Display',
			name: 'Time Display',
			style: {
				text: '$(ninja:time)',
				size: '24',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [],
			feedbacks: [
				{
					feedbackId: 'running',
					style: {
						color: combineRgb(0, 255, 0),
					},
				},
				{
					feedbackId: 'overtime',
					style: {
						color: combineRgb(255, 0, 0),
					},
				},
				{
					feedbackId: 'ended',
					style: {
						color: combineRgb(255, 0, 0),
						bgcolor: combineRgb(50, 0, 0),
					},
				},
			],
		}

		presets['timer_name'] = {
			type: 'button',
			category: 'Display',
			name: 'Timer Name',
			style: {
				text: '$(ninja:timer_name)',
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 50),
			},
			steps: [],
			feedbacks: [],
		}

		presets['duration_display'] = {
			type: 'button',
			category: 'Display',
			name: 'Duration Display',
			style: {
				text: '$(ninja:duration_formatted)',
				size: '18',
				color: combineRgb(150, 150, 150),
				bgcolor: combineRgb(30, 30, 30),
			},
			steps: [],
			feedbacks: [],
		}

		presets['state_display'] = {
			type: 'button',
			category: 'Display',
			name: 'Timer State',
			style: {
				text: '$(ninja:state)',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(50, 50, 50),
			},
			steps: [],
			feedbacks: [
				{
					feedbackId: 'running',
					style: {
						bgcolor: combineRgb(0, 200, 0),
						color: combineRgb(0, 0, 0),
					},
				},
				{
					feedbackId: 'paused',
					style: {
						bgcolor: combineRgb(200, 200, 0),
						color: combineRgb(0, 0, 0),
					},
				},
				{
					feedbackId: 'ended',
					style: {
						bgcolor: combineRgb(200, 0, 0),
					},
				},
				{
					feedbackId: 'overtime',
					style: {
						bgcolor: combineRgb(200, 0, 0),
					},
				},
			],
		}

		presets['mode_display'] = {
			type: 'button',
			category: 'Display',
			name: 'Timer Mode',
			style: {
				text: '$(ninja:timer_mode)',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 50, 100),
			},
			steps: [],
			feedbacks: [
				{
					feedbackId: 'modeCountdown',
					style: {
						bgcolor: combineRgb(0, 100, 200),
					},
				},
				{
					feedbackId: 'modeCountup',
					style: {
						bgcolor: combineRgb(0, 150, 100),
					},
				},
				{
					feedbackId: 'modeTod',
					style: {
						bgcolor: combineRgb(150, 100, 0),
					},
				},
			],
		}

		presets['warning_indicator'] = {
			type: 'button',
			category: 'Display',
			name: 'Warning Zone Indicator',
			style: {
				text: 'WARNING',
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(50, 50, 50),
			},
			steps: [],
			feedbacks: [
				{
					feedbackId: 'warningYellow',
					style: {
						bgcolor: combineRgb(255, 255, 0),
						color: combineRgb(0, 0, 0),
						text: 'YELLOW',
					},
				},
				{
					feedbackId: 'warningOrange',
					style: {
						bgcolor: combineRgb(255, 165, 0),
						color: combineRgb(0, 0, 0),
						text: 'ORANGE',
					},
				},
			],
		}

		presets['blackout'] = {
			type: 'button',
			category: 'Display',
			name: 'Blackout Toggle',
			style: {
				text: '⬛ Blackout',
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(50, 50, 50),
			},
			steps: [
				{
					down: [{ actionId: 'blackoutToggle' }],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'blackout',
					style: {
						bgcolor: combineRgb(0, 0, 0),
						color: combineRgb(255, 0, 0),
						text: '⬛ Blackout',
					},
				},
			],
		}

		presets['flash'] = {
			type: 'button',
			category: 'Display',
			name: 'Flash Display',
			style: {
				text: '⚡ Flash',
				size: '18',
				color: combineRgb(0, 0, 0),
				bgcolor: combineRgb(255, 255, 0),
			},
			steps: [
				{
					down: [{ actionId: 'flash' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// =============================================
		// 4. Messages — Message display controls
		// =============================================

		presets['hide_message'] = {
			type: 'button',
			category: 'Messages',
			name: 'Hide Message',
			style: {
				text: '✕ Hide',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(120, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'hideMessage' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// Show Message Buttons (1-4)
		for (let i = 1; i <= 4; i++) {
			presets[`message_${i}`] = {
				type: 'button',
				category: 'Messages',
				name: `Show Message ${i}`,
				style: {
					text: `Msg ${i}`,
					size: '18',
					color: combineRgb(255, 255, 255),
					bgcolor: combineRgb(140, 0, 140),
				},
				steps: [
					{
						down: [{ actionId: 'showMessage', options: { index: i } }],
						up: [],
					},
				],
				feedbacks: [],
			}
		}

		// =============================================
		// 5. Profiles — Profile nav + settings
		// =============================================

		presets['next_profile'] = {
			type: 'button',
			category: 'Profiles',
			name: 'Next Profile',
			style: {
				text: 'Next ▸',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(100, 0, 150),
			},
			steps: [
				{
					down: [{ actionId: 'nextProfile' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['prev_profile'] = {
			type: 'button',
			category: 'Profiles',
			name: 'Previous Profile',
			style: {
				text: '◂ Prev',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(100, 0, 150),
			},
			steps: [
				{
					down: [{ actionId: 'previousProfile' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['profile_display'] = {
			type: 'button',
			category: 'Profiles',
			name: 'Profile Name',
			style: {
				text: '$(ninja:profile_name)',
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(50, 0, 70),
			},
			steps: [],
			feedbacks: [],
		}

		presets['overtime_toggle'] = {
			type: 'button',
			category: 'Profiles',
			name: 'Overtime Toggle',
			style: {
				text: 'Overtime',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(50, 50, 50),
			},
			steps: [
				{
					down: [{ actionId: 'toggleOvertime' }],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'overtimeAllowed',
					style: {
						bgcolor: combineRgb(200, 100, 0),
						text: 'Overtime',
					},
				},
			],
		}

		presets['scheduled_indicator'] = {
			type: 'button',
			category: 'Profiles',
			name: 'Scheduled Timer',
			style: {
				text: 'Sched',
				size: '18',
				color: combineRgb(150, 150, 150),
				bgcolor: combineRgb(50, 50, 50),
			},
			steps: [],
			feedbacks: [
				{
					feedbackId: 'hasTargetTime',
					style: {
						bgcolor: combineRgb(100, 50, 150),
						color: combineRgb(255, 255, 255),
						text: 'Sched',
					},
				},
			],
		}

		return presets
	},
}
