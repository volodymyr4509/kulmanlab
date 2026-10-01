---
title: Polecenie StylTekstu — Zarządzanie stylami tekstu
description: Twórz style tekstu CAD z czcionką, wysokością, pogrubieniem, kursywą, interlinią, wyrównaniem i ramką.
keywords: [styl tekstu CAD, czcionka CAD, ramka tekstu, wyrównanie tekstu, styl DXF, kulmanlab]
group: style
order: 6
---

# TextStyle

Polecenie `StylTekstu` otwiera menedżer stylów. Pozwala tworzyć nazwane style, edytować ich wartości domyślne i wybrać styl *bieżący*. Każdy nowy [Tekst](../text/) kopiuje ustawienia bieżącego stylu w chwili utworzenia.

## Korzystanie z menedżera

Wpisz `StylTekstu` albo kliknij **Styl tekstu** w panelu opisu. Znak ✓ wskazuje styl bieżący; dwukrotne kliknięcie ustawia wybrany styl jako bieżący.

| Pole | Działanie |
|---|---|
| Zmiana nazwy | Użyj ołówka obok nazwy, aby edytować ją na liście; nazwy `Standard` nie można zmienić. |
| Czcionka / Wysokość | Krój pisma i wymagana dodatnia wysokość. Wartości zerowe lub ujemne są zmieniane na `1`; menedżer przyjmuje tylko wartości większe od `0`. |
| Pogrubienie / Kursywa | Niezależne opcje formatowania |
| Interlinia | Odstęp między wierszami |
| Wyrównanie poziome | Do lewej, do środka, do prawej lub wyjustowane |
| Ramka | Prostokątna ramka wokół nowych tekstów |

Podgląd używa tego samego mechanizmu co obszar rysunku i pokazuje dwa wiersze. Czcionka, wysokość, pogrubienie, kursywa, ramka, interlinia i wyrównanie są aktualizowane od razu; wskaźnik pokazuje skalę dopasowania. Nowe style są domyślnie wyrównane **do lewej**.

**Nowy** powiela zaznaczony styl. **Usuń** nie usuwa stylu `Standard` ani stylu bieżącego. **Ustaw jako bieżący** wpływa tylko na teksty tworzone później; istniejące teksty się nie zmieniają. Pusta, powtórzona lub nieprawidłowa w DXF nazwa blokuje **OK**. Zaimportowane style opisowe są ukryte, ale ich dane pozostają zachowane.

## Zapisywanie i DXF

Nazwa, pliki czcionek, pogrubienie, kursywa i flaga opisowa są zachowywane w stylach tekstu DXF. KulmanLab zapisuje grupę `40` STYLE jako `0` (wysokość zmienna), a ostatnią wysokość w grupie `42`; stała wysokość STYLE nie zastępuje własnej wysokości tekstu stylu wymiaru. Ramka, interlinia i wyrównanie poziome są ustawieniami KulmanLab dla tekstu, a nie polami tabeli STYLE DXF.
