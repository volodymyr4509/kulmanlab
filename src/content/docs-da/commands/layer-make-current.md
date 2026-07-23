---
title: LayerMakeCurrent — Sæt en Entitets Lag som Aktuelt
description: LayerMakeCurrent-kommandoen sætter det aktuelle tegnelag til at matche laget for en klikket entitet.
keywords: [lag aktuelt, sæt aktuelt lag CAD, kulmanlab lagadministration]
group: layer
order: 1
---

# LayerMakeCurrent

Kommandoen `LayerMakeCurrent` sætter det **aktuelle tegnelag** til, hvilket lag den klikkede entitet end tilhører. Nye entiteter vil derefter blive tegnet på det lag automatisk.

## Brug

1. Skriv `LayerMakeCurrent` i terminalen eller klik på **Make Current**-knappen i værktøjslinjen (pipetteikon).
2. **Klik en hvilken som helst entitet** på lærredet.
3. Det aktuelle lag opdateres til at matche den entitets lag. Kommandoen afsluttes straks.

## Adfærdsdetaljer

- Hvis du klikker på et tomt lærred (ingen entitet ramt), viser terminalen `no object found`, og kommandoen forbliver aktiv, så du kan prøve igen.
- Kun den aktuelle lagindstilling ændres — ingen entiteter modificeres.
- Det opdaterede lag afspejles i lagvælgeren i værktøjslinjen.
