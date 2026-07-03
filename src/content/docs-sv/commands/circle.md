---
sidebar_position: 4
title: Circle-kommandot — Rita cirklar via centrum och radie i KulmanLab CAD
description: Circle-kommandot placerar en cirkel genom att klicka på en centrumpunkt och sedan klicka eller skriva radien. Fyra kardinalgrepp låter dig ändra radien genom att dra utan att köra kommandot på nytt. Fullständig DXF-rundtur som CIRCLE-entiteter.
keywords: [CAD cirkelkommando, rita cirkel CAD, radieinmatning cirkel, ändra storlek cirkelgrepp, CIRCLE DXF-entitet, dimradius cirkel, kulmanlab]
---

# Circle

`circle`-kommandot ritar en cirkel definierad av en centrumpunkt och en radie. Efter att centrum har klickats kan du ange radien antingen genom att klicka på en andra punkt på ritytan eller genom att skriva ett exakt tal — båda alternativen är aktiva samtidigt.

## Rita en cirkel

1. Skriv `circle` i terminalen eller klicka på **Circle**-knappen i verktygsfältet.
2. **Klicka på centrumpunkten**, eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
3. Ange radien — antingen:
   - **Klicka på valfri punkt** på ritytan — avståndet från centrum blir radien, eller
   - **Skriv radien** och tryck **Enter** för ett exakt värde.

Cirkeln placeras omedelbart och kommandot avslutas.

```
  center ●
          \  radius line preview
           \
            ● ← click here, or type a number
```

Under radiefasen visar förhandsvisningen cirkeln vid aktuellt markörsavstånd och ritar även en radielinje från centrum till den aktuella punkten.

## Koordinatinmatning för centrum

Istället för att klicka kan du skriva centrumpositionen:

1. Skriv X-värdet.
2. Tryck på `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck **Enter** för att placera centrum och gå vidare till radieinmatning.

## Skriven radieinmatning

Efter att centrum har placerats bygger inmatning omedelbart upp ett radievärde:

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.` | Lägg till siffra till radievärdet |
| `Backspace` | Ta bort det senast skrivna tecknet |
| `Enter` | Placera cirkeln med den skrivna radien |

Det ackumulerade värdet visas i terminalprompten (t.ex. `enter radius of circle: 25`). Förhandsvisningen uppdateras för att visa den skrivna radien medan markören styr riktningen på radielinjemarkören.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Starta X-koordinatinmatning (centrumfasen), eller radiesiffra (radiefasen) |
| `,` | Lås X och gå till Y-inmatning (centrumfasen) |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` | Bekräfta inmatad koordinat eller radie |
| `Escape` | Avbryt och återställ |

## Redigera med grepp — ändra radiens storlek

En vald cirkel visar fem grepp:

| Grepp | Position | Vad det gör |
|------|----------|--------------|
| **Center** | Centrumpunkt | Flyttar hela cirkeln; radien förblir oförändrad |
| **Left** | Vänstraste punkten (centrum − radie) | Dra för att ange en ny radie = avstånd till centrum |
| **Right** | Högraste punkten (centrum + radie) | Dra för att ange en ny radie = avstånd till centrum |
| **Top** | Översta punkten | Dra för att ange en ny radie = avstånd till centrum |
| **Bottom** | Understa punkten | Dra för att ange en ny radie = avstånd till centrum |

Alla fyra kardinalgrepp beter sig identiskt — den nya radien blir avståndet från centrum till dragpositionen. Centrum förblir fast.

## Markera cirklar

| Metod | Beteende |
|--------|-----------|
| **Klick** | Markerar om klicket landar nära omkretsen |
| **Dra höger** (strikt) | Hela den avgränsande kvadraten (centrum ± radie) måste ligga inom rutan |
| **Dra vänster** (korsande) | Varje del av omkretsen som korsar eller berör rutans gräns markerar cirkeln |

## Kompatibla redigeringskommandon

| Kommando | Vad som händer med cirkeln |
|---------|---------------------------|
| [Move](../move/) | Flyttar centrum; radien oförändrad |
| [Copy](../copy/) | Skapar en identisk cirkel med ett nytt centrum |
| [Rotate](../rotate/) | Roterar centrum kring baspunkten; radien oförändrad |
| [Mirror](../mirror/) | Speglar centrum över spegelaxeln; radien oförändrad |
| [Scale](../scale/) | Skalar centrumpositionen och multiplicerar radien med skalfaktorn |
| [Offset](../offset/) | Skapar en koncentrisk cirkel med en större eller mindre radie |
| [Delete](../delete/) | Tar bort cirkeln |

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
| Center X / Center Y | Koordinater för centrumpunkten |
| Radius | Cirkelns radie i ritningsenheter |

## Circle vs Arc — vilken ska du använda

| | Circle | Arc |
|---|--------|-----|
| Omfång | Fullständiga 360° | Delvis — definierad av start- och slutvinkel |
| Hur man ritar | Centrum + radie | Tre punkter på kurvan |
| Skriven inmatning | Radievärde | Ingen — endast klick |
| Storleksgrepp | 4 kardinalpunkter | Start- och slutpunkter (vinkel + radie) |
| Måttsättning | Radie: [Dim Radius](../dim-radius/) · Diameter: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Bäst för | Fullständiga hål, bultcirklar, runda former | Avfasningar, delvisa kurvor, bågformade vägar |

## DXF — CIRCLE-entitet

Cirklar sparas som `CIRCLE`-entiteter i DXF-filen. Centrumkoordinater, radie, färg, lager, linjetyp, linjetypsskala och tjocklek bevaras alla helt vid export och import. Alla DXF-kompatibla program läser dessa som vanliga cirklar.
