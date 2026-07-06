---
sidebar_position: 1
title: Polecenie Undo — Cofanie się przez historię rysowania w KulmanLab CAD
description: Polecenie Undo odwraca ostatnią akcję rysowania jeden krok na raz. Na plik przechowywanych jest do 20 kroków, które są utrwalane w przeglądarce między przeładowaniami stron. Wykonanie nowej akcji po cofnięciu czyści stos ponów.
keywords: [polecenie cofnij CAD, historia cofnij CAD, cofanie akcji CAD, kroki cofnij CAD, trwałe cofnij w przeglądarce, kulmanlab]
---

# Undo

Polecenie `undo` odwraca ostatnią zmianę w rysunku — jeden krok na wywołanie. Każde dodanie, usunięcie lub edycja elementów jest zapisywana jako oddzielny wpis historii. Cofnij cofa te wpisy w odwrotnej kolejności.

## Jak cofnąć

- Wpisz `undo` w terminalu, lub
- Kliknij przycisk **Cofnij** na pasku narzędzi.

Każde wywołanie odwraca jedną zarejestrowaną akcję. Wywołuj wielokrotnie, aby cofnąć się dalej.

## Zachowanie historii

| Szczegół | Wartość |
|---------|-------|
| Kroki na plik | Do **20** |
| Przechowywanie | Przeglądarka (IndexedDB / localStorage), per nazwa pliku |
| Przeżywa przeładowanie strony | Tak — historia jest przywracana przy ponownym otwarciu pliku |
| Nowa akcja po cofnięciu | Czyści wszystkie wpisy ponów przed bieżącą pozycją |
| Najstarszy wpis przy zapełnieniu | Usuwany, aby zrobić miejsce dla najnowszej zmiany |

Każda mutacja elementu jest zapisywana: rysowanie nowych elementów, usuwanie elementów, edycja uchwytu punktów końcowych, stosowanie Przesuń, Obróć, Skaluj, Odbij, Przytnij, Przedłuż i Odsunięcie — wszystkie tworzą wpisy historii.

## Cofnij a Ponów

| | Cofnij | Ponów |
|---|------|------|
| Kierunek | Kroki **do tyłu** przez historię | Kroki **do przodu** przez cofnięte wpisy |
| Dostępne gdy | Istnieje co najmniej jedna zarejestrowana akcja | Po wykonaniu co najmniej jednego Cofnij bez podjęcia żadnej nowej akcji |
| Czyszczone przez | Nic — historia akumuluje się do limitu 20 kroków | Dowolna nowa akcja rysowania |

Użyj [Redo](../redo/), aby ponownie zastosować cofniętą akcję. Przyciski paska narzędzi są wyszarzone, gdy odpowiedni kierunek jest niedostępny.
