---
title: Undo-kommando — Gå Bakover gjennom Tegnehistorikken
description: Undo-kommandoen reverserer den siste tegnehandlingen ett steg om gangen. Opptil 20 steg lagres per fil og bevares i nettleseren på tvers av sideinnlastinger. Å utføre en ny handling etter angring tømmer redo-stabelen.
keywords: [CAD undo-kommando, angre-historikk CAD, reverser handling CAD, angre-steg CAD, nettleser vedvarende angring, kulmanlab]
group: edit
order: 13
---

# Undo

Kommandoen `undo` reverserer den siste endringen i tegningen — ett steg per kalling. Hver tilføyelse, sletting eller redigering av entiteter registreres som en egen historikkoppføring. Undo går bakover gjennom disse oppføringene i omvendt rekkefølge.

## Slik angrer du

- Skriv `undo` i terminalen, eller
- Klikk på **Undo**-knappen i verktøylinjen.

Hver kalling reverserer én registrert handling. Kall den gjentatte ganger for å gå lenger tilbake.

## Historikkoppførsel

| Detalj | Verdi |
|--------|-------|
| Steg per fil | Opptil **20** |
| Lagring | Nettleser (IndexedDB / localStorage), per filnavn |
| Overlever sideinnlasting | Ja — historikken gjenopprettes når du åpner filen på nytt |
| Ny handling etter angring | Tømmer alle redo-oppføringer foran gjeldende posisjon |
| Eldste oppføring når full | Fjernes for å gi plass til den nyeste endringen |

Hver entitetsendring registreres: å tegne nye entiteter, slette entiteter, grep-redigere endepunkter, bruke Move, Rotate, Scale, Mirror, Trim, Extend og Offset oppretter alle historikkoppføringer.

## Undo vs Redo

| | Undo | Redo |
|---|------|------|
| Retning | Går **bakover** gjennom historikken | Går **fremover** gjennom angrede oppføringer |
| Tilgjengelig når | Minst én registrert handling finnes | Minst én Undo er utført og ingen ny handling er tatt |
| Tømmes av | Ingenting — historikken samler seg opp til grensen på 20 steg | Enhver ny tegnehandling |

Bruk [Redo](../redo/) for å bruke en angret handling på nytt. Verktøylinjeknappene er nedtonet når den respektive retningen ikke er tilgjengelig.
