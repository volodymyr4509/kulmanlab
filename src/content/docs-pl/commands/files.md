---
title: Files — Panel ostatnich plików w KulmanLab CAD
description: Polecenie Files otwiera panel Ostatnich plików — przeglądaj wszystkie rysunki zapisane w przeglądarce, przywracaj dowolny z nich do płótna lub usuwaj te, których już nie potrzebujesz.
keywords: [ostatnie pliki CAD, historia plików przeglądarki CAD, przywracanie rysunku, ponowne otwieranie DXF, pamięć przeglądarki CAD, KulmanLab pliki, zapisane rysunki, IndexedDB CAD, zarządzanie rysunkami]
group: file
order: 3
---

# Files

Polecenie **Pliki** otwiera panel **Ostatnich plików** — listę wszystkich rysunków, które zostały zapisane w lokalnej pamięci przeglądarki. Użyj go, aby ponownie otworzyć poprzedni rysunek lub usunąć pliki, których już nie potrzebujesz.

## Jak otworzyć panel Ostatnich plików

Kliknij przycisk **Pliki** na pasku narzędzi (ikona historii) w panelu Plik u góry ekranu. Panel otwiera się po lewej stronie płótna.

## Panel Ostatnich plików

Każdy wpis na liście pokazuje nazwę pliku i dwa przyciski akcji:

| Przycisk | Akcja |
|----------|-------|
| ✓ **Przywróć** | Ładuje rysunek na płótno — zastępuje bieżącą zawartość |
| ✕ **Usuń** | Trwale usuwa plik z pamięci przeglądarki |

Jeśli żadne pliki nie zostały jeszcze zapisane, panel pokazuje "Brak zapisanych plików".

## Jak pliki są przechowywane

KulmanLab zapisuje rysunki w **IndexedDB** — trwałej bazie danych w przeglądarce. Oznacza to:

- Pliki przeżywają przeładowania strony i restarty przeglądarki.
- Pliki są przechowywane **lokalnie na Twoim urządzeniu** — nie są przesyłane na żaden serwer.
- Każda przeglądarka i urządzenie ma własną niezależną pamięć. Rysunek zapisany w Chrome na jednym komputerze nie jest dostępny w Firefox lub na innej maszynie.
- Wyczyszczenie danych witryny w przeglądarce usunie wszystkie zapisane pliki.

## Automatyczne ładowanie pliku przy uruchomieniu

Gdy otwierasz KulmanLab CAD, aplikacja automatycznie ładuje **ostatnio zmodyfikowany plik** z pamięci. Nie musisz ręcznie otwierać go z panelu Pliki za każdym razem.

## Zarządzanie pamięcią

Nie ma stałego limitu liczby rysunków, które możesz zapisać, ale pamięć przeglądarki jest ograniczona. Jeśli zauważysz ostrzeżenia o pamięci, usuń starsze pliki z panelu Pliki.

Aby usunąć wszystkie zapisane rysunki jednocześnie, użyj polecenia [Wipe Storage](../wipestorage/).

## Nazwy plików i wersjonowanie

Każdy plik ma w nazwie znacznik czasu (np. `mojplan_Maj22_14:30:00.dxf`). Ten znacznik czasu jest dodawany automatycznie podczas [Import](../import/) pliku, zapewniając, że ponowny import tego samego pliku źródłowego tworzy nowy wpis zamiast nadpisywać poprzednią wersję.

## Powiązane polecenia

- [Import](../import/) — ładowanie rysunku z systemu plików do pamięci przeglądarki
- [Export](../export/) — pobieranie rysunku do systemu plików
- [New File](../new-file/) — tworzenie pustego rysunku (także zapisywanego automatycznie)
- [Wipe Storage](../wipestorage/) — usuwanie wszystkich zapisanych plików z pamięci przeglądarki
