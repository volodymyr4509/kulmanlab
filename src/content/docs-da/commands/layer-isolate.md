---
title: LayerIsolate — Frys Alle Lag Undtagen Markerede i KulmanLab CAD
description: LayerIsolate-kommandoen fryser hvert lag undtagen dem der bruges af de markerede objekter, så du kan fokusere på specifik geometri uden at slette noget.
keywords: [lagisolering, frys lag CAD, isolér lag kulmanlab, CAD lagadministration]
group: layer
order: 3
---

# LayerIsolate

Kommandoen `LayerIsolate` fryser hvert lag **undtagen** dem, der tilhører de markerede objekter. Brug den til hurtigt at fokusere på specifik geometri uden at skjule eller slette noget permanent — ophæv frysning med [LayerUnfreezeAll](../layer-unfreeze-all/), når du er færdig.

## To måder at starte på

**Markér først, isolér derefter** — markér entiteter først, aktivér derefter:

1. Markér én eller flere entiteter på lærredet.
2. Skriv `LayerIsolate` i terminalen eller klik på **Layer Isolate**-knappen i værktøjslinjen.
3. Lagene for de markerede entiteter forbliver synlige; alle andre fryses straks.

**Aktivér, markér derefter**:

1. Skriv `LayerIsolate` eller klik på værktøjslinjeknappen.
2. **Vælg objekter** — klik enkeltentiteter eller træk for at markere efter område.
3. Tryk **Enter** eller **Space** for at bekræfte — isolering anvendes.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekræft markering og anvend isolering |
| `Escape` | Annullér og ryd markering |

## Adfærdsdetaljer

- Alle lag der **ikke** er repræsenteret i markeringen, sættes til frosne.
- Lag der **er** repræsenteret forbliver ufrosne, selv hvis de var frosne før.
- Markeringen ryddes, efter isolering er anvendt.
- Kommandoen afsluttes automatisk efter anvendelse.

## Fortryde isolering

Kør [LayerUnfreezeAll](../layer-unfreeze-all/) for at gendanne alle lag til synlige i ét trin.
