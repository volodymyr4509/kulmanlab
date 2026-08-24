---
title: LayerManager — Dhibiti Safu Zote katika Jedwali Moja
description: Amri ya LayerManager inafungua jedwali la kila safu katika mchoro, ikikuruhusu kuongeza safu na kuhariri hali ya kuganda, kufunga, kuchapisha, rangi, uzito wa mstari na aina ya mstari kwa kila moja papo hapo.
keywords: [kidhibiti cha safu, jedwali la safu CAD, kudhibiti safu CAD, kuongeza safu CAD, kuganda kufunga kuchapisha safu, udhibiti wa safu kulmanlab]
group: layer
order: 1
---

# LayerManager

Amri ya `LayerManager` inafungua jedwali linaloorodhesha kila safu katika mchoro, pamoja na mipangilio yake ya **Freeze**, **Lock**, **Plot**, **Color**, **Lineweight** na **Linetype** inayoweza kuhaririwa moja kwa moja katika safu mlalo. Ni mahali pakuu pa kuongeza safu mpya na kurekebisha tabia za zilizopo — amri nyingine za safu ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) kila moja hufanya jambo moja mahususi bila kulifungua.

## Kufungua Layer Manager

- Andika `LayerManager` kwenye terminal, **au**
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

Kubadilisha Freeze, Lock au Plot kunaanza kutumika mara moja — hakuna hatua tofauti ya kuhifadhi. Vitu vilivyowekwa **ByLayer** kwa rangi, uzito wa mstari au aina ya mstari (chaguo-msingi) huchukua kile unachoweka hapa; vitu vyenye thamani yao wenyewe haviathiriwi.

## Kuongeza safu

1. Bofya **+ Add Layer** chini ya jedwali.
2. Andika jina kisha bonyeza **Enter** kuthibitisha, au **Escape** kughairi.

Majina ya safu yanaweza kuwa na herufi, tarakimu, nafasi na `_`, `-`, `$`. Jina ambalo ni tupu, tayari linatumika, au lina herufi nyingine yoyote linakataliwa kwa hitilafu ya papo hapo, na safu mlalo inabaki wazi kwa jaribio lingine.

Safu mpya huanza zikiwa **hazijagandishwa, hazijafungwa, zinaweza kuchapishwa**, zikiwa na rangi 7 (nyeupe/nyeusi), Lineweight ya Default na Linetype ya Continuous — chaguo-msingi zile zile ambazo [Import](../import/) huweka kwa safu `0` katika mchoro tupu.

## Yasiyowezekana hapa

Hakuna kitufe cha kufuta — safu haziondolewi kamwe baada ya kuundwa, zinagandishwa tu au kuachwa bila kutumika. Pia hakuna kiashiria katika jedwali cha safu ipi ni *ya sasa*; hiyo huwekwa kwa kuchagua kutoka kwenye orodha kunjuzi ya paneli ya safu au kwa [LayerMakeCurrent](../layer-make-current/), si kutoka kwenye kidirisha hiki.

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
