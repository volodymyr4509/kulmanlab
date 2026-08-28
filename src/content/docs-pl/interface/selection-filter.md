---
title: Filtr zaznaczenia — zawężanie zaznaczenia wielokrotnego według właściwości
description: Gdy zaznaczono wiele obiektów, ikona filtra w nagłówku panelu właściwości otwiera okienko z listami wyboru na żywo dla Typu, Warstwy, Koloru, Grubości linii i Rodzaju linii, zbudowanymi z tego, co faktycznie znajduje się w zaznaczeniu, dzięki czemu duży, mieszany wybór można zawęzić przed edycją zbiorczą.
keywords: [filtr zaznaczenia, filtrowanie zaznaczenia CAD, filtr fasetowy, zawężanie zaznaczenia, edycja zbiorcza CAD, filtr panelu właściwości, kulmanlab]
group: interface
order: 7
---

# Filtr zaznaczenia

Zaznaczenie wielu obiektów naraz otwiera panel właściwości w widoku zaznaczenia wielokrotnego („Selection (N)"). **Ikona filtra** obok przycisku zamykania pozwala zawęzić to zaznaczenie według właściwości przed edycją zbiorczą.

## Otwieranie filtra

1. Zaznacz kilka obiektów — przeciągnij ramkę zaznaczenia, kliknij z Shift albo naciśnij Ctrl+A.
2. Kliknij **ikonę filtra** (lejek) w nagłówku panelu właściwości.
3. Pod przyciskiem otworzy się okienko z listą wyboru dla każdej właściwości, która faktycznie różni się w obrębie zaznaczenia.

## Fasety

Okienko może pokazać do pięciu faset, każdą budowaną na żywo z bieżącego zaznaczenia:

| Faseta | Pokazywane wartości |
|--------|---------------------|
| **Typ** | Nazwa typu obiektu (Line, Circle, Hatch, …) |
| **Warstwa** | Nazwa warstwy wraz z próbką koloru odpowiadającą tej warstwie |
| **Kolor** | Indeks koloru ACI |
| **Grubość linii** | Wartość grubości linii |
| **Rodzaj linii** | Nazwa rodzaju linii |

Faseta pojawia się tylko wtedy, gdy zaznaczenie rzeczywiście zawiera dla niej więcej niż jedną odrębną wartość — zaznaczenie dziesięciu linii leżących na tej samej warstwie nie pokaże fasety Warstwa, bo jej zaznaczenie niczego by nie zawęziło. Obiekty, które w ogóle nie mają danej właściwości (Hatch i Text nie mają na przykład ani grubości, ani rodzaju linii), po prostu nie są liczone w tej fasecie — i nigdy nie są przez nią wykluczane.

## Zawężanie zaznaczenia

Zaznacz jedną lub więcej wartości w dowolnej fasecie, aby zawęzić wybór do obiektów spełniających **wszystkie** zaznaczone fasety (obiekt musi pasować do co najmniej jednej zaznaczonej wartości w *każdej* fasecie, której dotknąłeś, a nie tylko w jednej). Pola wyboru i liczniki każdej fasety odzwierciedlają to, do czego zawęziły już *pozostałe* zaznaczone fasety, więc faseta nigdy nie ukrywa własnych, już zaznaczonych opcji — standardowe zachowanie wyszukiwania fasetowego.

Liczba wyników aktualizuje się na żywo w miarę zaznaczania i odznaczania, a samo zaznaczenie na obszarze rysowania zawęża się wraz z nią — to nie jest jedynie filtr wyświetlania: obiekty, które przestały pasować, są naprawdę odznaczane, gotowe, byś edytował zbiorczo dokładnie ten podzbiór, do którego przefiltrowałeś.

## Czyszczenie filtrów

Użyj przycisku resetowania w okienku, aby odznaczyć wszystkie pola i wrócić do pełnego pierwotnego zaznaczenia, albo zamknij okienko (przy następnym kliknięciu ikony filtra na innym zaznaczeniu otworzy się od nowa).

## Powiązane

- [Match Properties](../../commands/match-properties/) — kopiowanie właściwości z jednego obiektu na inne, gdy już zawęzisz, które to mają być
- [LayerIsolate](../../commands/layer-isolate/) — alternatywa na poziomie warstwy, gdy chcesz izolować wyłącznie według warstwy, niezależnie od bieżącego zaznaczenia
