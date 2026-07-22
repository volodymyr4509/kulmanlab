---
title: Wipe Storage-kommando — Tøm All Nettleserdata i KulmanLab CAD
description: wipestorage-kommandoen sletter permanent alle filer, lag, linetyper og angre-historikk lagret i nettleseren. Krever at du skriver YES for å bekrefte. Bruk når du vil tilbakestille en korrupt eller overfylt lokal database.
keywords: [CAD tøm lagring, tøm nettleserdata CAD, tilbakestill CAD-app, slett lokale filer CAD, kulmanlab wipestorage]
group: file
order: 6
---

# Wipe Storage

Kommandoen `wipestorage` sletter permanent **all data lagret i nettleseren** for KulmanLab CAD — hver lagret fil, lag- og linetype-tabell, og angre-historikk. Siden lastes automatisk inn på nytt etterpå.

:::danger Irreversibelt
Denne handlingen kan ikke angres. Alle filer lagret i nettleseren slettes. Eksporter alle tegninger du vil beholde som `.json`- eller `.dxf`-filer før du kjører denne kommandoen.
:::

## Når du bør bruke den

- Nettleserlagringen er korrupt, og appen klarer ikke å laste inn eller lagre filer.
- Du vil tilbakestille appen helt til en ren tilstand.
- Du bytter nettleser eller enhet og trenger ikke lenger den lokale kopien.

## Slik kjører du den

1. Skriv `wipestorage` i terminalen og trykk **Enter**.
2. Terminalen spør: *Wipe all browser local storage? Type YES to confirm*
3. Skriv `YES` (uansett bokstavstørrelse) og trykk **Enter**.

Appen sletter databasen og laster siden på nytt. Hvis du skriver noe annet enn `YES` og trykker **Enter**, eller trykker **Escape**, avbrytes kommandoen og ingenting slettes.

## Hva som slettes

| Data | Slettet |
|------|---------|
| Alle filer lagret i nettleseren | Ja |
| Lag- og linetype-tabeller for hver fil | Ja |
| Angre-/gjøre om-historikk for hver fil | Ja |

Kun data lagret lokalt i **denne nettleseren** påvirkes. Filer du allerede har eksportert som `.json` eller `.dxf` berøres ikke.
