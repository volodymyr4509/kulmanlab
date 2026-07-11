---
title: Polecenie Line — Rysowanie, łączenie, przycinanie i przedłużanie linii w KulmanLab CAD
description: Polecenie Line rysuje pojedyncze prostoliniowe odcinki, które można łączyć koniec-do-końca. Linie są jedynym typem elementu, na którym działają Trim i Extend. Pełna obsługa zapisu i odczytu DXF jako elementy LINE.
keywords: [polecenie linii CAD, rysowanie prostej linii CAD, łączenie segmentów linii, przycinanie linii CAD, przedłużanie linii CAD, blokowanie kąta CAD, element LINE DXF, kulmanlab]
group: shapes
order: 1
---

# Line

Polecenie `line` rysuje pojedyncze prostoliniowe odcinki przechowywane jako oddzielne elementy `LINE` w modelu DXF. Po każdym segmencie polecenie pozostaje aktywne i ponownie używa punktu końcowego jako nowego punktu startowego, dzięki czemu można budować połączone ścieżki jeden segment na raz. W odróżnieniu od [Polyline](../polyline/), połączone linie pozostają niezależnymi elementami — każdą z nich można przyciąć, przedłużyć lub usunąć bez wpływu na sąsiednie.

## Rysowanie linii

1. Wpisz `line` w terminalu lub kliknij przycisk **Linia** na pasku narzędzi.
2. **Kliknij punkt startowy** lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
3. **Kliknij punkt końcowy** — segment jest umieszczany, a punkt końcowy staje się następnym punktem startowym. Tutaj również działa wprowadzanie współrzędnych.
4. Kontynuuj klikanie (lub wpisywanie), aby łączyć więcej segmentów.
5. Naciśnij **Enter** lub **Escape**, aby zatrzymać.

```
  ●──────────●──────────●──────────●
 start     2. kliknięcie  3. kliknięcie   Enter aby zakończyć
            (automatycznie staje się następnym startem)
```

Potrzebujesz tylko jednego segmentu? Naciśnij **Enter** lub **Escape** zaraz po kroku 3.

## Wprowadzanie współrzędnych

Zamiast klikać, wpisz dokładną pozycję dla punktu startowego lub dowolnego kolejnego punktu:

1. Wpisz wartość X (cyfry, `.` lub `-`).
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby umieścić punkt.

## Blokowanie kąta i dokładne wprowadzanie długości

Podczas przesuwania kursora po umieszczeniu punktu, polecenie obserwuje oś przyciągania 45° (0°, 45°, 90°, 135°, ...). Kąt **blokuje** gdy:

- kursor jest co najmniej **5 × rozmiar uchwytu** od kotwicy, **i**
- jest w odległości **1 rozmiar uchwytu** prostopadle od najbliższej osi.

Podczas blokowania podgląd przyciąga do osi i możesz wprowadzić dokładną długość:

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.` | Dodaj cyfrę do wartości długości |
| `-` | Ujemna długość — odwraca kierunek wzdłuż osi (tylko jako pierwszy znak) |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Umieść punkt końcowy przy wpisanej odległości |

Skumulowana wartość jest wyświetlana na żywo w terminalu (np. `kliknij punkt końcowy lub wprowadź długość: 12.5`). Kliknięcie podczas blokowania rzutuje na oś, dzięki czemu punkt końcowy zawsze leży dokładnie na niej.

Powrót blisko punktu kotwicy rozłącza blokadę.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X lub odległość przy zablokowanym kącie |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź wpisaną współrzędną lub długość, lub zakończ łańcuch jeśli nic nie jest wpisane |
| `Escape` | Zakończ łańcuch i wyjdź |

## Edycja uchwytów — rozciąganie punktów końcowych

Zaznaczona linia pokazuje trzy uchwyty:

| Uchwyt | Gdzie | Co robi |
|--------|-------|---------|
| **Początek** | Pierwszy punkt końcowy | Przeciągnij, aby zmienić położenie — koniec pozostaje nieruchomy |
| **Środek** | Środek linii | Aktywuje **Przesuń** dla całej linii |
| **Koniec** | Drugi punkt końcowy | Przeciągnij, aby zmienić położenie — początek pozostaje nieruchomy |

Rozciąganie jednego punktu końcowego nigdy nie wpływa na drugi. Różni się to od edycji uchwytów [Polyline](../polyline/), gdzie przesunięcie wierzchołka przekształca całą ścieżkę.

## Zaznaczanie linii

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Zaznacza linię, jeśli kliknięcie mieści się w odległości testu trafienia od segmentu |
| **Przeciągnij w prawo** (ścisłe) | Linia jest zaznaczana tylko jeśli oba punkty końcowe mieszczą się w ramce |
| **Przeciągnij w lewo** (przecinające) | Linia jest zaznaczana jeśli dowolna część segmentu przecina granicę ramki |

## Obsługiwane polecenia edycji

Linie są **jedynym** elementem, na którym działają [Trim](../trim/) i [Extend](../extend/). Wszystkie standardowe polecenia transformacji również mają zastosowanie:

| Polecenie | Co dzieje się z linią |
|-----------|-----------------------|
| [Move](../move/) | Translacja obu punktów końcowych o to samo przesunięcie |
| [Copy](../copy/) | Tworzy identyczną linię w nowej pozycji |
| [Rotate](../rotate/) | Obraca oba punkty końcowe wokół wybranego punktu bazowego |
| [Mirror](../mirror/) | Odbija oba punkty końcowe przez oś odbicia |
| [Scale](../scale/) | Skaluje oba punkty końcowe równomiernie od punktu bazowego |
| [Offset](../offset/) | Tworzy równoległą linię w stałej prostopadłej odległości |
| [Trim](../trim/) | Tnie linię na przecięciach — **tylko linie** |
| [Extend](../extend/) | Rozciąga najbliższy punkt końcowy, aby dotrzeć do granicy — **tylko linie** |
| [Delete](../delete/) | Usuwa linię z rysunku |

## Właściwości

Gdy linia jest zaznaczona, panel właściwości pokazuje każde pole, które niesie rekord `LINE` DXF:

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
| Początek X / Początek Y | Współrzędne pierwszego punktu końcowego |
| Koniec X / Koniec Y | Współrzędne drugiego punktu końcowego |

Wszystkie pola są edytowalne bezpośrednio w panelu bez ponownego uruchamiania polecenia.

## Linia a Polilinia — kiedy której używać

| | Linia | Polilinia |
|---|------|---------|
| Liczba elementów | Jeden `LINE` na segment | Jeden `LWPOLYLINE` dla całej ścieżki |
| Przytnij / Przedłuż | Tak — segment po segmencie | Nie |
| Kształt zamknięty | Nie | Tak (flaga zamknięcia) |
| Edycja uchwytu | Rozciągnij poszczególne punkty końcowe | Przesuń dowolny wierzchołek wzdłuż ścieżki |
| Najlepsze do | Linie pomocnicze, pojedyncze segmenty, geometria do przycięcia | Kontury, zarysy, kształty zachowywane w całości |

## DXF — element LINE

Linie zapisywane są jako elementy `LINE` w pliku DXF. Każda właściwość — współrzędne początku/końca, kolor, warstwa, typ linii, skala typu linii i grubość — zachowywana jest bez utraty danych. Gdy otwierasz DXF zawierający elementy `LINE`, stają się one w pełni edytowalnymi obiektami `Line` w edytorze.

Linie narysowane w edytorze są również zapisywane jako elementy `LINE` przy zapisywaniu, więc są czytelne przez LibreCAD, FreeCAD i każdą inną aplikację zgodną z DXF.
