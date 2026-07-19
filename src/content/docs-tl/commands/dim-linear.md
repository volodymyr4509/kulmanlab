---
title: "Dimension Linear Command — Horizontal at Vertical na Dimension"
description: "Sinusukat ng Dimension Linear command ang horizontal o vertical na distansya sa pagitan ng dalawang punto. Palaging axis-aligned ang dimension line — pindutin ang H o V para i-lock ang orientation, o hayaang ang posisyon ng cursor ang magdesisyon nang automatic. Kumpletong DXF round-trip bilang DIMENSION entities."
keywords: [CAD dimension linear, horizontal dimension CAD, vertical dimension CAD, dimlinear, H V orientation lock, dimension offset, kulmanlab]
group: markup
order: 4
---

# Dimension Linear

Naglalagay ang `dimlinear` command ng horizontal o vertical na dimension sa pagitan ng dalawang extension-line origin. Palaging tuwid na horizontal o tuwid na vertical ang takbo ng dimension line — hindi ito puwedeng ilagay sa arbitrary na angle. Gamitin ang [Dimension Aligned](../dim-aligned/) kapag kailangan mo ng dimension na parallel sa isang diagonal na linya.

## Anatomiya ng Linear Dimension

```
  |←————— 5.00 —————→|
  |                   |
  ●  (ext line 1)     ●  (ext line 2)
  p1                  p2
```

- **Extension lines** — bumababa mula sa bawat nasukat na punto, perpendicular sa dimension line.
- **Dimension line** — horizontal (sinusukat ang X distance) o vertical (sinusukat ang Y distance).
- **Value** — ang projected distance sa piniling axis, hindi ang tunay na point-to-point distance.

## Paglalagay ng Linear Dimension

1. I-type ang `dimlinear` sa terminal o i-click ang **Dimension Linear** button sa toolbar.
2. **I-click ang unang extension line origin** (p1), o i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
3. **I-click ang ikalawang extension line origin** (p2). Gumagana rin dito ang coordinate entry.
4. **Igalaw ang cursor** para i-position ang dimension line. Automatic na nade-detect ang orientation base sa posisyon ng cursor.
5. **I-click** para ilagay, o i-type ang offset distance at pindutin ang **Enter** para sa precise na paglalagay.

## Automatic na Pag-detect ng Orientation

Kapag walang pinipilit na orientation, binabasa ng command ang posisyon ng cursor relative sa dalawang nasukat na punto:

| Posisyon ng cursor | Na-detect na orientation | Ano ang sinusukat |
|-----------------|---------------------|-----------------|
| Sa itaas o ibaba ng mga punto | Horizontal | Δ X sa pagitan ng p1 at p2 |
| Sa kaliwa o kanan ng mga punto | Vertical | Δ Y sa pagitan ng p1 at p2 |

Pindutin ang **H** para i-lock ang horizontal o **V** para i-lock ang vertical anumang oras habang nasa placement phase. Kapag naka-lock na, hindi na nagbabago ang orientation kahit igalaw mo ang cursor.

## Naka-type na Offset Distance

I-type ang isang number habang naglalagay para i-fix ang dimension line sa eksaktong distansya mula sa mga nasukat na punto:

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Idagdag ang digit sa offset distance |
| `Backspace` | Tanggalin ang huling na-type na character |
| `Enter` / `Space` | Ilagay sa na-type na distansya |

Ang side ng cursor (itaas/ibaba para sa horizontal, kaliwa/kanan para sa vertical) ang nagtatakda ng sign — lalabas ang dimension line sa side kung saan naroroon ang cursor.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry (p1/p2 phases), o offset distance (placement phase) |
| `,` | I-lock ang X at lumipat sa Y entry (p1/p2 phases) |
| `H` | I-lock ang horizontal orientation (placement phase lang) |
| `V` | I-lock ang vertical orientation (placement phase lang) |
| `Backspace` | Tanggalin ang huling na-type na character |
| `Enter` / `Space` | Kumpirmahin ang na-type na coordinate o offset |
| `Escape` | Kanselahin |

## Dimension Linear kumpara sa Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Axis | Palaging H o V | Parallel sa nasukat na linya |
| Sinusukat | X o Y component lang | Tunay na Euclidean distance |
| H/V keys | Oo — i-lock ang orientation | Hindi — laging sumusunod sa p1→p2 |
| Pinakamainam para sa | Orthogonal na layout, floor plan | Diagonal na feature, angled na cut |

## Pag-edit ng Label — Simple Mode

**I-double-click** ang isang nailagay nang linear dimension para buksan ang text editor sa **simple** mode. Pre-seeded na ang editor gamit ang kasalukuyang rendered value para maposisyon mo ang cursor at direktang i-edit ito.

| Feature | Behaviour |
|---------|-----------|
| Bold / Italic / Font / Height | Naa-apply sa **buong** label nang sabay-sabay |
| Per-character na formatting | Hindi suportado |
| `Enter` | Kina-commit ang value at isinasara ang editor |
| Multi-line | Hindi suportado |

Tingnan ang [Text Editor — simple mode](../../interface/text-editor/#simple-mode) para sa kumpletong reference.

## Pagkadena ng mga Dimension

Para magdagdag pa ng dimension na magpapatuloy mula sa huling extension line, gamitin ang [Dimension Continue](../dim-continue/) kaagad pagkatapos ilagay ito.

## DXF — DIMENSION Entity

Nase-save ang mga linear dimension bilang `DIMENSION` entities na may `rotationDeg` na naka-set sa `0` (horizontal) o `90` (vertical). Ang extension line origins, dimension line position, text position, nasukat na value, arrow style, text height, at lahat ng display flags ay nagra-round-trip nang walang nawawala.
