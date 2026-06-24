---
sidebar_position: 11
title: Polecenie Odsunięcie — Tworzenie równoległych kopii w stałej odległości w KulmanLab CAD
description: Polecenie Odsunięcie tworzy równoległą kopię Linii, Okręgu, Łuku, Elipsy lub Polilinii przy wpisanej odległości. Odległość jest wprowadzana raz i ponownie używana przy wielu odsunięciach. Kliknięcie strony określa, w którym kierunku pojawi się kopia. Obsługiwanych jest pięć typów elementów.
keywords: [polecenie odsunięcia CAD, równoległa kopia CAD, odsunięcie linii CAD, odsunięcie okręgu CAD, odsunięcie polilinii CAD, odsunięcie współśrodkowe, kulmanlab]
---

# Odsunięcie

Polecenie `offset` tworzy równoległą kopię elementu w stałej prostopadłej odległości. Wpisujesz odległość raz, następnie klikasz elementy i wybierasz stronę — polecenie pozostaje gotowe przy tej samej odległości, dzięki czemu możesz odsuwać wiele obiektów w jednej sesji.

Obsługiwane typy elementów: **Linia, Okrąg, Łuk, Elipsa, Polilinia** (w tym Prostokąty).

## Używanie odsunięcia

1. Wpisz `offset` w terminalu lub kliknij przycisk **Odsunięcie** na pasku narzędzi.
2. **Wpisz odległość odsunięcia** i naciśnij **Enter** lub **Spację**.
3. **Kliknij element** do odsunięcia — jeśli element nie jest obsługiwanego typu, pojawia się komunikat o błędzie i możesz kliknąć inny element.
4. **Przesuń kursor** na stronę, gdzie powinna pojawić się kopia — podgląd na żywo podąża.
5. **Kliknij**, aby umieścić kopię odsunięcia.

Po każdym umieszczeniu polecenie powraca do kroku 3 przy **tej samej odległości**, gotowe do następnego odsunięcia. Naciśnij **Escape**, aby zresetować z powrotem do kroku wprowadzania odległości.

```
  Odległość: 10

  ─────────────────    ← oryginalna linia
  ─────────────────    ← kopia odsunięcia (10 jednostek poniżej)
```

## Zachowanie odsunięcia dla każdego elementu

| Element | Jak obliczane jest odsunięcie |
|---------|---------------------------|
| **Linia** | Równoległa linia przesunięta prostopadle do oryginalnego kierunku |
| **Okrąg** | Współśrodkowy okrąg; kliknięcie na zewnątrz → większy promień, wewnątrz → mniejszy promień |
| **Łuk** | Współśrodkowy łuk przy nowym promieniu; zachowany ten sam zakres kąta |
| **Elipsa** | Obie półosie zwiększone lub zmniejszone o tę samą odległość |
| **Polilinia** | Każdy segment odsunięty niezależnie; sąsiednie odśnięte segmenty są uciosywane na rogach |

Dla **Okręgu**, **Łuku** i **Elipsy**: jeśli odsunięcie do wewnątrz zmniejszyłoby jakikolwiek promień lub półoś do zera lub poniżej, odsunięcie nie jest stosowane.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.` | Dodaj cyfrę do wartości odległości |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` / `Spacja` | Potwierdź wpisaną odległość i przejdź do wyboru elementu |
| `Escape` | Zresetuj do kroku wprowadzania odległości |

## Uwaga do przepływu pracy

Odległość pozostaje ustawiona dopóki nie naciśniesz **Escape**. Sprawia to, że odsuwanie wielu elementów przy tym samym rozstawie jest wydajne — wpisz odległość raz, następnie klikaj i wybieraj stronę dla każdego elementu po kolei.

## Odsunięcie a Kopiuj

| | Odsunięcie | Kopiuj |
|---|--------|------|
| Przemieszczenie | Prostopadłe do geometrii elementu | Dowolny wektor (baza → cel) |
| Obsługiwane elementy | Linia, Okrąg, Łuk, Elipsa, Polilinia | Wszystkie typy elementów |
| Wprowadzanie odległości | Wpisane przed zaznaczeniem elementu | Wpisane lub kliknięte po zaznaczeniu |
| Najlepsze do | Równoległe linie, współśrodkowe okręgi, ścieżki wewnętrzne/zewnętrzne | Umieszczanie duplikatów w dowolnych pozycjach |
