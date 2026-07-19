---
title: "Zoom Out-commando — Verklein de viewportzoom met 1,5× per stap"
description: "Het Zoom Out-commando deelt het huidige zoomniveau door 1,5× en sluit direct af. Gecentreerd op het middelpunt van de viewport. Gebruik het scrollwiel om naar de cursor toe uit te zoomen voor fijnere controle."
keywords: [CAD zoom out, viewport verkleinen, zoom-out-commando, overzicht CAD, "1,5x-zoomstap", kulmanlab]
group: navigate
order: 3
---

# Zoom Out

Het `zoomout`-commando deelt het huidige zoomniveau door **1,5×** (gelijk aan vermenigvuldigen met ~0,667) en sluit direct af, gecentreerd op het middelpunt van de viewport. Het is het omgekeerde van [Zoom In](../zoom-in/).

## Uitzoomen

Klik op de werkbalkknop **Zoom Out** of typ `zoomout` in de terminal. De zoom wordt direct toegepast en het commando sluit af — er is geen klik op het canvas vereist.

## Hoe de stap van 1,5× werkt

| Huidige zoom | Na één Zoom Out |
|-------------|-------------------|
| 1,50× | 1,00× |
| 2,25× | 1,50× |
| 10,00× | 6,67× |
| 0,015× | 0,01× (ondergrens) |

Het zoomniveau wordt altijd weergegeven in de **rechterbenedenhoek** van het canvas. De ondergrens is **0,01×**; verdere stappen hebben geen effect.

## Werkbalk zoom-out versus scrollwiel

| | Knop Zoom Out | Scrollwiel |
|---|----------------|-------------|
| Zoomcentrum | Middelpunt viewport | Cursorpositie |
| Stapgrootte | 1,5× per klik | ~1,1× per klik |
| Activering vereist | Nee | Nee — werkt altijd |
| Beste voor | Stapsgewijs uitzoomen voor meer context | Vloeiend, cursorgeankerd uitzoomen |

## Toetsenbordreferentie

Er zijn geen toetsenbordsneltoetsen voor dit commando. Gebruik in plaats daarvan het scrollwiel — dat werkt altijd, zonder een commando te activeren.

## Gerelateerde weergavecommando's

| Commando | Wat het doet |
|---------|-------------|
| [Zoom In](../zoom-in/) | Vermenigvuldigt de zoom met 1,5× per stap |
| [Fit](../fit/) | Zet de zoom terug om alle entiteiten te tonen |
| [Pan](../pan/) | Verschuift de viewport zonder te zoomen |
