---
title: Extend — Rozciąganie elementu do granicy
description: Polecenie Extend rozciąga najbliższy punkt końcowy wskazywanej Line, Arc, Ellipse lub otwartej Polyline do najbliższego przecięcia z innym elementem. Podgląd na żywo pokazuje przedłużony element przed kliknięciem.
keywords: [polecenie przedłużania CAD, przedłużanie linii CAD, przedłużanie łuku CAD, przedłużanie elipsy CAD, przedłużanie polilinii CAD, rozciąganie elementu do granicy, podgląd przedłużania, kulmanlab]
group: edit
order: 9
---

# Extend

Polecenie `Wydłuż` rozciąga najbliższy punkt końcowy wskazywanej [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/) lub otwartej [Polyline](../polyline/) do najbliższego przecięcia, które tworzyłaby z innym elementem w rysunku. Najedź kursorem blisko punktu końcowego, który chcesz przedłużyć — podgląd pokazuje przedłużony element — a następnie kliknij, aby zastosować.

Tylko elementy z rzeczywistym punktem końcowym mogą być przedłużane. [Circle](../circle/) i pełna (360°) Ellipse są zawsze kształtami zamkniętymi bez punktu końcowego, więc nigdy nie można ich przedłużyć — to samo dotyczy zamkniętej Polyline lub Rectangle. Częściowa Ellipse (łuk eliptyczny) i Arc mają punkty końcowe i są przedłużane tak samo jak Line.

## Przedłużanie elementu

1. Wpisz `Wydłuż` w terminalu lub kliknij przycisk **Przedłuż** na pasku narzędzi.
2. **Najedź kursorem blisko jednego końca** elementu, który chcesz przedłużyć — podgląd pokazuje go przedłużonego do najbliższej granicy w tym kierunku.
3. **Kliknij**, aby zastosować przedłużenie.

Polecenie pozostaje aktywne po każdym przedłużeniu, dzięki czemu możesz kontynuować najeżdżanie kursorem i klikanie, aby przedłużać więcej elementów. Naciśnij **Enter**, **Spację** lub **Escape**, aby wyjść.

```
  Przed:                      Po:

  ──────           |           ──────────────|
  (krótka linia)   (granica)   (przedłużona do granicy)
```

## Jak jest wybierany punkt końcowy

Polecenie sprawdza, do którego końca jest bliżej kursor:

- **Line i otwarta Polyline** — kursor bliżej punktu końcowego przedłuża koniec do przodu; kursor bliżej punktu startowego przedłuża start do tyłu.
- **Arc i częściowa Ellipse** — kursor bliżej jednego z końców kątowych powoduje wzrost łuku w tym kierunku, wokół tego samego środka i promienia (lub tego samego kształtu elipsy), aż do osiągnięcia następnej granicy.

Promień — lub, dla Arc i Ellipse, własny okrąg lub krzywa elementu — jest rzucany od wybranego końca, a **najbliższe przecięcie** z dowolnym innym elementem (z wyłączeniem samego elementu i ignorowanych typów) staje się nowym punktem końcowym.

Jeśli w tym kierunku nie zostanie znalezione żadne przecięcie, podgląd nie pojawia się i kliknięcie nic nie robi.

## Wyłączenia granic

Następujące typy elementów są ignorowane jako granice — element nie przedłuża się, aby je spotkać:

- Tekst / Mtext
- Linia wielokierunkowa

Wszystkie inne typy (Line, Arc, Circle, Ellipse, Polyline, Splajn, Wymiar) służą jako prawidłowe granice.

Jeśli pierwszy lub ostatni segment Polyline sam jest segmentem łukowym (narysowanym przełącznikiem Arc), przedłużenie go powoduje wzrost łuku wzdłuż jego własnego okręgu — dokładnie tak, jak przy przedłużaniu samodzielnego Arc — zamiast traktować go jako segment prosty.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Enter` / `Spacja` | Wyjdź z trybu przedłużania |
| `Escape` | Wyjdź z trybu przedłużania |

## Obsługiwane elementy

| Element | Można przedłużyć? |
|---------|----------------|
| Line | Tak |
| Arc | Tak |
| Ellipse | Tak — tylko jeśli jest już łukiem częściowym; pełna elipsa nie ma punktu końcowego |
| Circle | Nie — zawsze kształt zamknięty bez punktu końcowego |
| Polyline (otwarta) | Tak |
| Polyline (zamknięta) / Rectangle | Nie — zawsze kształt zamknięty bez punktu końcowego |
| Tekst, Splajn, Wymiar, Linia prowadząca | Nie |

## Przedłuż a Przytnij

| | Przedłuż | Przytnij |
|---|--------|------|
| Co robi | Rozciąga punkt końcowy elementu do granicy | Usuwa segment elementu |
| Wyzwalacz | Najedź kursorem blisko punktu końcowego do rozciągnięcia | Najedź kursorem na segment do cięcia |
| Wynik | Punkt końcowy przesuwa się na zewnątrz | Element dzieli się lub skraca |
| Obsługiwane elementy | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
