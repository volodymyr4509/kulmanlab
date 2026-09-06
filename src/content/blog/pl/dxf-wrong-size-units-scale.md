---
title: "Dlaczego Twój DXF otworzył się w złym rozmiarze (i jak to naprawić)"
description: "DXF otwierający się 25,4 raza za mały albo 1000 razy za duży to niezgodność jednostek, a nie uszkodzony plik. Jak rozpoznać stosunek, przeskalować i sprawdzić."
keywords: [DXF zła skala, DXF zły rozmiar, jednostki DXF, DXF mm czy cale, DXF zaimportowany za mały, współczynnik skali DXF, DXF 25.4, poprawić skalę DXF, niezgodność jednostek DXF, przeskalować DXF]
date: 2026-09-04
author: KulmanLab
tag: Poradnik
---

DXF się otwiera, a element, który powinien mieć 40 mm szerokości, mierzy 1,575. Albo rzut przychodzi wielkości całej kamienicy. Plik nie jest zepsuty i nikt niczego nie zrobił źle — rysunek jest w porządku, a po drodze zgubiła się liczba, która mu towarzyszyła.

Warto to zrozumieć, zanim cokolwiek przeskalujesz, bo poprawka trwa dziesięć sekund, gdy już wiesz, z jakim stosunkiem masz do czynienia, a zgadywanie to sposób na dwukrotne wycięcie złego rozmiaru.

## DXF prawie nie niesie jednostek

DXF zapisuje współrzędne jako gołe liczby. Linia od `0,0` do `40,0` ma czterdzieści *czegoś* długości. Format nie dołącza jednostki do współrzędnej i nie miałby gdzie — liczba *jest* geometrią.

Najbliżej temu do zmiennej nagłówka o nazwie `$INSUNITS`, pojedynczego kodu dla całego pliku: `1` dla cali, `4` dla milimetrów, `6` dla metrów i tak dalej. Dwie rzeczy czynią ją słabszą, niż brzmi. To jedna wartość na cały rysunek, więc nie opisze pliku złożonego z różnych źródeł. I jest doradcza, nie wiążąca: wiele aplikacji czyta ją tylko przy *wstawianiu* jednego rysunku w drugi, a przy zwykłym otwarciu pliku pomija — z rozsądnego założenia, że kto otwiera rysunek, zwykle wie, co narysował.

Zatem „40" dociera nietknięte, a „milimetry" nie. Każdy DXF o złym rozmiarze, jaki kiedykolwiek dostaniesz, mieści się w tym zdaniu.

## Najpierw ustal stosunek

Zmierz element, którego prawdziwy rozmiar naprawdę znasz: średnicę otworu, krawędź blachy, znormalizowany rozstaw. Podziel rozmiar, jaki powinien mieć, przez zmierzony. Wynik to niemal zawsze jedna z tych liczb:

| Stosunek | Co się stało |
|---|---|
| **25,4** | Narysowane w calach, czytane jako milimetry |
| **0,03937** | Narysowane w milimetrach, czytane jako cale |
| **1000** | Narysowane w metrach, czytane jako milimetry |
| **0,001** | Narysowane w milimetrach, czytane jako metry |
| **12** | Stopy czytane jako cale |
| **304,8** | Stopy czytane jako milimetry |

Jeśli Twoja liczba tam jest, masz wyłącznie niezgodność jednostek, a reszta zajmie minutę.

Jeśli jej nie ma — powiedzmy 1,37 albo 3,2 — zatrzymaj się. To nie jest problem jednostek, a przeskalowanie da rysunek błędny w sposób znacznie trudniejszy do wychwycenia. Przejdź do ostatniej sekcji.

## Poprawka

Potrzebujesz czegoś, czym zmierzysz, i czegoś, czym przeskalujesz. Umie to każde narzędzie CAD; oto jak w [KulmanLab](https://kulmanlab.com/pl/), który otwiera DXF w karcie przeglądarki bez instalacji:

1. Otwórz plik — przeciągnij go na stronę albo użyj [Import](/pl/docs/commands/import/).
2. Uruchom [Distance](/pl/docs/commands/distance/) i wskaż oba końce znanego elementu. Przyciąganie ma tu znaczenie: łap prawdziwe punkty końcowe, a nie coś obok, inaczej wpieczesz własny błąd we współczynnik.
3. Podziel. Znany rozmiar ÷ zmierzony. Otwór 40 mm pokazujący 1,575 daje 40 ÷ 1,575 ≈ **25,4**.
4. Zaznacz wszystko, uruchom [Scale](/pl/docs/commands/scale/), wskaż punkt bazowy i wpisz współczynnik.

Punkt bazowy pozostaje nieruchomy, gdy reszta się przesuwa, więc ustaw go tam, gdzie potrafisz to sobie wyobrazić: w narożniku elementu albo w początku układu. Dla rysunku, który zaraz pójdzie na cięcie, początek układu jest zwykle rozsądnym wyborem.

Pomaga to, że KulmanLab nie ma własnego ustawienia jednostek. Współrzędne to po prostu liczby — dokładnie ten stan, w jakim chcesz mieć rysunek, gdy dochodzisz, co jego liczby znaczą. Nic nie przelicza się za Twoimi plecami i nie ma z czym walczyć.

## Sprawdź poprawkę, zanim jej zaufasz

Zmierz *drugi* element w innym miejscu rysunku, którego prawdziwy rozmiar też znasz. A potem to sprawdź.

Ten krok się pomija, a jest jedynym, który wyłapuje zły przypadek. Jeśli druga miara teraz się zgadza, rysunek był równomiernie w złych jednostkach, a teraz jest równomiernie w dobrych. Gotowe.

Jeśli druga miara *nadal* jest błędna, i to o inną wartość, nigdy nie była to prosta niezgodność jednostek. Właśnie przeskalowałeś rysunek niespójny, co jest gorsze niż punkt wyjścia, bo błąd przestał być czystym stosunkiem, który ktoś mógłby wychwycić.

[Area](/pl/docs/commands/area/) bywa tu dobrą drugą opinią, zwłaszcza przy płytach. Pole skaluje się z *kwadratem* współczynnika, więc błąd długości 25,4 pokazuje się jako błąd pola 645 — rozbieżność, której trudno sobie wytłumaczyć.

## Jak temu zapobiec następnym razem

Jednostki gubią się między ludźmi, więc i rozwiązanie mieszka tam.

**Podaj jednostkę, wysyłając plik.** Jedna linijka w wiadomości. „Wszystkie wymiary w mm." Nic nie kosztuje i usuwa cały problem.

**Dołącz wymiar odniesienia.** Podaj jedną prawdziwą miarę — „płyta zewnętrzna ma 300 mm szerokości". Teraz odbiorca może plik zweryfikować, a nie zakładać, a jeśli coś poszło źle, poprawi to w minutę, nie wracając do Ciebie.

**Pytaj, gdy to Ty odbierasz.** Jeśli plik przychodzi bez podanych jednostek, a Ty masz zaraz ciąć materiał, jedna wiadomość jest tańsza niż jedna zmarnowana płyta.

**Rysuj w jednostkach, których oczekuje Twoje wyjście.** Cięcie laserem, CNC i większość procesów wytwórczych oczekuje milimetrów. Jeśli plik tam idzie, rysuj w milimetrach i nie zostaje żadne przeliczenie do zepsucia. Zobacz [przygotowanie DXF do cięcia laserem](/pl/blog/prepare-dxf-for-laser-cutting/).

## Kiedy to nie jest problem jednostek

Jeśli Twój stosunek nie był czystym przeliczeniem jednostek, prawdopodobne przyczyny są innego rodzaju:

- **Rysunek miesza skale.** Ktoś narysował część w 1:1 i wkleił detal w 1:5, albo blok wstawiono ze współczynnikiem skali i nigdy nie poprawiono. Napraw winną geometrię, a nie cały plik.
- **Zmierzyłeś geometrię arkusza.** Tabelka rysunkowa albo ramka opisowa jest rysowana w rozmiarze arkusza, nie modelu. Zmierz coś, co należy do rzeczywistego obiektu.
- **Zmierzyłeś nie to.** Nominalny otwór 40 mm bywa rysowany jako 39,8 ze względu na pasowanie, a panel „300 mm" może mieć 300 do zewnętrznej krawędzi wpustu, którego nie widać. Wybierz element o jednoznacznej krawędzi.

W każdym z tych przypadków odpowiedzią jest ustalić, czym rysunek naprawdę jest, a nie skalować go. Rysunek, którego części przeczą sobie nawzajem, będzie kosztował materiał, dopóki ktoś go nie otworzy i nie spojrzy.

---

*Powiązane: [Distance](/pl/docs/commands/distance/) do mierzenia, [Scale](/pl/docs/commands/scale/) do poprawki, [Area](/pl/docs/commands/area/) dla drugiej opinii oraz [Export Manager](/pl/docs/commands/export-manager/) — co niesie każdy format, gdy odsyłasz plik.*
