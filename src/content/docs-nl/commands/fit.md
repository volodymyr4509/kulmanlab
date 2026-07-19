---
title: Fit-commando — Alle Entiteiten in de Viewport in Één Klik
description: Het Fit-commando berekent de bounding box van alle entiteiten en past zoom en pan aan zodat elke entiteit zichtbaar is met een kleine marge. Dubbelklik op de middelste muisknop activeert Fit zonder het commando te starten.
keywords: [CAD fit view, zoomen om te passen, alle entiteiten kaderen, fit commando CAD, bounding box zoom, kulmanlab]
group: navigate
order: 4
---

# Fit

Het `fit`-commando berekent de bounding box van alle entiteiten in de tekening en past zowel het zoomniveau als de panpositie aan zodat elke entiteit zichtbaar is met een kleine marge. Het is de snelste manier om een verloren beeld te herstellen of uzelf te oriënteren na het importeren van een DXF-bestand.

## Het beeld passend maken

Klik op de werkbalkknop **Fit** of typ `fit` in de terminal. Het beeld past zich onmiddellijk aan en het commando sluit af — geen interactie vereist.

**Dubbelklik op de middelste muisknop** activeert dezelfde Fit-bewerking op elk moment zonder een commando te starten — de snelste manier om een verloren beeld tijdens het tekenen te herstellen.

## Hoe de bounding-box-fit werkt

1. Fit vindt de aslijn-uitgelijnde bounding box die alle entiteiten omsluit (min X, max X, min Y, max Y).
2. Het zoomniveau wordt zo ingesteld dat de hoogste of breedste afmeting het canvas vult met een marge.
3. Het beeld wordt gecentreerd op het middelpunt van de bounding box.

| Tekeningstoestand | Resultaat |
|--------------|--------|
| Breder dan hoog | Zoom beperkt door breedte |
| Hoger dan breed | Zoom beperkt door hoogte |
| Eén entiteit | Past rond alleen die entiteit |
| Lege tekening | Beeld verandert niet |

## Fit versus handmatige zoombediening

| | Fit | Zoom In / Zoom Out | Scrollwiel |
|---|-----|--------------------|-------------|
| Centreert op | Alle entiteiten | Middelpunt van viewport | Cursor |
| Stapgrootte | Automatisch (in één keer) | 1,5× per stap | ~1,1× per klik |
| Beste voor | Verloren beeld herstellen, oriëntatie na import | Stapsgewijs in-/uitzoomen vanuit het midden | Precieze cursorgerichte zoom |

## Toetsenbordreferentie

Er is geen toetsenbordsnelkoppeling voor dit commando. Gebruik in plaats daarvan de snelkoppeling **dubbelklik op de middelste muisknop**.

## Gerelateerde weergavecommando's

| Commando | Wat het doet |
|---------|-------------|
| [Pan](../pan/) | Verschuift de viewport zonder te zoomen |
| [Zoom In](../zoom-in/) | Vermenigvuldigt de zoom met 1,5× per stap |
| [Zoom Out](../zoom-out/) | Deelt de zoom door 1,5× per stap |
