---
title: Extend — Tsawaita Abu zuwa Iyaka Mafi Kusa
description: Umarnin Extend yana tsawaita ƙarshen da ya fi kusa na Line, Arc, Ellipse, ko Polyline mai buɗewa da aka riƙe mai nuni a kansa zuwa mahaɗar da ta fi kusa da wani abu. Preview mai rai yana nuna abin da aka tsawaita kafin ka danna.
keywords: [umarnin extend CAD, tsawaita layi CAD, tsawaita baka CAD, tsawaita ellipse CAD, tsawaita polyline CAD, tsawaita abu zuwa iyaka, preview extend na riƙe mai nuni, kulmanlab]
group: edit
order: 9
---

# Extend

Umarnin `Tsawaita` yana tsawaita ƙarshen da ya fi kusa na [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/), ko Polyline mai buɗewa da aka riƙe mai nuni a kansa zuwa mahaɗar da ta fi kusa da za ta yi da wani abu a zanen. Riƙe mai nuni kusa da ƙarshen da kake son tsawaitawa — preview yana nuna abin da aka tsawaita — sannan danna don aiwatarwa.

Abubuwan da ke da ainihin ƙarshe kaɗai ake iya tsawaitawa. [Circle](../circle/) da cikakken (360°) Ellipse koyaushe siffofi ne rufaffu ba tare da ƙarshe ba, don haka ba za a taɓa tsawaita su ba — haka nan ga Polyline rufaffiya ko Rectangle. Ellipse na sashi (baka mai lanƙwasa) da Arc suna da ƙarshe kuma ana tsawaita su a hanya ɗaya da Line.

## Tsawaita abu

1. Rubuta `Tsawaita` a tashar umarni ko danna maɓallin kayan aiki na **Extend**.
2. **Riƙe mai nuni kusa da wani ƙarshen** abin da kake son tsawaitawa — preview yana nuna an tsawaita zuwa iyaka mafi kusa a wannan shugabancin.
3. **Danna** don aiwatar da tsawaitarwar.

Umarnin yana ci gaba da zama a aiki bayan kowane tsawaitarwa, don haka za ka iya ci gaba da riƙe da dannawa don tsawaita ƙarin abubuwa. Danna **Enter**, **Space**, ko **Escape** don fita.

```
  Kafin:                        Bayan:

  ──────           |           ──────────────|
  (layi guntu)     (iyaka)     (an tsawaita zuwa iyaka)
```

## Yadda ake zaɓen ƙarshe

Umarnin yana duba wace ƙarshen mai nuni ya fi kusa da ita:

- **Line da Polyline mai buɗewa** — mai nuni ya fi kusa da ƙarshen yana tsawaita ƙarshen gaba; mai nuni ya fi kusa da farkon yana tsawaita farkon baya.
- **Arc da Ellipse na sashi** — mai nuni ya fi kusa da ɗaya daga cikin ƙarshen kusurwa yana sa bakan ya girma a wannan shugabancin, kewaye da tsakiya da radius ɗaya (ko siffar ellipse ɗaya), har sai ya kai iyaka na gaba.

Ana harbe radiyo — ko, ga Arc da Ellipse, da'ira ko lanƙwasa na asali na kanta abin — daga ƙarshen da aka zaɓa, kuma **mahaɗa mafi kusa** tare da wani abu daban (ban da abin da kansa da nauʼukan da aka yi banza da su) ya zama sabon ƙarshe.

Idan babu mahaɗa da aka samu a wannan shugabanci, babu preview da ke bayyana kuma dannawa ba ya yin komai.

## Kebancewar iyaka

Nauʼukan abubuwa masu zuwa ana yin banza da su a matsayin iyaka — abu ba ya tsawaitawa don haɗuwa da su:

- Text / Mtext
- Multileader
- Spline

Dukkan sauran nauʼukan (Line, Arc, Circle, Ellipse, Polyline, Dimension) suna aiki a matsayin iyakoki masu inganci.

Idan sashi na farko ko na ƙarshe na Polyline shi kansa baka ne (wanda aka zana da sauyawa Arc), tsawaita shi yana sa bakan ya girma tare da da'irarsa — daidai yadda ake tsawaita Arc mai zaman kansa — maimakon a bi da shi a matsayin sashi madaidaici.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `Enter` / `Space` | Fita daga yanayin extend |
| `Escape` | Fita daga yanayin extend |

## Abubuwan da ake goyon baya

| Abu | Ana Iya Tsawaitawa? |
|--------|----------------|
| Line | Eh |
| Arc | Eh |
| Ellipse | Eh — kawai idan tuni baka ne na sashi; cikakken ellipse ba shi da ƙarshe |
| Circle | Aʼa — koyaushe siffa rufaffiya ba tare da ƙarshe ba |
| Polyline (mai buɗewa) | Eh |
| Polyline (rufaffiya) / Rectangle | Aʼa — koyaushe siffa rufaffiya ba tare da ƙarshe ba |
| Text, Spline, Dimension, Leader | Aʼa |

## Extend da Trim

| | Extend | Trim |
|---|--------|------|
| Abin da yake yi | Yana tsawaita ƙarshen abu zuwa iyaka | Yana cire sashen abu |
| Kunnawa | Riƙe kusa da ƙarshen don tsawaita | Riƙe a kan sashen don yanke |
| Sakamako | Ƙarshen yana motsawa waje | Abu yana rabuwa ko guntuwa |
| Abubuwan da ake goyon baya | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
