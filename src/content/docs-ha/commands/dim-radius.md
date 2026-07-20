---
title: Dimension Radius — Yin Alamar Radius na Baka da Da'ira
description: Umarnin Dimension Radius yana sanya girma-girma na radial mai gaba da R a kan baka ko da'ira. Danna abu, sannan motsa mai nuni don juya layin girma-girma daga tsakiya zuwa circumference. Cikakken juyawa a DXF a matsayin abubuwan radius na DIMENSION.
keywords: [girma-girma radius CAD, dimradius, yin alamar radius na da'ira, girma-girma radius na baka, gaban R girma-girma, kulmanlab]
group: markup
order: 7
---

# Dimension Radius

Umarnin `dimradius` yana sanya girma-girma na radius a kan baka ko da'ira. Layin girma-girma yana gudana daga tsakiya zuwa tabo a kan circumference zuwa shugabancin mai nuni, mai alama `R <ƙima>`. Don yin girma-girma na cikakken diameter maimakon haka, yi amfani da [Dimension Diameter](../dim-diameter/).

## Yanayin girma-girma na radius

```
  ● (tsakiya)
   \
    \  R 5.00
     \
      ●────── rubutu (gefen mai nuni)
   (tabon baka)
```

- **Layin girma-girma** — daga tsakiya ta tabon baka zuwa mai nuni, tare da kibiya a bakan.
- **Alama** — `R` sannan ƙimar radius.

## Sanya girma-girma na radius

1. Rubuta `dimradius` a tashar umarni ko danna maɓallin kayan aiki na **Dimension Radius**.
2. **Danna baka ko da'ira** don zaɓen ta.
3. **Motsa mai nuni** don juya layin girma-girma — tabon baka yana bin shugabancin mai nuni daga tsakiya.
4. **Danna** don sanya girma-girma.

Ana iya zaɓen abubuwan **Arc** da **Circle** kawai. Dannawa kowace irin abu daban ba ya yin komai.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `Escape` | Soke |

## Dimension Radius da Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Yana aunawa | Radius (tsakiya zuwa gefe) | Diameter (gefe zuwa gefe ta tsakiya) |
| Layin girma-girma | Tsakiya → tabon baka | Tabon baka → tabon baka (ta tsakiya) |
| Gaban alama | `R` | `⌀` |
| Kibiyoyi | Ɗaya (a tabon baka) | Biyu (a tabon baka biyu) |
| Mafi kyau don | Yin alamar gefe ɗaya na fasali mai lanƙwasa | Yin alamar girma-girma na da'irar cikakke |

## Gyara alamar — simple mode

**Danna sau biyu** girma-girma na radius da aka sanya don buɗe naʼurar gyaran rubutu a **simple** mode. An riga an cika naʼurar da ƙimar da ake nunawa yanzu (misali `R 5.00`) don ka iya sanya mai nuni ka gyara ta kai tsaye.

| Fasali | Hali |
|---------|-----------|
| Bold / Italic / Font / Height | Yana shafar dukkan **alamar** lokaci guda |
| Tsari na kowane harafi | Ba a goyon baya |
| `Enter` | Yana tabbatar da ƙima ya rufe naʼurar |
| Layi da yawa | Ba a goyon baya |

Duba [Naʼurar Gyaran Rubutu — simple mode](../../interface/text-editor/#simple-mode) don cikakken bayani.

## DXF — Abin radius na DIMENSION

Girma-girma na radius ana ajiye su a matsayin abubuwan `DIMENSION` tare da geometry na nauʼin radius, suna ajiye daidaitawar tsakiya, matsayin tabon baka, da ƙimar radius da aka auna. Dukkan abubuwan suna juyawa ba tare da asara ba.
