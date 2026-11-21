---
title: "Příkaz BlockInsert — umístění bloku z bloků výkresu"
description: "Příkaz BlockInsert otevře paletu náhledů bloků výkresu. Vyberte jeden, nastavte měřítko a otočení a kliknutím nebo zadáním bodu ho umístěte, jednou nebo opakovaně."
keywords: ["vložit blok CAD", "paleta bloků CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

Příkaz `VložitBlok` otevře paletu náhledů všech bloků výkresu a umístí vybraný. Bloky vytvářejte příkazem [Block Create](../block-create/) nebo otevřete soubor DXF, který nějaké má.

## Umístění bloku

1. Napište `VložitBlok` nebo klikněte na **Vložit blok** v panelu **Bloky**. Paleta se ukotví vlevo s dlaždicí náhledu pro každý blok, dvanáct na stránku; šipky pod dlaždicemi listují.
2. Psaním do **Hledat bloky** zúžíte dlaždice podle názvu.
3. Nastavte **Měřítko** (musí být větší než 0) a **Natočení** ve stupních. **Opakovat vkládání** je ve výchozím stavu zapnuto.
4. Klikněte na dlaždici bloku. Blok následuje kurzor: kliknutím ho umístíte podle základního bodu, nebo napište X,Y pro přesnou polohu. Je-li kurzor zamčen na úhel, můžete napsat délku.
5. Při zapnutém **Opakovat vkládání** blok dál následuje kurzor pro další kopii, dokud nestisknete **Escape**. Při vypnutém příkaz skončí po jedné kopii.

## Dobré vědět

- Blok smažete kliknutím na koš na jeho dlaždici a potvrzením. Blok, na který jsou ve výkresu reference, smazat nelze: jeho dlaždice říká **Používá se, nelze smazat**.
- Výkres bez bloků zobrazuje v paletě **Výkres neobsahuje žádné bloky**.
- **Escape** zavře paletu, když se nic neumísťuje. Je to jeden z ukotvených panelů, z nichž je vlevo vždy vidět jen jeden.

---

*Související: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
