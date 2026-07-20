---
title: "Dimension Diameter — Alamar Cikakken Diameter na Da'ira/Baka"
description: "Umarnin Dimension Diameter yana sanya girma-girma na diameter (mai gaba da alamar diameter) a kan baka ko da'ira ta tsakiya. Motsa mai nuni don juya layin girma-girma zuwa kowace kusurwa. Cikakken juyawa a DXF a matsayin abubuwan diameter na DIMENSION."
keywords: [girma-girma diameter CAD, dimdiameter, tsara alamar diameter na da'ira, girma-girma diameter na baka, alamar diameter CAD, kulmanlab]
group: markup
order: 8
---

# Dimension Diameter

Umarnin `dimdiameter` yana sanya girma-girma na diameter a kan baka ko da'ira. Layin girma-girma yana rufe cikakken diameter — yana wucewa ta tsakiya tsakanin tabo biyu na baka masu adawa a diameter — kuma ana ba shi alama `⌀ <ƙima>`. Don yin alamar radius kaɗai daga tsakiya zuwa gefe ɗaya, yi amfani da [Dimension Radius](../dim-radius/).

## Yanayin girma-girma na diameter

```
  ●──────────── ⌀ 10.00 ────────────●
  (tabon baka na nesa)         (tabon baka na kusa / gefen rubutu)
```

- **Layin girma-girma** — yana rufe cikakken diameter, tare da kibiyoyi a tabon mahaɗar baka biyun.
- **Tabon baka na kusa** — tabon circumference a gefen mai nuni (inda alamar rubutu take zaune).
- **Tabon baka na nesa** — tabon da ke adawa a diameter.
- **Alama** — `⌀` sannan ƙimar diameter.

## Sanya girma-girma na diameter

1. Rubuta `dimdiameter` a tashar umarni ko danna maɓallin kayan aiki na **Dimension Diameter**.
2. **Danna baka ko da'ira** don zaɓen ta.
3. **Motsa mai nuni** don juya layin girma-girma zuwa kusurwar da ake so.
4. **Danna** don sanya girma-girma.

Ana iya zaɓen abubuwan **Arc** da **Circle** kawai.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `Escape` | Soke |

## Dimension Diameter da Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Yana aunawa | Cikakken diameter (2 × radius) | Radius (tsakiya zuwa gefe) |
| Layin girma-girma | Gefe → gefe ta tsakiya | Tsakiya → gefe |
| Gaban alama | `⌀` | `R` |
| Kibiyoyi | Biyu (a tabon baka biyu) | Ɗaya (a tabon baka) |
| Mafi kyau don | Girma-girma na cikakken ramin da'ira ko shaft | Yin alamar gefe ɗaya na fasali mai lanƙwasa |

## Gyara alamar — simple mode

**Danna sau biyu** girma-girma na diameter da aka sanya don buɗe naʼurar gyaran rubutu a **simple** mode. An riga an cika naʼurar da ƙimar da ake nunawa yanzu (misali `⌀ 10.00`) don ka iya sanya mai nuni ka gyara ta kai tsaye.

| Fasali | Hali |
|---------|-----------|
| Bold / Italic / Font / Height | Yana shafar dukkan **alamar** lokaci guda |
| Tsari na kowane harafi | Ba a goyon baya |
| `Enter` | Yana tabbatar da ƙima ya rufe naʼurar |
| Layi da yawa | Ba a goyon baya |

Duba [Naʼurar Gyaran Rubutu — simple mode](../../interface/text-editor/#simple-mode) don cikakken bayani.

## DXF — Abin diameter na DIMENSION

Girma-girma na diameter ana ajiye su a matsayin abubuwan `DIMENSION` tare da geometry na nauʼin diameter, suna ajiye matsayin tabon baka biyu da ƙimar diameter da aka auna (2 × radius). Dukkan abubuwan suna juyawa ba tare da asara ba.
