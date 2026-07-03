---
sidebar_position: 3
title: Polecenie Prostokąt — Rysowanie prostokątów wyrównanych do osi w KulmanLab CAD
description: Polecenie Prostokąt tworzy prostokąt wyrównany do osi z dwóch przeciwnych narożników. Wynikiem jest zamknięty element LWPOLYLINE z czterema wierzchołkami — identyczny z każdą inną polilinią po umieszczeniu, więc każde polecenie edycji polilinii ma do niego zastosowanie.
keywords: [polecenie prostokąta CAD, rysowanie prostokąta CAD, prostokąt wyrównany do osi, zamknięta polilinia CAD, LWPOLYLINE DXF, edycja uchwytu prostokąta, kulmanlab]
---

# Prostokąt

Polecenie `rectangle` rysuje prostokąt wyrównany do osi, zdefiniowany przez dwa kliknięcia przeciwnych narożników. Wynik jest przechowywany jako **zamknięty element `LWPOLYLINE`** z czterema wierzchołkami — po jednym w każdym narożniku. Nie ma dedykowanego typu elementu prostokąt: po utworzeniu kształt zachowuje się dokładnie jak każda inna [Polilinia](../polyline/) i każda edycja polilinii ma do niego zastosowanie.

## Rysowanie prostokąta

1. Wpisz `rectangle` w terminalu lub kliknij przycisk **Prostokąt** na pasku narzędzi.
2. **Kliknij pierwszy narożnik** lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
3. **Kliknij przeciwny narożnik** — prostokąt jest natychmiast umieszczany i polecenie kończy się. Tutaj również działa wprowadzanie współrzędnych.

```
  ● (pierwsze kliknięcie)────────────┐
  |                                  |
  |   podgląd na żywo podąża         |
  |   za kursorem po kroku 2         |
  └──────────────────────────────────● (drugie kliknięcie)
```

Dwa kliknięcia mogą być dowolną parą diagonalnie przeciwnych narożników — lewy górny + prawy dolny, lub lewy dolny + prawy górny itp. Kolejność nie ma znaczenia.

## Wprowadzanie współrzędnych

Na każdym kroku narożnika możesz wpisać dokładną pozycję:

1. Wpisz wartość X.
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby umieścić narożnik.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Enter` | Potwierdź wpisaną współrzędną |
| `Escape` | Anuluj |

Boki są zawsze poziome i pionowe — nie ma blokowania kąta dla polecenia prostokąt.

## Edycja uchwytów — przekształcanie po utworzeniu

Zaznaczony prostokąt pokazuje uchwyty w każdym wierzchołku i w punkcie środkowym każdego boku:

| Uchwyt | Pozycja | Co robi |
|--------|---------|---------|
| **Narożnik** | Każdy z 4 wierzchołków | Przeciągnij, aby przesunąć ten wierzchołek; dwa sąsiednie boki rozciągają się za nim — przeciwny narożnik pozostaje nieruchomy |
| **Punkt środkowy boku** | Środek każdego z 4 boków | Przeciągnij, aby translować oba punkty końcowe tego boku razem, zachowując długość i kąt boku |

Przeciąganie uchwytu narożnika zamienia prostokąt w nieortogonalny czworokąt. Jeśli potrzebujesz tylko prostokąta o innym rozmiarze, przeciągnij narożnik zachowując boki mniej więcej ortogonalne, lub usuń go i narysuj nowy.

## Zaznaczanie prostokątów

Ponieważ prostokąt jest polilinią, zaznaczanie działa w ten sam sposób:

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Zaznacza, jeśli kliknięcie trafia na dowolny z czterech boków |
| **Przeciągnij w prawo** (ścisłe) | Wszystkie cztery wierzchołki muszą mieścić się wewnątrz ramki zaznaczenia |
| **Przeciągnij w lewo** (przecinające) | Dowolny bok przecinający granicę ramki zaznacza cały prostokąt |

## Obsługiwane polecenia edycji

Wszystkie polecenia edycji polilinii mają zastosowanie. Przytnij i Przedłuż dotyczą tylko [Linii](../line/) i nie działają na prostokątach:

| Polecenie | Co dzieje się z prostokątem |
|-----------|-----------------------------|
| [Przesuń](../move/) | Translacja wszystkich czterech wierzchołków o to samo przesunięcie |
| [Kopiuj](../copy/) | Tworzy identyczny prostokąt w nowej pozycji |
| [Obróć](../rotate/) | Obraca wszystkie cztery wierzchołki wokół wybranego punktu bazowego |
| [Odbij](../mirror/) | Odbija wszystkie cztery wierzchołki przez oś odbicia |
| [Skaluj](../scale/) | Skaluje wszystkie cztery wierzchołki równomiernie od punktu bazowego |
| [Odsunięcie](../offset/) | Tworzy równoległy (wewnętrzny lub zewnętrzny) prostokąt w stałej odległości |
| [Usuń](../delete/) | Usuwa prostokąt z rysunku |

## Właściwości

Gdy prostokąt jest zaznaczony, panel właściwości pokazuje te same pola co każda polilinia:

**Ogólne**

| Właściwość | Domyślna | Znaczenie |
|------------|----------|-----------|
| Kolor | 256 (ByLayer) | Indeks koloru ACI |
| Warstwa | `0` | Przypisanie warstwy |
| Typ linii | ByLayer | Wzór nazwanego typu linii |
| Skala typu linii | 1 | Współczynnik skali wzoru typu linii |
| Grubość | 0 | Grubość wyciągnięcia |

**Geometria**

| Właściwość | Znaczenie |
|------------|-----------|
| Zamknięty | Zawsze `prawda` dla prostokąta |
| Liczba wierzchołków | Zawsze `4` dla niemodyfikowanego prostokąta |
| Wierzchołki | Współrzędne wszystkich czterech narożników |

## Prostokąt a Polilinia a Linia

| | Prostokąt | Polilinia | Linia |
|---|-----------|---------|------|
| Jak rysować | 2 kliknięcia (narożniki) | Kliknij każdy wierzchołek | Kliknij każdy punkt końcowy |
| Typ elementu | Zamknięty `LWPOLYLINE` | Otwarty lub zamknięty `LWPOLYLINE` | `LINE` na segment |
| Boki zawsze ortogonalne | Tak (przy tworzeniu) | Nie | Nie |
| Przytnij / Przedłuż | Nie | Nie | Tak |
| Najlepsze do | Pola, ramki, prostokątne obszary | Dowolne kontury i ścieżki | Pojedyncze segmenty, linie pomocnicze |

## DXF — element LWPOLYLINE

Prostokąty zapisywane są jako zamknięte elementy `LWPOLYLINE` z czterema wierzchołkami. Wszystkie właściwości — współrzędne wierzchołków, kolor, warstwa, typ linii, skala typu linii i grubość — zachowywane są bez utraty danych.

W DXF nie ma dedykowanego typu `RECTANGLE`. Gdy plik jest ponownie otwierany, kształt pojawia się jako zamknięta polilinia z czterema wierzchołkami, a nie jako prostokąt. Każdy podgląd lub edytor DXF obsługujący `LWPOLYLINE` (LibreCAD, FreeCAD itp.) wyświetli go poprawnie.
