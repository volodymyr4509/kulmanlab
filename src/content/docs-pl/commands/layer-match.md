---
title: LayerMatch — Przypisywanie warstw elementów do warstwy źródła
description: Polecenie LayerMatch przypisuje warstwę jednego lub więcej docelowych elementów, aby odpowiadała warstwie klikniętego elementu źródłowego.
keywords: [dopasuj warstwę, dopasowanie warstwy CAD, zmiana przypisania warstwy kulmanlab, zarządzanie warstwami CAD]
group: layer
order: 2
---

# LayerMatch

Polecenie `LayerMatch` przypisuje warstwę zaznaczonych elementów tak, aby odpowiadała warstwie klikniętego elementu źródłowego. Jest to najszybszy sposób na przeniesienie grupy obiektów na właściwą warstwę bez otwierania Menedżera warstw.

## Przepływ pracy

**Wstępne zaznaczenie, a następnie dopasowanie**:

1. Zaznacz elementy, których warstwę chcesz zmienić.
2. Wpisz `LayerMatch` lub kliknij przycisk **Dopasuj warstwę** na pasku narzędzi (ikona pędzla).
3. **Kliknij obiekt źródłowy** — ten, którego warstwę chcesz skopiować.
4. Wszystkie zaznaczone elementy natychmiast przechodzą na warstwę obiektu źródłowego.

**Aktywuj, a następnie zaznacz**:

1. Wpisz `LayerMatch` lub kliknij przycisk paska narzędzi bez niczego zaznaczonego.
2. **Wybierz elementy docelowe** — kliknij, aby przełączać poszczególne elementy, lub przeciągnij, aby zaznaczyć obszarem.
3. Naciśnij **Enter** lub **Spację**, aby potwierdzić zaznaczenie.
4. **Kliknij obiekt źródłowy** — jego warstwa jest stosowana do wszystkich elementów docelowych.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Enter` / `Spacja` | Potwierdź zaznaczenie docelowe i przejdź do fazy wyboru źródła |
| `Escape` | Resetuj — powróć do zaznaczenia docelowego lub anuluj całkowicie |

## Szczegóły zachowania

- Zmieniana jest tylko właściwość `warstwa` — kolor, typ linii, grubość linii i geometria pozostają nienaruszone.
- Sam obiekt źródłowy nie jest modyfikowany.
- Polecenie kończy się po kliknięciu źródła.
- Kliknięcie na pustym płótnie podczas fazy wyboru źródła nie ma efektu.
