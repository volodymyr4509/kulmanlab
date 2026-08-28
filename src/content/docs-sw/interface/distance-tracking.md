---
title: Ufuatiliaji wa umbali — Kuandika urefu kamili kutoka kwenye kitone kilichobandikwa
description: Kitufe cha Dist huruhusu kitone cha vekta cha karibuni zaidi kuwa nanga ambayo ufuatiliaji wa pembe hupimia, ili uandike urefu kamili na kuweka kitone kwa umbali na pembe kamili kutoka kwenye kitone kilichopo — ikijumuisha kitone cha kwanza cha umbo.
keywords: [uwekaji umbali CAD, kuandika umbali kamili CAD, kitufe cha Dist, ufuatiliaji wa umbali kutoka vitone, ufuatiliaji wa polar CAD, uwekaji umbali wa moja kwa moja, kulmanlab]
group: interface
order: 3
---

# Ufuatiliaji wa umbali

**Ufuatiliaji wa umbali** hukuruhusu kuweka kitone kwa kuandika urefu kamili badala ya kubofya. Unadhibitiwa na kitufe cha **Dist** kwenye upau wa udhibiti, kando ya [Pins](../vector-pins/) na ANGL, na **umewashwa kwa chaguo-msingi**, mpangilio ukibaki kati ya vipindi.

Kinachoongeza ni kidogo lakini cha manufaa: huruhusu **kitone cha vekta cha karibuni zaidi** kuwa nanga ambayo ufuatiliaji wa pembe hupimia. Bila hicho, amri inaweza kupima tu kutoka kitone ambacho yenyewe tayari imekusanya — maana yake kitone cha *kwanza* cha umbo hakina chochote cha kupimia.

## Vitufe vitatu hufanya kazi pamoja

Ufuatiliaji wa umbali hausimami peke yake. Vitufe vingine viwili lazima viwe katika hali sahihi kabla hujaandika urefu:

| Kitufe | Jukumu |
|--------|--------|
| **Pins** | Hutoa kitone cha marejeo. Weka kishale juu ya kitone cha kunasa kwa milisekunde 500 ili kukibandika — angalia [Vector Pins](../vector-pins/). |
| **ANGL** | Hutoa pembe. Ufuatiliaji wa umbali hupatikana tu pale kishale kinapofungwa kwenye pembe, hivyo ANGL lazima iwe kwenye hatua (10°, 20°, 30°, 45°, 90°) na si Off. |
| **Dist** | Huruhusu kitone kutumika kama nanga badala ya kitone cha amri yenyewe pekee. |

Ukiwa na Pins na Dist vimewashwa lakini ANGL iko **Off**, hakuna kitakachotokea: hakuna mwelekeo uliofungwa wa kupimia urefu.

## Jinsi Pins na Dist vinavyofungamana

Ufuatiliaji wa umbali hauna maana vitone vikiwa vimezimwa, hivyo vitufe hivyo viwili hubaki sambamba:

- **Kuwasha Pins** huwasha pia **Dist**.
- **Kuzima Pins** huzima pia **Dist**.
- **Kuwasha Dist** huwasha **Pins** ikiwa hakikuwa kimewashwa.
- **Kuzima Dist** huacha **Pins kimewashwa**.

Hivyo Dist hakiwezi kamwe kuwa hai wakati Pins kimezimwa, lakini unaweza kubaki na ufuatiliaji wa vitone kwa ajili ya kupanga na kuzima ufuatiliaji wa umbali — jambo la manufaa unapotaka mistari ya marejeo bila kishale kufungwa kwenye kitone wakati ulilenga kufungwa kwenye kitone chako cha mwisho.

## Kuweka kitone kwa umbali kamili

1. Washa **Pins** na **Dist**, na weka **ANGL** kwenye hatua ya pembe.
2. Anzisha amri inayoomba kitone — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/) na kadhalika.
3. **Bandika kitone cha marejeo**: weka kishale juu ya kitone cha kunasa kilichopo mpaka alama ibadilike kuwa mraba uliojaa.
4. Sogeza kishale mbali na kitone, takribani kwenye pembe unayotaka. Kinapokaribia mojawapo ya hatua za ANGL, mwelekeo **hufungwa** — kiashiria cha ufuatiliaji huonekana kutoka kwenye kitone.
5. **Andika urefu** kisha bonyeza **Enter** au **Space**. Kitone huwekwa umbali huo hasa kutoka kwenye kitone kilichobandikwa, kwenye pembe iliyofungwa.

Kidokezo kwenye terminali hukuambia lini unaweza kuandika. Ikiwa imefungwa, husomeka:

```
pick start point or enter length: [ ]
```

na thamani unayoandika huonekana ndani ya mabano.

## Kwa nini kitone cha kwanza ni muhimu

Hii ndiyo hali ambayo vinginevyo isingewezekana. Tuseme mstari unatakiwa kuanza umbali wa vipimo 250 kulia mwa kona iliyopo:

1. Anzisha [Line](../../commands/line/).
2. Bandika kona hiyo iliyopo.
3. Sogea kulia mpaka mwelekeo ufungwe kwenye 0°.
4. Andika `250`, bonyeza **Enter**.

Sasa mstari unaanza kwenye kitone chenye umbali wa vipimo 250 kutoka kona hiyo — bila jiometri ya kusaidia na bila hesabu. Bila Dist, amri ya Line bado haijakusanya kitone chochote, hivyo hakuna cha *kupimia* urefu ulioandikwa — ungeweza tu kubofya kwa kukisia, au kuchora mstari wa kusaidia na kuufuta baadaye.

Kwa kitone cha **pili na kuendelea**, amri tayari ina nanga yake (kitone kilichotangulia), na hiyo ndiyo hutumika kwanza. Kitone kilichobandikwa hurejewa kama mbadala pale tu nanga yako mwenyewe haijafungwa, hivyo kubandika kitu hakunyang'anyi ufungaji ulionao tayari.

## Kuandika hugandisha ufungaji

Mara tu unapoanza kuandika tarakimu, nanga huacha kubadilika. Kitone chochote kilichokuwa kimefungwa wakati tarakimu ya kwanza iliingia hubaki kuwa nanga mpaka uthibitishe au ufute kilichomo — kusogeza kipanya katikati ya kuandika hakutahamisha kimya kimya kipimo kwenda kitone kingine au kitone cha amri yenyewe.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.` | Huongeza kwenye urefu |
| `-` | Urefu hasi — hugeuza mwelekeo kwenye pembe iliyofungwa (kama herufi ya kwanza pekee) |
| `Backspace` | Hufuta herufi ya mwisho |
| `Enter` / `Space` | Huweka kitone kwenye urefu ulioandikwa |
| `Escape` | Hughairi amri; ufungaji na thamani iliyoandikwa hufutwa |

Kuandika urefu ni hiari. Mwelekeo ukiwa umefungwa bado unaweza kubofya, na kitone hukadiriwa kwenye pembe iliyofungwa.

## Inapofanya kazi

Ufuatiliaji wa umbali unapatikana katika kila amri inayokuomba kuchagua vitone:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) na [ViewportCopy](../../commands/viewport-copy/).

## Angalia pia

- [Vector Pins](../vector-pins/) — kubandika vitone na kufuatilia kwenye mistari yao ya marejeo
- [Grid & Snap](../grid-snap/) — visaidizi vingine vya usahihi kwenye upau wa udhibiti
- [Distance](../../commands/distance/) — kupima umbali uliopo badala ya kuandika mpya
