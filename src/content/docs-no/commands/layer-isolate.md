---
title: LayerIsolate — Frys Alle Lag Unntatt Markerte i KulmanLab CAD
description: LayerIsolate-kommandoen fryser hvert lag unntatt de som brukes av de markerte objektene, slik at du kan fokusere på spesifikk geometri uten å slette noe.
keywords: [lagisolering, frys lag CAD, isoler lag kulmanlab, CAD lagadministrasjon]
group: layer
order: 3
---

# LayerIsolate

Kommandoen `LayerIsolate` fryser hvert lag **unntatt** de som tilhører de markerte objektene. Bruk den til raskt å fokusere på spesifikk geometri uten å skjule eller slette noe permanent — fjern frysingen med [LayerUnfreezeAll](../layer-unfreeze-all/) når du er ferdig.

## To måter å starte på

**Marker først, deretter isoler** — marker entiteter først, aktiver deretter:

1. Marker én eller flere entiteter på lerretet.
2. Skriv `LayerIsolate` i terminalen eller klikk på **Layer Isolate**-knappen i verktøylinjen.
3. Lagene til de markerte entitetene forblir synlige; alle andre fryses umiddelbart.

**Aktiver, marker deretter**:

1. Skriv `LayerIsolate` eller klikk på verktøylinjeknappen.
2. **Velg objekter** — klikk enkeltentiteter eller dra for å markere etter område.
3. Trykk **Enter** eller **Space** for å bekrefte — isolering brukes.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekreft markering og bruk isolering |
| `Escape` | Avbryt og fjern markering |

## Oppførselsdetaljer

- Alle lag som **ikke** er representert i markeringen settes til frosset.
- Lag som **er** representert forblir ufrosne, selv om de var frosne fra før.
- Markeringen fjernes etter at isolering er brukt.
- Kommandoen avsluttes automatisk etter at den er brukt.

## Angre isolering

Kjør [LayerUnfreezeAll](../layer-unfreeze-all/) for å gjenopprette alle lag til synlig i ett steg.
