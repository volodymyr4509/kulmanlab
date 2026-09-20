---
title: Amri ya Hatch Manager — Vinjari na Pakia Muundo za .pat
description: Amri ya Hatch Manager hufungua kisanduku cha mazungumzo cha kuvinjari muundo za hatch kwa muhtasari wa sampuli wa moja kwa moja, na kupakia faili zako mwenyewe za muundo za .pat. Faili zilizopakiwa huhifadhiwa kwenye kivinjari na kufunika muundo zilizojengwa ndani zenye jina lile lile.
keywords: [hatch manager, muundo wa hatch maalum CAD, pakia faili ya pat, acad.pat, maktaba ya muundo wa hatch, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

Amri ya `KidhibitiMiundo` hufungua kisanduku cha mazungumzo cha kuvinjari muundo za hatch kwa muhtasari wa sampuli wa moja kwa moja, na kupakia faili zako mwenyewe za muundo za `.pat` kutumika na [Hatch](../hatch/).

## Kufungua Hatch Manager

Andika `KidhibitiMiundo` kwenye terminal. Hii ni tofauti na kichaguzi cha muundo kinachofunguka unapobofya chip ya **Pattern** ya hatch — kichaguzi huchagua muundo kwa hatch moja, Hatch Manager ni mahali unapoongeza au kuondoa faili za `.pat`.

## Vikundi vya Muundo

| Kikundi | Yaliyomo |
|---------|----------|
| **User** | Muundo kutoka faili zako mwenyewe za `.pat` zilizopakiwa, zikigawanywa zaidi kulingana na faili ambayo kila muundo ulitoka (huonyeshwa tu baada ya kupakia moja) |
| **Standard** | `SOLID` pamoja na jedwali la muundo la mchoro huu lenyewe — kila mchoro mpya huanza na maktaba ile ile iliyojengwa ndani, sawa na tabaka na aina za mstari zake |

Bofya muundo wowote kwenye orodha (au tumia `↑`/`↓`) kuiona kwenye muhtasari upande wa kulia — sampuli iliyochorwa kwa msimbo ule ule ambao turubai hujazwa nao, hivyo ni hasa kile mchoro utakachoonyesha, pamoja na jina, maelezo, na idadi ya mistari ya muundo.

## Kupakia Faili ya Muundo Maalum

1. Bofya **Add .pat File** kwenye sehemu ya chini ya kisanduku cha mazungumzo.
2. Chagua faili ya `.pat` — muundo wa kawaida wa muundo wa hatch. Faili moja mara nyingi hufafanua muundo mingi yenye majina kwa wakati mmoja; zote huonekana kama viingilio tofauti vilivyopangwa chini ya jina la faili hiyo.
3. Faili zilizopakiwa huhifadhiwa kudumu kwenye kivinjari (IndexedDB), zikipangwa kwa zilizoongezwa hivi karibuni kwanza, na hupakiwa upya kiotomatiki wakati ujao utakapofungua KulmanLab CAD.

Kupakia faili inayofafanua muundo wenye jina lile lile na ule uliojengwa ndani **hufunika** chaguo-msingi — hii ndiyo njia inayoungwa mkono ya kupata ufafanuzi rasmi wa muundo wa Autodesk: pakia `acad.pat` halisi, na matoleo yake ya ANSI31 na majina mengine ya kawaida huchukua nafasi ya makadirio ya KulmanLab yenyewe.

Ikiwa mchoro unarejelea jina la muundo lisilo kwenye maktaba yako — lililoingizwa kutoka DXF iliyotumia muundo kutoka `acad.pat` ambayo hujapakia — hatch bado huonyeshwa, ikitumia `ANSI31` kama mbadala, badala ya kurudi kwenye ujazaji tambarare, usio na muundo.

## Kuondoa Faili ya Muundo

Bofya **×** karibu na jina la faili kwenye kikundi cha **User** kuiondoa pamoja na kila muundo ilioufafanua. Hatch yoyote inayotumia tayari mojawapo ya muundo hizo hurudi mara moja kwa `ANSI31`. Muundo za **Standard** zilizojengwa ndani haziwezi kuondolewa.

## Rejea ya Kibodi

| Kitufe | Kitendo |
|--------|---------|
| `↑` / `↓` | Sogeza uteuzi juu au chini kwenye orodha ya muundo |
| `Escape` | Funga Hatch Manager |

## Amri Zinazohusiana

- [Hatch](../hatch/) — hujaza eneo lililobofya kwa kutumia muundo uliochaguliwa kwa sasa
- [Font Manager](../font-manager/) — muundo ule ule wa kupakia/kuvinjari, kwa fonti maalum badala ya muundo za hatch
