---
title: Příkaz Dimension Radius — kótování poloměrů oblouků a kružnic
description: Příkaz Dimension Radius umístí na oblouk nebo kružnici poloměrovou kótu s předponou R. Klikněte na objekt a poté pohybem kurzoru natočte kótovací čáru od středu k obvodu. Plná výměna dat s DXF jako objekty DIMENSION poloměru.
keywords: [CAD kóta poloměru, dimradius, kótování poloměru kružnice, kóta poloměru oblouku, kóta s předponou R, kulmanlab]
group: markup
order: 7
---

# Dimension Radius

Příkaz `dimradius` umístí kótu poloměru na oblouk nebo kružnici. Kótovací čára vede od středu do bodu na obvodu ve směru kurzoru a je označena `R <hodnota>`. Chcete-li místo toho kótovat celý průměr, použijte [Dimension Diameter](../dim-diameter/).

## Anatomie kóty poloměru

```
  ● (střed)
   \
    \  R 5.00
     \
      ●────── text (strana kurzoru)
   (bod na oblouku)
```

- **Kótovací čára** — od středu přes bod na oblouku směrem ke kurzoru, se šipkou na oblouku.
- **Popisek** — `R` následované hodnotou poloměru.

## Umístění kóty poloměru

1. Napište `dimradius` do terminálu nebo klikněte na tlačítko **Dimension Radius** v panelu nástrojů.
2. **Kliknutím na oblouk nebo kružnici** ji vyberte.
3. **Přesuňte kurzor** a natočte kótovací čáru — bod na oblouku sleduje směr kurzoru od středu.
4. **Kliknutím** kótu umístěte.

Vybrat lze pouze objekty **Arc** a **Circle**. Kliknutí na jiný typ objektu nic neudělá.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Escape` | Zruší |

## Dimension Radius vs Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Měří | Poloměr (od středu k okraji) | Průměr (od okraje k okraji přes střed) |
| Kótovací čára | Střed → bod na oblouku | Bod na oblouku → bod na oblouku (přes střed) |
| Předpona popisku | `R` | `⌀` |
| Šipky | Jedna (v bodě na oblouku) | Dvě (v obou bodech na oblouku) |
| Nejvhodnější pro | Kótování jedné strany zakřiveného prvku | Kótování celých kruhových rozměrů |

## Úprava popisku — jednoduchý režim

**Dvojitým kliknutím** na umístěnou kótu poloměru otevřete textový editor v **jednoduchém** režimu. Editor je předvyplněn aktuální vykreslenou hodnotou (např. `R 5.00`), takže kurzor umístíte a hodnotu upravíte přímo.

| Funkce | Chování |
|--------|---------|
| Bold / Italic / Font / Height | Použijí se na **celý** popisek najednou |
| Formátování jednotlivých znaků | Nepodporováno |
| `Enter` | Potvrdí hodnotu a zavře editor |
| Víceřádkový text | Nepodporováno |

Úplný přehled najdete v [Textový editor — jednoduchý režim](../../interface/text-editor/#jednoduchý-režim).

## DXF — objekt DIMENSION poloměru

Kóty poloměru se ukládají jako objekty `DIMENSION` s geometrií typu poloměr, přičemž se ukládají souřadnice středu, poloha bodu na oblouku a naměřená hodnota poloměru. Všechny vlastnosti se přenášejí beze ztráty.


## Kótovací styl

Nové kóty kopírují aktuální [kótovací styl](../dimension-style/), včetně šipek, vynášecích čar, textu, přesnosti, zarovnání, mezery a rámečku. Hodnoty se kopírují při vytvoření; pozdější změny stylu nemění existující kóty.
