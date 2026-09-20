---
title: Polyline — Wielosegmentowa ścieżka jako pojedynczy element
description: Polecenie Polyline rysuje dowolną liczbę połączonych segmentów przechowywanych jako jeden element LWPOLYLINE. Uchwyty wierzchołków i punktów środkowych segmentów pozwalają przekształcać dowolną część ścieżki po utworzeniu. Obsługuje odsunięcie; nie obsługuje przycinania ani przedłużania.
keywords: [polecenie polilinii CAD, rysowanie polilinii CAD, wielosegmentowa ścieżka CAD, LWPOLYLINE DXF, przekształcanie polilinii, uchwyt wierzchołka CAD, odsunięcie polilinii, kulmanlab]
group: shapes
order: 2
---

# Polyline

Polecenie `Polilinia` rysuje połączoną ścieżkę z dowolnej liczby prostych lub łukowych segmentów, wszystkie przechowywane jako jeden element `LWPOLYLINE`. Ponieważ cała ścieżka jest jednym obiektem, zaznaczenie jej zaznacza każdy segment jednocześnie — przesuń, obróć lub skaluj cały kształt w jednej operacji. To kluczowe rozróżnienie od połączonych [Line](../line/), gdzie każdy segment jest niezależnym elementem.

Polilinie mogą być również **zamknięte**: polecenie [Rectangle](../rectangle/) używa tego samego elementu `LWPOLYLINE` z ustawioną flagą zamknięcia.

## Rysowanie polilinii

1. Wpisz `Polilinia` w terminalu lub kliknij przycisk **Polilinia** na pasku narzędzi.
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

## Rysowanie segmentu łukowego

Naciśnij **A** w dowolnym momencie po pierwszym wierzchołku, aby przełączyć tryb Arc — ten sam wzorzec opcji wbudowanej, którego używa opcja Copy polecenia Rotate. Monit pokazuje bieżący stan jako `[Arc=true]` / `[Arc=false]`; ponowne naciśnięcie **A** przełącza go z powrotem, dzięki czemu proste i łukowe segmenty można swobodnie mieszać w jednej polilinii.

Gdy tryb Arc jest włączony, każdy nowy segment jest łukiem stycznej kontynuacji — zaczyna się stycznie do tego, co było bezpośrednio przed nim (kierunek poprzedniego segmentu prostego lub styczna końcowa poprzedniego łuku); sam pierwszy segment domyślnie kieruje się na wschód, ponieważ nie ma niczego, do czego mógłby być styczny.

## Wprowadzanie współrzędnych

Zamiast klikać, wpisz dokładną pozycję dla dowolnego wierzchołka:

1. Wpisz wartość X.
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby umieścić wierzchołek.

## Blokowanie kąta i dokładna długość segmentu

Ta sama logika przyciągania 45° co w poleceniu [Line](../line/#angle-locking-and-exact-length-input) stosuje się między dowolnymi dwoma kolejnymi punktami. Przy zablokowaniu do osi:

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
| `A` | Przełącz tryb Arc dla następnego segmentu (po pierwszym wierzchołku, bez trwającego wprowadzania) |
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

Uchwyt punktu środkowego segmentu jest unikalny dla polilinii — pozwala przesuwać pojedynczy segment w bok bez zmiany jego długości. W przypadku [Line](../line/) uchwyt punktu środkowego zamiast tego aktywuje polecenie Move dla całego elementu.

Nie ma uchwytu "przesuń całą polilinię". Aby przesunąć całą ścieżkę, użyj polecenia [Move](../move/).

## Zaznaczanie polilinii

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Zaznacza polilinię, jeśli kliknięcie trafia w odległości testu trafienia od dowolnego segmentu |
| **Przeciągnij w prawo** (ścisłe) | Wszystkie wierzchołki muszą mieścić się wewnątrz ramki |
| **Przeciągnij w lewo** (przecinające) | Dowolny segment przecinający granicę ramki zaznacza całą polilinię |

Ponieważ polilinia jest jednym elementem, zaznaczenie przecinające dotykające dowolnego segmentu zaznacza wszystkie segmenty.

## Obsługiwane polecenia edycji

Polilinie obsługują każdą ogólną transformację, a także odsunięcie, przycinanie, przedłużanie, zaokrąglanie i fazowanie (przy fazowaniu liczą się tylko proste segmenty):

| Polecenie | Co dzieje się z polilinią |
|-----------|--------------------------|
| [Move](../move/) | Translacja wszystkich wierzchołków o to samo przesunięcie |
| [Copy](../copy/) | Tworzy identyczną polilinię w nowej pozycji |
| [Rotate](../rotate/) | Obraca wszystkie wierzchołki wokół wybranego punktu bazowego |
| [Mirror](../mirror/) | Odbija wszystkie wierzchołki przez oś odbicia |
| [Scale](../scale/) | Skaluje wszystkie wierzchołki równomiernie od punktu bazowego |
| [Offset](../offset/) | Tworzy równoległą polilinię w stałej prostopadłej odległości |
| [Trim](../trim/) | Usuwa fragment między dwoma przecięciami, zarówno dla segmentów prostych, jak i łukowych |
| [Extend](../extend/) | Przedłuża pierwszy lub ostatni segment do kolejnej granicy |
| [Fillet](../fillet/) | Zaokrągla narożnik między dwoma **sąsiednimi** segmentami, prostymi lub łukowymi, łukiem stycznym wstawianym do polilinii jako nowy segment bulge |
| [Chamfer](../chamfer/) | Fazuje narożnik między dwoma sąsiednimi prostymi segmentami |
| [Explode](../explode/) | Rozbija polilinię na niezależne encje linii i łuku, po jednej na segment |
| [Delete](../delete/) | Usuwa polilinię z rysunku |

Zaokrąglanie segmentu polilinii względem czegoś innego niż jego własny sąsiedni segment nie pozostaje prostą edycją w miejscu — zobacz [Fillet](../fillet/), aby poznać wynik (połączenie w jedną nową polilinię, złączoną łukiem zaokrąglenia).

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
| Segmenty łukowe | Tak, na segment za pomocą przełącznika `Arc` | Nie — zakrzywiony segment wymaga osobnego elementu [Arc](../arc/) |
| Przytnij / Przedłuż | Tak | Tak — segment po segmencie |
| Uchwyt punktu środkowego segmentu | Translacja całego segmentu | Aktywuje Przesuń dla elementu |
| Najlepsze do | Kontury, zarysy, kształty zachowywane w całości | Linie pomocnicze, geometria do przycięcia |

## DXF — element LWPOLYLINE

Polilinie zapisywane są jako elementy `LWPOLYLINE` w pliku DXF. Wszystkie właściwości — współrzędne wierzchołków, flaga zamknięcia, kolor, warstwa, typ linii, skala typu linii i grubość — zachowywane są bez utraty danych. Prostokąty narysowane poleceniem [Rectangle](../rectangle/) są również zapisywane jako `LWPOLYLINE` (zamknięty, cztery wierzchołki) i są nieodróżnialne na poziomie DXF.

Elementy `LWPOLYLINE` z dowolnej aplikacji zgodnej z DXF (LibreCAD, FreeCAD itp.) są odczytywane z powrotem jako w pełni edytowalne polilinie w edytorze.
