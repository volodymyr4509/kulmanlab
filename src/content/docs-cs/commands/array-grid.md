---
title: Příkaz Array Grid — opakování objektů v řádcích a sloupcích
description: Příkaz Array Grid vytvoří obdélníkovou mřížku kopií z vybraných objektů — počet řádků, sloupců a rozteče mezi nimi napíšete přímo do terminálu, bez výběru bodů.
keywords: [CAD příkaz pole, arraygrid, obdélníkové pole CAD, vzor mřížky CAD, opakování objektů CAD, pole kopií CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

Příkaz `ArrayGrid` vytvoří obdélníkovou mřížku kopií z vybraných objektů — počet řádků, počet sloupců a rozteče mezi nimi zadáte všechny v terminálu. Původní výběr zaujímá buňku řádek 0, sloupec 0; každá další buňka je posunutá kopie.

## Dva způsoby spuštění

**Nejdřív vybrat, pak vytvořit pole** — nejprve vyberte objekty a potom příkaz spusťte:

1. Vyberte na plátně jeden nebo více objektů.
2. Napište `arraygrid` do terminálu (stačí i `arr` — je jednoznačné) nebo klikněte na tlačítko **Array Grid** v panelu nástrojů.
3. Napište počet **řádků** a stiskněte **Enter**.
4. Napište počet **sloupců** a stiskněte **Enter**.
5. Napište **rozteč mezi řádky** a stiskněte **Enter**.
6. Napište **rozteč mezi sloupci** a stiskněte **Enter** — mřížka se vytvoří okamžitě.

**Nejdřív spustit, pak vybrat** — příkaz spusťte bez výběru:

1. Napište `arraygrid` nebo klikněte na tlačítko v panelu nástrojů.
2. **Vyberte objekty** — kliknutím přepínáte jednotlivé objekty, tažením vybíráte podle oblasti.
3. Výběr potvrďte stisknutím **Enter** nebo **Space**.
4. Pokračujte řádky → sloupce → rozteč řádků → rozteč sloupců jako výše.

```
  2 řádky x 3 sloupce:

  [B] [B] [B]   <- řádek 1 (posunuté kopie)
  [A] [A] [A]   <- řádek 0: původní výběr, kopie vpravo
```

> Terminál potřebuje jen tolik písmen, aby byl příkaz jednoznačný — napsáním `arr` a stisknutím **Enter** se Array Grid spustí přímo, protože žádný jiný příkaz nezačíná těmito třemi písmeny (Arc, Area, Align a Angle se rozcházejí dříve).

## Řádky, sloupce a rozteče

| Výzva | Přijímá | Poznámky |
|-------|---------|----------|
| Rows | Kladná celá čísla (1, 2, 3…) | Pouze číslice — bez desetinné tečky a znaménka |
| Columns | Kladná celá čísla (1, 2, 3…) | Pouze číslice — bez desetinné tečky a znaménka |
| Row spacing | Desetinné číslo se znaménkem (např. `10`, `-5.5`) | Vzdálenost mezi řádky; záporná hodnota obrátí směr |
| Column spacing | Desetinné číslo se znaménkem (např. `10`, `-5.5`) | Vzdálenost mezi sloupci; záporná hodnota obrátí směr |

S 1 řádkem a 1 sloupcem se nevytvoří žádné kopie — příkaz skončí, aniž by změnil výkres.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Enter` / `Space` | Potvrdí výběr a přejde na výzvu k zadání řádků |
| `0`–`9` | Zadání číslic pro řádky nebo sloupce |
| `0`–`9`, `.`, `-` | Zadání číslic pro rozteč řádků/sloupců (`-` pouze jako první znak) |
| `Backspace` | Smaže poslední zadaný znak aktuální výzvy |
| `Enter` | Potvrdí aktuální výzvu a přejde na další |
| `Escape` | Vymaže zadané hodnoty řádků/sloupců/rozteče a vrátí se do fáze výběru |

## Výběr během příkazu

| Metoda | Chování |
|--------|---------|
| **Klik** | Přepíná objekt pod kurzorem do výběru / z výběru |
| **Tažení doprava** (přísný výběr) | Přidá objekty, které leží celé uvnitř rámečku |
| **Tažení doleva** (výběr křížením) | Přidá objekty, které protínají hranici rámečku |
| **Enter** / **Space** | Potvrdí výběr a přejde na výzvu k zadání řádků |

## Po vytvoření pole

Nové kopie se přidají do výkresu a příkaz se ukončí — původní výběr se zruší. Spusťte **Array Grid** znovu, nebo zahajte nový příkaz.

## Array Grid vs Copy

| | Array Grid | Copy |
|---|-----------|------|
| Výběr bodů | Žádný — řádky, sloupce a rozteče se píšou | Základní bod a cíl se klikají (nebo píšou) |
| Vytvořené kopie | Řádky × sloupce − 1 | Přesně 1 na jednu operaci kopírování |
| Rozvržení | Pravidelná obdélníková mřížka | Kdekoli, s libovolným odsazením |
| Nejvhodnější pro | Opakování jednotky v pravidelném vzoru (otvory, dlaždice, spojovací prvky) | Jediný duplikát na libovolném místě |

## Podporované objekty

Array Grid funguje na všech typech objektů. Všechny objekty interně implementují `translate(dx, dy)`, stejnou operaci, kterou používají [Copy](../copy/) a [Move](../move/), takže žádný není vyloučen.
