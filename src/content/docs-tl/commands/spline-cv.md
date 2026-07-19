---
title: Spline CV — Gumuhit ng B-Spline sa Paglalagay ng Control Vertices
description: Ginuguhit ng Spline CV command ang cubic B-spline sa paglalagay ng control vertices. Naaakit ang curve papunta sa mga vertex ngunit dumadaan lamang sa una at huli (clamped knots). Bawat CV grip ay puwedeng i-drag para baguhin ang hugis ng curve pagkatapos mailagay. Full DXF round-trip bilang SPLINE entities.
keywords: [CAD spline command, B-spline control vertices, clamped spline CAD, gumuhit ng spline CAD, SPLINE DXF entity, spline grip editing, kulmanlab]
group: shapes
order: 8
---

# Spline CV

Ginuguhit ng `splinecv` command ang **cubic B-spline** sa paglalagay ng control vertices (CVs). Naaakit ang resultang curve papunta sa bawat CV ngunit hindi ito dumadaan dito — maliban sa mismong una at huling vertex, kung saan itinatakda ng **clamped knots** ang curve nang eksakto. Nagbibigay ito ng intuitive na kontrol sa hugis: hilahin ang isang vertex para itulak ang curve papunta rito nang hindi ito pinipilit na humipo sa bawat punto.

## Pagguhit ng Spline gamit ang Control Vertices

1. I-type ang `splinecv` sa terminal o i-click ang **Spline CV** button sa toolbar.
2. **Mag-click para maglagay ng control vertices** — bawat click ay nagdaragdag ng vertex. O i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
3. Pindutin ang **Enter** para tapusin (kailangan ng hindi bababa sa 2 vertex).

```
  CV ●         ● CV
      \       /
       \     /    ← curve pulled toward CVs
        \   /         but not passing through them
  CV ●   ●   ● CV (start/end: curve touches here)
```

Nag-a-update ang live preview habang inililipat mo ang cursor pagkatapos ng bawat vertex, na ipinapakita kung ano ang magiging itsura ng spline kapag nasa posisyon ng cursor ang susunod na punto. Pindutin ang **Escape** para itapon ang lahat ng nailagay na vertex at magsara.

## Coordinate Entry

Sa halip na mag-click, mag-type ng eksaktong posisyon para sa anumang control vertex:

1. I-type ang value ng X.
2. Pindutin ang `,` — ipapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang value ng Y.
4. Pindutin ang **Enter** para ilagay ang vertex.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Kumpirmahin ang na-type na coordinate, o tapusin ang spline kung walang isinasagawang input at mayroon nang ≥ 2 vertex |
| `Escape` | Itapon ang lahat ng vertex at magsara |

## Grip Editing — Pagbabago ng Hugis sa Pamamagitan ng Control Vertices

Ipinapakita ng napiling CV spline ang isang grip bawat control vertex:

| Grip | Posisyon | Ano ang ginagawa nito |
|------|----------|--------------|
| **Control vertex** | Sa bawat posisyon ng CV | I-drag para ilipat ang CV na iyon — nagbabago ang hugis ng curve papunta sa bagong posisyon |

Walang grip para sa "ilipat ang buong spline." Para ilipat ang kabuuang spline, gamitin ang [Move](../move/) command.

## Pagpili ng mga CV Spline

| Method | Kilos |
|--------|-----------|
| **Click** | Napipili kung tumama ang click malapit sa anumang punto sa curve |
| **Drag right** (strict) | Dapat nasa loob ng selection box ang lahat ng sample point sa kahabaan ng curve |
| **Drag left** (crossing) | Anumang bahagi ng curve na tumatawid sa boundary ng selection box ang pumipili nito |

## Suportadong Edit Command

| Command | Ano ang mangyayari sa spline |
|---------|---------------------------|
| [Move](../move/) | Inililipat ang lahat ng control vertex sa parehong displacement |
| [Copy](../copy/) | Gumagawa ng identikal na spline sa bagong posisyon |
| [Rotate](../rotate/) | Iniikot ang lahat ng CV sa paligid ng piniling base point |
| [Mirror](../mirror/) | Sinasalamin ang lahat ng CV sa kabilang panig ng mirror axis |
| [Scale](../scale/) | Pantay na sinu-scale ang lahat ng CV mula sa base point |
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
| Control Vertices | Coordinates ng lahat ng CV |
| Fit Points | Walang laman para sa CV spline; napopopulate lamang para sa fit-point spline |

## Spline CV kumpara sa Spline Fit — alin ang gagamitin

| | Spline CV | Spline Fit |
|---|-----------|------------|
| Dumadaan ang curve sa mga punto | Una at huli lamang (clamped) | Bawat na-click na punto nang eksakto |
| Kontrol sa hugis | Hilahin ang mga CV papunta sa isang lugar | Ilipat ang fit points na dapat hipuin ng curve |
| Epekto ng grip edit | Gumagalaw ang CV → naaakit ang curve | Gumagalaw ang fit point → muling na-interpolate ang curve |
| Pinakamainam para sa | Makinis na aesthetic na curve, free-form na path | Curve na dapat tumama sa specific na coordinates |

## DXF — SPLINE Entity (Control-Vertex na Form)

Nase-save ang mga CV spline bilang `SPLINE` entities sa DXF file, na iniimbak ang degree, ang knot vector, at lahat ng control vertex coordinates. Lahat ng properties — color, layer, linetype, linetype scale, at thickness — nagra-round-trip nang walang nawawala. Naka-set ang `splineFlag` sa `9` (CV spline) para mapanatili ang form kapag na-reload. Anumang DXF application na sumusuporta sa `SPLINE` entities na may CV data ay tama ang pagbabasa nito.
