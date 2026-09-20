---
title: Hatch Manager-kommando — Gennemse og upload .pat-mønstre
description: Hatch Manager-kommandoen åbner en dialog til at gennemse hatch-mønstre med en live swatch-forhåndsvisning og til at uploade dine egne .pat-mønsterfiler. Uploadede filer gemmes i browseren og overskygger indbyggede mønstre med samme navn.
keywords: [hatch manager, brugerdefineret hatch-mønster CAD, upload pat-fil, acad.pat, hatch-mønsterbibliotek, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

`Skraveringsstyring`-kommandoen åbner en dialog til at gennemse hatch-mønstre med en live swatch-forhåndsvisning, og til at uploade dine egne `.pat`-mønsterfiler til brug med [Hatch](../hatch/).

## Åbne Hatch Manager

Skriv `Skraveringsstyring` i terminalen. Dette er adskilt fra mønstervælgeren, der åbner, når du klikker på en hatchs **Pattern**-chip — vælgeren vælger et mønster til én hatch, Hatch Manager er hvor du tilføjer eller fjerner `.pat`-filer.

## Mønstergrupper

| Gruppe | Indhold |
|--------|---------|
| **User** | Mønstre fra dine egne uploadede `.pat`-filer, undergrupperet efter hvilken fil hvert mønster kom fra (vises kun, når du har uploadet én) |
| **Standard** | `SOLID` plus denne tegnings egen mønstertabel — hver ny tegning starter med det samme indbyggede bibliotek, ligesom dens lag og linjetyper gør |

Klik på et vilkårligt mønster i listen (eller brug `↑`/`↓`) for at forhåndsvise det til højre — en swatch tegnet med den samme kode, som lærredet udfyldes med, så det er præcis, hvad tegningen vil vise, plus mønsterets navn, beskrivelse og linjeantal.

## Uploade en brugerdefineret mønsterfil

1. Klik på **Add .pat File** i dialogens sidefod.
2. Vælg en `.pat`-fil — det almindelige hatch-mønsterformat. En enkelt fil definerer ofte mange navngivne mønstre på én gang; de vises alle som separate poster grupperet under den fils navn.
3. Uploadede filer gemmes permanent i browseren (IndexedDB), sorteret senest tilføjet først, og genindlæses automatisk næste gang du åbner KulmanLab CAD.

At uploade en fil, der definerer et mønster med samme navn som et indbygget, **overskygger** standarden — dette er den understøttede måde at få Autodesks autoritative mønsterdefinitioner: upload en rigtig `acad.pat`, og dens versioner af ANSI31 og de andre standardnavne overtager fra KulmanLabs egne tilnærmelser.

Hvis en tegning refererer til et mønsternavn, der ikke er i dit bibliotek — importeret fra en DXF, der brugte et mønster fra en `acad.pat`, du ikke har uploadet — gengives hatchen stadig, med `ANSI31` som stedfortræder, i stedet for at falde tilbage til en flad, mønsterløs udfyldning.

## Fjerne en mønsterfil

Klik på **×** ved siden af et filnavn i **User**-gruppen for at fjerne den og hvert mønster, den definerede. Enhver hatch, der allerede bruger et af de mønstre, falder straks tilbage til `ANSI31`. Indbyggede **Standard**-mønstre kan ikke fjernes.

## Tastaturreference

| Tast | Handling |
|------|----------|
| `↑` / `↓` | Flyt valget op eller ned i mønsterlisten |
| `Escape` | Luk Hatch Manager |

## Relaterede kommandoer

- [Hatch](../hatch/) — udfylder et klikket område med det aktuelt valgte mønster
- [Font Manager](../font-manager/) — samme upload-/gennemse-mønster, for brugerdefinerede skrifttyper i stedet for hatch-mønstre
