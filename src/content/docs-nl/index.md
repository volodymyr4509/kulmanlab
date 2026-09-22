---
title: KulmanLab CAD — Opdrachtreferentie
description: KulmanLab CAD-opdrachtreferentie — volledige gids voor elk teken-, bewerk-, annotatie-, laag-, meet- en bestandscommando in KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, CAD commando's, gratis browser CAD, DXF editor online, tekencommando's, kulmanlab commando's]
group: overview
order: 1
---

# KulmanLab CAD — Opdrachtreferentie

Welkom bij de **KulmanLab CAD**-opdrachtreferentie. [KulmanLab CAD](https://kulmanlab.com) is een gratis browsergebaseerde CAD-tool voor het tekenen, bewerken en exporteren van DXF-bestanden — geen installatie vereist. Gebruik de zijbalk om alle beschikbare commando's per paneel gegroepeerd te doorbladeren.

## Vormen

| Commando | Wat het doet |
|---------|-------------|
| [Line](./commands/line/) | Teken een rechte lijn tussen twee punten |
| [Polyline](./commands/polyline/) | Teken een open pad met meerdere segmenten |
| [Rectangle](./commands/rectangle/) | Teken een aslijn-uitgelijnde rechthoek |
| [Circle](./commands/circle/) | Teken een cirkel op basis van middelpunt en straal |
| [Arc](./commands/arc/) | Teken een boog door drie punten |
| [Ellipse](./commands/ellipse/) | Teken een ellips op basis van middelpunt en twee assen |
| [Hatch](./commands/hatch/) | Vul het gebied rond een aangeklikt punt met een patroon |
| [Text](./commands/text/) | Plaats een tekstlabel op het canvas |
| [Spline CV](./commands/spline-cv/) | Teken een spline door controlepunten te plaatsen |
| [Spline Fit](./commands/spline-fit/) | Teken een spline die door aangeklikte punten loopt |

## Bewerken

| Commando | Wat het doet |
|---------|-------------|
| [Move](./commands/move/) | Verplaats geselecteerde entiteiten naar een nieuwe positie |
| [Copy](./commands/copy/) | Kopieer geselecteerde entiteiten naar een nieuwe positie |
| [Rotate](./commands/rotate/) | Roteer geselecteerde entiteiten rond een basispunt |
| [Mirror](./commands/mirror/) | Spiegel geselecteerde entiteiten over een lijn |
| [Scale](./commands/scale/) | Schaal geselecteerde entiteiten rond een basispunt |
| [Align](./commands/align/) | Verplaats, roteer en schaal optioneel entiteiten met puntparen |
| [Delete](./commands/delete/) | Verwijder geselecteerde entiteiten uit de tekening |
| [Trim](./commands/trim/) | Snijd een lijnsegment bij zijn snijpunten |
| [Extend](./commands/extend/) | Verleng een lijn tot het dichtstbijzijnde snijpunt |
| [Offset](./commands/offset/) | Maak een parallelle kopie van een entiteit op een bepaalde afstand |
| [Fillet](./commands/fillet/) | Rond een hoek tussen twee lijnen, bogen of polylijnsegmenten af met een raakboog |
| [Chamfer](./commands/chamfer/) | Snijd een rechte diagonale hoek tussen twee lijnen of polylijnen |
| [Explode](./commands/explode/) | Splitst een polylijn op in de afzonderlijke lijnen en bogen |
| [Undo](./commands/undo/) | Maak de laatste actie ongedaan |
| [Redo](./commands/redo/) | Herhaal de laatst ongedaan gemaakte actie |
| [Array Grid](./commands/array-grid/) | Herhaal entiteiten in een rechthoekig raster van rijen en kolommen |

## Annotatie

| Commando | Wat het doet |
|---------|-------------|
| [Leader](./commands/leader/) | Teken een multileader-annotatie met pijlpunt en tekst |
| [LeaderAdd](./commands/leader-add/) | Voeg een extra arm toe aan een bestaande multileader |
| [LeaderRemove](./commands/leader-remove/) | Verwijder een arm van een bestaande multileader |
| [Dimension Linear](./commands/dim-linear/) | Voeg een horizontale of verticale maatvoering toe |
| [Dimension Aligned](./commands/dim-aligned/) | Voeg een maatvoering toe uitgelijnd op twee punten |
| [Dimension Continue](./commands/dim-continue/) | Ketting een nieuwe maatvoering aan de vorige |
| [Dimension Radius](./commands/dim-radius/) | Voeg een radiusmaatvoering toe aan een cirkel of boog |
| [Dimension Diameter](./commands/dim-diameter/) | Voeg een diametermaatvoering toe aan een cirkel |
| [Dimension Angular](./commands/dim-angular/) | Voeg een hoekmaatvoering toe aan twee lijnen, een boog of een cirkel |

## Laag

| Commando | Wat het doet |
|---------|-------------|
| [LayerManager](./commands/layer-manager/) | Voeg lagen toe en bewerk voor elke laag bevriezing, vergrendeling, plot, kleur, lijndikte en lijntype |
| [LayerMakeCurrent](./commands/layer-make-current/) | Stel de huidige laag in op de laag van een aangeklikte entiteit |
| [LayerMatch](./commands/layer-match/) | Wijs geselecteerde entiteiten opnieuw toe aan de laag van een brontentiteit |
| [LayerIsolate](./commands/layer-isolate/) | Bevries alle lagen behalve die van de geselecteerde entiteiten |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | Ontdooi alle lagen in één stap |

## Layouts

| Commando | Wat het doet |
|---------|-------------|
| [ViewportRectangle](./commands/viewport-rectangle/) | Maak een viewport in een papierlayout door twee hoeken te kiezen |
| [ViewportCopy](./commands/viewport-copy/) | Dupliceer een viewport naar een nieuwe positie |
| [PageManager](./commands/page-manager/) | Bewerk papierformaat en schaal voor de actieve layout |

## Navigeren

| Commando | Wat het doet |
|---------|-------------|
| [Pan](./commands/pan/) | Klik en sleep om de viewport te verplaatsen |
| [Zoom In](./commands/zoom-in/) | Zoom in op de viewport |
| [Zoom Out](./commands/zoom-out/) | Zoom uit op de viewport |
| [Fit](./commands/fit/) | Pas alle entiteiten in de viewport |

## Meten

| Commando | Wat het doet |
|---------|-------------|
| [Distance](./commands/distance/) | Meet de afstand tussen twee punten |
| [Angle](./commands/angle/) | Meet de hoek tussen drie punten |
| [Area](./commands/area/) | Meet de oppervlakte en omtrek van een veelhoek |

## Lijn

| Commando | Wat het doet |
|---------|-------------|
| [Match Properties](./commands/match-properties/) | Kopieer kleur, laag en andere eigenschappen van de ene entiteit naar andere |
| [Font Manager](./commands/font-manager/) | Blader door, selecteer en upload aangepaste TTF-lettertypen |
| [FontAdd](./commands/font-add/) | Upload een aangepast TTF-lettertype rechtstreeks vanuit de terminal |
| [Hatch Manager](./commands/hatch-manager/) | Blader door de hatch-patroonbibliotheek en upload .pat-bestanden |

## Bestand

| Commando | Wat het doet |
|---------|-------------|
| [Import](./commands/import/) | Open een DXF- of JSON-tekenbestand |
| [New File](./commands/new-file/) | Start een nieuwe lege tekening |
| [File Manager](./commands/file-manager/) | Blader door, hernoem of verwijder tekeningen die zijn opgeslagen in uw browser |
| [Print Manager](./commands/print-manager/) | Exporteer een tekengebied als afbeelding of PDF |
| [Export Manager](./commands/export-manager/) | Download de tekening als DXF of JSON |
| [WipeStorage](./commands/wipestorage/) | Wis alle tekeningen uit de browseropslag |

## Herstel

Als de app bij elke opstart crasht (bijvoorbeeld na het werken met extreem grote coördinaten), kunt u alle lokaal opgeslagen gegevens wissen door `?reset` aan de URL toe te voegen:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Dit verwijdert alles uit de lokale database van de browser en start een nieuwe lege tekening. De parameter `?reset` verwijdert zichzelf automatisch uit de URL. Gebruik dit als laatste redmiddel wanneer [WipeStorage](./commands/wipestorage/) onbereikbaar is omdat de app helemaal niet laadt.

## Hoe commando's werken

Elk commando volgt hetzelfde patroon:

1. **Activeren** — klik op de werkbalkknop of typ de commandonaam in de terminal onderaan het scherm.
2. **Volg de prompt** — de terminal toont welke invoer vervolgens wordt verwacht.
3. **Afronden of annuleren** — de meeste commando's worden automatisch afgerond na de laatste invoer. Druk op **Escape** om op elk moment te annuleren.

## Objecten selecteren

Verschillende bewerkingscommando's (Move, Copy, Rotate, Mirror, Scale, Delete) delen hetzelfde selectiegedrag:

- **Klik** op een entiteit om deze te selecteren of te deselecteren.
- **Sleep naar rechts** (van links naar rechts) voor strikte selectie — alleen entiteiten die volledig binnen het vak vallen, worden geselecteerd.
- **Sleep naar links** (van rechts naar links) voor kruisende selectie — elke entiteit die het vak snijdt, wordt geselecteerd.
- Druk op **Enter** of **Spatie** om de selectie te bevestigen en door te gaan naar de volgende stap.
