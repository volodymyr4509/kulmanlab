---
title: Trim-kommando — Skær Linjesegmenter ved Skæringspunkter
description: Trim-kommandoen fjerner den del af en linje der ligger mellem to tilstødende skæringspunkter nærmest markøren. En rød hover-forhåndsvisning viser nøjagtigt hvilket segment der vil blive skåret, før du klikker. Trim fungerer kun på Line-entiteter — ikke buer, cirkler eller polylinjer.
keywords: [CAD trim-kommando, trim linje CAD, skær linjeskæring, hover trim-forhåndsvisning, kun linjer trim, kulmanlab]
group: edit
order: 8
---

# Trim

Kommandoen `trim` fjerner den del af en [Line](../line/), der ligger mellem to tilstødende skæringspunkter, og deler linjen i ét eller to kortere segmenter. Segmentet der skal skæres, bestemmes af markørpositionen — hold markøren over den del, du vil fjerne, og klik for at trimme den.

Trim fungerer kun på **Line-entiteter**. For buer, cirkler, polylinjer og andre entitetstyper, brug [Delete](../delete/) eller grebredigering i stedet.

## Trimme en linje

1. Skriv `trim` i terminalen eller klik på **Trim**-knappen i værktøjslinjen.
2. **Hold markøren over det linjesegment**, du vil fjerne — en rød forhåndsvisning fremhæver nøjagtigt den del, der vil blive skåret.
3. **Klik** for at fjerne det segment.

Kommandoen forbliver aktiv efter hver trimning, så du kan fortsætte med at holde markøren over og klikke for at skære flere segmenter. Tryk **Escape** for at afslutte.

```
  Før:                        Efter trimning af midtersegmentet:

  ──────●──────●──────        ──────●          ●──────
      skæring  skæring          (venstre del)  (højre del)
                                 (midtersegmentet fjernet)
```

## Hvordan trim-segmentet bestemmes

Kommandoen projicerer markørpositionen på linjen, den holder over, og finder alle skæringspunkter, linjen har med andre entiteter. Disse skæringsparametre deler linjen i segmenter. Segmentet, hvis interval indeholder markørens projektion, fremhæves og vil blive fjernet ved klik.

- Hvis markøren er **før det første skæringspunkt**: den ledende del af linjen fjernes.
- Hvis markøren er **mellem to skæringspunkter**: den midterste del fjernes; linjen deles i to.
- Hvis markøren er **efter det sidste skæringspunkt**: den efterfølgende del fjernes.
- Hvis linjen **ikke har nogen skæringspunkter** med nogen anden entitet: ingen forhåndsvisning vises, og et klik gør ingenting.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Escape` | Afslut trim-tilstand |

## Understøttede entiteter

| Entitet | Kan trimmes? |
|--------|----------------|
| Line | Ja |
| Arc, Circle, Ellipse | Nej |
| Polyline / Rectangle | Nej |
| Text, Spline, Dimension, Leader | Nej |

Entiteterne der bruges som **skæregrænser** kan være af en hvilken som helst type — kun linjen der trimmes skal være en Line-entitet.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Hvad den gør | Fjerner et segment af en linje | Strækker et linjeendepunkt til en grænse |
| Udløser | Hold markøren over segmentet for at skære | Hold markøren nær endepunktet for at forlænge |
| Resultat | Linjen deles eller forkortes | Linjeendepunktet flytter til grænsen |
| Begge | Kun linjer | Kun linjer |
