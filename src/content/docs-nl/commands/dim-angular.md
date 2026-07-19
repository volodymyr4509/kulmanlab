---
title: Dimension Angular — Hoeken Meten Tussen Lijnen, Bogen, Cirkels
description: Het DimensionAngular-commando plaatst een hoekmaatvoeringsannotatie op lijnen, bogen of cirkels. Ondersteunt hoekmodi voor twee lijnen, boogspanning en cirkelsector.
keywords: [hoekmaatvoering CAD, angle dimension, hoek meten tussen lijnen, DimensionAngular, boogmaatvoering, hoekannotatie, CAD hoekmarkering, kulmanlab hoekmaatvoering]
group: markup
order: 9
---

# Dimension Angular

Het `DimensionAngular`-commando plaatst een **hoekmaatvoerings**boogannotatie op de tekening. Het meet en labelt de hoek tussen twee lijnen, de spanning van een boog, of een sector van een cirkel.

## Activeren

Klik op de **Dimension Angular**-werkbalkknop in het Markering-paneel, of typ `DimensionAngular` in de terminal.

## Drie invoermodi

De eerste klik bepaalt welke modus wordt gebruikt:

### Twee lijnen

1. **Klik op de eerste lijn.** De cursorpositie bepaalt welke kant van de lijn wordt gebruikt.
2. **Klik op de tweede lijn.** De twee lijnen moeten elkaar snijden (het snijpunt wordt automatisch berekend; het hoeft niet zichtbaar te zijn op het scherm).
3. **Klik om** de maatvoeringsboog te plaatsen. Beweeg de cursor om de straal en welke hoeksector wordt gelabeld te kiezen — de annotatie volgt de cursor naar welke kant van het hoekpunt u zich ook bevindt.

Parallelle lijnen kunnen geen hoekmaatvoering vormen; het commando negeert de tweede klik als de lijnen elkaar niet snijden.

### Boog

1. **Klik op een boog.** De maatvoering wordt direct gemaakt van de beginhoek tot de eindhoek van de boog, met het middelpunt van de boog als hoekpunt.
2. **Klik om** de maatvoeringsboog op de gewenste straal te plaatsen.

### Cirkel

1. **Klik op een cirkel.** Het eerste hoekeindpunt snapt naar het dichtstbijzijnde punt op de cirkel.
2. **Klik op een tweede punt** op de cirkel om het tweede hoekeindpunt te bepalen.
3. **Klik om** de maatvoeringsboog te plaatsen.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Escape` | Annuleren en terug naar de eerste keuze |

## Gedragsdetails

- De maatvoeringsboog wordt altijd getekend aan de kant van het hoekpunt waar u deze plaatst — beweeg de cursor over het hoekpunt om naar de aanvullende hoek te wisselen.
- De gemeten hoek wordt in graden getoond en wordt live bijgewerkt terwijl u de cursor tijdens het plaatsen beweegt.
- De resulterende annotatie is een volledige `DimensionAngular`-entiteit die op de huidige laag wordt opgeslagen. De weergave-eigenschappen (pijlgrootte, teksthoogte, hulplijnlengte) kunnen worden aangepast in het Eigenschappenpaneel.
- Hoekmaatvoeringen worden opgenomen in JSON-export maar worden niet ondersteund door de DXF-exporter.

## Het label bewerken — simple-modus

**Dubbelklik** op een geplaatste hoekmaatvoering om de tekstverwerker in **simple**-modus te openen. De editor wordt vooraf gevuld met de huidige gerenderde waarde, zodat u de cursor kunt positioneren en deze direct kunt bewerken.

| Functie | Gedrag |
|---------|-----------|
| Vet / Cursief / Lettertype / Hoogte | Geldt meteen voor het **hele** label |
| Opmaak per teken | Niet ondersteund |
| `Enter` | Bevestigt de waarde en sluit de editor |
| Meerdere regels | Niet ondersteund |

Zie [Tekstverwerker — simple-modus](../../interface/text-editor/#simple-mode) voor de volledige referentie.

## Gerelateerde commando's

- [Dimension Linear](../dim-linear/) — horizontale of verticale maatvoering
- [Dimension Aligned](../dim-aligned/) — maatvoering uitgelijnd op twee punten
- [Dimension Radius](../dim-radius/) — radiusmaatvoering voor bogen en cirkels
- [Dimension Diameter](../dim-diameter/) — diametermaatvoering voor cirkels
