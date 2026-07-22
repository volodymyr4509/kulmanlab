---
title: Match Properties — Kopier Entitetsegenskaper i KulmanLab CAD
description: MatchProperties-kommandoen kopierer farge, lag og andre delte egenskaper fra en kildeentitet til én eller flere målentiteter. Matcher egenskaper på samme måte som desktop CAD-verktøy gjør.
keywords: [match properties CAD, kopier entitetsegenskaper, MATCHPROP, match lagfarge, overfør egenskaper, kulmanlab match properties, mal egenskaper, kopier lag CAD]
group: style
order: 1
---

# Match Properties

Kommandoen `MatchProperties` kopierer **visuelle og lagrelaterte egenskaper** fra en kildeentitet til én eller flere målentiteter. Kun egenskaper som deles mellom kilde- og målentitetstypene overføres — geometri endres aldri.

## Slik aktiverer du den

Klikk på **Match Properties**-knappen (malerulleikon) i Style-panelet, eller skriv `MatchProperties` i terminalen.

## Arbeidsflyt

**Aktiver først, velg deretter kilde:**

1. Skriv `MatchProperties` eller klikk på verktøylinjeknappen uten noe forhåndsmarkert.
2. **Klikk kildeentiteten** — den hvis egenskaper du vil kopiere.
3. **Klikk hver målentitet** for å bruke kildeegenskapene. Du kan klikke flere entiteter én etter én.
4. For å bruke på en gruppe samtidig, **dra en markeringsboks** over målene.
5. Trykk **Enter** eller **Escape** for å avslutte.

**Marker kilden først, aktiver deretter:**

1. Klikk én enkelt entitet for å markere den.
2. Aktiver `MatchProperties`. Den markerte entiteten brukes automatisk som kilde.
3. Klikk målentiteter eller dra-marker, deretter **Enter** eller **Escape** for å avslutte.

## Hvilke egenskaper som kopieres

MatchProperties kopierer egenskaper som tilhører en delt basisklasse mellom kilden og målet. Som et minimum deler **alle entitetstyper** disse egenskapene:

| Egenskap | Beskrivelse |
|----------|-------------|
| **Farge** | Entitetens fargeindeks (inkluderer "By Layer" / "By Block") |
| **Lag** | Laget entiteten tilhører |

Når kilden og målet er samme entitetstype (f.eks. begge er mål), kopieres også ytterligere typespesifikke egenskaper — for eksempel teksthøyde, pilstørrelse, hjelpelinjeinnstillinger.

Geometri (koordinater, radius, lengde osv.) påvirkes aldri.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekreft områdemarkering eller avslutt kommandoen |
| `Escape` | Avslutt bruk (hvis kilde er satt) eller avbryt |

## Oppførselsdetaljer

- Selve kildeentiteten endres aldri.
- Hvert klikk eller dra-markering bruker kildeegenskapene umiddelbart — det finnes ikke noe bekreftelsessteg.
- Områdemarkering følger standardreglene: dra **til høyre** for streng markering (helt omsluttet), dra **til venstre** for krysningsmarkering (enhver kryssing).
- Å klikke kildeentiteten som et mål ignoreres.
- For entiteter med tekst (**Text**, **Dimensions**, **Multileaders**) kopieres kun teksthøyden — skrift, fet, kursiv og andre tekststilinnstillinger matches ikke.

## Relaterte kommandoer

- [LayerMatch](../layer-match/) — flytt markerte entiteter til samme lag som en kilde (kun lagegenskap)
- [LayerMakeCurrent](../layer-make-current/) — sett gjeldende tegnelag fra en klikket entitet
