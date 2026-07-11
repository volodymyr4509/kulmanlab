---
title: "Distance Command — Sukatin ang Straight-Line Distance sa Pagitan ng Dalawang Punto sa KulmanLab CAD"
description: "Sinusukat ng Distance command ang Euclidean distance sa pagitan ng dalawang na-click na punto at ipinapakita ang resulta hanggang 4 decimal places. I-click ulit pagkatapos ng resulta para kumadena ng bagong sukatan mula sa huling punto."
keywords: [CAD pagsukat ng distansya, distance command, point-to-point na pagsukat, straight line distance, kulmanlab CAD pagsukat]
group: measure
order: 1
---

# Distance

Sinusukat ng `distance` command ang straight-line (Euclidean) distance sa pagitan ng dalawang na-click na punto at ini-print ang resulta sa terminal hanggang 4 decimal places. Isa ito sa tatlong measurement command — sinusukat ng [Angle](../angle/) ang angular opening sa isang vertex, at sinusukat ng [Area](../area/) ang saklaw na area at perimeter ng isang polygon.

## Anatomiya ng Distance Measurement

```
  ● first point
   \
    \  preview line (live)
     \
      ● second point    →  terminal: "Distance: 12.3456"
```

- **Unang punto** — pinagmulan ng sukatan.
- **Ikalawang punto** — endpoint; agad na napi-print ang resulta pagkalagay dito.
- **Resulta** — ipinapakita sa terminal, hindi inilalagay sa canvas.

## Pagsukat ng Distansya

1. I-type ang `distance` sa terminal o i-click ang **Distance** button sa toolbar.
2. **I-click ang unang punto**, o i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
3. **I-click ang ikalawang punto** — lalabas sa terminal ang nasukat na distansya. Gumagana rin dito ang coordinate entry.
4. **I-click ulit** (opsyonal) para simulan ang bagong sukatan. Nananatiling aktibo ang command.

Pindutin ang `Escape` anumang oras para mag-reset sa step 2.

## Pagkadena ng mga Sukatan

Pagkatapos ipakita ang resulta, agad na sinisimulan ng pag-click ang susunod na sukatan — ang na-click na punto ang magiging bagong unang punto. Dahil dito, puwede kang sumukat ng magkakasunod na distansya nang hindi kailangang i-reactivate ang command.

## Distance kumpara sa Angle

| | Distance | Angle |
|---|---------|-------|
| Ano ang sinusukat | Straight-line na haba | Interior angle sa isang vertex |
| Bilang ng click | 2 | 3 |
| Format ng resulta | `12.3456` (units) | `45.0000°` |
| Canvas preview | Linya mula sa unang punto papunta sa cursor | Dalawang linya mula sa vertex papunta sa cursor |
| Pinakamainam para sa | Haba ng gap o segment | Opening angle sa pagitan ng dalawang feature |

## Coordinate Entry

Sa halip na mag-click, i-type ang eksaktong posisyon para sa alinman sa dalawang punto:

1. I-type ang value ng X.
2. Pindutin ang `,` — ipapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang value ng Y.
4. Pindutin ang **Enter** para kumpirmahin.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Backspace` | Tanggalin ang huling na-type na character |
| `Enter` | Kumpirmahin ang na-type na coordinate |
| `Escape` | Kanselahin at mag-reset sa step 2 |

## Mga Tala

- Ipinapakita ang mga resulta sa **terminal lamang** — walang idinadagdag sa drawing.
- Ang resulta ay nasa parehong units gaya ng drawing coordinates (walang unit conversion).
- Palaging 4 decimal places ang precision.
