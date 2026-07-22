---
title: Rotate-kommando — Roter Entiteter rundt et Basispunkt
description: Rotate-kommandoen roterer markerte entiteter rundt et valgt basispunkt. Vinkelen kan skrives inn presist eller settes ved å klikke — markørretningen fra basispunktet til klikket avgjør vinkelen. Positive vinkler er mot klokken i DXF-koordinater.
keywords: [CAD rotate-kommando, roter entiteter CAD, roter objekter vinkel, rotasjon mot klokken CAD, inntastet vinkel rotasjon, kulmanlab]
group: edit
order: 3
---

# Rotate

Kommandoen `rotate` roterer markerte entiteter rundt et basispunkt. Du angir rotasjonsvinkelen enten ved å skrive inn et tall i grader eller ved å klikke — vinkelen beregnes fra retningen mellom basispunktet og klikkposisjonen.

## To måter å starte på

**Marker først, deretter roter** — marker entiteter først, aktiver deretter:

1. Marker én eller flere entiteter på lerretet.
2. Skriv `rotate` i terminalen eller klikk på **Rotate**-knappen i verktøylinjen.
3. **Klikk basispunktet** — rotasjonssenteret. Eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
4. **Skriv en vinkel og trykk Enter**, eller **klikk** for å sette vinkelen fra markørretningen.

**Aktiver, marker deretter** — start kommandoen uten noe markert:

1. Skriv `rotate` eller klikk på verktøylinjeknappen.
2. **Marker objekter** — klikk for å slå av/på, eller dra for å markere etter område.
3. Trykk **Enter** eller **Space** for å bekrefte markeringen.
4. **Klikk basispunktet** (koordinatinntasting tilgjengelig), sett deretter vinkelen.

```
  Før:              Etter (90° rotasjon rundt ●):
                        ╔══╗
  ●  [entitet]   →   ● ║    ║
                        ╚══╝
```

En levende spøkelsesforhåndsvisning av de roterte entitetene følger markørvinkelen etter at basispunktet er satt.

## Sette vinkelen

**Inntastet vinkel** — skriv et tall (i grader) når som helst etter at basispunktet er plassert. Forhåndsvisningen festes til den inntastede vinkelen mens du fortsetter å justere før du trykker Enter.

**Klikkvinkel** — hvis ingen inntastet verdi finnes, setter et klikk vinkelen lik `atan2(cursorY − baseY, cursorX − baseX)` — retningen fra basispunktet til klikket, i grader.

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Legg til siffer i vinkelverdien |
| `-` | Negativ vinkel (kun første tegn) |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bruk rotasjonen ved den inntastede vinkelen |

## Vinkelretning

Vinkler følger **DXF-konvensjonen**:

- **Positive** verdier roterer **mot klokken** i tegnekoordinater (Y-opp).
- På skjermen, der Y-aksen er invertert (Y-ned), vises positive vinkler **med klokken**.

Vanlige verdier: `90` = kvart omdreining, `180` = halv omdreining, `-90` = motsatt kvart omdreining.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekreft markering |
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting (basispunkt-fasen), eller vinkelverdi (vinkelfasen) |
| `,` | Lås X og gå til Y-inntasting (basispunkt-fasen) |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft koordinat eller bruk rotasjon |
| `Escape` | Avbryt og tilbakestill |

## Markering under kommandoen

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Slår entiteten under markøren av/på |
| **Dra til høyre** (streng) | Legger til entiteter helt inni boksen |
| **Dra til venstre** (krysning) | Legger til entiteter som krysser boksen |
| **Enter** / **Space** | Bekrefter markeringen |

## Støttede entiteter

Rotate fungerer på alle entitetstyper. Hver entitets geometri roteres rundt basispunktet — for eksempel flytter en Circle senteret sitt mens radiusen forblir den samme; en Arc flytter senteret og forskyver start- og sluttvinklene med rotasjonsmengden; en Text-entitet flytter ankerpunktet sitt og legger vinkelen til Rotation Degree-egenskapen.
