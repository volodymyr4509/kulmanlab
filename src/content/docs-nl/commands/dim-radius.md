---
title: Dimension Radius — Boog- en Cirkelstralen Annoteren
description: Het Dimension Radius-commando plaatst een radiale maatvoering met R-voorvoegsel op een boog of cirkel. Klik op de entiteit en beweeg vervolgens de cursor om de maatlijn van middelpunt naar omtrek te oriënteren. Volledige DXF-roundtrip als DIMENSION-radiusentiteiten.
keywords: [CAD radiusmaatvoering, dimradius, cirkelradius annoteren, boogradiusmaatvoering, R-voorvoegsel maatvoering, kulmanlab]
group: markup
order: 7
---

# Dimension Radius

Het `dimradius`-commando plaatst een radiusmaatvoering op een boog of cirkel. De maatlijn loopt van het middelpunt naar een punt op de omtrek in de richting van de cursor, gelabeld met `R <waarde>`. Om in plaats daarvan een volledige diameter te maten, gebruikt u [Dimension Diameter](../dim-diameter/).

## Anatomie van een radiusmaatvoering

```
  ● (middelpunt)
   \
    \  R 5.00
     \
      ●────── tekst (cursorzijde)
   (boogpunt)
```

- **Maatlijn** — van middelpunt door een boogpunt richting de cursor, met een pijlpunt op de boog.
- **Label** — `R` gevolgd door de radiuswaarde.

## Een radiusmaatvoering plaatsen

1. Typ `dimradius` in de terminal of klik op de **Dimension Radius**-werkbalkknop.
2. **Klik op een boog of cirkel** om deze te selecteren.
3. **Beweeg de cursor** om de maatlijn te oriënteren — het boogpunt volgt de cursorrichting vanaf het middelpunt.
4. **Klik** om de maatvoering te plaatsen.

Alleen **Arc**- en **Circle**-entiteiten kunnen worden geselecteerd. Klikken op een ander entiteitstype doet niets.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Escape` | Annuleren |

## Dimension Radius versus Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Meet | Straal (middelpunt naar rand) | Diameter (rand tot rand door middelpunt) |
| Maatlijn | Middelpunt → boogpunt | Boogpunt → boogpunt (door middelpunt) |
| Labelvoorvoegsel | `R` | `⌀` |
| Pijlpunten | Eén (op boogpunt) | Twee (op beide boogpunten) |
| Ideaal voor | Eén kant van een gebogen element annoteren | Volledige cirkelvormige maatvoering annoteren |

## Het label bewerken — simple-modus

**Dubbelklik** op een geplaatste radiusmaatvoering om de tekstverwerker in **simple**-modus te openen. De editor wordt vooraf gevuld met de huidige gerenderde waarde (bijv. `R 5.00`), zodat u de cursor kunt positioneren en deze direct kunt bewerken.

| Functie | Gedrag |
|---------|-----------|
| Vet / Cursief / Lettertype / Hoogte | Geldt meteen voor het **hele** label |
| Opmaak per teken | Niet ondersteund |
| `Enter` | Bevestigt de waarde en sluit de editor |
| Meerdere regels | Niet ondersteund |

Zie [Tekstverwerker — simple-modus](../../interface/text-editor/#simple-mode) voor de volledige referentie.

## DXF — DIMENSION-radiusentiteit

Radiusmaatvoeringen worden opgeslagen als `DIMENSION`-entiteiten met radius-type geometrie, waarbij de middelpuntcoördinaten, de boogpuntpositie en de gemeten radiuswaarde worden opgeslagen. Alle eigenschappen blijven zonder verlies behouden bij de roundtrip.
