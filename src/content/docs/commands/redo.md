---
title: Redo Command — Reapply Undone Actions in KulmanLab CAD
description: The Redo command reapplies the last action reversed by Undo, moving forward through the history stack. Redo is only available after an Undo and is cleared the moment any new drawing action is performed.
keywords: [CAD redo command, redo history CAD, reapply action CAD, undo redo CAD, browser persistent redo, kulmanlab]
group: edit
order: 14
---

# Redo

The `redo` command moves forward through the undo history, reapplying actions that were reversed by [Undo](../undo/). Redo is only available when you have stepped back with Undo and have not yet made a new change.

## How to redo

- Type `redo` in the terminal, or
- Click the **Redo** toolbar button.

Each invocation reapplies one previously undone action. Invoke it repeatedly to step forward through all available redo entries.

## Redo stack behaviour

| Detail | Behaviour |
|--------|-----------|
| Available after | One or more [Undo](../undo/) steps |
| Cleared by | **Any new drawing action** — adding, editing, or deleting an entity |
| Storage | Browser, per file — survives page reload (as long as no new action was made before reload) |
| Maximum depth | Up to 20 entries (same pool as Undo) |

Once a new entity is drawn, deleted, or modified, the redo stack is cleared and those entries cannot be recovered. Only undone actions that have not been superseded by new work can be redone.

## Redo vs Undo

| | Redo | Undo |
|---|------|------|
| Direction | Steps **forward** through undone entries | Steps **backward** through history |
| Available when | After at least one Undo, with no new action taken | At least one recorded action exists |
| Cleared by | Any new drawing action | Nothing |

The toolbar Redo button is greyed out when there are no entries to redo. Use [Undo](../undo/) first to create redo entries.
