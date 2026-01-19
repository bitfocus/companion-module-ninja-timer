module.exports = {
	getVariables() {
		return [
			{
				variableId: 'time',
				name: 'Current Time Display',
			},
			{
				variableId: 'remaining',
				name: 'Seconds Remaining',
			},
			{
				variableId: 'elapsed',
				name: 'Seconds Elapsed',
			},
			{
				variableId: 'progress',
				name: 'Progress Percentage (0-100)',
			},
			{
				variableId: 'timer_name',
				name: 'Active Timer Name',
			},
			{
				variableId: 'timer_index',
				name: 'Active Timer Number',
			},
			{
				variableId: 'profile_name',
				name: 'Active Profile Name',
			},
			{
				variableId: 'profile_index',
				name: 'Active Profile Number',
			},
			{
				variableId: 'state',
				name: 'Timer State (Running/Stopped/Ended)',
			},
			// Warning thresholds
			{
				variableId: 'warn_yellow_sec',
				name: 'Yellow Warning Threshold (sec)',
			},
			{
				variableId: 'warn_orange_sec',
				name: 'Orange Warning Threshold (sec)',
			},
			// Timer mode and format
			{
				variableId: 'timer_mode',
				name: 'Timer Mode',
			},
			{
				variableId: 'time_format',
				name: 'Time Format (MM:SS or HH:MM:SS)',
			},
			// Sound settings
			{
				variableId: 'sound_type',
				name: 'End Sound Type',
			},
			{
				variableId: 'sound_volume',
				name: 'Sound Volume (0-1)',
			},
			// Start mode
			{
				variableId: 'start_mode',
				name: 'Start Mode (manual/endBy/startAt)',
			},
			{
				variableId: 'target_time',
				name: 'Target Time',
			},
			// Settings
			{
				variableId: 'allow_overtime',
				name: 'Allow Overtime',
			},
			// Appearance
			{
				variableId: 'font_family',
				name: 'Font Family',
			},
			{
				variableId: 'font_weight',
				name: 'Font Weight',
			},
			// Theme
			{
				variableId: 'theme',
				name: 'Theme (light/dark)',
			},
			// Style colors
			{
				variableId: 'font_color',
				name: 'Font Color',
			},
			{
				variableId: 'bg_color',
				name: 'Background Color',
			},
			{
				variableId: 'stroke_width',
				name: 'Stroke Width (px)',
			},
			{
				variableId: 'stroke_color',
				name: 'Stroke Color',
			},
			{
				variableId: 'shadow_size',
				name: 'Shadow Size (px)',
			},
			{
				variableId: 'shadow_color',
				name: 'Shadow Color',
			},
			// Duration
			{
				variableId: 'duration',
				name: 'Total Duration (seconds)',
			},
			{
				variableId: 'duration_formatted',
				name: 'Total Duration (formatted)',
			},
			// Formatted times
			{
				variableId: 'remaining_formatted',
				name: 'Remaining Time (MM:SS)',
			},
			{
				variableId: 'elapsed_formatted',
				name: 'Elapsed Time (MM:SS)',
			},
		]
	},
}
