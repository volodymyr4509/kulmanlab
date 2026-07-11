---
title: Leader+ Command — Add an Arrowhead Arm to an Existing Multileader in KulmanLab CAD
description: The Leader+ command adds a new arrowhead arm to an existing multileader. The new arm shares the dogleg, text, and all styling of the selected leader. Two clicks — select the leader, place the new tip.
keywords: [CAD leader add arm, leader+ command, add arrow to leader, multileader arm, kulmanlab]
group: markup
order: 2
---

# Leader+

The `leader+` command adds a new arrowhead arm to an existing multileader. The new arm points from the leader's existing dogleg to a new arrowhead tip you click. All styling — dogleg position, text, arrowhead type, and size — is inherited from the selected leader.

## Adding an arm

1. Type `leader+` in the terminal.
2. **Click an existing multileader** to select it.
3. **Click the new arrowhead tip**, or type `X,Y` and press **Enter** for an exact coordinate. A preview line shows from the cursor to the leader's dogleg.

The arm is placed and the command stays active — you can immediately click another leader to add more arms. Press **Enter**, **Space**, or **Escape** to finish.

```
  Before:                        After:
  ◄── arm 1                      ◄── arm 1
       \                               \
        ●──── dogleg ──── text          ●──── dogleg ──── text
                                       /
                                  arm 2 ──►  (new tip you clicked)
```

## Coordinate entry for the tip

Instead of clicking, you can type an exact position:

1. Type the X value.
2. Press `,` — the terminal confirms X is locked.
3. Type the Y value.
4. Press **Enter** to place.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start typing X coordinate |
| `,` | Lock X and move to Y entry |
| `Enter` | Confirm typed coordinate and place arm |
| `Enter` / `Space` | Finish (when no input is in progress) |
| `Escape` | Cancel and reset |

## Notes

- Only **Multileader** entities can be selected — clicking any other entity type does nothing.
- The new arm originates at the existing dogleg; you only choose where the arrowhead tip goes.
- There is no limit on the number of arms a multileader can have.

## Related commands

| Command | What it does |
|---------|-------------|
| [Leader](../leader/) | Create a brand-new multileader from scratch |
| [Leader−](../leader-remove/) | Remove an arm from a multileader that has two or more |
