---
title: Polecenie Fillet — Zaokrąglanie narożnika łukiem stycznym
description: Polecenie Fillet zaokrągla narożnik między dwoma segmentami Line, Arc lub Polyline łukiem stycznym o podanym promieniu. Zaokrąglenie własnego narożnika polilinii wstawia łuk bezpośrednio w nią; zaokrąglenie przez otwartą polilinię łączy obie strony w nową polilinię.
keywords: [polecenie zaokrąglenia CAD, zaokrąglanie narożnika CAD, łuk zaokrąglenia, łuk styczny, zaokrąglenie polilinii, zaokrąglenie łuku, kulmanlab]
group: edit
order: 11
---

# Fillet

Polecenie `Zaokrąglij` zaokrągla narożnik między dwoma segmentami [Line](../line/), [Arc](../arc/) lub [Polyline](../polyline/), wstawiając łuk styczny o podanym promieniu i przycinając (lub łącząc) wybrane elementy do tego punktu.

Zaokrąglenie działa na elementach **Linia, Łuk i Polilinia** — w tym na prostych i łukowych segmentach polilinii.

## Używanie zaokrąglenia

1. Wpisz `Zaokrąglij` w terminalu lub kliknij przycisk **Fillet** na pasku narzędzi.
2. **Wpisz promień zaokrąglenia** i naciśnij **Enter**.
3. **Kliknij pierwszą linię, łuk lub segment polilinii** — kliknięta część określa, która strona ewentualnego przecięcia zostaje zachowana.
4. **Najedź kursorem na drugi element** — przerywany podgląd łuku pokazuje wynikowe zaokrąglenie. Przesuń kursor na stronę, którą chcesz zachować.
5. **Kliknij**, aby zastosować.

```
  Przed:                     Po zaokrągleniu (promień r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Wybór strony dla przecinających się elementów

Gdy dwa elementy przecinają się, zaokrąglenie jest stosowane na narożniku zdefiniowanym przez pozycje kliknięć — zachowywana jest część każdego elementu **po tej samej stronie co kursor**.

- Kliknij blisko jednego końca pierwszego elementu, aby wybrać tę połowę.
- Przesuń kursor na żądaną połowę drugiego elementu — przerywany podgląd aktualizuje się na żywo.

## Co tworzy polecenie

Wynik zależy od tego, co wybrano:

- **Dwa niezależne elementy Line/Arc**, lub dowolna para bez otwartej polilinii: oba są przycinane do punktów stycznych **T1**/**T2**, a między nimi wstawiany jest nowy element Arc.
- **Dwa segmenty tej samej polilinii dzielące wspólny wierzchołek narożny**: żaden nowy element — zaokrąglenie staje się częścią samej polilinii. Wierzchołek narożny zostaje zastąpiony dwoma punktami stycznymi, a łuk między nimi jest przechowywany jako bulge tej krawędzi — dokładnie tak, jak zaokrąglony narożnik polilinii jest zapisywany i odczytywany w formacie DXF.
- **Wszystko inne z udziałem otwartej polilinii** — dwie różne otwarte polilinie, lub otwarta polilinia i niezależny element Line/Arc: oba są łączone w **jedną nową polilinię**, zachowując każdą stronę do jej punktu stycznego i łącząc je łukiem zaokrąglenia jako dodatkowym segmentem bulge, zastępując oryginalne elementy.

Wstawiony lub wydłużony łuk dziedziczy bieżące ustawienia grubości linii, koloru, warstwy i typu linii (lub ustawienia samej polilinii, gdy do niej dołącza).

## Narożniki bez rzeczywistego kąta do zaokrąglenia

Jeśli dwa wybrane segmenty spotykają się już stycznie we wspólnym wierzchołku — prosty narożnik polilinii lub linia płynnie przechodząca w segment łuku o stycznej kontynuacji — nie ma rzeczywistego narożnika, który mógłby zaokrąglić okrąg. Zaokrąglenie wykrywa to i odmawia z komunikatem `cannot fillet: no tangent circle fits there` zamiast rysować niepożądaną pętlę.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.` | Dodaj cyfrę do wartości promienia |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` / `Spacja` | Potwierdź wpisany promień i przejdź do wyboru elementu |
| `Escape` | Anuluj i zresetuj |

## Obsługiwane elementy

| Element | Obsługiwany |
|---------|-------------|
| Linia | Tak |
| Łuk | Tak |
| Polilinia (segment prosty lub łukowy) | Tak |
| Okrąg, Elipsa | Nie |
| Tekst, Splajn, Wymiar, Linia prowadząca | Nie |

## Zaokrąglenie a Fazowanie

| | Zaokrąglenie | Fazowanie |
|---|--------|---------|
| Typ narożnika | Zaokrąglony łuk | Proste cięcie |
| Wejście | Jeden promień | Dwie odległości (d1, d2) |
| Wstawiony element | Łuk | Linia |
| Obsługiwane elementy | Linie, Łuki i Polilinie (segmenty proste lub łukowe) | Linie i Polilinie (tylko segmenty proste) |
