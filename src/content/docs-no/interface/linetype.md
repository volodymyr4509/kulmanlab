---
title: Linetype-velger — Styr Strekmønstre i KulmanLab CAD
description: Linetype-velgeren i KulmanLab CAD-verktøylinjen setter strekmønsteret som brukes på alle nytegnede entiteter. Støtter alle linetyper lastet fra gjeldende DXF-fil pluss de innebygde alternativene ByLayer, ByBlock og Continuous.
keywords: [CAD linetype, strekmønster, stiplet linje, DXF linetype, ByLayer linetype, kulmanlab]
group: interface
order: 3
---

# Linetype

**Linetype**-chippen i verktøylinjen styrer strekmønsteret som tildeles hver ny entitet du tegner. Klikk på den for å åpne nedtrekksmenyen.

## Alternativer

| Verdi | Betydning |
|-------|---------|
| **From Layer** | Entiteten arver linetypen definert på laget. Vises som `ByLayer` i DXF. |
| **ByBlock** | Entiteten arver linetypen til blokken den tilhører. Har ingen synlig effekt utenfor en blokk. |
| **Continuous** | Heltrukken linje uten brudd — ingen strekmønster. |
| **Navngitte linetyper** | Enhver linetype lastet fra gjeldende DXF-fil (f.eks. `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM` osv.). Nedtrekksmenyen viser en direkte forhåndsvisning av hvert mønster og dets definisjonsstreng. |

## Hvordan det brukes

Den valgte linetypen brukes på alle entiteter som opprettes etter endringen. Den påvirker ikke eksisterende entiteter i ettertid.

For å endre linetypen til eksisterende entiteter, marker dem og rediger **Linetype**-feltet i egenskapspanelet, eller bruk [MatchProperties](../../commands/match-properties/) for å kopiere den fra en annen entitet.

## Linetype-skala

Hver entitet har også en **Linetype Scale**-egenskap (standard `1`). Strekmønsteret multipliseres med denne faktoren. En verdi på `2` gjør strekene dobbelt så lange; `0.5` gjør dem halvparten så lange. Rediger den i egenskapspanelet etter at du har markert en entitet.

## Tilgjengelige linetyper

Nedtrekksmenyen viser kun linetyper som finnes i den gjeldende innlastede DXF-filen. En nyopprettet fil inneholder kun `ByLayer`, `ByBlock` og `Continuous`. Når du importerer en DXF, blir alle linetyper definert i filens `$LTYPE`-tabell tilgjengelige.

Hvis du trenger en spesifikk linetype (f.eks. `DASHED2`) som ikke finnes i listen, importer en DXF-fil som inneholder den — linetypen vil da vises i velgeren for gjeldende økt.

## DXF-kompatibilitet

Linetype-navn lagres som strenger i entitetsposter. `ByLayer` og `ByBlock` er standard DXF-sentinelverdier. Alle navngitte linetyper og strekmønstrene deres bevares nøyaktig ved eksport og overlever en fullstendig runde uten tap i LibreCAD, FreeCAD og andre DXF-kompatible applikasjoner.
