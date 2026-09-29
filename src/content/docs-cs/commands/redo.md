---
title: Příkaz Redo — znovuprovedení vrácených akcí v KulmanLab CAD
description: Příkaz Redo znovu provede poslední akci vrácenou příkazem Undo a postupuje vpřed historií. Redo je dostupné pouze po Undo a vymaže se v okamžiku, kdy provedete jakoukoli novou kreslicí akci.
keywords: [CAD příkaz redo, historie redo CAD, znovuprovedení akce CAD, undo redo CAD, trvalé redo v prohlížeči, kulmanlab]
group: edit
order: 14
---

# Redo

Příkaz `redo` postupuje vpřed historií zpět vrácených kroků a znovu provádí akce, které byly vráceny příkazem [Undo](../undo/). Redo je dostupné pouze tehdy, když jste se pomocí Undo vrátili zpět a ještě jste neprovedli novou změnu.

## Jak provést redo

- Napište `redo` do terminálu, nebo
- klikněte na tlačítko **Redo** v panelu nástrojů.

Každé vyvolání znovu provede jednu dříve vrácenou akci. Opakovaným vyvoláním postupujete vpřed všemi dostupnými položkami redo.

## Chování zásobníku redo

| Podrobnost | Chování |
|------------|---------|
| Dostupné po | Jednom nebo více krocích [Undo](../undo/) |
| Vymazáno | **Jakoukoli novou kreslicí akcí** — přidáním, úpravou nebo smazáním objektu |
| Úložiště | Prohlížeč, pro každý soubor zvlášť — přežije obnovení stránky (pokud před ním nebyla provedena nová akce) |
| Maximální hloubka | Až 20 položek (stejný fond jako Undo) |

Jakmile se nakreslí, smaže nebo upraví nějaký objekt, zásobník redo se vymaže a tyto položky nelze obnovit. Znovu provést lze pouze vrácené akce, které nebyly nahrazeny novou prací.

## Redo vs Undo

| | Redo | Undo |
|---|------|------|
| Směr | Postupuje **vpřed** vrácenými položkami | Postupuje **zpět** historií |
| Dostupné, když | Po alespoň jednom Undo, bez nové akce | Existuje alespoň jedna zaznamenaná akce |
| Vymazáno | Jakoukoli novou kreslicí akcí | Ničím |

Tlačítko Redo v panelu nástrojů je zašedlé, pokud nejsou žádné položky k opakování. Použijte nejprve [Undo](../undo/), čímž vytvoříte položky redo.
