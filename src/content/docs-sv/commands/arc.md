---
sidebar_position: 5
title: Arc-kommandot — Rita trepunktsbågar med circumcircle-metoden i KulmanLab CAD
description: Arc-kommandot ritar en cirkelbåge genom exakt tre klickade punkter med hjälp av circumcircle-geometri. Start- och slutgrepp låter dig dra bågens ändpunkter till en ny vinkel och radie efter placering. Fullständig DXF-rundtur som ARC-entiteter.
keywords: [CAD bågkommando, trepunktsbåge CAD, circumcircle-båge, rita båge CAD, ARC DXF-entitet, redigera båggrepp, kulmanlab]
---

# Arc

`arc`-kommandot ritar en cirkelbåge genom tre punkter du klickar på. Bågen beräknas som den unika circumcirkeln som går genom alla tre punkterna — inget behov av att ange centrum eller radie direkt. Bågen går från det första klicket till det tredje klicket, via det andra.

## Rita en båge

1. Skriv `arc` i terminalen eller klicka på **Arc**-knappen i verktygsfältet.
2. **Klicka på den första punkten** — en ände av bågen. Eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
3. **Klicka på den andra punkten** — en punkt som bågen måste passera genom (styr krökning och riktning). Koordinatinmatning fungerar även här.
4. **Klicka på den tredje punkten** — den andra änden av bågen. Bågen placeras och kommandot avslutas. Koordinatinmatning fungerar även här.

```
           ● (2nd click — midpoint on the curve)
          / \
         /   \
        ●     ●
     1st       3rd
```

En linjeförhandsvisning ansluter de två första klicken medan du positionerar det tredje. Från det andra klicket och framåt följer en levande bågförhandsvisning markören.

> **Kolinjära punkter**: om alla tre punkter ligger på en rät linje kan bågen inte beräknas och ingen entitet placeras. Flytta den andra punkten bort från linjen och försök igen.

## Koordinatinmatning

Vid vilket som helst av de tre stegen kan du skriva en exakt position istället för att klicka:

1. Skriv X-värdet.
2. Tryck på `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck **Enter** för att placera punkten.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Starta X-koordinatinmatning |
| `,` | Lås X och gå till Y-inmatning |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` | Bekräfta inmatad koordinat |
| `Escape` | Kasta alla placerade punkter och avsluta |

## Redigera med grepp — justera ändpunkter och radie

En vald båge visar tre grepp:

| Grepp | Position | Vad det gör |
|------|----------|--------------|
| **Center** | Geometriskt centrum för circumcirkeln | Flyttar hela bågen; radie och vinklar oförändrade |
| **Start** | Första ändpunkten på bågen | Dra för att flytta starten längs circumcirkeln — ändrar både startvinkel och radie |
| **End** | Sista ändpunkten på bågen | Dra för att flytta slutet längs circumcirkeln — ändrar både slutvinkel och radie |

Att dra ett start- eller slutgrepp flyttar det till dragpositionen och räknar om både vinkeln och radien från den nya positionen i förhållande till centrum. Den motstående ändpunkten förblir fast.

## Markera bågar

| Metod | Beteende |
|--------|-----------|
| **Klick** | Markerar om klicket landar nära bågkurvan (inte kordan) |
| **Dra höger** (strikt) | Samplingspunkter fördelade längs bågen måste alla ligga inom rutan |
| **Dra vänster** (korsande) | Varje samplingspunkt på bågen som faller inom rutan markerar den |

## Kompatibla redigeringskommandon

| Kommando | Vad som händer med bågen |
|---------|------------------------|
| [Move](./move) | Flyttar centrum; radie och vinklar oförändrade |
| [Copy](./copy) | Skapar en identisk båge på en ny position |
| [Rotate](./rotate) | Roterar centrum och förskjuter start-/slutvinklar med rotationsvärdet |
| [Mirror](./mirror) | Speglar centrum och inverterar start-/slutvinklar över spegelaxeln |
| [Scale](./scale) | Skalar centrumpositionen och multiplicerar radien med skalfaktorn |
| [Offset](./offset) | Skapar en koncentrisk båge med en större eller mindre radie, samma vinkelspann |
| [Delete](./delete) | Tar bort bågen |

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
| Center X / Center Y | Centrum för circumcirkeln |
| Radius | Circumcirkelns radie |
| Start Angle | Vinkel i grader där bågen börjar (mätt från den positiva X-axeln) |
| End Angle | Vinkel i grader där bågen slutar |

## Arc vs Circle — vilken ska du använda

| | Arc | Circle |
|---|-----|--------|
| Omfång | Delvis — första till tredje klicket | Fullständiga 360° |
| Inmatningsmetod | Tre punkter på kurvan | Centrum + radie (klick eller skriven) |
| Skriven inmatning | X,Y-koordinat för varje punkt | Radievärde (centrum accepterar även X,Y) |
| Ändra storlek efter placering | Dra start-/slutgrepp | Dra valfritt kardinalgrepp |
| Bäst för | Avfasningar, rundade hörn, bågformade vägar | Fullständiga hål, runda former |

## DXF — ARC-entitet

Bågar sparas som `ARC`-entiteter i DXF-filen, med lagring av centrumkoordinater, radie, startvinkel och slutvinkel. Alla egenskaper — inklusive färg, lager, linjetyp, linjetypsskala och tjocklek — bevaras helt vid export och import. Alla DXF-kompatibla program (LibreCAD, FreeCAD, osv.) läser dessa som vanliga bågar.
