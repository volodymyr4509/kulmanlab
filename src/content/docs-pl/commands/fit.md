---
title: Polecenie Fit — Kadrowanie wszystkich elementów w widoku jednym kliknięciem w KulmanLab CAD
description: Polecenie Fit oblicza prostokąt ograniczający wszystkich elementów i dostosowuje powiększenie i panoramowanie, aby każdy element był widoczny z niewielkim marginesem. Dwukrotne kliknięcie środkowym przyciskiem myszy uruchamia Dopasuj bez aktywowania polecenia.
keywords: [CAD dopasuj widok, powiększ do dopasowania, kadruj wszystkie elementy, polecenie dopasuj CAD, powiększenie prostokąta ograniczającego, kulmanlab]
group: navigate
order: 4
---

# Fit

Polecenie `fit` oblicza prostokąt ograniczający wszystkich elementów w rysunku i dostosowuje zarówno poziom powiększenia, jak i pozycję panoramowania, aby każdy element był widoczny z niewielkim marginesem. Jest to najszybszy sposób na odzyskanie utraconego widoku lub zorientowanie się po zaimportowaniu pliku DXF.

## Dopasowywanie widoku

Kliknij przycisk **Dopasuj** na pasku narzędzi lub wpisz `fit` w terminalu. Widok dostosowuje się natychmiast i polecenie kończy się — żadna interakcja nie jest wymagana.

**Dwukrotne kliknięcie środkowym przyciskiem myszy** wyzwala tę samą operację Dopasuj w dowolnym momencie bez aktywowania żadnego polecenia — najszybszy skrót do resetowania utraconego widoku w trakcie rysowania.

## Jak działa dopasowanie prostokąta ograniczającego

1. Dopasuj znajduje wyrównany do osi prostokąt ograniczający zawierający wszystkie elementy (min X, max X, min Y, max Y).
2. Poziom powiększenia jest ustawiany tak, aby wyższy lub szerszy wymiar wypełniał płótno z marginesem.
3. Widok jest wyśrodkowany na punkcie środkowym prostokąta ograniczającego.

| Stan rysunku | Wynik |
|--------------|--------|
| Szerszy niż wyższy | Powiększenie ograniczone szerokością |
| Wyższy niż szeroki | Powiększenie ograniczone wysokością |
| Pojedynczy element | Dopasowuje się do tego właśnie elementu |
| Pusty rysunek | Widok nie zmienia się |

## Dopasuj a ręczne sterowanie powiększeniem

| | Dopasuj | Powiększ / Pomniejsz | Kółko myszy |
|---|-----|--------------------|-------------|
| Centruje na | Wszystkich elementach | Środku widoku | Kursorze |
| Rozmiar kroku | Automatyczny (jednorazowy) | 1,5× na krok | ~1,1× na krok |
| Najlepsze do | Odzyskiwanie utraconego widoku, orientacja po imporcie | Stopniowe wchodzenie/wychodzenie ze środka | Precyzyjne powiększenie skierowane na kursor |

## Skróty klawiaturowe

Dla tego polecenia nie ma skrótu klawiaturowego. Zamiast tego użyj skrótu **dwukrotnego kliknięcia środkowym przyciskiem myszy**.

## Powiązane polecenia widoku

| Polecenie | Co robi |
|-----------|---------|
| [Pan](../pan/) | Przesuwa widok bez powiększania |
| [Zoom In](../zoom-in/) | Mnoży powiększenie o 1,5× na krok |
| [Zoom Out](../zoom-out/) | Dzieli powiększenie o 1,5× na krok |
