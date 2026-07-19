---
title: Circle Command — Teken Cirkels met Middelpunt en Radius
description: Het commando Circle plaatst een cirkel door op een middelpunt te klikken en vervolgens de radius te klikken of te typen. Vier kardinale grips laten u de radius aanpassen door te slepen, zonder het commando opnieuw uit te voeren. Volledige DXF-roundtrip als CIRCLE-entiteiten.
keywords: [CAD cirkel commando, cirkel tekenen CAD, cirkel radius invoer, cirkel grip aanpassen, CIRCLE DXF entiteit, dimradius cirkel, kulmanlab]
group: shapes
order: 4
---

# Circle

Het commando `circle` tekent een cirkel bepaald door een middelpunt en een radius. Nadat het middelpunt is geklikt, kunt u de radius instellen door een tweede punt op het canvas te klikken of door een exact getal te typen — beide opties zijn tegelijk beschikbaar.

## Een cirkel tekenen

1. Typ `circle` in de terminal of klik op de werkbalkknop **Circle**.
2. **Klik op het middelpunt**, of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
3. Stel de radius in — kies een van beide:
   - **Klik op een willekeurig punt** op het canvas — de afstand vanaf het middelpunt wordt de radius, of
   - **Typ de radius** en druk op **Enter** voor een exacte waarde.

De cirkel wordt direct geplaatst en het commando sluit af.

```
  middelpunt ●
              \  preview van radiuslijn
               \
                ● ← klik hier, of typ een getal
```

Tijdens de radiusfase toont de live preview de cirkel op de huidige cursorafstand en tekent ook een radiuslijn van het middelpunt naar het huidige punt.

## Coördinaatinvoer voor het middelpunt

In plaats van klikken kunt u de positie van het middelpunt typen:

1. Typ de X-waarde.
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]`.
3. Typ de Y-waarde.
4. Druk op **Enter** om het middelpunt te plaatsen en verder te gaan naar de radiusinvoer.

## Getypte radiusinvoer

Nadat het middelpunt is geplaatst, bouwt het typen direct een radiuswaarde op:

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.` | Cijfer toevoegen aan de radiuswaarde |
| `Backspace` | Verwijder het laatst getypte teken |
| `Enter` | Plaats de cirkel op de getypte radius |

De opgebouwde waarde wordt getoond in de terminalprompt (bijv. `enter radius of circle: 25`). De preview toont de getypte radius, terwijl de cursor de richting van de radiuslijnmarkering bepaalt.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-coördinaatinvoer (middelpuntfase), of radiuscijfer (radiusfase) |
| `,` | Vergrendel X en ga naar Y-invoer (middelpuntfase) |
| `Backspace` | Verwijder laatst getypte teken |
| `Enter` | Bevestig getypte coördinaat of radius |
| `Escape` | Annuleer en reset |

## Grip bewerken — radius aanpassen

Een geselecteerde cirkel toont vijf grips:

| Grip | Positie | Wat het doet |
|------|----------|--------------|
| **Center** | Middelpunt | Verplaatst de hele cirkel; radius blijft ongewijzigd |
| **Left** | Meest linkse punt (middelpunt − radius) | Sleep om een nieuwe radius in te stellen = afstand tot middelpunt |
| **Right** | Meest rechtse punt (middelpunt + radius) | Sleep om een nieuwe radius in te stellen = afstand tot middelpunt |
| **Top** | Bovenste punt | Sleep om een nieuwe radius in te stellen = afstand tot middelpunt |
| **Bottom** | Onderste punt | Sleep om een nieuwe radius in te stellen = afstand tot middelpunt |

Alle vier kardinale grips gedragen zich identiek — de nieuwe radius is gelijk aan de afstand van het middelpunt tot de sleeppositie. Het middelpunt blijft vast.

## Cirkels selecteren

| Methode | Gedrag |
|--------|-----------|
| **Klik** | Selecteert als de klik dicht bij de omtrek landt |
| **Sleep naar rechts** (strikt) | Het volledige begrenzende vierkant (middelpunt ± radius) moet binnen het vak liggen |
| **Sleep naar links** (kruisend) | Elk deel van de omtrek dat de rand van het vak snijdt of raakt, selecteert de cirkel |

## Ondersteunde bewerkingscommando's

| Commando | Wat er met de cirkel gebeurt |
|---------|---------------------------|
| [Move](../move/) | Verplaatst het middelpunt; radius ongewijzigd |
| [Copy](../copy/) | Maakt een identieke cirkel op een nieuw middelpunt |
| [Rotate](../rotate/) | Draait het middelpunt rond het basispunt; radius ongewijzigd |
| [Mirror](../mirror/) | Spiegelt het middelpunt ten opzichte van de spiegelas; radius ongewijzigd |
| [Scale](../scale/) | Schaalt de positie van het middelpunt en vermenigvuldigt de radius met de schaalfactor |
| [Offset](../offset/) | Maakt een concentrische cirkel met een grotere of kleinere radius |
| [Delete](../delete/) | Verwijdert de cirkel |

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
| Center X / Center Y | Coördinaten van het middelpunt |
| Radius | Cirkelradius in tekeneenheden |

## Circle versus Arc — wanneer wat gebruiken

| | Circle | Arc |
|---|--------|-----|
| Spanne | Volledige 360° | Gedeeltelijk — bepaald door start- en eindhoek |
| Hoe te tekenen | Middelpunt + radius | Drie punten op de curve |
| Getypte invoer | Radiuswaarde | Geen — alleen klikken |
| Grip om formaat aan te passen | 4 kardinale punten | Start- en eindpunt (hoek + radius) |
| Maatvoering | Radius: [Dim Radius](../dim-radius/) · Diameter: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Beste voor | Volledige gaten, boutcirkels, ronde elementen | Afrondingen, gedeeltelijke curves, gebogen paden |

## DXF — CIRCLE-entiteit

Cirkels worden opgeslagen als `CIRCLE`-entiteiten in het DXF-bestand. Middelpuntcoördinaten, radius, kleur, laag, lijntype, lijntypeschaal en dikte worden allemaal zonder verlies overgezet. Elke DXF-compatibele toepassing leest deze als standaardcirkels.
