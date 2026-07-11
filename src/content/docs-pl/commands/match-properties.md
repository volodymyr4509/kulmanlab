---
title: Match Properties — Kopiowanie właściwości elementów w KulmanLab CAD
description: Polecenie FitWłaściwości kopiuje kolor, warstwę i inne współdzielone właściwości z elementu źródłowego na jeden lub więcej elementów docelowych. Dopasowuje właściwości w taki sam sposób, jak narzędzia CAD na komputerze stacjonarnym.
keywords: [dopasuj właściwości CAD, kopiowanie właściwości elementu, MATCHPROP, dopasowanie warstwy koloru, przenoszenie właściwości, kulmanlab dopasuj właściwości, malowanie właściwościami, kopiowanie warstwy CAD]
group: style
order: 1
---

# Match Properties

Polecenie `MatchProperties` kopiuje **właściwości wizualne i warstwy** z elementu źródłowego na jeden lub więcej elementów docelowych. Przenoszone są tylko właściwości wspólne dla typów elementów źródłowego i docelowego — geometria nigdy nie jest zmieniana.

## Jak aktywować

Kliknij przycisk **Match Properties** na pasku narzędzi (ikona wałka malarskiego) w panelu Styl lub wpisz `MatchProperties` w terminalu.

## Przepływ pracy

**Aktywuj najpierw, następnie wybierz źródło:**

1. Wpisz `MatchProperties` lub kliknij przycisk paska narzędzi bez wstępnego zaznaczenia.
2. **Kliknij element źródłowy** — ten, którego właściwości chcesz skopiować.
3. **Kliknij każdy element docelowy**, aby zastosować właściwości źródłowe. Możesz klikać wiele elementów jeden po drugim.
4. Aby jednocześnie zastosować do grupy, **przeciągnij ramkę zaznaczenia** nad elementami docelowymi.
5. Naciśnij **Enter** lub **Escape**, aby zakończyć.

**Wstępne zaznaczenie źródła, następnie aktywuj:**

1. Kliknij pojedynczy element, aby go zaznaczyć.
2. Aktywuj `MatchProperties`. Zaznaczony element jest automatycznie używany jako źródło.
3. Kliknij elementy docelowe lub zaznacz przeciąganiem, następnie **Enter** lub **Escape**, aby zakończyć.

## Jakie właściwości są kopiowane

DopasujWłaściwości kopiuje właściwości należące do wspólnej klasy bazowej między źródłem i celem. Co najmniej **wszystkie typy elementów** dzielą te właściwości:

| Właściwość | Opis |
|------------|------|
| **Kolor** | Indeks koloru elementu (w tym "Wg warstwy" / "Wg bloku") |
| **Warstwa** | Warstwa, do której należy element |

Gdy źródło i cel są tym samym typem elementu (np. oba są wymiarami), kopiowane są również dodatkowe właściwości specyficzne dla typu — na przykład wysokość tekstu, rozmiar strzałki, ustawienia linii przedłużenia.

Geometria (współrzędne, promień, długość itp.) nigdy nie jest dotknięta.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Enter` / `Spacja` | Potwierdź zaznaczenie obszarowe lub zakończ polecenie |
| `Escape` | Zakończ stosowanie (jeśli źródło jest ustawione) lub anuluj |

## Szczegóły zachowania

- Sam element źródłowy nigdy nie jest modyfikowany.
- Każde kliknięcie lub zaznaczenie obszarowe natychmiast stosuje właściwości źródłowe — nie ma kroku potwierdzenia.
- Zaznaczenie obszarowe postępuje zgodnie ze standardowymi regułami: przeciągnij **w prawo** dla zaznaczenia ścisłego (w pełni zawartego), przeciągnij **w lewo** dla zaznaczenia przecinającego (dowolne przecięcie).
- Kliknięcie elementu źródłowego jako celu jest ignorowane.
- Dla elementów z tekstem (**Tekst**, **Wymiary**, **Linie wielokierunkowe**) kopiowana jest tylko wysokość tekstu — czcionka, pogrubienie, kursywa i inne ustawienia stylu tekstu nie są dopasowywane.

## Powiązane polecenia

- [LayerMatch](../layer-match/) — przenoszenie zaznaczonych elementów na tę samą warstwę co źródło (tylko właściwość warstwy)
- [LayerMakeCurrent](../layer-make-current/) — ustawianie bieżącej warstwy rysunkowej z klikniętego elementu
