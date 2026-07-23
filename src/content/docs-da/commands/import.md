---
title: Import — Åbn DXF- eller JSON-filer i KulmanLab CAD
description: Brug Import-kommandoen til at åbne DXF- eller KulmanLab JSON-filer i KulmanLab CAD. Understøtter linjer, cirkler, buer, polylinjer, splines, tekst, mål og ledere.
keywords: [importér DXF-fil, åbn DXF i browser, importér CAD-fil online, åbn DXF-fil, DXF-visning browser, importér JSON CAD, KulmanLab import, gratis CAD DXF-visning, indlæs tegning, DXF til browser]
group: file
order: 1
---

# Import

Kommandoen **Import** indlæser en eksisterende tegning fra dit lokale filsystem i KulmanLab CAD. Både standard **DXF**-formatet og KulmanLabs eget **JSON**-format understøttes.

## Sådan importerer du en fil

1. Klik på **Import**-knappen (mappeikon) i File-panelet øverst på skærmen.
2. Din browsers filvælger åbnes. Navigér til din tegnefil og vælg den.
3. Tegningen indlæses på lærredet med det samme. Viewporten tilpasser alle entiteter automatisk.

Alternativt kan du trække og slippe en fil direkte på lærredet.

## Understøttede filformater

| Format | Filtype | Hvornår du bør bruge det |
|--------|-----------|-------------|
| **DXF** | `.dxf` | Tegninger fra FreeCAD, LibreCAD eller andre CAD-værktøjer |
| **JSON** *(native)* | `.json` | Tegninger tidligere gemt fra KulmanLab CAD — fuld nøjagtighed |

## Hvad der importeres fra DXF

KulmanLab fortolker følgende DXF-entitetstyper:

| Entitetstype | DXF-kode | Bemærkninger |
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

Lagdefinitioner og linetype-tabeller importeres også fra DXF-filen, når de findes.

Entiteter der bruger DXF-typer der ikke understøttes, springes stille over — resten af tegningen indlæses stadig.

## Filnavngivning og lagring

Når du importerer en fil, tilføjes et tidsstempel til filnavnet (for eksempel `myplan_May22_14:30:00.dxf`). Dette lader dig beholde flere versioner af samme tegning i [Nylige filer](../files/) uden navnekollisioner. Hvis filnavnet allerede indeholder et tidsstempel, bruges det som det er.

Tegningen gemmes automatisk i browserlagring (IndexedDB) efter import, så den vises i [Files](../files/)-panelet og overlever sideindlæsninger.

## Hvad der sker med den aktuelle tegning

Import erstatter det aktuelle lærred. Der er ingen sammenlægning eller tilføjelse. Hvis du har ugemte ændringer, [eksportér](../export/) den aktuelle tegning først.

## Ved opstart

KulmanLab genåbner automatisk den senest redigerede fil, når siden indlæses. Hvis ingen gemte filer findes, indlæses en standard eksempeltegning.

## Fejlfinding

| Problem | Sandsynlig årsag | Løsning |
|---------|-------------|-----|
| Lærredet er tomt efter import | DXF-entiteter bruger typer der ikke understøttes (f.eks. HATCH, INSERT) | Entiteterne blev sprunget over — se efter meddelelsen "no entities found" i terminalen |
| Import-knappen gør ingenting | Browseren blokerede filvælgeren | Klik knappen én gang til; nogle browsere kræver en ny brugerhandling |
| Mål ser forkerte ud | DXF fra et værktøj der skriver ikke-standard mål-geometri | Genexportér fra kildeapplikationen med en nyere DXF-version |

## Relaterede kommandoer

- [Export](../export/) — download den aktuelle tegning som DXF eller JSON
- [Files](../files/) — gennemse og gendan tegninger gemt i browseren
- [New File](../new-file/) — start en tom tegning
