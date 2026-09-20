---
title: Export Manager — Pobierz Rysunki jako DXF lub JSON
description: Pobierz rysunek jako DXF lub JSON, zaznaczając wedle typu obiektu, co ma się w nim znaleźć. Oba niosą geometrię, tekst, wymiary, odnośniki i kreskowania.
keywords: [eksport DXF, eksport pliku CAD, pobierz DXF przeglądarka, zapisz DXF online, eksport JSON CAD, eksport KulmanLab, pobierz plik CAD, eksport DXF, zapisz rysunek do pliku, pobieranie DXF]
group: file
order: 6
---

# Export Manager

Polecenie `MenedżerEksportu` pobiera bieżący rysunek do twojego systemu plików. Dwa formaty stoją obok siebie — **DXF** dla zgodności z innymi narzędziami CAD i **JSON** dla wiernych zapisów wewnątrz KulmanLab CAD — a każdy ma własną listę tego, co trafia do pliku.

## Jak eksportować

1. Kliknij przycisk **Export** na pasku narzędzi (ikona pobierania) w panelu plików lub wpisz `MenedżerEksportu` w terminalu.
2. Okno **Export Manager** otwiera się w dwóch kolumnach, **JSON** i **DXF**, z których każda wymienia typy obiektów rysunku wraz z polem wyboru i liczbą.
3. Odznacz to, co chcesz pominąć. Na starcie zaznaczone jest wszystko.
4. Kliknij **Export JSON** lub **Export DXF**. Plik trafia do domyślnego folderu pobierania, a okno się zamyka.

Naciśnij `Escape`, aby zamknąć okno bez eksportowania.

## Wybór tego, co zostanie wyeksportowane

Obie kolumny wymieniają te same typy obiektów, każdy z liczbą wystąpień na rysunku:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Przy otwarciu wszystko jest zaznaczone, więc natychmiastowy eksport daje cały rysunek. Odznacz typ, aby pominąć go w tym jednym pliku.

- **Kolumny są niezależne.** Odznaczenie Hatches po stronie DXF nie zmienia tego, co tworzy **Export JSON** — każdy format trzyma własny wybór.
- **Czego nie masz, jest wyszarzone.** Wiersza z liczbą `0` nie da się zaznaczyć, więc lista działa też jako szybka inwentaryzacja rysunku.
- **Liczby to migawka.** Powstają przy otwarciu okna i nie aktualizują się, gdy rysunek zmienia się w tle. Zamknij i otwórz ponownie, aby je odświeżyć.
- **Nic nie jest usuwane.** Odznaczanie kształtuje wyłącznie plik wynikowy; sam rysunek pozostaje nietknięty.

**Linear Dimensions** obejmuje wymiary liniowe, wyrównane i ciągłe: jeden typ obiektu tworzony przez trzy różne polecenia. Promień, średnica i kąt mają własne wiersze.

Aby zrobić plik do cięcia, odznacz Text, cztery wiersze wymiarów, Leaders i Hatches, po czym kliknij **Export DXF** — zobacz [przygotowanie DXF do cięcia laserem](/pl/blog/prepare-dxf-for-laser-cutting/).

## Wybór formatu

| Format | Rozszerzenie | Najlepsze do | Ograniczenia |
|--------|-------------|--------------|--------------|
| **JSON** *(natywny)* | `.json` | Zapisywanie pracy do ponownego otwarcia w KulmanLab CAD | Niekompatybilny z innymi narzędziami CAD |
| **DXF** | `.dxf` | Udostępnianie w FreeCAD, LibreCAD itp. | Ile przetrwa, zależy od programu odbierającego |

**Kiedy używać JSON:** zawsze, gdy chcesz zapisać pełną kopię swojej pracy. JSON to natywny format KulmanLab, który dokładnie zachowuje każdy element — w tym wymiary, odnośniki, hatch i wszystkie dane warstw.

**Kiedy używać DXF:** gdy musisz przekazać rysunek komuś korzystającemu z innej aplikacji CAD. Wyeksportowany plik używa formatu DXF AC1032 i można go otworzyć w większości narzędzi zgodnych z DXF.

## Co jest eksportowane w każdym formacie

### Eksport JSON

Uwzględniony jest każdy typ elementu:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Wymiary (liniowy, wyrównany, ciągły, promień, średnica, kąt)
- Leaders (multileadery)
- Hatches, wraz z ich wzorem, skalą, kątem i punktem początkowym
- Layers i Linetypes

### Eksport DXF

Uwzględniony jest każdy typ elementu:

- Lines, Circles, Arcs, Ellipses, Polylines (eksportowane jako `LWPOLYLINE`), Splines
- Text
- Wymiary (liniowy, wyrównany, ciągły, promień, średnica, kąt)
- Leaders (multileadery)
- Hatches, wraz z ich wzorem, skalą, kątem i punktem początkowym
- Layers i Linetypes

Plik jest zapisywany jako DXF AC1032, więc rysunek wyeksportowany z KulmanLab otwiera się w innych narzędziach obsługujących DXF z nienaruszonymi opisami, a nie dociera jako naga geometria.

To, co następnie zrobi z nim każdy program odbierający, wciąż bywa różne — obsługa DXF różni się między narzędziami, a starsze może pominąć obiekty, które nowsze odczytuje. Jeśli rysunek musi wyglądać identycznie wszędzie, [Menedżera druku](../print-manager/) uchwyci go zamiast tego jako PDF lub obraz.

## Nazwa eksportowanego pliku

Pobrany plik otrzymuje nazwę na podstawie bieżącego pliku rysunku (np. `myplan.json`). Rozszerzenie zmienia się zgodnie z wybranym formatem. Rysunek, któremu nigdy nie nadano nazwy, eksportuje się jako `drawing.dxf` lub `drawing.json`.

## Różnica między Export Manager a Menedżerem druku

| Funkcja | Export Manager | Menedżer druku |
|---------|-----------------|-----------------|
| Wyjście | Plik źródłowy wektorowy (.dxf / .json) | Obraz rastrowy (.png / .jpeg / .webp / .pdf) |
| Edytowalny w innych narzędziach | Tak (DXF) | Nie |
| Zachowuje layers i linetypes | Tak | Nie (renderowane płasko) |
| Przechwytuje wymiary i leadery | Tak | Tak |

Użyj **Export Manager**, gdy potrzebujesz edytowalnego pliku. Użyj [Menedżera druku](../print-manager/), gdy potrzebujesz wizualnego zrzutu.

## Powiązane polecenia

- [Import](../import/) — otwórz plik DXF lub JSON
- [Menedżer druku](../print-manager/) — eksportuj płótno jako obraz PNG, JPEG, WebP lub PDF
- [File Manager](../file-manager/) — przeglądaj rysunki zapisane w pamięci przeglądarki
