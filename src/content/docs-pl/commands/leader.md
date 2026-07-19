---
title: Leader — Adnotacja linii wielokierunkowej z grotem i tekstem
description: "Polecenie Leader rysuje czterofazową adnotację linii wielokierunkowej: grot strzałki, dogleg, pozycja tekstu i wpisana etykieta. Kierunek tekstu dostosowuje się automatycznie na podstawie pozycji doglegs. Tylko import w DXF — linie prowadzące nie są zapisywane przy zapisywaniu."
keywords: [polecenie linii prowadzącej CAD, adnotacja linii wielokierunkowej, linia prowadząca CAD, adnotacja ze strzałką i etykietą, dogleg linii prowadzącej, kierunek tekstu CAD, kulmanlab]
group: markup
order: 1
---

# Leader

Polecenie `leader` rysuje adnotację linii wielokierunkowej w czterech krokach: grot dotykający cechy, linia prowadząca zginająca się w doglegs, kotwica tekstu i wpisana etykieta. Ze wszystkich poleceń adnotacji, Linia prowadząca jest jedynym, które zawiera interaktywną fazę wprowadzania tekstu z podglądem migającego kursora.

## Anatomia linii wielokierunkowej

```
  ◄── grot strzałki  (krok 2 — dotyka cechy)
      \
       \  linia prowadząca
        \
         ●──── dogleg (krok 3) ──── kotwica tekstu (krok 4)
                                    Tekst etykiety  (krok 5)
```

- **Grot strzałki** — spiczasty koniec umieszczony przy opisywanej cesze.
- **Dogleg** — łokieć, gdzie linia prowadząca zgina się w kierunku tekstu.
- **Kotwica tekstu** — gdzie etykieta jest pozycjonowana. Tekst wyrównuje się automatycznie po lewej lub prawej stronie.

## Rysowanie linii prowadzącej

1. Wpisz `leader` w terminalu lub kliknij przycisk **Linia prowadząca** na pasku narzędzi.
2. **Kliknij grot strzałki** lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
3. **Kliknij dogleg** — zgięcie w linii prowadzącej. Kąt blokuje do przyrostów 45°; wpisz długość i naciśnij **Enter** dla precyzyjnego umieszczenia. Lub wpisz `X,Y`, aby wprowadzić absolutną współrzędną.
4. **Kliknij pozycję tekstu** — gdzie etykieta jest zakotwiczona. Te same opcje mają zastosowanie: kliknięcie, blokowanie kąta + długość lub `X,Y`.
5. **Wpisz tekst etykiety** — podgląd na płótnie aktualizuje się na żywo z migającym kursorem. Naciśnij **Enter**, aby umieścić.

## Wprowadzanie współrzędnych (wszystkie fazy punktów)

Na każdym kroku wybierania punktu (grot, dogleg, pozycja tekstu) możesz wpisać dokładną współrzędną zamiast klikać:

1. Wpisz wartość X (cyfry, `.` lub `-`).
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]` potwierdzając zablokowanie X.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby umieścić punkt.

## Blokowanie kąta (kroki 3 i 4)

Po każdym umieszczonym punkcie polecenie przyciąga do osi 45°, gdy kursor jest wystarczająco daleko. Podczas blokowania:
- Podgląd przyciąga do osi.
- Wpisz długość i naciśnij **Enter**, aby umieścić następny punkt w tej dokładnej odległości.

Blokowanie kąta i wprowadzanie współrzędnych wykluczają się wzajemnie — gdy wpiszesz cyfrę bez poprzedniego `,`, polecenie interpretuje to jako odległość (blokowanie kąta musi być aktywne). Aby zamiast tego wprowadzić absolutną współrzędną, zacznij od liczby X, a następnie przecinka.

## Edycja etykiety tekstowej

Podczas wpisywania etykiety w kroku 5 możesz nawigować i edytować tekst przed umieszczeniem:

| Klawisz | Akcja |
|---------|-------|
| Dowolny znak drukowalny | Wstaw w pozycji kursora |
| `←` / `→` | Przesuń kursor w lewo lub prawo |
| `Backspace` | Usuń znak po lewej stronie kursora |
| `Delete` | Usuń znak po prawej stronie kursora |
| `Enter` | Umieść linię prowadzącą |

## Automatyczny kierunek tekstu

Wyrównanie tekstu dostosowuje się do pozycji kursora względem doglegs:

| Pozycja kursora | Kierunek tekstu |
|-----------------|---------------|
| **Po prawej** stronie doglegs | Od lewej do prawej od kotwicy tekstu |
| **Po lewej** stronie doglegs | Od prawej do lewej (zakotwiczony po prawej stronie) |

Żadna ręczna regulacja nie jest potrzebna — przesuń kursor na stronę, po której chcesz etykietę, a wyrówna się poprawnie.

## Skróty klawiaturowe

**Fazy punktów (grot, dogleg, pozycja tekstu)**

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Zacznij wpisywać współrzędną X (następnie `,`, aby zablokować X i wprowadzić Y) |
| `,` | Potwierdź X i przejdź do wprowadzania Y |
| `0`–`9`, `.`, `-` | Buduj odległość przy zablokowanym kącie |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź wpisaną współrzędną lub odległość |

**Faza wprowadzania tekstu**

| Klawisz | Akcja |
|---------|-------|
| Znak drukowalny | Wstaw przy kursorze |
| `←` / `→` | Przesuń kursor |
| `Backspace` | Usuń po lewej |
| `Delete` | Usuń po prawej |
| `Enter` | Umieść linię prowadzącą |

| Klawisz | Akcja |
|---------|-------|
| `Escape` | Anuluj i zresetuj do kroku 2 |

## Edytowanie istniejącej linii prowadzącej

**Dwukrotnie kliknij** umieszczoną linię wielokierunkową, aby ponownie otworzyć edytor tekstu w trybie **rich**. W trybie rich możesz stosować pogrubienie, kursywę oraz nadpisania czcionki lub wysokości dla poszczególnych znaków, a także wstawiać podziały wierszy za pomocą `Enter`. Naciśnij **Escape**, aby zatwierdzić i zamknąć.

Zobacz [Edytor tekstu — tryb rich](../../interface/text-editor/#rich-mode) w celu uzyskania pełnej dokumentacji.

## Dodawanie i usuwanie ramion

- Aby dodać dodatkowe ramię z grotem do istniejącej linii prowadzącej: [Leader+](../leader-add/)
- Aby usunąć ramię z linii prowadzącej mającej dwa lub więcej: [Leader−](../leader-remove/)

## DXF — tylko import

**Linie prowadzące są tylko do importu.** Elementy `MLEADER` z plików DXF są poprawnie odczytywane i wyświetlane, ale linie prowadzące narysowane w edytorze **nie są zapisywane** przy zapisywaniu pliku DXF. Używaj linii prowadzących do wizualnej adnotacji; unikaj polegania na nich w przepływach pracy z pełnym zapisem i odczytem.
