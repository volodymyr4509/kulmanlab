---
title: Polecenie Hatch Manager — Przeglądaj i przesyłaj wzory .pat
description: Polecenie Hatch Manager otwiera okno dialogowe do przeglądania wzorów hatch z podglądem próbki na żywo oraz do przesyłania własnych plików wzorów .pat. Przesłane pliki są zapisywane w przeglądarce i przesłaniają wbudowane wzory o tej samej nazwie.
keywords: [hatch manager, niestandardowy wzór hatch CAD, przesyłanie pliku pat, acad.pat, biblioteka wzorów hatch, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

Polecenie `MenedżerKreskowań` otwiera okno dialogowe do przeglądania wzorów hatch z podglądem próbki na żywo oraz do przesyłania własnych plików wzorów `.pat` do użycia z [Hatch](../hatch/).

## Otwieranie Hatch Manager

Wpisz `MenedżerKreskowań` w terminalu. Jest to oddzielne od selektora wzorów, który otwiera się po kliknięciu chipa **Pattern** hatch — selektor wybiera wzór dla jednego hatch, Hatch Manager to miejsce, w którym dodajesz lub usuwasz pliki `.pat`.

## Grupy wzorów

| Grupa | Zawartość |
|-------|-----------|
| **User** | Wzory z Twoich własnych przesłanych plików `.pat`, pogrupowane dodatkowo według pliku, z którego pochodzi każdy wzór (pokazywane dopiero po przesłaniu jednego) |
| **Standard** | `SOLID` plus własna tabela wzorów tego rysunku — każdy nowy rysunek zaczyna się z tą samą wbudowaną biblioteką, tak samo jak jego warstwy i typy linii |

Kliknij dowolny wzór na liście (lub użyj `↑`/`↓`), aby zobaczyć jego podgląd po prawej stronie — próbka narysowana tym samym kodem, którym wypełniane jest płótno, więc jest to dokładnie to, co pokaże rysunek, wraz z nazwą, opisem i liczbą linii wzoru.

## Przesyłanie niestandardowego pliku wzoru

1. Kliknij **Add .pat File** w stopce okna dialogowego.
2. Wybierz plik `.pat` — standardowy format wzorów hatch. Pojedynczy plik często definiuje wiele nazwanych wzorów naraz; wszystkie pojawiają się jako osobne pozycje pogrupowane pod nazwą tego pliku.
3. Przesłane pliki są zapisywane trwale w przeglądarce (IndexedDB), posortowane od najnowszych dodanych, i automatycznie wczytywane ponownie przy następnym otwarciu KulmanLab CAD.

Przesłanie pliku definiującego wzór o tej samej nazwie co wbudowany **przesłania** domyślny — to obsługiwany sposób na uzyskanie oficjalnych definicji wzorów Autodesk: prześlij prawdziwy `acad.pat`, a jego wersje ANSI31 i innych standardowych nazw przejmą miejsce własnych przybliżeń KulmanLab.

Jeśli rysunek odwołuje się do nazwy wzoru, której nie ma w Twojej bibliotece — zaimportowanej z DXF, który używał wzoru z `acad.pat`, którego nie przesłałeś — hatch nadal jest renderowany, używając `ANSI31` jako zastępstwa, zamiast wracać do płaskiego wypełnienia bez wzoru.

## Usuwanie pliku wzoru

Kliknij **×** obok nazwy pliku w grupie **User**, aby usunąć go wraz z każdym wzorem, który definiował. Każdy hatch, który już używa jednego z tych wzorów, natychmiast wraca do `ANSI31`. Wbudowanych wzorów **Standard** nie można usunąć.

## Skróty klawiszowe

| Klawisz | Działanie |
|---------|-----------|
| `↑` / `↓` | Przesuwa zaznaczenie w górę lub w dół listy wzorów |
| `Escape` | Zamyka Hatch Manager |

## Powiązane polecenia

- [Hatch](../hatch/) — wypełnia kliknięty obszar aktualnie wybranym wzorem
- [Font Manager](../font-manager/) — ten sam wzór przesyłania/przeglądania, dla niestandardowych czcionek zamiast wzorów hatch
