---
sidebar_position: 7
title: Polecenie Przytnij — Cięcie segmentów linii na przecięciach w KulmanLab CAD
description: Polecenie Przytnij usuwa część Linii między dwoma sąsiednimi punktami przecięcia najbliższymi kursorowi. Czerwony podgląd po najechaniu kursorem pokazuje dokładnie, który segment zostanie wycięty przed kliknięciem. Przytnij działa tylko na elementach Linia — nie na łukach, okręgach ani poliliniach.
keywords: [polecenie przytnij CAD, przycinanie linii CAD, cięcie linii na przecięciu, podgląd przycinania po najechaniu, tylko linie przytnij, kulmanlab]
---

# Przytnij

Polecenie `trim` usuwa część [Linii](../line/) leżącą między dwoma sąsiednimi punktami przecięcia, dzieląc linię na jeden lub dwa krótsze segmenty. Segment do wycięcia jest określany przez pozycję kursora — najedź kursorem na część, którą chcesz usunąć, i kliknij, aby ją przyciąć.

Przytnij działa **tylko na elementach Linia**. Dla łuków, okręgów, polilinii i innych typów elementów użyj [Usuń](../delete/) lub edycji uchwytu.

## Przycinanie linii

1. Wpisz `trim` w terminalu lub kliknij przycisk **Przytnij** na pasku narzędzi.
2. **Najedź kursorem na segment linii**, który chcesz usunąć — czerwony podgląd dokładnie podświetla część, która zostanie wycięta.
3. **Kliknij**, aby usunąć ten segment.

Polecenie pozostaje aktywne po każdym przycięciu, dzięki czemu możesz kontynuować najeżdżanie kursorem i klikanie, aby wycinać więcej segmentów. Naciśnij **Escape**, aby wyjść.

```
  Przed:                     Po przycięciu środkowego segmentu:

  ──────●──────●──────        ──────●          ●──────
      przecięcie  przecięcie       (lewa część)  (prawa część)
                                   (środkowy segment usunięty)
```

## Jak jest określany segment przycinania

Polecenie rzutuje pozycję kursora na wskazywaną linię i znajduje wszystkie punkty przecięcia, które linia ma z innymi elementami. Te parametry przecięcia dzielą linię na segmenty. Segment, którego przedział zawiera rzutowanie kursora, jest podświetlany i zostanie usunięty po kliknięciu.

- Jeśli kursor jest **przed pierwszym przecięciem**: ta wiodąca część linii jest usuwana.
- Jeśli kursor jest **między dwoma przecięciami**: ta środkowa część jest usuwana; linia dzieli się na dwie.
- Jeśli kursor jest **po ostatnim przecięciu**: ta końcowa część jest usuwana.
- Jeśli linia **nie ma przecięć** z żadnym innym elementem: podgląd nie pojawia się i kliknięcie nic nie robi.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Escape` | Wyjdź z trybu przycinania |

## Obsługiwane elementy

| Element | Można przyciąć? |
|---------|----------------|
| Linia | Tak |
| Łuk, Okrąg, Elipsa | Nie |
| Polilinia / Prostokąt | Nie |
| Tekst, Splajn, Wymiar, Linia prowadząca | Nie |

Elementy używane jako **granice cięcia** mogą być dowolnego typu — tylko linia przycinana musi być elementem Linia.

## Przytnij a Przedłuż

| | Przytnij | Przedłuż |
|---|------|--------|
| Co robi | Usuwa segment linii | Rozciąga punkt końcowy linii do granicy |
| Wyzwalacz | Najedź kursorem na segment do wycięcia | Najedź kursorem blisko punktu końcowego do rozciągnięcia |
| Wynik | Linia dzieli się lub skraca | Punkt końcowy linii przesuwa się do granicy |
| Oba | Tylko linie | Tylko linie |
