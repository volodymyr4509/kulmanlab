---
title: Polecenie Dimension Aligned — Wymiary rzeczywistej odległości pod dowolnym kątem w KulmanLab CAD
description: Polecenie Dimension Aligned mierzy rzeczywistą odległość prostoliniową między dwoma punktami. Linia wymiarowa przebiega równolegle do linii p1→p2 pod dowolnym kątem — w przeciwieństwie do Wymiaru liniowego, który jest ograniczony do poziomego lub pionowego. Pełna obsługa zapisu i odczytu DXF jako elementy DIMENSION.
keywords: [wymiar wyrównany CAD, dimaligned, wymiar ukośny CAD, wymiar rzeczywistej odległości, wymiar pod kątem CAD, kulmanlab]
group: markup
order: 5
---

# Dimension Aligned

Polecenie `dimaligned` umieszcza wymiar mierzący **rzeczywistą odległość prostoliniową** między dwoma punktami. Linia wymiarowa przebiega równolegle do linii łączącej dwa punkty, więc może być pod dowolnym kątem. To kluczowa różnica od [Dimension Linear](../dim-linear/), który jest ograniczony do poziomego lub pionowego.

## Anatomia wymiaru wyrównanego

```
     ●  p2
    /|
   / |  (linia przedłużenia 2, prostopadła do linii wymiarowej)
  /  |
 /←5.00→/
/  /
●  /  (linia przedłużenia 1, prostopadła do linii wymiarowej)
p1
```

- **Linie przedłużenia** — prostopadłe do linii wymiarowej, rysowane od każdego mierzonego punktu.
- **Linia wymiarowa** — równoległa do p1→p2, odsunięta w jedną stronę pozycją kursora.
- **Wartość** — rzeczywista odległość euklidesowa `|p1 – p2|`.

## Umieszczanie wymiaru wyrównanego

1. Wpisz `dimaligned` w terminalu lub kliknij przycisk **Wymiar wyrównany** na pasku narzędzi.
2. **Kliknij pierwszy punkt linii przedłużenia** (p1) lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
3. **Kliknij drugi punkt linii przedłużenia** (p2). Tutaj również działa wprowadzanie współrzędnych.
4. **Przesuń kursor** na jedną stronę, aby ustawić prostopadłe odsunięcie linii wymiarowej.
5. **Kliknij**, aby umieścić, lub wpisz odległość odsunięcia i naciśnij **Enter** dla precyzyjnego umieszczenia.

## Wpisywanie odległości odsunięcia

Wpisz liczbę podczas umieszczania, aby zablokować linię wymiarową w dokładnej prostopadłej odległości od linii p1→p2:

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.` | Dodaj cyfrę do odsunięcia |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` / `Spacja` | Umieść przy wpisanym odsunięciu |

Strona kursora określa, po której stronie pojawi się linia wymiarowa.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X (fazy p1/p2) lub odległość odsunięcia (faza umieszczania) |
| `,` | Zablokuj X i przejdź do wprowadzania Y (fazy p1/p2) |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` / `Spacja` | Potwierdź wpisaną współrzędną lub odsunięcie |
| `Escape` | Anuluj |

## Wymiar wyrównany a Wymiar liniowy

| | Wymiar wyrównany | Wymiar liniowy |
|---|------------------|-----------------|
| Kąt linii wymiarowej | Równoległy do p1→p2 — dowolny kąt | Zawsze poziomy lub pionowy |
| Mierzy | Rzeczywistą odległość euklidesową | Tylko składową X lub Y |
| Blokowanie orientacji H/V | Nie | Tak — klawisze `H` i `V` |
| Najlepsze do | Cechy ukośne, nacięcia pod kątem | Układy ortogonalne, części wyrównane do siatki |

## Edytowanie etykiety — tryb simple

**Dwukrotnie kliknij** umieszczony wymiar wyrównany, aby otworzyć edytor tekstu w trybie **simple**. Edytor jest wstępnie wypełniony bieżącą wyrenderowaną wartością, dzięki czemu możesz ustawić kursor i edytować ją bezpośrednio.

| Funkcja | Zachowanie |
|---------|-----------|
| Bold / Italic / Font / Height | Stosowane do **całej** etykiety naraz |
| Formatowanie poszczególnych znaków | Nieobsługiwane |
| `Enter` | Zatwierdza wartość i zamyka edytor |
| Wieloliniowość | Nieobsługiwana |

Zobacz [Edytor tekstu — tryb simple](../../interface/text-editor/#simple-mode) w celu uzyskania pełnej dokumentacji.

## Łączenie wymiarów

Aby dodać więcej wymiarów kontynuowanych od drugiej linii przedłużenia tego wymiaru, użyj [Dimension Continue](../dim-continue/) — blokuje się do tego samego kąta pomiaru co ten wymiar wyrównany.

## DXF — element DIMENSION (typ wyrównany)

Wymiary wyrównane zapisywane są jako elementy `DIMENSION` z `dimType = 1` (wyrównany). Punkty początku linii przedłużenia, pozycja linii wymiarowej, pozycja tekstu, zmierzona wartość, obrót, styl strzałki i wszystkie flagi wyświetlania zachowywane są bez utraty danych.
