---
title: Příkaz TextStyle — vytváření a správa pojmenovaných stylů textu
description: Vytvářejte a spravujte pojmenované styly textu CAD s výchozím nastavením písma, výšky, tučného, kurzívy, řádkování, zarovnání a rámečku textu. Nový Text používá aktuální styl.
keywords: [styl textu CAD, styl písma CAD, pojmenovaný styl textu, správce stylů textu, tučný kurzíva text CAD, rámeček textu CAD, řádkování textu CAD, zarovnání textu CAD, styl textu DXF, kulmanlab]
group: style
order: 6
---

# TextStyle

Příkaz `TextStyle` otevře dialog se seznamem všech pojmenovaných stylů textu ve výkresu. Vytvářejte styly, upravujte jejich výchozí formátování a vybírejte, který je *aktuální*. Nový [Text](../text/) při vytvoření zkopíruje nastavení aktuálního stylu.

## Otevření dialogu Text Style

- Napište `TextStyle` do terminálu, **nebo**
- klikněte na tlačítko **Text Style** v panelu Annotate.

Dialog se otevře jako plovoucí okno: vlevo jsou vypsány všechny styly, vpravo vlastnosti vybraného.

## Seznam stylů

Každý řádek zobrazuje název stylu. Zaškrtnutí označuje *aktuální* styl — ten, který používá nový Text.

| Značka | Význam |
|--------|--------|
| ✓ | Toto je *aktuální* styl — nový Text kopíruje jeho výchozí formátování |

Kliknutím na řádek jej vyberete k úpravě; dvojitým kliknutím jej vyberete **a** současně učiníte aktuálním. Tužkou vedle názvu stylu jej přejmenujete přímo na místě. `Standard` přejmenovat nelze.

## Úprava stylu

S vybraným stylem jsou jeho vlastnosti vpravo:

| Pole | Co ovládá |
|------|-----------|
| Font | Typ písma, vybraný ze stejného seznamu, který spravuje [FontManager](../font-manager/) — nahrajte tam vlastní písmo a objeví se i zde. |
| Height | Povinná kladná výška textu. Nové a starší styly s nulovou nebo zápornou výškou používají `1`; správce přijímá hodnoty větší než `0`. |
| Bold / Italic | Každé lze přepínat nezávisle; živý vzorek nad nimi se okamžitě aktualizuje. |
| Line Spacing | Násobitel použitý mezi řádky textu. `1` používá běžné řádkování; větší hodnoty řádky rozestoupí dál od sebe. |
| Horizontal Alignment | Výchozí zarovnání odstavce pro nový Text: Left, Center, Right nebo Justify. |
| Frame | Nakreslí obdélníkový rámeček kolem nového Textu vytvořeného s tímto stylem. |

Náhled kreslí dvouřádkový pangram stejným vykreslovačem jako Text na plátně. Písmo, výška, tučné, kurzíva, rámeček, řádkování i vodorovné zarovnání se aktualizují okamžitě; údaj o zvětšení ukazuje měřítko použité k přizpůsobení náhledu. Nové styly mají ve výchozím stavu zarovnání **Left**.

Anotativní styly importované z DXF jsou aktuálně skryté, protože anotativní měřítkování se zatím nevykresluje. Jejich záznamy se zachovávají, ale v tomto dialogu je nelze vybrat ani upravit.

Název, který je prázdný, už ho používá jiný styl nebo obsahuje znak, který soubor DXF nemůže pojmout (`< > / \ " : ; ? * | , = \``), se zamítne s chybou přímo v řádku a **OK** zůstává zakázáno, dokud není název každého stylu platný.

## Vytváření a mazání stylů

- **New** duplikuje vybraný styl — se všemi jeho výchozími formáty — pod dalším volným názvem (`Style1`, `Style2`, …) a vybere jej k úpravě.
- **Delete** odstraní vybraný styl, ale pouze pokud to není `Standard` ani aktuální styl; jinak je tlačítko zakázáno.

## Nastavení aktuálního stylu

**Set Current** učiní vybraný styl tím, se kterým se vytváří nový Text, a je zakázáno, jakmile je tento styl již aktuální. Stejné přepnutí je dostupné i bez otevření dialogu: rozbalovací nabídka vedle **Text Style** v panelu Annotate vypisuje všechny viditelné styly.

Styl je *šablona v okamžiku vytvoření*. Písmo, výška, tučné, kurzíva, řádkování, zarovnání a rámeček se zkopírují na nový objekt Text; objekt není se stylem živě propojen. Pozdější úprava nebo smazání stylu existující Text nezmění.

## Uložení nebo zahození změn

Každá zde provedená úprava pracuje s kopií tabulky stylů. **OK** zapíše kopie zpět — přejmenování, nové styly, smazání i volba aktuálního stylu se projeví společně — a dialog zavře. **Close** (nebo `Escape`) zahodí vše, ať už jste klikli na New, Delete nebo zaškrtávací políčko, a výkres zůstane přesně tak, jak byl.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `↑` / `↓` | Posune výběr nahoru nebo dolů v seznamu stylů |
| `Escape` | Zahodí změny a zavře dialog |

## Související příkazy

| Příkaz | Co dělá |
|--------|---------|
| [Text](../text/) | Nakreslí textový popisek — písmo, řez a výšku přebírá z aktuálního stylu textu |
| [FontManager](../font-manager/) | Procházení, výběr a nahrávání vlastních písem, ze kterých čerpá pole Font stylu textu |
| [MatchProperties](../match-properties/) | Kopíruje výšku textu na jiné objekty — nikoli písmo, tučné ani kurzívu |

## Kompatibilita s DXF

Název, soubory písem, tučné, kurzíva a anotativní příznak se ve stylech textu DXF zachovávají. KulmanLab zapisuje skupinu `40` STYLE jako `0` (proměnná výška) a poslední použitou výšku do skupiny `42`; pevná výška STYLE tak nepřepíše vlastní výšku textu kótovacího stylu. Rámeček, řádkování a vodorovné zarovnání jsou výchozí hodnoty KulmanLab pro jednotlivý text, nikoli pole tabulky STYLE DXF.
