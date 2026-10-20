---
title: "Point-kommando — placera punkter på ritningen i KulmanLab CAD"
description: "Point-kommandot placerar en punkt vid varje klick, inskrivet X,Y eller avstånd längs en låst riktning, tills Enter, Space eller Escape. Punkter ritas som en prick, bär aktuellt lager och färg och följer med som DXF POINT-entiteter."
keywords: ["CAD punkt-kommando", "placera punkt CAD", "DXF POINT-entitet", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

Kommandot `Punkt` placerar en punkt vid varje val och förblir aktivt tills du trycker Enter, Space eller Escape. En punkt är en position utan storlek: den ritas som en liten prick och bär aktuellt lager och färg. Den sparas som en `POINT`-entitet.

## Placera punkter

1. Skriv `Punkt` i terminalen eller klicka på **Point**, den sista knappen i panelen Shapes.
2. **Klicka** där punkten ska vara, eller skriv `X,Y` och tryck **Enter** för en exakt position. Varje val placerar en punkt och terminalen loggar dess koordinater; kommandot förblir aktivt för nästa.
3. Eller lås en riktning från en [vektornål](../../interface/vector-pins/) och skriv ett avstånd — punkten landar exakt så långt längs den.
4. Tryck **Enter**, **Space** eller **Escape** för att avsluta. Enter och Space avslutar bara när inget skrivs.

## Hur en punkt ser ut

En punkt ritas som en prick med radien 1,5 px vid varje zoomnivå, så den förblir synlig när du zoomar ut och växer inte när du zoomar in. Ritningens punktstil (`$PDMODE` och `$PDSIZE`) läses inte ännu, så varje punkt är en prick, vad en DXF än säger.

## Redigera punkter

En markerad punkt har ett grepp, som flyttar den. Ett fönsterval tar en punkt när den ligger inom fönstret, oavsett dragriktning.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) och [Scale](../scale/) fungerar på punkter som på vilken annan entitet som helst. Egenskapsfönstret visar Position X och Position Y samt färg och lager.

## DXF — POINT-entitet

Punkter läses från och skrivs till DXF som `POINT`-entiteter med position, färg och lager (gruppkoder 10/20, 62 och 8) och följer med genom sparad JSON. De hoppades tidigare över vid import. [Export Manager](../export-manager/) listar Points på en egen rad, så du kan utelämna dem från en export.

---

*Relaterat: [Line](../line/) för samma koordinatinmatning och [Vector Pins](../../interface/vector-pins/) för att placera en punkt ett visst avstånd längs en riktning.*
