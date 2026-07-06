---
title: Polecenie Wipe Storage — Czyszczenie wszystkich danych przeglądarki w KulmanLab CAD
description: Polecenie wipestorage trwale usuwa wszystkie pliki, warstwy, typy linii i historię cofnij zapisane w przeglądarce. Wymaga wpisania YES w celu potwierdzenia. Używane przy resetowaniu uszkodzonej lub przepełnionej lokalnej bazy danych.
keywords: [CAD wyczyść pamięć, czyszczenie danych przeglądarki CAD, resetowanie aplikacji CAD, usuwanie lokalnych plików CAD, kulmanlab wipestorage]
---

# Wipe Storage

Polecenie `wipestorage` trwale usuwa **wszystkie dane przechowywane w przeglądarce** dla KulmanLab CAD — każdy zapisany plik, tabele warstw i typów linii oraz historię cofnij. Strona automatycznie przeładowuje się po wykonaniu.

:::danger Nieodwracalne
Ta akcja nie może zostać cofnięta. Wszystkie pliki przechowywane w przeglądarce zostaną usunięte. Przed uruchomieniem tego polecenia wyeksportuj rysunki, które chcesz zachować, jako pliki `.json` lub `.dxf`.
:::

## Kiedy używać

- Pamięć przeglądarki jest uszkodzona i aplikacja nie może ładować ani zapisywać plików.
- Chcesz w pełni zresetować aplikację do czystego stanu.
- Zmieniasz przeglądarkę lub urządzenie i nie potrzebujesz już lokalnej kopii.

## Jak uruchomić

1. Wpisz `wipestorage` w terminalu i naciśnij **Enter**.
2. Terminal pyta: *Wyczyścić całą lokalną pamięć przeglądarki? Wpisz YES, aby potwierdzić*
3. Wpisz `YES` (dowolna wielkość liter) i naciśnij **Enter**.

Aplikacja usuwa bazę danych i przeładowuje stronę. Jeśli wpiszesz cokolwiek innego niż `YES` i naciśniesz **Enter**, lub naciśniesz **Escape**, polecenie zostaje anulowane i nic nie jest usuwane.

## Co zostaje usunięte

| Dane | Usunięte |
|------|---------|
| Wszystkie pliki zapisane w przeglądarce | Tak |
| Tabele warstw i typów linii dla każdego pliku | Tak |
| Historia cofnij / ponów dla każdego pliku | Tak |

Dotyczy to tylko danych przechowywanych lokalnie w **tej przeglądarce**. Pliki, które już wyeksportowałeś jako `.json` lub `.dxf`, nie są dotykane.
