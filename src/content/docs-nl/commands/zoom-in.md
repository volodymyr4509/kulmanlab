---
title: "Zoom In-commando — Vergroot de viewport met 1,5× per stap"
description: "Het Zoom In-commando vermenigvuldigt het huidige zoomniveau met 1,5× en sluit direct af. Gecentreerd op het middelpunt van de viewport. Zoombereik 0,01–10.000. Gebruik het scrollwiel om naar de cursor toe te zoomen."
keywords: [CAD zoom in, viewport vergroten, zoom-commando CAD, "1,5x-zoomstap", kulmanlab]
group: navigate
order: 2
---

# Zoom In

Het `zoomin`-commando vermenigvuldigt het huidige zoomniveau met **1,5×** en sluit direct af, gecentreerd op het middelpunt van de viewport. Het is het werkbalkequivalent van één scrollwielklik die naar het midden van het scherm zoomt in plaats van naar de cursor.

## Inzoomen

Klik op de werkbalkknop **Zoom In** of typ `zoomin` in de terminal. De zoom wordt direct toegepast en het commando sluit af — er is geen klik op het canvas vereist.

## Hoe de stap van 1,5× werkt

| Huidige zoom | Na één Zoom In |
|-------------|------------------|
| 1,00× | 1,50× |
| 1,50× | 2,25× |
| 10,00× | 15,00× |
| 6.667× | 10.000× (afgetopt) |

Het zoomniveau wordt altijd weergegeven in de **rechterbenedenhoek** van het canvas, naast het label `zoom`. De bovengrens is **10.000×**; verdere stappen hebben geen effect.

## Werkbalk zoom-in versus scrollwiel

| | Knop Zoom In | Scrollwiel |
|---|--------------|-------------|
| Zoomcentrum | Middelpunt viewport | Cursorpositie |
| Stapgrootte | 1,5× per klik | ~1,1× per klik |
| Activering vereist | Nee | Nee — werkt altijd |
| Beste voor | Grove navigatie | Precieze, cursorgerichte zoom |

## Toetsenbordreferentie

Er zijn geen toetsenbordsneltoetsen voor dit commando. Gebruik in plaats daarvan het scrollwiel — dat werkt altijd, zonder een commando te activeren.

## Gerelateerde weergavecommando's

| Commando | Wat het doet |
|---------|-------------|
| [Zoom Out](../zoom-out/) | Deelt de zoom door 1,5× per stap |
| [Fit](../fit/) | Zet de zoom terug om alle entiteiten te tonen |
| [Pan](../pan/) | Verschuift de viewport zonder te zoomen |
