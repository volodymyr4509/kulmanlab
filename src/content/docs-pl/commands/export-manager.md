---
title: Export Manager — Pobierz Rysunki jako DXF lub JSON
description: Pobierz bieżący rysunek jako DXF lub JSON. Oba niosą każdy typ obiektu — geometrię, tekst, wymiary, odnośniki i kreskowania — wraz z warstwami i rodzajami linii.
keywords: [eksport DXF, eksport pliku CAD, pobierz DXF przeglądarka, zapisz DXF online, eksport JSON CAD, eksport KulmanLab, pobierz plik CAD, eksport DXF, zapisz rysunek do pliku, pobieranie DXF]
group: file
order: 6
---

# Export Manager

Polecenie `exportmanager` pobiera bieżący rysunek do systemu plików. Dostępne są dwa formaty, pokazane jako karty obok siebie: **DXF** dla zgodności z innymi narzędziami CAD i **JSON** dla zapisu z pełną wiernością wewnątrz KulmanLab CAD — każda karta dokładnie wymienia, jakie typy elementów przenosi dany format.

## Jak eksportować

1. Kliknij przycisk **Export** na pasku narzędzi (ikona pobierania) w panelu plików lub wpisz `exportmanager` w terminalu.
2. Otwiera się okno **Export Manager**, pokazujące karty JSON i DXF obok siebie, każda z listą tego, co jest eksportowane.
3. Kliknij kartę, aby wybrać format — **JSON** lub **DXF**.
4. Kliknij przycisk **Export \<FORMAT\>**. Plik zostanie automatycznie pobrany do domyślnego folderu pobierania.

Naciśnij `Escape`, aby zamknąć okno bez eksportowania.

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
- Wymiary (liniowy, wyrównany, ciągły, promień, średnica)
- Leaders (multileadery)
- Hatches, wraz z ich wzorem, skalą, kątem i punktem początkowym
- Layers i Linetypes

### Eksport DXF

Uwzględniony jest każdy typ elementu:

- Lines, Circles, Arcs, Ellipses, Polylines (eksportowane jako `LWPOLYLINE`), Splines
- Text
- Wymiary (liniowy, wyrównany, ciągły, promień, średnica)
- Leaders (multileadery)
- Hatches, wraz z ich wzorem, skalą, kątem i punktem początkowym
- Layers i Linetypes

Plik jest zapisywany jako DXF AC1032, więc rysunek wyeksportowany z KulmanLab otwiera się w innych narzędziach obsługujących DXF z nienaruszonymi opisami, a nie dociera jako naga geometria.

To, co następnie zrobi z nim każdy program odbierający, wciąż bywa różne — obsługa DXF różni się między narzędziami, a starsze może pominąć obiekty, które nowsze odczytuje. Jeśli rysunek musi wyglądać identycznie wszędzie, [Menedżera druku](../print-manager/) uchwyci go zamiast tego jako PDF lub obraz.

## Nazwa eksportowanego pliku

Pobrany plik otrzymuje nazwę na podstawie bieżącego pliku rysunku (np. `myplan.json`). Rozszerzenie zmienia się zgodnie z wybranym formatem.

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
