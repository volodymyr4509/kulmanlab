---
sidebar_position: 2
title: "Distance-kommandot — Mät raka avstånd mellan två punkter i KulmanLab CAD"
description: "Distance-kommandot mäter det euklidiska avståndet mellan två klickade punkter och visar resultatet med 4 decimalers precision. Klicka igen efter resultatet för att kedja en ny mätning från den senaste punkten."
keywords: [CAD mät avstånd, distance-kommando, punkt-till-punkt-mätning, rakt avstånd, kulmanlab CAD-mätning]
---

# Distance

`distance`-kommandot mäter det raka (euklidiska) avståndet mellan två klickade punkter och skriver ut resultatet i terminalen med 4 decimalers precision. Det är ett av två mätkommandon — [Angle](./angle) mäter istället vinkelöppningen vid en vertex.

## Anatomi av en avståndsmätning

```
  ● first point
   \
    \  preview line (live)
     \
      ● second point    →  terminal: "Distance: 12.3456"
```

- **Första punkten** — mätningens ursprung.
- **Andra punkten** — slutpunkt; att placera den skriver ut resultatet omedelbart.
- **Resultat** — visas i terminalen, placeras inte på ritytan.

## Mäta ett avstånd

1. Skriv `distance` i terminalen eller klicka på **Distance**-knappen i verktygsfältet.
2. **Klicka på första punkten**, eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
3. **Klicka på andra punkten** — det uppmätta avståndet visas i terminalen. Koordinatinmatning fungerar även här.
4. **Klicka igen** (valfritt) för att starta en ny mätning. Kommandot förblir aktivt.

Tryck **Escape** när som helst för att återställa till steg 2.

## Kedja mätningar

Efter att resultatet visats startar ett klick omedelbart nästa mätning — den klickade punkten blir den nya första punkten. Detta gör att du kan mäta en serie avstånd utan att återaktivera kommandot.

## Distance jämfört med Angle

| | Distance | Angle |
|---|---------|-------|
| Vad det mäter | Rak längd | Innervinkel vid en vertex |
| Antal klick | 2 | 3 |
| Resultatformat | `12.3456` (enheter) | `45.0000°` |
| Förhandsvisning på ritytan | Linje från första punkten till markören | Två linjer från vertex till markören |
| Bäst för | Längden på en lucka eller ett segment | Öppningsvinkel mellan två features |

## Koordinatinmatning

Istället för att klicka kan du skriva en exakt position för endera punkten:

1. Skriv X-värdet.
2. Tryck `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck **Enter** för att bekräfta.

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Startar X-koordinatinmatning |
| `,` | Låser X och går vidare till Y-inmatning |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` | Bekräftar den inskrivna koordinaten |
| `Escape` | Avbryter och återställer till steg 2 |

## Anmärkningar

- Resultat visas **endast i terminalen** — inget läggs till i ritningen.
- Resultatet uttrycks i samma enheter som ritningens koordinater (ingen enhetskonvertering).
- Precisionen är alltid 4 decimaler.
