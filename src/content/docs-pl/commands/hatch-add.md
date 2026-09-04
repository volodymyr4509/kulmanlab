---
title: Polecenie HatchAdd — wgraj plik wzorów .pat z terminala
description: Polecenie HatchAdd otwiera okno wyboru plików, aby wgrać plik wzorów .pat bez otwierania Hatch Managera. Wszystkie wzory zdefiniowane w pliku dodawane są naraz.
keywords: [polecenie hatch add, polecenie hatchadd, wgrywanie pliku pat terminal, własny wzór kreskowania CAD, acad.pat, biblioteka wzorów, kulmanlab]
group: style
order: 5
---

# HatchAdd

Polecenie `HatchAdd` otwiera systemowe okno wyboru plików, by wgrać plik wzorów kreskowania `.pat`, bez otwierania najpierw okna [Hatch Manager](../hatch-manager/). To ta sama operacja, którą uruchamia przycisk **Add .pat File** w Hatch Managerze — HatchAdd jest tylko drogą na skróty z terminala.

## Wgrywanie pliku wzorów

1. Wpisz `HatchAdd` w terminalu albo kliknij **Add .pat File** na dole okna [Hatch Manager](../hatch-manager/).
2. Wybierz plik `.pat` w oknie systemowym. Przyjmowany jest wyłącznie standardowy format wzorów kreskowania.

Polecenie kończy się z chwilą otwarcia okna wyboru plików — nie ma dalszych pytań, kliknięć ani wpisywania w terminalu. Wzory zostają zarejestrowane i pojawiają się w grupie **User**, gdy tylko wybierzesz plik.

## Co się dzieje po przesłaniu

- **Plik `.pat` to pojemnik, a nie pojedynczy wzór.** Jeden plik zwykle definiuje wiele nazwanych wzorów i wszystkie dodawane są razem. Tym HatchAdd różni się od [FontAdd](../font-add/), gdzie jeden `.ttf` to jeden krój.
- **Sam plik nie jest zachowywany.** Zostaje raz odczytany, podzielony na wzory, a każdy wzór zapisany osobno pod własną nazwą. Dlatego można później usunąć jeden wzór, nie ruszając tych, które przyszły razem z nim — i dlatego grupa **User** wypisuje je alfabetycznie po nazwie, a nie według pliku pochodzenia.
- **Wzór o nazwie zgodnej z istniejącym zastępuje go.** To przewidziany sposób nałożenia miarodajnych definicji na własne przybliżenia KulmanLab: wgraj prawdziwy `acad.pat`, a jego wersje `ANSI31` i pozostałych standardowych nazw przejmą pałeczkę.
- **Wzory zapisywane są dla użytkownika, nie dla rysunku.** Żyją w przeglądarce (IndexedDB), wczytują się same przy następnym otwarciu KulmanLab CAD i są dostępne w każdym rysunku.
- **Plik bez poprawnych definicji wzorów nie dodaje nic.** Biblioteka zostaje dokładnie taka, jaka była.

## Skróty klawiaturowe

HatchAdd nie ma własnej obsługi klawiatury — całym poleceniem jest natywne okno wyboru plików przeglądarki. Anulowanie tego okna (albo niewybranie pliku) pozostawia bibliotekę wzorów bez zmian.

## Powiązane polecenia

| Polecenie | Co robi |
|-----------|---------|
| [Hatch Manager](../hatch-manager/) | Przeglądanie biblioteki wzorów z podglądem na żywo i usuwanie wgranych wzorów |
| [Hatch](../hatch/) | Wypełnia zamknięty obszar wzorem z biblioteki |
| [FontAdd](../font-add/) | Ten sam skrót bezpośredniego wgrywania dla krojów `.ttf` |
