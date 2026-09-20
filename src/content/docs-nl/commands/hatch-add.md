---
title: HatchAdd-commando — een .pat-arceringsbestand uploaden vanaf de terminal
description: HatchAdd opent de bestandskiezer om een .pat-patroonbestand te uploaden zonder eerst de Hatch Manager te openen. Alle patronen erin worden in één keer toegevoegd.
keywords: [hatch add commando, hatchadd commando, pat bestand uploaden terminal, eigen arceringspatroon CAD, acad.pat, patroonbibliotheek, kulmanlab]
group: style
order: 5
---

# HatchAdd

Het commando `ArceringToevoegen` opent de bestandskiezer van het systeem om een `.pat`-arceringspatroonbestand te uploaden, zonder eerst het dialoogvenster [Hatch Manager](../hatch-manager/) te openen. Het is dezelfde upload die de knop **Add .pat File** in de Hatch Manager start — HatchAdd is er alleen een directe route naartoe vanaf de terminal.

## Een patroonbestand uploaden

1. Typ `ArceringToevoegen` in de terminal, of klik op **Add .pat File** onderin het dialoogvenster [Hatch Manager](../hatch-manager/).
2. Kies een `.pat`-bestand in de systeemkiezer. Alleen het standaardformaat voor arceringspatronen wordt geaccepteerd.

Het commando eindigt zodra de bestandskiezer opent — er volgt geen prompt, klik of terminalinvoer meer. De patronen worden geregistreerd en verschijnen in de groep **User** zodra het bestand is gekozen.

## Wat er gebeurt bij het uploaden

- **Een `.pat`-bestand is een houder, geen enkel patroon.** Eén bestand definieert doorgaans veel benoemde patronen, en ze worden allemaal samen toegevoegd. Daarin verschilt HatchAdd van [FontAdd](../font-add/), waar één `.ttf` één lettertype is.
- **Het bestand zelf wordt niet bewaard.** Het wordt één keer gelezen, opgesplitst in zijn patronen, en elk patroon wordt apart onder zijn eigen naam opgeslagen. Daarom kun je later één patroon verwijderen zonder de patronen die ermee binnenkwamen aan te raken — en daarom sorteert de groep **User** ze alfabetisch op naam in plaats van op het bestand waar ze vandaan komen.
- **Een patroon met dezelfde naam als een bestaand patroon vervangt het.** Dit is de bedoelde manier om gezaghebbende definities over KulmanLabs eigen benaderingen te leggen: upload een echte `acad.pat` en zijn versies van `ANSI31` en de andere standaardnamen nemen het over.
- **Patronen worden per gebruiker opgeslagen, niet per tekening.** Ze leven in de browser (IndexedDB), laden vanzelf opnieuw wanneer je KulmanLab CAD de volgende keer opent, en zijn in elke tekening beschikbaar.
- **Een bestand zonder geldige patroondefinities voegt niets toe.** De bibliotheek blijft precies zoals hij was.

## Toetsenbordreferentie

HatchAdd heeft geen eigen toetsenbordinteractie — het hele commando is het native bestandskiezervenster van de browser. Dat venster annuleren (of geen bestand kiezen) laat de patroonbibliotheek ongewijzigd.

## Gerelateerde commando's

| Commando | Wat het doet |
|---------|-------------|
| [Hatch Manager](../hatch-manager/) | De patroonbibliotheek doorbladeren met live voorbeeld, en geüploade patronen verwijderen |
| [Hatch](../hatch/) | Vult een gesloten gebied met een patroon uit de bibliotheek |
| [FontAdd](../font-add/) | Dezelfde directe-uploadsnelkoppeling voor `.ttf`-lettertypen |
