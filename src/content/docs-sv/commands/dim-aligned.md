---
sidebar_position: 14
title: "Dimension Aligned-kommandot — Verkliga avståndsmått i valfri vinkel i KulmanLab CAD"
description: "Dimension Aligned-kommandot mäter det verkliga raka avståndet mellan två punkter. Måttlinjen går parallellt med p1→p2-linjen i valfri vinkel — till skillnad från Dimension Linear som är begränsat till horisontellt eller vertikalt. Fullständig DXF-rundtur som DIMENSION-entiteter."
keywords: [CAD dimension aligned, dimaligned, diagonalt mått CAD, verkligt avståndsmått, vinklat mått CAD, kulmanlab]
---

# Dimension Aligned

`dimaligned`-kommandot placerar ett mått som mäter det **verkliga raka avståndet** mellan två punkter. Måttlinjen går parallellt med linjen som förbinder de två punkterna, så den kan ligga i valfri vinkel. Detta är den viktigaste skillnaden mot [Dimension Linear](./dim-linear), som är begränsat till horisontellt eller vertikalt.

## Anatomi av ett justerat mått

```
     ●  p2
    /|
   / |  (ext line 2, perpendicular to dim line)
  /  |
 /←5.00→/
/  /
●  /  (ext line 1, perpendicular to dim line)
p1
```

- **Hjälplinjer** — vinkelräta mot måttlinjen, dras från varje uppmätt punkt.
- **Måttlinje** — parallell med p1→p2, förskjuten åt ena sidan beroende på markörens position.
- **Värde** — det verkliga euklidiska avståndet `|p1 – p2|`.

## Placera ett justerat mått

1. Skriv `dimaligned` i terminalen eller klicka på **Dimension Aligned**-knappen i verktygsfältet.
2. **Klicka på det första hjälplinjeursprunget** (p1), eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
3. **Klicka på det andra hjälplinjeursprunget** (p2). Koordinatinmatning fungerar även här.
4. **Flytta markören** åt ena sidan för att ställa in måttlinjens vinkelräta förskjutning.
5. **Klicka** för att placera, eller skriv ett förskjutningsavstånd och tryck **Enter** för exakt placering.

## Inskrivet förskjutningsavstånd

Skriv ett tal under placeringen för att fixera måttlinjen på ett exakt vinkelrätt avstånd från p1→p2-linjen:

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.` | Lägger till en siffra i förskjutningen |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` / `Space` | Placerar på den inskrivna förskjutningen |

Markörens sida avgör vilken sida måttlinjen visas på.

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Startar X-koordinatinmatning (p1/p2-faserna), eller förskjutningsavstånd (placeringsfasen) |
| `,` | Låser X och går vidare till Y-inmatning (p1/p2-faserna) |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` / `Space` | Bekräftar inskriven koordinat eller förskjutning |
| `Escape` | Avbryter |

## Dimension Aligned jämfört med Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Måttlinjens vinkel | Parallell med p1→p2 — valfri vinkel | Alltid horisontell eller vertikal |
| Mäter | Verkligt euklidiskt avstånd | Endast X- eller Y-komponent |
| H/V-orienteringslås | Nej | Ja — tangenterna `H` och `V` |
| Bäst för | Diagonala features, vinklade snitt | Ortogonala layouter, rutnätsjusterade delar |

## Redigera etiketten — enkelt läge

**Dubbelklicka** på ett placerat justerat mått för att öppna textredigeraren i **enkelt** läge. Redigeraren fylls i förväg med det aktuella renderade värdet så att du kan placera markören och redigera det direkt.

| Funktion | Beteende |
|---------|-----------|
| Fet / Kursiv / Typsnitt / Höjd | Appliceras på **hela** etiketten på en gång |
| Formatering per tecken | Stöds inte |
| `Enter` | Bekräftar värdet och stänger redigeraren |
| Flera rader | Stöds inte |

Se [Textredigerare — enkelt läge](../interface/text-editor#simple-mode) för den fullständiga referensen.

## Kedja mått

För att lägga till fler mått som fortsätter från detta måtts andra hjälplinjeursprung, använd [Dimension Continue](./dim-continue) — det låser till samma mätvinkel som detta justerade mått.

## DXF — DIMENSION-entitet (justerad typ)

Justerade mått sparas som `DIMENSION`-entiteter med `dimType = 1` (justerad). Hjälplinjeursprung, måttlinjens position, textposition, uppmätt värde, rotation, pilstil och alla visningsflaggor bevaras vid rundtur utan förlust.
