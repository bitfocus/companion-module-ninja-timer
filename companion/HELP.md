# Ninja Timer Companion Module

Control [Ninja Timer](https://github.com/madebyjamstudios/ninja-timer) - a professional countdown/countup timer for broadcasts and presentations.

## Configuration

### Enable OSC in Ninja Timer

1. Open Ninja Timer
2. Go to **App Settings** (gear icon)
3. In the **OSC Integration** section:
   - Set **OSC Control** to **Enabled**
   - Note the **Listen Port** (default: 8000)
   - Enable **Send Feedback** if you want button feedback
   - Set **Feedback Port** to match Companion's receive port (default: 9000)

### Companion Connection Settings

- **Ninja Timer IP Address**: The IP of the computer running Ninja Timer (use `127.0.0.1` if on same machine)
- **Send Port**: Must match Ninja Timer's Listen Port (default: 8000)
- **Receive Port**: Must match Ninja Timer's Feedback Port (default: 9000)
- **Receive Feedback**: Enable to get button state updates

## Actions

### Timer Control

- **Start Timer** - Start the active timer
- **Pause Timer** - Pause the running timer
- **Resume Timer** - Resume a paused timer
- **Toggle Play/Pause** - Toggle between play and pause
- **Reset Timer** - Reset to initial duration
- **Stop Timer** - Stop and reset timer

### Timer Selection

- **Select Timer by Number** - Select timer (1-based index)
- **Select Timer by Name** - Select timer by exact name
- **Next Timer** - Select next timer in list
- **Previous Timer** - Select previous timer in list

### Duration Control

- **Set Duration** - Set timer duration in seconds
- **Add/Subtract Duration** - Add or subtract seconds from duration

### Display Control

- **Blackout On/Off/Toggle** - Control blackout state
- **Flash Display** - Trigger a flash effect

### Messages

- **Show Message by Number** - Show message (1-based index)
- **Show Message by Text** - Show message by partial text match
- **Hide Message** - Hide current message

### Profiles

- **Select Profile by Number** - Switch profile (1-based index)
- **Select Profile by Name** - Switch profile by exact name

## Feedbacks

- **Timer Running** - Green when timer is running
- **Timer Paused** - Yellow when timer is paused
- **Timer Ended** - Red when timer has ended
- **Timer Overtime** - Red when in overtime
- **Blackout Active** - Indicates blackout state
- **Warning State** - Configurable threshold warning
- **Timer Selected** - Highlight selected timer button
- **Profile Selected** - Highlight selected profile button

## Variables

| Variable                 | Description                          |
| ------------------------ | ------------------------------------ |
| `$(ninja:time)`          | Current time display (e.g., "05:30") |
| `$(ninja:remaining)`     | Seconds remaining                    |
| `$(ninja:elapsed)`       | Seconds elapsed                      |
| `$(ninja:progress)`      | Progress percentage (0-100)          |
| `$(ninja:timer_name)`    | Active timer name                    |
| `$(ninja:timer_index)`   | Active timer number                  |
| `$(ninja:profile_name)`  | Active profile name                  |
| `$(ninja:profile_index)` | Active profile number                |
| `$(ninja:state)`         | Timer state (Running/Stopped/Ended)  |

## Presets

The module includes ready-to-use button presets:

- **Play/Pause Toggle** - With state indicator
- **Start/Pause/Reset/Stop** - Individual control buttons
- **Time Display** - Shows current time with color feedback
- **Timer Name** - Shows active timer name
- **Blackout Toggle** - With state indicator
- **Flash** - Trigger flash effect
- **Next/Previous Timer** - Navigation buttons
- **+1:00 / -1:00** - Quick duration adjustments
- **Timer 1-5** - Select specific timers with selection feedback
- **Message 1-3** - Show specific messages
- **Hide Message** - Hide current message

## Troubleshooting

### Connection Issues

1. Verify Ninja Timer is running
2. Check OSC is enabled in Ninja Timer settings
3. Verify ports match between Companion and Ninja Timer
4. If on different computers, check firewall allows UDP on configured ports

### No Feedback

1. Enable "Send Feedback" in Ninja Timer settings
2. Enable "Receive Feedback" in Companion module settings
3. Verify Feedback Port in Ninja Timer matches Receive Port in Companion
