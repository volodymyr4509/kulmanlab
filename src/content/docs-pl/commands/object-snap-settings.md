---
title: "Polecenie ObjectSnapSettings — wszystkie ustawienia paska sterowania"
description: "Polecenie ObjectSnapSettings otwiera jedno okno ze wszystkimi ustawieniami paska sterowania — przyciąganiem, przyciąganiem do stycznej, śledzeniem kąta, pinezkami, wpisywaniem, lassem i wyświetlaniem — każde wyjaśnione obok listy małym rysunkiem."
keywords: ["ustawienia przyciągania do obiektów CAD", "przyciąganie do stycznej CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

Polecenie `UstawieniaPrzyciągania` otwiera jedno okno ze wszystkimi ustawieniami paska sterowania. Każde ustawienie jest wyjaśnione obok listy, z małym rysunkiem. Otwórz je przyciskiem z kołem zębatym na pasku sterowania albo wpisz `UstawieniaPrzyciągania`. Zmiana ustawienia tutaj to to samo, co przełączenie jego przycisku na pasku.

## Ustawienia

### Gdzie ląduje kursor

| Pasek sterowania | Co robi |
|---|---|
| `Snap` | Kursor przeskakuje do najbliższego punktu siatki, więc wskazane punkty wypadają na okrągłych współrzędnych. Przyciąganie do obiektu blisko kursora nadal ma pierwszeństwo. Skok siatki zmienia się z powiększeniem. |
| `TANG` | Gdy linia jest rysowana od punktu, zbliż kursor do miejsca, w którym ledwie dotknęłaby okręgu, łuku, elipsy lub splajnu, a kursor się tam przyciągnie. Działa w Linii, Polilinii i innych poleceniach oraz przy przeciąganiu końca linii lub polilinii. |

### Prowadnice podczas rysowania

| Pasek sterowania | Co robi |
|---|---|
| `ANGL` | Gdy kursor zbliży się do jednego z tych kątów od ostatniego punktu, blokuje się w tym kierunku, pokazanym jako przerywany promień. Gdy jest zablokowany, wpisz długość i naciśnij Enter, aby postawić punkt w tej odległości. |
| `Pins` | Przytrzymaj chwilę kursor nad punktem przyciągania, aby go przypiąć. Przypięty punkt wysyła poziome i pionowe linie pomocnicze, a kursor przyciąga się do nich i do miejsc ich przecięcia. |
| `Dist` | Ostatnio przypięty punkt służy jako punkt początkowy: gdy kursor zablokuje się na kącie od pinezki, wpisz długość i naciśnij Enter, aby postawić punkt w tej odległości. Wymaga pinezek wektorowych. |

### Wprowadzanie i zaznaczanie

| Pasek sterowania | Co robi |
|---|---|
| `Rel` | Wpisany punkt X,Y jest mierzony od ostatnio wskazanego punktu, jakby zaczynał się od @. Backspace usuwa @ dla punktu we współrzędnych rysunku. Po wyłączeniu wpisz @ samodzielnie dla przesunięcia. |
| `Lasso` | Naciśnij i przeciągnij na pustym miejscu, aby narysować swobodną pętlę wokół tego, co chcesz, zamiast prostokąta. Zaznaczone zostaje to, co pętla obejmie. |

### Wyświetlanie

| Pasek sterowania | Co robi |
|---|---|
| `Grid` | Pokazuje siatkę w tle. Jej odstęp zmienia się przy powiększaniu. Wyłączenie nie wyłącza przyciągania do siatki. |
| `LWT` | Rysuje linie z ich grubością, więc cięższe linie wyglądają na grubsze. Po wyłączeniu każda linia jest cienka, co może ułatwić czytanie gęstego rysunku. |

**ANGL** ma własny wiersz na krok: wybierz 10°, 20°, 30°, 45° lub 90° albo wybierz **Własny** i wpisz dowolny kąt od 1° do 180°.

Przyciąganie do stycznej, wpisywanie względne i lasso są domyślnie wyłączone. **Przywróć domyślne** przywraca wszystkim ustawieniom stan początkowy.

---

*Powiązane: [Vector Pins](../../interface/vector-pins/), [Śledzenie odległości](../../interface/distance-tracking/), [Siatka i przyciąganie](../../interface/grid-snap/), [Wprowadzanie współrzędnych](../../interface/coordinate-entry/)*
