---
title: Angle Command — Sukatin ang Interior Angle sa Isang Vertex Gamit ang Tatlong Punto sa KulmanLab CAD
description: Sinusukat ng Angle command ang interior angle (0°–180°) sa isang vertex na tinutukoy ng tatlong na-click na punto. Mag-click ng first-end, vertex, second-end. Ipinapakita ang resulta sa terminal hanggang 4 decimal places.
keywords: [CAD angle measurement, three point angle, interior angle CAD, measure angle command, vertex angle, kulmanlab]
group: measure
order: 2
---

# Angle

Sinusukat ng `angle` command ang interior angle sa isang vertex na nabuo ng dalawang line segment sa pamamagitan ng tatlong na-click na punto. Ang resulta — laging nasa pagitan ng 0° at 180° — ay ipinapakita sa terminal hanggang 4 decimal places. Isa ito sa tatlong measurement commands — sinusukat ng [Distance](../distance/) ang straight-line length, at sinusukat ng [Area](../area/) ang saklaw na area at perimeter ng isang polygon.

## Anatomya ng Angle Measurement

```
  ● first point (end of first ray)
   \
    \  first ray preview
     \
      ● vertex (step 3)
     /
    /  second ray preview (to cursor)
   /
  ● third point  →  terminal: "Angle: 45.0000°"
```

- **First point** — isang dulo ng angle (step 2).
- **Vertex** — ang sulok kung saan sinusukat ang angle (step 3).
- **Third point** — ang kabilang dulo ng angle (step 4).

## Pagsukat ng Angle

1. I-type ang `angle` sa terminal o i-click ang **Angle** button sa toolbar.
2. **I-click ang first point** — isang dulo ng bisig ng angle. O i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
3. **I-click ang vertex** — ang sulok kung saan nagtatagpo ang dalawang bisig. Gumagana rin dito ang coordinate entry.
4. **I-click ang third point** — ang ikalawang dulo ng bisig. Gumagana rin dito ang coordinate entry. Ang paglalagay ng puntong ito ang naglilimbag ng resulta.
5. **Mag-click ulit** (opsyonal) para magsimula ng bagong measurement mula sa click na iyon bilang bagong first point.

## Convention ng Interior Angle

Kinakalkula ng command ang angle gamit ang dot product ng dalawang ray mula sa vertex:

- **Laging interior**: ang resulta ay ang mas maliit na angle, sa pagitan ng 0° at 180°.
- Ang order ng pag-click sa mga endpoint ay hindi nakakaapekto sa resulta — ang posisyon ng vertex lang ang mahalaga.
- Ang mga collinear na punto (lahat ng tatlo ay nasa isang linya) ay nagbabalik ng 0° o 180°.

## Pagkakadena ng mga Measurement

Pagkatapos lumabas ng resulta, ang pag-click kaagad ay nagsisimula ng susunod na measurement — ang na-click na punto ang magiging bagong first point. Hindi awtomatikong lumalabas ang command hanggang pindutin mo ang `Escape`.

## Angle kumpara sa Distance

| | Angle | Distance |
|---|-------|---------|
| Ano ang sinusukat | Interior angle sa isang vertex | Straight-line length |
| Bilang ng click | 3 | 2 |
| Format ng resulta | `45.0000°` | `12.3456` (units) |
| Canvas preview | Dalawang linya mula sa vertex papunta sa dalawang dulo | Linya mula sa first point papunta sa cursor |
| Pinakamainam para sa | Opening angle sa pagitan ng dalawang feature | Haba ng gap o segment |

## Coordinate Entry

Sa halip na mag-click, i-type ang eksaktong posisyon para sa alinman sa tatlong punto:

1. I-type ang X value.
2. Pindutin ang `,` — ipapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang Y value.
4. Pindutin ang **Enter** para kumpirmahin.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Backspace` | Tanggalin ang huling na-type na character |
| `Enter` | Kumpirmahin ang na-type na coordinate |
| `Escape` | Kanselahin at mag-reset pabalik sa step 2 |

## Mga Tala

- Ang mga resulta ay ipinapakita **sa terminal lang** — walang idinaragdag sa drawing.
- Laging 4 decimal places ang precision sa degrees.
