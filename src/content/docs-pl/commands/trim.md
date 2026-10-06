---
title: Polecenie Trim — Cięcie segmentów na przecięciach
description: Polecenie Trim usuwa część Line, Arc, Circle, Ellipse lub Polyline między dwoma sąsiednimi punktami przecięcia najbliższymi kursorowi. Podgląd pokazuje dokładnie, który segment zostanie wycięty przed kliknięciem.
keywords: [polecenie przytnij CAD, przycinanie linii CAD, przycinanie okręgu CAD, przycinanie łuku CAD, przycinanie elipsy CAD, przycinanie polilinii CAD, cięcie linii na przecięciu, podgląd przycinania po najechaniu, kulmanlab]
group: edit
order: 8
---

# Trim

Polecenie `Utnij` usuwa część [Line](../line/), [Arc](../arc/), [Circle](../circle/), [Ellipse](../ellipse/) lub [Polyline](../polyline/) leżącą między dwoma sąsiednimi punktami przecięcia, dzieląc element na jedną lub więcej pozostałych części. Segment do wycięcia jest określany przez pozycję kursora — najedź kursorem na część, którą chcesz usunąć, i kliknij, aby ją przyciąć.

## Przycinanie elementu

1. Wpisz `Utnij` w terminalu lub kliknij przycisk **Przytnij** na pasku narzędzi.
2. **Najedź kursorem na segment**, który chcesz usunąć — podgląd dokładnie podświetla część, która zostanie wycięta.
3. **Kliknij**, aby usunąć ten segment.

Polecenie pozostaje aktywne po każdym przycięciu, dzięki czemu możesz kontynuować najeżdżanie kursorem i klikanie, aby wycinać więcej segmentów — na tym samym elemencie lub na innym. Naciśnij **Enter**, **Spację** lub **Escape**, aby wyjść.

```
  Przed:                     Po przycięciu środkowego segmentu:

  ──────●──────●──────        ──────●          ●──────
      przecięcie  przecięcie       (lewa część)  (prawa część)
                                   (środkowy segment usunięty)
```

## Jak jest określany segment przycinania

Polecenie rzutuje pozycję kursora na wskazywany element i znajduje wszystkie punkty przecięcia, które ten element ma z innymi elementami. Te przecięcia dzielą element na segmenty — w przypadku Line, Arc lub otwartej Polyline, własne punkty końcowe elementu pełnią rolę dodatkowych stałych granic. Pełny Circle lub Ellipse, albo zamknięta Polyline (w tym Rectangle), nie mają własnych punktów końcowych, więc do ich przycięcia potrzeba co najmniej dwóch punktów przecięcia. Segment, którego przedział zawiera rzutowanie kursora, jest podświetlany i zostanie usunięty po kliknięciu.

- **Line, Arc i otwarta Polyline** — usuwany segment może być częścią wiodącą (przed pierwszym przecięciem), środkową (między dwoma przecięciami, dzielącą element na dwie części) lub końcową (po ostatnim przecięciu).
- **Circle, Ellipse i zamknięta Polyline/Rectangle** — ponieważ nie ma stałego początku ani końca, można usunąć tylko łuk między dwoma *punktami przecięcia*. Jeśli przecięć jest mniej niż dwa, podgląd się nie pojawia, a kliknięcie nic nie robi. Reszta kształtu staje się jedyną pozostałą częścią.

## Co daje przycinanie

| Element | Wynik po przycięciu |
|--------|------------------------|
| Line | Do dwóch krótszych elementów Line |
| Arc | Do dwóch krótszych elementów Arc |
| Circle | Jeden element [Arc](../arc/) — zamknięty kształt okręgu znika, więc pozostała część jest przechowywana jako łuk |
| Ellipse | Jeden element Ellipse z kątem początkowym i końcowym — pozostała część pozostaje elementem Ellipse, teraz częściowym |
| Polyline (otwarta) | Do dwóch krótszych elementów Polyline |
| Polyline (zamknięta) / Rectangle | Jeden otwarty element Polyline — zamknięty kształt znika, więc pozostała część jest przechowywana jako otwarta |
| Splajn | Do dwóch krótszych obiektów Spline — każdy kawałek to ta sama krzywa na mniejszym odcinku, przechowywana za pomocą wierzchołków kontrolnych (punkty dopasowania splajnu Fit są odrzucane); splajn zamknięty pozostawia jeden otwarty kawałek |

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Enter` / `Spacja` | Wyjdź z trybu przycinania |
| `Escape` | Wyjdź z trybu przycinania |

## Obsługiwane elementy

| Element | Można przyciąć? |
|---------|----------------|
| Line | Tak |
| Arc | Tak |
| Circle | Tak — wymaga 2 lub więcej punktów przecięcia |
| Ellipse | Tak — wymaga 2 lub więcej punktów przecięcia |
| Polyline (otwarta) | Tak |
| Polyline (zamknięta) / Rectangle | Tak — wymaga 2 lub więcej punktów przecięcia |
| Splajn | Tak — splajn zamknięty wymaga 2 lub więcej punktów przecięcia |
| Tekst, Wymiar, Linia prowadząca | Nie |

Obiekty użyte jako **granice cięcia** mogą być typu Line, Arc, Circle, Ellipse, Polyline lub Spline. Obiekty Text, Dimension i Leader nigdy nie rejestrują przecięć, więc również nie mogą być granicami.

**Segmenty łukowe** Polyline (narysowane przełącznikiem Arc lub zaimportowane) są przycinane dokładnie tak samo jak segmenty proste — najedź kursorem na fragment łuku między dwoma przecięciami i kliknij. Przycięta krawędź zachowuje swoją krzywiznę; zmienia się tylko długość.

## Przytnij a Przedłuż

| | Przytnij | Przedłuż |
|---|------|--------|
| Co robi | Usuwa segment elementu | Rozciąga punkt końcowy linii do granicy |
| Wyzwalacz | Najedź kursorem na segment do wycięcia | Najedź kursorem blisko punktu końcowego do rozciągnięcia |
| Wynik | Element dzieli się lub skraca | Punkt końcowy linii przesuwa się do granicy |
| Obsługiwane elementy | Line, Arc, Circle, Ellipse, Polyline, Splajn | Line, Arc, Ellipse, Polyline |
