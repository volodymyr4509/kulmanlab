---
title: Chamfer — Yanke Kusurwa Madaidaiciya Tsakanin Layi Biyu
description: Umarnin Chamfer yana haɗa abubuwan Line ko Polyline guda biyu da yankewar diagonal madaidaici. Ka bayyana nisa biyu — ɗaya a kan kowane abu — kuma umarnin yana yanke duka biyu zuwa waɗannan tabo kuma yana sanya layin haɗi.
keywords: [umarnin chamfer CAD, chamfer layi CAD, yankewar kusurwa diagonal, bevel kusurwa CAD, kulmanlab]
group: edit
order: 12
---

# Chamfer

Umarnin `chamfer` yana yanke kusurwa madaidaiciyar diagonal tsakanin abubuwan [Line](../line/) ko [Polyline](../polyline/) guda biyu. Ka bayyana yaya nisa za a yanke a kan kowane abu (d1 da d2), kuma umarnin yana yanke abubuwan biyu zuwa waɗannan tabo kuma yana sanya layin haɗi tsakaninsu.

Yin amfani da nisa iri ɗaya yana samar da yankewar 45° mai daidaici; nisa daban-daban suna samar da bevel mara daidaici.

Chamfer yana aiki akan abubuwan **Line da Polyline**.

## Amfani da chamfer

1. Rubuta `chamfer` a tashar umarni ko danna maɓallin kayan aiki na **Chamfer**.
2. **Rubuta nisan chamfer na farko** (d1 — nisa a kan abu na farko) ka danna **Enter**.
3. **Rubuta nisan chamfer na biyu** (d2 — nisa a kan abu na biyu) ka danna **Enter**.
4. **Danna abu na farko** — sashen da ka danna yana bayyana wane gefen kowace mahaɗa ake ci gaba da shi.
5. **Riƙe mai nuni a kan abu na biyu** — preview na layi mai ɗigo-ɗigo yana nuna yankewar chamfer da za a samu. Motsa mai nuni zuwa gefen da kake son ci gaba da shi.
6. **Danna** don aiwatarwa. Ana yanke abubuwan biyu kuma ana sanya layin chamfer.

```
  Kafin (d1=5, d2=8):        Bayan:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Zaɓen gefe

Idan layi biyu suka haɗu da juna, ana amfani da chamfer a kan kusurwar da matsayin dannawa ya bayyana — sashen kowace abu a **gefen iri ɗaya da mai nuni** ana ci gaba da shi.

- Danna kusa da wani ƙarshe na abu na farko don zaɓen wannan rabin.
- Motsa mai nuni zuwa rabin da ake so na abu na biyu — preview mai ɗigo-ɗigo yana sabuntawa nan take.

Ga Polylines, matsayin dannawa yana bayyana wace **sashe** na polyline ke shiga ciki, kuma vertex mafi kusa da gefen mahaɗa shine wanda za a yanke.

## Abin da umarnin ke ƙirƙira

- Ƙarshen abu na farko (ko vertex na polyline) mafi kusa da mahaɗa ana motsa shi zuwa tabo **T1**, wanda yake d1 a kan abu na farko daga mahaɗa.
- Ƙarshen abu na biyu (ko vertex na polyline) mafi kusa da mahaɗa ana motsa shi zuwa tabo **T2**, wanda yake d2 a kan abu na biyu daga mahaɗa.
- Ana sanya sabon abin Line daga **T1** zuwa **T2**.

Layin da aka sanya yana gado nauyin layi, launi, layer, da saitunan nauʼin layi na yanzu.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.` | Ƙara lamba zuwa ƙimar nisan yanzu |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da nisan da aka rubuta ka ci gaba |
| `Escape` | Soke ka sake saita |

## Abubuwan da ake goyon baya

| Abu | Ana Goyon Baya |
|--------|-----------|
| Line | Eh |
| Polyline / Rectangle | Eh |
| Arc, Circle, Ellipse | Aʼa |
| Text, Spline, Dimension, Leader | Aʼa |

## Chamfer da Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Nauʼin kusurwa | Yankewa madaidaiciya | Baka mai zagaye |
| Shigarwa | Nisa biyu (d1, d2) | Radius ɗaya |
| Abu da aka sanya | Line | Arc |
| Abubuwan da ake goyon baya | Lines da Polylines | Lines kaɗai |
