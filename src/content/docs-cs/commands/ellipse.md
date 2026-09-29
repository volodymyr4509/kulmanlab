---
title: Příkaz Ellipse — kreslení otočených elips ze středu a dvou os
description: Příkaz Ellipse nakreslí elipsu na tři kliknutí — střed, koncový bod první osy (v libovolném směru) a délka druhé osy. Obě osy jsou vždy na sebe kolmé. Každá poloosa má po umístění vlastní úchyt pro nezávislou změnu velikosti. Plná výměna dat s DXF jako objekty ELLIPSE.
keywords: [CAD příkaz elipsa, kreslení elipsy CAD, otočená elipsa CAD, osy elipsy, objekt ELLIPSE DXF, úpravy elipsy úchyty, poměr os, kulmanlab]
group: shapes
order: 6
---

# Ellipse

Příkaz `ellipse` nakreslí elipsu na tři kliknutí: střed, koncový bod první (hlavní) poloosy v libovolném úhlu a délku druhé (vedlejší) poloosy. Obě osy jsou vždy navzájem kolmé — směr druhé osy se odvodí automaticky z první.

## Kreslení elipsy

1. Napište `ellipse` do terminálu nebo klikněte na tlačítko **Ellipse** v panelu nástrojů.
2. **Klikněte na střed**, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. **Klikněte na koncový bod první osy** — určí směr i délku první poloosy. Zadávání souřadnic funguje i zde.
4. **Nastavte délku druhé osy** — přesuňte kurzor kolmo k první ose a klikněte, nebo napište délku.

```
               ● ← koncový bod první osy (krok 3)
              /
  střed ●   /  ← první osa (libovolný úhel)
            |
            ● ← kurzor zde určuje délku druhé osy (krok 4)
```

Elipsa se umístí po kroku 4 a příkaz se ukončí.

## Zadání os — kliknutím, souřadnicí nebo napsanou délkou

**Střed (krok 2):** klikněte, nebo napište `X,Y` pro přesnou polohu.

**Koncový bod první osy (krok 3):** klikněte, nebo napište `X,Y` pro přesnou souřadnici. Zamknutí úhlu také přichytává k násobkům 45° — při zamknutí napište délku a stiskněte **Enter**, čímž bod umístíte přesně na danou vzdálenost.

**Druhá osa (krok 4):** napsaná délka je vždy k dispozici — zámek úhlu není potřeba. Směr je již pevně kolmý k první ose; psaní nastavuje pouze délku.

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.` | Připojí číslici k délce osy (fáze druhé osy) |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Umístí koncový bod osy na napsanou délku |

## Zadávání souřadnic (střed a koncový bod první osy)

1. Napište hodnotu X.
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`.
3. Napište hodnotu Y.
4. Potvrďte stisknutím **Enter**.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X (fáze středu/první osy), nebo délky osy při zamknutém úhlu |
| `,` | Zamkne X a přejde na zadávání Y |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Potvrdí napsanou souřadnici nebo délku |
| `Escape` | Zruší a resetuje |

## Úprava úchyty — nezávislá změna velikosti os

Vybraná elipsa nabízí pět úchytů:

| Úchyt | Počet | Co dělá |
|------|-------|---------|
| **Střed** | 1 | Přesune celou elipsu; obě osy zůstanou beze změny |
| **Koncové body hlavní osy** | 2 (protilehlé konce delší osy) | Tažením změníte délku hlavní poloosy; absolutní velikost vedlejší osy zůstane stejná |
| **Koncové body vedlejší osy** | 2 (protilehlé konce kratší osy) | Tažením změníte délku vedlejší poloosy; hlavní osa zůstane beze změny |

Úchyty hlavní a vedlejší osy jsou nezávislé — tvar elipsy můžete změnit bez opětovného spuštění příkazu.

## Výběr elips

| Metoda | Chování |
|--------|---------|
| **Klik** | Vybere, pokud kliknutí padne blízko obrysu elipsy |
| **Tažení doprava** (přísný) | Obalový obdélník elipsy zarovnaný s osami se musí celý vejít do výběrového rámečku |
| **Tažení doleva** (protínající) | Vybere ji jakákoli část obrysu elipsy, která protíná hranici výběrového rámečku |

## Podporované editační příkazy

| Příkaz | Co se s elipsou stane |
|--------|----------------------|
| [Move](../move/) | Posune střed; obě osy beze změny |
| [Copy](../copy/) | Vytvoří shodnou elipsu s novým středem |
| [Rotate](../rotate/) | Otočí polohu středu i vektor hlavní osy o stejný úhel |
| [Mirror](../mirror/) | Zrcadlí střed a přepočítá směr hlavní osy podle osy zrcadlení |
| [Scale](../scale/) | Změní měřítko polohy středu a vynásobí obě délky poloos zadaným činitelem |
| [Offset](../offset/) | Vytvoří soustřednou elipsu odsazenou ven nebo dovnitř o pevnou vzdálenost |
| [Delete](../delete/) | Odstraní elipsu |

## Vlastnosti

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
| Center X / Center Y | Střed elipsy |
| Major Axis X / Major Axis Y | Vektor od středu ke koncovému bodu hlavní osy (kóduje směr i délku) |
| Axis Ratio | Poměr vedlejší poloosy k hlavní poloose (0 < poměr ≤ 1) |
| Start Angle / End Angle | Parametrické úhly ve stupních; u celé elipsy jsou 0°/360° |

## Ellipse vs Circle — kdy použít kterou

| | Ellipse | Circle |
|---|---------|--------|
| Osy | Dvě nezávislé poloosy v libovolném úhlu | Jeden poloměr, symetrická |
| Otočení | Lze umístit v libovolném úhlu | Bez otočení |
| Zadání psaním | Délka pro každou osu | Pouze poloměr |
| Změna velikosti úchytem | Hlavní a vedlejší nezávisle | Všechny čtyři hlavní body stejně |
| Nejvhodnější pro | Šikmé pohledy, oválné prvky, otvory v perspektivě | Souměrné kruhové prvky |

## DXF — objekt ELLIPSE

Elipsy se v souboru DXF ukládají jako objekty `ELLIPSE`. Formát uchovává střed, celý vektor hlavní osy (směr + délku) a poměr os. Otočení, tvar i všechny vlastnosti stylu se přenášejí beze ztráty. Kružnice se **neukládá** jako degenerovaná elipsa — oba typy objektů zůstávají v modelu DXF odlišné.
