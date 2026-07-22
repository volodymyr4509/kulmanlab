---
title: Array Grid — Gjenta Entiteter i Rader og Kolonner
description: Array Grid-kommandoen lager et rutenett av kopier fra markerte entiteter — skriv antall rader, kolonner og avstanden mellom dem direkte i terminalen, ingen punktklikking nødvendig.
keywords: [CAD array-kommando, arraygrid, rektangulært array CAD, rutenettmønster CAD, gjenta entiteter CAD, kopiarray CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

Kommandoen `ArrayGrid` lager et rutenett av kopier fra de markerte entitetene — angi antall rader, antall kolonner og avstanden mellom dem, alt skrevet inn i terminalen. Den opprinnelige markeringen opptar rad-0, kolonne-0-cellen; hver annen celle er en flyttet kopi.

## To måter å starte på

**Marker først, deretter lag array** — marker entiteter først, aktiver deretter:

1. Marker én eller flere entiteter på lerretet.
2. Skriv `arraygrid` i terminalen (så lite som `arr` er nok — det er entydig) eller klikk på **Array Grid**-knappen i verktøylinjen.
3. Skriv antall **rader** og trykk **Enter**.
4. Skriv antall **kolonner** og trykk **Enter**.
5. Skriv **avstanden mellom rader** og trykk **Enter**.
6. Skriv **avstanden mellom kolonner** og trykk **Enter** — rutenettet opprettes umiddelbart.

**Aktiver, marker deretter** — start kommandoen uten noe markert:

1. Skriv `arraygrid` eller klikk på verktøylinjeknappen.
2. **Marker objekter** — klikk for å slå enkeltentiteter av/på, eller dra for å markere etter område.
3. Trykk **Enter** eller **Space** for å bekrefte markeringen.
4. Fortsett med rader → kolonner → radavstand → kolonneavstand som over.

```
  2 rader x 3 kolonner:

  [B] [B] [B]   <- rad 1 (flyttede kopier)
  [A] [A] [A]   <- rad 0: opprinnelig markering, kopier til høyre
```

> Terminalen trenger bare nok bokstaver til å være entydig — å skrive `arr` og trykke **Enter** aktiverer Array Grid direkte, siden ingen annen kommando starter med de tre bokstavene (Arc, Area, Align og Angle skiller seg alle ut tidligere).

## Rader, kolonner og avstand

| Ledetekst | Godtar | Merknader |
|--------|---------|-------|
| Rader | Positive hele tall (1, 2, 3…) | Kun sifre — ingen desimaltegn eller fortegn |
| Kolonner | Positive hele tall (1, 2, 3…) | Kun sifre — ingen desimaltegn eller fortegn |
| Radavstand | Signert desimaltall (f.eks. `10`, `-5.5`) | Avstand mellom rader; negativ reverserer retningen |
| Kolonneavstand | Signert desimaltall (f.eks. `10`, `-5.5`) | Avstand mellom kolonner; negativ reverserer retningen |

Med 1 rad og 1 kolonne opprettes ingen kopier — kommandoen avsluttes uten å endre tegningen.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekreft markering og gå videre til rad-ledeteksten |
| `0`–`9` | Skriv sifre for rader eller kolonner |
| `0`–`9`, `.`, `-` | Skriv sifre for rad-/kolonneavstand (`-` kun som første tegn) |
| `Backspace` | Slett sist skrevne tegn i gjeldende ledetekst |
| `Enter` | Bekreft gjeldende ledetekst og gå videre til neste |
| `Escape` | Fjern de inntastede verdiene for rader/kolonner/avstand og gå tilbake til markeringsfasen |

## Markering under kommandoen

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Slår entiteten under markøren av/på i markeringen |
| **Dra til høyre** (streng) | Legger til entiteter helt inni boksen |
| **Dra til venstre** (krysning) | Legger til entiteter som krysser boksens kant |
| **Enter** / **Space** | Bekrefter markeringen og går videre til rad-ledeteksten |

## Etter array-operasjonen

De nye kopiene legges til i tegningen og kommandoen avsluttes — den opprinnelige markeringen fjernes. Kjør **Array Grid** igjen, eller start en ny kommando.

## Array Grid vs Copy

| | Array Grid | Copy |
|---|-----------|------|
| Punktklikking | Ingen — rader, kolonner og avstand skrives inn | Basispunkt og mål klikkes (eller skrives inn) |
| Opprettede kopier | Rader × kolonner − 1 | Nøyaktig 1 per kopieringsoperasjon |
| Layout | Regelmessig rektangulært rutenett | Hvor som helst, i enhver avstand |
| Best til | Gjenta en enhet i et regelmessig mønster (hull, fliser, festeelementer) | Én enkelt duplikat på en vilkårlig posisjon |

## Støttede entiteter

Array Grid fungerer på alle entitetstyper. Alle entiteter implementerer `translate(dx, dy)` internt, den samme operasjonen [Copy](../copy/) og [Move](../move/) bruker, så ingen er utelatt.
