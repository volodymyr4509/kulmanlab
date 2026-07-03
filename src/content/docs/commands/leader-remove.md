---
sidebar_position: 11
title: "Leader− Command — Remove an Arrowhead Arm from a Multileader in KulmanLab CAD"
description: "The Leader− command removes one arrowhead arm from a multileader that has two or more. Hover near the arm to remove — the closest arm is highlighted. The dogleg, text, and remaining arms are preserved."
keywords: [CAD leader remove arm, leader- command, remove arrow from leader, multileader arm delete, kulmanlab]
---

# Leader−

The `leader-` command removes one arrowhead arm from an existing multileader. The text label, dogleg, and all remaining arms are preserved — only the selected arm is deleted. A multileader with only one arm cannot have its arm removed.

## Removing an arm

1. Type `leader-` in the terminal.
2. **Click a multileader** that has two or more arms. If the clicked leader has only one arm, the terminal shows an error and waits for a valid selection.
3. **Move the cursor near the arm** you want to remove — the closest arm is highlighted with a marker.
4. **Click** to remove that arm.

The arm is removed and the command stays active — you can immediately click another leader (or the same one) to remove more arms. Press **Enter**, **Space**, or **Escape** to finish.

```
  Before:                   After:
  ◄── arm 1                 ◄── arm 1
       \                          \
        ●──── dogleg ──── text     ●──── dogleg ──── text
       /
  arm 2 ──►  ← this arm removed
```

## How the closest arm is determined

The command measures the perpendicular distance from the cursor to each arm's line segments (including the segment from the last arm point to the dogleg). The arm with the smallest distance is highlighted and will be removed on click.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Finish removing arms |
| `Escape` | Cancel and reset |

## Notes

- A leader with **only one arm** is protected — you must add an arm first before removing one.
- The dogleg position and text content are always preserved regardless of which arm is removed.

## Related commands

| Command | What it does |
|---------|-------------|
| [Leader](../leader/) | Create a new multileader from scratch |
| [Leader+](../leader-add/) | Add an arm to an existing multileader |
