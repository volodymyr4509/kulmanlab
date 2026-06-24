---
sidebar_position: 6
title: Polecenie Elipsa — Rysowanie obróconej elipsy przez środek i dwie osie w KulmanLab CAD
description: Polecenie Elipsa rysuje elipsę w trzech kliknięciach — środek, punkt końcowy pierwszej osi (w dowolnym kierunku), następnie długość drugiej osi. Obie osie są zawsze prostopadłe. Każda półoś ma własny uchwyt do niezależnej zmiany rozmiaru po umieszczeniu. Pełna obsługa zapisu i odczytu DXF jako elementy ELLIPSE.
keywords: [polecenie elipsy CAD, rysowanie elipsy CAD, obrócona elipsa CAD, osie elipsy, element ELLIPSE DXF, edycja uchwytu elipsy, stosunek osi, kulmanlab]
---

# Elipsa

Polecenie `ellipse` rysuje elipsę za pomocą trzech kliknięć: punkt środkowy, punkt końcowy pierwszej (głównej) półosi pod dowolnym kątem i długość drugiej (pobocznej) półosi. Obie osie są zawsze do siebie prostopadłe — kierunek drugiej osi jest wyprowadzany automatycznie z pierwszej.

## Rysowanie elipsy

1. Wpisz `ellipse` w terminalu lub kliknij przycisk **Elipsa** na pasku narzędzi.
2. **Kliknij punkt środkowy** lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
3. **Kliknij punkt końcowy pierwszej osi** — ustawia zarówno kierunek, jak i długość pierwszej półosi. Tutaj również działa wprowadzanie współrzędnych.
4. **Ustaw długość drugiej osi** — przesuń kursor prostopadle do pierwszej osi, a następnie kliknij lub wpisz długość.

```
               ● ← punkt końcowy pierwszej osi (krok 3)
              /
  środek ●  /  ← pierwsza oś (dowolny kąt)
            |
            ● ← kursor tutaj ustawia długość drugiej osi (krok 4)
```

Elipsa jest umieszczana po kroku 4 i polecenie kończy się.

## Wprowadzanie osi — kliknięcie, współrzędna lub wpisana długość

**Środek (krok 2):** kliknij lub wpisz `X,Y` dla dokładnej pozycji.

**Punkt końcowy pierwszej osi (krok 3):** kliknij lub wpisz `X,Y` dla dokładnej współrzędnej. Blokowanie kąta również przyciąga do przyrostów 45° — podczas blokowania wpisz długość i naciśnij **Enter**, aby umieścić punkt końcowy w tej dokładnej odległości.

**Druga oś (krok 4):** wpisana długość jest zawsze dostępna — bez wymaganego blokowania kąta. Kierunek jest już ustalony prostopadle do pierwszej osi; wpisanie ustawia tylko długość.

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.` | Dodaj cyfrę do długości osi (faza drugiej osi) |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Umieść punkt końcowy osi przy wpisanej długości |

## Wprowadzanie współrzędnych (środek i punkt końcowy pierwszej osi)

1. Wpisz wartość X.
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby potwierdzić.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X (fazy środka/pierwszej osi) lub długość osi przy zablokowanym kącie |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź wpisaną współrzędną lub długość |
| `Escape` | Anuluj i zresetuj |

## Edycja uchwytów — niezależna zmiana rozmiaru osi

Zaznaczona elipsa eksponuje pięć uchwytów:

| Uchwyt | Liczba | Co robi |
|--------|--------|---------|
| **Środek** | 1 | Przesuwa całą elipsę; obie osie bez zmian |
| **Punkty końcowe głównej osi** | 2 (przeciwne końce dłuższej osi) | Przeciągnij, aby zmienić długość głównej półosi; absolutny rozmiar pobocznej osi pozostaje stały |
| **Punkty końcowe pobocznej osi** | 2 (przeciwne końce krótszej osi) | Przeciągnij, aby zmienić długość pobocznej półosi; główna oś bez zmian |

Uchwyty głównej i pobocznej osi są niezależne — możesz zmienić kształt elipsy bez ponownego uruchamiania polecenia.

## Zaznaczanie elips

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Zaznacza, jeśli kliknięcie trafia blisko konturu elipsy |
| **Przeciągnij w prawo** (ścisłe) | Wyrównany do osi prostokąt ograniczający elipsę musi w całości mieścić się wewnątrz ramki zaznaczenia |
| **Przeciągnij w lewo** (przecinające) | Dowolna część konturu elipsy przecinająca granicę ramki zaznaczenia ją zaznacza |

## Obsługiwane polecenia edycji

| Polecenie | Co dzieje się z elipsą |
|-----------|-----------------------|
| [Przesuń](./move) | Translacja środka; obie osie bez zmian |
| [Kopiuj](./copy) | Tworzy identyczną elipsę w nowym środku |
| [Obróć](./rotate) | Obraca pozycję środka i wektor głównej osi o ten sam kąt |
| [Odbij](./mirror) | Odbija środek i przelicza kierunek głównej osi przez oś odbicia |
| [Skaluj](./scale) | Skaluje pozycję środka i mnoży obie długości półosi przez współczynnik |
| [Odsunięcie](./offset) | Tworzy współśrodkową elipsę odsuniętą na zewnątrz lub do wewnątrz o stałą odległość |
| [Usuń](./delete) | Usuwa elipsę |

## Właściwości

**Ogólne**

| Właściwość | Domyślna | Znaczenie |
|------------|----------|-----------|
| Kolor | 256 (ByLayer) | Indeks koloru ACI |
| Warstwa | `0` | Przypisanie warstwy |
| Typ linii | ByLayer | Wzór nazwanego typu linii |
| Skala typu linii | 1 | Współczynnik skali wzoru typu linii |
| Grubość | 0 | Grubość wyciągnięcia |

**Geometria**

| Właściwość | Znaczenie |
|------------|-----------|
| Środek X / Środek Y | Środek elipsy |
| Główna oś X / Główna oś Y | Wektor od środka do punktu końcowego głównej osi (koduje zarówno kierunek, jak i długość) |
| Stosunek osi | Stosunek pobocznej półosi do głównej półosi (0 < stosunek ≤ 1) |
| Kąt początku / Kąt końca | Kąty parametryczne w stopniach; oba to 0°/360° dla pełnej elipsy |

## Elipsa a Okrąg — kiedy którego używać

| | Elipsa | Okrąg |
|---|---------|--------|
| Osie | Dwie niezależne półosie pod dowolnym kątem | Jeden promień, symetryczny |
| Obrót | Można umieścić pod dowolnym kątem | Brak obrotu |
| Wpisane wejście | Długość na oś | Tylko promień |
| Zmiana rozmiaru uchwytem | Główna i poboczna niezależnie | Wszystkie cztery punkty kardynalne jednakowo |
| Najlepsze do | Widoki ukośne, owalne cechy, otwory w perspektywie | Symetryczne okrągłe cechy |

## DXF — element ELLIPSE

Elipsy zapisywane są jako elementy `ELLIPSE` w pliku DXF. Format przechowuje punkt środkowy, pełny wektor głównej osi (kierunek + długość) i stosunek osi. Obrót, kształt i wszystkie właściwości stylu zachowywane są bez utraty danych. Okrąg **nie** jest przechowywany jako zdegenerowana elipsa — oba typy elementów pozostają odrębne w modelu DXF.
