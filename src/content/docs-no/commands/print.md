---
title: Print-kommando — Eksporter som PNG, JPEG, WebP eller PDF
description: Print-kommandoen åpner Print Manager — et dedikert eksportvindu med en levende forhåndsvisning, formatvelger, monokrom-bryter og valgfri områdemarkering. Eksporterer opptil 2000×2000 px. Støtter PNG, JPEG, WebP og PDF.
keywords: [CAD eksporter PNG, CAD eksporter PDF, skriv ut CAD-tegning, print manager, monokrom eksport, kulmanlab eksport]
group: file
order: 4
---

# Print

Kommandoen `print` åpner **Print Manager** — et dedikert eksportvindu med et levende forhåndsvisningslerret, formatvelger (PNG / JPEG / WebP / PDF), monokrom-bryter og valgfri områdebeskjæring. Ingenting sendes til en fysisk skriver — utdataen lastes ned som en fil.

## Åpne Print Manager

Klikk på **Print**-knappen i verktøylinjen eller skriv `print` i terminalen. Print Manager åpnes umiddelbart og viser en forhåndsvisning av gjeldende viewport.

## Print Manager-oppsett

Vinduet har to paneler:
- **Venstre sidefelt** — alle eksportkontroller.
- **Høyre panel** — levende forhåndsvisningslerret som oppdateres etter hvert som du endrer innstillinger.

### Kontroller i sidefeltet

| Kontroll | Beskrivelse |
|---------|-------------|
| **Change Area** | Beskjær til et egendefinert rektangel på lerretet (se nedenfor) |
| **Monochrome**-bryter | Konverter alle fargede linjer til svart — på som standard for ren utskrift |
| **Format**-nedtrekksmeny | PNG, JPEG, WebP eller PDF |
| **Export**-knapp | Generer og last ned filen |

## Velge et egendefinert eksportområde

Som standard viser forhåndsvisningen nøyaktig det som var synlig på lerretet da du åpnet Print Manager. For å eksportere et spesifikt område:

1. Klikk **Change Area** — Print Manager skjules og lerretet blir interaktivt.
2. **Klikk det første hjørnet** av eksportrektangelet.
3. **Klikk det motsatte hjørnet** — Print Manager åpnes igjen med det valgte området i forhåndsvisningen.

Trykk `Escape` under områdevalg for å avbryte og gjenopprette det forrige området.

Forhåndsvisningslerretet endrer størrelse dynamisk for å samsvare med det **eksakte størrelsesforholdet** til det valgte området, slik at forhåndsvisningen er pikselnøyaktig.

## Eksportformater

| Format | Best til | Merknader |
|--------|----------|-------|
| **PNG** | Tapsfri, skarpe linjer | Hvit bakgrunn, ingen gjennomsiktighet |
| **JPEG** | Mindre fil for deling | 95 % kvalitet, litt komprimering |
| **WebP** | Minste fil for nett | Samme 95 % kvalitet, bedre komprimering enn JPEG |
| **PDF** | Utskriftsklare dokumenter | Bilde bygget inn i 150 DPI inni PDF-beholderen |

Den eksporterte filen får navnet `kulman-<tidsstempel>.<filtype>` og lastes ned automatisk.

## Eksportoppløsning og bakgrunn

- Maksimal oppløsning: **2000 × 2000 piksler**, skalert proporsjonalt til det valgte området.
- Bakgrunnen er alltid **hvit**.
- Lag merket som **ikke-plottbare** ekskluderes fra eksporten.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Escape` (under områdevalg) | Avbryt områdevalg, gjenopprett det forrige området |
| `Escape` (i Print Manager) | Lukk Print Manager |
