---
title: Fillet Command — I-round ang Sulok sa Pagitan ng Dalawang Linya sa KulmanLab CAD
description: Kinokonekta ng Fillet command ang dalawang Line entities gamit ang tangent arc na may nakatakdang radius, na tinatrim pabalik ang bawat linya hanggang sa tangent point. May dashed arc preview na tumutulong sa iyo na piliin ang tamang sulok bago mag-click.
keywords: [CAD fillet command, i-round ang sulok CAD, fillet arc, tangent arc dalawang linya, kulmanlab]
group: edit
order: 11
---

# Fillet

Ini-round ng `fillet` command ang sulok sa pagitan ng dalawang [Line](../line/) entities sa pamamagitan ng pagsingit ng tangent arc na may nakatakdang radius, at pagtri-trim pabalik sa bawat linya hanggang sa punto kung saan nagsisimula ang arc. Ang resulta ay isang makinis na sulok na may radius, na kumokonekta sa dalawang linya.

Gumagana lang ang Fillet sa **Line entities**.

## Paggamit ng Fillet

1. I-type ang `fillet` sa terminal o i-click ang **Fillet** button sa toolbar.
2. **I-type ang fillet radius** at pindutin ang **Enter**.
3. **I-click ang unang linya** — ang bahaging kinlik-an mo ang nagtatakda kung aling side ng intersection ang mapapanatili.
4. **I-hover sa ikalawang linya** — may dashed arc preview na nagpapakita ng resultang fillet. Igalaw ang cursor papunta sa side na gusto mong panatilihin.
5. **I-click** para i-apply. Trinim ang dalawang linya at isinisingit ang arc.

```
  Before:                     After fillet (radius r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Pagpili ng Side para sa Nagtatawid na Linya

Kapag nagtatawid ang dalawang linya, ia-apply ang fillet sa sulok na tinutukoy ng mga posisyon ng click — ang bahagi ng bawat linya na nasa **parehong side ng cursor** ang mapapanatili.

- Mag-click malapit sa isang dulo ng unang linya para piliin ang half na iyon.
- Igalaw ang cursor papunta sa gustong half ng ikalawang linya — nag-a-update nang live ang dashed preview.

## Ano ang Ginagawa ng Command

- Ang endpoint ng unang linya na pinakamalapit sa intersection ay inilipat papunta sa tangent point **T1**.
- Ang endpoint ng ikalawang linya na pinakamalapit sa intersection ay inilipat papunta sa tangent point **T2**.
- May bagong Arc entity na isinisingit mula sa **T1** papunta sa **T2**, na tangent sa parehong linya.

Minamana ng isinisingit na arc ang kasalukuyang lineweight, color, layer, at linetype settings.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Idagdag ang digit sa radius value |
| `Backspace` | Tanggalin ang huling na-type na character |
| `Enter` | Kumpirmahin ang na-type na radius at magpatuloy sa line selection |
| `Escape` | Kanselahin at mag-reset |

## Supported na mga Entity

| Entity | Supported |
|--------|-----------|
| Line | Oo — bilang parehong una at ikalawang entity |
| Arc, Circle, Ellipse, Polyline | Hindi |
| Text, Spline, Dimension, Leader | Hindi |

## Fillet kumpara sa Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Uri ng Sulok | Rounded arc | Straight cut |
| Input | Isang radius | Dalawang distansya (d1, d2) |
| Isinisingit na Entity | Arc | Line |
| Supported na entities | Lines lang | Lines at Polylines |
