---
title: "Polecenie Point — umieszczanie punktów na rysunku w KulmanLab CAD"
description: "Polecenie Point umieszcza punkt przy każdym kliknięciu, wpisanym X,Y lub odległości wzdłuż zablokowanego kierunku, aż do Enter, Space lub Escape. Punkty są rysowane jako kropka, niosą bieżącą warstwę i kolor oraz podróżują jako obiekty DXF POINT."
keywords: ["polecenie punktu CAD", "umieść punkt CAD", "obiekt DXF POINT", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

Polecenie `Punkt` umieszcza punkt przy każdym wskazaniu i pozostaje aktywne, dopóki nie naciśniesz Enter, Space lub Escape. Punkt to położenie bez rozmiaru: rysowany jest jako mała kropka i niesie bieżącą warstwę oraz kolor. Zapisywany jest jako obiekt `POINT`.

## Umieszczanie punktów

1. Wpisz `Punkt` w terminalu albo kliknij **Point**, ostatni przycisk w panelu Shapes.
2. **Kliknij** tam, gdzie ma być punkt, albo wpisz `X,Y` i naciśnij **Enter**, aby podać dokładne położenie. Każde wskazanie umieszcza punkt, a terminal zapisuje jego współrzędne; polecenie pozostaje aktywne dla następnego.
3. Albo zablokuj kierunek od [szpilki wektora](../../interface/vector-pins/) i wpisz odległość — punkt ląduje dokładnie tak daleko wzdłuż niego.
4. Naciśnij **Enter**, **Space** lub **Escape**, aby zakończyć. Enter i Space kończą tylko wtedy, gdy nic nie jest wpisywane.

## Jak wygląda punkt

Punkt jest rysowany jako kropka o promieniu 1,5 px przy każdym powiększeniu, więc pozostaje widoczny po oddaleniu i nie rośnie po przybliżeniu. Styl punktów rysunku (`$PDMODE` i `$PDSIZE`) nie jest jeszcze odczytywany, więc każdy punkt jest kropką, cokolwiek mówi DXF.

## Edycja punktów

Zaznaczony punkt ma jeden uchwyt, który go przesuwa. Zaznaczanie oknem obejmuje punkt, gdy leży wewnątrz okna, przy przeciąganiu w dowolną stronę.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) i [Scale](../scale/) działają na punktach jak na każdym innym obiekcie. Okno właściwości pokazuje Position X i Position Y, a także kolor i warstwę.

## DXF — obiekt POINT

Punkty są odczytywane z DXF i zapisywane do niego jako obiekty `POINT` z położeniem, kolorem i warstwą (kody grup 10/20, 62 i 8) i podróżują też przez zapisany JSON. Dawniej były pomijane przy imporcie. [Export Manager](../export-manager/) wymienia Points w osobnym wierszu, więc można je pominąć w eksporcie.

---

*Powiązane: [Line](../line/) — to samo wpisywanie współrzędnych, oraz [Vector Pins](../../interface/vector-pins/) — umieszczanie punktu w ustalonej odległości wzdłuż kierunku.*
