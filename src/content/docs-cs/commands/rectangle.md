---
title: Příkaz Rectangle — kreslení obdélníků zarovnaných s osami v KulmanLab CAD
description: Příkaz Rectangle vytvoří obdélník zarovnaný s osami ze dvou protilehlých rohů. Výsledkem je uzavřená LWPOLYLINE se čtyřmi vrcholy — po umístění shodná s jakoukoli jinou polyline, takže se na ni vztahují všechny editační příkazy polyline.
keywords: [CAD příkaz rectangle, kreslení obdélníku CAD, obdélník zarovnaný s osami, uzavřená polyline CAD, LWPOLYLINE DXF, úprava obdélníku úchyty, kulmanlab]
group: shapes
order: 3
---

# Rectangle

Příkaz `rectangle` nakreslí obdélník zarovnaný s osami, zadaný dvěma kliknutími do protilehlých rohů. Výsledek se uloží jako **uzavřená `LWPOLYLINE`** se čtyřmi vrcholy — po jednom v každém rohu. Neexistuje žádný vyhrazený typ objektu pro obdélník: po vytvoření se tvar chová přesně jako jakákoli jiná [Polyline](../polyline/) a vztahují se na něj všechny úpravy polyline.

## Kreslení obdélníku

1. Napište `rectangle` do terminálu nebo klikněte na tlačítko **Rectangle** v panelu nástrojů.
2. **Klikněte na první roh**, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. **Klikněte na protilehlý roh** — obdélník se okamžitě umístí a příkaz skončí. Zadávání souřadnic funguje i zde. Nebo místo toho stiskněte `D` a napište přesnou šířku a výšku — viz [Zadání rozměrů](#zadání-rozměrů) níže.

```
  ● (první kliknutí)─────────┐
  |                          |
  |   živý náhled sleduje    |
  |   kurzor po kroku 2      |
  └──────────────────────────● (druhé kliknutí)
```

Dvě kliknutí mohou být libovolná dvojice úhlopříčně protilehlých rohů — vlevo nahoře + vpravo dole, nebo vlevo dole + vpravo nahoře atd. Na pořadí nezáleží.

## Zadávání souřadnic

V kterémkoli kroku rohu můžete napsat přesnou polohu:

1. Napište hodnotu X.
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`.
3. Napište hodnotu Y.
4. Stisknutím **Enter** roh umístíte.

## Zadání rozměrů

Místo kliknutí na druhý roh stiskněte `D` hned po prvním rohu, čímž přepnete na zadání šířky × výšky psaním:

1. **Napište šířku** a stiskněte **Enter**.
2. **Napište výšku** a stiskněte **Enter** — výzva nyní žádá o výběr směru obdélníku.
3. **Přesouvejte kurzor** kolem prvního rohu — obdélník se živě zobrazuje v tom ze čtyř kvadrantů (vlevo nahoru, vpravo nahoru, vlevo dolů, vpravo dolů), nad kterým je kurzor.
4. **Kliknutím** jej v tomto směru umístíte.

Dalším stisknutím `D` v kroku výběru směru znovu zadáte šířku a výšku, předvyplněné tím, co jste právě napsali.

Šířka a výška se pamatují z posledního obdélníku, který jste zadali rozměry: v obou výzvách se předchozí hodnota objeví předvyplněná a připravená k potvrzení klávesou **Enter**, nebo můžete začít psát a nahradit ji novým číslem.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X, nebo (v režimu Dimension) pole šířky/výšky |
| `,` | Zamkne X a přejde na zadávání Y |
| `D` | Po prvním rohu přepne na zadání rozměrů; v kroku výběru směru znovu zadá šířku/výšku |
| `Enter` | Potvrdí napsanou souřadnici, šířku nebo výšku |
| `Escape` | Zruší |

Strany jsou vždy vodorovné a svislé — pro příkaz rectangle neexistuje zamykání úhlu.

## Úprava úchyty — změna tvaru po vytvoření

Vybraný obdélník zobrazuje úchyty v každém vrcholu a ve středu každé strany:

| Úchyt | Poloha | Co dělá |
|-------|--------|---------|
| **Roh** | Každý ze 4 vrcholů | Tažením přemístíte daný vrchol; dvě sousední strany se natáhnou, aby jej následovaly — protilehlý roh zůstane pevný |
| **Střed strany** | Střed každé ze 4 stran | Tažením posunete oba koncové body dané strany společně, při zachování délky a úhlu strany |

Tažení úchytu rohu změní obdélník na nepravoúhlý čtyřúhelník. Pokud potřebujete jen obdélník jiné velikosti, táhněte roh tak, aby strany zůstaly přibližně ortogonální, nebo jej smažte a nakreslete nový.

## Výběr obdélníků

Protože je obdélník polyline, výběr funguje stejně:

| Metoda | Chování |
|--------|---------|
| **Klik** | Vybere, pokud kliknutí padne na kteroukoli ze čtyř stran |
| **Tažení doprava** (přísný) | Všechny čtyři vrcholy musí ležet uvnitř výběrového rámečku |
| **Tažení doleva** (protínající) | Jakákoli strana, která protíná hranici rámečku, vybere celý obdélník |

## Podporované editační příkazy

Platí všechny editační příkazy polyline. Trim a Extend jsou určeny pouze pro [Line](../line/) a na obdélnících nefungují:

| Příkaz | Co se s obdélníkem stane |
|--------|--------------------------|
| [Move](../move/) | Posune všechny čtyři vrcholy o stejné posunutí |
| [Copy](../copy/) | Vytvoří shodný obdélník na nové pozici |
| [Rotate](../rotate/) | Otočí všechny čtyři vrcholy kolem zvoleného základního bodu |
| [Mirror](../mirror/) | Zrcadlí všechny čtyři vrcholy podle osy zrcadlení |
| [Scale](../scale/) | Rovnoměrně změní měřítko všech čtyř vrcholů od základního bodu |
| [Offset](../offset/) | Vytvoří rovnoběžný (zmenšený nebo zvětšený) obdélník v pevné vzdálenosti |
| [Delete](../delete/) | Odstraní obdélník z výkresu |

## Vlastnosti

Když je obdélník vybrán, panel vlastností zobrazí stejná pole jako u jakékoli polyline:

**Obecné**

| Vlastnost | Výchozí | Význam |
|----------|---------|--------|
| Color | 256 (ByLayer) | Index barvy ACI |
| Layer | `0` | Přiřazení k vrstvě |
| Linetype | ByLayer | Pojmenovaný vzor typu čáry |
| Linetype Scale | 1 | Měřítko vzoru typu čáry |
| Thickness | 0 | Tloušťka vytažení |

**Geometrie**

| Vlastnost | Význam |
|----------|--------|
| Closed | U obdélníku vždy `true` |
| Vertex Count | U neupraveného obdélníku vždy `4` |
| Vertices | Souřadnice všech čtyř rohů |

## Rectangle vs Polyline vs Line

| | Rectangle | Polyline | Line |
|---|-----------|---------|------|
| Jak kreslit | 2 kliknutí (rohy) | Kliknutí na každý vrchol | Kliknutí na každý koncový bod |
| Typ objektu | Uzavřená `LWPOLYLINE` | Otevřená nebo uzavřená `LWPOLYLINE` | `LINE` na segment |
| Strany vždy ortogonální | Ano (při vytvoření) | Ne | Ne |
| Trim / Extend | Ne | Ne | Ano |
| Nejvhodnější pro | Rámečky, rámy, obdélníkové oblasti | Libovolné obrysy a cesty | Jednotlivé segmenty, konstrukční čáry |

## DXF — objekt LWPOLYLINE

Obdélníky se ukládají jako uzavřené objekty `LWPOLYLINE` se čtyřmi vrcholy. Všechny vlastnosti — souřadnice vrcholů, barva, vrstva, typ čáry, měřítko typu čáry a tloušťka — se přenášejí beze ztráty.

V DXF neexistuje vyhrazený typ `RECTANGLE`. Když se soubor znovu otevře, tvar se objeví jako uzavřená čtyřvrcholová polyline, nikoli jako obdélník. Každý prohlížeč či editor DXF, který podporuje `LWPOLYLINE` (LibreCAD, FreeCAD apod.), jej zobrazí správně.
