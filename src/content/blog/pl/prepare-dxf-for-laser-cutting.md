---
title: "Jak przygotować plik DXF do cięcia laserem"
description: "Dlaczego usługi cięcia odrzucają pliki DXF i jak naprawić swój — zamknięte kontury, jednostki, szczelina cięcia i warstwy. Za darmo w przeglądarce."
keywords: [DXF do cięcia laserem, przygotowanie DXF laser, format pliku cięcie laserem, odrzucony plik DXF, zamknięte kontury DXF, szczelina cięcia laser, przygotowanie pliku laser, jednostki DXF laser, warstwy cięcie grawer, darmowy edytor DXF]
date: 2026-09-02
author: KulmanLab
tag: Poradnik
---

Plik DXF do cięcia laserem wymaga czterech rzeczy: zamkniętych konturów, poprawnych jednostek, wyłącznie geometrii do cięcia — bez wymiarów, notatek i kreskowań — oraz warstw rozdzielających cięcie, nacinanie i grawerowanie. Ten poradnik omawia każdą z nich i pokazuje, jak sprawdzić swój plik, zanim odrzuci go usługodawca.

Wszystko to zrobisz za darmo w przeglądarce na [app.kulmanlab.com](https://app.kulmanlab.com): nie ma czego instalować, nie trzeba konta, a plik nigdy nie opuszcza twojego komputera. To właśnie ten proces był powodem, dla którego zbudowaliśmy KulmanLab, więc ograniczenia dotyczące innych zadań CAD w większości tutaj nie obowiązują: cięcie laserem jest dwuwymiarowe, a DXF to dokładnie to, czego chcą zakłady cięcia.

## Dlaczego pliki są odrzucane

Pięć powodów wyjaśnia niemal wszystkie przypadki.

**Otwarte kontury.** Kształt, który wygląda na zamknięty, ale ma w narożniku szczelinę grubości włosa, nie jest obszarem — to zbiór niepołączonych linii. Maszyny muszą wiedzieć, co jest wewnątrz, a co na zewnątrz, a otwarty kontur nie ma wnętrza. To zdecydowanie najczęstszy powód odrzucenia.

**Złe lub niejednoznaczne jednostki.** DXF nie zapisuje w sposób pewny, co oznaczają jego liczby. Ten sam plik może być w milimetrach, centymetrach, calach albo stopach, a często wcale tego nie podaje. Detal, który przychodzi 25,4 razy za duży albo za mały, to właśnie to.

**Wszystko poza geometrią.** Wymiary, tabelki rysunkowe, notatki, kreskowania, linie pomocnicze. Maszyna z ochotą spróbuje wyciąć twoje opisy.

**Zdublowane linie.** Dwie identyczne linie leżące na sobie oznaczają, że laser przejedzie tę samą ścieżkę dwa razy: stracony czas, przypalone krawędzie, a na cienkim materiale ryzyko pożaru.

**Wszystko na jednej warstwie.** Jeśli cięcie, nacinanie i grawerowanie nie są rozdzielone, usługodawca ich nie odróżni i poprosi o ponowne przesłanie.

## Przygotowanie pliku

Przeciągnij swój `.dxf` na obszar rysunku na [app.kulmanlab.com](https://app.kulmanlab.com) albo użyj przycisku **Import** w panelu plików. Rysunek się wczytuje, a widok dopasowuje się do niego.

**1. Zobacz, co naprawdę masz.** Wpisz `fit`, żeby zmieścić całość w widoku. Potem przybliż każdy narożnik każdego detalu — szczeliny są niewidoczne w skali całego rysunku i oczywiste przy dziesięciokrotnym powiększeniu. To ta kontrola oszczędza ci maila z odmową.

**2. Usuń to, co nie ma być cięte.** Linie pomocnicze, notatki, ramki, wymiary. `layer-isolate` pokazuje jedną warstwę naraz i w ten sposób znajduje się resztki schowane pod właściwą geometrią.

**3. Zamknij szczeliny.** `trim` przycina wystające końce tam, gdzie dwie linie przecinają się z zapasem. Tam, gdzie linie nie dochodzą, przeciągnij uchwyt końca na sąsiedni — uchwyty przyciągają, więc końce naprawdę się spotykają, zamiast prawie się spotykać.

**4. Sprawdź wymiary.** `distance` mierzy między dwoma punktami, `area` mierzy zamknięty obszar z klikniętych punktów. Zmierz element, którego rzeczywisty wymiar znasz. Jeśli wynik różni się 25,4 razy, twój plik jest w złym układzie jednostek.

**5. Rozdziel cięcie, nacinanie i grawerowanie.** Każdą operację umieść na własnej warstwie o oczywistej nazwie: `CUT`, `SCORE`, `ENGRAVE`. Większość usługodawców wymaga tego albo osobnych plików. `layer-manager` tworzy je i przypisuje.

Potem eksportuj: **Export** → **DXF**. KulmanLab zapisuje zwykły DXF w formacie AC1032, czyli dokładnie to, czego oczekują zakłady cięcia i oprogramowanie maszyn.

## Szczelina cięcia

Laser usuwa materiał podczas cięcia — mniej więcej od 0,1 do 0,3 mm, zależnie od maszyny, materiału i grubości. Wytnij kwadrat 50 mm, a dostaniesz kwadrat odrobinę mniejszy, i detal, który miał wejść na wcisk, nie wejdzie.

Są dwa sposoby:

**Zostaw to usługodawcy.** Większość zakładów sama kompensuje szczelinę cięcia, a jeśli to robi, twoja własna kompensacja przesuwa detale w drugą stronę. Zapytaj, zanim cokolwiek zmienisz.

**Zrób to sam.** `offset` tworzy równoległą kopię kształtu w stałej odległości — połowa szerokości szczeliny, na zewnątrz dla detali, które mają zachować wymiar, do wewnątrz dla otworów. Działa na liniach, okręgach, łukach, elipsach i poliliniach. Obsługuje jeden obiekt naraz, więc nadaje się do kilku krytycznych miejsc, a nie do arkusza z dwustoma detalami.

Jeśli tolerancja ma znaczenie, wytnij próbkę, zanim przeznaczysz materiał.

## Co sprawdzić przy eksporcie do DXF

Warto wiedzieć, zanim na tym polegniesz:

- **Odznacz opisy, zamiast je kasować.** Tekst, wymiary, odnośniki i kreskowania są teraz eksportowane, więc wszystko, co zostawisz na rysunku, trafi do pliku. Nie musisz tego kasować: Export Manager wymienia każdy typ obiektu z własnym polem wyboru, więc odznaczenie Text, wierszy wymiarów, Leaders i Hatches daje DXF z samą geometrią cięcia, a sam rysunek pozostaje nietknięty.
- **Tekst wychodzi jako `MTEXT`, a to nie to samo co geometria do grawerowania.** Napisy eksportują się wraz z formatowaniem, ale sporo oprogramowania maszynowego oczekuje na warstwie grawerowania konturów, nie żywego tekstu. Sprawdź, co przyjmuje twoje, zanim zaplanujesz na tym grawer.
- **Odwołania do bloków nie są importowane.** Rysunek zbudowany z powtarzalnych symboli blokowych przychodzi niekompletny, więc porównaj liczbę detali z oryginałem.

Splajny *są* eksportowane. Niektóre programy maszynowe radzą sobie z nimi słabo i wolą polilinie — jeśli tak jest u ciebie, przerysuj krzywe jako polilinie albo łuki.

## Ostrzeżenie o automatyzacji

KulmanLab **nie ma kontroli wstępnej**. Nic nie skanuje w poszukiwaniu otwartych konturów, zdublowanych linii czy problemów z jednostkami i nie zgłasza ich. Powyższe sprawdzenia są ręczne: przybliż, zmierz, popatrz.

Przy kilku detalach to w porządku, przy całym rozłożonym arkuszu — męczące. Jeśli produkujesz arkusze regularnie, lepiej posłuży ci narzędzie z automatycznym walidatorem — a przy pojedynczych detalach, co dotyczy większości ludzi przez większość czasu, uważne obejrzenie pliku wychwytuje te same problemy.

## Zanim wyślesz

- Każdy kontur cięcia zamknięty — narożniki sprawdzone przy dużym powiększeniu
- Jeden znany wymiar zmierzony i poprawny
- Bez pozostawionych wymiarów, notatek, ramek i geometrii pomocniczej
- Bez zdublowanych linii leżących na sobie
- Cięcie, nacinanie i grawerowanie na osobnych, jasno nazwanych warstwach
- Szczelina cięcia: zastosowana albo świadomie pozostawiona usługodawcy
- Wyeksportowany jako DXF i raz otwarty ponownie, żeby potwierdzić, że wygląda dobrze

Ten ostatni punkt kosztuje dziesięć sekund i wyłapuje niespodzianki eksportu przed usługodawcą.

---

*Powiązane: [Import](/pl/docs/commands/import/) — co KulmanLab odczytuje z DXF, [Export Manager](/pl/docs/commands/export-manager/) — co dokładnie niesie każdy format eksportu, [Offset](/pl/docs/commands/offset/) — kompensacja szczeliny cięcia, oraz [LayerManager](/pl/docs/commands/layer-manager/) — konfiguracja warstw cięcia i grawerowania.*
