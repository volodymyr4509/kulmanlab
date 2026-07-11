---
title: "Dimension Aligned Command — True-Distance na Dimension sa Anumang Angle sa KulmanLab CAD"
description: "Sinusukat ng Dimension Aligned command ang tunay na straight-line distance sa pagitan ng dalawang punto. Parallel ang dimension line sa p1→p2 na linya sa anumang angle — hindi tulad ng Dimension Linear na limitado sa horizontal o vertical. Kumpletong DXF round-trip bilang DIMENSION entities."
keywords: [CAD dimension aligned, dimaligned, diagonal dimension CAD, true distance dimension, angled dimension CAD, kulmanlab]
group: markup
order: 5
---

# Dimension Aligned

Naglalagay ang `dimaligned` command ng dimension na sumusukat sa **tunay na straight-line distance** sa pagitan ng dalawang punto. Parallel ang dimension line sa linyang kumokonekta sa dalawang punto, kaya puwede itong nasa anumang angle. Ito ang pangunahing pagkakaiba mula sa [Dimension Linear](../dim-linear/), na limitado sa horizontal o vertical.

## Anatomiya ng Aligned Dimension

```
     ●  p2
    /|
   / |  (ext line 2, perpendicular to dim line)
  /  |
 /←5.00→/
/  /
●  /  (ext line 1, perpendicular to dim line)
p1
```

- **Extension lines** — perpendicular sa dimension line, iginuhit mula sa bawat nasukat na punto.
- **Dimension line** — parallel sa p1→p2, naka-offset sa isang side depende sa posisyon ng cursor.
- **Value** — ang tunay na Euclidean distance na `|p1 – p2|`.

## Paglalagay ng Aligned Dimension

1. I-type ang `dimaligned` sa terminal o i-click ang **Dimension Aligned** button sa toolbar.
2. **I-click ang unang extension line origin** (p1), o i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
3. **I-click ang ikalawang extension line origin** (p2). Gumagana rin dito ang coordinate entry.
4. **Igalaw ang cursor** papunta sa isang side para itakda ang perpendicular offset ng dimension line.
5. **I-click** para ilagay, o i-type ang offset distance at pindutin ang **Enter** para sa precise na paglalagay.

## Naka-type na Offset Distance

I-type ang isang number habang naglalagay para i-fix ang dimension line sa eksaktong perpendicular distance mula sa p1→p2 na linya:

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Idagdag ang digit sa offset |
| `Backspace` | Tanggalin ang huling na-type na character |
| `Enter` / `Space` | Ilagay sa na-type na offset |

Ang side ng cursor ang nagtatakda kung aling side lalabas ang dimension line.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry (p1/p2 phases), o offset distance (placement phase) |
| `,` | I-lock ang X at lumipat sa Y entry (p1/p2 phases) |
| `Backspace` | Tanggalin ang huling na-type na character |
| `Enter` / `Space` | Kumpirmahin ang na-type na coordinate o offset |
| `Escape` | Kanselahin |

## Dimension Aligned kumpara sa Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Angle ng dimension line | Parallel sa p1→p2 — anumang angle | Palaging horizontal o vertical |
| Sinusukat | Tunay na Euclidean distance | X o Y component lang |
| H/V orientation lock | Hindi | Oo — `H` at `V` keys |
| Pinakamainam para sa | Diagonal na feature, angled na cut | Orthogonal na layout, grid-aligned na parte |

## Pag-edit ng Label — Simple Mode

**I-double-click** ang isang nailagay nang aligned dimension para buksan ang text editor sa **simple** mode. Pre-seeded na ang editor gamit ang kasalukuyang rendered value para maposisyon mo ang cursor at direktang i-edit ito.

| Feature | Behaviour |
|---------|-----------|
| Bold / Italic / Font / Height | Naa-apply sa **buong** label nang sabay-sabay |
| Per-character na formatting | Hindi suportado |
| `Enter` | Kina-commit ang value at isinasara ang editor |
| Multi-line | Hindi suportado |

Tingnan ang [Text Editor — simple mode](../../interface/text-editor/#simple-mode) para sa kumpletong reference.

## Pagkadena ng mga Dimension

Para magdagdag pa ng dimension na magpapatuloy mula sa ikalawang extension line nito, gamitin ang [Dimension Continue](../dim-continue/) — nag-lo-lock ito sa parehong measurement angle ng aligned dimension na ito.

## DXF — DIMENSION Entity (Aligned Type)

Nase-save ang mga aligned dimension bilang `DIMENSION` entities na may `dimType = 1` (aligned). Ang extension line origins, dimension line position, text position, nasukat na value, rotation, arrow style, at lahat ng display flags ay nagra-round-trip nang walang nawawala.
