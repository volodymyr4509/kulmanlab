---
title: "Point-kommando — plasser punkter på tegningen i KulmanLab CAD"
description: "Point-kommandoen plasserer et punkt ved hvert klikk, innskrevet X,Y eller avstand langs en låst retning, til Enter, Space eller Escape. Punkter tegnes som en prikk, bærer gjeldende lag og farge og følger med som DXF POINT-entiteter."
keywords: ["CAD punkt-kommando", "plasser punkt CAD", "DXF POINT-entitet", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

Kommandoen `Punkt` plasserer et punkt ved hvert valg og forblir aktiv til du trykker Enter, Space eller Escape. Et punkt er en posisjon uten størrelse: det tegnes som en liten prikk og bærer gjeldende lag og farge. Det lagres som en `POINT`-entitet.

## Plassere punkter

1. Skriv `Punkt` i terminalen eller klikk på **Point**, den siste knappen i panelet Shapes.
2. **Klikk** der punktet skal være, eller skriv `X,Y` og trykk **Enter** for en nøyaktig posisjon. Hvert valg plasserer et punkt, og terminalen logger koordinatene; kommandoen forblir aktiv for neste.
3. Eller lås en retning fra en [vektorpinne](../../interface/vector-pins/) og skriv en avstand — punktet lander nøyaktig så langt langs den.
4. Trykk **Enter**, **Space** eller **Escape** for å avslutte. Enter og Space avslutter bare når ingenting skrives.

## Hvordan et punkt ser ut

Et punkt tegnes som en prikk med radius 1,5 px på alle zoomnivåer, så det forblir synlig når du zoomer ut og vokser ikke når du zoomer inn. Tegningens punktstil (`$PDMODE` og `$PDSIZE`) leses ikke ennå, så hvert punkt er en prikk, uansett hva en DXF sier.

## Redigere punkter

Et valgt punkt har ett gripepunkt, som flytter det. Et boksvalg tar et punkt når det ligger inne i boksen, uansett trekkretning.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) og [Scale](../scale/) virker på punkter som på enhver annen entitet. Egenskapsvinduet viser Position X og Position Y, samt farge og lag.

## DXF — POINT-entitet

Punkter leses fra og skrives til DXF som `POINT`-entiteter med posisjon, farge og lag (gruppekoder 10/20, 62 og 8), og følger med gjennom lagret JSON. De ble tidligere hoppet over ved import. [Export Manager](../export-manager/) viser Points som en egen rad, så du kan utelate dem fra en eksport.

---

*Relatert: [Line](../line/) for samme koordinatinnskriving og [Vector Pins](../../interface/vector-pins/) for å plassere et punkt en bestemt avstand langs en retning.*
