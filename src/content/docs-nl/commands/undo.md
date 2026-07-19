---
title: Undo-commando — Stap terug door tekengeschiedenis
description: Het Undo-commando draait de laatste tekenactie stap voor stap terug. Tot 20 stappen worden per bestand opgeslagen en bewaard in de browser na het herladen van de pagina. Een nieuwe actie na undo wist de redo-stack.
keywords: [CAD undo commando, undo geschiedenis CAD, actie terugdraaien CAD, undo stappen CAD, browser persistente undo, kulmanlab]
group: edit
order: 13
---

# Undo

Het `undo`-commando draait de laatste wijziging aan de tekening terug — één stap per aanroep. Elke toevoeging, verwijdering of bewerking van entiteiten wordt vastgelegd als een apart geschiedenisitem. Undo stapt in omgekeerde volgorde terug door deze items.

## Hoe u ongedaan maakt

- Typ `undo` in de terminal, of
- Klik op de **Undo**-werkbalkknop.

Elke aanroep draait één vastgelegde actie terug. Roep het herhaaldelijk aan om verder terug te stappen.

## Gedrag van de geschiedenis

| Detail | Waarde |
|--------|-------|
| Stappen per bestand | Tot **20** |
| Opslag | Browser (IndexedDB / localStorage), per bestandsnaam |
| Blijft behouden bij herladen | Ja — de geschiedenis wordt hersteld wanneer u het bestand opnieuw opent |
| Nieuwe actie na undo | Wist alle redo-items vóór de huidige positie |
| Oudste item wanneer vol | Verwijderd om ruimte te maken voor de nieuwste wijziging |

Elke entiteitsmutatie wordt vastgelegd: het tekenen van nieuwe entiteiten, het verwijderen van entiteiten, het grip-bewerken van eindpunten, en het toepassen van Move, Rotate, Scale, Mirror, Trim, Extend en Offset creëren allemaal geschiedenisitems.

## Undo vs Redo

| | Undo | Redo |
|---|------|------|
| Richting | Stapt **achterwaarts** door de geschiedenis | Stapt **voorwaarts** door ongedaan gemaakte items |
| Beschikbaar wanneer | Er bestaat minstens één vastgelegde actie | Er is minstens één Undo uitgevoerd en er is nog geen nieuwe actie ondernomen |
| Gewist door | Niets — geschiedenis blijft accumuleren tot de limiet van 20 stappen | Elke nieuwe tekenactie |

Gebruik [Redo](../redo/) om een ongedaan gemaakte actie opnieuw toe te passen. De werkbalkknoppen zijn grijs wanneer de betreffende richting niet beschikbaar is.
