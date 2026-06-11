---
sidebar_position: 5
title: Arc Command — Draw Three-Point Arcs Using the Circumcircle Method in KulmanLab CAD
description: The Arc command draws a circular arc through exactly three clicked points using circumcircle geometry. Start and end grips let you drag the arc endpoints to a new angle and radius after placement. Full DXF round-trip as ARC entities.
keywords: [CAD arc command, three point arc CAD, circumcircle arc, draw arc CAD, ARC DXF entity, arc grip editing, kulmanlab]
---

# Arc

The `arc` command draws a circular arc through three points you click. The arc is computed as the unique circumcircle passing through all three points — no need to specify a center or radius directly. The arc runs from the first click to the third click, passing through the second.

## Drawing an arc

1. Type `arc` in the terminal or click the **Arc** toolbar button.
2. **Click the first point** — one end of the arc. Or type `X,Y` and press **Enter** for an exact coordinate.
3. **Click the second point** — a point the arc must pass through (controls curvature and direction). Coordinate entry works here too.
4. **Click the third point** — the other end of the arc. The arc is placed and the command exits. Coordinate entry works here too.

```
           ● (2nd click — midpoint on the curve)
          / \
         /   \
        ●     ●
     1st       3rd
```

A line preview connects the first two clicks while you position the third. From the second click onward a live arc preview tracks the cursor.

> **Collinear points**: if all three points lie on a straight line the arc cannot be computed and no entity is placed. Move the second point off the line and try again.

## Coordinate entry

At any of the three steps you can type an exact position instead of clicking:

1. Type the X value.
2. Press `,` — the terminal shows `[X], [Y{cursor}]`.
3. Type the Y value.
4. Press **Enter** to place the point.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X coordinate entry |
| `,` | Lock X and move to Y entry |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm typed coordinate |
| `Escape` | Discard all placed points and exit |

## Grip editing — adjusting endpoints and radius

A selected arc exposes three grips:

| Grip | Position | What it does |
|------|----------|--------------|
| **Center** | Geometric center of the circumcircle | Moves the whole arc; radius and angles unchanged |
| **Start** | First endpoint on the arc | Drag to move the start along the circumcircle — changes both start angle and radius |
| **End** | Last endpoint on the arc | Drag to move the end along the circumcircle — changes both end angle and radius |

Dragging a start or end grip repositions it to the drag location and recalculates both the angle and the radius from that new position relative to the center. The opposite endpoint stays fixed.

## Selecting arcs

| Method | Behaviour |
|--------|-----------|
| **Click** | Selects if the click lands near the arc curve (not the chord) |
| **Drag right** (strict) | Sample points distributed along the arc must all lie inside the box |
| **Drag left** (crossing) | Any sample point on the arc that falls inside the box selects it |

## Supported edit commands

| Command | What happens to the arc |
|---------|------------------------|
| [Move](./move) | Translates the center; radius and angles unchanged |
| [Copy](./copy) | Creates an identical arc at a new position |
| [Rotate](./rotate) | Rotates the center and shifts start/end angles by the rotation amount |
| [Mirror](./mirror) | Reflects the center and inverts start/end angles across the mirror axis |
| [Scale](./scale) | Scales the center position and multiplies the radius by the scale factor |
| [Offset](./offset) | Creates a concentric arc at a larger or smaller radius, same angle span |
| [Delete](./delete) | Removes the arc |

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
| Center X / Center Y | Center of the circumcircle |
| Radius | Radius of the circumcircle |
| Start Angle | Angle in degrees where the arc begins (measured from the positive X axis) |
| End Angle | Angle in degrees where the arc ends |

## Arc vs Circle — when to use which

| | Arc | Circle |
|---|-----|--------|
| Span | Partial — first to third click | Full 360° |
| Input method | Three points on the curve | Center + radius (click or type) |
| Typed input | X,Y coordinate for each point | Radius value (center also accepts X,Y) |
| Resize after placement | Drag start/end grips | Drag any cardinal grip |
| Best for | Fillets, rounded corners, arched paths | Full holes, round features |

## DXF — ARC entity

Arcs are saved as `ARC` entities in the DXF file, storing center coordinates, radius, start angle, and end angle. All properties — including color, layer, linetype, linetype scale, and thickness — round-trip without loss. Any DXF-compatible application (LibreCAD, FreeCAD, etc.) reads these as standard arcs.
