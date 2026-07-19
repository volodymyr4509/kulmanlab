---
title: Circle Command — Gumuhit ng mga Circle gamit ang Center at Radius
description: Inilalagay ng Circle command ang circle sa pamamagitan ng pag-click sa center point at pagkatapos ay pag-click o pag-type ng radius. Apat na cardinal grip ang nagpapahintulot sa iyo na i-resize ang radius sa pag-drag nang hindi na kailangang ulitin ang command. Full DXF round-trip bilang CIRCLE entities.
keywords: [CAD circle command, gumuhit ng circle CAD, circle radius input, i-resize ang circle grip, CIRCLE DXF entity, dimradius circle, kulmanlab]
group: shapes
order: 4
---

# Circle

Ginuguhit ng `circle` command ang circle na naitatakda ng center point at radius. Pagkatapos i-click ang center, puwede mong itakda ang radius sa pamamagitan ng pag-click ng pangalawang punto sa canvas o pag-type ng eksaktong numero — parehong option ay live nang sabay.

## Pagguhit ng Circle

1. I-type ang `circle` sa terminal o i-click ang **Circle** button sa toolbar.
2. **I-click ang center point**, o i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
3. Itakda ang radius — alinman sa:
   - **I-click ang anumang punto** sa canvas — ang distansya mula sa center ang magiging radius, o
   - **I-type ang radius** at pindutin ang **Enter** para sa eksaktong value.

Agad na mailalagay ang circle at magsasara ang command.

```
  center ●
          \  radius line preview
           \
            ● ← click here, or type a number
```

Habang nasa radius phase, ipinapakita ng live preview ang circle sa kasalukuyang distansya ng cursor at nagguguhit din ng radius line mula sa center papunta sa kasalukuyang punto.

## Coordinate Entry ng Center

Sa halip na mag-click, puwede kang mag-type ng posisyon ng center:

1. I-type ang value ng X.
2. Pindutin ang `,` — ipapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang value ng Y.
4. Pindutin ang **Enter** para ilagay ang center at magpatuloy sa radius input.

## Typed Radius Input

Pagkatapos mailagay ang center, agad na gumagawa ng radius value ang pag-type:

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Idagdag ang digit sa radius value |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Ilagay ang circle sa na-type na radius |

Ipinapakita ang naipong value sa terminal prompt (hal. `enter radius of circle: 25`). Nag-a-update ang preview para ipakita ang na-type na radius habang kinokontrol ng cursor ang direksyon ng radius line marker.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry (center phase), o radius digit (radius phase) |
| `,` | I-lock ang X at lumipat sa Y entry (center phase) |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Kumpirmahin ang na-type na coordinate o radius |
| `Escape` | Kanselahin at i-reset |

## Grip Editing — Pag-resize ng Radius

Ipinapakita ng napiling circle ang limang grip:

| Grip | Posisyon | Ano ang ginagawa nito |
|------|----------|--------------|
| **Center** | Center point | Inililipat ang buong circle; hindi nagbabago ang radius |
| **Left** | Pinakakaliwang punto (center − radius) | I-drag para itakda ang bagong radius = distansya papunta sa center |
| **Right** | Pinakakanang punto (center + radius) | I-drag para itakda ang bagong radius = distansya papunta sa center |
| **Top** | Pinakamataas na punto | I-drag para itakda ang bagong radius = distansya papunta sa center |
| **Bottom** | Pinakamababang punto | I-drag para itakda ang bagong radius = distansya papunta sa center |

Magkatulad ang kilos ng lahat ng apat na cardinal grip — ang bagong radius ay katumbas ng distansya mula sa center papunta sa posisyon ng drag. Nananatiling nakapirmi ang center.

## Pagpili ng mga Circle

| Method | Kilos |
|--------|-----------|
| **Click** | Napipili kung tumama ang click malapit sa circumference |
| **Drag right** (strict) | Dapat nasa loob ng box ang buong bounding square (center ± radius) |
| **Drag left** (crossing) | Anumang bahagi ng circumference na tumatawid o humipo sa boundary ng box ang pumipili sa circle |

## Suportadong Edit Command

| Command | Ano ang mangyayari sa circle |
|---------|---------------------------|
| [Move](../move/) | Inililipat ang center; hindi nagbabago ang radius |
| [Copy](../copy/) | Gumagawa ng identikal na circle sa bagong center |
| [Rotate](../rotate/) | Iniikot ang center sa paligid ng base point; hindi nagbabago ang radius |
| [Mirror](../mirror/) | Sinasalamin ang center sa kabilang panig ng mirror axis; hindi nagbabago ang radius |
| [Scale](../scale/) | Sinu-scale ang posisyon ng center at pinarami ang radius sa scale factor |
| [Offset](../offset/) | Gumagawa ng concentric na circle sa mas malaki o mas maliit na radius |
| [Delete](../delete/) | Tinatanggal ang circle |

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
| Center X / Center Y | Coordinates ng center point |
| Radius | Radius ng circle sa drawing units |

## Circle kumpara sa Arc — kailan gagamit ng alin

| | Circle | Arc |
|---|--------|-----|
| Saklaw | Buong 360° | Partial — naitatakda ng start at end angle |
| Paraan ng pagguhit | Center + radius | Tatlong punto sa curve |
| Typed input | Radius value | Wala — click-only |
| Resize grip | 4 cardinal na punto | Start at end point (angle + radius) |
| Dimensioning | Radius: [Dim Radius](../dim-radius/) · Diameter: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Pinakamainam para sa | Buong butas, bolt circle, round na feature | Fillet, partial na curve, arched na path |

## DXF — CIRCLE Entity

Nase-save ang mga circle bilang `CIRCLE` entities sa DXF file. Ang center coordinates, radius, color, layer, linetype, linetype scale, at thickness ay lahat nagra-round-trip nang walang nawawala. Anumang DXF-compatible na application ay babasahin ito bilang standard na circle.
