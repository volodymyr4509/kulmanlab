---
title: File Manager — Thumbnail Grid, Rename & Delete in KulmanLab CAD
description: The File Manager command opens a thumbnail grid of every saved drawing — click a thumbnail to open it, rename in place, or delete with confirmation.
keywords: [file manager CAD, recent files CAD, rename drawing, delete drawing, thumbnail grid CAD, restore drawing, reopen DXF, browser storage CAD, KulmanLab files, saved drawings, IndexedDB CAD, back up CAD drawing]
group: file
order: 3
---

# File Manager

The `FileManager` command opens a **thumbnail grid** of every drawing that has been saved to your browser's local storage, ordered by when each was last saved. Use it to reopen a previous drawing, rename it, or delete it.

## Opening the File Manager

- Type `FileManager` in the terminal, **or**
- Click the **File Manager** toolbar button (history icon) in the File panel at the top of the screen.

The panel opens on the left side of the canvas, and closes automatically as soon as you start another command or [import](../import/) a file — so it never lingers over a drawing it doesn't list yet. It reopens with a fresh list each time.

## The thumbnail grid

Each saved drawing is a card showing a thumbnail drawn in colour, its name, and when it was last updated. The list shows first and the thumbnails follow one at a time — nothing is pre-rendered or stored — so a card shows a spinner while its thumbnail is being drawn, and **Empty** if the drawing has nothing to draw yet.

| Action | How |
|--------|-----|
| **Open** a drawing | Click its thumbnail — replaces the current canvas content |
| **Rename** | Click the pencil icon, or double-click the name |
| **Delete** | Click the trash icon, then confirm |

If no files have been saved yet, the panel shows "No files saved". With more files than fit on one screen, **Page 1 of N** controls appear below the grid.

The card for whichever file is currently open in the editor is marked with an accent-colored ring, and has **no delete button** — deleting the open file would wipe its stored data while the canvas kept showing it, and the next edit would just save it right back. Renaming it is still available.

## Deleting a file

Clicking the trash icon does not delete immediately — it arms a confirmation overlay on that card ("Delete this file?" with **Delete** / **Cancel** buttons), since deletion is permanent and cannot be undone. Clicking **Cancel**, clicking a different card's trash icon, or clicking elsewhere on the card all drop the pending confirmation without deleting anything.

## Renaming a file

Click the pencil icon (or double-click the file name) to edit it in place, then press **Enter** to confirm or **Escape** to cancel. A rename is rejected if the new name is:

- empty, or longer than 100 characters,
- already used by another saved file (case-insensitive),
- ending in a dot, or
- a Windows-reserved device name such as `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, or `LPT1`–`LPT9`.

Characters that aren't valid in a file name (`\ / : * ? " < > |`) are stripped automatically as you type. Renaming only changes the label — it doesn't affect the drawing's position in the grid, since that's ordered by last-saved time, not by name.

## Back up your work — browser storage is not permanent

KulmanLab saves drawings to **IndexedDB**, a database built into your browser:

- Files are stored **locally on your device only** — nothing is uploaded to a server.
- Each browser and device has its own independent storage. A drawing saved in Chrome on one computer does not appear in Firefox, or on another machine.
- This storage **can be cleared without warning** — by clearing site data or browsing history, running low on disk space, using a private/incognito window, reinstalling the browser or OS, or switching devices. None of these give you a chance to recover what was there.

**The only reliable way to keep a drawing safe is to [export](../export-manager/) it to your own storage.** Use `.json` (KulmanLab's native format) when possible — it preserves every entity exactly; use `.dxf` when you need compatibility with other CAD tools. Do this for anything you'd be upset to lose, and before clearing browser data, switching browsers or devices, or putting the machine away for a while.

## Automatic file loading on startup

When you open KulmanLab CAD, the app automatically loads the **most recently modified file** from storage. You do not need to manually open it from the File Manager each time.

## Managing storage

There is no fixed limit on the number of drawings you can save, but browser storage is finite. If you notice storage warnings, delete older files from the File Manager — or better, export them first so nothing is lost.

To remove all saved drawings at once, use the [WipeStorage](../wipestorage/) command.

## File names

New and imported files get a plain name — no timestamp is baked in. If that name is already taken, a Finder/Explorer-style suffix is appended automatically (`plan (2)`, `plan (3)`, …) so nothing gets overwritten. You can always give a file a clearer name afterwards using [rename](#renaming-a-file).

## Related commands

- [Import](../import/) — load a drawing from your file system into browser storage
- [Export Manager](../export-manager/) — download a drawing to your file system
- [New File](../new-file/) — start a blank drawing (also saved automatically)
- [WipeStorage](../wipestorage/) — clear all saved files from browser storage
