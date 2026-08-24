---
title: Export Manager — Pobierz Rysunki jako DXF lub JSON
description: Export Manager pobiera bieżący rysunek jako plik DXF lub JSON (natywny). Każdy format dokładnie wymienia, jakie typy elementów przenosi, obok siebie, dzięki czemu przed pobraniem widać, co pomija DXF — obecnie hatch, wymiary, odnośniki i tekst.
keywords: [eksport DXF, eksport pliku CAD, pobierz DXF przeglądarka, zapisz DXF online, eksport JSON CAD, eksport KulmanLab, pobierz plik CAD, eksport DXF, zapisz rysunek do pliku, pobieranie DXF]
group: file
order: 6
---

# Export Manager

Polecenie `exportmanager` pobiera bieżący rysunek do systemu plików. Dostępne są dwa formaty, pokazane jako karty obok siebie: **DXF** dla zgodności z innymi narzędziami CAD i **JSON** dla zapisu z pełną wiernością wewnątrz KulmanLab CAD — każda karta dokładnie wymienia, jakie typy elementów przenosi dany format.

## Jak eksportować

1. Kliknij przycisk **Export** na pasku narzędzi (ikona pobierania) w panelu plików lub wpisz `exportmanager` w terminalu.
2. Otwiera się okno **Export Manager**, pokazujące karty JSON i DXF obok siebie, każda z listą tego, co jest eksportowane (a dla DXF — co jest pomijane).
3. Kliknij kartę, aby wybrać format — **JSON** lub **DXF**.
4. Kliknij przycisk **Export \<FORMAT\>**. Plik zostanie automatycznie pobrany do domyślnego folderu pobierania.

Naciśnij `Escape`, aby zamknąć okno bez eksportowania.

## Wybór formatu

| Format | Rozszerzenie | Najlepsze do | Ograniczenia |
|--------|-------------|--------------|--------------|
| **JSON** *(natywny)* | `.json` | Zapisywanie pracy do ponownego otwarcia w KulmanLab CAD | Niekompatybilny z innymi narzędziami CAD |
| **DXF** | `.dxf` | Udostępnianie w FreeCAD, LibreCAD itp. | Hatch, wymiary, odnośniki i tekst nie są eksportowane |

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

Uwzględnione są tylko elementy geometryczne:

- Lines, Circles, Arcs, Ellipses, Polylines (eksportowane jako `LWPOLYLINE`), Splines
- Layers i Linetypes

**Nieeksportowane do DXF:** hatch, wymiary, leadery i tekst. Wymiary i leadery używają struktur danych specyficznych dla KulmanLab, których nie można wiernie przedstawić w standardowym DXF; hatch w ogóle nie jest jeszcze eksportowany do DXF, mimo że jest z niego importowany; eksport tekstu również nie jest jeszcze zaimplementowany. Jeśli twój rysunek zawiera którykolwiek z tych elementów, użyj JSON lub [Menedżera druku](../print-manager/), aby je zachować.

## Nazwa eksportowanego pliku

Pobrany plik otrzymuje nazwę na podstawie bieżącego pliku rysunku (np. `myplan.json`). Rozszerzenie zmienia się zgodnie z wybranym formatem.

## Różnica między Export Manager a Menedżerem druku

| Funkcja | Export Manager | Menedżer druku |
|---------|-----------------|-----------------|
| Wyjście | Plik źródłowy wektorowy (.dxf / .json) | Obraz rastrowy (.png / .jpeg / .webp / .pdf) |
| Edytowalny w innych narzędziach | Tak (DXF) | Nie |
| Zachowuje layers i linetypes | Tak | Nie (renderowane płasko) |
| Przechwytuje wymiary i leadery | Tylko JSON | Tak |

Użyj **Export Manager**, gdy potrzebujesz edytowalnego pliku. Użyj [Menedżera druku](../print-manager/), gdy potrzebujesz wizualnego zrzutu.

## Powiązane polecenia

- [Import](../import/) — otwórz plik DXF lub JSON
- [Menedżer druku](../print-manager/) — eksportuj płótno jako obraz PNG, JPEG, WebP lub PDF
- [File Manager](../file-manager/) — przeglądaj rysunki zapisane w pamięci przeglądarki
