---
title: Dimension Angular — Mål Vinkler mellem Linjer, Buer, Cirkler
description: DimensionAngular-kommandoen placerer en vinkelmål-annotation på linjer, buer eller cirkler. Understøtter to-linje vinkel, buespænd og cirkelsektor-tilstande.
keywords: [vinkelmål CAD, angle dimension, mål vinkel mellem linjer, DimensionAngular, buemål, vinkelannotation, CAD vinkelmarkup, kulmanlab vinkelmål]
group: markup
order: 9
---

# Dimension Angular

Kommandoen `DimensionAngular` placerer en **vinkelmål**-bueannotation på tegningen. Den måler og mærker vinklen mellem to linjer, spændet af en bue, eller en sektor af en cirkel.

## Sådan aktiverer du den

Klik på **Dimension Angular**-knappen i værktøjslinjen i Markup-panelet, eller skriv `DimensionAngular` i terminalen.

## Tre inputtilstande

Det første klik afgør, hvilken tilstand der bruges:

### To linjer

1. **Klik den første linje.** Markørpositionen afgør, hvilken side af linjen der bruges.
2. **Klik den anden linje.** De to linjer skal krydse hinanden (skæringspunktet beregnes automatisk; det behøver ikke være synligt på skærmen).
3. **Klik for at placere** målbuen. Flyt markøren for at vælge radius og hvilken vinkelsektor der mærkes — annotationen følger markøren til hvilken som helst side af toppunktet, du befinder dig på.

Parallelle linjer kan ikke danne et vinkelmål; kommandoen ignorerer det andet klik, hvis linjerne ikke krydser hinanden.

### Bue

1. **Klik en bue.** Målet oprettes straks fra buens startvinkel til dens slutvinkel, med buens centrum som toppunkt.
2. **Klik for at placere** målbuen ved den ønskede radius.

### Cirkel

1. **Klik en cirkel.** Det første vinkelendepunkt snapper til det nærmeste punkt på cirklen.
2. **Klik et andet punkt** på cirklen for at definere det andet vinkelendepunkt.
3. **Klik for at placere** målbuen.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Escape` | Annullér og vend tilbage til det første valg |

## Adfærdsdetaljer

- Målbuen tegnes altid på siden af toppunktet, hvor du placerer den — flyt markøren over toppunktet for at skifte til supplementvinklen.
- Den målte vinkel vises i grader og opdateres live, mens du bevæger markøren under placering.
- Den resulterende annotation er en fuld `DimensionAngular`-entitet gemt på det aktuelle lag. Dens udseendeegenskaber (pilstørrelse, teksthøjde, hjælpelinjelængde) kan justeres i Properties-panelet.
- Vinkelmål inkluderes i JSON-eksport, men understøttes ikke af DXF-eksportøren.

## Redigere etiketten — simpel tilstand

**Dobbeltklik** et placeret vinkelmål for at åbne teksteditoren i **simpel** tilstand. Editoren er forudfyldt med den aktuelle gengivne værdi, så du kan placere markøren og redigere den direkte.

| Funktion | Adfærd |
|---------|-----------|
| Fed / Kursiv / Skrifttype / Højde | Gælder **hele** etiketten på én gang |
| Per-tegn formatering | Understøttes ikke |
| `Enter` | Bekræfter værdien og lukker editoren |
| Flerlinje | Understøttes ikke |

Se [Tekstredigering — simpel tilstand](../../interface/text-editor/#simple-mode) for den fulde reference.

## Relaterede kommandoer

- [Dimension Linear](../dim-linear/) — horisontalt eller vertikalt mål
- [Dimension Aligned](../dim-aligned/) — mål justeret til to punkter
- [Dimension Radius](../dim-radius/) — radiusmål for buer og cirkler
- [Dimension Diameter](../dim-diameter/) — diametermål for cirkler
