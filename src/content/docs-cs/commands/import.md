---
title: Import — otevření souborů DXF nebo JSON v KulmanLab CAD
description: Pomocí příkazu Import otevřete soubory DXF nebo JSON KulmanLab v KulmanLab CAD. Podporuje úsečky, kružnice, oblouky, polyline, splajny, text, kóty a odkazové čáry.
keywords: [import souboru DXF, otevření DXF v prohlížeči, import CAD souboru online, otevření souboru DXF, prohlížeč DXF v prohlížeči, import JSON CAD, import KulmanLab, bezplatný CAD prohlížeč DXF, načtení výkresu, DXF do prohlížeče]
group: file
order: 1
---

# Import

Příkaz **Import** načte existující výkres z vašeho místního souborového systému do KulmanLab CAD. Podporován je jak standardní formát **DXF**, tak vlastní formát **JSON** KulmanLab.

## Jak importovat soubor

1. Klikněte na tlačítko **Import** (ikona složky) v panelu souborů v horní části obrazovky.
2. Otevře se dialog pro výběr souboru ve vašem prohlížeči. Přejděte k souboru s výkresem a vyberte jej.
3. Výkres se okamžitě načte na plátno. Zobrazení se automaticky přizpůsobí všem objektům.

Případně můžete soubor přetáhnout přímo na plátno.

## Podporované formáty souborů

| Formát | Přípona | Kdy použít |
|--------|---------|------------|
| **DXF** | `.dxf` | Výkresy z FreeCAD, LibreCAD nebo jiných CAD nástrojů |
| **JSON** *(nativní)* | `.json` | Výkresy dříve uložené z KulmanLab CAD — bez ztráty informací |

## Co se importuje z DXF

KulmanLab zpracovává následující typy objektů DXF:

| Typ objektu | Kód DXF | Poznámky |
|-------------|---------|----------|
| Line | `LINE` | |
| Circle | `CIRCLE` | |
| Arc | `ARC` | |
| Ellipse | `ELLIPSE` | |
| Polyline | `LWPOLYLINE` | |
| Spline | `SPLINE` | |
| Text | `TEXT`, `MTEXT` | |
| Dimension | `DIMENSION` | |
| Multileader | `MULTILEADER` | |
| Hatch | `HATCH` | Načte se název vzoru, měřítko a úhel; název, který není ve vaší knihovně vzorů, se vrátí k ANSI31. Viz [Hatch](../hatch/) |

Definice vrstev a tabulky typů čar se z souboru DXF rovněž importují, pokud jsou přítomny.

Objekty, které používají nepodporované typy DXF, se tiše přeskočí — zbytek výkresu se přesto načte.

## Pojmenování souborů a úložiště

Importovaný soubor si ponechá svůj původní název. Pokud je tento název už použit jiným uloženým výkresem, automaticky se připojí přípona ve stylu Finderu/Průzkumníka (`myplan (2)`, `myplan (3)`, …), aby se stávající položka nikdy nepřepsala. Soubor můžete poté přejmenovat ve [File Manageru](../file-manager/#přejmenování-souboru).

Výkres se po importu automaticky uloží do úložiště prohlížeče (IndexedDB), takže se objeví v panelu [File Manager](../file-manager/) a přežije obnovení stránky.

## Co se stane s aktuálním výkresem

Import nahradí aktuální plátno. Neexistuje slučování ani připojování. Pokud máte neuložené změny, nejprve aktuální výkres [exportujte](../export-manager/).

## Při spuštění

KulmanLab při načtení stránky automaticky znovu otevře naposledy upravený soubor. Pokud neexistují žádné uložené soubory, načte se výchozí ukázkový výkres.

## Řešení potíží

| Problém | Pravděpodobná příčina | Řešení |
|---------|----------------------|--------|
| Plátno je po importu prázdné | Objekty DXF používají nepodporované typy (např. INSERT) | Objekty byly přeskočeny — v terminálu zkontrolujte zprávu „no entities found" |
| Tlačítko Import nic nedělá | Prohlížeč zablokoval dialog výběru souboru | Klikněte na tlačítko ještě jednou; některé prohlížeče vyžadují novou akci uživatele |
| Kóty vypadají špatně | DXF z nástroje, který zapisuje nestandardní geometrii kót | Znovu exportujte ze zdrojové aplikace v aktuální verzi DXF |

## Související příkazy

- [Export Manager](../export-manager/) — stažení aktuálního výkresu jako DXF nebo JSON
- [File Manager](../file-manager/) — procházení a obnovení výkresů uložených v prohlížeči
- [New File](../new-file/) — zahájení prázdného výkresu
