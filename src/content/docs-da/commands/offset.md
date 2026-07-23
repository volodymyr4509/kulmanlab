---
title: Offset-kommando — Opret Parallelle Kopier i en Fast Afstand
description: Offset-kommandoen opretter en parallel kopi af en Line, Circle, Arc, Ellipse eller Polyline i en indtastet afstand. Afstanden angives én gang og genbruges til flere offset-operationer. Et sideklik afgør, hvilken retning kopien vises i. Fem entitetstyper understøttet.
keywords: [CAD offset-kommando, parallel kopi CAD, offset linje CAD, offset cirkel CAD, offset polylinje CAD, koncentrisk offset, kulmanlab]
group: edit
order: 10
---

# Offset

Kommandoen `offset` opretter en parallel kopi af en entitet i en fast vinkelret afstand. Du indtaster afstanden én gang, klikker derefter entiteter og vælger en side — kommandoen forbliver klar med samme afstand, så du kan forskyde flere objekter i én session.

Understøttede entitetstyper: **Line, Circle, Arc, Ellipse, Polyline** (inklusive Rectangles).

## Bruge offset

1. Skriv `offset` i terminalen eller klik på **Offset**-knappen i værktøjslinjen.
2. **Indtast offset-afstanden** og tryk **Enter** eller **Space**.
3. **Klik en entitet** for at forskyde — hvis entiteten ikke er en understøttet type, vises en fejlmeddelelse, og du kan klikke en anden entitet.
4. **Flyt markøren** til den side, hvor kopien skal vises — en levende forhåndsvisning følger med.
5. **Klik** for at placere offset-kopien.

Efter hver placering vender kommandoen tilbage til trin 3 ved **samme afstand**, klar til den næste offset. Tryk **Escape** for at nulstille tilbage til afstandsindtastningstrinnet.

```
  Afstand: 10

  ─────────────────    ← original linje
  ─────────────────    ← offset-kopi (10 enheder under)
```

## Offset-adfærd pr. entitet

| Entitet | Hvordan offset beregnes |
|--------|---------------------------|
| **Line** | Parallel linje forskudt vinkelret på den oprindelige retning |
| **Circle** | Koncentrisk cirkel; klik udenfor → større radius, indenfor → mindre radius |
| **Arc** | Koncentrisk bue med ny radius; samme vinkelspænd bevares |
| **Ellipse** | Begge halvakser øges eller reduceres med samme afstand |
| **Polyline** | Hvert segment forskydes uafhængigt; tilstødende offset-segmenter smiges i hjørnerne |

For **Circle**, **Arc** og **Ellipse**: hvis en indadgående offset ville reducere en radius eller halvakse til nul eller derunder, anvendes offset ikke.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Tilføj ciffer til afstandsværdien |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` / `Space` | Bekræft den indtastede afstand og gå videre til entitetsvalg |
| `Escape` | Nulstil til afstandsindtastningstrinnet |

## Bemærkning om arbejdsgang

Afstanden forbliver sat, indtil du trykker **Escape**. Dette gør det effektivt at forskyde mange entiteter med samme afstand — indtast afstanden én gang, klik derefter og vælg side for hver entitet efter tur.

## Offset vs Copy

| | Offset | Copy |
|---|--------|------|
| Forskydning | Vinkelret på entitetens geometri | Vilkårlig vektor (basis → mål) |
| Understøttede entiteter | Line, Circle, Arc, Ellipse, Polyline | Alle entitetstyper |
| Afstandsindtastning | Indtastet før valg af entitet | Indtastet eller klikket efter valg |
| Bedst til | Parallelle linjer, koncentriske cirkler, indad-/udadgående baner | Placering af duplikater på vilkårlige positioner |
