---
title: "ObjectSnapSettings-opdracht — Alle instellingen van de besturingsbalk"
description: "De opdracht ObjectSnapSettings opent één venster met alle instellingen van de besturingsbalk — snappen, raaklijnsnap, hoektracering, pinnen, getypte invoer, lasso en weergave — elk naast de lijst uitgelegd met een kleine tekening."
keywords: ["objectsnap-instellingen CAD", "raaklijnsnap CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

De opdracht `Objectsnapinstellingen` opent één venster met alle instellingen van de besturingsbalk. Elke instelling wordt naast de lijst uitgelegd, met een kleine tekening. Open het met de tandwielknop in de besturingsbalk of typ `Objectsnapinstellingen`. Een instelling hier wijzigen is hetzelfde als de knop ervan in de balk omzetten.

## De instellingen

### Waar de cursor landt

| Besturingsbalk | Wat het doet |
|---|---|
| `Snap` | De cursor springt naar het dichtstbijzijnde rasterpunt, zodat gekozen punten op ronde coördinaten vallen. Een objectsnap bij de cursor gaat nog steeds voor. De rasterafstand volgt de zoom. |
| `TANG` | Terwijl een lijn vanaf een punt wordt getekend, breng je de cursor naar waar die net een cirkel, boog, ellips of spline raakt en hij snapt daar. Werkt in Lijn, Polylijn en andere opdrachten, en bij het slepen van het eind van een lijn of polylijn. |

### Hulplijnen tijdens tekenen

| Besturingsbalk | Wat het doet |
|---|---|
| `ANGL` | Komt de cursor dicht bij een van deze hoeken vanaf het laatste punt, dan vergrendelt hij in die richting, getoond als een gestippelde straal. Typ terwijl hij vergrendeld is een lengte en druk op Enter om het punt op die afstand te zetten. |
| `Pins` | Laat de cursor even op een snappunt rusten om het vast te pinnen. Een vastgepind punt geeft horizontale en verticale hulplijnen; de cursor snapt erop en op hun kruispunten. |
| `Dist` | Het laatst vastgepinde punt dient als beginpunt: vergrendelt de cursor op een hoek vanaf de pin, typ dan een lengte en druk op Enter om het punt op die afstand te zetten. Vereist vectorpins. |

### Invoer en selectie

| Besturingsbalk | Wat het doet |
|---|---|
| `Rel` | Een getypt X,Y-punt wordt gemeten vanaf het laatst gekozen punt, alsof het met @ begint. Backspace haalt de @ weg voor een punt in de coördinaten van de tekening. Uit: typ zelf @ voor een verschuiving. |
| `Lasso` | Druk en sleep op lege ruimte om een vrije lus te tekenen rond wat je wilt, in plaats van een rechthoek. Wat de lus omvat wordt geselecteerd. |

### Weergave

| Besturingsbalk | Wat het doet |
|---|---|
| `Grid` | Toont het achtergrondraster. De afstand verandert bij het zoomen. Uitzetten stopt het snappen op het raster niet. |
| `LWT` | Tekent lijnen met hun lijndikte, zodat zwaardere lijnen dikker lijken. Uit wordt elke lijn dun getekend, wat een drukke tekening leesbaarder kan maken. |

**ANGL** heeft een eigen rij voor de stap: kies 10°, 20°, 30°, 45° of 90°, of kies **Aangepast** en typ een willekeurige hoek van 1° tot 180°.

Raaklijnsnap, relatieve invoer en de lasso staan standaard uit. **Standaard herstellen** zet elke instelling terug naar de beginstand.

---

*Gerelateerd: [Vector Pins](../../interface/vector-pins/), [Afstandsvolging](../../interface/distance-tracking/), [Raster & Snap](../../interface/grid-snap/), [Coördinaatinvoer](../../interface/coordinate-entry/)*
