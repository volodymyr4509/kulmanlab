---
title: Selection Filter — Narrow a Multi-Selection by Property
description: When many entities are selected, a filter icon in the property panel header opens a popup with live checklists for Type, Layer, Color, Lineweight, and Linetype, built from what's actually in the selection, so a large mixed pick can be narrowed before bulk-editing.
keywords: [selection filter, filter selection CAD, faceted filter, narrow selection, bulk edit CAD, property panel filter, kulmanlab]
group: interface
order: 7
---

# Selection Filter

Selecting many entities at once opens the property panel in its multi-selection view ("Selection (N)"). A **filter icon** next to the close button lets you narrow that selection down by property before editing it in bulk.

## Opening the filter

1. Select several entities — drag a selection box, Shift-click, or Ctrl+A.
2. Click the **filter icon** (funnel) in the property panel header.
3. A popup opens below the button with a checklist for each property that actually varies across the selection.

## Facets

The popup can show up to five facets, each built live from the current selection:

| Facet | Values shown |
|-------|--------------|
| **Type** | Entity type name (Line, Circle, Hatch, …) |
| **Layer** | Layer name, with a color swatch matching that layer |
| **Color** | ACI color index |
| **Lineweight** | Lineweight value |
| **Linetype** | Linetype name |

A facet only appears if the selection actually contains more than one distinct value for it — selecting ten lines all on the same layer won't show a Layer facet, since checking it couldn't narrow anything. Entities that don't carry a given property at all (Hatch and Text have no lineweight or linetype, for example) are simply not counted toward that facet — they're never excluded by it either.

## Narrowing the selection

Check one or more values in any facet to narrow the selection to entities matching **all** checked facets (an entity must match at least one checked value in *every* facet you've touched, not just one). Each facet's own checkboxes and counts reflect what the *other* checked facets have already narrowed to, so a facet never hides its own already-checked options — standard faceted-search behavior.

The result count updates live as you check and uncheck boxes, and the canvas selection itself is narrowed to match — this isn't just a display filter, the entities that no longer match are actually deselected, ready for you to bulk-edit exactly the subset you filtered down to.

## Clearing filters

Use the popup's reset control to clear every checked box and return to the full original selection, or close the popup (it reopens with a fresh baseline the next time you click the filter icon on a new selection).

## Related

- [Match Properties](../../commands/match-properties/) — copy properties from one entity to others, once you've narrowed down which ones
- [LayerIsolate](../../commands/layer-isolate/) — a layer-wide alternative when you want to isolate by layer alone, independent of what's currently selected
