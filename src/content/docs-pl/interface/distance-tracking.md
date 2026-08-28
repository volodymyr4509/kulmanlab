---
title: Śledzenie odległości — wpisanie dokładnej długości od przypiętego punktu
description: Przełącznik Dist pozwala, by najnowsza pinezka wektorowa pełniła rolę kotwicy, od której mierzy śledzenie kątowe, dzięki czemu wpiszesz dokładną długość i postawisz punkt w precyzyjnej odległości i pod precyzyjnym kątem od istniejącego punktu — łącznie z pierwszym punktem kształtu.
keywords: [wprowadzanie odległości CAD, wpisanie dokładnej długości CAD, przełącznik Dist, śledzenie odległości od pinezek, śledzenie biegunowe CAD, bezpośrednie wprowadzanie odległości, kulmanlab]
group: interface
order: 3
---

# Śledzenie odległości

**Śledzenie odległości** pozwala postawić punkt przez wpisanie dokładnej długości zamiast klikania. Steruje nim przełącznik **Dist** na pasku sterowania, obok [Pins](../vector-pins/) i ANGL; jest **domyślnie włączony**, a ustawienie zachowuje się między sesjami.

To, co dodaje, jest wąskie, ale przydatne: pozwala **najnowszej pinezce wektorowej** pełnić rolę kotwicy, od której mierzy śledzenie kątowe. Bez tego polecenie może mierzyć wyłącznie od punktu, który samo już zebrało — czyli *pierwszy* punkt kształtu nie ma od czego mierzyć w ogóle.

## Trzy przełączniki działają razem

Śledzenie odległości nie jest samowystarczalne. Dwa inne przełączniki muszą być we właściwym stanie, zanim będzie można wpisać długość:

| Przełącznik | Rola |
|-------------|------|
| **Pins** | Dostarcza punkt odniesienia. Najedź na punkt przyciągania i przytrzymaj 500 ms, aby go przypiąć — zobacz [Vector Pins](../vector-pins/). |
| **ANGL** | Dostarcza kąt. Śledzenie odległości staje się dostępne dopiero wtedy, gdy kursor jest zablokowany kątowo, więc ANGL musi być ustawione na krok (10°, 20°, 30°, 45°, 90°), a nie na Off. |
| **Dist** | Pozwala użyć pinezki jako kotwicy zamiast wyłącznie własnego punktu polecenia. |

Przy włączonych Pins i Dist, ale ANGL ustawionym na **Off**, nic się nie stanie: nie ma zablokowanego kierunku, wzdłuż którego można mierzyć długość.

## Jak Pins i Dist są sprzężone

Śledzenie odległości nie ma sensu przy wyłączonych pinezkach, więc oba przełączniki trzymają się razem:

- **Włączenie Pins** włącza również **Dist**.
- **Wyłączenie Pins** wyłącza również **Dist**.
- **Włączenie Dist** włącza **Pins**, jeśli nie był już włączony.
- **Wyłączenie Dist** zostawia **Pins włączone**.

Dist nigdy więc nie bywa aktywne przy nieaktywnym Pins, ale możesz zachować śledzenie pinezek do wyrównywania i wyłączyć śledzenie odległości — przydatne, gdy chcesz linii odniesienia bez tego, by kursor blokował się na pinezce, kiedy celowałeś we własny ostatni punkt.

## Postawienie punktu w dokładnej odległości

1. Włącz **Pins** i **Dist**, a **ANGL** ustaw na krok kątowy.
2. Uruchom polecenie, które prosi o punkt — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/) i tak dalej.
3. **Przypnij punkt odniesienia**: najedź na istniejący punkt przyciągania, aż znacznik zmieni się w wypełniony kwadrat.
4. Odsuń kursor od pinezki mniej więcej pod żądanym kątem. Gdy zbliży się do jednego z kroków ANGL, kierunek się **zablokuje** — od pinezki pojawi się wskaźnik śledzenia.
5. **Wpisz długość** i naciśnij **Enter** lub **Space**. Punkt zostanie postawiony dokładnie w tej odległości od pinezki, wzdłuż zablokowanego kąta.

Monit w terminalu informuje, kiedy można pisać. W stanie zablokowanym brzmi:

```
pick start point or enter length: [ ]
```

a wpisywana wartość pojawia się w nawiasach.

## Dlaczego pierwszy punkt ma znaczenie

To przypadek, który inaczej byłby niemożliwy. Załóżmy, że linia ma zaczynać się dokładnie 250 jednostek na prawo od istniejącego narożnika:

1. Uruchom [Line](../../commands/line/).
2. Przypnij istniejący narożnik.
3. Przesuwaj w prawo, aż kierunek zablokuje się na 0°.
4. Wpisz `250`, naciśnij **Enter**.

Linia zaczyna się teraz 250 jednostek od narożnika, bez geometrii pomocniczej i bez liczenia. Bez Dist polecenie Line nie zebrało jeszcze żadnego punktu, więc nie ma niczego, *od czego* zmierzyć wpisaną długość — mógłbyś tylko kliknąć na oko albo narysować linię pomocniczą i potem ją skasować.

Dla **drugiego i kolejnych** punktów polecenie ma już własną kotwicę (poprzedni punkt) i to ona jest używana w pierwszej kolejności. Pinezka brana jest pod uwagę jako alternatywa tylko wtedy, gdy twoja własna kotwica nie jest zablokowana, więc przypięcie czegoś nie przechwytuje blokady, którą już masz.

## Pisanie zamraża blokadę

Gdy tylko zaczniesz wpisywać cyfry, kotwica przestaje się zmieniać. Punkt zablokowany w chwili, gdy pojawiła się pierwsza cyfra, pozostaje kotwicą aż do zatwierdzenia lub wyczyszczenia pola — ruch myszą w trakcie wpisywania nie przerzuci po cichu pomiaru na inną pinezkę ani na własny punkt polecenia.

## Skróty klawiaturowe

| Klawisz | Działanie |
|---------|-----------|
| `0`–`9`, `.` | Dopisuje do długości |
| `-` | Ujemna długość — odwraca kierunek wzdłuż zablokowanego kąta (tylko jako pierwszy znak) |
| `Backspace` | Kasuje ostatni znak |
| `Enter` / `Space` | Stawia punkt we wpisanej długości |
| `Escape` | Anuluje polecenie; blokada i wpisana wartość zostają wyczyszczone |

Wpisywanie długości jest opcjonalne. Przy zablokowanym kierunku wciąż możesz kliknąć, a punkt zostanie zrzutowany na zablokowany kąt.

## Gdzie działa

Śledzenie odległości jest dostępne w każdym poleceniu, które prosi o wskazanie punktów:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) i [ViewportCopy](../../commands/viewport-copy/).

## Zobacz także

- [Vector Pins](../vector-pins/) — przypinanie punktów i śledzenie wzdłuż ich linii odniesienia
- [Grid & Snap](../grid-snap/) — pozostałe pomoce precyzyjne na pasku sterowania
- [Distance](../../commands/distance/) — pomiar istniejącej odległości zamiast wpisywania nowej
