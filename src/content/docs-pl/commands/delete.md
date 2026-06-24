---
sidebar_position: 6
title: Polecenie Usuń — Usuwanie elementów z rysunku w KulmanLab CAD
description: Polecenie Usuń trwale usuwa zaznaczone elementy (z możliwością cofnięcia). Wstępnie zaznaczone elementy są usuwane natychmiast bez kroku potwierdzenia. Klawisz Delete działa jako globalny skrót nawet bez aktywowania polecenia. Obsługuje zaznaczanie pojedynczym kliknięciem i obszarowe.
keywords: [polecenie usuwania CAD, usuwanie elementów CAD, wymazywanie obiektów CAD, klawisz Delete CAD, cofnij usuwanie CAD, kulmanlab]
---

# Usuń

Polecenie `delete` usuwa zaznaczone elementy z rysunku. Usunięcia są zapisywane w historii [Cofnij](./undo) i można je odwrócić w maksymalnie 20 krokach. Nie ma oddzielnego okna dialogowego „potwierdź usunięcie" — potwierdzenie to pojedyncze naciśnięcie klawisza.

## Dwa sposoby usuwania

**Wstępne zaznaczenie, a następnie usunięcie** — najszybsza ścieżka:

1. Zaznacz jeden lub więcej elementów na płótnie.
2. Wpisz `delete` w terminalu, kliknij przycisk **Usuń** na pasku narzędzi **lub naciśnij klawisz `Delete`** bezpośrednio.

Elementy są usuwane natychmiast — bez dodatkowego kroku potwierdzenia.

**Aktywuj, a następnie zaznacz**:

1. Wpisz `delete` lub kliknij przycisk paska narzędzi (bez zaznaczonego niczego).
2. **Zaznacz obiekty** — kliknij, aby przełączać, lub przeciągnij, aby zaznaczyć obszarem.
3. Naciśnij **Enter**, **Spację** lub **Delete**, aby potwierdzić i usunąć zaznaczone elementy.

## Skrót klawiszem Delete

Klawisz `Delete` na klawiaturze działa jako **globalny skrót** — jeśli jakiekolwiek elementy są aktualnie zaznaczone, naciśnięcie go usuwa je natychmiast, nawet bez otwierania polecenia Usuń w terminalu. To najszybszy jednoetapowy przepływ pracy usuwania:

```
Kliknij element → naciśnij Delete → gotowe
```

## Zaznaczanie podczas polecenia

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Przełącza element pod kursorem w/z zaznaczenia |
| **Przeciągnij w prawo** (ścisłe) | Zaznacza tylko elementy w całości wewnątrz ramki |
| **Przeciągnij w lewo** (przecinające) | Zaznacza elementy przecinające granicę ramki |
| **Enter** / **Spacja** / **Delete** | Potwierdza i usuwa zaznaczone elementy |

## Odzyskiwanie usuniętych elementów

Usunięcia można cofnąć poleceniem [Cofnij](./undo) (wpisz `undo` lub użyj przycisku paska narzędzi). Można odwrócić maksymalnie **20 kroków** na plik, a historia jest zachowywana po ponownym załadowaniu strony. Jeśli przekroczono 20 usunięć bez zapisania, wcześniejszych usunięć nie można odzyskać.

## Obsługiwane elementy

Usuwanie działa na każdym typie elementu — Linia, Polilinia, Prostokąt, Okrąg, Łuk, Elipsa, Tekst, Splajn, Wymiar, Linia prowadząca i wszystkie pozostałe.
