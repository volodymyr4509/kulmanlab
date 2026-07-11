---
title: "Trim Command — Putulin ang Line Segment sa mga Intersection sa KulmanLab CAD"
description: "Tinatanggal ng Trim command ang bahagi ng Line sa pagitan ng dalawang magkatabing intersection point na pinakamalapit sa cursor. Ipinapakita ng red hover preview kung aling segment nga ang puputulin bago ka mag-click. Gumagana lang ang Trim sa Line entities — hindi sa arcs, circles, o polylines."
keywords: [CAD trim command, putulin ang linya CAD, cut line intersection, hover trim preview, line only trim, kulmanlab]
group: edit
order: 8
---

# Trim

Tinatanggal ng `trim` command ang bahagi ng [Line](../line/) na nasa pagitan ng dalawang magkatabing intersection point, hinahati ang linya sa isa o dalawang mas maiikling segment. Ang segment na puputulin ay tinutukoy ng posisyon ng cursor — mag-hover sa bahaging gusto mong tanggalin at mag-click para i-trim ito.

Gumagana lang ang Trim sa **Line entities**. Para sa arcs, circles, polylines, at ibang entity type, gamitin sa halip ang [Delete](../delete/) o grip editing.

## Pag-trim ng linya

1. I-type ang `trim` sa terminal o i-click ang **Trim** button sa toolbar.
2. **Mag-hover sa line segment** na gusto mong tanggalin — hinihighlight ng red preview nang eksakto ang bahaging puputulin.
3. **Mag-click** para tanggalin ang segment na iyon.

Nananatiling aktibo ang command pagkatapos ng bawat trim, kaya puwede kang magpatuloy sa pag-hover at pag-click para putulin pa ang ibang segment. Pindutin ang **Escape** para lumabas.

```
  Before:                     After trimming middle segment:

  ──────●──────●──────        ──────●          ●──────
      intersect  intersect       (left part)  (right part)
                                 (middle segment removed)
```

## Paano tinutukoy ang trim segment

Nag-p-project ang command ng posisyon ng cursor papunta sa hino-hover na linya at hinahanap ang lahat ng intersection point ng linya sa ibang entity. Hinahati ng mga intersection parameter na ito ang linya sa mga segment. Ang segment na ang interval ay naglalaman ng projection ng cursor ang hinihighlight at tatanggalin sa pag-click.

- Kung ang cursor ay **bago ang unang intersection**: tatanggalin ang naunang bahagi ng linya.
- Kung ang cursor ay **nasa pagitan ng dalawang intersection**: tatanggalin ang gitnang bahagi; mahahati ang linya sa dalawa.
- Kung ang cursor ay **pagkatapos ng huling intersection**: tatanggalin ang huling bahagi.
- Kung **walang intersection** ang linya sa ibang entity: walang ipapakitang preview at walang mangyayari sa pag-click.

## Keyboard reference

| Key | Aksyon |
|-----|--------|
| `Escape` | Lumabas sa trim mode |

## Mga suportadong entity

| Entity | Puwede bang i-trim? |
|--------|----------------|
| Line | Oo |
| Arc, Circle, Ellipse | Hindi |
| Polyline / Rectangle | Hindi |
| Text, Spline, Dimension, Leader | Hindi |

Ang mga entity na ginagamit bilang **cutting boundary** ay puwedeng anumang type — Line entity lang dapat ang linyang tini-trim.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Ano ang ginagawa | Tinatanggal ang segment ng isang linya | Iniuunat ang endpoint ng linya papunta sa isang boundary |
| Trigger | Mag-hover sa segment na puputulin | Mag-hover malapit sa endpoint para i-extend |
| Resulta | Nahahati o napapaikli ang linya | Gumagalaw ang endpoint ng linya papunta sa boundary |
| Pareho | Lines only | Lines only |
