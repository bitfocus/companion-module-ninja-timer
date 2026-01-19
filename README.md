# Ninja Timer - Bitfocus Companion Module

Control Ninja Timer from Bitfocus Companion with full bidirectional communication via OSC.

## Installation

### Development Installation (Until Official Release)

1. In Companion, go to Settings (cog icon)
2. Set "Developer modules path" to a folder on your computer
3. Copy the `companion-module` folder to that location, renamed to `ninja-timer`:
   ```
   your-dev-folder/
   └── ninja-timer/
       ├── index.js
       ├── actions.js
       ├── feedbacks.js
       ├── variables.js
       ├── presets.js
       └── package.json
   ```
4. Restart Companion
5. Add a new connection and search for "Ninja Timer"

## Configuration

| Setting              | Default   | Description                                                  |
| -------------------- | --------- | ------------------------------------------------------------ |
| **Ninja Timer IP**   | 127.0.0.1 | IP address of computer running Ninja Timer                   |
| **Send Port**        | 8000      | Port Ninja Timer listens on (match OSC Listen Port in app)   |
| **Receive Port**     | 9000      | Port for receiving feedback (match OSC Feedback Port in app) |
| **Receive Feedback** | Yes       | Enable to receive state updates from Ninja Timer             |

**Important**: Enable OSC in Ninja Timer's App Settings and ensure ports match.

## Actions

### Timer Control

| Action                | Description                   |
| --------------------- | ----------------------------- |
| **Start Timer**       | Start the active timer        |
| **Pause Timer**       | Pause the running timer       |
| **Resume Timer**      | Resume a paused timer         |
| **Toggle Play/Pause** | Toggle between play and pause |
| **Reset Timer**       | Reset timer to beginning      |
| **Stop Timer**        | Stop and reset the timer      |

### Timer Selection

| Action                     | Options                | Description                   |
| -------------------------- | ---------------------- | ----------------------------- |
| **Select Timer by Number** | Timer Number (1-based) | Select a specific timer       |
| **Select Timer by Name**   | Timer Name             | Select timer matching name    |
| **Next Timer**             |                        | Select the next timer in list |
| **Previous Timer**         |                        | Select the previous timer     |

### Duration Control

| Action                       | Options       | Description               |
| ---------------------------- | ------------- | ------------------------- |
| **Set Duration (seconds)**   | Duration      | Set timer duration        |
| **Add/Subtract Duration**    | Seconds (+/-) | Adjust duration by amount |
| **Set Duration: 5 Minutes**  |               | Quick preset: 5:00        |
| **Set Duration: 10 Minutes** |               | Quick preset: 10:00       |
| **Set Duration: 15 Minutes** |               | Quick preset: 15:00       |
| **Set Duration: 30 Minutes** |               | Quick preset: 30:00       |

### Display Control

| Action              | Description           |
| ------------------- | --------------------- |
| **Blackout On**     | Enable blackout       |
| **Blackout Off**    | Disable blackout      |
| **Blackout Toggle** | Toggle blackout state |
| **Flash Display**   | Trigger flash effect  |

### Message Control

| Action                     | Options              | Description                  |
| -------------------------- | -------------------- | ---------------------------- |
| **Show Message by Number** | Message Number       | Show specific message        |
| **Show Message by Text**   | Text (partial match) | Show message containing text |
| **Hide Message**           |                      | Hide current message         |

### Profile Control

| Action                       | Options        | Description                |
| ---------------------------- | -------------- | -------------------------- |
| **Select Profile by Number** | Profile Number | Switch to specific profile |
| **Select Profile by Name**   | Profile Name   | Switch to profile by name  |
| **Next Profile**             |                | Switch to next profile     |
| **Previous Profile**         |                | Switch to previous profile |

### Timer Settings

| Action              | Options             | Description                           |
| ------------------- | ------------------- | ------------------------------------- |
| **Set Timer Mode**  | Mode dropdown       | Change timer mode                     |
| **Set End Sound**   | Sound type dropdown | Set the end sound                     |
| **Set Start Mode**  | Mode dropdown       | Set start mode (manual/endBy/startAt) |
| **Set Target Time** | Time string         | Set scheduled time                    |
| **Toggle Overtime** |                     | Toggle overtime setting               |
| **Set Overtime**    | On/Off              | Enable or disable overtime            |

## Feedbacks

### Timer State

| Feedback           | Default Style     | Condition                                                  |
| ------------------ | ----------------- | ---------------------------------------------------------- |
| **Timer Running**  | Green background  | Timer is running                                           |
| **Timer Paused**   | Yellow background | Timer is paused (not running, not ended, has elapsed time) |
| **Timer Ended**    | Red background    | Timer has reached zero                                     |
| **Timer Overtime** | Red background    | Timer is counting past zero                                |

### Warning Zones

| Feedback                | Default Style         | Condition                                                 |
| ----------------------- | --------------------- | --------------------------------------------------------- |
| **Yellow Warning Zone** | Yellow (#FFFF00)      | Remaining time <= yellow threshold AND > orange threshold |
| **Orange Warning Zone** | Orange (#FFA500)      | Remaining time <= orange threshold                        |
| **Warning State**       | Orange (configurable) | Remaining time <= custom threshold                        |

### Display State

| Feedback            | Default Style       | Condition           |
| ------------------- | ------------------- | ------------------- |
| **Blackout Active** | Black with red text | Blackout is enabled |

### Timer Mode

| Feedback              | Default Style    | Condition               |
| --------------------- | ---------------- | ----------------------- |
| **Mode: Countdown**   | Blue background  | Timer mode is countdown |
| **Mode: Count Up**    | Teal background  | Timer mode is countup   |
| **Mode: Time of Day** | Brown background | Timer mode includes ToD |

### Selection

| Feedback             | Options        | Condition                  |
| -------------------- | -------------- | -------------------------- |
| **Timer Selected**   | Timer Number   | Specific timer is active   |
| **Profile Selected** | Profile Number | Specific profile is active |

### Settings State

| Feedback               | Default Style     | Condition                 |
| ---------------------- | ----------------- | ------------------------- |
| **Has Scheduled Time** | Purple background | Timer has target time set |
| **Overtime Allowed**   | Orange background | Overtime is enabled       |
| **Theme: Light**       | White background  | Light theme active        |
| **Theme: Dark**        | Dark background   | Dark theme active         |

## Variables

### Time Display

| Variable                       | Description                 | Example |
| ------------------------------ | --------------------------- | ------- |
| `$(ninja:time)`                | Current time display        | `05:30` |
| `$(ninja:remaining)`           | Seconds remaining           | `330`   |
| `$(ninja:elapsed)`             | Seconds elapsed             | `270`   |
| `$(ninja:remaining_formatted)` | Remaining as MM:SS          | `05:30` |
| `$(ninja:elapsed_formatted)`   | Elapsed as MM:SS            | `04:30` |
| `$(ninja:progress)`            | Progress percentage (0-100) | `45`    |
| `$(ninja:duration)`            | Total duration in seconds   | `600`   |
| `$(ninja:duration_formatted)`  | Duration as MM:SS           | `10:00` |

### Timer Info

| Variable               | Description         | Example                         |
| ---------------------- | ------------------- | ------------------------------- |
| `$(ninja:timer_name)`  | Active timer name   | `Opening`                       |
| `$(ninja:timer_index)` | Active timer number | `1`                             |
| `$(ninja:state)`       | Timer state         | `Running` / `Stopped` / `Ended` |
| `$(ninja:timer_mode)`  | Current mode        | `countdown`                     |
| `$(ninja:time_format)` | Display format      | `MM:SS`                         |

### Profile Info

| Variable                 | Description           | Example  |
| ------------------------ | --------------------- | -------- |
| `$(ninja:profile_name)`  | Active profile name   | `Show A` |
| `$(ninja:profile_index)` | Active profile number | `1`      |

### Warning Thresholds

| Variable                   | Description                | Example |
| -------------------------- | -------------------------- | ------- |
| `$(ninja:warn_yellow_sec)` | Yellow threshold (seconds) | `60`    |
| `$(ninja:warn_orange_sec)` | Orange threshold (seconds) | `15`    |

### Sound Settings

| Variable                | Description        | Example |
| ----------------------- | ------------------ | ------- |
| `$(ninja:sound_type)`   | End sound type     | `chime` |
| `$(ninja:sound_volume)` | Volume level (0-1) | `0.7`   |

### Start Mode

| Variable               | Description    | Example            |
| ---------------------- | -------------- | ------------------ |
| `$(ninja:start_mode)`  | Start mode     | `manual`           |
| `$(ninja:target_time)` | Scheduled time | `2024-01-15T14:00` |

### Settings

| Variable                  | Description      | Example      |
| ------------------------- | ---------------- | ------------ |
| `$(ninja:allow_overtime)` | Overtime enabled | `Yes` / `No` |
| `$(ninja:theme)`          | Current theme    | `dark`       |

### Appearance

| Variable                | Description       | Example   |
| ----------------------- | ----------------- | --------- |
| `$(ninja:font_family)`  | Font name         | `Inter`   |
| `$(ninja:font_weight)`  | Font weight       | `700`     |
| `$(ninja:font_color)`   | Text color        | `#ffffff` |
| `$(ninja:bg_color)`     | Background color  | `#000000` |
| `$(ninja:stroke_width)` | Stroke width (px) | `0`       |
| `$(ninja:stroke_color)` | Stroke color      | `#000000` |
| `$(ninja:shadow_size)`  | Shadow size (px)  | `0`       |
| `$(ninja:shadow_color)` | Shadow color      | `#000000` |

## Presets

Ready-to-use button configurations organized by category:

### Timer Control

- **Play/Pause Toggle** - Changes appearance based on running/paused state
- **Start Timer** - Green start button
- **Pause Timer** - Yellow pause button
- **Reset Timer** - Gray reset button
- **Stop Timer** - Red stop button

### Display

- **Time Display** - Shows current time with color feedback for state
- **Timer Name** - Shows active timer name
- **Duration Display** - Shows total duration

### Display Control

- **Blackout Toggle** - Changes when blackout active
- **Flash Display** - Yellow flash trigger

### Timer Selection

- **Timer 1-5** - Quick select buttons with selection feedback
- **Next Timer** - Navigate forward
- **Previous Timer** - Navigate backward

### Duration Control

- **+1:00** - Add one minute
- **-1:00** - Subtract one minute
- **5:00 / 10:00 / 15:00 / 30:00** - Quick duration presets

### Messages

- **Message 1-3** - Show specific messages
- **Hide Message** - Hide current message

### Profile

- **Next Profile** - Navigate to next profile
- **Previous Profile** - Navigate to previous profile
- **Profile Name** - Display current profile name

### Status

- **Warning Zone Indicator** - Shows yellow/orange based on remaining time
- **Timer Mode** - Shows current mode with color feedback
- **Timer State** - Shows Running/Stopped/Ended with colors
- **Overtime Toggle** - Toggle with state feedback
- **Scheduled Timer** - Shows if timer has target time

## OSC Protocol Reference

### Commands (Send to Ninja Timer)

```
/ninja/timer/start
/ninja/timer/pause
/ninja/timer/resume
/ninja/timer/toggle
/ninja/timer/reset
/ninja/timer/stop
/ninja/timer/select [int: index]
/ninja/timer/select/name [string: name]
/ninja/timer/next
/ninja/timer/previous
/ninja/timer/duration [int: seconds]
/ninja/timer/duration/add [int: seconds]
/ninja/timer/mode [string: mode]
/ninja/timer/sound/type [string: type]
/ninja/timer/startMode [string: mode]
/ninja/timer/targetTime [string: time]
/ninja/timer/overtime [int: 0/1]
/ninja/timer/overtime/toggle
/ninja/display/blackout [int: 0/1]
/ninja/display/blackout/toggle
/ninja/display/flash
/ninja/profile/select [int: index]
/ninja/profile/select/name [string: name]
/ninja/profile/next
/ninja/profile/previous
/ninja/message/show [int: index]
/ninja/message/show/text [string: text]
/ninja/message/hide
```

### Feedback (Received from Ninja Timer)

```
/ninja/state/running [int: 0/1]
/ninja/state/time [string: display]
/ninja/state/remaining [int: seconds]
/ninja/state/elapsed [int: seconds]
/ninja/state/progress [float: 0-1]
/ninja/state/overtime [int: 0/1]
/ninja/state/ended [int: 0/1]
/ninja/state/blackout [int: 0/1]
/ninja/state/timer/name [string]
/ninja/state/timer/index [int]
/ninja/state/profile/name [string]
/ninja/state/profile/index [int]
/ninja/state/warn/yellow [int: seconds]
/ninja/state/warn/orange [int: seconds]
/ninja/state/mode [string]
/ninja/state/format [string]
/ninja/state/sound/type [string]
/ninja/state/sound/volume [float]
/ninja/state/startMode [string]
/ninja/state/targetTime [string]
/ninja/state/allowOvertime [int: 0/1]
/ninja/state/font/family [string]
/ninja/state/font/weight [int]
/ninja/state/font/color [string: hex]
/ninja/state/bg/color [string: hex]
/ninja/state/stroke/width [int]
/ninja/state/stroke/color [string: hex]
/ninja/state/shadow/size [int]
/ninja/state/shadow/color [string: hex]
/ninja/state/theme [string: light/dark]
/ninja/state/duration [int: seconds]
```

## Troubleshooting

### Module not appearing in Companion

- Ensure the folder is named correctly in your dev modules path
- Restart Companion after adding the module
- Check Companion logs for any loading errors

### No feedback from Ninja Timer

- Verify OSC is enabled in Ninja Timer's App Settings
- Check that ports match between Companion config and Ninja Timer
- Ensure "Receive Feedback" is enabled in Companion
- Verify the feedback host IP in Ninja Timer points to your Companion machine

### Commands not working

- Check that the Send Port matches Ninja Timer's Listen Port
- Verify the IP address is correct
- Check Companion logs for send errors

## Version History

### v1.2.0

- Added style/color variables (font, bg, stroke, shadow)
- Added profile navigation actions
- Added set mode action
- Added quick duration presets
- Added formatted time variables
- Added duration variable and display

### v1.1.0

- Added warning threshold feedbacks
- Added timer mode feedbacks
- Added sound, start mode, and overtime actions
- Added theme feedbacks
- Added 12 new variables

### v1.0.0

- Initial release
- Basic timer control
- Timer and profile selection
- Duration control
- Display control (blackout, flash)
- Message control
- Core feedbacks and variables
