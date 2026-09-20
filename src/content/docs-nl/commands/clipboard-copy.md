---
title: ClipboardCopy-opdracht — Entiteiten naar het systeemklembord kopiëren
description: De opdracht ClipboardCopy schrijft de geselecteerde entiteiten als JSON-tekst naar het systeemklembord, samen met de lagen en lijntypen waarnaar ze verwijzen, zodat ze met ClipboardPaste in een andere tekening of een ander browsertabblad geplakt kunnen worden.
keywords: [klembord kopiëren CAD, entiteiten tussen tekeningen kopiëren, CAD-objecten naar klembord, Ctrl+C CAD, kopiëren tussen tabbladen, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

De opdracht `KopiërenNaarKlembord` schrijft de geselecteerde entiteiten als JSON-tekst naar je **systeemklembord**. Omdat hij het echte klembord gebruikt en geen buffer in het geheugen, overleeft de gekopieerde geometrie buiten de tekening: plak haar met [ClipboardPaste](../clipboard-paste/) in een ander bestand, een tweede browsertabblad of een venster dat je later opent.

Dat is het verschil met [Copy](../copy/): Copy dupliceert entiteiten binnen de huidige tekening in één beweging, terwijl ClipboardCopy ze ergens neerlegt waar ze vanuit een volledig andere tekening opgehaald kunnen worden.

## Twee manieren om te starten

**Eerst selecteren, dan kopiëren** — de snelle weg:

1. Selecteer een of meer entiteiten op het canvas.
2. Druk op `Ctrl+C` (`Cmd+C` op macOS), of typ `KopiërenNaarKlembord` in de terminal.
3. De entiteiten worden meteen naar het klembord geschreven en de opdracht eindigt.

**Activeren, dan selecteren** — starten zonder selectie:

1. Druk op `Ctrl+C` of typ `KopiërenNaarKlembord` met een lege selectie.
2. De prompt toont **pick objects to copy — Enter or Space to confirm**.
3. **Selecteer objecten** — klik om afzonderlijke entiteiten in of uit de selectie te halen, of sleep om per gebied te selecteren.
4. Druk op **Enter** of **Space** om de selectie te kopiëren en af te sluiten.

Op **Enter** of **Space** drukken zonder selectie beëindigt de opdracht gewoon, zonder het klembord aan te raken.

## Wat er gekopieerd wordt

De klembordinhoud draagt meer dan kale geometrie, zodat plakken in een vreemde tekening er nog steeds goed uitziet:

| Onderdeel | Doel |
|-----------|------|
| **Entiteiten** | De volledige geserialiseerde vorm van elke geselecteerde entiteit |
| **Referentiepunt** | De linkeronderhoek van de gecombineerde begrenzing van de selectie — daar haakt ClipboardPaste de cursor aan |
| **Lagen** | Alleen de lagen waarnaar de gekopieerde entiteiten daadwerkelijk verwijzen, op naam |
| **Lijntypen** | Alleen de lijntypen waarnaar de gekopieerde entiteiten daadwerkelijk verwijzen, op naam |

Alleen *verwezen* tabelvermeldingen reizen mee — niet de volledige lagen- en lijntypetabellen van de brontekening. Arceerpatronen worden helemaal niet meegegeven en dat hoeft ook niet: de patroontabel van een tekening is de ingebouwde standaardset, en `.pat`-bestanden die je hebt geüpload staan in een opslag per gebruiker die al tussen tabbladen gedeeld wordt, dus een geplakte arcering vindt zelf haar patroon.

## Bevestiging

Bij succes meldt de terminal hoeveel entiteiten geschreven zijn:

```
3 entities copied to clipboard
```

Weigert de browser toegang tot het klembord, dan toont de terminal **Copy failed: clipboard access denied** en wordt er niets geschreven. Dat is een toestemmingsbeslissing van de browser, geen tekeningfout — zie [Klembordtoestemmingen](#klembordtoestemmingen) hieronder.

## Selecteren tijdens de opdracht

| Methode | Gedrag |
|---------|--------|
| **Klik** | Haalt de entiteit onder de cursor in of uit de selectie |
| **Naar rechts slepen** (strikt) | Voegt entiteiten toe die volledig binnen het kader liggen |
| **Naar links slepen** (kruisend) | Voegt entiteiten toe die de kaderrand snijden |
| **Enter** / **Space** | Bevestigt de selectie en kopieert |

## Toetsenbordoverzicht

| Toets | Actie |
|-------|-------|
| `Ctrl+C` / `Cmd+C` | ClipboardCopy activeren |
| `Enter` / `Space` | De huidige selectie kopiëren, of afsluiten als er niets geselecteerd is |
| `Escape` | Annuleren zonder te kopiëren |

## Klembordtoestemmingen

Schrijven naar het systeemklembord vereist toestemming van de browser. In de praktijk wordt een kopie die door een toetsaanslag wordt uitgelokt in huidige desktopbrowsers zonder vraag toegestaan, maar een pagina die de focus kwijt is, of een browser met strenge klembordinstellingen, kan weigeren. Zie je de melding over geweigerde toegang, klik dan één keer op het canvas om de pagina focus te geven en probeer het opnieuw.

Omdat de inhoud gewone JSON-tekst is, vervangt alles wat je daarna kopieert haar — een regel tekst, een URL. Kopieer opnieuw voordat je plakt als je het klembord tussendoor voor iets anders hebt gebruikt.

## Ondersteunde entiteiten

ClipboardCopy werkt met elk entiteitstype. Entiteiten worden geserialiseerd met hetzelfde mechanisme dat de eigen `.json`-export gebruikt, dus onderweg gaat er niets verloren.

## Zie ook

- [ClipboardPaste](../clipboard-paste/) — het klembord teruglezen en de entiteiten plaatsen
- [Copy](../copy/) — entiteiten binnen de huidige tekening dupliceren
- [Export Manager](../export-manager/) — een hele tekening opslaan als DXF of JSON
