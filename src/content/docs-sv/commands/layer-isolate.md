---
sidebar_position: 1
title: LayerIsolate — Frys alla lager utom de markerade i KulmanLab CAD
description: LayerIsolate-kommandot fryser alla lager utom de som används av de markerade objekten, så att du kan fokusera på specifik geometri utan att ta bort något.
keywords: [lagerisolering, frys lager CAD, isolera lager kulmanlab, CAD-lagerhantering]
---

# LayerIsolate

`LayerIsolate`-kommandot fryser alla lager **utom** de som tillhör de markerade objekten. Använd det för att snabbt fokusera på specifik geometri utan att dölja eller ta bort något permanent — frys upp med [LayerUnfreezeAll](../layer-unfreeze-all/) när du är klar.

## Två sätt att starta

**Förval, sedan isolera** — markera entiteter först, aktivera sedan:

1. Markera en eller flera entiteter på ritytan.
2. Skriv `LayerIsolate` i terminalen eller klicka på verktygsfältsknappen **Layer Isolate**.
3. Lagren för de markerade entiteterna förblir synliga; alla andra fryses omedelbart.

**Aktivera, markera sedan**:

1. Skriv `LayerIsolate` eller klicka på verktygsfältsknappen.
2. **Välj objekt** — klicka på enskilda entiteter eller dra för att markera efter område.
3. Tryck **Enter** eller **Space** för att bekräfta — isoleringen tillämpas.

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `Enter` / `Space` | Bekräftar markeringen och tillämpar isolering |
| `Escape` | Avbryter och rensar markeringen |

## Beteendedetaljer

- Alla lager som **inte** representeras i markeringen sätts till frysta.
- Lager som **är** representerade förblir ofrysta, även om de var frysta tidigare.
- Markeringen rensas efter att isoleringen har tillämpats.
- Kommandot avslutas automatiskt efter tillämpningen.

## Ångra isolering

Kör [LayerUnfreezeAll](../layer-unfreeze-all/) för att återställa alla lager till synliga i ett steg.
