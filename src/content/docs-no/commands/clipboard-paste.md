---
title: ClipboardPaste-kommandoen — Lime inn enheter fra systemets utklippstavle
description: Kommandoen ClipboardPaste leser enheter som tidligere ble skrevet av ClipboardCopy fra systemets utklippstavle og plasserer dem på et valgt innsettingspunkt, og legger til lagene og linjetypene måltegningen mangler.
keywords: [lime inn utklippstavle CAD, lime inn enheter mellom tegninger, lime inn CAD-objekter, Ctrl+V CAD, lime inn mellom faner, slå sammen lag ved innliming, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

Kommandoen `LimInnFraUtklippstavle` leser enhetene som [ClipboardCopy](../clipboard-copy/) skrev til **systemets utklippstavle**, og plasserer dem i den gjeldende tegningen på et punkt du velger. Fordi utklippstavlen er systemets ekte, kan kilden være en annen tegning, en annen nettleserfane eller en økt fra tidligere på dagen.

## Slik limer du inn

1. Trykk `Ctrl+V` (`Cmd+V` på macOS), eller skriv `LimInnFraUtklippstavle` i terminalen.
2. Ledeteksten viser **reading clipboard…** mens nettleseren overleverer utklippsteksten.
3. Når den er lastet, endres ledeteksten til **pick insertion point**, og en forhåndsvisning av geometrien følger markøren.
4. **Klikk** for å plassere enhetene. De legges til i tegningen og forblir valgt.

Forhåndsvisningen er forankret i kopiens **referansepunkt** — nedre venstre hjørne av det opprinnelige utvalgets samlede utstrekning. Det hjørnet ligger under markøren, så den innbyrdes plasseringen av de kopierte enhetene bevares nøyaktig.

## Hva som skjer ved innliming

| Trinn | Oppførsel |
|-------|-----------|
| **Nye identiteter** | Hver innlimt enhet får en ny id, så to innlimninger gir to uavhengige sett |
| **Forskyvning** | Enhetene forskyves med markør − referansepunkt |
| **Sammenslåing av lag** | Hvert refererte lag som mangler i måltegningen, legges til etter navn |
| **Sammenslåing av linjetyper** | Hver refererte linjetype som mangler i måltegningen, legges til etter navn |
| **Utvalg** | Det forrige utvalget tømmes, og de innlimte enhetene blir utvalget |

### Sammenslåing av lag og linjetyper

Manglende tabelloppføringer legges til; **eksisterende lar man være**. Hvis utklippstavlen bærer et lag som heter `WALLS` i rødt og måltegningen allerede har et `WALLS` i blått, vinner måltegningens definisjon, og de innlimte enhetene slutter seg til det — de blir blå. En innliming omdefinerer ingenting i måltegningen.

Dette betyr noe når man kopierer mellom tegninger med ulike lagkonvensjoner: sjekk [Layer Manager](../layer-manager/) etter en innliming på tvers av tegninger hvis fargene ikke ble som ventet.

## Når utklippstavlen ikke har noe å lime inn

ClipboardPaste godtar bare innhold som ClipboardCopy har laget. Alt annet på utklippstavlen — ren tekst, en lenke, et bilde, JSON fra et annet program — avvises, og terminalen melder:

```
Clipboard has no copied entities
```

Hvis nettleseren nekter tilgang til utklippstavlen helt, er meldingen i stedet **Blocked by the browser: allow clipboard in site settings, by the address bar**. Begge avslutter kommandoen uten å endre tegningen.

## Tastaturreferanse

| Tast | Handling |
|------|----------|
| `Ctrl+V` / `Cmd+V` | Aktiver ClipboardPaste |
| `Escape` | Avbryt — enhetene forkastes og ingenting legges til |

Å avbryte i lesefasen er trygt: hvis utklippstavlen svarer først etter at du allerede har avbrutt eller startet en annen kommando, forkastes det sene resultatet i stedet for å forstyrre det som da er aktivt.

## Kopiere mellom faner

Den vanlige arbeidsflyten mellom tegninger:

1. Åpne kildetegningen, velg geometrien, trykk `Ctrl+C`.
2. Bytt til den andre fanen — eller åpne en ny fane med appen og last inn en annen fil.
3. Trykk `Ctrl+V` og klikk på et innsettingspunkt.

Begge fanene har samme opphav og deler systemets utklippstavle, så ingenting lastes opp og ingen server er involvert. Innholdet forblir JSON-tekst på din egen utklippstavle hele veien.

## Støttede enheter

Hver enhetstype ClipboardCopy kan skrive, kan ClipboardPaste lese tilbake — med samme serialisering som det innebygde `.json`-formatet bruker.

## Se også

- [ClipboardCopy](../clipboard-copy/) — skrive utvalget til utklippstavlen
- [Copy](../copy/) — duplisere enheter innenfor den gjeldende tegningen
- [Layer Manager](../layer-manager/) — se på lagene en innliming brakte med seg
