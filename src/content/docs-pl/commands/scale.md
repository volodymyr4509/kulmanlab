---
title: Scale — Zmiana rozmiaru elementów wokół punktu bazowego
description: Polecenie Scale równomiernie zmienia rozmiar zaznaczonych elementów przez wpisany współczynnik wokół stałego punktu bazowego. Współczynnik jest zawsze wprowadzany klawiaturą — nie ma kliknięcia-aby-ustawić-skalę. Współczynnik większy od 1 powiększa; mniejszy od 1 pomniejsza. Każdy typ elementu jest obsługiwany.
keywords: [polecenie skalowania CAD, zmiana rozmiaru elementów CAD, skalowanie obiektów CAD, jednolita skala CAD, współczynnik skali CAD, powiększanie pomniejszanie CAD, kulmanlab]
group: edit
order: 5
---

# Scale

Polecenie `scale` równomiernie zmienia rozmiar zaznaczonych elementów wokół punktu bazowego. Wszystkie odległości od punktu bazowego są mnożone przez współczynnik skali — współczynnik `2` podwaja wszystkie wymiary, `0.5` je połowi. Współczynnik jest zawsze wprowadzany przez wpisanie; nie ma kliknięcia-aby-ustawić-skalę.

## Dwa sposoby uruchamiania

**Wstępne zaznaczenie, a następnie skalowanie** — najpierw zaznacz elementy, a następnie aktywuj:

1. Zaznacz jeden lub więcej elementów na płótnie.
2. Wpisz `scale` w terminalu lub kliknij przycisk **Skaluj** na pasku narzędzi.
3. **Kliknij punkt bazowy** — stały punkt, który nie porusza się podczas skalowania. Lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
4. **Wpisz współczynnik skali** i naciśnij **Enter**.

**Aktywuj, a następnie zaznacz** — uruchom polecenie bez zaznaczonego niczego:

1. Wpisz `scale` lub kliknij przycisk paska narzędzi.
2. **Zaznacz obiekty** — kliknij, aby przełączać, lub przeciągnij, aby zaznaczyć obszarem.
3. Naciśnij **Enter** lub **Spację**, aby potwierdzić zaznaczenie.
4. **Kliknij punkt bazowy** (dostępne wprowadzanie współrzędnych), następnie wpisz współczynnik.

```
  Baza ●                Baza ●
        [element]   →          [większy element]
  współczynnik = 2 → odległości od ● są podwajane
```

## Wpisywanie współczynnika skali

Po umieszczeniu punktu bazowego terminal pokazuje `podaj współczynnik skali:` i czeka na wejście klawiaturowe:

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.` | Dodaj cyfrę do współczynnika |
| `-` | Ujemny współczynnik (tylko jako pierwszy znak — odwraca, a następnie skaluje) |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Zastosuj skalę przy wpisanym współczynniku |

Współczynnik musi być niezerowy. Typowe wartości:

| Współczynnik | Efekt |
|--------|--------|
| `2` | Podwaja wszystkie wymiary |
| `0.5` | Połowi wszystkie wymiary |
| `1.5` | Zwiększa o 50% |
| `-1` | Odbija przez punkt bazowy (odpowiednik obrotu o 180°) |

Podczas wpisywania nie ma podglądu na żywo — przeskalowany wynik pojawia się dopiero po naciśnięciu **Enter**.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Enter` / `Spacja` | Potwierdź zaznaczenie |
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X (faza punktu bazowego) lub współczynnik skali (faza współczynnika) |
| `,` | Zablokuj X i przejdź do wprowadzania Y (faza punktu bazowego) |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź współrzędną lub zastosuj skalę |
| `Escape` | Anuluj i zresetuj |

## Zaznaczanie podczas polecenia

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Przełącza element pod kursorem |
| **Przeciągnij w prawo** (ścisłe) | Dodaje elementy w całości wewnątrz ramki |
| **Przeciągnij w lewo** (przecinające) | Dodaje elementy przecinające ramkę |
| **Enter** / **Spacja** | Potwierdza zaznaczenie |

## Co jest skalowane

Wszystkie typy elementów są obsługiwane. Każdy element skaluje swoją geometrię względem punktu bazowego:

| Element | Co się zmienia |
|---------|-------------|
| Linia | Oba punkty końcowe skalowane od punktu bazowego |
| Okrąg | Środek skalowany od punktu bazowego; promień mnożony przez współczynnik |
| Łuk | Środek skalowany; promień mnożony przez współczynnik; kąty bez zmian |
| Elipsa | Środek skalowany; obie długości półosi mnożone przez współczynnik |
| Polilinia / Prostokąt | Każdy wierzchołek skalowany od punktu bazowego |
| Tekst | Punkt kotwicy skalowany; wysokość mnożona przez współczynnik |
| Splajn | Wszystkie wierzchołki kontrolne / punkty dopasowania skalowane |
