---
title: LayerMakeCurrent — Sett en Entitets Lag som Gjeldende
description: LayerMakeCurrent-kommandoen setter gjeldende tegnelag til å samsvare med laget til en klikket entitet.
keywords: [lag gjeldende, sett gjeldende lag CAD, kulmanlab lagadministrasjon]
group: layer
order: 1
---

# LayerMakeCurrent

Kommandoen `LayerMakeCurrent` setter **gjeldende tegnelag** til uansett hvilket lag den klikkede entiteten tilhører. Nye entiteter tegnes deretter automatisk på det laget.

## Bruk

1. Skriv `LayerMakeCurrent` i terminalen eller klikk på **Make Current**-knappen i verktøylinjen (pipetteikon).
2. **Klikk en hvilken som helst entitet** på lerretet.
3. Gjeldende lag oppdateres til å samsvare med den entitetens lag. Kommandoen avsluttes umiddelbart.

## Oppførselsdetaljer

- Hvis du klikker på et tomt lerret (ingen entitet treffes), viser terminalen `no object found`, og kommandoen forblir aktiv slik at du kan prøve igjen.
- Kun gjeldende lag-innstillingen endres — ingen entiteter endres.
- Det oppdaterte laget gjenspeiles i lagvelgeren i verktøylinjen.
