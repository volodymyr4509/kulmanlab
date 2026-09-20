---
title: File Manager — Siatka miniatur, zmiana nazwy i usuwanie
description: Polecenie FileManager otwiera siatkę miniatur każdego zapisanego rysunku — kliknij miniaturę, aby ją otworzyć, zmień nazwę bezpośrednio na miejscu lub usuń z potwierdzeniem.
keywords: [file manager CAD, ostatnie pliki CAD, zmiana nazwy rysunku, usuwanie rysunku, siatka miniatur CAD, przywracanie rysunku, ponowne otwieranie DXF, pamięć przeglądarki CAD, KulmanLab pliki, zapisane rysunki, IndexedDB CAD, kopia zapasowa rysunku CAD]
group: file
order: 3
---

# File Manager

Polecenie `MenedżerPlików` otwiera **siatkę miniatur** każdego rysunku zapisanego w lokalnej pamięci przeglądarki, uporządkowaną według czasu ostatniego zapisu. Użyj go, aby ponownie otworzyć poprzedni rysunek, zmienić jego nazwę lub go usunąć.

## Otwieranie File Manager

- Wpisz `MenedżerPlików` w terminalu, **lub**
- Kliknij przycisk paska narzędzi **File Manager** (ikona historii) w panelu plików u góry ekranu.

Panel otwiera się po lewej stronie płótna i zamyka się automatycznie, gdy tylko uruchomisz inne polecenie lub [zaimportujesz](../import/) plik — dzięki czemu nigdy nie pozostaje nad rysunkiem, którego jeszcze nie ma na liście. Za każdym razem otwiera się na nowo z odświeżoną listą.

## Siatka miniatur

Każdy zapisany rysunek to karta pokazująca renderowaną na żywo miniaturę, jego nazwę oraz czas ostatniej aktualizacji. Miniatury są generowane na bieżąco za każdym razem, gdy panel jest otwierany — nic nie jest wcześniej renderowane ani zapisywane — więc karta przez chwilę pokazuje ikonę zastępczą, podczas gdy jej miniatura jest rysowana. Ta sama ikona zastępcza pojawia się również, gdy generowanie się nie powiedzie lub gdy rysunek rzeczywiście nie ma jeszcze żadnych elementów.

| Działanie | Jak |
|--------|-----|
| **Otwórz** rysunek | Kliknij jego miniaturę — zastępuje bieżącą zawartość płótna |
| **Zmień nazwę** | Kliknij ikonę ołówka lub kliknij dwukrotnie nazwę |
| **Usuń** | Kliknij ikonę kosza, a następnie potwierdź |

Jeśli żaden plik nie został jeszcze zapisany, panel pokazuje "No files saved". Gdy plików jest więcej niż mieści się na jednym ekranie, pod siatką pojawiają się elementy sterujące **Page 1 of N**.

Karta pliku, który jest obecnie otwarty w edytorze, jest oznaczona pierścieniem w kolorze akcentu i nie ma **przycisku usuwania** — usunięcie otwartego pliku wymazałoby jego zapisane dane, podczas gdy płótno nadal by go wyświetlało, a kolejna edycja po prostu zapisałaby go z powrotem na miejsce. Zmiana nazwy pozostaje dostępna.

## Usuwanie pliku

Kliknięcie ikony kosza nie usuwa pliku od razu — uruchamia nakładkę potwierdzenia na danej karcie ("Delete this file?" z przyciskami **Delete** / **Cancel**), ponieważ usunięcie jest trwałe i nie można go cofnąć. Kliknięcie **Cancel**, kliknięcie ikony kosza innej karty lub kliknięcie gdziekolwiek indziej na karcie anuluje oczekujące potwierdzenie bez usuwania czegokolwiek.

## Zmiana nazwy pliku

Kliknij ikonę ołówka (lub kliknij dwukrotnie nazwę pliku), aby edytować ją na miejscu, a następnie naciśnij **Enter**, aby potwierdzić, lub **Escape**, aby anulować. Zmiana nazwy zostanie odrzucona, jeśli nowa nazwa jest:

- pusta lub dłuższa niż 100 znaków,
- już używana przez inny zapisany plik (bez rozróżniania wielkości liter),
- zakończona kropką, lub
- zarezerwowaną nazwą urządzenia Windows, taką jak `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9` lub `LPT1`–`LPT9`.

Znaki niedozwolone w nazwie pliku (`\ / : * ? " < > |`) są automatycznie usuwane podczas pisania. Zmiana nazwy zmienia tylko etykietę — nie wpływa na pozycję rysunku w siatce, ponieważ jest ona uporządkowana według czasu ostatniego zapisu, a nie nazwy.

## Twórz kopię zapasową swojej pracy — pamięć przeglądarki nie jest trwała

KulmanLab zapisuje rysunki w **IndexedDB**, bazie danych wbudowanej w Twoją przeglądarkę:

- Pliki są przechowywane **wyłącznie lokalnie na Twoim urządzeniu** — nic nie jest przesyłane na serwer.
- Każda przeglądarka i urządzenie mają własną, niezależną pamięć. Rysunek zapisany w Chrome na jednym komputerze nie pojawi się w Firefoksie ani na innym urządzeniu.
- Ta pamięć **może zostać wyczyszczona bez ostrzeżenia** — poprzez czyszczenie danych witryny lub historii przeglądania, brak miejsca na dysku, korzystanie z okna prywatnego/incognito, ponowną instalację przeglądarki lub systemu operacyjnego, albo zmianę urządzenia. Żadna z tych sytuacji nie daje szansy na odzyskanie tego, co tam było.

**Jedynym niezawodnym sposobem na zabezpieczenie rysunku jest [wyeksportowanie](../export-manager/) go do własnej pamięci.** Używaj `.json` (natywnego formatu KulmanLab), gdy to możliwe — zachowuje dokładnie każdy element; używaj `.dxf`, gdy potrzebujesz kompatybilności z innymi narzędziami CAD. Rób to dla wszystkiego, czego utratą byłbyś zmartwiony, oraz przed czyszczeniem danych przeglądarki, zmianą przeglądarki lub urządzenia, albo odłożeniem komputera na dłuższy czas.

## Automatyczne wczytywanie pliku przy uruchomieniu

Gdy otwierasz KulmanLab CAD, aplikacja automatycznie wczytuje z pamięci **ostatnio zmodyfikowany plik**. Nie musisz za każdym razem otwierać go ręcznie z File Manager.

## Zarządzanie pamięcią

Nie ma stałego limitu liczby rysunków, które możesz zapisać, ale pamięć przeglądarki jest ograniczona. Jeśli zauważysz ostrzeżenia o pamięci, usuń starsze pliki z File Manager — a jeszcze lepiej, najpierw je wyeksportuj, aby niczego nie stracić.

Aby usunąć wszystkie zapisane rysunki naraz, użyj polecenia [WipeStorage](../wipestorage/).

## Nazwy plików

Nowe i zaimportowane pliki otrzymują zwykłą nazwę — bez wbudowanego znacznika czasu. Jeśli ta nazwa jest już zajęta, automatycznie dodawany jest sufiks w stylu Findera/Eksploratora (`plan (2)`, `plan (3)`, …), aby nic nie zostało nadpisane. Zawsze możesz później nadać plikowi bardziej czytelną nazwę, używając [zmiany nazwy](#zmiana-nazwy-pliku).

## Powiązane polecenia

- [Import](../import/) — wczytaj rysunek z systemu plików do pamięci przeglądarki
- [Export Manager](../export-manager/) — pobierz rysunek do systemu plików
- [New File](../new-file/) — rozpocznij pusty rysunek (również zapisywany automatycznie)
- [WipeStorage](../wipestorage/) — wyczyść wszystkie zapisane pliki z pamięci przeglądarki
