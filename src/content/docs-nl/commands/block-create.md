---
title: "BlockCreate-opdracht — Een blok maken van objecten"
description: "De opdracht BlockCreate maakt een benoemd blok van de geselecteerde objecten, met een basispunt naar keuze, en vervangt ze door één verwijzing ernaar. Het blok kan daarna steeds opnieuw geplaatst worden met BlockInsert."
keywords: ["blok maken CAD", "blok van objecten CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

De opdracht `BlokMaken` maakt een **blok**: een benoemde groep objecten die één keer in de tekening wordt opgeslagen en zo vaak als u wilt wordt geplaatst met [Block Insert](../block-insert/). De gekozen objecten worden het blok en worden in de tekening vervangen door één verwijzing ernaar, dus er verandert niets aan het uiterlijk.

## Een blok maken

1. Selecteer desgewenst eerst de objecten en typ dan `BlokMaken` of klik op **Blok maken** in het paneel **Blokken**. Er opent een popup met de selectie er al in.
2. Typ een **Naam**. Die mag niet leeg zijn, geen van de tekens `< > / \ " : ; ? * | , =` of een backtick bevatten en niet de naam van een ander blok zijn.
3. Klik op **Objecten selecteren** om objecten toe te voegen of weg te halen: de popup verdwijnt en u klikt objecten aan of sleept een gebied. Druk op **Enter** of **Space** om terug te gaan naar de popup, waar **Objecten** het aantal toont.
4. Stel het **Basispunt** in, het punt waarmee het blok wordt geplaatst: typ de X en Y, of klik op **Punt kiezen** en dan op het canvas (of typ daar X,Y). Het begint bij 0,0.
5. Klik op **OK**. Het blok wordt opgeslagen, de objecten maken plaats voor één verwijzing ernaar op het basispunt en de terminal logt de naam van het blok en hoeveel objecten het bevat.

## Goed om te weten

- **OK** blijft uitgeschakeld zolang er iets mis is, en het bericht onder de velden zegt wat: een lege of onbruikbare naam, een naam die al bestaat, of geen objecten.
- **Escape** tijdens het kiezen van objecten of het basispunt gaat terug naar de popup met het blok zoals het was. **Escape** in de popup annuleert de opdracht.
- Het blok wordt met de tekening opgeslagen en samen met zijn verwijzingen naar DXF geschreven.

---

*Gerelateerd: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
