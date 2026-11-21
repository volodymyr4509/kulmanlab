---
title: "BlockInsert-opdracht — Een blok uit de tekening plaatsen"
description: "De opdracht BlockInsert opent een palet met voorbeelden van de blokken van de tekening. Kies er een, stel schaal en rotatie in en klik of typ een punt om het te plaatsen, eenmalig of steeds opnieuw."
keywords: ["blok invoegen CAD", "blokpalet CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

De opdracht `BlokInvoegen` opent een palet met voorbeelden van elk blok in de tekening en plaatst het blok dat u kiest. Maak blokken met [Block Create](../block-create/) of open een DXF-bestand dat er heeft.

## Een blok plaatsen

1. Typ `BlokInvoegen` of klik op **Blok invoegen** in het paneel **Blokken**. Het palet dockt links, met een voorbeeldtegel per blok, twaalf per pagina; de pijlen onder de tegels bladeren door.
2. Typ in **Blokken zoeken** om de tegels op naam te beperken.
3. Stel **Schaal** (moet groter zijn dan 0) en **Rotatie** in graden in. **Plaatsing herhalen** staat standaard aan.
4. Klik op de tegel van een blok. Het blok volgt de cursor: klik om het op zijn basispunt te plaatsen, of typ X,Y voor een exacte positie. Als de cursor op een hoek is vergrendeld, kunt u een lengte typen.
5. Met **Plaatsing herhalen** aan blijft het blok de cursor volgen voor de volgende kopie tot u op **Escape** drukt. Met het uit eindigt de opdracht na één kopie.

## Goed om te weten

- Om een blok te verwijderen klikt u op de prullenbak op zijn tegel en bevestigt u. Een blok met verwijzingen in de tekening kan niet worden verwijderd: zijn tegel zegt **In gebruik, kan niet worden verwijderd**.
- Een tekening zonder blokken toont **Deze tekening heeft geen blokken** in het palet.
- **Escape** sluit het palet als er niets wordt geplaatst. Het is een van de gedockte panelen, waarvan links er telkens maar één wordt getoond.

---

*Gerelateerd: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
