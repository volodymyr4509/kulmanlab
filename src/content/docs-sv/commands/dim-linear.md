---
title: "Dimension Linear-kommandot — Horisontella och vertikala mått i KulmanLab CAD"
description: "Dimension Linear-kommandot mäter det horisontella eller vertikala avståndet mellan två punkter. Måttlinjen är alltid axelparallell — tryck H eller V för att låsa orienteringen, eller låt markörens position avgöra automatiskt. Fullständig DXF-rundtur som DIMENSION-entiteter."
keywords: [CAD dimension linear, horisontellt mått CAD, vertikalt mått CAD, dimlinear, H V orienteringslås, måttförskjutning, kulmanlab]
group: markup
order: 4
---

# Dimension Linear

`dimlinear`-kommandot placerar ett horisontellt eller vertikalt mått mellan två hjälplinjeursprung. Måttlinjen går alltid antingen helt horisontellt eller helt vertikalt — den kan inte placeras i en godtycklig vinkel. Använd [Dimension Aligned](../dim-aligned/) när du behöver ett mått parallellt med en diagonal linje.

## Anatomi av ett linjärt mått

```
  |←————— 5.00 —————→|
  |                   |
  ●  (ext line 1)     ●  (ext line 2)
  p1                  p2
```

- **Hjälplinjer** — dras från varje uppmätt punkt vinkelrätt mot måttlinjen.
- **Måttlinje** — horisontell (mäter X-avstånd) eller vertikal (mäter Y-avstånd).
- **Värde** — det projicerade avståndet längs den valda axeln, inte det verkliga avståndet mellan punkterna.

## Placera ett linjärt mått

1. Skriv `dimlinear` i terminalen eller klicka på **Dimension Linear**-knappen i verktygsfältet.
2. **Klicka på det första hjälplinjeursprunget** (p1), eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
3. **Klicka på det andra hjälplinjeursprunget** (p2). Koordinatinmatning fungerar även här.
4. **Flytta markören** för att positionera måttlinjen. Orienteringen avgörs automatiskt utifrån markörens position.
5. **Klicka** för att placera, eller skriv ett förskjutningsavstånd och tryck **Enter** för exakt placering.

## Automatisk orienteringsdetektering

När ingen orientering är tvingad läser kommandot av markörens position i förhållande till de två uppmätta punkterna:

| Markörposition | Detekterad orientering | Vad som mäts |
|-----------------|---------------------|-----------------|
| Ovanför eller under punkterna | Horisontell | Δ X mellan p1 och p2 |
| Till vänster eller höger om punkterna | Vertikal | Δ Y mellan p1 och p2 |

Tryck **H** för att låsa horisontell eller **V** för att låsa vertikal orientering när som helst under placeringsfasen. När den väl är låst ändras inte orienteringen när du flyttar markören.

## Inskrivet förskjutningsavstånd

Skriv ett tal under placeringen för att fixera måttlinjen på ett exakt avstånd från de uppmätta punkterna:

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.` | Lägger till en siffra i förskjutningsavståndet |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` / `Space` | Placerar på det inskrivna avståndet |

Markörens sida (ovanför/under för horisontell, vänster/höger för vertikal) avgör tecknet — måttlinjen visas på den sida markören för tillfället befinner sig på.

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Startar X-koordinatinmatning (p1/p2-faserna), eller förskjutningsavstånd (placeringsfasen) |
| `,` | Låser X och går vidare till Y-inmatning (p1/p2-faserna) |
| `H` | Låser horisontell orientering (endast placeringsfasen) |
| `V` | Låser vertikal orientering (endast placeringsfasen) |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` / `Space` | Bekräftar inskriven koordinat eller förskjutning |
| `Escape` | Avbryter |

## Dimension Linear jämfört med Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Axel | Alltid H eller V | Parallell med den uppmätta linjen |
| Mäter | Endast X- eller Y-komponent | Verkligt euklidiskt avstånd |
| H/V-tangenter | Ja — låser orientering | Nej — följer alltid p1→p2 |
| Bäst för | Ortogonala layouter, planritningar | Diagonala features, vinklade snitt |

## Redigera etiketten — enkelt läge

**Dubbelklicka** på ett placerat linjärt mått för att öppna textredigeraren i **enkelt** läge. Redigeraren fylls i förväg med det aktuella renderade värdet så att du kan placera markören och redigera det direkt.

| Funktion | Beteende |
|---------|-----------|
| Fet / Kursiv / Typsnitt / Höjd | Appliceras på **hela** etiketten på en gång |
| Formatering per tecken | Stöds inte |
| `Enter` | Bekräftar värdet och stänger redigeraren |
| Flera rader | Stöds inte |

Se [Textredigerare — enkelt läge](../../interface/text-editor/#simple-mode) för den fullständiga referensen.

## Kedja mått

För att lägga till fler mått som fortsätter från den senaste hjälplinjen, använd [Dimension Continue](../dim-continue/) direkt efter att du placerat detta mått.

## DXF — DIMENSION-entitet

Linjära mått sparas som `DIMENSION`-entiteter med `rotationDeg` satt till `0` (horisontell) eller `90` (vertikal). Hjälplinjeursprung, måttlinjens position, textposition, uppmätt värde, pilstil, texthöjd och alla visningsflaggor bevaras vid rundtur utan förlust.
