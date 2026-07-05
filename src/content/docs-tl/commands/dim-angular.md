---
sidebar_position: 9
title: Dimension Angular — Sukatin ang Angle sa Pagitan ng mga Line, Arc at Circle sa KulmanLab CAD
description: Naglalagay ang DimensionAngular command ng angular dimension annotation sa mga line, arc, o circle. Sinusuportahan ang two-line angle, arc span, at circle sector modes.
keywords: [angular dimension CAD, angle dimension, sukatin ang angle sa pagitan ng mga linya, DimensionAngular, arc dimension, angle annotation, CAD angle markup, kulmanlab angular dimension]
---

# Dimension Angular

Naglalagay ang `DimensionAngular` command ng **angular dimension** arc annotation sa drawing. Sinusukat at minamarkahan nito ang angle sa pagitan ng dalawang linya, ang span ng isang arc, o ang sector ng isang circle.

## Paano I-activate

I-click ang **Dimension Angular** button sa toolbar sa Markup panel, o i-type ang `DimensionAngular` sa terminal.

## Tatlong Input Mode

Ang unang click ang magtatakda kung aling mode ang gagamitin:

### Dalawang Linya

1. **I-click ang unang linya.** Ang posisyon ng cursor ang magtatakda kung aling panig ng linya ang gagamitin.
2. **I-click ang pangalawang linya.** Dapat magsalubong ang dalawang linya (awtomatikong kinukuwenta ang intersection; hindi kailangang makita ito sa screen).
3. **I-click para ilagay** ang dimension arc. Igalaw ang cursor para piliin ang radius at kung aling angular sector ang mala-label — sinusundan ng annotation ang cursor sa alinmang panig ng vertex kung nasaan ka.

Hindi puwedeng bumuo ng angular dimension ang parallel na mga linya; hindi pinapansin ng command ang pangalawang click kung hindi nagsasalubong ang mga linya.

### Arc

1. **I-click ang isang arc.** Agad nagagawa ang dimension mula sa start angle hanggang end angle ng arc, gamit ang center ng arc bilang vertex.
2. **I-click para ilagay** ang dimension arc sa gustong radius.

### Circle

1. **I-click ang isang circle.** Naka-snap ang unang angle endpoint sa pinakamalapit na punto sa circle.
2. **I-click ang pangalawang punto** sa circle para itakda ang pangalawang angle endpoint.
3. **I-click para ilagay** ang dimension arc.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `Escape` | Kanselahin at bumalik sa unang pagpili |

## Detalye ng Kilos

- Palaging iginuguhit ang dimension arc sa panig ng vertex kung saan mo ito inilagay — igalaw ang cursor patawid ng vertex para lumipat sa supplementary angle.
- Ipinapakita ang sinukat na angle sa degrees at nagra-update nang live habang gumagalaw ang cursor sa paglalagay.
- Ang resultang annotation ay isang kumpletong `DimensionAngular` entity na nakatago sa kasalukuyang layer. Ang mga appearance properties nito (arrow size, text height, extension line length) ay puwedeng i-adjust sa Properties panel.
- Kasama ang angular dimensions sa JSON export pero hindi ito suportado ng DXF exporter.

## Pag-edit ng Label — simple mode

**I-double-click** ang nailagay na angular dimension para buksan ang text editor sa **simple** mode. Naka-preload na ang editor ng kasalukuyang rendered value para direktang mailagay ang cursor at ma-edit ito.

| Feature | Kilos |
|---------|-----------|
| Bold / Italic / Font / Height | Naaaplay sa **buong** label nang sabay |
| Per-character formatting | Hindi suportado |
| `Enter` | Kinukumpirma ang value at isinasara ang editor |
| Multi-line | Hindi suportado |

Tingnan ang [Text Editor — simple mode](../../interface/text-editor/#simple-mode) para sa kumpletong reference.

## Kaugnay na mga Command

- [Dimension Linear](../dim-linear/) — horizontal o vertical na dimension
- [Dimension Aligned](../dim-aligned/) — dimension na naka-align sa dalawang punto
- [Dimension Radius](../dim-radius/) — radius dimension para sa mga arc at circle
- [Dimension Diameter](../dim-diameter/) — diameter dimension para sa mga circle
