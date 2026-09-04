---
title: Export Manager — Tekeningen downloaden als DXF of JSON
description: Download de tekening als DXF of JSON en vink per entiteitstype aan wat meegaat. Beide dragen geometrie, tekst, maatvoering, leaders en arceringen.
keywords: [DXF exporteren, CAD-bestand exporteren, DXF downloaden in browser, DXF online opslaan, JSON CAD exporteren, KulmanLab export, CAD-bestand downloaden, DXF-export, tekening opslaan als bestand, DXF-download]
group: file
order: 6
---

# Export Manager

Het commando `exportmanager` downloadt de huidige tekening naar je bestandssysteem. Twee formaten staan naast elkaar — **DXF** voor compatibiliteit met andere CAD-gereedschappen en **JSON** voor volledig getrouwe opslag binnen KulmanLab CAD — en elk heeft zijn eigen lijstje van wat er in het bestand komt.

## Zo exporteert u

1. Klik op de **Export**-werkbalkknop (downloadpictogram) in het bestandspaneel, of typ `exportmanager` in de terminal.
2. De pop-up **Export Manager** opent met twee kolommen, **JSON** en **DXF**, die elk de entiteitstypen van de tekening tonen met een vinkje en een aantal.
3. Vink uit wat je wilt weglaten. Alles staat om te beginnen aan.
4. Klik **Export JSON** of **Export DXF**. Het bestand komt in je standaard downloadmap en de pop-up sluit.

Druk op `Escape` om de pop-up te sluiten zonder te exporteren.

## Kiezen wat er geëxporteerd wordt

Beide kolommen tonen dezelfde entiteitstypen, elk met het aantal ervan in de tekening:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Bij het openen staat alles aangevinkt, dus meteen exporteren geeft je de hele tekening. Vink een type uit om het alleen uit dát bestand te houden.

- **De twee kolommen staan los van elkaar.** Hatches uitvinken onder DXF verandert niets aan wat **Export JSON** oplevert — elk formaat houdt zijn eigen selectie.
- **Wat je niet hebt, is grijs.** Een rij met aantal `0` kun je niet aanvinken, waardoor de lijst meteen een snelle inventaris van de tekening is.
- **De aantallen zijn een momentopname.** Ze worden bij het openen genomen en lopen niet mee als de tekening erachter verandert. Sluiten en heropenen ververst ze.
- **Er wordt niets verwijderd.** Uitvinken vormt alleen het geëxporteerde bestand; de tekening zelf blijft ongemoeid.

**Linear Dimensions** dekt lineaire, uitgelijnde en doorlopende maatvoering: één entiteitstype dat door drie verschillende commando's wordt gemaakt. Straal, diameter en hoek hebben elk hun eigen rij.

Voor een snijbestand vink je Text, de vier maatvoeringsrijen, Leaders en Hatches uit en klik je **Export DXF** — zie [een DXF voorbereiden voor lasersnijden](/nl/blog/prepare-dxf-for-laser-cutting/).

## Een formaat kiezen

| Formaat | Extensie | Beste voor | Beperkingen |
|---------|----------|-----------|-------------|
| **JSON** *(native)* | `.json` | Werk opslaan om later opnieuw te openen in KulmanLab CAD | Niet compatibel met andere CAD-tools |
| **DXF** | `.dxf` | Delen met FreeCAD, LibreCAD, enz. | Hoeveel behouden blijft, hangt af van het ontvangende programma |

**Wanneer JSON gebruiken:** wanneer u een volledige kopie van uw werk wilt opslaan. JSON is het native formaat van KulmanLab en behoudt elke entiteit exact — inclusief maatvoeringen, leiders, hatches en alle laaggegevens.

**Wanneer DXF gebruiken:** wanneer u de tekening moet overdragen aan iemand die een andere CAD-toepassing gebruikt. Het geëxporteerde bestand gebruikt het AC1032 DXF-formaat en kan worden geopend in de meeste DXF-compatibele tools.

## Wat er per formaat wordt geëxporteerd

### JSON-export

Elk entiteitstype is inbegrepen:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Maatvoeringen (linear, aligned, continued, radius, diameter, hoek)
- Leaders (multileaders)
- Hatches, inclusief hun patroon, schaal, hoek en oorsprong
- Layers en Linetypes

### DXF-export

Elk entiteitstype is inbegrepen:

- Lines, Circles, Arcs, Ellipses, Polylines (geëxporteerd als `LWPOLYLINE`), Splines
- Text
- Maatvoeringen (linear, aligned, continued, radius, diameter, hoek)
- Leaders (multileaders)
- Hatches, inclusief hun patroon, schaal, hoek en oorsprong
- Layers en Linetypes

Het bestand wordt als AC1032-DXF geschreven, zodat een uit KulmanLab geëxporteerde tekening in andere DXF-geschikte gereedschappen met haar annotatie intact opent in plaats van als kale geometrie aan te komen.

Wat elk ontvangend programma er vervolgens mee doet, verschilt nog steeds — DXF-ondersteuning loopt per gereedschap uiteen, en een ouder programma negeert misschien entiteiten die een nieuwer wel leest. Moet een tekening overal identiek ogen, dan legt [Print Manager](../print-manager/) haar in plaats daarvan vast als PDF of afbeelding.

## Naam van het geëxporteerde bestand

Het gedownloade bestand krijgt de naam van het huidige tekeningbestand (bijv. `myplan.json`). De extensie verandert overeenkomstig het gekozen formaat. Een tekening die nooit een naam kreeg, wordt geëxporteerd als `drawing.dxf` of `drawing.json`.

## Verschil tussen Export Manager en Print Manager

| Functie | Export Manager | Print Manager |
|---------|-----------------|-----------------|
| Uitvoer | Vector bronbestand (.dxf / .json) | Rasterafbeelding (.png / .jpeg / .webp / .pdf) |
| Bewerkbaar in andere tools | Ja (DXF) | Nee |
| Behoudt layers & linetypes | Ja | Nee (plat gerenderd) |
| Legt maatvoeringen & leiders vast | Ja | Ja |

Gebruik **Export Manager** wanneer u een bewerkbaar bestand nodig heeft. Gebruik de [Print Manager](../print-manager/) wanneer u een visuele momentopname nodig heeft.

## Gerelateerde commando's

- [Import](../import/) — open een DXF- of JSON-bestand
- [Print Manager](../print-manager/) — exporteer het canvas als een PNG-, JPEG-, WebP- of PDF-afbeelding
- [File Manager](../file-manager/) — blader door tekeningen die zijn opgeslagen in de browseropslag
