---
title: Příkaz LeaderStyle — vytváření a správa pojmenovaných stylů odkazových čar
description: Vytvářejte a spravujte pojmenované styly odkazových čar CAD s výchozím nastavením šipky, velikosti šipky, mezery u zalomení, uchycení textu, otočení, písma, výšky, formátování a rámečku.
keywords: [styl odkazové čáry CAD, styl multileaderu, MLEADERSTYLE, styl šipky CAD, uchycení textu odkazové čáry, mezera u zalomení odkazové čáry, styl odkazové čáry DXF, kulmanlab]
group: style
order: 7
---

# LeaderStyle

Příkaz `LeaderStyle` otevře dialog pro vytváření, úpravu a výběr pojmenovaných stylů odkazových čar. Každý nový [Leader](../leader/) při vytvoření zkopíruje nastavení odkazové čáry a textu *aktuálního* stylu.

## Otevření dialogu Leader Style

- Napište `LeaderStyle` do terminálu, **nebo**
- klikněte na tlačítko **Leader Style** v panelu Annotate.

Seznam vlevo obsahuje každý viditelný styl odkazové čáry. Zaškrtnutí označuje aktuální styl. Kliknutím na styl jej upravíte; tužkou vedle jeho názvu jej přejmenujete.

## Nastavení odkazové čáry

| Pole | Co ovládá |
|---|---|
| Text Attachment | Kde se zalomení potkává s popiskem: Top, Middle, Bottom nebo Underline |
| Arrowhead | Symbol na špičce každého ramene, vybraný z vizuálního výběru šipek |
| Arrow Size | Velikost šipky v jednotkách výkresu |
| Landing Gap | Mezera mezi koncovým bodem zalomení a textem |
| Text Rotation | Otočení popisku ve stupních; vymazání pole jej vrátí na `0` |

## Nastavení textu

| Pole | Co ovládá |
|---|---|
| Text Style | Rychle předvyplní Font, Text Height, Bold a Italic z pojmenovaného [TextStyle](../text-style/) |
| Font | Typ písma pro popisek nové odkazové čáry |
| Text Height | Výška popisku v jednotkách výkresu |
| Bold / Italic | Nezávislé výchozí formátování |
| Frame Text | Nakreslí kolem popisku obdélníkový rámeček |

Text Style je jednorázové rychlé předvyplnění, nikoli živý odkaz. Úprava jakékoli zkopírované hodnoty nemění zdrojový styl textu a pozdější změny tohoto stylu textu styl odkazové čáry neaktualizují.

Náhled používá stejný vykreslovač multileaderu jako plátno a aktualizuje se okamžitě. Jeho hodnota zvětšení ukazuje měřítko použité k tomu, aby se do náhledu vešla celá šipka, zalomení i text.

## Vytváření, přejmenování a mazání stylů

- **New** duplikuje vybraný styl pod dalším volným názvem (`Leader1`, `Leader2`, …).
- Tužkou v řádku stylu jej přejmenujete. `Standard` přejmenovat nelze.
- **Delete** odstraní vybraný styl, pouze pokud to není `Standard` ani aktuální styl.

Názvy musí být neprázdné, jedinečné i mezi skrytými styly a platné pro DXF. Názvy obsahující `< > / \ " : ; ? * | , = \`` se zamítnou a **OK** zůstane zakázáno, dokud nemá každý viditelný styl platný název.

Anotativní styly importované z DXF jsou aktuálně skryté, protože anotativní měřítkování se zatím nevykresluje. Jejich záznamy zůstávají ve výkresu a zapisují se zpět beze změny, pokud se viditelná tabulka stylů jinak neukládá.

## Nastavení aktuálního stylu

**Set Current** učiní vybraný styl výchozím pro budoucí odkazové čáry. Rozbalovací nabídka vedle **Leader Style** v panelu Annotate nabízí stejnou volbu bez otevření dialogu.

Styl odkazové čáry se kopíruje při vytvoření. Existující odkazové čáry nejsou živě propojeny a nemění se, když se styl upraví, přejmenuje nebo smaže.

## Uložení nebo zahození změn

Všechny úpravy se provádějí na kopiích. **OK** použije přejmenování, přidání, smazání, změny vlastností i volbu aktuálního stylu společně. **Close**, zavírací tlačítko okna, kliknutí na pozadí nebo stisknutí `Escape` je zahodí.

| Klávesa | Akce |
|---|---|
| `↑` / `↓` | Pohyb v seznamu stylů, pokud není fokus ve vstupním poli |
| `Escape` | Zahodí změny a zavře dialog |

## Kompatibilita s DXF

KulmanLab importuje a exportuje záznamy `MLEADERSTYLE`. Název, šipka, velikost šipky, mezera u zalomení, výška textu, uchycení textu, rámeček a příznak anotativnosti se přenášejí jako pole pojmenovaného stylu. Při exportu ukazuje skupina `342` na TextStyle, jehož písmo, tučné, kurzíva a výška odpovídají LeaderStyle, s návratem na `Standard`, pokud žádný styl neodpovídá. Tento odkaz v DXF nedělá z rychlého předvyplnění v aplikaci živý odkaz. Jediné nastavení Text Attachment se zapisuje do levého i pravého pole uchycení, takže zůstává správné, i když odkazová čára změní stranu v AutoCADu.

## Související příkazy

| Příkaz | Co dělá |
|---|---|
| [Leader](../leader/) | Nakreslí multileader podle aktuálního stylu odkazové čáry |
| [LeaderAdd](../leader-add/) | Přidá rameno se šipkou k existující odkazové čáře |
| [LeaderRemove](../leader-remove/) | Odebere rameno z odkazové čáry s více rameny |
| [TextStyle](../text-style/) | Poskytuje nastavení textu pomocí výběru rychlého předvyplnění |
