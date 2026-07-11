---
title: Ellipse Command — Gumuhit ng Naka-rotate na Ellipse gamit ang Center at Dalawang Axis sa KulmanLab CAD
description: Ginuguhit ng Ellipse command ang ellipse sa tatlong click — center, unang axis endpoint (anumang direksyon), pagkatapos ay haba ng ikalawang axis. Palaging perpendicular ang dalawang axis. May sarili itong grip ang bawat semi-axis para sa independiyenteng pag-resize pagkatapos mailagay. Full DXF round-trip bilang ELLIPSE entities.
keywords: [CAD ellipse command, gumuhit ng ellipse CAD, naka-rotate na ellipse CAD, ellipse axes, ELLIPSE DXF entity, ellipse grip editing, axis ratio, kulmanlab]
group: shapes
order: 6
---

# Ellipse

Ginuguhit ng `ellipse` command ang ellipse gamit ang tatlong click: center point, endpoint ng una (major) na semi-axis sa anumang angle, at haba ng ikalawang (minor) na semi-axis. Palaging perpendicular sa isa't isa ang dalawang axis — awtomatikong kinukuha ang direksyon ng ikalawang axis mula sa una.

## Pagguhit ng Ellipse

1. I-type ang `ellipse` sa terminal o i-click ang **Ellipse** button sa toolbar.
2. **I-click ang center point**, o i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
3. **I-click ang endpoint ng unang axis** — itinatakda ang direksyon at haba ng unang semi-axis. Gumagana rin dito ang coordinate entry.
4. **Itakda ang haba ng ikalawang axis** — ilipat ang cursor nang perpendicular sa unang axis, pagkatapos ay i-click o i-type ang haba.

```
               ● ← first axis endpoint (step 3)
              /
  center ●  /  ← first axis (any angle)
            |
            ● ← cursor here sets second axis length (step 4)
```

Mailalagay ang ellipse pagkatapos ng hakbang 4 at magsasara ang command.

## Axis Input — Click, Coordinate, o Typed na Haba

**Center (hakbang 2):** i-click o i-type ang `X,Y` para sa eksaktong posisyon.

**Endpoint ng unang axis (hakbang 3):** i-click, o i-type ang `X,Y` para sa eksaktong coordinate. Nagsu-snap din ang angle locking sa 45° increments — habang naka-lock, mag-type ng haba at pindutin ang **Enter** para ilagay ang endpoint sa eksaktong distansyang iyon.

**Ikalawang axis (hakbang 4):** laging available ang typed na haba — hindi kailangan ng angle lock. Nakatakda na ang direksyon nang perpendicular sa unang axis; itinatakda lamang ng pag-type ang haba.

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Idagdag ang digit sa axis length (ikalawang axis phase) |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Ilagay ang axis endpoint sa na-type na haba |

## Coordinate Entry (Center at Endpoint ng Unang Axis)

1. I-type ang value ng X.
2. Pindutin ang `,` — ipapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang value ng Y.
4. Pindutin ang **Enter** para kumpirmahin.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry (center/unang axis na phase), o axis length kapag naka-angle-lock |
| `,` | I-lock ang X at lumipat sa Y entry |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Kumpirmahin ang na-type na coordinate o haba |
| `Escape` | Kanselahin at i-reset |

## Grip Editing — Independiyenteng Pag-resize ng Axis

Ipinapakita ng napiling ellipse ang limang grip:

| Grip | Bilang | Ano ang ginagawa nito |
|------|-------|--------------|
| **Center** | 1 | Inililipat ang buong ellipse; hindi nagbabago ang dalawang axis |
| **Endpoint ng major axis** | 2 (magkasalungat na dulo ng mas mahabang axis) | I-drag para i-resize ang haba ng major semi-axis; nananatiling constant ang absolute size ng minor axis |
| **Endpoint ng minor axis** | 2 (magkasalungat na dulo ng mas maiksing axis) | I-drag para i-resize ang haba ng minor semi-axis; hindi nagbabago ang major axis |

Independiyente ang major at minor axis grip — puwede mong baguhin ang hugis ng ellipse nang hindi na kailangang ulitin ang command.

## Pagpili ng mga Ellipse

| Method | Kilos |
|--------|-----------|
| **Click** | Napipili kung tumama ang click malapit sa outline ng ellipse |
| **Drag right** (strict) | Dapat kumasya nang buo sa loob ng selection box ang axis-aligned bounding box ng ellipse |
| **Drag left** (crossing) | Anumang bahagi ng outline ng ellipse na tumatawid sa boundary ng selection box ang pumipili nito |

## Suportadong Edit Command

| Command | Ano ang mangyayari sa ellipse |
|---------|-----------------------------|
| [Move](../move/) | Inililipat ang center; hindi nagbabago ang dalawang axis |
| [Copy](../copy/) | Gumagawa ng identikal na ellipse sa bagong center |
| [Rotate](../rotate/) | Iniikot ang posisyon ng center at ang major axis vector sa parehong angle |
| [Mirror](../mirror/) | Sinasalamin ang center at muling kinakalkula ang direksyon ng major axis sa kabilang panig ng mirror axis |
| [Scale](../scale/) | Sinu-scale ang posisyon ng center at pinarami ang dalawang haba ng semi-axis sa factor |
| [Offset](../offset/) | Gumagawa ng concentric na ellipse na naka-offset paloob o palabas sa fixed na distansya |
| [Delete](../delete/) | Tinatanggal ang ellipse |

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
| Center X / Center Y | Center ng ellipse |
| Major Axis X / Major Axis Y | Vector mula sa center papunta sa endpoint ng major axis (encode ang direksyon at haba) |
| Axis Ratio | Ratio ng minor semi-axis sa major semi-axis (0 < ratio ≤ 1) |
| Start Angle / End Angle | Parametric na angle sa degrees; parehong 0°/360° para sa kumpletong ellipse |

## Ellipse kumpara sa Circle — kailan gagamit ng alin

| | Ellipse | Circle |
|---|---------|--------|
| Axes | Dalawang independiyenteng semi-axis sa anumang angle | Isang radius, symmetric |
| Rotation | Puwedeng ilagay sa anumang angle | Walang rotation |
| Typed input | Haba per-axis | Radius lamang |
| Grip resize | Independiyente ang major at minor | Pantay ang lahat ng apat na cardinal na punto |
| Pinakamainam para sa | Oblique na views, oval na feature, perspective na butas | Symmetric na round na feature |

## DXF — ELLIPSE Entity

Nase-save ang mga ellipse bilang `ELLIPSE` entities sa DXF file. Iniimbak ng format ang center point, buong major axis vector (direksyon + haba), at ang axis ratio. Ang rotation, hugis, at lahat ng style properties ay nagra-round-trip nang walang nawawala. Ang circle ay **hindi** nakaimbak bilang degenerate na ellipse — nananatiling distinct ang dalawang entity type sa DXF model.
