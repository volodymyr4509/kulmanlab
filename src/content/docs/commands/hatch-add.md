---
title: HatchAdd Command — Upload a .pat Hatch Pattern File from the Terminal
description: The HatchAdd command opens your file picker to upload a .pat pattern file without opening the Hatch Manager first. Every pattern the file defines is added at once.
keywords: [hatch add command, hatchadd command, upload pat file terminal, custom hatch pattern CAD, acad.pat, hatch pattern library, kulmanlab]
group: style
order: 5
---

# HatchAdd

The `HatchAdd` command opens your system's file picker to upload a `.pat` hatch pattern file, without opening the [Hatch Manager](../hatch-manager/) dialog first. It's the same upload the Hatch Manager's **Add .pat File** button triggers — HatchAdd is just a direct way to reach it from the terminal.

## Uploading a pattern file

1. Type `HatchAdd` in the terminal, or click **Add .pat File** in the [Hatch Manager](../hatch-manager/) dialog footer.
2. Choose a `.pat` file in the system picker. Only the standard hatch pattern format is accepted.

The command finishes as soon as the file picker opens — there's no further prompt, click, or terminal input. The patterns are registered and appear in the **User** group as soon as the file is selected.

## What happens on upload

- **A `.pat` file is a container, not a single pattern.** One file commonly defines many named patterns, and all of them are added together. This is the main way HatchAdd differs from [FontAdd](../font-add/), where one `.ttf` is one font.
- **The file itself is not kept.** It is read once, split into its patterns, and each pattern is saved on its own under its own name. That is why you can remove one pattern later without disturbing the others that arrived with it — and why the **User** group lists patterns alphabetically by name rather than by which file they came from.
- **A pattern whose name matches an existing one replaces it.** This is the supported way to install authoritative definitions over KulmanLab's own approximations: upload a real `acad.pat` and its versions of `ANSI31` and the other standard names take over.
- **Patterns are saved per user, not per drawing.** They live in the browser (IndexedDB), reload automatically the next time you open KulmanLab CAD, and are available to every drawing.
- **A file with no valid pattern definitions adds nothing.** The library is left exactly as it was.

## Keyboard reference

HatchAdd has no keyboard interaction of its own — the entire command is the browser's native file-picker dialog. Cancelling that dialog (or picking no file) leaves the pattern library unchanged.

## Related commands

| Command | What it does |
|---------|-------------|
| [Hatch Manager](../hatch-manager/) | Browse the pattern library with a live swatch preview, and remove uploaded patterns |
| [Hatch](../hatch/) | Fills a closed region with a pattern from the library |
| [FontAdd](../font-add/) | The same direct-upload shortcut for `.ttf` fonts |
