---
title: "Polecenie StylWymiaru — tworzenie i zarządzanie nazwanymi stylami wymiarów"
description: "Twórz i zarządzaj stylami wymiarów CAD: strzałkami, liniami pomocniczymi, znacznikami środka, tekstem, precyzją i DXF DIMSTYLE."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# StylWymiaru

Polecenie otwiera okno tworzenia, edycji, podglądu i wyboru nazwanych stylów wymiarów. Nowe wymiary liniowe, wyrównane, promieniowe, średnicowe i kątowe kopiują styl bieżący przy utworzeniu; istniejące wymiary nie pozostają połączone.

## Otwieranie okna

Wpisz zlokalizowane polecenie w terminalu lub kliknij **Styl wymiaru** w panelu **Opisywanie**. Lista po lewej pokazuje widoczne style; znacznik wskazuje bieżący, a ołówek pozwala zmienić nazwę.

## Linie i strzałki

**Strzałka 1 / Strzałka 2 · Rozmiar strzałki · Odsunięcie linii pomocniczej · Wysunięcie linii pomocniczej · Znacznik środka · Rozmiar znacznika środka**

Ustaw osobno oba groty, rozmiar strzałki, odsunięcie i przedłużenie linii pomocniczych oraz typ i rozmiar znacznika środka (`Brak`, `Znacznik` lub `Linie`).

## Tekst

**Styl tekstu · Czcionka · Wysokość tekstu · Tekst w ramce · Odstęp tekstu · Przyleganie tekstu · Tekst wyrównany · Dokładność · Dokładność kąta**

Sekcja tekstu steruje szybkim wypełnieniem ze stylu tekstu, czcionką, wysokością, pogrubieniem, kursywą, ramką, odstępem, jedną z dziewięciu pozycji zaczepienia, wyrównaniem do linii wymiarowej oraz precyzją liniową i kątową. Styl tekstu kopiuje wartości jednorazowo, bez aktywnego połączenia.

Podgląd używa tych samych mechanizmów co obszar rysunku. Przełączaj próbki liniową, promieniową, średnicową i kątową, aby sprawdzić strzałki, środki, położenie tekstu, precyzję i ramki.

## Tworzenie i zarządzanie stylami

**Nowy** powiela wybrany styl. `Standard` nie można zmienić nazwy ani usunąć; stylu bieżącego również nie można usunąć. Nazwy muszą być unikalne, niepuste i poprawne dla DXF. Importowane style opisowe są ukryte, lecz zachowane.

## Ustawianie stylu bieżącego

**Ustaw bieżący** czyni wybrany styl szablonem nowych wymiarów; lista panelu Opisywanie daje ten sam wybór. Wartości są kopiowane przy tworzeniu. Dimension Continue dziedziczy pełny wygląd wymiaru bazowego.

## Zapisywanie lub odrzucanie

**OK** stosuje razem zmiany nazw, dodatki, usunięcia, właściwości i wybór stylu bieżącego. **Zamknij**, kliknięcie tła lub `Escape` odrzuca zmiany.

## Zgodność z DXF

KulmanLab importuje i eksportuje nazwane rekordy `DIMSTYLE`, w tym oddzielne strzałki, linie pomocnicze, tekst, precyzję, znaczniki środka, ramkę, odwołanie do stylu tekstu i flagę opisową. Przy imporcie pierwszeństwo mają nadpisania `DSTYLE` konkretnego obiektu.

Przy eksporcie wskazany `STYLE` używa wysokości zmiennej (`40 = 0`) i zapisuje ostatnią wysokość w grupie `42`. Stała wysokość stylu tekstu nie zastępuje więc wysokości własnej stylu wymiaru.

## Powiązane polecenia

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
