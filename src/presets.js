const { combineRgb } = require('@companion-module/base')

module.exports = {
	getPresets() {
		const presets = {}

		// Play/Pause Toggle
		presets['toggle'] = {
			type: 'button',
			category: 'Timer Control',
			name: 'Play/Pause Toggle',
			style: {
				text: 'PLAY\\nPAUSE',
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
						text: 'PAUSE',
					},
				},
				{
					feedbackId: 'paused',
					style: {
						bgcolor: combineRgb(200, 200, 0),
						text: 'RESUME',
					},
				},
			],
		}

		// Start Button
		presets['start'] = {
			type: 'button',
			category: 'Timer Control',
			name: 'Start Timer',
			style: {
				text: 'START',
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

		// Pause Button
		presets['pause'] = {
			type: 'button',
			category: 'Timer Control',
			name: 'Pause Timer',
			style: {
				text: 'PAUSE',
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

		// Reset Button
		presets['reset'] = {
			type: 'button',
			category: 'Timer Control',
			name: 'Reset Timer',
			style: {
				text: 'RESET',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(100, 100, 100),
			},
			steps: [
				{
					down: [{ actionId: 'reset' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// Stop Button
		presets['stop'] = {
			type: 'button',
			category: 'Timer Control',
			name: 'Stop Timer',
			style: {
				text: 'STOP',
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

		// Timer Display
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

		// Timer Name Display
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

		// Blackout Toggle
		presets['blackout'] = {
			type: 'button',
			category: 'Display Control',
			name: 'Blackout Toggle',
			style: {
				text: 'BLACK\\nOUT',
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
						text: 'BLACK\\nOUT',
					},
				},
			],
		}

		// Flash
		presets['flash'] = {
			type: 'button',
			category: 'Display Control',
			name: 'Flash Display',
			style: {
				text: 'FLASH',
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

		// Next Timer
		presets['next_timer'] = {
			type: 'button',
			category: 'Timer Selection',
			name: 'Next Timer',
			style: {
				text: 'NEXT\\nTIMER',
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 100),
			},
			steps: [
				{
					down: [{ actionId: 'nextTimer' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// Previous Timer
		presets['prev_timer'] = {
			type: 'button',
			category: 'Timer Selection',
			name: 'Previous Timer',
			style: {
				text: 'PREV\\nTIMER',
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 100),
			},
			steps: [
				{
					down: [{ actionId: 'previousTimer' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// Add 1 Minute
		presets['add_1min'] = {
			type: 'button',
			category: 'Duration Control',
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

		// Subtract 1 Minute
		presets['sub_1min'] = {
			type: 'button',
			category: 'Duration Control',
			name: 'Subtract 1 Minute',
			style: {
				text: '-1:00',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(100, 50, 0),
			},
			steps: [
				{
					down: [{ actionId: 'addDuration', options: { amount: -60 } }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// Timer Select Buttons (1-5)
		for (let i = 1; i <= 5; i++) {
			presets[`timer_${i}`] = {
				type: 'button',
				category: 'Timer Selection',
				name: `Select Timer ${i}`,
				style: {
					text: `Timer\\n${i}`,
					size: '14',
					color: combineRgb(255, 255, 255),
					bgcolor: combineRgb(0, 50, 100),
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

		// Hide Message
		presets['hide_message'] = {
			type: 'button',
			category: 'Messages',
			name: 'Hide Message',
			style: {
				text: 'HIDE\\nMSG',
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(100, 0, 0),
			},
			steps: [
				{
					down: [{ actionId: 'hideMessage' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// Show Message Buttons (1-3)
		for (let i = 1; i <= 3; i++) {
			presets[`message_${i}`] = {
				type: 'button',
				category: 'Messages',
				name: `Show Message ${i}`,
				style: {
					text: `MSG\\n${i}`,
					size: '14',
					color: combineRgb(255, 255, 255),
					bgcolor: combineRgb(100, 0, 100),
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

		// Warning Zone Indicator
		presets['warning_indicator'] = {
			type: 'button',
			category: 'Status',
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

		// Timer Mode Display
		presets['mode_display'] = {
			type: 'button',
			category: 'Status',
			name: 'Timer Mode',
			style: {
				text: '$(ninja:timer_mode)',
				size: '14',
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

		// Timer State Display
		presets['state_display'] = {
			type: 'button',
			category: 'Status',
			name: 'Timer State',
			style: {
				text: '$(ninja:state)',
				size: '14',
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

		// Overtime Toggle
		presets['overtime_toggle'] = {
			type: 'button',
			category: 'Settings',
			name: 'Overtime Toggle',
			style: {
				text: 'OVERTIME\\nOFF',
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(80, 80, 80),
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
						text: 'OVERTIME\\nON',
					},
				},
			],
		}

		// Scheduled Timer Indicator
		presets['scheduled_indicator'] = {
			type: 'button',
			category: 'Status',
			name: 'Scheduled Timer',
			style: {
				text: 'NOT\\nSCHED',
				size: '14',
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
						text: 'SCHED',
					},
				},
			],
		}

		// Profile Navigation
		presets['next_profile'] = {
			type: 'button',
			category: 'Profile',
			name: 'Next Profile',
			style: {
				text: 'NEXT\\nPROFILE',
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(100, 0, 100),
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
			category: 'Profile',
			name: 'Previous Profile',
			style: {
				text: 'PREV\\nPROFILE',
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(100, 0, 100),
			},
			steps: [
				{
					down: [{ actionId: 'previousProfile' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// Profile Name Display
		presets['profile_display'] = {
			type: 'button',
			category: 'Profile',
			name: 'Profile Name',
			style: {
				text: '$(ninja:profile_name)',
				size: '14',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [],
			feedbacks: [],
		}

		// Quick Duration Buttons
		presets['duration_5min'] = {
			type: 'button',
			category: 'Duration Control',
			name: '5 Minutes',
			style: {
				text: '5:00',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 80, 80),
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
			category: 'Duration Control',
			name: '10 Minutes',
			style: {
				text: '10:00',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 80, 80),
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
			category: 'Duration Control',
			name: '15 Minutes',
			style: {
				text: '15:00',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 80, 80),
			},
			steps: [
				{
					down: [{ actionId: 'setDuration15min' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['duration_30min'] = {
			type: 'button',
			category: 'Duration Control',
			name: '30 Minutes',
			style: {
				text: '30:00',
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 80, 80),
			},
			steps: [
				{
					down: [{ actionId: 'setDuration30min' }],
					up: [],
				},
			],
			feedbacks: [],
		}

		// Duration Display
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

		return presets
	},
}
