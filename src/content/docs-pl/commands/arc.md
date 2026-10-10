---
title: Arc — Rysowanie łuków trójpunktowych metodą okręgu opisanego
description: Polecenie Arc rysuje łuk kołowy przez dokładnie trzy kliknięte punkty, używając geometrii okręgu opisanego. Uchwyty początku i końca pozwalają przeciągać punkty końcowe łuku do nowego kąta i promienia po umieszczeniu. Pełna obsługa zapisu i odczytu DXF jako elementy ARC.
keywords: [polecenie łuku CAD, łuk trójpunktowy CAD, łuk przez okrąg opisany, rysowanie łuku CAD, element ARC DXF, edycja uchwytu łuku, kulmanlab]
group: shapes
order: 5
---

# Arc

Polecenie `Łuk` rysuje łuk kołowy przez trzy kliknięte punkty. Łuk obliczany jest jako jedyny okrąg opisany przechodzący przez wszystkie trzy punkty — nie trzeba bezpośrednio podawać środka ani promienia. Łuk biegnie od pierwszego kliknięcia do trzeciego, przechodząc przez drugie.

## Rysowanie łuku

1. Wpisz `Łuk` w terminalu lub kliknij przycisk **Łuk** na pasku narzędzi.
2. **Kliknij pierwszy punkt** — jeden koniec łuku. Lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
3. **Kliknij drugi punkt** — punkt, przez który łuk musi przechodzić (kontroluje krzywiznę i kierunek). Tutaj również działa wprowadzanie współrzędnych.
4. **Kliknij trzeci punkt** — drugi koniec łuku. Łuk zostaje umieszczony i polecenie kończy się. Tutaj również działa wprowadzanie współrzędnych.

```
           ● (2. kliknięcie — punkt środkowy na krzywej)
          / \
         /   \
        ●     ●
     1szy       3ci
```

Podgląd linii łączy dwa pierwsze kliknięcia podczas pozycjonowania trzeciego. Od drugiego kliknięcia podgląd na żywo śledzi kursor.

> **Punkty współliniowe**: jeśli wszystkie trzy punkty leżą na prostej, łuku nie można obliczyć i żaden element nie zostaje umieszczony. Przesuń drugi punkt poza prostą i spróbuj ponownie.

## Inne sposoby rysowania łuku

Domyślnie podaje się trzy punkty. Przy niektórych monitach terminal pokazuje opcje w nawiasach kwadratowych, np. `[Center=false]` — wpisz literę opcji, aby ją włączyć (`[Center=true]`), i ponownie, aby wyłączyć. W połączeniu pozwalają narysować łuk na sześć dalszych sposobów:

| Metoda | Włącz | Ostatni krok |
|---|---|---|
| Start, Center, End | `C` | punkt końcowy |
| Start, Center, Angle | `C`, `A` | kąt |
| Start, Center, Length | `C`, `L` | długość cięciwy |
| Start, End, Angle | `E` | kąt |
| Start, End, Direction | `E`, `D` | kierunek stycznej |
| Start, End, Radius | `E`, `R` | promień |

- W ostatnim kroku każdej metody poza Start, Center, End wpisz liczbę i naciśnij **Enter** lub **Space**, albo przesuń kursor i kliknij — kursor jest odczytywany jako ta liczba (kierunek dla kąta lub kierunku stycznej, odległość dla długości cięciwy lub promienia).
- Kąt dodatni biegnie od początku przeciwnie do ruchu wskazówek zegara, ujemny zgodnie z nim. Kąt 0° lub pełne obroty nie tworzą łuku, a terminal o tym informuje.
- Dodatnia długość cięciwy lub promień wybiera krótszą drogę, ujemna dłuższą. Cięciwa dłuższa niż średnica lub promień mniejszy niż połowa cięciwy jest odrzucany, a terminal podaje granicę.
- Start, Center, End używa tylko kierunku punktu końcowego od środka: łuk biegnie od początku przeciwnie do ruchu wskazówek zegara do miejsca, w którym ten kierunek przecina okrąg. Kierunek stycznej to kierunek w stopniach od osi X, w którym łuk opuszcza swój początek.
- Aby wybrać środek przed punktem początkowym, wpisz `C` przy samym pierwszym monicie.
- Litery opcji zależą od języka interfejsu; tutaj podano angielskie.

## Wprowadzanie współrzędnych

Na każdym z trzech kroków możesz wpisać dokładną pozycję zamiast klikać:

1. Wpisz wartość X.
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby umieścić punkt.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź wpisaną współrzędną |
| `C` `E` `A` `L` `D` `R` | Włączanie lub wyłączanie opcji: `C` Center, `E` End, `A` Angle, `L` Length, `D` Direction, `R` Radius |
| `Escape` | Odrzuć wszystkie umieszczone punkty i wyjdź |

## Edycja uchwytów — dostosowywanie punktów końcowych i promienia

Zaznaczony łuk eksponuje trzy uchwyty:

| Uchwyt | Pozycja | Co robi |
|--------|---------|---------|
| **Środek** | Geometryczny środek okręgu opisanego | Przesuwa cały łuk; promień i kąty bez zmian |
| **Początek** | Pierwszy punkt końcowy na łuku | Przeciągnij, aby przesunąć początek wzdłuż okręgu opisanego — zmienia kąt początku i promień |
| **Koniec** | Ostatni punkt końcowy na łuku | Przeciągnij, aby przesunąć koniec wzdłuż okręgu opisanego — zmienia kąt końca i promień |

## Zaznaczanie łuków

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Zaznacza, jeśli kliknięcie trafia blisko krzywej łuku (nie cięciwy) |
| **Przeciągnij w prawo** (ścisłe) | Przykładowe punkty rozłożone wzdłuż łuku muszą wszystkie leżeć wewnątrz ramki |
| **Przeciągnij w lewo** (przecinające) | Dowolny punkt próbkowania na łuku, który mieści się wewnątrz ramki, zaznacza go |

## Obsługiwane polecenia edycji

| Polecenie | Co dzieje się z łukiem |
|-----------|------------------------|
| [Move](../move/) | Translacja środka; promień i kąty bez zmian |
| [Copy](../copy/) | Tworzy identyczny łuk w nowej pozycji |
| [Rotate](../rotate/) | Obraca środek i przesuwa kąty początku/końca o kąt obrotu |
| [Mirror](../mirror/) | Odbija środek i odwraca kąty początku/końca względem osi odbicia |
| [Scale](../scale/) | Skaluje pozycję środka i mnoży promień przez współczynnik skali |
| [Offset](../offset/) | Tworzy współśrodkowy łuk przy większym lub mniejszym promieniu, zachowując ten sam zakres kąta |
| [Delete](../delete/) | Usuwa łuk |

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
| Środek X / Środek Y | Środek okręgu opisanego |
| Promień | Promień okręgu opisanego |
| Kąt początku | Kąt w stopniach, gdzie łuk się zaczyna (mierzony od dodatniej osi X) |
| Kąt końca | Kąt w stopniach, gdzie łuk się kończy |

## Łuk a Okrąg — kiedy którego używać

| | Łuk | Okrąg |
|---|-----|--------|
| Zakres | Częściowy — od pierwszego do trzeciego kliknięcia | Pełne 360° |
| Metoda wprowadzania | Trzy punkty na krzywej | Środek + promień (kliknięcie lub wpisanie) |
| Wprowadzanie tekstu | Współrzędna X,Y dla każdego punktu | Wartość promienia (środek też przyjmuje X,Y) |
| Zmiana rozmiaru po umieszczeniu | Przeciągnij uchwyty początku/końca | Przeciągnij dowolny uchwyt kardynalny |
| Najlepsze do | Zaokrąglenia, zaokrąglone narożniki, łukowe ścieżki | Pełne otwory, okrągłe cechy |

## DXF — element ARC

Łuki zapisywane są jako elementy `ARC` w pliku DXF, przechowując współrzędne środka, promień, kąt początku i kąt końca. Wszystkie właściwości — w tym kolor, warstwa, typ linii, skala typu linii i grubość — zachowywane są bez utraty danych. Każda aplikacja zgodna z DXF (LibreCAD, FreeCAD itd.) odczytuje je jako standardowe łuki.
