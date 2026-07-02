---
sidebar_position: 9
title: Spline Fit-kommandot — Rita interpolerande splines genom klickade punkter i KulmanLab CAD
description: Spline Fit-kommandot ritar en kubisk spline som passerar exakt genom varje klickad punkt. Internt lagras kurvan med både fitpunkter och beräknade styrpunkter. Att dra ett fitpunktsgrepp interpolerar om hela kurvan. Fullständig DXF-rundtur som SPLINE-entiteter.
keywords: [CAD spline fit-kommando, interpolerande spline CAD, spline genom punkter, rita mjuk kurva CAD, SPLINE DXF-fitpunkter, redigera splinegrepp, kulmanlab]
---

# Spline Fit

`splinefit`-kommandot ritar en kubisk spline som passerar genom varje punkt du klickar på — en interpolerande kurva. Till skillnad från [Spline CV](./spline-cv), där kurvan bara dras mot styrpunkter, tvingas kurvan här att träffa varje klickad koordinat exakt. Internt beräknar redigeraren styrpunkter för att åstadkomma detta, och dessa styrpunkter lagras tillsammans med fitpunkterna i DXF-filen.

## Rita en spline genom fitpunkter

1. Skriv `splinefit` i terminalen eller klicka på **Spline Fit**-knappen i verktygsfältet.
2. **Klicka för att placera fitpunkter** — kurvan kommer att passera genom var och en. Eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
3. Tryck på **Enter** för att avsluta (minst 2 punkter krävs).

```
  ●──────●──────●──────●  ← curve passes exactly through each click
  p1     p2     p3     p4
```

Den levande förhandsvisningen visar den aktuella interpolerade kurvan medan du flyttar markören, inklusive den tilltänkta nästa punkten vid markörens position. Tryck på **Escape** för att kasta alla placerade punkter och avsluta.

## Koordinatinmatning

Istället för att klicka kan du skriva en exakt position för valfri fitpunkt:

1. Skriv X-värdet.
2. Tryck på `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck **Enter** för att placera fitpunkten.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Starta X-koordinatinmatning |
| `,` | Lås X och gå till Y-inmatning |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` | Bekräfta inmatad koordinat, eller avsluta splinen om ingen inmatning pågår och ≥ 2 punkter finns |
| `Escape` | Kasta alla punkter och avsluta |

## Redigera med grepp — omforma via fitpunkter

En vald fitspline visar ett grepp per fitpunkt:

| Grepp | Position | Vad det gör |
|------|----------|--------------|
| **Fit point** | Vid varje klickad position | Dra för att flytta den fitpunkten — hela kurvan interpoleras om för att passera genom den nya positionen |

Att dra ett grepp interpolerar om hela kurvan, inte bara de angränsande segmenten. Detta skiljer sig från redigering av polylinjegrepp, där en flyttad hörnpunkt endast omformar de två angränsande segmenten.

Det finns inget "flytta hela splinen"-grepp. Använd [Move](./move)-kommandot för att flytta hela splinen.

## Markera fitsplines

| Metod | Beteende |
|--------|-----------|
| **Klick** | Markerar om klicket landar nära någon punkt på kurvan |
| **Dra höger** (strikt) | Alla samplingspunkter längs kurvan måste ligga inom markeringsrutan |
| **Dra vänster** (korsande) | Varje del av kurvan som korsar markeringsrutans gräns markerar den |

## Kompatibla redigeringskommandon

| Kommando | Vad som händer med splinen |
|---------|---------------------------|
| [Move](./move) | Flyttar alla fitpunkter och omräknade styrpunkter med samma förskjutning |
| [Copy](./copy) | Skapar en identisk spline på en ny position |
| [Rotate](./rotate) | Roterar alla fitpunkter kring den valda baspunkten |
| [Mirror](./mirror) | Speglar alla fitpunkter över spegelaxeln |
| [Scale](./scale) | Skalar alla fitpunkter enhetligt från baspunkten |
| [Delete](./delete) | Tar bort splinen |

Splines stöder inte **Offset**, **Trim** eller **Extend**.

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
| Degree | Polynomgrad — alltid 3 (kubisk) |
| Fit Points | Koordinater för alla klickade genompasseringspunkter |
| Control Vertices | Internt beräknade styrpunkter som används för att rendera kurvan |

## Spline Fit vs Spline CV — vilken ska du använda

| | Spline Fit | Spline CV |
|---|------------|-----------|
| Kurvan passerar genom punkter | Varje klickad punkt exakt | Endast första och sista (låst) |
| Greppredigeringseffekt | Fitpunkt flyttas → hela kurvan interpoleras om | Styrpunkt flyttas → kurvan dras mot den nya positionen |
| Formförutsägbarhet | Hög — kurvan följer klicken | Lägre — kurvan släpar efter styrpunkterna |
| Bäst för | Kurvor som måste träffa specifika koordinater | Mjuka estetiska kurvor, fria former |

## DXF — SPLINE-entitet (fitpunktsform)

Fitsplines sparas som `SPLINE`-entiteter i DXF-filen, med lagring av både fitpunktskoordinaterna och de beräknade styrpunkterna. `splineFlag` sätts till `8` (fitpunktsspline) så att ett program som laddar om filen vet vilken uppsättning punkter som ska visas som redigerbara grepp. Alla egenskaper — färg, lager, linjetyp, linjetypsskala och tjocklek — bevaras helt vid export och import. DXF-program som stöder fitpunktssplines (LibreCAD, FreeCAD) visar fitpunkterna som den primära redigerbara datan.
