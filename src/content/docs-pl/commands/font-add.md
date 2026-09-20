---
title: FontAdd — Przesyłanie własnej czcionki TTF z terminala
description: Polecenie FontAdd otwiera systemowe okno wyboru pliku, aby przesłać czcionkę .ttf, bez wcześniejszego otwierania okna dialogowego Font Manager. To ten sam mechanizm przesyłania, który uruchamia przycisk „Add Font” w Font Manager, dostępny tutaj jako osobne polecenie terminala.
keywords: [polecenie font add, polecenie fontadd, przesyłanie ttf terminal, niestandardowa czcionka CAD, kulmanlab]
group: style
order: 3
---

# FontAdd

Polecenie `CzcionkaDodaj` otwiera systemowe okno wyboru pliku, aby przesłać własną czcionkę `.ttf`, bez wcześniejszego otwierania okna dialogowego [Font Manager](../font-manager/). To ten sam mechanizm przesyłania, który uruchamia przycisk **Add Font** w Font Manager — FontAdd to po prostu bezpośrednia droga do niego z terminala.

## Przesyłanie czcionki

1. Wpisz `CzcionkaDodaj` w terminalu lub kliknij **Add Font** w stopce okna dialogowego [Font Manager](../font-manager/).
2. Wybierz plik `.ttf` w systemowym oknie wyboru. Obsługiwane są tylko czcionki TrueType — `.otf` oraz `.woff`/`.woff2` nie są obsługiwane.

Polecenie kończy się, gdy tylko otworzy się okno wyboru pliku — nie ma dalszego kliknięcia ani wpisywania w terminalu. Czcionka zostaje zarejestrowana i pojawia się w grupie **User** zaraz po wybraniu pliku.

## Co się dzieje po przesłaniu

- Nazwa pliku (bez rozszerzenia) staje się nazwą czcionki. Przesłanie `MyFont.ttf` dodaje czcionkę o nazwie `MyFont`.
- Przesłanie pliku, którego nazwa pasuje do istniejącej własnej czcionki, **zastępuje** ją.
- Czcionka jest zapisywana na stałe w przeglądarce (IndexedDB) i automatycznie wczytywana ponownie przy następnym otwarciu KulmanLab CAD — nie jest powiązana z bieżącym rysunkiem.

## Skróty klawiaturowe

FontAdd nie ma własnej obsługi klawiatury — całe polecenie sprowadza się do natywnego okna wyboru pliku przeglądarki. Anulowanie tego okna (lub niewybranie pliku) pozostawia listę czcionek bez zmian.

## Powiązane polecenia

| Polecenie | Co robi |
|-----------|---------|
| [Font Manager](../font-manager/) | Przeglądaj, podglądaj, wybieraj i usuwaj czcionki, w tym własne przesłane pliki |
| [Text](../text/) | Umieszcza etykiety tekstowe, do których stosuje się wybór czcionki |
