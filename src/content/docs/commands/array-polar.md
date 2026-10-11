---
title: "ArrayPolar Command — Copy Objects Round a Center Point in KulmanLab CAD"
description: "The ArrayPolar command copies the selected objects round a center point — a set number of items spread over a full turn or part of one, with copies that turn as they go round or keep their own orientation."
keywords: ["CAD polar array", "circular pattern CAD", "copy objects around a point CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

The `ArrayPolar` command makes copies of the selected objects round a center point, spread evenly over a full turn or part of one. The original is the first item; every other item is a copy, rotated about the center — or only moved round it, if you turn Rotate off.

## Drawing a polar array

1. Select the objects, then type `arraypolar` in the terminal or click the **Array Polar** toolbar button. Started with nothing selected, it asks you to select them first — press **Enter** or **Space** to confirm.
2. **Click the center** the copies go round, or type `X,Y` and press **Enter** for an exact coordinate.
3. Review the array. All the copies preview live, and the terminal shows `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — press an option's letter to change it.
4. Press **Enter** or **Space** to create the copies. The originals stay where they are and the selection is cleared.

## Options

| Option | Key | Effect |
|---|---|---|
| Items | `I` | How many items there are, the original included — a whole number from 2 to 1024. Starts at 6. |
| Angle | `A` | Degrees from one item to the next, counter-clockwise; a negative angle runs clockwise. Up to 180°. |
| Fill | `F` | Degrees from the first item to the last. 360 (the default) is a full turn; a smaller number spreads the items over part of one. Negative runs clockwise. Up to 360°. |
| Rotate | `R` | On (the default): each copy turns as it goes round. Off: each copy is moved to its place and faces the way the original does. It flips on the spot — there is no number to type. |

- Angle and Fill are two ways of stating the same thing, so changing one restates the other. Over a full turn the last item stops one step short of the first; over part of a turn it lands exactly at the fill angle.
- To change a number, press its option's letter. The prompt is pre-filled with the current value — type to replace it, then press **Enter** or **Space**; confirming it unchanged leaves the array as it was.
- Items takes whole numbers only; Angle and Fill take decimals, and a leading `-` for clockwise. An angle or fill of 0 is refused, and so is an angle over 180° or a fill over 360° — the terminal says why.
- An Angle too small to fit every item drops the ones with no room, and the terminal reports the new count.
- Works on every entity type: each copy is the original rotated about the center, or moved, exactly as [Rotate](../rotate/) and [Move](../move/) would do it.

## Keyboard reference

| Key | Action |
|---|---|
| `Enter` / `Space` | Confirm the selection, the array, or a typed number |
| `I` `A` `F` `R` | Change Items, Angle or Fill by typing a number; flip Rotate |
| `0`–`9`, `.`, `-` | Type the number (`.` and `-` only for Angle and Fill, with `-` first) |
| `Backspace` | Delete the last typed character |
| `Escape` | Cancel |
