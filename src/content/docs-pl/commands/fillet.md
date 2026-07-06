---
sidebar_position: 20
title: Polecenie Fillet — Zaokrąglanie narożnika między dwiema liniami w KulmanLab CAD
description: Polecenie Fillet łączy dwa elementy Linia łukiem stycznych o podanym promieniu, przycinając każdą linię do punktu stycznego. Przerywany podgląd łuku pomaga wybrać właściwy narożnik przed kliknięciem.
keywords: [polecenie zaokrąglenia CAD, zaokrąglanie narożnika CAD, łuk zaokrąglenia, łuk styczny dwóch linii, kulmanlab]
---

# Fillet

Polecenie `fillet` zaokrągla narożnik między dwoma elementami [Line](../line/), wstawiając łuk styczny o podanym promieniu i przycinając każdą linię do punktu, gdzie zaczyna się łuk. Wynikiem jest gładki, zaokrąglony narożnik łączący obie linie.

Zaokrąglenie działa **tylko na elementach Linia**.

## Używanie zaokrąglenia

1. Wpisz `fillet` w terminalu lub kliknij przycisk **Zaokrąglenie** na pasku narzędzi.
2. **Wpisz promień zaokrąglenia** i naciśnij **Enter**.
3. **Kliknij pierwszą linię** — kliknięta część określa, która strona ewentualnego przecięcia zostaje zachowana.
4. **Najedź kursorem na drugą linię** — przerywany podgląd łuku pokazuje wynikowe zaokrąglenie. Przesuń kursor na stronę, którą chcesz zachować.
5. **Kliknij**, aby zastosować. Obie linie są przycinane i łuk jest wstawiany.

```
  Przed:                     Po zaokrągleniu (promień r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Wybór strony dla przecinających się linii

Gdy dwie linie przecinają się, zaokrąglenie jest stosowane na narożniku zdefiniowanym przez pozycje kliknięć — zachowywana jest część każdej linii **po tej samej stronie co kursor**.

- Kliknij blisko jednego końca pierwszej linii, aby wybrać tę połowę.
- Przesuń kursor na żądaną połowę drugiej linii — przerywany podgląd aktualizuje się na żywo.

## Co tworzy polecenie

- Punkt końcowy pierwszej linii najbliższy przecięciu jest przesuwany do punktu stycznego **T1**.
- Punkt końcowy drugiej linii najbliższy przecięciu jest przesuwany do punktu stycznego **T2**.
- Nowy element Łuk jest wstawiany od **T1** do **T2**, styczny do obu linii.

Wstawiony łuk dziedziczy bieżące ustawienia grubości linii, koloru, warstwy i typu linii.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.` | Dodaj cyfrę do wartości promienia |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź wpisany promień i przejdź do wyboru linii |
| `Escape` | Anuluj i zresetuj |

## Obsługiwane elementy

| Element | Obsługiwany |
|---------|-------------|
| Linia | Tak — jako zarówno pierwszy, jak i drugi element |
| Łuk, Okrąg, Elipsa, Polilinia | Nie |
| Tekst, Splajn, Wymiar, Linia prowadząca | Nie |

## Zaokrąglenie a Fazowanie

| | Zaokrąglenie | Fazowanie |
|---|--------|---------|
| Typ narożnika | Zaokrąglony łuk | Proste cięcie |
| Wejście | Jeden promień | Dwie odległości (d1, d2) |
| Wstawiony element | Łuk | Linia |
| Obsługiwane elementy | Tylko linie | Linie i Polilinie |
