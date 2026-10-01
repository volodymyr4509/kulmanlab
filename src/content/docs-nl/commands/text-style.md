---
title: Opdracht Tekststijl — Tekststijlen beheren
description: Maak CAD-tekststijlen met lettertype, hoogte, vet, cursief, regelafstand, uitlijning en kader.
keywords: [tekststijl CAD, lettertype CAD, tekstkader, tekstuitlijning, DXF-stijl, kulmanlab]
group: style
order: 6
---

# TextStyle

De opdracht `Tekststijl` opent het stijlbeheer. Maak stijlen met een naam, bewerk hun standaardwaarden en kies de *huidige* stijl. Nieuwe [Tekst](../text/) kopieert de instellingen van de huidige stijl zodra deze wordt gemaakt.

## Het stijlbeheer gebruiken

Typ `Tekststijl` of klik op **Tekststijl** in het annotatiepaneel. ✓ markeert de huidige stijl; dubbelklik op een rij om die stijl huidig te maken.

| Veld | Functie |
|---|---|
| Hernoemen | Gebruik het potlood naast de naam om deze in de lijst te wijzigen; `Standard` kan niet worden hernoemd. |
| Lettertype / Hoogte | Lettertype en verplichte positieve hoogte. Nul of negatieve waarden worden `1`; de beheerder accepteert alleen waarden groter dan `0`. |
| Vet / Cursief | Onafhankelijk instelbare opmaak |
| Regelafstand | Afstand tussen tekstregels |
| Horizontale uitlijning | Links, gecentreerd, rechts of uitgevuld |
| Kader | Rechthoekig kader rond nieuwe tekst |

De voorvertoning gebruikt dezelfde renderer als het canvas en toont twee regels. Lettertype, hoogte, vet, cursief, kader, regelafstand en uitlijning worden direct bijgewerkt; de waarde toont de passende zoom. Nieuwe stijlen zijn standaard **links** uitgelijnd.

**Nieuw** dupliceert de geselecteerde stijl. **Verwijderen** kan `Standard` of de huidige stijl niet verwijderen. **Als huidig instellen** beïnvloedt alleen tekst die daarna wordt gemaakt; bestaande tekst verandert niet. Een lege, dubbele of voor DXF ongeldige naam schakelt **OK** uit. Geïmporteerde annotatieve stijlen zijn verborgen, maar hun gegevens blijven behouden.

## Opslaan en DXF

Naam, lettertypebestanden, vet, cursief en annotatieve vlag blijven behouden in DXF-tekststijlen. KulmanLab schrijft STYLE-groep `40` als `0` (variabele hoogte) en de laatst gebruikte hoogte in groep `42`; een vaste STYLE-hoogte overschrijft dus niet de eigen teksthoogte van een maatstijl. Kader, regelafstand en horizontale uitlijning zijn KulmanLab-standaarden per tekst, geen velden van de DXF STYLE-tabel.
