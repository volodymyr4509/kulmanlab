---
sidebar_position: 1
title: Polecenie Move — Translacja zaznaczonych elementów przez punkt bazowy w KulmanLab CAD
description: Polecenie Move transluje jeden lub więcej zaznaczonych elementów przez punkt bazowy i punkt docelowy. Obsługuje wstępne zaznaczanie, blokowanie kąta i dokładne wprowadzanie odległości. Po przesunięciu elementy pozostają zaznaczone w nowej pozycji. Każdy typ elementu jest obsługiwany.
keywords: [polecenie przesuwania CAD, translacja elementów CAD, przesuwanie obiektów CAD, blokowanie kąta przesunięcia, dokładna odległość przesunięcia, przesunięcie uchwytem CAD, kulmanlab]
---

# Move

Polecenie `move` transluje zaznaczone elementy od punktu bazowego do punktu docelowego. Przesunięcie stosowane do każdego zaznaczonego elementu to wektor od bazy do celu. Po przesunięciu wszystkie elementy pozostają zaznaczone w nowej pozycji, gotowe do dalszych edycji.

## Dwa sposoby uruchamiania

**Wstępne zaznaczenie, a następnie przesunięcie** — najpierw zaznacz elementy, a następnie aktywuj:

1. Zaznacz jeden lub więcej elementów na płótnie.
2. Wpisz `move` w terminalu lub kliknij przycisk **Przesuń** na pasku narzędzi.
3. **Kliknij punkt bazowy** lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
4. **Kliknij cel** — wszystkie zaznaczone elementy przesuwają się o wektor baza→cel. Tutaj również działa wprowadzanie współrzędnych.

**Aktywuj, a następnie zaznacz** — uruchom polecenie bez zaznaczonego niczego:

1. Wpisz `move` lub kliknij przycisk paska narzędzi.
2. **Zaznacz obiekty** — kliknij, aby przełączać poszczególne elementy, lub przeciągnij, aby zaznaczyć obszarem.
3. Naciśnij **Enter** lub **Spację**, aby potwierdzić zaznaczenie.
4. **Kliknij punkt bazowy**, następnie **kliknij cel** (wprowadzanie współrzędnych dostępne na obu krokach).

```
  Przed:                    Po:
  ● baza                       → ● cel
  [element A]                      [element A przesunięty]
  [element B]                      [element B przesunięty]
```

Podgląd widma wszystkich zaznaczonych elementów podąża za kursorem od punktu bazowego do celu, pokazując wynik przed kliknięciem.

## Wprowadzanie współrzędnych

Na kroku punktu bazowego lub celu wpisz dokładną pozycję zamiast klikać:

1. Wpisz wartość X.
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby potwierdzić.

## Blokowanie kąta i dokładna odległość

Po ustawieniu punktu bazowego polecenie obserwuje oś przyciągania 45° (0°, 45°, 90°, 135°, ...). Kierunek **blokuje** gdy kursor jest wystarczająco daleko od bazy i w odległości jednej szerokości uchwytu od osi. Podczas blokowania:

- Podgląd widma przyciąga do osi.
- Wpisz odległość i naciśnij **Enter**, aby przesunąć dokładnie o tyle wzdłuż zablokowanego kierunku.
- Kliknięcie rzutuje na oś, więc cel zawsze leży dokładnie na niej.

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.` | Dodaj do wartości odległości |
| `-` | Ujemna odległość — odwraca kierunek wzdłuż osi (tylko jako pierwszy znak) |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Zastosuj przesunięcie przy wpisanej odległości |

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Enter` / `Spacja` | Potwierdź zaznaczenie i przejdź do fazy punktu bazowego |
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X lub odległość przy zablokowanym kącie |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź współrzędną lub zastosuj przesunięcie przy wpisanej odległości |
| `Escape` | Anuluj i zresetuj |

## Aktywowanie Przesuń z uchwytu

Kliknięcie **uchwytu punktu środkowego** zaznaczonej [Line](../line/) automatycznie uruchamia Przesuń, z punktem środkowym już ustawionym jako punkt bazowy i aktywną fazą przesunięcia. Jest to najszybszy sposób na repozycjonowanie pojedynczej linii bez przechodzenia przez krok zaznaczania.

## Zaznaczanie podczas polecenia

Gdy polecenie zaczyna się w fazie zaznaczania:

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Przełącza element pod kursorem w/z zaznaczenia |
| **Przeciągnij w prawo** (ścisłe) | Dodaje elementy w całości wewnątrz ramki |
| **Przeciągnij w lewo** (przecinające) | Dodaje elementy przecinające granicę ramki |
| **Enter** / **Spacja** | Potwierdza zaznaczenie i przechodzi do fazy punktu bazowego |

## Po przesunięciu

Przeniesione elementy pozostają zaznaczone w nowej pozycji. Oznacza to, że możesz od razu:
- Uruchomić **Przesuń** ponownie, aby je lekko dostosować.
- Uruchomić [Copy](../copy/), [Rotate](../rotate/) lub [Scale](../scale/) bez ponownego zaznaczania.
- Nacisnąć **Delete**, aby je usunąć.

## Przesuń a Kopiuj

| | Przesuń | Kopiuj |
|---|------|------|
| Oryginalna pozycja | Opuszczona — elementy już tam nie są | Zachowana — oryginały pozostają na miejscu |
| Liczba wyników | Taka sama liczba elementów | Jeden dodatkowy zestaw na operację |
| Zaznaczenie po | Przeniesione elementy zaznaczone w nowej pozycji | Skopiowane elementy zaznaczone w nowej pozycji |
| Najlepsze do | Repozycjonowanie geometrii | Duplikowanie geometrii |

## Obsługiwane elementy

Przesuń działa na każdym typie elementu: Linia, Polilinia, Prostokąt, Okrąg, Łuk, Elipsa, Tekst, Splajn, Wymiar, Linia prowadząca i wszystkie pozostałe. Wszystkie elementy implementują `translate(dx, dy)`, więc żaden nie jest wykluczony.
