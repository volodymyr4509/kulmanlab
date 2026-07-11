---
title: Polecenie Distance — Mierzenie odległości prostoliniowej między dwoma punktami w KulmanLab CAD
description: Polecenie Distance mierzy odległość euklidesową między dwoma klikniętymi punktami i wyświetla wynik z dokładnością do 4 miejsc po przecinku. Kliknij ponownie po wyniku, aby połączyć nowy pomiar od ostatniego punktu.
keywords: [mierzenie odległości CAD, polecenie distance, pomiar punkt-punkt, odległość prostoliniowa, kulmanlab CAD pomiar]
group: measure
order: 1
---

# Distance

Polecenie `distance` mierzy odległość prostoliniową (euklidesową) między dwoma klikniętymi punktami i drukuje wynik w terminalu z dokładnością do 4 miejsc po przecinku. Jest to jedno z trzech poleceń pomiarowych — [Angle](../angle/) mierzy kąt otwierający w wierzchołku, a [Area](../area/) mierzy pole powierzchni i obwód wielokąta.

## Anatomia pomiaru odległości

```
  ● pierwszy punkt
   \
    \  linia podglądu (na żywo)
     \
      ● drugi punkt    →  terminal: "Odległość: 12.3456"
```

- **Pierwszy punkt** — początek pomiaru.
- **Drugi punkt** — punkt końcowy; umieszczenie go natychmiast drukuje wynik.
- **Wynik** — wyświetlany w terminalu, nie umieszczany na płótnie.

## Mierzenie odległości

1. Wpisz `distance` w terminalu lub kliknij przycisk **Odległość** na pasku narzędzi.
2. **Kliknij pierwszy punkt** lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
3. **Kliknij drugi punkt** — zmierzona odległość pojawia się w terminalu. Tutaj również działa wprowadzanie współrzędnych.
4. **Kliknij ponownie** (opcjonalnie), aby rozpocząć nowy pomiar. Polecenie pozostaje aktywne.

Naciśnij `Escape` w dowolnym momencie, aby zresetować do kroku 2.

## Łączenie pomiarów

Po wyświetleniu wyniku kliknięcie natychmiast rozpoczyna następny pomiar — kliknięty punkt staje się nowym pierwszym punktem. Pozwala to mierzyć sekwencję odległości bez ponownego aktywowania polecenia.

## Odległość a Kąt

| | Odległość | Kąt |
|---|---------|-------|
| Co mierzy | Długość prostoliniowa | Kąt wewnętrzny w wierzchołku |
| Liczba kliknięć | 2 | 3 |
| Format wyniku | `12.3456` (jednostki) | `45.0000°` |
| Podgląd na płótnie | Linia od pierwszego punktu do kursora | Dwie linie od wierzchołka do kursora |
| Najlepsze do | Długość szczeliny lub segmentu | Kąt otwarcia między dwiema cechami |

## Wprowadzanie współrzędnych

Zamiast klikać, wpisz dokładną pozycję dla dowolnego punktu:

1. Wpisz wartość X.
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby potwierdzić.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź wpisaną współrzędną |
| `Escape` | Anuluj i zresetuj do kroku 2 |

## Uwagi

- Wyniki wyświetlane są **wyłącznie w terminalu** — nic nie jest dodawane do rysunku.
- Wynik wyrażony jest w tych samych jednostkach co współrzędne rysunku (bez konwersji jednostek).
- Dokładność wynosi zawsze 4 miejsca po przecinku.
