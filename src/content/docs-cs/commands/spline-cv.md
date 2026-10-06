---
title: Příkaz Spline CV — kreslení B-splinů umístěním řídicích vrcholů
description: Příkaz Spline CV nakreslí kubický B-spline umístěním řídicích vrcholů. Křivka je k vrcholům přitahována, ale prochází pouze prvním a posledním (upnuté uzly). Každý úchyt CV lze po umístění táhnout a měnit tak tvar křivky. Plná výměna dat s DXF jako objekty SPLINE.
keywords: [CAD příkaz spline, B-spline řídicí vrcholy, upnutý spline CAD, kreslení splinu CAD, objekt SPLINE DXF, úpravy splinu úchyty, kulmanlab]
group: shapes
order: 8
---

# Spline CV

Příkaz `splinecv` nakreslí **kubický B-spline** umístěním řídicích vrcholů (CV). Výsledná křivka je přitahována ke každému CV, ale neprochází jimi — kromě úplně prvního a posledního vrcholu, kde ji **upnuté uzly** ukotvují přesně. Dává vám to intuitivní kontrolu nad tvarem: potáhněte vrchol a křivka se k němu vychýlí, aniž by musela procházet každým bodem.

## Kreslení splinu pomocí řídicích vrcholů

1. Napište `splinecv` do terminálu nebo klikněte na tlačítko **Spline CV** v panelu nástrojů.
2. **Kliknutím umísťujte řídicí vrcholy** — každé kliknutí přidá vrchol. Nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. Dokončíte stisknutím **Enter** (vyžadují se alespoň 2 vrcholy).

```
  CV ●         ● CV
      \       /
       \     /    ← křivka přitahována k CV,
        \   /         ale neprochází jimi
  CV ●   ●   ● CV (začátek/konec: křivka se zde dotýká)
```

Živý náhled se po každém vrcholu aktualizuje při pohybu kurzoru a ukazuje, jak bude spline vypadat s dalším bodem v místě kurzoru. Stisknutím **Escape** zahodíte všechny umístěné vrcholy a příkaz ukončíte.

## Zadávání souřadnic

Místo klikání napište přesnou polohu libovolného řídicího vrcholu:

1. Napište hodnotu X.
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`.
3. Napište hodnotu Y.
4. Stisknutím **Enter** vrchol umístíte.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X |
| `,` | Zamkne X a přejde na zadávání Y |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` / `Space` | Potvrdí napsanou souřadnici (pouze Enter), nebo dokončí spline, pokud neprobíhá žádné zadávání a existují ≥ 2 vrcholy |
| `Escape` | Zahodí všechny vrcholy a ukončí |

## Úprava úchyty — změna tvaru pomocí řídicích vrcholů

Vybraný spline CV nabízí jeden úchyt na každý řídicí vrchol:

| Úchyt | Poloha | Co dělá |
|-------|--------|---------|
| **Řídicí vrchol** | Na pozici každého CV | Tažením přemístíte daný CV — křivka se přetvaruje směrem k nové pozici |

Neexistuje úchyt „přesunout celý spline". K posunu celého splinu použijte příkaz [Move](../move/).

## Výběr splinů CV

| Metoda | Chování |
|--------|---------|
| **Klik** | Vybere, pokud kliknutí padne poblíž kteréhokoli bodu křivky |
| **Tažení doprava** (přísný) | Všechny vzorkové body podél křivky musí ležet uvnitř výběrového rámečku |
| **Tažení doleva** (protínající) | Vybere ji jakákoli část křivky, která protíná hranici výběrového rámečku |

## Podporované editační příkazy

| Příkaz | Co se se splinem stane |
|--------|------------------------|
| [Move](../move/) | Posune všechny řídicí vrcholy o stejné posunutí |
| [Copy](../copy/) | Vytvoří shodný spline na nové pozici |
| [Rotate](../rotate/) | Otočí všechny CV kolem zvoleného základního bodu |
| [Mirror](../mirror/) | Zrcadlí všechny CV podle osy zrcadlení |
| [Scale](../scale/) | Rovnoměrně změní měřítko všech CV od základního bodu |
| [Trim](../trim/) | Ořízne spline v jeho průsečících — každý díl je tatáž křivka na menším úseku |
| [Delete](../delete/) | Odstraní spline |

Spliny podporují **Trim**, ale ne **Offset** ani **Extend**.

## Vlastnosti

**Obecné**

| Vlastnost | Výchozí | Význam |
|----------|---------|--------|
| Color | 256 (ByLayer) | Index barvy ACI |
| Layer | `0` | Přiřazení k hladině |
| Linetype | ByLayer | Pojmenovaný vzor typu čáry |
| Linetype Scale | 1 | Měřítko vzoru typu čáry |
| Thickness | 0 | Tloušťka vytažení |

**Geometrie**

| Vlastnost | Význam |
|----------|--------|
| Degree | Stupeň polynomu — vždy 3 (kubický) |
| Control Vertices | Souřadnice všech CV |
| Fit Points | U splinů CV prázdné; vyplněné pouze u splinů s proloženými body |

## Spline CV vs Spline Fit — který použít

| | Spline CV | Spline Fit |
|---|-----------|------------|
| Křivka prochází body | Pouze prvním a posledním (upnutá) | Každým kliknutým bodem přesně |
| Kontrola tvaru | Tažení CV k dané oblasti | Přesun proložených bodů, jimiž křivka musí procházet |
| Účinek úpravy úchytem | CV se posune → křivka je přitažena | Proložený bod se posune → křivka se znovu proloží |
| Nejvhodnější pro | Hladké estetické křivky, volné cesty | Křivky, které musí procházet konkrétními souřadnicemi |

## DXF — objekt SPLINE (forma s řídicími vrcholy)

Spliny CV se v souboru DXF ukládají jako objekty `SPLINE` s uloženým stupněm, vektorem uzlů a souřadnicemi všech řídicích vrcholů. Všechny vlastnosti — barva, hladina, typ čáry, měřítko typu čáry a tloušťka — se přenášejí beze ztráty. Příznak `splineFlag` je nastaven na `9` (spline CV), takže se forma při opětovném načtení zachová. Každá aplikace DXF, která podporuje objekty `SPLINE` s daty CV, je čte správně.
