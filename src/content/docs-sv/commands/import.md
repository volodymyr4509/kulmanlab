---
sidebar_position: 1
title: Import — Öppna DXF- eller JSON-filer i KulmanLab CAD
description: Använd Import-kommandot för att öppna DXF- eller KulmanLab JSON-filer i KulmanLab CAD. Stöder linjer, cirklar, bågar, polylinjer, splines, text, dimensioner och ledare.
keywords: [importera DXF-fil, öppna DXF i webbläsaren, importera CAD-fil online, öppna DXF-fil, DXF-visare webbläsare, importera JSON CAD, KulmanLab import, gratis CAD DXF-visare, ladda ritning, DXF till webbläsaren]
---

# Import

**Import**-kommandot laddar en befintlig ritning från ditt lokala filsystem till KulmanLab CAD. Både standardformatet **DXF** och KulmanLabs eget **JSON**-format stöds.

## Så här importerar du en fil

1. Klicka på verktygsfältsknappen **Import** (mappikon) i File-panelen högst upp på skärmen.
2. Webbläsarens filväljare öppnas. Navigera till din ritningsfil och välj den.
3. Ritningen laddas omedelbart in på ritytan. Vyporten anpassas automatiskt efter alla entiteter.

Alternativt kan du dra och släppa en fil direkt på ritytan.

## Filformat som stöds

| Format | Filändelse | När det ska användas |
|--------|-----------|-------------|
| **DXF** | `.dxf` | Ritningar från , FreeCAD, LibreCAD eller andra CAD-verktyg |
| **JSON** *(nativt)* | `.json` | Ritningar som tidigare sparats från KulmanLab CAD — full trohet |

## Vad som importeras från DXF

KulmanLab tolkar följande DXF-entitetstyper:

| Entitetstyp | DXF-kod | Anteckningar |
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

Lagerdefinitioner och linjetypstabeller importeras också från DXF-filen när de finns.

Entiteter som använder DXF-typer som inte stöds hoppas tyst över — resten av ritningen laddas ändå in.

## Filnamn och lagring

När du importerar en fil läggs en tidsstämpel till i filnamnet (till exempel `myplan_May22_14:30:00.dxf`). Detta gör att du kan behålla flera versioner av samma ritning i [Recent Files](./files) utan namnkollisioner. Om filnamnet redan innehåller en tidsstämpel används det som det är.

Ritningen sparas automatiskt i webbläsarens lagring (IndexedDB) efter importen, så den visas i panelen [Files](./files) och överlever sidladdningar.

## Vad som händer med den aktuella ritningen

Import ersätter den aktuella ritytan. Det finns ingen sammanslagning eller tillägg. Om du har osparade ändringar, [exportera](./export) den aktuella ritningen först.

## Vid uppstart

KulmanLab öppnar automatiskt den senast redigerade filen när sidan laddas. Om inga sparade filer finns laddas en standardritning som exempel.

## Felsökning

| Problem | Trolig orsak | Åtgärd |
|---------|-------------|-----|
| Ritytan är tom efter import | DXF-entiteterna använder typer som inte stöds (t.ex. HATCH, INSERT) | Entiteterna hoppades över — leta efter meddelandet "no entities found" i terminalen |
| Import-knappen gör ingenting | Webbläsaren blockerade filväljaren | Klicka på knappen en gång till — vissa webbläsare kräver en ny användargest |
| Dimensioner ser fel ut | DXF från ett verktyg som skriver icke-standardiserad dimensionsgeometri | Exportera på nytt från källprogrammet med en aktuell DXF-version |

## Relaterade kommandon

- [Export](./export) — ladda ner den aktuella ritningen som DXF eller JSON
- [Files](./files) — bläddra bland och återställ ritningar sparade i webbläsaren
- [New File](./new-file) — starta en tom ritning
