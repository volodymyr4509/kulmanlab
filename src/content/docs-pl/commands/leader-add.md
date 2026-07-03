---
sidebar_position: 12
title: Polecenie Linia prowadząca+ — Dodawanie ramienia z grotem do istniejącej linii wielokierunkowej w KulmanLab CAD
description: Polecenie Linia prowadząca+ dodaje nowe ramię z grotem do istniejącej linii wielokierunkowej. Nowe ramię dzieli dogleg, tekst i całe formatowanie wybranej linii prowadzącej. Dwa kliknięcia — zaznacz linię prowadzącą, umieść nowy grot.
keywords: [CAD dodawanie ramienia linii prowadzącej, polecenie leader+, dodaj strzałkę do linii prowadzącej, ramię linii wielokierunkowej, kulmanlab]
---

# Linia prowadząca+

Polecenie `leader+` dodaje nowe ramię z grotem do istniejącej linii wielokierunkowej. Nowe ramię wskazuje od istniejącego doglegs linii prowadzącej do nowego grota, który klikasz. Całe formatowanie — pozycja doglegs, tekst, typ grota i rozmiar — jest dziedziczone z wybranej linii prowadzącej.

## Dodawanie ramienia

1. Wpisz `leader+` w terminalu.
2. **Kliknij istniejącą linię wielokierunkową**, aby ją zaznaczyć.
3. **Kliknij nowy grot strzałki** lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej. Linia podglądu pokazuje od kursora do doglegs linii prowadzącej.

Ramię jest umieszczane i polecenie pozostaje aktywne — możesz od razu kliknąć inną linię prowadzącą, aby dodać więcej ramion. Naciśnij **Enter**, **Spację** lub **Escape**, aby zakończyć.

```
  Przed:                        Po:
  ◄── ramię 1                   ◄── ramię 1
       \                               \
        ●──── dogleg ──── tekst         ●──── dogleg ──── tekst
                                       /
                                  ramię 2 ──►  (nowy grot który kliknąłeś)
```

## Wprowadzanie współrzędnych grota

Zamiast klikać możesz wpisać dokładną pozycję:

1. Wpisz wartość X.
2. Naciśnij `,` — terminal potwierdza zablokowanie X.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby umieścić.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Zacznij wpisywać współrzędną X |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Enter` | Potwierdź wpisaną współrzędną i umieść ramię |
| `Enter` / `Spacja` | Zakończ (gdy nie jest aktywne żadne wejście) |
| `Escape` | Anuluj i zresetuj |

## Uwagi

- Można zaznaczać tylko elementy **Linia wielokierunkowa** — kliknięcie jakiegokolwiek innego typu elementu nic nie robi.
- Nowe ramię pochodzi z istniejącego doglegs; wybierasz tylko miejsce, gdzie trafia grot.
- Nie ma limitu liczby ramion, które może mieć linia wielokierunkowa.

## Powiązane polecenia

| Polecenie | Co robi |
|-----------|---------|
| [Linia prowadząca](../leader/) | Tworzenie zupełnie nowej linii wielokierunkowej od zera |
| [Linia prowadząca−](../leader-remove/) | Usuwanie ramienia z linii wielokierunkowej mającej dwa lub więcej |
