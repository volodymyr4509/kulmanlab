---
title: LayerUnfreezeAll — Frys upp alla lager i KulmanLab CAD
description: LayerUnfreezeAll-kommandot rensar den frysta flaggan på alla lager i ritningen i ett steg.
keywords: [lager upptining, frys upp alla lager CAD, kulmanlab lagerhantering]
group: layer
order: 4
---

# LayerUnfreezeAll

`LayerUnfreezeAll`-kommandot rensar den frysta flaggan på **alla lager** i ritningen omedelbart. Ingen markering eller bekräftelse behövs — det körs och avslutas i ett steg.

## Användning

Skriv `LayerUnfreezeAll` i terminalen eller klicka på verktygsfältsknappen **Unfreeze All** (solikon). Alla frysta lager blir omedelbart synliga.

## När det används

Används vanligtvis efter [LayerIsolate](../layer-isolate/) för att återställa alla lager till sitt normala synliga tillstånd.

## Beteendedetaljer

- Gäller alla lager oavsett deras aktuella tillstånd.
- Påverkar inte låsta flaggor eller plot-flaggor — endast den frysta flaggan ändras.
- Kommandot avslutas omedelbart utan några uppmaningar.
