---
title: Fit-kommando — Ram Alle Entiteter i Viewporten med Ét Klik
description: Fit-kommandoen beregner afgrænsningsboksen for alle entiteter og justerer zoom og panorering, så hver entitet er synlig med en lille margin. Dobbeltklik på midterste museknap udløser Fit uden at aktivere kommandoen.
keywords: [CAD tilpas visning, zoom til at passe, ram alle entiteter, fit-kommando CAD, afgrænsningsboks zoom, kulmanlab]
group: navigate
order: 4
---

# Fit

Kommandoen `fit` beregner afgrænsningsboksen for alle entiteter i tegningen og justerer både zoomniveau og panoreringsposition, så hver entitet er synlig med en lille margin. Det er den hurtigste måde at genskabe en tabt visning på, eller orientere dig efter at have importeret en DXF-fil.

## Tilpasse visningen

Klik på **Fit**-knappen i værktøjslinjen eller skriv `fit` i terminalen. Visningen justeres straks, og kommandoen afsluttes — ingen interaktion nødvendig.

**Dobbeltklik på midterste museknap** udløser den samme Fit-operation når som helst uden at aktivere nogen kommando — den hurtigste genvej til at nulstille en tabt visning midt i tegningen.

## Hvordan afgrænsningsboks-tilpasningen fungerer

1. Fit finder den akse-justerede afgrænsningsboks, der omslutter alle entiteter (min X, maks X, min Y, maks Y).
2. Zoomniveauet sættes, så den højere eller bredere dimension fylder lærredet med en margin.
3. Visningen centreres på afgrænsningsboksens midtpunkt.

| Tegningstilstand | Resultat |
|--------------|--------|
| Bredere end høj | Zoom begrænset af bredden |
| Højere end bred | Zoom begrænset af højden |
| Enkelt entitet | Tilpasses omkring kun den entitet |
| Tom tegning | Visningen ændres ikke |

## Fit vs manuelle zoom-kontroller

| | Fit | Zoom In / Zoom Out | Rullehjul |
|---|-----|--------------------|-------------|
| Centrerer på | Alle entiteter | Viewportens midtpunkt | Markøren |
| Trinstørrelse | Automatisk (ét skud) | 1,5× pr. trin | ~1,1× pr. hak |
| Bedst til | Genskabe tabt visning, orientering efter import | Trinvis ind/ud fra centrum | Præcis markørstyret zoom |

## Tastaturreference

Der er ingen tastaturgenvej til denne kommando. Brug genvejen **dobbeltklik på midterste museknap** i stedet.

## Relaterede visningskommandoer

| Kommando | Hvad den gør |
|---------|-------------|
| [Pan](../pan/) | Forskyder viewporten uden at zoome |
| [Zoom In](../zoom-in/) | Multiplicerer zoom med 1,5× pr. trin |
| [Zoom Out](../zoom-out/) | Dividerer zoom med 1,5× pr. trin |
