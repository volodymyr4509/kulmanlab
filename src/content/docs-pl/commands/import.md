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

Definicje warstw i tabele typów linii są również importowane z pliku DXF, gdy są obecne.

Elementy używające nieobsługiwanych typów DXF są po cichu pomijane — reszta rysunku i tak się ładuje.

## Nazewnictwo plików i przechowywanie

Podczas importowania pliku do jego nazwy dołączany jest znacznik czasu (na przykład `mojplan_Maj22_14:30:00.dxf`). Pozwala to przechowywać wiele wersji tego samego rysunku w [Ostatnich plikach](../files/) bez kolizji nazw. Jeśli nazwa pliku już zawiera znacznik czasu, jest używana bez zmian.

Rysunek jest automatycznie zapisywany w pamięci przeglądarki (IndexedDB) po zaimportowaniu, dzięki czemu pojawia się w panelu [Files](../files/) i przeżywa przeładowania strony.

## Co dzieje się z bieżącym rysunkiem

Import zastępuje bieżące płótno. Nie ma scalania ani dołączania. Jeśli masz niezapisane zmiany, najpierw [Export](../export/) bieżący rysunek.

## Przy uruchomieniu

KulmanLab automatycznie ponownie otwiera ostatnio edytowany plik przy ładowaniu strony. Jeśli nie istnieją żadne zapisane pliki, ładowany jest domyślny przykładowy rysunek.

## Rozwiązywanie problemów

| Problem | Prawdopodobna przyczyna | Rozwiązanie |
|---------|-------------|-----|
| Płótno jest puste po imporcie | Elementy DXF używają nieobsługiwanych typów (np. HATCH, INSERT) | Elementy zostały pominięte — sprawdź komunikat "nie znaleziono elementów" w terminalu |
| Przycisk importu nic nie robi | Przeglądarka zablokowała selektor plików | Kliknij przycisk jeszcze raz; niektóre przeglądarki wymagają nowego gestu użytkownika |
| Wymiary wyglądają nieprawidłowo | DXF z narzędzia zapisującego niestandardową geometrię wymiarów | Ponownie wyeksportuj z aplikacji źródłowej używając aktualnej wersji DXF |

## Powiązane polecenia

- [Export](../export/) — pobieranie bieżącego rysunku jako DXF lub JSON
- [Files](../files/) — przeglądanie i przywracanie rysunków zapisanych w przeglądarce
- [New File](../new-file/) — tworzenie pustego rysunku
