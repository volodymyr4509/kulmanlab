---
title: Spline Fit Command — Gumuhit ng Interpolating na Spline sa Pamamagitan ng Na-click na mga Punto sa KulmanLab CAD
description: Ginuguhit ng Spline Fit command ang cubic spline na dumadaan sa bawat na-click na punto nang eksakto. Sa loob, nakaimbak ang curve gamit ang parehong fit points at computed control vertices. Ang pag-drag sa fit-point grip ay muling nag-i-interpolate ng buong curve. Full DXF round-trip bilang SPLINE entities.
keywords: [CAD spline fit command, interpolating spline CAD, spline through points, gumuhit ng smooth curve CAD, SPLINE DXF fit points, spline grip editing, kulmanlab]
group: shapes
order: 9
---

# Spline Fit

Ginuguhit ng `splinefit` command ang cubic spline na dumadaan sa bawat punto na iyong ni-click — isang interpolating curve. Hindi tulad ng [Spline CV](../spline-cv/), kung saan naaakit lamang ang curve papunta sa control vertices, dito ay pinipilit ang curve na tumama sa bawat na-click na coordinate nang eksakto. Sa loob, nag-a-fit ang editor ng control vertices para makamit ito, at nakaimbak ang mga CV na iyon kasama ng fit points sa DXF file.

## Pagguhit ng Spline sa Pamamagitan ng Fit Points

1. I-type ang `splinefit` sa terminal o i-click ang **Spline Fit** button sa toolbar.
2. **Mag-click para maglagay ng fit points** — dadaan ang curve sa bawat isa. O i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
3. Pindutin ang **Enter** para tapusin (kailangan ng hindi bababa sa 2 punto).

```
  ●──────●──────●──────●  ← curve passes exactly through each click
  p1     p2     p3     p4
```

Ipinapakita ng live preview ang kasalukuyang interpolated na curve habang inililipat mo ang cursor, kasama ang posibleng susunod na punto sa posisyon ng cursor. Pindutin ang **Escape** para itapon ang lahat ng nailagay na punto at magsara.

## Coordinate Entry

Sa halip na mag-click, mag-type ng eksaktong posisyon para sa anumang fit point:

1. I-type ang value ng X.
2. Pindutin ang `,` — ipapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang value ng Y.
4. Pindutin ang **Enter** para ilagay ang fit point.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Kumpirmahin ang na-type na coordinate, o tapusin ang spline kung walang isinasagawang input at mayroon nang ≥ 2 punto |
| `Escape` | Itapon ang lahat ng punto at magsara |

## Grip Editing — Pagbabago ng Hugis sa Pamamagitan ng Fit Points

Ipinapakita ng napiling fit spline ang isang grip bawat fit point:

| Grip | Posisyon | Ano ang ginagawa nito |
|------|----------|--------------|
| **Fit point** | Sa bawat na-click na posisyon | I-drag para ilipat ang fit point na iyon — muling na-i-interpolate ang buong curve para dumaan sa bagong posisyon |

Ang pag-drag ng isang grip ay muling nagfi-fit sa buong curve, hindi lamang sa katabing segment. Iba ito sa polyline grip editing, kung saan ang paglipat ng vertex ay nagbabago lamang ng hugis ng dalawang katabing segment.

Walang grip para sa "ilipat ang buong spline." Para ilipat ang kabuuang spline, gamitin ang [Move](../move/) command.

## Pagpili ng mga Fit Spline

| Method | Kilos |
|--------|-----------|
| **Click** | Napipili kung tumama ang click malapit sa anumang punto sa curve |
| **Drag right** (strict) | Dapat nasa loob ng selection box ang lahat ng sample point sa kahabaan ng curve |
| **Drag left** (crossing) | Anumang bahagi ng curve na tumatawid sa boundary ng selection box ang pumipili nito |

## Suportadong Edit Command

| Command | Ano ang mangyayari sa spline |
|---------|---------------------------|
| [Move](../move/) | Inililipat ang lahat ng fit point at ang muling kinalkulang CV sa parehong displacement |
| [Copy](../copy/) | Gumagawa ng identikal na spline sa bagong posisyon |
| [Rotate](../rotate/) | Iniikot ang lahat ng fit point sa paligid ng piniling base point |
| [Mirror](../mirror/) | Sinasalamin ang lahat ng fit point sa kabilang panig ng mirror axis |
| [Scale](../scale/) | Pantay na sinu-scale ang lahat ng fit point mula sa base point |
| [Delete](../delete/) | Tinatanggal ang spline |

Hindi sinusuportahan ng mga Spline ang **Offset**, **Trim**, o **Extend**.

## Properties

**General**

| Property | Default | Kahulugan |
|----------|---------|---------|
| Color | 256 (ByLayer) | ACI color index |
| Layer | `0` | Layer assignment |
| Linetype | ByLayer | Named linetype pattern |
| Linetype Scale | 1 | Scale factor ng linetype pattern |
| Thickness | 0 | Extrusion thickness |

**Geometry**

| Property | Kahulugan |
|----------|---------|
| Degree | Polynomial degree — palaging 3 (cubic) |
| Fit Points | Coordinates ng lahat ng na-click na pass-through na punto |
| Control Vertices | Sa loob na kinalkulang CV na ginagamit para i-render ang curve |

## Spline Fit kumpara sa Spline CV — alin ang gagamitin

| | Spline Fit | Spline CV |
|---|------------|-----------|
| Dumadaan ang curve sa mga punto | Bawat na-click na punto nang eksakto | Una at huli lamang (clamped) |
| Epekto ng grip edit | Gumagalaw ang fit point → muling na-interpolate ang buong curve | Gumagalaw ang CV → naaakit ang curve papunta sa bagong posisyon |
| Predictability ng hugis | Mataas — sumusunod ang curve sa mga click | Mas mababa — nahuhuli ang curve sa mga CV |
| Pinakamainam para sa | Curve na dapat tumama sa specific na coordinates | Makinis na aesthetic na curve, free-form na path |

## DXF — SPLINE Entity (Fit-Point na Form)

Nase-save ang mga fit spline bilang `SPLINE` entities sa DXF file, na iniimbak ang parehong fit point coordinates at ang kinalkulang control vertices. Naka-set ang `splineFlag` sa `8` (fit-point spline) para malaman ng application na nag-re-reload kung aling set ng puntos ang ipapakita bilang editable na grips. Lahat ng properties — color, layer, linetype, linetype scale, at thickness — nagra-round-trip nang walang nawawala. Ang mga DXF application na sumusuporta sa fit-point na spline (LibreCAD, FreeCAD) ay ipapakita ang fit points bilang pangunahing editable na data.
