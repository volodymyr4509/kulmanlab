---
title: Fillet Command — I-round ang Sulok gamit ang Tangent Arc
description: Ini-round ng Fillet command ang sulok sa pagitan ng dalawang Line, Arc, o Polyline segment gamit ang tangent arc na may nakatakdang radius. Ang pag-round sa sariling sulok ng isang polyline ay direktang isinisingit ang arc sa loob nito; ang pag-round sa kabuuan ng isang open polyline ay pinagsasama ang dalawang panig sa isang bagong polyline.
keywords: [CAD fillet command, i-round ang sulok CAD, fillet arc, tangent arc, fillet polyline, fillet arc, kulmanlab]
group: edit
order: 11
---

# Fillet

Ini-round ng `Bilugin` command ang sulok sa pagitan ng dalawang [Line](../line/), [Arc](../arc/), o [Polyline](../polyline/) segment sa pamamagitan ng pagsingit ng tangent arc na may nakatakdang radius, na tinitrim (o pinagsasama) ang mga napiling entity pabalik hanggang sa puntong iyon.

Gumagana ang Fillet sa **Line, Arc, at Polyline** entities — kasama na ang mga straight o arc segment ng polyline mismo.

## Paggamit ng Fillet

1. I-type ang `Bilugin` sa terminal o i-click ang **Fillet** button sa toolbar.
2. **I-type ang fillet radius** at pindutin ang **Enter**.
3. **I-click ang unang linya, arc, o polyline segment** — ang bahaging kinlik-an mo ang nagtatakda kung aling side ng intersection ang mapapanatili.
4. **I-hover sa ikalawang entity** — may dashed arc preview na nagpapakita ng resultang fillet. Igalaw ang cursor papunta sa side na gusto mong panatilihin.
5. **I-click** para i-apply.

```
  Before:                     After fillet (radius r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Pagpili ng Side para sa Nagtatawid na mga Entity

Kapag nagtatawid ang dalawang entity, ia-apply ang fillet sa sulok na tinutukoy ng mga posisyon ng click — ang bahagi ng bawat entity na nasa **parehong side ng cursor** ang mapapanatili.

- Mag-click malapit sa isang dulo ng unang entity para piliin ang half na iyon.
- Igalaw ang cursor papunta sa gustong half ng ikalawang entity — nag-a-update nang live ang dashed preview.

## Ano ang Ginagawa ng Command

Nakadepende ang resulta sa napili mo:

- **Dalawang standalone na Line/Arc entity**, o anumang pares na walang open polyline: pareho silang tinitrim pabalik hanggang sa tangent points **T1**/**T2**, at may bagong Arc entity na isinisingit sa pagitan nila.
- **Dalawang segment ng parehong polyline na may sharing corner vertex**: walang bagong entity — nagiging bahagi ng polyline mismo ang fillet. Pinapalitan ang corner vertex ng dalawang tangent point, at ang arc sa pagitan nila ay iniimbak bilang bulge value ng gilid na iyon — eksaktong tulad ng pag-round-trip ng isang rounded polyline corner sa DXF.
- **Ang lahat pang iba na may kasamang open polyline** — dalawang magkaibang open polyline, o open polyline at standalone na Line/Arc: pareho silang pinagsasama sa **iisang bagong polyline**, na napapanatili ang bawat side hanggang sa sarili nitong tangent point at pinagdurugtong ng fillet arc bilang karagdagang bulge segment, na pumapalit sa mga orihinal na entity.

Minamana ng isinisingit o pinahabang arc ang kasalukuyang lineweight, color, layer, at linetype settings (o ang sa polyline mismo, kapag naisama na dito).

## Mga Sulok na Walang Totoong Angle na Puwedeng I-round

Kung ang dalawang napiling segment ay nagtatagpo na nang tangent sa isang shared vertex — isang straight na polyline corner, o isang linya na maayos na dumadaloy papunta sa isang tangent-continuation arc segment — walang totoong sulok na puwedeng i-round ng anumang circle. Nadidetect ito ng Fillet at tumatanggi gamit ang mensaheng `cannot fillet: no tangent circle fits there` sa halip na gumuhit ng hindi ninanais na loop.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Idagdag ang digit sa radius value |
| `Backspace` | Tanggalin ang huling na-type na character |
| `Enter` / `Space` | Kumpirmahin ang na-type na radius at magpatuloy sa entity selection |
| `Escape` | Kanselahin at mag-reset |

## Supported na mga Entity

| Entity | Supported |
|--------|-----------|
| Line | Oo |
| Arc | Oo |
| Polyline (straight o arc segment) | Oo |
| Circle, Ellipse | Hindi |
| Text, Spline, Dimension, Leader | Hindi |

## Fillet kumpara sa Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Uri ng Sulok | Rounded arc | Straight cut |
| Input | Isang radius | Dalawang distansya (d1, d2) |
| Isinisingit na Entity | Arc | Line |
| Supported na entities | Lines, Arcs, at Polylines (straight o arc segment) | Lines at Polylines (straight segment lamang) |
