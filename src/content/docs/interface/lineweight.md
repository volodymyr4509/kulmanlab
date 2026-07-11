---
title: Lineweight Toolbar Picker — Control Stroke Width in KulmanLab CAD
description: The lineweight picker in the KulmanLab CAD toolbar sets the stroke width applied to all newly drawn entities. Supports standard DXF lineweight values from 0.00 mm to 2.11 mm plus ByLayer and Default modes.
keywords: [CAD lineweight, stroke width, line width, DXF lineweight, ByLayer lineweight, kulmanlab]
group: interface
order: 4
---

# Lineweight

The **lineweight** chip in the toolbar controls the stroke width assigned to every new entity you draw. Click it to open the picker dropdown.

## Options

| Value | Meaning |
|-------|---------|
| **From Layer** | Entity inherits the lineweight defined on its layer. The actual width shown depends on the layer setting. |
| **Default** | Uses the application default width — rendered as a thin line (1 px). Does not override the layer setting in DXF. |
| **0.00 mm – 2.11 mm** | An explicit fixed width. The entity carries this value regardless of its layer's lineweight. |

Standard DXF lineweight values are available: 0.00, 0.05, 0.09, 0.13, 0.15, 0.18, 0.20, 0.25, 0.30, 0.35, 0.40, 0.50, 0.53, 0.60, 0.70, 0.80, 0.90, 1.00, 1.06, 1.20, 1.40, 1.58, 2.00, and 2.11 mm.

## How it applies

The selected lineweight is applied to every entity created after the change. It does not retroactively affect existing entities.

To change the lineweight of existing entities, select them and edit the **Lineweight** field in the properties panel, or use [MatchProperties](../../commands/match-properties/) to copy it from another entity.

## Rendering

Lineweights are rendered at a scale of **3.78 px per mm** (96 dpi). A 0.25 mm line is approximately 1 px wide on screen; a 1.00 mm line is approximately 4 px. Very thin values (0.00 mm and negatives) are always rendered as at least 0.5 px so they remain visible at any zoom level.

## DXF compatibility

Lineweight values are stored as integers in hundredths of a millimetre (e.g. 25 = 0.25 mm) in the DXF `LWPOLYLINE`, `LINE`, `CIRCLE`, and other entity records. **From Layer** is stored as `-1` and **Default** as `-3`, matching the DXF specification. Files round-trip without loss in any DXF-compatible application.
