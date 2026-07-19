---
title: Import — DXF- of JSON-bestanden Openen in KulmanLab CAD
description: Gebruik het Import-commando om DXF- of KulmanLab JSON-bestanden te openen in KulmanLab CAD. Ondersteunt lijnen, cirkels, bogen, polylijnen, splines, tekst, maatvoering en leaders.
keywords: [DXF-bestand importeren, DXF openen in browser, CAD-bestand online importeren, DXF-bestand openen, DXF-viewer browser, JSON CAD importeren, KulmanLab import, gratis CAD DXF-viewer, tekening laden, DXF naar browser]
group: file
order: 1
---

# Import

Het **Import**-commando laadt een bestaande tekening vanaf uw lokale bestandssysteem in KulmanLab CAD. Zowel het standaard **DXF**-formaat als KulmanLab's eigen **JSON**-formaat worden ondersteund.

## Een bestand importeren

1. Klik op de werkbalkknop **Import** (mapicoon) in het Bestand-paneel bovenaan het scherm.
2. De bestandskiezer van uw browser opent. Navigeer naar uw tekenbestand en selecteer het.
3. De tekening laadt onmiddellijk op het canvas. De viewport past zich automatisch aan alle entiteiten aan.

U kunt ook een bestand rechtstreeks naar het canvas slepen en neerzetten.

## Ondersteunde bestandsformaten

| Formaat | Extensie | Wanneer te gebruiken |
|--------|-----------|-------------|
| **DXF** | `.dxf` | Tekeningen uit FreeCAD, LibreCAD of andere CAD-tools |
| **JSON** *(native)* | `.json` | Tekeningen eerder opgeslagen vanuit KulmanLab CAD — volledige getrouwheid |

## Wat wordt geïmporteerd uit DXF

KulmanLab verwerkt de volgende DXF-entiteitstypen:

| Entiteitstype | DXF-code | Opmerkingen |
|-------------|----------|-------|
| Line | `LINE` | |
| Circle | `CIRCLE` | |
| Arc | `ARC` | |
| Ellipse | `ELLIPSE` | |
| Polyline | `LWPOLYLINE` | |
| Spline | `SPLINE` | |
| Text | `TEXT`, `MTEXT` | |
| Dimension | `DIMENSION` | |
| Multileader | `MULTILEADER` | |

Laagdefinities en lijntypetabellen worden ook geïmporteerd uit het DXF-bestand, indien aanwezig.

Entiteiten die niet-ondersteunde DXF-typen gebruiken, worden stilzwijgend overgeslagen — de rest van de tekening laadt nog steeds.

## Bestandsnaamgeving en opslag

Bij het importeren van een bestand wordt een tijdstempel toegevoegd aan de bestandsnaam (bijvoorbeeld `myplan_May22_14:30:00.dxf`). Zo kunt u meerdere versies van dezelfde tekening bewaren in [Recente bestanden](../files/) zonder naamconflicten. Als de bestandsnaam al een tijdstempel bevat, wordt deze ongewijzigd gebruikt.

De tekening wordt na het importeren automatisch opgeslagen in de browseropslag (IndexedDB), zodat deze verschijnt in het paneel [Files](../files/) en paginaherladingen overleeft.

## Wat er met de huidige tekening gebeurt

Importeren vervangt het huidige canvas. Er is geen samenvoegen of toevoegen. Als u niet-opgeslagen wijzigingen heeft, [exporteer](../export/) dan eerst de huidige tekening.

## Bij het opstarten

KulmanLab opent automatisch het meest recent bewerkte bestand opnieuw wanneer de pagina laadt. Als er geen opgeslagen bestanden bestaan, wordt een standaard voorbeeldtekening geladen.

## Probleemoplossing

| Probleem | Waarschijnlijke oorzaak | Oplossing |
|---------|-------------|-----|
| Canvas is leeg na import | DXF-entiteiten gebruiken niet-ondersteunde typen (bijv. HATCH, INSERT) | De entiteiten zijn overgeslagen — controleer op het bericht "no entities found" in de terminal |
| Import-knop doet niets | Browser heeft de bestandskiezer geblokkeerd | Klik nogmaals op de knop; sommige browsers vereisen een nieuwe gebruikersactie |
| Maatvoering ziet er verkeerd uit | DXF van een tool die niet-standaard maatvoeringsgeometrie schrijft | Exporteer opnieuw vanuit de bronapplicatie met een actuele DXF-versie |

## Gerelateerde commando's

- [Export](../export/) — download de huidige tekening als DXF of JSON
- [Files](../files/) — blader door en herstel tekeningen die in de browser zijn opgeslagen
- [New File](../new-file/) — start een lege tekening
