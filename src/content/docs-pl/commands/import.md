---
title: Import — Otwieranie plików DXF lub JSON w KulmanLab CAD
description: Użyj polecenia Import, aby otwierać pliki DXF lub JSON KulmanLab w KulmanLab CAD. Obsługuje linie, okręgi, łuki, polilinie, splajny, tekst, wymiary i linie prowadzące.
keywords: [import pliku DXF, otwieranie DXF w przeglądarce, import pliku CAD online, otwieranie pliku DXF, przeglądarka DXF w przeglądarce, import JSON CAD, KulmanLab import, darmowa przeglądarka DXF CAD, ładowanie rysunku, DXF do przeglądarki]
group: file
order: 1
---

# Import

Polecenie **Import** ładuje istniejący rysunek z lokalnego systemu plików do KulmanLab CAD. Obsługiwany jest zarówno standardowy format **DXF**, jak i własny format **JSON** KulmanLab.

## Jak zaimportować plik

1. Kliknij przycisk **Import** na pasku narzędzi (ikona folderu) w panelu Plik u góry ekranu.
2. Otwiera się selektor plików przeglądarki. Przejdź do pliku rysunku i go zaznacz.
3. Rysunek ładuje się natychmiast na płótno. Widok automatycznie dopasowuje się do wszystkich elementów.

Alternatywnie możesz przeciągnąć i upuścić plik bezpośrednio na płótno.

## Obsługiwane formaty plików

| Format | Rozszerzenie | Kiedy używać |
|--------|-------------|-------------|
| **DXF** | `.dxf` | Rysunki z FreeCAD, LibreCAD lub innych narzędzi CAD |
| **JSON** *(natywny)* | `.json` | Rysunki wcześniej zapisane z KulmanLab CAD — pełna wierność |

## Co jest importowane z DXF

KulmanLab analizuje następujące typy elementów DXF:

| Typ elementu | Kod DXF | Uwagi |
|-------------|----------|-------|
| Linia | `LINE` | |
| Okrąg | `CIRCLE` | |
| Łuk | `ARC` | |
| Elipsa | `ELLIPSE` | |
| Polilinia | `LWPOLYLINE` | |
| Splajn | `SPLINE` | |
| Tekst | `TEXT`, `MTEXT` | |
| Wymiar | `DIMENSION` | |
| Linia wielokierunkowa | `MULTILEADER` | |
| Hatch | `HATCH` | Odczytywane są nazwa, skala i kąt wzoru; nazwa, której nie ma w Twojej bibliotece wzorów, powraca do ANSI31. Zobacz [Hatch](../hatch/) |

Definicje warstw i tabele typów linii są również importowane z pliku DXF, gdy są obecne.

Elementy używające nieobsługiwanych typów DXF są po cichu pomijane — reszta rysunku i tak się ładuje.

## Nazewnictwo plików i przechowywanie

Zaimportowany plik zachowuje swoją oryginalną nazwę. Jeśli ta nazwa jest już używana przez inny zapisany rysunek, automatycznie dodawany jest przyrostek w stylu Findera/Eksploratora (`mojplan (2)`, `mojplan (3)`, …), dzięki czemu istniejący wpis nigdy nie zostaje nadpisany. Plik możesz później zmienić nazwę z poziomu [File Manager](../file-manager/#zmiana-nazwy-pliku).

Rysunek jest automatycznie zapisywany w pamięci przeglądarki (IndexedDB) po zaimportowaniu, dzięki czemu pojawia się w panelu [File Manager](../file-manager/) i przeżywa przeładowania strony.

## Co dzieje się z bieżącym rysunkiem

Import zastępuje bieżące płótno. Nie ma scalania ani dołączania. Jeśli masz niezapisane zmiany, najpierw [Export Manager](../export-manager/) bieżący rysunek.

## Przy uruchomieniu

KulmanLab automatycznie ponownie otwiera ostatnio edytowany plik przy ładowaniu strony. Jeśli nie istnieją żadne zapisane pliki, ładowany jest domyślny przykładowy rysunek.

## Rozwiązywanie problemów

| Problem | Prawdopodobna przyczyna | Rozwiązanie |
|---------|-------------|-----|
| Płótno jest puste po imporcie | Elementy DXF używają nieobsługiwanych typów (np. INSERT) | Elementy zostały pominięte — terminal wypisuje każdy pominięty typ z liczbą, na przykład `Could not read INSERT: 12`. Plik, który w ogóle nie jest prawidłowym rysunkiem, zgłasza `Could not read <file>: not a valid drawing file` |
| Przycisk importu nic nie robi | Przeglądarka zablokowała selektor plików | Kliknij przycisk jeszcze raz; niektóre przeglądarki wymagają nowego gestu użytkownika |
| Wymiary wyglądają nieprawidłowo | DXF z narzędzia zapisującego niestandardową geometrię wymiarów | Ponownie wyeksportuj z aplikacji źródłowej używając aktualnej wersji DXF |

## Powiązane polecenia

- [Export Manager](../export-manager/) — pobieranie bieżącego rysunku jako DXF lub JSON
- [File Manager](../file-manager/) — przeglądanie i przywracanie rysunków zapisanych w przeglądarce
- [New File](../new-file/) — tworzenie pustego rysunku
