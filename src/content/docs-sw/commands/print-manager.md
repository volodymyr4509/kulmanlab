---
title: "Print Manager — Safirisha Mchoro kama PNG, JPEG, WebP, au PDF"
description: "Amri ya PrintManager inafungua Print Manager — dirisha la maalum la kusafirisha na hakiki ya moja kwa moja inayolingana kabisa na faili itakayosafirishwa, mpangilio wa Quality/DPI, kichaguo cha muundo, mtindo wa kuchapisha wa Default/Monochrome/Blueprint, na uchaguzi wa eneo maalum. Inasaidia PNG, JPEG, WebP, na PDF."
keywords: [CAD export PNG, CAD export PDF, print CAD drawing, print manager, ubora wa kuchapisha DPI, monochrome export, mtindo wa kuchapisha blueprint, kulmanlab export]
group: file
order: 4
---

# Print Manager

Amri ya `PrintManager` inafungua **Print Manager** — dirisha la maalum la kusafirisha lenye kanvasi ya hakiki ya moja kwa moja, kichaguo cha muundo (PNG / JPEG / WebP / PDF), kichaguo cha Style (Default / Monochrome / Blueprint), na upunguzaji wa eneo la hiari. Hakuna kinachopelekwa kwa printa halisi; matokeo hupakuliwa kama faili.

## Kufungua Print Manager

Bonyeza kitufe cha **Print** kwenye upau wa zana au andika `PrintManager` kwenye terminal. Print Manager hufunguka mara moja ukionyesha hakiki ya muonekano wa sasa.

Hakiki hutolewa kupitia njia ile ile ya code, kwa azimio lile lile la pikseli, kama faili utakayosafirisha mwishoni — kubadilisha Quality, Style, au eneo la kusafirisha hurenderi upya hakiki papo hapo, hivyo unachokiona ndicho kinachopakuliwa, si makadirio yake.

## Muundo wa Print Manager

Dirisha lina paneli mbili:
- **Upande wa kushoto** — udhibiti wote wa kusafirisha.
- **Paneli ya kulia** — kanvasi ya hakiki ya moja kwa moja inayosasishwa unavyobadilisha mipangilio.

### Udhibiti wa upande

| Udhibiti | Maelezo |
|----------|---------|
| **Change Area** | Punguza kwa mstatili maalum kwenye kanvasi (angalia hapa chini) — hupunguza kwa hakika picha itakayosafirishwa, hata kwenye muundo wenye nafasi ya karatasi, si hakiki ya skrini pekee |
| Kishuka cha **Quality** | Huweka azimio la kusafirisha (angalia hapa chini) |
| Kishuka cha **Style** | Default, Monochrome, au Blueprint — angalia *Mitindo ya kuchapisha* hapa chini. Monochrome kwa chaguo-msingi kwa matokeo safi ya kuchapisha |
| Menyu ya **Format** | PNG, JPEG, WebP, au PDF |
| Kitufe cha **Export** | Tengeneza na upakue faili |

## Mitindo ya kuchapisha

Kishuka cha **Style** hudhibiti rangi ya wino ambayo entities huchorwa nayo na mandharinyuma ya ukurasa vyote viwili:

| Style | Wino | Mandharinyuma ya ukurasa |
|-------|------|----------------------------|
| **Default** | Rangi yake ya entity kila moja | Nyeupe |
| **Monochrome** *(chaguo-msingi)* | Nyeusi thabiti, bila kujali rangi ya entity/layer | Nyeupe |
| **Blueprint** | Nyeupe thabiti, bila kujali rangi ya entity/layer | Bluu ya Prussia ya kina, yenye gridi ya rejea hafifu |

Blueprint hurudisha mwonekano wa uchapishaji wa jadi wa usanifu wa cyanotype — michoro nyeupe kwenye karatasi ya bluu iliyokoza. Gridi yake ya rejea hupimwa kulingana na ukubwa wa ukurasa badala ya DPI, hivyo huonekana kwa msongamano uleule katika mpangilio wowote wa Quality badala ya kuwa mnene zaidi azimio linapoongezeka.

## Ubora na azimio

Kishuka cha **Quality** huweka DPI ambayo usafirishaji hurenderiwa:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(chaguo-msingi)* | 150 |
| Presentation | 300 |
| Max | 600 |

Ubora wa juu zaidi hutoa picha kubwa na kali zaidi kwa saizi ile ile halisi — unene wa mistari hupima pamoja na azimio, hivyo mstari hudumisha unene ule ule *halisi* kwenye karatasi katika mpangilio wowote wa Quality, badala ya kuonekana mwembamba zaidi DPI inapoongezeka. Isipokuwa pekee ni mstari mwembamba (unene wa mstari `0`), ambao kwa kawaida hufafanuliwa kama "mstari mwembamba zaidi ambao kifaa cha matokeo kinaweza kuchora" — hubaki na upana thabiti wa pikseli 1 katika kiwango chochote cha Quality, sawasawa na jinsi unavyofanya kwenye kanvasi ya moja kwa moja.

Kubadilisha Quality hurenderi upya hakiki mara moja, hivyo unaona ukali halisi (na mzani wa saizi ya faili) kabla ya kusafirisha.

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
| **PNG** | Bila kupoteza, mistari mikali | Mandharinyuma ya ukurasa ya Style imejumuishwa, bila uwazi |
| **JPEG** | Faili ndogo kwa kushiriki | Ubora 95%, ubanishaji mdogo |
| **WebP** | Faili ndogo zaidi kwa wavuti | Ubora 95% uleule, ubanishaji bora kuliko JPEG |
| **PDF** | Nyaraka tayari kuchapishwa | Picha imewekwa ndani ya chombo cha PDF kwa DPI ya Quality iliyochaguliwa, kwa ukubwa unaofanya ukurasa kuchapishwa kwa kipimo halisi cha kimwili |

Faili iliyosafirishwa inaitwa `kulman-<timestamp>.<ext>` na hupakuliwa kiotomatiki.

## Azimio la kusafirisha na mandharinyuma

- **Kusafirisha model space / viewport**: kikomo cha pikseli 2000 × 2000 kwenye Quality chaguo-msingi ya Normal (150 DPI), iliyopimwa kwa uwiano kwa eneo lililochaguliwa; kikomo pia hupima kulingana na Quality — Draft ina kikomo cha chini, Presentation na Max vina kikomo cha juu (hadi pikseli 8000 × 8000 kwenye Max/600 DPI).
- **Kusafirisha muundo (nafasi ya karatasi)**: hupimwa moja kwa moja kutoka vipimo vya karatasi ya muundo kwa DPI iliyochaguliwa — mfano karatasi ya A4 (mm 210 × 297) kwenye Quality ya Normal husafirishwa kwa takriban pikseli 1240 × 1754 — hivyo haiko chini ya kikomo cha pikseli 2000 cha viewport.
- Mandharinyuma hufuata **Style** ya kuchapisha iliyochaguliwa — nyeupe kwa Default na Monochrome, bluu ya Prussia ya kina kwa Blueprint (angalia *Mitindo ya kuchapisha* hapo juu).
- Safu zilizowekwa alama ya **kutochapisha** hazijumuishwi katika usafirishaji.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `Escape` (wakati wa uchaguzi wa eneo) | Futa uchaguzi wa eneo, rejesha eneo la awali |
| `Escape` (katika Print Manager) | Funga Print Manager |
