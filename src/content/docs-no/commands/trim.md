---
title: Trim-kommando — Kutt Segmenter ved Skjæringspunkter
description: Trim-kommandoen fjerner delen av en Line, Arc, Circle, Ellipse eller Polyline mellom to tilstøtende skjæringspunkter nærmest markøren. Forhåndsvisningen viser nøyaktig hvilket segment som vil bli kuttet før du klikker.
keywords: [CAD trim-kommando, trim linje CAD, trim sirkel CAD, trim bue CAD, trim ellipse CAD, trim polylinje CAD, kutt linjeskjæring, hover trim-forhåndsvisning, kulmanlab]
group: edit
order: 8
---

# Trim

Kommandoen `Beskjær` fjerner delen av en [Line](../line/), [Arc](../arc/), [Circle](../circle/), [Ellipse](../ellipse/) eller [Polyline](../polyline/) som ligger mellom to tilstøtende skjæringspunkter, og deler entiteten i én eller flere gjenværende deler. Segmentet som skal kuttes avgjøres av markørposisjonen — hold markøren over delen du vil fjerne, og klikk for å trimme den.

## Trimme en entitet

1. Skriv `Beskjær` i terminalen eller klikk på **Trim**-knappen i verktøylinjen.
2. **Hold markøren over segmentet** du vil fjerne — en forhåndsvisning fremhever nøyaktig delen som vil bli kuttet.
3. **Klikk** for å fjerne det segmentet.

Kommandoen forblir aktiv etter hver trimming, slik at du kan fortsette å holde markøren over og klikke for å kutte flere segmenter — på samme entitet eller en annen. Trykk **Enter**, **Space** eller **Escape** for å avslutte.

```
  Før:                        Etter trimming av midtsegmentet:

  ──────●──────●──────        ──────●          ●──────
      skjæring  skjæring       (venstre del)  (høyre del)
                                (midtsegmentet fjernet)
```

## Hvordan trim-segmentet avgjøres

Kommandoen projiserer markørposisjonen på entiteten den holder over, og finner alle skjæringspunkter entiteten har med andre entiteter. Disse skjæringspunktene deler entiteten inn i segmenter — for en Line, Arc eller åpen Polyline fungerer entitetens egne endepunkter som ekstra faste grenser. En fullstendig Circle eller Ellipse, eller en lukket Polyline (inkludert en Rectangle), har ingen egne endepunkter, så minst to skjæringspunkter kreves før den i det hele tatt kan trimmes. Segmentet hvis intervall inneholder markørens projeksjon fremheves og vil bli fjernet ved klikk.

- **Line, Arc og åpen Polyline** — det fjernede segmentet kan være den ledende delen (før det første skjæringspunktet), en midtre del (mellom to skjæringspunkter, som deler entiteten i to), eller den etterfølgende delen (etter det siste skjæringspunktet).
- **Circle, Ellipse og lukket Polyline/Rectangle** — siden det ikke finnes noen fast start eller slutt, kan kun buen mellom to *skjæringspunkter* fjernes. Med færre enn to skjæringspunkter vises ingen forhåndsvisning, og et klikk gjør ingenting. Resten av formen blir den eneste gjenværende delen.

## Hva trimmingen gir

| Entitet | Resultat etter trimming |
|--------|------------------------|
| Line | Opptil to kortere Line-entiteter |
| Arc | Opptil to kortere Arc-entiteter |
| Circle | Én [Arc](../arc/)-entitet — sirkelens lukkede form forsvinner, så den gjenværende delen lagres som en bue |
| Ellipse | Én Ellipse-entitet med start- og sluttvinkel — den gjenværende delen forblir en Ellipse, nå delvis |
| Polyline (åpen) | Opptil to kortere Polyline-entiteter |
| Polyline (lukket) / Rectangle | Én åpen Polyline-entitet — den lukkede formen forsvinner, så den gjenværende delen lagres åpen |
| Spline | Opptil to kortere Spline-objekter — hver bit er samme kurve over en mindre del av seg selv, lagret som kontrollpunkter (tilpasningspunktene til en Fit-spline forkastes); en lukket spline etterlater én åpen bit |

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Avslutt trim-modus |
| `Escape` | Avslutt trim-modus |

## Støttede entiteter

| Entitet | Kan trimmes? |
|--------|----------------|
| Line | Ja |
| Arc | Ja |
| Circle | Ja — krever 2 eller flere skjæringspunkter |
| Ellipse | Ja — krever 2 eller flere skjæringspunkter |
| Polyline (åpen) | Ja |
| Polyline (lukket) / Rectangle | Ja — krever 2 eller flere skjæringspunkter |
| Spline | Ja — en lukket spline krever 2 eller flere skjæringspunkter; en spline kuttes også der den krysser seg selv |
| Text, Dimension, Leader | Nei |

Objektene som brukes som **kuttgrenser** kan være Line, Arc, Circle, Ellipse, Polyline eller Spline. Text-, Dimension- og Leader-objekter registrerer aldri skjæringer, så de kan heller ikke fungere som grenser.

En Polylines **buesegmenter** (tegnet med Arc-bryteren, eller importert) trimmes akkurat som de rette segmentene — hold musepekeren over buedelen mellom to skjæringspunkter og klikk. Den trimmede kanten beholder krumningen sin; bare lengden endres.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Hva den gjør | Fjerner et segment av en entitet | Strekker et linjeendepunkt til en grense |
| Utløser | Hold markøren over segmentet for å kutte | Hold markøren nær endepunktet for å forlenge |
| Resultat | Entiteten deles eller forkortes | Linjeendepunktet flyttes til grensen |
| Støttede entiteter | Line, Arc, Circle, Ellipse, Polyline, Spline | Line, Arc, Ellipse, Polyline |
