---
title: "Explode Command — hatiin ang polyline o block sa mga bahagi nito"
description: "Hinahati ng Explode command ang isang polyline sa mga Line at Arc entity nito, o ang isang block reference sa mga entity na iginuguhit ng block nito, sa mismong lugar. Ang mga piraso ay mukhang eksakto gaya ng orihinal."
keywords: [CAD explode command, i-explode ang polyline, hatiin ang polyline sa mga linya, i-convert ang polyline sa line at arc, kulmanlab]
group: edit
order: 19
---

# Explode

Hinahati ng `Hatiin` command ang isang [Polyline](../polyline/) sa mga indibidwal na [Line](../line/) at [Arc](../arc/) na entity nito — isa kada segment, eksakto kung saan naroon ang mga vertex mismo ng polyline. Ang mga piraso ay humahalili sa polyline sa kinaroroonan nito at pinapanatili ang linewidth, kulay, layer, at linetype nito.

Gumagana ang Explode sa mga **Polyline** entity at **block reference**.

## Paggamit ng explode

Dalawang paraan para patakbuhin ito, parehong pattern gaya ng [Delete](../delete/):

**Piliin muna, saka i-explode** — ang pinakamabilis na paraan:

1. Pumili ng isa o higit pang polyline sa canvas.
2. I-type ang `Hatiin` sa terminal, o piliin ang **Explode** mula sa dropdown sa Edit panel.

Agad na na-explode ang mga napiling polyline — walang hiwalay na hakbang ng kumpirmasyon, dahil may nakapili na.

**I-activate, saka pumili**:

1. I-type ang `Hatiin` o piliin ang **Explode** mula sa dropdown nang walang napili.
2. **Pumili ng mga polyline o block reference** — mag-click para i-toggle, o i-drag para pumili ayon sa lugar.
3. Pindutin ang **Enter** o **Space** para kumpirmahin at i-explode ang mga napiling polyline.

Habang pumipili, mga polyline at block reference lang ang kinukuha — walang nangyayari sa pag-click sa Line, Circle o ibang entity, at binabalewala ng area drag ang lahat ng iba pang nasa loob o tumatawid dito.

## Ano ang lumalabas

Ang bawat segment ng polyline ay nagiging sarili nitong entity:

- Ang isang **straight na segment** ay nagiging isang **Line**.
- Ang isang **arc segment** (mula sa [Arc option](../polyline/) ng Polyline) ay nagiging isang **Arc**, na eksaktong tumutugma sa gitna, radius, at sweep ng orihinal na kurba.

Ang bawat resultang Line at Arc ay nagmamana ng **linewidth, kulay, layer, linetype, at linetype scale** ng orihinal na polyline — walang nagbabago sa hitsura ng geometry, maliban na lang na ngayon ay ilang independiyenteng entity na ito sa halip na isang konektadong polyline.

Ang isang **block reference** ay nagiging mga entity na iginuguhit ng block nito, inilalagay kung saan ito ipinakita ng reference. Iniiwan ang mga entity na itinatago ng block — ang ibang state ng dynamic block; bawat attribute ay nagiging karaniwang Text na may halaga nito; ang mga pirasong iginuhit nang ByBlock ay kumukuha ng kulay ng reference, at ang mga nasa layer 0 ay kumukuha ng layer nito. Ang block na nakapaloob ay lumalabas bilang sariling block reference, na maaari mo ring hatiin. Hindi kinukuha ang reference na iba ang scale sa X at Y, dahil kailangang maging ellipse ang mga bilog nito.

Ang pag-explode ay maaaring i-undo bilang iisang hakbang gamit ang [Undo](../undo/), gaya ng iba pang pag-edit.

## Pagpili habang naka-activate ang command

| Paraan | Kilos |
|--------|-------|
| **Click** | Idinadagdag o inaalis sa pagpili ang polyline o block reference sa ilalim ng cursor; walang nangyayari sa pag-click sa ibang entity |
| **I-drag pakanan** (mahigpit) | Pinipili lang ang mga polyline at block reference na buong nasa loob ng kahon |
| **I-drag pakaliwa** (crossing) | Pinipili ang mga polyline at block reference na tumatawid sa hangganan ng kahon |
| **Enter** / **Space** | Kinukumpirma at hinahati ang napili |

## Supported na mga Entity

| Entity | Supported |
|--------|-----------|
| Polyline / Rectangle | Oo |
| Block reference | Oo, maliban kung magkaiba ang scale sa X at Y |
| Line, Arc, Circle, Ellipse | Hindi — walang i-e-explode |
| Text, Spline, Dimension, Leader, Hatch | Hindi |
