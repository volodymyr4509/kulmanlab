---
title: Vector Pins — přichytávání podél vztažných čar procházejících připnutými body
description: Vector Pins umožňují připnout bod přichycení najetím na půl sekundy a poté sledovat kurzor podél přerušovaných vodorovných a svislých vztažných čar procházejících připnutým bodem — zarovnání nové geometrie s existujícími body bez konstrukčních čar.
keywords: [vektorové špendlíky, sledování objektového přichycení, vztažné čáry, sledování zarovnání, sledování přichycení CAD, konstrukční čáry, kulmanlab]
group: interface
order: 2
---

# Vector Pins

**Vector Pins** jsou pomůcka pro kreslení, která umožňuje zarovnat novou geometrii s existujícími body bez kreslení konstrukčních čar. Najeďte na bod přichycení na půl sekundy, čímž jej *připnete* — špendlík pak promítá neviditelné vodorovné a svislé vztažné čáry a kurzor se na ně přichytí, kdykoli se přiblíží. Je to obdoba sledování objektového přichycení z desktopových CAD aplikací v KulmanLab CAD.

Funkce se ovládá přepínačem **Pins** v ovládací liště (vedle Grid, Snap a ANGL). Je **ve výchozím stavu zapnutá** a nastavení se zachovává mezi relacemi.

## Připnutí bodu

1. Spusťte příkaz, který žádá o bod — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/) a tak dále.
2. Přesuňte kurzor nad bod přichycení existující geometrie — koncový bod, střed úsečky nebo značku středu.
3. **Podržte kurzor v klidu 500 ms.** Značka se změní na vyplněný zvýrazněný **čtverec** — bod je nyní připnutý.
4. Opakováním připnete tolik bodů, kolik potřebujete. Každý špendlík dál promítá své vztažné čáry.

Připínání funguje i mimo příkaz: najetí na **úchyt** vybraného objektu jej připne stejným způsobem.

## Sledování podél vztažných čar

Každý připnutý bod promítá dvě neviditelné vztažné čáry — jednu **vodorovnou** a jednu **svislou** — přesně jeho souřadnicemi. Při pohybu kurzoru:

- Do vzdálenosti **12 px** od svislé čáry špendlíku se kurzor na ni přichytí: přes špendlík se napříč celým pohledem nakreslí přerušovaná zvýrazněná čára a **značka X** ukazuje přichycenou polohu. Vaše souřadnice X je nyní *přesně* X špendlíku.
- Totéž platí pro vodorovnou čáru a souřadnici Y špendlíku.
- Poblíž jedné čáry každé orientace — i od **dvou různých špendlíků** — se kurzor přichytí k jejich **průsečíku** a zobrazí se obě přerušované čáry. Tím umístíte bod přesně na (X špendlíku A, Y špendlíku B).

```
                    ┆ (přerušovaná, svislá čára špendlíku ■)
                    ┆
   ■ špendlík A ┄┄┄┄ ✕ ← kurzor přichycen k průsečíku:
                    ┆    X od špendlíku B, Y od špendlíku A
                    ┆
                    ■ špendlík B
```

Přichycené souřadnice se berou přímo ze špendlíku, takže zarovnání je přesné — žádné zaokrouhlování ani odchylky v plovoucí řádové čárce.

## Priorita přichycení

Běžná přichycení ke geometrii — koncový bod, střed úsečky, střed kružnice a průsečík — **mají přednost** před vztažnými čarami špendlíků. Pokud je kurzor blíž k bodovému přichycení než k vztažné čáře, vyhrává bodové přichycení. Sledování špendlíků vyplňuje mezery mezi geometrií, nikdy nebrání přichycení k samotné geometrii.

## Kombinace se zámkem úhlu

Vector pins spolupracují se sledováním úhlu (přepínač **ANGL** v ovládací liště). Když příkaz zamkl kurzor na paprsek sledování úhlu:

- Kurzor zůstává omezen na zamčený směr.
- Přichycení ke špendlíkům se přepne na cílení **průsečíků zamčeného paprsku s vztažnými čarami špendlíků** (pouze před počátkem paprsku).

To odpovídá na otázky jako *„kde protíná směr 45° z mého posledního bodu výšku středu té kružnice?"* — zamkněte úhel a kurzor se zaklikne do průsečíku. Přichycení k paprsku funguje v každém příkazu se zamykáním úhlu: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader a ViewportCopy.

## Životní cyklus špendlíků

Špendlíky jsou určeny pro aktuální operaci, nikoli jako trvalé značky. Všechny špendlíky se vymažou, když:

| Událost | Proč |
|---------|------|
| Spustí se **nový příkaz** | Každá operace začíná s čistou sadou referencí |
| Stiskne se **Escape** | Standardní chování „zruš vše" |
| Přepínač **Pins** se vypne | Vypnutí funkce odstraní její stav |
| Přepnutí mezi **modelovým a papírovým prostorem** | Souřadnice špendlíků jsou specifické pro jeden prostor |

V rámci jednoho příkazu můžete připínat, kreslit, znovu připínat a pokračovat — špendlíky přežijí každé kliknutí u vícebodového příkazu, jako je Polyline.

## Typický postup

Nakreslete úsečku, která začíná přímo pod středem kružnice:

1. Napište `line` (nebo klikněte na tlačítko Line).
2. Najeďte na **značku středu** kružnice na půl sekundy — změní se na zvýrazněný čtverec.
3. Přesuňte kurzor dolů: poblíž svislice kružnice se kurzor zamkne na přerušovanou vztažnou čáru.
4. Klikněte — úsečka začíná přesně na souřadnici X kružnice.
5. Pokračujte v úsečce jako obvykle; špendlík zůstává k dispozici pro další body.

## Poznámky

- 500ms najetí funguje na jakékoli značce přichycení, kterou kurzor dosáhne — včetně bodů přichycení, které se objeví uprostřed příkazu.
- Najetí na již připnutý bod nic nedělá; odepnutí najetím neexistuje. Špendlíky vymažete klávesou **Escape** nebo vypnutím **Pins**.
- Vzdálenost přichycení pro vztažné čáry je stejných 12 pixelů obrazovky, jaké používá běžné bodové přichycení, takže pocit je konzistentní při jakémkoli zvětšení.
- Připnuté body se vykreslují jako zvýrazněné čtverce místo svých běžných značek přichycení.
