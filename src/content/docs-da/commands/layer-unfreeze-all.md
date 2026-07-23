---
title: LayerUnfreezeAll — Fjern Frysning af Alle Lag i KulmanLab CAD
description: LayerUnfreezeAll-kommandoen fjerner det frosne flag på hvert lag i tegningen i ét trin.
keywords: [fjern lagfrysning, fjern frysning af alle lag CAD, kulmanlab lagadministration]
group: layer
order: 4
---

# LayerUnfreezeAll

Kommandoen `LayerUnfreezeAll` fjerner det frosne flag på **hvert lag** i tegningen med det samme. Ingen markering eller bekræftelse nødvendig — den kører og fuldføres i ét trin.

## Brug

Skriv `LayerUnfreezeAll` i terminalen eller klik på **Unfreeze All**-knappen i værktøjslinjen (solikon). Alle frosne lag bliver synlige med det samme.

## Hvornår du bør bruge den

Bruges typisk efter [LayerIsolate](../layer-isolate/) for at gendanne alle lag til deres normale synlige tilstand.

## Adfærdsdetaljer

- Gælder alle lag uanset deres aktuelle tilstand.
- Påvirker ikke låste eller plot-flag — kun det frosne flag ændres.
- Kommandoen afsluttes med det samme uden nogen prompts.
