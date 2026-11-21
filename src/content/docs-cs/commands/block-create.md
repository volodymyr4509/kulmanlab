---
title: "Příkaz BlockCreate — vytvoření bloku z objektů"
description: "Příkaz BlockCreate vytvoří z vybraných objektů pojmenovaný blok s vámi zvoleným základním bodem a nahradí je jednou referencí na něj. Blok pak lze znovu a znovu umísťovat příkazem BlockInsert."
keywords: ["vytvořit blok CAD", "blok z objektů CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

Příkaz `VytvořitBlok` vytvoří **blok**: pojmenovanou skupinu objektů, která se uloží ve výkresu jednou a umísťuje se, kolikrát chcete, příkazem [Block Insert](../block-insert/). Vybrané objekty se stanou blokem a ve výkresu je nahradí jedna reference na něj, takže se nic nezmění na vzhledu.

## Vytvoření bloku

1. Chcete-li, nejprve vyberte objekty, pak napište `VytvořitBlok` nebo klikněte na **Vytvořit blok** v panelu **Bloky**. Otevře se okno s již zahrnutým výběrem.
2. Napište **Název**. Nesmí být prázdné, nesmí obsahovat žádný ze znaků `< > / \ " : ; ? * | , =` ani zpětný apostrof a nesmí být názvem jiného bloku.
3. Kliknutím na **Vybrat objekty** objekty přidáte nebo odeberete: okno se skryje a vy klikáte na objekty nebo táhnete oblast. Stisknutím **Enter** nebo **Space** se vrátíte do okna, kde **Objekty** ukazuje počet.
4. Nastavte **Základní bod**, bod, podle kterého se blok umísťuje: napište jeho X a Y nebo klikněte na **Určit bod** a pak na plátno (nebo tam napište X,Y). Začíná na 0,0.
5. Klikněte na **OK**. Blok se uloží, objekty ustoupí jedné referenci na něj v základním bodě a terminál zaznamená název bloku a počet jeho objektů.

## Dobré vědět

- **OK** zůstává vypnuté, dokud něco není v pořádku, a zpráva pod poli říká co: prázdný nebo nepoužitelný název, již použitý název nebo žádné objekty.
- **Escape** při výběru objektů nebo základního bodu vrací do okna s blokem tak, jak byl. **Escape** v okně příkaz zruší.
- Blok se ukládá s výkresem a zapisuje se do DXF spolu se svými referencemi.

---

*Související: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
