---
title: "Polyline-kommandot — Rita banor med flera segment som en enda entitet i KulmanLab CAD"
description: "Polyline-kommandot ritar valfritt antal sammankopplade segment lagrade som en enda LWPOLYLINE-entitet. Vertex- och segmentmittpunktsgrepp låter dig omforma valfri del av banan efter skapandet. Stöder offset; stöder inte trim eller extend."
keywords: [CAD polyline-kommando, rita polyline CAD, bana med flera segment CAD, LWPOLYLINE DXF, omforma polyline, vertexgrepp CAD, offset polyline, kulmanlab]
group: shapes
order: 2
---

# Polyline

`polyline`-kommandot ritar en sammankopplad bana med valfritt antal raka segment, alla lagrade som en enda `LWPOLYLINE`-entitet. Eftersom hela banan är ett objekt markerar en markering alla segment samtidigt — flytta, rotera eller skala hela formen i en enda operation. Detta är den viktigaste skillnaden från kedjade [Lines](../line/), där varje segment är en fristående entitet.

Polylinjer kan också vara **slutna**: [Rectangle](../rectangle/)-kommandot använder samma `LWPOLYLINE`-entitet med en close-flagga inställd.

## Rita en polyline

1. Skriv `polyline` i terminalen eller klicka på **Polyline**-knappen i verktygsfältet.
2. **Klicka på den första punkten**, eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
3. **Klicka på varje efterföljande punkt** — varje klick lägger till ett segment. Koordinatinmatning fungerar vid varje steg.
4. Tryck **Enter** eller **Space** för att avsluta (kräver minst 2 placerade punkter).

```
  ●──────●
  1st    2nd
          \
           \  segment 3 (in progress — cursor here)
            ●  ← click to add, Enter/Space to finish
```

Att trycka på **Escape** när som helst kasserar alla placerade punkter och avslutar kommandot.

## Koordinatinmatning

Istället för att klicka kan du skriva en exakt position för valfri vertex:

1. Skriv X-värdet.
2. Tryck `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck **Enter** för att placera vertexen.

## Vinkellåsning och exakt segmentlängd

Samma 45°-snaplogik som [Line](../line/#angle-locking-and-exact-length-input)-kommandot gäller mellan två efterföljande punkter. När låst till en axel:

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.` | Lägg till siffra till segmentlängden |
| `-` | Negativ längd — vänder riktningen längs axeln (endast första tecknet) |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` | Placera nästa punkt på det skrivna avståndet |

Den aktuella ackumulerade längden visas i terminalens uppmaning i realtid. Att klicka medan låst projicerar på axeln så den nya vertexen hamnar exakt på den.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Starta inmatning av X-koordinat, eller segmentlängd när vinkellåst |
| `,` | Lås X och flytta till Y-inmatning |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` | Bekräfta skriven koordinat eller längd, eller avsluta polylinjen om inget är skrivet och ≥ 2 punkter finns |
| `Space` | Avsluta polylinjen (samma som Enter när ingen inmatning pågår) |
| `Escape` | Kassera alla punkter och avsluta |

## Grippredigering — vertexer och segmentmittpunkter

En markerad polyline visar två typer av grepp:

| Grepp | Position | Vad det gör |
|------|----------|--------------|
| **Vertex** | Vid varje placerad punkt | Dra för att omplacera den vertexen; alla anslutna segment sträcks för att följa med |
| **Segmentmittpunkt** | Mitten av varje segment | Dra för att förflytta **båda** slutpunkterna på det segmentet tillsammans, samtidigt som segmentets längd och vinkel behålls |

Segmentmittpunktsgreppet är unikt för polylinjer — det låter dig glida ett enskilt segment i sidled utan att ändra dess längd. På en [Line](../line/) aktiverar mittpunktsgreppet istället Move-kommandot för hela entiteten.

Det finns inget enda "flytta hela polylinjen"-grepp. Använd [Move](../move/)-kommandot för att flytta hela banan.

## Markera polylinjer

| Metod | Beteende |
|--------|-----------|
| **Klicka** | Markerar polylinjen om klicket hamnar inom träffavståndet för något segment |
| **Dra åt höger** (strikt) | Alla vertexer måste hamna innanför rutan |
| **Dra åt vänster** (korsande) | Varje segment som korsar rutans gräns markerar hela polylinjen |

Eftersom en polyline är en enda entitet markerar en korsande markering som berör något segment alla segment.

## Kommandon som stöds för redigering

Polylinjer stöder alla allmänna transformationer och offset, men **inte** trim eller extend (dessa är endast för [Line](../line/)):

| Kommando | Vad som händer med polylinjen |
|---------|------------------------------|
| [Move](../move/) | Förflyttar alla vertexer med samma förskjutning |
| [Copy](../copy/) | Skapar en identisk polyline på en ny position |
| [Rotate](../rotate/) | Roterar alla vertexer runt den valda baspunkten |
| [Mirror](../mirror/) | Speglar alla vertexer över spegelaxeln |
| [Scale](../scale/) | Skalar alla vertexer enhetligt från baspunkten |
| [Offset](../offset/) | Skapar en parallell polyline på ett fast vinkelrätt avstånd |
| [Delete](../delete/) | Tar bort polylinjen från ritningen |

## Egenskaper

När en polyline är markerad visar egenskapspanelen:

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
| Closed | Om den sista vertexen ansluter tillbaka till den första |
| Vertex Count | Totalt antal vertexer |
| Vertices | Koordinatlista för alla vertexer |

## Polyline vs Line — vilken ska du använda

| | Polyline | Line |
|---|---------|------|
| Antal entiteter | En `LWPOLYLINE` för hela banan | En `LINE` per segment |
| Sluten form | Ja (close-flagga) | Nej |
| Trim / Extend | Nej | Ja — segment för segment |
| Segmentmittpunktsgrepp | Förflyttar hela segmentet | Aktiverar Move för entiteten |
| Bäst för | Omrids, konturer, former du behåller hela | Konstruktionslinjer, geometri du kommer klippa |

## DXF — LWPOLYLINE-entitet

Polylinjer sparas som `LWPOLYLINE`-entiteter i DXF-filen. Alla egenskaper — vertexkoordinater, close-flagga, färg, lager, linjetyp, linjetypsskala och tjocklek — genomgår en tur-och-retur utan förlust. Rektanglar ritade med [Rectangle](../rectangle/)-kommandot sparas också som `LWPOLYLINE` (sluten, fyra vertexer) och går inte att skilja åt på DXF-nivå.

`LWPOLYLINE`-entiteter från vilken DXF-kompatibel applikation som helst (LibreCAD, FreeCAD, etc.) läses tillbaka som fullt redigerbara polylinjer i editorn.
