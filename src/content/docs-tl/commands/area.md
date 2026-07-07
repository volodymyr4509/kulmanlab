---
sidebar_position: 3
title: "Area Command — Sukatin ang Area at Perimeter ng Isang Polygon sa KulmanLab CAD"
description: "Sinusukat ng Area command ang saklaw na area at perimeter ng isang polygon na tinutukoy ng 3 o higit pang na-click na punto, gamit ang shoelace formula. Sinusuportahan nito ang angle-locked directional entry at isang persistent na highlight ng resulta sa canvas."
keywords: [CAD pagsukat ng area, area command, pagkalkula ng polygon area, pagsukat ng perimeter, shoelace formula, kulmanlab CAD pagsukat]
---

# Area

Sinusukat ng `area` command ang saklaw na area at perimeter ng isang polygon na tinutukoy ng tatlo o higit pang na-click na punto, at ini-print ang parehong resulta sa terminal hanggang 4 decimal places. Ito ang ikatlong measurement command, kasama ng [Distance](../distance/) (straight-line na haba) at [Angle](../angle/) (interior angle sa isang vertex).

## Anatomiya ng Area Measurement

```
  ● unang punto
   \
    \
     ● ikalawang punto
      \
       \             (dashed) preview ng closing edge
        ●───────────────┐
      ikatlong punto    │  (dashed) preview ng susunod na edge papunta sa cursor
                        ✕ cursor  →  terminal: "Area: 12.3456  Perimeter: 45.6789"
```

- **Vertex** — bawat na-click (o na-type) na punto ay nagiging vertex ng polygon; iginuguhit nang solid ang mga na-confirm na edge at pinupuno ang loob ng translucent na highlight.
- **Preview edges** — ipinapakita ng mga dashed na linya ang nakabinbing edge mula sa huling vertex papunta sa cursor, at ang closing edge mula sa cursor pabalik sa unang vertex.
- **Closing edge** — hindi mo na kailangang i-click ulit ang unang punto; awtomatikong nagsasara ang polygon kapag pinindot ang Enter.

## Pagsukat ng Area

1. I-type ang `area` sa terminal o i-click ang **Area** button sa toolbar (nasa ibabang row ng Measure panel).
2. **I-click ang unang punto**, o i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
3. **I-click ang bawat karagdagang vertex** ayon sa pagkakasunod-sunod sa paligid ng hugis. Gumagana ang coordinate entry sa bawat hakbang.
4. Kapag nailagay na ang hindi bababa sa **3 punto**, pindutin ang **Enter** (walang nakabinbing coordinate o distance entry) para isara ang polygon at kalkulahin ang resulta.
5. Ini-print ng terminal ang `Area: <value>  Perimeter: <value>`, at ang saradong polygon — fill, outline, at vertex grips — ay nananatiling naka-highlight sa canvas.
6. **I-click kahit saan, pindutin ang anumang key, o pindutin ang `Escape`** para itago ang resulta at tapusin ang command.

## Angle Lock at Eksaktong Distansya

Pagkatapos mailagay ang unang vertex, ang paggalaw patungo sa isa sa mga naka-configure na angle-tracking increment (10°, 15°, 20°, 30°, 45°, o 90°, na maaaring i-set sa pamamagitan ng toolbar dropdown) ay nagla-lock sa susunod na edge sa direksyong iyon:

- Nagsa-snap ang preview ng edge sa naka-lock na direksyon, at may nakaguhit na angle-tracking indicator sa anchor vertex.
- Mag-type ng haba at pindutin ang **Enter** para ilagay ang susunod na vertex nang eksakto sa distansyang iyon sa gilid ng naka-lock na direksyon.
- Ang pag-click habang naka-lock (walang na-type na haba) ay naglalagay sa vertex sa projection ng cursor papunta sa naka-lock na direksyon.

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Magdagdag sa value ng haba ng edge |
| `-` | Negatibong haba (bilang unang character lamang) |
| `Backspace` | Tanggalin ang huling na-type na character |
| `Enter` | Ilagay ang susunod na vertex sa na-type na haba |

## Pagsasara ng Polygon

- Sinasara lamang ng Enter ang hugis kapag nailagay na ang **3 o higit pang** vertex — sa mas kaunti dito, walang epekto ito.
- Awtomatikong idinadagdag ang edge mula sa huling vertex pabalik sa una at binibilang ito sa parehong area at perimeter.
- Puwedeng ilagay ang mga punto sa anumang pagkakasunod-sunod (clockwise o counterclockwise) — magkapareho ang resulta.

## Area kumpara sa Distance kumpara sa Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| Ano ang sinusukat | Saklaw na area & perimeter ng isang polygon | Straight-line na haba | Interior angle sa isang vertex |
| Bilang ng click | 3 o higit pa, sarado sa Enter | 2 | 3 |
| Format ng resulta | `12.3456  Perimeter: 45.6789` | `12.3456` (units) | `45.0000°` |
| Canvas preview | Napunong polygon na may dashed na closing edge | Linya mula sa unang punto papunta sa cursor | Dalawang linya mula sa vertex papunta sa cursor |
| Pagkatapos ng resulta | Natatanggal sa anumang input, pagkatapos ay natatapos ang command | Nagkakadena ang click ng bagong sukatan | Nagkakadena ang click ng bagong sukatan |
| Pinakamainam para sa | Mga saklaw na lugar, area ng silid o panel | Haba ng gap o segment | Opening angle sa pagitan ng dalawang feature |

## Coordinate Entry

Sa halip na mag-click, i-type ang eksaktong posisyon para sa anumang vertex:

1. I-type ang value ng X.
2. Pindutin ang `,` — ipapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang value ng Y.
4. Pindutin ang **Enter** para kumpirmahin.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry, o ang edge length entry habang aktibo ang angle lock |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Backspace` | Tanggalin ang huling na-type na character |
| `Enter` | Kumpirmahin ang na-type na coordinate o haba; kapag 3+ na vertex at walang nakabinbing entry, isinasara ang polygon |
| `Escape` | Habang pumipili ng vertex: itinatapon ang mga nailagay na punto at nagsisimula ulit sa unang punto; pagkatapos ipakita ang resulta: itinatago ito at tinatapos ang command |

## Mga Tala

- Kinakalkula ang area gamit ang shoelace formula at palaging iniuulat bilang positibong value, anuman ang pagkakasunod-sunod ng click.
- Ang mga self-intersecting na polygon (mga edge na nagkakrus-krus) ay nagbibigay pa rin ng numerical na resulta, ngunit maaaring hindi tumugma ang value sa visually enclosed na lugar — panatilihin ang non-crossing na pagkakasunod-sunod ng click para sa makabuluhang area.
- Ipinapakita lamang ang mga resulta sa **terminal at bilang pansamantalang highlight sa canvas** — walang permanenteng idinadagdag sa drawing.
- Hindi tulad ng Distance at Angle, hindi **kumakadena** ang Area nang awtomatiko sa bagong sukatan — pagkatapos itago ang resulta, patakbuhin ulit ang `area` para sumukat ng ibang polygon.
- Palaging 4 decimal places ang precision para sa parehong area at perimeter, sa parehong units gaya ng drawing coordinates (walang unit conversion).
