---
title: Explode-kommandoen — Opdel en Polylinje i Line- og Arc-elementer
description: Explode-kommandoen opdeler en polylinje på stedet i dens individuelle Line- og Arc-elementer, ét pr. segment. Hvert stykke bevarer linjetykkelse, farve, lag og linjetype fra kildepolylinjen. Fungerer kun på Polyline-elementer.
keywords: [CAD explode-kommando, eksplodér polylinje CAD, opdel polylinje i linjer, konvertér polylinje til line og arc, kulmanlab]
group: edit
order: 16
---

# Explode

`Opløs`-kommandoen opdeler en [Polyline](../polyline/) i dens individuelle [Line](../line/)- og [Arc](../arc/)-elementer — ét pr. segment, præcis der hvor polylinjens egne knudepunkter lå. Stykkerne erstatter polylinjen på stedet og bevarer dens linjetykkelse, farve, lag og linjetype.

Explode fungerer kun på **Polyline**-elementer.

## Brug af explode

To måder at køre det på, samme mønster som [Delete](../delete/):

**Vælg først, opdel derefter** — den hurtigste vej:

1. Vælg en eller flere polylinjer på lærredet.
2. Skriv `Opløs` i terminalen, eller klik på knappen **Explode** i Edit-panelet.

De valgte polylinjer opdeles øjeblikkeligt — intet separat bekræftelsestrin, da noget allerede er valgt.

**Aktivér, vælg derefter**:

1. Skriv `Opløs` eller klik på værktøjslinjeknappen uden noget valgt.
2. **Vælg polylinjer** — klik for at skifte, eller træk for at vælge efter område.
3. Tryk på **Enter** eller **Mellemrum** for at bekræfte og opdele de valgte polylinjer.

Kun polylinjer samles op under valget — at klikke på en Line, Circle eller enhver anden enhed gør intet, og et områdetræk ignorerer alt undtagen polylinjerne indeni eller som krydser det.

## Hvad der kommer ud

Hvert segment af polylinjen bliver sit eget element:

- Et **lige segment** bliver en **Line**.
- Et **buesegment** (fra Polylines [Arc-mulighed](../polyline/)) bliver en **Arc**, der nøjagtigt matcher den oprindelige kurves centrum, radius og sving.

Hver resulterende Line og Arc arver kildepolylinjens **linjetykkelse, farve, lag, linjetype og linjetypeskala** — intet ændrer sig ved, hvordan geometrien ser ud, kun at det nu er flere uafhængige elementer i stedet for én sammenhængende polylinje.

Opdelingen kan fortrydes i ét trin med [Undo](../undo/), ligesom enhver anden redigering.

## Valg under kommandoen

| Metode | Adfærd |
|--------|--------|
| **Klik** | Skifter polylinjen under markøren ind/ud af valget; at klikke på et element, der ikke er en polylinje, gør intet |
| **Træk højre** (streng) | Vælger kun polylinjer, der er helt inden for boksen |
| **Træk venstre** (krydsende) | Vælger polylinjer, der krydser boksens grænse |
| **Enter** / **Mellemrum** | Bekræfter og opdeler de valgte polylinjer |

## Understøttede elementer

| Element | Understøttet |
|--------|-----------|
| Polyline / Rectangle | Ja |
| Line, Arc, Circle, Ellipse | Nej — intet at opdele |
| Text, Spline, Dimension, Leader, Hatch | Nej |
