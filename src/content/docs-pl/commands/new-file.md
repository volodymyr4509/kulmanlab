---
sidebar_position: 2
title: Nowy plik — Tworzenie pustego rysunku w KulmanLab CAD
description: Polecenie Nowy plik czyści płótno i otwiera świeży pusty rysunek. Automatycznie generowana jest nazwa pliku ze znacznikiem czasu, która jest zapisywana w pamięci przeglądarki.
keywords: [nowy plik CAD, nowy rysunek, puste płótno CAD, tworzenie nowego rysunku online, nowy DXF, KulmanLab nowy plik, resetowanie płótna, czyszczenie rysunku]
---

# Nowy plik

Polecenie **Nowy plik** czyści płótno i zaczyna świeży pusty rysunek. Unikalna nazwa pliku ze znacznikiem czasu jest generowana automatycznie.

## Jak utworzyć nowy plik

Kliknij przycisk **Nowy plik** na pasku narzędzi (ikona nowej strony) w panelu Plik. Płótno czyści się natychmiast — bez monitów ani okien dialogowych potwierdzenia.

## Co zawiera nowy plik

Świeżo utworzony plik zaczyna się od:

- **Brak elementów** na płótnie.
- **Jedna domyślna warstwa** o nazwie `0` z białym kolorem i typem linii `Ciągła`.
- **Wygenerowana nazwa pliku** w formacie `kulman-PonN01_GG:MM:SS.dxf` (np. `kulman-Maj22_14:30:00.dxf`).

Plik jest automatycznie zapisywany w pamięci przeglądarki i pojawia się w [Ostatnich plikach](./files).

## Ostrzeżenie — niezapisana praca zostanie odrzucona

Kliknięcie **Nowy plik** odrzuca wszystkie elementy na bieżącym płótnie bez ostrzeżenia. Jeśli chcesz zachować bieżący rysunek, najpierw [wyeksportuj](./export) go.

## Kiedy używać Nowego pliku a Importu

| Sytuacja | Zalecana akcja |
|-----------|-------------------|
| Rozpoczynanie rysunku od zera | **Nowy plik** |
| Otwieranie istniejącego pliku DXF lub JSON | [Import](./import) |
| Kopiowanie rysunku do pracy nad wariantem | [Eksportuj](./export) bieżący plik, następnie [Importuj](./import) kopię |

## Powiązane polecenia

- [Import](./import) — otwieranie istniejącego rysunku DXF lub JSON
- [Eksport](./export) — pobieranie rysunku przed rozpoczęciem od nowa
- [Pliki](./files) — przywracanie poprzedniego rysunku z pamięci przeglądarki
