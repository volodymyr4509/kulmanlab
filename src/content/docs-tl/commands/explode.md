---
title: Explode Command — Hatiin ang Polyline sa Line at Arc na mga Entity
description: Hinahati ng Explode command ang isang polyline sa kinaroroonan nito tungo sa mga indibidwal na Line at Arc entity, isa kada segment. Pinapanatili ng bawat piraso ang linewidth, kulay, layer, at linetype ng orihinal na polyline. Gumagana lamang sa mga Polyline entity.
keywords: [CAD explode command, i-explode ang polyline, hatiin ang polyline sa mga linya, i-convert ang polyline sa line at arc, kulmanlab]
group: edit
order: 16
---

# Explode

Hinahati ng `Hatiin` command ang isang [Polyline](../polyline/) sa mga indibidwal na [Line](../line/) at [Arc](../arc/) na entity nito — isa kada segment, eksakto kung saan naroon ang mga vertex mismo ng polyline. Ang mga piraso ay humahalili sa polyline sa kinaroroonan nito at pinapanatili ang linewidth, kulay, layer, at linetype nito.

Gumagana lamang ang Explode sa mga **Polyline** na entity.

## Paggamit ng explode

Dalawang paraan para patakbuhin ito, parehong pattern gaya ng [Delete](../delete/):

**Piliin muna, saka i-explode** — ang pinakamabilis na paraan:

1. Pumili ng isa o higit pang polyline sa canvas.
2. I-type ang `Hatiin` sa terminal, o i-click ang **Explode** button sa Edit panel.

Agad na na-explode ang mga napiling polyline — walang hiwalay na hakbang ng kumpirmasyon, dahil may nakapili na.

**I-activate, saka pumili**:

1. I-type ang `Hatiin` o i-click ang toolbar button nang walang napili.
2. **Pumili ng mga polyline** — i-click para i-toggle, o i-drag para pumili ayon sa area.
3. Pindutin ang **Enter** o **Space** para kumpirmahin at i-explode ang mga napiling polyline.

Mga polyline lamang ang nakukuha habang pumipili — walang epekto ang pag-click sa isang Line, Circle, o anumang ibang entity, at binabalewala ng pag-drag sa area ang lahat maliban sa mga polyline na nasa loob o tumatawid dito.

## Ano ang lumalabas

Ang bawat segment ng polyline ay nagiging sarili nitong entity:

- Ang isang **straight na segment** ay nagiging isang **Line**.
- Ang isang **arc segment** (mula sa [Arc option](../polyline/) ng Polyline) ay nagiging isang **Arc**, na eksaktong tumutugma sa gitna, radius, at sweep ng orihinal na kurba.

Ang bawat resultang Line at Arc ay nagmamana ng **linewidth, kulay, layer, linetype, at linetype scale** ng orihinal na polyline — walang nagbabago sa hitsura ng geometry, maliban na lang na ngayon ay ilang independiyenteng entity na ito sa halip na isang konektadong polyline.

Ang pag-explode ay maaaring i-undo bilang iisang hakbang gamit ang [Undo](../undo/), gaya ng iba pang pag-edit.

## Pagpili habang naka-activate ang command

| Paraan | Kilos |
|--------|-------|
| **Click** | Tino-toggle ang polyline sa ilalim ng cursor papasok/palabas ng seleksyon; walang epekto ang pag-click sa entity na hindi polyline |
| **I-drag pakanan** (mahigpit) | Pumipili lamang ng mga polyline na lubos na nasa loob ng box |
| **I-drag pakaliwa** (crossing) | Pumipili ng mga polyline na tumatawid sa hangganan ng box |
| **Enter** / **Space** | Kinukumpirma at ini-explode ang mga napiling polyline |

## Supported na mga Entity

| Entity | Supported |
|--------|-----------|
| Polyline / Rectangle | Oo |
| Line, Arc, Circle, Ellipse | Hindi — walang i-e-explode |
| Text, Spline, Dimension, Leader, Hatch | Hindi |
