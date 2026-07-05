---
sidebar_position: 16
title: Dimension Radius Command — Markahan ang Radius ng Arc at Circle sa KulmanLab CAD
description: Naglalagay ang Dimension Radius command ng radial dimension na may R-prefix sa isang arc o circle. I-click ang entity, pagkatapos igalaw ang cursor para i-orient ang dimension line mula sa center papunta sa circumference. Kumpletong DXF round-trip bilang DIMENSION radius entities.
keywords: [CAD radius dimension, dimradius, markahan ang radius ng circle, arc radius dimension, R prefix dimension, kulmanlab]
---

# Dimension Radius

Naglalagay ang `dimradius` command ng radius dimension sa isang arc o circle. Ang dimension line ay tumatakbo mula sa center papunta sa isang punto sa circumference sa direksyon ng cursor, na may label na `R <value>`. Para mag-dimension ng buong diameter sa halip, gamitin ang [Dimension Diameter](../dim-diameter/).

## Anatomiya ng Radius Dimension

```
  ● (center)
   \
    \  R 5.00
     \
      ●────── text (cursor side)
   (arc point)
```

- **Dimension line** — mula sa center papunta sa isang arc point patungo sa cursor, na may arrowhead sa arc.
- **Label** — `R` na sinusundan ng radius value.

## Paglalagay ng Radius Dimension

1. I-type ang `dimradius` sa terminal o i-click ang **Dimension Radius** button sa toolbar.
2. **I-click ang isang arc o circle** para piliin ito.
3. **Igalaw ang cursor** para i-orient ang dimension line — sinusundan ng arc-point ang direksyon ng cursor mula sa center.
4. **I-click** para ilagay ang dimension.

Tanging **Arc** at **Circle** entities lang ang puwedeng piliin. Walang mangyayari kapag ni-click ang ibang entity type.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `Escape` | Kanselahin |

## Dimension Radius kumpara sa Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Sinusukat | Radius (center papunta sa edge) | Diameter (edge papunta sa edge sa pamamagitan ng center) |
| Dimension line | Center → arc point | Arc point → arc point (sa pamamagitan ng center) |
| Label prefix | `R` | `⌀` |
| Arrowheads | Isa (sa arc point) | Dalawa (sa dalawang arc points) |
| Pinakamainam para sa | Pagmamarka ng isang panig ng curved feature | Pagmamarka ng buong circular dimensions |

## Pag-edit ng Label — simple mode

**I-double-click** ang nailagay na radius dimension para buksan ang text editor sa **simple** mode. Naka-preload na ang editor ng kasalukuyang rendered value (hal. `R 5.00`) para direktang mailagay ang cursor at ma-edit ito.

| Feature | Kilos |
|---------|-----------|
| Bold / Italic / Font / Height | Naaaplay sa **buong** label nang sabay |
| Per-character formatting | Hindi suportado |
| `Enter` | Kinukumpirma ang value at isinasara ang editor |
| Multi-line | Hindi suportado |

Tingnan ang [Text Editor — simple mode](../../interface/text-editor/#simple-mode) para sa kumpletong reference.

## DXF — DIMENSION Radius Entity

Nase-save ang mga radius dimension bilang `DIMENSION` entities na may radius-type geometry, na nag-iimbak ng center coordinates, arc-point position, at ang sinukat na radius value. Lahat ng properties ay nagra-round-trip nang walang nawawala.
