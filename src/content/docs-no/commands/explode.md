---
title: Explode-kommandoen — Del opp en Polyline i Line- og Arc-entiteter
description: Explode-kommandoen deler en polyline opp på stedet i dens individuelle Line- og Arc-entiteter, én per segment. Hver del beholder linjetykkelse, farge, lag og linjetype fra kildepolylinjen. Fungerer bare på Polyline-entiteter.
keywords: [CAD explode-kommando, eksploder polyline CAD, del opp polyline i linjer, konverter polyline til line og arc, kulmanlab]
group: edit
order: 16
---

# Explode

`Oppløs`-kommandoen deler en [Polyline](../polyline/) opp i dens individuelle [Line](../line/)- og [Arc](../arc/)-entiteter — én per segment, nøyaktig der polylinjens egne hjørnepunkter lå. Delene erstatter polylinjen på stedet og beholder linjetykkelsen, fargen, laget og linjetypen dens.

Explode fungerer bare på **Polyline**-entiteter.

## Bruke explode

To måter å kjøre det på, samme mønster som [Delete](../delete/):

**Velg først, deretter eksploder** — den raskeste veien:

1. Velg én eller flere polylinjer på lerretet.
2. Skriv `Oppløs` i terminalen, eller klikk på knappen **Explode** i Edit-panelet.

De valgte polylinjene eksploderes umiddelbart — ingen egen bekreftelse, siden noe allerede er valgt.

**Aktiver, deretter velg**:

1. Skriv `Oppløs` eller klikk på verktøylinjeknappen uten at noe er valgt.
2. **Velg polylinjer** — klikk for å veksle, eller dra for å velge etter område.
3. Trykk **Enter** eller **Mellomrom** for å bekrefte og eksplodere de valgte polylinjene.

Kun polylinjer plukkes opp under valget — å klikke på en Line, Circle eller en annen entitet gjør ingenting, og en områdedra ignorerer alt unntatt polylinjene inni eller som krysser den.

## Hva som kommer ut

Hvert segment av polylinjen blir sin egen entitet:

- Et **rett segment** blir en **Line**.
- Et **buesegment** (fra Polylines [Arc-alternativ](../polyline/)) blir en **Arc**, som nøyaktig samsvarer med den opprinnelige kurvens senter, radius og sveip.

Hver resulterende Line og Arc arver kildepolylinjens **linjetykkelse, farge, lag, linjetype og linjetypeskala** — ingenting endrer seg med hvordan geometrien ser ut, bare at det nå er flere uavhengige entiteter i stedet for én sammenhengende polylinje.

Eksplosjonen kan angres i ett steg med [Undo](../undo/), akkurat som enhver annen redigering.

## Valg under kommandoen

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Veksler polylinjen under pekeren inn/ut av valget; å klikke på en entitet som ikke er en polylinje gjør ingenting |
| **Dra høyre** (streng) | Velger bare polylinjer helt innenfor boksen |
| **Dra venstre** (kryssende) | Velger polylinjer som krysser boksens grense |
| **Enter** / **Mellomrom** | Bekrefter og eksploderer de valgte polylinjene |

## Støttede entiteter

| Entitet | Støttet |
|--------|-----------|
| Polyline / Rectangle | Ja |
| Line, Arc, Circle, Ellipse | Nei — ingenting å eksplodere |
| Text, Spline, Dimension, Leader, Hatch | Nei |
