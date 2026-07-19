---
title: Spline Fit — Interpolujące splajny przez kliknięte punkty
description: Polecenie Spline Fit rysuje sześcienny splajn przechodzący przez każdy kliknięty punkt dokładnie. Wewnętrznie krzywa jest przechowywana zarówno z punktami dopasowania, jak i obliczonymi wierzchołkami kontrolnymi. Przeciągnięcie uchwytu punktu dopasowania ponownie interpoluje całą krzywą. Pełna obsługa zapisu i odczytu DXF jako elementy SPLINE.
keywords: [polecenie splajnu fit CAD, interpolujący splajn CAD, splajn przez punkty, rysowanie gładkiej krzywej CAD, punkty dopasowania SPLINE DXF, edycja uchwytu splajnu, kulmanlab]
group: shapes
order: 9
---

# Spline Fit

Polecenie `splinefit` rysuje sześcienny splajn przechodzący przez każdy kliknięty punkt — krzywą interpolującą. W odróżnieniu od [Spline CV](../spline-cv/), gdzie krzywa jest tylko przyciągana do wierzchołków kontrolnych, tutaj krzywa jest zmuszana do trafienia w każdą klikniętą współrzędną dokładnie. Wewnętrznie edytor dopasowuje wierzchołki kontrolne, aby to osiągnąć, a te CV są przechowywane obok punktów dopasowania w pliku DXF.

## Rysowanie splajnu przez punkty dopasowania

1. Wpisz `splinefit` w terminalu lub kliknij przycisk **Splajn Fit** na pasku narzędzi.
2. **Kliknij, aby umieścić punkty dopasowania** — krzywa będzie przez każdy przechodzić. Lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
3. Naciśnij **Enter**, aby zakończyć (wymagane co najmniej 2 punkty).

```
  ●──────●──────●──────●  ← krzywa przechodzi dokładnie przez każde kliknięcie
  p1     p2     p3     p4
```

Podgląd na żywo pokazuje bieżącą interpolowaną krzywą podczas przesuwania kursora, w tym perspektywiczny następny punkt w pozycji kursora. Naciśnij **Escape**, aby odrzucić wszystkie umieszczone punkty i wyjść.

## Wprowadzanie współrzędnych

Zamiast klikać, wpisz dokładną pozycję dla dowolnego punktu dopasowania:

1. Wpisz wartość X.
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby umieścić punkt dopasowania.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź wpisaną współrzędną lub zakończ splajn jeśli nie ma aktywnego wejścia i istnieje ≥ 2 punkty |
| `Escape` | Odrzuć wszystkie punkty i wyjdź |

## Edycja uchwytów — przekształcanie przez punkty dopasowania

Zaznaczony splajn fit eksponuje jeden uchwyt na punkt dopasowania:

| Uchwyt | Pozycja | Co robi |
|--------|---------|---------|
| **Punkt dopasowania** | W każdej klikniętej pozycji | Przeciągnij, aby przesunąć ten punkt dopasowania — cała krzywa ponownie interpoluje się, aby przechodzić przez nową pozycję |

Przeciągnięcie jednego uchwytu ponownie dopasowuje całą krzywą, nie tylko sąsiednie segmenty. Różni się to od edycji uchwytu polilinii, gdzie przesunięcie wierzchołka przekształca tylko dwa sąsiednie segmenty.

Nie ma uchwytu "przesuń cały splajn". Aby translować cały splajn, użyj polecenia [Move](../move/).

## Zaznaczanie splajnów fit

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Zaznacza, jeśli kliknięcie trafia blisko dowolnego punktu na krzywej |
| **Przeciągnij w prawo** (ścisłe) | Wszystkie punkty próbkowania wzdłuż krzywej muszą mieścić się wewnątrz ramki zaznaczenia |
| **Przeciągnij w lewo** (przecinające) | Dowolna część krzywej przecinająca granicę ramki zaznaczenia ją zaznacza |

## Obsługiwane polecenia edycji

| Polecenie | Co dzieje się ze splajnem |
|-----------|---------------------------|
| [Move](../move/) | Translacja wszystkich punktów dopasowania i przeliczonych CV o to samo przesunięcie |
| [Copy](../copy/) | Tworzy identyczny splajn w nowej pozycji |
| [Rotate](../rotate/) | Obraca wszystkie punkty dopasowania wokół wybranego punktu bazowego |
| [Mirror](../mirror/) | Odbija wszystkie punkty dopasowania przez oś odbicia |
| [Scale](../scale/) | Skaluje wszystkie punkty dopasowania równomiernie od punktu bazowego |
| [Delete](../delete/) | Usuwa splajn |

Splajny nie obsługują **Offset**, **Trim** ani **Extend**.

## Właściwości

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
| Stopień | Stopień wielomianu — zawsze 3 (sześcienny) |
| Punkty dopasowania | Współrzędne wszystkich klikniętych punktów przelotowych |
| Wierzchołki kontrolne | Wewnętrznie obliczone CV używane do renderowania krzywej |

## Splajn Fit a Splajn CV — który wybrać

| | Splajn Fit | Splajn CV |
|---|------------|-----------|
| Krzywa przechodzi przez punkty | Przez każdy kliknięty punkt dokładnie | Tylko przez pierwszy i ostatni (zaciśnięty) |
| Efekt edycji uchwytu | Punkt dopasowania przesuwa się → cała krzywa ponownie interpoluje | CV przesuwa się → krzywa przyciąga do nowej pozycji |
| Przewidywalność kształtu | Wysoka — krzywa podąża za kliknięciami | Niższa — krzywa opóźnia się za CV |
| Najlepsze do | Krzywe muszące trafić w konkretne współrzędne | Płynne krzywe estetyczne, swobodne ścieżki |

## DXF — element SPLINE (forma punktów dopasowania)

Splajny fit zapisywane są jako elementy `SPLINE` w pliku DXF, przechowując zarówno współrzędne punktów dopasowania, jak i obliczone wierzchołki kontrolne. Flaga `splineFlag` jest ustawiona na `8` (splajn przez punkty dopasowania), więc aplikacja ładująca wie, który zestaw punktów wyświetlić jako edytowalne uchwyty. Wszystkie właściwości — kolor, warstwa, typ linii, skala typu linii i grubość — zachowywane są bez utraty danych. Aplikacje DXF obsługujące splajny przez punkty dopasowania (LibreCAD, FreeCAD) wyświetlą punkty dopasowania jako podstawowe edytowalne dane.
