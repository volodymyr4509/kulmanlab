---
title: Dimension Aligned — Girma-girma Nisan Gaskiya a Kowace Kusurwa
description: Umarnin Dimension Aligned yana auna nisan kai tsaye na gaskiya tsakanin tabo biyu. Layin girma-girma yana gudana daidaici da layin p1→p2 a kowace kusurwa — ba kamar Dimension Linear wanda aka iyakance zuwa a kwance ko a tsaye ba. Cikakken juyawa a DXF a matsayin abubuwan DIMENSION.
keywords: [CAD dimension aligned, dimaligned, girma-girma diagonal CAD, girma-girma nisan gaskiya, girma-girma a kusurwa CAD, kulmanlab]
group: markup
order: 5
---

# Dimension Aligned

Umarnin `dimaligned` yana sanya girma-girma wanda ke auna **nisan kai tsaye na gaskiya** tsakanin tabo biyu. Layin girma-girma yana gudana daidaici da layin da ke haɗa tabo biyun, don haka zai iya kasancewa a kowace kusurwa. Wannan shine babban bambanci daga [Dimension Linear](../dim-linear/), wanda aka iyakance zuwa a kwance ko a tsaye.

## Yanayin girma-girma mai daidaici

```
     ●  p2
    /|
   / |  (ext line 2, ta hankalta a kan dim line)
  /  |
 /←5.00→/
/  /
●  /  (ext line 1, ta hankalta a kan dim line)
p1
```

- **Layukan extension** — ta hankalta a kan layin girma-girma, an zana daga kowace tabo da ake auna.
- **Layin girma-girma** — daidaici da p1→p2, an motsa zuwa gefe ɗaya ta matsayin mai nuni.
- **Ƙima** — nisan Euclidean na gaskiya `|p1 – p2|`.

## Sanya girma-girma mai daidaici

1. Rubuta `dimaligned` a tashar umarni ko danna maɓallin kayan aiki na **Dimension Aligned**.
2. **Danna asalin layin extension na farko** (p1), ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
3. **Danna asalin layin extension na biyu** (p2). Shigar da daidaitawa yana aiki a nan ma.
4. **Motsa mai nuni** zuwa gefe ɗaya don saita motsi na hankalta na layin girma-girma.
5. **Danna** don sanyawa, ko rubuta nisan motsi ka danna **Enter** don sanya wuri madaidaici.

## Nisan motsi da aka rubuta

Rubuta lamba yayin sanyawa don kwaɓe layin girma-girma a nisa madaidaici ta hankalta daga layin p1→p2:

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.` | Ƙara lamba zuwa motsi |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` / `Space` | Sanya a motsi da aka rubuta |

Gefen mai nuni yana bayyana wace gefe layin girma-girma zai bayyana a kai.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X (matakan p1/p2), ko nisan motsi (mataki na sanyawa) |
| `,` | Kulle X ka koma shigar da Y (matakan p1/p2) |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` / `Space` | Tabbatar da daidaitawa ko motsi da aka rubuta |
| `Escape` | Soke |

## Dimension Aligned da Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Kusurwar layin girma-girma | Daidaici da p1→p2 — kowace kusurwa | Koyaushe a kwance ko a tsaye |
| Yana aunawa | Nisan Euclidean na gaskiya | Sashen X ko Y kaɗai |
| Kulle-shugabanci H/V | Aʼa | Eh — maɓallan `H` da `V` |
| Mafi kyau don | Fasaloli na diagonal, yankewa a kusurwa | Layouts na orthogonal, sassa masu daidaici da grid |

## Gyara alamar — simple mode

**Danna sau biyu** girma-girma mai daidaici da aka sanya don buɗe naʼurar gyaran rubutu a **simple** mode. An riga an cika naʼurar da ƙimar da ake nunawa yanzu don ka iya sanya mai nuni ka gyara ta kai tsaye.

| Fasali | Hali |
|---------|-----------|
| Bold / Italic / Font / Height | Yana shafar dukkan **alamar** lokaci guda |
| Tsari na kowane harafi | Ba a goyon baya |
| `Enter` | Yana tabbatar da ƙima ya rufe naʼurar |
| Layi da yawa | Ba a goyon baya |

Duba [Naʼurar Gyaran Rubutu — simple mode](../../interface/text-editor/#simple-mode) don cikakken bayani.

## Sarƙar girma-girma

Don ƙara girma-girma ƙari da ke ci gaba daga layin extension na biyu na wannan, yi amfani da [Dimension Continue](../dim-continue/) — yana kulle zuwa kusurwar awo iri ɗaya kamar wannan girma-girma mai daidaici.

## DXF — Abin DIMENSION (nauʼin daidaici)

Girma-girma mai daidaici ana ajiye su a matsayin abubuwan `DIMENSION` tare da `dimType = 1` (daidaici). Asalin layukan extension, matsayin layin girma-girma, matsayin rubutu, ƙimar da aka aunata, juyawa, salon kibiya, da dukkan flags na nuni suna juyawa ba tare da asara ba.
