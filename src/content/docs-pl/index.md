---
title: KulmanLab CAD — Dokumentacja poleceń
description: Dokumentacja poleceń KulmanLab CAD — kompletny przewodnik po wszystkich poleceniach rysowania, edycji, opisu, warstw, pomiarów i plików w KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, polecenia CAD, darmowy CAD w przeglądarce, edytor DXF online, polecenia rysowania, kulmanlab polecenia]
group: overview
order: 1
---

# KulmanLab CAD — Dokumentacja poleceń

Witaj w dokumentacji poleceń **KulmanLab CAD**. [KulmanLab CAD](https://kulmanlab.com) to darmowe, przeglądarkowe narzędzie CAD do rysowania, edycji i eksportowania plików DXF — bez instalacji. Użyj paska bocznego, aby przeglądać wszystkie dostępne polecenia pogrupowane według paneli.

## Kształty

| Polecenie | Co robi |
|-----------|---------|
| [Line](./commands/line/) | Rysuje prostą linię między dwoma punktami |
| [Polyline](./commands/polyline/) | Rysuje wielosegmentową otwartą ścieżkę |
| [Rectangle](./commands/rectangle/) | Rysuje prostokąt wyrównany do osi |
| [Circle](./commands/circle/) | Rysuje okrąg przez środek i promień |
| [Arc](./commands/arc/) | Rysuje łuk przez trzy punkty |
| [Ellipse](./commands/ellipse/) | Rysuje elipsę przez środek i dwie osie |
| [Text](./commands/text/) | Umieszcza etykietę tekstową na płótnie |
| [Spline CV](./commands/spline-cv/) | Rysuje splajn przez umieszczanie wierzchołków kontrolnych |
| [Spline Fit](./commands/spline-fit/) | Rysuje splajn przechodzący przez klikane punkty |

## Edycja

| Polecenie | Co robi |
|-----------|---------|
| [Move](./commands/move/) | Przesuwa zaznaczone elementy na nowe miejsce |
| [Copy](./commands/copy/) | Kopiuje zaznaczone elementy na nowe miejsce |
| [Rotate](./commands/rotate/) | Obraca zaznaczone elementy wokół punktu bazowego |
| [Mirror](./commands/mirror/) | Odbija zaznaczone elementy przez oś |
| [Scale](./commands/scale/) | Skaluje zaznaczone elementy wokół punktu bazowego |
| [Align](./commands/align/) | Przesuwa, obraca i opcjonalnie skaluje elementy za pomocą par punktów |
| [Delete](./commands/delete/) | Usuwa zaznaczone elementy z rysunku |
| [Trim](./commands/trim/) | Przycina segment linii na jej przecięciach |
| [Extend](./commands/extend/) | Przedłuża linię do najbliższego przecięcia z granicą |
| [Offset](./commands/offset/) | Tworzy równoległą kopię elementu w podanej odległości |
| [Fillet](./commands/fillet/) | Zaokrągla narożnik między dwiema liniami łukiem stycznych |
| [Chamfer](./commands/chamfer/) | Ścina prosty ukośny narożnik między dwiema liniami lub poliliniami |
| [Undo](./commands/undo/) | Cofa ostatnią akcję |
| [Redo](./commands/redo/) | Ponawia ostatnio cofniętą akcję |

## Opisy

| Polecenie | Co robi |
|-----------|---------|
| [Leader](./commands/leader/) | Rysuje adnotację z grotem i tekstem |
| [Leader+](./commands/leader-add/) | Dodaje dodatkowe ramię do istniejącej linii prowadzącej |
| [Leader−](./commands/leader-remove/) | Usuwa ramię z istniejącej linii prowadzącej |
| [Dimension Linear](./commands/dim-linear/) | Dodaje wymiar poziomy lub pionowy |
| [Dimension Aligned](./commands/dim-aligned/) | Dodaje wymiar wyrównany do dwóch punktów |
| [Dimension Continue](./commands/dim-continue/) | Łączy nowy wymiar z poprzednim |
| [Dimension Radius](./commands/dim-radius/) | Dodaje wymiar promienia do okręgu lub łuku |
| [Dimension Diameter](./commands/dim-diameter/) | Dodaje wymiar średnicy do okręgu |
| [Dimension Angular](./commands/dim-angular/) | Dodaje wymiar kąta dla dwóch linii, łuku lub okręgu |

## Warstwy

| Polecenie | Co robi |
|-----------|---------|
| [LayerMakeCurrent](./commands/layer-make-current/) | Ustawia bieżącą warstwę na warstwę klikniętego elementu |
| [LayerMatch](./commands/layer-match/) | Przypisuje zaznaczone elementy do warstwy elementu źródłowego |
| [LayerIsolate](./commands/layer-isolate/) | Zamraża wszystkie warstwy oprócz warstw zaznaczonych elementów |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | Odmraża wszystkie warstwy w jednym kroku |

## Układy

| Polecenie | Co robi |
|-----------|---------|
| [ViewportRectangle](./commands/viewport-rectangle/) | Tworzy okno widoku w układzie papieru przez wyznaczenie dwóch rogów |
| [ViewportCopy](./commands/viewport-copy/) | Duplikuje okno widoku na nową pozycję |
| [PageManager](./commands/page-manager/) | Edytuje rozmiar papieru i skalę dla aktywnego układu |

## Nawigacja

| Polecenie | Co robi |
|-----------|---------|
| [Pan](./commands/pan/) | Kliknij i przeciągnij, aby przesunąć widok |
| [Zoom In](./commands/zoom-in/) | Powiększa widok |
| [Zoom Out](./commands/zoom-out/) | Pomniejsza widok |
| [Fit](./commands/fit/) | Dopasowuje wszystkie elementy do widoku |

## Pomiary

| Polecenie | Co robi |
|-----------|---------|
| [Distance](./commands/distance/) | Mierzy odległość między dwoma punktami |
| [Angle](./commands/angle/) | Mierzy kąt między trzema punktami |
| [Area](./commands/area/) | Mierzy pole powierzchni i obwód wielokąta |

## Styl

| Polecenie | Co robi |
|-----------|---------|
| [Match Properties](./commands/match-properties/) | Kopiuje kolor, warstwę i inne właściwości z jednego elementu na inne |
| [Font Manager](./commands/font-manager/) | Przeglądaj, wybieraj i przesyłaj własne czcionki TTF |

## Plik

| Polecenie | Co robi |
|-----------|---------|
| [Import](./commands/import/) | Otwiera plik rysunku DXF lub JSON |
| [New File](./commands/new-file/) | Tworzy nowy pusty rysunek |
| [Files](./commands/files/) | Przegląda i przywraca ostatnio używane rysunki |
| [Print](./commands/print/) | Eksportuje obszar rysunku jako obraz lub PDF |
| [Export](./commands/export/) | Pobiera rysunek jako DXF lub JSON |
| [Wipe Storage](./commands/wipestorage/) | Usuwa wszystkie rysunki z pamięci przeglądarki |

## Odzyskiwanie

Jeśli aplikacja zawiesza się przy każdym uruchomieniu (na przykład po pracy z bardzo dużymi współrzędnymi), możesz wyczyścić wszystkie lokalnie zapisane dane, dodając `?reset` do adresu URL:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Spowoduje to usunięcie wszystkiego z lokalnej bazy danych przeglądarki i otwarcie nowego pustego rysunku. Parametr `?reset` usuwa się automatycznie z adresu URL. Użyj tej opcji jako ostateczności, gdy [Wipe Storage](./commands/wipestorage/) jest niedostępne, ponieważ aplikacja w ogóle się nie ładuje.

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
