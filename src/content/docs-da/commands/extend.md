---
title: Extend-kommando — Forlæng en Entitet til Nærmeste Grænse
description: Extend-kommandoen forlænger det nærmeste endepunkt af en Line, Arc, Ellipse eller åben Polyline, du holder markøren over, til det nærmeste skæringspunkt med en anden entitet. En levende forhåndsvisning viser den forlængede entitet, før du klikker.
keywords: [CAD extend-kommando, forlæng linje CAD, forlæng bue CAD, forlæng ellipse CAD, forlæng polylinje CAD, forlæng entitet til grænse, hover extend-forhåndsvisning, kulmanlab]
group: edit
order: 9
---

# Extend

Kommandoen `Forlæng` forlænger det nærmeste endepunkt af en [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/) eller åben [Polyline](../polyline/), du holder markøren over, til det nærmeste skæringspunkt, den ville danne med en anden entitet i tegningen. Hold markøren nær det endepunkt, du vil forlænge — en forhåndsvisning viser den forlængede entitet — klik derefter for at anvende.

Kun entiteter med et reelt endepunkt kan forlænges. En [Circle](../circle/) og en fuldstændig (360°) Ellipse er altid lukkede former uden endepunkt, så de kan aldrig forlænges — det samme gælder en lukket Polyline eller Rectangle. En delvis Ellipse (en elliptisk bue) og en Arc har endepunkter og forlænges på samme måde som en Line.

## Forlænge en entitet

1. Skriv `Forlæng` i terminalen eller klik på **Extend**-knappen i værktøjslinjen.
2. **Hold markøren nær den ene ende** af entiteten, du vil forlænge — forhåndsvisningen viser den forlænget til nærmeste grænse i den retning.
3. **Klik** for at anvende forlængelsen.

Kommandoen forbliver aktiv efter hver forlængelse, så du kan fortsætte med at holde markøren over og klikke for at forlænge flere entiteter. Tryk **Enter**, **Space** eller **Escape** for at afslutte.

```
  Før:                          Efter:

  ──────           |           ──────────────|
  (kort linje)     (grænse)    (forlænget til grænsen)
```

## Hvordan endepunktet vælges

Kommandoen ser på, hvilken ende markøren er tættest på:

- **Line og åben Polyline** — markør tættere på slutpunktet forlænger slutningen fremad; markør tættere på startpunktet forlænger starten bagud.
- **Arc og delvis Ellipse** — markør tættere på en af de vinklede ender får buen til at vokse i den retning, omkring samme centrum og radius (eller samme ellipseform), indtil den når den næste grænse.

En stråle — eller, for Arc og Ellipse, entitetens egen underliggende cirkel eller kurve — kastes fra den valgte ende, og det **nærmeste skæringspunkt** med en hvilken som helst anden entitet (undtagen entiteten selv og de ignorerede typer) bliver det nye endepunkt.

Hvis intet skæringspunkt findes i den retning, vises ingen forhåndsvisning, og et klik gør ingenting.

## Grænseundtagelser

Følgende entitetstyper ignoreres som grænser — en entitet forlænges ikke for at møde dem:

- Text / Mtext
- Multileader
- Spline

Alle andre typer (Line, Arc, Circle, Ellipse, Polyline, Dimension) fungerer som gyldige grænser.

Hvis en Polylines første eller sidste segment selv er et buesegment (tegnet med Arc-kontakten), får en forlængelse buen til at vokse langs sin egen cirkel — nøjagtig som at forlænge en selvstændig Arc — i stedet for at blive behandlet som et lige segment.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Afslut extend-tilstand |
| `Escape` | Afslut extend-tilstand |

## Understøttede entiteter

| Entitet | Kan forlænges? |
|--------|----------------|
| Line | Ja |
| Arc | Ja |
| Ellipse | Ja — kun hvis den allerede er en delvis bue; en fuldstændig ellipse har intet endepunkt |
| Circle | Nej — altid en lukket form uden endepunkt |
| Polyline (åben) | Ja |
| Polyline (lukket) / Rectangle | Nej — altid en lukket form uden endepunkt |
| Text, Spline, Dimension, Leader | Nej |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Hvad den gør | Forlænger en entitets endepunkt til en grænse | Fjerner et segment af en entitet |
| Udløser | Hold markøren nær endepunktet for at forlænge | Hold markøren over segmentet for at skære |
| Resultat | Endepunktet flytter sig udad | Entiteten deles eller forkortes |
| Understøttede entiteter | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
