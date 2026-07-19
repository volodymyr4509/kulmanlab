---
title: Export — Tekeningen Downloaden als DXF of JSON
description: Het Export-commando downloadt de huidige tekening als een DXF- of JSON-bestand (native). JSON behoudt alle entiteiten inclusief maatvoering en leaders; DXF is compatibel met andere CAD-tools.
keywords: [DXF exporteren, CAD-bestand exporteren, DXF downloaden browser, DXF opslaan online, JSON exporteren CAD, KulmanLab export, CAD-bestand downloaden, DXF export, tekening opslaan als bestand, DXF download]
group: file
order: 5
---

# Export

Het **Export**-commando downloadt de huidige tekening naar uw bestandssysteem. Er zijn twee formaten beschikbaar: **DXF** voor compatibiliteit met andere CAD-tools en **JSON** voor volledig getrouwe opslag binnen KulmanLab CAD.

## Hoe te exporteren

1. Klik op de **Export**-werkbalkknop (downloadicoon) in het Bestand-paneel.
2. De popup **Export Manager** opent.
3. Klik op een formaatkaart om het formaat te kiezen — **JSON** of **DXF**.
4. Klik op de knop **Export**. Het bestand wordt automatisch naar uw standaard downloadmap gedownload.

## Een formaat kiezen

| Formaat | Extensie | Ideaal voor | Beperkingen |
|--------|-----------|----------|-------------|
| **JSON** *(native)* | `.json` | Werk opslaan om opnieuw te openen in KulmanLab CAD | Niet compatibel met andere CAD-tools |
| **DXF** | `.dxf` | Delen met FreeCAD, LibreCAD, enz. | Maatvoering en leaders worden niet geëxporteerd |

**Wanneer JSON gebruiken:** altijd wanneer u een volledige kopie van uw werk wilt opslaan. JSON is het native formaat van KulmanLab en behoudt elke entiteit exact — inclusief maatvoering, leaders en alle laaggegevens.

**Wanneer DXF gebruiken:** wanneer u de tekening moet overdragen aan iemand die een andere CAD-toepassing gebruikt. Het geëxporteerde bestand gebruikt het AC1012 DXF-formaat en kan worden geopend in de meeste DXF-compatibele tools.

## Wat wordt geëxporteerd per formaat

### JSON-export

Alle entiteitstypen worden meegenomen:

- Lijnen, cirkels, bogen, ellipsen, polylijnen, splines, tekst
- Maatvoering (lineair, uitgelijnd, doorlopend, radius, diameter)
- Multileaders
- Laagdefinities en lijntypetabellen

### DXF-export

Alleen geometrie-entiteiten worden meegenomen:

- Lijnen, cirkels, bogen, ellipsen, polylijnen (geëxporteerd als `LWPOLYLINE`), splines, tekst
- Laagdefinities en lijntypetabellen

**Niet inbegrepen in DXF:** maatvoeringsentiteiten en multileaders. Deze gebruiken KulmanLab-specifieke gegevensstructuren die niet getrouw kunnen worden weergegeven in standaard-DXF. Als uw tekening annotaties bevat, gebruik dan JSON of [Print](../print/) om ze visueel vast te leggen.

## Naam van het geëxporteerde bestand

Het gedownloade bestand wordt genoemd naar het huidige tekeningbestand (bijv. `myplan_May22_14:30:00.json`). De extensie verandert overeenkomstig het gekozen formaat.

## Verschil tussen Export en Print

| Functie | Export | Print |
|---------|--------|-------|
| Uitvoer | Vectorbronbestand (.dxf / .json) | Rasterafbeelding (.png / .jpeg / .webp / .pdf) |
| Bewerkbaar in andere tools | Ja (DXF) | Nee |
| Behoudt lagen & lijntypen | Ja | Nee (plat gerenderd) |
| Legt maatvoering & leaders vast | Alleen JSON | Ja |

Gebruik **Export** wanneer u een bewerkbaar bestand nodig heeft. Gebruik [Print](../print/) wanneer u een visuele momentopname nodig heeft.

## Gerelateerde commando's

- [Import](../import/) — een DXF- of JSON-bestand openen
- [Print](../print/) — het canvas exporteren als PNG-, JPEG-, WebP- of PDF-afbeelding
- [Files](../files/) — tekeningen bladeren die in browseropslag zijn opgeslagen
