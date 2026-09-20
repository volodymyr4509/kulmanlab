---
title: Trim-kommando — Skær Segmenter ved Skæringspunkter
description: Trim-kommandoen fjerner den del af en Line, Arc, Circle, Ellipse eller Polyline der ligger mellem to tilstødende skæringspunkter nærmest markøren. Forhåndsvisningen viser nøjagtigt hvilket segment der vil blive skåret, før du klikker.
keywords: [CAD trim-kommando, trim linje CAD, trim cirkel CAD, trim bue CAD, trim ellipse CAD, trim polylinje CAD, skær linjeskæring, hover trim-forhåndsvisning, kulmanlab]
group: edit
order: 8
---

# Trim

Kommandoen `Beskær` fjerner den del af en [Line](../line/), [Arc](../arc/), [Circle](../circle/), [Ellipse](../ellipse/) eller [Polyline](../polyline/), der ligger mellem to tilstødende skæringspunkter, og deler entiteten i én eller flere resterende dele. Segmentet der skal skæres, bestemmes af markørpositionen — hold markøren over den del, du vil fjerne, og klik for at trimme den.

## Trimme en entitet

1. Skriv `Beskær` i terminalen eller klik på **Trim**-knappen i værktøjslinjen.
2. **Hold markøren over segmentet**, du vil fjerne — en forhåndsvisning fremhæver nøjagtigt den del, der vil blive skåret.
3. **Klik** for at fjerne det segment.

Kommandoen forbliver aktiv efter hver trimning, så du kan fortsætte med at holde markøren over og klikke for at skære flere segmenter — på samme entitet eller en anden. Tryk **Enter**, **Space** eller **Escape** for at afslutte.

```
  Før:                        Efter trimning af midtersegmentet:

  ──────●──────●──────        ──────●          ●──────
      skæring  skæring          (venstre del)  (højre del)
                                 (midtersegmentet fjernet)
```

## Hvordan trim-segmentet bestemmes

Kommandoen projicerer markørpositionen på entiteten, den holder over, og finder alle skæringspunkter, entiteten har med andre entiteter. Disse skæringspunkter deler entiteten i segmenter — for en Line, Arc eller åben Polyline fungerer entitetens egne endepunkter som ekstra faste grænser. En fuldstændig Circle eller Ellipse, eller en lukket Polyline (inklusive en Rectangle), har ingen egne endepunkter, så der kræves mindst to skæringspunkter, før den overhovedet kan trimmes. Segmentet, hvis interval indeholder markørens projektion, fremhæves og vil blive fjernet ved klik.

- **Line, Arc og åben Polyline** — det fjernede segment kan være den ledende del (før det første skæringspunkt), en midterste del (mellem to skæringspunkter, hvilket deler entiteten i to), eller den efterfølgende del (efter det sidste skæringspunkt).
- **Circle, Ellipse og lukket Polyline/Rectangle** — da der ikke findes en fast start eller slutning, kan kun buen mellem to *skæringspunkter* fjernes. Med færre end to skæringspunkter vises ingen forhåndsvisning, og et klik gør ingenting. Resten af formen bliver den eneste resterende del.

## Hvad trimningen giver

| Entitet | Resultat efter trimning |
|--------|------------------------|
| Line | Op til to kortere Line-entiteter |
| Arc | Op til to kortere Arc-entiteter |
| Circle | Én [Arc](../arc/)-entitet — cirklens lukkede form forsvinder, så den resterende del gemmes som en bue |
| Ellipse | Én Ellipse-entitet med start- og slutvinkel — den resterende del forbliver en Ellipse, nu delvis |
| Polyline (åben) | Op til to kortere Polyline-entiteter |
| Polyline (lukket) / Rectangle | Én åben Polyline-entitet — den lukkede form forsvinder, så den resterende del gemmes åben |

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Afslut trim-tilstand |
| `Escape` | Afslut trim-tilstand |

## Understøttede entiteter

| Entitet | Kan trimmes? |
|--------|----------------|
| Line | Ja |
| Arc | Ja |
| Circle | Ja — kræver 2 eller flere skæringspunkter |
| Ellipse | Ja — kræver 2 eller flere skæringspunkter |
| Polyline (åben) | Ja |
| Polyline (lukket) / Rectangle | Ja — kræver 2 eller flere skæringspunkter |
| Text, Spline, Dimension, Leader | Nej |

Entiteterne der bruges som **skæregrænser** kan være Line, Arc, Circle, Ellipse eller Polyline. Text-, Spline-, Dimension- og Leader-entiteter registrerer aldrig skæringspunkter, så de kan heller ikke fungere som grænser.

En Polylines **buesegmenter** (tegnet med Arc-kontakten, eller importeret) beskæres nøjagtig som dens lige segmenter — hold musen over buedelen mellem to skæringer og klik. Den beskårne kant bevarer sin krumning; kun længden ændres.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Hvad den gør | Fjerner et segment af en entitet | Strækker et linjeendepunkt til en grænse |
| Udløser | Hold markøren over segmentet for at skære | Hold markøren nær endepunktet for at forlænge |
| Resultat | Entiteten deles eller forkortes | Linjeendepunktet flytter til grænsen |
| Understøttede entiteter | Line, Arc, Circle, Ellipse, Polyline | Line, Arc, Ellipse, Polyline |
