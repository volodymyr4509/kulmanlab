---
sidebar_position: 11
title: Offset Command — Gumawa ng Parallel Copy sa Fixed na Distansya sa KulmanLab CAD
description: Gumagawa ang Offset command ng parallel copy ng isang Line, Circle, Arc, Ellipse, o Polyline sa naka-type na distansya. Isang beses lang i-type ang distansya at magagamit muli ito para sa maraming offset. Ang side-click ang nagtatakda kung saang direksyon lalabas ang copy. Limang entity type ang supported.
keywords: [CAD offset command, parallel copy CAD, offset line CAD, offset circle CAD, offset polyline CAD, concentric offset, kulmanlab]
---

# Offset

Gumagawa ang `offset` command ng parallel copy ng isang entity sa fixed na perpendicular distance. I-type mo ang distansya nang isang beses, pagkatapos ay mag-click ng mga entity at pumili ng side — nananatiling handa ang command sa parehong distansya kaya puwede kang mag-offset ng maraming object sa isang session.

Supported na entity types: **Line, Circle, Arc, Ellipse, Polyline** (kasama ang Rectangles).

## Paggamit ng Offset

1. I-type ang `offset` sa terminal o i-click ang **Offset** button sa toolbar.
2. **I-type ang offset distance** at pindutin ang **Enter** o **Space**.
3. **I-click ang entity** na i-o-offset — kung hindi supported ang entity type, may lalabas na error message at puwede kang mag-click ng ibang entity.
4. **Igalaw ang cursor** papunta sa side kung saan dapat lumabas ang copy — sinusundan ito ng live preview.
5. **I-click** para ilagay ang offset copy.

Pagkatapos ng bawat paglagay, babalik ang command sa step 3 sa **parehong distansya**, handa na para sa susunod na offset. Pindutin ang **Escape** para mag-reset pabalik sa distance-entry step.

```
  Distance: 10

  ─────────────────    ← original line
  ─────────────────    ← offset copy (10 units below)
```

## Per-Entity Offset Behavior

| Entity | Paano Kinakalkula ang Offset |
|--------|---------------------------|
| **Line** | Parallel na linya na na-shift perpendicular sa orihinal na direksyon |
| **Circle** | Concentric circle; mag-click sa labas → mas malaking radius, sa loob → mas maliit na radius |
| **Arc** | Concentric arc sa bagong radius; napapanatili ang parehong angular span |
| **Ellipse** | Pareho ang semi-axes na dinadagdagan o binabawasan ng parehong distansya |
| **Polyline** | Bawat segment ay independiyenteng na-offset; ang mga katabing offset segment ay mitered sa mga sulok |

Para sa **Circle**, **Arc**, at **Ellipse**: kung ang inward offset ay magpapababa sa anumang radius o semi-axis hanggang zero o mas mababa pa, hindi ia-apply ang offset.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Idagdag ang digit sa distance value |
| `Backspace` | Tanggalin ang huling na-type na character |
| `Enter` / `Space` | Kumpirmahin ang na-type na distansya at magpatuloy sa entity selection |
| `Escape` | Mag-reset pabalik sa distance-entry step |

## Tala sa Workflow

Nananatiling naka-set ang distansya hanggang pindutin mo ang **Escape**. Ginagawa nitong episyente ang pag-offset ng maraming entity sa parehong spacing — i-type ang distansya nang isang beses, pagkatapos ay mag-click at pumili ng side para sa bawat entity nang sunod-sunod.

## Offset kumpara sa Copy

| | Offset | Copy |
|---|--------|------|
| Displacement | Perpendicular sa geometry ng entity | Arbitrary vector (base → destination) |
| Supported na entities | Line, Circle, Arc, Ellipse, Polyline | Lahat ng entity types |
| Distance input | Na-type bago piliin ang entity | Na-type o na-click pagkatapos piliin |
| Pinakamainam para sa | Parallel lines, concentric circles, inset/outset paths | Paglalagay ng mga duplicate sa arbitrary na posisyon |
