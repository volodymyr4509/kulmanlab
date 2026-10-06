---
title: Příkaz Trim — oříznutí segmentů objektů v průsečících
description: Příkaz Trim odstraní část objektu Line, Arc, Circle, Ellipse nebo Polyline mezi dvěma sousedními průsečíky nejblíže kurzoru. Náhled ukáže přesně, který segment se odřízne, ještě před kliknutím.
keywords: [CAD příkaz trim, oříznutí úsečky CAD, oříznutí kružnice CAD, oříznutí oblouku CAD, oříznutí elipsy CAD, oříznutí polyline CAD, přeříznutí v průsečíku, náhled po najetí, kulmanlab]
group: edit
order: 8
---

# Trim

Příkaz `trim` odstraní část objektu [Line](../line/), [Arc](../arc/), [Circle](../circle/), [Ellipse](../ellipse/) nebo [Polyline](../polyline/), která leží mezi dvěma sousedními průsečíky, a rozdělí objekt na jeden nebo více zbývajících kusů. Segment k odříznutí se určuje podle polohy kurzoru — najeďte na část, kterou chcete odstranit, a kliknutím ji ořízněte.

## Oříznutí objektu

1. Napište `trim` do terminálu nebo klikněte na tlačítko **Trim** v panelu nástrojů.
2. **Najeďte kurzorem na segment**, který chcete odstranit — náhled zvýrazní přesně tu část, která se odřízne.
3. **Kliknutím** segment odstraníte.

Příkaz zůstává po každém oříznutí aktivní, takže můžete dál najíždět a klikat a odřezávat další segmenty — na stejném nebo jiném objektu. Ukončíte jej stisknutím **Enter**, **Space** nebo **Escape**.

```
  Před:                       Po oříznutí prostředního segmentu:

  ──────●──────●──────        ──────●          ●──────
      průsečík  průsečík        (levá část)    (pravá část)
                                (prostřední segment odstraněn)
```

## Jak se určuje segment k oříznutí

Příkaz promítne polohu kurzoru na objekt pod ním a najde všechny jeho průsečíky s jinými objekty. Tyto průsečíky dělí objekt na segmenty — u Line, Arc nebo otevřené Polyline slouží vlastní koncové body objektu jako další pevné hranice. Celá Circle nebo Ellipse, nebo uzavřená Polyline (včetně Rectangle) vlastní koncové body nemá, takže k jejich oříznutí jsou zapotřebí alespoň dva průsečíky. Segment, jehož interval obsahuje promítnutý bod kurzoru, se zvýrazní a po kliknutí se odstraní.

- **Line, Arc a otevřená Polyline** — odstraněným segmentem může být počáteční část (před prvním průsečíkem), prostřední část (mezi dvěma průsečíky, čímž se objekt rozdělí na dva kusy) nebo koncová část (za posledním průsečíkem).
- **Circle, Ellipse a uzavřená Polyline/Rectangle** — protože nemají pevný začátek ani konec, lze odstranit pouze oblouk mezi dvěma *průsečíky*. Při méně než dvou průsečících se náhled nezobrazí a kliknutí nic neudělá. Zbytek tvaru se stane jediným zbývajícím kusem.

## Co oříznutí vytvoří

| Objekt | Výsledek po oříznutí |
|--------|----------------------|
| Line | Až dva kratší objekty Line |
| Arc | Až dva kratší objekty Arc |
| Circle | Jeden objekt [Arc](../arc/) — uzavřený tvar kružnice je pryč, takže zbývající kus se uloží jako oblouk |
| Ellipse | Jeden objekt Ellipse s počátečním a koncovým úhlem — zbývající kus zůstává elipsou, nyní částečnou |
| Polyline (otevřená) | Až dvě kratší polyline |
| Polyline (uzavřená) / Rectangle | Jedna otevřená polyline — uzavřený tvar je pryč, takže zbývající kus se uloží jako otevřený |
| Spline | Až dva kratší objekty Spline — každý díl je tatáž křivka na menším úseku, uložená pomocí řídicích vrcholů (proložené body splinu Fit se zahodí); uzavřený spline zanechá jeden otevřený díl |

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Enter` / `Space` | Ukončí režim trim |
| `Escape` | Ukončí režim trim |

## Podporované objekty

| Objekt | Lze oříznout? |
|--------|---------------|
| Line | Ano |
| Arc | Ano |
| Circle | Ano — vyžaduje 2 nebo více průsečíků |
| Ellipse | Ano — vyžaduje 2 nebo více průsečíků |
| Polyline (otevřená) | Ano |
| Polyline (uzavřená) / Rectangle | Ano — vyžaduje 2 nebo více průsečíků |
| Spline | Ano — uzavřený spline vyžaduje 2 nebo více průsečíků; spline se ořezává i tam, kde se kříží sám se sebou |
| Text, Dimension, Leader | Ne |

Objekty použité jako **ořezové hranice** mohou být Line, Arc, Circle, Ellipse, Polyline nebo Spline. Objekty Text, Dimension a Leader žádné průsečíky neregistrují, takže nemohou sloužit ani jako hranice.

**Obloukové segmenty** [Polyline](../polyline/) (nakreslené pomocí přepínače Arc, nebo importované z jiného CAD nástroje) se ořezávají přesně jako její přímé segmenty — najeďte na obloukovou část mezi dvěma průsečíky a klikněte. Oříznutá hrana si zachová původní zakřivení; mění se jen její délka.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Co dělá | Odstraní segment objektu | Natáhne koncový bod úsečky k hranici |
| Spouštěč | Najetí na segment k odříznutí | Najetí k prodlužovanému koncovému bodu |
| Výsledek | Objekt se rozdělí nebo zkrátí | Koncový bod úsečky se přesune k hranici |
| Podporované objekty | Line, Arc, Circle, Ellipse, Polyline, Spline | Line, Arc, Ellipse, Polyline |
