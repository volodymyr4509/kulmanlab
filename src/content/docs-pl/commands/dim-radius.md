---
title: Polecenie Dimension Radius — Opisywanie promieni łuków i okręgów
description: Polecenie Dimension Radius umieszcza radialny wymiar z prefiksem R na łuku lub okręgu. Kliknij element, a następnie przesuń kursor, aby ustawić orientację linii wymiarowej od środka do obwodu. Pełna obsługa zapisu i odczytu DXF jako elementy DIMENSION typu promień.
keywords: [wymiar promienia CAD, dimradius, opis promienia okręgu, wymiar promienia łuku, wymiar z prefiksem R, kulmanlab]
group: markup
order: 7
---

# Dimension Radius

Polecenie `dimradius` umieszcza wymiar promienia na łuku lub okręgu. Linia wymiarowa biegnie od środka do punktu na obwodzie w kierunku kursora, oznaczona `R <wartość>`. Aby zamiast tego wymiarować pełną średnicę, użyj [Dimension Diameter](../dim-diameter/).

## Anatomia wymiaru promienia

```
  ● (środek)
   \
    \  R 5.00
     \
      ●────── tekst (strona kursora)
   (punkt łuku)
```

- **Linia wymiarowa** — od środka przez punkt łuku w kierunku kursora, z grotem strzałki przy łuku.
- **Etykieta** — `R` po której następuje wartość promienia.

## Umieszczanie wymiaru promienia

1. Wpisz `dimradius` w terminalu lub kliknij przycisk **Wymiar promienia** na pasku narzędzi.
2. **Kliknij łuk lub okrąg**, aby go zaznaczyć.
3. **Przesuń kursor**, aby ustawić orientację linii wymiarowej — punkt łuku podąża za kierunkiem kursora od środka.
4. **Kliknij**, aby umieścić wymiar.

Można zaznaczać tylko elementy **Łuk** i **Okrąg**. Kliknięcie jakiegokolwiek innego typu elementu nie ma efektu.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Escape` | Anuluj |

## Wymiar promienia a Wymiar średnicy

| | Wymiar promienia | Wymiar średnicy |
|---|-----------------|-------------------|
| Mierzy | Promień (od środka do krawędzi) | Średnica (od krawędzi do krawędzi przez środek) |
| Linia wymiarowa | Środek → punkt łuku | Punkt łuku → punkt łuku (przez środek) |
| Prefiks etykiety | `R` | `⌀` |
| Groty strzałek | Jeden (przy punkcie łuku) | Dwa (przy obu punktach łuku) |
| Najlepsze do | Opisywanie jednej strony zakrzywionej cechy | Opisywanie pełnych wymiarów kołowych |

## Edytowanie etykiety — tryb simple

**Dwukrotnie kliknij** umieszczony wymiar promienia, aby otworzyć edytor tekstu w trybie **simple**. Edytor jest wstępnie wypełniony bieżącą wyrenderowaną wartością (np. `R 5.00`), dzięki czemu możesz ustawić kursor i edytować ją bezpośrednio.

| Funkcja | Zachowanie |
|---------|-----------|
| Bold / Italic / Font / Height | Stosowane do **całej** etykiety naraz |
| Formatowanie poszczególnych znaków | Nieobsługiwane |
| `Enter` | Zatwierdza wartość i zamyka edytor |
| Wieloliniowość | Nieobsługiwana |

Zobacz [Edytor tekstu — tryb simple](../../interface/text-editor/#simple-mode) w celu uzyskania pełnej dokumentacji.

## DXF — element DIMENSION typu promień

Wymiary promienia zapisywane są jako elementy `DIMENSION` z geometrią typu promień, przechowując współrzędne środka, pozycję punktu łuku i zmierzoną wartość promienia. Wszystkie właściwości zachowywane są bez utraty danych.
