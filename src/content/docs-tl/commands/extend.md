---
title: Extend — I-stretch ang Endpoint ng Linya sa Malapit na Boundary
description: Ini-stretch ng Extend command ang pinakamalapit na endpoint ng ho-hover na Line papunta sa pinakamalapit na intersection nito sa ibang entity. May live preview na nagpapakita ng extended line bago ka mag-click. Gumagana lang ang Extend sa Line entities at hindi kinikilala ang Text, Spline, at Multileader bilang boundaries.
keywords: [CAD extend command, extend line CAD, i-stretch ang linya papunta sa boundary, line endpoint extend, hover extend preview, kulmanlab]
group: edit
order: 9
---

# Extend

Ini-stretch ng `extend` command ang pinakamalapit na endpoint ng isang [Line](../line/) papunta sa pinakamalapit na intersection na maaari nitong mabuo sa ibang entity sa drawing. I-hover malapit sa endpoint na gusto mong i-extend — may preview na magpapakita ng extended line — pagkatapos ay i-click para i-apply.

Gumagana lang ang Extend sa **Line entities**. Ang mga boundary na pupuntahan ng linya ay puwedeng anumang ibang entity type maliban sa Text, Mtext, Multileader, at Spline.

## Pag-extend ng Linya

1. I-type ang `extend` sa terminal o i-click ang **Extend** button sa toolbar.
2. **I-hover malapit sa isang dulo ng linya** — ipapakita ng preview ang linyang na-extend papunta sa pinakamalapit na boundary sa direksyong iyon.
3. **I-click** para i-apply ang extension.

Nananatiling aktibo ang command pagkatapos ng bawat extension kaya puwede kang mag-extend ng maraming linya nang sunod-sunod. Pindutin ang **Escape** para lumabas.

```
  Before:                      After:

  ──────           |           ──────────────|
  (short line)     (boundary)  (extended to boundary)
```

## Paano Napipili ang Endpoint

Tinitingnan ng command kung aling endpoint ang mas malapit sa cursor:

- Cursor na **mas malapit sa end point** → ang end ang na-e-extend pasulong sa direksyon ng linya.
- Cursor na **mas malapit sa start point** → ang start ang na-e-extend pabalik (sa kabaligtaran na direksyon).

May ray na itinatapon mula sa napiling endpoint patungo sa direksyon ng linya, at ang **pinakamalapit na intersection** sa ray na iyon sa alinmang ibang entity (maliban sa linya mismo at sa mga ignored types) ang magiging bagong endpoint.

Kung walang nahanap na intersection sa direksyong iyon, walang lalabas na preview at wala ring mangyayari sa pag-click.

## Boundary Exclusions

Ang mga sumusunod na entity type ay hindi kinikilala bilang boundaries — hindi magpupunta ang linya para makasalubong sa mga ito:

- Text / Mtext
- Multileader
- Spline

Ang lahat ng ibang types (Line, Arc, Circle, Ellipse, Polyline, Dimension) ay balidong boundaries.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `Escape` | Lumabas sa extend mode |

## Supported na mga Entity

| Entity | Puwedeng i-extend? |
|--------|----------------|
| Line | Oo |
| Arc, Circle, Ellipse | Hindi |
| Polyline / Rectangle | Hindi |
| Text, Spline, Dimension, Leader | Hindi |

## Extend kumpara sa Trim

| | Extend | Trim |
|---|--------|------|
| Ano ang ginagawa | Ini-stretch ang endpoint ng linya papunta sa boundary | Tinatanggal ang segment ng linya |
| Trigger | I-hover malapit sa endpoint na i-stretch | I-hover sa segment na puputulin |
| Resulta | Gumagalaw palabas ang endpoint ng linya | Nahahati o pumapaikli ang linya |
| Pareho | Lines lang | Lines lang |
