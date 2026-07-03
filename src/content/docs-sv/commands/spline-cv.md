---
sidebar_position: 8
title: Spline CV-kommandot — Rita B-splines genom att placera styrpunkter i KulmanLab CAD
description: Spline CV-kommandot ritar en kubisk B-spline genom att placera styrpunkter. Kurvan dras mot styrpunkterna men passerar bara genom den första och sista (låsta knutar). Varje CV-grepp kan dras för att omforma kurvan efter placering. Fullständig DXF-rundtur som SPLINE-entiteter.
keywords: [CAD splinekommando, B-spline styrpunkter, låst spline CAD, rita spline CAD, SPLINE DXF-entitet, redigera splinegrepp, kulmanlab]
---

# Spline CV

`splinecv`-kommandot ritar en **kubisk B-spline** genom att placera styrpunkter (CV:er). Den resulterande kurvan dras mot varje styrpunkt men passerar inte genom dem — utom vid allra första och sista styrpunkten, där **låsta knutar** förankrar kurvan exakt. Detta ger dig intuitiv formkontroll: dra en styrpunkt för att trycka kurvan mot den utan att tvinga den att röra varje punkt.

## Rita en spline med styrpunkter

1. Skriv `splinecv` i terminalen eller klicka på **Spline CV**-knappen i verktygsfältet.
2. **Klicka för att placera styrpunkter** — varje klick lägger till en styrpunkt. Eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
3. Tryck på **Enter** för att avsluta (minst 2 styrpunkter krävs).

```
  CV ●         ● CV
      \       /
       \     /    ← curve pulled toward CVs
        \   /         but not passing through them
  CV ●   ●   ● CV (start/end: curve touches here)
```

Den levande förhandsvisningen uppdateras när du flyttar markören efter varje styrpunkt och visar hur splinen kommer att se ut med nästa punkt vid markörens position. Tryck på **Escape** för att kasta alla placerade styrpunkter och avsluta.

## Koordinatinmatning

Istället för att klicka kan du skriva en exakt position för valfri styrpunkt:

1. Skriv X-värdet.
2. Tryck på `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck **Enter** för att placera styrpunkten.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Starta X-koordinatinmatning |
| `,` | Lås X och gå till Y-inmatning |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` | Bekräfta inmatad koordinat, eller avsluta splinen om ingen inmatning pågår och ≥ 2 styrpunkter finns |
| `Escape` | Kasta alla styrpunkter och avsluta |

## Redigera med grepp — omforma via styrpunkter

En vald CV-spline visar ett grepp per styrpunkt:

| Grepp | Position | Vad det gör |
|------|----------|--------------|
| **Control vertex** | Vid varje CV-position | Dra för att flytta den styrpunkten — kurvan omformas mot den nya positionen |

Det finns inget "flytta hela splinen"-grepp. Använd [Move](../move/)-kommandot för att flytta hela splinen.

## Markera CV-splines

| Metod | Beteende |
|--------|-----------|
| **Klick** | Markerar om klicket landar nära någon punkt på kurvan |
| **Dra höger** (strikt) | Alla samplingspunkter längs kurvan måste ligga inom markeringsrutan |
| **Dra vänster** (korsande) | Varje del av kurvan som korsar markeringsrutans gräns markerar den |

## Kompatibla redigeringskommandon

| Kommando | Vad som händer med splinen |
|---------|---------------------------|
| [Move](../move/) | Flyttar alla styrpunkter med samma förskjutning |
| [Copy](../copy/) | Skapar en identisk spline på en ny position |
| [Rotate](../rotate/) | Roterar alla styrpunkter kring den valda baspunkten |
| [Mirror](../mirror/) | Speglar alla styrpunkter över spegelaxeln |
| [Scale](../scale/) | Skalar alla styrpunkter enhetligt från baspunkten |
| [Delete](../delete/) | Tar bort splinen |

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
| Control Vertices | Koordinater för alla styrpunkter |
| Fit Points | Tomt för CV-splines; fylls endast för fitpunktssplines |

## Spline CV vs Spline Fit — vilken ska du använda

| | Spline CV | Spline Fit |
|---|-----------|------------|
| Kurvan passerar genom punkter | Endast första och sista (låst) | Varje klickad punkt exakt |
| Formkontroll | Dra styrpunkter mot ett område | Flytta fitpunkter som kurvan måste röra |
| Greppredigeringseffekt | Styrpunkt flyttas → kurvan dras dit | Fitpunkt flyttas → kurvan interpoleras om |
| Bäst för | Mjuka estetiska kurvor, fria former | Kurvor som måste träffa specifika koordinater |

## DXF — SPLINE-entitet (styrpunktsform)

CV-splines sparas som `SPLINE`-entiteter i DXF-filen, med lagring av graden, knutvektorn och alla styrpunktskoordinater. Alla egenskaper — färg, lager, linjetyp, linjetypsskala och tjocklek — bevaras helt vid export och import. `splineFlag` sätts till `9` (CV-spline) så att formen bevaras vid omladdning. Alla DXF-program som stöder `SPLINE`-entiteter med CV-data läser dessa korrekt.
