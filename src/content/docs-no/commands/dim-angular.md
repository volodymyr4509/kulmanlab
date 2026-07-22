---
title: Dimension Angular — Mål Vinkler mellom Linjer, Buer, Sirkler
description: DimensionAngular-kommandoen plasserer en vinkelmål-annotasjon på linjer, buer eller sirkler. Støtter modusene topunkts vinkel mellom linjer, buespenn og sirkelsektor.
keywords: [vinkelmål CAD, angle dimension, mål vinkel mellom linjer, DimensionAngular, buemål, vinkelannotasjon, CAD vinkelmarkup, kulmanlab vinkelmål]
group: markup
order: 9
---

# Dimension Angular

Kommandoen `DimensionAngular` plasserer en **vinkelmål**-bueannotasjon på tegningen. Den måler og merker vinkelen mellom to linjer, spennet til en bue, eller en sektor av en sirkel.

## Slik aktiverer du den

Klikk på **Dimension Angular**-knappen i verktøylinjen i Markup-panelet, eller skriv `DimensionAngular` i terminalen.

## Tre inndatamodus

Det første klikket avgjør hvilken modus som brukes:

### To linjer

1. **Klikk den første linjen.** Markørposisjonen avgjør hvilken side av linjen som brukes.
2. **Klikk den andre linjen.** De to linjene må krysse hverandre (skjæringspunktet beregnes automatisk; det trenger ikke være synlig på skjermen).
3. **Klikk for å plassere** målbuen. Flytt markøren for å velge radiusen og hvilken vinkelsektor som merkes — annotasjonen følger markøren til hvilken som helst side av toppunktet du befinner deg på.

Parallelle linjer kan ikke danne et vinkelmål; kommandoen ignorerer det andre klikket hvis linjene ikke krysser hverandre.

### Bue

1. **Klikk en bue.** Målet opprettes umiddelbart fra buens startvinkel til sluttvinkelen, med buens senter som toppunkt.
2. **Klikk for å plassere** målbuen ved ønsket radius.

### Sirkel

1. **Klikk en sirkel.** Det første vinkelendepunktet festes til nærmeste punkt på sirkelen.
2. **Klikk et andre punkt** på sirkelen for å definere det andre vinkelendepunktet.
3. **Klikk for å plassere** målbuen.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Escape` | Avbryt og gå tilbake til det første valget |

## Oppførselsdetaljer

- Målbuen tegnes alltid på siden av toppunktet der du plasserer den — flytt markøren over toppunktet for å bytte til tilleggsvinkelen.
- Den målte vinkelen vises i grader og oppdateres live mens du beveger markøren under plassering.
- Den resulterende annotasjonen er en fullstendig `DimensionAngular`-entitet lagret på gjeldende lag. Utseendeegenskapene (pilstørrelse, teksthøyde, hjelpelinjelengde) kan justeres i Properties-panelet.
- Vinkelmål inkluderes i JSON-eksport, men støttes ikke av DXF-eksportøren.

## Redigere etiketten — enkel modus

**Dobbeltklikk** på et plassert vinkelmål for å åpne teksteditoren i **enkel** modus. Editoren er forhåndsutfylt med gjeldende gjengitte verdi, slik at du kan plassere markøren og redigere den direkte.

| Funksjon | Oppførsel |
|---------|-----------|
| Fet / Kursiv / Skrift / Høyde | Gjelder **hele** etiketten samtidig |
| Per-tegn formatering | Støttes ikke |
| `Enter` | Bekrefter verdien og lukker editoren |
| Flerlinje | Støttes ikke |

Se [Tekstredigering — enkel modus](../../interface/text-editor/#simple-mode) for den fullstendige referansen.

## Relaterte kommandoer

- [Dimension Linear](../dim-linear/) — horisontalt eller vertikalt mål
- [Dimension Aligned](../dim-aligned/) — mål justert til to punkter
- [Dimension Radius](../dim-radius/) — radiusmål for buer og sirkler
- [Dimension Diameter](../dim-diameter/) — diametermål for sirkler
