---
sidebar_position: 2
title: Polecenie Ponów — Ponowne stosowanie cofniętych akcji w KulmanLab CAD
description: Polecenie Ponów ponownie stosuje ostatnią akcję odwróconą przez Cofnij, przesuwając się do przodu przez stos historii. Ponów jest dostępne tylko po Cofnij i jest czyszczone w chwili wykonania jakiejkolwiek nowej akcji rysowania.
keywords: [polecenie ponów CAD, historia ponów CAD, ponowne stosowanie akcji CAD, cofnij ponów CAD, trwałe ponów w przeglądarce, kulmanlab]
---

# Ponów

Polecenie `redo` przesuwa się do przodu przez historię cofnięć, ponownie stosując akcje odwrócone przez [Cofnij](./undo). Ponów jest dostępne tylko gdy cofnąłeś się z Cofnij i nie wykonałeś jeszcze nowej zmiany.

## Jak ponowić

- Wpisz `redo` w terminalu, lub
- Kliknij przycisk **Ponów** na pasku narzędzi.

Każde wywołanie ponownie stosuje jedną wcześniej cofniętą akcję. Wywołuj wielokrotnie, aby przejść do przodu przez wszystkie dostępne wpisy ponów.

## Zachowanie stosu ponów

| Szczegół | Zachowanie |
|---------|-----------|
| Dostępne po | Jednym lub więcej krokach [Cofnij](./undo) |
| Czyszczone przez | **Dowolną nową akcję rysowania** — dodanie, edytowanie lub usunięcie elementu |
| Przechowywanie | Przeglądarka, per plik — przeżywa przeładowanie strony (o ile żadna nowa akcja nie była wykonana przed przeładowaniem) |
| Maksymalna głębokość | Do 20 wpisów (ta sama pula co Cofnij) |

Gdy nowy element jest narysowany, usunięty lub zmodyfikowany, stos ponów jest czyszczony i te wpisy nie mogą być odzyskane. Tylko cofnięte akcje, które nie zostały zastąpione nową pracą, mogą być ponowione.

## Ponów a Cofnij

| | Ponów | Cofnij |
|---|------|------|
| Kierunek | Kroki **do przodu** przez cofnięte wpisy | Kroki **do tyłu** przez historię |
| Dostępne gdy | Po co najmniej jednym Cofnij, bez wykonanej nowej akcji | Istnieje co najmniej jedna zarejestrowana akcja |
| Czyszczone przez | Dowolną nową akcję rysowania | Nic |

Przycisk Ponów na pasku narzędzi jest wyszarzony gdy nie ma wpisów do ponowienia. Najpierw użyj [Cofnij](./undo), aby utworzyć wpisy ponów.
