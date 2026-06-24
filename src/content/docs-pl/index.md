---
title: KulmanLab CAD — Dokumentacja poleceń
description: Dokumentacja poleceń KulmanLab CAD — kompletny przewodnik po wszystkich poleceniach rysowania, edycji, opisu, warstw, pomiarów i plików w KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, polecenia CAD, darmowy CAD w przeglądarce, edytor DXF online, polecenia rysowania, kulmanlab polecenia]
---

# KulmanLab CAD — Dokumentacja poleceń

Witaj w dokumentacji poleceń **KulmanLab CAD**. [KulmanLab CAD](https://kulmanlab.com) to darmowe, przeglądarkowe narzędzie CAD do rysowania, edycji i eksportowania plików DXF — bez instalacji. Użyj paska bocznego, aby przeglądać wszystkie dostępne polecenia pogrupowane według paneli.

## Kształty

| Polecenie | Co robi |
|-----------|---------|
| [Linia](./commands/line) | Rysuje prostą linię między dwoma punktami |
| [Polilinia](./commands/polyline) | Rysuje wielosegmentową otwartą ścieżkę |
| [Prostokąt](./commands/rectangle) | Rysuje prostokąt wyrównany do osi |
| [Okrąg](./commands/circle) | Rysuje okrąg przez środek i promień |
| [Łuk](./commands/arc) | Rysuje łuk przez trzy punkty |
| [Elipsa](./commands/ellipse) | Rysuje elipsę przez środek i dwie osie |
| [Tekst](./commands/text) | Umieszcza etykietę tekstową na płótnie |
| [Splajn CV](./commands/spline-cv) | Rysuje splajn przez umieszczanie wierzchołków kontrolnych |
| [Splajn Fit](./commands/spline-fit) | Rysuje splajn przechodzący przez klikane punkty |

## Edycja

| Polecenie | Co robi |
|-----------|---------|
| [Przesuń](./commands/move) | Przesuwa zaznaczone elementy na nowe miejsce |
| [Kopiuj](./commands/copy) | Kopiuje zaznaczone elementy na nowe miejsce |
| [Obróć](./commands/rotate) | Obraca zaznaczone elementy wokół punktu bazowego |
| [Odbij](./commands/mirror) | Odbija zaznaczone elementy przez oś |
| [Skaluj](./commands/scale) | Skaluje zaznaczone elementy wokół punktu bazowego |
| [Usuń](./commands/delete) | Usuwa zaznaczone elementy z rysunku |
| [Przytnij](./commands/trim) | Przycina segment linii na jej przecięciach |
| [Przedłuż](./commands/extend) | Przedłuża linię do najbliższego przecięcia z granicą |
| [Odsunięcie](./commands/offset) | Tworzy równoległą kopię elementu w podanej odległości |
| [Zaokrąglenie](./commands/fillet) | Zaokrągla narożnik między dwiema liniami łukiem stycznych |
| [Fazowanie](./commands/chamfer) | Ścina prosty ukośny narożnik między dwiema liniami lub poliliniami |
| [Cofnij](./commands/undo) | Cofa ostatnią akcję |
| [Ponów](./commands/redo) | Ponawia ostatnio cofniętą akcję |

## Opisy

| Polecenie | Co robi |
|-----------|---------|
| [Linia prowadząca](./commands/leader) | Rysuje adnotację z grotem i tekstem |
| [Linia prowadząca+](./commands/leader-add) | Dodaje dodatkowe ramię do istniejącej linii prowadzącej |
| [Linia prowadząca−](./commands/leader-remove) | Usuwa ramię z istniejącej linii prowadzącej |
| [Wymiar liniowy](./commands/dim-linear) | Dodaje wymiar poziomy lub pionowy |
| [Wymiar wyrównany](./commands/dim-aligned) | Dodaje wymiar wyrównany do dwóch punktów |
| [Wymiar kontynuowany](./commands/dim-continue) | Łączy nowy wymiar z poprzednim |
| [Wymiar promienia](./commands/dim-radius) | Dodaje wymiar promienia do okręgu lub łuku |
| [Wymiar średnicy](./commands/dim-diameter) | Dodaje wymiar średnicy do okręgu |
| [Wymiar kąta](./commands/dim-angular) | Dodaje wymiar kąta dla dwóch linii, łuku lub okręgu |

## Warstwy

| Polecenie | Co robi |
|-----------|---------|
| [UstawAktywneWarstwy](./commands/layer-make-current) | Ustawia bieżącą warstwę na warstwę klikniętego elementu |
| [DopasujWarstwę](./commands/layer-match) | Przypisuje zaznaczone elementy do warstwy elementu źródłowego |
| [IzolujWarstwę](./commands/layer-isolate) | Zamraża wszystkie warstwy oprócz warstw zaznaczonych elementów |
| [OdmrózWszystkie](./commands/layer-unfreeze-all) | Odmraża wszystkie warstwy w jednym kroku |

## Układy

| Polecenie | Co robi |
|-----------|---------|
| [ProstokątWidoku](./commands/viewport-rectangle) | Tworzy okno widoku w układzie papieru przez wyznaczenie dwóch rogów |
| [KopiujWidok](./commands/viewport-copy) | Duplikuje okno widoku na nową pozycję |
| [MenedżerStron](./commands/page-manager) | Edytuje rozmiar papieru i skalę dla aktywnego układu |

## Nawigacja

| Polecenie | Co robi |
|-----------|---------|
| [Panoramuj](./commands/pan) | Kliknij i przeciągnij, aby przesunąć widok |
| [Powiększ](./commands/zoom-in) | Powiększa widok |
| [Pomniejsz](./commands/zoom-out) | Pomniejsza widok |
| [Dopasuj](./commands/fit) | Dopasowuje wszystkie elementy do widoku |

## Pomiary

| Polecenie | Co robi |
|-----------|---------|
| [Odległość](./commands/distance) | Mierzy odległość między dwoma punktami |
| [Kąt](./commands/angle) | Mierzy kąt między trzema punktami |

## Styl

| Polecenie | Co robi |
|-----------|---------|
| [Dopasuj właściwości](./commands/match-properties) | Kopiuje kolor, warstwę i inne właściwości z jednego elementu na inne |

## Plik

| Polecenie | Co robi |
|-----------|---------|
| [Import](./commands/import) | Otwiera plik rysunku DXF lub JSON |
| [Nowy plik](./commands/new-file) | Tworzy nowy pusty rysunek |
| [Pliki](./commands/files) | Przegląda i przywraca ostatnio używane rysunki |
| [Drukuj](./commands/print) | Eksportuje obszar rysunku jako obraz lub PDF |
| [Eksport](./commands/export) | Pobiera rysunek jako DXF lub JSON |
| [WyczyśćPamięć](./commands/wipestorage) | Usuwa wszystkie rysunki z pamięci przeglądarki |

## Odzyskiwanie

Jeśli aplikacja zawiesza się przy każdym uruchomieniu (na przykład po pracy z bardzo dużymi współrzędnymi), możesz wyczyścić wszystkie lokalnie zapisane dane, dodając `?reset` do adresu URL:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Spowoduje to usunięcie wszystkiego z lokalnej bazy danych przeglądarki i otwarcie nowego pustego rysunku. Parametr `?reset` usuwa się automatycznie z adresu URL. Użyj tej opcji jako ostateczności, gdy [WyczyśćPamięć](./commands/wipestorage) jest niedostępne, ponieważ aplikacja w ogóle się nie ładuje.

## Jak działają polecenia

Każde polecenie przebiega według tego samego schematu:

1. **Aktywuj** — kliknij przycisk paska narzędzi lub wpisz nazwę polecenia w terminalu na dole ekranu.
2. **Postępuj zgodnie z podpowiedzią** — terminal pokazuje, jakie dane należy wprowadzić jako następne.
3. **Zakończ lub anuluj** — większość poleceń kończy się automatycznie po ostatnim wejściu. Naciśnij **Escape** w dowolnym momencie, aby anulować.

## Zaznaczanie obiektów

Kilka poleceń edycji (Przesuń, Kopiuj, Obróć, Odbij, Skaluj, Usuń) korzysta z tego samego sposobu zaznaczania:

- **Kliknij** element, aby go zaznaczyć lub odznaczyć.
- **Przeciągnij w prawo** (od lewej do prawej) — zaznaczenie ścisłe: wybierane są tylko elementy w całości wewnątrz ramki.
- **Przeciągnij w lewo** (od prawej do lewej) — zaznaczenie przecinające: wybierany jest każdy element przecinający ramkę.
- Naciśnij **Enter** lub **Spację**, aby potwierdzić zaznaczenie i przejść do następnego kroku.
