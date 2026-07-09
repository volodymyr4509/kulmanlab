---
sidebar_position: 7
title: Polecenie Align — Przesuwanie, obracanie i skalowanie elementów za pomocą par punktów w KulmanLab CAD
description: Polecenie Align zmienia położenie zaznaczonych elementów za pomocą jednej lub dwóch par punktów źródłowych/docelowych — łączy przesunięcie, obrót i opcjonalne jednolite skalowanie w jednej operacji. Działa jak połączenie Move + Rotate + Scale.
keywords: [polecenie align CAD, wyrównywanie elementów CAD, przesuwanie obracanie skalowanie, wyrównanie parą punktów, odpowiednik ALIGN z AutoCAD, kulmanlab]
---

# Align

Polecenie `align` zmienia położenie zaznaczonych elementów za pomocą jednej lub dwóch par punktów źródłowych/docelowych. Z jedną parą zachowuje się dokładnie jak [Move](../move/) (tylko przesunięcie). Z dwiema parami obraca też zaznaczenie tak, aby kierunek źródło-do-źródła odpowiadał kierunkowi cel-do-celu, i może opcjonalnie przeskalować je tak, aby długość odcinka źródłowego odpowiadała długości odcinka docelowego — przesunięcie, obrót i skalowanie w jednej operacji.

## Dwa sposoby uruchamiania

**Wstępne zaznaczenie, a następnie wyrównanie** — najpierw zaznacz elementy, a następnie aktywuj:

1. Zaznacz jeden lub więcej elementów na płótnie.
2. Wpisz `align` w terminalu lub kliknij przycisk **Align** na pasku narzędzi.
3. **Kliknij pierwszy punkt źródłowy (S1)**, następnie **pierwszy punkt docelowy (D1)**.
4. **Kliknij drugi punkt źródłowy (S2)** lub naciśnij **Enter**, aby od razu zastosować wyrównanie z samym przesunięciem.
5. **Kliknij drugi punkt docelowy (D2)**.
6. Odpowiedz na pytanie o skalowanie: naciśnij **Y**, aby skalować, lub **N** / **Enter**, aby zachować pierwotny rozmiar.

**Aktywuj, a następnie zaznacz** — uruchom polecenie bez zaznaczonego niczego:

1. Wpisz `align` lub kliknij przycisk paska narzędzi.
2. **Zaznacz obiekty** — kliknij, aby przełączać poszczególne elementy, lub przeciągnij, aby zaznaczyć obszarem.
3. Naciśnij **Enter** lub **Spację**, aby potwierdzić zaznaczenie.
4. Kontynuuj S1 → D1 → S2 → D2 → pytanie o skalowanie jak powyżej.

> Terminal potrzebuje tylko tylu liter, ile wystarcza do jednoznaczności — wpisanie `al` i naciśnięcie **Enter** aktywuje Align bezpośrednio, ponieważ żadne inne polecenie nie zaczyna się od tych dwóch liter.

## Anatomia wyrównania

```
  Punkty źródłowe (na elementach):     Punkty docelowe:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Wynik: zaznaczenie jest przesuwane tak, aby S1 wylądował na D1,
  następnie obracane wokół D1 tak, aby kierunek S1→S2 odpowiadał
  kierunkowi D1→D2 — a jeśli zdecydujesz się skalować, zostaje
  przeskalowane tak, że |S1S2| staje się |D1D2|.
```

Podgląd widma podąża za kursorem na każdym etapie: podgląd przesunięcia podczas umieszczania D1, a następnie obrócony (przerywany) podgląd, gdy D2 jest pozycjonowany.

## Wyrównanie jednym punktem (tylko przesunięcie)

Po umieszczeniu D1 naciśnij **Enter** zamiast klikać drugi punkt źródłowy. Zaznaczenie zostaje przesunięte o wektor S1→D1 — bez obrotu i skalowania — identycznie jak w [Move](../move/) z S1 jako punktem bazowym i D1 jako celem.

## Wyrównanie dwoma punktami (przesunięcie + obrót + opcjonalne skalowanie)

Gdy S2 i D2 są już umieszczone:

- **Kąt obrotu** — różnica między kierunkiem docelowym (`D1 → D2`) a kierunkiem źródłowym (`S1 → S2`).
- **Pytanie o skalowanie** — pojawia się `scale objects to alignment points? [Yes/No] <N>`, z **No** jako domyślną wartością:
  - Naciśnij **Y**, aby dodatkowo przeskalować zaznaczenie równomiernie wokół D1, tak aby odległość `S1–S2` stała się odległością `D1–D2`.
  - Naciśnij **N** lub **Enter**, aby zachować pierwotny rozmiar — stosowane są tylko przesunięcie i obrót.

Naciśnięcie klawisza przy pytaniu o skalowanie natychmiast stosuje wyrównanie — nie ma osobnego kroku potwierdzenia po wybraniu Tak lub Nie.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Enter` / `Spacja` | Potwierdź zaznaczenie i przejdź do fazy S1 |
| `Enter` (w kroku S2) | Pomiń obrót — zastosuj wyrównanie z samym przesunięciem, używając S1 i D1 |
| `Y` | Zastosuj wyrównanie ze skalowaniem |
| `N` / `Enter` (przy pytaniu o skalowanie) | Zastosuj wyrównanie bez skalowania |
| `Escape` | Podczas umieszczania punktów: odrzuca punkty i wraca do fazy zaznaczania; bez zaznaczonego niczego: anuluje polecenie |

## Zaznaczanie podczas polecenia

Gdy polecenie zaczyna się w fazie zaznaczania:

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Przełącza element pod kursorem w/z zaznaczenia |
| **Przeciągnij w prawo** (ścisłe) | Dodaje elementy w całości wewnątrz ramki |
| **Przeciągnij w lewo** (przecinające) | Dodaje elementy przecinające granicę ramki |
| **Enter** / **Spacja** | Potwierdza zaznaczenie i przechodzi do fazy S1 |

## Po wyrównaniu

Wyrównane elementy pozostają zaznaczone w nowej pozycji, a polecenie kończy się automatycznie — uruchom **Align** ponownie lub przełącz się na [Move](../move/), [Rotate](../rotate/) lub [Scale](../scale/) bez ponownego zaznaczania.

## Align a Move

| | Align | Move |
|---|-------|------|
| Pary punktów | 1 (tylko przesunięcie) lub 2 (przesunięcie + obrót + skalowanie) | 1 (tylko przesunięcie) |
| Obrót | Tak, z drugą parą punktów | Nie |
| Skalowanie | Opcjonalne, z drugą parą punktów | Nie |
| Najlepsze do | Dopasowania jednego kształtu do drugiego za pomocą punktów odniesienia | Prostego repozycjonowania |

## Obsługiwane elementy

Align działa na każdym typie elementu obsługiwanym przez Move, Rotate i Scale — te same operacje `translate`, `rotate` i `scale`, których używają te polecenia, są stosowane po kolei, więc żaden nie jest wykluczony.
