---
sidebar_position: 15
title: Dimension Continue Command — Kumadena ng mga Dimension Mula sa Umiiral na Baseline sa KulmanLab CAD
description: Pinapalawig ng Dimension Continue command ang kadena ng mga dimension mula sa second extension line ng huling nailagay na dimension. Awtomatiko nitong minamana ang angle, offset, arrow size, at text height ng base dimension. Gumagana ito sa parehong linear at aligned na base.
keywords: [CAD dimension continue, dimcontinue, kumadena ng dimension CAD, baseline dimension, ipagpatuloy ang dimension series, kulmanlab]
---

# Dimension Continue

Kinakadena ng `dimcontinue` command ang mga bagong dimension mula sa **second extension line** ng umiiral na dimension. Ang bawat bagong segment ay nakalagay sa parehong measurement axis at sa parehong dimension-line offset gaya ng base. Lahat ng style properties — arrow size, text height, extension line lengths — ay awtomatikong kinokopya mula sa base.

## Ang hitsura ng mga kinadenang dimension

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (base    p3           p4
           ext2 → new start)
```

Ang bawat rectangle ay hiwalay na `DIMENSION` entity. Pareho ang dimension-line position at measurement direction nila.

## Pagsisimula ng Kadena

1. I-type ang `dimcontinue` sa terminal o i-click ang **Dimension Continue** button sa toolbar.
2. **Kung kararaan lang maglagay ng dimension** — awtomatiko itong kinukuha ng command bilang base (walang kailangang i-click).
3. **Kung walang kamakailang dimension** — i-click ang anumang umiiral na dimension para gamitin bilang base.
4. **I-click ang origin ng susunod na extension line** — may preview na nagpapakita ng bagong dimension habang gumagalaw ang cursor. O i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
5. Magpatuloy sa pag-click (o pag-type) para palawigin ang kadena. Ang bawat nailagay na dimension ay awtomatikong nagiging bagong base.
6. Pindutin ang **Enter**, **Space**, o **Escape** para tapusin ang kadena.

## Ano ang minamana mula sa base dimension

| Property | Minamana mula sa base |
|----------|---------------------|
| Measurement direction / angle | Oo — naka-lock para sa buong kadena |
| Dimension line offset (distansya mula sa mga sinusukat na puntos) | Oo |
| Arrow size | Oo |
| Text height | Oo |
| Extension line offset at extension | Oo |
| Text alignment | Oo |
| Style name | Oo |
| Color, Layer | Hindi minamana — ginagamit ang kasalukuyang layer |

## Pag-lock sa Measurement Direction

Ang measurement direction ng kadena ay **naka-fix sa angle ng base dimension**:

- Linear base (H) → sinusukat ng lahat ng continuation ang horizontal distance (Δ X).
- Linear base (V) → sinusukat ng lahat ng continuation ang vertical distance (Δ Y).
- Aligned base sa anumang angle → sinusukat ng lahat ng continuation ang parehong angle.

Hindi mo puwedeng baguhin ang direction sa gitna ng kadena. Magsimula ng bagong [Dimension Linear](../dim-linear/) o [Dimension Aligned](../dim-aligned/) para mag-dimension sa ibang direksyon.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Kumpirmahin ang na-type na coordinate, o tapusin ang kadena kung walang input na isinasagawa |
| `Space` / `Escape` | Tapusin ang kadena |

## Dimension Continue kumpara sa Pagsisimula ng Bago

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Starting point | Naka-fix sa ext2 ng huling base | I-click kahit saan |
| Angle | Naka-lock sa base | Libre |
| Offset | Minamana mula sa base | Itinatakda ng cursor o na-type |
| Style | Minamana mula sa base | Kasalukuyang style |
| Pinakamainam para sa | Cumulative na sukat sa isang hanay | Unang dimension o pagbabago ng direksyon |

## Pag-edit ng mga Label Pagkatapos Ilagay — simple mode

**I-double-click** ang anumang dimension sa kadena para buksan ang text editor sa **simple** mode. Independyente ang bawat segment at puwedeng i-edit nang isa-isa.

| Feature | Kilos |
|---------|-----------|
| Bold / Italic / Font / Height | Naaaplay sa **buong** label nang sabay |
| Per-character formatting | Hindi suportado |
| `Enter` | Kinukumpirma ang value at isinasara ang editor |
| Multi-line | Hindi suportado |

Tingnan ang [Text Editor — simple mode](../../interface/text-editor/#simple-mode) para sa kumpletong reference.

## DXF — DIMENSION Entities

Ang bawat segment sa kadena ay nakatago bilang independyenteng `DIMENSION` entity sa DXF file. Hindi sila naka-link sa file — magkapareho ang properties nila dahil ginawa sila mula sa parehong base, pero puwedeng i-edit ang bawat isa nang hiwalay pagkatapos ilagay.
