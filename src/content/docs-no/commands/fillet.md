---
title: Fillet-kommando — Avrund et Hjørne med en Tangentbue
description: Fillet-kommandoen avrunder et hjørne mellom to Line-, Arc- eller Polyline-segmenter med en tangentbue med angitt radius. Å avrunde en polylinjes eget hjørne setter buen rett inn i den; å avrunde over en åpen polylinje slår sammen begge sidene til en ny polylinje.
keywords: [CAD fillet-kommando, avrund hjørne CAD, fillet-bue, tangentbue, polylinje fillet, bue fillet, kulmanlab]
group: edit
order: 11
---

# Fillet

Kommandoen `Avrund` avrunder et hjørne mellom to [Line](../line/)-, [Arc](../arc/)- eller [Polyline](../polyline/)-segmenter ved å sette inn en tangentbue med en gitt radius, og trimmer (eller slår sammen) de valgte entitetene til det punktet.

Fillet fungerer på **Line-, Arc- og Polyline**-entiteter — inkludert en polylinjes egne rette eller buesegmenter.

## Bruke fillet

1. Skriv `Avrund` i terminalen eller klikk på **Fillet**-knappen i verktøylinjen.
2. **Skriv inn fillet-radiusen** og trykk **Enter**.
3. **Klikk den første linjen, buen eller polylinjesegmentet** — delen du klikker avgjør hvilken side av et eventuelt skjæringspunkt som beholdes.
4. **Hold markøren over den andre entiteten** — en stiplet bue-forhåndsvisning viser den resulterende fileten. Flytt markøren til siden du vil beholde.
5. **Klikk** for å bruke.

```
  Før:                        Etter fillet (radius r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Sidevalg for kryssende entiteter

Når to entiteter krysser hverandre, brukes fileten på hjørnet definert av klikkposisjonene — delen av hver entitet på **samme side som markøren** beholdes.

- Klikk nær den ene enden av den første entiteten for å velge den halvdelen.
- Flytt markøren til ønsket halvdel av den andre entiteten — den stiplede forhåndsvisningen oppdateres live.

## Hva kommandoen oppretter

Hva som kommer ut avhenger av hva du har valgt:

- **To frittstående Line/Arc-entiteter**, eller et hvilket som helst par uten en åpen polylinje: begge trimmes tilbake til tangentpunktene **T1**/**T2**, og en ny Arc-entitet settes inn mellom dem.
- **To segmenter av samme polylinje som deler et hjørnepunkt**: ingen ny entitet — fileten blir en del av polylinjen selv. Hjørnepunktet erstattes av de to tangentpunktene, og buen mellom dem lagres som bulgen til den kanten — akkurat slik et avrundet polylinjehjørne rundtur gjennom DXF.
- **Alt annet som involverer en åpen polylinje** — to forskjellige åpne polylinjer, eller en åpen polylinje og en frittstående Line/Arc: begge slås sammen til **én ny polylinje**, der hver side beholdes fram til sitt tangentpunkt og bindes sammen av fillet-buen som ett buesegment til, og erstatter de opprinnelige entitetene.

Den innsatte eller forlengede buen arver gjeldende lineweight-, farge-, lag- og linetype-innstillinger (eller polylinjens egne, når den går inn i den).

## Hjørner uten en reell vinkel å avrunde

Hvis de to valgte segmentene allerede møtes tangentielt i et delt hjørnepunkt — et rett polylinjehjørne, eller en linje som glir jevnt over i et tangentielt fortsettelsessegment av en bue — finnes det ikke noe reelt hjørne en sirkel kan avrunde. Fillet oppdager dette og nekter med `cannot fillet: no tangent circle fits there` i stedet for å tegne en uønsket sløyfe.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Legg til siffer i radiusverdien |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` / `Space` | Bekreft den inntastede radiusen og gå videre til entitetsvalg |
| `Escape` | Avbryt og tilbakestill |

## Støttede entiteter

| Entitet | Støttet |
|--------|-----------|
| Line | Ja |
| Arc | Ja |
| Polyline (rett eller buesegment) | Ja |
| Circle, Ellipse | Nei |
| Text, Spline, Dimension, Leader | Nei |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Hjørnetype | Avrundet bue | Rett kutt |
| Inndata | Én radius | To avstander (d1, d2) |
| Innsatt entitet | Arc | Line |
| Støttede entiteter | Lines, Arcs og Polylines (rette eller buesegmenter) | Lines og Polylines (kun rette segmenter) |
