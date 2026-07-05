---
sidebar_position: 5
title: Arc Command — Gumuhit ng Three-Point Arc gamit ang Circumcircle Method sa KulmanLab CAD
description: Ginuguhit ng Arc command ang circular arc sa pamamagitan ng eksaktong tatlong na-click na punto gamit ang circumcircle geometry. Ang start at end grip ay nagpapahintulot sa iyo na i-drag ang mga endpoint ng arc papunta sa bagong angle at radius pagkatapos mailagay. Full DXF round-trip bilang ARC entities.
keywords: [CAD arc command, three point arc CAD, circumcircle arc, gumuhit ng arc CAD, ARC DXF entity, arc grip editing, kulmanlab]
---

# Arc

Ginuguhit ng `arc` command ang circular arc sa pamamagitan ng tatlong punto na iyong ni-click. Kinakalkula ang arc bilang natatanging circumcircle na dumadaan sa lahat ng tatlong punto — hindi na kailangang direktang magtakda ng center o radius. Ang arc ay tumatakbo mula sa unang click papunta sa ikatlong click, dumadaan sa ikalawa.

## Pagguhit ng Arc

1. I-type ang `arc` sa terminal o i-click ang **Arc** button sa toolbar.
2. **I-click ang unang punto** — isang dulo ng arc. O i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
3. **I-click ang pangalawang punto** — isang punto na dapat dumaanan ng arc (kumokontrol sa curvature at direksyon). Gumagana rin dito ang coordinate entry.
4. **I-click ang ikatlong punto** — ang kabilang dulo ng arc. Mailalagay ang arc at magsasara ang command. Gumagana rin dito ang coordinate entry.

```
           ● (2nd click — midpoint on the curve)
          / \
         /   \
        ●     ●
     1st       3rd
```

May line preview na kumokonekta sa unang dalawang click habang inaayos mo ang ikatlo. Mula sa ikalawang click pasulong, sinusubaybayan ng live arc preview ang cursor.

> **Collinear na Puntos**: kung ang lahat ng tatlong punto ay nasa isang straight line, hindi makakalkula ang arc at walang malalagay na entity. Ilipat ang ikalawang punto palayo sa linya at subukan ulit.

## Coordinate Entry

Sa alinman sa tatlong hakbang, puwede kang mag-type ng eksaktong posisyon sa halip na mag-click:

1. I-type ang value ng X.
2. Pindutin ang `,` — ipapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang value ng Y.
4. Pindutin ang **Enter** para ilagay ang punto.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Kumpirmahin ang na-type na coordinate |
| `Escape` | Itapon ang lahat ng nailagay na punto at magsara |

## Grip Editing — Pag-aayos ng mga Endpoint at Radius

Ipinapakita ng napiling arc ang tatlong grip:

| Grip | Posisyon | Ano ang ginagawa nito |
|------|----------|--------------|
| **Center** | Geometric na center ng circumcircle | Inililipat ang buong arc; hindi nagbabago ang radius at angles |
| **Start** | Unang endpoint sa arc | I-drag para ilipat ang start sa kahabaan ng circumcircle — binabago ang start angle at radius |
| **End** | Huling endpoint sa arc | I-drag para ilipat ang end sa kahabaan ng circumcircle — binabago ang end angle at radius |

Kapag ni-drag ang start o end grip, inilalagay ito sa posisyon ng drag at muling kinakalkula ang angle at radius mula sa bagong posisyong iyon relatibo sa center. Nananatiling nakapirmi ang kasalungat na endpoint.

## Pagpili ng mga Arc

| Method | Kilos |
|--------|-----------|
| **Click** | Napipili kung tumama ang click malapit sa arc curve (hindi sa chord) |
| **Drag right** (strict) | Dapat nasa loob ng box ang lahat ng sample point na naka-distribute sa kahabaan ng arc |
| **Drag left** (crossing) | Anumang sample point sa arc na nasa loob ng box ang pumipili nito |

## Suportadong Edit Command

| Command | Ano ang mangyayari sa arc |
|---------|------------------------|
| [Move](../move/) | Inililipat ang center; hindi nagbabago ang radius at angles |
| [Copy](../copy/) | Gumagawa ng identikal na arc sa bagong posisyon |
| [Rotate](../rotate/) | Iniikot ang center at nililipat ang start/end angle ayon sa dami ng rotation |
| [Mirror](../mirror/) | Sinasalamin ang center at binabaliktad ang start/end angle sa kabilang panig ng mirror axis |
| [Scale](../scale/) | Sinu-scale ang posisyon ng center at pinarami ang radius sa scale factor |
| [Offset](../offset/) | Gumagawa ng concentric na arc sa mas malaki o mas maliit na radius, parehong angle span |
| [Delete](../delete/) | Tinatanggal ang arc |

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
| Center X / Center Y | Center ng circumcircle |
| Radius | Radius ng circumcircle |
| Start Angle | Angle sa degrees kung saan nagsisimula ang arc (sinusukat mula sa positive X axis) |
| End Angle | Angle sa degrees kung saan natatapos ang arc |

## Arc kumpara sa Circle — kailan gagamit ng alin

| | Arc | Circle |
|---|-----|--------|
| Saklaw | Partial — unang hanggang ikatlong click | Buong 360° |
| Paraan ng input | Tatlong punto sa curve | Center + radius (click o type) |
| Typed input | X,Y coordinate para sa bawat punto | Radius value (tumatanggap din ng X,Y ang center) |
| Pag-resize pagkatapos malagay | I-drag ang start/end grip | I-drag ang anumang cardinal grip |
| Pinakamainam para sa | Fillet, rounded na sulok, arched na path | Buong butas, round na feature |

## DXF — ARC Entity

Nase-save ang mga arc bilang `ARC` entities sa DXF file, na nag-iimbak ng center coordinates, radius, start angle, at end angle. Lahat ng properties — kasama ang color, layer, linetype, linetype scale, at thickness — nagra-round-trip nang walang nawawala. Anumang DXF-compatible na application (LibreCAD, FreeCAD, atbp.) ay babasahin ito bilang standard na arc.
