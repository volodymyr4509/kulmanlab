---
title: Spline CV — B-splajny przez umieszczanie wierzchołków kontrolnych
description: Polecenie Spline CV rysuje sześcienny B-splajn przez umieszczanie wierzchołków kontrolnych. Krzywa jest przyciągana do wierzchołków, ale przechodzi tylko przez pierwszy i ostatni (zaciśnięte węzły). Każdy uchwyt CV można przeciągnąć, aby przekształcić krzywą po umieszczeniu. Pełna obsługa zapisu i odczytu DXF jako elementy SPLINE.
keywords: [polecenie splajnu CAD, wierzchołki kontrolne B-splajnu, zaciśnięty splajn CAD, rysowanie splajnu CAD, element SPLINE DXF, edycja uchwytu splajnu, kulmanlab]
group: shapes
order: 8
---

# Spline CV

Polecenie `splinecv` rysuje **sześcienny B-splajn** przez umieszczanie wierzchołków kontrolnych (CV). Wynikowa krzywa jest przyciągana do każdego CV, ale przez nie nie przechodzi — z wyjątkiem pierwszego i ostatniego wierzchołka, gdzie **zaciśnięte węzły** zakotwiczają krzywą dokładnie. Daje to intuicyjną kontrolę kształtu: pociągnij wierzchołek, aby pchnąć krzywą w jego kierunku, bez zmuszania jej do dotknięcia każdego punktu.

## Rysowanie splajnu przez wierzchołki kontrolne

1. Wpisz `splinecv` w terminalu lub kliknij przycisk **Splajn CV** na pasku narzędzi.
2. **Kliknij, aby umieścić wierzchołki kontrolne** — każde kliknięcie dodaje wierzchołek. Lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
3. Naciśnij **Enter**, aby zakończyć (wymagane co najmniej 2 wierzchołki).

```
  CV ●         ● CV
      \       /
       \     /    ← krzywa przyciągana do CV
        \   /         ale przez nie nieprzechodząca
  CV ●   ●   ● CV (początek/koniec: krzywa dotyka tutaj)
```

Podgląd na żywo aktualizuje się podczas przesuwania kursora po każdym wierzchołku, pokazując jak splajn będzie wyglądał z następnym punktem na pozycji kursora. Naciśnij **Escape**, aby odrzucić wszystkie umieszczone wierzchołki i wyjść.

## Wprowadzanie współrzędnych

Zamiast klikać, wpisz dokładną pozycję dla dowolnego wierzchołka kontrolnego:

1. Wpisz wartość X.
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby umieścić wierzchołek.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź wpisaną współrzędną lub zakończ splajn jeśli nie ma aktywnego wejścia i istnieje ≥ 2 wierzchołki |
| `Escape` | Odrzuć wszystkie wierzchołki i wyjdź |

## Edycja uchwytów — przekształcanie przez wierzchołki kontrolne

Zaznaczony splajn CV eksponuje jeden uchwyt na wierzchołek kontrolny:

| Uchwyt | Pozycja | Co robi |
|--------|---------|---------|
| **Wierzchołek kontrolny** | W każdej pozycji CV | Przeciągnij, aby przesunąć ten CV — krzywa przekształca się w kierunku nowej pozycji |

Nie ma uchwytu "przesuń cały splajn". Aby translować cały splajn, użyj polecenia [Move](../move/).

## Zaznaczanie splajnów CV

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Zaznacza, jeśli kliknięcie trafia blisko dowolnego punktu na krzywej |
| **Przeciągnij w prawo** (ścisłe) | Wszystkie punkty próbkowania wzdłuż krzywej muszą mieścić się wewnątrz ramki zaznaczenia |
| **Przeciągnij w lewo** (przecinające) | Dowolna część krzywej przecinająca granicę ramki zaznaczenia ją zaznacza |

## Obsługiwane polecenia edycji

| Polecenie | Co dzieje się ze splajnem |
|-----------|---------------------------|
| [Move](../move/) | Translacja wszystkich wierzchołków kontrolnych o to samo przesunięcie |
| [Copy](../copy/) | Tworzy identyczny splajn w nowej pozycji |
| [Rotate](../rotate/) | Obraca wszystkie CV wokół wybranego punktu bazowego |
| [Mirror](../mirror/) | Odbija wszystkie CV przez oś odbicia |
| [Scale](../scale/) | Skaluje wszystkie CV równomiernie od punktu bazowego |
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
| Wierzchołki kontrolne | Współrzędne wszystkich CV |
| Punkty dopasowania | Puste dla splajnów CV; wypełnione tylko dla splajnów przez punkty dopasowania |

## Splajn CV a Splajn Fit — który wybrać

| | Splajn CV | Splajn Fit |
|---|-----------|------------|
| Krzywa przechodzi przez punkty | Tylko przez pierwszy i ostatni (zaciśnięty) | Przez każdy kliknięty punkt dokładnie |
| Kontrola kształtu | Pociągnij CV w kierunku regionu | Przesuń punkty dopasowania, przez które krzywa musi przechodzić |
| Efekt edycji uchwytu | CV przesuwa się → krzywa przyciąga | Punkt dopasowania przesuwa się → krzywa ponownie interpoluje |
| Najlepsze do | Płynne krzywe estetyczne, swobodne ścieżki | Krzywe muszące trafić w konkretne współrzędne |

## DXF — element SPLINE (forma wierzchołków kontrolnych)

Splajny CV zapisywane są jako elementy `SPLINE` w pliku DXF, przechowując stopień, wektor węzłów i wszystkie współrzędne wierzchołków kontrolnych. Wszystkie właściwości — kolor, warstwa, typ linii, skala typu linii i grubość — zachowywane są bez utraty danych. Flaga `splineFlag` jest ustawiona na `9` (splajn CV), więc forma jest zachowywana po ponownym załadowaniu. Każda aplikacja DXF obsługująca elementy `SPLINE` z danymi CV odczytuje je poprawnie.
