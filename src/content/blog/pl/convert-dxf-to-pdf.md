---
title: "Jak przekonwertować DXF na PDF (w odpowiedniej skali)"
description: "Przekonwertuj DXF na PDF za darmo w przeglądarce — również w dokładnej skali, np. 1:50 na A3, czego konwertery nie potrafią. Bez instalacji i konta."
keywords: [konwersja DXF na PDF, DXF do PDF za darmo, DXF PDF online, DXF PDF skala, drukowanie DXF w skali, konwerter DXF PDF, rysunek CAD do PDF, DXF PDF A3, skala 1:50 PDF, DXF PDF bez AutoCAD]
date: 2026-09-03
author: KulmanLab
tag: Poradnik
---

Aby przekonwertować DXF na PDF, otwórz go w edytorze CAD działającym w przeglądarce i wyeksportuj: nie ma czego instalować, nie trzeba konta, a plik zostaje na twoim komputerze. Jeśli PDF ma dawać poprawne wymiary po wydrukowaniu, potrzebujesz arkusza papieru i dokładnej skali — a to właśnie ten krok konwertery pomijają w całości.

Ta różnica jest sensem całego poradnika. Zwykły konwerter plików daje ci obrazek twojego rysunku. PDF w skali daje rysunek, do którego ktoś może przyłożyć linijkę.

## Szybka droga: po prostu zrobić PDF

Gdy potrzebujesz tylko czegoś czytelnego do wysłania:

1. Wejdź na [app.kulmanlab.com](https://app.kulmanlab.com) i przeciągnij swój `.dxf` na obszar rysunku, albo użyj przycisku **Import** w panelu plików.
2. Kliknij przycisk **Print** albo wpisz `printmanager`.
3. Ustaw **Format** na **PDF**.
4. Kliknij **Export**. Plik się pobiera.

I tyle. Podgląd jest renderowany tą samą ścieżką kodu i w tej samej rozdzielczości co eksportowany plik, więc to, co widzisz, jest tym, co dostaniesz, a nie przybliżeniem.

Jedna rzecz warta wiedzy: **PDF zachowuje wszystko, co jest na ekranie** — wymiary, tekst, kreskowania, odnośniki — rozmieszczone dokładnie tak, jak narysowano. Eksport do DXF również zabiera to wszystko, więc wybór między nimi nie dotyczy tego, co przetrwa. Dotyczy tego, czego potrzebuje odbiorca: PDF, jeśli ma tylko przeczytać lub wydrukować, DXF, jeśli ma edytować.

## Właściwa droga: konwersja w dokładnej skali

Jeśli ktoś ma na tej podstawie mierzyć albo wykonywać, „mieści się na stronie" nie wystarczy. Skala 1:50 znaczy, że 1 mm na papierze to 50 mm w rzeczywistości, i obowiązuje tylko wtedy, gdy ustawisz ją świadomie.

1. **Przejdź na arkusz papieru.** Kliknij zakładkę układu na dole ekranu; przycisk **+** dodaje nowy. Układy to przestrzeń papieru; w przestrzeni modelu nie ma strony, do której można skalować.
2. **Ustal arkusz.** Wpisz `pagemanager` albo kliknij prawym przyciskiem zakładkę układu i wybierz **Page Manager**. Wybierz format papieru (A4, A3, A2, Letter…) i orientację.
3. **Umieść rzutnię.** Wpisz `viewportrectangle` i wskaż dwa przeciwległe narożniki. Rzutnia to okno na twój model.
4. **Ustaw skalę.** Przy aktywnej rzutni użyj **selektora skali** na pasku sterowania. Wybierz standardowy stosunek albo wpisz własny — przyjmuje format stosunku (`1:200`, `5:1`) lub zwykłą liczbę dziesiętną (`0.005`), a potem Enter.
5. **Eksportuj.** Print Manager → PDF → Export.

PDF ma taki rozmiar, że strona drukuje się w rzeczywistej skali fizycznej. Wydrukuj go w 100% — nigdy z „dopasuj do strony", które po cichu przeskalowuje wszystko i niweczy całą pracę — a wymiary na papierze będą się zgadzać.

Jeśli później zmienisz format papieru albo skalę, istniejące rzutnie przeskalują się proporcjonalnie, więc układ się nie rozsypie.

## Wybór jakości

Lista **Quality** ustala rozdzielczość, w jakiej renderowany jest PDF:

| Quality | DPI | Do czego |
|---|---|---|
| Draft | 72 | Szybkie sprawdzenie, najmniejszy plik |
| Normal | 150 | Domyślne — wystarcza do załączników A4 |
| Presentation | 300 | Gdy ktoś będzie się przyglądał z bliska |
| Max | 600 | Duże formaty, drobne szczegóły |

Grubości linii skalują się razem z rozdzielczością, więc linia zachowuje tę samą *fizyczną* grubość na papierze przy każdym ustawieniu — wyższa jakość daje ostrzejszą linię, a nie cieńszą. Wyjątkiem jest włosowa (grubość `0`), która zgodnie z konwencją zostaje jednopikselowa na każdym poziomie.

## Style wydruku

Lista **Style** zmienia tusz i stronę:

- **Monochrome** — pełna czerń na bieli, i to jest domyślne. Tego chcesz do wszystkiego, co idzie na papier: kolorowe warstwy, które dobrze czyta się na ekranie, na drukarce laserowej zamieniają się w błotniste szarości.
- **Default** — każdy obiekt we własnym kolorze, biała strona.
- **Blueprint** — białe linie na głębokim błękicie pruskim, w stylu klasycznej cyjanotypii. Do prezentacji, nie do warsztatu.

## Konwersja tylko fragmentu rysunku

**Change Area** przycina eksport do prostokąta, który zaznaczasz na obszarze rysunku. Przycina rzeczywisty eksportowany plik, nie tylko podgląd, i działa zarówno w układzie, jak i w przestrzeni modelu.

Narożniki przyciągają się do uchwytów i przecięć jak każdy inny wskazywany punkt, więc możesz przycinać po narysowanej geometrii, a nie na oko — przydatne, gdy arkusz zawiera cztery detale, a chcesz tylko trzeci.

## Czego to nie robi

Uczciwe ograniczenia, zanim na tym polegniesz:

- **PDF to obraz rastrowy w kontenerze PDF, a nie wektor.** Przy A4 i jakości Normal tego nie widać. Przy A1 albo gdy ktoś mocno przybliży detal, wektorowy PDF z desktopowego pakietu CAD będzie ostrzejszy. Do dużych formatów podnieś Quality do Presentation albo Max — wektorem się przez to nie stanie.
- **Nic nie idzie na fizyczną drukarkę.** Dostajesz plik; drukowanie to sprawa twojej drukarki.
- **Tylko przeglądarki desktopowe** — Chrome, Firefox, Safari, Edge. Nie ma wersji mobilnej.
- **Tylko 2D, DXF a nie DWG.** Jeśli twój plik to `.dwg`, poproś nadawcę o eksport do DXF.

## Kiedy sięgnąć po coś innego

**Zwykły konwerter plików** (CloudConvert, Zamzar i podobne) wystarczy, jeśli naprawdę potrzebujesz tylko obrazka i nie obchodzi cię, w jakim rozmiarze się wydrukuje. Są szybkie i obsługują formaty, których nikt inny nie czyta. Nie dadzą ci 1:50 na A3.

**Desktopowy CAD** — LibreCAD, QCAD albo AutoCAD, jeśli go masz — tworzy wektorowe PDF-y i jest właściwą odpowiedzią przy wielkoformatowych rysunkach technicznych, które będą porządnie drukowane i dokładnie oglądane.

**To rozwiązanie** — dla szerokiego środka: DXF, który potrzebny jest dziś jako poprawnie wyskalowany, opisany PDF, bez instalowania czegokolwiek.

## Zanim wyślesz

- Skala ustawiona świadomie w rzutni, a nie zostawiona na tym, co się zmieściło
- Format papieru zgodny z tym, na czym odbiorca faktycznie wydrukuje
- Quality powyżej Normal, jeśli idzie na coś większego niż A4
- Styl Monochrome, chyba że celowo chcesz kolor
- PDF otwarty raz do sprawdzenia przed załączeniem
- Odbiorca uprzedzony, żeby drukował w 100%, a nie „dopasuj do strony"

Ten ostatni punkt ratuje więcej rysunków w skali niż wszystko inne na tej liście.

---

*Powiązane: [Print Manager](/pl/docs/commands/print-manager/) — wszystkie ustawienia eksportu, [Page Manager](/pl/docs/commands/page-manager/) — format papieru i skala układu, [ViewportRectangle](/pl/docs/commands/viewport-rectangle/) — umieszczanie i skalowanie rzutni, oraz [Import](/pl/docs/commands/import/) — co KulmanLab odczytuje z DXF.*
