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

Lagdefinisjoner og linetype-tabeller importeres også fra DXF-filen når de finnes.

Entiteter som bruker DXF-typer som ikke støttes, hoppes stille over — resten av tegningen lastes fortsatt inn.

## Filnavngivning og lagring

Når du importerer en fil, legges et tidsstempel til filnavnet (for eksempel `myplan_May22_14:30:00.dxf`). Dette lar deg beholde flere versjoner av samme tegning i [Nylige filer](../files/) uten navnekollisjoner. Hvis filnavnet allerede inneholder et tidsstempel, brukes det som det er.

Tegningen lagres automatisk til nettleserlagring (IndexedDB) etter import, slik at den vises i [Files](../files/)-panelet og overlever sideinnlastinger.

## Hva som skjer med gjeldende tegning

Import erstatter gjeldende lerret. Det finnes ingen sammenslåing eller tillegg. Hvis du har ulagrede endringer, [eksporter](../export/) gjeldende tegning først.

## Ved oppstart

KulmanLab åpner automatisk den sist redigerte filen på nytt når siden lastes inn. Hvis ingen lagrede filer finnes, lastes en standard eksempeltegning inn.

## Feilsøking

| Problem | Sannsynlig årsak | Løsning |
|---------|-------------|-----|
| Lerretet er tomt etter import | DXF-entiteter bruker typer som ikke støttes (f.eks. HATCH, INSERT) | Entitetene ble hoppet over — se etter meldingen "no entities found" i terminalen |
| Import-knappen gjør ingenting | Nettleseren blokkerte filvelgeren | Klikk knappen én gang til; noen nettlesere krever en ny brukerhandling |
| Mål ser feil ut | DXF fra et verktøy som skriver ikke-standard mål-geometri | Eksporter på nytt fra kildeapplikasjonen med en nyere DXF-versjon |

## Relaterte kommandoer

- [Export](../export/) — last ned gjeldende tegning som DXF eller JSON
- [Files](../files/) — bla gjennom og gjenopprett tegninger lagret i nettleseren
- [New File](../new-file/) — start en tom tegning
