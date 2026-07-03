---
sidebar_position: 10
title: Polecenie Przedłuż — Rozciąganie punktu końcowego linii do najbliższej granicy w KulmanLab CAD
description: Polecenie Przedłuż rozciąga najbliższy punkt końcowy wskazywanej Linii do najbliższego przecięcia z innym elementem. Podgląd na żywo pokazuje przedłużoną linię przed kliknięciem. Przedłużanie działa tylko na elementach Linia i ignoruje Tekst, Splajn i Linie wielokierunkowe jako granice.
keywords: [polecenie przedłużania CAD, przedłużanie linii CAD, rozciąganie linii do granicy, przedłużanie punktu końcowego linii, podgląd przedłużania, kulmanlab]
---

# Przedłuż

Polecenie `extend` rozciąga najbliższy punkt końcowy wskazywanej [Linii](../line/) do najbliższego przecięcia, które tworzyłaby z innym elementem w rysunku. Najedź kursorem blisko punktu końcowego, który chcesz przedłużyć — podgląd pokazuje przedłużoną linię — a następnie kliknij, aby zastosować.

Przedłużanie działa **tylko na elementach Linia**. Granice, do których linia się przedłuża, mogą być dowolnym innym typem elementu z wyjątkiem Tekstu, Mtext, Linii wielokierunkowych i Splajnów.

## Przedłużanie linii

1. Wpisz `extend` w terminalu lub kliknij przycisk **Przedłuż** na pasku narzędzi.
2. **Najedź kursorem blisko jednego końca linii** — podgląd pokazuje linię przedłużoną do najbliższej granicy w tym kierunku.
3. **Kliknij**, aby zastosować przedłużenie.

Polecenie pozostaje aktywne po każdym przedłużeniu, dzięki czemu możesz przedłużać wiele linii po kolei. Naciśnij **Escape**, aby wyjść.

```
  Przed:                      Po:

  ──────           |           ──────────────|
  (krótka linia)   (granica)   (przedłużona do granicy)
```

## Jak jest wybierany punkt końcowy

Polecenie sprawdza, do którego punktu końcowego jest bliżej kursor:

- Kursor **bliżej punktu końcowego** → koniec jest przedłużany do przodu wzdłuż kierunku linii.
- Kursor **bliżej punktu startowego** → start jest przedłużany do tyłu (w przeciwnym kierunku).

Promień jest rzucany od wybranego punktu końcowego wzdłuż kierunku linii, a **najbliższe przecięcie** wzdłuż tego promienia z dowolnym innym elementem (z wyłączeniem samej linii i ignorowanych typów) staje się nowym punktem końcowym.

Jeśli w tym kierunku nie zostanie znalezione żadne przecięcie, podgląd nie pojawia się i kliknięcie nic nie robi.

## Wyłączenia granic

Następujące typy elementów są ignorowane jako granice — linia nie przedłuża się, aby je spotkać:

- Tekst / Mtext
- Linia wielokierunkowa
- Splajn

Wszystkie inne typy (Linia, Łuk, Okrąg, Elipsa, Polilinia, Wymiar) służą jako prawidłowe granice.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Escape` | Wyjdź z trybu przedłużania |

## Obsługiwane elementy

| Element | Można przedłużyć? |
|---------|----------------|
| Linia | Tak |
| Łuk, Okrąg, Elipsa | Nie |
| Polilinia / Prostokąt | Nie |
| Tekst, Splajn, Wymiar, Linia prowadząca | Nie |

## Przedłuż a Przytnij

| | Przedłuż | Przytnij |
|---|--------|------|
| Co robi | Rozciąga punkt końcowy linii do granicy | Usuwa segment linii |
| Wyzwalacz | Najedź kursorem blisko punktu końcowego do rozciągnięcia | Najedź kursorem na segment do cięcia |
| Wynik | Punkt końcowy linii przesuwa się na zewnątrz | Linia dzieli się lub skraca |
| Oba | Tylko linie | Tylko linie |
