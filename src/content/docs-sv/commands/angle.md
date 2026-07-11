---
title: Angle-kommandot — Mät den inre vinkeln vid en vertex med tre punkter i KulmanLab CAD
description: Angle-kommandot mäter den inre vinkeln (0°–180°) vid en vertex definierad av tre klickade punkter. Klicka första änden, vertex, andra änden. Resultatet visas i terminalen med 4 decimaler.
keywords: [CAD vinkelmätning, tre-punkts vinkel, inre vinkel CAD, mät vinkel-kommando, vertexvinkel, kulmanlab]
group: measure
order: 2
---

# Angle

`angle`-kommandot mäter den inre vinkeln vid en vertex som bildas av två linjesegment genom tre klickade punkter. Resultatet — alltid mellan 0° och 180° — visas i terminalen med 4 decimaler. Det är ett av tre mätkommandon — [Distance](../distance/) mäter rak linjelängd, och [Area](../area/) mäter arean och omkretsen av en polygon.

## Anatomin hos en vinkelmätning

```
  ● first point (end of first ray)
   \
    \  first ray preview
     \
      ● vertex (step 3)
     /
    /  second ray preview (to cursor)
   /
  ● third point  →  terminal: "Angle: 45.0000°"
```

- **Första punkten** — ena änden av vinkeln (steg 2).
- **Vertex** — hörnet där vinkeln mäts (steg 3).
- **Tredje punkten** — den andra änden av vinkeln (steg 4).

## Mäta en vinkel

1. Skriv `angle` i terminalen eller klicka på **Angle**-knappen i verktygsfältet.
2. **Klicka på den första punkten** — ena armänden av vinkeln. Eller skriv `X,Y` och tryck på **Enter** för en exakt koordinat.
3. **Klicka på vertexen** — hörnet där de två armarna möts. Koordinatinmatning fungerar även här.
4. **Klicka på den tredje punkten** — den andra armänden. Koordinatinmatning fungerar även här. Att placera denna punkt skriver ut resultatet.
5. **Klicka igen** (valfritt) för att starta en ny mätning från det klicket som den nya första punkten.

## Konvention för inre vinkel

Kommandot beräknar vinkeln med hjälp av skalärprodukten (dot product) av de två strålarna från vertexen:

- **Alltid inre**: resultatet är den mindre vinkeln, mellan 0° och 180°.
- Ordningen du klickar ändpunkterna i påverkar inte resultatet — endast vertexens position spelar roll.
- Kollinjära punkter (alla tre på en linje) ger 0° eller 180°.

## Kedja mätningar

Efter att resultatet visas startar ett klick omedelbart nästa mätning — den klickade punkten blir den nya första punkten. Kommandot avslutas aldrig automatiskt förrän du trycker på `Escape`.

## Angle jämfört med Distance

| | Angle | Distance |
|---|-------|---------|
| Vad det mäter | Inre vinkel vid en vertex | Rak linjelängd |
| Antal klick | 3 | 2 |
| Resultatformat | `45.0000°` | `12.3456` (enheter) |
| Förhandsgranskning på ritytan | Två linjer från vertex till båda ändarna | Linje från första punkten till markören |
| Bäst för | Öppningsvinkel mellan två features | Längden på ett gap eller segment |

## Koordinatinmatning

Istället för att klicka kan du skriva en exakt position för någon av de tre punkterna:

1. Skriv X-värdet.
2. Tryck på `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck på **Enter** för att bekräfta.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Starta X-koordinatinmatning |
| `,` | Lås X och gå vidare till Y-inmatning |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` | Bekräfta den inskrivna koordinaten |
| `Escape` | Avbryt och återställ till steg 2 |

## Anteckningar

- Resultat visas **endast i terminalen** — inget läggs till i ritningen.
- Precisionen är alltid 4 decimaler i grader.
