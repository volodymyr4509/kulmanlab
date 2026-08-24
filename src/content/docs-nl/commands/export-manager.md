---
title: Export Manager — Tekeningen downloaden als DXF of JSON
description: De Export Manager downloadt de huidige tekening als een DXF- of JSON-bestand (native). Elk formaat toont precies welke entiteitstypen het bevat, naast elkaar, zodat u vóór het downloaden ziet wat DXF weglaat — momenteel hatches, maatvoeringen, leiders en tekst.
keywords: [DXF exporteren, CAD-bestand exporteren, DXF downloaden in browser, DXF online opslaan, JSON CAD exporteren, KulmanLab export, CAD-bestand downloaden, DXF-export, tekening opslaan als bestand, DXF-download]
group: file
order: 6
---

# Export Manager

Het `exportmanager`-commando downloadt de huidige tekening naar uw bestandssysteem. Er zijn twee formaten beschikbaar, weergegeven als kaarten naast elkaar: **DXF** voor compatibiliteit met andere CAD-tools en **JSON** voor opslag met volledige getrouwheid binnen KulmanLab CAD — elke kaart toont precies welke entiteitstypen dat formaat bevat.

## Zo exporteert u

1. Klik op de **Export**-werkbalkknop (downloadpictogram) in het bestandspaneel, of typ `exportmanager` in de terminal.
2. De pop-up **Export Manager** opent en toont de JSON- en DXF-kaarten naast elkaar, elk met een overzicht van wat wordt geëxporteerd (en, voor DXF, wat wordt weggelaten).
3. Klik op een kaart om het formaat te selecteren — **JSON** of **DXF**.
4. Klik op de knop **Export \<FORMAT\>**. Het bestand wordt automatisch gedownload naar uw standaard downloadmap.

Druk op `Escape` om de pop-up te sluiten zonder te exporteren.

## Een formaat kiezen

| Formaat | Extensie | Beste voor | Beperkingen |
|---------|----------|-----------|-------------|
| **JSON** *(native)* | `.json` | Werk opslaan om later opnieuw te openen in KulmanLab CAD | Niet compatibel met andere CAD-tools |
| **DXF** | `.dxf` | Delen met FreeCAD, LibreCAD, enz. | Hatches, maatvoeringen, leiders en tekst worden niet geëxporteerd |

**Wanneer JSON gebruiken:** wanneer u een volledige kopie van uw werk wilt opslaan. JSON is het native formaat van KulmanLab en behoudt elke entiteit exact — inclusief maatvoeringen, leiders, hatches en alle laaggegevens.

**Wanneer DXF gebruiken:** wanneer u de tekening moet overdragen aan iemand die een andere CAD-toepassing gebruikt. Het geëxporteerde bestand gebruikt het AC1032 DXF-formaat en kan worden geopend in de meeste DXF-compatibele tools.

## Wat er per formaat wordt geëxporteerd

### JSON-export

Elk entiteitstype is inbegrepen:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Maatvoeringen (linear, aligned, continued, radius, diameter)
- Leaders (multileaders)
- Hatches, inclusief hun patroon, schaal, hoek en oorsprong
- Layers en Linetypes

### DXF-export

Alleen geometrie-entiteiten zijn inbegrepen:

- Lines, Circles, Arcs, Ellipses, Polylines (geëxporteerd als `LWPOLYLINE`), Splines
- Layers en Linetypes

**Niet geëxporteerd naar DXF:** hatches, maatvoeringen, leiders en tekst. Maatvoeringen en leiders gebruiken KulmanLab-specifieke datastructuren die niet getrouw kunnen worden weergegeven in standaard-DXF; hatches worden momenteel helemaal niet naar DXF geëxporteerd, ook al worden ze er wel uit geïmporteerd; tekstexport is ook nog niet geïmplementeerd. Als uw tekening een van deze bevat, gebruik dan JSON of de [Print Manager](../print-manager/) om ze vast te leggen.

## Naam van het geëxporteerde bestand

Het gedownloade bestand krijgt de naam van het huidige tekeningbestand (bijv. `myplan.json`). De extensie verandert overeenkomstig het gekozen formaat.

## Verschil tussen Export Manager en Print Manager

| Functie | Export Manager | Print Manager |
|---------|-----------------|-----------------|
| Uitvoer | Vector bronbestand (.dxf / .json) | Rasterafbeelding (.png / .jpeg / .webp / .pdf) |
| Bewerkbaar in andere tools | Ja (DXF) | Nee |
| Behoudt layers & linetypes | Ja | Nee (plat gerenderd) |
| Legt maatvoeringen & leiders vast | Alleen JSON | Ja |

Gebruik **Export Manager** wanneer u een bewerkbaar bestand nodig heeft. Gebruik de [Print Manager](../print-manager/) wanneer u een visuele momentopname nodig heeft.

## Gerelateerde commando's

- [Import](../import/) — open een DXF- of JSON-bestand
- [Print Manager](../print-manager/) — exporteer het canvas als een PNG-, JPEG-, WebP- of PDF-afbeelding
- [File Manager](../file-manager/) — blader door tekeningen die zijn opgeslagen in de browseropslag
