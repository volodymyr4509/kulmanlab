---
title: Polecenie Hatch — Wypełnij obszar wzorem
description: Polecenie Hatch wypełnia obszar otaczający kliknięty punkt wzorem — dowolna kombinacja linii, łuków, elips i splajnów, która się zamyka, otacza obszar, a każdy zamknięty kształt w jego wnętrzu pozostaje niewypełnioną wyspą.
keywords: [polecenie hatch CAD, wypełnij obszar CAD, wzór hatch CAD, ANSI31, wypełnienie SOLID, wypełnienie konturu CAD, element DXF HATCH, kulmanlab]
group: shapes
order: 7
---

# Hatch

Polecenie `Kreskowanie` wypełnia obszar otaczający kliknięty punkt wzorem. Kontur nie jest rysowany najpierw — powstaje z tego, co już znajduje się na płótnie, więc cztery osobne [Line](../line/), które spotykają się końcami, otaczają obszar dokładnie tak, jak robi to zamknięta [Polyline](../polyline/), a każdy zamknięty kształt w środku staje się wyspą, której wypełnienie nie dotyka.

## Wypełnianie obszaru

1. Wpisz `Kreskowanie` w terminalu lub kliknij przycisk paska narzędzi **Hatch** (ikona próbki).
2. **Kliknij punkt** wewnątrz obszaru, który chcesz wypełnić.
3. Polecenie pozostaje aktywne, więc kontynuuj klikanie, aby wypełnić więcej obszarów — każde kliknięcie tworzy własny element `Hatch`.
4. Naciśnij **Enter**, **Spację** lub **Escape**, gdy skończysz.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   kliknij wewnątrz
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   zewnętrznego konturu; okrąg
  └─────────────┘        └─────────────┘   pozostaje wyspą
```

## Skróty klawiaturowe

| Klawisz | Akcja |
|-----|--------|
| `Enter` / `Space` | Zakończ polecenie Hatch |
| `Escape` | Zakończ polecenie Hatch (tak samo jak Enter/Spacja) |

## Co może utworzyć kontur

Dowolna kombinacja tych typów elementów może utworzyć kontur, w dowolnym zestawieniu, o ile łączą się końcami bez żadnej przerwy:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (własny zamknięty kontur)
- [Ellipse](../ellipse/) (zamknięta, lub otwarty łuk eliptyczny jako część większej pętli)
- [Polyline](../polyline/) (otwarta lub zamknięta) i [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/)

Elementy Text, Multileader i Dimension nigdy nie są traktowane jako kontury.

## Wyspy

Wszystko, co jest całkowicie zamknięte wewnątrz klikniętego obszaru — okrąg, zamknięta polilinia, kontur innego hatch — staje się **wyspą**: wypełnienie zatrzymuje się na jej krawędzi, a sama wyspa pozostaje pusta. Umieść zamknięty kształt wewnątrz innego zamkniętego kształtu, a wypełnienie zmienia się na przemian, dziura w wypełnieniu w dziurze, według tej samej zasady wewnątrz/na zewnątrz na każdym poziomie.

## Gdy wybór się nie powiedzie

Jeśli kliknięty punkt nie jest zamknięty lub kontur ma przerwę, terminal wyjaśnia dlaczego, zamiast po cichu nic nie robić:

| Komunikat | Znaczenie |
|-----------|-----------|
| "no boundary found" | W żadnym kierunku od klikniętego punktu nic nie napotkano — w pobliżu nie ma żadnego konturu |
| "point is not enclosed" | W pobliżu istnieje kontur, ale kształt, który tworzy, nie zawiera klikniętego punktu |
| "boundary is open" | Najbliższy kontur ma gdzieś przerwę — prześledź go i sprawdź, czy każde połączenie jest dokładne |
| "boundary too complex" | Pętla konturu nie mogła zostać zamknięta w limicie przeszukiwania — zwykle plątanina nakładających się elementów |

Polecenie pozostaje aktywne po nieudanym wyborze — przeczytaj komunikat, popraw rysunek lub kliknij gdzie indziej i spróbuj ponownie.

## Wybieranie wzoru

Każdy nowy hatch zaczyna się wypełniony wzorem `ANSI31` (lub jakimkolwiek wzorem, którego użył *ostatnio* edytowany hatch) — przed rysowaniem nie ma selektora wzorów. Aby użyć innego wzoru:

1. Wybierz istniejący hatch i otwórz jego pole **Pattern** w panelu właściwości — otwiera to selektor wzorów, siatkę nazwanych próbek pogrupowanych według pochodzenia każdego wzoru.
2. Kliknij wzór, aby go zastosować — wypełnienie aktualizuje się natychmiast.

Ten wybór staje się również domyślny dla *następnego* hatch, który utworzysz poleceniem `Kreskowanie`, w ten sam sposób, w jaki wybór warstwy lub koloru jest przenoszony dalej. Aby więc pokryć hatchem kilka nowych obszarów określonym wzorem: wypełnij jeden obszar, ustaw jego wzór raz, a następnie kontynuuj hatchowanie — każde kolejne wypełnienie zaczyna się już z zastosowanym tym wzorem.

Zobacz [Hatch Manager](../hatch-manager/), aby przesłać własne pliki wzorów `.pat` i przeglądać całą bibliotekę.

**SOLID** to zwykły wpis na liście wzorów, a nie osobne pole wyboru czy tryb — wybierz go w taki sam sposób, w jaki wybrałbyś ANSI31 lub inny nazwany wzór.

## Właściwości

| Właściwość | Znaczenie |
|------------|-----------|
| Pattern | Nazwa wzoru, ze wspólnego słownictwa wzorów (zobacz [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Skaluje odstępy linii wzoru — większe wartości rozsuwają linie wzoru dalej od siebie |
| Pattern Angle | Obraca wzór niezależnie od konturu |
| Origin X / Origin Y | Gdzie zakotwiczone jest własne powtórzenie wzoru, we współrzędnych rysunku |

Przesuwanie, obracanie, odbijanie lub skalowanie hatch przenosi jego rozmieszczenie wzoru, więc wypełnienie pozostaje wyrównane z konturem — nie musisz ponownie ustawiać skali ani kąta po transformacji.

## Edycja uchwytami konturu

Wybrany hatch chwyta swój kontur w taki sam sposób, w jaki Polyline chwyta swoje wierzchołki — jeden uchwyt w każdym rogu, gdzie spotykają się dwie krawędzie, i jeden pośrodku każdej krawędzi (zamknięta pętla, taka jak hatch okręgu lub elipsy, chwyta zamiast tego w czterech punktach osi).

| Uchwyt | Co robi |
|--------|---------|
| **Róg** | Przesuwa ten róg. Prosta krawędź podąża dokładnie; łuk dopasowuje się ponownie, aby nadal przechodzić przez oba sąsiednie elementy; krawędź elipsy lub splajnu może wylądować tylko gdzieś na własnej krzywej, więc róg przyczepia się do najbliższego na niej punktu |
| **Środek krawędzi — krawędź linii, elipsy lub splajnu** | Przesuwa całą krawędź; krawędzie po obu stronach są przycinane lub wydłużane, aby pozostać z nią połączone |
| **Środek krawędzi — krawędź łuku** | **Wygina** łuk przez kursor zamiast go przesuwać — oba końce pozostają dokładnie tam, gdzie były, a nic innego w konturze się nie porusza |
| **Środek** (cały hatch) | Aktywuje [Move](../move/) dla całego hatch |

Podgląd przeciągania pokazuje kontur jako przerywany zarys zamiast pełnego wypełnienia podczas przeciągania — oryginalne wypełnienie pozostaje widoczne pod spodem, dopóki nie puścisz, ponieważ podgląd może jedynie malować na tym, co już istnieje, nigdy niczego z tego nie usuwać.

## DXF — element HATCH

Hatch są **importowane** z elementów `HATCH`: KulmanLab odczytuje geometrię konturu wraz z nazwą, skalą i kątem wzoru (kody grup DXF 70/41/52) — **nie** odczytuje własnych definicji linii wzoru, które są zapisywane w pliku w sposób wbudowany. Zamiast tego nazwa wzoru jest wyszukiwana we własnej bibliotece wzorów KulmanLab (wbudowane domyślne plus wszystko, co przesłałeś w [Hatch Manager](../hatch-manager/)). Nazwa, której nie ma w Twojej bibliotece, powraca do ANSI31, aby rysunek nadal czytał się jako pokryty hatchem, a notatka jest zapisywana raz.

Pętle ograniczone splajnem, zapisane przez inne aplikacje (typ krawędzi konturu DXF 4), nie są jeszcze odczytywane.

Kreskowania **eksportują się** do DXF jako obiekty `HATCH`. Pętle granicy wychodzą wraz z nazwą wzoru (kod grupy 2), flagą wypełnienia pełnego (70) oraz własnym kątem i skalą tego kreskowania (52/41) — a w odróżnieniu od ścieżki importu zapisywane są też rozwiązane definicje linii wzoru (78, z 53/43/44/45/46/79/49). Ta asymetria jest zamierzona: KulmanLab potrafi odnaleźć nazwę we własnej bibliotece, ale aplikacja odbierająca plik może tego wzoru nie mieć, więc linie podróżują razem z nim.

## Powiązane polecenia

- [Hatch Manager](../hatch-manager/) — przeglądaj bibliotekę wzorów i przesyłaj pliki `.pat`
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — wszystkie przenoszą ze sobą rozmieszczenie wzoru hatch
- [Delete](../delete/) — usuwa hatch bez wpływu na elementy, które tworzyły jego kontur
