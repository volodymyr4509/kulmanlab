---
title: LayerManager — Dhibiti Safu Zote katika Jedwali Moja
description: Amri ya LayerManager hufungua jedwali la tabaka zote za mchoro, ikikuruhusu kuongeza tabaka, kufuta zisizotumika, na kuhariri papo hapo kugandisha, kufunga, kuchapa, rangi, unene wa mstari na aina ya mstari kwa kila moja.
keywords: [kidhibiti tabaka, jedwali la tabaka CAD, kusimamia tabaka CAD, kuongeza tabaka CAD, kufuta tabaka CAD, kuondoa tabaka lisilotumika, gandisha funga chapa tabaka, usimamizi wa tabaka kulmanlab]
group: layer
order: 1
---

# LayerManager

Amri ya `KidhibitiMatabaka` hufungua jedwali linaloorodhesha kila tabaka la mchoro, likiwa na mipangilio ya **Freeze**, **Lock**, **Plot**, **Rangi**, **Unene wa mstari** na **Aina ya mstari** inayoharirika moja kwa moja ndani ya safu. Ni mahali pakuu pa kuongeza tabaka, kufuta zisizotumika na kurekebisha tabia ya zilizopo — amri nyingine za tabaka ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) kila moja hufanya jambo moja mahususi bila kulifungua.

## Kufungua Layer Manager

- Andika `KidhibitiMatabaka` kwenye terminal, **au**
- Bofya kitufe cha **Layer Manager** kwenye paneli ya safu.

Kidirisha hufunguka kama paneli inayoelea; hakuna kinachohitaji kuchaguliwa kwanza.

## Jedwali la safu

| Safu wima | Inadhibiti nini |
|--------|-------------------|
| Name | Jina la safu, linaloonyeshwa kwa kusoma tu katika jedwali (huwekwa mara moja, wakati wa kuunda) |
| Freeze | Huficha vitu vya safu na kuviondoa kwenye uteuzi hadi vitakapofunguliwa |
| Lock | Huzuia vitu vilivyo kwenye safu kuhaririwa, bila kuvificha |
| Plot | Kama vitu vya safu vinajumuishwa wakati wa kuchapisha au kuhamisha kwenda PDF |
| Color | Rangi ya ACI ya safu — bofya kisanduku cha rangi kufungua kiteua rangi |
| Lineweight | Unene wa mstari wa safu — bofya chipu kufungua kiteua uzito wa mstari |
| Linetype | Mchoro wa vistari wa safu — bofya chipu kufungua kiteua aina ya mstari |
| ✕ | Hufuta tabaka pale hakuna kinacholitumia — angalia [Kufuta tabaka](#kufuta-tabaka) |

Kubadilisha Freeze, Lock au Plot kunaanza kutumika mara moja — hakuna hatua tofauti ya kuhifadhi. Vitu vilivyowekwa **ByLayer** kwa rangi, uzito wa mstari au aina ya mstari (chaguo-msingi) huchukua kile unachoweka hapa; vitu vyenye thamani yao wenyewe haviathiriwi.

## Kuongeza safu

1. Bofya **+ Add Layer** chini ya jedwali.
2. Andika jina kisha bonyeza **Enter** kuthibitisha, au **Escape** kughairi.

Majina ya safu yanaweza kuwa na herufi, tarakimu, nafasi na `_`, `-`, `$`. Jina ambalo ni tupu, tayari linatumika, au lina herufi nyingine yoyote linakataliwa kwa hitilafu ya papo hapo, na safu mlalo inabaki wazi kwa jaribio lingine.

Safu mpya huanza zikiwa **hazijagandishwa, hazijafungwa, zinaweza kuchapishwa**, zikiwa na rangi 7 (nyeupe/nyeusi), Lineweight ya Default na Linetype ya Continuous — chaguo-msingi zile zile ambazo [Import](../import/) huweka kwa safu `0` katika mchoro tupu.

## Kufuta tabaka

Kila safu huishia na kitufe cha **✕** kinachoondoa tabaka kwenye mchoro. Kufuta hutokea papo hapo — hakuna hatua ya kuthibitisha — lakini hutolewa tu kwa tabaka ambazo hakuna kinachozitegemea:

| Hali | Hali ya kitufe |
|------|----------------|
| Tabaka ni tupu | Hai — *Delete layer* |
| Tabaka limepewa angalau kitu kimoja | Limezimwa — *Cannot delete: assigned to at least one entity* |
| Tabaka `0` | Hakuna kitufe kabisa |

**"Linatumika" hugusa mchoro mzima**, si tu kile unachokiona. Kitu kilichoko kwenye mpangilio (nafasi ya karatasi) huhesabiwa sawasawa na kile cha nafasi ya modeli, hivyo tabaka linaweza kuonekana tupu kwenye skrini na bado likakataa kufutwa. Tabaka zilizogandishwa si tofauti: kugandisha huficha vitu lakini haliondoi upangaji wao, hivyo tabaka lililogandishwa lenye vitu hubaki lisiloweza kufutwa.

Tabaka `0` haliwezi kufutwa kamwe. Ndilo tabaka la akiba ambalo kila mchoro huhakikishiwa kuwa nalo, hivyo kitufe hakichorwi kabisa kwa ajili yake badala ya kuonyeshwa kimezimwa.

### "…is now in use and can't be deleted"

Mara kwa mara ✕ huonekana kinapatikana lakini kubofya hukataliwa kwa ujumbe juu ya paneli:

```
"WALLS" is now in use and can't be deleted
```

Hii si mgongano. Kubaini ni tabaka zipi zinatumika kunahitaji kupitia kila kitu kwenye mchoro, hivyo matokeo huhifadhiwa katika akiba na hujengwa upya tu pale idadi ya vitu inapobadilika — nafuu kwa mamia ya vitu, si kwa mamia elfu. Kuhamisha kitu kilichopo kwenda tabaka fulani hakubadilishi idadi hiyo, hivyo hali ya kuzimwa ya safu inaweza kupitwa na wakati kwa muda mfupi. Kubofya hukagua upya kutoka mwanzo kabla ya kufuta chochote — ndiyo maana kukataa hutokea wakati wa kubofya badala ya tabaka kutoweka wakati bado kuna kinachoirejelea.

Funga ujumbe kwa **✕** yake mwenyewe. Tabaka halijaguswa.

## Usichoweza kufanya hapa

Jedwali halionyeshi ni tabaka lipi lililo *la sasa*; hilo hupangwa kutoka orodha kunjuzi ya paneli ya tabaka au kwa [LayerMakeCurrent](../layer-make-current/), si kutoka kidirisha hiki. Majina ya tabaka pia hukaa kama yalivyo tangu kuundwa — tabaka linaweza kufutwa na kuundwa upya, lakini haliwezi kubadilishwa jina.

## Marejeleo ya kibodi

| Kitufe | Kitendo |
|-----|--------|
| `Enter` | Thibitisha jina la safu mpya (wakati wa kuongeza) |
| `Escape` | Ghairi kuongeza safu, au funga kidirisha |

## Amri zinazohusiana

| Amri | Hufanya nini |
|---------|-------------|
| [LayerMakeCurrent](../layer-make-current/) | Weka safu ya sasa ilingane na safu ya kitu kilichobofywa |
| [LayerMatch](../layer-match/) | Hamisha vitu vilivyochaguliwa vilingane na safu ya kitu chanzo |
| [LayerIsolate](../layer-isolate/) | Ganda safu zote isipokuwa zile za vitu vilivyochaguliwa |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Fungua safu zote zilizogandishwa kwa hatua moja |
