---
title: KulmanLab CAD — Kommandoreferanse
description: KulmanLab CAD kommandoreferanse — komplett guide til hver tegne-, rediger-, markup-, lag-, mål- og filkommando i KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, CAD-kommandoer, gratis nettleser-CAD, DXF-editor på nett, tegnekommandoer, kulmanlab-kommandoer]
group: overview
order: 1
---

# KulmanLab CAD — Kommandoreferanse

Velkommen til **KulmanLab CAD**s kommandoreferanse. [KulmanLab CAD](https://kulmanlab.com) er et gratis nettleserbasert CAD-verktøy for å tegne, redigere og eksportere DXF-filer — ingen installasjon nødvendig. Bruk sidepanelet til å bla gjennom alle tilgjengelige kommandoer gruppert etter panel.

## Former

| Kommando | Hva den gjør |
|---------|-------------|
| [Line](./commands/line/) | Tegn en rett linje mellom to punkter |
| [Polyline](./commands/polyline/) | Tegn en åpen bane med flere segmenter |
| [Rectangle](./commands/rectangle/) | Tegn et aksejustert rektangel |
| [Circle](./commands/circle/) | Tegn en sirkel med senter og radius |
| [Arc](./commands/arc/) | Tegn en bue gjennom tre punkter |
| [Ellipse](./commands/ellipse/) | Tegn en ellipse med senter og to akser |
| [Text](./commands/text/) | Plasser en tekstetikett på lerretet |
| [Spline CV](./commands/spline-cv/) | Tegn en spline ved å plassere kontrollpunkter |
| [Spline Fit](./commands/spline-fit/) | Tegn en spline som går gjennom klikkede punkter |

## Rediger

| Kommando | Hva den gjør |
|---------|-------------|
| [Move](./commands/move/) | Flytt markerte entiteter til en ny posisjon |
| [Copy](./commands/copy/) | Kopier markerte entiteter til en ny posisjon |
| [Rotate](./commands/rotate/) | Roter markerte entiteter rundt et basispunkt |
| [Mirror](./commands/mirror/) | Speilvend markerte entiteter over en linje |
| [Scale](./commands/scale/) | Skaler markerte entiteter rundt et basispunkt |
| [Align](./commands/align/) | Flytt, roter og eventuelt skaler entiteter ved hjelp av punktpar |
| [Array Grid](./commands/array-grid/) | Lag et rutenett av kopier fra markerte entiteter |
| [Delete](./commands/delete/) | Fjern markerte entiteter fra tegningen |
| [Trim](./commands/trim/) | Trim et linjesegment ved skjæringspunktene |
| [Extend](./commands/extend/) | Forleng en linje til nærmeste grenseskjæring |
| [Offset](./commands/offset/) | Lag en parallell kopi av en entitet i en gitt avstand |
| [Fillet](./commands/fillet/) | Avrund et hjørne mellom to linjer med en tangentbue |
| [Chamfer](./commands/chamfer/) | Skjær et rett diagonalt hjørne mellom to linjer eller polylinjer |
| [Undo](./commands/undo/) | Angre siste handling |
| [Redo](./commands/redo/) | Gjenta siste angrede handling |

## Markup

| Kommando | Hva den gjør |
|---------|-------------|
| [Leader](./commands/leader/) | Tegn en multileader-annotasjon med pilspiss og tekst |
| [Leader+](./commands/leader-add/) | Legg til en ekstra arm på en eksisterende multileader |
| [Leader−](./commands/leader-remove/) | Fjern en arm fra en eksisterende multileader |
| [Dimension Linear](./commands/dim-linear/) | Legg til et horisontalt eller vertikalt mål |
| [Dimension Aligned](./commands/dim-aligned/) | Legg til et mål justert mot to punkter |
| [Dimension Continue](./commands/dim-continue/) | Kjed et nytt mål fra det forrige |
| [Dimension Radius](./commands/dim-radius/) | Legg til et radiusmål på en sirkel eller bue |
| [Dimension Diameter](./commands/dim-diameter/) | Legg til et diametermål på en sirkel |
| [Dimension Angular](./commands/dim-angular/) | Legg til et vinkelmål på to linjer, en bue eller en sirkel |

## Lag

| Kommando | Hva den gjør |
|---------|-------------|
| [LayerMakeCurrent](./commands/layer-make-current/) | Sett gjeldende lag til å samsvare med en klikket entitets lag |
| [LayerMatch](./commands/layer-match/) | Tildel markerte entiteter på nytt til laget for en kildeentitet |
| [LayerIsolate](./commands/layer-isolate/) | Frys alle lag unntatt de markerte entitetenes |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | Fjern frysing av alle lag i ett steg |

## Layouter

| Kommando | Hva den gjør |
|---------|-------------|
| [ViewportRectangle](./commands/viewport-rectangle/) | Opprett en viewport i et papirlayout ved å klikke to hjørner |
| [ViewportCopy](./commands/viewport-copy/) | Dupliser en viewport til en ny posisjon |
| [PageManager](./commands/page-manager/) | Rediger papirstørrelse og skala for det aktive layoutet |

## Naviger

| Kommando | Hva den gjør |
|---------|-------------|
| [Pan](./commands/pan/) | Klikk og dra for å flytte viewporten |
| [Zoom In](./commands/zoom-in/) | Zoom inn viewporten |
| [Zoom Out](./commands/zoom-out/) | Zoom ut viewporten |
| [Fit](./commands/fit/) | Tilpass alle entiteter til viewporten |

## Mål

| Kommando | Hva den gjør |
|---------|-------------|
| [Distance](./commands/distance/) | Mål avstanden mellom to punkter |
| [Angle](./commands/angle/) | Mål vinkelen mellom tre punkter |
| [Area](./commands/area/) | Mål arealet og omkretsen av en polygon |

## Stil

| Kommando | Hva den gjør |
|---------|-------------|
| [Match Properties](./commands/match-properties/) | Kopier farge, lag og andre egenskaper fra én entitet til andre |
| [Font Manager](./commands/font-manager/) | Bla gjennom, velg og last opp egne TTF-skrifttyper |

## Fil

| Kommando | Hva den gjør |
|---------|-------------|
| [Import](./commands/import/) | Åpne en DXF- eller JSON-tegnefil |
| [New File](./commands/new-file/) | Start en ny, tom tegning |
| [Files](./commands/files/) | Bla gjennom og gjenopprett nylige tegninger |
| [Print](./commands/print/) | Eksporter et tegningsområde som et bilde eller PDF |
| [Export](./commands/export/) | Last ned tegningen som DXF eller JSON |
| [WipeStorage](./commands/wipestorage/) | Fjern alle tegninger fra nettleserlagring |

## Gjenoppretting

Hvis appen krasjer ved hver oppstart (for eksempel etter å ha jobbet med ekstremt store koordinater), kan du fjerne all lokalt lagret data ved å legge til en parameter i URL-en:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Dette sletter alt fra nettleserens lokale database og starter en ny, tom tegning. Parameteren fjerner seg selv fra URL-en automatisk. Bruk dette som en siste utvei når [WipeStorage](./commands/wipestorage/) er utilgjengelig fordi appen ikke laster i det hele tatt.

## Slik fungerer kommandoer

Hver kommando følger samme mønster:

1. **Aktiver** — klikk på verktøylinjeknappen eller skriv kommandonavnet i terminalen nederst på skjermen.
2. **Følg ledeteksten** — terminalen viser hvilken input som forventes neste.
3. **Fullfør eller avbryt** — de fleste kommandoer fullføres automatisk etter siste input. Trykk **Escape** når som helst for å avbryte.

## Velge objekter

Flere redigeringskommandoer (Move, Copy, Rotate, Mirror, Scale, Delete) deler samme markeringsatferd:

- **Klikk** på en entitet for å velge eller fjerne valget.
- **Dra til høyre** (venstre til høyre) for streng markering — bare entiteter helt inni boksen blir valgt.
- **Dra til venstre** (høyre til venstre) for krysningsmarkering — enhver entitet som krysser boksen blir valgt.
- Trykk **Enter** eller **Space** for å bekrefte markeringen og gå videre til neste steg.
