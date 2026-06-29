---
sidebar_position: 5
title: "Print Command — Export the Drawing as PNG, JPEG, WebP, or PDF in KulmanLab CAD"
description: "Amri ya Print inafungua Print Manager — dirisha la maalum la kusafirisha na hakiki ya moja kwa moja, kichaguo cha muundo, kubadilisha rangi nyeusi, na uchaguzi wa eneo maalum. Husafirisha hadi pikseli 2000×2000. Inasaidia PNG, JPEG, WebP, na PDF."
keywords: [CAD export PNG, CAD export PDF, print CAD drawing, print manager, monochrome export, kulmanlab export]
---

# Print

Amri ya `print` inafungua **Print Manager** — dirisha la maalum la kusafirisha lenye kanvasi ya hakiki ya moja kwa moja, kichaguo cha muundo (PNG / JPEG / WebP / PDF), kubadilisha rangi nyeusi, na upunguzaji wa eneo. Hakuna kinachopelekwa kwa printa halisi; matokeo hupakuliwa kama faili.

## Kufungua Print Manager

Bonyeza kitufe cha **Print** kwenye upau wa zana au andika `print` kwenye terminal. Print Manager hufunguka mara moja ukionyesha hakiki ya muonekano wa sasa.

## Muundo wa Print Manager

Dirisha lina paneli mbili:
- **Upande wa kushoto** — udhibiti wote wa kusafirisha.
- **Paneli ya kulia** — kanvasi ya hakiki ya moja kwa moja inayosasishwa unavyobadilisha mipangilio.

### Udhibiti wa upande

| Udhibiti | Maelezo |
|----------|---------|
| **Change Area** | Punguza kwa mstatili maalum kwenye kanvasi (angalia hapa chini) |
| Kubadilisha **Monochrome** | Badilisha mistari yote yenye rangi kuwa nyeusi — imewashwa kwa chaguo-msingi kwa matokeo ya kuchapisha safi |
| Menyu ya **Format** | PNG, JPEG, WebP, au PDF |
| Kitufe cha **Export** | Tengeneza na upakue faili |

## Kuchagua eneo maalum la kusafirisha

Kwa chaguo-msingi hakiki inaonyesha hasa kilichoonekana kwenye kanvasi ulipofungua Print Manager. Kusafirisha eneo maalum:

1. Bonyeza **Change Area** — Print Manager inajificha na kanvasi inakuwa ya mwingiliano.
2. **Bonyeza kona ya kwanza** ya mstatili wa kusafirisha.
3. **Bonyeza kona iliyo kinyume** — Print Manager inafunguliwa tena na eneo lililochaguliwa katika hakiki.

Bonyeza `Escape` wakati wa uchaguzi wa eneo kufuta na kurejesha eneo la awali.

Kanvasi ya hakiki inabadilisha ukubwa wake kwa nguvu kulingana na **uwiano sahihi wa upande** wa eneo lililochaguliwa, hivyo hakiki ni sahihi kwa pikseli.

## Muundo wa kusafirisha

| Muundo | Bora kwa | Maelezo |
|--------|---------|---------|
| **PNG** | Bila kupoteza, mistari mikali | Mandharinyuma nyeupe, bila uwazi |
| **JPEG** | Faili ndogo kwa kushiriki | Ubora 95%, ubanishaji mdogo |
| **WebP** | Faili ndogo zaidi kwa wavuti | Ubora 95% uleule, ubanishaji bora kuliko JPEG |
| **PDF** | Nyaraka tayari kuchapishwa | Picha imewekwa ndani kwa 150 DPI ndani ya chombo cha PDF |

Faili iliyosafirishwa inaitwa `kulman-<timestamp>.<ext>` na hupakuliwa kiotomatiki.

## Azimio la kusafirisha na mandharinyuma

- Azimio la juu zaidi: **pikseli 2000 × 2000**, iliyopimwa kwa uwiano kwa eneo lililochaguliwa.
- Mandharinyuma daima ni **nyeupe**.
- Safu zilizowekwa alama ya **kutochapisha** hazijumuishwi katika usafirishaji.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `Escape` (wakati wa uchaguzi wa eneo) | Futa uchaguzi wa eneo, rejesha eneo la awali |
| `Escape` (katika Print Manager) | Funga Print Manager |
