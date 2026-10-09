---
title: Import — Fungua Faili za DXF au JSON katika KulmanLab CAD
description: "Tumia amri ya Import kufungua faili za DXF au KulmanLab JSON katika KulmanLab CAD. Inaunga mkono mistari, miduara, upinde, polylines, splines, maandishi, vipimo, na viongozi."
keywords: [import DXF file, open DXF in browser, import CAD file online, open DXF file, DXF viewer browser, import JSON CAD, KulmanLab import, free CAD DXF viewer, load drawing, DXF to browser]
group: file
order: 1
---

# Import

Amri ya **Import** hupakia mchoro uliopo kutoka kwa mfumo wa faili wako wa ndani kwenye KulmanLab CAD. Umbizo la kawaida la **DXF** na umbizo la **JSON** la asili la KulmanLab vyote vinaaungwa mkono.

## Jinsi ya kuingiza faili

1. Bonyeza kitufe cha **Import** kwenye upau wa zana (ikoni ya folda) katika jopo la Faili juu ya skrini.
2. Kichaguzi cha faili cha kivinjari chako kinafunguka. Nenda kwenye faili yako ya mchoro na uichague.
3. Mchoro unapakiwa kwenye turubai mara moja. Dirisha linarekabishwa kwa viumbe vyote kiotomatiki.

Njia mbadala, unaweza kukokota na kudondosha faili moja kwa moja kwenye turubai.

## Miundo ya faili inayoungwa mkono

| Umbizo | Kiongezi | Lini kutumia |
|--------|----------|--------------|
| **DXF** | `.dxf` | Michoro kutoka FreeCAD, LibreCAD, au zana nyingine za CAD |
| **JSON** *(ya asili)* | `.json` | Michoro iliyohifadhiwa hapo awali kutoka KulmanLab CAD — uaminifu kamili |

## Kinachoingazwa kutoka DXF

KulmanLab huchambua aina zifuatazo za viumbe vya DXF:

| Aina ya kiumbe | Msimbo wa DXF | Maelezo |
|----------------|---------------|---------|
| Mstari | `LINE` | |
| Mduara | `CIRCLE` | |
| Upinde | `ARC` | |
| Duaradufu | `ELLIPSE` | |
| Polyline | `LWPOLYLINE` | |
| Spline | `SPLINE` | |
| Maandishi | `TEXT`, `MTEXT` | |
| Kipimo | `DIMENSION` | |
| Kiongozi wa kuzidisha | `MULTILEADER` | |
| Hatch | `HATCH` | Jina, kipimo, na pembe ya muundo husomwa; jina lisilo kwenye maktaba yako ya muundo hurudi kwa ANSI31. Angalia [Hatch](../hatch/) |

Ufafanuzi wa safu na jedwali la aina za mstari pia huingizwa kutoka kwa faili ya DXF inapokuwepo.

Viumbe vinavyotumia aina za DXF zisizooungwa mkono hupitwa kimya kimya — sehemu iliyobaki ya mchoro bado inapakiwa.

## Kutaja faili na uhifadhi

Faili lililoingizwa huhifadhi jina lake la asili. Ikiwa jina hilo tayari linatumika na mchoro mwingine uliohifadhiwa, kiambatanisho cha mtindo wa Finder/Explorer huongezwa kiotomatiki (`myplan (2)`, `myplan (3)`, …) ili ingizo lililopo lisibadilishwe kamwe. Unaweza kubadilisha jina la faili baadaye kutoka kwa [File Manager](../file-manager/#kubadilisha-jina-la-faili).

Mchoro huhifadhiwa kiotomatiki kwenye hifadhi ya kivinjari (IndexedDB) baada ya kuingizwa, hivyo huonekana katika jopo la [File Manager](../file-manager/) na hunusurika upakiaji upya wa ukurasa.

## Kinachotokea kwa mchoro wa sasa

Kuingiza hubadilisha turubai ya sasa. Hakuna kuunganisha au kuongeza. Ikiwa una mabadiliko ambayo hayajahifadhiwa, [hamisha](../export-manager/) mchoro wa sasa kwanza.

## Wakati wa kuanza

KulmanLab hufungua upya kiotomatiki faili iliyohaririwa hivi karibuni zaidi ukurasa unapopakiwa. Ikiwa hakuna faili zilizohifadhiwa, mchoro wa sampuli wa chaguo-msingi hupakiwa.

## Utatuzi wa matatizo

| Tatizo | Sababu inayowezekana | Suluhisho |
|--------|----------------------|-----------|
| Turubai ni tupu baada ya kuingiza | Viumbe vya DXF vinatumia aina zisizooungwa mkono (mfano INSERT) | Viumbe vilipitwa — terminal huorodhesha kila aina iliyorukwa pamoja na idadi, kwa mfano `Could not read INSERT: 12`. Faili ambayo si mchoro halali kabisa huripoti `Could not read <file>: not a valid drawing file` |
| Kitufe cha Import hakifanyi chochote | Kivinjari kilizuia kichaguzi cha faili | Bonyeza kitufe mara moja zaidi; vivinjari vingine vinahitaji ishara mpya ya mtumiaji |
| Vipimo vinaonekana vibaya | DXF kutoka kwa zana inayoandika jiometri ya kipimo isiyo ya kawaida | Hamisha tena kutoka kwa programu ya chanzo ukitumia toleo la sasa la DXF |

## Amri zinazohusiana

- [Export Manager](../export-manager/) — pakua mchoro wa sasa kama DXF au JSON
- [File Manager](../file-manager/) — tazama na urejeshe michoro iliyohifadhiwa kwenye kivinjari
- [New File](../new-file/) — anza mchoro tupu
