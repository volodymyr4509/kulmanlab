---
title: Arc Command — Teken Boogsegmenten met de Cirkelomschrijving
description: Het commando Arc tekent een cirkelboog door precies drie geklikte punten met behulp van de omgeschreven cirkel (circumcircle). Start- en eindgrips laten u de uiteinden van de boog naar een nieuwe hoek en radius slepen na plaatsing. Volledige DXF-roundtrip als ARC-entiteiten.
keywords: [CAD boog commando, drie punts boog CAD, omgeschreven cirkel boog, boog tekenen CAD, ARC DXF entiteit, boog grip bewerken, kulmanlab]
group: shapes
order: 5
---

# Arc

Het commando `Boog` tekent een cirkelboog door drie punten die u klikt. De boog wordt berekend als de unieke omgeschreven cirkel (circumcircle) die door alle drie de punten gaat — er hoeft geen middelpunt of radius direct te worden opgegeven. De boog loopt van de eerste klik naar de derde klik, via de tweede.

## Een boog tekenen

1. Typ `Boog` in de terminal of klik op de werkbalkknop **Arc**.
2. **Klik op het eerste punt** — een uiteinde van de boog. Of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
3. **Klik op het tweede punt** — een punt waar de boog doorheen moet gaan (bepaalt kromming en richting). Coördinaatinvoer werkt hier ook.
4. **Klik op het derde punt** — het andere uiteinde van de boog. De boog wordt geplaatst en het commando sluit af. Coördinaatinvoer werkt hier ook.

```
           ● (2e klik — middelpunt op de curve)
          / \
         /   \
        ●     ●
     1e         3e
```

Een lijnpreview verbindt de eerste twee klikken terwijl u het derde punt positioneert. Vanaf de tweede klik volgt een live boogpreview de cursor.

> **Collineaire punten**: als alle drie de punten op een rechte lijn liggen, kan de boog niet worden berekend en wordt er geen entiteit geplaatst. Verplaats het tweede punt van de lijn af en probeer het opnieuw.

## Andere manieren om een boog te tekenen

Drie punten is de standaard. Bij sommige prompts toont de terminal opties tussen vierkante haken, zoals `[Center=false]` — typ de letter van de optie om hem aan te zetten (`[Center=true]`) en nogmaals om hem uit te zetten. Gecombineerd tekenen ze de boog op zes andere manieren:

| Methode | Aanzetten | Laatste stap |
|---|---|---|
| Start, Center, End | `C` | eindpunt |
| Start, Center, Angle | `C`, `A` | hoek |
| Start, Center, Length | `C`, `L` | koordelengte |
| Start, End, Angle | `E` | hoek |
| Start, End, Direction | `E`, `D` | raakrichting |
| Start, End, Radius | `E`, `R` | straal |

- In de laatste stap van elke methode behalve Start, Center, End typt u een getal en drukt u op **Enter** of **Space**, of beweegt u de cursor en klikt u — de cursor wordt gelezen als dat getal (een richting voor een hoek of raakrichting, een afstand voor een koordelengte of straal).
- Een positieve hoek loopt vanaf het begin tegen de klok in, een negatieve met de klok mee. Een hoek van 0° of hele omwentelingen levert geen boog op en de terminal meldt dat.
- Een positieve koordelengte of straal neemt de korte weg, een negatieve de lange. Een koorde langer dan de diameter of een straal kleiner dan de halve koorde wordt geweigerd en de terminal noemt de grens.
- Start, Center, End gebruikt alleen de richting van het eindpunt vanuit het middelpunt: de boog loopt vanaf het begin tegen de klok in tot waar die richting de cirkel snijdt. De raakrichting is de richting, in graden vanaf de X-as, waarin de boog zijn begin verlaat.
- Om het middelpunt vóór het beginpunt te kiezen, typt u `C` bij de allereerste prompt.
- De optieletters volgen de taal van de interface; hier staan de Engelse.

## Coördinaatinvoer

Bij elk van de drie stappen kunt u in plaats van klikken een exacte positie typen:

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
| `Enter` | Bevestig getypte coördinaat |
| `C` `E` `A` `L` `D` `R` | Optie aan- of uitzetten: `C` Center, `E` End, `A` Angle, `L` Length, `D` Direction, `R` Radius |
| `Escape` | Verwijder alle geplaatste punten en sluit af |

## Grip bewerken — uiteinden en radius aanpassen

Een geselecteerde boog toont drie grips:

| Grip | Positie | Wat het doet |
|------|----------|--------------|
| **Center** | Geometrisch middelpunt van de omgeschreven cirkel | Verplaatst de hele boog; radius en hoeken blijven ongewijzigd |
| **Start** | Eerste uiteinde van de boog | Sleep om het startpunt langs de omgeschreven cirkel te verplaatsen — wijzigt zowel de starthoek als de radius |
| **End** | Laatste uiteinde van de boog | Sleep om het eindpunt langs de omgeschreven cirkel te verplaatsen — wijzigt zowel de eindhoek als de radius |

Het slepen van een start- of eindgrip verplaatst deze naar de sleeplocatie en berekent zowel de hoek als de radius opnieuw vanaf die nieuwe positie ten opzichte van het middelpunt. Het tegenoverliggende uiteinde blijft vast.

## Bogen selecteren

| Methode | Gedrag |
|--------|-----------|
| **Klik** | Selecteert als de klik dicht bij de boogcurve landt (niet de koorde) |
| **Sleep naar rechts** (strikt) | Steekproefpunten verdeeld over de boog moeten allemaal binnen het vak liggen |
| **Sleep naar links** (kruisend) | Elk steekproefpunt op de boog dat binnen het vak valt, selecteert deze |

## Ondersteunde bewerkingscommando's

| Commando | Wat er met de boog gebeurt |
|---------|------------------------|
| [Move](../move/) | Verplaatst het middelpunt; radius en hoeken blijven ongewijzigd |
| [Copy](../copy/) | Maakt een identieke boog op een nieuwe positie |
| [Rotate](../rotate/) | Draait het middelpunt en verschuift de start-/eindhoek met de rotatiehoek |
| [Mirror](../mirror/) | Spiegelt het middelpunt en keert de start-/eindhoek om ten opzichte van de spiegelas |
| [Scale](../scale/) | Schaalt de positie van het middelpunt en vermenigvuldigt de radius met de schaalfactor |
| [Offset](../offset/) | Maakt een concentrische boog met een grotere of kleinere radius, dezelfde hoekspanne |
| [Delete](../delete/) | Verwijdert de boog |

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
| Center X / Center Y | Middelpunt van de omgeschreven cirkel |
| Radius | Radius van de omgeschreven cirkel |
| Start Angle | Hoek in graden waar de boog begint (gemeten vanaf de positieve X-as) |
| End Angle | Hoek in graden waar de boog eindigt |

## Arc versus Circle — wanneer wat gebruiken

| | Arc | Circle |
|---|-----|--------|
| Spanne | Gedeeltelijk — eerste tot derde klik | Volledige 360° |
| Invoermethode | Drie punten op de curve | Middelpunt + radius (klikken of typen) |
| Getypte invoer | X,Y-coördinaat voor elk punt | Radiuswaarde (middelpunt accepteert ook X,Y) |
| Formaat wijzigen na plaatsing | Sleep start-/eindgrips | Sleep elke kardinale grip |
| Beste voor | Afrondingen, afgeronde hoeken, gebogen paden | Volledige gaten, ronde elementen |

## DXF — ARC-entiteit

Bogen worden opgeslagen als `ARC`-entiteiten in het DXF-bestand, met opslag van middelpuntcoördinaten, radius, starthoek en eindhoek. Alle eigenschappen — inclusief kleur, laag, lijntype, lijntypeschaal en dikte — worden zonder verlies overgezet. Elke DXF-compatibele toepassing (LibreCAD, FreeCAD, enz.) leest deze als standaardbogen.
