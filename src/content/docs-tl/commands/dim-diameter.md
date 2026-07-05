---
sidebar_position: 17
title: "Dimension Diameter Command — Markahan ang Buong Diameter ng Circle at Arc sa KulmanLab CAD"
description: "Naglalagay ang Dimension Diameter command ng diameter dimension (may prefix na diameter symbol) sa kabuuan ng isang arc o circle sa pamamagitan ng center. Igalaw ang cursor para i-rotate ang dimension line sa anumang angle. Kumpletong DXF round-trip bilang DIMENSION diameter entities."
keywords: [CAD diameter dimension, dimdiameter, markahan ang diameter ng circle, arc diameter dimension, diameter symbol CAD, kulmanlab]
---

# Dimension Diameter

Naglalagay ang `dimdiameter` command ng diameter dimension sa isang arc o circle. Ang dimension line ay sumasaklaw sa buong diameter — dumaraan sa center sa pagitan ng dalawang diametrically opposite na arc points — at may label na `⌀ <value>`. Para markahan lang ang radius mula sa center papunta sa isang gilid, gamitin ang [Dimension Radius](../dim-radius/).

## Anatomiya ng Diameter Dimension

```
  ●──────────── ⌀ 10.00 ────────────●
  (far arc point)              (near arc point / text side)
```

- **Dimension line** — sumasaklaw sa buong diameter, na may arrowheads sa dalawang arc-intersection points.
- **Near arc point** — ang circumference point sa panig ng cursor (kung saan nakalagay ang text label).
- **Far arc point** — ang diametrically opposite na punto.
- **Label** — `⌀` na sinusundan ng diameter value.

## Paglalagay ng Diameter Dimension

1. I-type ang `dimdiameter` sa terminal o i-click ang **Dimension Diameter** button sa toolbar.
2. **I-click ang isang arc o circle** para piliin ito.
3. **Igalaw ang cursor** para i-rotate ang dimension line sa gustong angle.
4. **I-click** para ilagay ang dimension.

Tanging **Arc** at **Circle** entities lang ang puwedeng piliin.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `Escape` | Kanselahin |

## Dimension Diameter kumpara sa Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Sinusukat | Buong diameter (2 × radius) | Radius (center papunta sa edge) |
| Dimension line | Edge → edge sa pamamagitan ng center | Center → edge |
| Label prefix | `⌀` | `R` |
| Arrowheads | Dalawa (sa dalawang arc points) | Isa (sa arc point) |
| Pinakamainam para sa | Buong circular hole o shaft dimensions | Pagmamarka ng isang panig ng curved feature |

## Pag-edit ng Label — simple mode

**I-double-click** ang nailagay na diameter dimension para buksan ang text editor sa **simple** mode. Naka-preload na ang editor ng kasalukuyang rendered value (hal. `⌀ 10.00`) para direktang mailagay ang cursor at ma-edit ito.

| Feature | Kilos |
|---------|-----------|
| Bold / Italic / Font / Height | Naaaplay sa **buong** label nang sabay |
| Per-character formatting | Hindi suportado |
| `Enter` | Kinukumpirma ang value at isinasara ang editor |
| Multi-line | Hindi suportado |

Tingnan ang [Text Editor — simple mode](../../interface/text-editor/#simple-mode) para sa kumpletong reference.

## DXF — DIMENSION Diameter Entity

Nase-save ang mga diameter dimension bilang `DIMENSION` entities na may diameter-type geometry, na nag-iimbak ng dalawang arc-point positions at ang sinukat na diameter value (2 × radius). Lahat ng properties ay nagra-round-trip nang walang nawawala.
