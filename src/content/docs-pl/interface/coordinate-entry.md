---
title: "Wprowadzanie współrzędnych — punkty dokładne, względne, biegunowe"
description: "Gdy polecenie prosi o punkt, wpisz go zamiast klikać: X,Y dla dokładnego położenia, @X,Y, by mierzyć od ostatniego punktu, i odległość<kąt dla punktu biegunowego. Przełącznik Rel sprawia, że każdy wpisany punkt zaczyna się jako względny."
keywords: ["wprowadzanie współrzędnych CAD", "współrzędne względne CAD", "współrzędne biegunowe CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Wprowadzanie współrzędnych

Gdy polecenie prosi o punkt — początek [Line](../../commands/line/), narożnik [Rectangle](../../commands/rectangle/), punkt bazowy [Move](../../commands/move/) albo uchwyt, który przeciągasz — możesz go wpisać zamiast klikać. Zacznij wpisywać liczbę, a terminal pokaże, co wpisujesz; naciśnij **Enter** lub **Space**, aby umieścić punkt.

## Cztery sposoby zapisu punktu

| Wpisujesz | Punkt leży |
|---|---|
| `100,50` | W X 100, Y 50 |
| `@100,50` | 100 w X i 50 w Y od ostatniego punktu |
| `100<45` | 100 od początku układu, pod kątem 45° |
| `@100<45` | 100 od ostatniego punktu, pod kątem 45° |

Kąty są w stopniach, przeciwnie do ruchu wskazówek zegara od osi X, więc `@50<90` to 50 prosto w górę, a `@50<180` to 50 w lewo. Każda z wartości może być ujemna.

## Ostatni punkt

`@` mierzy od ostatniego punktu wskazanego lub wpisanego w dowolnym poleceniu — liczy się ostatnie kliknięcie poprzedniego polecenia, a także właśnie przeciągnięty uchwyt. Jeśli ostatniego punktu jeszcze nie ma, `@100,50` czyta się jako `100,50`. Ostatni punkt jest zapominany przy przejściu między przestrzenią modelu a układem oraz przy otwarciu rysunku.

## Rel: domyślnie względnie

Przełącznik **Rel** na pasku sterowania sprawia, że każdy wpisany punkt zaczyna się jako względny: gdy tylko wpiszesz pierwszą cyfrę, przed nią pojawia się `@`, więc `100,50` staje się `@100,50`. Naciśnij **Backspace** nad `@`, aby ten jeden punkt był bezwzględny. Gdy ostatniego punktu jeszcze nie ma, `@` nie jest dodawany. Rel jest domyślnie wyłączony i zapamiętywany z innymi przełącznikami paska sterowania.

## Klawisze podczas wpisywania

| Klawisz | Działanie |
|---|---|
| `0`–`9`, `.`, `-` | Wpisz liczbę; `-` tylko na początku |
| `@` | Uczyń punkt względnym, na początku X |
| `,` lub **Space** | Zakończ X i przejdź do Y |
| `<` | Zakończ X jako odległość i przejdź do kąta |
| **Enter** lub **Space** | Umieść punkt, gdy Y ma wartość |
| **←** **→** **Home** **End** | Przesuń kursor w wpisywanej wartości |
| **Backspace** | Usuń przed kursorem; na początku pustego Y wróć do X |

Punkt, którego nie da się odczytać jako liczb, zostaje w terminalu do poprawienia. Każdy wpisany punkt zostawia w historii terminala wiersz w postaci, w jakiej go wpisano — `Wpisano @100<45` — przed wierszem polecenia z miejscem, w którym wylądował.

## Wpisane punkty i śledzenie kąta

Gdy kursor jest zablokowany na promieniu śledzenia kąta, wpisana liczba daje odległość wzdłuż tego promienia, a nie X. Wpisanie najpierw `@` zaczyna pełny punkt, więc `@100,50` działa także na zablokowanym promieniu.

---

*Powiązane: [Śledzenie odległości](../distance-tracking/), aby wpisać długość wzdłuż zablokowanego kierunku, oraz [Vector Pins](../vector-pins/), aby mierzyć od przypiętego punktu.*
