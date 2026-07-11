---
title: Polecenie Mirror — Odbijanie elementów przez dwupunktową oś w KulmanLab CAD
description: Polecenie Mirror odbija zaznaczone elementy przez oś lustrzaną zdefiniowaną przez dwa kliknięcia. Oryginały są zawsze zachowywane — Odbij tworzy nowe odbite kopie. Oś odbicia może być pod dowolnym kątem i przyciąga do przyrostów 45°.
keywords: [polecenie odbijania CAD, odbijanie elementów CAD, symetria lustrzana CAD, odwracanie obiektów CAD, oś odbicia CAD, kulmanlab]
group: edit
order: 4
---

# Mirror

Polecenie `mirror` tworzy odbite kopie zaznaczonych elementów odbitych przez dwupunktową oś. Oryginały są **zawsze zachowywane** — w odróżnieniu od [Move](../move/) lub [Rotate](../rotate/), Odbij nigdy nie modyfikuje istniejących elementów; dodaje tylko nowe.

## Dwa sposoby uruchamiania

**Wstępne zaznaczenie, a następnie odbicie** — najpierw zaznacz elementy, a następnie aktywuj:

1. Zaznacz jeden lub więcej elementów na płótnie.
2. Wpisz `mirror` w terminalu lub kliknij przycisk **Odbij** na pasku narzędzi.
3. **Kliknij pierwszy punkt** osi odbicia lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
4. **Kliknij drugi punkt** — odbite kopie są umieszczane i polecenie kończy się. Tutaj również działa wprowadzanie współrzędnych.

**Aktywuj, a następnie zaznacz** — uruchom polecenie bez zaznaczonego niczego:

1. Wpisz `mirror` lub kliknij przycisk paska narzędzi.
2. **Zaznacz obiekty** — kliknij, aby przełączać, lub przeciągnij, aby zaznaczyć obszarem.
3. Naciśnij **Enter** lub **Spację**, aby potwierdzić zaznaczenie.
4. **Kliknij pierwszy punkt**, następnie **kliknij drugi punkt** osi odbicia (wprowadzanie współrzędnych dostępne na obu krokach).

```
  Oryginał:          Oś odbicia:        Wynik:
                     |
  [element A]    →   |    →    [element A] + [odbity A]
                     |
```

Podgląd na żywo odbitych kopii podąża za kursorem podczas pozycjonowania drugiego punktu osi.

## Oś odbicia

Oś jest nieskończoną linią przez dwa kliknięte punkty. Może być pod dowolnym kątem:

- Przesuń kursor blisko **osi przyciągania 45°** (0°, 45°, 90°, 135°, ...) i oś blokuje do tego kąta — przydatne do czystych odbić poziomych, pionowych lub ukośnych.
- Kliknij poza strefą przyciągania dla osi o swobodnym kącie.

## Wprowadzanie współrzędnych

Na każdym kroku osi wpisz dokładną pozycję zamiast klikać:

1. Wpisz wartość X.
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby potwierdzić.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Enter` / `Spacja` | Potwierdź zaznaczenie |
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź wpisaną współrzędną |
| `Escape` | Anuluj i zresetuj |

## Zaznaczanie podczas polecenia

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Przełącza element pod kursorem |
| **Przeciągnij w prawo** (ścisłe) | Dodaje elementy w całości wewnątrz ramki |
| **Przeciągnij w lewo** (przecinające) | Dodaje elementy przecinające ramkę |
| **Enter** / **Spacja** | Potwierdza zaznaczenie |

## Co jest odbijane

Każdy typ elementu jest obsługiwany. Geometria jest matematycznie odbijana przez oś:

| Element | Co się zmienia |
|---------|-------------|
| Linia | Oba punkty końcowe odbite |
| Okrąg | Środek odbity; promień bez zmian |
| Łuk | Środek odbity; kąty początku i końca przeliczone przez oś |
| Elipsa | Środek odbity; kierunek głównej osi odwrócony przez oś |
| Polilinia / Prostokąt | Każdy wierzchołek odbity |
| Tekst | Punkt kotwicy odbity; ciąg tekstu **nie** jest odwracany |
| Splajn | Wszystkie wierzchołki kontrolne / punkty dopasowania odbite |

## Odbij a Kopiuj

| | Odbij | Kopiuj |
|---|--------|------|
| Oryginały | Zawsze zachowane | Zawsze zachowane |
| Pozycja nowego elementu | Odbita przez oś | Przesunięta wektorem przemieszczenia |
| Najlepsze do | Symetryczne projekty, dwustronne cechy | Powtarzanie geometrii w dowolnym kierunku |
