---
title: Print-commando — Exporteer de tekening als PNG, JPEG, WebP of PDF
description: Het Print-commando opent de Print Manager — een apart exportvenster met live preview, formaatkeuze, monochrome schakelaar en optionele gebiedsselectie. Exporteert tot 2000×2000 px. Ondersteunt PNG, JPEG, WebP en PDF.
keywords: [CAD export PNG, CAD export PDF, CAD-tekening printen, print manager, monochrome export, kulmanlab export]
group: file
order: 4
---

# Print

Het `print`-commando opent de **Print Manager** — een apart exportvenster met een live preview-canvas, formaatkeuze (PNG / JPEG / WebP / PDF), monochrome schakelaar en optionele gebiedsbijsnijding. Er wordt niets naar een fysieke printer gestuurd; de uitvoer wordt gedownload als bestand.

## De Print Manager openen

Klik op de **Print**-werkbalkknop of typ `print` in de terminal. De Print Manager opent direct met een preview van de huidige viewport.

## Indeling van de Print Manager

Het venster heeft twee panelen:
- **Linker zijbalk** — alle exportinstellingen.
- **Rechterpaneel** — live preview-canvas dat bijwerkt terwijl u instellingen wijzigt.

### Bediening in de zijbalk

| Bediening | Beschrijving |
|---------|-------------|
| **Change Area** | Bijsnijden naar een aangepaste rechthoek op het canvas (zie hieronder) |
| **Monochrome**-schakelaar | Zet alle gekleurde lijnen om naar zwart — standaard ingeschakeld voor nette afdrukken |
| **Format**-vervolgkeuzelijst | PNG, JPEG, WebP of PDF |
| **Export**-knop | Genereer en download het bestand |

## Een aangepast exportgebied selecteren

Standaard toont de preview precies wat zichtbaar was op het canvas toen u de Print Manager opende. Om een specifiek gebied te exporteren:

1. Klik op **Change Area** — de Print Manager wordt verborgen en het canvas wordt interactief.
2. **Klik de eerste hoek** van de exportrechthoek aan.
3. **Klik de tegenoverliggende hoek** aan — de Print Manager opent opnieuw met het geselecteerde gebied in de preview.

Druk tijdens gebiedsselectie op `Escape` om te annuleren en het vorige gebied te herstellen.

De preview-canvas past dynamisch van grootte aan om de **exacte beeldverhouding** van het geselecteerde gebied te volgen, zodat de preview pixel-nauwkeurig is.

## Exportformaten

| Formaat | Beste voor | Opmerkingen |
|--------|----------|-------|
| **PNG** | Verliesvrij, scherpe lijnen | Witte achtergrond, geen transparantie |
| **JPEG** | Kleiner bestand om te delen | 95% kwaliteit, lichte compressie |
| **WebP** | Kleinste bestand voor het web | Zelfde 95% kwaliteit, betere compressie dan JPEG |
| **PDF** | Afdrukklare documenten | Afbeelding ingebed op 150 DPI in PDF-container |

Het geëxporteerde bestand heet `kulman-<timestamp>.<ext>` en wordt automatisch gedownload.

## Exportresolutie en achtergrond

- Maximale resolutie: **2000 × 2000 pixels**, proportioneel geschaald naar het geselecteerde gebied.
- Achtergrond is altijd **wit**.
- Lagen gemarkeerd als **niet-plottend** worden uitgesloten van de export.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Escape` (tijdens gebiedsselectie) | Annuleer gebiedsselectie, herstel vorig gebied |
| `Escape` (in Print Manager) | Sluit de Print Manager |
