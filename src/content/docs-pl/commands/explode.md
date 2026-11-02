---
title: "Polecenie Explode — rozbicie polilinii lub bloku na części"
description: "Polecenie Explode rozbija polilinię na obiekty Line i Arc, a odniesienie do bloku na obiekty rysowane przez jego blok, w tym samym miejscu. Części wyglądają dokładnie jak oryginał."
keywords: [polecenie explode CAD, eksplodowanie polilinii CAD, rozbijanie polilinii na linie, konwersja polilinii na line i arc, kulmanlab]
group: edit
order: 19
---

# Explode

Polecenie `Rozbij` rozbija [polilinię](../polyline/) na osobne elementy [Line](../line/) i [Arc](../arc/) — po jednym na segment, dokładnie tam, gdzie znajdowały się własne wierzchołki polilinii. Fragmenty zastępują polilinię w tym samym miejscu i zachowują jej grubość linii, kolor, warstwę i typ linii.

Explode działa na obiektach **Polyline** i **odniesieniach do bloków**.

## Korzystanie z explode

Dwa sposoby uruchomienia, ten sam wzorzec co [Delete](../delete/):

**Najpierw zaznacz, potem rozbij** — najszybsza ścieżka:

1. Zaznacz jedną lub więcej polilinii na płótnie.
2. Wpisz `Rozbij` w terminalu albo wybierz **Explode** z rozwijanego menu panelu Edit.

Zaznaczone polilinie są natychmiast rozbijane — bez osobnego kroku potwierdzenia, ponieważ coś jest już zaznaczone.

**Aktywuj, potem zaznacz**:

1. Wpisz `Rozbij` albo wybierz **Explode** z rozwijanego menu, gdy nic nie jest zaznaczone.
2. **Zaznacz polilinie lub odniesienia do bloków** — klikaj, aby przełączać, lub przeciągnij, aby zaznaczyć obszar.
3. Naciśnij **Enter** lub **Spację**, aby potwierdzić i rozbić zaznaczone polilinie.

Podczas zaznaczania brane są tylko polilinie i odniesienia do bloków — kliknięcie Line, Circle czy innego obiektu nic nie robi, a przeciągnięcie obszaru pomija wszystko inne w środku lub na przecięciu.

## Co powstaje w wyniku

Każdy segment polilinii staje się osobnym elementem:

- **Prosty segment** staje się **Line**.
- **Segment łuku** (z [opcji Arc](../polyline/) polecenia Polyline) staje się **Arc**, dokładnie odpowiadającym środkowi, promieniowi i rozwarciu oryginalnej krzywej.

Każda powstała Line i Arc dziedziczy **grubość linii, kolor, warstwę, typ linii i skalę typu linii** polilinii źródłowej — wygląd geometrii się nie zmienia, zmienia się tylko to, że jest teraz kilka niezależnych elementów zamiast jednej połączonej polilinii.

**Odniesienie do bloku** staje się obiektami, które rysuje jego blok, umieszczonymi tam, gdzie pokazywało je odniesienie. Obiekty, które blok trzyma ukryte — inne stany bloku dynamicznego — są pomijane; każdy atrybut staje się zwykłym Text ze swoją wartością; części rysowane ByBlock przejmują kolor odniesienia, a części na warstwie 0 — jego warstwę. Zagnieżdżony blok wychodzi jako osobne odniesienie do bloku, które można rozbić dalej. Odniesienie skalowane różnie w X i Y nie jest brane, bo jego okręgi musiałyby stać się elipsami.

Rozbicie można cofnąć jednym krokiem za pomocą [Undo](../undo/), tak jak każdą inną edycję.

## Zaznaczanie podczas polecenia

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Dodaje do zaznaczenia lub usuwa z niego polilinię albo odniesienie do bloku pod kursorem; kliknięcie innego obiektu nic nie robi |
| **Przeciągnięcie w prawo** (ścisłe) | Zaznacza tylko polilinie i odniesienia do bloków całkowicie wewnątrz ramki |
| **Przeciągnięcie w lewo** (przecięcie) | Zaznacza polilinie i odniesienia do bloków przecinające krawędź ramki |
| **Enter** / **Space** | Potwierdza i rozbija zaznaczenie |

## Obsługiwane elementy

| Element | Obsługiwany |
|---------|-------------|
| Polyline / Rectangle | Tak |
| Odniesienie do bloku | Tak, chyba że skala w X i Y jest różna |
| Line, Arc, Circle, Ellipse | Nie — nie ma nic do rozbicia |
| Text, Spline, Dimension, Leader, Hatch | Nie |
