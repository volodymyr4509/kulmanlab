---
title: KulmanLab CAD — Kommandoreferens
description: KulmanLab CAD kommandoreferens — fullständig guide till varje rit-, redigerings-, markerings-, lager-, mät- och filkommando i KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, CAD-kommandon, gratis webbläsar-CAD, DXF-redigerare online, ritkommandon, kulmanlab-kommandon]
group: overview
order: 1
---

# KulmanLab CAD — Kommandoreferens

Välkommen till **KulmanLab CAD**-kommandoreferensen. [KulmanLab CAD](https://kulmanlab.com) är ett gratis webbläsarbaserat CAD-verktyg för att rita, redigera och exportera DXF-filer — ingen installation krävs. Använd sidopanelen för att bläddra bland alla tillgängliga kommandon grupperade efter panel.

## Former

| Kommando | Vad det gör |
|---------|-------------|
| [Line](./commands/line/) | Rita en rak linje mellan två punkter |
| [Polyline](./commands/polyline/) | Rita en öppen bana med flera segment |
| [Rectangle](./commands/rectangle/) | Rita en axeljusterad rektangel |
| [Circle](./commands/circle/) | Rita en cirkel med centrum och radie |
| [Arc](./commands/arc/) | Rita en cirkelbåge genom tre punkter |
| [Ellipse](./commands/ellipse/) | Rita en ellips med centrum och två axlar |
| [Text](./commands/text/) | Placera en textetikett på ritytan |
| [Spline CV](./commands/spline-cv/) | Rita en spline genom att placera kontrollpunkter |
| [Spline Fit](./commands/spline-fit/) | Rita en spline som går genom klickade punkter |

## Redigera

| Kommando | Vad det gör |
|---------|-------------|
| [Move](./commands/move/) | Flytta markerade entiteter till en ny position |
| [Copy](./commands/copy/) | Kopiera markerade entiteter till en ny position |
| [Rotate](./commands/rotate/) | Rotera markerade entiteter runt en baspunkt |
| [Mirror](./commands/mirror/) | Spegla markerade entiteter över en linje |
| [Scale](./commands/scale/) | Skala markerade entiteter runt en baspunkt |
| [Align](./commands/align/) | Flytta, rotera och skala valfritt entiteter med punktpar |
| [Delete](./commands/delete/) | Ta bort markerade entiteter från ritningen |
| [Trim](./commands/trim/) | Klipp ett linjesegment vid dess skärningspunkter |
| [Extend](./commands/extend/) | Förläng en linje till närmaste gränsskärning |
| [Offset](./commands/offset/) | Skapa en parallell kopia av en entitet på ett givet avstånd |
| [Fillet](./commands/fillet/) | Runda ett hörn mellan två linjer med en tangentiell båge |
| [Chamfer](./commands/chamfer/) | Skär av ett rakt diagonalt hörn mellan två linjer eller polylinjer |
| [Undo](./commands/undo/) | Ångra den senaste åtgärden |
| [Redo](./commands/redo/) | Gör om den senast ångrade åtgärden |

## Markering

| Kommando | Vad det gör |
|---------|-------------|
| [Leader](./commands/leader/) | Rita en multileader-annotation med pilhuvud och text |
| [Leader+](./commands/leader-add/) | Lägg till en extra arm till en befintlig multileader |
| [Leader−](./commands/leader-remove/) | Ta bort en arm från en befintlig multileader |
| [Dimension Linear](./commands/dim-linear/) | Lägg till en horisontell eller vertikal måttsättning |
| [Dimension Aligned](./commands/dim-aligned/) | Lägg till en måttsättning som är justerad mot två punkter |
| [Dimension Continue](./commands/dim-continue/) | Kedja en ny måttsättning från den föregående |
| [Dimension Radius](./commands/dim-radius/) | Lägg till en radiemåttsättning på en cirkel eller båge |
| [Dimension Diameter](./commands/dim-diameter/) | Lägg till en diametermåttsättning på en cirkel |
| [Dimension Angular](./commands/dim-angular/) | Lägg till en vinkelmåttsättning på två linjer, en båge eller en cirkel |

## Lager

| Kommando | Vad det gör |
|---------|-------------|
| [LayerMakeCurrent](./commands/layer-make-current/) | Ställ in det aktuella lagret till samma lager som en klickad entitet |
| [LayerMatch](./commands/layer-match/) | Omtilldela markerade entiteter till lagret för en källentitet |
| [LayerIsolate](./commands/layer-isolate/) | Frys alla lager utom de för de markerade entiteterna |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | Frys upp alla lager i ett steg |

## Layouter

| Kommando | Vad det gör |
|---------|-------------|
| [ViewportRectangle](./commands/viewport-rectangle/) | Skapa ett viewport i ett papperslayout genom att klicka på två hörn |
| [ViewportCopy](./commands/viewport-copy/) | Duplicera ett viewport till en ny position |
| [PageManager](./commands/page-manager/) | Redigera pappersstorlek och skala för det aktiva layoutet |

## Navigera

| Kommando | Vad det gör |
|---------|-------------|
| [Pan](./commands/pan/) | Klicka och dra för att flytta viewporten |
| [Zoom In](./commands/zoom-in/) | Zooma in viewporten |
| [Zoom Out](./commands/zoom-out/) | Zooma ut viewporten |
| [Fit](./commands/fit/) | Anpassa alla entiteter till viewporten |

## Mät

| Kommando | Vad det gör |
|---------|-------------|
| [Distance](./commands/distance/) | Mät avståndet mellan två punkter |
| [Angle](./commands/angle/) | Mät vinkeln mellan tre punkter |
| [Area](./commands/area/) | Mät area och omkrets för en polygon |

## Stil

| Kommando | Vad det gör |
|---------|-------------|
| [Match Properties](./commands/match-properties/) | Kopiera färg, lager och andra egenskaper från en entitet till andra |
| [Font Manager](./commands/font-manager/) | Bläddra bland, välj och ladda upp anpassade TTF-typsnitt |

## Fil

| Kommando | Vad det gör |
|---------|-------------|
| [Import](./commands/import/) | Öppna en DXF- eller JSON-ritfil |
| [New File](./commands/new-file/) | Starta en ny tom ritning |
| [Files](./commands/files/) | Bläddra bland och återställ tidigare ritningar |
| [Print](./commands/print/) | Exportera ett ritningsområde som en bild eller PDF |
| [Export](./commands/export/) | Ladda ner ritningen som DXF eller JSON |
| [WipeStorage](./commands/wipestorage/) | Rensa alla ritningar från webbläsarens lagring |

## Återställning

Om appen kraschar vid varje uppstart (till exempel efter att ha arbetat med extremt stora koordinater) kan du rensa all lokalt lagrad data genom att lägga till `?reset` i URL:en:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Detta raderar allt från webbläsarens lokala databas och startar en ny tom ritning. Parametern `?reset` tas automatiskt bort från URL:en. Använd detta som en sista utväg när [WipeStorage](./commands/wipestorage/) inte går att nå eftersom appen inte laddas alls.

## Så här fungerar kommandon

Varje kommando följer samma mönster:

1. **Aktivera** — klicka på verktygsfältsknappen eller skriv kommandonamnet i terminalen längst ner på skärmen.
2. **Följ uppmaningen** — terminalen visar vilken inmatning som förväntas härnäst.
3. **Avsluta eller avbryt** — de flesta kommandon avslutas automatiskt efter den sista inmatningen. Tryck på **Escape** när som helst för att avbryta.

## Markera objekt

Flera redigeringskommandon (Move, Copy, Rotate, Mirror, Scale, Delete) delar samma markeringsbeteende:

- **Klicka** på en entitet för att markera eller avmarkera den.
- **Dra åt höger** (vänster till höger) för strikt markering — endast entiteter helt innanför rutan markeras.
- **Dra åt vänster** (höger till vänster) för korsande markering — varje entitet som skär rutan markeras.
- Tryck på **Enter** eller **Space** för att bekräfta markeringen och gå vidare till nästa steg.
