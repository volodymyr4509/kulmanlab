---
title: Offset-kommando — Opprett Parallelle Kopier i en Fast Avstand
description: Offset-kommandoen oppretter en parallell kopi av en Line, Circle, Arc, Ellipse eller Polyline i en inntastet avstand. Avstanden angis én gang og gjenbrukes for flere offset-operasjoner. Et sideklikk avgjør hvilken retning kopien vises i. Fem entitetstyper støttes.
keywords: [CAD offset-kommando, parallell kopi CAD, offset linje CAD, offset sirkel CAD, offset polylinje CAD, konsentrisk offset, kulmanlab]
group: edit
order: 10
---

# Offset

Kommandoen `offset` oppretter en parallell kopi av en entitet i en fast vinkelrett avstand. Du skriver inn avstanden én gang, klikker deretter entiteter og velger en side — kommandoen forblir klar med samme avstand, slik at du kan forskyve flere objekter i én økt.

Støttede entitetstyper: **Line, Circle, Arc, Ellipse, Polyline** (inkludert Rectangles).

## Bruke offset

1. Skriv `offset` i terminalen eller klikk på **Offset**-knappen i verktøylinjen.
2. **Skriv inn offset-avstanden** og trykk **Enter** eller **Space**.
3. **Klikk en entitet** for å forskyve — hvis entiteten ikke er en støttet type, vises en feilmelding, og du kan klikke en annen entitet.
4. **Flytt markøren** til siden der kopien skal vises — en levende forhåndsvisning følger med.
5. **Klikk** for å plassere offset-kopien.

Etter hver plassering går kommandoen tilbake til steg 3 med **samme avstand**, klar for neste offset. Trykk **Escape** for å tilbakestille til avstandsinntastingssteget.

```
  Avstand: 10

  ─────────────────    ← original linje
  ─────────────────    ← offset-kopi (10 enheter under)
```

## Offset-oppførsel per entitet

| Entitet | Hvordan offsetten beregnes |
|--------|---------------------------|
| **Line** | Parallell linje forskjøvet vinkelrett på den opprinnelige retningen |
| **Circle** | Konsentrisk sirkel; klikk utenfor → større radius, innenfor → mindre radius |
| **Arc** | Konsentrisk bue med ny radius; samme vinkelspenn bevares |
| **Ellipse** | Begge halvakser økes eller reduseres med samme avstand |
| **Polyline** | Hvert segment forskyves uavhengig; tilstøtende offset-segmenter gjæres i hjørnene |

For **Circle**, **Arc** og **Ellipse**: hvis en innadgående offset ville redusere en radius eller halvakse til null eller mindre, brukes ikke offsetten.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Legg til siffer i avstandsverdien |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` / `Space` | Bekreft den inntastede avstanden og gå videre til entitetsvalg |
| `Escape` | Tilbakestill til avstandsinntastingssteget |

## Merknad om arbeidsflyt

Avstanden forblir satt til du trykker **Escape**. Dette gjør det effektivt å forskyve mange entiteter med samme avstand — skriv inn avstanden én gang, klikk deretter og velg side for hver entitet etter tur.

## Offset vs Copy

| | Offset | Copy |
|---|--------|------|
| Forskyvning | Vinkelrett på entitetens geometri | Vilkårlig vektor (basis → mål) |
| Støttede entiteter | Line, Circle, Arc, Ellipse, Polyline | Alle entitetstyper |
| Avstandsinntasting | Skrevet inn før entiteten velges | Skrevet inn eller klikket etter valg |
| Best til | Parallelle linjer, konsentriske sirkler, innoverliggende/utoverliggende baner | Plassere duplikater på vilkårlige posisjoner |
