---
title: Příkaz Dimension Aligned — kóty skutečné vzdálenosti v libovolném úhlu
description: Příkaz Dimension Aligned měří skutečnou přímou vzdálenost mezi dvěma body. Kótovací čára vede rovnoběžně s přímkou p1→p2 v libovolném úhlu — na rozdíl od Dimension Linear, která je omezena na vodorovný nebo svislý směr. Plná výměna dat s DXF jako objekty DIMENSION.
keywords: [CAD zarovnaná kóta, dimaligned, šikmá kóta CAD, kóta skutečné vzdálenosti, kóta pod úhlem CAD, kulmanlab]
group: markup
order: 5
---

# Dimension Aligned

Příkaz `dimaligned` umístí kótu, která měří **skutečnou přímou vzdálenost** mezi dvěma body. Kótovací čára vede rovnoběžně s přímkou spojující oba body, takže může mít libovolný úhel. To je klíčový rozdíl oproti [Dimension Linear](../dim-linear/), která je omezena na vodorovný nebo svislý směr.

## Anatomie zarovnané kóty

```
     ●  p2
    /|
   / |  (rozměrová čára 2, kolmá na kótovací čáru)
  /  |
 /←5.00→/
/  /
●  /  (rozměrová čára 1, kolmá na kótovací čáru)
p1
```

- **Rozměrové čáry** — kolmé na kótovací čáru, vedené z každého měřeného bodu.
- **Kótovací čára** — rovnoběžná s p1→p2, odsazená na jednu stranu polohou kurzoru.
- **Hodnota** — skutečná euklidovská vzdálenost `|p1 – p2|`.

## Umístění zarovnané kóty

1. Napište `dimaligned` do terminálu nebo klikněte na tlačítko **Dimension Aligned** v panelu nástrojů.
2. **Klikněte na počátek první rozměrové čáry** (p1), nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. **Klikněte na počátek druhé rozměrové čáry** (p2). Zadávání souřadnic funguje i zde.
4. **Přesuňte kurzor** na jednu stranu a nastavte kolmé odsazení kótovací čáry.
5. **Klikněte** pro umístění, nebo napište vzdálenost odsazení a stiskněte **Enter** pro přesné umístění.

## Zadání vzdálenosti odsazení

Napište během umísťování číslo, abyste kótovací čáru zafixovali v přesné kolmé vzdálenosti od přímky p1→p2:

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.` | Připojí číslici k odsazení |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` / `Space` | Umístí kótu se zadaným odsazením |

Strana kurzoru určuje, na které straně se kótovací čára objeví.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X (fáze p1/p2), nebo vzdálenosti odsazení (fáze umístění) |
| `,` | Zamkne X a přejde na zadávání Y (fáze p1/p2) |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` / `Space` | Potvrdí zadanou souřadnici nebo odsazení |
| `Escape` | Zruší |

## Dimension Aligned vs Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Úhel kótovací čáry | Rovnoběžná s p1→p2 — libovolný úhel | Vždy vodorovná nebo svislá |
| Měří | Skutečnou euklidovskou vzdálenost | Pouze složku X nebo Y |
| Zámek orientace V/S | Ne | Ano — klávesy `H` a `V` |
| Nejvhodnější pro | Šikmé prvky, šikmé řezy | Ortogonální rozvržení, díly zarovnané k mřížce |

## Úprava popisku — jednoduchý režim

**Dvojitým kliknutím** na umístěnou zarovnanou kótu otevřete textový editor v **jednoduchém** režimu. Editor je předvyplněn aktuální vykreslenou hodnotou, takže kurzor umístíte a hodnotu upravíte přímo.

| Funkce | Chování |
|--------|---------|
| Bold / Italic / Font / Height | Použijí se na **celý** popisek najednou |
| Formátování jednotlivých znaků | Nepodporováno |
| `Enter` | Potvrdí hodnotu a zavře editor |
| Víceřádkový text | Nepodporováno |

Úplný přehled najdete v [Textový editor — jednoduchý režim](../../interface/text-editor/#jednoduchý-režim).

## Řetězení kót

Chcete-li přidat další kóty navazující od druhé rozměrové čáry této kóty, použijte [Dimension Continue](../dim-continue/) — zamkne se na stejný měřicí úhel jako tato zarovnaná kóta.

## DXF — objekt DIMENSION (zarovnaný typ)

Zarovnané kóty se ukládají jako objekty `DIMENSION` s `dimType = 1` (zarovnaná). Počátky rozměrových čar, poloha kótovací čáry, poloha textu, naměřená hodnota, otočení, styl šipek i všechny příznaky zobrazení se přenášejí beze ztráty.
