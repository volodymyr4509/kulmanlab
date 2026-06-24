---
sidebar_position: 3
title: Selektor grubości linii — Kontrolowanie szerokości pociągnięcia w KulmanLab CAD
description: Selektor grubości linii na pasku narzędzi KulmanLab CAD ustawia szerokość pociągnięcia stosowaną do wszystkich nowo rysowanych elementów. Obsługuje standardowe wartości grubości linii DXF od 0,00 mm do 2,11 mm oraz tryby ByLayer i Domyślny.
keywords: [grubość linii CAD, szerokość pociągnięcia, szerokość linii, grubość linii DXF, grubość linii ByLayer, kulmanlab]
---

# Grubość linii

Chip **grubość linii** na pasku narzędzi kontroluje szerokość pociągnięcia przypisaną do każdego nowego elementu, który rysujesz. Kliknij go, aby otworzyć listę rozwijaną selektora.

## Opcje

| Wartość | Znaczenie |
|---------|-----------|
| **Z warstwy** | Element dziedziczy grubość linii zdefiniowaną na swojej warstwie. Rzeczywista wyświetlana szerokość zależy od ustawienia warstwy. |
| **Domyślna** | Używa domyślnej szerokości aplikacji — renderowana jako cienka linia (1 px). Nie nadpisuje ustawienia warstwy w DXF. |
| **0,00 mm – 2,11 mm** | Jawna stała szerokość. Element niesie tę wartość niezależnie od grubości linii swojej warstwy. |

Dostępne są standardowe wartości grubości linii DXF: 0,00, 0,05, 0,09, 0,13, 0,15, 0,18, 0,20, 0,25, 0,30, 0,35, 0,40, 0,50, 0,53, 0,60, 0,70, 0,80, 0,90, 1,00, 1,06, 1,20, 1,40, 1,58, 2,00 i 2,11 mm.

## Jak ma zastosowanie

Wybrana grubość linii jest stosowana do każdego elementu utworzonego po zmianie. Nie wpływa retroaktywnie na istniejące elementy.

Aby zmienić grubość linii istniejących elementów, zaznacz je i edytuj pole **Grubość linii** w panelu właściwości, lub użyj [DopasujWłaściwości](../commands/match-properties), aby skopiować ją z innego elementu.

## Renderowanie

Grubości linii są renderowane przy skali **3,78 px na mm** (96 dpi). Linia 0,25 mm ma szerokość około 1 px na ekranie; linia 1,00 mm ma szerokość około 4 px. Bardzo cienkie wartości (0,00 mm i ujemne) są zawsze renderowane jako co najmniej 0,5 px, aby pozostały widoczne przy dowolnym powiększeniu.

## Zgodność z DXF

Wartości grubości linii są przechowywane jako liczby całkowite w setnych milimetra (np. 25 = 0,25 mm) w rekordach DXF `LWPOLYLINE`, `LINE`, `CIRCLE` i innych elementów. **Z warstwy** jest przechowywana jako `-1`, a **Domyślna** jako `-3`, zgodnie ze specyfikacją DXF. Pliki zachowują pełną wierność przy zapisie i odczycie w każdej aplikacji zgodnej z DXF.
