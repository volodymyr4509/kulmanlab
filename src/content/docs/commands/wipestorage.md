---
title: Wipe Storage Command — Clear All Browser Data in KulmanLab CAD
description: The wipestorage command permanently deletes all files, layers, linetypes, and undo history saved in the browser. Requires typing YES to confirm. Use when resetting a corrupted or overfilled local database.
keywords: [CAD wipe storage, clear browser data CAD, reset CAD app, delete local files CAD, kulmanlab wipestorage]
group: file
order: 6
---

# Wipe Storage

The `wipestorage` command permanently deletes **all data stored in the browser** for KulmanLab CAD — every saved file, layer and linetype table, and undo history. The page reloads automatically afterwards.

:::danger Irreversible
This action cannot be undone. All files stored in the browser are deleted. Export any drawings you want to keep as `.json` or `.dxf` files before running this command.
:::

## When to use it

- The browser storage is corrupted and the app fails to load or save files.
- You want to fully reset the app to a clean state.
- You are switching browsers or devices and no longer need the local copy.

## How to run it

1. Type `wipestorage` in the terminal and press **Enter**.
2. The terminal prompts: *Wipe all browser local storage? Type YES to confirm*
3. Type `YES` (any capitalisation) and press **Enter**.

The app deletes the database and reloads the page. If you type anything other than `YES` and press **Enter**, or press **Escape**, the command is cancelled and nothing is deleted.

## What gets deleted

| Data | Deleted |
|------|---------|
| All files saved in the browser | Yes |
| Layer and linetype tables for each file | Yes |
| Undo / redo history for each file | Yes |

Only data stored locally in **this browser** is affected. Files you have already exported as `.json` or `.dxf` are not touched.
