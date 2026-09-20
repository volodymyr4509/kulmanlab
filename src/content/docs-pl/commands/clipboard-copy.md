---
title: Polecenie ClipboardCopy — kopiowanie obiektów do schowka systemowego
description: Polecenie ClipboardCopy zapisuje zaznaczone obiekty w schowku systemowym jako tekst JSON, razem z warstwami i rodzajami linii, do których się odwołują, aby wkleić je do innego rysunku lub innej karty przeglądarki poleceniem ClipboardPaste.
keywords: [kopiowanie do schowka CAD, kopiowanie obiektów między rysunkami, kopiuj obiekty CAD, Ctrl+C CAD, kopiowanie między kartami, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

Polecenie `KopiujDoSchowka` zapisuje zaznaczone obiekty w twoim **schowku systemowym** jako tekst JSON. Ponieważ korzysta z prawdziwego schowka, a nie z bufora w pamięci, skopiowana geometria przetrwa poza rysunkiem: wklej ją do innego pliku, do drugiej karty przeglądarki albo do okna otwartego później, poleceniem [ClipboardPaste](../clipboard-paste/).

To właśnie różnica względem [Copy](../copy/): Copy powiela obiekty wewnątrz bieżącego rysunku jednym ruchem, natomiast ClipboardCopy odkłada je tam, skąd można je pobrać w zupełnie innym rysunku.

## Dwa sposoby rozpoczęcia

**Najpierw zaznacz, potem kopiuj** — droga szybka:

1. Zaznacz jeden lub więcej obiektów na obszarze rysowania.
2. Naciśnij `Ctrl+C` (`Cmd+C` na macOS) albo wpisz `KopiujDoSchowka` w terminalu.
3. Obiekty trafiają do schowka natychmiast, a polecenie kończy działanie.

**Uruchom, potem zaznacz** — start bez zaznaczenia:

1. Naciśnij `Ctrl+C` albo wpisz `KopiujDoSchowka` przy pustym zaznaczeniu.
2. Monit pokazuje **pick objects to copy — Enter or Space to confirm**.
3. **Zaznacz obiekty** — klikaj, aby dodawać i usuwać pojedyncze obiekty, albo przeciągnij, by zaznaczyć obszarem.
4. Naciśnij **Enter** lub **Space**, aby skopiować zaznaczenie i zakończyć.

Naciśnięcie **Enter** lub **Space** przy braku zaznaczenia po prostu kończy polecenie, nie ruszając schowka.

## Co jest kopiowane

Zawartość schowka niesie coś więcej niż samą geometrię, aby wklejenie do obcego rysunku nadal wyglądało poprawnie:

| Element | Przeznaczenie |
|---------|---------------|
| **Obiekty** | Pełna, zserializowana postać każdego zaznaczonego obiektu |
| **Punkt odniesienia** | Lewy dolny narożnik łącznego obrysu zaznaczenia — to jego ClipboardPaste zaczepia pod kursorem |
| **Warstwy** | Tylko te warstwy, do których skopiowane obiekty faktycznie się odwołują, po nazwie |
| **Rodzaje linii** | Tylko te rodzaje linii, do których skopiowane obiekty faktycznie się odwołują, po nazwie |

Z kopią podróżują wyłącznie *przywoływane* wpisy tabel, a nie całe tabele warstw i rodzajów linii rysunku źródłowego. Wzory kreskowania nie są dołączane i nie muszą być: tabela wzorów rysunku to wbudowany zestaw domyślny, a wgrane przez ciebie pliki `.pat` leżą w magazynie użytkownika współdzielonym już między kartami, więc wklejone kreskowanie samo odnajduje swój wzór.

## Potwierdzenie

Po powodzeniu terminal podaje, ile obiektów zapisano:

```
3 entities copied to clipboard
```

Jeśli przeglądarka odmówi dostępu do schowka, terminal pokaże **Copy failed: clipboard access denied** i nic nie zostanie zapisane. To decyzja uprawnień przeglądarki, nie błąd rysunku — zobacz [Uprawnienia schowka](#uprawnienia-schowka) poniżej.

## Zaznaczanie w trakcie polecenia

| Sposób | Zachowanie |
|--------|------------|
| **Kliknięcie** | Przełącza obiekt pod kursorem do/z zaznaczenia |
| **Przeciągnięcie w prawo** (ścisłe) | Dodaje obiekty w całości wewnątrz ramki |
| **Przeciągnięcie w lewo** (przecinające) | Dodaje obiekty przecinające krawędź ramki |
| **Enter** / **Space** | Zatwierdza zaznaczenie i kopiuje |

## Skróty klawiaturowe

| Klawisz | Działanie |
|---------|-----------|
| `Ctrl+C` / `Cmd+C` | Uruchom ClipboardCopy |
| `Enter` / `Space` | Skopiuj bieżące zaznaczenie albo zakończ, jeśli nic nie jest zaznaczone |
| `Escape` | Anuluj bez kopiowania |

## Uprawnienia schowka

Zapis do schowka systemowego wymaga uprawnienia przeglądarki. W praktyce kopiowanie wywołane naciśnięciem klawisza jest przyznawane bez pytania w bieżących przeglądarkach desktopowych, ale strona, która utraciła fokus, albo przeglądarka z restrykcyjnymi ustawieniami schowka, może odmówić. Jeśli zobaczysz komunikat o odmowie dostępu, kliknij raz na obszarze rysowania, aby przywrócić stronie fokus, i spróbuj ponownie.

Ponieważ zawartość to zwykły tekst JSON, wszystko, co skopiujesz później, ją zastąpi — wiersz tekstu, adres URL. Skopiuj ponownie przed wklejeniem, jeśli w międzyczasie używałeś schowka do czegoś innego.

## Obsługiwane obiekty

ClipboardCopy działa z każdym typem obiektu. Obiekty są serializowane tym samym mechanizmem, którego używa natywny eksport `.json`, więc nic nie ginie po drodze.

## Zobacz także

- [ClipboardPaste](../clipboard-paste/) — odczytaj schowek i umieść obiekty
- [Copy](../copy/) — powiel obiekty w obrębie bieżącego rysunku
- [Export Manager](../export-manager/) — zapisz cały rysunek do DXF lub JSON
