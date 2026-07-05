---
title: ViewportRectangle Command — Gumawa ng Viewport sa Layout sa KulmanLab CAD
description: Gumagawa ang ViewportRectangle command ng viewport sa isang paper layout sa pamamagitan ng pagpili ng dalawang magkasalungat na sulok. Ipinapakita ng viewport ang model space entities sa default scale ng layout.
keywords: [viewport rectangle, gumawa ng viewport, layout viewport, paper space viewport, kulmanlab]
---

# ViewportRectangle

Gumagawa ang `ViewportRectangle` command ng bagong viewport sa aktibong paper layout sa pamamagitan ng pagpili ng dalawang magkasalungat na sulok. Available lang sa layout space.

## Paggawa ng Viewport

1. Lumipat sa paper layout gamit ang tab sa ibaba ng screen.
2. I-type ang `ViewportRectangle` sa terminal o i-click ang **Viewport Rectangle** toolbar button.
3. **I-click ang unang sulok**, o i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
4. **I-click ang kasalungat na sulok** — agad na malalagay ang viewport. Gumagana rin dito ang coordinate entry.

Ipinapakita ng bagong viewport ang buong model sa default scale ng layout. Gamitin ang scroll wheel sa loob ng viewport para mag-zoom, o middle-drag para mag-pan sa model view.

## Coordinate Entry

Sa bawat hakbang ng sulok, puwede kang mag-type ng eksaktong coordinate:

1. I-type ang X value.
2. Pindutin ang `,` — ipapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang Y value.
4. Pindutin ang **Enter** para ilagay ang point.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Enter` | Kumpirmahin ang na-type na coordinate |
| `Escape` | Kanselahin |

## Pag-edit ng Viewport

Pagkatapos ilagay ang viewport, i-click ito para piliin:

- **I-drag ang edges o corners** para i-resize.
- **I-drag ang center grip** para ilipat ito.
- Gamitin ang **scale selector** sa control bar para mag-set ng eksaktong scale (hal. 1:50). Para mag-enter ng scale na wala sa listahan, i-type ito nang direkta sa input field sa ibaba ng dropdown — tumatanggap ng ratio format (`1:200`, `5:1`) o plain decimal (`0.005`), pagkatapos pindutin ang **Enter**.
- I-right-click ang viewport at gamitin ang **Lock** para maiwasan ang aksidenteng pagbabago.

## Mga Tala

- Available lang ang ViewportRectangle kapag aktibo ang paper layout tab. Kapag pinatakbo sa model space, magpapakita ito ng error message at lalabas.
- Para kopyahin ang existing na viewport, gamitin ang [ViewportCopy](../viewport-copy/).
