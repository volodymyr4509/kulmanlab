---
title: "Delete Command — Tanggalin ang mga Entity sa Drawing"
description: "Permanenteng tinatanggal ng Delete command ang napiling entity (puwedeng i-undo). Agad na natatanggal ang mga pre-selected na entity nang walang hakbang ng kumpirmasyon. Gumagana ang Delete key bilang global shortcut kahit hindi in-a-activate ang command. Sinusuportahan ang single-click at area selection."
keywords: [CAD delete command, tanggalin ang entity CAD, burahin ang objects CAD, delete key CAD, i-undo ang delete CAD, kulmanlab]
group: edit
order: 7
---

# Delete

Tinatanggal ng `delete` command ang napiling entity sa drawing. Naitatala ang mga pagtanggal sa [Undo](../undo/) history at puwedeng i-reverse hanggang 20 hakbang. Walang hiwalay na "confirm delete" dialog — isang key press lang ang kumpirmasyon.

## Dalawang paraan para magtanggal

**Pre-select, tapos delete** — ang pinakamabilis na paraan:

1. Piliin ang isa o higit pang entity sa canvas.
2. I-type ang `delete` sa terminal, i-click ang **Delete** button sa toolbar, **o pindutin nang direkta ang `Delete` key**.

Agad na natatanggal ang mga entity — walang karagdagang hakbang ng kumpirmasyon.

**Activate, tapos select**:

1. I-type ang `delete` o i-click ang toolbar button (nang walang naka-select).
2. **Piliin ang mga object** — mag-click para i-toggle, o mag-drag para pumili ayon sa area.
3. Pindutin ang **Enter**, **Space**, o **Delete** para kumpirmahin at tanggalin ang napiling entity.

## Delete key shortcut

Kumikilos ang `Delete` key sa keyboard bilang isang **global shortcut** — kung may kasalukuyang naka-select na entity, agad itong natatanggal sa pagpindot, kahit hindi mo binuksan ang Delete command sa terminal. Ito ang pinakamabilis na single-step na workflow ng pagtanggal:

```
Click entity → press Delete key → done
```

## Seleksyon habang tumatakbo ang command

| Paraan | Gawi |
|--------|-----------|
| **Click** | Nag-t-toggle ng entity sa ilalim ng cursor papasok/palabas ng seleksyon |
| **Drag right** (strict) | Pinipili lang ang mga entity na buo ang laman sa loob ng box |
| **Drag left** (crossing) | Pinipili ang mga entity na tumatawid sa boundary ng box |
| **Enter** / **Space** / **Delete** | Kinukumpirma at tinatanggal ang napiling entity |

## Pagbawi ng mga tinanggal na entity

Puwedeng i-undo ang mga pagtanggal gamit ang [Undo](../undo/) command (i-type ang `undo` o gamitin ang toolbar button). Hanggang **20 hakbang** ang puwedeng i-reverse kada file, at nananatili ang history kahit mag-reload ng page. Kung lumagpas ka na sa 20 pagtanggal nang hindi nag-save, hindi na mababawi ang mga naunang pagtanggal.

## Mga suportadong entity

Gumagana ang Delete sa bawat entity type — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader, at lahat ng iba pa.
