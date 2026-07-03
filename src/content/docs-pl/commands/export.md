---
sidebar_position: 5
title: Eksport — Pobieranie rysunków jako DXF lub JSON w KulmanLab CAD
description: Polecenie Eksport pobiera bieżący rysunek jako plik DXF lub JSON (natywny). JSON zachowuje wszystkie elementy łącznie z wymiarami i liniami prowadzącymi; DXF jest zgodny z innymi narzędziami CAD.
keywords: [eksport DXF, eksport pliku CAD, pobieranie DXF w przeglądarce, zapis DXF online, eksport JSON CAD, KulmanLab eksport, pobieranie pliku CAD, eksport DXF, zapis rysunku do pliku, pobieranie DXF]
---

# Eksport

Polecenie **Eksport** pobiera bieżący rysunek do systemu plików. Dostępne są dwa formaty: **DXF** dla zgodności z innymi narzędziami CAD i **JSON** do zapisywania z pełną wiernością w KulmanLab CAD.

## Jak eksportować

1. Kliknij przycisk **Eksport** na pasku narzędzi (ikona pobierania) w panelu Plik.
2. Otwiera się okno podręczne **Menedżer eksportu**.
3. Kliknij kartę formatu, aby wybrać format — **JSON** lub **DXF**.
4. Kliknij przycisk **Eksportuj**. Plik automatycznie pobiera się do domyślnego folderu pobierania.

## Wybieranie formatu

| Format | Rozszerzenie | Najlepsze do | Ograniczenia |
|--------|-------------|----------|-------------|
| **JSON** *(natywny)* | `.json` | Zapisywanie pracy do ponownego otwarcia w KulmanLab CAD | Niekompatybilny z innymi narzędziami CAD |
| **DXF** | `.dxf` | Udostępnianie narzędziom FreeCAD, LibreCAD itp. | Wymiary i linie prowadzące nie są eksportowane |

**Kiedy używać JSON:** zawsze, gdy chcesz zapisać kompletną kopię swojej pracy. JSON to natywny format KulmanLab i zachowuje każdy element dokładnie — w tym wymiary, linie prowadzące i wszystkie dane warstw.

**Kiedy używać DXF:** gdy potrzebujesz przekazać rysunek komuś używającemu innej aplikacji CAD. Eksportowany plik używa formatu DXF AC1012 i można go otworzyć w większości narzędzi zgodnych z DXF.

## Co jest eksportowane w każdym formacie

### Eksport JSON

Uwzględniane są wszystkie typy elementów:

- Linie, okręgi, łuki, elipsy, polilinie, splajny, tekst
- Wymiary (liniowe, wyrównane, kontynuowane, promienia, średnicy)
- Linie wielokierunkowe
- Definicje warstw i tabele typów linii

### Eksport DXF

Uwzględniane są tylko elementy geometryczne:

- Linie, okręgi, łuki, elipsy, polilinie (eksportowane jako `LWPOLYLINE`), splajny, tekst
- Definicje warstw i tabele typów linii

**Nie uwzględnione w DXF:** elementy wymiarowe i linie wielokierunkowe. Używają one specyficznych dla KulmanLab struktur danych, których nie można wiernie odwzorować w standardowym DXF. Jeśli rysunek zawiera adnotacje, użyj JSON lub [Drukuj](../print/), aby uchwycić je wizualnie.

## Nazwa eksportowanego pliku

Pobrany plik jest nazwany na podstawie bieżącego pliku rysunku (np. `mojplan_Maj22_14:30:00.json`). Rozszerzenie zmienia się zgodnie z wybranym formatem.

## Różnica między Eksportem a Drukowaniem

| Cecha | Eksport | Drukowanie |
|-------|--------|-------|
| Wyjście | Plik źródłowy wektora (.dxf / .json) | Obraz rastrowy (.png / .jpeg / .webp / .pdf) |
| Edytowalny w innych narzędziach | Tak (DXF) | Nie |
| Zachowuje warstwy i typy linii | Tak | Nie (renderowany płasko) |
| Przechwytuje wymiary i linie prowadzące | Tylko JSON | Tak |

Użyj **Eksportu**, gdy potrzebujesz edytowalnego pliku. Użyj [Drukuj](../print/), gdy potrzebujesz wizualnej migawki.

## Powiązane polecenia

- [Import](../import/) — otwieranie pliku DXF lub JSON
- [Drukuj](../print/) — eksportowanie płótna jako obraz PNG, JPEG, WebP lub PDF
- [Pliki](../files/) — przeglądanie rysunków zapisanych w pamięci przeglądarki
