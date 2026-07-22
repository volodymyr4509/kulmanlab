---
title: Trim-kommando — Kutt Linjesegmenter ved Skjæringspunkter
description: Trim-kommandoen fjerner delen av en linje mellom to tilstøtende skjæringspunkter nærmest markøren. En rød hover-forhåndsvisning viser nøyaktig hvilket segment som vil bli kuttet før du klikker. Trim fungerer kun på Line-entiteter — ikke buer, sirkler eller polylinjer.
keywords: [CAD trim-kommando, trim linje CAD, kutt linjeskjæring, hover trim-forhåndsvisning, kun linjer trim, kulmanlab]
group: edit
order: 8
---

# Trim

Kommandoen `trim` fjerner delen av en [Line](../line/) som ligger mellom to tilstøtende skjæringspunkter, og deler linjen i ett eller to kortere segmenter. Segmentet som skal kuttes avgjøres av markørposisjonen — hold markøren over delen du vil fjerne, og klikk for å trimme den.

Trim fungerer kun på **Line-entiteter**. For buer, sirkler, polylinjer og andre entitetstyper, bruk [Delete](../delete/) eller grep-redigering i stedet.

## Trimme en linje

1. Skriv `trim` i terminalen eller klikk på **Trim**-knappen i verktøylinjen.
2. **Hold markøren over linjesegmentet** du vil fjerne — en rød forhåndsvisning fremhever nøyaktig delen som vil bli kuttet.
3. **Klikk** for å fjerne det segmentet.

Kommandoen forblir aktiv etter hver trimming, slik at du kan fortsette å holde markøren over og klikke for å kutte flere segmenter. Trykk **Escape** for å avslutte.

```
  Før:                        Etter trimming av midtsegmentet:

  ──────●──────●──────        ──────●          ●──────
      skjæring  skjæring       (venstre del)  (høyre del)
                                (midtsegmentet fjernet)
```

## Hvordan trim-segmentet avgjøres

Kommandoen projiserer markørposisjonen på linjen den holder over, og finner alle skjæringspunkter linjen har med andre entiteter. Disse skjæringsparameterne deler linjen inn i segmenter. Segmentet hvis intervall inneholder markørens projeksjon fremheves og vil bli fjernet ved klikk.

- Hvis markøren er **før det første skjæringspunktet**: den ledende delen av linjen fjernes.
- Hvis markøren er **mellom to skjæringspunkter**: den midtre delen fjernes; linjen deles i to.
- Hvis markøren er **etter det siste skjæringspunktet**: den etterfølgende delen fjernes.
- Hvis linjen **ikke har noen skjæringspunkter** med noen annen entitet: ingen forhåndsvisning vises, og et klikk gjør ingenting.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Escape` | Avslutt trim-modus |

## Støttede entiteter

| Entitet | Kan trimmes? |
|--------|----------------|
| Line | Ja |
| Arc, Circle, Ellipse | Nei |
| Polyline / Rectangle | Nei |
| Text, Spline, Dimension, Leader | Nei |

Entitetene som brukes som **kuttgrenser** kan være av en hvilken som helst type — kun linjen som trimmes må være en Line-entitet.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Hva den gjør | Fjerner et segment av en linje | Strekker et linjeendepunkt til en grense |
| Utløser | Hold markøren over segmentet for å kutte | Hold markøren nær endepunktet for å forlenge |
| Resultat | Linjen deles eller forkortes | Linjeendepunktet flyttes til grensen |
| Begge | Kun linjer | Kun linjer |
