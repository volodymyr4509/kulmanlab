---
title: Kommandoen Tekststil — Administrer tekststiler
description: Opprett CAD-tekststiler med skrifttype, høyde, fet, kursiv, linjeavstand, justering og ramme.
keywords: [tekststil CAD, skrifttype CAD, tekstramme, tekstjustering, DXF-stil, kulmanlab]
group: style
order: 6
---

# TextStyle

Kommandoen `Tekststil` åpner stilbehandleren. Opprett navngitte stiler, rediger standardverdiene deres og velg *gjeldende* stil. Ny [Tekst](../text/) kopierer innstillingene fra gjeldende stil når den opprettes.

## Bruke stilbehandleren

Skriv `Tekststil` eller klikk **Tekststil** i merknadspanelet. ✓ markerer gjeldende stil; dobbeltklikk på en rad for å gjøre den stilen gjeldende.

| Felt | Funksjon |
|---|---|
| Navn | Unikt navn; `Standard` kan ikke gis nytt navn |
| Skrifttype / Høyde | Skrifttype og fast høyde; `0` = angis per tekst |
| Fet / Kursiv | Formatering som slås av og på uavhengig |
| Linjeavstand | Avstanden mellom tekstlinjene |
| Horisontal justering | Venstre, midtstilt, høyre eller blokkjustert |
| Ramme | Rektangulær ramme rundt ny tekst |

**Ny** kopierer den valgte stilen. **Slett** kan ikke fjerne `Standard` eller gjeldende stil. **Angi som gjeldende** påvirker bare tekst som opprettes senere; eksisterende tekst endres ikke. Et tomt, duplisert eller ugyldig DXF-navn deaktiverer **OK**. Importerte annotative stiler skjules, men dataene deres bevares.

## Lagring og DXF

**OK** lagrer endringene; **Lukk** eller `Escape` forkaster dem. Bruk `↑` og `↓` for å gå gjennom listen. Navn, skriftfiler, høyde, fet, kursiv og annotativt flagg er en del av DXF-tekststilen. Ramme, linjeavstand og justering er standardverdier per tekst i KulmanLab, ikke felt i DXF-tabellen STYLE.

Se også [Text](../text/), [FontManager](../font-manager/) og [MatchProperties](../match-properties/).
