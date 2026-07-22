---
title: Extend-kommando — Forleng en Linjeende til Nærmeste Grense
description: Extend-kommandoen forlenger det nærmeste endepunktet til en linje du holder markøren over, til det nærmeste skjæringspunktet med en annen entitet. En levende forhåndsvisning viser den forlengede linjen før du klikker. Extend fungerer kun på Line-entiteter og ignorerer Text, Spline og Multileader som grenser.
keywords: [CAD extend-kommando, forleng linje CAD, forleng linje til grense, linjeendepunkt forlengelse, hover extend-forhåndsvisning, kulmanlab]
group: edit
order: 9
---

# Extend

Kommandoen `extend` forlenger det nærmeste endepunktet til en [Line](../line/) til det nærmeste skjæringspunktet den ville danne med en annen entitet i tegningen. Hold markøren nær endepunktet du vil forlenge — en forhåndsvisning viser den forlengede linjen — klikk deretter for å bruke den.

Extend fungerer kun på **Line-entiteter**. Grensene linjen forlenges mot kan være en hvilken som helst annen entitetstype unntatt Text, Mtext, Multileader og Spline.

## Forlenge en linje

1. Skriv `extend` i terminalen eller klikk på **Extend**-knappen i verktøylinjen.
2. **Hold markøren nær den ene enden av en linje** — forhåndsvisningen viser linjen forlenget til nærmeste grense i den retningen.
3. **Klikk** for å bruke forlengelsen.

Kommandoen forblir aktiv etter hver forlengelse slik at du kan forlenge flere linjer i rekkefølge. Trykk **Escape** for å avslutte.

```
  Før:                          Etter:

  ──────           |           ──────────────|
  (kort linje)     (grense)    (forlenget til grensen)
```

## Hvordan endepunktet velges

Kommandoen ser på hvilket endepunkt markøren er nærmest:

- Markøren **nærmere sluttpunktet** → slutten forlenges fremover langs linjeretningen.
- Markøren **nærmere startpunktet** → starten forlenges bakover (i motsatt retning).

En stråle kastes fra det valgte endepunktet langs linjeretningen, og det **nærmeste skjæringspunktet** langs den strålen med en hvilken som helst annen entitet (unntatt selve linjen og de ignorerte typene) blir det nye endepunktet.

Hvis ingen skjæringspunkt finnes i den retningen, vises ingen forhåndsvisning, og et klikk gjør ingenting.

## Grenseunntak

Følgende entitetstyper ignoreres som grenser — en linje forlenges ikke for å møte dem:

- Text / Mtext
- Multileader
- Spline

Alle andre typer (Line, Arc, Circle, Ellipse, Polyline, Dimension) fungerer som gyldige grenser.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Escape` | Avslutt extend-modus |

## Støttede entiteter

| Entitet | Kan forlenges? |
|--------|----------------|
| Line | Ja |
| Arc, Circle, Ellipse | Nei |
| Polyline / Rectangle | Nei |
| Text, Spline, Dimension, Leader | Nei |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Hva den gjør | Forlenger et linjeendepunkt til en grense | Fjerner et segment av en linje |
| Utløser | Hold markøren nær endepunktet for å forlenge | Hold markøren over segmentet for å kutte |
| Resultat | Linjeendepunktet flyttes utover | Linjen deles eller forkortes |
| Begge | Kun linjer | Kun linjer |
