---
title: Příkaz ChangePrintArea — oříznutí exportu Print Manageru na obdélník
description: Příkaz ChangePrintArea vybere na plátně dva protilehlé rohy a nastaví tak oblast, kterou Print Manager exportuje. Podporuje zadávání souřadnic X,Y a uchopení a zapamatuje si oblast zvlášť pro prostor modelu a pro každé rozvržení.
keywords: [oblast tisku CAD, oříznutí exportu CAD, příkaz change print area, oříznutí v print manageru, oblast exportu CAD, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

Příkaz `ChangePrintArea` nastavuje obdélníkovou oblast, kterou exportuje [Print Manager](../print-manager/). Spouští se na holém plátně se skrytým Print Managerem a bere dva protilehlé rohy — stejné dva výběry jako [Rectangle](../rectangle/), takže zadávání souřadnic a uchopení fungují přesně tak jako tam.

## Výběr oblasti

1. Napište `ChangePrintArea` do terminálu, nebo klikněte na **Change Area** v postranním panelu Print Manageru. Print Manager se skryje a plátno se stane interaktivním.
2. **Klikněte na první roh**, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. **Klikněte na protilehlý roh**, nebo znovu napište `X,Y`.

Print Manager se znovu otevře s novou oblastí v náhledu, který se přizpůsobí přesnému poměru stran této oblasti.

Rohy se přichytávají k úchytům a průsečíkům jako u jakéhokoli jiného výběru bodu, takže můžete oříznout podle nakreslené geometrie, a ne od oka. Oba rohy lze zadat v libovolném pořadí — protilehlé rohy určují stejný obdélník, ať vyberete který dříve.

Stisknutím `Escape` zrušíte. Nic se nezapíše, takže se Print Manager znovu otevře s oblastí, kterou už měl.

## Kde se oblast pamatuje

Výběr se ukládá podle kontextu, nikoli globálně:

| Kontext | Slot |
|---------|------|
| Prostor modelu | Jeden sdílený slot |
| Každé rozvržení | Vlastní slot, uchovávaný zvlášť |

Když Print Manager znovu otevřete na stejném rozvržení — nebo na Modelu — obnoví se poslední oříznutí daného kontextu místo resetu a přepínání mezi rozvrženími ponechává oblast každého z nich nedotčenou.

To se drží pouze v paměti. Znovunačtení stránky vymaže všechny uložené oblasti a Print Manager se vrátí k výchozím hodnotám níže.

## Výchozí oblast

Když pro aktuální kontext není nic uloženo, Print Manager se otevře s:

| Kontext | Výchozí hodnota |
|---------|-----------------|
| Prostor modelu | Ohraničující obdélník všech objektů — stejný rozsah, na který přibližuje [Fit](../fit/) |
| Rozvržení | Celý list |

## Související příkazy

| Příkaz | Co dělá |
|--------|---------|
| [Print Manager](../print-manager/) | Okno exportu, na které se tato oblast vztahuje |
| [Rectangle](../rectangle/) | Stejný výběr dvou rohů, ale kreslí polylinii |
| [Fit](../fit/) | Přiblíží na rozsah, který je výchozí pro prostor modelu |
