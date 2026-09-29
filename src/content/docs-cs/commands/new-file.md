---
title: New File — zahájení prázdného výkresu v KulmanLab CAD
description: Příkaz New File vymaže plátno a otevře nový prázdný výkres. Prostý název souboru se vygeneruje automaticky a uloží do úložiště prohlížeče.
keywords: [nový CAD soubor, nový výkres, prázdné plátno CAD, vytvoření nového výkresu online, začít nový DXF, KulmanLab nový soubor, reset plátna, vymazání výkresu]
group: file
order: 2
---

# New File

Příkaz **New File** vymaže plátno a zahájí nový prázdný výkres. Jedinečný název souboru se vygeneruje automaticky.

## Jak vytvořit nový soubor

Klikněte na tlačítko **New File** (ikona nové stránky) v panelu souborů. Plátno se okamžitě vymaže — bez výzev a potvrzovacích dialogů.

## Co nový soubor obsahuje

Čerstvě vytvořený soubor začíná s:

- **Žádnými objekty** na plátně.
- **Jednou výchozí hladinou** s názvem `0`, s bílou barvou a typem čáry `Continuous`.
- **Vygenerovaným názvem souboru**, `kulman.dxf` — nebo `kulman (2).dxf`, `kulman (3).dxf`, …, pokud je tento název už obsazený.

Soubor se automaticky uloží do úložiště prohlížeče, objeví se ve [File Manageru](../file-manager/) a lze jej kdykoli [přejmenovat](../file-manager/#přejmenování-souboru).

## Varování — neuložená práce se zahodí

Kliknutí na **New File** zahodí všechny objekty na aktuálním plátně bez varování. Chcete-li aktuální výkres zachovat, nejprve jej [exportujte](../export-manager/).

## Kdy použít New File a kdy Import

| Situace | Doporučená akce |
|---------|-----------------|
| Zahájení výkresu od nuly | **New File** |
| Otevření existujícího souboru DXF nebo JSON | [Import](../import/) |
| Kopírování výkresu pro práci na variantě | [Export Manager](../export-manager/) aktuálního souboru, poté [Import](../import/) kopie |

## Související příkazy

- [Import](../import/) — otevření existujícího výkresu DXF nebo JSON
- [Export Manager](../export-manager/) — stažení výkresu před zahájením nového
- [File Manager](../file-manager/) — obnovení předchozího výkresu z úložiště prohlížeče
