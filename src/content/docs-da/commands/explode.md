---
title: "Explode-kommando — del en polylinje eller en blok op i dens dele"
description: "Explode-kommandoen deler en polylinje op i dens Line- og Arc-entiteter, eller en blokreference i de entiteter, dens blok tegner, på stedet. Delene ser præcis ud som originalen."
keywords: [CAD explode-kommando, eksplodér polylinje CAD, opdel polylinje i linjer, konvertér polylinje til line og arc, kulmanlab]
group: edit
order: 19
---

# Explode

`Opløs`-kommandoen opdeler en [Polyline](../polyline/) i dens individuelle [Line](../line/)- og [Arc](../arc/)-elementer — ét pr. segment, præcis der hvor polylinjens egne knudepunkter lå. Stykkerne erstatter polylinjen på stedet og bevarer dens linjetykkelse, farve, lag og linjetype.

Explode virker på **Polyline**-entiteter og **blokreferencer**.

## Brug af explode

To måder at køre det på, samme mønster som [Delete](../delete/):

**Vælg først, opdel derefter** — den hurtigste vej:

1. Vælg en eller flere polylinjer på lærredet.
2. Skriv `Opløs` i terminalen, eller vælg **Explode** i rullemenuen i panelet Edit.

De valgte polylinjer opdeles øjeblikkeligt — intet separat bekræftelsestrin, da noget allerede er valgt.

**Aktivér, vælg derefter**:

1. Skriv `Opløs` eller vælg **Explode** i rullemenuen, mens intet er valgt.
2. **Vælg polylinjer eller blokreferencer** — klik for at skifte, eller træk for at vælge et område.
3. Tryk på **Enter** eller **Mellemrum** for at bekræfte og opdele de valgte polylinjer.

Under valget tages kun polylinjer og blokreferencer med — et klik på en Line, Circle eller anden entitet gør intet, og et områdetræk ignorerer alt andet indeni eller på tværs.

## Hvad der kommer ud

Hvert segment af polylinjen bliver sit eget element:

- Et **lige segment** bliver en **Line**.
- Et **buesegment** (fra Polylines [Arc-mulighed](../polyline/)) bliver en **Arc**, der nøjagtigt matcher den oprindelige kurves centrum, radius og sving.

Hver resulterende Line og Arc arver kildepolylinjens **linjetykkelse, farve, lag, linjetype og linjetypeskala** — intet ændrer sig ved, hvordan geometrien ser ud, kun at det nu er flere uafhængige elementer i stedet for én sammenhængende polylinje.

En **blokreference** bliver de entiteter, dens blok tegner, placeret hvor referencen viste dem. Entiteter, blokken holder skjult — en dynamisk bloks andre tilstande — udelades; hver attribut bliver en almindelig Text med sin værdi; dele tegnet ByBlock tager referencens farve, og dele på lag 0 dens lag. En indlejret blok kommer ud som sin egen blokreference, som du kan dele op igen. En reference skaleret forskelligt i X og Y tages ikke med, da dens cirkler skulle blive til ellipser.

Opdelingen kan fortrydes i ét trin med [Undo](../undo/), ligesom enhver anden redigering.

## Valg under kommandoen

| Metode | Adfærd |
|--------|--------|
| **Klik** | Tilføjer eller fjerner polylinjen eller blokreferencen under markøren fra markeringen; et klik på en anden entitet gør intet |
| **Træk til højre** (streng) | Vælger kun polylinjer og blokreferencer helt inde i boksen |
| **Træk til venstre** (krydsende) | Vælger polylinjer og blokreferencer, der krydser boksens kant |
| **Enter** / **Space** | Bekræfter og deler markeringen op |

## Understøttede elementer

| Element | Understøttet |
|--------|-----------|
| Polyline / Rectangle | Ja |
| Blokreference | Ja, medmindre den er skaleret forskelligt i X og Y |
| Line, Arc, Circle, Ellipse | Nej — intet at opdele |
| Text, Spline, Dimension, Leader, Hatch | Nej |
