---
title: Polyline Commando — Meerdere Segmenten als Eén Entiteit Tekenen
description: Het Polyline-commando tekent een willekeurig aantal verbonden segmenten, opgeslagen als één LWPOLYLINE-entiteit. Hoekpunt- en segmentmiddelpuntgrips laten u elk deel van het pad na aanmaak hervormen. Ondersteunt offset; ondersteunt geen trim of extend.
keywords: [CAD polyline commando, polylijn tekenen CAD, pad met meerdere segmenten CAD, LWPOLYLINE DXF, polylijn hervormen, hoekpunt grip CAD, polylijn offset, kulmanlab]
group: shapes
order: 2
---

# Polyline

Het `polyline`-commando tekent een verbonden pad van een willekeurig aantal rechte segmenten, allemaal opgeslagen als één `LWPOLYLINE`-entiteit. Omdat het hele pad één object is, selecteert u met één klik elk segment tegelijk — verplaats, draai of schaal de hele vorm in één bewerking. Dit is het belangrijkste verschil met aaneengeschakelde [Lines](../line/), waarbij elk segment een onafhankelijke entiteit is.

Polylijnen kunnen ook **gesloten** zijn: het [Rectangle](../rectangle/)-commando gebruikt dezelfde `LWPOLYLINE`-entiteit met een ingestelde sluitvlag.

## Een polylijn tekenen

1. Typ `polyline` in de terminal of klik op de **Polyline**-werkbalkknop.
2. **Klik op het eerste punt**, of typ `X,Y` en druk op **Enter** voor een exact coördinaat.
3. **Klik op elk volgend punt** — elke klik voegt een segment toe. Coördinaatinvoer werkt bij elke stap.
4. Druk op **Enter** of **Spatie** om te voltooien (vereist minstens 2 geplaatste punten).

```
  ●──────●
  1e     2e
          \
           \  segment 3 (bezig — cursor hier)
            ●  ← klik om toe te voegen, Enter/Spatie om te voltooien
```

Op elk moment op **Escape** drukken verwijdert alle geplaatste punten en sluit het commando af.

## Coördinaatinvoer

In plaats van te klikken, kunt u een exacte positie typen voor elk hoekpunt:

1. Typ de X-waarde.
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]`.
3. Typ de Y-waarde.
4. Druk op **Enter** om het hoekpunt te plaatsen.

## Hoekvergrendeling en exacte segmentlengte

Dezelfde 45°-vanglogica als bij het [Line](../line/#angle-locking-and-exact-length-input)-commando geldt tussen elke twee opeenvolgende punten. Bij vergrendeling op een as:

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.` | Cijfer toevoegen aan de segmentlengte |
| `-` | Negatieve lengte — keert richting om langs de as (alleen als eerste teken) |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` | Volgend punt plaatsen op de getypte afstand |

De opgebouwde lengte wordt live weergegeven in de terminalprompt. Klikken tijdens vergrendeling projecteert op de as, zodat het nieuwe hoekpunt er exact op landt.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | X-coördinaatinvoer starten, of segmentlengte bij hoekvergrendeling |
| `,` | X vergrendelen en doorgaan naar Y-invoer |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` | Getypt coördinaat of lengte bevestigen, of de polylijn voltooien als er niets is getypt en ≥ 2 punten bestaan |
| `Spatie` | Polylijn voltooien (hetzelfde als Enter zonder lopende invoer) |
| `Escape` | Alle punten verwijderen en afsluiten |

## Grip-bewerking — hoekpunten en segmentmiddelpunten

Een geselecteerde polylijn toont twee soorten grips:

| Grip | Positie | Wat het doet |
|------|----------|--------------|
| **Hoekpunt** | Op elk geplaatst punt | Sleep om dat hoekpunt te herpositioneren; alle verbonden segmenten rekken mee |
| **Segmentmiddelpunt** | Midden van elk segment | Sleep om **beide** eindpunten van dat segment samen te verplaatsen, met behoud van segmentlengte en -hoek |

De segmentmiddelpuntgrip is uniek voor polylijnen — hiermee kunt u een individueel segment zijwaarts verschuiven zonder de lengte te wijzigen. Bij een [Line](../line/) activeert de middelpuntgrip in plaats daarvan het Move-commando voor de hele entiteit.

Er is geen enkele grip om "de hele polylijn te verplaatsen". Gebruik het [Move](../move/)-commando om het hele pad te verplaatsen.

## Polylijnen selecteren

| Methode | Gedrag |
|--------|-----------|
| **Klikken** | Selecteert de polylijn als de klik binnen de hit-testafstand van een segment valt |
| **Slepen naar rechts** (strikt) | Alle hoekpunten moeten binnen het vak vallen |
| **Slepen naar links** (kruisend) | Elk segment dat de vakrand kruist, selecteert de hele polylijn |

Omdat een polylijn één entiteit is, selecteert een kruisende selectie die een willekeurig segment raakt alle segmenten.

## Ondersteunde bewerkingscommando's

Polylijnen ondersteunen alle algemene transformaties en offset, maar **niet** trim of extend (die zijn alleen voor [Line](../line/)):

| Commando | Wat er gebeurt met de polylijn |
|---------|------------------------------|
| [Move](../move/) | Verplaatst alle hoekpunten met dezelfde verschuiving |
| [Copy](../copy/) | Maakt een identieke polylijn op een nieuwe positie |
| [Rotate](../rotate/) | Draait alle hoekpunten rond het gekozen basispunt |
| [Mirror](../mirror/) | Spiegelt alle hoekpunten over de spiegelas |
| [Scale](../scale/) | Schaalt alle hoekpunten uniform vanaf het basispunt |
| [Offset](../offset/) | Maakt een parallelle polylijn op een vaste loodrechte afstand |
| [Delete](../delete/) | Verwijdert de polylijn uit de tekening |

## Eigenschappen

Wanneer een polylijn is geselecteerd, toont het eigenschappenpaneel:

**Algemeen**

| Eigenschap | Standaard | Betekenis |
|----------|---------|---------|
| Kleur | 256 (ByLayer) | ACI-kleurindex |
| Laag | `0` | Laagtoewijzing |
| Lijntype | ByLayer | Benoemd lijntypepatroon |
| Lijntypeschaal | 1 | Schaalfactor op het lijntypepatroon |
| Dikte | 0 | Extrusiedikte |

**Geometrie**

| Eigenschap | Betekenis |
|----------|---------|
| Gesloten | Of het laatste hoekpunt terug verbindt met het eerste |
| Aantal hoekpunten | Totaal aantal hoekpunten |
| Hoekpunten | Coördinatenlijst van alle hoekpunten |

## Polyline versus Line — wanneer welke gebruiken

| | Polyline | Line |
|---|---------|------|
| Aantal entiteiten | Eén `LWPOLYLINE` voor het hele pad | Eén `LINE` per segment |
| Gesloten vorm | Ja (sluitvlag) | Nee |
| Trim / Extend | Nee | Ja — segment voor segment |
| Segmentmiddelpuntgrip | Verplaatst het hele segment | Activeert Move voor de entiteit |
| Ideaal voor | Omtrekken, contouren, vormen die u heel houdt | Constructielijnen, geometrie die u gaat bijsnijden |

## DXF — LWPOLYLINE-entiteit

Polylijnen worden opgeslagen als `LWPOLYLINE`-entiteiten in het DXF-bestand. Alle eigenschappen — hoekpuntcoördinaten, sluitvlag, kleur, laag, lijntype, lijntypeschaal en dikte — blijven zonder verlies behouden bij de roundtrip. Rechthoeken getekend met het [Rectangle](../rectangle/)-commando worden ook opgeslagen als `LWPOLYLINE` (gesloten, vier hoekpunten) en zijn op DXF-niveau niet te onderscheiden.

`LWPOLYLINE`-entiteiten uit elke DXF-compatibele toepassing (LibreCAD, FreeCAD, enz.) worden bij het inlezen volledig bewerkbare polylijnen in de editor.
