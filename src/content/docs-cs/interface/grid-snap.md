---
title: Grid & Snap — zarovnání výkresů na pravidelnou mřížku v KulmanLab CAD
description: Přepínače Grid a Snap v KulmanLab CAD překryjí plátno referenční mřížkou a zamknou pohyb kurzoru na body mřížky. Rozestup mřížky se automaticky přizpůsobuje aktuálnímu zvětšení, takže vždy ukazuje kulaté hodnoty modelu.
keywords: [CAD mřížka, přichycení k mřížce, rozestup mřížky, pomůcky pro kreslení, kulmanlab, tečky mřížky, ortogonální přichycení]
group: interface
order: 1
---

# Grid & Snap

Dvě přepínací tlačítka v ovládací liště umožňují překrýt plátno referenční mřížkou a při kreslení zamknout kurzor na její průsečíky.

| Tlačítko | Co dělá |
|----------|---------|
| **Grid** | Zobrazí na plátně vizuální mřížku z teček nebo čar |
| **Snap** | Zamkne kurzor na nejbližší bod mřížky, když není blíž žádné přichycení ke geometrii |

Oba přepínače jsou nezávislé — můžete mřížku zobrazit bez přichytávání, přichytávat bez zobrazení mřížky, nebo použít obojí společně.

## Zapnutí mřížky a přichycení

Klikněte na **Grid** nebo **Snap** v panelu ovládací lišty. Aktivní stav je zvýrazněn. Nastavení se zachovává mezi relacemi.

Když je zapnuto **Snap**, mřížka automaticky přepne zobrazení z čar na **tečky** — tečky označují přesné body, ke kterým se kurzor přichytí.

## Adaptivní rozestup mřížky

Rozestup mřížky se automaticky upravuje při přibližování tak, aby čáry mřížky byly na obrazovce vždy v příjemné vzdálenosti (~40 px). Krok je vždy „pěkné" číslo — násobek 1, 2 nebo 5 při jakékoli mocnině deseti:

| Příklad zvětšení / měřítka modelu | Krok mřížky |
|-----------------------------------|-------------|
| Oddáleno (velká oblast) | 100, 500, 1000 … |
| Střední zvětšení | 10, 20, 50 … |
| Přiblíženo (jemné detaily) | 1, 2, 5 … |
| Velmi blízko | 0,1, 0,2, 0,5 … |

To znamená, že každý bod přichycení leží na kulaté souřadnici v prostoru modelu — nehromadí se žádné odchylky v plovoucí řádové čárce.

## Priorita přichycení

**Přichycení ke koncovým bodům a průsečíkům má vždy přednost před mřížkou.** Kurzor se k bodu mřížky přichytí, pouze když není poblíž žádného kandidáta na přichycení ke geometrii (koncový bod, střed úsečky, střed kružnice nebo průsečík).

To znamená, že můžete kreslit se zapnutým přichytáváním k mřížce a přesto se přesně přichytávat k existující geometrii, když kurzor projde dostatečně blízko. Mřížka je záložní možnost, nikoli přepsání.

## Režim rozvržení

- **Modelový prostor** — tečky nebo čáry vyplňují celou viditelnou oblast plátna.
- **Prostor rozvržení (papír)** — tečky jsou oříznuty na obdélník papíru a nepřesahují za něj.
- **Uvnitř výřezu** — mřížka sleduje souřadnicový systém modelu v měřítku výřezu, takže tečky odpovídají stejným jednotkám modelu bez ohledu na zvětšení výřezu.

## Typický postup

1. Před zahájením výkresu vyžadujícího pravidelné rozestupy zapněte **Grid** a **Snap**.
2. Přibližte na úroveň, kde krok mřížky odpovídá požadovanému přírůstku (např. přibližte, dokud nejsou tečky 10 jednotek od sebe).
3. Kreslete — kurzor se automaticky přichytává k bodům mřížky. Existující geometrie se stále přichytává normálně, když jste blízko ní.
4. **Snap** vypněte, když potřebujete volný pohyb kurzoru nebo chcete přichytávat pouze ke geometrii.
