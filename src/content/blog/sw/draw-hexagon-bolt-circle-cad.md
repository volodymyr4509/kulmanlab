---
title: "Jinsi ya Kuchora Hexagoni au Duara la Boliti katika CAD (Polygon na Polar Array)"
description: "Chora poligoni ya kawaida kutoka katikati na kipenyo-nusu au kutoka ukingo mmoja, kisha rudia mashimo kwenye duara la boliti kwa polar array — bure kwenye kivinjari chako, kwa thamani zilizoandikwa kwa usahihi."
keywords: [kuchora hexagoni katika CAD, poligoni ya kawaida CAD, polar array CAD, mchoro wa duara la boliti, mpangilio wa mashimo CAD, muundo wa mviringo CAD, mchoro wa nati ya hexagoni, kuchora oktagoni CAD, kipenyo cha duara la mashimo PCD, zana ya bure ya poligoni CAD]
date: 2026-10-11
author: KulmanLab
tag: Mwongozo
---

Ili kuchora poligoni ya kawaida katika CAD, toa idadi ya pande, chagua katikati, kisha kipenyo-nusu — au chagua ukingo mmoja na mengine yafuate. Ili kuchora duara la boliti, chora shimo moja na lirudie kuzunguka katikati kwa polar array. Mwongozo huu hufanya yote mawili, kwa namba sahihi, kwenye kivinjari katika [app.kulmanlab.com](https://app.kulmanlab.com) — bure, bila kusakinisha, na faili haliondoki kwenye kompyuta yako kamwe.

Sisi ndio tunaojenga [KulmanLab](https://kulmanlab.com), kwa hivyo hatua zilizo hapa chini zinatumia amri zake. Mawazo — upana kati ya nyuso dhidi ya kati ya pembe, kipenyo cha duara la mashimo, kama nakala zinageuka zinapozunguka — ni yale yale katika programu yoyote ya CAD.

## Kuchora poligoni ya kawaida

Poligoni ya kawaida ina pande na pembe zinazolingana: hexagoni kwa nati, oktagoni kwa alama ya barabarani, pentagoni kwa kipande cha mapambo. Katika KulmanLab ni amri ya **Polygon**.

1. Andika `Poligoni` kwenye terminal, au tumia kitufe cha Polygon kwenye paneli ya Shapes.
2. Weka **idadi ya pande** — nambari kamili yoyote kutoka 3 hadi 1024 — na ubonyeze **Enter**. Kiashiria hujazwa awali na idadi uliyotumia mara ya mwisho.
3. **Bofya katikati**, au andika `X,Y` kwa nukta sahihi.
4. **Bofya kipenyo-nusu**, au kiandike na ubonyeze **Enter**.

Matokeo ni polyline moja iliyofungwa, kwa hivyo kila unachoweza kufanya na polyline — kuhamisha, kuzungusha, offset, kupima upya — kinafanya kazi.

### Kati ya nyuso au kati ya pembe?

Hapa ndipo watu hukwama. "Kipenyo-nusu" kinaweza kumaanisha umbali mbili tofauti, na hexagoni hubainishwa kwa mmoja au mwingine kulingana na unachochora:

| | Hupimwa hadi | Matumizi ya kawaida |
|---|---|---|
| **Inside imewashwa** (chaguo-msingi) | Pembe | Umbo linalopaswa kutoshea ndani ya duara fulani |
| **Inside imezimwa** | Katikati ya kila ukingo | Umbo lenye upana fulani kati ya nyuso — nati, vichwa vya boliti, saizi za spana |

Bonyeza `I` kwenye kiashiria cha kipenyo-nusu ili kubadili. Nati ya hexagoni huuzwa kwa upana wake kati ya nyuso, kwa hivyo tumia **Inside imezimwa** na uandike *nusu* yake. Kwa nati ya M8 yenye 13 mm kati ya nyuso:

1. `Poligoni`, kisha `6` kwa pande, kisha bofya au andika katikati.
2. Bonyeza `I` kuzima Inside.
3. Andika `6.5` na ubonyeze **Enter**.

Nyuso ziko umbali kamili wa 13 mm; pembe zinafikia 7.51 mm kutoka katikati, takriban 15 mm kati ya pembe. Ukiandika kipenyo-nusu badala ya kubofya, poligoni hukaa na ukingo wake wa chini ukiwa mlalo, tambarare chini. Ukibofya, huchukua mwelekeo kutoka mahali ulipobofya.

### Kutoka ukingo mmoja

Wakati mwingine unajua urefu wa upande, si kipenyo-nusu — kwa mfano, meza ya oktagoni yenye pande za 20 mm. Bonyeza `E` kwenye kiashiria cha nukta ya kwanza kubadili hadi hali ya **Edge**, kisha chagua ncha mbili za ukingo mmoja. Pembe zilizobaki hujengwa kinyume cha saa, upande wa kushoto wa ukingo huo. Kuandika `0,0` kisha `20,0` huweka ukingo wa 20 mm kando ya mhimili X na poligoni juu yake.

## Kuchora duara la boliti

Duara la boliti — "PCD" kwenye michoro — ni pete ya mashimo yaliyopangwa kwa nafasi sawa kuzunguka katikati. Unachora shimo moja kisha unalirudia. Katika KulmanLab hiyo ni **ArrayPolar**.

Chukua mashimo sita ya 6.6 mm kwenye kipenyo cha duara la mashimo cha 50 mm, lenye katikati kwenye asili:

1. **Chora shimo la kwanza.** Endesha `Duara`, andika katikati kama `25` `,` `0` — nusu ya PCD kando ya mhimili X —, bonyeza **Enter**, kisha andika kipenyo-nusu `3.3` na ubonyeze **Enter**.
2. **Lichague** kwa kubofya duara.
3. **Endesha polar array.** Andika `MpangilioDuara`, au tumia kitufe cha ArrayPolar kwenye paneli ya Edit.
4. **Chagua katikati ya muundo** — andika `0,0`.
5. Terminal huonyesha array ilivyo — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — na nakala tano huonyeshwa moja kwa moja. Bonyeza **Enter** kukubali.

Hilo ndilo duara zima la boliti. Kwa idadi tofauti, bonyeza `I` kabla ya kuthibitisha na uandike idadi ya vipengee — asili huhesabiwa kama moja, na pembe kati yao hukokotolewa kwa ajili yako. Au bonyeza `A` na uandike nafasi kwa digrii badala yake; pembe ya kujaza hubainishwa upya ili ilingane.

Maelezo machache muhimu:

- **Fill** ni pembe kutoka kipengee cha kwanza hadi cha mwisho. Chaguo-msingi la 360° hutandaza vipengee kwenye duara zima; nambari ndogo hutandaza kwenye tao — safu ya mashimo kwenye robo ya mzunguko, kwa mfano. Pembe hasi hufuata mwelekeo wa saa.
- **Rotate** huamua kama kila nakala hugeuka inapozunguka. Kwa mashimo ya mviringo haina tofauti. Kwa nafasi ndefu, jino au kishikio inatofautiana: imewashwa — kila nakala huelekea katikati kama asili; imezimwa — kila nakala hudumisha mwelekeo wa asili na huhamishwa tu mahali pake. Bonyeza `R` kubadili kabla ya kuthibitisha.
- Array hutengeneza **nakala** — asili hubaki ilipo, na kila kipengee ni kiumbe cha kawaida unachoweza kuhariri baadaye.

## Vikusanye pamoja: flange

Chora hexagoni kwa muhtasari, duara katikati kwa tundu kuu, na duara la boliti kwa mashimo ya kufungia. Amri tatu, kila kipimo kimeandikwa kwa usahihi, na hakuna cha kupima kutoka skrini.

Kama kipande kinaenda kwa mashine ya kukata kwa leza, futa duara lolote la msaada ulilochora kutafuta duara la mashimo — lingekatwa kama kila kitu kingine — na ukague faili kwa mwongozo wetu wa [kuandaa DXF kwa ukataji wa leza](/sw/blog/prepare-dxf-for-laser-cutting/). Poligoni ni njia iliyofungwa kwa ujenzi wake, ambayo ndiyo sababu ya kawaida zaidi huduma za ukataji kukataa faili.

## Mambo ambayo haya hayafanyi

- **Poligoni za kawaida pekee.** Pande zote ni sawa. Muhtasari usio wa kawaida — umbo lenye pande kadhaa ndefu zaidi — ni [polyline](/sw/docs/commands/polyline/) unayochora nukta kwa nukta.
- **2D pekee.** Huchora muhtasari bapa. Haitakupa nati iliyoundwa kwa modeli wala boliti yenye nyuzi.
- **Vivinjari vya kompyuta pekee** — Chrome, Firefox, Safari na Edge. Hakuna toleo la simu.

---

*Yanayohusiana: [Polygon](/sw/docs/commands/polygon/) na [ArrayPolar](/sw/docs/commands/array-polar/) kwa chaguo na vitufe vyote, [Circle](/sw/docs/commands/circle/) kwa kuandika vipenyo-nusu sahihi, na [ArrayGrid](/sw/docs/commands/array-grid/) kwa kurudia vitu kwenye safu mlalo na wima badala ya kuzunguka katikati.*
