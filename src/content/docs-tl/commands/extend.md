---
title: Extend — I-stretch ang Entity sa Pinakamalapit na Boundary
description: Ini-stretch ng Extend command ang pinakamalapit na endpoint ng ho-hover na Line, Arc, Ellipse, o bukas na Polyline papunta sa pinakamalapit na intersection nito sa ibang entity. May live preview na nagpapakita ng extended entity bago ka mag-click.
keywords: [CAD extend command, i-extend ang linya CAD, i-extend ang arc CAD, i-extend ang ellipse CAD, i-extend ang polyline CAD, i-stretch ang entity papunta sa boundary, hover extend preview, kulmanlab]
group: edit
order: 9
---

# Extend

Ini-stretch ng `Pahabain` command ang pinakamalapit na endpoint ng isang [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/), o bukas na [Polyline](../polyline/) na ho-hover papunta sa pinakamalapit na intersection na maaari nitong mabuo sa ibang entity sa drawing. I-hover malapit sa endpoint na gusto mong i-extend — may preview na magpapakita ng extended entity — pagkatapos ay i-click para i-apply.

Mga entity lang na may tunay na endpoint ang puwedeng i-extend. Ang isang [Circle](../circle/) at kumpletong (360°) Ellipse ay laging saradong hugis na walang endpoint, kaya hindi kailanman puwedeng i-extend — gayundin sa saradong Polyline o Rectangle. Ang bahagyang Ellipse (isang elliptical arc) at isang Arc ay may mga endpoint at ine-extend sa parehong paraan tulad ng Line.

## Pag-extend ng isang entity

1. I-type ang `Pahabain` sa terminal o i-click ang **Extend** button sa toolbar.
2. **I-hover malapit sa isang dulo** ng entity na gusto mong i-extend — ipapakita ng preview itong na-extend papunta sa pinakamalapit na boundary sa direksyong iyon.
3. **I-click** para i-apply ang extension.

Nananatiling aktibo ang command pagkatapos ng bawat extension, kaya puwede kang magpatuloy sa pag-hover at pag-click para mag-extend ng higit pang entity. Pindutin ang **Enter**, **Space**, o **Escape** para lumabas.

```
  Before:                      After:

  ──────           |           ──────────────|
  (short line)     (boundary)  (extended to boundary)
```

## Paano napipili ang endpoint

Tinitingnan ng command kung aling dulo ang mas malapit sa cursor:

- **Line at bukas na Polyline** — cursor na mas malapit sa end point ang nag-e-extend sa dulo pasulong; cursor na mas malapit sa start point ang nag-e-extend sa simula pabalik.
- **Arc at bahagyang Ellipse** — cursor na mas malapit sa isa sa mga angular na dulo ang nagpapalaki sa arc sa direksyong iyon, sa paligid ng parehong sentro at radius (o parehong hugis ng ellipse), hanggang maabot ang susunod na boundary.

May ray — o, para sa Arc at Ellipse, ang sariling circle o curve ng entity — na itinatapon mula sa napiling dulo, at ang **pinakamalapit na intersection** sa alinmang ibang entity (maliban sa entity mismo at sa mga ignored types) ang magiging bagong endpoint.

Kung walang nahanap na intersection sa direksyong iyon, walang lalabas na preview at wala ring mangyayari sa pag-click.

## Boundary Exclusions

Ang mga sumusunod na entity type ay hindi kinikilala bilang boundaries — hindi nag-e-extend ang isang entity para makasalubong sa mga ito:

- Text / Mtext
- Multileader
- Spline

Ang lahat ng ibang types (Line, Arc, Circle, Ellipse, Polyline, Dimension) ay balidong boundaries.

Kung ang unang o huling segment ng Polyline ay mismong isang arc segment (iginuhit gamit ang Arc toggle), ang pag-extend nito ay nagpapalaki sa arc kasunod ng sarili nitong bilog — tulad mismo ng pag-extend ng nag-iisang Arc — sa halip na ituring itong straight segment.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `Enter` / `Space` | Lumabas sa extend mode |
| `Escape` | Lumabas sa extend mode |

## Supported na mga Entity

| Entity | Puwedeng i-extend? |
|--------|----------------|
| Line | Oo |
| Arc | Oo |
| Ellipse | Oo — kung ito ay bahagyang arc na; ang kumpletong ellipse ay walang endpoint |
| Circle | Hindi — laging saradong hugis na walang endpoint |
| Polyline (bukas) | Oo |
| Polyline (sarado) / Rectangle | Hindi — laging saradong hugis na walang endpoint |
| Text, Spline, Dimension, Leader | Hindi |

## Extend kumpara sa Trim

| | Extend | Trim |
|---|--------|------|
| Ano ang ginagawa | Ini-stretch ang endpoint ng entity papunta sa boundary | Tinatanggal ang segment ng entity |
| Trigger | I-hover malapit sa endpoint na i-stretch | I-hover sa segment na puputulin |
| Resulta | Gumagalaw palabas ang endpoint | Nahahati o pumapaikli ang entity |
| Mga supported na entity | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
