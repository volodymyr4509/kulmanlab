---
sidebar_position: 9
title: Dimension Angular — Pima Pembe Kati ya Mistari, Miviringo na Duara katika KulmanLab CAD
description: "Amri ya DimensionAngular huweka maelezo ya kipimo cha pembe kwenye mistari, miviringo, au duara. Inasaidia hali za pembe ya mistari miwili, upana wa mviringo, na sekta ya duara."
keywords: [angular dimension CAD, angle dimension, measure angle between lines, DimensionAngular, arc dimension, angle annotation, CAD angle markup, kulmanlab angular dimension]
---

# Dimension Angular

Amri ya `DimensionAngular` huweka maelezo ya **kipimo cha pembe** cha mviringo kwenye mchoro. Inapima na kuandika pembe kati ya mistari miwili, upana wa mviringo, au sekta ya duara.

## Jinsi ya kuamsha

Bonyeza kitufe cha **Dimension Angular** kwenye upau wa zana wa Markup, au andika `DimensionAngular` kwenye terminal.

## Hali tatu za uingizaji

Bonyezo la kwanza linaathiri hali inayotumiwa:

### Mistari miwili

1. **Bonyeza mstari wa kwanza.** Nafasi ya mshale inaathiri upande gani wa mstari unatumiwa.
2. **Bonyeza mstari wa pili.** Mistari miwili lazima ikatane (makutano yanakokotolewa kiotomatiki; hayahitajiki kuonekana kwenye skrini).
3. **Bonyeza kuweka** mviringo wa kipimo. Sogeza mshale kuchagua radi na sekta ya pembe inayoandikwa — maelezo yanafuata mshale kwa upande wowote wa kilele uliopo.

Mistari inayofanana haiwezi kuunda kipimo cha pembe; amri inazaliwa bonyezo la pili ikiwa mistari haifuniki.

### Mviringo

1. **Bonyeza mviringo.** Kipimo kinaundwa mara moja kutoka pembe ya kuanza ya mviringo hadi pembe yake ya mwisho, ukitumia katikati ya mviringo kama kilele.
2. **Bonyeza kuweka** mviringo wa kipimo kwa radi inayotakiwa.

### Duara

1. **Bonyeza duara.** Ncha ya kwanza ya pembe inashikamana na pointi iliyo karibu zaidi kwenye duara.
2. **Bonyeza pointi ya pili** kwenye duara ili kufafanua ncha ya pili ya pembe.
3. **Bonyeza kuweka** mviringo wa kipimo.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `Escape` | Ghairi na urudi kwenye uchaguzi wa kwanza |

## Maelezo ya mwenendo

- Mviringo wa kipimo daima huchorwa upande wa kilele ambapo unakuweka — sogeza mshale kwenye kilele ili kugeuza kwenda pembe inayosaidia.
- Pembe iliyopimwa inaonyeshwa kwa digrii na inasasishwa moja kwa moja unapasogeza mshale wakati wa uwekaji.
- Maelezo yanayotokana ni kipengele kamili cha `DimensionAngular` kilichohifadhiwa kwenye safu ya sasa. Sifa zake za mwonekano (ukubwa wa mshale, urefu wa maandishi, urefu wa mstari wa upanuzi) zinaweza kurekebishwa kwenye paneli ya Sifa.
- Vipimo vya pembe vimejumuishwa katika usafirishaji wa JSON lakini havisaidiwi na kisafirishaji cha DXF.

## Kuhariri lebo — hali rahisi

**Bonyeza mara mbili** kipimo cha pembe kilichowekwa kufungua kihariri cha maandishi katika hali **rahisi**. Kihariri kimejazwa awali na thamani inayoonyeshwa kwa sasa ili uweze kuweka mshale na kuihariri moja kwa moja.

| Kipengele | Tabia |
|----------|-------|
| Bold / Italic / Font / Height | Inatumika kwa **lebo nzima** mara moja |
| Uumbizaji kwa kila herufi | Haisaidiwi |
| `Enter` | Inathibitisha thamani na kufunga kihariri |
| Mistari mingi | Haisaidiwi |

Angalia [Text Editor — hali rahisi](../interface/text-editor#simple-mode) kwa marejeo kamili.

## Amri zinazohusiana

- [Dimension Linear](../dim-linear/) — kipimo cha usawa au wima
- [Dimension Aligned](../dim-aligned/) — kipimo kilichopangwa kwenye pointi mbili
- [Dimension Radius](../dim-radius/) — kipimo cha radi kwa miviringo na duara
- [Dimension Diameter](../dim-diameter/) — kipimo cha kipenyo kwa duara
