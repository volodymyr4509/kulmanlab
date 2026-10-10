---
title: "Polecenie Polygon — rysowanie wielokątów foremnych ze środka lub z boku w KulmanLab CAD"
description: "Polecenie Polygon rysuje wielokąt foremny o 3–1024 bokach na podstawie środka i promienia albo jednego boku. Wynikiem jest zamknięta LWPOLYLINE, więc obowiązują wszystkie polecenia edycji polilinii."
keywords: ["polecenie wielokąt CAD", "rysowanie wielokąta foremnego CAD", "sześciokąt ośmiokąt pięciokąt CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

Polecenie `polygon` rysuje wielokąt foremny — wszystkie boki i kąty równe — o 3–1024 bokach. Wpisz `polygon` w terminalu. Wynikiem jest **zamknięta `LWPOLYLINE`**, więc po umieszczeniu zachowuje się jak każda inna [Polyline](../polyline/) i obowiązują wszystkie edycje polilinii.

## Rysowanie wielokąta

1. Wpisz `polygon` w terminalu i podaj **liczbę boków** — liczbę całkowitą od 3 do 1024 — po czym naciśnij **Enter** lub **Space**. Monit jest wstępnie wypełniony ostatnio użytą liczbą (za pierwszym razem 4); zacznij pisać, aby ją zastąpić. Cokolwiek innego jest odrzucane i zostaje w monicie do poprawienia.
2. **Kliknij środek** albo wpisz `X,Y` i naciśnij **Enter**, aby podać dokładną współrzędną. Naciśnij najpierw `E`, aby zamiast tego zacząć od boku (patrz niżej).
3. **Kliknij promień** — wielokąt jest podglądany na żywo — albo wpisz promień i naciśnij **Enter** lub **Space**.
4. Wielokąt zostaje umieszczony, a polecenie się kończy.

## Opcje

| Opcja | Klawisz | Skutek |
|---|---|---|
| Edge | `E` | Pierwszy punkt staje się jednym końcem boku zamiast środkiem. Wybierz drugi koniec; pozostałe wierzchołki budowane są przeciwnie do ruchu wskazówek zegara, na lewo od boku biegnącego od pierwszego do drugiego końca. Naciśnij `E` ponownie, aby wrócić do środka. |
| Inside | `I` | Domyślnie włączona i zachowywana od jednego wielokąta do następnego. Włączona: wierzchołki leżą na okręgu o podanym promieniu. Wyłączona: wielokąt leży na zewnątrz tego okręgu, a środek każdego boku na nim. |

- Kliknięcie umieszcza wierzchołek (Inside włączona) lub środek boku (Inside wyłączona) dokładnie tam, gdzie jest kursor, więc kursor ustala też orientację.
- Wpisany promień nie ma kierunku, w którym można celować, więc wielokąt leży najniższym bokiem poziomo — chyba że włączona jest blokada kąta, wtedy podąża za zablokowanym kątem.
- Każda opcja jest oferowana w swoim kroku i można ją przełączyć nawet w trakcie wpisywania liczby.

## Skróty klawiszowe

| Klawisz | Działanie |
|---|---|
| `0`–`9`, `.` | Wpisanie liczby boków, promienia, współrzędnej lub długości |
| `E` | Włączenie lub wyłączenie Edge (krok pierwszego punktu) |
| `I` | Włączenie lub wyłączenie Inside (krok promienia) |
| `Enter` / `Space` | Zatwierdzenie liczby boków lub promienia |
| `Escape` | Anulowanie |

## DXF — obiekt LWPOLYLINE

Wielokąt jest zapisywany jako zamknięta `LWPOLYLINE` z jednym wierzchołkiem na każdy narożnik; DXF nie ma osobnego typu wielokąta. Wszystkie właściwości — współrzędne wierzchołków, kolor, warstwa, typ linii, skala typu linii i grubość — przenoszą się bez strat, a każda przeglądarka DXF odczyta go jako zamkniętą polilinię.
