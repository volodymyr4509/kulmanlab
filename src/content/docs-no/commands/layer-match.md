---
title: LayerMatch — Tildel Entitetslag på Nytt til en Kilde
description: LayerMatch-kommandoen tildeler laget til én eller flere målentiteter på nytt til å samsvare med laget til en kildeentitet du klikker.
keywords: [lagmatch, match lag CAD, tildel lag på nytt kulmanlab, CAD lagadministrasjon]
group: layer
order: 2
---

# LayerMatch

Kommandoen `LayerMatch` tildeler laget til markerte entiteter på nytt til å samsvare med laget til en kildeentitet du klikker. Det er den raskeste måten å flytte en gruppe objekter til riktig lag på uten å åpne Layer Manager.

## Arbeidsflyt

**Marker først, deretter match**:

1. Marker entitetene hvis lag du vil endre.
2. Skriv `LayerMatch` eller klikk på **Layer Match**-knappen i verktøylinjen (malerkosteikon).
3. **Klikk kildeobjektet** — det hvis lag du vil kopiere.
4. Alle markerte entiteter flyttes umiddelbart til kildeobjektets lag.

**Aktiver, marker deretter**:

1. Skriv `LayerMatch` eller klikk på verktøylinjeknappen uten noe markert.
2. **Velg målobjekter** — klikk for å slå enkeltentiteter av/på eller dra for å markere etter område.
3. Trykk **Enter** eller **Space** for å bekrefte markeringen.
4. **Klikk kildeobjektet** — laget dets brukes på alle mål.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekreft målmarkering og gå videre til kildevalg-fasen |
| `Escape` | Tilbakestill — gå tilbake til målmarkering eller avbryt helt |

## Oppførselsdetaljer

- Kun egenskapen `layer` endres — farge, linetype, lineweight og geometri berøres ikke.
- Kildeobjektet selv endres ikke.
- Kommandoen avsluttes etter at kilden er klikket.
- Å klikke på et tomt lerret under kildevalg-fasen gjør ingenting.
