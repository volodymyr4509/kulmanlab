---
title: Polecenie Circle — Rysowanie okręgów przez środek i promień w KulmanLab CAD
description: Polecenie Circle umieszcza okrąg przez kliknięcie punktu środkowego, a następnie kliknięcie lub wpisanie promienia. Cztery uchwyty kardynalne pozwalają zmieniać rozmiar promienia przez przeciąganie bez ponownego uruchamiania polecenia. Pełna obsługa zapisu i odczytu DXF jako elementy CIRCLE.
keywords: [polecenie okręgu CAD, rysowanie okręgu CAD, wprowadzanie promienia okręgu, zmiana rozmiaru okręgu uchwytem, element CIRCLE DXF, wymiar promienia okręgu, kulmanlab]
group: shapes
order: 4
---

# Circle

Polecenie `circle` rysuje okrąg zdefiniowany przez punkt środkowy i promień. Po kliknięciu środka możesz ustawić promień przez kliknięcie drugiego punktu na płótnie lub przez wpisanie dokładnej liczby — obie opcje są dostępne jednocześnie.

## Rysowanie okręgu

1. Wpisz `circle` w terminalu lub kliknij przycisk **Okrąg** na pasku narzędzi.
2. **Kliknij punkt środkowy** lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
3. Ustaw promień — albo:
   - **Kliknij dowolny punkt** na płótnie — odległość od środka staje się promieniem, albo
   - **Wpisz promień** i naciśnij **Enter** dla dokładnej wartości.

Okrąg zostaje natychmiast umieszczony i polecenie kończy się.

```
  środek ●
          \  podgląd linii promienia
           \
            ● ← kliknij tu, lub wpisz liczbę
```

W fazie promienia podgląd na żywo pokazuje okrąg w bieżącej odległości kursora i rysuje linię promienia od środka do bieżącego punktu.

## Wprowadzanie współrzędnych środka

Zamiast klikać, możesz wpisać pozycję środka:

1. Wpisz wartość X.
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby umieścić środek i przejść do wprowadzania promienia.

## Wpisywanie promienia

Po umieszczeniu środka wpisywanie natychmiast buduje wartość promienia:

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.` | Dodaj cyfrę do wartości promienia |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Umieść okrąg przy wpisanym promieniu |

Skumulowana wartość wyświetlana jest w wierszu zachęty terminala (np. `podaj promień okręgu: 25`). Podgląd aktualizuje się, pokazując wpisany promień, podczas gdy kursor kontroluje kierunek znacznika linii promienia.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X (faza środka) lub cyfra promienia (faza promienia) |
| `,` | Zablokuj X i przejdź do wprowadzania Y (faza środka) |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź wpisaną współrzędną lub promień |
| `Escape` | Anuluj i zresetuj |

## Edycja uchwytów — zmiana rozmiaru promienia

Zaznaczony okrąg eksponuje pięć uchwytów:

| Uchwyt | Pozycja | Co robi |
|--------|---------|---------|
| **Środek** | Punkt środkowy | Przesuwa cały okrąg; promień bez zmian |
| **Lewy** | Skrajny lewy punkt (środek − promień) | Przeciągnij, aby ustawić nowy promień = odległość do środka |
| **Prawy** | Skrajny prawy punkt (środek + promień) | Przeciągnij, aby ustawić nowy promień = odległość do środka |
| **Górny** | Najwyższy punkt | Przeciągnij, aby ustawić nowy promień = odległość do środka |
| **Dolny** | Najniższy punkt | Przeciągnij, aby ustawić nowy promień = odległość do środka |

Wszystkie cztery uchwyty kardynalne zachowują się identycznie — nowy promień równa się odległości od środka do pozycji przeciągania. Środek pozostaje nieruchomy.

## Zaznaczanie okręgów

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Zaznacza, jeśli kliknięcie trafia blisko obwodu |
| **Przeciągnij w prawo** (ścisłe) | Cały ograniczający kwadrat (środek ± promień) musi leżeć wewnątrz ramki |
| **Przeciągnij w lewo** (przecinające) | Dowolna część obwodu przecinająca lub dotykająca granicy ramki zaznacza okrąg |

## Obsługiwane polecenia edycji

| Polecenie | Co dzieje się z okręgiem |
|-----------|--------------------------|
| [Move](../move/) | Translacja środka; promień bez zmian |
| [Copy](../copy/) | Tworzy identyczny okrąg w nowym środku |
| [Rotate](../rotate/) | Obraca środek wokół punktu bazowego; promień bez zmian |
| [Mirror](../mirror/) | Odbija środek przez oś odbicia; promień bez zmian |
| [Scale](../scale/) | Skaluje pozycję środka i mnoży promień przez współczynnik skali |
| [Offset](../offset/) | Tworzy współśrodkowy okrąg przy większym lub mniejszym promieniu |
| [Delete](../delete/) | Usuwa okrąg |

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
| Środek X / Środek Y | Współrzędne punktu środkowego |
| Promień | Promień okręgu w jednostkach rysunkowych |

## Okrąg a Łuk — kiedy którego używać

| | Okrąg | Łuk |
|---|--------|-----|
| Zakres | Pełne 360° | Częściowy — zdefiniowany przez kąt początku i końca |
| Jak rysować | Środek + promień | Trzy punkty na krzywej |
| Wpisane wejście | Wartość promienia | Brak — tylko kliknięcie |
| Uchwyt zmiany rozmiaru | 4 punkty kardynalne | Punkty początku i końca (kąt + promień) |
| Wymiarowanie | Promień: [Dimension Radius](../dim-radius/) · Średnica: [Dimension Diameter](../dim-diameter/) | [Dimension Radius](../dim-radius/) |
| Najlepsze do | Pełne otwory, okrągłe rozmieszczenie otworów, okrągłe cechy | Zaokrąglenia, częściowe krzywe, łukowe ścieżki |

## DXF — element CIRCLE

Okręgi zapisywane są jako elementy `CIRCLE` w pliku DXF. Współrzędne środka, promień, kolor, warstwa, typ linii, skala typu linii i grubość zachowywane są bez utraty danych. Każda aplikacja zgodna z DXF odczytuje je jako standardowe okręgi.
