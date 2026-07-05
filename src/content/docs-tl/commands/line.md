---
sidebar_position: 1
title: "Line Command — Gumuhit, Kumadena, Putulin, at Palawigin ang mga Linya sa KulmanLab CAD"
description: "Ginuguhit ng Line command ang mga indibidwal na straight line segment na puwedeng kumadena end-to-end. Ang Line ang tanging entity type na ginagamitan ng Trim at Extend. Kumpletong DXF round-trip bilang LINE entities."
keywords: [CAD line command, gumuhit ng straight line CAD, kumadena ng line segment, putulin ang linya CAD, palawigin ang linya CAD, angle lock CAD, DXF LINE entity, kulmanlab]
---

# Line

Ginuguhit ng `line` command ang mga indibidwal na straight line segment, na naka-save bilang hiwalay na `LINE` entities sa DXF model. Nananatiling aktibo ang command pagkatapos ng bawat segment at ginagamit muli ang endpoint bilang bagong starting point, kaya puwede kang gumawa ng magkakadugtong na path nang isang segment sa isang pagkakataon. Hindi tulad ng [Polyline](../polyline/), nananatiling hiwalay na entity ang mga kinadenang linya — puwedeng i-trim, i-extend, o tanggalin ang bawat isa nang hindi naaapektuhan ang mga kalapit nito.

## Pagguhit ng Isang Linya

1. I-type ang `line` sa terminal o i-click ang **Line** button sa toolbar.
2. **I-click ang starting point**, o i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
3. **I-click ang endpoint** — mailalagay ang segment at ang endpoint ang magiging susunod na starting point. Gumagana rin dito ang coordinate input.
4. Patuloy na mag-click (o mag-type) para magkadena ng mas maraming segment.
5. Pindutin ang **Enter** o **Escape** para itigil.

```
  ●──────────●──────────●──────────●
 start     2nd click  3rd click   Enter to finish
            (auto-becomes next start)
```

Isang segment lang ba ang kailangan? Pindutin ang **Enter** o **Escape** kaagad pagkatapos ng hakbang 3.

## Coordinate Entry

Sa halip na mag-click, i-type ang eksaktong posisyon para sa starting point o sa alinmang susunod na punto:

1. I-type ang X value (mga digit, `.`, o `-`).
2. Pindutin ang `,` — ipinapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang Y value.
4. Pindutin ang **Enter** para ilagay ang punto.

## Angle Locking at Eksaktong Length Input

Habang ginagalaw mo ang cursor pagkatapos maglagay ng punto, sinusubaybayan ng command ang 45° na snap axis (0°, 45°, 90°, 135°, …). Nagla-**lock** ang angle kapag:

- ang cursor ay hindi bababa sa **5 × grip size** mula sa anchor, **at**
- nasa loob ito ng **1 grip size** ng perpendicular distance mula sa pinakamalapit na axis.

Kapag naka-lock, mag-s-snap ang preview sa axis at puwede kang maglagay ng eksaktong length:

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Idagdag ang digit sa length value |
| `-` | Negative na length — binabaligtad ang direksyon sa axis (unang character lang) |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Ilagay ang endpoint sa na-type na distansya |

Ipinapakita nang live ang naipong value sa terminal (hal. `click end point or enter length: 12.5`). Kapag nag-click ka habang naka-lock, naipoproject ang click papunta sa axis, kaya laging eksaktong nasa axis ang endpoint.

Ang paglipat pabalik palapit sa anchor point ay nagpapatanggal sa lock.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry, o distansya kapag angle-locked |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Kumpirmahin ang na-type na coordinate o length, o tapusin ang chain kung walang na-type |
| `Escape` | Tapusin ang chain at lumabas |

## Grip Editing — Pag-stretch ng mga Endpoint

Nagpapakita ang napiling linya ng tatlong grip:

| Grip | Saan | Ano ang ginagawa nito |
|------|-------|--------------|
| **Start** | Unang endpoint | I-drag para baguhin ang posisyon — nananatiling fixed ang end |
| **Midpoint** | Gitna ng linya | Ino-activate ang **Move** para sa buong linya |
| **End** | Ikalawang endpoint | I-drag para baguhin ang posisyon — nananatiling fixed ang start |

Ang pag-stretch sa isang endpoint ay hindi kailanman nakakaapekto sa isa. Iba ito sa grip editing ng [Polyline](../polyline/), kung saan ang paglipat ng vertex ay nagbabago sa hugis ng buong path.

## Pagpili ng mga Linya

| Method | Kilos |
|--------|-----------|
| **Click** | Napipili ang linya kung ang click ay nasa loob ng hit-test distance ng segment |
| **Drag right** (strict) | Napipili lang ang linya kung parehong endpoint ay nasa loob ng box |
| **Drag left** (crossing) | Napipili ang linya kung may bahagi ng segment na sumasalubong sa boundary ng box |

## Suportadong Edit Command

Ang mga linya ang **tanging** entity na ginagamitan ng [Trim](../trim/) at [Extend](../extend/). Nalalapat din ang lahat ng standard na transformation command:

| Command | Ano ang mangyayari sa linya |
|---------|------------------------|
| [Move](../move/) | Inililipat ang parehong endpoint sa parehong displacement |
| [Copy](../copy/) | Gumagawa ng kaparehong linya sa bagong posisyon |
| [Rotate](../rotate/) | Ino-rotate ang parehong endpoint sa paligid ng piniling base point |
| [Mirror](../mirror/) | Isinasalamin ang parehong endpoint sa kabilang panig ng mirror axis |
| [Scale](../scale/) | Isina-scale ang parehong endpoint nang pantay mula sa base point |
| [Offset](../offset/) | Gumagawa ng parallel na linya sa fixed na perpendicular distance |
| [Trim](../trim/) | Pinuputol ang linya sa mga intersection — **linya lang** |
| [Extend](../extend/) | Pinapahaba ang pinakamalapit na endpoint para maabot ang boundary — **linya lang** |
| [Delete](../delete/) | Inaalis ang linya sa drawing |

## Properties

Kapag napili ang isang linya, ipinapakita ng properties panel ang bawat field na dala ng DXF `LINE` record:

**General**

| Property | Default | Kahulugan |
|----------|---------|---------|
| Color | 256 (ByLayer) | ACI color index |
| Layer | `0` | Layer assignment |
| Linetype | ByLayer | Named linetype pattern |
| Linetype Scale | 1 | Scale factor sa linetype pattern |
| Thickness | 0 | Extrusion thickness |

**Geometry**

| Property | Kahulugan |
|----------|---------|
| Start X / Start Y | Coordinate ng unang endpoint |
| End X / End Y | Coordinate ng ikalawang endpoint |

Lahat ng field ay direktang na-e-edit sa panel nang hindi na kailangang i-run ulit ang command.

## Line kumpara sa Polyline — Kailan Gagamitin ang Alin

| | Line | Polyline |
|---|------|---------|
| Bilang ng entity | Isang `LINE` bawat segment | Isang `LWPOLYLINE` para sa buong path |
| Trim / Extend | Oo — segment by segment | Hindi |
| Saradong hugis | Hindi | Oo (close flag) |
| Grip editing | I-stretch ang bawat endpoint | Ilipat ang anumang vertex sa path |
| Pinakamainam para sa | Construction lines, single segment, geometry na tri-trim mo | Contours, outlines, hugis na pananatilihing buo |

## DXF — LINE Entity

Ang mga linya ay naka-save bilang `LINE` entities sa DXF file. Ang bawat property — start/end coordinate, color, layer, linetype, linetype scale, at thickness — ay nagro-round-trip nang walang loss. Kapag nagbukas ka ng DXF na may `LINE` entities, nagiging ganap na na-e-edit na `Line` object ang mga ito sa editor.

Ang mga linyang iginuhit sa editor ay isinusulat din bilang `LINE` entities kapag na-save, kaya nababasa ito ng LibreCAD, FreeCAD, at anumang iba pang DXF-compatible na application.
