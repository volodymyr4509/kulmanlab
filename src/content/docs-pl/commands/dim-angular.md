---
sidebar_position: 9
title: Wymiar kąta — Mierzenie kątów między liniami, łukami i okręgami w KulmanLab CAD
description: Polecenie WymiarKąta umieszcza adnotację kąta na liniach, łukach lub okręgach. Obsługuje tryb kąta dwóch linii, zakresu łuku i sektora okręgu.
keywords: [wymiar kąta CAD, wymiar kąta, mierzenie kąta między liniami, WymiarKąta, wymiar łuku, adnotacja kąta, opis kąta CAD, kulmanlab wymiar kąta]
---

# Wymiar kąta

Polecenie `DimensionAngular` umieszcza **adnotację kąta** — łukową adnotację na rysunku. Mierzy i opisuje kąt między dwiema liniami, zakres łuku lub sektor okręgu.

## Jak aktywować

Kliknij przycisk **Wymiar kąta** na pasku narzędzi w panelu Opisy lub wpisz `DimensionAngular` w terminalu.

## Trzy tryby wejścia

Pierwsze kliknięcie określa, który tryb jest używany:

### Dwie linie

1. **Kliknij pierwszą linię.** Pozycja kursora określa, która strona linii jest używana.
2. **Kliknij drugą linię.** Dwie linie muszą się przecinać (przecięcie jest obliczane automatycznie; nie musi być widoczne na ekranie).
3. **Kliknij, aby umieścić** łuk wymiaru. Przesuń kursor, aby wybrać promień i który sektor kątowy jest opisany — adnotacja podąża za kursorem na tę stronę wierzchołka, po której się znajdujesz.

Linie równoległe nie mogą tworzyć wymiaru kąta; polecenie ignoruje drugie kliknięcie, jeśli linie się nie przecinają.

### Łuk

1. **Kliknij łuk.** Wymiar jest tworzony natychmiast od kąta początku łuku do kąta końca łuku, używając środka łuku jako wierzchołka.
2. **Kliknij, aby umieścić** łuk wymiaru przy żądanym promieniu.

### Okrąg

1. **Kliknij okrąg.** Pierwszy punkt kąta przyciąga się do najbliższego punktu na okręgu.
2. **Kliknij drugi punkt** na okręgu, aby zdefiniować drugi punkt kąta.
3. **Kliknij, aby umieścić** łuk wymiaru.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Escape` | Anuluj i powróć do pierwszego wyboru |

## Szczegóły zachowania

- Łuk wymiaru zawsze rysowany jest po tej stronie wierzchołka, gdzie go umieszczasz — przesuń kursor przez wierzchołek, aby przełączyć na kąt uzupełniający.
- Zmierzony kąt wyświetlany jest w stopniach i aktualizuje się na żywo podczas przesuwania kursora w fazie umieszczania.
- Wynikowa adnotacja jest pełnym elementem `DimensionAngular` przechowywana na bieżącej warstwie. Właściwości wyglądu (rozmiar strzałki, wysokość tekstu, długość linii przedłużenia) można dostosować w panelu Właściwości.
- Wymiary kąta są uwzględniane w eksporcie JSON, ale nie są obsługiwane przez eksporter DXF.

## Powiązane polecenia

- [Wymiar liniowy](./dim-linear) — wymiar poziomy lub pionowy
- [Wymiar wyrównany](./dim-aligned) — wymiar wyrównany do dwóch punktów
- [Wymiar promienia](./dim-radius) — wymiar promienia dla łuków i okręgów
- [Wymiar średnicy](./dim-diameter) — wymiar średnicy dla okręgów
