---
title: Rectangle-commando — Teken aslijn-uitgelijnde rechthoeken
description: Het Rectangle-commando tekent een aslijn-uitgelijnde rechthoek vanuit twee tegenoverliggende hoeken. Het resultaat is een gesloten LWPOLYLINE met vier hoekpunten — identiek aan elke andere polylijn eenmaal geplaatst, dus elk polylijn-bewerkingscommando is erop van toepassing.
keywords: [CAD rechthoek commando, rechthoek tekenen CAD, aslijn-uitgelijnde rechthoek, gesloten polylijn CAD, LWPOLYLINE DXF, rechthoek grip-bewerking, kulmanlab]
group: shapes
order: 3
---

# Rectangle

Het `rectangle`-commando tekent een aslijn-uitgelijnde rechthoek, gedefinieerd door twee tegenoverliggende hoekklikken. Het resultaat wordt opgeslagen als een **gesloten `LWPOLYLINE`** met vier hoekpunten — één op elke hoek. Er bestaat geen apart entiteitstype voor rechthoeken: na aanmaak gedraagt de vorm zich precies als elke andere [Polyline](../polyline/) en elke polylijn-bewerking is erop van toepassing.

## Een rechthoek tekenen

1. Typ `rectangle` in de terminal of klik op de **Rectangle**-werkbalkknop.
2. **Klik de eerste hoek** aan, of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
3. **Klik de tegenoverliggende hoek** aan — de rechthoek wordt direct geplaatst en het commando sluit af. Coördinaatinvoer werkt hier ook.

```
  ● (eerste klik)────────────┐
  |                          |
  |   live preview volgt     |
  |   cursor na stap 2       |
  └──────────────────────────● (tweede klik)
```

De twee klikken kunnen elk paar diagonaal tegenoverliggende hoeken zijn — linksboven + rechtsonder, of linksonder + rechtsboven, enzovoort. De volgorde maakt niet uit.

## Coördinaatinvoer

Bij elke hoekstap kunt u een exacte positie typen:

1. Typ de X-waarde.
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]`.
3. Typ de Y-waarde.
4. Druk op **Enter** om de hoek te plaatsen.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-coördinaatinvoer |
| `,` | Vergrendel X en ga naar Y-invoer |
| `Enter` | Bevestig getypte coördinaat |
| `Escape` | Annuleren |

De zijden zijn altijd horizontaal en verticaal — er is geen hoekvergrendeling voor het rectangle-commando.

## Grip-bewerking — vorm aanpassen na aanmaak

Een geselecteerde rechthoek toont grips op elk hoekpunt en op het middelpunt van elke zijde:

| Grip | Positie | Wat het doet |
|------|----------|--------------|
| **Hoek** | Elk van de 4 hoekpunten | Slepen verplaatst dat hoekpunt; de twee aangrenzende zijden rekken mee — de tegenoverliggende hoek blijft vast |
| **Zijmiddelpunt** | Midden van elk van de 4 zijden | Slepen verplaatst beide eindpunten van die zijde samen, met behoud van lengte en hoek van de zijde |

Het slepen van een hoekgrip maakt van de rechthoek een niet-rechthoekige vierhoek. Als u alleen een rechthoek van een andere grootte nodig heeft, sleep dan een hoek terwijl u de zijden ongeveer orthogonaal houdt, of verwijder de rechthoek en teken een nieuwe.

## Rechthoeken selecteren

Omdat de rechthoek een polylijn is, werkt selectie op dezelfde manier:

| Methode | Gedrag |
|--------|-----------|
| **Klik** | Selecteert als de klik op een van de vier zijden valt |
| **Slepen naar rechts** (strikt) | Alle vier hoekpunten moeten binnen het selectievak liggen |
| **Slepen naar links** (kruisend) | Elke zijde die de vakgrens snijdt, selecteert de hele rechthoek |

## Ondersteunde bewerkingscommando's

Alle polylijn-bewerkingscommando's zijn van toepassing. Trim en Extend werken alleen op [Line](../line/) en niet op rechthoeken:

| Commando | Wat er met de rechthoek gebeurt |
|---------|-------------------------------|
| [Move](../move/) | Verplaatst alle vier hoekpunten met dezelfde verschuiving |
| [Copy](../copy/) | Maakt een identieke rechthoek op een nieuwe positie |
| [Rotate](../rotate/) | Roteert alle vier hoekpunten rond het gekozen basispunt |
| [Mirror](../mirror/) | Spiegelt alle vier hoekpunten over de spiegelas |
| [Scale](../scale/) | Schaalt alle vier hoekpunten uniform vanaf het basispunt |
| [Offset](../offset/) | Maakt een parallelle (naar binnen of buiten verschoven) rechthoek op een vaste afstand |
| [Delete](../delete/) | Verwijdert de rechthoek uit de tekening |

## Eigenschappen

Wanneer een rechthoek is geselecteerd, toont het eigenschappenpaneel dezelfde velden als elke polylijn:

**Algemeen**

| Eigenschap | Standaard | Betekenis |
|----------|---------|---------|
| Color | 256 (ByLayer) | ACI-kleurindex |
| Layer | `0` | Laagtoewijzing |
| Linetype | ByLayer | Naam van het lijntypepatroon |
| Linetype Scale | 1 | Schaalfactor op het lijntypepatroon |
| Thickness | 0 | Extrusiedikte |

**Geometrie**

| Eigenschap | Betekenis |
|----------|---------|
| Closed | Altijd `true` voor een rechthoek |
| Vertex Count | Altijd `4` voor een onbewerkte rechthoek |
| Vertices | Coördinaten van alle vier hoeken |

## Rectangle vs Polyline vs Line

| | Rectangle | Polyline | Line |
|---|-----------|---------|------|
| Hoe tekenen | 2 klikken (hoeken) | Klik elk hoekpunt | Klik elk eindpunt |
| Entiteitstype | Gesloten `LWPOLYLINE` | Open of gesloten `LWPOLYLINE` | `LINE` per segment |
| Zijden altijd orthogonaal | Ja (bij aanmaak) | Nee | Nee |
| Trim / Extend | Nee | Nee | Ja |
| Beste voor | Dozen, kaders, rechthoekige gebieden | Willekeurige contouren en paden | Losse segmenten, hulplijnen |

## DXF — LWPOLYLINE-entiteit

Rechthoeken worden opgeslagen als gesloten `LWPOLYLINE`-entiteiten met vier hoekpunten. Alle eigenschappen — hoekpuntcoördinaten, kleur, laag, lijntype, lijntypeschaal en dikte — behouden hun waarde bij export en import.

Er bestaat geen apart `RECTANGLE`-type in DXF. Bij het opnieuw openen van een bestand verschijnt de vorm als een gesloten polylijn met vier hoekpunten in plaats van als rechthoek. Elke DXF-viewer of -editor die `LWPOLYLINE` ondersteunt (LibreCAD, FreeCAD, enz.) toont deze correct.
