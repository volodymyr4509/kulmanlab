---
title: Dimension Continue — Kjed Mål fra en Eksisterende Basislinje
description: Dimension Continue-kommandoen forlenger en kjede av mål fra den andre hjelpelinjen til det sist plasserte målet. Den arver automatisk basismålets vinkel, forskyvning, pilstørrelse og teksthøyde. Fungerer med både lineære og justerte baser.
keywords: [CAD dimension continue, dimcontinue, kjed mål CAD, basislinjemål, fortsett målserie, kulmanlab]
group: markup
order: 6
---

# Dimension Continue

Kommandoen `dimcontinue` kjeder nye mål fra **den andre hjelpelinjen** til et eksisterende mål. Hvert nye segment plasseres langs samme måleakse og med samme mållinjeforskyvning som basisen. Alle stilegenskaper — pilstørrelse, teksthøyde, hjelpelinjelengder — kopieres automatisk fra basisen.

## Slik ser kjedede mål ut

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (basis    p3           p4
           hjelp2 → ny start)
```

Hvert rektangel er en egen `DIMENSION`-entitet. De deler samme mållinjeposisjon og måleretning.

## Starte en kjede

1. Skriv `dimcontinue` i terminalen eller klikk på **Dimension Continue**-knappen i verktøylinjen.
2. **Hvis et mål nettopp ble plassert** — kommandoen plukker det opp automatisk som basis (ikke nødvendig å klikke).
3. **Hvis det ikke finnes noe nylig mål** — klikk et eksisterende mål for å bruke det som basis.
4. **Klikk opprinnelsen til den neste hjelpelinjen** — en forhåndsvisning viser det nye målet mens du flytter markøren. Eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
5. Fortsett å klikke (eller skrive) for å forlenge kjeden. Hvert plasserte mål blir automatisk den nye basisen.
6. Trykk **Enter**, **Space** eller **Escape** for å avslutte kjeden.

## Hva som arves fra basismålet

| Egenskap | Arvet fra basisen |
|----------|---------------------|
| Måleretning / vinkel | Ja — låst for hele kjeden |
| Mållinjeforskyvning (avstand fra målte punkter) | Ja |
| Pilstørrelse | Ja |
| Teksthøyde | Ja |
| Hjelpelinjeforskyvning og -forlengelse | Ja |
| Tekstjustering | Ja |
| Stilnavn | Ja |
| Farge, Lag | Arves ikke — bruker gjeldende lag |

## Låsing av måleretning

Kjedens måleretning er **fast til basismålets vinkel**:

- Lineær basis (H) → alle fortsettelser måler horisontal avstand (Δ X).
- Lineær basis (V) → alle fortsettelser måler vertikal avstand (Δ Y).
- Justert basis i en hvilken som helst vinkel → alle fortsettelser måler langs den samme vinkelen.

Du kan ikke endre retningen midt i kjeden. Start et nytt [Dimension Linear](../dim-linear/) eller [Dimension Aligned](../dim-aligned/) for å måle i en annen retning.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting |
| `,` | Lås X og gå til Y-inntasting |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft inntastet koordinat, eller avslutt kjeden hvis ingen inntasting pågår |
| `Space` / `Escape` | Avslutt kjeden |

## Dimension Continue vs å starte på nytt

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Startpunkt | Fast ved siste basis' hjelp2 | Klikk hvor som helst |
| Vinkel | Låst til basisen | Fri |
| Forskyvning | Arvet fra basisen | Satt av markør eller skrevet inn |
| Stil | Arvet fra basisen | Gjeldende stil |
| Best til | Kumulative målinger langs en rad | Første mål eller endring av retning |

## Redigere etiketter etter plassering — enkel modus

**Dobbeltklikk** på et hvilket som helst mål i kjeden for å åpne teksteditoren i **enkel** modus. Hvert segment er uavhengig og kan redigeres individuelt.

| Funksjon | Oppførsel |
|---------|-----------|
| Fet / Kursiv / Skrift / Høyde | Gjelder **hele** etiketten samtidig |
| Per-tegn formatering | Støttes ikke |
| `Enter` | Bekrefter verdien og lukker editoren |
| Flerlinje | Støttes ikke |

Se [Tekstredigering — enkel modus](../../interface/text-editor/#simple-mode) for den fullstendige referansen.

## DXF — DIMENSION-entiteter

Hvert segment i kjeden lagres som en uavhengig `DIMENSION`-entitet i DXF-filen. De er ikke koblet sammen i filen — de deler egenskaper fordi de ble opprettet fra samme basis, men hver kan redigeres individuelt etter plassering.
