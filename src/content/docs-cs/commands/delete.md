---
title: Příkaz Delete — odstranění objektů z výkresu
description: Příkaz Delete trvale odstraní vybrané objekty (lze vrátit zpět). Předem vybrané objekty se smažou okamžitě bez potvrzení. Klávesa Delete funguje jako globální zkratka i bez aktivace příkazu. Podporuje výběr jedním kliknutím i výběr oblastí.
keywords: [CAD příkaz delete, odstranění objektů CAD, mazání objektů CAD, klávesa delete CAD, vrácení smazání CAD, kulmanlab]
group: edit
order: 7
---

# Delete

Příkaz `delete` odstraní vybrané objekty z výkresu. Smazání se zaznamenají do historie [Undo](../undo/) a lze je vrátit až o 20 kroků. Neexistuje žádný samostatný dialog „potvrdit smazání“ — potvrzením je jediné stisknutí klávesy.

## Dva způsoby mazání

**Nejdřív vybrat, pak smazat** — nejrychlejší cesta:

1. Vyberte na plátně jeden nebo více objektů.
2. Napište `delete` do terminálu, klikněte na tlačítko **Delete** v panelu nástrojů, **nebo přímo stiskněte klávesu `Delete`**.

Objekty se odstraní okamžitě — bez dalšího kroku potvrzení.

**Nejdřív spustit, pak vybrat**:

1. Napište `delete` nebo klikněte na tlačítko v panelu nástrojů (bez výběru).
2. **Vyberte objekty** — kliknutím přepínáte, tažením vybíráte podle oblasti.
3. Stisknutím **Enter**, **Space** nebo **Delete** vybrané objekty potvrdíte a odstraníte.

## Zkratka klávesy Delete

Klávesa `Delete` na klávesnici funguje jako **globální zkratka** — pokud jsou aktuálně vybrány nějaké objekty, její stisknutí je okamžitě smaže, i když jste příkaz Delete v terminálu vůbec neotevřeli. Je to nejrychlejší postup mazání na jeden krok:

```
Klik na objekt → stisk klávesy Delete → hotovo
```

## Výběr během příkazu

| Metoda | Chování |
|--------|---------|
| **Klik** | Přepíná objekt pod kurzorem do výběru / z výběru |
| **Tažení doprava** (přísný výběr) | Vybere pouze objekty, které leží celé uvnitř rámečku |
| **Tažení doleva** (výběr křížením) | Vybere objekty, které protínají hranici rámečku |
| **Enter** / **Space** / **Delete** | Potvrdí a smaže vybrané objekty |

## Obnovení smazaných objektů

Smazání lze vrátit příkazem [Undo](../undo/) (napište `undo` nebo použijte tlačítko v panelu nástrojů). Na jeden soubor lze vrátit až **20 kroků** a historie se zachová i po znovunačtení stránky. Pokud jste bez uložení překročili 20 smazání, dřívější smazání už obnovit nelze.

## Podporované objekty

Delete funguje na všech typech objektů — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader i všech dalších.
