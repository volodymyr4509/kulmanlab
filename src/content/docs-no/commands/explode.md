---
title: "Explode-kommando — del opp en polylinje eller en blokk i delene sine"
description: "Explode-kommandoen deler en polylinje opp i Line- og Arc-entitetene sine, eller en blokkreferanse i entitetene blokken dens tegner, på stedet. Delene ser nøyaktig ut som originalen."
keywords: [CAD explode-kommando, eksploder polyline CAD, del opp polyline i linjer, konverter polyline til line og arc, kulmanlab]
group: edit
order: 19
---

# Explode

`Oppløs`-kommandoen deler en [Polyline](../polyline/) opp i dens individuelle [Line](../line/)- og [Arc](../arc/)-entiteter — én per segment, nøyaktig der polylinjens egne hjørnepunkter lå. Delene erstatter polylinjen på stedet og beholder linjetykkelsen, fargen, laget og linjetypen dens.

Explode virker på **Polyline**-entiteter og **blokkreferanser**.

## Bruke explode

To måter å kjøre det på, samme mønster som [Delete](../delete/):

**Velg først, deretter eksploder** — den raskeste veien:

1. Velg én eller flere polylinjer på lerretet.
2. Skriv `Oppløs` i terminalen, eller velg **Explode** i nedtrekksmenyen i panelet Edit.

De valgte polylinjene eksploderes umiddelbart — ingen egen bekreftelse, siden noe allerede er valgt.

**Aktiver, deretter velg**:

1. Skriv `Oppløs` eller velg **Explode** i nedtrekksmenyen når ingenting er valgt.
2. **Velg polylinjer eller blokkreferanser** — klikk for å veksle, eller dra for å velge et område.
3. Trykk **Enter** eller **Mellomrom** for å bekrefte og eksplodere de valgte polylinjene.

Under valget tas bare polylinjer og blokkreferanser med — et klikk på en Line, Circle eller annen entitet gjør ingenting, og et områdedrag overser alt annet inni eller på tvers.

## Hva som kommer ut

Hvert segment av polylinjen blir sin egen entitet:

- Et **rett segment** blir en **Line**.
- Et **buesegment** (fra Polylines [Arc-alternativ](../polyline/)) blir en **Arc**, som nøyaktig samsvarer med den opprinnelige kurvens senter, radius og sveip.

Hver resulterende Line og Arc arver kildepolylinjens **linjetykkelse, farge, lag, linjetype og linjetypeskala** — ingenting endrer seg med hvordan geometrien ser ut, bare at det nå er flere uavhengige entiteter i stedet for én sammenhengende polylinje.

En **blokkreferanse** blir entitetene blokken dens tegner, plassert der referansen viste dem. Entiteter blokken holder skjult — en dynamisk blokks andre tilstander — utelates; hvert attributt blir en vanlig Text med verdien sin; deler tegnet ByBlock tar referansens farge, og deler på lag 0 dens lag. En nøstet blokk kommer ut som en egen blokkreferanse, som du igjen kan dele opp. En referanse skalert ulikt i X og Y tas ikke med, siden sirklene dens måtte blitt ellipser.

Eksplosjonen kan angres i ett steg med [Undo](../undo/), akkurat som enhver annen redigering.

## Valg under kommandoen

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Legger polylinjen eller blokkreferansen under markøren til eller fjerner den fra utvalget; et klikk på en annen entitet gjør ingenting |
| **Dra mot høyre** (streng) | Velger bare polylinjer og blokkreferanser helt inne i boksen |
| **Dra mot venstre** (kryssende) | Velger polylinjer og blokkreferanser som krysser boksens kant |
| **Enter** / **Space** | Bekrefter og deler opp utvalget |

## Støttede entiteter

| Entitet | Støttet |
|--------|-----------|
| Polyline / Rectangle | Ja |
| Blokkreferanse | Ja, med mindre den er skalert ulikt i X og Y |
| Line, Arc, Circle, Ellipse | Nei — ingenting å eksplodere |
| Text, Spline, Dimension, Leader, Hatch | Nei |
