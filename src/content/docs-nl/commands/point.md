---
title: "Point-opdracht — punten in de tekening plaatsen in KulmanLab CAD"
description: "De opdracht Point plaatst een punt bij elke klik, getypte X,Y of afstand langs een vergrendelde richting, tot Enter, Space of Escape. Punten worden als stip getekend, dragen de huidige laag en kleur en reizen mee als DXF POINT-entiteiten."
keywords: ["CAD puntopdracht", "punt plaatsen CAD", "DXF POINT-entiteit", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

De opdracht `Punt` plaatst bij elke keuze een punt en blijft actief tot u op Enter, Space of Escape drukt. Een punt is een positie zonder grootte: het wordt als kleine stip getekend en draagt de huidige laag en kleur. Het wordt opgeslagen als een `POINT`-entiteit.

## Punten plaatsen

1. Typ `Punt` in de terminal of klik op **Point**, de laatste knop in het paneel Shapes.
2. **Klik** waar het punt komt, of typ `X,Y` en druk op **Enter** voor een exacte positie. Elke keuze plaatst een punt en de terminal logt zijn coördinaten; de opdracht blijft actief voor het volgende.
3. Of vergrendel een richting vanaf een [vectorpin](../../interface/vector-pins/) en typ een afstand — het punt landt precies zo ver langs die richting.
4. Druk op **Enter**, **Space** of **Escape** om te stoppen. Enter en Space stoppen alleen als er niets wordt getypt.

## Hoe een punt eruitziet

Een punt wordt op elk zoomniveau getekend als een stip met een straal van 1,5 px, dus het blijft zichtbaar bij uitzoomen en groeit niet bij inzoomen. De puntstijl van de tekening (`$PDMODE` en `$PDSIZE`) wordt nog niet gelezen, dus elk punt is een stip, wat een DXF ook zegt.

## Punten bewerken

Een geselecteerd punt heeft één greep, die het verplaatst. Een vensterselectie neemt een punt mee als het binnen het venster ligt, in beide sleeprichtingen.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) en [Scale](../scale/) werken op punten zoals op elke andere entiteit. Het eigenschappenvenster toont Position X en Position Y, plus kleur en laag.

## DXF — POINT-entiteit

Punten worden uit DXF gelezen en erin geschreven als `POINT`-entiteiten met positie, kleur en laag (groepscodes 10/20, 62 en 8) en reizen ook mee via opgeslagen JSON. Vroeger werden ze bij import overgeslagen. [Export Manager](../export-manager/) toont Points op een eigen rij, zodat u ze van een export kunt uitsluiten.

---

*Gerelateerd: [Line](../line/) voor dezelfde coördinateninvoer en [Vector Pins](../../interface/vector-pins/) om een punt op een vaste afstand langs een richting te plaatsen.*
