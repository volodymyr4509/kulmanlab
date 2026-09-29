---
title: Výběr typu čáry v panelu nástrojů — ovládání vzorů čar v KulmanLab CAD
description: Výběr typu čáry v panelu nástrojů KulmanLab CAD nastavuje vzor čáry použitý na všechny nově nakreslené objekty. Podporuje všechny typy čar načtené z aktuálního souboru DXF plus vestavěné možnosti ByLayer, ByBlock a Continuous.
keywords: [CAD typ čáry, vzor čáry, čárkovaná čára, typ čáry DXF, ByLayer typ čáry, kulmanlab]
group: interface
order: 4
---

# Linetype

Čip **linetype** v panelu nástrojů řídí vzor čáry přiřazený každému novému objektu, který nakreslíte. Kliknutím na něj otevřete rozbalovací výběr.

## Možnosti

| Hodnota | Význam |
|---------|--------|
| **From Layer** | Objekt zdědí typ čáry definovaný na jeho vrstvě. V DXF se uvádí jako `ByLayer`. |
| **ByBlock** | Objekt zdědí typ čáry bloku, do kterého patří. Mimo blok nemá viditelný účinek. |
| **Continuous** | Plná nepřerušená čára — bez vzoru čárkování. |
| **Pojmenované typy čar** | Jakýkoli typ čáry načtený z aktuálního souboru DXF (např. `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, …). Rozbalovací nabídka zobrazuje živý náhled každého vzoru a jeho definiční řetězec. |

## Jak se použije

Vybraný typ čáry se použije na každý objekt vytvořený po změně. Nemění zpětně existující objekty.

Chcete-li změnit typ čáry existujících objektů, vyberte je a upravte pole **Linetype** v panelu vlastností, nebo použijte [MatchProperties](../../commands/match-properties/) ke zkopírování z jiného objektu.

## Měřítko typu čáry

Každý objekt má také vlastnost **Linetype Scale** (výchozí `1`). Vzor čáry se tímto činitelem násobí. Hodnota `2` udělá čárky dvakrát delší; `0.5` poloviční. Upravte ji v panelu vlastností po výběru objektu.

## Dostupné typy čar

Rozbalovací nabídka vypisuje pouze typy čar přítomné v aktuálně načteném souboru DXF. Čerstvě vytvořený soubor obsahuje pouze `ByLayer`, `ByBlock` a `Continuous`. Když importujete DXF, všechny typy čar definované v tabulce `$LTYPE` souboru se stanou dostupnými.

Pokud potřebujete konkrétní typ čáry (např. `DASHED2`), který v seznamu není, importujte soubor DXF, který jej obsahuje — typ čáry se pak objeví ve výběru pro aktuální relaci.

## Kompatibilita s DXF

Názvy typů čar se ukládají jako řetězce v záznamech objektů. `ByLayer` a `ByBlock` jsou standardní zástupné hodnoty DXF. Všechny pojmenované typy čar a jejich vzory čárkování se při exportu zachovávají přesně a přenášejí se beze ztráty v LibreCAD, FreeCAD a dalších aplikacích kompatibilních s DXF.
