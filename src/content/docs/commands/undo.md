---
sidebar_position: 1
title: Undo Command — Step Back Through Drawing History in KulmanLab CAD
description: The Undo command reverses the last drawing action one step at a time. Up to 20 steps are stored per file and persisted in the browser across page reloads. Performing a new action after undoing clears the redo stack.
keywords: [CAD undo command, undo history CAD, reverse action CAD, undo steps CAD, browser persistent undo, kulmanlab]
---

# Undo

The `undo` command reverses the last change to the drawing — one step per invocation. Each addition, deletion, or edit of entities is recorded as a separate history entry. Undo steps back through these entries in reverse order.

## How to undo

- Type `undo` in the terminal, or
- Click the **Undo** toolbar button.

Each invocation reverses one recorded action. Invoke it repeatedly to step further back.

## History behaviour

| Detail | Value |
|--------|-------|
| Steps per file | Up to **20** |
| Storage | Browser (IndexedDB / localStorage), per file name |
| Survives page reload | Yes — history is restored when you reopen the file |
| New action after undo | Clears all redo entries ahead of the current position |
| Oldest entry when full | Dropped to make room for the newest change |

Every entity mutation is recorded: drawing new entities, deleting entities, grip-editing endpoints, applying Move, Rotate, Scale, Mirror, Trim, Extend, and Offset all create history entries.

## Undo vs Redo

| | Undo | Redo |
|---|------|------|
| Direction | Steps **backward** through history | Steps **forward** through undone entries |
| Available when | At least one recorded action exists | At least one Undo has been performed and no new action has been taken |
| Cleared by | Nothing — history accumulates until the 20-step limit | Any new drawing action |

Use [Redo](../redo/) to reapply an undone action. The toolbar buttons are greyed out when the respective direction is unavailable.
