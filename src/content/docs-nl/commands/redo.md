---
title: Redo-commando — Ongedaan gemaakte acties opnieuw toepassen
description: Het Redo-commando past de laatste door Undo teruggedraaide actie opnieuw toe en gaat zo voorwaarts door de geschiedenisstack. Redo is alleen beschikbaar na een Undo en wordt gewist zodra een nieuwe tekenactie wordt uitgevoerd.
keywords: [CAD redo commando, redo geschiedenis CAD, actie opnieuw toepassen CAD, undo redo CAD, browser persistente redo, kulmanlab]
group: edit
order: 14
---

# Redo

Het `redo`-commando gaat voorwaarts door de undo-geschiedenis en past acties opnieuw toe die door [Undo](../undo/) waren teruggedraaid. Redo is alleen beschikbaar wanneer u een stap terug heeft gezet met Undo en nog geen nieuwe wijziging heeft aangebracht.

## Hoe u opnieuw toepast

- Typ `redo` in de terminal, of
- Klik op de **Redo**-werkbalkknop.

Elke aanroep past één eerder ongedaan gemaakte actie opnieuw toe. Roep het herhaaldelijk aan om voorwaarts te stappen door alle beschikbare redo-items.

## Gedrag van de redo-stack

| Detail | Gedrag |
|--------|-----------|
| Beschikbaar na | Een of meer [Undo](../undo/)-stappen |
| Gewist door | **Elke nieuwe tekenactie** — het toevoegen, bewerken of verwijderen van een entiteit |
| Opslag | Browser, per bestand — blijft behouden bij het herladen van de pagina (zolang er geen nieuwe actie is uitgevoerd vóór het herladen) |
| Maximale diepte | Tot 20 items (dezelfde pool als Undo) |

Zodra een nieuwe entiteit wordt getekend, verwijderd of aangepast, wordt de redo-stack gewist en kunnen die items niet meer worden hersteld. Alleen ongedaan gemaakte acties die niet zijn overschreven door nieuw werk kunnen opnieuw worden toegepast.

## Redo vs Undo

| | Redo | Undo |
|---|------|------|
| Richting | Stapt **voorwaarts** door ongedaan gemaakte items | Stapt **achterwaarts** door de geschiedenis |
| Beschikbaar wanneer | Na minstens één Undo, zonder nieuwe actie | Er bestaat minstens één vastgelegde actie |
| Gewist door | Elke nieuwe tekenactie | Niets |

De Redo-knop op de werkbalk is grijs wanneer er geen items zijn om opnieuw toe te passen. Gebruik eerst [Undo](../undo/) om redo-items te maken.
