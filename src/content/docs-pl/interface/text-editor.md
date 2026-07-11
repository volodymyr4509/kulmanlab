---
title: Edytor tekstu — Tryby Rich i Simple w KulmanLab CAD
description: Edytor tekstu KulmanLab CAD ma dwa tryby — rich (formatowanie poszczególnych znaków, wieloliniowy, zawijanie tekstu dla Text i Multileader) i simple (jednolity styl, jednowierszowy dla elementów wymiarowych). Chip trybu w nagłówku pokazuje, który tryb jest aktywny.
keywords: [edytor tekstu CAD, MTEXT, pogrubiony kursywa CAD, formatowanie tekstu CAD, wieloliniowy tekst CAD, zawijanie tekstu CAD, rich edytor tekstu, simple edytor tekstu, edytor tekstu wymiaru, niestandardowa czcionka CAD, przesyłanie TTF CAD, kulmanlab]
group: interface
order: 5
---

# Edytor tekstu

Edytor tekstu otwiera się podczas umieszczania lub dwukrotnego klikania edytowalnego elementu. Mały **chip trybu** w nagłówku — **rich** (kolor akcentu) lub **simple** (stonowany) — pokazuje, który tryb jest aktywny dla bieżącego elementu.

## Tryby edytora

### Tryb rich

Używany przez: **Text** (etykiety MTEXT) i adnotacje **Multileader**.

| Funkcja | Zachowanie |
|---------|-----------|
| Bold / Italic / Strikethrough | Dla poszczególnych znaków (stosuje się do zaznaczenia lub całego elementu bez zaznaczenia) |
| Font i Height | Nadpisanie dla poszczególnych znaków lub domyślna całego elementu |
| `Enter` | Wstawia twardy podział wiersza |
| `Shift+←/→` | Rozszerza lub zmniejsza zaznaczenie tekstu |
| `Home` / `End` | Przejście na początek / koniec bieżącego twardego wiersza |
| Zawijanie tekstu | Obsługiwane przez uchwyty zmiany rozmiaru szerokości odniesienia |

### Tryb simple

Używany przez: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

Edytor jest wstępnie wypełniony bieżącą wyrenderowaną etykietą wymiaru, dzięki czemu możesz ustawić kursor i edytować wartość bezpośrednio.

| Funkcja | Zachowanie |
|---------|-----------|
| Bold / Italic / Font / Height | Dostępne — stosowane do **całej** etykiety naraz |
| Formatowanie poszczególnych znaków | Nieobsługiwane |
| `Enter` | **Zatwierdza** wartość i zamyka edytor (bez podziału wiersza) |
| Wieloliniowość | Nieobsługiwana |
| Zawijanie tekstu | Nieobsługiwane |

## Otwieranie edytora

| Akcja | Wynik |
|-------|-------|
| Polecenie `text` → kliknij pozycję | Tworzy nowy element tekstowy i otwiera edytor (**rich**) |
| Dwukrotne kliknięcie istniejącego elementu **Text** | Ponownie otwiera edytor w trybie **rich** |
| Dwukrotne kliknięcie istniejącego elementu **Multileader** | Otwiera edytor w trybie **rich** |
| Dwukrotne kliknięcie elementu **wymiarowego** | Otwiera edytor w trybie **simple** |
| `Escape` wewnątrz edytora | Zamyka edytor i zachowuje wszystkie zmiany |

## Pasek narzędzi

Pasek narzędzi unosi się nad prostokątem ograniczającym tekstu i pozostaje zakotwiczony do elementu podczas panoramowania lub powiększania.

### Pogrubienie · Kursywa · Przekreślenie

| Przycisk | Skrót | Co robi |
|----------|-------|---------|
| **B** | — | Przełącz pogrubienie |
| *I* | — | Przełącz kursywę |
| ~~S~~ | — | Przełącz przekreślenie |

**Jak przełączanie ma zastosowanie:**

- **Z zaznaczonym tekstem** — styl jest stosowany dokładnie tylko do zaznaczonych znaków.
- **Bez zaznaczenia, kursor w istniejącym tekście** — przełącza styl na całym elemencie (wszystkich segmentach).
- **Pusty tekst lub nowy element** — styl jest przechowywany na pustym segmencie i stosowany do każdego znaku wpisanego od tej chwili.

Przycisk pojawia się podświetlony (aktywny), gdy każdy znak w bieżącym zaznaczeniu — lub znak bezpośrednio po lewej stronie kursora — ma ustawiony ten styl.

### Czcionka

Lista rozwijana grupuje dostępne czcionki na **Default** (wbudowana czcionka bezszeryfowa), **User** (Twoje własne przesłane czcionki, jeśli takie są), **Free** (zestaw dołączonych czcionek Google Fonts) i **System** (popularne czcionki systemowe, takie jak Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console i Impact).

- **Z zaznaczeniem** — nadpisuje czcionkę tylko dla zaznaczonych znaków.
- **Bez zaznaczenia** — stosuje czcionkę do całego elementu.

Lista rozwijana odzwierciedla czcionkę znaku po lewej stronie kursora, gdy nie ma zaznaczenia.

Nie jesteś ograniczony do wbudowanej listy — kliknij przycisk **Font Manager** na pasku narzędzi, aby przesłać własny plik `.ttf` i dodać go do grupy **User**. Szczegóły znajdziesz w [Font Manager](../../commands/font-manager/).

### Wysokość

Pole liczbowe ustawia **wysokość kapitalika** (wysokość dużej litery) w jednostkach rysunkowych.

- **Z zaznaczeniem** — nadpisuje wysokość dla zaznaczonych znaków, niezależnie od podstawowej wysokości elementu.
- **Bez zaznaczenia** — zmienia podstawową wysokość elementu (stosuje się do wszystkich znaków, które nie mają indywidualnego nadpisania wysokości).

Pole odzwierciedla wysokość znaku po lewej stronie kursora. Zostaw puste, aby użyć domyślnej wartości elementu.

## Kursor i nawigacja

| Klawisz | Akcja |
|---------|-------|
| `←` / `→` | Przesuń daszek o jeden znak w lewo lub prawo |
| `Home` | Przejdź na początek bieżącego twardego wiersza |
| `End` | Przejdź na koniec bieżącego twardego wiersza |
| `Shift` + `←` / `→` | Rozszerz lub zmniejsz zaznaczenie |
| `Backspace` | Usuń znak po lewej stronie (lub zaznaczenie) |
| `Delete` | Usuń znak po prawej stronie (lub zaznaczenie) |
| `Enter` | Wstaw podział wiersza |
| `Escape` | Zamknij edytor |

Wysokość kursora automatycznie dopasowuje się do wysokości kapitalika sąsiedniego znaku, w tym mniejszego rozmiaru używanego dla indeksu dolnego i górnego.

## Kopiowanie, wycinanie i wklejanie

| Klawisz | Akcja |
|---------|-------|
| `Ctrl+C` / `Cmd+C` | Kopiuj zaznaczony tekst |
| `Ctrl+X` / `Cmd+X` | Wytnij zaznaczony tekst |
| `Ctrl+V` / `Cmd+V` | Wklej w miejscu kursora |

Kopiowanie i wycinanie wymagają aktywnego zaznaczenia tekstu. Wklejony tekst jest zawsze zwykłym tekstem — przyjmuje formatowanie (pogrubienie, kursywa, czcionka, wysokość) już obecne przy kursorze, zamiast zachowywać formatowanie, jakie miał w momencie kopiowania.

W **trybie rich** podziały wiersza we wklejonym tekście są zachowywane. W **trybie simple** podziały wiersza są usuwane, ponieważ etykiety wymiarów są jednowierszowe.

## Zawijanie tekstu

Gdy element tekstowy ma ustawioną **szerokość odniesienia**, długie wiersze są miękko zawijane na granicach wyrazów, aby mieścić się w tej szerokości.

Aby ustawić lub zmienić szerokość odniesienia podczas gdy element jest zaznaczony, przeciągnij **uchwyty zmiany rozmiaru** — cienkie prostokąty na lewej i prawej krawędzi przerywanego prostokąta ograniczającego. Treść przepływa w czasie rzeczywistym podczas przeciągania.

Ustawienie szerokości odniesienia na zero (przeciągnij uchwyty razem lub usuń wartość w panelu właściwości) usuwa zawijanie tekstu i pozwala wierszom rosnąć swobodnie.

## Tekst wieloliniowy

Naciśnij `Enter`, aby wstawić twardy podział wiersza. Każdy twardy wiersz jest niezależny — `Home` i `End` nawigują tylko w bieżącym twardym wierszu.

Twarde podziały wierszy i formatowanie poszczególnych znaków są przechowywane w formacie MTEXT i przeżywają pełny cykl zapisu i odczytu DXF.

## Zgodność z DXF

Elementy tekstowe są przechowywane jako **MTEXT** w plikach DXF. Pogrubienie i kursywa są kodowane jako `\L`, `\K`, `\O` i wbudowane przełączniki czcionek (`\f`). Wysokość poszczególnych znaków jest kodowana jako `\H`. Całe formatowanie jest zachowywane przy eksporcie i czytelne przez LibreCAD, FreeCAD i inne aplikacje zgodne z DXF.
