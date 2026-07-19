---
title: Files — Recente Bestanden-paneel in KulmanLab CAD
description: Het Files-commando opent het paneel Recente Bestanden — blader door alle tekeningen die in uw browser zijn opgeslagen, herstel er een naar het canvas, of verwijder er die u niet meer nodig heeft.
keywords: [recente bestanden CAD, bestandsgeschiedenis browser CAD, tekening herstellen, DXF opnieuw openen, browseropslag CAD, KulmanLab bestanden, opgeslagen tekeningen, IndexedDB CAD, tekeningen beheren]
group: file
order: 3
---

# Files

Het **Files**-commando opent het paneel **Recente Bestanden** — een lijst van alle tekeningen die in de lokale opslag van uw browser zijn opgeslagen. Gebruik het om een eerdere tekening opnieuw te openen of bestanden te verwijderen die u niet meer nodig heeft.

## Het paneel Recente Bestanden openen

Klik op de **Files**-werkbalkknop (geschiedenisicoon) in het Bestand-paneel bovenaan het scherm. Het paneel opent aan de linkerkant van het canvas.

## Paneel Recente Bestanden

Elk item in de lijst toont de bestandsnaam en twee actieknoppen:

| Knop | Actie |
|--------|--------|
| ✓ **Herstellen** | Laad de tekening op het canvas — vervangt de huidige inhoud |
| ✕ **Verwijderen** | Verwijder het bestand permanent uit de browseropslag |

Als er nog geen bestanden zijn opgeslagen, toont het paneel "Geen bestanden opgeslagen".

## Hoe bestanden worden opgeslagen

KulmanLab slaat tekeningen op in **IndexedDB** — een permanente database in de browser. Dit betekent:

- Bestanden overleven het herladen van de pagina en het herstarten van de browser.
- Bestanden worden **lokaal op uw apparaat** opgeslagen — ze worden niet naar een server geüpload.
- Elke browser en elk apparaat heeft zijn eigen onafhankelijke opslag. Een tekening opgeslagen in Chrome op de ene computer is niet beschikbaar in Firefox of op een andere machine.
- Het wissen van de sitegegevens van de browser verwijdert alle opgeslagen bestanden.

## Automatisch bestand laden bij opstart

Wanneer u KulmanLab CAD opent, laadt de app automatisch het **meest recent gewijzigde bestand** uit de opslag. U hoeft het niet elke keer handmatig te openen vanuit het Files-paneel.

## Opslag beheren

Er is geen vast limiet voor het aantal tekeningen dat u kunt opslaan, maar browseropslag is eindig. Als u opslagwaarschuwingen ziet, verwijder dan oudere bestanden uit het Files-paneel.

Om alle opgeslagen tekeningen tegelijk te verwijderen, gebruikt u het commando [WipeStorage](../wipestorage/).

## Bestandsnamen en versiebeheer

Elk bestand heeft een tijdstempel in zijn naam (bijv. `myplan_May22_14:30:00.dxf`). Deze tijdstempel wordt automatisch toegevoegd wanneer u een bestand [importeert](../import/), zodat het opnieuw importeren van hetzelfde bronbestand een nieuw item aanmaakt in plaats van de vorige versie te overschrijven.

## Gerelateerde commando's

- [Import](../import/) — laad een tekening vanuit uw bestandssysteem in browseropslag
- [Export](../export/) — download een tekening naar uw bestandssysteem
- [New File](../new-file/) — start een lege tekening (ook automatisch opgeslagen)
- [WipeStorage](../wipestorage/) — wis alle opgeslagen bestanden uit browseropslag
