---
title: Polecenie Text — Umieszczanie etykiet MTEXT w KulmanLab CAD
description: Polecenie Text umieszcza wieloliniową, bogato sformatowaną etykietę MTEXT. Kliknij pozycję, wpisz w oknie podręcznym edytora i naciśnij Escape, aby zatwierdzić. Dwukrotne kliknięcie dowolnej istniejącej etykiety ponownie otwiera edytor.
keywords: [polecenie tekstu CAD, MTEXT, umieszczanie etykiety tekstowej CAD, adnotacja tekstowa CAD, pogrubiony kursywa CAD, wieloliniowy tekst CAD, kulmanlab]
group: shapes
order: 7
---

# Text

Polecenie `text` umieszcza wieloliniową etykietę tekstową. Po kliknięciu pozycji na płótnie otwiera się okno podręczne edytora w trybie **rich** — możesz wpisywać treść, stosować pogrubienie/kursywę/przekreślenie dla poszczególnych znaków, zmieniać czcionki i wysokości oraz wstawiać podziały wierszy. Naciśnij **Escape**, aby zatwierdzić i zamknąć edytor.

Zobacz stronę [Edytor tekstu](../../interface/text-editor/), aby uzyskać pełną dokumentację edytora, w tym porównanie trybów **rich** i **simple**.

## Umieszczanie etykiety tekstowej

1. Wpisz `text` w terminalu lub kliknij przycisk **Tekst** na pasku narzędzi.
2. **Kliknij pozycję kotwicy** na płótnie. Lub wpisz `X,Y` i naciśnij **Enter** dla dokładnej współrzędnej.
3. Otwiera się **okno podręczne edytora tekstu** nad nową etykietą. Wpisz swoją treść.
4. Naciśnij **Escape**, aby zatwierdzić etykietę i zamknąć edytor.

Domyślna wysokość wynosi **12 jednostek rysunkowych**.

## Edytowanie istniejącej etykiety

**Dwukrotnie kliknij** dowolną etykietę tekstową na płótnie, aby ponownie otworzyć edytor dla tej etykiety.

## Wprowadzanie współrzędnych dla kotwicy

Zamiast klikać, wpisz dokładną pozycję:

1. Wpisz wartość X.
2. Naciśnij `,` — terminal pokazuje `[X], [Y{kursor}]`.
3. Wpisz wartość Y.
4. Naciśnij **Enter**, aby umieścić kotwicę i otworzyć edytor.

## Skróty klawiaturowe

**Faza kotwicy**

| Klawisz | Akcja |
|---------|-------|
| `0`–`9`, `.`, `-` | Rozpocznij wprowadzanie współrzędnej X |
| `,` | Zablokuj X i przejdź do wprowadzania Y |
| `Backspace` | Usuń ostatnio wpisany znak |
| `Enter` | Potwierdź wpisaną współrzędną |

**Faza edytora tekstu** (patrz [Edytor tekstu](../../interface/text-editor/) dla pełnej dokumentacji)

| Klawisz | Akcja |
|---------|-------|
| Dowolny znak drukowalny | Wstaw przy kursorze |
| `Backspace` / `Delete` | Usuń sąsiedni znak lub zaznaczenie |
| `Enter` | Wstaw podział wiersza |
| `←` / `→` | Przesuń daszek |
| `Home` / `End` | Przejdź na początek / koniec twardego wiersza |
| `Escape` | Zatwierdź i zamknij edytor |

## Edycja uchwytu — repozycjonowanie

Zaznaczona etykieta tekstowa eksponuje jeden uchwyt w punkcie kotwicy:

| Uchwyt | Pozycja | Co robi |
|--------|---------|---------|
| **Kotwica** | Lewy dolny róg tekstu | Przeciągnij, aby zmienić położenie etykiety |

## Zaznaczanie tekstu

| Metoda | Zachowanie |
|--------|-----------|
| **Kliknięcie** | Zaznacza, jeśli kliknięcie trafia w obrotowy prostokąt ograniczający tekstu |
| **Przeciągnij w prawo** (ścisłe) | Wszystkie cztery narożniki prostokąta ograniczającego muszą mieścić się wewnątrz obszaru zaznaczenia |
| **Przeciągnij w lewo** (przecinające) | Dowolne nakładanie się prostokąta ograniczającego tekstu z obszarem zaznaczenia zaznacza go |

## Obsługiwane polecenia edycji

| Polecenie | Co dzieje się z tekstem |
|-----------|------------------------|
| [Move](../move/) | Przesuwa punkt kotwicy |
| [Copy](../copy/) | Tworzy identyczną etykietę w nowej pozycji |
| [Rotate](../rotate/) | Obraca pozycję kotwicy i dodaje kąt do Stopni obrotu |
| [Mirror](../mirror/) | Odbija punkt kotwicy przez oś odbicia (ciąg tekstu nie jest odwracany) |
| [Scale](../scale/) | Skaluje pozycję kotwicy i mnoży wysokość przez współczynnik skali |
| [Delete](../delete/) | Usuwa etykietę |

Tekst nie obsługuje **Offset**, **Trim** ani **Extend**.

## Właściwości

Gdy etykieta tekstowa jest zaznaczona, panel właściwości pokazuje:

**Ogólne**

| Właściwość | Domyślna | Znaczenie |
|------------|----------|-----------|
| Kolor | 256 (ByLayer) | Indeks koloru ACI |
| Warstwa | `0` | Przypisanie warstwy |

**Geometria**

| Właściwość | Znaczenie |
|------------|-----------|
| Pozycja X / Pozycja Y | Współrzędne punktu kotwicy |
| Wysokość | Podstawowa wysokość tekstu w jednostkach rysunkowych (domyślna: **12**) |
| Stopnie obrotu | Obrót przeciwnie do ruchu wskazówek zegara w stopniach |

**Właściwości**

| Właściwość | Znaczenie |
|------------|-----------|
| Treść | Ciąg tekstowy (zachowane kody wbudowane MTEXT) |
| Punkt przyczepu | Kod wyrównania (1 = lewy górny … 9 = prawy dolny) |

Tekst nie ma właściwości Typ linii, Skala typu linii ani Grubość.

## DXF — element MTEXT

Etykiety tekstowe są przechowywane jako elementy **MTEXT** w plikach DXF. Pogrubienie i kursywa są kodowane za pomocą `\L`, `\K`, `\O` i wbudowanych przełączników czcionek (`\f`). Wysokość poszczególnych znaków jest kodowana jako `\H`. Całe formatowanie przeżywa pełny cykl zapisu i odczytu DXF i jest czytelne przez LibreCAD, FreeCAD i inne aplikacje zgodne z DXF.
