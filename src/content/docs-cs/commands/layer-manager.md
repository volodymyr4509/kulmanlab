---
title: LayerManager — správa všech hladin v jedné tabulce
description: Příkaz LayerManager otevře tabulku všech hladin výkresu, kde můžete přidávat hladiny, mazat nepoužívané a upravovat u každé zmrazení, zámek, tisk, barvu, tloušťku čáry a typ čáry přímo na místě.
keywords: [správce hladin, tabulka hladin CAD, správa hladin CAD, přidání hladiny CAD, smazání hladiny CAD, odstranění nepoužívané hladiny, zmrazení zámek tisk hladiny, správa hladin kulmanlab]
group: layer
order: 1
---

# LayerManager

Příkaz `LayerManager` otevře tabulku se všemi hladinami výkresu, kde lze nastavení **Freeze**, **Lock**, **Plot**, **Color**, **Lineweight** a **Linetype** upravovat přímo v řádku. Je to centrální místo pro přidávání hladin, mazání nepoužívaných a úpravu chování stávajících — ostatní příkazy pro hladiny ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) dělají každý jednu úzce zaměřenou věc bez otevírání tabulky.

## Otevření Layer Manageru

- Napište `LayerManager` do terminálu, **nebo**
- klikněte na tlačítko **Layer Manager** v panelu hladin.

Dialog se otevře jako plovoucí panel; předem není třeba nic vybírat.

## Tabulka hladin

| Sloupec | Co ovládá |
|---------|-----------|
| Name | Název hladiny, v tabulce pouze pro čtení (nastavuje se jednou, při vytvoření) |
| Freeze | Skryje objekty hladiny a vyloučí je z výběru, dokud nejsou rozmrazeny |
| Lock | Zabrání úpravám objektů na hladině, aniž by je skrylo |
| Plot | Zda jsou objekty hladiny zahrnuty při tisku nebo exportu do PDF |
| Color | Barva ACI hladiny — kliknutím na vzorek otevřete výběr barvy |
| Lineweight | Tloušťka čáry hladiny — kliknutím na čip otevřete výběr tloušťky čáry |
| Linetype | Přerušovaný vzor čáry hladiny — kliknutím na čip otevřete výběr typu čáry |
| ✕ | Smaže hladinu, pokud ji nic nepoužívá — viz [Smazání hladiny](#smazání-hladiny) |

Přepnutí Freeze, Lock nebo Plot se projeví okamžitě — žádný samostatný krok ukládání neexistuje. Objekty nastavené na **ByLayer** pro barvu, tloušťku čáry nebo typ čáry (výchozí) přebírají to, co zde nastavíte; objekty s vlastním explicitním přepsáním nejsou ovlivněny.

## Přidání hladiny

1. Klikněte na **+ Add Layer** ve spodní části tabulky.
2. Napište název a stiskněte **Enter** pro potvrzení, nebo **Escape** pro zrušení.

Názvy hladin mohou obsahovat písmena, číslice, mezery a `_`, `-`, `$`. Název, který je prázdný, už se používá nebo obsahuje jakýkoli jiný znak, se zamítne s chybou přímo v řádku a řádek zůstane otevřený pro další pokus.

Nové hladiny začínají **rozmrazené, odemčené, tisknutelné**, s barvou 7 (bílá/černá), tloušťkou čáry Default a typem čáry Continuous — stejné výchozí hodnoty, které [Import](../import/) přiřazuje hladině `0` v prázdném výkresu.

## Smazání hladiny

Každý řádek končí tlačítkem **✕**, které hladinu z výkresu odstraní. Smazání je okamžité — potvrzovací krok neexistuje — ale nabízí se jen u hladin, na kterých nic nezávisí:

| Situace | Stav tlačítka |
|---------|---------------|
| Hladina je prázdná | Povoleno — *Delete layer* |
| Hladina je přiřazena alespoň jednomu objektu | Zakázáno — *Cannot delete: assigned to at least one entity* |
| Hladina `0` | Žádné tlačítko |

**„Používaná" se vztahuje na celý výkres**, nejen na to, na co se právě díváte. Objekt na rozvržení (papírový prostor) se počítá stejně jako objekt v modelovém prostoru, takže hladina může na obrazovce vypadat prázdně a přesto odmítnout smazání. Zmrazené hladiny nejsou výjimkou: zmrazení objekty skryje, ale nezruší jejich přiřazení, takže zmrazená hladina s objekty zůstává nesmazatelná.

Hladinu `0` nelze nikdy smazat. Je to záložní hladina, kterou má zaručeně každý výkres, takže se pro ni tlačítko vůbec nevykresluje, místo aby bylo zobrazeno jako zakázané.

### „…is now in use and can't be deleted"

Občas se ✕ jeví jako dostupné, ale kliknutí je zamítnuto hlášením v horní části panelu:

```
"WALLS" is now in use and can't be deleted
```

Není to rozpor. Zjištění, které hladiny se používají, vyžaduje projít každý objekt ve výkresu, takže se výsledek ukládá do mezipaměti a znovu se sestavuje jen při změně počtu objektů — u stovek objektů je to levné, u stovek tisíc ne. Přesunutí existujícího objektu na hladinu počet nemění, takže stav zakázání tlačítka může být na chvíli zastaralý. Kliknutí před smazáním čehokoli všechno znovu zkontroluje od nuly, proto k odmítnutí dochází v okamžiku kliknutí, a hladina tedy nezmizí, zatímco na ni ještě něco odkazuje.

Hlášení zavřete jeho vlastním tlačítkem **✕**. Hladina zůstane nedotčena.

## Co zde nelze dělat

V tabulce není žádná indikace, která hladina je *aktuální*; ta se nastavuje výběrem z rozbalovací nabídky panelu hladin nebo příkazem [LayerMakeCurrent](../layer-make-current/), nikoli z tohoto dialogu. Názvy hladin jsou také pevné od vytvoření — hladinu lze smazat a znovu vytvořit, ale nelze ji přejmenovat.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Enter` | Potvrdí název nové hladiny (při přidávání) |
| `Escape` | Zruší přidávání hladiny, nebo zavře dialog |

## Související příkazy

| Příkaz | Co dělá |
|--------|---------|
| [LayerMakeCurrent](../layer-make-current/) | Nastaví aktuální hladinu podle hladiny objektu, na který kliknete |
| [LayerMatch](../layer-match/) | Přiřadí vybrané objekty ke hladině zdrojového objektu |
| [LayerIsolate](../layer-isolate/) | Zmrazí všechny hladiny kromě hladin vybraných objektů |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Rozmrazí všechny hladiny jedním krokem |
