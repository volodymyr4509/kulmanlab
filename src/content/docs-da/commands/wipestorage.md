---
title: Wipe Storage-kommando — Ryd Alle Browserdata i KulmanLab CAD
description: wipestorage-kommandoen sletter permanent alle filer, lag, linetyper og fortryd-historik gemt i browseren. Kræver at du skriver YES for at bekræfte. Brug når du vil nulstille en korrupt eller overfyldt lokal database.
keywords: [CAD ryd lagring, ryd browserdata CAD, nulstil CAD-app, slet lokale filer CAD, kulmanlab wipestorage]
group: file
order: 6
---

# Wipe Storage

Kommandoen `wipestorage` sletter permanent **alle data gemt i browseren** for KulmanLab CAD — hver gemte fil, lag- og linetype-tabel, og fortryd-historik. Siden genindlæses automatisk bagefter.

:::danger Irreversibelt
Denne handling kan ikke fortrydes. Alle filer gemt i browseren slettes. Eksportér alle tegninger, du vil beholde, som `.json`- eller `.dxf`-filer, før du kører denne kommando.
:::

## Hvornår du bør bruge den

- Browserlagringen er korrupt, og appen kan ikke indlæse eller gemme filer.
- Du vil nulstille appen fuldstændigt til en ren tilstand.
- Du skifter browser eller enhed og har ikke længere brug for den lokale kopi.

## Sådan kører du den

1. Skriv `wipestorage` i terminalen og tryk **Enter**.
2. Terminalen spørger: *Wipe all browser local storage? Type YES to confirm*
3. Skriv `YES` (uanset bogstavstørrelse) og tryk **Enter**.

Appen sletter databasen og genindlæser siden. Hvis du skriver noget andet end `YES` og trykker **Enter**, eller trykker **Escape**, annulleres kommandoen, og intet slettes.

## Hvad der slettes

| Data | Slettet |
|------|---------|
| Alle filer gemt i browseren | Ja |
| Lag- og linetype-tabeller for hver fil | Ja |
| Fortryd-/gør om-historik for hver fil | Ja |

Kun data gemt lokalt i **denne browser** påvirkes. Filer du allerede har eksporteret som `.json` eller `.dxf` berøres ikke.
