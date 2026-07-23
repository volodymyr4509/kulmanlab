---
title: Scale-kommando — Ændr Størrelse Ensartet omkring et Basispunkt
description: Scale-kommandoen ændrer størrelsen på markerede entiteter ensartet med en indtastet faktor omkring et fast basispunkt. Faktoren indtastes altid med tastaturet — der findes ingen klik-for-at-sætte-skala. En faktor større end 1 forstørrer; mindre end 1 formindsker. Alle entitetstyper understøttes.
keywords: [CAD scale-kommando, ændr størrelse entiteter CAD, skalér objekter CAD, ensartet skalering CAD, skaleringsfaktor CAD, forstør formindsk CAD, kulmanlab]
group: edit
order: 5
---

# Scale

Kommandoen `scale` ændrer størrelsen på markerede entiteter ensartet omkring et basispunkt. Alle afstande fra basispunktet multipliceres med skaleringsfaktoren — en faktor på `2` fordobler alle dimensioner, `0.5` halverer dem. Faktoren indtastes altid med tastaturet; der findes ingen klik-for-at-sætte-skala.

## To måder at starte på

**Markér først, skalér derefter** — markér entiteter først, aktivér derefter:

1. Markér én eller flere entiteter på lærredet.
2. Skriv `scale` i terminalen eller klik på **Scale**-knappen i værktøjslinjen.
3. **Klik basispunktet** — det faste punkt der ikke bevæger sig under skalering. Eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
4. **Skriv skaleringsfaktoren** og tryk **Enter**.

**Aktivér, markér derefter** — start kommandoen uden noget markeret:

1. Skriv `scale` eller klik på værktøjslinjeknappen.
2. **Markér objekter** — klik for at slå til/fra, eller træk for at markere efter område.
3. Tryk **Enter** eller **Space** for at bekræfte markeringen.
4. **Klik basispunktet** (koordinatindtastning tilgængelig), skriv derefter faktoren.

```
  Basis ●                Basis ●
        [entitet]   →          [større entitet]
  faktor = 2 → afstande fra ● fordobles
```

## Indtaste skaleringsfaktoren

Efter at basispunktet er placeret, viser terminalen `enter scale factor:` og venter på tastaturinput:

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Tilføj ciffer til faktoren |
| `-` | Negativ faktor (kun første tegn — inverterer og skalerer derefter) |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Anvend skaleringen ved den indtastede faktor |

Faktoren skal være forskellig fra nul. Almindelige værdier:

| Faktor | Effekt |
|--------|--------|
| `2` | Fordobler alle dimensioner |
| `0.5` | Halverer alle dimensioner |
| `1.5` | Øger med 50% |
| `-1` | Spejler over basispunktet (svarer til en 180°-rotation) |

Der er ingen levende forhåndsvisning, mens du skriver — det skalerede resultat vises først efter at have trykket **Enter**.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekræft markering |
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning (basispunkt-fasen), eller skaleringsfaktor (faktorfasen) |
| `,` | Lås X og gå til Y-indtastning (basispunkt-fasen) |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft koordinat eller anvend skalering |
| `Escape` | Annullér og nulstil |

## Markering under kommandoen

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Slår entiteten under markøren til/fra |
| **Træk mod højre** (streng) | Tilføjer entiteter helt inde i boksen |
| **Træk mod venstre** (krydsning) | Tilføjer entiteter der krydser boksen |
| **Enter** / **Space** | Bekræfter markeringen |

## Hvad der skaleres

Alle entitetstyper understøttes. Hver entitet skalerer sin geometri i forhold til basispunktet:

| Entitet | Hvad der ændres |
|--------|-------------|
| Line | Begge endepunkter skaleres væk fra basispunktet |
| Circle | Centrum skaleres fra basispunktet; radius multipliceres med faktoren |
| Arc | Centrum skaleres; radius multipliceres med faktoren; vinkler forbliver uændrede |
| Ellipse | Centrum skaleres; begge halvakselængder multipliceres med faktoren |
| Polyline / Rectangle | Hvert hjørne skaleres fra basispunktet |
| Text | Ankerpunktet skaleres; højden multipliceres med faktoren |
| Spline | Alle kontrolpunkter / fit-punkter skaleres |
