---
title: Fillet — Zagaye Kusurwa Tsakanin Layi Biyu
description: Umarnin Fillet yana haɗa abubuwan Line guda biyu da baka mai taɓawa na radius da aka bayyana, yana yanke kowane layi baya zuwa tabon taɓawa. Preview na baka mai ɗigo-ɗigo yana taimaka maka zaɓen kusurwar da ta dace kafin danna.
keywords: [umarnin fillet CAD, zagaye kusurwa CAD, baka na fillet, baka mai taɓawa layi biyu, kulmanlab]
group: edit
order: 11
---

# Fillet

Umarnin `fillet` yana zagaya kusurwa tsakanin abubuwan [Line](../line/) guda biyu ta sanya baka mai taɓawa na radius da aka bayar kuma yana yanke kowane layi baya zuwa tabon da bakan ke farawa. Sakamako kusurwa mai santsi, mai radius wanda ya haɗa layin biyun.

Fillet yana aiki akan **abubuwan Line kaɗai**.

## Amfani da fillet

1. Rubuta `fillet` a tashar umarni ko danna maɓallin kayan aiki na **Fillet**.
2. **Rubuta radius ɗin fillet** ka danna **Enter**.
3. **Danna layi na farko** — sashen da ka danna yana bayyana wace gefen kowace mahaɗa ake ci gaba da shi.
4. **Riƙe mai nuni a kan layi na biyu** — preview na baka mai ɗigo-ɗigo yana nuna fillet ɗin da za a samu. Motsa mai nuni zuwa gefen da kake son ci gaba da shi.
5. **Danna** don aiwatarwa. Ana yanke layukan biyu kuma ana sanya bakan.

```
  Kafin:                        Bayan fillet (radius r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Zaɓen gefe ga layukan da suke haɗuwa

Idan layi biyu suka haɗu da juna, ana amfani da fillet a kan kusurwar da matsayin dannawa ya bayyana — sashen kowane layi a **gefen iri ɗaya da mai nuni** ana ci gaba da shi.

- Danna kusa da wani ƙarshe na layi na farko don zaɓen wannan rabin.
- Motsa mai nuni zuwa rabin da ake so na layi na biyu — preview mai ɗigo-ɗigo yana sabuntawa nan take.

## Abin da umarnin ke ƙirƙira

- Ƙarshen layi na farko mafi kusa da mahaɗa ana motsa shi zuwa tabon taɓawa **T1**.
- Ƙarshen layi na biyu mafi kusa da mahaɗa ana motsa shi zuwa tabon taɓawa **T2**.
- Ana sanya sabon abin Arc daga **T1** zuwa **T2**, mai taɓawa da layukan biyu.

Bakan da aka sanya yana gado nauyin layi, launi, layer, da saitunan nauʼin layi na yanzu.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.` | Ƙara lamba zuwa ƙimar radius |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da radius da aka rubuta ka koma zaɓen layi |
| `Escape` | Soke ka sake saita |

## Abubuwan da ake goyon baya

| Abu | Ana Goyon Baya |
|--------|-----------|
| Line | Eh — a matsayin abu na farko da na biyu |
| Arc, Circle, Ellipse, Polyline | Aʼa |
| Text, Spline, Dimension, Leader | Aʼa |

## Fillet da Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Nauʼin kusurwa | Baka mai zagaye | Yankewa madaidaiciya |
| Shigarwa | Radius ɗaya | Nisa biyu (d1, d2) |
| Abu da aka sanya | Arc | Line |
| Abubuwan da ake goyon baya | Lines kaɗai | Lines da Polylines |
