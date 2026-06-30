---
sidebar_position: 13
title: Polecenie Wymiar liniowy — Wymiary poziome i pionowe w KulmanLab CAD
description: Polecenie Wymiar liniowy mierzy poziomą lub pionową odległość między dwoma punktami. Linia wymiarowa jest zawsze wyrównana do osi — naciśnij H lub V, aby zablokować orientację, lub pozwól pozycji kursora decydować automatycznie. Pełna obsługa zapisu i odczytu DXF jako elementy DIMENSION.
keywords: [wymiar liniowy CAD, wymiar poziomy CAD, wymiar pionowy CAD, dimlinear, blokowanie orientacji H V, odsunięcie wymiaru, kulmanlab]
---

# Wymiar liniowy

Polecenie `dimlinear` umieszcza wymiar poziomy lub pionowy między dwoma punktami początku linii przedłużenia. Linia wymiarowa przebiega zawsze idealnie poziomo lub idealnie pionowo — nie można jej umieścić pod dowolnym kątem. Użyj [Wymiaru wyrównanego](./dim-aligned), gdy potrzebujesz wymiaru równoległego do ukośnej linii.

## Anatomia wymiaru liniowego

```
  |←————— 5.00 —————→|
  |                   |
  ●  (linia przedłużenia 1)     ●  (linia przedłużenia 2)
  p1                  p2
```

- **Linie przedłużenia** — opadają od każdego mierzonego punktu prostopadle do linii wymiarowej.
- **Linia wymiarowa** — pozioma (mierzy odległość X) lub pionowa (mierzy odległość Y).
- **Wartość** — odległość rzutowana wzdłuż wybranej osi, nie rzeczywista odległość punkt-punkt.

## Umieszczanie wymiaru liniowego

1. Wpisz `dimlinear` w terminalu lub kliknij przycisk **Wymiar liniowy** na pasku narzędzi.
2. **Kliknij pierwszy punkt linii przedłużenia** (p1) lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
3. **Kliknij drugi punkt linii przedłużenia** (p2). Tutaj również działa wprowadzanie współrzędnych.
4. **Przesuń kursor**, aby ustawić linię wymiarową. Orientacja jest wykrywana automatycznie na podstawie pozycji kursora.
5. **Kliknij**, aby umieścić, lub wpisz odległość odsunięcia i naciśnij **Enter** dla precyzyjnego umieszczenia.

## Automatyczne wykrywanie orientacji

Gdy orientacja nie jest wymuszona, polecenie odczytuje pozycję kursora względem dwóch mierzonych punktów:

| Pozycja kursora | Wykryta orientacja | Co jest mierzone |
|-----------------|---------------------|-----------------|
| Powyżej lub poniżej punktów | Pozioma | Δ X między p1 i p2 |
| Po lewej lub prawej stronie punktów | Pionowa | Δ Y między p1 i p2 |

Naciśnij **H**, aby zablokować poziomą, lub **V**, aby zablokować pionową w dowolnym momencie podczas fazy umieszczania. Po zablokowaniu orientacja nie zmienia się podczas przesuwania kursora.

## Wpisywanie odległości odsunięcia

Wpisz liczbę podczas umieszczania, aby zablokować linię wymiarową w dokładnej odległości od mierzonych punktów:

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.` | Dodaj cyfrę do odległości odsunięcia |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` / `Spacja` | Umieść przy wpisanej odległości |

Strona kursora (powyżej/poniżej dla poziomej, lewo/prawo dla pionowej) określa znak — linia wymiarowa pojawia się po stronie, po której aktualnie znajduje się kursor.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X (fazy p1/p2) lub odległość odsunięcia (faza umieszczania) |
| `,` | Zablokuj X i przejdź do wprowadzania Y (fazy p1/p2) |
| `H` | Zablokuj orientację poziomą (tylko faza umieszczania) |
| `V` | Zablokuj orientację pionową (tylko faza umieszczania) |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` / `Spacja` | Potwierdź wpisaną współrzędną lub odsunięcie |
| `Escape` | Anuluj |

## Wymiar liniowy a Wymiar wyrównany

| | Wymiar liniowy | Wymiar wyrównany |
|---|-----------------|------------------|
| Oś | Zawsze H lub V | Równoległy do mierzonej linii |
| Mierzy | Tylko składową X lub Y | Rzeczywistą odległość euklidesową |
| Klawisze H/V | Tak — blokują orientację | Nie — zawsze podąża za p1→p2 |
| Najlepsze do | Układy ortogonalne, plany pięter | Cechy ukośne, nacięcia pod kątem |

## Edytowanie etykiety — tryb simple

**Dwukrotnie kliknij** umieszczony wymiar liniowy, aby otworzyć edytor tekstu w trybie **simple**. Edytor jest wstępnie wypełniony bieżącą wyrenderowaną wartością, dzięki czemu możesz ustawić kursor i edytować ją bezpośrednio.

| Funkcja | Zachowanie |
|---------|-----------|
| Bold / Italic / Font / Height | Stosowane do **całej** etykiety naraz |
| Formatowanie poszczególnych znaków | Nieobsługiwane |
| `Enter` | Zatwierdza wartość i zamyka edytor |
| Wieloliniowość | Nieobsługiwana |

Zobacz [Edytor tekstu — tryb simple](../interface/text-editor#simple-mode) w celu uzyskania pełnej dokumentacji.

## Łączenie wymiarów

Aby dodać więcej wymiarów kontynuowanych od ostatniej linii przedłużenia, użyj [Wymiaru kontynuowanego](./dim-continue) bezpośrednio po umieszczeniu tego.

## DXF — element DIMENSION

Wymiary liniowe zapisywane są jako elementy `DIMENSION` z `rotationDeg` ustawionym na `0` (poziomy) lub `90` (pionowy). Punkty początku linii przedłużenia, pozycja linii wymiarowej, pozycja tekstu, zmierzona wartość, styl strzałki, wysokość tekstu i wszystkie flagi wyświetlania zachowywane są bez utraty danych.
