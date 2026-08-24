---
title: ChangePrintArea — de export van Print Manager bijsnijden tot een rechthoek
description: Het ChangePrintArea-commando kiest twee tegenoverliggende hoeken op het canvas om het gebied te bepalen dat Print Manager exporteert. Ondersteunt getypte X,Y-coördinaten en snapping, en onthoudt het gebied apart voor de modelruimte en voor elke lay-out.
keywords: [CAD afdrukgebied, CAD export bijsnijden, change print area commando, print manager uitsnede, CAD exportgebied, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

Het `ChangePrintArea`-commando bepaalt het rechthoekige gebied dat [Print Manager](../print-manager/) exporteert. Het draait op het lege canvas terwijl Print Manager verborgen is en neemt twee tegenoverliggende hoeken — dezelfde twee klikken als [Rectangle](../rectangle/), zodat getypte coördinaten en snapping zich precies zo gedragen.

## Een gebied selecteren

1. Typ `ChangePrintArea` in de terminal, of klik op **Change Area** in de zijbalk van Print Manager. Print Manager verbergt zich en het canvas wordt interactief.
2. **Klik op de eerste hoek**, of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
3. **Klik op de tegenoverliggende hoek**, of typ opnieuw `X,Y`.

Print Manager opent opnieuw met het nieuwe gebied in de preview, die zich aanpast aan de exacte beeldverhouding daarvan.

Hoeken snappen naar grips en snijpunten zoals elke andere puntkeuze, zodat je op getekende geometrie kunt bijsnijden in plaats van op het oog. De volgorde van de twee hoeken maakt niet uit: tegenoverliggende hoeken bepalen dezelfde rechthoek.

Druk op `Escape` om te annuleren. Er wordt niets weggeschreven, dus Print Manager opent weer met het gebied dat het al had.

## Waar het gebied wordt onthouden

De selectie wordt per context bewaard, niet globaal:

| Context | Plek |
|---|---|
| Modelruimte | Eén gedeelde plek |
| Elke lay-out | Een eigen, apart bewaarde plek |

Print Manager opnieuw openen op dezelfde lay-out — of in de modelruimte — herstelt de laatste uitsnede van die context in plaats van hem te resetten, en wisselen tussen lay-outs laat het gebied van elke lay-out ongemoeid.

Dit wordt alleen in het geheugen bewaard. De pagina herladen wist alle opgeslagen gebieden en Print Manager valt terug op de standaardwaarden hieronder.

## Standaardgebied

Als er niets is opgeslagen voor de huidige context, opent Print Manager op:

| Context | Standaard |
|---|---|
| Modelruimte | De omhullende rechthoek van alle entiteiten — dezelfde uitgestrektheid waarop [Fit](../fit/) inzoomt |
| Elke lay-out | Het hele vel |

## Verwante commando's

| Commando | Wat het doet |
|---|---|
| [Print Manager](../print-manager/) | Het exportvenster waarop dit gebied van toepassing is |
| [Rectangle](../rectangle/) | Dezelfde keuze van twee hoeken, maar tekent een polylijn |
| [Fit](../fit/) | Zoomt in op de uitgestrektheid die de modelruimte standaard gebruikt |
