---
title: Font Manager Command — Upload and Manage Custom TTF Fonts in KulmanLab CAD
description: The Font Manager command opens a dialog for browsing, previewing, and selecting fonts, and for uploading your own .ttf files. Uploaded fonts are saved in the browser and embedded by name in DXF exports.
keywords: [font manager, custom font CAD, upload ttf, custom typeface CAD, google fonts CAD, text font CAD, kulmanlab]
---

# Font Manager

The `FontManager` command opens a dialog for browsing and selecting fonts, and for uploading your own `.ttf` files for use in [Text](../text/) and [Multileader](../leader/) entities.

## Opening the Font Manager

- Type `FontManager` in the terminal, **or**
- Click the **Font Manager** button in the [text editor](../../interface/text-editor/) toolbar.

## Font groups

| Group | Contents |
|-------|----------|
| **Default** | The built-in sans-serif font — always available |
| **User** | Your own uploaded `.ttf` fonts (only shown once you've added one) |
| **Free** | 15 bundled Google Fonts (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Common OS fonts (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Click any font in the list to preview it on the right — name, alphabet sample, a pangram, and digits.

## Uploading a custom font

1. Click **Add Font** in the dialog footer (or type `Font+` in the terminal to open the file picker directly).
2. Choose a `.ttf` file. Only TrueType fonts are supported — `.otf` and `.woff`/`.woff2` are not.
3. The file name (without the extension) becomes the font's name in the **User** group. For example, uploading `MyFont.ttf` adds a font named `MyFont`.

Uploaded fonts are saved permanently in the browser (IndexedDB) and reload automatically the next time you open KulmanLab CAD.

## Removing a custom font

Hover a font in the **User** group and click the **×** button next to it. Built-in fonts (Default, Free, System) cannot be removed.

## Keyboard reference

| Key | Action |
|-----|--------|
| `↑` / `↓` | Move the selection up or down the font list |
| `Escape` | Close the Font Manager |

## DXF compatibility

The font name is embedded in exported **MTEXT** entities as an inline formatting code, so a DXF round-tripped through KulmanLab CAD keeps its font assignment. Custom font *files* are not embedded in the DXF — only the font *name* is. If you re-import a drawing that references a custom font you haven't uploaded on this device, text renders in the default font until you upload a font with that same name.

## Related commands

- [Text](../text/) — places the text labels that font choices apply to
- [Match Properties](../match-properties/) — copies text height, but not font, between entities
