---
title: Příkaz Fit — zobrazení všech objektů v okně jedním kliknutím
description: Příkaz Fit vypočítá obalový obdélník všech objektů a upraví zvětšení a posun tak, aby byly všechny objekty vidět s malým okrajem. Dvojité kliknutí prostředním tlačítkem myši spustí Fit bez aktivace příkazu.
keywords: [CAD zobrazit vše, přiblížit na celek, zobrazení všech objektů, příkaz fit CAD, zoom na obalový obdélník, kulmanlab]
group: navigate
order: 4
---

# Fit

Příkaz `fit` vypočítá obalový obdélník všech objektů ve výkresu a upraví úroveň zvětšení i polohu posunu tak, aby byly všechny objekty vidět s malým okrajem. Je to nejrychlejší způsob, jak najít ztracený pohled nebo se zorientovat po importu souboru DXF.

## Přizpůsobení pohledu

Klikněte na tlačítko **Fit** v panelu nástrojů nebo napište `fit` do terminálu. Pohled se upraví okamžitě a příkaz se ukončí — není potřeba žádná další interakce.

**Dvojité kliknutí prostředním tlačítkem myši** spustí stejnou operaci Fit kdykoli bez aktivace jakéhokoli příkazu — nejrychlejší zkratka, jak uprostřed kreslení obnovit ztracený pohled.

## Jak funguje přizpůsobení obalovému obdélníku

1. Fit najde obalový obdélník zarovnaný s osami, který zahrnuje všechny objekty (min X, max X, min Y, max Y).
2. Úroveň zvětšení se nastaví tak, aby vyšší nebo širší rozměr vyplnil plátno s okrajem.
3. Pohled se vycentruje na střed obalového obdélníku.

| Stav výkresu | Výsledek |
|--------------|----------|
| Širší než vyšší | Zvětšení omezeno šířkou |
| Vyšší než širší | Zvětšení omezeno výškou |
| Jediný objekt | Přizpůsobí se pouze kolem něj |
| Prázdný výkres | Pohled se nezmění |

## Fit vs ruční ovládání zvětšení

| | Fit | Zoom In / Zoom Out | Kolečko myši |
|---|-----|--------------------|-------------|
| Vystředí na | Všechny objekty | Střed okna | Kurzor |
| Velikost kroku | Automatická (jednorázově) | 1,5× na krok | ~1,1× na zářez |
| Nejvhodnější pro | Obnovení ztraceného pohledu, orientaci po importu | Postupné přibližování/oddalování od středu | Přesné přiblížení k místu kurzoru |

## Přehled kláves

Pro tento příkaz neexistuje žádná klávesová zkratka. Použijte místo ní zkratku **dvojitého kliknutí prostředním tlačítkem myši**.

## Související příkazy pohledu

| Příkaz | Co dělá |
|--------|---------|
| [Pan](../pan/) | Posune okno bez změny zvětšení |
| [Zoom In](../zoom-in/) | Vynásobí zvětšení 1,5× na krok |
| [Zoom Out](../zoom-out/) | Vydělí zvětšení 1,5× na krok |
