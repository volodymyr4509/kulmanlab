---
title: Polecenie ClipboardPaste — wklejanie obiektów ze schowka systemowego
description: Polecenie ClipboardPaste odczytuje ze schowka systemowego obiekty zapisane wcześniej przez ClipboardCopy i umieszcza je we wskazanym punkcie wstawienia, dodając warstwy i rodzaje linii, których brakuje w rysunku docelowym.
keywords: [wklejanie ze schowka CAD, wklejanie obiektów między rysunkami, wklej obiekty CAD, Ctrl+V CAD, wklejanie między kartami, scalanie warstw przy wklejaniu, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

Polecenie `WklejZeSchowka` odczytuje obiekty, które [ClipboardCopy](../clipboard-copy/) zapisało w **schowku systemowym**, i umieszcza je w bieżącym rysunku we wskazanym przez ciebie punkcie. Ponieważ schowek jest prawdziwym schowkiem systemu, źródłem może być inny rysunek, inna karta przeglądarki albo sesja z wcześniejszych godzin.

## Jak wkleić

1. Naciśnij `Ctrl+V` (`Cmd+V` na macOS) albo wpisz `WklejZeSchowka` w terminalu.
2. Monit pokazuje **reading clipboard…**, gdy przeglądarka przekazuje tekst ze schowka.
3. Po wczytaniu monit zmienia się na **pick insertion point**, a podgląd geometrii podąża za kursorem.
4. **Kliknij**, aby umieścić obiekty. Zostaną dodane do rysunku i pozostaną zaznaczone.

Podgląd jest zaczepiony w **punkcie odniesienia** kopii — lewym dolnym narożniku łącznego obrysu pierwotnego zaznaczenia. Ten narożnik znajduje się pod kursorem, dzięki czemu wzajemne rozmieszczenie skopiowanych obiektów zostaje zachowane dokładnie.

## Co dzieje się przy wklejaniu

| Krok | Zachowanie |
|------|------------|
| **Nowe identyfikatory** | Każdy wklejony obiekt dostaje świeże id, więc dwukrotne wklejenie daje dwa niezależne zestawy |
| **Przesunięcie** | Obiekty są przesuwane o kursor − punkt odniesienia |
| **Scalanie warstw** | Każda przywoływana warstwa, której brakuje w rysunku docelowym, zostaje dodana po nazwie |
| **Scalanie rodzajów linii** | Każdy przywoływany rodzaj linii, którego brakuje w rysunku docelowym, zostaje dodany po nazwie |
| **Zaznaczenie** | Poprzednie zaznaczenie zostaje wyczyszczone, a wklejone obiekty stają się zaznaczeniem |

### Scalanie warstw i rodzajów linii

Brakujące wpisy tabel są dodawane; **istniejące pozostają nietknięte**. Jeśli schowek niesie warstwę o nazwie `WALLS` w kolorze czerwonym, a rysunek docelowy ma już warstwę `WALLS` w niebieskim, wygrywa definicja z rysunku docelowego i wklejone obiekty do niej dołączają — będą niebieskie. Wklejenie niczego w rysunku docelowym nie przedefiniowuje.

Ma to znaczenie przy kopiowaniu między rysunkami o różnych konwencjach warstw: po wklejeniu z innego rysunku sprawdź [Layer Manager](../layer-manager/), jeśli kolory nie są takie, jakich się spodziewałeś.

## Gdy w schowku nie ma nic do wklejenia

ClipboardPaste przyjmuje wyłącznie zawartość utworzoną przez ClipboardCopy. Wszystko inne w schowku — zwykły tekst, adres URL, obraz, JSON z innej aplikacji — jest odrzucane, a terminal zgłasza:

```
Clipboard has no copied entities
```

Jeśli przeglądarka całkowicie odmówi dostępu do schowka, komunikat brzmi **Clipboard access denied**. Oba kończą polecenie bez zmian w rysunku.

## Skróty klawiaturowe

| Klawisz | Działanie |
|---------|-----------|
| `Ctrl+V` / `Cmd+V` | Uruchom ClipboardPaste |
| `Escape` | Anuluj — obiekty zostają odrzucone i nic nie jest dodawane |

Anulowanie w fazie odczytu jest bezpieczne: jeśli schowek odpowie już po tym, jak anulowałeś lub uruchomiłeś inne polecenie, spóźniony wynik zostanie odrzucony, zamiast przerywać to, co jest wtedy aktywne.

## Kopiowanie między kartami

Typowy przepływ pracy między rysunkami:

1. Otwórz rysunek źródłowy, zaznacz geometrię, naciśnij `Ctrl+C`.
2. Przejdź do drugiej karty — albo otwórz drugą kartę aplikacji i wczytaj inny plik.
3. Naciśnij `Ctrl+V` i kliknij punkt wstawienia.

Obie karty mają to samo pochodzenie i współdzielą schowek systemowy, więc nic nie jest wysyłane i żaden serwer nie bierze w tym udziału. Przez cały czas zawartość pozostaje tekstem JSON w twoim własnym schowku.

## Obsługiwane obiekty

Każdy typ obiektu, który ClipboardCopy potrafi zapisać, ClipboardPaste potrafi odczytać z powrotem — tą samą serializacją, której używa natywny format `.json`.

## Zobacz także

- [ClipboardCopy](../clipboard-copy/) — zapisz zaznaczenie do schowka
- [Copy](../copy/) — powiel obiekty w obrębie bieżącego rysunku
- [Layer Manager](../layer-manager/) — sprawdź warstwy, które przyniosło wklejenie
