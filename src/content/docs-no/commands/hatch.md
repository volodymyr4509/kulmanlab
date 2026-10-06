---
title: Hatch-kommando — Fyll et område med et mønster
description: Hatch-kommandoen fyller området rundt et klikket punkt med et mønster — enhver kombinasjon av linjer, buer, ellipser og splines som lukker seg, omslutter et område, og enhver lukket form inni forblir en ufylt øy.
keywords: [CAD hatch-kommando, fyll område CAD, hatch-mønster CAD, ANSI31, SOLID-fylling, grensefylling CAD, DXF HATCH-entitet, kulmanlab]
group: shapes
order: 7
---

# Hatch

Kommandoen `Skravering` fyller området rundt et klikket punkt med et mønster. Grensen tegnes ikke først — den kommer fra det som allerede er på lerretet, så fire separate [Lines](../line/) som møtes ende til ende, omslutter et område akkurat som en lukket [Polyline](../polyline/) gjør, og enhver lukket form inni blir en øy som fyllingen lar være.

## Fylle et område

1. Skriv `Skravering` i terminalen, eller klikk på verktøylinjeknappen **Hatch** (mønsterikonet).
2. **Klikk på et punkt** inne i området du vil fylle.
3. Kommandoen forblir aktiv, så fortsett å klikke for å fylle flere områder — hvert klikk lager sin egen `Hatch`-entitet.
4. Trykk **Enter**, **Space** eller **Escape** når du er ferdig.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   klikk innenfor den ytre
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   grensen; sirkelen forblir
  └─────────────┘        └─────────────┘   en øy
```

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Avslutt Hatch-kommandoen |
| `Escape` | Avslutt Hatch-kommandoen (samme som Enter/Space) |

## Hva som kan danne en grense

Enhver kombinasjon av disse entitetstypene kan danne en grense, i hvilken som helst sammensetning, så lenge de kobles ende til ende uten noe mellomrom:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (sin egen lukkede grense)
- [Ellipse](../ellipse/) (lukket, eller en åpen elliptisk bue som del av en større løkke)
- [Polyline](../polyline/) (åpen eller lukket) og [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/) — hver sløyfe av en spline som krysser seg selv er et eget område

Tekst-, multileader- og målsettingsentiteter behandles aldri som grenser.

## Øyer

Alt som er fullstendig lukket inne i området du klikket på — en sirkel, en lukket polylinje, grensen til en annen hatch — blir en **øy**: fyllingen stopper ved kanten, og øya selv forblir tom. Plasser en lukket form inne i en annen lukket form, og fyllingen veksler, hull i en fylling i et hull, etter samme inne/ute-regel på hvert nivå.

## Når et klikk mislykkes

Hvis punktet du klikket på ikke er omsluttet, eller grensen har et hull, forklarer terminalen hvorfor i stedet for stille å ikke gjøre noe:

| Melding | Betydning |
|---------|-----------|
| "no boundary found" | Ingenting ble truffet i noen retning fra det klikkede punktet — det finnes ingen grense i nærheten i det hele tatt |
| "point is not enclosed" | Det finnes en grense i nærheten, men formen den danner inneholder ikke punktet du klikket på |
| "boundary is open" | Den nærmeste grensen har et hull et sted — spor den og sjekk at hver sammenføyning er nøyaktig |
| "boundary too complex" | Grenseløkken kunne ikke lukkes innenfor gjennomløpsgrensen — vanligvis en floke av overlappende entiteter |

Kommandoen forblir aktiv etter et mislykket klikk — les meldingen, korriger tegningen eller klikk et annet sted, og prøv igjen.

## Velge et mønster

Hver nye hatch starter fylt med `ANSI31` (eller hvilket mønster den *sist* redigerte hatchen brukte) — det finnes ingen mønstervelger før du tegner. For å bruke et annet mønster:

1. Velg en eksisterende hatch og åpne **Pattern**-feltet i egenskapspanelet — dette åpner mønstervelgeren, et rutenett av navngitte swatcher gruppert etter hvor hvert mønster kom fra.
2. Klikk på et mønster for å bruke det — fyllingen oppdateres umiddelbart.

Dette valget blir også standarden for den *neste* hatchen du lager med `Skravering`-kommandoen, på samme måte som å velge et lag eller en farge føres videre. Så for å hatche flere nye områder med et bestemt mønster: fyll ett område, sett mønsteret én gang, og fortsett å hatche — hver fylling deretter starter allerede med det mønsteret brukt.

Se [Hatch Manager](../hatch-manager/) for å laste opp dine egne `.pat`-mønsterfiler og bla gjennom hele biblioteket.

**SOLID** er en vanlig oppføring i mønsterlisten, ikke en egen avkrysningsboks eller modus — velg den på samme måte som du ville valgt ANSI31 eller et hvilket som helst annet navngitt mønster.

## Egenskaper

| Egenskap | Betydning |
|----------|-----------|
| Pattern | Mønsterets navn, fra det delte mønster-vokabularet (se [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Skalerer avstanden mellom mønsterlinjene — større verdier sprer mønsterlinjene lenger fra hverandre |
| Pattern Angle | Roterer mønsteret uavhengig av grensen |
| Origin X / Origin Y | Hvor mønsterets egen gjentakelse er forankret, i tegningskoordinater |

Å flytte, rotere, speile eller skalere en hatch fører mønsterplasseringen med seg, så fyllingen forblir justert med grensen — du trenger ikke å sette skalering eller vinkel på nytt etter en transformasjon.

## Håndtakredigering av grensen

En valgt hatch griper grensen sin på samme måte som en Polyline griper hjørnepunktene sine — ett håndtak i hvert hjørne der to kanter møtes, og ett midt på hver kant (en lukket løkke som en hatch av en sirkel eller ellipse griper i stedet på sine fire akse-punkter).

| Håndtak | Hva det gjør |
|---------|---------------|
| **Hjørne** | Flytter det hjørnet. En rett kant følger nøyaktig; en bue tilpasser seg på nytt for å fortsette å gå gjennom begge naboene; en ellipse- eller spline-kant kan bare lande et sted på sin egen kurve, så hjørnet fester seg til nærmeste punkt på den |
| **Kantmidtpunkt — linje-, ellipse- eller spline-kant** | Skyver hele kanten; kantene på begge sider beskjæres eller forlenges for å forbli koblet til den |
| **Kantmidtpunkt — buekant** | **Bøyer** buen gjennom markøren i stedet for å skyve den — begge endene forblir nøyaktig der de var, og ingenting annet i grensen beveger seg |
| **Senter** (hele hatchen) | Aktiverer [Move](../move/) for hele hatchen |

En dra-forhåndsvisning viser grensen som et stiplet omriss i stedet for en solid fylling mens du drar — den opprinnelige fyllingen forblir synlig under til du slipper, siden en forhåndsvisning bare kan male oppå det som allerede er der, aldri fjerne noe fra det.

## DXF — HATCH-entitet

Hatcher **importeres** fra `HATCH`-entiteter: KulmanLab leser grensegeometrien sammen med mønsterets navn, skalering og vinkel (DXF-gruppekoder 70/41/52) — den leser **ikke** mønsterets egne linjedefinisjoner som er innebygd i filen. I stedet slås mønsternavnet opp i KulmanLabs eget mønsterbibliotek (innebygde standarder pluss alt du har lastet opp i [Hatch Manager](../hatch-manager/)). Et navn som ikke finnes i biblioteket ditt, faller tilbake til ANSI31 slik at tegningen fortsatt leses som hatchet, og et notat logges én gang.

Splinebegrensede løkker skrevet av andre applikasjoner (DXF-grensekanttype 4) leses ennå ikke.

Skravering **eksporteres** til DXF som `HATCH`-objekter. Grenseløkkene går ut sammen med mønsternavnet (gruppekode 2), fyllflagget (70) og denne skraveringens egen vinkel og skala (52/41) — og i motsetning til importveien skrives også mønsterets oppløste linjedefinisjoner inn i filen (78, med 53/43/44/45/46/79/49). Asymmetrien er tilsiktet: KulmanLab kan slå opp et navn i sitt eget bibliotek, men programmet som mottar filen har kanskje ikke det mønsteret, så linjene reiser med.

## Relaterte kommandoer

- [Hatch Manager](../hatch-manager/) — bla gjennom mønsterbiblioteket og last opp `.pat`-filer
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — fører alle mønsterplasseringen til hatchen med seg
- [Delete](../delete/) — fjerner hatchen uten å påvirke entitetene som dannet grensen
