---
title: Menedżer druku — Eksportowanie rysunku jako PNG, JPEG, WebP lub PDF
description: Polecenie PrintManager otwiera Menedżera druku — dedykowane okno eksportu z podglądem na żywo, który dokładnie odpowiada eksportowanemu plikowi, ustawieniem Jakości/DPI, selektorem formatu, stylem druku Default/Monochrome/Blueprint i opcjonalnym zaznaczaniem obszaru. Obsługuje PNG, JPEG, WebP i PDF.
keywords: [eksport PNG CAD, eksport PDF CAD, drukowanie rysunku CAD, menedżer druku, jakość druku DPI, monochromatyczny eksport, styl druku blueprint, kulmanlab eksport]
group: file
order: 4
---

# Menedżer druku

Polecenie `PrintManager` otwiera **Menedżera druku** — dedykowane okno eksportu z podglądem na żywo, selektorem formatu (PNG / JPEG / WebP / PDF), selektorem Style (Default / Monochrome / Blueprint) i opcjonalnym przycięciem obszaru. Nic nie jest wysyłane do fizycznej drukarki; wyjście jest pobierane jako plik.

## Otwieranie Menedżera druku

Kliknij przycisk **Print** na pasku narzędzi lub wpisz `PrintManager` w terminalu. Menedżer druku otwiera się natychmiast, pokazując podgląd bieżącego widoku.

Podgląd jest renderowany dokładnie tą samą ścieżką kodu, w dokładnie tej samej rozdzielczości pikseli, co plik, który ostatecznie wyeksportujesz — zmiana Quality, Style lub obszaru eksportu natychmiast ponownie renderuje podgląd, więc to, co widzisz, jest tym, co zostaje pobrane, a nie przybliżeniem tego.

## Układ Menedżera druku

Okno ma dwa panele:
- **Lewy pasek boczny** — wszystkie kontrolki eksportu.
- **Prawy panel** — podgląd na żywo, który aktualizuje się po zmianie ustawień.

### Kontrolki paska bocznego

| Kontrolka | Opis |
|----------|------|
| **Zmień obszar** | Przytnij do niestandardowego prostokąta na płótnie (patrz poniżej) — faktycznie przycina eksportowany obraz, także w układzie z przestrzenią papieru, a nie tylko podgląd na ekranie |
| Lista rozwijana **Quality** | Ustawia rozdzielczość eksportu (patrz poniżej) |
| Lista rozwijana **Style** | Default, Monochrome lub Blueprint — patrz *Style druku* poniżej. Domyślnie Monochrome dla czystego wyjścia druku |
| Lista rozwijana **Format** | PNG, JPEG, WebP lub PDF |
| Przycisk **Eksportuj** | Generuje i pobiera plik |

## Style druku

Lista rozwijana **Style** kontroluje zarówno kolor atramentu, którym rysowane są encje, jak i tło strony:

| Styl | Atrament | Tło strony |
|------|----------|------------|
| **Default** | Własny kolor każdej encji | Białe |
| **Monochrome** *(domyślny)* | Jednolita czerń, niezależnie od koloru encji/warstwy | Białe |
| **Blueprint** | Jednolita biel, niezależnie od koloru encji/warstwy | Głęboki błękit pruski, z delikatną siatką odniesienia |

Blueprint odtwarza wygląd tradycyjnego architektonicznego wydruku cyjanotypowego — białe linie na ciemnoniebieskim arkuszu. Jej siatka odniesienia jest wymiarowana względem rozmiaru strony, a nie DPI, dzięki czemu wygląda tak samo gęsto przy dowolnym ustawieniu Quality, zamiast gęstnieć wraz ze wzrostem rozdzielczości.

## Jakość i rozdzielczość

Rozwijana lista **Quality** ustawia DPI, w jakim renderowany jest eksport:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(domyślnie)* | 150 |
| Presentation | 300 |
| Max | 600 |

Wyższa Jakość daje większy, ostrzejszy obraz przy tym samym fizycznym rozmiarze — grubości linii skalują się razem z rozdzielczością, więc linia zachowuje tę samą *fizyczną* grubość na papierze przy dowolnym ustawieniu Jakości, zamiast wyglądać cieniej wraz ze wzrostem DPI. Jedynym wyjątkiem jest cienka linia (grubość `0`), którą tradycyjnie definiuje się jako „najcieńszą linię, jaką może narysować urządzenie wyjściowe” — pozostaje o stałej szerokości 1 piksela na każdym poziomie Jakości, dokładnie tak, jak zachowuje się na płótnie na żywo.

Zmiana Jakości natychmiast ponownie renderuje podgląd, dzięki czemu widzisz rzeczywistą ostrość (i kompromis w rozmiarze pliku) przed eksportem.

## Wybieranie niestandardowego obszaru eksportu

Domyślnie podgląd pokazuje dokładnie to, co było widoczne na płótnie podczas otwierania Menedżera druku. Aby wyeksportować określony region:

1. Kliknij **Zmień obszar** — Menedżer druku chowa się, a płótno staje się interaktywne.
2. **Kliknij pierwszy narożnik** prostokąta eksportu.
3. **Kliknij przeciwny narożnik** — Menedżer druku ponownie otwiera się z zaznaczonym obszarem w podglądzie.

Naciśnij `Escape` podczas zaznaczania obszaru, aby anulować i przywrócić poprzedni obszar.

Podgląd dynamicznie zmienia rozmiar, aby dopasować się do **dokładnego współczynnika kształtu** zaznaczonego obszaru, więc podgląd jest dokładny co do piksela.

## Formaty eksportu

| Format | Najlepsze do | Uwagi |
|--------|----------|-------|
| **PNG** | Bezstratny, ostre linie | Wbudowane tło strony ze Style, bez przezroczystości |
| **JPEG** | Mniejszy plik do udostępniania | Jakość 95%, lekka kompresja |
| **WebP** | Najmniejszy plik na strony internetowe | Ta sama jakość 95%, lepsza kompresja niż JPEG |
| **PDF** | Dokumenty gotowe do druku | Obraz osadzony w kontenerze PDF przy DPI wybranej Quality, o rozmiarze zapewniającym wydruk strony w prawdziwej skali fizycznej |

Eksportowany plik nosi nazwę `kulman-<znacznik_czasu>.<rozszerzenie>` i pobiera się automatycznie.

## Rozdzielczość eksportu i tło

- **Eksport przestrzeni modelu / widoku**: ograniczony do 2000 × 2000 pikseli przy domyślnej jakości Normal (150 DPI), skalowany proporcjonalnie do zaznaczonego obszaru; limit również skaluje się z Quality — Draft ma niższy limit, Presentation i Max wyższy (do 8000 × 8000 przy Max/600 DPI).
- **Eksport układu (przestrzeń papieru)**: wymiarowany bezpośrednio na podstawie wymiarów papieru układu przy wybranym DPI — np. arkusz A4 (210 × 297 mm) przy jakości Normal eksportuje się przy około 1240 × 1754 px — więc nie podlega limitowi 2000 px widoku.
- Tło podąża za wybranym **Style** druku — białe dla Default i Monochrome, głęboki błękit pruski dla Blueprint (patrz *Style druku* powyżej).
- Warstwy oznaczone jako **niedrukowane** są wykluczone z eksportu.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Escape` (podczas zaznaczania obszaru) | Anuluj zaznaczanie obszaru, przywróć poprzedni obszar |
| `Escape` (w Menedżerze druku) | Zamknij Menedżera druku |
