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
| Nazwa | Unikatowa nazwa; nazwy `Standard` nie można zmienić |
| Czcionka / Wysokość | Krój pisma i stała wysokość; `0` = ustalana dla tekstu |
| Pogrubienie / Kursywa | Niezależne opcje formatowania |
| Interlinia | Odstęp między wierszami |
| Wyrównanie poziome | Do lewej, do środka, do prawej lub wyjustowane |
| Ramka | Prostokątna ramka wokół nowych tekstów |

**Nowy** powiela zaznaczony styl. **Usuń** nie usuwa stylu `Standard` ani stylu bieżącego. **Ustaw jako bieżący** wpływa tylko na teksty tworzone później; istniejące teksty się nie zmieniają. Pusta, powtórzona lub nieprawidłowa w DXF nazwa blokuje **OK**. Zaimportowane style opisowe są ukryte, ale ich dane pozostają zachowane.

## Zapisywanie i DXF

**OK** zapisuje zmiany, a **Zamknij** lub `Escape` je odrzuca. Klawisze `↑` i `↓` służą do poruszania się po liście. Nazwa, pliki czcionek, wysokość, pogrubienie, kursywa i flaga opisowa należą do stylu DXF. Ramka, interlinia i wyrównanie są w KulmanLab wartościami domyślnymi dla pojedynczego tekstu, a nie polami tabeli STYLE.

Zobacz też [Text](../text/), [FontManager](../font-manager/) i [MatchProperties](../match-properties/).
