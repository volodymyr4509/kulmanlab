---
title: Polecenie Angle — Mierzenie kąta wewnętrznego w wierzchołku przez trzy punkty w KulmanLab CAD
description: Polecenie Angle mierzy kąt wewnętrzny (0°–180°) w wierzchołku wyznaczonym przez trzy kliknięte punkty. Kliknij pierwszy koniec, wierzchołek, drugi koniec. Wynik wyświetlany w terminalu z dokładnością do 4 miejsc po przecinku.
keywords: [pomiar kąta CAD, kąt przez trzy punkty, kąt wewnętrzny CAD, polecenie pomiaru kąta, kąt wierzchołka, kulmanlab]
group: measure
order: 2
---

# Angle

Polecenie `angle` mierzy kąt wewnętrzny w wierzchołku utworzonym przez dwa odcinki linii przechodzące przez trzy kliknięte punkty. Wynik — zawsze między 0° a 180° — wyświetlany jest w terminalu z dokładnością do 4 miejsc po przecinku. Jest to jedno z trzech poleceń pomiarowych — [Distance](../distance/) mierzy długość prostoliniową, a [Area](../area/) mierzy pole powierzchni i obwód wielokąta.

## Anatomia pomiaru kąta

```
  ● pierwszy punkt (koniec pierwszego promienia)
   \
    \  podgląd pierwszego promienia
     \
      ● wierzchołek (krok 3)
     /
    /  podgląd drugiego promienia (do kursora)
   /
  ● trzeci punkt  →  terminal: "Kąt: 45.0000°"
```

- **Pierwszy punkt** — jeden koniec kąta (krok 2).
- **Wierzchołek** — narożnik, w którym mierzony jest kąt (krok 3).
- **Trzeci punkt** — drugi koniec kąta (krok 4).

## Mierzenie kąta

1. Wpisz `angle` w terminalu lub kliknij przycisk **Kąt** na pasku narzędzi.
2. **Kliknij pierwszy punkt** — jeden koniec kąta. Lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
3. **Kliknij wierzchołek** — narożnik, w którym spotykają się oba ramiona. Tutaj również działa wprowadzanie współrzędnych.
4. **Kliknij trzeci punkt** — drugi koniec kąta. Umieszczenie tego punktu wyświetla wynik.
5. **Kliknij ponownie** (opcjonalnie), aby rozpocząć nowy pomiar z tego kliknięcia jako nowego pierwszego punktu.

## Konwencja kąta wewnętrznego

Polecenie oblicza kąt, używając iloczynu skalarnego dwóch promieni z wierzchołka:

- **Zawsze wewnętrzny**: wynik jest mniejszym kątem, między 0° a 180°.
- Kolejność klikania punktów końcowych nie wpływa na wynik — liczy się tylko pozycja wierzchołka.
- Punkty współliniowe (wszystkie trzy na jednej linii) zwracają 0° lub 180°.

## Łączenie pomiarów

Po pojawieniu się wyniku kliknięcie natychmiast rozpoczyna następny pomiar — kliknięty punkt staje się nowym pierwszym punktem. Polecenie nigdy nie kończy się automatycznie, dopóki nie naciśniesz klawisza `Escape`.

## Kąt a Odległość

| | Kąt | Odległość |
|---|-------|---------|
| Co mierzy | Kąt wewnętrzny w wierzchołku | Długość prostoliniowa |
| Liczba kliknięć | 3 | 2 |
| Format wyniku | `45.0000°` | `12.3456` (jednostki) |
| Podgląd na płótnie | Dwie linie od wierzchołka do obu końców | Linia od pierwszego punktu do kursora |
| Najlepsze do | Kąt otwarcia między dwiema cechami | Długość szczeliny lub segmentu |

## Wprowadzanie współrzędnych

Zamiast klikania, wpisz dokładną pozycję dla dowolnego z trzech punktów:

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
- Dokładność wynosi zawsze 4 miejsca po przecinku w stopniach.
