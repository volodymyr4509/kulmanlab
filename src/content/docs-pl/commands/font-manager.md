---
title: Polecenie Font Manager — Przesyłanie i zarządzanie niestandardowymi czcionkami TTF w KulmanLab CAD
description: Polecenie Font Manager otwiera okno dialogowe do przeglądania, podglądu i wybierania czcionek oraz przesyłania własnych plików .ttf. Przesłane czcionki są zapisywane w przeglądarce i osadzane pod nazwą w eksportach DXF.
keywords: [menedżer czcionek, niestandardowa czcionka CAD, przesyłanie TTF, niestandardowy krój pisma CAD, Google Fonts CAD, czcionka tekstu CAD, kulmanlab]
---

# Font Manager

Polecenie `FontManager` otwiera okno dialogowe do przeglądania i wybierania czcionek oraz przesyłania własnych plików `.ttf` do użycia w elementach [Text](../text/) i [Multileader](../leader/).

## Otwieranie Font Manager

- Wpisz `FontManager` w terminalu, **lub**
- Kliknij przycisk **Font Manager** na pasku narzędzi [edytora tekstu](../../interface/text-editor/).

## Grupy czcionek

| Grupa | Zawartość |
|-------|-----------|
| **Default** | Wbudowana czcionka bezszeryfowa — zawsze dostępna |
| **User** | Twoje własne przesłane czcionki `.ttf` (widoczne dopiero po dodaniu jednej) |
| **Free** | 15 dołączonych czcionek Google Fonts (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Popularne czcionki systemowe (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Kliknij dowolną czcionkę na liście, aby zobaczyć jej podgląd po prawej stronie — nazwę, próbkę alfabetu, pangram i cyfry.

## Przesyłanie niestandardowej czcionki

1. Kliknij **Add Font** w stopce okna dialogowego (lub wpisz `Font+` w terminalu, aby bezpośrednio otworzyć okno wyboru pliku).
2. Wybierz plik `.ttf`. Obsługiwane są tylko czcionki TrueType — `.otf` oraz `.woff`/`.woff2` nie są obsługiwane.
3. Nazwa pliku (bez rozszerzenia) staje się nazwą czcionki w grupie **User**. Na przykład przesłanie `MyFont.ttf` dodaje czcionkę o nazwie `MyFont`.

Przesłane czcionki są zapisywane na stałe w przeglądarce (IndexedDB) i automatycznie wczytywane ponownie przy następnym otwarciu KulmanLab CAD.

## Usuwanie niestandardowej czcionki

Najedź kursorem na czcionkę w grupie **User** i kliknij przycisk **×** obok niej. Wbudowanych czcionek (Default, Free, System) nie można usunąć.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `↑` / `↓` | Przesuwa zaznaczenie w górę lub w dół listy czcionek |
| `Escape` | Zamyka Font Manager |

## Zgodność z DXF

Nazwa czcionki jest osadzana w eksportowanych elementach **MTEXT** jako wbudowany kod formatowania, dzięki czemu DXF przechodzący pełny cykl zapisu i odczytu przez KulmanLab CAD zachowuje przypisanie czcionki. Same *pliki* niestandardowych czcionek nie są osadzane w DXF — osadzana jest tylko *nazwa* czcionki. Jeśli ponownie zaimportujesz rysunek odwołujący się do niestandardowej czcionki, której nie przesłałeś na tym urządzeniu, tekst będzie wyświetlany domyślną czcionką, dopóki nie prześlesz czcionki o tej samej nazwie.

## Powiązane polecenia

- [Text](../text/) — umieszcza etykiety tekstowe, do których stosuje się wybór czcionki
- [Match Properties](../match-properties/) — kopiuje wysokość tekstu, ale nie czcionkę, między elementami
