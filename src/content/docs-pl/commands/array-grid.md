---
title: Array Grid — Powielanie elementów w wierszach i kolumnach
description: Polecenie Array Grid tworzy prostokątną siatkę kopii z zaznaczonych elementów — wpisz liczbę wierszy, kolumn i odstęp między nimi bezpośrednio w terminalu, bez konieczności klikania punktów.
keywords: [polecenie array CAD, arraygrid, prostokątny array CAD, wzór siatki CAD, powielanie elementów CAD, kopiowanie array CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

Polecenie `ArrayGrid` tworzy prostokątną siatkę kopii z zaznaczonych elementów — wprowadź liczbę wierszy, liczbę kolumn i odstęp między nimi, wszystko wpisywane w terminalu. Oryginalne zaznaczenie zajmuje komórkę wiersz 0, kolumna 0; każda inna komórka jest przetłumaczoną kopią.

## Dwa sposoby uruchamiania

**Wstępne zaznaczenie, a następnie array** — najpierw zaznacz elementy, a następnie aktywuj:

1. Zaznacz jeden lub więcej elementów na płótnie.
2. Wpisz `arraygrid` w terminalu (wystarczy `arr` — jest jednoznaczne) lub kliknij przycisk **Array Grid** na pasku narzędzi.
3. Wpisz liczbę **wierszy** i naciśnij **Enter**.
4. Wpisz liczbę **kolumn** i naciśnij **Enter**.
5. Wpisz **odstęp między wierszami** i naciśnij **Enter**.
6. Wpisz **odstęp między kolumnami** i naciśnij **Enter** — siatka jest tworzona natychmiast.

**Aktywuj, a następnie zaznacz** — uruchom polecenie bez zaznaczonego niczego:

1. Wpisz `arraygrid` lub kliknij przycisk paska narzędzi.
2. **Zaznacz obiekty** — kliknij, aby przełączać poszczególne elementy, lub przeciągnij, aby zaznaczyć obszarem.
3. Naciśnij **Enter** lub **Spację**, aby potwierdzić zaznaczenie.
4. Kontynuuj wiersze → kolumny → odstęp wierszy → odstęp kolumn jak powyżej.

```
  2 wiersze x 3 kolumny:

  [B] [B] [B]   <- wiersz 1 (przetłumaczone kopie)
  [A] [A] [A]   <- wiersz 0: oryginalne zaznaczenie, kopie w prawo
```

> Terminal potrzebuje tylko tylu liter, ile wystarczy do jednoznaczności — wpisanie `arr` i naciśnięcie **Enter** aktywuje Array Grid bezpośrednio, ponieważ żadna inna nazwa polecenia nie zaczyna się od tych trzech liter (Arc, Area, Align i Angle rozchodzą się wcześniej).

## Wiersze, kolumny i odstęp

| Prompt | Akceptuje | Uwagi |
|--------|-----------|-------|
| Wiersze | Dodatnie liczby całkowite (1, 2, 3…) | Tylko cyfry — bez kropki dziesiętnej ani znaku |
| Kolumny | Dodatnie liczby całkowite (1, 2, 3…) | Tylko cyfry — bez kropki dziesiętnej ani znaku |
| Odstęp wierszy | Dziesiętna ze znakiem (np. `10`, `-5.5`) | Odległość między wierszami; ujemna odwraca kierunek |
| Odstęp kolumn | Dziesiętna ze znakiem (np. `10`, `-5.5`) | Odległość między kolumnami; ujemna odwraca kierunek |

Przy 1 wierszu i 1 kolumnie nie są tworzone żadne kopie — polecenie kończy się bez zmiany rysunku.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Enter` / `Spacja` | Potwierdza zaznaczenie i przechodzi do promptu wierszy |
| `0`–`9` | Wprowadza cyfry dla wierszy lub kolumn |
| `0`–`9`, `.`, `-` | Wprowadza cyfry dla odstępu wierszy/kolumn (`-` tylko jako pierwszy znak) |
| `Backspace` | Usuwa ostatnio wpisany znak bieżącego promptu |
| `Enter` | Potwierdza bieżący prompt i przechodzi do następnego |
| `Escape` | Czyści wpisane wartości wierszy/kolumn/odstępu i wraca do fazy zaznaczania |

## Zaznaczanie podczas polecenia

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Przełącza element pod kursorem w/z zaznaczenia |
| **Przeciągnij w prawo** (ścisłe) | Dodaje elementy w całości wewnątrz ramki |
| **Przeciągnij w lewo** (przecinające) | Dodaje elementy przecinające granicę ramki |
| **Enter** / **Spacja** | Potwierdza zaznaczenie i przechodzi do promptu wierszy |

## Po array

Nowe kopie są dodawane do rysunku i polecenie kończy się — oryginalne zaznaczenie jest czyszczone. Uruchom **Array Grid** ponownie lub rozpocznij nowe polecenie.

## Array Grid a Copy

| | Array Grid | Copy |
|---|-----------|------|
| Wybór punktów | Brak — wiersze, kolumny i odstęp są wpisywane | Punkt bazowy i cel są klikane (lub wpisywane) |
| Utworzone kopie | Wiersze × Kolumny − 1 | Dokładnie 1 na operację kopiowania |
| Układ | Regularna prostokątna siatka | Gdziekolwiek, przy dowolnym przesunięciu |
| Najlepsze do | Powtarzania jednostki w regularnym wzorze (otwory, płytki, elementy mocujące) | Pojedynczy duplikat w dowolnej pozycji |

## Obsługiwane elementy

Array Grid działa na każdym typie elementu. Wszystkie elementy implementują `translate(dx, dy)` wewnętrznie — tę samą operację, której używają [Copy](../copy/) i [Move](../move/) — więc żaden nie jest wykluczony.
