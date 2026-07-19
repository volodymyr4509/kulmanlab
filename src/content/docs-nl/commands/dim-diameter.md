---
title: "Dimension Diameter — Volledige Diameters Annoteren"
description: "Het Dimension Diameter-commando plaatst een diametermaatvoering (met het diametersymbool als voorvoegsel) over een boog of cirkel door het middelpunt. Beweeg de cursor om de maatlijn naar elke hoek te draaien. Volledige DXF-roundtrip als DIMENSION-diameterentiteiten."
keywords: [CAD diametermaatvoering, dimdiameter, cirkeldiameter annoteren, boogdiametermaatvoering, diametersymbool CAD, kulmanlab]
group: markup
order: 8
---

# Dimension Diameter

Het `dimdiameter`-commando plaatst een diametermaatvoering op een boog of cirkel. De maatlijn overspant de volledige diameter — lopend door het middelpunt tussen twee diametraal tegenover elkaar liggende boogpunten — en wordt gelabeld met `⌀ <waarde>`. Om alleen de straal van middelpunt tot één rand te annoteren, gebruikt u [Dimension Radius](../dim-radius/).

## Anatomie van een diametermaatvoering

```
  ●──────────── ⌀ 10.00 ────────────●
  (ver boogpunt)              (nabij boogpunt / tekstzijde)
```

- **Maatlijn** — overspant de volledige diameter, met pijlpunten op beide boogsnijpunten.
- **Nabij boogpunt** — het omtrekpunt aan de cursorzijde (waar het tekstlabel staat).
- **Ver boogpunt** — het diametraal tegenoverliggende punt.
- **Label** — `⌀` gevolgd door de diameterwaarde.

## Een diametermaatvoering plaatsen

1. Typ `dimdiameter` in de terminal of klik op de **Dimension Diameter**-werkbalkknop.
2. **Klik op een boog of cirkel** om deze te selecteren.
3. **Beweeg de cursor** om de maatlijn naar de gewenste hoek te draaien.
4. **Klik** om de maatvoering te plaatsen.

Alleen **Arc**- en **Circle**-entiteiten kunnen worden geselecteerd.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Escape` | Annuleren |

## Dimension Diameter versus Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Meet | Volledige diameter (2 × straal) | Straal (middelpunt naar rand) |
| Maatlijn | Rand → rand door middelpunt | Middelpunt → rand |
| Labelvoorvoegsel | `⌀` | `R` |
| Pijlpunten | Twee (op beide boogpunten) | Eén (op boogpunt) |
| Ideaal voor | Volledige cirkelvormige gat- of asmaatvoering | Eén kant van een gebogen element annoteren |

## Het label bewerken — simple-modus

**Dubbelklik** op een geplaatste diametermaatvoering om de tekstverwerker in **simple**-modus te openen. De editor wordt vooraf gevuld met de huidige gerenderde waarde (bijv. `⌀ 10.00`), zodat u de cursor kunt positioneren en deze direct kunt bewerken.

| Functie | Gedrag |
|---------|-----------|
| Vet / Cursief / Lettertype / Hoogte | Geldt meteen voor het **hele** label |
| Opmaak per teken | Niet ondersteund |
| `Enter` | Bevestigt de waarde en sluit de editor |
| Meerdere regels | Niet ondersteund |

Zie [Tekstverwerker — simple-modus](../../interface/text-editor/#simple-mode) voor de volledige referentie.

## DXF — DIMENSION-diameterentiteit

Diametermaatvoeringen worden opgeslagen als `DIMENSION`-entiteiten met diameter-type geometrie, waarbij zowel de boogpuntposities als de gemeten diameterwaarde (2 × straal) worden opgeslagen. Alle eigenschappen blijven zonder verlies behouden bij de roundtrip.
