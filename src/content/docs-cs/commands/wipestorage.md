---
title: Příkaz Wipe Storage — vymazání všech dat prohlížeče v KulmanLab CAD
description: Příkaz wipestorage trvale smaže všechny soubory, hladiny, typy čar a historii undo uložené v prohlížeči. K potvrzení vyžaduje napsání YES. Použijte při resetu poškozené nebo přeplněné lokální databáze.
keywords: [CAD wipe storage, vymazání dat prohlížeče CAD, reset CAD aplikace, smazání lokálních souborů CAD, kulmanlab wipestorage]
group: file
order: 7
---

# Wipe Storage

Příkaz `wipestorage` trvale smaže **všechna data uložená v prohlížeči** pro KulmanLab CAD — každý uložený soubor, tabulky hladin a typů čar i historii undo. Stránka se poté automaticky znovu načte.

:::danger Nevratné
Tuto akci nelze vrátit zpět. Všechny soubory uložené v prohlížeči se smažou. Než tento příkaz spustíte, exportujte výkresy, které chcete zachovat, jako soubory `.json` nebo `.dxf`.
:::

## Kdy jej použít

- Úložiště prohlížeče je poškozené a aplikace se nedaří načíst nebo ukládat soubory.
- Chcete aplikaci úplně resetovat do čistého stavu.
- Přecházíte na jiný prohlížeč nebo zařízení a místní kopii už nepotřebujete.

## Jak jej spustit

1. Napište `wipestorage` do terminálu a stiskněte **Enter**.
2. Terminál se zeptá: *Wipe all browser local storage? Type YES to confirm*
3. Napište `YES` (na velikosti písmen nezáleží) a stiskněte **Enter**.

Aplikace databázi smaže a stránku znovu načte. Pokud napíšete cokoli jiného než `YES` a stisknete **Enter**, nebo stisknete **Escape**, příkaz se zruší a nic se nesmaže.

## Co se smaže

| Data | Smazáno |
|------|---------|
| Všechny soubory uložené v prohlížeči | Ano |
| Tabulky hladin a typů čar každého souboru | Ano |
| Historie undo / redo každého souboru | Ano |

Ovlivněna jsou pouze data uložená lokálně v **tomto prohlížeči**. Soubory, které jste již exportovali jako `.json` nebo `.dxf`, se nedotknou.
