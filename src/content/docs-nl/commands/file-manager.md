---
title: File Manager — Miniaturenraster, Hernoemen & Verwijderen in KulmanLab CAD
description: Het File Manager-commando opent een miniaturenraster van elke opgeslagen tekening — klik op een miniatuur om deze te openen, hernoem ter plekke, of verwijder met bevestiging.
keywords: [file manager CAD, recente bestanden CAD, tekening hernoemen, tekening verwijderen, miniaturenraster CAD, tekening herstellen, DXF opnieuw openen, browseropslag CAD, KulmanLab bestanden, opgeslagen tekeningen, IndexedDB CAD, back-up CAD-tekening]
group: file
order: 3
---

# File Manager

Het commando `Bestandsbeheer` opent een **miniaturenraster** van elke tekening die is opgeslagen in de lokale opslag van uw browser, gesorteerd op het tijdstip waarop elke tekening voor het laatst is opgeslagen. Gebruik het om een eerdere tekening opnieuw te openen, te hernoemen of te verwijderen.

## De File Manager openen

- Typ `Bestandsbeheer` in de terminal, **of**
- Klik op de werkbalkknop **File Manager** (geschiedenisicoon) in het Bestand-paneel bovenaan het scherm.

Het paneel opent aan de linkerkant van het canvas en sluit automatisch zodra u een ander commando start of een bestand [importeert](../import/) — zodat het nooit blijft hangen boven een tekening die het nog niet vermeldt. Het gaat elke keer weer open met een actuele lijst.

## Het miniaturenraster

Elke opgeslagen tekening is een kaart met een live gegenereerde miniatuur, de naam ervan en het tijdstip van de laatste update. Miniaturen worden telkens ter plekke gegenereerd wanneer het paneel opent — er wordt niets vooraf gerenderd of opgeslagen — dus een kaart toont even een plaatshouderpictogram terwijl de miniatuur wordt getekend. Dezelfde plaatshouder verschijnt ook als het genereren mislukt, of als de tekening werkelijk nog geen entiteiten bevat.

| Actie | Hoe |
|--------|-----|
| Een tekening **openen** | Klik op de miniatuur — vervangt de huidige canvasinhoud |
| **Hernoemen** | Klik op het potloodicoon, of dubbelklik op de naam |
| **Verwijderen** | Klik op het prullenbakicoon en bevestig |

Als er nog geen bestanden zijn opgeslagen, toont het paneel "No files saved". Bij meer bestanden dan op één scherm passen, verschijnen onder het raster de bedieningselementen **Page 1 of N**.

De kaart van het bestand dat momenteel in de editor geopend is, is gemarkeerd met een ring in de accentkleur en heeft **geen verwijderknop** — het verwijderen van het geopende bestand zou de opgeslagen gegevens ervan wissen terwijl het canvas het nog steeds toont, en de volgende bewerking zou het meteen weer opslaan. Hernoemen blijft wel mogelijk.

## Een bestand verwijderen

Klikken op het prullenbakicoon verwijdert niet meteen — het activeert een bevestigingsoverlay op die kaart ("Delete this file?" met de knoppen **Delete** / **Cancel**), aangezien verwijderen permanent is en niet ongedaan kan worden gemaakt. Klikken op **Cancel**, klikken op het prullenbakicoon van een andere kaart, of ergens anders op de kaart klikken, laat de openstaande bevestiging vallen zonder iets te verwijderen.

## Een bestand hernoemen

Klik op het potloodicoon (of dubbelklik op de bestandsnaam) om deze ter plekke te bewerken, en druk vervolgens op **Enter** om te bevestigen of op **Escape** om te annuleren. Een hernoeming wordt geweigerd als de nieuwe naam:

- leeg is, of langer dan 100 tekens,
- al wordt gebruikt door een ander opgeslagen bestand (hoofdletterongevoelig),
- eindigt op een punt, of
- een door Windows gereserveerde apparaatnaam is, zoals `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, of `LPT1`–`LPT9`.

Tekens die niet geldig zijn in een bestandsnaam (`\ / : * ? " < > |`) worden automatisch verwijderd terwijl u typt. Hernoemen wijzigt alleen het label — het heeft geen invloed op de positie van de tekening in het raster, aangezien dat gesorteerd is op tijdstip van laatste opslag, niet op naam.

## Back-up van uw werk — browseropslag is niet permanent

KulmanLab slaat tekeningen op in **IndexedDB**, een database die ingebouwd is in uw browser:

- Bestanden worden **uitsluitend lokaal op uw apparaat** opgeslagen — er wordt niets naar een server geüpload.
- Elke browser en elk apparaat heeft zijn eigen onafhankelijke opslag. Een tekening die is opgeslagen in Chrome op de ene computer verschijnt niet in Firefox, of op een andere machine.
- Deze opslag **kan zonder waarschuwing worden gewist** — door sitegegevens of browsegeschiedenis te wissen, door weinig schijfruimte, door gebruik van een privé-/incognitovenster, door de browser of het besturingssysteem opnieuw te installeren, of door van apparaat te wisselen. Geen van deze gevallen geeft u de kans om te herstellen wat er stond.

**De enige betrouwbare manier om een tekening veilig te bewaren, is deze te [exporteren](../export-manager/) naar uw eigen opslag.** Gebruik `.json` (het native formaat van KulmanLab) waar mogelijk — dit behoudt elke entiteit exact; gebruik `.dxf` wanneer u compatibiliteit met andere CAD-tools nodig heeft. Doe dit voor alles wat u niet zou willen verliezen, en voordat u browsergegevens wist, van browser of apparaat wisselt, of de machine een tijdje wegzet.

## Automatisch bestand laden bij opstart

Wanneer u KulmanLab CAD opent, laadt de app automatisch het **meest recent gewijzigde bestand** uit de opslag. U hoeft dit niet elke keer handmatig te openen vanuit de File Manager.

## Opslag beheren

Er is geen vast limiet voor het aantal tekeningen dat u kunt opslaan, maar browseropslag is eindig. Als u opslagwaarschuwingen opmerkt, verwijder dan oudere bestanden uit de File Manager — of exporteer ze eerst, zodat er niets verloren gaat.

Om alle opgeslagen tekeningen in één keer te verwijderen, gebruikt u het commando [WipeStorage](../wipestorage/).

## Bestandsnamen

Nieuwe en geïmporteerde bestanden krijgen een eenvoudige naam — er wordt geen tijdstempel ingebakken. Als die naam al in gebruik is, wordt automatisch een Finder/Explorer-achtig achtervoegsel toegevoegd (`plan (2)`, `plan (3)`, …), zodat er nooit iets wordt overschreven. U kunt een bestand achteraf altijd een duidelijkere naam geven via [hernoemen](#een-bestand-hernoemen).

## Gerelateerde commando's

- [Import](../import/) — laad een tekening vanuit uw bestandssysteem in browseropslag
- [Export Manager](../export-manager/) — download een tekening naar uw bestandssysteem
- [New File](../new-file/) — start een lege tekening (ook automatisch opgeslagen)
- [WipeStorage](../wipestorage/) — wis alle opgeslagen bestanden uit browseropslag
</content>
</invoke>
