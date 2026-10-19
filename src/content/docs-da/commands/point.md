---
title: "Point-kommando — placér punkter på tegningen i KulmanLab CAD"
description: "Point-kommandoen placerer et punkt ved hvert klik, indtastet X,Y eller afstand langs en låst retning, indtil Enter, Space eller Escape. Punkter tegnes som en prik, bærer det aktuelle lag og farve og følger med som DXF POINT-entiteter."
keywords: ["CAD punkt-kommando", "placér punkt CAD", "DXF POINT-entitet", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

Kommandoen `Punkt` placerer et punkt ved hvert valg og forbliver aktiv, til du trykker Enter, Space eller Escape. Et punkt er en position uden størrelse: det tegnes som en lille prik og bærer det aktuelle lag og farve. Det gemmes som en `POINT`-entitet.

## Placér punkter

1. Skriv `Punkt` i terminalen eller klik på **Point**, den sidste knap i panelet Shapes.
2. **Klik**, hvor punktet skal være, eller skriv `X,Y` og tryk **Enter** for en nøjagtig position. Hvert valg placerer et punkt, og terminalen logger dets koordinater; kommandoen forbliver aktiv til det næste.
3. Eller lås en retning fra en [vektorpin](../../interface/vector-pins/) og skriv en afstand — punktet lander præcis så langt ude ad den.
4. Tryk **Enter**, **Space** eller **Escape** for at afslutte. Enter og Space afslutter kun, når intet er ved at blive skrevet.

## Hvordan et punkt ser ud

Et punkt tegnes som en prik med radius 1 px ved alle zoomniveauer, så det forbliver synligt, når du zoomer ud, og vokser ikke, når du zoomer ind. Tegningens punktstil (`$PDMODE` og `$PDSIZE`) læses ikke endnu, så hvert punkt er en prik, uanset hvad en DXF siger.

## Redigering af punkter

Et valgt punkt har ét gribepunkt, som flytter det. Et boksvalg tager et punkt, når det ligger inden i boksen, uanset trækretning.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) og [Scale](../scale/) virker på punkter som på enhver anden entitet. Egenskabsvinduet viser Position X og Position Y samt farve og lag.

## DXF — POINT-entitet

Punkter læses fra og skrives til DXF som `POINT`-entiteter med position, farve og lag (gruppekoder 10/20, 62 og 8), og de følger med gennem gemt JSON. De blev tidligere sprunget over ved import. [Export Manager](../export-manager/) viser Points som en egen række, så du kan udelade dem fra en eksport.

---

*Relateret: [Line](../line/) til samme koordinatindtastning og [Vector Pins](../../interface/vector-pins/) til at placere et punkt en bestemt afstand ad en retning.*
