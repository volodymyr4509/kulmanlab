---
title: Extend-kommando — Forleng en Entitet til Nærmeste Grense
description: Extend-kommandoen forlenger det nærmeste endepunktet til en Line, Arc, Ellipse eller åpen Polyline du holder markøren over, til det nærmeste skjæringspunktet med en annen entitet. En levende forhåndsvisning viser den forlengede entiteten før du klikker.
keywords: [CAD extend-kommando, forleng linje CAD, forleng bue CAD, forleng ellipse CAD, forleng polylinje CAD, forleng entitet til grense, hover extend-forhåndsvisning, kulmanlab]
group: edit
order: 9
---

# Extend

Kommandoen `Forleng` forlenger det nærmeste endepunktet til en [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/) eller åpen [Polyline](../polyline/) du holder markøren over, til det nærmeste skjæringspunktet den ville danne med en annen entitet i tegningen. Hold markøren nær endepunktet du vil forlenge — en forhåndsvisning viser den forlengede entiteten — klikk deretter for å bruke den.

Bare entiteter med et virkelig endepunkt kan forlenges. En [Circle](../circle/) og en fullstendig (360°) Ellipse er alltid lukkede former uten endepunkt, så de kan aldri forlenges — det samme gjelder en lukket Polyline eller Rectangle. En delvis Ellipse (en elliptisk bue) og en Arc har endepunkter og forlenges på samme måte som en Line.

## Forlenge en entitet

1. Skriv `Forleng` i terminalen eller klikk på **Extend**-knappen i verktøylinjen.
2. **Hold markøren nær den ene enden** av entiteten du vil forlenge — forhåndsvisningen viser den forlenget til nærmeste grense i den retningen.
3. **Klikk** for å bruke forlengelsen.

Kommandoen forblir aktiv etter hver forlengelse, slik at du kan fortsette å holde markøren over og klikke for å forlenge flere entiteter. Trykk **Enter**, **Space** eller **Escape** for å avslutte.

```
  Før:                          Etter:

  ──────           |           ──────────────|
  (kort linje)     (grense)    (forlenget til grensen)
```

## Hvordan endepunktet velges

Kommandoen ser på hvilken ende markøren er nærmest:

- **Line og åpen Polyline** — markøren nærmere sluttpunktet forlenger slutten fremover; markøren nærmere startpunktet forlenger starten bakover.
- **Arc og delvis Ellipse** — markøren nærmere en av de vinklede endene får buen til å vokse i den retningen, rundt samme senter og radius (eller samme ellipseform), til den når neste grense.

En stråle — eller, for Arc og Ellipse, entitetens egen underliggende sirkel eller kurve — kastes fra den valgte enden, og det **nærmeste skjæringspunktet** med en hvilken som helst annen entitet (unntatt entiteten selv og de ignorerte typene) blir det nye endepunktet.

Hvis ingen skjæringspunkt finnes i den retningen, vises ingen forhåndsvisning, og et klikk gjør ingenting.

## Grenseunntak

Følgende entitetstyper ignoreres som grenser — en entitet forlenges ikke for å møte dem:

- Text / Mtext
- Multileader
- Spline

Alle andre typer (Line, Arc, Circle, Ellipse, Polyline, Dimension) fungerer som gyldige grenser.

Hvis en Polylines første eller siste segment selv er et buesegment (tegnet med Arc-bryteren), får forlengelse buen til å vokse langs sin egen sirkel — akkurat som å forlenge en frittstående Arc — i stedet for å behandles som et rett segment.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Avslutt extend-modus |
| `Escape` | Avslutt extend-modus |

## Støttede entiteter

| Entitet | Kan forlenges? |
|--------|----------------|
| Line | Ja |
| Arc | Ja |
| Ellipse | Ja — bare hvis den allerede er en delvis bue; en fullstendig ellipse har ikke endepunkt |
| Circle | Nei — alltid en lukket form uten endepunkt |
| Polyline (åpen) | Ja |
| Polyline (lukket) / Rectangle | Nei — alltid en lukket form uten endepunkt |
| Text, Spline, Dimension, Leader | Nei |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Hva den gjør | Forlenger en entitets endepunkt til en grense | Fjerner et segment av en entitet |
| Utløser | Hold markøren nær endepunktet for å forlenge | Hold markøren over segmentet for å kutte |
| Resultat | Endepunktet flyttes utover | Entiteten deles eller forkortes |
| Støttede entiteter | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
