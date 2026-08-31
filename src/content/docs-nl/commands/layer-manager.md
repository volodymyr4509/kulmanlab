---
title: LayerManager — Beheer Alle Lagen in Eén Tabel
description: De opdracht LayerManager opent een tabel met alle lagen in de tekening, waarin je lagen kunt toevoegen, ongebruikte kunt verwijderen en per laag bevriezing, vergrendeling, plotten, kleur, lijndikte en lijntype ter plekke kunt bewerken.
keywords: [lagenbeheer, CAD lagentabel, lagen beheren CAD, laag toevoegen CAD, laag verwijderen CAD, ongebruikte laag verwijderen, bevriezen vergrendelen plotten laag, kulmanlab lagenbeheer]
group: layer
order: 1
---

# LayerManager

De opdracht `LayerManager` opent een tabel met alle lagen in de tekening, waarbij **Freeze**, **Lock**, **Plot**, **Kleur**, **Lijndikte** en **Lijntype** rechtstreeks in de rij te bewerken zijn. Het is de centrale plek om lagen toe te voegen, ongebruikte te verwijderen en het gedrag van bestaande aan te passen — de andere laagopdrachten ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) doen elk één gerichte taak zonder hem te openen.

## De Layer Manager openen

- Typ `LayerManager` in de terminal, **of**
- Klik op de knop **Layer Manager** in het lagenpaneel.

Het dialoogvenster opent als een zwevend paneel; er hoeft vooraf niets geselecteerd te zijn.

## De lagentabel

| Kolom | Wat het bestuurt |
|-------|---------------------|
| Name | De naam van de laag, alleen-lezen weergegeven in de tabel (eenmalig ingesteld bij het aanmaken) |
| Freeze | Verbergt de entiteiten van de laag en sluit ze uit van selectie tot ze wordt ontdooid |
| Lock | Voorkomt dat entiteiten op de laag worden bewerkt, zonder ze te verbergen |
| Plot | Of de entiteiten van de laag worden opgenomen bij afdrukken of exporteren naar PDF |
| Color | De ACI-kleur van de laag — klik op het kleurvlak om de kleurkiezer te openen |
| Lineweight | De lijndikte van de laag — klik op de chip om de lijndiktekiezer te openen |
| Linetype | Het streepjespatroon van de laag — klik op de chip om de lijntypekiezer te openen |
| ✕ | Verwijdert de laag wanneer niets haar gebruikt — zie [Een laag verwijderen](#een-laag-verwijderen) |

Freeze, Lock of Plot omschakelen heeft direct effect — er is geen aparte opslagstap. Entiteiten die voor kleur, lijndikte of lijntype op **ByLayer** staan (de standaardinstelling) nemen over wat u hier instelt; entiteiten met een eigen expliciete overschrijving worden niet beïnvloed.

## Een laag toevoegen

1. Klik op **+ Add Layer** onderaan de tabel.
2. Typ een naam en druk op **Enter** om te bevestigen, of **Escape** om te annuleren.

Laagnamen mogen letters, cijfers, spaties en `_`, `-`, `$` bevatten. Een lege naam, een naam die al in gebruik is, of een naam met een ander teken wordt afgewezen met een inline foutmelding, en de rij blijft open voor een nieuwe poging.

Nieuwe lagen starten **ontdooid, ontgrendeld, plotbaar**, met kleur 7 (wit/zwart), lijndikte Default en lijntype Continuous — dezelfde standaardwaarden die [Import](../import/) toekent aan laag `0` in een lege tekening.

## Een laag verwijderen

Elke rij eindigt met een **✕**-knop die de laag uit de tekening haalt. Verwijderen gebeurt meteen — er is geen bevestigingsstap — maar wordt alleen aangeboden voor lagen waarvan niets afhangt:

| Situatie | Toestand van de knop |
|----------|----------------------|
| De laag is leeg | Actief — *Delete layer* |
| De laag is aan minstens één entiteit toegewezen | Uitgeschakeld — *Cannot delete: assigned to at least one entity* |
| Laag `0` | Helemaal geen knop |

**"In gebruik" geldt voor de hele tekening**, niet alleen voor wat je op dat moment ziet. Een entiteit op een layout (papierruimte) telt precies zo zwaar als een in modelruimte, dus een laag kan op het scherm leeg lijken en zich toch niet laten verwijderen. Bevroren lagen vormen geen uitzondering: bevriezen verbergt entiteiten maar heft hun toewijzing niet op, dus een bevroren laag met entiteiten blijft onverwijderbaar.

Laag `0` kan nooit verwijderd worden. Het is de terugvallaag die elke tekening gegarandeerd heeft, dus de knop wordt er helemaal niet voor getekend in plaats van uitgeschakeld getoond.

### "…is now in use and can't be deleted"

Af en toe lijkt de ✕ beschikbaar maar wordt de klik geweigerd met een balk boven in het paneel:

```
"WALLS" is now in use and can't be deleted
```

Dat is geen tegenspraak. Uitzoeken welke lagen in gebruik zijn betekent elke entiteit in de tekening langslopen, dus het resultaat wordt gecachet en alleen herbouwd wanneer het aantal entiteiten verandert — goedkoop bij honderden entiteiten, niet bij honderdduizenden. Een bestaande entiteit naar een laag verplaatsen verandert dat aantal niet, dus de uitgeschakelde toestand van de rij kan even achterlopen. De klik controleert alles opnieuw voordat er iets verdwijnt, en daarom komt de weigering op het moment van klikken in plaats van dat de laag verdwijnt terwijl er nog iets naar verwijst.

Sluit de balk met haar eigen **✕**. De laag blijft ongemoeid.

## Wat hier niet kan

De tabel geeft niet aan welke laag *actueel* is; dat stel je in via de keuzelijst van het lagenpaneel of met [LayerMakeCurrent](../layer-make-current/), niet vanuit dit venster. Laagnamen liggen bovendien vast bij het aanmaken — een laag kan verwijderd en opnieuw gemaakt worden, maar niet hernoemd.

## Toetsenbordreferentie

| Toets | Actie |
|-------|-------|
| `Enter` | Bevestig de naam van een nieuwe laag (tijdens het toevoegen) |
| `Escape` | Annuleer het toevoegen van een laag, of sluit het dialoogvenster |

## Gerelateerde commando's

| Commando | Wat het doet |
|---------|-------------|
| [LayerMakeCurrent](../layer-make-current/) | Stel de huidige laag in op de laag van een aangeklikte entiteit |
| [LayerMatch](../layer-match/) | Wijs geselecteerde entiteiten opnieuw toe aan de laag van een bronentiteit |
| [LayerIsolate](../layer-isolate/) | Bevries alle lagen behalve die van de geselecteerde entiteiten |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Ontdooi alle lagen in één stap |
