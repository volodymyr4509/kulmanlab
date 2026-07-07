---
title: Font Manager Command — I-upload at Pamahalaan ang Custom TTF Fonts sa KulmanLab CAD
description: Binubuksan ng Font Manager command ang isang dialog para mag-browse, mag-preview, at pumili ng fonts, at para mag-upload ng sarili mong .ttf files. Naka-save ang mga na-upload na font sa browser at naka-embed ayon sa pangalan sa mga DXF export.
keywords: [font manager, custom font CAD, mag-upload ng ttf, custom na typeface CAD, google fonts CAD, text font CAD, kulmanlab]
---

# Font Manager

Binubuksan ng `FontManager` command ang isang dialog para mag-browse at pumili ng fonts, at para mag-upload ng sarili mong `.ttf` files na gagamitin sa mga [Text](../text/) at [Multileader](../leader/) entity.

## Pagbukas ng Font Manager

- I-type ang `FontManager` sa terminal, **o**
- I-click ang **Font Manager** button sa toolbar ng [text editor](../../interface/text-editor/).

## Mga Grupo ng Font

| Grupo | Nilalaman |
|-------|-----------|
| **Default** | Ang built-in na sans-serif font — laging available |
| **User** | Ang sarili mong na-upload na `.ttf` fonts (lalabas lang kapag nagdagdag ka na ng isa) |
| **Free** | 15 bundled na Google Fonts (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Karaniwang OS fonts (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

I-click ang alinmang font sa listahan para i-preview ito sa kanan — pangalan, alphabet sample, isang pangram, at mga digit.

## Pag-upload ng Custom Font

1. I-click ang **Add Font** sa footer ng dialog (o i-type ang `Font+` sa terminal para direktang buksan ang file picker).
2. Pumili ng `.ttf` file. TrueType fonts lang ang suportado — hindi suportado ang `.otf` at `.woff`/`.woff2`.
3. Ang pangalan ng file (walang extension) ang magiging pangalan ng font sa grupong **User**. Halimbawa, ang pag-upload ng `MyFont.ttf` ay magdaragdag ng font na pinangalanang `MyFont`.

Permanenteng naka-save ang mga na-upload na font sa browser (IndexedDB) at awtomatikong nire-reload ang mga ito sa susunod na buksan mo ang KulmanLab CAD.

## Pag-alis ng Custom Font

I-hover ang isang font sa grupong **User** at i-click ang **×** button sa tabi nito. Hindi puwedeng tanggalin ang mga built-in na font (Default, Free, System).

## Keyboard reference

| Key | Aksyon |
|-----|--------|
| `↑` / `↓` | Ilipat ang selection pataas o pababa sa font list |
| `Escape` | Isara ang Font Manager |

## DXF Compatibility

Naka-embed ang pangalan ng font sa mga na-export na **MTEXT** entity bilang inline formatting code, kaya ang isang DXF na dumaan sa round-trip sa KulmanLab CAD ay pinapanatili ang font assignment nito. Hindi naka-embed sa DXF ang mga *file* ng custom font — ang pangalan lang ng font ang naka-embed. Kung mag-re-import ka ng drawing na tumutukoy sa isang custom font na hindi mo pa na-upload sa device na ito, mare-render ang text sa default font hanggang sa mag-upload ka ng font na may parehong pangalan.

## Kaugnay na commands

- [Text](../text/) — naglalagay ng mga text label na kinakapitan ng mga pinili sa font
- [Match Properties](../match-properties/) — kinokopya ang text height, pero hindi ang font, sa pagitan ng mga entity
