---
title: Selectiefilter — Een meervoudige selectie beperken op eigenschap
description: Zijn er veel entiteiten geselecteerd, dan opent een filterpictogram in de kop van het eigenschappenpaneel een venster met live aankruislijsten voor Type, Laag, Kleur, Lijndikte en Lijntype, opgebouwd uit wat er werkelijk in de selectie zit, zodat een grote gemengde selectie kan worden beperkt vóór het bulksgewijs bewerken.
keywords: [selectiefilter, selectie filteren CAD, facetfilter, selectie beperken, bulkbewerking CAD, filter eigenschappenpaneel, kulmanlab]
group: interface
order: 7
---

# Selectiefilter

Veel entiteiten tegelijk selecteren opent het eigenschappenpaneel in de weergave voor meervoudige selectie ("Selection (N)"). Een **filterpictogram** naast de sluitknop laat je die selectie op eigenschap beperken voordat je haar bulksgewijs bewerkt.

## Het filter openen

1. Selecteer meerdere entiteiten — sleep een selectiekader, klik met Shift of druk op Ctrl+A.
2. Klik op het **filterpictogram** (trechter) in de kop van het eigenschappenpaneel.
3. Onder de knop opent een venster met een aankruislijst voor elke eigenschap die binnen de selectie daadwerkelijk varieert.

## Facetten

Het venster kan tot vijf facetten tonen, elk live opgebouwd uit de huidige selectie:

| Facet | Getoonde waarden |
|-------|------------------|
| **Type** | Naam van het entiteitstype (Line, Circle, Hatch, …) |
| **Laag** | Laagnaam, met een kleurstaal die bij die laag hoort |
| **Kleur** | ACI-kleurindex |
| **Lijndikte** | Waarde van de lijndikte |
| **Lijntype** | Naam van het lijntype |

Een facet verschijnt alleen als de selectie er werkelijk meer dan één afzonderlijke waarde voor bevat — tien lijnen selecteren die allemaal op dezelfde laag liggen levert geen Laag-facet op, want aankruisen zou daar niets beperken. Entiteiten die een bepaalde eigenschap helemaal niet dragen (Hatch en Text hebben bijvoorbeeld geen lijndikte of lijntype) tellen simpelweg niet mee voor dat facet — en worden er ook nooit door uitgesloten.

## De selectie beperken

Kruis één of meer waarden in een facet aan om de selectie te beperken tot entiteiten die aan **alle** aangekruiste facetten voldoen (een entiteit moet in *elk* facet dat je hebt aangeraakt op minstens één aangekruiste waarde passen, niet slechts in één). De vakjes en tellingen van elk facet weerspiegelen waartoe de *andere* aangekruiste facetten al hebben beperkt, zodat een facet nooit zijn eigen al aangekruiste opties verbergt — het gebruikelijke gedrag van facetzoeken.

Het aantal resultaten werkt live bij terwijl je vakjes aan- en uitkruist, en de selectie op het canvas wordt mee beperkt: dit is geen louter weergavefilter, de entiteiten die niet meer passen worden werkelijk gedeselecteerd, klaar om precies de gefilterde deelverzameling bulksgewijs te bewerken.

## Filters wissen

Gebruik de resetknop van het venster om alle vakjes leeg te maken en terug te keren naar de volledige oorspronkelijke selectie, of sluit het venster (het opent de volgende keer dat je op het filterpictogram klikt met een verse basis voor de nieuwe selectie).

## Verwant

- [Match Properties](../../commands/match-properties/) — eigenschappen van de ene entiteit naar andere kopiëren, zodra je hebt beperkt om welke het gaat
- [LayerIsolate](../../commands/layer-isolate/) — een alternatief op laagniveau wanneer je alleen op laag wilt isoleren, los van wat er nu geselecteerd is
