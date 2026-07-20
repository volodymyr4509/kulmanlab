---
title: Dimension Continue — Sarƙar Girma-girma daga Layin Tushe
description: Umarnin Dimension Continue yana tsawaita sarƙar girma-girma daga layin extension na biyu na girma-girma na ƙarshe da aka sanya. Yana gado kusurwar, motsi, girman kibiya, da tsayin rubutu na girma-girma tushe kai tsaye. Yana aiki da tushen layi da tushen daidaici duka.
keywords: [CAD dimension continue, dimcontinue, sarƙar girma-girma CAD, girma-girma tushe, ci gaba da jerin girma-girma, kulmanlab]
group: markup
order: 6
---

# Dimension Continue

Umarnin `dimcontinue` yana sarƙar sabbin girma-girma daga **layin extension na biyu** na girma-girma da ke akwai. Ana sanya kowane sabon sashi a kan axis na awo iri ɗaya kuma a motsi na layin girma-girma iri ɗaya kamar tushe. Ana kwafi dukkan abubuwan salo — girman kibiya, tsayin rubutu, tsawon layukan extension — daga tushe kai tsaye.

## Yadda girma-girma masu sarƙa suke kama

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (tushe    p3           p4
           ext2 → sabon farawa)
```

Kowace murabbaʼi abin `DIMENSION` daban ne. Suna raba matsayin layin girma-girma da shugabancin awo iri ɗaya.

## Fara sarƙa

1. Rubuta `dimcontinue` a tashar umarni ko danna maɓallin kayan aiki na **Dimension Continue**.
2. **Idan girma-girma an sanya shi yanzu-yanzu** — umarnin yana ɗauke shi kai tsaye a matsayin tushe (babu bukatar dannawa).
3. **Idan babu girma-girma na kwanan nan** — danna kowace girma-girma da ke akwai don yin amfani da ita a matsayin tushe.
4. **Danna asalin layin extension na gaba** — preview yana nuna sabon girma-girma yayin da kake motsa mai nuni. Ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
5. Ci gaba da dannawa (ko rubutu) don tsawaita sarƙa. Kowace girma-girma da aka sanya ta zama sabon tushe kai tsaye.
6. Danna **Enter**, **Space**, ko **Escape** don kammala sarƙa.

## Abin da ake gado daga girma-girma tushe

| Abu | An gada daga tushe |
|----------|---------------------|
| Shugabanci/kusurwar awo | Eh — an kulle ga dukkan sarƙa |
| Motsi na layin girma-girma (nisa daga tabon da ake aunawa) | Eh |
| Girman kibiya | Eh |
| Tsayin rubutu | Eh |
| Motsi da tsawon layin extension | Eh |
| Daidaiton rubutu | Eh |
| Sunan salo | Eh |
| Launi, Layer | Ba a gada ba — yana amfani da layer na yanzu |

## Kulle-shugabanci na awo

Shugabancin awo na sarƙar an **kwaɓe zuwa kusurwar girma-girma tushe**:

- Tushe na layi (H) → dukkan ci-gaba suna auna nisa a kwance (Δ X).
- Tushe na layi (V) → dukkan ci-gaba suna auna nisa a tsaye (Δ Y).
- Tushe mai daidaici a kowace kusurwa → dukkan ci-gaba suna auna a kan wannan kusurwar iri ɗaya.

Ba za ka iya canza shugabanci a tsakiyar sarƙa ba. Fara sabon [Dimension Linear](../dim-linear/) ko [Dimension Aligned](../dim-aligned/) don auna a wani shugabanci daban.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X |
| `,` | Kulle X ka koma shigar da Y |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawa da aka rubuta, ko kammala sarƙa idan babu shigarwa a tsari |
| `Space` / `Escape` | Kammala sarƙa |

## Dimension Continue da sabon farawa

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Tabon farawa | An kwaɓe a ext2 na tushe na ƙarshe | Danna a ko'ina |
| Kusurwa | An kulle zuwa tushe | Kyauta |
| Motsi | An gada daga tushe | An saita ta mai nuni ko rubutu |
| Salo | An gada daga tushe | Salo na yanzu |
| Mafi kyau don | Awo masu tarawa a jere | Girma-girma na farko ko canza shugabanci |

## Gyara alamomi bayan sanyawa — simple mode

**Danna sau biyu** kowace girma-girma a sarƙa don buɗe naʼurar gyaran rubutu a **simple** mode. Kowane sashi mai zaman kansa ne kuma ana iya gyara shi daban.

| Fasali | Hali |
|---------|-----------|
| Bold / Italic / Font / Height | Yana shafar dukkan **alamar** lokaci guda |
| Tsari na kowane harafi | Ba a goyon baya |
| `Enter` | Yana tabbatar da ƙima ya rufe naʼurar |
| Layi da yawa | Ba a goyon baya |

Duba [Naʼurar Gyaran Rubutu — simple mode](../../interface/text-editor/#simple-mode) don cikakken bayani.

## DXF — Abubuwan DIMENSION

Kowane sashi a sarƙar ana ajiye shi a matsayin abin `DIMENSION` mai zaman kansa a fayil ɗin DXF. Ba a haɗa su a fayil ɗin ba — suna raba abubuwa domin an ƙirƙira su daga tushe iri ɗaya, amma kowane ana iya gyara shi daban bayan sanyawa.
