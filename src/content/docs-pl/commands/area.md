---
title: Polecenie Area — Mierzenie pola powierzchni i obwodu wielokąta w KulmanLab CAD
description: Polecenie Area mierzy pole powierzchni i obwód wielokąta wyznaczonego przez 3 lub więcej klikniętych punktów, wykorzystując wzór Gaussa (shoelace formula). Obsługuje wprowadzanie kierunkowe z blokadą kąta oraz trwałe podświetlenie wyniku na płótnie.
keywords: [mierzenie pola powierzchni CAD, polecenie area, obliczanie pola wielokąta, pomiar obwodu, wzór Gaussa, kulmanlab CAD pomiar]
group: measure
order: 3
---

# Area

Polecenie `area` mierzy pole powierzchni i obwód wielokąta wyznaczonego przez trzy lub więcej klikniętych punktów i drukuje oba wyniki w terminalu z dokładnością do 4 miejsc po przecinku. Jest to trzecie polecenie pomiarowe, obok [Distance](../distance/) (długość prostoliniowa) i [Angle](../angle/) (kąt wewnętrzny w wierzchołku).

## Anatomia pomiaru pola powierzchni

```
  ● pierwszy punkt
   \
    \
     ● drugi punkt
      \
       \             (przerywana) podgląd krawędzi zamykającej
        ●───────────────┐
      trzeci punkt      │  (przerywana) podgląd kolejnej krawędzi do kursora
                        ✕ kursor  →  terminal: "Area: 12.3456  Perimeter: 45.6789"
```

- **Wierzchołki** — każdy kliknięty (lub wpisany) punkt staje się wierzchołkiem wielokąta; potwierdzone krawędzie są rysowane linią ciągłą, a wnętrze wypełnione jest półprzezroczystym podświetleniem.
- **Krawędzie podglądu** — przerywane linie pokazują oczekującą krawędź od ostatniego wierzchołka do kursora oraz krawędź zamykającą od kursora z powrotem do pierwszego wierzchołka.
- **Krawędź zamykająca** — nigdy nie klikasz ponownie pierwszego punktu; naciśnięcie Enter automatycznie zamyka wielokąt.

## Mierzenie pola powierzchni

1. Wpisz `area` w terminalu lub kliknij przycisk **Area** na pasku narzędzi (dolny rząd panelu Measure).
2. **Kliknij pierwszy punkt** lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
3. **Kliknij każdy dodatkowy wierzchołek** kolejno wokół kształtu. Wprowadzanie współrzędnych działa na każdym kroku.
4. Po umieszczeniu co najmniej **3 punktów** naciśnij **Enter** (bez oczekującego wprowadzania współrzędnej lub odległości), aby zamknąć wielokąt i obliczyć wynik.
5. Terminal drukuje `Area: <wartość>  Perimeter: <wartość>`, a zamknięty wielokąt — wypełnienie, kontur i uchwyty wierzchołków — pozostaje podświetlony na płótnie.
6. **Kliknij gdziekolwiek, naciśnij dowolny klawisz lub naciśnij `Escape`**, aby ukryć wynik i zakończyć polecenie.

## Blokada kąta i dokładna odległość

Po umieszczeniu pierwszego wierzchołka, ruch w kierunku jednego ze skonfigurowanych przyrostów śledzenia kąta (10°, 15°, 20°, 30°, 45° lub 90°, ustawianych z listy rozwijanej na pasku narzędzi) blokuje kolejną krawędź w tym kierunku:

- Podgląd krawędzi przyciąga się do zablokowanego kierunku, a przy wierzchołku kotwiczącym rysowany jest wskaźnik śledzenia kąta.
- Wpisz długość i naciśnij **Enter**, aby umieścić kolejny wierzchołek dokładnie w tej odległości wzdłuż zablokowanego kierunku.
- Kliknięcie podczas blokady (bez wpisanej długości) umieszcza wierzchołek w rzucie kursora na zablokowany kierunek.

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.` | Dodaj do wartości długości krawędzi |
| `-` | Ujemna długość (tylko jako pierwszy znak) |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Umieść kolejny wierzchołek na wpisanej długości |

## Zamykanie wielokąta

- Enter zamyka kształt dopiero po umieszczeniu **3 lub więcej** wierzchołków — przy mniejszej liczbie nie ma to żadnego efektu.
- Krawędź od ostatniego wierzchołka z powrotem do pierwszego jest dodawana automatycznie i liczona zarówno w polu powierzchni, jak i w obwodzie.
- Punkty można umieszczać w dowolnej kolejności (zgodnie lub przeciwnie do ruchu wskazówek zegara) — wynik jest identyczny.

## Area a Distance a Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| Co mierzy | Pole powierzchni i obwód wielokąta | Długość prostoliniowa | Kąt wewnętrzny w wierzchołku |
| Liczba kliknięć | 3 lub więcej, zamknięcie Enterem | 2 | 3 |
| Format wyniku | `12.3456  Perimeter: 45.6789` | `12.3456` (jednostki) | `45.0000°` |
| Podgląd na płótnie | Wypełniony wielokąt z przerywaną krawędzią zamykającą | Linia od pierwszego punktu do kursora | Dwie linie od wierzchołka do kursora |
| Po wyniku | Ukrywa się po dowolnym wejściu, a polecenie się kończy | Kliknięcie łączy nowy pomiar | Kliknięcie łączy nowy pomiar |
| Najlepsze do | Zamknięte obszary, powierzchnia pomieszczenia lub panelu | Długość szczeliny lub segmentu | Kąt otwarcia między dwiema cechami |

## Wprowadzanie współrzędnych

Zamiast klikać, wpisz dokładną pozycję dla dowolnego wierzchołka:

1. Wpisz wartość X.
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby potwierdzić.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X lub długości krawędzi przy aktywnej blokadzie kąta |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź wpisaną współrzędną lub długość; przy 3+ wierzchołkach i braku oczekującego wejścia zamyka wielokąt |
| `Escape` | Podczas wybierania wierzchołków: odrzuca punkty i zaczyna od nowa od pierwszego punktu; po wyświetleniu wyniku: ukrywa go i kończy polecenie |

## Uwagi

- Pole powierzchni obliczane jest wzorem Gaussa (shoelace formula) i zawsze podawane jako wartość dodatnia, niezależnie od kolejności kliknięć.
- Wielokąty samoprzecinające się (krawędzie, które się krzyżują) nadal dają wynik liczbowy, ale wartość może nie odpowiadać wizualnie zamkniętemu obszarowi — zachowaj nieprzecinającą się kolejność kliknięć, aby uzyskać sensowne pole powierzchni.
- Wyniki wyświetlane są wyłącznie w **terminalu i jako tymczasowe podświetlenie na płótnie** — nic nie jest dodawane na stałe do rysunku.
- W przeciwieństwie do Distance i Angle, Area **nie** łączy automatycznie nowego pomiaru — po ukryciu wyniku uruchom `area` ponownie, aby zmierzyć kolejny wielokąt.
- Dokładność wynosi zawsze 4 miejsca po przecinku zarówno dla pola powierzchni, jak i obwodu, w tych samych jednostkach co współrzędne rysunku (bez konwersji jednostek).
