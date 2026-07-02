---
sidebar_position: 3
title: Rectangle-kommandot — Rita axelparallella rektanglar i KulmanLab CAD
description: Rectangle-kommandot skapar en axelparallell rektangel från två motstående hörn. Resultatet är en sluten LWPOLYLINE med fyra hörnpunkter — identisk med vilken annan polylinje som helst när den väl är placerad, så varje redigeringskommando för polylinjer fungerar på den.
keywords: [CAD rektangelkommando, rita rektangel CAD, axelparallell rektangel, sluten polylinje CAD, LWPOLYLINE DXF, redigera rektangelgrepp, kulmanlab]
---

# Rectangle

`rectangle`-kommandot ritar en axelparallell rektangel definierad av två klick i motstående hörn. Resultatet sparas som en **sluten `LWPOLYLINE`** med fyra hörnpunkter — en i varje hörn. Det finns ingen egen entitetstyp för rektanglar: efter skapandet beter sig formen precis som vilken annan [Polyline](./polyline) som helst, och varje polylinjeredigering gäller för den.

## Rita en rektangel

1. Skriv `rectangle` i terminalen eller klicka på **Rectangle**-knappen i verktygsfältet.
2. **Klicka på det första hörnet**, eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
3. **Klicka på det motstående hörnet** — rektangeln placeras omedelbart och kommandot avslutas. Koordinatinmatning fungerar även här.

```
  ● (first click)────────────┐
  |                          |
  |   live preview follows   |
  |   cursor after step 2    |
  └──────────────────────────● (second click)
```

De två klicken kan vara vilket par som helst av diagonalt motstående hörn — övre vänster + nedre höger, eller nedre vänster + övre höger, osv. Ordningen spelar ingen roll.

## Koordinatinmatning

Vid vilket hörnsteg som helst kan du skriva en exakt position:

1. Skriv X-värdet.
2. Tryck på `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck **Enter** för att placera hörnet.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Starta X-koordinatinmatning |
| `,` | Lås X och gå till Y-inmatning |
| `Enter` | Bekräfta inmatad koordinat |
| `Escape` | Avbryt |

Sidorna är alltid horisontella och vertikala — det finns ingen vinkellåsning för rectangle-kommandot.

## Redigera med grepp — omforma efter skapandet

En vald rektangel visar grepp vid varje hörnpunkt och vid mittpunkten på varje sida:

| Grepp | Position | Vad det gör |
|------|----------|--------------|
| **Hörn** | Var och en av de 4 hörnpunkterna | Dra för att flytta den hörnpunkten; de två angränsande sidorna sträcks ut för att följa med — det motstående hörnet förblir fast |
| **Sidmittpunkt** | Mitten av var och en av de 4 sidorna | Dra för att flytta båda ändpunkterna på den sidan tillsammans, samtidigt som sidans längd och vinkel bevaras |

Att dra ett hörngrepp gör rektangeln till en icke-rektangulär fyrhörning. Om du bara behöver en rektangel i en annan storlek, dra ett hörn medan du håller sidorna ungefär ortogonala, eller ta bort den och rita en ny.

## Markera rektanglar

Eftersom rektangeln är en polylinje fungerar markering på samma sätt:

| Metod | Beteende |
|--------|-----------|
| **Klick** | Markerar om klicket landar på någon av de fyra sidorna |
| **Dra höger** (strikt) | Alla fyra hörnpunkter måste ligga inom markeringsrutan |
| **Dra vänster** (korsande) | Varje sida som korsar rutans gräns markerar hela rektangeln |

## Kompatibla redigeringskommandon

Alla polylinjeredigeringskommandon gäller. Trim och Extend fungerar endast på [Line](./line) och fungerar inte på rektanglar:

| Kommando | Vad som händer med rektangeln |
|---------|-------------------------------|
| [Move](./move) | Flyttar alla fyra hörnpunkter med samma förskjutning |
| [Copy](./copy) | Skapar en identisk rektangel på en ny position |
| [Rotate](./rotate) | Roterar alla fyra hörnpunkter kring den valda baspunkten |
| [Mirror](./mirror) | Speglar alla fyra hörnpunkter över spegelaxeln |
| [Scale](./scale) | Skalar alla fyra hörnpunkter enhetligt från baspunkten |
| [Offset](./offset) | Skapar en parallell (inre eller yttre) rektangel på ett fast avstånd |
| [Delete](./delete) | Tar bort rektangeln från ritningen |

## Egenskaper

När en rektangel är vald visar egenskapspanelen samma fält som för vilken polylinje som helst:

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
| Closed | Alltid `true` för en rektangel |
| Vertex Count | Alltid `4` för en oredigerad rektangel |
| Vertices | Koordinater för alla fyra hörn |

## Rectangle vs Polyline vs Line

| | Rectangle | Polyline | Line |
|---|-----------|---------|------|
| Hur man ritar | 2 klick (hörn) | Klicka på varje hörnpunkt | Klicka på varje ändpunkt |
| Entitetstyp | Sluten `LWPOLYLINE` | Öppen eller sluten `LWPOLYLINE` | `LINE` per segment |
| Sidor alltid ortogonala | Ja (vid skapandet) | Nej | Nej |
| Trim / Extend | Nej | Nej | Ja |
| Bäst för | Boxar, ramar, rektangulära ytor | Godtyckliga konturer och vägar | Enskilda segment, konstruktionslinjer |

## DXF — LWPOLYLINE-entitet

Rektanglar sparas som slutna `LWPOLYLINE`-entiteter med fyra hörnpunkter. Alla egenskaper — hörnkoordinater, färg, lager, linjetyp, linjetypsskala och tjocklek — bevaras helt vid export och import.

Det finns ingen egen `RECTANGLE`-typ i DXF. När en fil öppnas igen visas formen som en sluten fyrpunktspolylinje snarare än en rektangel. Alla DXF-visare eller redigerare som stöder `LWPOLYLINE` (LibreCAD, FreeCAD, osv.) visar den korrekt.
