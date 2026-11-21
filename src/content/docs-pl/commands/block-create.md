---
title: "Polecenie BlockCreate — utworzenie bloku z obiektów"
description: "Polecenie BlockCreate tworzy nazwany blok z zaznaczonych obiektów, z wybranym punktem bazowym, i zastępuje je jednym odniesieniem do niego. Blok można potem umieszczać wielokrotnie poleceniem BlockInsert."
keywords: ["utwórz blok CAD", "blok z obiektów CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

Polecenie `UtwórzBlok` tworzy **blok**: nazwaną grupę obiektów, zapisaną w rysunku raz i umieszczaną tyle razy, ile chcesz, poleceniem [Block Insert](../block-insert/). Wybrane obiekty stają się blokiem, a w rysunku zastępuje je jedno odniesienie do niego, więc nic nie zmienia wyglądu.

## Tworzenie bloku

1. Jeśli chcesz, najpierw zaznacz obiekty, potem wpisz `UtwórzBlok` albo kliknij **Utwórz blok** w panelu **Bloki**. Otwiera się okienko z już wybranymi obiektami.
2. Wpisz **Nazwa**. Nie może być pusta, nie może zawierać żadnego ze znaków `< > / \ " : ; ? * | , =` ani odwróconego apostrofu i nie może być nazwą innego bloku.
3. Kliknij **Wybierz obiekty**, aby dodać lub odjąć obiekty: okienko znika, a Ty klikasz obiekty albo przeciągasz obszar. Naciśnij **Enter** lub **Space**, by wrócić do okienka, gdzie **Obiekty** pokazuje liczbę.
4. Ustaw **Punkt bazowy**, czyli punkt, za który blok jest umieszczany: wpisz jego X i Y albo kliknij **Wskaż punkt** i kliknij na płótnie (lub wpisz tam X,Y). Zaczyna od 0,0.
5. Kliknij **OK**. Blok zostaje zapisany, obiekty ustępują jednemu odniesieniu do niego w punkcie bazowym, a terminal zapisuje nazwę bloku i liczbę jego obiektów.

## Warto wiedzieć

- **OK** pozostaje nieaktywny, dopóki coś jest nie tak, a komunikat pod polami mówi co: pusta lub nieużyteczna nazwa, nazwa już zajęta albo brak obiektów.
- **Escape** podczas wyboru obiektów lub punktu bazowego wraca do okienka z blokiem takim jak był. **Escape** w okienku anuluje polecenie.
- Blok jest zapisywany z rysunkiem i zapisywany do DXF razem z odniesieniami do niego.

---

*Powiązane: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
