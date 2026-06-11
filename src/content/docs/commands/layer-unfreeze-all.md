---
sidebar_position: 1
title: LayerUnfreezeAll — Unfreeze All Layers in KulmanLab CAD
description: The LayerUnfreezeAll command clears the frozen flag on every layer in the drawing in one step.
keywords: [layer unfreeze, unfreeze all layers CAD, kulmanlab layer management]
---

# LayerUnfreezeAll

The `LayerUnfreezeAll` command clears the frozen flag on **every layer** in the drawing instantly. No selection or confirmation needed — it runs and finishes in one step.

## Usage

Type `LayerUnfreezeAll` in the terminal or click the **Unfreeze All** toolbar button (sun icon). All frozen layers become visible immediately.

## When to use

Typically used after [LayerIsolate](./layer-isolate) to restore all layers to their normal visible state.

## Behaviour details

- Applies to all layers regardless of their current state.
- Does not affect locked or plot flags — only the frozen flag is changed.
- The command finishes immediately with no prompts.
