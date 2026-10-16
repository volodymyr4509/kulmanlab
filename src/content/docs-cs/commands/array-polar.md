---
title: "Příkaz ArrayPolar — kopírování objektů kolem středu v KulmanLab CAD"
description: "Příkaz ArrayPolar zkopíruje vybrané objekty kolem středového bodu — daný počet položek rozmístěných po celém kruhu nebo jeho části, s kopiemi, které se při obíhání otáčejí nebo si drží vlastní orientaci."
keywords: ["CAD polární pole", "kruhový vzor CAD", "kopírování objektů kolem bodu CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

Příkaz `ArrayPolar` vytvoří kopie vybraných objektů kolem středového bodu, rovnoměrně rozmístěné po celém kruhu nebo jeho části. Originál je první položka; každá další je kopie otočená kolem středu — nebo jen přesunutá kolem něj, vypnete-li Rotate.

## Vytvoření polárního pole

1. Vyberte objekty, pak napište `KruhovéPole` do terminálu nebo klikněte na tlačítko **Array Polar** v panelu nástrojů. Spuštěný bez výběru vás nejdřív vyzve k výběru — potvrďte **Enter** nebo **Space**.
2. **Klikněte na střed**, kolem něhož kopie obíhají, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. Zkontrolujte pole. Všechny kopie se živě zobrazují a terminál ukazuje `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — stisknutím písmene volby ji změníte.
4. Stisknutím **Enter** nebo **Space** kopie vytvoříte. Originály zůstanou na místě a výběr se zruší.

## Volby

| Volba | Klávesa | Účinek |
|---|---|---|
| Items | `I` | Kolik je položek včetně originálu — celé číslo od 2 do 1024. Začíná na 6. |
| Angle | `A` | Stupně od jedné položky k další proti směru hodinových ručiček; záporný úhel jde po směru. Nejvýše 180°. |
| Fill | `F` | Stupně od první položky k poslední. 360 (výchozí) je celý kruh; menší číslo rozmístí položky po jeho části. Záporné jde po směru hodinových ručiček. Nejvýše 360°. |
| Rotate | `R` | Zapnuto (výchozí): každá kopie se při obíhání otáčí. Vypnuto: každá kopie se přesune na své místo a je orientována jako originál. Přepne se okamžitě — není co psát. |

- Angle a Fill jsou dva způsoby, jak říct totéž, takže změna jednoho přepíše druhé. Po celém kruhu se poslední položka zastaví o krok před první; po části kruhu dopadne přesně na úhel výplně.
- Chcete-li změnit číslo, stiskněte písmeno jeho volby. Výzva je předvyplněna aktuální hodnotou — psaním ji nahradíte a potvrdíte **Enter** nebo **Space**; potvrzení beze změny nechá pole, jak bylo.
- Items bere jen celá čísla; Angle a Fill desetinná čísla a úvodní `-` pro směr po hodinách. Úhel nebo výplň 0 se odmítne, stejně jako úhel nad 180° či výplň nad 360° — terminál řekne proč.
- Příliš malý Angle, do něhož se nevejdou všechny položky, vynechá ty bez místa a terminál oznámí nový počet.
- Funguje na všechny typy objektů: každá kopie je originál otočený kolem středu, nebo přesunutý, přesně jako by to udělal [Rotate](../rotate/) a [Move](../move/).

## Přehled kláves

| Klávesa | Akce |
|---|---|
| `Enter` / `Space` | Potvrdit výběr, pole nebo napsané číslo |
| `I` `A` `F` `R` | Změnit Items, Angle nebo Fill napsáním čísla; přepnout Rotate |
| `0`–`9`, `.`, `-` | Napsat číslo (`.` a `-` jen u Angle a Fill, `-` na začátku) |
| `Backspace` | Smazat poslední napsaný znak |
| `Escape` | Zrušení |
