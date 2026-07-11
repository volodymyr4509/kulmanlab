---
title: "Vector Pins — Lekeza kwenye Mistari ya Marejeleo Kupitia Pointi Zilizobandikwa katika KulmanLab CAD"
description: "Vector Pins hukuruhusu kubandika pointi ya ulekezaji kwa kuelea juu yake nusu sekunde, kisha kufuatilia kishale kando ya mistari ya marejeleo ya mlalo na wima yenye vistari inayopita kwenye pointi iliyobandikwa — panga jiometri mpya na pointi zilizopo bila mistari ya ujenzi."
keywords: [vector pins, ufuatiliaji wa ulekezaji wa vitu, mistari ya marejeleo, ufuatiliaji wa upangaji, ufuatiliaji wa ulekezaji CAD, mistari ya ujenzi, kulmanlab]
group: interface
order: 2
---

# Vector Pins

**Vector Pins** ni msaada wa kuchora unaokuruhusu kupanga jiometri mpya na pointi zilizopo bila kuchora mistari ya ujenzi. Elea juu ya pointi ya ulekezaji kwa nusu sekunde ili *kuibandika* — pini kisha huonyesha mistari ya marejeleo ya mlalo na wima isiyoonekana, na kishale hulekezwa kwenye mistari hiyo kila kinapoikaribia. Ni sawa na ufuatiliaji wa ulekezaji wa vitu (object snap tracking) wa programu za CAD za kompyuta katika KulmanLab CAD.

Kipengele hiki kinadhibitiwa na kitufe cha **Pins** kwenye upau wa udhibiti (kando ya Grid, Snap na ANGL). Kiko **hai kwa chaguo-msingi**, na mpangilio hudumu kati ya vipindi.

## Kubandika pointi

1. Anzisha amri inayohitaji pointi — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/) na kadhalika.
2. Sogeza kishale juu ya pointi ya ulekezaji ya jiometri iliyopo — alama ya nukta ya mwisho, nukta ya kati au kitovu.
3. **Shikilia kishale bila kusogea kwa 500 ms.** Alama hubadilika kuwa **mraba** uliojazwa wa rangi ya msisitizo — pointi sasa imebandikwa.
4. Rudia kubandika pointi nyingi kadri unavyohitaji. Kila pini huendelea kuonyesha mistari yake ya marejeleo.

Kubandika pia hufanya kazi nje ya amri: kuelea juu ya **kishikizo** cha kipengele kilichochaguliwa hukibandika kwa njia ile ile.

## Ufuatiliaji kando ya mistari ya marejeleo

Kila pointi iliyobandikwa huonyesha mistari miwili ya marejeleo isiyoonekana — mmoja wa **mlalo** na mmoja wa **wima** — kupitia kuratibu zake kamili. Unaposogeza kishale:

- Ndani ya **px 12** ya mstari wa wima wa pini, kishale hulekezwa juu yake: mstari wenye vistari wa rangi ya msisitizo huchorwa kupitia pini kwenye mwonekano mzima, na **alama ya X** huonyesha nafasi iliyolekezwa. Kuratibu yako ya X sasa ni *sawasawa* na X ya pini.
- Vivyo hivyo kwa mstari wa mlalo kuhusu kuratibu ya Y ya pini.
- Karibu na mstari mmoja wa kila mwelekeo — hata kutoka kwa **pini mbili tofauti** — kishale hulekezwa kwenye **makutano** yao, na mistari yote miwili yenye vistari huonyeshwa. Hii huweka pointi sawasawa kwenye (X ya pini A, Y ya pini B).

```
                    ┆ (vistari, mstari wa wima wa pini ■)
                    ┆
   ■ pini A ┄┄┄┄┄┄┄ ✕ ← kishale kimelekezwa kwenye makutano:
                    ┆    X kutoka pini B, Y kutoka pini A
                    ┆
                    ■ pini B
```

Kuratibu zilizolekezwa huchukuliwa moja kwa moja kutoka kwa pini, hivyo upangaji ni kamili — bila kuviringa wala mkengeuko wa nukta elea.

## Kipaumbele cha ulekezaji

Ulekezaji wa kawaida wa jiometri — nukta ya mwisho, nukta ya kati, kitovu na makutano — **una kipaumbele** juu ya mistari ya marejeleo ya pini. Ikiwa kishale kiko karibu zaidi na ulekezaji wa pointi kuliko mstari wa marejeleo, ulekezaji wa pointi hushinda. Ufuatiliaji wa pini hujaza mapengo kati ya jiometri; kamwe hauzuii kulekezwa kwenye jiometri yenyewe.

## Kuchanganya na kufunga pembe

Vector pins hufanya kazi pamoja na ufuatiliaji wa pembe (kitufe cha **ANGL** kwenye upau wa udhibiti). Wakati amri imefunga kishale kwenye mnururisho wa ufuatiliaji wa pembe:

- Kishale hubaki kikiwa kimefungwa kwenye mwelekeo uliofungwa.
- Ulekezaji wa pini hubadilika kulenga **makutano ya mnururisho uliofungwa na mistari ya marejeleo ya pini** (mbele ya asili ya mnururisho pekee).

Hii hujibu maswali kama *"mwelekeo wa 45° kutoka pointi yangu ya mwisho unakatiza wapi kimo cha kitovu cha duara lile?"* — funga pembe, na kishale kitajibana kwenye pointi ya makutano. Ulekezaji wa mnururisho hufanya kazi katika kila amri yenye kufunga pembe: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader na ViewportCopy.

## Mzunguko wa maisha wa pini

Pini zimekusudiwa kwa operesheni inayoendelea, si kama alama za kudumu. Pini zote hufutwa wakati:

| Tukio | Sababu |
|-------|--------|
| **Amri mpya** inapoanzishwa | Kila operesheni huanza na seti safi ya marejeleo |
| **Escape** inapobonyezwa | Tabia ya kawaida ya kughairi-yote |
| Kitufe cha **Pins** kinapozimwa | Kuzima kipengele huondoa hali yake |
| Kubadilisha kati ya **nafasi ya modeli na karatasi** | Kuratibu za pini ni mahususi kwa nafasi moja |

Ndani ya amri moja unaweza kubandika, kuchora, kubandika tena na kuendelea — pini hudumu kupitia kila kubonyeza kwa amri ya pointi nyingi kama Polyline.

## Mtiririko wa kazi wa kawaida

Kuchora mstari unaoanzia moja kwa moja chini ya kitovu cha duara:

1. Andika `line` (au bonyeza kitufe cha Line).
2. Elea juu ya **alama ya kitovu** ya duara kwa nusu sekunde — inakuwa mraba wa rangi ya msisitizo.
3. Sogeza kishale chini: karibu na mstari wa wima wa duara, kishale hujifunga kwenye mstari wa marejeleo wenye vistari.
4. Bonyeza — mstari huanza sawasawa kwenye kuratibu ya X ya duara.
5. Endelea na mstari kama kawaida; pini hubaki ikipatikana kwa pointi zinazofuata.

## Maelezo

- Kuelea kwa 500 ms hufanya kazi kwenye alama yoyote ya ulekezaji inayofikiwa na kishale — ikijumuisha pointi za ulekezaji zinazojitokeza katikati ya amri.
- Kuelea juu ya pointi iliyobandikwa tayari hakufanyi chochote; hakuna kuondoa ubandiko kwa kuelea. Futa pini kwa **Escape** au kwa kuzima **Pins**.
- Umbali wa ulekezaji wa mistari ya marejeleo ni pikseli 12 za skrini sawa na zinazotumika na ulekezaji wa kawaida wa pointi, hivyo hisia ni thabiti katika kiwango chochote cha kukuza.
- Pointi zilizobandikwa huchorwa kama miraba ya rangi ya msisitizo badala ya alama zao za kawaida za ulekezaji.
