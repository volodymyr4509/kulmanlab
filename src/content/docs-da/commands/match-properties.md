---
title: Match Properties — Kopiér Entitetsegenskaber i KulmanLab CAD
description: MatchProperties-kommandoen kopierer farve, lag og andre delte egenskaber fra en kildeentitet til én eller flere målentiteter. Matcher egenskaber på samme måde som desktop CAD-værktøjer gør.
keywords: [match properties CAD, kopiér entitetsegenskaber, MATCHPROP, match lagfarve, overfør egenskaber, kulmanlab match properties, mal egenskaber, kopiér lag CAD]
group: style
order: 1
---

# Match Properties

Kommandoen `MatchProperties` kopierer **visuelle og lagrelaterede egenskaber** fra en kildeentitet til én eller flere målentiteter. Kun egenskaber der deles mellem kilde- og måltypen overføres — geometri ændres aldrig.

## Sådan aktiverer du den

Klik på **Match Properties**-knappen (malerulleikon) i Style-panelet, eller skriv `MatchProperties` i terminalen.

## Arbejdsgang

**Aktivér først, vælg derefter kilde:**

1. Skriv `MatchProperties` eller klik på værktøjslinjeknappen med intet forhåndsmarkeret.
2. **Klik kildeentiteten** — den hvis egenskaber du vil kopiere.
3. **Klik hver målentitet** for at anvende kildeegenskaberne. Du kan klikke flere entiteter én ad gangen.
4. For at anvende på en gruppe på én gang, **træk en markeringsboks** over målene.
5. Tryk **Enter** eller **Escape** for at afslutte.

**Markér kilden først, aktivér derefter:**

1. Klik én enkelt entitet for at markere den.
2. Aktivér `MatchProperties`. Den markerede entitet bruges automatisk som kilde.
3. Klik målentiteter eller træk-markér, derefter **Enter** eller **Escape** for at afslutte.

## Hvilke egenskaber der kopieres

MatchProperties kopierer egenskaber der tilhører en delt basisklasse mellem kilden og målet. Som minimum deler **alle entitetstyper** disse egenskaber:

| Egenskab | Beskrivelse |
|----------|-------------|
| **Farve** | Entitetens farveindeks (inkluderer "By Layer" / "By Block") |
| **Lag** | Laget entiteten tilhører |

Når kilden og målet er samme entitetstype (f.eks. begge er mål), kopieres også yderligere typespecifikke egenskaber — for eksempel teksthøjde, pilstørrelse, hjælpelinjeindstillinger.

Geometri (koordinater, radius, længde osv.) påvirkes aldrig.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekræft områdemarkering eller afslut kommandoen |
| `Escape` | Afslut anvendelse (hvis kilde er sat) eller annullér |

## Adfærdsdetaljer

- Selve kildeentiteten ændres aldrig.
- Hvert klik eller træk-markering anvender kildeegenskaberne straks — der er intet bekræftelsestrin.
- Områdemarkering følger standardreglerne: træk **mod højre** for streng markering (helt omsluttet), træk **mod venstre** for krydsningsmarkering (enhver krydsning).
- At klikke kildeentiteten som et mål ignoreres.
- For entiteter med tekst (**Text**, **Dimensions**, **Multileaders**) kopieres kun teksthøjden — skrifttype, fed, kursiv og andre tekststilindstillinger matches ikke.

## Relaterede kommandoer

- [LayerMatch](../layer-match/) — flyt markerede entiteter til samme lag som en kilde (kun lagegenskab)
- [LayerMakeCurrent](../layer-make-current/) — sæt det aktuelle tegnelag fra en klikket entitet
