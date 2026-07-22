---
title: Text Command — Maglagay ng MTEXT Label sa KulmanLab CAD
description: Inilalagay ng Text command ang multi-line at richly formatted na MTEXT label. I-click ang posisyon, mag-type sa popup editor, at pindutin ang Escape para i-commit. I-double-click ang anumang umiiral na label para buksan muli ang editor.
keywords: [CAD text command, MTEXT, maglagay ng text label CAD, text annotation CAD, bold italic CAD, multi-line text CAD, kulmanlab]
group: markup
order: 0
---

# Text

Inilalagay ng `text` command ang multi-line na text label. Pagkatapos mong i-click ang posisyon sa canvas, magbubukas ang popup editor sa **rich** mode — puwede kang mag-type ng content, mag-apply ng bold/italic/strikethrough per character, magpalit ng fonts at heights, at magsingit ng line breaks. Pindutin ang **Escape** para i-commit at isara ang editor.

Tingnan ang pahina ng [Text Editor](../../interface/text-editor/) para sa kumpletong editor reference, kasama ang paghahambing ng **rich** at **simple** mode.

## Paglalagay ng Text Label

1. I-type ang `text` sa terminal o i-click ang **Text** button sa toolbar.
2. **I-click ang anchor position** sa canvas. O i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
3. Magbubukas ang **text editor popup** sa itaas ng bagong label. I-type ang iyong content.
4. Pindutin ang **Escape** para i-commit ang label at isara ang editor.

Ang default na height ay **12 drawing units**.

## Pag-edit ng Umiiral na Label

**I-double-click** ang anumang text label sa canvas para buksan muli ang editor para sa label na iyon.

## Coordinate Entry para sa Anchor

Sa halip na mag-click, mag-type ng eksaktong posisyon:

1. I-type ang value ng X.
2. Pindutin ang `,` — ipapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang value ng Y.
4. Pindutin ang **Enter** para ilagay ang anchor at buksan ang editor.

## Keyboard Reference

**Anchor phase**

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Kumpirmahin ang na-type na coordinate |

**Text editor phase** (tingnan ang [Text Editor](../../interface/text-editor/) para sa kumpletong reference)

| Key | Aksyon |
|-----|--------|
| Anumang printable character | Isingit sa cursor |
| `Backspace` / `Delete` | Burahin ang katabing character o selection |
| `Enter` | Magsingit ng line break |
| `←` / `→` | Ilipat ang caret |
| `Home` / `End` | Tumalon sa simula / dulo ng hard line |
| `Escape` | I-commit at isara ang editor |

## Grip Editing — Muling Paglalagay

Ipinapakita ng napiling text label ang isang grip sa anchor point:

| Grip | Posisyon | Ano ang ginagawa nito |
|------|----------|--------------|
| **Anchor** | Bottom-left ng text | I-drag para muling ilagay ang label |

## Pagpili ng Text

| Method | Kilos |
|--------|-----------|
| **Click** | Napipili kung tumama ang click sa loob ng rotated bounding box ng text |
| **Drag right** (strict) | Dapat nasa loob ng selection area ang lahat ng apat na sulok ng bounding box |
| **Drag left** (crossing) | Anumang overlap sa pagitan ng bounding box ng text at ng selection area ang pumipili nito |

## Suportadong Edit Command

| Command | Ano ang mangyayari sa text |
|---------|--------------------------|
| [Move](../move/) | Inililipat ang anchor point |
| [Copy](../copy/) | Gumagawa ng identikal na label sa bagong posisyon |
| [Rotate](../rotate/) | Iniikot ang posisyon ng anchor at idinaragdag ang angle sa Rotation Degree |
| [Mirror](../mirror/) | Sinasalamin ang anchor point sa kabilang panig ng mirror axis (hindi na-flip ang text string) |
| [Scale](../scale/) | Sinu-scale ang posisyon ng anchor at pinarami ang height sa scale factor |
| [Delete](../delete/) | Tinatanggal ang label |

Hindi sinusuportahan ng Text ang **Offset**, **Trim**, o **Extend**.

## Properties

Kapag napili ang text label, ipinapakita ng properties panel:

**General**

| Property | Default | Kahulugan |
|----------|---------|---------|
| Color | 256 (ByLayer) | ACI color index |
| Layer | `0` | Layer assignment |

**Geometry**

| Property | Kahulugan |
|----------|---------|
| Position X / Position Y | Coordinates ng anchor point |
| Height | Base text height sa drawing units (default: **12**) |
| Rotation Degree | Counter-clockwise na rotation sa degrees |

**Properties**

| Property | Kahulugan |
|----------|---------|
| Content | Ang text string (napapanatili ang MTEXT inline codes) |
| Attachment Point | Alignment code (1 = top-left … 9 = bottom-right) |

Walang Linetype, Linetype Scale, o Thickness properties ang Text.

## DXF — MTEXT Entity

Nakaimbak ang mga text label bilang **MTEXT** entities sa DXF file. Naka-encode ang bold at italic gamit ang `\L`, `\K`, `\O`, at inline font switches (`\f`). Naka-encode ang per-character height bilang `\H`. Lahat ng formatting ay nakakaligtas sa kumpletong DXF round-trip at nababasa ng LibreCAD, FreeCAD, at iba pang DXF-compatible na application.
