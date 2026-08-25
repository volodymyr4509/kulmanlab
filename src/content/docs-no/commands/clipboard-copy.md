---
title: ClipboardCopy-kommandoen — Kopiere enheter til systemets utklippstavle
description: Kommandoen ClipboardCopy skriver de valgte enhetene til systemets utklippstavle som JSON-tekst, sammen med lagene og linjetypene de refererer til, slik at de kan limes inn i en annen tegning eller en annen nettleserfane med ClipboardPaste.
keywords: [kopiere utklippstavle CAD, kopiere enheter mellom tegninger, kopiere CAD-objekter til utklippstavlen, Ctrl+C CAD, kopiere mellom faner, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

Kommandoen `ClipboardCopy` skriver de valgte enhetene til **systemets utklippstavle** som JSON-tekst. Fordi den bruker den ekte utklippstavlen og ikke en buffer i minnet, overlever den kopierte geometrien utenfor tegningen: lim den inn i en annen fil, en annen nettleserfane eller et vindu du åpner senere med [ClipboardPaste](../clipboard-paste/).

Det er forskjellen fra [Copy](../copy/): Copy dupliserer enheter inne i den gjeldende tegningen i én bevegelse, mens ClipboardCopy legger dem et sted der de kan hentes fra en helt annen tegning.

## To måter å starte på

**Velg først, kopier så** — den raske veien:

1. Velg én eller flere enheter på tegneflaten.
2. Trykk `Ctrl+C` (`Cmd+C` på macOS), eller skriv `ClipboardCopy` i terminalen.
3. Enhetene skrives til utklippstavlen med én gang, og kommandoen avsluttes.

**Aktiver først, velg så** — start uten noe valgt:

1. Trykk `Ctrl+C` eller skriv `ClipboardCopy` med tomt utvalg.
2. Ledeteksten viser **pick objects to copy — Enter or Space to confirm**.
3. **Velg objekter** — klikk for å ta enkeltenheter inn i eller ut av utvalget, eller dra for å velge etter område.
4. Trykk **Enter** eller **Space** for å kopiere utvalget og avslutte.

Å trykke **Enter** eller **Space** uten noe valgt avslutter bare kommandoen uten å røre utklippstavlen.

## Hva som kopieres

Innholdet på utklippstavlen bærer mer enn ren geometri, slik at en innliming i en fremmed tegning fortsatt ser riktig ut:

| Del | Formål |
|-----|--------|
| **Enheter** | Den fullstendige serialiserte formen av hver valgt enhet |
| **Referansepunkt** | Nedre venstre hjørne av utvalgets samlede utstrekning — det ClipboardPaste forankrer til markøren |
| **Lag** | Bare de lagene de kopierte enhetene faktisk refererer til, etter navn |
| **Linjetyper** | Bare de linjetypene de kopierte enhetene faktisk refererer til, etter navn |

Bare *refererte* tabelloppføringer følger med kopien — ikke kildetegningens fullstendige lag- og linjetypetabeller. Skraveringsmønstre pakkes ikke med i det hele tatt, og trenger det ikke: en tegnings mønstertabell er det innebygde standardsettet, og `.pat`-filene du har lastet opp ligger i et lager per bruker som allerede deles mellom faner, så en innlimt skravering finner sitt eget mønster.

## Bekreftelse

Ved vellykket kopiering melder terminalen hvor mange enheter som ble skrevet:

```
3 entities copied to clipboard
```

Hvis nettleseren nekter tilgang til utklippstavlen, viser terminalen **Copy failed: clipboard access denied**, og ingenting skrives. Det er en tillatelsesavgjørelse fra nettleseren, ikke en tegningsfeil — se [Tillatelser for utklippstavlen](#tillatelser-for-utklippstavlen) nedenfor.

## Utvalg mens kommandoen kjører

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Tar enheten under markøren inn i eller ut av utvalget |
| **Dra mot høyre** (streng) | Legger til enheter som ligger helt inne i rammen |
| **Dra mot venstre** (kryssende) | Legger til enheter som krysser rammekanten |
| **Enter** / **Space** | Bekrefter utvalget og kopierer |

## Tastaturreferanse

| Tast | Handling |
|------|----------|
| `Ctrl+C` / `Cmd+C` | Aktiver ClipboardCopy |
| `Enter` / `Space` | Kopier gjeldende utvalg, eller avslutt hvis ingenting er valgt |
| `Escape` | Avbryt uten å kopiere |

## Tillatelser for utklippstavlen

Å skrive til systemets utklippstavle krever tillatelse fra nettleseren. I praksis innvilges en kopiering utløst av et tastetrykk uten spørsmål i dagens skrivebordsnettlesere, men en side som har mistet fokus, eller en nettleser med strenge utklippsinnstillinger, kan nekte. Hvis meldingen om nektet tilgang dukker opp, klikk én gang på tegneflaten for å gi siden fokus og prøv igjen.

Siden innholdet er vanlig JSON-tekst, erstattes det av alt annet du kopierer etterpå — en tekstlinje, en lenke. Kopier på nytt før du limer inn hvis du har brukt utklippstavlen til noe annet i mellomtiden.

## Støttede enheter

ClipboardCopy fungerer med alle enhetstyper. Enheter serialiseres med samme mekanisme som den innebygde `.json`-eksporten bruker, så ingenting går tapt underveis.

## Se også

- [ClipboardPaste](../clipboard-paste/) — lese utklippstavlen tilbake og plassere enhetene
- [Copy](../copy/) — duplisere enheter innenfor den gjeldende tegningen
- [Export Manager](../export-manager/) — lagre en hel tegning som DXF eller JSON
