---
title: "Kwa Nini DXF Yako Ilifunguka kwa Ukubwa Usio Sahihi (na Jinsi ya Kurekebisha)"
description: "DXF inayofunguka ikiwa ndogo mara 25.4 au kubwa mara 1000 ni kutolingana kwa vipimo, si faili iliyoharibika. Jinsi ya kubaini uwiano, kubadili ukubwa na kuhakiki."
keywords: [DXF kipimo kibaya, DXF ukubwa mbaya, vipimo vya DXF, DXF milimita au inchi, DXF imeingizwa ndogo mno, kizidishi cha kipimo DXF, DXF 25.4, kurekebisha kipimo cha DXF, vipimo vya DXF havilingani, kubadili ukubwa wa DXF]
date: 2026-09-04
author: KulmanLab
tag: Mwongozo
---

DXF inafunguka, na kipande kinachopaswa kuwa na upana wa milimita 40 kinapima 1.575. Au mchoro wa ghorofa unafika ukiwa mkubwa kama kitalu kizima cha mji. Faili haijaharibika na hakuna aliyekosea — mchoro ni sahihi, kilichopotea njiani ni ile namba iliyokuwa ikiandamana nao.

Hili linafaa kueleweka kabla hujabadili ukubwa wa chochote, kwa sababu marekebisho huchukua sekunde kumi mara tu unapojua unashughulika na uwiano upi, na kubahatisha ndiyo njia ya kukata kipimo kibaya mara mbili.

## DXF karibu haibebi vipimo

DXF huhifadhi kuratibu kama namba tupu. Mstari kutoka `0,0` hadi `40,0` una urefu wa arobaini *kitu fulani*. Muundo huu hauambatanishi kipimo na kuratibu, wala hakuna pa kufanya hivyo — namba yenyewe ndiyo jiometri.

Kilicho karibu zaidi ni kigezo cha kichwa kiitwacho `$INSUNITS`, msimbo mmoja kwa faili nzima: `1` kwa inchi, `4` kwa milimita, `6` kwa mita, na kadhalika. Mambo mawili yanakifanya dhaifu kuliko kinavyosikika. Ni thamani moja kwa mchoro mzima, hivyo hakiwezi kuelezea faili iliyounganishwa kutoka vyanzo mchanganyiko. Na ni ushauri, si ahadi: programu nyingi huisoma tu wakati wa *kuingiza* mchoro mmoja ndani ya mwingine, na kuipuuza kabisa unapofungua faili tu — kwa hoja yenye mantiki kwamba anayefungua mchoro kwa kawaida anajua alichochora.

Hivyo "40" hufika salama na "milimita" haifiki. Kila DXF ya ukubwa usio sahihi utakayowahi kupokea ni sentensi hiyo.

## Baini uwiano kwanza

Pima kitu kimoja unachojua ukubwa wake halisi kwa hakika — kipenyo cha tundu, ukingo wa bamba, umbali wa kawaida wa kufunga. Gawanya ukubwa unaopaswa kuwapo kwa ukubwa uliopimwa. Jibu karibu daima ni mojawapo ya haya:

| Uwiano | Kilichotokea |
|---|---|
| **25.4** | Ilichorwa kwa inchi, inasomwa kama milimita |
| **0.03937** | Ilichorwa kwa milimita, inasomwa kama inchi |
| **1000** | Ilichorwa kwa mita, inasomwa kama milimita |
| **0.001** | Ilichorwa kwa milimita, inasomwa kama mita |
| **12** | Futi zinasomwa kama inchi |
| **304.8** | Futi zinasomwa kama milimita |

Kama namba yako ipo hapo, una kutolingana kwa vipimo tu na si kingine, na kilichobaki huchukua dakika moja.

Kama haipo — tuseme 1.37, au 3.2 — simama. Hiyo si tatizo la vipimo, na kubadili ukubwa kutazalisha mchoro usio sahihi kwa namna ngumu zaidi kuiona. Rukia sehemu ya mwisho.

## Marekebisho

Unahitaji kitu cha kupima na kitu cha kubadili ukubwa. Kila zana ya CAD hufanya hivyo; hivi ndivyo ilivyo katika [KulmanLab](https://kulmanlab.com/sw/), inayofungua DXF katika kichupo cha kivinjari bila kusakinisha chochote:

1. Fungua faili — iburute hadi kwenye ukurasa, au tumia [Import](/sw/docs/commands/import/).
2. Endesha [Distance](/sw/docs/commands/distance/) kisha chagua ncha mbili za kile unachokijua. Unatiaji hapa ni muhimu: shika ncha halisi, si mahali karibu nazo, la sivyo utaoka kosa lako mwenyewe ndani ya kizidishi.
3. Gawanya. Ukubwa unaojulikana ÷ ukubwa uliopimwa. Tundu la milimita 40 linaloonyesha 1.575 hutoa 40 ÷ 1.575 ≈ **25.4**.
4. Chagua vyote, endesha [Scale](/sw/docs/commands/scale/), chagua kitone cha msingi, kisha andika kizidishi.

Kitone cha msingi hubaki mahali pake wakati vingine vyote vinasogea, hivyo kiweke mahali unapoweza kukieleza — pembe ya kipande, au asili. Kwa mchoro unaokwenda kukatwa hivi karibuni, asili mara nyingi ndiyo chaguo la busara.

Inasaidia pia kwamba KulmanLab haina mpangilio wake wa vipimo. Kuratibu ni namba tu, na hiyo ndiyo hali hasa unayotaka mchoro uwe nayo unapotafuta maana ya namba zake. Hakuna ubadilishaji unaoendelea nyuma yako wala kitu cha kupambana nacho.

## Hakiki marekebisho kabla ya kuyaamini

Pima kitu cha *pili*, mahali pengine kwenye mchoro, ambacho pia unajua ukubwa wake halisi. Kisha hakiki.

Hii ndiyo hatua watu wanayoruka, na ndiyo pekee inayonasa hali mbaya. Kama kipimo cha pili sasa kinatoka sawa, mchoro ulikuwa kwa vipimo visivyo sahihi kwa usawa na sasa uko kwa sahihi kwa usawa. Imeisha.

Kama kipimo cha pili *bado* si sahihi, na si sahihi kwa kiasi tofauti, hii haikuwahi kuwa kutolingana rahisi kwa vipimo. Umebadili tu ukubwa wa mchoro usio na mfuatano, na hilo ni baya kuliko ulipoanzia, kwa sababu kosa halijawa tena uwiano safi ambao mtu angeweza kuuona.

[Area](/sw/docs/commands/area/) ni maoni ya pili yenye manufaa hapa, hasa kwenye bidhaa za mabamba. Eneo hubadilika kwa *mraba* wa kizidishi, hivyo kosa la urefu la 25.4 hujitokeza kama kosa la eneo la 645 — tofauti ngumu kujidanganya kuihusu.

## Kuzuia lisitokee tena

Vipimo hupotea kati ya watu, hivyo suluhisho pia linaishi hapo.

**Sema kipimo unapotuma faili.** Mstari mmoja kwenye ujumbe. "Vipimo vyote ni milimita." Hakigharimu chochote na huondoa tatizo lote.

**Tuma pamoja nayo kipimo cha rejea.** Sema kipimo kimoja halisi — "bamba la nje lina upana wa milimita 300". Sasa mpokeaji anaweza kuhakiki faili badala ya kubahatisha, na kama kuna kilichokwenda kombo atakirekebisha kwa dakika moja bila kurudi kwako.

**Uliza, wakati wewe ndiye mpokeaji.** Kama faili inafika bila vipimo kutajwa na unakaribia kukata malighafi, ujumbe mmoja ni rahisi kuliko bamba moja lililoharibika.

**Chora kwa vipimo ambavyo matokeo yako yanatarajia.** Ukataji wa leza, CNC na mitiririko mingi ya utengenezaji hutarajia milimita. Kama faili inakwenda huko, ichore kwa milimita na hakuna ubadilishaji uliobaki wa kukosea. Ona [kuandaa DXF kwa ukataji wa leza](/sw/blog/prepare-dxf-for-laser-cutting/).

## Wakati si tatizo la vipimo

Kama uwiano wako haukuwa ubadilishaji safi wa vipimo, sababu zinazowezekana ni za aina tofauti:

- **Mchoro unachanganya vipimo vya ukubwa.** Mtu alichora sehemu kwa 1:1 kisha akabandika kielelezo kwa 1:5, au kizuizi kiliingizwa na kizidishi cha ukubwa na hakikurekebishwa kamwe. Rekebisha jiometri yenye kosa, si faili nzima.
- **Ulipima jiometri ya nafasi ya karatasi.** Kichwa cha mchoro au fremu ya maelezo huchorwa kwa ukubwa wa karatasi, si wa modeli. Pima kitu ambacho ni sehemu ya kitu halisi.
- **Ulipima kitu kisicho sahihi.** Tundu la kawaida la milimita 40 laweza kuwa limechorwa 39.8 kwa ajili ya kufaa, na bamba la "milimita 300" laweza kuwa 300 hadi nje ya mkato usiouona. Chagua kitu chenye ukingo usio na utata.

Katika kila hali hizo jibu ni kubaini mchoro huo hasa ni nini, si kuubadilisha ukubwa. Mchoro ambao sehemu zake zinapingana zenyewe utaendelea kukugharimu malighafi hadi mtu aufungue na atazame.

---

*Yanayohusiana: [Distance](/sw/docs/commands/distance/) kwa kupima, [Scale](/sw/docs/commands/scale/) kwa marekebisho, [Area](/sw/docs/commands/area/) kwa maoni ya pili, na [Export Manager](/sw/docs/commands/export-manager/) kwa kile kila muundo hubeba unapoirudisha.*
