---
title: Polecenie Explode — Rozbij Polilinię na Elementy Line i Arc
description: Polecenie Explode rozbija polilinię na osobne elementy Line i Arc, po jednym na segment, w tym samym miejscu. Każdy fragment zachowuje grubość linii, kolor, warstwę i typ linii polilinii źródłowej. Działa tylko na elementach Polyline.
keywords: [polecenie explode CAD, eksplodowanie polilinii CAD, rozbijanie polilinii na linie, konwersja polilinii na line i arc, kulmanlab]
group: edit
order: 16
---

# Explode

Polecenie `Rozbij` rozbija [polilinię](../polyline/) na osobne elementy [Line](../line/) i [Arc](../arc/) — po jednym na segment, dokładnie tam, gdzie znajdowały się własne wierzchołki polilinii. Fragmenty zastępują polilinię w tym samym miejscu i zachowują jej grubość linii, kolor, warstwę i typ linii.

Explode działa tylko na elementach **Polyline**.

## Korzystanie z explode

Dwa sposoby uruchomienia, ten sam wzorzec co [Delete](../delete/):

**Najpierw zaznacz, potem rozbij** — najszybsza ścieżka:

1. Zaznacz jedną lub więcej polilinii na płótnie.
2. Wpisz `Rozbij` w terminalu lub kliknij przycisk **Explode** w panelu Edit.

Zaznaczone polilinie są natychmiast rozbijane — bez osobnego kroku potwierdzenia, ponieważ coś jest już zaznaczone.

**Aktywuj, potem zaznacz**:

1. Wpisz `Rozbij` lub kliknij przycisk paska narzędzi, gdy nic nie jest zaznaczone.
2. **Zaznacz polilinie** — kliknij, aby przełączyć, lub przeciągnij, aby zaznaczyć obszar.
3. Naciśnij **Enter** lub **Spację**, aby potwierdzić i rozbić zaznaczone polilinie.

Podczas zaznaczania uwzględniane są tylko polilinie — kliknięcie Line, Circle lub dowolnego innego elementu nic nie robi, a przeciągnięcie obszaru ignoruje wszystko oprócz polilinii wewnątrz lub przecinających ramkę.

## Co powstaje w wyniku

Każdy segment polilinii staje się osobnym elementem:

- **Prosty segment** staje się **Line**.
- **Segment łuku** (z [opcji Arc](../polyline/) polecenia Polyline) staje się **Arc**, dokładnie odpowiadającym środkowi, promieniowi i rozwarciu oryginalnej krzywej.

Każda powstała Line i Arc dziedziczy **grubość linii, kolor, warstwę, typ linii i skalę typu linii** polilinii źródłowej — wygląd geometrii się nie zmienia, zmienia się tylko to, że jest teraz kilka niezależnych elementów zamiast jednej połączonej polilinii.

Rozbicie można cofnąć jednym krokiem za pomocą [Undo](../undo/), tak jak każdą inną edycję.

## Zaznaczanie podczas polecenia

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Przełącza polilinię pod kursorem w zaznaczeniu/poza nim; kliknięcie elementu innego niż polilinia nic nie robi |
| **Przeciągnięcie w prawo** (ścisłe) | Zaznacza tylko polilinie w całości wewnątrz ramki |
| **Przeciągnięcie w lewo** (przecinające) | Zaznacza polilinie przecinające granicę ramki |
| **Enter** / **Spacja** | Potwierdza i rozbija zaznaczone polilinie |

## Obsługiwane elementy

| Element | Obsługiwany |
|---------|-------------|
| Polyline / Rectangle | Tak |
| Line, Arc, Circle, Ellipse | Nie — nie ma nic do rozbicia |
| Text, Spline, Dimension, Leader, Hatch | Nie |
