const { combineRgb } = require('@companion-module/base')

module.exports = {
	getFeedbacks(self) {
		return {
			running: {
				type: 'boolean',
				name: 'Timer Running',
				description: 'Change button appearance when timer is running',
				defaultStyle: {
					bgcolor: combineRgb(0, 200, 0),
					color: combineRgb(0, 0, 0),
				},
				options: [],
				callback: () => {
					return self.state.running
				},
			},
			paused: {
				type: 'boolean',
				name: 'Timer Paused',
				description: 'Change button appearance when timer is paused',
				defaultStyle: {
					bgcolor: combineRgb(200, 200, 0),
					color: combineRgb(0, 0, 0),
				},
				options: [],
				callback: () => {
					return !self.state.running && !self.state.ended && self.state.elapsed > 0
				},
			},
			ended: {
				type: 'boolean',
				name: 'Timer Ended',
				description: 'Change button appearance when timer has ended',
				defaultStyle: {
					bgcolor: combineRgb(200, 0, 0),
					color: combineRgb(255, 255, 255),
				},
				options: [],
				callback: () => {
					return self.state.ended
				},
			},
			overtime: {
				type: 'boolean',
				name: 'Timer Overtime',
				description: 'Change button appearance when timer is in overtime',
				defaultStyle: {
					bgcolor: combineRgb(200, 0, 0),
					color: combineRgb(255, 255, 255),
				},
				options: [],
				callback: () => {
					return self.state.overtime
				},
			},
			blackout: {
				type: 'boolean',
				name: 'Blackout Active',
				description: 'Change button appearance when blackout is active',
				defaultStyle: {
					bgcolor: combineRgb(0, 0, 0),
					color: combineRgb(255, 0, 0),
				},
				options: [],
				callback: () => {
					return self.state.blackout
				},
			},
			warning: {
				type: 'boolean',
				name: 'Warning State (Yellow/Orange)',
				description: 'Change button appearance based on remaining time',
				defaultStyle: {
					bgcolor: combineRgb(255, 165, 0),
					color: combineRgb(0, 0, 0),
				},
				options: [
					{
						type: 'number',
						label: 'Warning Threshold (seconds)',
						id: 'threshold',
						default: 60,
						min: 1,
						max: 3600,
					},
				],
				callback: (feedback) => {
					return self.state.remaining > 0 && self.state.remaining <= feedback.options.threshold
				},
			},
			timerSelected: {
				type: 'boolean',
				name: 'Timer Selected',
				description: 'Change button appearance when a specific timer is selected',
				defaultStyle: {
					bgcolor: combineRgb(0, 100, 200),
					color: combineRgb(255, 255, 255),
				},
				options: [
					{
						type: 'number',
						label: 'Timer Number (1-based)',
						id: 'index',
						default: 1,
						min: 1,
						max: 100,
					},
				],
				callback: (feedback) => {
					return self.state.timerIndex === feedback.options.index
				},
			},
			profileSelected: {
				type: 'boolean',
				name: 'Profile Selected',
				description: 'Change button appearance when a specific profile is selected',
				defaultStyle: {
					bgcolor: combineRgb(100, 0, 200),
					color: combineRgb(255, 255, 255),
				},
				options: [
					{
						type: 'number',
						label: 'Profile Number (1-based)',
						id: 'index',
						default: 1,
						min: 1,
						max: 100,
					},
				],
				callback: (feedback) => {
					return self.state.profileIndex === feedback.options.index
				},
			},
			// Warning zone feedbacks
			warningYellow: {
				type: 'boolean',
				name: 'Yellow Warning Zone',
				description: 'Change button appearance when in yellow warning zone',
				defaultStyle: {
					bgcolor: combineRgb(255, 255, 0),
					color: combineRgb(0, 0, 0),
				},
				options: [],
				callback: () => {
					const remaining = self.state.remaining
					const yellowThreshold = self.state.warnYellowSec
					const orangeThreshold = self.state.warnOrangeSec
					return remaining > 0 && remaining <= yellowThreshold && remaining > orangeThreshold
				},
			},
			warningOrange: {
				type: 'boolean',
				name: 'Orange Warning Zone',
				description: 'Change button appearance when in orange warning zone',
				defaultStyle: {
					bgcolor: combineRgb(255, 165, 0),
					color: combineRgb(0, 0, 0),
				},
				options: [],
				callback: () => {
					const remaining = self.state.remaining
					const orangeThreshold = self.state.warnOrangeSec
					return remaining > 0 && remaining <= orangeThreshold
				},
			},
			// Timer mode feedbacks
			modeCountdown: {
				type: 'boolean',
				name: 'Mode: Countdown',
				description: 'Change button appearance when timer is in countdown mode',
				defaultStyle: {
					bgcolor: combineRgb(0, 100, 200),
					color: combineRgb(255, 255, 255),
				},
				options: [],
				callback: () => {
					return self.state.timerMode === 'countdown'
				},
			},
			modeCountup: {
				type: 'boolean',
				name: 'Mode: Count Up',
				description: 'Change button appearance when timer is in count up mode',
				defaultStyle: {
					bgcolor: combineRgb(0, 150, 100),
					color: combineRgb(255, 255, 255),
				},
				options: [],
				callback: () => {
					return self.state.timerMode === 'countup'
				},
			},
			modeTod: {
				type: 'boolean',
				name: 'Mode: Time of Day',
				description: 'Change button appearance when timer is in time of day mode',
				defaultStyle: {
					bgcolor: combineRgb(150, 100, 0),
					color: combineRgb(255, 255, 255),
				},
				options: [],
				callback: () => {
					return (
						self.state.timerMode === 'tod' ||
						self.state.timerMode === 'countdown-tod' ||
						self.state.timerMode === 'countup-tod'
					)
				},
			},
			// Schedule feedback
			hasTargetTime: {
				type: 'boolean',
				name: 'Has Scheduled Time',
				description: 'Change button appearance when timer has a scheduled start/end time',
				defaultStyle: {
					bgcolor: combineRgb(100, 50, 150),
					color: combineRgb(255, 255, 255),
				},
				options: [],
				callback: () => {
					return self.state.startMode !== 'manual' && self.state.targetTime !== ''
				},
			},
			// Overtime feedback
			overtimeAllowed: {
				type: 'boolean',
				name: 'Overtime Allowed',
				description: 'Change button appearance when overtime is enabled',
				defaultStyle: {
					bgcolor: combineRgb(200, 100, 0),
					color: combineRgb(255, 255, 255),
				},
				options: [],
				callback: () => {
					return self.state.allowOvertime
				},
			},
			// Theme feedbacks
			themeLight: {
				type: 'boolean',
				name: 'Theme: Light',
				description: 'Change button appearance when light theme is active',
				defaultStyle: {
					bgcolor: combineRgb(255, 255, 255),
					color: combineRgb(0, 0, 0),
				},
				options: [],
				callback: () => {
					return self.state.theme === 'light'
				},
			},
			themeDark: {
				type: 'boolean',
				name: 'Theme: Dark',
				description: 'Change button appearance when dark theme is active',
				defaultStyle: {
					bgcolor: combineRgb(30, 30, 30),
					color: combineRgb(255, 255, 255),
				},
				options: [],
				callback: () => {
					return self.state.theme === 'dark'
				},
			},
		}
	},
}
