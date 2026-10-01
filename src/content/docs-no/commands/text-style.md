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
| Gi nytt navn | Bruk blyanten ved navnet for å redigere det i listen; `Standard` kan ikke få nytt navn. |
| Skrifttype / Høyde | Skrifttype og obligatorisk positiv høyde. Null eller negative verdier blir `1`; behandleren godtar bare verdier over `0`. |
| Fet / Kursiv | Formatering som slås av og på uavhengig |
| Linjeavstand | Avstanden mellom tekstlinjene |
| Horisontal justering | Venstre, midtstilt, høyre eller blokkjustert |
| Ramme | Rektangulær ramme rundt ny tekst |

Forhåndsvisningen bruker samme gjengiver som lerretet og viser to linjer. Skrifttype, høyde, fet, kursiv, ramme, linjeavstand og justering oppdateres straks; avlesningen viser tilpasset zoom. Nye stiler er som standard **venstrejustert**.

**Ny** kopierer den valgte stilen. **Slett** kan ikke fjerne `Standard` eller gjeldende stil. **Angi som gjeldende** påvirker bare tekst som opprettes senere; eksisterende tekst endres ikke. Et tomt, duplisert eller ugyldig DXF-navn deaktiverer **OK**. Importerte annotative stiler skjules, men dataene deres bevares.

## Lagring og DXF

Navn, skriftfiler, fet, kursiv og annotativt flagg bevares i DXF-tekststiler. KulmanLab skriver STYLE-gruppe `40` som `0` (variabel høyde) og sist brukte høyde i gruppe `42`; en fast STYLE-høyde overstyrer derfor ikke målstilens egen teksthøyde. Ramme, linjeavstand og vannrett justering er KulmanLab-standarder per tekst, ikke felter i DXF STYLE-tabellen.
