---
sidebar_position: 21
title: Chamfer Command — Puputulin ang Straight na Sulok sa Pagitan ng Dalawang Linya sa KulmanLab CAD
description: Kinokonekta ng Chamfer command ang dalawang Line o Polyline entities gamit ang straight diagonal cut. Magtatakda ka ng dalawang distansya — isa sa bawat entity — at trinim ng command ang pareho pabalik hanggang sa mga puntong iyon, at isinisingit ang connecting line.
keywords: [CAD chamfer command, chamfer line CAD, diagonal corner cut, bevel corner CAD, kulmanlab]
---

# Chamfer

Pumuputol ang `chamfer` command ng straight diagonal na sulok sa pagitan ng dalawang [Line](../line/) o [Polyline](../polyline/) entities. Itinatakda mo kung gaano kalayo ang puputulin pabalik sa bawat entity (d1 at d2), at trinim ng command ang pareho hanggang sa mga puntong iyon at isinisingit ang connecting line sa pagitan nila.

Ang paggamit ng pantay na distansya ay gumagawa ng symmetric na 45° cut; ang magkaibang distansya ay gumagawa ng asymmetric na bevel.

Gumagana ang Chamfer sa **Line at Polyline** entities.

## Paggamit ng Chamfer

1. I-type ang `chamfer` sa terminal o i-click ang **Chamfer** button sa toolbar.
2. **I-type ang unang chamfer distance** (d1 — distansya sa unang entity) at pindutin ang **Enter**.
3. **I-type ang ikalawang chamfer distance** (d2 — distansya sa ikalawang entity) at pindutin ang **Enter**.
4. **I-click ang unang entity** — ang bahaging kinlik-an mo ang nagtatakda kung aling side ng intersection ang mapapanatili.
5. **I-hover sa ikalawang entity** — may dashed line preview na nagpapakita ng resultang chamfer cut. Igalaw ang cursor papunta sa side na gusto mong panatilihin.
6. **I-click** para i-apply. Trinim ang dalawang entity at isinisingit ang chamfer line.

```
  Before (d1=5, d2=8):        After:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Pagpili ng Side

Kapag nagtatawid ang dalawang linya, ia-apply ang chamfer sa sulok na tinutukoy ng mga posisyon ng click — ang bahagi ng bawat entity na nasa **parehong side ng cursor** ang mapapanatili.

- Mag-click malapit sa isang dulo ng unang entity para piliin ang half na iyon.
- Igalaw ang cursor papunta sa gustong half ng ikalawang entity — nag-a-update nang live ang dashed preview.

Para sa mga Polyline, ang posisyon ng click ang nagtatakda kung aling **segment** ng polyline ang kasali, at ang pinakamalapit na vertex sa intersection side ang trinim.

## Ano ang Ginagawa ng Command

- Ang endpoint (o polyline vertex) ng unang entity na pinakamalapit sa intersection ay inilipat papunta sa punto **T1**, na nasa distansyang d1 mula sa intersection sa unang entity.
- Ang endpoint (o polyline vertex) ng ikalawang entity na pinakamalapit sa intersection ay inilipat papunta sa punto **T2**, na nasa distansyang d2 mula sa intersection sa ikalawang entity.
- May bagong Line entity na isinisingit mula sa **T1** papunta sa **T2**.

Minamana ng isinisingit na linya ang kasalukuyang lineweight, color, layer, at linetype settings.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Idagdag ang digit sa kasalukuyang distance value |
| `Backspace` | Tanggalin ang huling na-type na character |
| `Enter` | Kumpirmahin ang na-type na distansya at magpatuloy |
| `Escape` | Kanselahin at mag-reset |

## Supported na mga Entity

| Entity | Supported |
|--------|-----------|
| Line | Oo |
| Polyline / Rectangle | Oo |
| Arc, Circle, Ellipse | Hindi |
| Text, Spline, Dimension, Leader | Hindi |

## Chamfer kumpara sa Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Uri ng Sulok | Straight cut | Rounded arc |
| Input | Dalawang distansya (d1, d2) | Isang radius |
| Isinisingit na Entity | Line | Arc |
| Supported na entities | Lines at Polylines | Lines lang |
