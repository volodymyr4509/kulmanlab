---
sidebar_position: 5
title: Vector Pins — Przyciąganie wzdłuż linii odniesienia przez przypięte punkty w KulmanLab CAD
description: Vector Pins pozwalają przypiąć punkt przyciągania, najeżdżając na niego kursorem na pół sekundy, a następnie śledzić kursor wzdłuż przerywanych poziomych i pionowych linii odniesienia przechodzących przez przypięty punkt — wyrównuj nową geometrię z istniejącymi punktami bez linii konstrukcyjnych.
keywords: [vector pins, śledzenie przyciągania do obiektów, linie odniesienia, śledzenie wyrównania, śledzenie przyciągania CAD, linie konstrukcyjne, kulmanlab]
---

# Vector Pins

**Vector Pins** to pomoc rysunkowa pozwalająca wyrównywać nową geometrię z istniejącymi punktami bez rysowania linii konstrukcyjnych. Najedź kursorem na punkt przyciągania na pół sekundy, aby go *przypiąć* — pinezka rzutuje wtedy niewidzialne poziome i pionowe linie odniesienia, a kursor przyciąga się do nich, gdy tylko się zbliży. To odpowiednik śledzenia przyciągania do obiektów z desktopowych aplikacji CAD w KulmanLab CAD.

Funkcją steruje przełącznik **Pins** na pasku sterowania (obok Grid, Snap i ANGL). Jest **domyślnie włączona**, a ustawienie jest zachowywane między sesjami.

## Przypinanie punktu

1. Uruchom polecenie, które prosi o punkt — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/) itd.
2. Przesuń kursor nad punkt przyciągania istniejącej geometrii — znacznik punktu końcowego, środkowego lub środka.
3. **Przytrzymaj kursor nieruchomo przez 500 ms.** Znacznik zamienia się w wypełniony **kwadrat** w kolorze akcentu — punkt jest przypięty.
4. Powtarzaj, aby przypiąć tyle punktów, ile potrzebujesz. Każda pinezka nadal rzutuje swoje linie odniesienia.

Przypinanie działa też poza poleceniem: najechanie na **uchwyt** zaznaczonego elementu przypina go w ten sam sposób.

## Śledzenie wzdłuż linii odniesienia

Każdy przypięty punkt rzutuje dwie niewidzialne linie odniesienia — **poziomą** i **pionową** — przez swoje dokładne współrzędne. Gdy poruszasz kursorem:

- W odległości do **12 px** od pionowej linii pinezki kursor przyciąga się do niej: przez pinezkę przez cały widok rysowana jest przerywana linia w kolorze akcentu, a **znacznik X** pokazuje przyciągniętą pozycję. Twoja współrzędna X jest teraz *dokładnie* równa X pinezki.
- To samo dotyczy linii poziomej i współrzędnej Y pinezki.
- W pobliżu po jednej linii z każdej orientacji — nawet z **dwóch różnych pinezek** — kursor przyciąga się do ich **przecięcia**, a obie przerywane linie są widoczne. To umieszcza punkt dokładnie w (X pinezki A, Y pinezki B).

```
                    ┆ (przerywana, pionowa linia pinezki ■)
                    ┆
   ■ pinezka A ┄┄┄┄ ✕ ← kursor przyciągnięty do przecięcia:
                    ┆    X z pinezki B, Y z pinezki A
                    ┆
                    ■ pinezka B
```

Przyciągnięte współrzędne są brane bezpośrednio z pinezki, więc wyrównanie jest dokładne — bez zaokrągleń i dryfu zmiennoprzecinkowego.

## Priorytet przyciągania

Zwykłe przyciągania geometryczne — punkt końcowy, środkowy, środek i przecięcie — **mają pierwszeństwo** przed liniami odniesienia pinezek. Jeśli kursor jest bliżej przyciągania punktowego niż linii odniesienia, wygrywa przyciąganie punktowe. Śledzenie pinezek wypełnia luki między geometrią; nigdy nie blokuje przyciągania do samej geometrii.

## Łączenie z blokadą kąta

Vector pins współpracują ze śledzeniem kąta (przełącznik **ANGL** na pasku sterowania). Gdy polecenie zablokowało kursor na promieniu śledzenia kąta:

- Kursor pozostaje ograniczony do zablokowanego kierunku.
- Przyciąganie pinezek przełącza się na **przecięcia zablokowanego promienia z liniami odniesienia pinezek** (tylko przed początkiem promienia).

Odpowiada to na pytania typu *„gdzie kierunek 45° od mojego ostatniego punktu przecina wysokość środka tamtego okręgu?"* — zablokuj kąt, a kursor zaskoczy w punkcie przecięcia. Przyciąganie do promienia działa w każdym poleceniu z blokadą kąta: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader i ViewportCopy.

## Cykl życia pinezek

Pinezki służą bieżącej operacji, nie są trwałymi znacznikami. Wszystkie pinezki są czyszczone, gdy:

| Zdarzenie | Powód |
|-----------|-------|
| Uruchamia się **nowe polecenie** | Każda operacja zaczyna od czystego zestawu odniesień |
| Naciśnięto **Escape** | Standardowe zachowanie „anuluj wszystko" |
| Przełącznik **Pins** zostaje wyłączony | Wyłączenie funkcji usuwa jej stan |
| Przełączenie między **przestrzenią modelu a papieru** | Współrzędne pinezek dotyczą jednej przestrzeni |

W obrębie jednego polecenia możesz przypinać, rysować, przypinać ponownie i kontynuować — pinezki przeżywają każde kliknięcie polecenia wielopunktowego, takiego jak Polyline.

## Typowy przepływ pracy

Narysowanie linii zaczynającej się bezpośrednio pod środkiem okręgu:

1. Wpisz `line` (lub kliknij przycisk Line).
2. Najedź na **znacznik środka** okręgu na pół sekundy — zamienia się w kwadrat w kolorze akcentu.
3. Przesuń kursor w dół: w pobliżu pionu okręgu kursor blokuje się na przerywanej linii odniesienia.
4. Kliknij — linia zaczyna się dokładnie na współrzędnej X okręgu.
5. Kontynuuj linię jak zwykle; pinezka pozostaje dostępna dla kolejnych punktów.

## Uwagi

- Najechanie na 500 ms działa na każdym znaczniku przyciągania, do którego kursor może dotrzeć — łącznie z punktami przyciągania pojawiającymi się w trakcie polecenia.
- Najechanie na już przypięty punkt nic nie robi; nie ma odpinania przez najechanie. Wyczyść pinezki klawiszem **Escape** lub wyłączając **Pins**.
- Odległość przyciągania do linii odniesienia to te same 12 pikseli ekranu co przy zwykłym przyciąganiu punktowym, więc odczucie jest spójne na każdym poziomie powiększenia.
- Przypięte punkty są rysowane jako kwadraty w kolorze akcentu zamiast zwykłych znaczników przyciągania.
