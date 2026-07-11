---
title: "Trim-kommandot — Klipp linjesegment vid skärningspunkter i KulmanLab CAD"
description: "Trim-kommandot tar bort den del av en Line som ligger mellan två intilliggande skärningspunkter närmast markören. En röd hover-förhandsvisning visar exakt vilket segment som kommer klippas innan du klickar. Trim fungerar endast på Line-entiteter — inte bågar, cirklar eller polylinjer."
keywords: [CAD trim-kommando, klipp linje CAD, klipp linjeskärning, hover trim-förhandsvisning, endast linje trim, kulmanlab]
group: edit
order: 8
---

# Trim

`trim`-kommandot tar bort den del av en [Line](../line/) som ligger mellan två intilliggande skärningspunkter, och delar linjen i ett eller två kortare segment. Vilket segment som klipps bestäms av markörens position — håll markören över den del du vill ta bort och klicka för att klippa den.

Trim fungerar endast på **Line-entiteter**. För bågar, cirklar, polylinjer och andra entitetstyper, använd [Delete](../delete/) eller greppredigering istället.

## Klippa en linje

1. Skriv `trim` i terminalen eller klicka på **Trim**-knappen i verktygsfältet.
2. **Håll markören över linjesegmentet** du vill ta bort — en röd förhandsvisning markerar exakt den del som kommer klippas.
3. **Klicka** för att ta bort det segmentet.

Kommandot förblir aktivt efter varje klippning, så du kan fortsätta hålla markören över och klicka för att klippa fler segment. Tryck **Escape** för att avsluta.

```
  Före:                        Efter att mittsegmentet klippts:

  ──────●──────●──────        ──────●          ●──────
       skärning  skärning       (vänster del)  (höger del)
                                 (mittsegmentet borttaget)
```

## Hur klippsegmentet bestäms

Kommandot projicerar markörens position på den linje markören befinner sig över och hittar alla skärningspunkter linjen har med andra entiteter. Dessa skärningsparametrar delar upp linjen i segment. Segmentet vars intervall innehåller markörens projektion markeras och tas bort vid klick.

- Om markören är **före den första skärningen**: den ledande delen av linjen tas bort.
- Om markören är **mellan två skärningar**: den mellersta delen tas bort; linjen delas i två.
- Om markören är **efter den sista skärningen**: den avslutande delen tas bort.
- Om linjen **inte har några skärningar** med någon annan entitet: ingen förhandsvisning visas och ett klick gör ingenting.

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `Escape` | Avslutar trim-läget |

## Entiteter som stöds

| Entitet | Kan klippas? |
|--------|----------------|
| Line | Ja |
| Arc, Circle, Ellipse | Nej |
| Polyline / Rectangle | Nej |
| Text, Spline, Dimension, Leader | Nej |

Entiteterna som används som **klippgränser** kan vara av vilken typ som helst — endast linjen som klipps måste vara en Line-entitet.

## Trim jämfört med Extend

| | Trim | Extend |
|---|------|--------|
| Vad det gör | Tar bort ett segment av en linje | Sträcker en linjeändpunkt till en gräns |
| Utlösare | Håll markören över segmentet som ska klippas | Håll markören nära ändpunkten som ska förlängas |
| Resultat | Linjen delas eller kortas av | Linjens ändpunkt flyttas till gränsen |
| Båda | Endast linjer | Endast linjer |
