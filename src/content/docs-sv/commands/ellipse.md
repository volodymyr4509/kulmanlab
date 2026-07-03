---
sidebar_position: 6
title: Ellipse-kommandot — Rita roterade ellipser via centrum och två axlar i KulmanLab CAD
description: Ellipse-kommandot ritar en ellips i tre klick — centrum, första axelns ändpunkt (valfri riktning), sedan andra axelns längd. De två axlarna är alltid vinkelräta mot varandra. Varje halvaxel har sitt eget grepp för oberoende storleksändring efter placering. Fullständig DXF-rundtur som ELLIPSE-entiteter.
keywords: [CAD ellipskommando, rita ellips CAD, roterad ellips CAD, ellipsaxlar, ELLIPSE DXF-entitet, redigera ellipsgrepp, axelförhållande, kulmanlab]
---

# Ellipse

`ellipse`-kommandot ritar en ellips med tre klick: en centrumpunkt, ändpunkten på den första (stora) halvaxeln i valfri vinkel, och längden på den andra (lilla) halvaxeln. De två axlarna är alltid vinkelräta mot varandra — den andra axelns riktning härleds automatiskt från den första.

## Rita en ellips

1. Skriv `ellipse` i terminalen eller klicka på **Ellipse**-knappen i verktygsfältet.
2. **Klicka på centrumpunkten**, eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
3. **Klicka på den första axelns ändpunkt** — anger både riktning och längd för den första halvaxeln. Koordinatinmatning fungerar även här.
4. **Ange den andra axelns längd** — flytta markören vinkelrätt mot den första axeln och klicka eller skriv en längd.

```
               ● ← first axis endpoint (step 3)
              /
  center ●  /  ← first axis (any angle)
            |
            ● ← cursor here sets second axis length (step 4)
```

Ellipsen placeras efter steg 4 och kommandot avslutas.

## Axelinmatning — klick, koordinat eller skriven längd

**Centrum (steg 2):** klicka eller skriv `X,Y` för en exakt position.

**Första axelns ändpunkt (steg 3):** klicka, eller skriv `X,Y` för en exakt koordinat. Vinkellåsning snäpper också till 45°-steg — medan låst kan du skriva en längd och trycka **Enter** för att placera ändpunkten på exakt det avståndet.

**Andra axeln (steg 4):** skriven längd är alltid tillgänglig — ingen vinkellåsning krävs. Riktningen är redan fixerad vinkelrätt mot den första axeln; inmatning anger endast längden.

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.` | Lägg till siffra till axellängden (andra axelns fas) |
| `Backspace` | Ta bort det senast skrivna tecknet |
| `Enter` | Placera axelns ändpunkt på den skrivna längden |

## Koordinatinmatning (centrum och första axelns ändpunkt)

1. Skriv X-värdet.
2. Tryck på `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck **Enter** för att bekräfta.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Starta X-koordinatinmatning (centrum-/första axelns fas), eller axellängd vid vinkellåsning |
| `,` | Lås X och gå till Y-inmatning |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` | Bekräfta inmatad koordinat eller längd |
| `Escape` | Avbryt och återställ |

## Redigera med grepp — oberoende axelstorlek

En vald ellips visar fem grepp:

| Grepp | Antal | Vad det gör |
|------|-------|--------------|
| **Center** | 1 | Flyttar hela ellipsen; båda axlarna oförändrade |
| **Storaxelns ändpunkter** | 2 (motstående ändar av den längre axeln) | Dra för att ändra storaxelns halvaxellängd; lillaxelns absoluta storlek förblir konstant |
| **Lillaxelns ändpunkter** | 2 (motstående ändar av den kortare axeln) | Dra för att ändra lillaxelns halvaxellängd; storaxeln oförändrad |

Stor- och lillaxelns grepp är oberoende — du kan omforma ellipsen utan att köra kommandot på nytt.

## Markera ellipser

| Metod | Beteende |
|--------|-----------|
| **Klick** | Markerar om klicket landar nära ellipsens kontur |
| **Dra höger** (strikt) | Ellipsens axelparallella avgränsningsruta måste rymmas helt inom markeringsrutan |
| **Dra vänster** (korsande) | Varje del av ellipsens kontur som korsar markeringsrutans gräns markerar den |

## Kompatibla redigeringskommandon

| Kommando | Vad som händer med ellipsen |
|---------|-----------------------------|
| [Move](../move/) | Flyttar centrum; båda axlarna oförändrade |
| [Copy](../copy/) | Skapar en identisk ellips med ett nytt centrum |
| [Rotate](../rotate/) | Roterar centrumpositionen och storaxelvektorn med samma vinkel |
| [Mirror](../mirror/) | Speglar centrum och räknar om storaxelns riktning över spegelaxeln |
| [Scale](../scale/) | Skalar centrumpositionen och multiplicerar båda halvaxellängderna med faktorn |
| [Offset](../offset/) | Skapar en koncentrisk ellips förskjuten utåt eller inåt med ett fast avstånd |
| [Delete](../delete/) | Tar bort ellipsen |

## Egenskaper

**Allmänt**

| Egenskap | Standard | Betydelse |
|----------|---------|---------|
| Color | 256 (ByLayer) | ACI-färgindex |
| Layer | `0` | Lagertilldelning |
| Linetype | ByLayer | Namngivet linjetypsmönster |
| Linetype Scale | 1 | Skalfaktor för linjetypsmönstret |
| Thickness | 0 | Extruderingstjocklek |

**Geometri**

| Egenskap | Betydelse |
|----------|---------|
| Center X / Center Y | Ellipsens centrum |
| Major Axis X / Major Axis Y | Vektor från centrum till storaxelns ändpunkt (kodar både riktning och längd) |
| Axis Ratio | Förhållandet mellan lillaxelns och storaxelns halvaxel (0 < förhållande ≤ 1) |
| Start Angle / End Angle | Parametriska vinklar i grader; båda är 0°/360° för en fullständig ellips |

## Ellipse vs Circle — vilken ska du använda

| | Ellipse | Circle |
|---|---------|--------|
| Axlar | Två oberoende halvaxlar i valfri vinkel | En radie, symmetrisk |
| Rotation | Kan placeras i valfri vinkel | Ingen rotation |
| Skriven inmatning | Längd per axel | Endast radie |
| Storleksändring med grepp | Stor- och lillaxel oberoende av varandra | Alla fyra kardinalpunkter lika |
| Bäst för | Sneda vyer, ovala former, perspektivhål | Symmetriska runda former |

## DXF — ELLIPSE-entitet

Ellipser sparas som `ELLIPSE`-entiteter i DXF-filen. Formatet lagrar centrumpunkten, den fullständiga storaxelvektorn (riktning + längd) och axelförhållandet. Rotation, form och alla stilegenskaper bevaras helt vid export och import. En cirkel lagras **inte** som en degenererad ellips — de två entitetstyperna förblir åtskilda i DXF-modellen.
