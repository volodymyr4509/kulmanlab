---
sidebar_position: 15
title: Polecenie Wymiar kontynuowany — Łączenie wymiarów od istniejącej linii bazowej w KulmanLab CAD
description: Polecenie Wymiar kontynuowany przedłuża łańcuch wymiarów od drugiej linii przedłużenia ostatniego umieszczonego wymiaru. Automatycznie dziedziczy kąt, odsunięcie, rozmiar strzałki i wysokość tekstu wymiaru bazowego. Działa zarówno z bazami liniowymi, jak i wyrównanymi.
keywords: [wymiar kontynuowany CAD, dimcontinue, łańcuch wymiarów CAD, wymiar linii bazowej, kontynuacja serii wymiarów, kulmanlab]
---

# Wymiar kontynuowany

Polecenie `dimcontinue` łączy nowe wymiary od **drugiej linii przedłużenia** istniejącego wymiaru. Każdy nowy segment jest umieszczany wzdłuż tej samej osi pomiarowej i przy tym samym odsunięciu linii wymiarowej co baza. Wszystkie właściwości stylu — rozmiar strzałki, wysokość tekstu, długości linii przedłużenia — są automatycznie kopiowane z bazy.

## Jak wyglądają łańcuchowe wymiary

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (baza    p3           p4
           ext2 → nowy początek)
```

Każdy prostokąt to oddzielny element `DIMENSION`. Dzielą tę samą pozycję linii wymiarowej i kierunek pomiaru.

## Rozpoczynanie łańcucha

1. Wpisz `dimcontinue` w terminalu lub kliknij przycisk **Wymiar kontynuowany** na pasku narzędzi.
2. **Jeśli wymiar właśnie został umieszczony** — polecenie automatycznie go pobiera jako bazę (nie potrzeba kliknięcia).
3. **Jeśli nie istnieje ostatni wymiar** — kliknij dowolny istniejący wymiar, aby użyć go jako bazy.
4. **Kliknij następny punkt linii przedłużenia** — podgląd pokazuje nowy wymiar podczas przesuwania kursora. Lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
5. Kontynuuj klikanie (lub wpisywanie), aby przedłużyć łańcuch. Każdy umieszczony wymiar automatycznie staje się nową bazą.
6. Naciśnij **Enter**, **Spację** lub **Escape**, aby zakończyć łańcuch.

## Co jest dziedziczone z wymiaru bazowego

| Właściwość | Dziedziczona z bazy |
|------------|---------------------|
| Kierunek/kąt pomiaru | Tak — zablokowany przez cały łańcuch |
| Odsunięcie linii wymiarowej (odległość od mierzonych punktów) | Tak |
| Rozmiar strzałki | Tak |
| Wysokość tekstu | Tak |
| Odsunięcie i przedłużenie linii przedłużenia | Tak |
| Wyrównanie tekstu | Tak |
| Nazwa stylu | Tak |
| Kolor, Warstwa | Nie dziedziczone — używa bieżącej warstwy |

## Blokowanie kierunku pomiaru

Kierunek pomiaru łańcucha jest **zablokowany do kąta wymiaru bazowego**:

- Baza liniowa (H) → wszystkie kontynuacje mierzą odległość poziomą (Δ X).
- Baza liniowa (V) → wszystkie kontynuacje mierzą odległość pionową (Δ Y).
- Baza wyrównana pod dowolnym kątem → wszystkie kontynuacje mierzą wzdłuż tego samego kąta.

Nie możesz zmienić kierunku w środku łańcucha. Uruchom nowy [Wymiar liniowy](./dim-linear) lub [Wymiar wyrównany](./dim-aligned), aby wymiarować w innym kierunku.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź wpisaną współrzędną lub zakończ łańcuch jeśli nie ma aktywnego wejścia |
| `Spacja` / `Escape` | Zakończ łańcuch |

## Wymiar kontynuowany a rozpoczynanie od nowa

| | Wymiar kontynuowany | Wymiar liniowy / wyrównany |
|---|-------------------|--------------------------|
| Punkt startowy | Zablokowany do ext2 ostatniej bazy | Kliknij gdziekolwiek |
| Kąt | Zablokowany do bazy | Swobodny |
| Odsunięcie | Dziedziczone z bazy | Ustawiane kursorem lub wpisywane |
| Styl | Dziedziczone z bazy | Bieżący styl |
| Najlepsze do | Pomiary skumulowane wzdłuż rzędu | Pierwszy wymiar lub zmiana kierunku |

## Edytowanie etykiet po umieszczeniu — tryb simple

**Dwukrotnie kliknij** dowolny wymiar w łańcuchu, aby otworzyć edytor tekstu w trybie **simple**. Każdy segment jest niezależny i można go edytować osobno.

| Funkcja | Zachowanie |
|---------|-----------|
| Bold / Italic / Font / Height | Stosowane do **całej** etykiety naraz |
| Formatowanie poszczególnych znaków | Nieobsługiwane |
| `Enter` | Zatwierdza wartość i zamyka edytor |
| Wieloliniowość | Nieobsługiwana |

Zobacz [Edytor tekstu — tryb simple](../interface/text-editor#simple-mode) w celu uzyskania pełnej dokumentacji.

## DXF — elementy DIMENSION

Każdy segment w łańcuchu jest przechowywany jako niezależny element `DIMENSION` w pliku DXF. Nie są połączone w pliku — dzielą właściwości, ponieważ zostały utworzone z tej samej bazy, ale każdy może być edytowany indywidualnie po umieszczeniu.
