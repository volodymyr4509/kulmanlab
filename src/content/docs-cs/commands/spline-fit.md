---
title: Spline Fit — kreslení interpolačních splinů přes kliknuté body
description: Příkaz Spline Fit nakreslí kubický spline, který prochází každým kliknutým bodem přesně. Uvnitř se křivka ukládá jak s proloženými body, tak s vypočtenými řídicími vrcholy. Tažení úchytu proloženého bodu znovu proloží celou křivku. Plná výměna dat s DXF jako objekty SPLINE.
keywords: [CAD příkaz spline fit, interpolační spline CAD, spline přes body, kreslení hladké křivky CAD, SPLINE DXF proložené body, úpravy splinu úchyty, kulmanlab]
group: shapes
order: 9
---

# Spline Fit

Příkaz `splinefit` nakreslí kubický spline, který prochází každým bodem, na který kliknete — interpolační křivku. Na rozdíl od [Spline CV](../spline-cv/), kde je křivka k řídicím vrcholům pouze přitahována, je zde křivka nucena zasáhnout každou kliknutou souřadnici přesně. Uvnitř editor proloží řídicí vrcholy tak, aby toho dosáhl, a tyto CV se ukládají do souboru DXF spolu s proloženými body.

## Kreslení splinu přes proložené body

1. Napište `splinefit` do terminálu nebo klikněte na tlačítko **Spline Fit** v panelu nástrojů.
2. **Kliknutím umísťujte proložené body** — křivka projde každým z nich. Nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. Dokončíte stisknutím **Enter** (vyžadují se alespoň 2 body).

```
  ●──────●──────●──────●  ← křivka prochází přesně každým kliknutím
  p1     p2     p3     p4
```

Živý náhled ukazuje aktuální interpolovanou křivku při pohybu kurzoru, včetně předpokládaného dalšího bodu v místě kurzoru. Stisknutím **Escape** zahodíte všechny umístěné body a příkaz ukončíte.

## Zadávání souřadnic

Místo klikání napište přesnou polohu libovolného proloženého bodu:

1. Napište hodnotu X.
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`.
3. Napište hodnotu Y.
4. Stisknutím **Enter** proložený bod umístíte.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X |
| `,` | Zamkne X a přejde na zadávání Y |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` / `Space` | Potvrdí napsanou souřadnici (pouze Enter), nebo dokončí spline, pokud neprobíhá žádné zadávání a existují ≥ 2 body |
| `Escape` | Zahodí všechny body a ukončí |

## Úprava úchyty — změna tvaru pomocí proložených bodů

Vybraný spline Fit nabízí jeden úchyt na každý proložený bod:

| Úchyt | Poloha | Co dělá |
|-------|--------|---------|
| **Proložený bod** | Na každé kliknuté pozici | Tažením přemístíte daný proložený bod — celá křivka se znovu proloží tak, aby prošla novou pozicí |

Tažení jednoho úchytu znovu proloží celou křivku, nejen sousední segmenty. To se liší od úprav úchyty u polyline, kde přesun vrcholu mění tvar jen dvou sousedních segmentů.

Neexistuje úchyt „přesunout celý spline". K posunu celého splinu použijte příkaz [Move](../move/).

## Výběr splinů Fit

| Metoda | Chování |
|--------|---------|
| **Klik** | Vybere, pokud kliknutí padne poblíž kteréhokoli bodu křivky |
| **Tažení doprava** (přísný) | Všechny vzorkové body podél křivky musí ležet uvnitř výběrového rámečku |
| **Tažení doleva** (protínající) | Vybere ji jakákoli část křivky, která protíná hranici výběrového rámečku |

## Podporované editační příkazy

| Příkaz | Co se se splinem stane |
|--------|------------------------|
| [Move](../move/) | Posune všechny proložené body i přepočtené CV o stejné posunutí |
| [Copy](../copy/) | Vytvoří shodný spline na nové pozici |
| [Rotate](../rotate/) | Otočí všechny proložené body kolem zvoleného základního bodu |
| [Mirror](../mirror/) | Zrcadlí všechny proložené body podle osy zrcadlení |
| [Scale](../scale/) | Rovnoměrně změní měřítko všech proložených bodů od základního bodu |
| [Delete](../delete/) | Odstraní spline |

Spliny nepodporují **Offset**, **Trim** ani **Extend**.

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
| Fit Points | Souřadnice všech kliknutých bodů, jimiž křivka prochází |
| Control Vertices | Interně vypočtené CV používané k vykreslení křivky |

## Spline Fit vs Spline CV — který použít

| | Spline Fit | Spline CV |
|---|------------|-----------|
| Křivka prochází body | Každým kliknutým bodem přesně | Pouze prvním a posledním (upnutá) |
| Účinek úpravy úchytem | Proložený bod se posune → celá křivka se znovu proloží | CV se posune → křivka je přitažena k nové pozici |
| Předvídatelnost tvaru | Vysoká — křivka sleduje kliknutí | Nižší — křivka za CV zaostává |
| Nejvhodnější pro | Křivky, které musí procházet konkrétními souřadnicemi | Hladké estetické křivky, volné cesty |

## DXF — objekt SPLINE (forma s proloženými body)

Spliny Fit se v souboru DXF ukládají jako objekty `SPLINE` s uloženými souřadnicemi proložených bodů i vypočtenými řídicími vrcholy. Příznak `splineFlag` je nastaven na `8` (spline s proloženými body), takže aplikace při opětovném načtení ví, kterou sadu bodů zobrazit jako upravitelné úchyty. Všechny vlastnosti — barva, hladina, typ čáry, měřítko typu čáry a tloušťka — se přenášejí beze ztráty. Aplikace DXF, které podporují spliny s proloženými body (LibreCAD, FreeCAD), zobrazí proložené body jako primární upravitelná data.
