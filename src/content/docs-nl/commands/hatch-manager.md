---
title: Hatch Manager-commando — .pat-patronen doorbladeren en uploaden
description: Het Hatch Manager-commando opent een dialoogvenster om hatch-patronen te doorbladeren met een live swatch-voorbeeld, en om uw eigen .pat-patroonbestanden te uploaden. Geüploade bestanden worden opgeslagen in de browser en overschaduwen ingebouwde patronen met dezelfde naam.
keywords: [hatch manager, aangepast hatch-patroon CAD, pat-bestand uploaden, acad.pat, hatch-patroonbibliotheek, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

Het commando `Arceringbeheer` opent een dialoogvenster om hatch-patronen te doorbladeren met een live swatch-voorbeeld, en om uw eigen `.pat`-patroonbestanden te uploaden voor gebruik met [Hatch](../hatch/).

## De Hatch Manager openen

Typ `Arceringbeheer` in de terminal. Dit is gescheiden van de patroonkiezer die opent wanneer u op de **Pattern**-chip van een hatch klikt — de kiezer kiest een patroon voor één hatch, de Hatch Manager is waar u `.pat`-bestanden toevoegt of verwijdert.

## Patroongroepen

| Groep | Inhoud |
|-------|--------|
| **User** | Patronen uit uw eigen geüploade `.pat`-bestanden, ondergroepeerd naar het bestand waar elk patroon vandaan komt (alleen getoond nadat u er één heeft geüpload) |
| **Standard** | `SOLID` plus de eigen patroontabel van deze tekening — elke nieuwe tekening begint met dezelfde ingebouwde bibliotheek, net als de lagen en lijntypen ervan |

Klik op een patroon in de lijst (of gebruik `↑`/`↓`) om het rechts te bekijken — een swatch getekend met dezelfde code waarmee het canvas wordt gevuld, dus het is precies wat de tekening zal tonen, plus de naam, beschrijving en lijnaantal van het patroon.

## Een aangepast patroonbestand uploaden

1. Klik op **Add .pat File** in de voettekst van het dialoogvenster.
2. Kies een `.pat`-bestand — het standaard hatch-patroonformaat. Eén bestand definieert vaak veel benoemde patronen tegelijk; ze verschijnen allemaal als afzonderlijke items, gegroepeerd onder de naam van dat bestand.
3. Geüploade bestanden worden permanent opgeslagen in de browser (IndexedDB), gesorteerd op meest recent toegevoegd eerst, en automatisch opnieuw geladen de volgende keer dat u KulmanLab CAD opent.

Het uploaden van een bestand dat een patroon met dezelfde naam als een ingebouwd patroon definieert, **overschaduwt** de standaard — dit is de ondersteunde manier om Autodesks officiële patroondefinities te krijgen: upload een echte `acad.pat`, en de versies daarvan van ANSI31 en de andere standaardnamen nemen het over van KulmanLabs eigen benaderingen.

Als een tekening verwijst naar een patroonnaam die niet in uw bibliotheek staat — geïmporteerd uit een DXF die een patroon gebruikte uit een `acad.pat` die u niet heeft geüpload — wordt de hatch nog steeds weergegeven, met `ANSI31` als vervanging, in plaats van terug te vallen op een platte, patroonloze vulling.

## Een patroonbestand verwijderen

Klik op de **×** naast een bestandsnaam in de **User**-groep om deze en elk patroon dat het definieerde te verwijderen. Elke hatch die al een van die patronen gebruikt, valt onmiddellijk terug op `ANSI31`. Ingebouwde **Standard**-patronen kunnen niet worden verwijderd.

## Toetsenbordreferentie

| Toets | Actie |
|-------|-------|
| `↑` / `↓` | Verplaats de selectie omhoog of omlaag in de patroonlijst |
| `Escape` | Sluit de Hatch Manager |

## Gerelateerde commando's

- [Hatch](../hatch/) — vult een aangeklikt gebied met het momenteel geselecteerde patroon
- [Font Manager](../font-manager/) — hetzelfde upload-/doorblader-patroon, voor aangepaste lettertypen in plaats van hatch-patronen
