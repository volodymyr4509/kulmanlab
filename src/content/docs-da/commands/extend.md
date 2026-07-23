---
title: Extend-kommando — Forlæng en Linjeende til Nærmeste Grænse
description: Extend-kommandoen forlænger det nærmeste endepunkt af en linje, du holder markøren over, til det nærmeste skæringspunkt med en anden entitet. En levende forhåndsvisning viser den forlængede linje, før du klikker. Extend fungerer kun på Line-entiteter og ignorerer Text, Spline og Multileader som grænser.
keywords: [CAD extend-kommando, forlæng linje CAD, forlæng linje til grænse, linjeendepunkt forlængelse, hover extend-forhåndsvisning, kulmanlab]
group: edit
order: 9
---

# Extend

Kommandoen `extend` forlænger det nærmeste endepunkt af en [Line](../line/) til det nærmeste skæringspunkt, den ville danne med en anden entitet i tegningen. Hold markøren nær det endepunkt, du vil forlænge — en forhåndsvisning viser den forlængede linje — klik derefter for at anvende.

Extend fungerer kun på **Line-entiteter**. Grænserne linjen forlænges mod kan være en hvilken som helst anden entitetstype undtagen Text, Mtext, Multileader og Spline.

## Forlænge en linje

1. Skriv `extend` i terminalen eller klik på **Extend**-knappen i værktøjslinjen.
2. **Hold markøren nær den ene ende af en linje** — forhåndsvisningen viser linjen forlænget til nærmeste grænse i den retning.
3. **Klik** for at anvende forlængelsen.

Kommandoen forbliver aktiv efter hver forlængelse, så du kan forlænge flere linjer i rækkefølge. Tryk **Escape** for at afslutte.

```
  Før:                          Efter:

  ──────           |           ──────────────|
  (kort linje)     (grænse)    (forlænget til grænsen)
```

## Hvordan endepunktet vælges

Kommandoen ser på, hvilket endepunkt markøren er tættest på:

- Markør **nærmere slutpunktet** → slutningen forlænges fremad langs linjeretningen.
- Markør **nærmere startpunktet** → starten forlænges bagud (i modsat retning).

En stråle kastes fra det valgte endepunkt langs linjeretningen, og det **nærmeste skæringspunkt** langs den stråle med en hvilken som helst anden entitet (undtagen selve linjen og de ignorerede typer) bliver det nye endepunkt.

Hvis intet skæringspunkt findes i den retning, vises ingen forhåndsvisning, og et klik gør ingenting.

## Grænseundtagelser

Følgende entitetstyper ignoreres som grænser — en linje forlænges ikke for at møde dem:

- Text / Mtext
- Multileader
- Spline

Alle andre typer (Line, Arc, Circle, Ellipse, Polyline, Dimension) fungerer som gyldige grænser.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Escape` | Afslut extend-tilstand |

## Understøttede entiteter

| Entitet | Kan forlænges? |
|--------|----------------|
| Line | Ja |
| Arc, Circle, Ellipse | Nej |
| Polyline / Rectangle | Nej |
| Text, Spline, Dimension, Leader | Nej |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Hvad den gør | Forlænger et linjeendepunkt til en grænse | Fjerner et segment af en linje |
| Udløser | Hold markøren nær endepunktet for at forlænge | Hold markøren over segmentet for at skære |
| Resultat | Linjeendepunktet flytter sig udad | Linjen deles eller forkortes |
| Begge | Kun linjer | Kun linjer |
