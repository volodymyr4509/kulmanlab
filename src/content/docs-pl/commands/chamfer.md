---
sidebar_position: 21
title: Polecenie Chamfer — Ścięcie prostego narożnika między dwiema liniami w KulmanLab CAD
description: Polecenie Chamfer łączy dwa elementy Linia lub Polilinia prostym ukośnym cięciem. Podajesz dwie odległości — jedną wzdłuż każdego elementu — a polecenie przycina oba do tych punktów i wstawia łączącą linię.
keywords: [polecenie fazowania CAD, fazowanie linii CAD, ukośne cięcie narożnika, fazowanie narożnika CAD, kulmanlab]
---

# Chamfer

Polecenie `chamfer` ścina prosty ukośny narożnik między dwoma elementami [Line](../line/) lub [Polyline](../polyline/). Podajesz odległość cofnięcia wzdłuż każdego elementu (d1 i d2), a polecenie przycina oba elementy do tych punktów i wstawia łączącą linię między nimi.

Użycie równych odległości daje symetryczne cięcie pod kątem 45°; różne odległości dają niesymetryczne fazowanie.

Fazowanie działa na elementach **Linia i Polilinia**.

## Używanie fazowania

1. Wpisz `chamfer` w terminalu lub kliknij przycisk **Fazowanie** na pasku narzędzi.
2. **Wpisz pierwszą odległość fazowania** (d1 — odległość wzdłuż pierwszego elementu) i naciśnij **Enter**.
3. **Wpisz drugą odległość fazowania** (d2 — odległość wzdłuż drugiego elementu) i naciśnij **Enter**.
4. **Kliknij pierwszy element** — kliknięta część określa, która strona ewentualnego przecięcia zostaje zachowana.
5. **Najedź kursorem na drugi element** — podgląd przerywany pokazuje wynikowe cięcie fazowe. Przesuń kursor na stronę, którą chcesz zachować.
6. **Kliknij**, aby zastosować. Oba elementy są przycinane i wstawiany jest odcinek fazowania.

```
  Przed (d1=5, d2=8):          Po:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Wybór strony

Gdy dwie linie przecinają się, fazowanie jest stosowane na narożniku zdefiniowanym przez pozycje kliknięć — zachowywana jest część każdego elementu **po tej samej stronie co kursor**.

- Kliknij blisko jednego końca pierwszego elementu, aby wybrać tę połowę.
- Przesuń kursor na żądaną połowę drugiego elementu — podgląd przerywany aktualizuje się na żywo.

W przypadku polilinii pozycja kliknięcia określa, który **segment** polilinii uczestniczy, a najbliższy wierzchołek po stronie przecięcia jest tym, który zostaje przycięty.

## Co tworzy polecenie

- Punkt końcowy pierwszego elementu (lub wierzchołek polilinii) najbliższy przecięciu jest przesuwany do punktu **T1**, zlokalizowanego d1 wzdłuż pierwszego elementu od przecięcia.
- Punkt końcowy drugiego elementu (lub wierzchołek polilinii) najbliższy przecięciu jest przesuwany do punktu **T2**, zlokalizowanego d2 wzdłuż drugiego elementu od przecięcia.
- Nowy element Linia jest wstawiany od **T1** do **T2**.

Wstawiona linia dziedziczy bieżące ustawienia grubości linii, koloru, warstwy i typu linii.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.` | Dodaj cyfrę do bieżącej wartości odległości |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź wpisaną odległość i przejdź dalej |
| `Escape` | Anuluj i zresetuj |

## Obsługiwane elementy

| Element | Obsługiwany |
|---------|-------------|
| Linia | Tak |
| Polilinia / Prostokąt | Tak |
| Łuk, Okrąg, Elipsa | Nie |
| Tekst, Splajn, Wymiar, Linia prowadząca | Nie |

## Fazowanie a Zaokrąglenie

| | Fazowanie | Zaokrąglenie |
|---|---------|--------|
| Typ narożnika | Proste cięcie | Zaokrąglony łuk |
| Wejście | Dwie odległości (d1, d2) | Jeden promień |
| Wstawiony element | Linia | Łuk |
| Obsługiwane elementy | Linie i Polilinie | Tylko linie |
