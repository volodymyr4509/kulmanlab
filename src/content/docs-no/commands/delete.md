---
title: Delete-kommando — Fjern Entiteter fra Tegningen
description: Delete-kommandoen fjerner markerte entiteter permanent (kan angres). Forhåndsmarkerte entiteter slettes øyeblikkelig uten bekreftelsessteg. Delete-tasten fungerer som en global snarvei selv uten å aktivere kommandoen. Støtter enkeltklikk og områdemarkering.
keywords: [CAD delete-kommando, fjern entiteter CAD, slett objekter CAD, delete-tast CAD, angre sletting CAD, kulmanlab]
group: edit
order: 7
---

# Delete

Kommandoen `delete` fjerner markerte entiteter fra tegningen. Slettinger registreres i [Undo](../undo/)-historikken og kan angres i opptil 20 steg. Det finnes ingen egen "bekreft sletting"-dialog — bekreftelse er ett enkelt tastetrykk.

## To måter å slette på

**Marker først, deretter slett** — den raskeste veien:

1. Marker én eller flere entiteter på lerretet.
2. Skriv `delete` i terminalen, klikk på **Delete**-knappen i verktøylinjen, **eller trykk `Delete`-tasten** direkte.

Entiteter fjernes øyeblikkelig — ikke noe ekstra bekreftelsessteg.

**Aktiver, marker deretter**:

1. Skriv `delete` eller klikk på verktøylinjeknappen (uten noe markert).
2. **Marker objekter** — klikk for å slå av/på, eller dra for å markere etter område.
3. Trykk **Enter**, **Space** eller **Delete** for å bekrefte og fjerne de markerte entitetene.

## Delete-tastsnarvei

`Delete`-tasten på tastaturet fungerer som en **global snarvei** — hvis noen entiteter er markert, fjerner et trykk dem umiddelbart, selv uten å åpne Delete-kommandoen i terminalen. Dette er den raskeste ett-stegs slettearbeidsflyten:

```
Klikk entitet → trykk Delete-tasten → ferdig
```

## Markering under kommandoen

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Slår entiteten under markøren av/på i markeringen |
| **Dra til høyre** (streng) | Markerer kun entiteter helt inni boksen |
| **Dra til venstre** (krysning) | Markerer entiteter som krysser boksens kant |
| **Enter** / **Space** / **Delete** | Bekrefter og sletter markerte entiteter |

## Gjenopprette slettede entiteter

Slettinger kan angres med [Undo](../undo/)-kommandoen (skriv `undo` eller bruk verktøylinjeknappen). Opptil **20 steg** kan angres per fil, og historikken lagres på tvers av sideinnlastinger. Hvis du har overskredet 20 slettinger uten å lagre, kan tidligere slettinger ikke gjenopprettes.

## Støttede entiteter

Delete fungerer på alle entitetstyper — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader og alle andre.
