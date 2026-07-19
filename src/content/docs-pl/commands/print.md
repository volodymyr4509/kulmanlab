---
title: Print — Eksportowanie rysunku jako PNG, JPEG, WebP lub PDF
description: Polecenie Print otwiera Menedżera druku — dedykowane okno eksportu z podglądem na żywo, selektorem formatu, przełącznikiem monochromatycznym i opcjonalnym zaznaczaniem obszaru. Eksportuje do 2000×2000 px. Obsługuje PNG, JPEG, WebP i PDF.
keywords: [eksport PNG CAD, eksport PDF CAD, drukowanie rysunku CAD, menedżer druku, monochromatyczny eksport, kulmanlab eksport]
group: file
order: 4
---

# Print

Polecenie `print` otwiera **Menedżera druku** — dedykowane okno eksportu z podglądem na żywo, selektorem formatu (PNG / JPEG / WebP / PDF), przełącznikiem monochromatycznym i opcjonalnym przycięciem obszaru. Nic nie jest wysyłane do fizycznej drukarki; wyjście jest pobierane jako plik.

## Otwieranie Menedżera druku

Kliknij przycisk **Drukuj** na pasku narzędzi lub wpisz `print` w terminalu. Menedżer druku otwiera się natychmiast, pokazując podgląd bieżącego widoku.

## Układ Menedżera druku

Okno ma dwa panele:
- **Lewy pasek boczny** — wszystkie kontrolki eksportu.
- **Prawy panel** — podgląd na żywo, który aktualizuje się po zmianie ustawień.

### Kontrolki paska bocznego

| Kontrolka | Opis |
|----------|------|
| **Zmień obszar** | Przytnij do niestandardowego prostokąta na płótnie (patrz poniżej) |
| Przełącznik **Monochromatyczny** | Konwertuje wszystkie kolorowe linie na czarne — domyślnie włączony dla czystego wyjścia druku |
| Lista rozwijana **Format** | PNG, JPEG, WebP lub PDF |
| Przycisk **Eksportuj** | Generuje i pobiera plik |

## Wybieranie niestandardowego obszaru eksportu

Domyślnie podgląd pokazuje dokładnie to, co było widoczne na płótnie podczas otwierania Menedżera druku. Aby wyeksportować określony region:

1. Kliknij **Zmień obszar** — Menedżer druku chowa się, a płótno staje się interaktywne.
2. **Kliknij pierwszy narożnik** prostokąta eksportu.
3. **Kliknij przeciwny narożnik** — Menedżer druku ponownie otwiera się z zaznaczonym obszarem w podglądzie.

Naciśnij `Escape` podczas zaznaczania obszaru, aby anulować i przywrócić poprzedni obszar.

Podgląd dynamicznie zmienia rozmiar, aby dopasować się do **dokładnego współczynnika kształtu** zaznaczonego obszaru, więc podgląd jest dokładny co do piksela.

## Formaty eksportu

| Format | Najlepsze do | Uwagi |
|--------|----------|-------|
| **PNG** | Bezstratny, ostre linie | Białe tło, bez przezroczystości |
| **JPEG** | Mniejszy plik do udostępniania | Jakość 95%, lekka kompresja |
| **WebP** | Najmniejszy plik na strony internetowe | Ta sama jakość 95%, lepsza kompresja niż JPEG |
| **PDF** | Dokumenty gotowe do druku | Obraz osadzony przy 150 DPI w kontenerze PDF |

Eksportowany plik nosi nazwę `kulman-<znacznik_czasu>.<rozszerzenie>` i pobiera się automatycznie.

## Rozdzielczość eksportu i tło

- Maksymalna rozdzielczość: **2000 × 2000 pikseli**, proporcjonalnie skalowana do zaznaczonego obszaru.
- Tło jest zawsze **białe**.
- Warstwy oznaczone jako **niedrukowane** są wykluczone z eksportu.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Escape` (podczas zaznaczania obszaru) | Anuluj zaznaczanie obszaru, przywróć poprzedni obszar |
| `Escape` (w Menedżerze druku) | Zamknij Menedżera druku |
