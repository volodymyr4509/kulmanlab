---
title: FontAdd — Aangepast TTF-lettertype uploaden vanuit de terminal
description: Het FontAdd-commando opent de bestandskiezer van het systeem om een .ttf-lettertype te uploaden, zonder eerst het Font Manager-dialoogvenster te openen. Het is dezelfde upload die de knop "Add Font" in Font Manager activeert, hier beschikbaar als eigen terminal-commando.
keywords: [font add commando, fontadd commando, ttf uploaden terminal, aangepast lettertype CAD, kulmanlab]
group: style
order: 3
---

# FontAdd

Het `LettertypeToevoegen`-commando opent de bestandskiezer van het systeem om een eigen `.ttf`-lettertype te uploaden, zonder eerst het [Font Manager](../font-manager/)-dialoogvenster te openen. Het is dezelfde upload die de knop **Add Font** in Font Manager activeert — FontAdd is gewoon een directe weg daarheen vanuit de terminal.

## Een lettertype uploaden

1. Typ `LettertypeToevoegen` in de terminal, of klik op **Add Font** onderaan het [Font Manager](../font-manager/)-dialoogvenster.
2. Kies een `.ttf`-bestand in de systeemkiezer. Alleen TrueType-lettertypen worden ondersteund — `.otf` en `.woff`/`.woff2` niet.

Het commando is voltooid zodra de bestandskiezer opent — er volgt geen verdere klik of terminalinvoer. Het lettertype wordt geregistreerd en verschijnt in de groep **User** zodra het bestand is gekozen.

## Wat er gebeurt bij het uploaden

- De bestandsnaam (zonder extensie) wordt de naam van het lettertype. Het uploaden van `MyFont.ttf` voegt een lettertype toe met de naam `MyFont`.
- Het uploaden van een bestand waarvan de naam overeenkomt met een bestaand aangepast lettertype **vervangt** dat lettertype.
- Het lettertype wordt permanent opgeslagen in de browser (IndexedDB) en wordt automatisch opnieuw geladen de volgende keer dat u KulmanLab CAD opent — het is niet gebonden aan de huidige tekening.

## Toetsenbordreferentie

FontAdd heeft geen eigen toetsenbordinteractie — het hele commando bestaat uit de native bestandskiezer van de browser. Dat dialoogvenster annuleren (of geen bestand kiezen) laat de lettertypelijst ongewijzigd.

## Gerelateerde commando's

| Commando | Wat het doet |
|---------|-------------|
| [Font Manager](../font-manager/) | Blader door, bekijk, selecteer en verwijder lettertypen, inclusief uw eigen uploads |
| [Text](../text/) | Plaatst de tekstlabels waarop lettertypekeuzes van toepassing zijn |
