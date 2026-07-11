---
title: Circle Command — Draw Circles by Center and Radius in KulmanLab CAD
description: The Circle command places a circle by clicking a center point and then clicking or typing the radius. Four cardinal grips let you resize the radius by dragging without re-running the command. Full DXF round-trip as CIRCLE entities.
keywords: [CAD circle command, draw circle CAD, circle radius input, resize circle grip, CIRCLE DXF entity, dimradius circle, kulmanlab]
group: shapes
order: 4
---

# Circle

The `circle` command draws a circle defined by a center point and a radius. After the center is clicked you can set the radius either by clicking a second point on the canvas or by typing an exact number — both options are live at the same time.

## Drawing a circle

1. Type `circle` in the terminal or click the **Circle** toolbar button.
2. **Click the center point**, or type `X,Y` and press **Enter** for an exact coordinate.
3. Set the radius — either:
   - **Click any point** on the canvas — the distance from the center becomes the radius, or
   - **Type the radius** and press **Enter** for an exact value.

The circle is placed immediately and the command exits.

```
  center ●
          \  radius line preview
           \
            ● ← click here, or type a number
```

While in the radius phase, the live preview shows the circle at the current cursor distance and also draws a radius line from center to the current point.

## Center coordinate entry

Instead of clicking, you can type the center position:

1. Type the X value.
2. Press `,` — the terminal shows `[X], [Y{cursor}]`.
3. Type the Y value.
4. Press **Enter** to place the center and advance to radius input.

## Typed radius input

After the center is placed, typing immediately builds up a radius value:

| Key | Action |
|-----|--------|
| `0`–`9`, `.` | Append digit to the radius value |
| `Backspace` | Delete the last typed character |
| `Enter` | Place the circle at the typed radius |

The accumulated value is shown in the terminal prompt (e.g. `enter radius of circle: 25`). The preview updates to show the typed radius while the cursor controls the direction of the radius line marker.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X coordinate entry (center phase), or radius digit (radius phase) |
| `,` | Lock X and move to Y entry (center phase) |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm typed coordinate or radius |
| `Escape` | Cancel and reset |

## Grip editing — resizing the radius

A selected circle exposes five grips:

| Grip | Position | What it does |
|------|----------|--------------|
| **Center** | Center point | Moves the whole circle; radius stays unchanged |
| **Left** | Leftmost point (center − radius) | Drag to set a new radius = distance to center |
| **Right** | Rightmost point (center + radius) | Drag to set a new radius = distance to center |
| **Top** | Topmost point | Drag to set a new radius = distance to center |
| **Bottom** | Bottommost point | Drag to set a new radius = distance to center |

All four cardinal grips behave identically — the new radius equals the distance from the center to the drag position. The center stays fixed.

## Selecting circles

| Method | Behaviour |
|--------|-----------|
| **Click** | Selects if the click lands near the circumference |
| **Drag right** (strict) | The entire bounding square (center ± radius) must lie inside the box |
| **Drag left** (crossing) | Any part of the circumference that crosses or touches the box boundary selects the circle |

## Supported edit commands

| Command | What happens to the circle |
|---------|---------------------------|
| [Move](../move/) | Translates the center; radius unchanged |
| [Copy](../copy/) | Creates an identical circle at a new center |
| [Rotate](../rotate/) | Rotates the center around the base point; radius unchanged |
| [Mirror](../mirror/) | Reflects the center across the mirror axis; radius unchanged |
| [Scale](../scale/) | Scales the center position and multiplies the radius by the scale factor |
| [Offset](../offset/) | Creates a concentric circle at a larger or smaller radius |
| [Delete](../delete/) | Removes the circle |

## Properties

**General**

| Property | Default | Meaning |
|----------|---------|---------|
| Color | 256 (ByLayer) | ACI color index |
| Layer | `0` | Layer assignment |
| Linetype | ByLayer | Named linetype pattern |
| Linetype Scale | 1 | Scale factor on the linetype pattern |
| Thickness | 0 | Extrusion thickness |

**Geometry**

| Property | Meaning |
|----------|---------|
| Center X / Center Y | Coordinates of the center point |
| Radius | Circle radius in drawing units |

## Circle vs Arc — when to use which

| | Circle | Arc |
|---|--------|-----|
| Span | Full 360° | Partial — defined by start and end angle |
| How to draw | Center + radius | Three points on the curve |
| Typed input | Radius value | None — click-only |
| Resize grip | 4 cardinal points | Start and end points (angle + radius) |
| Dimensioning | Radius: [Dim Radius](../dim-radius/) · Diameter: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Best for | Full holes, bolt circles, round features | Fillets, partial curves, arched paths |

## DXF — CIRCLE entity

Circles are saved as `CIRCLE` entities in the DXF file. Center coordinates, radius, color, layer, linetype, linetype scale, and thickness all round-trip without loss. Any DXF-compatible application reads these as standard circles.
