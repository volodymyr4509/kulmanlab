---
title: Import — Åpne DXF- eller JSON-filer i KulmanLab CAD
description: Bruk Import-kommandoen til å åpne DXF- eller KulmanLab JSON-filer i KulmanLab CAD. Støtter linjer, sirkler, buer, polylinjer, splines, tekst, mål og ledere.
keywords: [importer DXF-fil, åpne DXF i nettleser, importer CAD-fil online, åpne DXF-fil, DXF-visning nettleser, importer JSON CAD, KulmanLab import, gratis CAD DXF-visning, last inn tegning, DXF til nettleser]
group: file
order: 1
---

# Import

Kommandoen **Import** laster en eksisterende tegning fra det lokale filsystemet ditt inn i KulmanLab CAD. Både standard **DXF**-formatet og KulmanLabs eget **JSON**-format støttes.

## Slik importerer du en fil

1. Klikk på **Import**-knappen (mappeikon) i File-panelet øverst på skjermen.
2. Nettleserens filvelger åpnes. Naviger til tegnefilen din og velg den.
3. Tegningen lastes inn på lerretet umiddelbart. Viewporten tilpasser alle entiteter automatisk.

Alternativt kan du dra og slippe en fil direkte på lerretet.

## Støttede filformater

| Format | Filtype | Når du bør bruke det |
|--------|-----------|-------------|
| **DXF** | `.dxf` | Tegninger fra FreeCAD, LibreCAD eller andre CAD-verktøy |
| **JSON** *(native)* | `.json` | Tegninger tidligere lagret fra KulmanLab CAD — full nøyaktighet |

## Hva som importeres fra DXF

KulmanLab tolker følgende DXF-entitetstyper:

| Entitetstype | DXF-kode | Merknader |
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
| Hatch | `HATCH` | Mønsterets navn, skalering og vinkel leses; et navn som ikke finnes i mønsterbiblioteket ditt, faller tilbake til ANSI31. Se [Hatch](../hatch/) |

Lagdefinisjoner og linetype-tabeller importeres også fra DXF-filen når de finnes.

Entiteter som bruker DXF-typer som ikke støttes, hoppes stille over — resten av tegningen lastes fortsatt inn.

## Filnavngivning og lagring

Den importerte filen beholder sitt opprinnelige navn. Hvis navnet allerede er i bruk av en annen lagret tegning, legges det automatisk til et Finder/Explorer-stil suffiks (`myplan (2)`, `myplan (3)`, …) slik at den eksisterende oppføringen aldri overskrives. Du kan omdøpe filen i etterkant fra [File Manager](../file-manager/#omdøpe-en-fil).

Tegningen lagres automatisk til nettleserlagring (IndexedDB) etter import, slik at den vises i [File Manager](../file-manager/)-panelet og overlever sideinnlastinger.

## Hva som skjer med gjeldende tegning

Import erstatter gjeldende lerret. Det finnes ingen sammenslåing eller tillegg. Hvis du har ulagrede endringer, [eksporter](../export-manager/) gjeldende tegning først.

## Ved oppstart

KulmanLab åpner automatisk den sist redigerte filen på nytt når siden lastes inn. Hvis ingen lagrede filer finnes, lastes en standard eksempeltegning inn.

## Feilsøking

| Problem | Sannsynlig årsak | Løsning |
|---------|-------------|-----|
| Lerretet er tomt etter import | DXF-entiteter bruker typer som ikke støttes (f.eks. INSERT) | Entitetene ble hoppet over — terminalen lister hver hoppet over type med antall, for eksempel `Could not read INSERT: 12`. En fil som slett ikke er en gyldig tegning, melder `Could not read <file>: not a valid drawing file` |
| Import-knappen gjør ingenting | Nettleseren blokkerte filvelgeren | Klikk knappen én gang til; noen nettlesere krever en ny brukerhandling |
| Mål ser feil ut | DXF fra et verktøy som skriver ikke-standard mål-geometri | Eksporter på nytt fra kildeapplikasjonen med en nyere DXF-versjon |

## Relaterte kommandoer

- [Export Manager](../export-manager/) — last ned gjeldende tegning som DXF eller JSON
- [File Manager](../file-manager/) — bla gjennom og gjenopprett tegninger lagret i nettleseren
- [New File](../new-file/) — start en tom tegning
