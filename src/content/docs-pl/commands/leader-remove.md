---
title: "Polecenie Leader− — Usuwanie ramienia z grotem z linii wielokierunkowej w KulmanLab CAD"
description: "Polecenie Leader− usuwa jedno ramię z grotem z linii wielokierunkowej mającej dwa lub więcej. Najedź kursorem blisko ramienia do usunięcia — najbliższe ramię jest podświetlane. Dogleg, tekst i pozostałe ramiona są zachowywane."
keywords: [CAD usuwanie ramienia linii prowadzącej, polecenie leader-, usuń strzałkę z linii prowadzącej, usuwanie ramienia linii wielokierunkowej, kulmanlab]
group: markup
order: 3
---

# Leader−

Polecenie `leader-` usuwa jedno ramię z grotem z istniejącej linii wielokierunkowej. Etykieta tekstowa, dogleg i wszystkie pozostałe ramiona są zachowywane — usuwane jest tylko zaznaczone ramię. Linia wielokierunkowa z tylko jednym ramieniem nie może mieć usuniętego ramienia.

## Usuwanie ramienia

1. Wpisz `leader-` w terminalu.
2. **Kliknij linię wielokierunkową** mającą dwa lub więcej ramion. Jeśli kliknięta linia prowadząca ma tylko jedno ramię, terminal pokazuje błąd i czeka na prawidłowe zaznaczenie.
3. **Przesuń kursor blisko ramienia**, które chcesz usunąć — najbliższe ramię jest podświetlane znacznikiem.
4. **Kliknij**, aby usunąć to ramię.

Ramię zostaje usunięte i polecenie pozostaje aktywne — możesz od razu kliknąć inną linię prowadzącą (lub tę samą), aby usunąć więcej ramion. Naciśnij **Enter**, **Spację** lub **Escape**, aby zakończyć.

```
  Przed:                    Po:
  ◄── ramię 1               ◄── ramię 1
       \                          \
        ●──── dogleg ──── tekst    ●──── dogleg ──── tekst
       /
  ramię 2 ──►  ← to ramię usunięte
```

## Jak jest określane najbliższe ramię

Polecenie mierzy prostopadłą odległość od kursora do segmentów linii każdego ramienia (w tym segmentu od ostatniego punktu ramienia do doglegs). Ramię z najmniejszą odległością jest podświetlane i zostanie usunięte po kliknięciu.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Enter` / `Spacja` | Zakończ usuwanie ramion |
| `Escape` | Anuluj i zresetuj |

## Uwagi

- Linia prowadząca z **tylko jednym ramieniem** jest chroniona — musisz najpierw dodać ramię przed usunięciem.
- Pozycja doglegs i treść tekstu są zawsze zachowywane niezależnie od tego, które ramię jest usuwane.

## Powiązane polecenia

| Polecenie | Co robi |
|-----------|---------|
| [Leader](../leader/) | Tworzenie nowej linii wielokierunkowej od zera |
| [Leader+](../leader-add/) | Dodawanie ramienia do istniejącej linii wielokierunkowej |
