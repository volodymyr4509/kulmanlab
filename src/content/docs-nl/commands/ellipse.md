---
title: Ellipse Command — Teken Gedraaide Ellipsen met Twee Assen
description: Het commando Ellipse tekent een ellips in drie klikken — middelpunt, eindpunt van de eerste as (elke richting), daarna lengte van de tweede as. De twee assen staan altijd loodrecht op elkaar. Elke halve as heeft een eigen grip voor onafhankelijk aanpassen na plaatsing. Volledige DXF-roundtrip als ELLIPSE-entiteiten.
keywords: [CAD ellips commando, ellips tekenen CAD, gedraaide ellips CAD, ellips assen, ELLIPSE DXF entiteit, ellips grip aanpassen, asverhouding, kulmanlab]
group: shapes
order: 6
---

# Ellipse

Het commando `ellipse` tekent een ellips met drie klikken: een middelpunt, het eindpunt van de eerste (lange) halve as onder een willekeurige hoek, en de lengte van de tweede (korte) halve as. De twee assen staan altijd loodrecht op elkaar — de richting van de tweede as wordt automatisch afgeleid van de eerste.

## Een ellips tekenen

1. Typ `ellipse` in de terminal of klik op de werkbalkknop **Ellipse**.
2. **Klik op het middelpunt**, of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
3. **Klik op het eindpunt van de eerste as** — bepaalt zowel de richting als de lengte van de eerste halve as. Coördinaatinvoer werkt hier ook.
4. **Stel de lengte van de tweede as in** — beweeg de cursor loodrecht op de eerste as, klik dan of typ een lengte.

```
               ● ← eindpunt eerste as (stap 3)
              /
  middelpunt ●  /  ← eerste as (willekeurige hoek)
            |
            ● ← cursor hier stelt lengte tweede as in (stap 4)
```

De ellips wordt na stap 4 geplaatst en het commando sluit af.

## Asinvoer — klikken, coördinaat of getypte lengte

**Middelpunt (stap 2):** klik of typ `X,Y` voor een exacte positie.

**Eindpunt eerste as (stap 3):** klik, of typ `X,Y` voor een exacte coördinaat. Hoekvergrendeling klikt ook vast op stappen van 45° — terwijl vergrendeld, typt u een lengte en drukt u op **Enter** om het eindpunt op precies die afstand te plaatsen.

**Tweede as (stap 4):** getypte lengte is altijd beschikbaar — geen hoekvergrendeling vereist. De richting staat al vast loodrecht op de eerste as; typen stelt alleen de lengte in.

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.` | Cijfer toevoegen aan de aslengte (fase tweede as) |
| `Backspace` | Verwijder het laatst getypte teken |
| `Enter` | Plaats het aseindpunt op de getypte lengte |

## Coördinaatinvoer (middelpunt en eindpunt eerste as)

1. Typ de X-waarde.
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]`.
3. Typ de Y-waarde.
4. Druk op **Enter** om te bevestigen.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-coördinaatinvoer (middelpunt-/eerste-as-fase), of aslengte bij hoekvergrendeling |
| `,` | Vergrendel X en ga naar Y-invoer |
| `Backspace` | Verwijder laatst getypte teken |
| `Enter` | Bevestig getypte coördinaat of lengte |
| `Escape` | Annuleer en reset |

## Grip bewerken — assen onafhankelijk aanpassen

Een geselecteerde ellips toont vijf grips:

| Grip | Aantal | Wat het doet |
|------|-------|--------------|
| **Center** | 1 | Verplaatst de hele ellips; beide assen ongewijzigd |
| **Eindpunten hoofdas** | 2 (tegenoverliggende uiteinden van de langste as) | Sleep om de lengte van de hoofdhalve-as aan te passen; de absolute grootte van de nevenas blijft gelijk |
| **Eindpunten nevenas** | 2 (tegenoverliggende uiteinden van de kortste as) | Sleep om de lengte van de nevenhalve-as aan te passen; hoofdas ongewijzigd |

De grips van de hoofd- en nevenas zijn onafhankelijk — u kunt de ellips van vorm veranderen zonder het commando opnieuw uit te voeren.

## Ellipsen selecteren

| Methode | Gedrag |
|--------|-----------|
| **Klik** | Selecteert als de klik dicht bij de omtrek van de ellips landt |
| **Sleep naar rechts** (strikt) | Het assengelijnde begrenzingsvak van de ellips moet volledig binnen het selectievak passen |
| **Sleep naar links** (kruisend) | Elk deel van de ellipsomtrek dat de rand van het selectievak snijdt, selecteert deze |

## Ondersteunde bewerkingscommando's

| Commando | Wat er met de ellips gebeurt |
|---------|-----------------------------|
| [Move](../move/) | Verplaatst het middelpunt; beide assen ongewijzigd |
| [Copy](../copy/) | Maakt een identieke ellips op een nieuw middelpunt |
| [Rotate](../rotate/) | Draait het middelpunt en de hoofdasvector met dezelfde hoek |
| [Mirror](../mirror/) | Spiegelt het middelpunt en herberekent de richting van de hoofdas ten opzichte van de spiegelas |
| [Scale](../scale/) | Schaalt de positie van het middelpunt en vermenigvuldigt beide halve-aslengtes met de factor |
| [Offset](../offset/) | Maakt een concentrische ellips die naar buiten of binnen verschoven is met een vaste afstand |
| [Delete](../delete/) | Verwijdert de ellips |

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
| Center X / Center Y | Middelpunt van de ellips |
| Major Axis X / Major Axis Y | Vector van het middelpunt naar het eindpunt van de hoofdas (bevat zowel richting als lengte) |
| Axis Ratio | Verhouding van nevenhalve-as tot hoofdhalve-as (0 < verhouding ≤ 1) |
| Start Angle / End Angle | Parametrische hoeken in graden; beide zijn 0°/360° voor een volledige ellips |

## Ellipse versus Circle — wanneer wat gebruiken

| | Ellipse | Circle |
|---|---------|--------|
| Assen | Twee onafhankelijke halve assen onder elke hoek | Eén radius, symmetrisch |
| Rotatie | Kan onder elke hoek worden geplaatst | Geen rotatie |
| Getypte invoer | Lengte per as | Alleen radius |
| Grip formaat aanpassen | Hoofd- en nevenas onafhankelijk | Alle vier kardinale punten gelijkwaardig |
| Beste voor | Schuine aanzichten, ovale elementen, perspectiefgaten | Symmetrische ronde elementen |

## DXF — ELLIPSE-entiteit

Ellipsen worden opgeslagen als `ELLIPSE`-entiteiten in het DXF-bestand. Het formaat slaat het middelpunt, de volledige hoofdasvector (richting + lengte) en de asverhouding op. Rotatie, vorm en alle stijleigenschappen worden zonder verlies overgezet. Een cirkel wordt **niet** opgeslagen als een gedegenereerde ellips — de twee entiteittypen blijven afzonderlijk in het DXF-model.
