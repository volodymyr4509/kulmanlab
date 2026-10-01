---
title: "Opdracht Maatstijl — benoemde maatstijlen maken en beheren"
description: "Maak CAD-maatstijlen voor pijlen, hulplijnen, centrummarkeringen, tekst, precisie, uitlijning en DXF DIMSTYLE."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# Maatstijl

De opdracht opent een venster om benoemde maatstijlen te maken, bewerken, bekijken en kiezen. Nieuwe lineaire, uitgelijnde, straal-, diameter- en hoekmaten kopiëren de huidige stijl bij het maken; bestaande maten blijven niet gekoppeld.

## Dialoogvenster openen

Typ de gelokaliseerde opdracht in de terminal of klik op **Maatstijl** in het paneel **Annoteren**. Links staan de zichtbare stijlen; een vinkje markeert de huidige stijl en het potlood wijzigt de naam.

## Lijnen en pijlen

**Pijl 1 / Pijl 2 · Pijlgrootte · Afstand hulplijnen · Verlenging hulplijnen · Middelpuntmarkering · Grootte middelpuntmarkering**

Stel de twee pijlpunten afzonderlijk in, plus pijlformaat, afstand en verlenging van hulplijnen en type en grootte van de centrummarkering (`Geen`, `Markering` of `Lijnen`).

## Tekst

**Tekststijl · Lettertype · Teksthoogte · Tekstkader · Tekstafstand · Tekstbevestiging · Tekst uitgelijnd · Precisie · Hoeknauwkeurigheid**

Het tekstgedeelte beheert snel invullen uit Tekststijl, lettertype, hoogte, vet, cursief, kader, tussenruimte, een van negen aanhechtingsposities, uitlijning met de maatlijn en lineaire/hoekprecisie. Tekststijl kopieert waarden eenmalig en is geen actieve koppeling.

Het voorbeeld gebruikt dezelfde renderers als het canvas. Wissel tussen lineaire, straal-, diameter- en hoekvoorbeelden om pijlen, centrum, tekstpositie, precisie en kaders te controleren.

## Stijlen maken en beheren

**Nieuw** dupliceert de gekozen stijl. `Standard` kan niet worden hernoemd of verwijderd en de huidige stijl kan ook niet worden verwijderd. Namen moeten uniek, niet leeg en geldig voor DXF zijn. Geïmporteerde annotatieve stijlen blijven verborgen maar behouden.

## Huidige stijl instellen

**Huidige instellen** maakt de gekozen stijl de sjabloon voor nieuwe maten; de lijst in Annoteren biedt dezelfde keuze. Waarden worden bij het maken gekopieerd. Dimension Continue neemt de volledige vormgeving van de basismat over.

## Opslaan of verwerpen

**OK** past namen, toevoegingen, verwijderingen, eigenschappen en huidige stijl samen toe. **Sluiten**, op de achtergrond klikken of `Escape` verwerpt wijzigingen.

## DXF-compatibiliteit

KulmanLab importeert en exporteert benoemde `DIMSTYLE`-records met afzonderlijke pijlen, hulplijnen, tekst, precisie, centrummarkeringen, kader, tekststijlverwijzing en annotatieve vlag. Bij import hebben entiteitsgebonden `DSTYLE`-overschrijvingen voorrang.

Bij export gebruikt de verwezen `STYLE` variabele hoogte (`40 = 0`) en bewaart de laatste hoogte in groep `42`. Een vaste tekststijlhoogte overschrijft daardoor niet de eigen teksthoogte van de maatstijl.

## Verwante opdrachten

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
