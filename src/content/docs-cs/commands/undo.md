---
title: Příkaz Undo — krok zpět v historii kreslení v KulmanLab CAD
description: Příkaz Undo vrátí poslední kreslicí akci po jednom kroku. Pro každý soubor se uchovává až 20 kroků, které přežijí obnovení stránky v prohlížeči. Provedení nové akce po undo vymaže zásobník redo.
keywords: [CAD příkaz undo, historie undo CAD, vrácení akce CAD, kroky undo CAD, trvalé undo v prohlížeči, kulmanlab]
group: edit
order: 13
---

# Undo

Příkaz `undo` vrátí poslední změnu ve výkresu — jeden krok na jedno vyvolání. Každé přidání, smazání nebo úprava objektů se zaznamenává jako samostatná položka historie. Undo se vrací těmito položkami v opačném pořadí.

## Jak provést undo

- Napište `undo` do terminálu, nebo
- klikněte na tlačítko **Undo** v panelu nástrojů.

Každé vyvolání vrátí jednu zaznamenanou akci. Opakovaným vyvoláním se vracíte dál zpět.

## Chování historie

| Podrobnost | Hodnota |
|------------|---------|
| Kroků na soubor | Až **20** |
| Úložiště | Prohlížeč (IndexedDB / localStorage), podle názvu souboru |
| Přežije obnovení stránky | Ano — historie se obnoví při opětovném otevření souboru |
| Nová akce po undo | Vymaže všechny položky redo před aktuální pozicí |
| Nejstarší položka při zaplnění | Zahozena, aby uvolnila místo nejnovější změně |

Zaznamenává se každá změna objektů: kreslení nových objektů, mazání objektů, úpravy koncových bodů úchyty, použití Move, Rotate, Scale, Mirror, Trim, Extend a Offset — všechny vytvářejí položky historie.

## Undo vs Redo

| | Undo | Redo |
|---|------|------|
| Směr | Postupuje **zpět** historií | Postupuje **vpřed** vrácenými položkami |
| Dostupné, když | Existuje alespoň jedna zaznamenaná akce | Bylo provedeno alespoň jedno Undo a nebyla provedena nová akce |
| Vymazáno | Ničím — historie se hromadí až do limitu 20 kroků | Jakoukoli novou kreslicí akcí |

Použijte [Redo](../redo/) k opětovnému provedení vrácené akce. Tlačítka v panelu nástrojů jsou zašedlá, když příslušný směr není dostupný.
