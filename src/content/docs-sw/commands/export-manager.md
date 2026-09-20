---
title: Export Manager — Pakua Michoro kama DXF au JSON
description: Pakua mchoro kama DXF au JSON, ukichagua kwa kila aina ya kitu kitakachoingia. Zote mbili hubeba jiometri, maandishi, vipimo na mistari ya uelekezi.
keywords: [hamisha DXF, hamisha faili ya CAD, pakua DXF kivinjari, hifadhi DXF mtandaoni, hamisha JSON CAD, uhamishaji wa KulmanLab, pakua faili ya CAD, uhamishaji wa DXF, hifadhi mchoro kwenye faili, upakuaji wa DXF]
group: file
order: 6
---

# Export Manager

Amri `KidhibitiUhamishaji` hupakua mchoro wa sasa kwenye mfumo wako wa faili. Miundo miwili iko kando kwa kando — **DXF** kwa uoanifu na zana nyingine za CAD na **JSON** kwa kuhifadhi kamili ndani ya KulmanLab CAD — na kila mmoja una orodha yake ya kitakachowekwa kwenye faili.

## Jinsi ya kuhamisha

1. Bonyeza kitufe cha **Export** kwenye upau wa zana (aikoni ya kupakua) katika paneli ya faili, au andika `KidhibitiUhamishaji` kwenye terminal.
2. Dirisha la **Export Manager** hufunguka likiwa na safu mbili, **JSON** na **DXF**, kila moja ikiorodhesha aina za vitu vya mchoro pamoja na kisanduku cha kutia alama na idadi.
3. Ondoa alama kwa kile unachotaka kuacha. Mwanzoni vyote vina alama.
4. Bofya **Export JSON** au **Export DXF**. Faili hupakuliwa kwenye folda yako ya kawaida na dirisha hufungwa.

Bonyeza `Escape` kufunga popup bila kuhamisha.

## Kuchagua kitakachohamishwa

Safu zote mbili huorodhesha aina zilezile za vitu, kila moja ikiwa na idadi yake katika mchoro:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Vyote vina alama dirisha linapofunguka, hivyo kuhamisha mara moja hukupa mchoro mzima. Ondoa alama kwenye aina ili iachwe nje ya faili hiyo pekee.

- **Safu hizo mbili hujitegemea.** Kuondoa alama ya Hatches upande wa DXF hakubadili kile **Export JSON** hutoa — kila muundo hushikilia chaguo lake.
- **Aina usiyo nayo huonekana hafifu.** Safu yenye idadi `0` haiwezi kutiwa alama, hivyo orodha hii pia ni hesabu ya haraka ya mchoro.
- **Idadi ni picha ya wakati mmoja.** Huchukuliwa dirisha linapofunguka na hazibadiliki mchoro ukibadilika nyuma. Funga na ufungue tena ili kuzihuisha.
- **Hakuna kinachofutwa.** Kuondoa alama hutengeneza faili inayohamishwa tu; mchoro wenyewe haubadiliki.

**Linear Dimensions** hujumuisha vipimo vya mstari, vilivyopangwa na vinavyoendelea: aina moja ya kitu inayoundwa na amri tatu tofauti. Nusukipenyo, kipenyo na pembe kila kimoja kina safu yake.

Kwa faili ya kukata, ondoa alama za Text, safu nne za vipimo, Leaders na Hatches kisha bofya **Export DXF** — ona [kuandaa DXF kwa ukataji wa leza](/sw/blog/prepare-dxf-for-laser-cutting/).

## Kuchagua muundo

| Muundo | Kiambishi | Bora kwa | Vikwazo |
|--------|-----------|----------|---------|
| **JSON** *(asili)* | `.json` | Kuhifadhi kazi ili kufungua tena katika KulmanLab CAD | Haifanani na zana nyingine za CAD |
| **DXF** | `.dxf` | Kushiriki na FreeCAD, LibreCAD, n.k. | Kiasi kinachosalia hutegemea programu inayopokea |

**Wakati wa kutumia JSON:** wakati wowote unapotaka kuhifadhi nakala kamili ya kazi yako. JSON ni muundo asili wa KulmanLab na unadumisha kila entiti kwa usahihi — ikiwa ni pamoja na dimensions, leaders, hatches, na data zote za layer.

**Wakati wa kutumia DXF:** unapohitaji kukabidhi mchoro kwa mtu anayetumia programu nyingine ya CAD. Faili iliyohamishwa hutumia muundo wa DXF wa AC1032 na inaweza kufunguliwa katika zana nyingi zinazolingana na DXF.

## Kinachohamishwa kwa kila muundo

### Uhamishaji wa JSON

Kila aina ya entiti imejumuishwa:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Dimensions (linear, aligned, continued, radius, diameter, pembe)
- Leaders (multileaders)
- Hatches, ikiwa ni pamoja na pattern, scale, angle, na origin yake
- Layers na Linetypes

### Uhamishaji wa DXF

Kila aina ya entiti imejumuishwa:

- Lines, Circles, Arcs, Ellipses, Polylines (zinahamishwa kama `LWPOLYLINE`), Splines
- Text
- Dimensions (linear, aligned, continued, radius, diameter, pembe)
- Leaders (multileaders)
- Hatches, ikiwa ni pamoja na pattern, scale, angle, na origin yake
- Layers na Linetypes

Faili huandikwa kama DXF ya AC1032, hivyo mchoro uliohamishwa kutoka KulmanLab hufunguka katika zana nyingine zinazoweza DXF ukiwa na maelezo yake salama, badala ya kufika kama jiometri tupu.

Kile ambacho kila programu inayopokea hufanya nacho baadaye bado hutofautiana — uwezo wa DXF hutofautiana kati ya zana, na ya zamani inaweza kupuuza vitu ambavyo mpya huvisoma. Kama mchoro lazima uonekane vilevile kila mahali, [Print Manager](../print-manager/) huunasa kama PDF au picha badala yake.

## Jina la faili iliyohamishwa

Faili iliyopakuliwa inaitwa kulingana na faili ya mchoro wa sasa (mfano `myplan.json`). Kiambishi hubadilika kulingana na muundo uliochaguliwa. Mchoro ambao haujawahi kupewa jina huhamishwa kama `drawing.dxf` au `drawing.json`.

## Tofauti kati ya Export Manager na Print Manager

| Kipengele | Export Manager | Print Manager |
|-----------|-----------------|-----------------|
| Matokeo | Faili chanzo cha vector (.dxf / .json) | Picha ya raster (.png / .jpeg / .webp / .pdf) |
| Inaweza kuhaririwa katika zana nyingine | Ndiyo (DXF) | Hapana |
| Inadumisha layers na linetypes | Ndiyo | Hapana (inaonyeshwa gorofa) |
| Inakamata dimensions na leaders | Ndiyo | Ndiyo |

Tumia **Export Manager** unapohitaji faili inayoweza kuhaririwa. Tumia [Print Manager](../print-manager/) unapohitaji picha ya haraka ya kuona.

## Amri zinazohusiana

- [Import](../import/) — fungua faili ya DXF au JSON
- [Print Manager](../print-manager/) — hamisha kanvasi kama picha ya PNG, JPEG, WebP, au PDF
- [File Manager](../file-manager/) — vinjari michoro iliyohifadhiwa katika hifadhi ya kivinjari
