---
title: Area Command — Meet Oppervlakte en Omtrek van een Polygoon
description: Het commando Area meet de omsloten oppervlakte en omtrek van een polygoon bepaald door 3 of meer geklikte punten, met behulp van de schoenveterformule. Ondersteunt hoekvergrendelde richtingsinvoer en een blijvende markering van het resultaat op het canvas.
keywords: [CAD oppervlakte meten, area commando, polygoon oppervlakte calculator, omtrek meting, schoenveterformule, kulmanlab CAD meting]
group: measure
order: 3
---

# Area

Het commando `area` meet de omsloten oppervlakte en omtrek van een polygoon bepaald door drie of meer geklikte punten, en drukt beide resultaten af in de terminal met 4 decimalen. Het is het derde meetcommando, naast [Distance](../distance/) (lengte van een rechte lijn) en [Angle](../angle/) (binnenhoek bij een hoekpunt).

## Anatomie van een oppervlaktemeting

```
  ● eerste punt
   \
    \
     ● tweede punt
      \
       \             (gestippelde) preview van sluitende rand
        ●───────────────┐
      derde punt         │  (gestippelde) preview van volgende rand naar cursor
                         ✕ cursor  →  terminal: "Area: 12.3456  Perimeter: 45.6789"
```

- **Hoekpunten** — elk geklikt (of getypt) punt wordt een polygoonhoekpunt; vastgelegde randen worden getekend als volle lijn en het interieur wordt gevuld met een doorschijnende markering.
- **Previewranden** — gestippelde lijnen tonen de openstaande rand van het laatste hoekpunt naar de cursor, en de sluitende rand van de cursor terug naar het eerste hoekpunt, zodat u de vorm kunt zien voordat u deze vastlegt.
- **Sluitende rand** — u klikt nooit opnieuw op het eerste punt; door op Enter te drukken wordt de polygoon automatisch gesloten.

## Een oppervlakte meten

1. Typ `area` in de terminal of klik op de werkbalkknop **Area** (onderste rij van het paneel Measure).
2. **Klik op het eerste punt**, of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
3. **Klik op elk extra hoekpunt** in volgorde rond de vorm. Coördinaatinvoer werkt bij elke stap.
4. Zodra ten minste **3 punten** zijn geplaatst, drukt u op **Enter** (zonder openstaande coördinaat- of afstandsinvoer) om de polygoon te sluiten en het resultaat te berekenen.
5. De terminal drukt `Area: <waarde>  Perimeter: <waarde>` af, en de gesloten polygoon — vulling, omtrek en hoekpuntgrips — blijft gemarkeerd op het canvas.
6. **Klik ergens, druk op een willekeurige toets, of druk op `Escape`** om het resultaat weg te halen en het commando te beëindigen.

## Hoekvergrendeling en exacte afstand

Nadat het eerste hoekpunt is geplaatst, vergrendelt het bewegen richting een van de geconfigureerde hoekvolg-incrementen (10°, 15°, 20°, 30°, 45° of 90°, ingesteld via de vervolgkeuzelijst in de werkbalk) de volgende rand op die richting:

- De randpreview klikt vast op de vergrendelde richting, en er wordt een hoekvolg-indicator getekend bij het ankerhoekpunt.
- Typ een lengte en druk op **Enter** om het volgende hoekpunt op precies die afstand langs de vergrendelde richting te plaatsen.
- Klikken terwijl vergrendeld (zonder getypte lengte) plaatst het hoekpunt op de projectie van de cursor op de vergrendelde richting.

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.` | Toevoegen aan de waarde van de randlengte |
| `-` | Negatieve lengte (alleen als eerste teken) |
| `Backspace` | Verwijder het laatst getypte teken |
| `Enter` | Plaats het volgende hoekpunt op de getypte lengte |

## De polygoon sluiten

- Enter sluit de vorm alleen zodra **3 of meer** hoekpunten zijn geplaatst — bij minder heeft het geen effect.
- De rand van het laatste hoekpunt terug naar het eerste wordt automatisch toegevoegd en meegeteld in zowel de oppervlakte als de omtrek.
- Punten kunnen in elke volgorde worden geplaatst (met de klok mee of tegen de klok in) — het resultaat is in beide gevallen identiek.

## Area versus Distance versus Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| Wat het meet | Omsloten oppervlakte & omtrek van een polygoon | Lengte van een rechte lijn | Binnenhoek bij een hoekpunt |
| Aantal klikken | 3 of meer, gesloten met Enter | 2 | 3 |
| Resultaatformaat | `12.3456  Perimeter: 45.6789` | `12.3456` (eenheden) | `45.0000°` |
| Canvaspreview | Gevulde polygoon met gestippelde sluitende rand | Lijn van eerste punt naar cursor | Twee lijnen van hoekpunt naar beide uiteinden |
| Na resultaat | Weghalen met elke invoer, waarna het commando afsluit | Klik om een nieuwe meting te koppelen | Klik om een nieuwe meting te koppelen |
| Beste voor | Omsloten gebieden, kamer- of paneeloppervlakte | Lengte van een opening of segment | Openingshoek tussen twee elementen |

## Coördinaatinvoer

In plaats van klikken kunt u een exacte positie typen voor elk hoekpunt:

1. Typ de X-waarde.
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]`.
3. Typ de Y-waarde.
4. Druk op **Enter** om te bevestigen.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-coördinaatinvoer, of randlengte-invoer terwijl hoek vergrendeld is |
| `,` | Vergrendel X en ga naar Y-invoer |
| `Backspace` | Verwijder laatst getypte teken |
| `Enter` | Bevestig een getypte coördinaat of lengte; met 3+ hoekpunten en zonder openstaande invoer wordt de polygoon gesloten |
| `Escape` | Tijdens het plaatsen van hoekpunten: verwijder deze en start opnieuw bij het eerste punt; zodra het resultaat wordt getoond: haal het weg en sluit af |

## Opmerkingen

- De oppervlakte wordt berekend met de [schoenveterformule](https://en.wikipedia.org/wiki/Shoelace_formula) en wordt altijd als een positieve waarde weergegeven, ongeacht de klikvolgorde.
- Zelfoverlappende polygonen (randen die elkaar kruisen) leveren nog steeds een numeriek resultaat op, maar de waarde komt mogelijk niet overeen met het visueel omsloten gebied — houd de klikvolgorde niet-kruisend voor een betekenisvolle oppervlakte.
- Resultaten worden alleen weergegeven in de **terminal en als tijdelijke markering op het canvas** — er wordt niets als permanente entiteit aan de tekening toegevoegd.
- In tegenstelling tot Distance en Angle koppelt Area **niet** automatisch aan een nieuwe meting — nadat u het resultaat weghaalt, voert u `area` opnieuw uit om een andere polygoon te meten.
- De precisie is altijd 4 decimalen voor zowel oppervlakte als omtrek, in dezelfde eenheden als de tekencoördinaten (geen eenheidsconversie).
