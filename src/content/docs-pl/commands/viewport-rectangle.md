---
title: Polecenie ViewportRectangle — Tworzenie okna widoku w układzie w KulmanLab CAD
description: Polecenie ViewportRectangle tworzy okno widoku w aktywnym układzie papieru przez wyznaczenie dwóch przeciwnych narożników. Okno widoku pokazuje elementy przestrzeni modelu przy domyślnej skali układu.
keywords: [prostokąt widoku, tworzenie okna widoku, okno widoku układu, okno widoku przestrzeni papieru, kulmanlab]
group: layouts
order: 1
---

# ViewportRectangle

Polecenie `ViewportRectangle` tworzy nowe okno widoku w aktywnym układzie papieru przez wyznaczenie dwóch przeciwnych narożników. Dostępne tylko w przestrzeni układu.

## Tworzenie okna widoku

1. Przełącz się na układ papieru za pomocą zakładki na dole ekranu.
2. Wpisz `ViewportRectangle` w terminalu lub kliknij przycisk **Prostokąt widoku** na pasku narzędzi.
3. **Kliknij pierwszy narożnik** lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
4. **Kliknij przeciwny narożnik** — okno widoku jest natychmiast umieszczane. Tutaj również działa wprowadzanie współrzędnych.

Nowe okno widoku pokazuje pełny model przy domyślnej skali układu. Użyj kółka myszy wewnątrz okna widoku, aby powiększyć, lub przeciągnij środkowym przyciskiem, aby panoramować widok modelu.

## Wprowadzanie współrzędnych

Na każdym kroku narożnika możesz wpisać dokładną współrzędną:

1. Wpisz wartość X.
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby umieścić punkt.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Enter` | Potwierdź wpisaną współrzędną |
| `Escape` | Anuluj |

## Edytowanie okna widoku

Po umieszczeniu okna widoku kliknij je, aby je zaznaczyć:

- **Przeciągnij krawędzie lub narożniki**, aby zmienić rozmiar.
- **Przeciągnij uchwyt środkowy**, aby je przesunąć.
- Użyj **selektora skali** na pasku sterowania, aby ustawić dokładną skalę (np. 1:50). Aby wprowadzić skalę spoza listy, wpisz ją bezpośrednio w polu wprowadzania na dole listy rozwijanej — akceptuje format proporcji (`1:200`, `5:1`) lub zwykłą liczbę dziesiętną (`0.005`), a następnie naciśnij **Enter**.
- Kliknij prawym przyciskiem okno widoku i użyj **Zablokuj**, aby zapobiec przypadkowym zmianom.

## Uwagi

- ProstokątWidoku jest dostępny tylko gdy aktywna jest zakładka układu papieru. Uruchomienie w przestrzeni modelu pokazuje komunikat o błędzie i wychodzi.
- Aby skopiować istniejące okno widoku, użyj [ViewportCopy](../viewport-copy/).
