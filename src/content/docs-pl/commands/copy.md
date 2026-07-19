---
title: Polecenie Copy — Duplikowanie elementów w nowej pozycji
description: Polecenie Copy tworzy przetłumaczone duplikaty zaznaczonych elementów, pozostawiając oryginały na miejscu. Obsługuje wstępne zaznaczanie, blokowanie kąta i dokładne wprowadzanie odległości. Kopie są umieszczane i polecenie kończy się; oryginały pozostają bez zmian.
keywords: [polecenie kopiowania CAD, duplikowanie elementów CAD, kopiowanie obiektów CAD, klonowanie geometrii CAD, blokowanie kąta kopiowania, dokładna odległość kopiowania, kulmanlab]
group: edit
order: 2
---

# Copy

Polecenie `copy` tworzy przetłumaczone duplikaty zaznaczonych elementów i umieszcza je z przesunięciem od punktu bazowego do punktu docelowego — oryginały pozostają dokładnie tam, gdzie są. To jedna kluczowa różnica od [Move](../move/): Kopiuj dodaje nowe elementy do rysunku; Move relokuje istniejące.

## Dwa sposoby uruchamiania

**Wstępne zaznaczenie, a następnie kopiowanie** — najpierw zaznacz elementy, a następnie aktywuj:

1. Zaznacz jeden lub więcej elementów na płótnie.
2. Wpisz `copy` w terminalu lub kliknij przycisk **Kopiuj** na pasku narzędzi.
3. **Kliknij punkt bazowy** lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
4. **Kliknij cel** — duplikaty pojawiają się przy przesunięciu baza→cel. Tutaj również działa wprowadzanie współrzędnych.

**Aktywuj, a następnie zaznacz** — uruchom polecenie bez zaznaczonego niczego:

1. Wpisz `copy` lub kliknij przycisk paska narzędzi.
2. **Zaznacz obiekty** — kliknij, aby przełączać poszczególne elementy, lub przeciągnij, aby zaznaczyć obszarem.
3. Naciśnij **Enter** lub **Spację**, aby potwierdzić zaznaczenie.
4. **Kliknij punkt bazowy**, a następnie **kliknij cel** (wprowadzanie współrzędnych dostępne na obu krokach).

```
  Przed:               Po:
  [element A]          [element A]  ← oryginały nienaruszone
  [element B]          [element B]
                       [kopia A]    ← nowe elementy
                       [kopia B]
```

Podgląd widma kopii podąża za kursorem od punktu bazowego do celu.

## Wprowadzanie współrzędnych

Na kroku punktu bazowego lub celu wpisz dokładną pozycję zamiast klikać:

1. Wpisz wartość X.
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby potwierdzić.

## Blokowanie kąta i dokładna odległość

Po ustawieniu punktu bazowego polecenie blokuje do osi 45° (0°, 45°, 90°, 135°, ...) gdy kursor jest wystarczająco daleko i blisko osi. Podczas blokowania wpisz odległość i naciśnij **Enter**, aby umieścić kopie dokładnie w tym przesunięciu.

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.` | Dodaj do wartości odległości |
| `-` | Ujemna odległość — odwraca kierunek wzdłuż osi (tylko jako pierwszy znak) |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Umieść kopie przy wpisanej odległości |

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Enter` / `Spacja` | Potwierdź zaznaczenie i przejdź do fazy punktu bazowego |
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X lub odległość przy zablokowanym kącie |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź współrzędną lub zastosuj kopiowanie przy wpisanej odległości |
| `Escape` | Anuluj i zresetuj |

## Zaznaczanie podczas polecenia

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Przełącza element pod kursorem w/z zaznaczenia |
| **Przeciągnij w prawo** (ścisłe) | Dodaje elementy w całości wewnątrz ramki |
| **Przeciągnij w lewo** (przecinające) | Dodaje elementy przecinające granicę ramki |
| **Enter** / **Spacja** | Potwierdza zaznaczenie |

## Po kopiowaniu

**Oryginały pozostają zaznaczone** — nowe kopie są dodawane do rysunku, ale zaznaczenie jest czyszczone i polecenie kończy się. Aby od razu pracować z kopiami, uruchom Kopiuj ponownie na zaznaczeniu lub uruchom nowe polecenie.

## Kopiuj a Przesuń

| | Kopiuj | Przesuń |
|---|------|------|
| Oryginały | Pozostają na miejscu | Usunięte z oryginalnej pozycji |
| Liczba wyników | Zwiększa się o liczbę skopiowanych elementów | Bez zmian |
| Po operacji | Oryginały nadal zaznaczone | Przeniesione elementy zaznaczone w nowej pozycji |
| Najlepsze do | Powtarzanie geometrii, symetryczne układy | Repozycjonowanie geometrii |

## Obsługiwane elementy

Kopiowanie działa na każdym typie elementu. Wszystkie elementy implementują `translate(dx, dy)` wewnętrznie, więc żaden nie jest wykluczony.
