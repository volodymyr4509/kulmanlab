---
title: Text-kommando — Plasser MTEXT-etiketter i KulmanLab CAD
description: Text-kommandoen plasserer en flerlinjes, rikt formatert MTEXT-etikett. Klikk en posisjon, skriv i popup-editoren, og trykk Escape for å bekrefte. Dobbeltklikk en hvilken som helst eksisterende etikett for å åpne editoren på nytt.
keywords: [CAD text-kommando, MTEXT, plasser tekstetikett CAD, tekstannotasjon CAD, fet kursiv CAD, flerlinjetekst CAD, kulmanlab]
group: markup
order: 0
---

# Text

Kommandoen `text` plasserer en flerlinjes tekstetikett. Etter at du klikker en posisjon på lerretet, åpnes en popup-editor i **rik** modus — du kan skrive innhold, bruke fet/kursiv/gjennomstreking per tegn, endre skrifter og høyder, og sette inn linjeskift. Trykk **Escape** for å bekrefte og lukke editoren.

Se [Tekstredigering](../../interface/text-editor/)-siden for den fullstendige editorreferansen, inkludert en sammenligning av **rik** og **enkel** modus.

## Plassere en tekstetikett

1. Skriv `text` i terminalen eller klikk på **Text**-knappen i verktøylinjen.
2. **Klikk ankerposisjonen** på lerretet. Eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
3. **Teksteditor-popupen** åpnes over den nye etiketten. Skriv innholdet ditt.
4. Trykk **Escape** for å bekrefte etiketten og lukke editoren.

Standardhøyden er **12 tegneenheter**.

## Redigere en eksisterende etikett

**Dobbeltklikk** en hvilken som helst tekstetikett på lerretet for å åpne editoren for den etiketten på nytt.

## Koordinatinntasting for ankeret

I stedet for å klikke kan du skrive inn en eksakt posisjon:

1. Skriv X-verdien.
2. Trykk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-verdien.
4. Trykk **Enter** for å plassere ankeret og åpne editoren.

## Tastaturreferanse

**Ankerfase**

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting |
| `,` | Lås X og gå til Y-inntasting |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft inntastet koordinat |

**Teksteditor-fase** (se [Tekstredigering](../../interface/text-editor/) for den fullstendige referansen)

| Tast | Handling |
|-----|--------|
| Ethvert utskrivbart tegn | Sett inn ved markøren |
| `Backspace` / `Delete` | Slett tilstøtende tegn eller markering |
| `Enter` | Sett inn et linjeskift |
| `←` / `→` | Flytt markøren |
| `Home` / `End` | Hopp til start / slutt av harde linjen |
| `Escape` | Bekreft og lukk editoren |

## Grep-redigering — omplassering

En markert tekstetikett viser ett grep ved ankerpunktet:

| Grep | Posisjon | Hva den gjør |
|------|----------|--------------|
| **Anker** | Nederst til venstre for teksten | Dra for å omplassere etiketten |

## Markere tekst

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Markerer hvis klikket lander innenfor tekstens roterte avgrensningsboks |
| **Dra til høyre** (streng) | Alle fire hjørner av avgrensningsboksen må ligge inni markeringsområdet |
| **Dra til venstre** (krysning) | Enhver overlapping mellom tekstens avgrensningsboks og markeringsområdet markerer den |

## Støttede redigeringskommandoer

| Kommando | Hva som skjer med teksten |
|---------|--------------------------|
| [Move](../move/) | Flytter ankerpunktet |
| [Copy](../copy/) | Oppretter en identisk etikett på en ny posisjon |
| [Rotate](../rotate/) | Roterer ankerposisjonen og legger vinkelen til Rotation Degree |
| [Mirror](../mirror/) | Speilvender ankerpunktet over speilaksen (tekststrengen snus ikke) |
| [Scale](../scale/) | Skalerer ankerposisjonen og multipliserer høyden med skaleringsfaktoren |
| [Delete](../delete/) | Fjerner etiketten |

Text støtter ikke **Offset**, **Trim** eller **Extend**.

## Egenskaper

Når en tekstetikett er markert, viser egenskapspanelet:

**Generelt**

| Egenskap | Standard | Betydning |
|----------|---------|---------|
| Farge | 256 (ByLayer) | ACI-fargeindeks |
| Lag | `0` | Lagtilhørighet |

**Geometri**

| Egenskap | Betydning |
|----------|---------|
| Position X / Position Y | Koordinater for ankerpunktet |
| Height | Grunnleggende teksthøyde i tegneenheter (standard: **12**) |
| Rotation Degree | Rotasjon mot klokken i grader |

**Egenskaper**

| Egenskap | Betydning |
|----------|---------|
| Content | Tekststrengen (MTEXT-innebygde koder bevart) |
| Attachment Point | Justeringskode (1 = øverst til venstre … 9 = nederst til høyre) |

Text har ikke Linetype-, Linetype Scale- eller Thickness-egenskaper.

## DXF — MTEXT-entitet

Tekstetiketter lagres som **MTEXT**-entiteter i DXF-filen. Fet og kursiv kodes med `\L`, `\K`, `\O` og innebygde skriftbytter (`\f`). Per-tegn høyde kodes som `\H`. All formatering overlever en fullstendig DXF-rundtur og kan leses av LibreCAD, FreeCAD og andre DXF-kompatible applikasjoner.
