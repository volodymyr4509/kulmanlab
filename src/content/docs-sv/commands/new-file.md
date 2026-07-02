---
sidebar_position: 2
title: New File — Starta en tom ritning i KulmanLab CAD
description: New File-kommandot rensar ritytan och öppnar en ny tom ritning. Ett tidsstämplat filnamn genereras automatiskt och sparas i webbläsarens lagring.
keywords: [ny CAD-fil, ny ritning, tom rityta CAD, skapa ny ritning online, starta ny DXF, KulmanLab ny fil, återställ rityta, rensa ritning]
---

# New File

**New File**-kommandot rensar ritytan och startar en ny tom ritning. Ett unikt filnamn med tidsstämpel genereras automatiskt.

## Så här skapar du en ny fil

Klicka på verktygsfältsknappen **New File** (ikon med ny sida) i File-panelen. Ritytan rensas omedelbart — inga uppmaningar eller bekräftelsedialoger.

## Vad den nya filen innehåller

En nyskapad fil börjar med:

- **Inga entiteter** på ritytan.
- **Ett standardlager** med namnet `0`, vit färg och linjetypen `Continuous`.
- Ett **genererat filnamn** i formatet `kulman-Mon01_HH:MM:SS.dxf` (t.ex. `kulman-May22_14:30:00.dxf`).

Filen sparas automatiskt i webbläsarens lagring och visas i [Recent Files](./files).

## Varning — osparat arbete kasseras

Att klicka på **New File** kasserar alla entiteter på den aktuella ritytan utan varning. Om du vill behålla den aktuella ritningen, [exportera](./export) den först.

## När du ska använda New File jämfört med Import

| Situation | Rekommenderad åtgärd |
|-----------|-------------------|
| Starta en ritning från grunden | **New File** |
| Öppna en befintlig DXF- eller JSON-fil | [Import](./import) |
| Kopiera en ritning för att arbeta på en variant | [Exportera](./export) den aktuella filen, importera sedan kopian med [Import](./import) |

## Relaterade kommandon

- [Import](./import) — öppna en befintlig DXF- eller JSON-ritning
- [Export](./export) — ladda ner ritningen innan du börjar om
- [Files](./files) — återställ en tidigare ritning från webbläsarens lagring
