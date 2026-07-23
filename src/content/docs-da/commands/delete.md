---
title: Delete-kommando — Fjern Entiteter fra Tegningen
description: Delete-kommandoen fjerner markerede entiteter permanent (kan fortrydes). Forhåndsmarkerede entiteter slettes øjeblikkeligt uden bekræftelsestrin. Delete-tasten fungerer som en global genvej, selv uden at aktivere kommandoen. Understøtter enkeltklik og områdemarkering.
keywords: [CAD delete-kommando, fjern entiteter CAD, slet objekter CAD, delete-tast CAD, fortryd sletning CAD, kulmanlab]
group: edit
order: 7
---

# Delete

Kommandoen `delete` fjerner markerede entiteter fra tegningen. Slettelser registreres i [Undo](../undo/)-historikken og kan fortrydes op til 20 trin. Der er ingen separat "bekræft sletning"-dialog — bekræftelse er ét enkelt tastetryk.

## To måder at slette på

**Markér først, slet derefter** — den hurtigste vej:

1. Markér én eller flere entiteter på lærredet.
2. Skriv `delete` i terminalen, klik på **Delete**-knappen i værktøjslinjen, **eller tryk direkte på `Delete`-tasten**.

Entiteter fjernes øjeblikkeligt — intet ekstra bekræftelsestrin.

**Aktivér, markér derefter**:

1. Skriv `delete` eller klik på værktøjslinjeknappen (med intet markeret).
2. **Markér objekter** — klik for at slå til/fra, eller træk for at markere efter område.
3. Tryk **Enter**, **Space** eller **Delete** for at bekræfte og fjerne de markerede entiteter.

## Delete-tastegenvej

`Delete`-tasten på tastaturet fungerer som en **global genvej** — hvis nogen entiteter i øjeblikket er markeret, sletter et tryk dem straks, selv uden at åbne Delete-kommandoen i terminalen. Dette er den hurtigste ét-trins sletteworkflow:

```
Klik entitet → tryk Delete-tasten → færdig
```

## Markering under kommandoen

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Slår entiteten under markøren til/fra i markeringen |
| **Træk mod højre** (streng) | Markerer kun entiteter helt inde i boksen |
| **Træk mod venstre** (krydsning) | Markerer entiteter der krydser boksens kant |
| **Enter** / **Space** / **Delete** | Bekræfter og sletter markerede entiteter |

## Gendanne slettede entiteter

Slettelser kan fortrydes med [Undo](../undo/)-kommandoen (skriv `undo` eller brug værktøjslinjeknappen). Op til **20 trin** kan fortrydes pr. fil, og historikken bevares på tværs af sideindlæsninger. Hvis du har overskredet 20 slettelser uden at gemme, kan tidligere slettelser ikke gendannes.

## Understøttede entiteter

Delete fungerer på alle entitetstyper — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader og alle andre.
