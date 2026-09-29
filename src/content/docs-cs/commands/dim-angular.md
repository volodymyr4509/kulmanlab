---
title: Dimension Angular — měření úhlů mezi úsečkami, oblouky a kružnicemi
description: Příkaz DimensionAngular umístí anotaci úhlové kóty na úsečky, oblouky nebo kružnice. Podporuje režimy úhlu dvou úseček, rozsahu oblouku a výseče kružnice.
keywords: [úhlová kóta CAD, kóta úhlu, měření úhlu mezi úsečkami, DimensionAngular, kóta oblouku, anotace úhlu, kulmanlab úhlová kóta]
group: markup
order: 9
---

# Dimension Angular

Příkaz `DimensionAngular` umístí do výkresu anotaci **úhlové kóty** ve tvaru oblouku. Měří a popisuje úhel mezi dvěma úsečkami, rozsah oblouku nebo výseč kružnice.

## Jak příkaz aktivovat

Klikněte na tlačítko **Dimension Angular** v panelu nástrojů v panelu **Annotate**, nebo napište `DimensionAngular` do terminálu.

## Tři režimy zadání

První kliknutí určuje, který režim se použije:

### Dvě úsečky

1. **Klikněte na první úsečku.** Poloha kurzoru určuje, která strana úsečky se použije.
2. **Klikněte na druhou úsečku.** Obě úsečky se musí protínat (průsečík se vypočítá automaticky; nemusí být viditelný na obrazovce).
3. **Klikněte pro umístění** kótovacího oblouku. Přesunutím kurzoru zvolíte poloměr a to, která úhlová výseč se popíše — anotace sleduje kurzor na kteroukoli stranu vrcholu.

Rovnoběžné úsečky nemohou vytvořit úhlovou kótu; příkaz druhé kliknutí ignoruje, pokud se úsečky neprotínají.

### Oblouk

1. **Klikněte na oblouk.** Kóta se vytvoří okamžitě od počátečního úhlu oblouku po jeho koncový úhel, přičemž vrcholem je střed oblouku.
2. **Klikněte pro umístění** kótovacího oblouku na požadovaném poloměru.

### Kružnice

1. **Klikněte na kružnici.** První koncový bod úhlu se přichytí k nejbližšímu bodu na kružnici.
2. **Klikněte na druhý bod** na kružnici, kterým určíte druhý koncový bod úhlu.
3. **Klikněte pro umístění** kótovacího oblouku.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Escape` | Zruší a vrátí se k prvnímu výběru |

## Podrobnosti o chování

- Kótovací oblouk se vždy kreslí na té straně vrcholu, kam jej umístíte — přesunutím kurzoru přes vrchol se přepnete na doplňkový úhel.
- Naměřený úhel se zobrazuje ve stupních a při umísťování se živě aktualizuje, jak pohybujete kurzorem.
- Výsledná anotace je plnohodnotný objekt `DimensionAngular` uložený na aktuální vrstvě. Jeho vlastnosti vzhledu (velikost šipky, výška textu, délka rozměrové čáry) lze upravit v panelu vlastností.
- Úhlové kóty se exportují do JSON i DXF, v DXF zapsané jako standardní objekty `DIMENSION`.

## Úprava popisku — jednoduchý režim

**Dvojitým kliknutím** na umístěnou úhlovou kótu otevřete textový editor v **jednoduchém** režimu. Editor je předvyplněn aktuální vykreslenou hodnotou, takže kurzor umístíte a hodnotu upravíte přímo.

| Funkce | Chování |
|--------|---------|
| Bold / Italic / Font / Height | Použijí se na **celý** popisek najednou |
| Formátování jednotlivých znaků | Nepodporováno |
| `Enter` | Potvrdí hodnotu a zavře editor |
| Víceřádkový text | Nepodporováno |

Úplný přehled najdete v [Textový editor — jednoduchý režim](../../interface/text-editor/#jednoduchý-režim).

## Související příkazy

- [Dimension Linear](../dim-linear/) — vodorovná nebo svislá kóta
- [Dimension Aligned](../dim-aligned/) — kóta zarovnaná ke dvěma bodům
- [Dimension Radius](../dim-radius/) — kóta poloměru pro oblouky a kružnice
- [Dimension Diameter](../dim-diameter/) — kóta průměru pro kružnice
