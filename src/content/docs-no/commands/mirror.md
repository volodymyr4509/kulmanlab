---
title: Mirror-kommando — Speilvend Entiteter over en Topunktsakse
description: Mirror-kommandoen speilvender markerte entiteter over en speillinje definert av to klikk. Originalene beholdes alltid — Mirror oppretter nye speilvendte kopier. Speilaksen kan være i en hvilken som helst vinkel og festes til 45°-inkrementer.
keywords: [CAD mirror-kommando, speilvend entiteter CAD, speilsymmetri CAD, snu objekter CAD, speilakse CAD, kulmanlab]
group: edit
order: 4
---

# Mirror

Kommandoen `mirror` oppretter speilvendte kopier av markerte entiteter reflektert over en topunktsakse. Originalene **beholdes alltid** — i motsetning til [Move](../move/) eller [Rotate](../rotate/) endrer Mirror aldri eksisterende entiteter; den legger kun til nye.

## To måter å starte på

**Marker først, deretter speilvend** — marker entiteter først, aktiver deretter:

1. Marker én eller flere entiteter på lerretet.
2. Skriv `mirror` i terminalen eller klikk på **Mirror**-knappen i verktøylinjen.
3. **Klikk det første punktet** på speilaksen, eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
4. **Klikk det andre punktet** — speilvendte kopier plasseres og kommandoen avsluttes. Koordinatinntasting fungerer også her.

**Aktiver, marker deretter** — start kommandoen uten noe markert:

1. Skriv `mirror` eller klikk på verktøylinjeknappen.
2. **Marker objekter** — klikk for å slå av/på, eller dra for å markere etter område.
3. Trykk **Enter** eller **Space** for å bekrefte markeringen.
4. **Klikk det første punktet**, deretter **klikk det andre punktet** på speilaksen (koordinatinntasting tilgjengelig i begge steg).

```
  Original:          Speilakse:          Resultat:
                     |
  [entitet A]   →    |    →    [entitet A] + [speilvendt A]
                     |
```

En levende forhåndsvisning av de speilvendte kopiene følger markøren mens du posisjonerer det andre aksepunktet.

## Speilaksen

Aksen er en uendelig linje gjennom de to klikkede punktene. Den kan være i en hvilken som helst vinkel:

- Flytt markøren nær en **45°-festeakse** (0°, 45°, 90°, 135° …) og aksen låses til den vinkelen — nyttig for rene horisontale, vertikale eller diagonale speilvendinger.
- Klikk utenfor festesonen for en fri vinkelakse.

## Koordinatinntasting

Ved hvert aksepunktsteg kan du skrive inn en eksakt posisjon i stedet for å klikke:

1. Skriv X-verdien.
2. Trykk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-verdien.
4. Trykk **Enter** for å bekrefte.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekreft markering |
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting |
| `,` | Lås X og gå til Y-inntasting |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft inntastet koordinat |
| `Escape` | Avbryt og tilbakestill |

## Markering under kommandoen

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Slår entiteten under markøren av/på |
| **Dra til høyre** (streng) | Legger til entiteter helt inni boksen |
| **Dra til venstre** (krysning) | Legger til entiteter som krysser boksen |
| **Enter** / **Space** | Bekrefter markeringen |

## Hva som speilvendes

Alle entitetstyper støttes. Geometrien speilvendes matematisk over aksen:

| Entitet | Hva som endres |
|--------|-------------|
| Line | Begge endepunkter speilvendes |
| Circle | Senteret speilvendes; radiusen forblir uendret |
| Arc | Senteret speilvendes; start- og sluttvinkler beregnes på nytt over aksen |
| Ellipse | Senteret speilvendes; hovedakseretningen snus over aksen |
| Polyline / Rectangle | Hvert hjørne speilvendes |
| Text | Ankerpunktet speilvendes; tekststrengen snus **ikke** |
| Spline | Alle kontrollpunkter / tilpasningspunkter speilvendes |

## Mirror vs Copy

| | Mirror | Copy |
|---|--------|------|
| Originaler | Alltid beholdt | Alltid beholdt |
| Ny entitetsposisjon | Speilvendt over en akse | Forskjøvet med en forskyvningsvektor |
| Best til | Symmetriske design, bilaterale elementer | Gjenta geometri i en hvilken som helst retning |
