---
title: "Příkaz KótovacíStyl — vytváření a správa pojmenovaných kótovacích stylů"
description: "Vytvářejte styly kót CAD pro šipky, vynášecí čáry, středové značky, text, přesnost, zarovnání a DXF DIMSTYLE."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# KótovacíStyl

Příkaz otevře dialog pro vytváření, úpravu, náhled a výběr pojmenovaných kótovacích stylů. Nové lineární, zarovnané, poloměrové, průměrové a úhlové kóty při vytvoření zkopírují aktuální styl; existující kóty s ním nezůstávají živě propojené.

## Otevření dialogu

Zadejte lokalizovaný příkaz do terminálu nebo klikněte na **Kótovací styl** v panelu **Anotace**. Vlevo jsou viditelné styly; zaškrtnutí označuje aktuální a tužka umožňuje přejmenování.

## Čáry a šipky

**Šipka 1 / Šipka 2 · Velikost šipky · Odsazení vynášecí čáry · Přesah vynášecí čáry · Značka středu · Velikost značky středu**

Nastavte samostatně obě šipky, velikost šipky, odsazení a prodloužení vynášecích čar a typ i velikost středové značky (`Žádná`, `Značka` nebo `Čáry`).

## Text

**Styl textu · Písmo · Výška textu · Text v rámečku · Mezera textu · Připojení textu · Text rovnoběžně s kótou · Přesnost · Přesnost úhlů**

Část textu ovládá rychlé vyplnění ze stylu textu, písmo, výšku, tučné, kurzívu, rámeček, mezeru, jednu z devíti poloh připojení, zarovnání s kótovací čarou a lineární i úhlovou přesnost. Styl textu zkopíruje hodnoty jednou, nejde o živý odkaz.

Náhled používá stejné vykreslovače jako plátno. Přepínejte lineární, poloměrový, průměrový a úhlový vzorek a kontrolujte šipky, střed, umístění textu, přesnost a rámečky.

## Vytváření a správa stylů

**Nový** duplikuje vybraný styl. `Standard` nelze přejmenovat ani odstranit a aktuální styl také nelze odstranit. Názvy musí být jedinečné, neprázdné a platné pro DXF. Importované anotativní styly jsou skryté, ale zachované.

## Nastavení aktuálního stylu

**Nastavit aktuální** použije vybraný styl jako šablonu nových kót; seznam v panelu Anotace nabízí stejnou volbu. Hodnoty se kopírují při vytvoření. Dimension Continue dědí celý vzhled základní kóty.

## Uložení nebo zahození

**OK** společně použije přejmenování, přidání, odstranění, vlastnosti a volbu aktuálního stylu. **Zavřít**, kliknutí na pozadí nebo `Escape` změny zahodí.

## Kompatibilita s DXF

KulmanLab importuje a exportuje pojmenované záznamy `DIMSTYLE`, včetně samostatných šipek, vynášecích čar, textu, přesnosti, středových značek, rámečku, odkazu na styl textu a anotativního příznaku. Při importu mají přednost přepsání `DSTYLE` konkrétní entity.

Při exportu používá odkazovaný `STYLE` proměnnou výšku (`40 = 0`) a ukládá poslední výšku do skupiny `42`. Pevná výška stylu textu tak nepřepíše vlastní výšku textu kótovacího stylu.

## Související příkazy

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
