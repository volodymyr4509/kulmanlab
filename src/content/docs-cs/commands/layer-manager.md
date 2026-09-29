---
title: LayerManager — správa všech vrstev v jedné tabulce
description: Příkaz LayerManager otevře tabulku všech vrstev výkresu, kde můžete přidávat vrstvy, mazat nepoužívané a upravovat u každé zmrazení, zámek, tisk, barvu, tloušťku čáry a typ čáry přímo na místě.
keywords: [správce vrstev, tabulka vrstev CAD, správa vrstev CAD, přidání vrstvy CAD, smazání vrstvy CAD, odstranění nepoužívané vrstvy, zmrazení zámek tisk vrstvy, správa vrstev kulmanlab]
group: layer
order: 1
---

# LayerManager

Příkaz `LayerManager` otevře tabulku se všemi vrstvami výkresu, kde lze nastavení **Freeze**, **Lock**, **Plot**, **Color**, **Lineweight** a **Linetype** upravovat přímo v řádku. Je to centrální místo pro přidávání vrstev, mazání nepoužívaných a úpravu chování stávajících — ostatní příkazy pro vrstvy ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) dělají každý jednu úzce zaměřenou věc bez otevírání tabulky.

## Otevření Layer Manageru

- Napište `LayerManager` do terminálu, **nebo**
- klikněte na tlačítko **Layer Manager** v panelu vrstev.

Dialog se otevře jako plovoucí panel; předem není třeba nic vybírat.

## Tabulka vrstev

| Sloupec | Co ovládá |
|---------|-----------|
| Name | Název vrstvy, v tabulce pouze pro čtení (nastavuje se jednou, při vytvoření) |
| Freeze | Skryje objekty vrstvy a vyloučí je z výběru, dokud nejsou rozmrazeny |
| Lock | Zabrání úpravám objektů na vrstvě, aniž by je skrylo |
| Plot | Zda jsou objekty vrstvy zahrnuty při tisku nebo exportu do PDF |
| Color | Barva ACI vrstvy — kliknutím na vzorek otevřete výběr barvy |
| Lineweight | Tloušťka čáry vrstvy — kliknutím na čip otevřete výběr tloušťky čáry |
| Linetype | Přerušovaný vzor čáry vrstvy — kliknutím na čip otevřete výběr typu čáry |
| ✕ | Smaže vrstvu, pokud ji nic nepoužívá — viz [Smazání vrstvy](#smazání-vrstvy) |

Přepnutí Freeze, Lock nebo Plot se projeví okamžitě — žádný samostatný krok ukládání neexistuje. Objekty nastavené na **ByLayer** pro barvu, tloušťku čáry nebo typ čáry (výchozí) přebírají to, co zde nastavíte; objekty s vlastním explicitním přepsáním nejsou ovlivněny.

## Přidání vrstvy

1. Klikněte na **+ Add Layer** ve spodní části tabulky.
2. Napište název a stiskněte **Enter** pro potvrzení, nebo **Escape** pro zrušení.

Názvy vrstev mohou obsahovat písmena, číslice, mezery a `_`, `-`, `$`. Název, který je prázdný, už se používá nebo obsahuje jakýkoli jiný znak, se zamítne s chybou přímo v řádku a řádek zůstane otevřený pro další pokus.

Nové vrstvy začínají **rozmrazené, odemčené, tisknutelné**, s barvou 7 (bílá/černá), tloušťkou čáry Default a typem čáry Continuous — stejné výchozí hodnoty, které [Import](../import/) přiřazuje vrstvě `0` v prázdném výkresu.

## Smazání vrstvy

Každý řádek končí tlačítkem **✕**, které vrstvu z výkresu odstraní. Smazání je okamžité — potvrzovací krok neexistuje — ale nabízí se jen u vrstev, na kterých nic nezávisí:

| Situace | Stav tlačítka |
|---------|---------------|
| Vrstva je prázdná | Povoleno — *Delete layer* |
| Vrstva je přiřazena alespoň jednomu objektu | Zakázáno — *Cannot delete: assigned to at least one entity* |
| Vrstva `0` | Žádné tlačítko |

**„Používaná" se vztahuje na celý výkres**, nejen na to, na co se právě díváte. Objekt na rozvržení (papírový prostor) se počítá stejně jako objekt v modelovém prostoru, takže vrstva může na obrazovce vypadat prázdně a přesto odmítnout smazání. Zmrazené vrstvy nejsou výjimkou: zmrazení objekty skryje, ale nezruší jejich přiřazení, takže zmrazená vrstva s objekty zůstává nesmazatelná.

Vrstvu `0` nelze nikdy smazat. Je to záložní vrstva, kterou má zaručeně každý výkres, takže se pro ni tlačítko vůbec nevykresluje, místo aby bylo zobrazeno jako zakázané.

### „…is now in use and can't be deleted"

Občas se ✕ jeví jako dostupné, ale kliknutí je zamítnuto hlášením v horní části panelu:

```
"WALLS" is now in use and can't be deleted
```

Není to rozpor. Zjištění, které vrstvy se používají, vyžaduje projít každý objekt ve výkresu, takže se výsledek ukládá do mezipaměti a znovu se sestavuje jen při změně počtu objektů — u stovek objektů je to levné, u stovek tisíc ne. Přesunutí existujícího objektu na vrstvu počet nemění, takže stav zakázání tlačítka může být na chvíli zastaralý. Kliknutí před smazáním čehokoli všechno znovu zkontroluje od nuly, proto k odmítnutí dochází v okamžiku kliknutí, a vrstva tedy nezmizí, zatímco na ni ještě něco odkazuje.

Hlášení zavřete jeho vlastním tlačítkem **✕**. Vrstva zůstane nedotčena.

## Co zde nelze dělat

V tabulce není žádná indikace, která vrstva je *aktuální*; ta se nastavuje výběrem z rozbalovací nabídky panelu vrstev nebo příkazem [LayerMakeCurrent](../layer-make-current/), nikoli z tohoto dialogu. Názvy vrstev jsou také pevné od vytvoření — vrstvu lze smazat a znovu vytvořit, ale nelze ji přejmenovat.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Enter` | Potvrdí název nové vrstvy (při přidávání) |
| `Escape` | Zruší přidávání vrstvy, nebo zavře dialog |

## Související příkazy

| Příkaz | Co dělá |
|--------|---------|
| [LayerMakeCurrent](../layer-make-current/) | Nastaví aktuální vrstvu podle vrstvy objektu, na který kliknete |
| [LayerMatch](../layer-match/) | Přiřadí vybrané objekty ke vrstvě zdrojového objektu |
| [LayerIsolate](../layer-isolate/) | Zmrazí všechny vrstvy kromě vrstev vybraných objektů |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Rozmrazí všechny vrstvy jedním krokem |
