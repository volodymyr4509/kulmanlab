---
title: Afstandsvolging — Een exacte lengte typen vanaf een vastgezet punt
description: De Dist-schakelaar laat de meest recente vectorpin dienen als het ankerpunt waarvandaan hoekvolging meet, zodat je een exacte lengte kunt typen en een punt op een precieze afstand en hoek van een bestaand punt plaatst — inclusief het eerste punt van een vorm.
keywords: [afstandsinvoer CAD, exacte lengte typen CAD, Dist-schakelaar, afstandsvolging vanaf pins, polaire volging CAD, directe afstandsinvoer, kulmanlab]
group: interface
order: 3
---

# Afstandsvolging

**Afstandsvolging** laat je een punt plaatsen door een exacte lengte te typen in plaats van te klikken. Ze wordt bediend met de schakelaar **Dist** in de bedieningsbalk, naast [Pins](../vector-pins/) en ANGL, en staat **standaard aan**, waarbij de instelling tussen sessies bewaard blijft.

Wat ze toevoegt is beperkt maar nuttig: ze laat de **meest recente vectorpin** dienen als het ankerpunt waarvandaan hoekvolging meet. Zonder haar kan een opdracht alleen meten vanaf een punt dat ze zelf al verzameld heeft — wat betekent dat het *eerste* punt van een vorm helemaal niets heeft om vanaf te meten.

## De drie schakelaars werken samen

Afstandsvolging staat niet op zichzelf. Twee andere schakelaars moeten in de juiste stand staan voordat je een lengte kunt typen:

| Schakelaar | Rol |
|------------|-----|
| **Pins** | Levert het referentiepunt. Zweef 500 ms boven een vangpunt om het vast te zetten — zie [Vector Pins](../vector-pins/). |
| **ANGL** | Levert de hoek. Afstandsvolging komt pas beschikbaar zodra de cursor op een hoek vergrendeld is, dus ANGL moet op een stap staan (10°, 20°, 30°, 45°, 90°) en niet op Off. |
| **Dist** | Staat toe de pin als anker te gebruiken in plaats van alleen het eigen punt van de opdracht. |

Met Pins en Dist aan maar ANGL op **Off** gebeurt er niets: er is geen vergrendelde richting om een lengte langs te meten.

## Hoe Pins en Dist gekoppeld zijn

Afstandsvolging is zinloos met pins uit, dus blijven de twee schakelaars gelijk lopen:

- **Pins aanzetten** zet ook **Dist aan**.
- **Pins uitzetten** zet ook **Dist uit**.
- **Dist aanzetten** zet **Pins aan** als dat nog niet zo was.
- **Dist uitzetten** laat **Pins aan staan**.

Dist kan dus nooit actief zijn terwijl Pins inactief is, maar je kunt pinvolging voor uitlijning aanhouden en de afstandsvolging uitzetten — handig als je referentielijnen wilt zonder dat de cursor op een pin vergrendelt terwijl je op je eigen laatste punt wilde vergrendelen.

## Een punt op een exacte afstand plaatsen

1. Zet **Pins** en **Dist** aan en zet **ANGL** op een hoekstap.
2. Start een opdracht die om een punt vraagt — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/), enzovoort.
3. **Zet een referentiepunt vast**: zweef boven een bestaand vangpunt tot de markering een gevuld vierkant wordt.
4. Beweeg de cursor van de pin weg, ongeveer in de gewenste hoek. Komt hij dicht bij een van de ANGL-stappen, dan **vergrendelt** de richting — vanaf de pin verschijnt een volgindicator.
5. **Typ de lengte** en druk op **Enter** of **Space**. Het punt wordt precies op die afstand van de pin geplaatst, langs de vergrendelde hoek.

De prompt in de terminal vertelt wanneer je kunt typen. Vergrendeld luidt hij:

```
pick start point or enter length: [ ]
```

en de getypte waarde verschijnt tussen de haakjes.

## Waarom het eerste punt telt

Dit is het geval dat anders onmogelijk zou zijn. Stel dat een lijn precies 250 eenheden rechts van een bestaande hoek moet beginnen:

1. Start [Line](../../commands/line/).
2. Zet de bestaande hoek vast.
3. Beweeg naar rechts tot de richting op 0° vergrendelt.
4. Typ `250`, druk op **Enter**.

De lijn begint nu op 250 eenheden van de hoek, zonder hulpgeometrie en zonder rekenwerk. Zonder Dist heeft de opdracht Line nog geen punten verzameld, dus is er niets *waarvandaan* een getypte lengte gemeten kan worden — je zou alleen bij benadering kunnen klikken, of een hulplijn trekken en die daarna wissen.

Voor het **tweede en volgende** punt heeft de opdracht al haar eigen anker (het vorige punt), en dat wordt als eerste gebruikt. De pin wordt alleen als alternatief geraadpleegd wanneer je eigen anker niet vergrendeld is, dus iets vastzetten kaapt geen vergrendeling die je al hebt.

## Typen bevriest de vergrendeling

Zodra je cijfers begint te typen, verandert het anker niet meer. Welk punt ook vergrendeld was toen het eerste cijfer binnenkwam, blijft het anker tot je bevestigt of het veld leegmaakt — de muis bewegen tijdens het invoeren verlegt de meting niet stilletjes naar een andere pin of naar het eigen punt van de opdracht.

## Toetsenbordoverzicht

| Toets | Actie |
|-------|-------|
| `0`–`9`, `.` | Toevoegen aan de lengte |
| `-` | Negatieve lengte — keert de richting langs de vergrendelde hoek om (alleen als eerste teken) |
| `Backspace` | Laatste teken wissen |
| `Enter` / `Space` | Het punt op de getypte lengte plaatsen |
| `Escape` | Opdracht annuleren; vergrendeling en getypte waarde worden gewist |

Een lengte typen is optioneel. Met de richting vergrendeld kun je nog steeds klikken, en het punt wordt op de vergrendelde hoek geprojecteerd.

## Waar het werkt

Afstandsvolging is beschikbaar in elke opdracht die je punten laat aanwijzen:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) en [ViewportCopy](../../commands/viewport-copy/).

## Zie ook

- [Vector Pins](../vector-pins/) — punten vastzetten en langs hun referentielijnen volgen
- [Grid & Snap](../grid-snap/) — de andere precisiehulpmiddelen in de bedieningsbalk
- [Distance](../../commands/distance/) — een bestaande afstand meten in plaats van een nieuwe typen
