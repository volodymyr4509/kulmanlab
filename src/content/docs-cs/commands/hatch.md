---
title: Příkaz Hatch — vyplnění oblasti vzorem
description: Příkaz Hatch vyplní oblast obklopující vybraný bod vzorem — jakákoli kombinace úseček, oblouků, elips a splinů, která se uzavře, vymezuje oblast, a cokoli uzavřeného uvnitř zůstane jako nevyplněný ostrov.
keywords: [CAD příkaz hatch, výplň oblasti CAD, vzor šrafy CAD, ANSI31, plná výplň SOLID, výplň podle hranice CAD, objekt HATCH DXF, kulmanlab]
group: shapes
order: 7
---

# Hatch

Příkaz `hatch` vyplní oblast obklopující vybraný bod vzorem. Hranice se nekreslí předem — vychází z toho, co už je na plátně, takže čtyři samostatné [Lines](../line/) navazující konec na konec vymezují oblast přesně tak, jako uzavřená [Polyline](../polyline/), a jakýkoli uzavřený tvar uvnitř se stane ostrovem, který výplň vynechá.

## Vyplnění oblasti

1. Napište `hatch` do terminálu nebo klikněte na tlačítko **Hatch** v panelu nástrojů (ikona vzorku).
2. **Klikněte na bod** uvnitř oblasti, kterou chcete vyplnit.
3. Příkaz zůstává aktivní, takže můžete dál klikat a vyplňovat další oblasti — každé kliknutí vytvoří vlastní objekt `Hatch`.
4. Až skončíte, stiskněte **Enter**, **Space** nebo **Escape**.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   klikněte dovnitř vnější
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   hranice; kružnice
  └─────────────┘        └─────────────┘   zůstane jako ostrov
```

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Enter` / `Space` | Ukončí příkaz Hatch |
| `Escape` | Ukončí příkaz Hatch (stejně jako Enter/Space) |

## Co může vymezovat oblast

Hranici může tvořit jakákoli kombinace těchto typů objektů, pokud na sebe navazují konec na konec bez mezery:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (vlastní uzavřená hranice)
- [Ellipse](../ellipse/) (uzavřená, nebo otevřený eliptický oblouk jako součást větší smyčky)
- [Polyline](../polyline/) (otevřená nebo uzavřená) a [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/)

Objekty Text, Multileader a Dimension se za hranice nikdy nepovažují.

## Ostrovy

Cokoli zcela uzavřeného uvnitř vybrané oblasti — kružnice, uzavřená polyline, hranice jiné šrafy — se stane **ostrovem**: výplň se zastaví u jeho okraje a samotný ostrov zůstane prázdný. Vnoříte-li uzavřený tvar do jiného uzavřeného tvaru, výplň se střídá — díra uvnitř výplně uvnitř díry — podle stejného pravidla uvnitř/vně na každé úrovni.

## Když se výběr nezdaří

Pokud bod, na který jste klikli, není uzavřen, nebo má hranice mezeru, terminál vysvětlí proč, místo aby tiše neudělal nic:

| Zpráva | Význam |
|--------|--------|
| "no boundary found" | Z vybraného bodu nebylo v žádném směru nic zasaženo — v okolí není žádná hranice |
| "point is not enclosed" | V okolí hranice existuje, ale tvar, který tvoří, neobsahuje bod, na který jste klikli |
| "boundary is open" | Nejbližší hranice má někde mezeru — obtáhněte ji a zkontrolujte, že každý spoj přesně navazuje |
| "boundary too complex" | Smyčku hranice se nepodařilo uzavřít v rámci limitu průchodu — obvykle změť překrývajících se objektů |

Příkaz zůstává po neúspěšném výběru aktivní — přečtěte si zprávu, opravte výkres nebo klikněte jinam a zkuste to znovu.

## Výběr vzoru

Každá nová šrafa začíná vyplněná vzorem `ANSI31` (nebo tím, který použila *poslední* šrafa, kterou jste upravovali) — před kreslením není žádný výběr vzoru. Chcete-li použít jiný vzor:

1. Vyberte existující šrafu a otevřete její pole **Pattern** v panelu vlastností — otevře se výběr vzoru, mřížka pojmenovaných vzorků seskupených podle toho, odkud každý vzor pochází.
2. Kliknutím na vzor jej použijete — výplň se okamžitě aktualizuje.

Tento výběr se také stane výchozím pro *další* šrafu vytvořenou příkazem `hatch`, stejně jako se přenáší volba hladiny nebo barvy. Chcete-li tedy vyšrafovat několik nových oblastí určitým vzorem: vyplňte jednu oblast, nastavte její vzor jednou a pak šrafujte dál — každá další výplň už začíná s tímto vzorem.

Nahrávání vlastních souborů vzorů `.pat` a procházení celé knihovny najdete v [Hatch Manager](../hatch-manager/).

**SOLID** je běžná položka v seznamu vzorů, nikoli samostatné zaškrtávací políčko či režim — vyberete jej stejně jako ANSI31 nebo jakýkoli jiný pojmenovaný vzor.

## Vlastnosti

| Vlastnost | Význam |
|-----------|--------|
| Pattern | Název vzoru ze sdíleného slovníku vzorů (viz [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Mění měřítko rozestupu čar vzoru — větší hodnoty rozestupují čáry vzoru dál od sebe |
| Pattern Angle | Otáčí vzor nezávisle na hranici |
| Origin X / Origin Y | Kde je ukotveno opakování vzoru, v souřadnicích výkresu |

Přesun, otočení, zrcadlení nebo změna měřítka šrafy přenáší i umístění jejího vzoru, takže výplň zůstává zarovnaná s hranicí — po transformaci nemusíte znovu nastavovat měřítko ani úhel.

## Úprava hranice úchyty

Vybraná šrafa má úchyty na hranici tak, jak je má Polyline na vrcholech — jeden úchyt v každém rohu, kde se stýkají dvě hrany, a jeden uprostřed každé hrany (uzavřená smyčka, jako šrafovaná kružnice nebo elipsa, má místo toho úchyty ve svých čtyřech bodech na osách).

| Úchyt | Co dělá |
|-------|---------|
| **Roh** | Přesune daný roh. Přímá hrana ho následuje přesně; oblouk se přizpůsobí tak, aby dál procházel oběma sousedy; hrana elipsy nebo splinu může skončit jen na vlastní křivce, takže roh přiskočí k nejbližšímu bodu na ní |
| **Střed hrany — úsečka, elipsa nebo spline** | Posune celou hranu; hrany po obou stranách se oříznou nebo prodlouží tak, aby na ni zůstaly napojené |
| **Střed hrany — oblouk** | **Prohne** oblouk tak, aby procházel kurzorem, místo aby ho posouval — oba konce zůstanou přesně tam, kde byly, a nic jiného na hranici se nehýbe |
| **Střed** (celé šrafy) | Aktivuje [Move](../move/) pro celou šrafu |

Náhled tažení ukazuje hranici jako přerušovaný obrys místo plné výplně, dokud táhnete — původní výplň zůstává viditelná pod ním až do puštění, protože náhled může kreslit jen přes to, co tam je, nikdy z toho nic odebrat.

## DXF — objekt HATCH

Šrafy se **importují** z objektů `HATCH`: KulmanLab čte geometrii hranice spolu s názvem vzoru, měřítkem a úhlem (skupinové kódy DXF 70/41/52) — **nečte** vlastní definice čar vzoru zapsané přímo v souboru. Místo toho se název vzoru vyhledá ve vlastní knihovně vzorů KulmanLab (vestavěné výchozí plus cokoli, co jste nahráli v [Hatch Manager](../hatch-manager/)). Název, který ve vaší knihovně není, se vrátí k ANSI31, aby výkres stále vypadal vyšrafovaně, a jednou se zapíše poznámka.

Smyčky ohraničené splinem zapsané jinými aplikacemi (typ hrany DXF 4) se zatím nečtou.

Šrafy se do DXF **exportují** jako objekty `HATCH`. Smyčky hranice se zapíšou s názvem vzoru (skupinový kód 2), příznakem plné výplně (70) a vlastním úhlem a měřítkem této šrafy (52/41) — a na rozdíl od importu se inline zapíšou i vyřešené definice čar vzoru (78, s 53/43/44/45/46/79/49). Asymetrie je záměrná: KulmanLab dokáže vyřešit název proti vlastní knihovně, ale aplikace, která soubor přijme, ten vzor mít nemusí, takže čáry putují s ním.

## Související příkazy

- [Hatch Manager](../hatch-manager/) — procházení knihovny vzorů a nahrávání souborů `.pat`
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — všechny přenášejí umístění vzoru šrafy spolu s ní
- [Delete](../delete/) — odstraní šrafu, aniž by to ovlivnilo objekty, které ji ohraničovaly
