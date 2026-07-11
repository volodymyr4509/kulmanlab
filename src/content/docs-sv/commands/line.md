---
title: "Line-kommandot — Rita, kedja, klipp och förläng linjer i KulmanLab CAD"
description: "Line-kommandot ritar enskilda raka linjesegment som kan kedjas ände mot ände. Linje är den enda entitetstypen som Trim och Extend fungerar på. Fullständig DXF-rundtur som LINE-entiteter."
keywords: [CAD linjekommando, rita rak linje CAD, kedja linjesegment, klipp linje CAD, förläng linje CAD, vinkellås CAD, DXF LINE-entitet, kulmanlab]
group: shapes
order: 1
---

# Line

`line`-kommandot ritar enskilda raka linjesegment som sparas som separata `LINE`-entiteter i DXF-modellen. Kommandot förblir aktivt efter varje segment och återanvänder slutpunkten som ny startpunkt, så du kan skapa en sammankopplad väg ett segment i taget. Till skillnad från [Polyline](../polyline/) förblir kedjade linjer fristående entiteter — var och en kan klippas, förlängas eller tas bort utan att påverka grannarna.

## Rita en linje

1. Skriv `line` i terminalen eller klicka på **Line**-knappen i verktygsfältet.
2. **Klicka på startpunkten**, eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
3. **Klicka på slutpunkten** — segmentet placeras och slutpunkten blir nästa startpunkt. Koordinatinmatning fungerar även här.
4. Fortsätt klicka (eller skriva) för att kedja fler segment.
5. Tryck **Enter** eller **Escape** för att avsluta.

```
  ●──────────●──────────●──────────●
 start     2nd click  3rd click   Enter to finish
            (auto-becomes next start)
```

Behöver du bara ett enda segment? Tryck **Enter** eller **Escape** direkt efter steg 3.

## Koordinatinmatning

Istället för att klicka kan du skriva en exakt position för start- eller vilken efterföljande punkt som helst:

1. Skriv X-värdet (siffror, `.` eller `-`).
2. Tryck `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck **Enter** för att placera punkten.

## Vinkellåsning och exakt längdinmatning

När du flyttar markören efter att ha placerat en punkt bevakar kommandot en 45°-snapaxel (0°, 45°, 90°, 135°, …). Vinkeln **låses** när:

- markören är minst **5 × grippstorlek** från ankaret, **och**
- den är inom **1 grippstorlek** vinkelrätt avstånd från närmaste axel.

När den är låst snappar förhandsvisningen till axeln och du kan skriva in en exakt längd:

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.` | Lägg till siffra till längdvärdet |
| `-` | Negativ längd — vänder riktningen längs axeln (endast första tecknet) |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` | Placera slutpunkten på det skrivna avståndet |

Det ackumulerade värdet visas live i terminalen (t.ex. `click end point or enter length: 12.5`). Om du klickar medan låst projiceras klicket på axeln, så slutpunkten hamnar alltid exakt på den.

Att flytta tillbaka nära ankarpunkten kopplar ur låsningen.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Starta inmatning av X-koordinat, eller avstånd när vinkellåst |
| `,` | Lås X och flytta till Y-inmatning |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` | Bekräfta skriven koordinat eller längd, eller avsluta kedjan om inget är skrivet |
| `Escape` | Avsluta kedjan och lämna |

## Grippredigering — sträcka ut slutpunkter

En markerad linje visar tre grepp:

| Grepp | Var | Vad det gör |
|------|-------|--------------|
| **Start** | Första slutpunkten | Dra för att omplacera — änden förblir fast |
| **Midpoint** | Linjens mitt | Aktiverar **Move** för hela linjen |
| **End** | Andra slutpunkten | Dra för att omplacera — starten förblir fast |

Att sträcka ut en slutpunkt påverkar aldrig den andra. Detta skiljer sig från [Polyline](../polyline/)-grippredigering, där att flytta en vertex omformar hela banan.

## Markera linjer

| Metod | Beteende |
|--------|-----------|
| **Klicka** | Markerar linjen om klicket ligger inom träffavståndet för segmentet |
| **Dra åt höger** (strikt) | Linjen markeras endast om båda slutpunkterna hamnar innanför rutan |
| **Dra åt vänster** (korsande) | Linjen markeras om någon del av segmentet korsar rutans gräns |

## Kommandon som stöds för redigering

Linjer är den **enda** entiteten som [Trim](../trim/) och [Extend](../extend/) verkar på. Alla standardtransformationskommandon gäller också:

| Kommando | Vad som händer med en linje |
|---------|------------------------|
| [Move](../move/) | Förflyttar båda slutpunkterna med samma förskjutning |
| [Copy](../copy/) | Skapar en identisk linje på en ny position |
| [Rotate](../rotate/) | Roterar båda slutpunkterna runt den valda baspunkten |
| [Mirror](../mirror/) | Speglar båda slutpunkterna över spegelaxeln |
| [Scale](../scale/) | Skalar båda slutpunkterna enhetligt från baspunkten |
| [Offset](../offset/) | Skapar en parallell linje på ett fast vinkelrätt avstånd |
| [Trim](../trim/) | Klipper linjen vid skärningspunkter — **endast linjer** |
| [Extend](../extend/) | Sträcker den närmaste slutpunkten för att nå en gräns — **endast linjer** |
| [Delete](../delete/) | Tar bort linjen från ritningen |

## Egenskaper

När en linje är markerad visar egenskapspanelen varje fält som DXF `LINE`-posten bär:

**Allmänt**

| Egenskap | Standard | Betydelse |
|----------|---------|---------|
| Color | 256 (ByLayer) | ACI-färgindex |
| Layer | `0` | Lagertilldelning |
| Linetype | ByLayer | Namngivet linjetypsmönster |
| Linetype Scale | 1 | Skalfaktor på linjetypsmönstret |
| Thickness | 0 | Extruderingstjocklek |

**Geometri**

| Egenskap | Betydelse |
|----------|---------|
| Start X / Start Y | Koordinater för första slutpunkten |
| End X / End Y | Koordinater för andra slutpunkten |

Alla fält är direkt redigerbara i panelen utan att kommandot behöver köras igen.

## Line vs Polyline — vilken ska du använda

| | Line | Polyline |
|---|------|---------|
| Antal entiteter | En `LINE` per segment | En `LWPOLYLINE` för hela banan |
| Trim / Extend | Ja — segment för segment | Nej |
| Sluten form | Nej | Ja (close-flagga) |
| Grippredigering | Sträck enskilda slutpunkter | Flytta valfri vertex längs banan |
| Bäst för | Konstruktionslinjer, enskilda segment, geometri du kommer klippa | Konturer, omrids, former du behåller hela |

## DXF — LINE-entitet

Linjer sparas som `LINE`-entiteter i DXF-filen. Varje egenskap — start-/slutkoordinater, färg, lager, linjetyp, linjetypsskala och tjocklek — genomgår en tur-och-retur utan förlust. När du öppnar en DXF som innehåller `LINE`-entiteter blir de fullt redigerbara `Line`-objekt i editorn.

Linjer ritade i editorn skrivs också som `LINE`-entiteter vid sparande, så de är läsbara av LibreCAD, FreeCAD och andra DXF-kompatibla applikationer.
