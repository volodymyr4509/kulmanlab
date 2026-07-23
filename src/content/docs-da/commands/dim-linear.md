---
title: Dimension Linear-kommando — Horisontale og Vertikale Mål
description: Dimension Linear-kommandoen måler den horisontale eller vertikale afstand mellem to punkter. Mållinjen er altid akse-justeret — tryk H eller V for at låse retning, eller lad markørpositionen afgøre automatisk. Fuld DXF-rundtur som DIMENSION-entiteter.
keywords: [CAD dimension linear, horisontalt mål CAD, vertikalt mål CAD, dimlinear, H V retningslås, målforskydning, kulmanlab]
group: markup
order: 4
---

# Dimension Linear

Kommandoen `dimlinear` placerer et horisontalt eller vertikalt mål mellem to hjælpelinje-oprindelser. Mållinjen løber altid enten perfekt horisontalt eller perfekt vertikalt — den kan ikke placeres i en vilkårlig vinkel. Brug [Dimension Aligned](../dim-aligned/), når du har brug for et mål parallelt med en diagonal linje.

## Anatomien af et lineært mål

```
  |←————— 5.00 —————→|
  |                   |
  ●  (hjælpelinje 1)  ●  (hjælpelinje 2)
  p1                  p2
```

- **Hjælpelinjer** — falder fra hvert målte punkt vinkelret på mållinjen.
- **Mållinje** — horisontal (måler X-afstand) eller vertikal (måler Y-afstand).
- **Værdi** — den projicerede afstand langs den valgte akse, ikke den sande punkt-til-punkt-afstand.

## Placere et lineært mål

1. Skriv `dimlinear` i terminalen eller klik på **Dimension Linear**-knappen i værktøjslinjen.
2. **Klik oprindelsen af den første hjælpelinje** (p1), eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
3. **Klik oprindelsen af den anden hjælpelinje** (p2). Koordinatindtastning fungerer også her.
4. **Flyt markøren** for at positionere mållinjen. Retningen registreres automatisk fra markørpositionen.
5. **Klik** for at placere, eller skriv en forskydningsafstand og tryk **Enter** for præcis placering.

## Automatisk retningsregistrering

Når ingen retning er tvunget, læser kommandoen markørpositionen i forhold til de to målte punkter:

| Markørposition | Registreret retning | Hvad der måles |
|-----------------|---------------------|-----------------|
| Over eller under punkterne | Horisontal | Δ X mellem p1 og p2 |
| Til venstre eller højre for punkterne | Vertikal | Δ Y mellem p1 og p2 |

Tryk **H** for at låse horisontalt eller **V** for at låse vertikalt når som helst under placeringsfasen. Når den er låst, ændres retningen ikke, mens du flytter markøren.

## Indtastet forskydningsafstand

Skriv et tal under placering for at fastgøre mållinjen i en eksakt afstand fra de målte punkter:

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Tilføj ciffer til forskydningsafstanden |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` / `Space` | Placér ved den indtastede afstand |

Markørsiden (over/under for horisontal, venstre/højre for vertikal) afgør fortegnet — mållinjen vises på den side, markøren i øjeblikket er på.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning (p1/p2-faserne), eller forskydningsafstand (placeringsfasen) |
| `,` | Lås X og gå til Y-indtastning (p1/p2-faserne) |
| `H` | Lås horisontal retning (kun placeringsfasen) |
| `V` | Lås vertikal retning (kun placeringsfasen) |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` / `Space` | Bekræft indtastet koordinat eller forskydning |
| `Escape` | Annullér |

## Dimension Linear vs Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Akse | Altid H eller V | Parallel med den målte linje |
| Måler | Kun X- eller Y-komponent | Sand euklidisk afstand |
| H/V-taster | Ja — låser retning | Nej — følger altid p1→p2 |
| Bedst til | Ortogonale layouts, plantegninger | Diagonale elementer, vinklede snit |

## Redigere etiketten — simpel tilstand

**Dobbeltklik** et placeret lineært mål for at åbne teksteditoren i **simpel** tilstand. Editoren er forudfyldt med den aktuelle gengivne værdi, så du kan placere markøren og redigere den direkte.

| Funktion | Adfærd |
|---------|-----------|
| Fed / Kursiv / Skrifttype / Højde | Gælder **hele** etiketten på én gang |
| Per-tegn formatering | Understøttes ikke |
| `Enter` | Bekræfter værdien og lukker editoren |
| Flerlinje | Understøttes ikke |

Se [Tekstredigering — simpel tilstand](../../interface/text-editor/#simple-mode) for den fulde reference.

## Kæde mål

For at tilføje flere mål, der fortsætter fra den sidste hjælpelinje, brug [Dimension Continue](../dim-continue/) umiddelbart efter at have placeret dette.

## DXF — DIMENSION-entitet

Lineære mål gemmes som `DIMENSION`-entiteter med `rotationDeg` sat til `0` (horisontal) eller `90` (vertikal). Hjælpelinje-oprindelser, mållinjeposition, tekstposition, målt værdi, pilstil, teksthøjde og alle visningsflag overlever en rundtur uden tab.
