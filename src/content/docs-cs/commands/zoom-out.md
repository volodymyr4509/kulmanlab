---
title: "Příkaz Zoom Out — zmenšení zvětšení pohledu o 1,5× na krok"
description: "Příkaz Zoom Out vydělí aktuální úroveň zvětšení 1,5× a okamžitě skončí. Vystředěno na střed okna. Pro jemnější ovládání oddalujte kolečkem myši směrem ke kurzoru."
keywords: [CAD oddálení, zmenšení zvětšení pohledu, příkaz zoom out, přehled CAD, "krok zvětšení 1,5x", kulmanlab]
group: navigate
order: 3
---

# Zoom Out

Příkaz `zoomout` vydělí aktuální úroveň zvětšení **1,5×** (což odpovídá vynásobení ~0,667) a okamžitě skončí, vystředěn na střed okna. Je to opak příkazu [Zoom In](../zoom-in/).

## Oddálení

Klikněte na tlačítko **Zoom Out** v panelu nástrojů nebo napište `zoomout` do terminálu. Zvětšení se použije okamžitě a příkaz skončí — není nutné klikat na plátno.

## Jak funguje krok 1,5×

| Aktuální zvětšení | Po jednom Zoom Out |
|-------------------|--------------------|
| 1,50× | 1,00× |
| 2,25× | 1,50× |
| 10,00× | 6,67× |
| 0,015× | 0,01× (omezeno) |

Úroveň zvětšení se vždy zobrazuje v **pravém dolním rohu** plátna. Dolní limit je **0,01×**; další kroky nic neudělají.

## Zoom Out v panelu nástrojů vs kolečko myši

| | Tlačítko Zoom Out | Kolečko myši |
|---|-------------------|--------------|
| Střed zvětšení | Střed okna | Poloha kurzoru |
| Velikost kroku | 1,5× na kliknutí | ~1,1× na zářez |
| Nutná aktivace | Ne | Ne — funguje vždy |
| Nejvhodnější pro | Krok zpět pro více souvislostí | Plynulé oddálení ukotvené ke kurzoru |

## Přehled kláves

Pro tento příkaz neexistují žádné klávesové zkratky. Použijte místo toho kolečko myši — funguje kdykoli bez aktivace jakéhokoli příkazu.

## Související příkazy pohledu

| Příkaz | Co dělá |
|--------|---------|
| [Zoom In](../zoom-in/) | Vynásobí zvětšení 1,5× na krok |
| [Fit](../fit/) | Obnoví zvětšení tak, aby byly vidět všechny objekty |
| [Pan](../pan/) | Posune okno bez změny zvětšení |
