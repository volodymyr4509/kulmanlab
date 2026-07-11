---
title: "Delete-kommandot — Ta bort entiteter från ritningen i KulmanLab CAD"
description: "Delete-kommandot tar bort valda entiteter permanent (kan ångras). Förvalda entiteter tas bort direkt utan bekräftelsesteg. Delete-tangenten fungerar som en global genväg även utan att aktivera kommandot. Stöder enkelklick och områdesval."
keywords: [CAD delete-kommando, ta bort entiteter CAD, radera objekt CAD, delete-tangent CAD, ångra borttagning CAD, kulmanlab]
group: edit
order: 7
---

# Delete

`delete`-kommandot tar bort valda entiteter från ritningen. Borttagningar registreras i [Undo](../undo/)-historiken och kan återställas upp till 20 steg. Det finns ingen separat "bekräfta borttagning"-dialog — bekräftelsen sker med ett enda tangenttryck.

## Två sätt att ta bort

**Förval, sedan borttagning** — den snabbaste vägen:

1. Välj en eller flera entiteter på ritytan.
2. Skriv `delete` i terminalen, klicka på **Delete**-knappen i verktygsfältet, **eller tryck direkt på `Delete`-tangenten**.

Entiteter tas bort omedelbart — inget ytterligare bekräftelsesteg.

**Aktivera, välj sedan**:

1. Skriv `delete` eller klicka på verktygsfältsknappen (utan att något är valt).
2. **Välj objekt** — klicka för att växla, eller dra för att välja med ett område.
3. Tryck **Enter**, **Space** eller **Delete** för att bekräfta och ta bort de valda entiteterna.

## Genväg med Delete-tangenten

`Delete`-tangenten på tangentbordet fungerar som en **global genväg** — om några entiteter för tillfället är valda, tar ett tryck på den bort dem omedelbart, även utan att öppna Delete-kommandot i terminalen. Detta är det snabbaste enstegsflödet för borttagning:

```
Klicka på entitet → tryck på Delete-tangenten → klart
```

## Val under kommandot

| Metod | Beteende |
|--------|-----------|
| **Klick** | Växlar entiteten under markören in/ur valet |
| **Dra höger** (strikt) | Väljer endast entiteter som ligger helt inom rutan |
| **Dra vänster** (korsande) | Väljer entiteter som skär rutans gräns |
| **Enter** / **Space** / **Delete** | Bekräftar och tar bort valda entiteter |

## Återställa borttagna entiteter

Borttagningar kan ångras med [Undo](../undo/)-kommandot (skriv `undo` eller använd knappen i verktygsfältet). Upp till **20 steg** kan återställas per fil, och historiken bevaras mellan sidladdningar. Om du har överskridit 20 borttagningar utan att spara kan tidigare borttagningar inte återställas.

## Entiteter som stöds

Delete fungerar på alla entitetstyper — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader och alla övriga.
