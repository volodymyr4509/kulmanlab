---
title: Export — Pakua Michoro kama DXF au JSON katika KulmanLab CAD
description: "Amri ya Export hupakua mchoro wa sasa kama faili la DXF au JSON (asili). JSON huhifadhi viumbe vyote ikiwa ni pamoja na vipimo na viongozi; DXF inaweza kufanya kazi na zana nyingine za CAD."
keywords: [export DXF, export CAD file, download DXF browser, save DXF online, export JSON CAD, KulmanLab export, CAD file download, DXF export, save drawing to file, DXF download]
group: file
order: 5
---

# Export

Amri ya **Export** hupakua mchoro wa sasa kwenye mfumo wako wa faili. Miundo miwili inapatikana: **DXF** kwa utangamano na zana nyingine za CAD na **JSON** kwa uhifadhi wa kina ndani ya KulmanLab CAD.

## Jinsi ya kuexport

1. Bonyeza kitufe cha **Export** kwenye upau wa zana (ikoni ya kupakua) kwenye jopo la Faili.
2. Dirisha la **Export Manager** linafunguka.
3. Bonyeza kadi ya muundo kuchagua muundo — **JSON** au **DXF**.
4. Bonyeza kitufe cha **Export**. Faili linapakuliwa kwenye folda yako ya upakuaji kiotomatiki.

## Kuchagua muundo

| Muundo | Kiendelezi | Bora kwa | Vikwazo |
|--------|-----------|----------|-------------|
| **JSON** *(asili)* | `.json` | Kuhifadhi kazi ili kuifungua tena katika KulmanLab CAD | Haitangamani na zana nyingine za CAD |
| **DXF** | `.dxf` | Kushiriki na FreeCAD, LibreCAD, n.k. | Vipimo na viongozi haviorodheshwi |

**Lini utumie JSON:** wakati wowote unapotaka kuhifadhi nakala kamili ya kazi yako. JSON ni muundo asili wa KulmanLab na huhifadhi kila kiumbe kikamilifu — ikiwa ni pamoja na vipimo, viongozi, na data zote za tabaka.

**Lini utumie DXF:** unapohitaji kutoa mchoro kwa mtu anayetumia programu nyingine ya CAD. Faili iliyoexportwa hutumia muundo wa DXF wa AC1012 na inaweza kufunguliwa katika zana nyingi zinazotangamana na DXF.

## Kinachoorodheshwa kwa kila muundo

### Export ya JSON

Aina zote za viumbe zimejumuishwa:

- Mistari, duara, archi, duaradufu, polyline, spline, maandishi
- Vipimo (mstari, sawa, kuendelea, eneo, kipenyo)
- Vielelezo vingi
- Ufafanuzi wa tabaka na jedwali za aina za mstari

### Export ya DXF

Viumbe vya jiometri pekee vimejumuishwa:

- Mistari, duara, archi, duaradufu, polyline (zinaexportwa kama `LWPOLYLINE`), spline, maandishi
- Ufafanuzi wa tabaka na jedwali za aina za mstari

**Haijajumuishwa katika DXF:** viumbe vya kipimo na vielelezo vingi. Hizi hutumia miundo ya data maalum ya KulmanLab ambayo haiwezi kuwakilishwa kikamilifu katika DXF ya kawaida. Ikiwa mchoro wako una maelezo, tumia JSON au [Print](../print/) kuyakamata kwa njia ya kuona.

## Jina la faili lililoorodheshwa

Faili linalopakuliwa lina jina la faili la mchoro wa sasa (mfano: `myplan_May22_14:30:00.json`). Kiendelezi hubadilika kulingana na muundo uliochaguliwa.

## Tofauti kati ya Export na Print

| Kipengele | Export | Print |
|---------|--------|-------|
| Matokeo | Faili la chanzo cha vektа (.dxf / .json) | Picha ya rasta (.png / .jpeg / .webp / .pdf) |
| Inaweza kuhaririwa katika zana nyingine | Ndiyo (DXF) | Hapana |
| Huhifadhi tabaka na aina za mstari | Ndiyo | Hapana (inatolewa tambarare) |
| Hunakili vipimo na viongozi | JSON pekee | Ndiyo |

Tumia **Export** unapohitaji faili linaloweza kuhaririwa. Tumia [Print](../print/) unapohitaji picha ya kuona.

## Amri zinazohusiana

- [Import](../import/) — fungua faili la DXF au JSON
- [Print](../print/) — exporta turubai kama picha ya PNG, JPEG, WebP, au PDF
- [Files](../files/) — vinjari michoro iliyohifadhiwa katika hifadhi ya kivinjari
