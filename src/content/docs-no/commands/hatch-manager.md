---
title: Hatch Manager-kommando — Bla gjennom og last opp .pat-mønstre
description: Hatch Manager-kommandoen åpner en dialog for å bla gjennom hatch-mønstre med en live swatch-forhåndsvisning, og for å laste opp dine egne .pat-mønsterfiler. Opplastede filer lagres i nettleseren og overskygger innebygde mønstre med samme navn.
keywords: [hatch manager, tilpasset hatch-mønster CAD, last opp pat-fil, acad.pat, hatch-mønsterbibliotek, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

Kommandoen `Skraveringsbehandler` åpner en dialog for å bla gjennom hatch-mønstre med en live swatch-forhåndsvisning, og for å laste opp dine egne `.pat`-mønsterfiler til bruk med [Hatch](../hatch/).

## Åpne Hatch Manager

Skriv `Skraveringsbehandler` i terminalen. Dette er atskilt fra mønstervelgeren som åpnes når du klikker på **Pattern**-chipen til en hatch — velgeren velger et mønster for én hatch, Hatch Manager er der du legger til eller fjerner `.pat`-filer.

## Mønstergrupper

| Gruppe | Innhold |
|--------|---------|
| **User** | Mønstre fra dine egne opplastede `.pat`-filer, undergruppert etter hvilken fil hvert mønster kom fra (vises først etter at du har lastet opp én) |
| **Standard** | `SOLID` pluss denne tegningens egen mønstertabell — hver ny tegning starter med det samme innebygde biblioteket, akkurat som lagene og linjetypene dens |

Klikk på et hvilket som helst mønster i listen (eller bruk `↑`/`↓`) for å forhåndsvise det til høyre — en swatch tegnet med samme kode som lerretet fylles med, så det er nøyaktig det tegningen vil vise, pluss navn, beskrivelse og linjeantall for mønsteret.

## Laste opp en tilpasset mønsterfil

1. Klikk på **Add .pat File** i bunnteksten på dialogen.
2. Velg en `.pat`-fil — det vanlige hatch-mønsterformatet. En enkelt fil definerer ofte mange navngitte mønstre samtidig; de vises alle som separate oppføringer gruppert under navnet på den filen.
3. Opplastede filer lagres permanent i nettleseren (IndexedDB), sortert med sist tilføyde først, og lastes automatisk inn på nytt neste gang du åpner KulmanLab CAD.

Å laste opp en fil som definerer et mønster med samme navn som et innebygd, **overskygger** standarden — dette er den støttede måten å få Autodesks offisielle mønsterdefinisjoner på: last opp en ekte `acad.pat`, og versjonene dens av ANSI31 og de andre standardnavnene overtar fra KulmanLabs egne tilnærminger.

Hvis en tegning refererer til et mønsternavn som ikke finnes i biblioteket ditt — importert fra en DXF som brukte et mønster fra en `acad.pat` du ikke har lastet opp — gjengis hatchen likevel, med `ANSI31` som erstatning, i stedet for å falle tilbake til en flat, mønsterløs fylling.

## Fjerne en mønsterfil

Klikk på **×** ved siden av et filnavn i **User**-gruppen for å fjerne den sammen med hvert mønster den definerte. Enhver hatch som allerede bruker ett av disse mønstrene, faller umiddelbart tilbake til `ANSI31`. Innebygde **Standard**-mønstre kan ikke fjernes.

## Tastaturreferanse

| Tast | Handling |
|------|----------|
| `↑` / `↓` | Flytt valget opp eller ned i mønsterlisten |
| `Escape` | Lukk Hatch Manager |

## Relaterte kommandoer

- [Hatch](../hatch/) — fyller et klikket område med det for øyeblikket valgte mønsteret
- [Font Manager](../font-manager/) — samme opplastings-/blaingsmønster, for tilpassede skrifttyper i stedet for hatch-mønstre
