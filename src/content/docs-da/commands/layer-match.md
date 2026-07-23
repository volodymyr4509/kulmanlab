---
title: LayerMatch — Tildel Entitetslag på Ny til at Matche en Kilde
description: LayerMatch-kommandoen tildeler laget for én eller flere målentiteter på ny til at matche laget for en kildeentitet du klikker.
keywords: [lagmatch, match lag CAD, tildel lag på ny kulmanlab, CAD lagadministration]
group: layer
order: 2
---

# LayerMatch

Kommandoen `LayerMatch` tildeler laget for markerede entiteter på ny til at matche laget for en kildeentitet, du klikker. Det er den hurtigste måde at flytte en gruppe objekter til det korrekte lag på uden at åbne Layer Manager.

## Arbejdsgang

**Markér først, match derefter**:

1. Markér de entiteter, hvis lag du vil ændre.
2. Skriv `LayerMatch` eller klik på **Layer Match**-knappen i værktøjslinjen (maleikon).
3. **Klik kildeobjektet** — det hvis lag du vil kopiere.
4. Alle markerede entiteter flytter straks til kildeobjektets lag.

**Aktivér, markér derefter**:

1. Skriv `LayerMatch` eller klik på værktøjslinjeknappen med intet markeret.
2. **Vælg målobjekter** — klik for at slå enkeltentiteter til/fra eller træk for at markere efter område.
3. Tryk **Enter** eller **Space** for at bekræfte markeringen.
4. **Klik kildeobjektet** — dets lag anvendes på alle mål.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekræft målmarkering og gå videre til kildevalg-fasen |
| `Escape` | Nulstil — vend tilbage til målmarkering eller annullér helt |

## Adfærdsdetaljer

- Kun egenskaben `layer` ændres — farve, linetype, lineweight og geometri berøres ikke.
- Kildeobjektet selv ændres ikke.
- Kommandoen afsluttes, efter kilden er klikket.
- At klikke på et tomt lærred under kildevalg-fasen gør ingenting.
