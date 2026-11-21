---
title: "Příkaz ObjectSnapSettings — všechna nastavení ovládací lišty"
description: "Příkaz ObjectSnapSettings otevře jedno okno se všemi nastaveními ovládací lišty — uchopení, uchopení tečny, sledování úhlu, špendlíky, psaný vstup, laso a zobrazení — každé vysvětlené vedle seznamu malým obrázkem."
keywords: ["nastavení uchopení objektů CAD", "uchopení tečny CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

Příkaz `NastaveníPřichycení` otevře jedno okno, které shromažďuje všechna nastavení ovládací lišty. Každé nastavení je vysvětleno vedle seznamu malým obrázkem. Otevřete ho tlačítkem ozubeného kola v ovládací liště nebo napište `NastaveníPřichycení`. Změna nastavení zde je totéž jako přepnutí jeho tlačítka v liště.

## Nastavení

### Kam dopadne kurzor

| Ovládací lišta | Co dělá |
|---|---|
| `Snap` | Kurzor skočí na nejbližší bod mřížky, takže vybrané body padnou na kulaté souřadnice. Přichycení k objektu u kurzoru má dál přednost. Krok mřížky se mění se zoomem. |
| `TANG` | Když se kreslí čára z bodu, přiveďte kurzor tam, kde by se právě dotkla kružnice, oblouku, elipsy nebo splajnu, a přichytí se tam. Funguje v Úsečce, Křivce a dalších příkazech a při tažení konce úsečky nebo křivky. |

### Vodítka při kreslení

| Ovládací lišta | Co dělá |
|---|---|
| `ANGL` | Když se kurzor přiblíží k jednomu z těchto úhlů od posledního bodu, zamkne se v tom směru, zobrazeném jako čárkovaný paprsek. Zatímco je zamčený, zadejte délku a stiskněte Enter pro umístění bodu v té vzdálenosti. |
| `Pins` | Nechte kurzor chvíli na bodu přichycení, abyste ho připíchli. Připíchnutý bod vysílá vodorovná a svislá vodítka a kurzor se přichytí k nim i k jejich průsečíkům. |
| `Dist` | Poslední připíchnutý bod slouží jako počáteční bod: když se kurzor zamkne na úhlu od špendlíku, zadejte délku a stiskněte Enter pro umístění bodu v té vzdálenosti. Vyžaduje vektorové špendlíky. |

### Zadávání a výběr

| Ovládací lišta | Co dělá |
|---|---|
| `Rel` | Zadaný bod X,Y se měří od posledního vybraného bodu, jako by začínal @. Backspace odstraní @ pro bod v souřadnicích výkresu. Když je vypnuto, napište @ pro posun sami. |
| `Lasso` | Stiskněte a táhněte na prázdném místě a nakreslete volnou smyčku kolem toho, co chcete, místo obdélníku. Co smyčka obejme, se vybere. |

### Zobrazení

| Ovládací lišta | Co dělá |
|---|---|
| `Grid` | Zobrazuje mřížku v pozadí. Její rozestup se mění se zoomem. Vypnutí nezastaví přichycení k mřížce. |
| `LWT` | Kreslí čáry v jejich tloušťce, takže těžší čáry vypadají silnější. Když je vypnuto, kreslí se každá čára tence, což může zpřehlednit hustý výkres. |

**ANGL** má vlastní řádek pro krok: vyberte 10°, 20°, 30°, 45° nebo 90°, nebo vyberte **Vlastní** a napište libovolný úhel od 1° do 180°.

Uchopení tečny, relativní vstup a laso jsou ve výchozím stavu vypnuté. **Obnovit výchozí** vrátí všechna nastavení do počátečního stavu.

---

*Související: [Vector Pins](../../interface/vector-pins/), [Distance Tracking](../../interface/distance-tracking/), [Grid & Snap](../../interface/grid-snap/), [Zadávání souřadnic](../../interface/coordinate-entry/)*
