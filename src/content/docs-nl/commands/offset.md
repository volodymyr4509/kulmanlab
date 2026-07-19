---
title: Offset Commando — Parallelle Kopieën op Vaste Afstand
description: Het Offset-commando maakt een parallelle kopie van een Lijn, Cirkel, Boog, Ellips of Polylijn op een getypte afstand. De afstand wordt eenmaal ingevoerd en hergebruikt voor meerdere offsets. Een klik aan een zijde bepaalt in welke richting de kopie verschijnt. Vijf entiteitstypen ondersteund.
keywords: [CAD offset commando, parallelle kopie CAD, lijn offset CAD, cirkel offset CAD, polylijn offset CAD, concentrische offset, kulmanlab]
group: edit
order: 10
---

# Offset

Het `offset`-commando maakt een parallelle kopie van een entiteit op een vaste loodrechte afstand. U typt de afstand eenmaal, klikt daarna op entiteiten en kiest een zijde — het commando blijft klaarstaan op dezelfde afstand, zodat u meerdere objecten in één sessie kunt offsetten.

Ondersteunde entiteitstypen: **Line, Circle, Arc, Ellipse, Polyline** (inclusief Rectangles).

## Offset gebruiken

1. Typ `offset` in de terminal of klik op de **Offset**-werkbalkknop.
2. **Typ de offsetafstand** en druk op **Enter** of **Spatie**.
3. **Klik op een entiteit** om te offsetten — als de entiteit geen ondersteund type is, verschijnt een foutmelding en kunt u een andere entiteit aanklikken.
4. **Beweeg de cursor** naar de zijde waar de kopie moet verschijnen — een live preview volgt.
5. **Klik** om de offsetkopie te plaatsen.

Na elke plaatsing keert het commando terug naar stap 3 op **dezelfde afstand**, klaar voor de volgende offset. Druk op **Escape** om terug te resetten naar de afstandinvoerstap.

```
  Afstand: 10

  ─────────────────    ← oorspronkelijke lijn
  ─────────────────    ← offsetkopie (10 eenheden lager)
```

## Offsetgedrag per entiteit

| Entiteit | Hoe de offset wordt berekend |
|--------|---------------------------|
| **Line** | Parallelle lijn verschoven loodrecht op de oorspronkelijke richting |
| **Circle** | Concentrische cirkel; klik buiten → grotere radius, binnen → kleinere radius |
| **Arc** | Concentrische boog op een nieuwe radius; dezelfde hoekopening behouden |
| **Ellipse** | Beide halve assen vergroot of verkleind met dezelfde afstand |
| **Polyline** | Elk segment onafhankelijk offset; aangrenzende offsetsegmenten worden op hoeken verstek gesneden |

Voor **Circle**, **Arc** en **Ellipse**: als de naar binnen gerichte offset een radius of halve as tot nul of daaronder zou verkleinen, wordt de offset niet toegepast.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.` | Cijfer toevoegen aan de afstandswaarde |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` / `Spatie` | De getypte afstand bevestigen en doorgaan naar entiteitselectie |
| `Escape` | Terug naar de afstandinvoerstap |

## Opmerking over de werkwijze

De afstand blijft ingesteld totdat u op **Escape** drukt. Dit maakt het efficiënt om veel entiteiten op dezelfde afstand te offsetten — typ de afstand eenmaal en klik en kies daarna een zijde voor elke entiteit achtereenvolgens.

## Offset versus Copy

| | Offset | Copy |
|---|--------|------|
| Verschuiving | Loodrecht op de geometrie van de entiteit | Willekeurige vector (basis → bestemming) |
| Ondersteunde entiteiten | Line, Circle, Arc, Ellipse, Polyline | Alle entiteitstypen |
| Afstandsinvoer | Getypt voordat de entiteit wordt geselecteerd | Getypt of geklikt na selectie |
| Ideaal voor | Parallelle lijnen, concentrische cirkels, in-/uitspringende paden | Kopieën plaatsen op willekeurige posities |
