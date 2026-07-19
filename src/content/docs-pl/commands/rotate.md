---
title: Polecenie Rotate — Obracanie elementów wokół punktu bazowego
description: Polecenie Rotate obraca zaznaczone elementy wokół wybranego punktu bazowego. Kąt można wpisać precyzyjnie lub ustawić przez kliknięcie — kierunek kursora od punktu bazowego do kliknięcia określa kąt. Dodatnie kąty są przeciwnie do ruchu wskazówek zegara w układzie współrzędnych DXF.
keywords: [polecenie obrotu CAD, obracanie elementów CAD, obracanie obiektów kątem, obrót przeciwnie do ruchu wskazówek zegara CAD, wpisany kąt obrotu, kulmanlab]
group: edit
order: 3
---

# Rotate

Polecenie `rotate` obraca zaznaczone elementy wokół punktu bazowego. Kąt obrotu podajesz przez wpisanie liczby w stopniach lub przez kliknięcie — kąt jest obliczany z kierunku między punktem bazowym a pozycją kliknięcia.

## Dwa sposoby uruchamiania

**Wstępne zaznaczenie, a następnie obrót** — najpierw zaznacz elementy, a następnie aktywuj:

1. Zaznacz jeden lub więcej elementów na płótnie.
2. Wpisz `rotate` w terminalu lub kliknij przycisk **Obróć** na pasku narzędzi.
3. **Kliknij punkt bazowy** — środek obrotu. Lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
4. **Wpisz kąt i naciśnij Enter** lub **kliknij**, aby ustawić kąt z kierunku kursora.

**Aktywuj, a następnie zaznacz** — uruchom polecenie bez zaznaczonego niczego:

1. Wpisz `rotate` lub kliknij przycisk paska narzędzi.
2. **Zaznacz obiekty** — kliknij, aby przełączać, lub przeciągnij, aby zaznaczyć obszarem.
3. Naciśnij **Enter** lub **Spację**, aby potwierdzić zaznaczenie.
4. **Kliknij punkt bazowy** (dostępne wprowadzanie współrzędnych), następnie ustaw kąt.

```
  Przed:            Po (obrót o 90° wokół ●):
                        ╔══╗
  ●  [element]    →   ● ║    ║
                        ╚══╝
```

Podgląd widma obróconychElementów podąża za kątem kursora po ustawieniu punktu bazowego.

## Ustawianie kąta

**Wpisany kąt** — wpisz liczbę (w stopniach) w dowolnym momencie po umieszczeniu punktu bazowego. Podgląd przyciąga do wpisanego kąta podczas dalszego dostosowywania przed naciśnięciem Enter.

**Kąt kliknięcia** — jeśli nie ma wpisanej wartości, kliknięcie ustawia kąt równy `atan2(Y_kursora − Y_bazy, X_kursora − X_bazy)` — kierunek od punktu bazowego do kliknięcia, w stopniach.

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.` | Dodaj cyfrę do wartości kąta |
| `-` | Ujemny kąt (tylko jako pierwszy znak) |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Zastosuj obrót przy wpisanym kącie |

## Kierunek kąta

Kąty są zgodne z **konwencją DXF**:

- **Dodatnie** wartości obracają **przeciwnie do ruchu wskazówek zegara** w układzie współrzędnych rysunku (Y-w górę).
- Na ekranie, gdzie oś Y jest odwrócona (Y-w dół), dodatnie kąty wyglądają **zgodnie z ruchem wskazówek zegara**.

Typowe wartości: `90` = ćwierć obrotu, `180` = pół obrotu, `-90` = przeciwny ćwierć obrotu.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Enter` / `Spacja` | Potwierdź zaznaczenie |
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X (faza punktu bazowego) lub wartość kąta (faza kąta) |
| `,` | Zablokuj X i przejdź do wprowadzania Y (faza punktu bazowego) |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź współrzędną lub zastosuj obrót |
| `Escape` | Anuluj i zresetuj |

## Zaznaczanie podczas polecenia

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Przełącza element pod kursorem |
| **Przeciągnij w prawo** (ścisłe) | Dodaje elementy w całości wewnątrz ramki |
| **Przeciągnij w lewo** (przecinające) | Dodaje elementy przecinające ramkę |
| **Enter** / **Spacja** | Potwierdza zaznaczenie |

## Obsługiwane elementy

Obracanie działa na każdym typie elementu. Geometria każdego elementu jest obracana wokół punktu bazowego — na przykład Okrąg przesuwa swój środek zachowując promień bez zmian; Łuk przesuwa swój środek i przesuwa kąty początku i końca o kąt obrotu; element Tekst przesuwa punkt kotwicy i dodaje kąt do właściwości Stopnie obrotu.
