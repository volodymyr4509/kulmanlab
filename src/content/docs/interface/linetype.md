---
sidebar_position: 2
title: Linetype Toolbar Picker — Control Dash Patterns in KulmanLab CAD
description: The linetype picker in the KulmanLab CAD toolbar sets the dash pattern applied to all newly drawn entities. Supports all linetypes loaded from the current DXF file plus the built-in ByLayer, ByBlock, and Continuous options.
keywords: [CAD linetype, dash pattern, dashed line, DXF linetype, ByLayer linetype, kulmanlab]
---

# Linetype

The **linetype** chip in the toolbar controls the dash pattern assigned to every new entity you draw. Click it to open the picker dropdown.

## Options

| Value | Meaning |
|-------|---------|
| **From Layer** | Entity inherits the linetype defined on its layer. Shown as `ByLayer` in DXF. |
| **ByBlock** | Entity inherits the linetype of the block it belongs to. Has no visible effect outside a block. |
| **Continuous** | Solid unbroken line — no dash pattern. |
| **Named linetypes** | Any linetype loaded from the current DXF file (e.g. `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, …). The dropdown shows a live preview of each pattern and its definition string. |

## How it applies

The selected linetype is applied to every entity created after the change. It does not retroactively affect existing entities.

To change the linetype of existing entities, select them and edit the **Linetype** field in the properties panel, or use [MatchProperties](../../commands/match-properties/) to copy it from another entity.

## Linetype scale

Each entity also has a **Linetype Scale** property (default `1`). The dash pattern is multiplied by this factor. A value of `2` makes the dashes twice as long; `0.5` makes them half as long. Edit it in the properties panel after selecting an entity.

## Available linetypes

The dropdown lists only linetypes present in the currently loaded DXF file. A freshly created file contains only `ByLayer`, `ByBlock`, and `Continuous`. When you import a DXF, all linetypes defined in the file's `$LTYPE` table become available.

If you need a specific linetype (e.g. `DASHED2`) that is not in the list, import a DXF file that contains it — the linetype will then appear in the picker for the current session.

## DXF compatibility

Linetype names are stored as strings in entity records. `ByLayer` and `ByBlock` are the standard DXF sentinel values. All named linetypes and their dash patterns are preserved exactly on export and round-trip without loss in LibreCAD, FreeCAD, and other DXF-compatible applications.
