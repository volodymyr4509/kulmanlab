---
title: KulmanLab CAD — Kommandoreference
description: KulmanLab CAD kommandoreference — komplet guide til hver tegne-, rediger-, markup-, lag-, mål- og filkommando i KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, CAD-kommandoer, gratis browser-CAD, DXF-editor online, tegnekommandoer, kulmanlab-kommandoer]
group: overview
order: 1
---

# KulmanLab CAD — Kommandoreference

Velkommen til **KulmanLab CAD**s kommandoreference. [KulmanLab CAD](https://kulmanlab.com) er et gratis browserbaseret CAD-værktøj til at tegne, redigere og eksportere DXF-filer — ingen installation nødvendig. Brug sidepanelet til at gennemse alle tilgængelige kommandoer grupperet efter panel.

## Former

| Kommando | Hvad den gør |
|---------|-------------|
| [Line](./commands/line/) | Tegn en lige linje mellem to punkter |
| [Polyline](./commands/polyline/) | Tegn en åben bane med flere segmenter |
| [Rectangle](./commands/rectangle/) | Tegn et akse-justeret rektangel |
| [Circle](./commands/circle/) | Tegn en cirkel med centrum og radius |
| [Arc](./commands/arc/) | Tegn en bue gennem tre punkter |
| [Ellipse](./commands/ellipse/) | Tegn en ellipse med centrum og to akser |
| [Text](./commands/text/) | Placér en tekstetiket på lærredet |
| [Spline CV](./commands/spline-cv/) | Tegn en spline ved at placere kontrolpunkter |
| [Spline Fit](./commands/spline-fit/) | Tegn en spline der går gennem klikkede punkter |

## Rediger

| Kommando | Hvad den gør |
|---------|-------------|
| [Move](./commands/move/) | Flyt markerede entiteter til en ny position |
| [Copy](./commands/copy/) | Kopiér markerede entiteter til en ny position |
| [Rotate](./commands/rotate/) | Rotér markerede entiteter omkring et basispunkt |
| [Mirror](./commands/mirror/) | Spejlvend markerede entiteter over en linje |
| [Scale](./commands/scale/) | Skalér markerede entiteter omkring et basispunkt |
| [Align](./commands/align/) | Flyt, rotér og eventuelt skalér entiteter ved hjælp af punktpar |
| [Array Grid](./commands/array-grid/) | Lav et gitter af kopier fra markerede entiteter |
| [Delete](./commands/delete/) | Fjern markerede entiteter fra tegningen |
| [Trim](./commands/trim/) | Trim et linjesegment ved skæringspunkterne |
| [Extend](./commands/extend/) | Forlæng en linje til nærmeste grænseskæring |
| [Offset](./commands/offset/) | Lav en parallel kopi af en entitet i en given afstand |
| [Fillet](./commands/fillet/) | Afrund et hjørne mellem to linjer med en tangentbue |
| [Chamfer](./commands/chamfer/) | Skær et lige diagonalt hjørne mellem to linjer eller polylinjer |
| [Undo](./commands/undo/) | Fortryd seneste handling |
| [Redo](./commands/redo/) | Gentag seneste fortrudte handling |

## Markup

| Kommando | Hvad den gør |
|---------|-------------|
| [Leader](./commands/leader/) | Tegn en multileader-annotation med pilespids og tekst |
| [Leader+](./commands/leader-add/) | Tilføj en ekstra arm på en eksisterende multileader |
| [Leader−](./commands/leader-remove/) | Fjern en arm fra en eksisterende multileader |
| [Dimension Linear](./commands/dim-linear/) | Tilføj et horisontalt eller vertikalt mål |
| [Dimension Aligned](./commands/dim-aligned/) | Tilføj et mål justeret mod to punkter |
| [Dimension Continue](./commands/dim-continue/) | Kæd et nyt mål fra det forrige |
| [Dimension Radius](./commands/dim-radius/) | Tilføj et radiusmål på en cirkel eller bue |
| [Dimension Diameter](./commands/dim-diameter/) | Tilføj et diametermål på en cirkel |
| [Dimension Angular](./commands/dim-angular/) | Tilføj et vinkelmål på to linjer, en bue eller en cirkel |

## Lag

| Kommando | Hvad den gør |
|---------|-------------|
| [LayerMakeCurrent](./commands/layer-make-current/) | Sæt aktuelt lag til at matche en klikket entitets lag |
| [LayerMatch](./commands/layer-match/) | Tildel markerede entiteter på ny til laget for en kildeentitet |
| [LayerIsolate](./commands/layer-isolate/) | Frys alle lag undtagen de markerede entiteters |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | Fjern frysning af alle lag i ét trin |

## Layouts

| Kommando | Hvad den gør |
|---------|-------------|
| [ViewportRectangle](./commands/viewport-rectangle/) | Opret en viewport i et papirlayout ved at klikke to hjørner |
| [ViewportCopy](./commands/viewport-copy/) | Duplikér en viewport til en ny position |
| [PageManager](./commands/page-manager/) | Rediger papirstørrelse og skala for det aktive layout |

## Navigér

| Kommando | Hvad den gør |
|---------|-------------|
| [Pan](./commands/pan/) | Klik og træk for at flytte viewporten |
| [Zoom In](./commands/zoom-in/) | Zoom ind på viewporten |
| [Zoom Out](./commands/zoom-out/) | Zoom ud på viewporten |
| [Fit](./commands/fit/) | Tilpas alle entiteter til viewporten |

## Mål

| Kommando | Hvad den gør |
|---------|-------------|
| [Distance](./commands/distance/) | Mål afstanden mellem to punkter |
| [Angle](./commands/angle/) | Mål vinklen mellem tre punkter |
| [Area](./commands/area/) | Mål arealet og omkredsen af en polygon |

## Stil

| Kommando | Hvad den gør |
|---------|-------------|
| [Match Properties](./commands/match-properties/) | Kopiér farve, lag og andre egenskaber fra én entitet til andre |
| [Font Manager](./commands/font-manager/) | Gennemse, vælg og upload egne TTF-skrifttyper |

## Fil

| Kommando | Hvad den gør |
|---------|-------------|
| [Import](./commands/import/) | Åbn en DXF- eller JSON-tegnefil |
| [New File](./commands/new-file/) | Start en ny, tom tegning |
| [Files](./commands/files/) | Gennemse og gendan nylige tegninger |
| [Print](./commands/print/) | Eksportér et tegningsområde som et billede eller PDF |
| [Export](./commands/export/) | Download tegningen som DXF eller JSON |
| [WipeStorage](./commands/wipestorage/) | Fjern alle tegninger fra browserlagring |

## Gendannelse

Hvis appen går ned ved hver opstart (for eksempel efter at have arbejdet med ekstremt store koordinater), kan du fjerne alle lokalt gemte data ved at tilføje en parameter til URL'en:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Dette sletter alt fra browserens lokale database og starter en ny, tom tegning. Parameteren fjerner sig selv fra URL'en automatisk. Brug dette som en sidste udvej, når [WipeStorage](./commands/wipestorage/) er utilgængelig, fordi appen slet ikke indlæser.

## Sådan fungerer kommandoer

Hver kommando følger samme mønster:

1. **Aktivér** — klik på værktøjslinjeknappen eller skriv kommandonavnet i terminalen nederst på skærmen.
2. **Følg prompten** — terminalen viser hvilken input der forventes næste.
3. **Fuldfør eller annullér** — de fleste kommandoer fuldføres automatisk efter sidste input. Tryk **Escape** når som helst for at annullere.

## Vælge objekter

Flere redigeringskommandoer (Move, Copy, Rotate, Mirror, Scale, Delete) deler samme markeringsadfærd:

- **Klik** på en entitet for at vælge eller fravælge den.
- **Træk mod højre** (venstre til højre) for streng markering — kun entiteter helt inde i boksen bliver valgt.
- **Træk mod venstre** (højre til venstre) for krydsningsmarkering — enhver entitet der krydser boksen bliver valgt.
- Tryk **Enter** eller **Space** for at bekræfte markeringen og gå videre til næste trin.
