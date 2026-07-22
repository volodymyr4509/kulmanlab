---
title: Scale-kommando — Endre Størrelse Jevnt rundt et Basispunkt
description: Scale-kommandoen endrer størrelsen på markerte entiteter jevnt med en inntastet faktor rundt et fast basispunkt. Faktoren skrives alltid inn med tastaturet — det finnes ingen klikk-for-å-sette-skala. En faktor større enn 1 forstørrer; mindre enn 1 forminsker. Alle entitetstyper støttes.
keywords: [CAD scale-kommando, endre størrelse entiteter CAD, skaler objekter CAD, jevn skalering CAD, skaleringsfaktor CAD, forstørre forminske CAD, kulmanlab]
group: edit
order: 5
---

# Scale

Kommandoen `scale` endrer størrelsen på markerte entiteter jevnt rundt et basispunkt. Alle avstander fra basispunktet multipliseres med skaleringsfaktoren — en faktor på `2` dobler alle dimensjoner, `0.5` halverer dem. Faktoren skrives alltid inn; det finnes ingen klikk-for-å-sette-skala.

## To måter å starte på

**Marker først, deretter skaler** — marker entiteter først, aktiver deretter:

1. Marker én eller flere entiteter på lerretet.
2. Skriv `scale` i terminalen eller klikk på **Scale**-knappen i verktøylinjen.
3. **Klikk basispunktet** — det faste punktet som ikke flytter seg under skalering. Eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
4. **Skriv skaleringsfaktoren** og trykk **Enter**.

**Aktiver, marker deretter** — start kommandoen uten noe markert:

1. Skriv `scale` eller klikk på verktøylinjeknappen.
2. **Marker objekter** — klikk for å slå av/på, eller dra for å markere etter område.
3. Trykk **Enter** eller **Space** for å bekrefte markeringen.
4. **Klikk basispunktet** (koordinatinntasting tilgjengelig), skriv deretter faktoren.

```
  Basis ●                Basis ●
        [entitet]   →          [større entitet]
  faktor = 2 → avstander fra ● dobles
```

## Skrive inn skaleringsfaktoren

Etter at basispunktet er plassert, viser terminalen `enter scale factor:` og venter på tastaturinntasting:

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Legg til siffer i faktoren |
| `-` | Negativ faktor (kun første tegn — inverterer og skalerer deretter) |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bruk skaleringen med den inntastede faktoren |

Faktoren må ikke være null. Vanlige verdier:

| Faktor | Effekt |
|--------|--------|
| `2` | Dobler alle dimensjoner |
| `0.5` | Halverer alle dimensjoner |
| `1.5` | Øker med 50 % |
| `-1` | Speilvender over basispunktet (tilsvarer en 180°-rotasjon) |

Det finnes ingen levende forhåndsvisning mens du skriver — det skalerte resultatet vises kun etter at du trykker **Enter**.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekreft markering |
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting (basispunkt-fasen), eller skaleringsfaktor (faktorfasen) |
| `,` | Lås X og gå til Y-inntasting (basispunkt-fasen) |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft koordinat eller bruk skalering |
| `Escape` | Avbryt og tilbakestill |

## Markering under kommandoen

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Slår entiteten under markøren av/på |
| **Dra til høyre** (streng) | Legger til entiteter helt inni boksen |
| **Dra til venstre** (krysning) | Legger til entiteter som krysser boksen |
| **Enter** / **Space** | Bekrefter markeringen |

## Hva som skaleres

Alle entitetstyper støttes. Hver entitet skalerer sin geometri relativt til basispunktet:

| Entitet | Hva som endres |
|--------|-------------|
| Line | Begge endepunkter skaleres bort fra basispunktet |
| Circle | Senteret skaleres fra basispunktet; radiusen multipliseres med faktoren |
| Arc | Senteret skaleres; radiusen multipliseres med faktoren; vinklene forblir uendret |
| Ellipse | Senteret skaleres; begge halvakselengder multipliseres med faktoren |
| Polyline / Rectangle | Hvert hjørne skaleres fra basispunktet |
| Text | Ankerpunktet skaleres; høyden multipliseres med faktoren |
| Spline | Alle kontrollpunkter / tilpasningspunkter skaleres |
