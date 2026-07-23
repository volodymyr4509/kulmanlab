---
title: Rotate-kommando — Rotér Entiteter omkring et Basispunkt
description: Rotate-kommandoen roterer markerede entiteter omkring et valgt basispunkt. Vinklen kan indtastes præcist eller sættes ved at klikke — markørretningen fra basispunktet til klikket afgør vinklen. Positive vinkler er mod uret i DXF-koordinater.
keywords: [CAD rotate-kommando, rotér entiteter CAD, rotér objekter vinkel, rotation mod uret CAD, indtastet vinkel rotation, kulmanlab]
group: edit
order: 3
---

# Rotate

Kommandoen `rotate` roterer markerede entiteter omkring et basispunkt. Du angiver rotationsvinklen enten ved at indtaste et tal i grader eller ved at klikke — vinklen beregnes ud fra retningen mellem basispunktet og klikpositionen.

## To måder at starte på

**Markér først, rotér derefter** — markér entiteter først, aktivér derefter:

1. Markér én eller flere entiteter på lærredet.
2. Skriv `rotate` i terminalen eller klik på **Rotate**-knappen i værktøjslinjen.
3. **Klik basispunktet** — rotationscentrum. Eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
4. **Skriv en vinkel og tryk Enter**, eller **klik** for at sætte vinklen ud fra markørretningen.

**Aktivér, markér derefter** — start kommandoen uden noget markeret:

1. Skriv `rotate` eller klik på værktøjslinjeknappen.
2. **Markér objekter** — klik for at slå til/fra, eller træk for at markere efter område.
3. Tryk **Enter** eller **Space** for at bekræfte markeringen.
4. **Klik basispunktet** (koordinatindtastning tilgængelig), sæt derefter vinklen.

```
  Før:              Efter (90° rotation omkring ●):
                        ╔══╗
  ●  [entitet]   →   ● ║    ║
                        ╚══╝
```

En levende spøgelsesforhåndsvisning af de roterede entiteter følger markørvinklen, efter basispunktet er sat.

## Sætte vinklen

**Indtastet vinkel** — skriv et tal (i grader) når som helst efter basispunktet er placeret. Forhåndsvisningen fæstner sig til den indtastede vinkel, mens du fortsætter med at justere, før du trykker Enter.

**Klikvinkel** — hvis ingen indtastet værdi er til stede, sætter et klik vinklen lig med `atan2(cursorY − baseY, cursorX − baseX)` — retningen fra basispunktet til klikket, i grader.

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Tilføj ciffer til vinkelværdien |
| `-` | Negativ vinkel (kun første tegn) |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Anvend rotationen ved den indtastede vinkel |

## Vinkelretning

Vinkler følger **DXF-konventionen**:

- **Positive** værdier roterer **mod uret** i tegnekoordinater (Y-op).
- På skærmen, hvor Y-aksen er inverteret (Y-ned), vises positive vinkler **med uret**.

Almindelige værdier: `90` = kvart omdrejning, `180` = halv omdrejning, `-90` = modsat kvart omdrejning.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekræft markering |
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning (basispunkt-fasen), eller vinkelværdi (vinkelfasen) |
| `,` | Lås X og gå til Y-indtastning (basispunkt-fasen) |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft koordinat eller anvend rotation |
| `Escape` | Annullér og nulstil |

## Markering under kommandoen

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Slår entiteten under markøren til/fra |
| **Træk mod højre** (streng) | Tilføjer entiteter helt inde i boksen |
| **Træk mod venstre** (krydsning) | Tilføjer entiteter der krydser boksen |
| **Enter** / **Space** | Bekræfter markeringen |

## Understøttede entiteter

Rotate fungerer på alle entitetstyper. Hver entitets geometri roteres omkring basispunktet — for eksempel flytter en Circle sit centrum, mens radius forbliver den samme; en Arc flytter sit centrum og forskyder sine start- og slutvinkler med rotationsmængden; en Text-entitet flytter sit ankerpunkt og lægger vinklen til sin Rotation Degree-egenskab.
