---
title: Polecenie ViewportCopy — Duplikowanie okna widoku w KulmanLab CAD
description: Polecenie ViewportCopy duplikuje wybrane okno widoku do nowej pozycji w tym samym układzie, zachowując ustawienia skali i widoku modelu. Obsługuje dokładne wprowadzanie współrzędnych, blokowanie kąta i wpisywanie odległości.
keywords: [kopiowanie widoku, duplikowanie widoku, kopiowanie widoku układu, blokowanie kąta widoku, dokładne współrzędne widoku, kulmanlab]
---

# ViewportCopy

Polecenie `ViewportCopy` kopiuje okno widoku na nową pozycję, zachowując jego skalę i środek modelu. Dostępne tylko w przestrzeni układu.

## Kopiowanie okna widoku

1. Przełącz się na zakładkę układu papieru.
2. Opcjonalnie kliknij okno widoku, aby wstępnie je zaznaczyć.
3. Wpisz `ViewportCopy` w terminalu lub kliknij przycisk **Kopiuj widok** na pasku narzędzi.
4. Jeśli nie zaznaczono wstępnie okna widoku, **kliknij okno widoku** do skopiowania.
5. **Kliknij punkt bazowy** — punkt odniesienia dla przemieszczenia. Lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
6. **Kliknij cel** — okno widoku jest umieszczane przy przesunięciu baza→cel. Lub użyj wprowadzania współrzędnych / blokowania kąta.

Po umieszczeniu polecenie pozostaje aktywne — kliknij inny cel, aby umieścić inną kopię tego samego okna widoku. Naciśnij **Enter**, **Spację** lub **Escape**, aby zakończyć.

## Wprowadzanie współrzędnych

Na krokach punktu bazowego i celu możesz wpisać dokładną współrzędną zamiast klikać:

1. Wpisz wartość X.
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby potwierdzić.

## Blokowanie kąta i dokładna odległość

Po ustawieniu punktu bazowego polecenie przyciąga do osi 45° (0°, 45°, 90°, 135°, ...) gdy kursor się wyrównuje. Podczas blokowania:

- Podgląd przyciąga do osi.
- Wpisz odległość i naciśnij **Enter**, aby umieścić kopię dokładnie w tym przesunięciu wzdłuż zablokowanego kierunku.

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.` | Dodaj cyfrę do wartości odległości |
| `-` | Ujemna odległość (odwraca kierunek; tylko jako pierwszy znak) |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Umieść kopię przy wpisanej odległości |

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X lub odległość przy zablokowanym kącie |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Enter` | Potwierdź wpisaną współrzędną lub odległość |
| `Enter` / `Spacja` | Zakończ (gdy nie ma aktywnego wejścia) |
| `Escape` | Anuluj i zresetuj |

## Uwagi

- KopiujWidok jest dostępny tylko gdy aktywna jest zakładka układu papieru.
- Skopiowane okno widoku dziedziczy tę samą skalę, środek modelu, stan zablokowania i wymiary co oryginał.
- Aby utworzyć nowe okno widoku od zera, użyj [ViewportRectangle](../viewport-rectangle/).
