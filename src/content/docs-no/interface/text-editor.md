---
title: Tekstredigering — Rik og Enkel Modus i KulmanLab CAD
description: KulmanLab CAD-tekstredigereren har to moduser — rik (per-tegn formatering, flerlinje, tekstbryting for Text og Multileader) og enkel (ensartet stil, én linje for målentiteter). En modus-chip i toppfeltet viser hvilken modus som er aktiv.
keywords: [CAD tekstredigering, MTEXT, fet kursiv CAD, tekstformatering CAD, flerlinjetekst CAD, tekstbryting CAD, rik teksteditor, enkel teksteditor, mål-teksteditor, egendefinert skrift CAD, last opp ttf CAD, kulmanlab]
group: interface
order: 5
---

# Tekstredigering

Teksteditoren åpnes når du plasserer eller dobbeltklikker en redigerbar entitet. En liten **modus-chip** i toppfeltet — **rik** (aksentfarge) eller **enkel** (dempet) — viser hvilken modus som er aktiv for gjeldende entitet.

## Editormoduser

### Rik modus

Brukes av: **Text** (MTEXT-etiketter) og **Multileader**-annotasjoner.

| Funksjon | Oppførsel |
|---------|-----------|
| Fet / Kursiv / Gjennomstreking | Per tegn (gjelder markering, eller hele entiteten hvis ingen markering) |
| Skrift og Høyde | Per-tegn overstyring, eller standard for hele entiteten |
| Justering (Venstre / Midtstilt / Høyre / Blokkjustert) | **Kun Text** — ikke tilgjengelig for Multileader |
| `Enter` | Setter inn et hardt linjeskift |
| `Shift+←/→` | Utvider eller krymper en tekstmarkering |
| `Home` / `End` | Hopp til start / slutt av gjeldende harde linje |
| Tekstbryting | Støttes via referansebredde-endringsgrep |

### Enkel modus

Brukes av: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

Editoren er forhåndsutfylt med målets gjengitte etikett, slik at du kan plassere markøren og redigere verdien direkte.

| Funksjon | Oppførsel |
|---------|-----------|
| Fet / Kursiv / Skrift / Høyde | Tilgjengelig — gjelder **hele** etiketten samtidig |
| Per-tegn formatering | Støttes ikke |
| `Enter` | **Bekrefter** verdien og lukker editoren (ikke linjeskift) |
| Flerlinje | Støttes ikke |
| Tekstbryting | Støttes ikke |

## Åpne editoren

| Handling | Resultat |
|--------|--------|
| `text`-kommando → klikk posisjon | Oppretter en ny tekstentitet og åpner editoren (**rik**) |
| Dobbeltklikk på en eksisterende **Text**-entitet | Åpner editoren igjen i **rik** modus |
| Dobbeltklikk på en eksisterende **Multileader** | Åpner editoren i **rik** modus |
| Dobbeltklikk på en **mål**-entitet | Åpner editoren i **enkel** modus |
| `Escape` inne i editoren | Lukker editoren og beholder alle endringer |

## Verktøylinje

Verktøylinjen svever over tekstens avgrensningsboks og forblir forankret til entiteten mens du panorerer eller zoomer.

### Fet · Kursiv · Gjennomstreking

| Knapp | Snarvei | Hva den gjør |
|--------|----------|--------------|
| **B** | — | Slå fet på/av |
| *I* | — | Slå kursiv på/av |
| ~~S~~ | — | Slå gjennomstreking på/av |

**Slik virker det:**

- **Med en tekstmarkering** — stilen brukes kun på nøyaktig de markerte tegnene.
- **Ingen markering, markør i eksisterende tekst** — slår stilen på/av for hele entiteten (alle segmenter).
- **Tom tekst eller ny entitet** — stilen lagres på det tomme segmentet og brukes på hvert tegn du skriver fra det punktet.

Knappen vises uthevet (aktiv) når hvert tegn i gjeldende markering — eller tegnet umiddelbart til venstre for markøren — har den stilen satt.

### Skrift

Nedtrekksmenyen grupperer tilgjengelige skrifttyper i **Default** (den innebygde grotesk-skriften), **User** (dine egne opplastede skrifter, hvis noen), **Free** (et sett med medfølgende Google Fonts) og **System** (vanlige OS-skrifter som Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console og Impact).

- **Med en markering** — overstyrer skriften kun for markerte tegn.
- **Ingen markering** — bruker skriften på hele entiteten.

Nedtrekksmenyen gjenspeiler skriften til tegnet til venstre for markøren når det ikke er noen markering.

Ikke begrenset til den innebygde listen — klikk på **Font Manager**-knappen i verktøylinjen for å laste opp din egen `.ttf`-fil og legge den til i **User**-gruppen. Se [Font Manager](../../commands/font-manager/) for detaljer.

### Høyde

Tallfeltet setter **versalhøyden** (høyden på en stor bokstav) i tegneenheter.

- **Med en markering** — overstyrer høyden for markerte tegn, uavhengig av entitetens basishøyde.
- **Ingen markering** — endrer entitetens basishøyde (gjelder alle tegn som ikke har en individuell høyde-overstyring).

Feltet gjenspeiler høyden til tegnet til venstre for markøren. La det stå tomt for å bruke entitetens standard.

### Justering

Fire knapper — **Align Left**, **Align Center**, **Align Right**, **Justify** — setter avsnittsjustering. Tilgjengelig kun for **Text**-entiteter; Multileader og mål-etiketter viser ikke disse knappene.

- Å klikke på en knapp justerer hver rad på nytt innenfor entitetens eksisterende avgrensningsboks — den flytter ikke innsettingspunktet eller endrer størrelsen på boksen.
- Å klikke på den allerede aktive knappen fjerner overstyringen og faller tilbake til kolonnen implisert av entitetens festepunkt.
- **Justify** strekker mellomromsavstanden mellom ord slik at hver rad fyller hele radbredden.

## Markør og navigasjon

| Tast | Handling |
|-----|--------|
| `←` / `→` | Flytt markøren ett tegn til venstre eller høyre |
| `Home` | Hopp til starten av gjeldende harde linje |
| `End` | Hopp til slutten av gjeldende harde linje |
| `Shift` + `←` / `→` | Utvid eller krymp markeringen |
| `Backspace` | Slett tegnet til venstre (eller markeringen) |
| `Delete` | Slett tegnet til høyre (eller markeringen) |
| `Enter` | Sett inn et linjeskift |
| `Escape` | Lukk editoren |

Markørhøyden samsvarer automatisk med versalhøyden til det tilstøtende tegnet, inkludert den mindre størrelsen brukt for senket og hevet skrift.

## Kopiere, klippe ut og lime inn

| Tast | Handling |
|-----|--------|
| `Ctrl+C` / `Cmd+C` | Kopier den markerte teksten |
| `Ctrl+X` / `Cmd+X` | Klipp ut den markerte teksten |
| `Ctrl+V` / `Cmd+V` | Lim inn ved markøren |

Kopiering og utklipping krever en aktiv tekstmarkering. Innlimt tekst er alltid ren tekst — den overtar formateringen (fet, kursiv, skrift, høyde) som allerede er ved markøren, i stedet for å beholde formateringen den hadde da den ble kopiert.

I **rik modus** bevares linjeskift i den innlimte teksten. I **enkel modus** fjernes linjeskift, siden mål-etiketter er énlinjes.

## Tekstbryting

Når en tekstentitet har en **referansebredde** satt, brytes lange linjer mykt ved ordgrenser for å passe innenfor den bredden.

For å sette eller endre referansebredden mens entiteten er markert, dra i **endringsgrepene** — de tynne rektanglene på venstre og høyre kant av den stiplede avgrensningsboksen. Innholdet flyter om i sanntid mens du drar.

Å sette referansebredden til null (dra grepene sammen eller slett verdien i egenskapspanelet) fjerner tekstbrytingen og lar linjene vokse fritt.

## Flerlinjetekst

Trykk `Enter` for å sette inn et hardt linjeskift. Hver harde linje er uavhengig — `Home` og `End` navigerer kun innenfor gjeldende harde linje.

Harde linjeskift og per-tegn formatering lagres ved hjelp av MTEXT-formatet og overlever en fullstendig DXF-runde.

## DXF-kompatibilitet

Tekstentiteter lagres som **MTEXT** i DXF-filer. Fet og kursiv kodes som `\L`, `\K`, `\O`, og innebygde skriftbytter (`\f`). Per-tegn høyde kodes som `\H`. All formatering bevares ved eksport og kan leses av LibreCAD, FreeCAD og andre DXF-kompatible applikasjoner.
