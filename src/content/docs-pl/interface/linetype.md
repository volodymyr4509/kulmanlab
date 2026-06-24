---
sidebar_position: 2
title: Selektor typów linii — Kontrolowanie wzorców przerywanych w KulmanLab CAD
description: Selektor typów linii na pasku narzędzi KulmanLab CAD ustawia wzorzec przerywany stosowany do wszystkich nowo rysowanych elementów. Obsługuje wszystkie typy linii załadowane z bieżącego pliku DXF oraz wbudowane opcje ByLayer, ByBlock i Ciągły.
keywords: [typ linii CAD, wzorzec przerywany, linia przerywana, typ linii DXF, typ linii ByLayer, kulmanlab]
---

# Typ linii

Chip **typ linii** na pasku narzędzi kontroluje wzorzec przerywany przypisany do każdego nowego elementu, który rysujesz. Kliknij go, aby otworzyć listę rozwijaną selektora.

## Opcje

| Wartość | Znaczenie |
|---------|-----------|
| **Z warstwy** | Element dziedziczy typ linii zdefiniowany na swojej warstwie. Wyświetlany jako `ByLayer` w DXF. |
| **ByBlock** | Element dziedziczy typ linii bloku, do którego należy. Nie ma widocznego efektu poza blokiem. |
| **Ciągły** | Ciągła nieprzerwana linia — bez wzorca przerywanego. |
| **Nazwane typy linii** | Dowolny typ linii załadowany z bieżącego pliku DXF (np. `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, ...). Lista rozwijana pokazuje podgląd na żywo każdego wzorca i jego ciąg definicji. |

## Jak ma zastosowanie

Wybrany typ linii jest stosowany do każdego elementu utworzonego po zmianie. Nie wpływa retroaktywnie na istniejące elementy.

Aby zmienić typ linii istniejących elementów, zaznacz je i edytuj pole **Typ linii** w panelu właściwości, lub użyj [DopasujWłaściwości](../commands/match-properties), aby skopiować go z innego elementu.

## Skala typu linii

Każdy element ma również właściwość **Skala typu linii** (domyślna `1`). Wzorzec przerywany jest mnożony przez ten współczynnik. Wartość `2` wydłuża kreski dwa razy; `0.5` skraca je o połowę. Edytuj ją w panelu właściwości po zaznaczeniu elementu.

## Dostępne typy linii

Lista rozwijana zawiera tylko typy linii obecne w aktualnie załadowanym pliku DXF. Świeżo utworzony plik zawiera tylko `ByLayer`, `ByBlock` i `Ciągły`. Po zaimportowaniu DXF, wszystkie typy linii zdefiniowane w tabeli `$LTYPE` pliku stają się dostępne.

Jeśli potrzebujesz określonego typu linii (np. `DASHED2`), którego nie ma na liście, zaimportuj plik DXF, który go zawiera — typ linii pojawi się wtedy w selektorze dla bieżącej sesji.

## Zgodność z DXF

Nazwy typów linii są przechowywane jako ciągi w rekordach elementów. `ByLayer` i `ByBlock` to standardowe wartości strażnicze DXF. Wszystkie nazwane typy linii i ich wzorce przerywane są zachowywane dokładnie przy eksporcie i zachowują pełną wierność przy zapisie i odczycie w LibreCAD, FreeCAD i innych aplikacjach zgodnych z DXF.
