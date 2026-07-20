---
title: Dimension Linear — Girma-girma a Kwance da a Tsaye
description: Umarnin Dimension Linear yana auna nisa a kwance ko a tsaye tsakanin tabo biyu. Layin girma-girma koyaushe an daidaita shi da axis — danna H ko V don kulle shugabanci, ko bar matsayin mai nuni ya yanke shawara kai tsaye. Cikakken juyawa a DXF a matsayin abubuwan DIMENSION.
keywords: [CAD dimension linear, girma-girma a kwance CAD, girma-girma a tsaye CAD, dimlinear, kulle shugabanci H V, motsin girma-girma, kulmanlab]
group: markup
order: 4
---

# Dimension Linear

Umarnin `dimlinear` yana sanya girma-girma a kwance ko a tsaye tsakanin asalin layukan extension guda biyu. Layin girma-girma koyaushe yana gudana ko dai a kwance daidai ko a tsaye daidai — ba za a iya sanya shi a kusurwa mai sabani ba. Yi amfani da [Dimension Aligned](../dim-aligned/) idan kana bukatar girma-girma mai daidaici da layin diagonal.

## Yanayin girma-girma na layi

```
  |←————— 5.00 —————→|
  |                   |
  ●  (ext line 1)     ●  (ext line 2)
  p1                  p2
```

- **Layukan extension** — daga kowace tabo da aka aunata, ta hankalta a kan layin girma-girma.
- **Layin girma-girma** — a kwance (yana auna nisan X) ko a tsaye (yana auna nisan Y).
- **Ƙima** — nisan da aka nuna a kan axis da aka zaɓa, ba ainihin nisan tabo-zuwa-tabo ba.

## Sanya girma-girma na layi

1. Rubuta `dimlinear` a tashar umarni ko danna maɓallin kayan aiki na **Dimension Linear**.
2. **Danna asalin layin extension na farko** (p1), ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
3. **Danna asalin layin extension na biyu** (p2). Shigar da daidaitawa yana aiki a nan ma.
4. **Motsa mai nuni** don sanya matsayin layin girma-girma. Ana gano shugabanci kai tsaye daga matsayin mai nuni.
5. **Danna** don sanyawa, ko rubuta nisan motsi ka danna **Enter** don sanya wuri madaidaici.

## Gano shugabanci kai tsaye

Idan babu shugabanci da aka tilasta, umarnin yana karanta matsayin mai nuni dangane da tabo biyun da ake aunawa:

| Matsayin mai nuni | Shugabancin da aka gano | Abin da ake aunawa |
|-----------------|---------------------|-----------------|
| Sama ko ƙasa da tabon | A kwance | Δ X tsakanin p1 da p2 |
| Hagu ko dama da tabon | A tsaye | Δ Y tsakanin p1 da p2 |

Danna **H** don kulle a kwance ko **V** don kulle a tsaye a kowane lokaci a lokacin mataki na sanyawa. Da zarar an kulle, shugabanci ba ya canzawa yayin da kake motsa mai nuni.

## Nisan motsi da aka rubuta

Rubuta lamba yayin sanyawa don kwaɓe layin girma-girma a nisa madaidaici daga tabon da ake aunawa:

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.` | Ƙara lamba zuwa nisan motsi |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` / `Space` | Sanya a nisan da aka rubuta |

Gefen mai nuni (sama/ƙasa ga a kwance, hagu/dama ga a tsaye) yana bayyana alama — layin girma-girma yana bayyana a gefen da mai nuni yake a kansa yanzu.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X (matakan p1/p2), ko nisan motsi (mataki na sanyawa) |
| `,` | Kulle X ka koma shigar da Y (matakan p1/p2) |
| `H` | Kulle shugabanci a kwance (mataki na sanyawa kaɗai) |
| `V` | Kulle shugabanci a tsaye (mataki na sanyawa kaɗai) |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` / `Space` | Tabbatar da daidaitawa ko motsi da aka rubuta |
| `Escape` | Soke |

## Dimension Linear da Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Axis | Koyaushe H ko V | Daidaici da layin da ake aunawa |
| Yana aunawa | Sashen X ko Y kaɗai | Nisan Euclidean na gaskiya |
| Maɓallan H/V | Eh — kulle shugabanci | Aʼa — koyaushe yana bin p1→p2 |
| Mafi kyau don | Layouts na orthogonal, tsare-tsaren ƙasa | Fasaloli na diagonal, yankewa a kusurwa |

## Gyara alamar — simple mode

**Danna sau biyu** girma-girma na layi da aka sanya don buɗe naʼurar gyaran rubutu a **simple** mode. An riga an cika naʼurar da ƙimar da ake nunawa yanzu don ka iya sanya mai nuni ka gyara ta kai tsaye.

| Fasali | Hali |
|---------|-----------|
| Bold / Italic / Font / Height | Yana shafar dukkan **alamar** lokaci guda |
| Tsari na kowane harafi | Ba a goyon baya |
| `Enter` | Yana tabbatar da ƙima ya rufe naʼurar |
| Layi da yawa | Ba a goyon baya |

Duba [Naʼurar Gyaran Rubutu — simple mode](../../interface/text-editor/#simple-mode) don cikakken bayani.

## Sarƙar girma-girma

Don ƙara girma-girma ƙari da ke ci gaba daga layin extension na ƙarshe, yi amfani da [Dimension Continue](../dim-continue/) nan take bayan ka sanya wannan.

## DXF — Abin DIMENSION

Girma-girma na layi ana ajiye su a matsayin abubuwan `DIMENSION` tare da `rotationDeg` an saita zuwa `0` (a kwance) ko `90` (a tsaye). Asalin layukan extension, matsayin layin girma-girma, matsayin rubutu, ƙimar da aka aunata, salon kibiya, tsayin rubutu, da dukkan flags na nuni suna juyawa ba tare da asara ba.
