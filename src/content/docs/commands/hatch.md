---
title: Hatch Command — Fill an Area with a Pattern
description: The Hatch command fills the region enclosing a picked point with a pattern — any combination of lines, arcs, ellipses, and splines that closes up encloses a region, and anything closed inside it is left as an unfilled island.
keywords: [CAD hatch command, fill area CAD, hatch pattern CAD, ANSI31, SOLID fill, boundary fill CAD, DXF HATCH entity, kulmanlab]
group: shapes
order: 7
---

# Hatch

The `hatch` command fills the region enclosing a picked point with a pattern. The boundary isn't drawn first — it comes from whatever is already on the canvas, so four separate [Lines](../line/) meeting end to end enclose a region exactly as a closed [Polyline](../polyline/) does, and any closed shape sitting inside becomes an island the fill leaves alone.

## Filling an area

1. Type `hatch` in the terminal or click the **Hatch** toolbar button (the swatch icon).
2. **Click a point** inside the region you want filled.
3. The command stays active, so keep clicking to fill more areas — each pick creates its own `Hatch` entity.
4. Press **Enter**, **Space**, or **Escape** when you're done.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   click inside the outer
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   boundary; the circle
  └─────────────┘        └─────────────┘   is left as an island
```

## Keyboard reference

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Finish the Hatch command |
| `Escape` | Finish the Hatch command (same as Enter/Space) |

## What can bound a region

Any mix of these entity types can form a boundary, in any combination, as long as they connect end to end with no gap:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (its own closed boundary)
- [Ellipse](../ellipse/) (closed, or an open elliptical arc as part of a larger loop)
- [Polyline](../polyline/) (open or closed) and [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/)

Text, Multileader, and Dimension entities are never treated as boundaries.

## Islands

Anything fully closed sitting inside the region you picked — a circle, a closed polyline, another hatch's boundary — becomes an **island**: the fill stops at its edge and the island itself is left empty. Nest a closed shape inside another closed shape and the fill alternates, hole inside a fill inside a hole, following the same inside/outside rule at every level.

## When a pick fails

If the point you clicked isn't enclosed, or the boundary has a gap, the terminal explains why instead of silently doing nothing:

| Message | Meaning |
|---------|---------|
| "no boundary found" | Nothing was hit in any direction from the picked point — there's no boundary nearby at all |
| "point is not enclosed" | A boundary exists nearby, but the shape it forms doesn't contain the point you clicked |
| "boundary is open" | The nearest boundary has a gap somewhere — trace it and check every join is exact |
| "boundary too complex" | The boundary loop couldn't be closed within the traversal limit — usually a tangle of overlapping entities |

The command stays active after a failed pick — read the message, fix the drawing or click somewhere else, and try again.

## Choosing a pattern

Every new hatch starts out filled with `ANSI31` (or whichever pattern the *last* hatch you edited used) — there's no pattern picker before you draw. To use a different pattern:

1. Select an existing hatch and open its **Pattern** field in the properties panel — this opens the pattern picker, a grid of named swatches grouped by where each pattern came from.
2. Click a pattern to apply it — the fill updates immediately.

That selection also becomes the default for the *next* hatch you create with the `hatch` command, the same way picking a layer or color carries forward. So to hatch several new areas with a particular pattern: fill one area, set its pattern once, then keep hatching — every fill after that starts with that pattern already applied.

See [Hatch Manager](../hatch-manager/) for uploading your own `.pat` pattern files and browsing the full library.

**SOLID** is a plain entry in the pattern list, not a separate checkbox or mode — pick it the same way you'd pick ANSI31 or any named pattern.

## Properties

| Property | Meaning |
|----------|---------|
| Pattern | The pattern name, from the shared pattern vocabulary (see [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Scales the pattern's line spacing — larger values space the pattern lines further apart |
| Pattern Angle | Rotates the pattern independently of the boundary |
| Origin X / Origin Y | Where the pattern's own repeat is anchored, in drawing coordinates |

Moving, rotating, mirroring, or scaling a hatch carries its pattern placement along, so the fill stays aligned with the boundary — you don't need to re-set the scale or angle after a transform.

## Grip editing the boundary

A selected hatch grips its boundary the way a Polyline grips its vertices — one grip at every corner where two edges meet, and one at the middle of every edge (a closed loop like a hatched circle or ellipse grips at its four axis points instead).

| Grip | What it does |
|------|--------------|
| **Corner** | Moves that corner. A straight edge follows exactly; an arc refits itself to keep passing through both its neighbors; an ellipse or spline edge can only land on its own curve, so the corner snaps to the nearest point on it |
| **Edge middle — line, ellipse, or spline edge** | Slides the whole edge; the edges on either side are trimmed or extended to stay joined to it |
| **Edge middle — arc edge** | **Bows** the arc through the cursor instead of sliding it — both ends stay exactly where they were, and nothing else in the boundary moves |
| **Center** (whole hatch) | Activates [Move](../move/) for the entire hatch |

A drag preview shows the boundary as a dashed outline rather than a solid fill while you're dragging — the original fill stays visible underneath until you release, since a preview can only paint on top of what's there, never remove from it.

## DXF — HATCH entity

Hatches **import** from `HATCH` entities: KulmanLab reads the boundary geometry along with the pattern name, scale, and angle (DXF group codes 70/41/52) — it does **not** read the pattern's own line definitions written inline into the file. Instead, the pattern name is looked up in KulmanLab's own pattern library (built-in defaults plus anything you've uploaded in [Hatch Manager](../hatch-manager/)). A name that isn't in your library falls back to ANSI31 so the drawing still reads as hatched, and a note is logged once.

Spline-bounded loops written by other applications (DXF boundary edge type 4) are not yet read.

Hatches **export** to DXF as `HATCH` entities. The boundary loops go out with the pattern name (group code 2), the solid-fill flag (70), and this hatch's own angle and scale (52/41) — and, unlike the import path, the pattern's resolved line definitions are written inline as well (78, with 53/43/44/45/46/79/49). The asymmetry is deliberate: KulmanLab can resolve a name against its own library, but the application receiving the file may not have that pattern, so the lines travel with it.

## Related commands

- [Hatch Manager](../hatch-manager/) — browse the pattern library and upload `.pat` files
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — all carry the hatch's pattern placement along with it
- [Delete](../delete/) — removes the hatch without affecting the entities that bounded it
