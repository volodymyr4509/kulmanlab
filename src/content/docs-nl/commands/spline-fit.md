---
title: Spline Fit — Teken interpolerende splines door punten
description: Het Spline Fit-commando tekent een kubische spline die exact door elk aangeklikt punt loopt. Intern wordt de curve opgeslagen met zowel fit-punten als berekende controlepunten. Het slepen van een fit-punt-grip herinterpoleert de hele curve. Volledig DXF-behoud als SPLINE-entiteiten.
keywords: [CAD spline fit commando, interpolerende spline CAD, spline door punten, vloeiende curve tekenen CAD, SPLINE DXF fit-punten, spline grip-bewerking, kulmanlab]
group: shapes
order: 9
---

# Spline Fit

Het `splinefit`-commando tekent een kubische spline die exact door elk punt loopt dat u aanklikt — een interpolerende curve. In tegenstelling tot [Spline CV](../spline-cv/), waarbij de curve alleen wordt aangetrokken naar controlepunten, wordt de curve hier gedwongen om elke aangeklikte coördinaat exact te raken. Intern past de editor controlepunten aan om dit te bereiken, en die controlepunten worden samen met de fit-punten opgeslagen in het DXF-bestand.

## Een spline tekenen door fit-punten

1. Typ `splinefit` in de terminal of klik op de **Spline Fit**-werkbalkknop.
2. **Klik om fit-punten te plaatsen** — de curve loopt door elk punt. Of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
3. Druk op **Enter** om af te ronden (minimaal 2 punten vereist).

```
  ●──────●──────●──────●  ← curve loopt exact door elke klik
  p1     p2     p3     p4
```

De live preview toont de huidige geïnterpoleerde curve terwijl u de cursor beweegt, inclusief het mogelijke volgende punt op de cursorpositie. Druk op **Escape** om alle geplaatste punten te verwijderen en af te sluiten.

## Coördinaatinvoer

In plaats van klikken kunt u een exacte positie typen voor elk fit-punt:

1. Typ de X-waarde.
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]`.
3. Typ de Y-waarde.
4. Druk op **Enter** om het fit-punt te plaatsen.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-coördinaatinvoer |
| `,` | Vergrendel X en ga naar Y-invoer |
| `Backspace` | Verwijder laatst getypte teken |
| `Enter` | Bevestig getypte coördinaat, of rond de spline af als er geen invoer actief is en er ≥ 2 punten bestaan |
| `Escape` | Verwijder alle punten en sluit af |

## Grip-bewerking — vorm aanpassen via fit-punten

Een geselecteerde fit-spline toont één grip per fit-punt:

| Grip | Positie | Wat het doet |
|------|----------|--------------|
| **Fit-punt** | Bij elke aangeklikte positie | Slepen verplaatst dat fit-punt — de hele curve wordt opnieuw geïnterpoleerd om door de nieuwe positie te lopen |

Het slepen van één grip herberekent de hele curve, niet alleen de aangrenzende segmenten. Dit verschilt van polylijn-grip-bewerking, waarbij het verplaatsen van een hoekpunt alleen de twee aangrenzende segmenten aanpast.

Er is geen "hele spline verplaatsen"-grip. Gebruik het [Move](../move/)-commando om de hele spline te verplaatsen.

## Fit-splines selecteren

| Methode | Gedrag |
|--------|-----------|
| **Klik** | Selecteert als de klik dicht bij een punt op de curve valt |
| **Slepen naar rechts** (strikt) | Alle steekpunten langs de curve moeten binnen het selectievak liggen |
| **Slepen naar links** (kruisend) | Elk deel van de curve dat de vakgrens snijdt, selecteert de curve |

## Ondersteunde bewerkingscommando's

| Commando | Wat er met de spline gebeurt |
|---------|---------------------------|
| [Move](../move/) | Verplaatst alle fit-punten en herberekende controlepunten met dezelfde verschuiving |
| [Copy](../copy/) | Maakt een identieke spline op een nieuwe positie |
| [Rotate](../rotate/) | Roteert alle fit-punten rond het gekozen basispunt |
| [Mirror](../mirror/) | Spiegelt alle fit-punten over de spiegelas |
| [Scale](../scale/) | Schaalt alle fit-punten uniform vanaf het basispunt |
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
| Fit Points | Coördinaten van alle aangeklikte doorloop-punten |
| Control Vertices | Intern berekende controlepunten die de curve weergeven |

## Spline Fit vs Spline CV — welke te gebruiken

| | Spline Fit | Spline CV |
|---|------------|-----------|
| Curve loopt door punten | Elk aangeklikt punt exact | Alleen eerste en laatste (vast) |
| Effect van grip-bewerking | Fit-punt verplaatst → hele curve herberekend | Controlepunt verplaatst → curve aangetrokken naar nieuwe positie |
| Vormvoorspelbaarheid | Hoog — curve volgt klikken | Lager — curve loopt achter op controlepunten |
| Beste voor | Curves die exacte coördinaten moeten raken | Vloeiende esthetische curves, vrije vormen |

## DXF — SPLINE-entiteit (fit-punt-vorm)

Fit-splines worden opgeslagen als `SPLINE`-entiteiten in het DXF-bestand, met zowel de coördinaten van de fit-punten als de berekende controlepunten. De `splineFlag` wordt ingesteld op `8` (fit-point-spline), zodat een toepassing bij het herladen weet welke reeks punten als bewerkbare grips moet worden weergegeven. Alle eigenschappen — kleur, laag, lijntype, lijntypeschaal en dikte — behouden hun waarde bij export en import. DXF-toepassingen die fit-point-splines ondersteunen (LibreCAD, FreeCAD) tonen de fit-punten als de primaire bewerkbare gegevens.
