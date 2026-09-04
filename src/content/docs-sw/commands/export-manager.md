---
title: Export Manager — Pakua Michoro kama DXF au JSON
description: Pakua mchoro kama DXF au JSON. Zote mbili hubeba kila kitu — jiometri, maandishi, vipimo, mistari ya uelekezi, mistari ya kujaza — pamoja na tabaka na aina za mstari.
keywords: [hamisha DXF, hamisha faili ya CAD, pakua DXF kivinjari, hifadhi DXF mtandaoni, hamisha JSON CAD, uhamishaji wa KulmanLab, pakua faili ya CAD, uhamishaji wa DXF, hifadhi mchoro kwenye faili, upakuaji wa DXF]
group: file
order: 6
---

# Export Manager

Amri ya `exportmanager` inapakua mchoro wa sasa kwenye mfumo wako wa faili. Miundo miwili inapatikana, inayoonyeshwa kama kadi kando kando: **DXF** kwa uwiano na zana nyingine za CAD na **JSON** kwa uhifadhi wa uaminifu kamili ndani ya KulmanLab CAD — kila kadi inaorodhesha kwa usahihi ni aina zipi za entiti muundo huo unazobeba.

## Jinsi ya kuhamisha

1. Bonyeza kitufe cha **Export** kwenye upau wa zana (aikoni ya kupakua) katika paneli ya faili, au andika `exportmanager` kwenye terminal.
2. Popup ya **Export Manager** inafunguka ikionyesha kadi za JSON na DXF kando kando, kila moja ikiorodhesha kinachohamishwa.
3. Bonyeza kadi ili kuchagua muundo — **JSON** au **DXF**.
4. Bonyeza kitufe cha **Export \<FORMAT\>**. Faili inapakuliwa moja kwa moja kwenye folda yako ya chaguo-msingi ya upakuaji.

Bonyeza `Escape` kufunga popup bila kuhamisha.

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
- Dimensions (linear, aligned, continued, radius, diameter)
- Leaders (multileaders)
- Hatches, ikiwa ni pamoja na pattern, scale, angle, na origin yake
- Layers na Linetypes

### Uhamishaji wa DXF

Kila aina ya entiti imejumuishwa:

- Lines, Circles, Arcs, Ellipses, Polylines (zinahamishwa kama `LWPOLYLINE`), Splines
- Text
- Dimensions (linear, aligned, continued, radius, diameter)
- Leaders (multileaders)
- Hatches, ikiwa ni pamoja na pattern, scale, angle, na origin yake
- Layers na Linetypes

Faili huandikwa kama DXF ya AC1032, hivyo mchoro uliohamishwa kutoka KulmanLab hufunguka katika zana nyingine zinazoweza DXF ukiwa na maelezo yake salama, badala ya kufika kama jiometri tupu.

Kile ambacho kila programu inayopokea hufanya nacho baadaye bado hutofautiana — uwezo wa DXF hutofautiana kati ya zana, na ya zamani inaweza kupuuza vitu ambavyo mpya huvisoma. Kama mchoro lazima uonekane vilevile kila mahali, [Print Manager](../print-manager/) huunasa kama PDF au picha badala yake.

## Jina la faili iliyohamishwa

Faili iliyopakuliwa inaitwa kulingana na faili ya mchoro wa sasa (mfano `myplan.json`). Kiambishi hubadilika kulingana na muundo uliochaguliwa.

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
