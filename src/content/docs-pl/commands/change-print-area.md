---
title: ChangePrintArea — przycięcie eksportu Menedżera druku do prostokąta
description: Polecenie ChangePrintArea wybiera dwa przeciwległe narożniki na kanwie, aby ustawić obszar eksportowany przez Menedżera druku. Obsługuje wpisywane współrzędne X,Y i przyciąganie oraz zapamiętuje obszar osobno dla przestrzeni modelu i każdego układu.
keywords: [obszar wydruku CAD, przycinanie eksportu CAD, polecenie change print area, przycinanie menedżera druku, obszar eksportu CAD, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

Polecenie `ZmieńObszarWydruku` ustawia prostokątny obszar eksportowany przez [Menedżera druku](../print-manager/). Działa na pustej kanwie przy ukrytym Menedżerze druku i przyjmuje dwa przeciwległe narożniki — te same dwa kliknięcia co [Rectangle](../rectangle/), więc wpisywane współrzędne i przyciąganie działają dokładnie tak samo.

## Wybór obszaru

1. Wpisz `ZmieńObszarWydruku` w terminalu lub kliknij **Change Area** na pasku bocznym Menedżera druku. Menedżer druku ukrywa się, a kanwa staje się interaktywna.
2. **Kliknij pierwszy narożnik** lub wpisz `X,Y` i naciśnij **Enter**, aby podać dokładną współrzędną.
3. **Kliknij przeciwległy narożnik** lub ponownie wpisz `X,Y`.

Menedżer druku otwiera się ponownie z nowym obszarem w podglądzie, który dopasowuje się do jego dokładnych proporcji.

Narożniki przyciągają się do uchwytów i przecięć jak każdy inny punkt, więc można przyciąć do narysowanej geometrii, a nie na oko. Kolejność narożników nie ma znaczenia — przeciwległe narożniki wyznaczają ten sam prostokąt.

Naciśnij `Escape`, aby anulować. Nic nie zostaje zapisane, więc Menedżer druku otworzy się z obszarem, który już miał.

## Gdzie obszar jest zapamiętywany

Wybór jest zapisywany dla każdego kontekstu osobno, nie globalnie:

| Kontekst | Miejsce |
|---|---|
| Przestrzeń modelu | Jedno wspólne miejsce |
| Każdy układ | Własne, oddzielnie przechowywane miejsce |

Ponowne otwarcie Menedżera druku w tym samym układzie — lub w modelu — przywraca ostatnie przycięcie tego kontekstu zamiast je resetować, a przełączanie między układami nie narusza obszaru żadnego z nich.

Jest to przechowywane tylko w pamięci. Przeładowanie strony czyści wszystkie zapisane obszary, a Menedżer druku wraca do wartości domyślnych poniżej.

## Obszar domyślny

Gdy dla bieżącego kontekstu nic nie zapisano, Menedżer druku otwiera się na:

| Kontekst | Domyślnie |
|---|---|
| Przestrzeń modelu | Prostokąt ograniczający wszystkie obiekty — ten sam zasięg, do którego przybliża [Fit](../fit/) |
| Każdy układ | Cały arkusz |

## Powiązane polecenia

| Polecenie | Działanie |
|---|---|
| [Print Manager](../print-manager/) | Okno eksportu, którego dotyczy ten obszar |
| [Rectangle](../rectangle/) | To samo wskazanie dwóch narożników, ale rysuje polilinię |
| [Fit](../fit/) | Przybliża do zasięgu domyślnego dla przestrzeni modelu |
