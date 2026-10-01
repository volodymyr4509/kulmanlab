---
title: DimensionStyle Command — Create and Manage Named Dimension Styles
description: Create and manage named CAD dimension styles for arrows, extension lines, center marks, text, precision, alignment, and DXF DIMSTYLE compatibility.
keywords: [dimension style CAD, DIMSTYLE, CAD dimension manager, dimension arrows, dimension precision, center marks, DXF dimension style, kulmanlab]
group: style
order: 8
---

# DimensionStyle

The `DimensionStyle` command opens a dialog for creating, editing, previewing, and selecting named dimension styles. Every new linear, aligned, radius, diameter, or angular dimension copies the *current* style when it is created. Existing dimensions are not live-linked to the style.

## Opening the Dimension Style dialog

- Type `DimensionStyle` in the terminal, **or**
- Click the **Dimension Style** button in the Annotate panel.

The list on the left contains every visible dimension style. A check mark identifies the current style. Click a style to edit it; use the pencil beside its name to rename it.

## Lines and arrows

| Field | What it controls |
|---|---|
| Arrow 1 / Arrow 2 | The two arrowhead symbols. They can be selected independently. |
| Arrow Size | Arrowhead size in drawing units. |
| Ext Line Offset | Gap between measured geometry and the start of each extension line. |
| Ext Line Extension | Distance each extension line continues beyond the dimension line. |
| Center Mark / Center Mark Size | `None`, a central `Mark`, or center `Lines` for radius and diameter dimensions, plus their size. |

## Text

| Field | What it controls |
|---|---|
| Text Style | One-time quick fill of Font, Text Height, Bold, Italic, and Frame Text from a named [TextStyle](../text-style/). |
| Font / Text Height | Typeface and label height for new dimensions. |
| Bold / Italic / Frame Text | Label formatting and an optional rectangular frame. |
| Text Gap | Space between the dimension line and label. |
| Text Attachment | One of nine positions around the dimension line. |
| Text Aligned | Rotates the label with the dimension line instead of keeping it horizontal. |
| Precision | Decimal places for linear, aligned, radius, and diameter values. |
| Angular Precision | Decimal places for angular values. |

Text Style is a quick fill, not a live link. Changing a copied field does not alter the source text style, and later text-style edits do not update the dimension style.

The preview uses the same renderers as the canvas. Switch between linear, radius, diameter, and angular samples to check arrows, center marks, text placement, precision, and frames before saving.

## Creating, renaming, and deleting styles

- **New** duplicates the selected style under the next free name (`Dimension1`, `Dimension2`, …).
- Use the pencil in the style row to rename it. `Standard` cannot be renamed.
- **Delete** removes the selected style only when it is neither `Standard` nor the current style.

Names must be non-empty, unique even among hidden styles, and valid for DXF. Names containing `< > / \ " : ; ? * | , = \`` are rejected, and **OK** remains disabled until every visible style has a valid name.

Annotative styles imported from DXF are hidden because annotative scaling is not rendered yet. Their records remain in the drawing and are preserved on export.

## Setting the current style

**Set Current** makes the selected style the default for future dimensions. The dropdown beside **Dimension Style** in the Annotate panel provides the same choice without opening the dialog.

A dimension style is copied at creation time. Existing dimensions do not change when the source style is edited, renamed, or deleted. [Dimension Continue](../dim-continue/) instead inherits the complete appearance of its base dimension.

## Saving or discarding changes

All edits are made on copies. **OK** applies renames, additions, deletions, property changes, and the current-style choice together. **Close**, the window's close button, clicking the backdrop, or pressing `Escape` discards them.

## DXF compatibility

KulmanLab imports and exports named `DIMSTYLE` table records, including separate arrowheads, arrow size, extension-line offset and extension, text height and gap, text attachment and alignment, linear and angular precision, center-mark type and size, frames, text-style references, and the annotative flag. Per-entity `DSTYLE` overrides take precedence over the named style when a DXF is imported.

On export, referenced `STYLE` records use variable height (`40 = 0`) and keep the last-used height in group `42`. This prevents a fixed text-style height from overriding the dimension style's own text height in other CAD applications.

## Related commands

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
