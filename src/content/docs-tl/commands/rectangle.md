---
title: Rectangle Command — Gumuhit ng Axis-Aligned na mga Rectangle
description: Gumagawa ang Rectangle command ng axis-aligned na rectangle mula sa dalawang magkasalungat na sulok. Ang resulta ay closed LWPOLYLINE na may apat na vertex — identikal sa anumang ibang polyline kapag nailagay na, kaya applicable dito ang bawat polyline edit command.
keywords: [CAD rectangle command, gumuhit ng rectangle CAD, axis-aligned na rectangle, closed polyline CAD, LWPOLYLINE DXF, rectangle grip editing, kulmanlab]
group: shapes
order: 3
---

# Rectangle

Ginuguhit ng `rectangle` command ang axis-aligned na rectangle na naitatakda ng dalawang click sa magkasalungat na sulok. Nakatago ang resulta bilang **closed `LWPOLYLINE`** na may apat na vertex — isa sa bawat sulok. Walang dedikadong rectangle entity type: pagkatapos magawa, kumikilos ang hugis nang eksaktong tulad ng ibang [Polyline](../polyline/) at applicable dito ang bawat polyline edit.

## Pagguhit ng Rectangle

1. I-type ang `rectangle` sa terminal o i-click ang **Rectangle** button sa toolbar.
2. **I-click ang unang sulok**, o i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
3. **I-click ang kasalungat na sulok** — mailalagay agad ang rectangle at magsasara ang command. Gumagana rin dito ang coordinate entry.

```
  ● (first click)────────────┐
  |                          |
  |   live preview follows   |
  |   cursor after step 2    |
  └──────────────────────────● (second click)
```

Puwedeng maging anumang pares ng diagonally magkasalungat na sulok ang dalawang click — top-left + bottom-right, o bottom-left + top-right, atbp. Hindi mahalaga ang order.

## Coordinate Entry

Sa alinman sa dalawang sulok, puwede kang mag-type ng eksaktong posisyon:

1. I-type ang value ng X.
2. Pindutin ang `,` — ipapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang value ng Y.
4. Pindutin ang **Enter** para ilagay ang sulok.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Enter` | Kumpirmahin ang na-type na coordinate |
| `Escape` | Kanselahin |

Palaging horizontal at vertical ang mga gilid — walang angle locking para sa rectangle command.

## Grip Editing — Pagbabago ng Hugis Pagkatapos Magawa

Ipinapakita ng napiling rectangle ang mga grip sa bawat vertex at sa midpoint ng bawat gilid:

| Grip | Posisyon | Ano ang ginagawa nito |
|------|----------|--------------|
| **Corner** | Bawat isa sa 4 na vertex | I-drag para ilipat ang vertex na iyon; sumusunod ang dalawang katabing gilid — nananatiling nakapirmi ang kasalungat na sulok |
| **Side midpoint** | Gitna ng bawat isa sa 4 na gilid | I-drag para isabay na ilipat ang dalawang endpoint ng gilid na iyon, habang napapanatili ang haba at angle ng gilid |

Kapag ni-drag ang corner grip, magiging non-rectangular na quadrilateral ang rectangle. Kung kailangan mo lang ng rectangle na may ibang laki, i-drag ang isang sulok habang pinapanatili ang mga gilid na medyo orthogonal, o burahin ito at gumuhit ng bago.

## Pagpili ng mga Rectangle

Dahil polyline ang rectangle, pareho ang paraan ng pagpili:

| Method | Kilos |
|--------|-----------|
| **Click** | Napipili kung tumama ang click sa alinman sa apat na gilid |
| **Drag right** (strict) | Dapat nasa loob ng selection box ang lahat ng apat na vertex |
| **Drag left** (crossing) | Anumang gilid na tumatawid sa boundary ng box ang pumipili sa buong rectangle |

## Suportadong Edit Command

Applicable dito ang lahat ng polyline edit command. Ang Trim at Extend ay para sa [Line](../line/) lamang at hindi gumagana sa mga rectangle:

| Command | Ano ang mangyayari sa rectangle |
|---------|-------------------------------|
| [Move](../move/) | Inililipat ang lahat ng apat na vertex sa parehong displacement |
| [Copy](../copy/) | Gumagawa ng identikal na rectangle sa bagong posisyon |
| [Rotate](../rotate/) | Iniikot ang lahat ng apat na vertex sa paligid ng piniling base point |
| [Mirror](../mirror/) | Sinasalamin ang lahat ng apat na vertex sa kabilang panig ng mirror axis |
| [Scale](../scale/) | Pantay na sinu-scale ang lahat ng apat na vertex mula sa base point |
| [Offset](../offset/) | Gumagawa ng parallel na rectangle (inset o outset) sa fixed na distansya |
| [Delete](../delete/) | Tinatanggal ang rectangle sa drawing |

## Properties

Kapag napili ang rectangle, ipinapakita ng properties panel ang parehong mga field ng anumang polyline:

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
| Closed | Palaging `true` para sa rectangle |
| Vertex Count | Palaging `4` para sa hindi pa binagong rectangle |
| Vertices | Coordinates ng lahat ng apat na sulok |

## Rectangle kumpara sa Polyline kumpara sa Line

| | Rectangle | Polyline | Line |
|---|-----------|---------|------|
| Paraan ng pagguhit | 2 click (mga sulok) | I-click ang bawat vertex | I-click ang bawat endpoint |
| Entity type | Closed `LWPOLYLINE` | Open o closed `LWPOLYLINE` | `LINE` bawat segment |
| Palaging orthogonal ang mga gilid | Oo (sa paggawa) | Hindi | Hindi |
| Trim / Extend | Hindi | Hindi | Oo |
| Pinakamainam para sa | Mga kahon, frame, rectangular na lugar | Arbitrary na outline at path | Indibidwal na segment, construction line |

## DXF — LWPOLYLINE Entity

Nase-save ang mga rectangle bilang closed `LWPOLYLINE` entities na may apat na vertex. Lahat ng properties — vertex coordinates, color, layer, linetype, linetype scale, at thickness — nagra-round-trip nang walang nawawala.

Walang dedikadong `RECTANGLE` type sa DXF. Kapag binuksan muli ang file, lalabas ang hugis bilang closed four-vertex polyline sa halip na rectangle. Anumang DXF viewer o editor na sumusuporta sa `LWPOLYLINE` (LibreCAD, FreeCAD, atbp.) ang tama ang pagpapakita nito.
