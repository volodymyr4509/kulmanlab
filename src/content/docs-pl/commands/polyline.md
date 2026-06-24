---
sidebar_position: 2
title: Polecenie Polilinia — Rysowanie wielosegmentowych ścieżek jako pojedynczego elementu w KulmanLab CAD
description: Polecenie Polilinia rysuje dowolną liczbę połączonych segmentów przechowywanych jako jeden element LWPOLYLINE. Uchwyty wierzchołków i punktów środkowych segmentów pozwalają przekształcać dowolną część ścieżki po utworzeniu. Obsługuje odsunięcie; nie obsługuje przycinania ani przedłużania.
keywords: [polecenie polilinii CAD, rysowanie polilinii CAD, wielosegmentowa ścieżka CAD, LWPOLYLINE DXF, przekształcanie polilinii, uchwyt wierzchołka CAD, odsunięcie polilinii, kulmanlab]
---

# Polilinia

Polecenie `polyline` rysuje połączoną ścieżkę z dowolnej liczby prostych segmentów, wszystkie przechowywane jako jeden element `LWPOLYLINE`. Ponieważ cała ścieżka jest jednym obiektem, zaznaczenie jej zaznacza każdy segment jednocześnie — przesuń, obróć lub skaluj cały kształt w jednej operacji. To kluczowe rozróżnienie od połączonych [Linii](./line), gdzie każdy segment jest niezależnym elementem.

Polilinie mogą być również **zamknięte**: polecenie [Prostokąt](./rectangle) używa tego samego elementu `LWPOLYLINE` z ustawioną flagą zamknięcia.

## Rysowanie polilinii

1. Wpisz `polyline` w terminalu lub kliknij przycisk **Polilinia** na pasku narzędzi.
2. **Kliknij pierwszy punkt** lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
3. **Kliknij każdy kolejny punkt** — każde kliknięcie dodaje segment. Wprowadzanie współrzędnych działa na każdym kroku.
4. Naciśnij **Enter** lub **Spację**, aby zakończyć (wymagane co najmniej 2 umieszczone punkty).

```
  ●──────●
  1szy   2gi
          \
           \  segment 3 (w toku — kursor tutaj)
            ●  ← kliknij, aby dodać, Enter/Spacja, aby zakończyć
```

Naciśnięcie **Escape** w dowolnym momencie odrzuca wszystkie umieszczone punkty i opuszcza polecenie.

## Wprowadzanie współrzędnych

Zamiast klikać, wpisz dokładną pozycję dla dowolnego wierzchołka:

1. Wpisz wartość X.
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby umieścić wierzchołek.

## Blokowanie kąta i dokładna długość segmentu

Ta sama logika przyciągania 45° co w poleceniu [Linia](./line#angle-locking-and-exact-length-input) stosuje się między dowolnymi dwoma kolejnymi punktami. Przy zablokowaniu do osi:

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.` | Dodaj cyfrę do długości segmentu |
| `-` | Ujemna długość — odwraca kierunek wzdłuż osi (tylko jako pierwszy znak) |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Umieść następny punkt przy wpisanej odległości |

Bieżąca skumulowana długość pojawia się w wierszu zachęty terminala w czasie rzeczywistym. Kliknięcie podczas blokowania rzutuje na oś, więc nowy wierzchołek trafia dokładnie na nią.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X lub długość segmentu przy zablokowanym kącie |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź wpisaną współrzędną lub długość, lub zakończ polilinię jeśli nic nie jest wpisane i istnieje ≥ 2 punkty |
| `Spacja` | Zakończ polilinię (tak samo jak Enter gdy nie ma aktywnego wejścia) |
| `Escape` | Odrzuć wszystkie punkty i wyjdź |

## Edycja uchwytów — wierzchołki i punkty środkowe segmentów

Zaznaczona polilinia pokazuje dwa typy uchwytów:

| Uchwyt | Pozycja | Co robi |
|--------|---------|---------|
| **Wierzchołek** | W każdym umieszczonym punkcie | Przeciągnij, aby zmienić położenie tego wierzchołka; wszystkie połączone segmenty rozciągają się za nim |
| **Punkt środkowy segmentu** | Środek każdego segmentu | Przeciągnij, aby translować **oba** punkty końcowe tego segmentu razem, zachowując długość i kąt segmentu |

Uchwyt punktu środkowego segmentu jest unikalny dla polilinii — pozwala przesuwać pojedynczy segment w bok bez zmiany jego długości. W przypadku [Linii](./line) uchwyt punktu środkowego zamiast tego aktywuje polecenie Przesuń dla całego elementu.

Nie ma uchwytu "przesuń całą polilinię". Aby przesunąć całą ścieżkę, użyj polecenia [Przesuń](./move).

## Zaznaczanie polilinii

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Zaznacza polilinię, jeśli kliknięcie trafia w odległości testu trafienia od dowolnego segmentu |
| **Przeciągnij w prawo** (ścisłe) | Wszystkie wierzchołki muszą mieścić się wewnątrz ramki |
| **Przeciągnij w lewo** (przecinające) | Dowolny segment przecinający granicę ramki zaznacza całą polilinię |

Ponieważ polilinia jest jednym elementem, zaznaczenie przecinające dotykające dowolnego segmentu zaznacza wszystkie segmenty.

## Obsługiwane polecenia edycji

Polilinie obsługują wszystkie ogólne transformacje i odsunięcie, ale **nie** przycinanie ani przedłużanie (te dotyczą tylko [Linii](./line)):

| Polecenie | Co dzieje się z polilinią |
|-----------|--------------------------|
| [Przesuń](./move) | Translacja wszystkich wierzchołków o to samo przesunięcie |
| [Kopiuj](./copy) | Tworzy identyczną polilinię w nowej pozycji |
| [Obróć](./rotate) | Obraca wszystkie wierzchołki wokół wybranego punktu bazowego |
| [Odbij](./mirror) | Odbija wszystkie wierzchołki przez oś odbicia |
| [Skaluj](./scale) | Skaluje wszystkie wierzchołki równomiernie od punktu bazowego |
| [Odsunięcie](./offset) | Tworzy równoległą polilinię w stałej prostopadłej odległości |
| [Usuń](./delete) | Usuwa polilinię z rysunku |

## Właściwości

Gdy polilinia jest zaznaczona, panel właściwości pokazuje:

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
| Zamknięty | Czy ostatni wierzchołek łączy się z powrotem do pierwszego |
| Liczba wierzchołków | Całkowita liczba wierzchołków |
| Wierzchołki | Lista współrzędnych wszystkich wierzchołków |

## Polilinia a Linia — kiedy której używać

| | Polilinia | Linia |
|---|---------|------|
| Liczba elementów | Jeden `LWPOLYLINE` dla całej ścieżki | Jeden `LINE` na segment |
| Kształt zamknięty | Tak (flaga zamknięcia) | Nie |
| Przytnij / Przedłuż | Nie | Tak — segment po segmencie |
| Uchwyt punktu środkowego segmentu | Translacja całego segmentu | Aktywuje Przesuń dla elementu |
| Najlepsze do | Kontury, zarysy, kształty zachowywane w całości | Linie pomocnicze, geometria do przycięcia |

## DXF — element LWPOLYLINE

Polilinie zapisywane są jako elementy `LWPOLYLINE` w pliku DXF. Wszystkie właściwości — współrzędne wierzchołków, flaga zamknięcia, kolor, warstwa, typ linii, skala typu linii i grubość — zachowywane są bez utraty danych. Prostokąty narysowane poleceniem [Prostokąt](./rectangle) są również zapisywane jako `LWPOLYLINE` (zamknięty, cztery wierzchołki) i są nieodróżnialne na poziomie DXF.

Elementy `LWPOLYLINE` z dowolnej aplikacji zgodnej z DXF (LibreCAD, FreeCAD itp.) są odczytywane z powrotem jako w pełni edytowalne polilinie w edytorze.
