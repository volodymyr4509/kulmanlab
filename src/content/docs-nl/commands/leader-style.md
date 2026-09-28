---
title: Opdracht Aanwijsstijl — Aanwijslijnstijlen beheren
description: Maak CAD-aanwijsstijlen met pijlpunt, tekstbevestiging, afstand, rotatie, lettertype, hoogte en tekstkader.
keywords: [aanwijsstijl CAD, multileader-stijl, MLEADERSTYLE, pijlpunt CAD, tekstbevestiging, DXF-stijl, kulmanlab]
group: style
order: 7
---

# LeaderStyle

De opdracht `Aanwijsstijl` opent het beheer voor benoemde aanwijslijnstijlen. Elke nieuwe [Verwijslijn](../leader/) kopieert bij het maken de instellingen van de *huidige* stijl.

## Een stijl bewerken

Typ `Aanwijsstijl` of klik op **Aanwijslijnstijl** in het annotatiepaneel. ✓ markeert de huidige stijl; gebruik het potlood naast de naam om deze te wijzigen. Het voorbeeld wordt direct bijgewerkt met dezelfde renderer als de tekening.

| Veld | Functie |
|---|---|
| Tekstbevestiging | Boven, Midden, Onder of Onderstreept |
| Pijlpunt / Pijlgrootte | Symbool en grootte aan elk uiteinde |
| Afstand aanlanding | Ruimte tussen de aanlanding en de tekst |
| Tekstrotatie | Hoek van het label in graden |
| Tekststijl | Kopieert eenmalig lettertype, hoogte, vet en cursief uit een [TextStyle](../text-style/) |
| Lettertype / Teksthoogte | Lettertype en hoogte van het label |
| Vet / Cursief | Onafhankelijke tekstopmaak |
| Tekstkader | Rechthoekig kader rond het label |

**Nieuw** dupliceert de geselecteerde stijl. `Standard` kan niet worden hernoemd of verwijderd; ook de huidige stijl kan niet worden verwijderd. **Als huidig instellen** beïnvloedt alleen verwijslijnen die later worden gemaakt — bestaande objecten veranderen niet. Een lege, dubbele of voor DXF ongeldige naam schakelt **OK** uit. Geïmporteerde annotatieve stijlen zijn verborgen maar blijven behouden.

## Opslaan en DXF

KulmanLab importeert en exporteert `MLEADERSTYLE`-records. Naam, pijlpunt en -grootte, tussenruimte, teksthoogte, tekstaanhechting, kader en annotatieve vlag blijven als stijlvelden behouden. Bij export wijst groep `342` naar de Tekststijl waarvan lettertype, vet, cursief en hoogte overeenkomen; zonder overeenkomst wordt `Standard` gebruikt. Deze DXF-verwijzing maakt de eenmalige kopie in de app niet tot een live koppeling. De ene aanhechtingswaarde wordt naar zowel het linker- als rechter-DXF-veld geschreven.

Zie ook [Leader](../leader/), [LeaderAdd](../leader-add/) en [LeaderRemove](../leader-remove/).
