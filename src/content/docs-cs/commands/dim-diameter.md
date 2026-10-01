---
title: "Dimension Diameter — kótování průměrů celých kružnic a oblouků"
description: "Příkaz Dimension Diameter umístí kótu průměru (s předponou symbolu průměru) přes oblouk nebo kružnici středem. Pohybem kurzoru otočíte kótovací čáru do libovolného úhlu. Plná výměna dat s DXF jako objekty DIMENSION průměru."
keywords: [CAD kóta průměru, dimdiameter, kótování průměru kružnice, kóta průměru oblouku, symbol průměru CAD, kulmanlab]
group: markup
order: 8
---

# Dimension Diameter

Příkaz `dimdiameter` umístí kótu průměru na oblouk nebo kružnici. Kótovací čára zabírá celý průměr — prochází středem mezi dvěma protilehlými body oblouku — a je označena `⌀ <hodnota>`. Chcete-li kótovat jen poloměr od středu k jednomu okraji, použijte [Dimension Radius](../dim-radius/).

## Anatomie kóty průměru

```
  ●──────────── ⌀ 10.00 ────────────●
  (vzdálený bod oblouku)      (blízký bod oblouku / strana textu)
```

- **Kótovací čára** — zabírá celý průměr, se šipkami v obou průsečících s obloukem.
- **Blízký bod oblouku** — bod na obvodu na straně kurzoru (kde sedí textový popisek).
- **Vzdálený bod oblouku** — diametrálně protilehlý bod.
- **Popisek** — `⌀` následovaný hodnotou průměru.

## Umístění kóty průměru

1. Napište `dimdiameter` do terminálu nebo klikněte na tlačítko **Dimension Diameter** v panelu nástrojů.
2. **Kliknutím na oblouk nebo kružnici** ji vyberte.
3. **Přesuňte kurzor** a otočte kótovací čáru do požadovaného úhlu.
4. **Kliknutím** kótu umístěte.

Vybrat lze pouze objekty **Arc** a **Circle**.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Escape` | Zruší |

## Dimension Diameter vs Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Měří | Celý průměr (2 × poloměr) | Poloměr (od středu k okraji) |
| Kótovací čára | Okraj → okraj přes střed | Střed → okraj |
| Předpona popisku | `⌀` | `R` |
| Šipky | Dvě (v obou bodech oblouku) | Jedna (v bodě oblouku) |
| Nejvhodnější pro | Kóty celých kruhových otvorů nebo hřídelí | Kótování jedné strany zakřiveného prvku |

## Úprava popisku — jednoduchý režim

**Dvojitým kliknutím** na umístěnou kótu průměru otevřete textový editor v **jednoduchém** režimu. Editor je předvyplněn aktuální vykreslenou hodnotou (např. `⌀ 10.00`), takže kurzor umístíte a hodnotu upravíte přímo.

| Funkce | Chování |
|--------|---------|
| Bold / Italic / Font / Height | Použijí se na **celý** popisek najednou |
| Formátování jednotlivých znaků | Nepodporováno |
| `Enter` | Potvrdí hodnotu a zavře editor |
| Víceřádkový text | Nepodporováno |

Úplný přehled najdete v [Textový editor — jednoduchý režim](../../interface/text-editor/#jednoduchý-režim).

## DXF — objekt DIMENSION průměru

Kóty průměru se ukládají jako objekty `DIMENSION` s geometrií typu průměr, přičemž se ukládají obě polohy bodů oblouku i naměřená hodnota průměru (2 × poloměr). Všechny vlastnosti se přenášejí beze ztráty.


## Kótovací styl

Nové kóty kopírují aktuální [kótovací styl](../dimension-style/), včetně šipek, vynášecích čar, textu, přesnosti, zarovnání, mezery a rámečku. Hodnoty se kopírují při vytvoření; pozdější změny stylu nemění existující kóty.
