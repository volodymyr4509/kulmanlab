---
title: Siatka i przyciąganie — Wyrównywanie rysunków do siatki
description: Przełączniki Siatka i Przyciąganie w KulmanLab CAD nakładają siatkę odniesienia na płótno i blokują ruch kursora do punktów siatki. Odstępy siatki dostosowują się automatycznie do bieżącego poziomu powiększenia, aby zawsze pokazywać okrągłe wartości modelu.
keywords: [siatka CAD, przyciąganie do siatki, odstępy siatki, narzędzia rysowania, kulmanlab, kropki siatki, przyciąganie ortogonalne]
group: interface
order: 1
---

# Siatka i przyciąganie

Dwa przyciski przełączania na pasku sterowania pozwalają nakładać siatkę odniesienia i blokować kursor do jej przecięć podczas rysowania.

| Przycisk | Co robi |
|----------|---------|
| **Siatka** | Pokazuje wizualną siatkę kropek lub linii na płótnie |
| **Przyciąganie** | Blokuje kursor do najbliższego punktu siatki, gdy nie ma bliżej geometrycznego punktu przyciągania |

Oba przełączniki są niezależne — możesz pokazać siatkę bez przyciągania, przyciągać bez pokazywania siatki lub używać obu razem.

## Włączanie siatki i przyciągania

Kliknij **Siatka** lub **Przyciąganie** na pasku narzędzi sterowania. Aktywny stan jest podświetlony. Ustawienia są zachowywane między sesjami.

Gdy **Przyciąganie** jest włączone, siatka automatycznie przełącza swój wyświetlacz z linii na **kropki** — kropki oznaczają dokładne punkty, do których będzie przyciągał się kursor.

## Adaptacyjne odstępy siatki

Odstępy siatki dostosowują się automatycznie podczas powiększania, aby linie siatki były zawsze w wygodnej odległości na ekranie (~40 px). Krok jest zawsze "ładną" liczbą — wielokrotnością 1, 2 lub 5 przy dowolnej potędze dziesięciu:

| Przykładowe powiększenie / skala modelu | Krok siatki |
|---------------------------|-----------|
| Pomniejszone (duży obszar) | 100, 500, 1000 ... |
| Średnie powiększenie | 10, 20, 50 ... |
| Powiększone (drobny szczegół) | 1, 2, 5 ... |
| Bardzo blisko | 0,1, 0,2, 0,5 ... |

Oznacza to, że każdy punkt przyciągania trafia na okrągłą współrzędną w przestrzeni modelu — nie akumulują się przesunięcia zmiennoprzecinkowe.

## Priorytet przyciągania

**Przyciąganie do punktów końcowych i przecięć ma zawsze pierwszeństwo przed siatką.** Kursor przyciąga do punktu siatki tylko wtedy, gdy nie jest blisko żadnego kandydata przyciągania geometrycznego (punkt końcowy, punkt środkowy, środek lub przecięcie).

Oznacza to, że możesz rysować z włączonym przyciąganiem do siatki i nadal precyzyjnie przyciągać do istniejącej geometrii, gdy kursor przejdzie wystarczająco blisko. Siatka jest rezerwą, nie nadpisaniem.

## Tryb układu

- **Przestrzeń modelu** — kropki lub linie wypełniają cały widoczny obszar płótna.
- **Przestrzeń układu (papieru)** — kropki są przycinane do prostokąta papieru i nie rozciągają się poza niego.
- **Wewnątrz okna widoku** — siatka podąża za układem współrzędnych modelu przy skali okna widoku, więc kropki wyrównują się z tymi samymi jednostkami modelu niezależnie od powiększenia okna widoku.

## Typowy przepływ pracy

1. Włącz **Siatkę** i **Przyciąganie** przed rozpoczęciem rysunku wymagającego regularnych odstępów.
2. Powiększ do poziomu, gdzie krok siatki odpowiada żądanemu przyrostowi (np. powiększ, aż kropki są 10 jednostek od siebie).
3. Rysuj — kursor automatycznie przyciąga się do punktów siatki. Istniejąca geometria nadal przyciąga normalnie, gdy jesteś blisko niej.
4. Wyłącz **Przyciąganie** gdy potrzebujesz swobodnego ruchu kursora lub chcesz przyciągać tylko do geometrii.
