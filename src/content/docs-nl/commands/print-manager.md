---
title: Print Manager — Exporteer de tekening als PNG, JPEG, WebP of PDF
description: Het PrintManager-commando opent de Print Manager — een apart exportvenster met een live preview die exact overeenkomt met het geëxporteerde bestand, een Kwaliteit/DPI-instelling, formaatkeuze, een Default/Monochrome/Blueprint-printstijl en optionele gebiedsselectie. Ondersteunt PNG, JPEG, WebP en PDF.
keywords: [CAD export PNG, CAD export PDF, CAD-tekening printen, print manager, printkwaliteit DPI, monochrome export, blueprint printstijl, kulmanlab export]
group: file
order: 4
---

# Print Manager

Het `PrintManager`-commando opent de **Print Manager** — een apart exportvenster met een live preview-canvas, formaatkeuze (PNG / JPEG / WebP / PDF), een Style-keuze (Default / Monochrome / Blueprint) en optionele gebiedsbijsnijding. Er wordt niets naar een fysieke printer gestuurd; de uitvoer wordt gedownload als bestand.

## De Print Manager openen

Klik op de **Print**-werkbalkknop of typ `PrintManager` in de terminal. De Print Manager opent direct met een preview van de huidige viewport.

De preview wordt gerenderd via exact hetzelfde codepad, op exact dezelfde pixelresolutie, als het bestand dat u uiteindelijk exporteert — het wijzigen van Quality, Style of het exportgebied rendert de preview direct opnieuw, dus wat u ziet is wat wordt gedownload, geen benadering ervan.

## Indeling van de Print Manager

Het venster heeft twee panelen:
- **Linker zijbalk** — alle exportinstellingen.
- **Rechterpaneel** — live preview-canvas dat bijwerkt terwijl u instellingen wijzigt.

### Bediening in de zijbalk

| Bediening | Beschrijving |
|---------|-------------|
| **Change Area** | Bijsnijden naar een aangepaste rechthoek op het canvas (zie hieronder) — snijdt daadwerkelijk de geëxporteerde afbeelding bij, ook op een layout met papierruimte, niet alleen de preview op het scherm |
| **Quality**-vervolgkeuzelijst | Stelt de exportresolutie in (zie hieronder) |
| **Style**-vervolgkeuzelijst | Default, Monochrome of Blueprint — zie *Printstijlen* hieronder. Standaard Monochrome voor nette afdrukken |
| **Format**-vervolgkeuzelijst | PNG, JPEG, WebP of PDF |
| **Export**-knop | Genereer en download het bestand |

## Printstijlen

De **Style**-vervolgkeuzelijst regelt zowel de inktkleur waarmee entiteiten worden getekend als de paginaAchtergrond:

| Stijl | Inkt | Pagina-achtergrond |
|-------|------|----------------------|
| **Default** | De eigen kleur van elke entiteit | Wit |
| **Monochrome** *(standaard)* | Effen zwart, ongeacht entiteits-/laagkleur | Wit |
| **Blueprint** | Effen wit, ongeacht entiteits-/laagkleur | Diep Pruisisch blauw, met een subtiel referentierooster |

Blueprint reproduceert de look van een traditionele cyanotypie-architectuurafdruk — witte lijnen op een donkerblauw vel. Het referentierooster is gedimensioneerd relatief aan de paginagrootte in plaats van aan de DPI, zodat het bij elke Quality-instelling even dicht oogt in plaats van dichter te worden naarmate de resolutie toeneemt.

## Kwaliteit en resolutie

De **Quality**-vervolgkeuzelijst stelt de DPI in waarmee de export wordt gerenderd:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(standaard)* | 150 |
| Presentation | 300 |
| Max | 600 |

Hogere Quality levert een groter, scherper beeld op bij dezelfde fysieke grootte — lijndiktes schalen mee met de resolutie, zodat een lijn bij elke Quality-instelling dezelfde *fysieke* dikte op papier behoudt, in plaats van dunner te lijken naarmate de DPI toeneemt. De enige uitzondering is een haarlijn (lijndikte `0`), die conventioneel wordt gedefinieerd als "de dunste lijn die het uitvoerapparaat kan tekenen" — deze blijft bij elk Quality-niveau een vaste breedte van 1 pixel behouden, net zoals op het live canvas.

Het wijzigen van Quality rendert de voorvertoning direct opnieuw, zodat u de werkelijke scherpte (en de afweging in bestandsgrootte) ziet vóór het exporteren.

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
| **PNG** | Verliesvrij, scherpe lijnen | Paginaachtergrond van de Style ingebakken, geen transparantie |
| **JPEG** | Kleiner bestand om te delen | 95% kwaliteit, lichte compressie |
| **WebP** | Kleinste bestand voor het web | Zelfde 95% kwaliteit, betere compressie dan JPEG |
| **PDF** | Afdrukklare documenten | Afbeelding ingebed in een PDF-container op de DPI van de gekozen Quality, zo gedimensioneerd dat de pagina op ware fysieke schaal wordt afgedrukt |

Het geëxporteerde bestand heet `kulman-<timestamp>.<ext>` en wordt automatisch gedownload.

## Exportresolutie en achtergrond

- **Model space-/viewport-export**: begrensd tot 2000 × 2000 pixels bij de standaard Normal-kwaliteit (150 DPI), proportioneel geschaald naar het geselecteerde gebied; de grens schaalt ook mee met Quality — Draft lager, Presentation en Max hoger (tot 8000 × 8000 bij Max/600 DPI).
- **Layout-export (papierruimte)**: rechtstreeks gedimensioneerd op basis van de papierafmetingen van de layout bij de gekozen DPI — bijv. een A4-vel (210 × 297 mm) wordt bij Normal-kwaliteit geëxporteerd op ongeveer 1240 × 1754 px — en valt dus niet onder de 2000 px-limiet van de viewport.
- De achtergrond volgt de gekozen print-**Style** — wit voor Default en Monochrome, diep Pruisisch blauw voor Blueprint (zie *Printstijlen* hierboven).
- Lagen gemarkeerd als **niet-plottend** worden uitgesloten van de export.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Escape` (tijdens gebiedsselectie) | Annuleer gebiedsselectie, herstel vorig gebied |
| `Escape` (in Print Manager) | Sluit de Print Manager |
