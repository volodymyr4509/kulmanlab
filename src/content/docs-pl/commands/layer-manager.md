---
title: LayerManager — Zarządzaj wszystkimi warstwami w jednej tabeli
description: Polecenie LayerManager otwiera tabelę wszystkich warstw rysunku, pozwalając dodawać warstwy, usuwać nieużywane oraz edytować w miejscu zamrożenie, blokadę, wydruk, kolor, grubość i rodzaj linii każdej z nich.
keywords: [menedżer warstw, tabela warstw CAD, zarządzanie warstwami CAD, dodaj warstwę CAD, usuń warstwę CAD, usuwanie nieużywanej warstwy, zamroź zablokuj drukuj warstwę, zarządzanie warstwami kulmanlab]
group: layer
order: 1
---

# LayerManager

Polecenie `LayerManager` otwiera tabelę z wszystkimi warstwami rysunku, w której ustawienia **Freeze**, **Lock**, **Plot**, **Kolor**, **Grubość linii** i **Rodzaj linii** edytuje się bezpośrednio w wierszu. To centralne miejsce, by dodawać warstwy, usuwać nieużywane i regulować zachowanie istniejących — pozostałe polecenia warstw ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) robią po jednej konkretnej rzeczy, nie otwierając go.

## Otwieranie Menedżera warstw

- Wpisz `LayerManager` w terminalu, **lub**
- Kliknij przycisk **Layer Manager** na panelu warstw.

Okno dialogowe otwiera się jako pływający panel; nie trzeba niczego wcześniej zaznaczać.

## Tabela warstw

| Kolumna | Co kontroluje |
|---------|-----------------|
| Name | Nazwa warstwy, wyświetlana w tabeli tylko do odczytu (ustawiana raz, przy tworzeniu) |
| Freeze | Ukrywa elementy warstwy i wyklucza je z zaznaczania, dopóki nie zostanie odmrożona |
| Lock | Zapobiega edycji elementów na warstwie, bez ich ukrywania |
| Plot | Czy elementy warstwy są uwzględniane przy drukowaniu lub eksporcie do PDF |
| Color | Kolor ACI warstwy — kliknij próbkę, aby otworzyć wybór koloru |
| Lineweight | Grubość linii warstwy — kliknij chip, aby otworzyć wybór grubości |
| Linetype | Wzór kreskowania warstwy — kliknij chip, aby otworzyć wybór typu linii |
| ✕ | Usuwa warstwę, gdy nic jej nie używa — zobacz [Usuwanie warstwy](#usuwanie-warstwy) |

Przełączenie Freeze, Lock lub Plot działa natychmiast — nie ma osobnego kroku zapisu. Elementy ustawione na **ByLayer** dla koloru, grubości linii lub typu linii (wartość domyślna) przyjmują to, co ustawisz tutaj; elementy z własnym jawnym nadpisaniem pozostają bez zmian.

## Dodawanie warstwy

1. Kliknij **+ Add Layer** na dole tabeli.
2. Wpisz nazwę i naciśnij **Enter**, aby potwierdzić, lub **Escape**, aby anulować.

Nazwy warstw mogą zawierać litery, cyfry, spacje oraz `_`, `-`, `$`. Nazwa pusta, już używana lub zawierająca inny znak jest odrzucana z błędem wyświetlanym w linii, a wiersz pozostaje otwarty do ponownej próby.

Nowe warstwy zaczynają jako **odmrożone, odblokowane, drukowalne**, z kolorem 7 (biały/czarny), grubością linii Default i typem linii Continuous — te same wartości domyślne, które [Import](../import/) przypisuje warstwie `0` w pustym rysunku.

## Usuwanie warstwy

Każdy wiersz kończy się przyciskiem **✕**, który usuwa warstwę z rysunku. Usunięcie następuje natychmiast — nie ma kroku potwierdzenia — ale jest oferowane wyłącznie dla warstw, od których nic nie zależy:

| Sytuacja | Stan przycisku |
|----------|----------------|
| Warstwa jest pusta | Aktywny — *Delete layer* |
| Warstwa jest przypisana do co najmniej jednego obiektu | Wyłączony — *Cannot delete: assigned to at least one entity* |
| Warstwa `0` | Brak przycisku |

**„W użyciu" obejmuje cały rysunek**, nie tylko to, na co właśnie patrzysz. Obiekt leżący na arkuszu (przestrzeni papieru) liczy się dokładnie tak samo jak obiekt w przestrzeni modelu, więc warstwa może wyglądać na pustą na ekranie i mimo to odmówić usunięcia. Warstwy zamrożone nie są wyjątkiem: zamrożenie ukrywa obiekty, ale nie zdejmuje z nich przypisania, więc zamrożona warstwa z obiektami pozostaje nieusuwalna.

Warstwy `0` nie da się usunąć nigdy. To warstwa zapasowa, którą każdy rysunek ma na pewno, dlatego przycisk nie jest dla niej w ogóle rysowany, zamiast być pokazywany jako wyłączony.

### „…is now in use and can't be deleted"

Czasem ✕ wygląda na dostępny, ale kliknięcie zostaje odrzucone banerem u góry panelu:

```
"WALLS" is now in use and can't be deleted
```

To nie jest sprzeczność. Ustalenie, które warstwy są w użyciu, wymaga przejścia po wszystkich obiektach rysunku, więc wynik jest buforowany i przebudowywany tylko wtedy, gdy zmieni się liczba obiektów — tanio przy setkach obiektów, już nie przy setkach tysięcy. Przeniesienie istniejącego obiektu na warstwę nie zmienia tej liczby, więc wyłączony stan wiersza może być przez moment nieaktualny. Kliknięcie sprawdza wszystko od nowa, zanim cokolwiek usunie — i dlatego odmowa następuje przy kliknięciu, a nie warstwa znika, gdy coś jeszcze się do niej odwołuje.

Zamknij baner jego własnym **✕**. Warstwa pozostaje nietknięta.

## Czego tu nie zrobisz

Tabela nie pokazuje, która warstwa jest *bieżąca*; ustawia się to z listy rozwijanej panelu warstw albo poleceniem [LayerMakeCurrent](../layer-make-current/), a nie w tym oknie. Nazwy warstw są też ustalane przy tworzeniu — warstwę można usunąć i utworzyć na nowo, ale nie zmienić jej nazwy.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Enter` | Potwierdź nazwę nowej warstwy (podczas dodawania) |
| `Escape` | Anuluj dodawanie warstwy lub zamknij okno |

## Powiązane polecenia

| Polecenie | Co robi |
|-----------|---------|
| [LayerMakeCurrent](../layer-make-current/) | Ustawia bieżącą warstwę na warstwę klikniętego elementu |
| [LayerMatch](../layer-match/) | Przypisuje zaznaczone elementy do warstwy elementu źródłowego |
| [LayerIsolate](../layer-isolate/) | Zamraża wszystkie warstwy oprócz warstw zaznaczonych elementów |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Odmraża wszystkie warstwy w jednym kroku |
