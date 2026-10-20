---
title: "Polecenie PointInterval — punkty w stałym odstępie wzdłuż obiektu"
description: "Polecenie PointInterval umieszcza punkty w wpisanym odstępie wzdłuż linii, polilinii, łuku, okręgu, elipsy lub splajnu, zaczynając od końca, przy którym klikniesz, i pokazuje je w podglądzie podczas wpisywania długości."
keywords: ["punkty co odstęp CAD", "punkty w stałej odległości na linii CAD", "CAD pomiar wzdłuż obiektu", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

Polecenie `PunktyCoOdstęp` umieszcza [punkty](../point/) w stałym odstępie wzdłuż obiektu, tak jak oznacza się pikiety na trasie. Sam obiekt się nie zmienia: punkty to nowe obiekty na bieżącej warstwie i w bieżącym kolorze, przydatne do przyciągania.

## Punkty co odstęp

1. Wpisz `PunktyCoOdstęp` w terminalu albo wybierz **Point Interval** z rozwijanego menu szyków w panelu Edit.
2. **Kliknij obiekt przy końcu, od którego zacząć** — linię, polilinię, łuk, okrąg, elipsę lub splajn. Wszystko inne jest odrzucane i można wybrać ponownie.
3. **Wpisz długość odstępu.** Punkty pojawiają się na obiekcie w podglądzie podczas pisania.
4. Naciśnij **Enter** lub **Space**, aby je umieścić. Polecenie się kończy.

## Gdzie trafiają punkty

- Pierwszy punkt trafia jeden odstęp od początku, a kolejne co jeden odstęp, mierzone wzdłuż obiektu, łącznie z krzywymi. Na sam początek nie trafia żaden punkt.
- Na obiekcie otwartym — linii, otwartej polilinii, łuku, części elipsy lub otwartym splajnie — mierzy się od końca, przy którym kliknięto. Reszta przy dalszym końcu zostaje nieoznaczona: dalszy koniec dostaje punkt tylko wtedy, gdy odstęp mieści się dokładnie.
- Na obiekcie zamkniętym — okręgu, zamkniętej polilinii, pełnej elipsie lub zamkniętym splajnie — mierzy się od własnego początku obiektu, gdziekolwiek klikniesz: okrąg od kąta 0 przeciwnie do ruchu wskazówek zegara, zamknięta polilinia od pierwszego wierzchołka. Punkty kończą się przed początkiem.
- Długość 0 lub mniejsza, dłuższa niż obiekt albo dająca ponad 32767 punktów jest odrzucana: terminal podaje powód i ją czyści, aby można było wpisać ponownie.

Backspace usuwa ostatni znak. Escape zaczyna od nowa, by wybrać inny obiekt. Enter lub Space przed wybraniem obiektu kończy polecenie.

---

*Powiązane: [Point Divide](../point-divide/) — podział obiektu na zadaną liczbę równych długości, oraz [Point](../point/) — pojedyncze punkty.*
