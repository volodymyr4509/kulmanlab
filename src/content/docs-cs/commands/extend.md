---
title: Příkaz Extend — prodloužení objektu k nejbližší hranici
description: Příkaz Extend prodlouží nejbližší koncový bod objektu Line, Arc, Ellipse nebo otevřené Polyline pod kurzorem k nejbližšímu průsečíku s jiným objektem. Živý náhled ukáže prodloužený objekt ještě před kliknutím.
keywords: [CAD příkaz extend, prodloužení úsečky CAD, prodloužení oblouku CAD, prodloužení elipsy CAD, prodloužení polyline CAD, natažení objektu k hranici, náhled po najetí, kulmanlab]
group: edit
order: 9
---

# Extend

Příkaz `extend` prodlouží nejbližší koncový bod objektu [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/) nebo otevřené [Polyline](../polyline/) pod kurzorem k nejbližšímu průsečíku, který by vznikl s jiným objektem ve výkresu. Najeďte kurzorem k požadovanému konci — náhled ukáže prodloužený objekt — a kliknutím jej použijte.

Prodloužit lze pouze objekty se skutečným koncovým bodem. [Circle](../circle/) a celá (360°) Ellipse jsou vždy uzavřené tvary bez koncového bodu, takže je nelze nikdy prodloužit — totéž platí pro uzavřenou Polyline nebo Rectangle. Částečná Ellipse (eliptický oblouk) a Arc koncové body mají a prodlužují se stejně jako Line.

## Prodloužení objektu

1. Napište `extend` do terminálu nebo klikněte na tlačítko **Extend** v panelu nástrojů.
2. **Najeďte kurzorem k jednomu konci** objektu, který chcete prodloužit — náhled ho ukáže prodloužený k nejbližší hranici v tomto směru.
3. **Kliknutím** prodloužení použijete.

Příkaz zůstává po každém prodloužení aktivní, takže můžete najíždět a klikat dál a prodlužovat další objekty. Ukončíte jej stisknutím **Enter**, **Space** nebo **Escape**.

```
  Před:                        Po:

  ──────           |           ──────────────|
  (krátká úsečka)  (hranice)   (prodloužená k hranici)
```

## Jak se vybírá koncový bod

Příkaz sleduje, ke kterému konci je kurzor blíž:

- **Line a otevřená Polyline** — kurzor blíž koncovému bodu prodlouží konec dopředu; kurzor blíž počátečnímu bodu prodlouží začátek dozadu.
- **Arc a částečná Ellipse** — kurzor blíž jednomu úhlovému konci rozšíří oblouk v tomto směru, po stejném středu a poloměru (nebo stejném tvaru elipsy), dokud nenarazí na další hranici.

Z vybraného konce se vyšle paprsek — u Arc a Ellipse podkladová kružnice nebo křivka samotného objektu — a **nejbližší průsečík** s jakýmkoli jiným objektem (kromě samotného objektu a ignorovaných typů) se stane novým koncovým bodem.

Pokud v daném směru žádný průsečík není, náhled se nezobrazí a kliknutí nic neudělá.

## Vyloučené hranice

Následující typy objektů se jako hranice ignorují — objekt se k nim neprodlužuje:

- Text / Mtext
- Multileader

Všechny ostatní typy (Line, Arc, Circle, Ellipse, Polyline, Spline, Dimension) slouží jako platné hranice.

Pokud je **první nebo poslední segment** [Polyline](../polyline/) sám obloukovým segmentem (nakresleným pomocí přepínače Arc), jeho prodloužení rozšíří oblouk po jeho vlastní kružnici — stejně jako prodloužení samostatného [Arc](../arc/) — místo aby se s ním zacházelo jako s přímým segmentem.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Enter` / `Space` | Ukončí režim extend |
| `Escape` | Ukončí režim extend |

## Podporované objekty

| Objekt | Lze prodloužit? |
|--------|----------------|
| Line | Ano |
| Arc | Ano |
| Ellipse | Ano — pouze pokud už je částečným obloukem; celá elipsa nemá koncový bod |
| Circle | Ne — vždy uzavřený tvar bez koncového bodu |
| Polyline (otevřená) | Ano |
| Polyline (uzavřená) / Rectangle | Ne — vždy uzavřený tvar bez koncového bodu |
| Text, Spline, Dimension, Leader | Ne |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Co dělá | Natáhne koncový bod objektu k hranici | Odstraní segment objektu |
| Spouštěč | Najetí k natahovanému koncovému bodu | Najetí na segment k ořezání |
| Výsledek | Koncový bod se posune ven | Objekt se rozdělí nebo zkrátí |
| Podporované objekty | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
