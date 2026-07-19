---
title: Spline CV-commando — Teken B-splines met controlepunten
description: Het Spline CV-commando tekent een kubische B-spline door controlepunten te plaatsen. De curve wordt aangetrokken naar de punten maar loopt alleen door het eerste en laatste (vaste knopen). Elke CV-grip kan versleept worden om de curve na plaatsing aan te passen. Volledig DXF-behoud als SPLINE-entiteiten.
keywords: [CAD spline commando, B-spline controlepunten, vaste spline CAD, spline tekenen CAD, SPLINE DXF entiteit, spline grip-bewerking, kulmanlab]
group: shapes
order: 8
---

# Spline CV

Het `splinecv`-commando tekent een **kubische B-spline** door controlepunten (CV's) te plaatsen. De resulterende curve wordt aangetrokken naar elk controlepunt maar loopt er niet doorheen — behalve bij het allereerste en laatste punt, waar **vaste knopen** de curve exact verankeren. Dit geeft u intuïtieve vormcontrole: trek een punt om de curve ernaartoe te duwen zonder te forceren dat de curve elk punt raakt.

## Een spline tekenen met controlepunten

1. Typ `splinecv` in de terminal of klik op de **Spline CV**-werkbalkknop.
2. **Klik om controlepunten te plaatsen** — elke klik voegt een punt toe. Of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
3. Druk op **Enter** om af te ronden (minimaal 2 punten vereist).

```
  CV ●         ● CV
      \       /
       \     /    ← curve getrokken naar CV's
        \   /         maar loopt er niet doorheen
  CV ●   ●   ● CV (start/eind: curve raakt hier)
```

De live preview wordt bijgewerkt terwijl u de cursor beweegt na elk punt, en toont hoe de spline eruit zal zien met het volgende punt op de cursorpositie. Druk op **Escape** om alle geplaatste punten te verwijderen en af te sluiten.

## Coördinaatinvoer

In plaats van klikken kunt u een exacte positie typen voor elk controlepunt:

1. Typ de X-waarde.
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]`.
3. Typ de Y-waarde.
4. Druk op **Enter** om het punt te plaatsen.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-coördinaatinvoer |
| `,` | Vergrendel X en ga naar Y-invoer |
| `Backspace` | Verwijder laatst getypte teken |
| `Enter` | Bevestig getypte coördinaat, of rond de spline af als er geen invoer actief is en er ≥ 2 punten bestaan |
| `Escape` | Verwijder alle punten en sluit af |

## Grip-bewerking — vorm aanpassen via controlepunten

Een geselecteerde CV-spline toont één grip per controlepunt:

| Grip | Positie | Wat het doet |
|------|----------|--------------|
| **Controlepunt** | Bij elke CV-positie | Slepen verplaatst dat controlepunt — de curve past zich aan naar de nieuwe positie |

Er is geen "hele spline verplaatsen"-grip. Gebruik het [Move](../move/)-commando om de hele spline te verplaatsen.

## CV-splines selecteren

| Methode | Gedrag |
|--------|-----------|
| **Klik** | Selecteert als de klik dicht bij een punt op de curve valt |
| **Slepen naar rechts** (strikt) | Alle steekpunten langs de curve moeten binnen het selectievak liggen |
| **Slepen naar links** (kruisend) | Elk deel van de curve dat de vakgrens snijdt, selecteert de curve |

## Ondersteunde bewerkingscommando's

| Commando | Wat er met de spline gebeurt |
|---------|---------------------------|
| [Move](../move/) | Verplaatst alle controlepunten met dezelfde verschuiving |
| [Copy](../copy/) | Maakt een identieke spline op een nieuwe positie |
| [Rotate](../rotate/) | Roteert alle controlepunten rond het gekozen basispunt |
| [Mirror](../mirror/) | Spiegelt alle controlepunten over de spiegelas |
| [Scale](../scale/) | Schaalt alle controlepunten uniform vanaf het basispunt |
| [Delete](../delete/) | Verwijdert de spline |

Splines ondersteunen geen **Offset**, **Trim** of **Extend**.

## Eigenschappen

**Algemeen**

| Eigenschap | Standaard | Betekenis |
|----------|---------|---------|
| Color | 256 (ByLayer) | ACI-kleurindex |
| Layer | `0` | Laagtoewijzing |
| Linetype | ByLayer | Naam van het lijntypepatroon |
| Linetype Scale | 1 | Schaalfactor op het lijntypepatroon |
| Thickness | 0 | Extrusiedikte |

**Geometrie**

| Eigenschap | Betekenis |
|----------|---------|
| Degree | Polynoomgraad — altijd 3 (kubisch) |
| Control Vertices | Coördinaten van alle controlepunten |
| Fit Points | Leeg voor CV-splines; alleen gevuld voor fit-point-splines |

## Spline CV vs Spline Fit — welke te gebruiken

| | Spline CV | Spline Fit |
|---|-----------|------------|
| Curve loopt door punten | Alleen eerste en laatste (vast) | Elk aangeklikt punt exact |
| Vormcontrole | Trek controlepunten naar een gebied | Verplaats fit-punten die de curve moet raken |
| Effect van grip-bewerking | Controlepunt verplaatst → curve aangetrokken | Fit-punt verplaatst → curve opnieuw geïnterpoleerd |
| Beste voor | Vloeiende esthetische curves, vrije vormen | Curves die exacte coördinaten moeten raken |

## DXF — SPLINE-entiteit (controlepunt-vorm)

CV-splines worden opgeslagen als `SPLINE`-entiteiten in het DXF-bestand, met de graad, de knopenvector en alle coördinaten van controlepunten. Alle eigenschappen — kleur, laag, lijntype, lijntypeschaal en dikte — behouden hun waarde bij export en import. De `splineFlag` wordt ingesteld op `9` (CV-spline), zodat de vorm behouden blijft bij herladen. Elke DXF-toepassing die `SPLINE`-entiteiten met CV-gegevens ondersteunt, leest deze correct.
