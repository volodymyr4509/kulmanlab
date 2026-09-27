---
title: Polecenie StylOdniesienia — Zarządzanie stylami linii odniesienia
description: Twórz style linii odniesienia CAD z grotem, przyleganiem, odstępem, obrotem, czcionką, wysokością i ramką.
keywords: [styl linii odniesienia CAD, styl wieloodnośnika, MLEADERSTYLE, grot strzałki CAD, przyleganie tekstu, styl DXF, kulmanlab]
group: style
order: 7
---

# LeaderStyle

Polecenie `StylOdniesienia` otwiera menedżer nazwanych stylów linii odniesienia. Każdy nowy [Odnośnik](../leader/) kopiuje ustawienia stylu *bieżącego* w chwili utworzenia.

## Edycja stylu

Wpisz `StylOdniesienia` albo kliknij **Styl linii odniesienia** w panelu opisu. ✓ oznacza styl bieżący, a ołówek obok nazwy umożliwia jej zmianę. Podgląd odświeża się natychmiast przy użyciu tego samego mechanizmu renderowania co rysunek.

| Pole | Działanie |
|---|---|
| Przyleganie tekstu | Góra, Środek, Dół lub Podkreślenie |
| Grot / Rozmiar strzałki | Symbol i rozmiar na końcu każdego ramienia |
| Odstęp półki | Przerwa między półką a tekstem |
| Obrót tekstu | Kąt etykiety w stopniach |
| Styl tekstu | Jednorazowo kopiuje czcionkę, wysokość, pogrubienie i kursywę z [TextStyle](../text-style/) |
| Czcionka / Wysokość tekstu | Krój pisma i wysokość etykiety |
| Pogrubienie / Kursywa | Niezależne formatowanie tekstu |
| Tekst w ramce | Prostokątna ramka wokół etykiety |

**Nowy** powiela zaznaczony styl. Stylu `Standard` nie można zmienić ani usunąć; nie można też usunąć stylu bieżącego. **Ustaw bieżący** wpływa tylko na odnośniki tworzone później — istniejące obiekty się nie zmieniają. Pusta, powtórzona lub nieprawidłowa w DXF nazwa blokuje **OK**. Zaimportowane style opisowe są ukryte, ale zachowane.

## Zapisywanie i DXF

**OK** stosuje wszystkie zmiany, a **Zamknij** lub `Escape` je odrzuca. KulmanLab odczytuje i zapisuje rekordy `MLEADERSTYLE`. Nazwa, grot i rozmiar strzałki, odstęp, wysokość, przyleganie, ramka i flaga opisowa są zapisywane jako pola stylu. Obrót, czcionka, pogrubienie i kursywa to wartości domyślne KulmanLab kopiowane do odnośnika podczas tworzenia.

Zobacz też [Leader](../leader/), [LeaderAdd](../leader-add/) i [LeaderRemove](../leader-remove/).
