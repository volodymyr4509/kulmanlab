---
sidebar_position: 17
title: "Polecenie Dimension Diameter — Opisywanie pełnych średnic okręgów i łuków w KulmanLab CAD"
description: "Polecenie Dimension Diameter umieszcza wymiar średnicy (poprzedzony symbolem średnicy) przez łuk lub okrąg przez środek. Przesuń kursor, aby obrócić linię wymiarową pod dowolny kąt. Pełna obsługa zapisu i odczytu DXF jako elementy DIMENSION typu średnica."
keywords: [wymiar średnicy CAD, dimdiameter, opis średnicy okręgu, wymiar średnicy łuku, symbol średnicy CAD, kulmanlab]
---

# Dimension Diameter

Polecenie `dimdiameter` umieszcza wymiar średnicy na łuku lub okręgu. Linia wymiarowa obejmuje pełną średnicę — przechodząc przez środek między dwoma diametralnie przeciwnymi punktami łuku — i jest oznaczona `⌀ <wartość>`. Aby opisać tylko promień od środka do jednej krawędzi, użyj [Dimension Radius](../dim-radius/).

## Anatomia wymiaru średnicy

```
  ●──────────── ⌀ 10.00 ────────────●
  (daleki punkt łuku)              (bliski punkt łuku / strona tekstu)
```

- **Linia wymiarowa** — obejmuje pełną średnicę z grotami strzałek przy obu punktach przecięcia z łukiem.
- **Bliski punkt łuku** — punkt obwodu po stronie kursora (gdzie umieszczona jest etykieta tekstowa).
- **Daleki punkt łuku** — punkt diametralnie przeciwny.
- **Etykieta** — `⌀` po której następuje wartość średnicy.

## Umieszczanie wymiaru średnicy

1. Wpisz `dimdiameter` w terminalu lub kliknij przycisk **Wymiar średnicy** na pasku narzędzi.
2. **Kliknij łuk lub okrąg**, aby go zaznaczyć.
3. **Przesuń kursor**, aby obrócić linię wymiarową pod żądany kąt.
4. **Kliknij**, aby umieścić wymiar.

Można zaznaczać tylko elementy **Łuk** i **Okrąg**.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Escape` | Anuluj |

## Wymiar średnicy a Wymiar promienia

| | Wymiar średnicy | Wymiar promienia |
|---|-------------------|-----------------|
| Mierzy | Pełna średnica (2 × promień) | Promień (od środka do krawędzi) |
| Linia wymiarowa | Krawędź → krawędź przez środek | Środek → krawędź |
| Prefiks etykiety | `⌀` | `R` |
| Groty strzałek | Dwa (przy obu punktach łuku) | Jeden (przy punkcie łuku) |
| Najlepsze do | Pełne wymiary okrągłego otworu lub wału | Opisywanie jednej strony zakrzywionej cechy |

## Edytowanie etykiety — tryb simple

**Dwukrotnie kliknij** umieszczony wymiar średnicy, aby otworzyć edytor tekstu w trybie **simple**. Edytor jest wstępnie wypełniony bieżącą wyrenderowaną wartością (np. `⌀ 10.00`), dzięki czemu możesz ustawić kursor i edytować ją bezpośrednio.

| Funkcja | Zachowanie |
|---------|-----------|
| Bold / Italic / Font / Height | Stosowane do **całej** etykiety naraz |
| Formatowanie poszczególnych znaków | Nieobsługiwane |
| `Enter` | Zatwierdza wartość i zamyka edytor |
| Wieloliniowość | Nieobsługiwana |

Zobacz [Edytor tekstu — tryb simple](../../interface/text-editor/#simple-mode) w celu uzyskania pełnej dokumentacji.

## DXF — element DIMENSION typu średnica

Wymiary średnicy zapisywane są jako elementy `DIMENSION` z geometrią typu średnica, przechowując pozycje obu punktów łuku i zmierzoną wartość średnicy (2 × promień). Wszystkie właściwości zachowywane są bez utraty danych.
