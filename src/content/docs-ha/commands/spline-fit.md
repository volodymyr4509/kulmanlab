---
title: Spline Fit — Zana Splines masu Interpolate ta Tabo da Aka Danna
description: Umarnin Spline Fit yana zana spline mai cubic wanda ke wucewa ta kowace tabo da aka danna daidai. A ciki ana ajiye curve tare da fit points da control vertices da aka lissafa. Jan grip na fit-point yana sake yin interpolate ga dukkan curve. Cikakken juyawa a DXF a matsayin abubuwan SPLINE.
keywords: [umarnin spline fit CAD, spline mai interpolate CAD, spline ta tabo, zana curve mai santsi CAD, fit points SPLINE DXF, gyaran grip na spline, kulmanlab]
group: shapes
order: 9
---

# Spline Fit

Umarnin `splinefit` yana zana spline mai cubic wanda ke wucewa ta kowace tabo da ka danna — curve mai interpolate. Ba kamar [Spline CV](../spline-cv/) ba, inda ake jawo curve kawai zuwa control vertices, a nan an tilasta curve ya kai kowace daidaitawa da aka danna daidai. A ciki editan yana daidaita control vertices don cimma wannan, kuma ana ajiye waɗannan CVs tare da fit points a fayil ɗin DXF.

## Zana spline ta fit points

1. Rubuta `splinefit` a tashar umarni ko danna maɓallin kayan aiki na **Spline Fit**.
2. **Danna don sanya fit points** — curve zai wuce ta kowanne. Ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
3. Danna **Enter** don kammalawa (ana bukatar aƙalla tabo 2).

```
  ●──────●──────●──────●  ← curve yana wucewa daidai ta kowace dannawa
  p1     p2     p3     p4
```

Preview mai rai yana nuna curve mai interpolate na yanzu yayin da kake motsa mai nuni, ciki har da tabon na gaba mai yiwuwa a matsayin mai nuni. Danna **Escape** don kawar da dukkan tabo da aka sanya ka fita.

## Shigar da daidaitawa

Maimakon dannawa, rubuta madaidaicin matsayi ga kowace fit point:

1. Rubuta ƙimar X.
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]`.
3. Rubuta ƙimar Y.
4. Danna **Enter** don sanya fit point.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X |
| `,` | Kulle X ka koma shigar da Y |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawar da aka rubuta, ko kammala spline idan babu shigarwa a tsari kuma ≥ tabo 2 sun kasance |
| `Escape` | Kawar da dukkan tabo ka fita |

## Gyaran grip — sake tsarawa ta fit points

Spline mai fit da aka zaɓa yana nuna grip ɗaya ga kowace fit point:

| Grip | Matsayi | Aikinsa |
|------|----------|--------------|
| **Fit point** | A kowace matsayin da aka danna | Ja don motsa wannan fit point — dukkan curve yana sake interpolate don ya wuce ta sabon matsayi |

Jan grip guda ɗaya yana sake fit dukkan curve, ba sassan da ke kusa kaɗai ba. Wannan ya bambanta da gyaran grip na polyline, inda motsa vertex ke sake tsara sassa biyun da ke kusa kaɗai.

Babu grip na "motsa dukkan spline". Don matsar da dukkan spline, yi amfani da umarnin [Move](../move/).

## Zaɓen fit splines

| Hanya | Hali |
|--------|-----------|
| **Danna** | Yana zaɓe idan dannawa ta sauka kusa da kowace tabo a kan curve |
| **Ja dama** (mai tsauri) | Dukkan tabon dubawa a kan curve dole ne su kasance cikin akwatin zaɓi |
| **Ja hagu** (mai haɗuwa) | Kowace sashe na curve da ya taɓa gefen akwatin zaɓi yana zaɓen ta |

## Umarnin gyara da ake goyon baya

| Umarni | Abin da ke faruwa da spline |
|---------|---------------------------|
| [Move](../move/) | Yana motsa dukkan fit points da CVs da aka sake lissafa da motsi iri ɗaya |
| [Copy](../copy/) | Yana ƙirƙirar spline iri ɗaya a sabon matsayi |
| [Rotate](../rotate/) | Yana juya dukkan fit points a kewayen tabon tushe da aka zaɓa |
| [Mirror](../mirror/) | Yana yin madubi na dukkan fit points a kan axis na madubi |
| [Scale](../scale/) | Yana canza girman dukkan fit points iri ɗaya daga tabon tushe |
| [Delete](../delete/) | Yana cire spline |

Splines ba su goyon bayan **Offset**, **Trim**, ko **Extend** ba.

## Abubuwan

**Gaba ɗaya**

| Abu | Tsoho | Ma'ana |
|----------|---------|---------|
| Launi | 256 (ByLayer) | Alamar launi ta ACI |
| Layer | `0` | Sanya layer |
| Nauʼin layi | ByLayer | Tsarin nauʼin layi mai suna |
| Girman nauʼin layi | 1 | Abin da aka canza girman tsarin nauʼin layi |
| Kauri | 0 | Kaurin extrusion |

**Geometry**

| Abu | Ma'ana |
|----------|---------|
| Degree | Digiri na polynomial — koyaushe 3 (cubic) |
| Fit Points | Daidaitawar dukkan tabon wucewa da aka danna |
| Control Vertices | CVs da aka lissafa a ciki don rinda curve |

## Spline Fit da Spline CV — wanne za a yi amfani da shi

| | Spline Fit | Spline CV |
|---|------------|-----------|
| Curve tana wucewa ta tabo | Kowace tabo da aka danna daidai | Na farko da ƙarshe kaɗai (clamped) |
| Sakamako na gyaran grip | Fit point yana motsawa → dukkan curve an sake interpolate | CV yana motsawa → curve an jawo zuwa sabon matsayi |
| Tabbatar da sifa | Girma — curve yana bin dannawa | Ƙasa — curve yana jinkiri bayan CVs |
| Mafi kyau don | Curves da dole ne su kai daidaitawa na musamman | Curves masu tsafta na hoto, hanyoyi masu kyauta |

## DXF — Abin SPLINE (siffar fit-point)

Splines na fit ana ajiye su a matsayin abubuwan `SPLINE` a fayil ɗin DXF, suna ajiye duka daidaitawar fit point da control vertices da aka lissafa. Ana saita `splineFlag` zuwa `8` (fit-point spline) don haka manhaja da take sake loda ta san wace jerin tabo za a nuna a matsayin grips masu gyarawa. Dukkan abubuwan — launi, layer, nauʼin layi, girman nauʼin layi, da kauri — suna juyawa ba tare da asara ba. Manhajojin DXF da ke goyon bayan fit-point splines (LibreCAD, FreeCAD) za su nuna fit points a matsayin bayanan gyarawa na farko.
