---
title: Mirror-kommando — Spejlvend Entiteter over en Topunktsakse
description: Mirror-kommandoen spejlvender markerede entiteter over en spejllinje defineret af to klik. Originalerne bevares altid — Mirror opretter nye spejlvendte kopier. Spejlaksen kan være i en hvilken som helst vinkel og fæstner til 45°-intervaller.
keywords: [CAD mirror-kommando, spejlvend entiteter CAD, spejlsymmetri CAD, vend objekter CAD, spejlakse CAD, kulmanlab]
group: edit
order: 4
---

# Mirror

Kommandoen `mirror` opretter spejlvendte kopier af markerede entiteter reflekteret over en topunktsakse. Originalerne **bevares altid** — i modsætning til [Move](../move/) eller [Rotate](../rotate/) ændrer Mirror aldrig eksisterende entiteter; den tilføjer kun nye.

## To måder at starte på

**Markér først, spejlvend derefter** — markér entiteter først, aktivér derefter:

1. Markér én eller flere entiteter på lærredet.
2. Skriv `mirror` i terminalen eller klik på **Mirror**-knappen i værktøjslinjen.
3. **Klik det første punkt** på spejlaksen, eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
4. **Klik det andet punkt** — spejlvendte kopier placeres, og kommandoen afsluttes. Koordinatindtastning fungerer også her.

**Aktivér, markér derefter** — start kommandoen uden noget markeret:

1. Skriv `mirror` eller klik på værktøjslinjeknappen.
2. **Markér objekter** — klik for at slå til/fra, eller træk for at markere efter område.
3. Tryk **Enter** eller **Space** for at bekræfte markeringen.
4. **Klik det første punkt**, klik derefter **det andet punkt** på spejlaksen (koordinatindtastning tilgængelig ved begge trin).

```
  Original:          Spejlakse:          Resultat:
                     |
  [entitet A]   →    |    →    [entitet A] + [spejlvendt A]
                     |
```

En levende forhåndsvisning af de spejlvendte kopier følger markøren, mens du positionerer det andet aksepunkt.

## Spejlaksen

Aksen er en uendelig linje gennem de to klikkede punkter. Den kan være i en hvilken som helst vinkel:

- Flyt markøren tæt på en **45°-fæsteakse** (0°, 45°, 90°, 135° …), og aksen låses til den vinkel — nyttigt til rene horisontale, vertikale eller diagonale spejlinger.
- Klik væk fra fæstezonen for en fri vinkelakse.

## Koordinatindtastning

Ved hvert aksepunkt-trin kan du indtaste en eksakt position i stedet for at klikke:

1. Skriv X-værdien.
2. Tryk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-værdien.
4. Tryk **Enter** for at bekræfte.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekræft markering |
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning |
| `,` | Lås X og gå til Y-indtastning |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft indtastet koordinat |
| `Escape` | Annullér og nulstil |

## Markering under kommandoen

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Slår entiteten under markøren til/fra |
| **Træk mod højre** (streng) | Tilføjer entiteter helt inde i boksen |
| **Træk mod venstre** (krydsning) | Tilføjer entiteter der krydser boksen |
| **Enter** / **Space** | Bekræfter markeringen |

## Hvad der spejlvendes

Alle entitetstyper understøttes. Geometri reflekteres matematisk over aksen:

| Entitet | Hvad der ændres |
|--------|-------------|
| Line | Begge endepunkter reflekteres |
| Circle | Centrum reflekteres; radius forbliver uændret |
| Arc | Centrum reflekteres; start- og slutvinkler genberegnes over aksen |
| Ellipse | Centrum reflekteres; hovedakseretningen vendes over aksen |
| Polyline / Rectangle | Hvert hjørne reflekteres |
| Text | Ankerpunktet reflekteres; tekststrengen vendes **ikke** |
| Spline | Alle kontrolpunkter / fit-punkter reflekteres |

## Mirror vs Copy

| | Mirror | Copy |
|---|--------|------|
| Originaler | Altid bevaret | Altid bevaret |
| Ny entitetsposition | Reflekteret over en akse | Forskudt med en forskydningsvektor |
| Bedst til | Symmetriske designs, bilaterale elementer | Gentagelse af geometri i en hvilken som helst retning |
