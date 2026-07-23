---
title: Tekstredigering — Rig og Simpel Tilstand i KulmanLab CAD
description: KulmanLab CAD-teksteditoren har to tilstande — rig (per-tegn formatering, flerlinje, tekstombrydning for Text og Multileader) og simpel (ensartet stil, én linje for mål-entiteter). En tilstands-chip i toppen viser hvilken tilstand der er aktiv.
keywords: [CAD tekstredigering, MTEXT, fed kursiv CAD, tekstformatering CAD, flerlinjetekst CAD, tekstombrydning CAD, rig teksteditor, simpel teksteditor, mål-teksteditor, brugerdefineret skrifttype CAD, upload ttf CAD, kulmanlab]
group: interface
order: 5
---

# Tekstredigering

Teksteditoren åbnes, når du placerer eller dobbeltklikker en redigerbar entitet. En lille **tilstands-chip** i toppen — **rig** (accentfarve) eller **simpel** (dæmpet) — viser hvilken tilstand der er aktiv for den aktuelle entitet.

## Editortilstande

### Rig tilstand

Bruges af: **Text** (MTEXT-etiketter) og **Multileader**-annotationer.

| Funktion | Adfærd |
|---------|-----------|
| Fed / Kursiv / Gennemstreget | Per tegn (gælder markering, eller hele entiteten hvis ingen markering) |
| Skrifttype og Højde | Per-tegn overstyring, eller standard for hele entiteten |
| Justering (Venstre / Centreret / Højre / Blokjusteret) | **Kun Text** — ikke tilgængelig for Multileader |
| `Enter` | Indsætter et hårdt linjeskift |
| `Shift+←/→` | Udvider eller formindsker en tekstmarkering |
| `Home` / `End` | Hop til start / slut af den aktuelle hårde linje |
| Tekstombrydning | Understøttet via referencebredde-ændringsgreb |

### Simpel tilstand

Bruges af: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

Editoren er forudfyldt med målets aktuelle gengivne etiket, så du kan placere markøren og redigere værdien direkte.

| Funktion | Adfærd |
|---------|-----------|
| Fed / Kursiv / Skrifttype / Højde | Tilgængelig — gælder **hele** etiketten på én gang |
| Per-tegn formatering | Understøttes ikke |
| `Enter` | **Bekræfter** værdien og lukker editoren (ikke linjeskift) |
| Flerlinje | Understøttes ikke |
| Tekstombrydning | Understøttes ikke |

## Åbne editoren

| Handling | Resultat |
|--------|--------|
| `text`-kommando → klik position | Opretter en ny tekstentitet og åbner editoren (**rig**) |
| Dobbeltklik en eksisterende **Text**-entitet | Genåbner editoren i **rig** tilstand |
| Dobbeltklik en eksisterende **Multileader** | Åbner editoren i **rig** tilstand |
| Dobbeltklik en **dimension**-entitet | Åbner editoren i **simpel** tilstand |
| `Escape` inde i editoren | Lukker editoren og bevarer alle ændringer |

## Værktøjslinje

Værktøjslinjen svæver over tekstens afgrænsningsboks og forbliver forankret til entiteten mens du panorerer eller zoomer.

### Fed · Kursiv · Gennemstreget

| Knap | Genvej | Hvad den gør |
|--------|----------|--------------|
| **B** | — | Slå fed til/fra |
| *I* | — | Slå kursiv til/fra |
| ~~S~~ | — | Slå gennemstreget til/fra |

**Sådan virker det:**

- **Med en tekstmarkering** — stilen anvendes kun på nøjagtigt de markerede tegn.
- **Ingen markering, markør i eksisterende tekst** — slår stilen til/fra for hele entiteten (alle segmenter).
- **Tom tekst eller ny entitet** — stilen gemmes på det tomme segment og anvendes på hvert tegn du skriver fra det punkt.

Knappen vises fremhævet (aktiv), når hvert tegn i den aktuelle markering — eller tegnet umiddelbart til venstre for markøren — har den stil sat.

### Skrifttype

Rullemenuen grupperer tilgængelige skrifttyper i **Default** (den indbyggede grotesk-skrift), **User** (dine egne uploadede skrifttyper, hvis nogen), **Free** (et sæt medfølgende Google Fonts) og **System** (almindelige OS-skrifttyper som Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console og Impact).

- **Med en markering** — overstyrer skrifttypen kun for markerede tegn.
- **Ingen markering** — anvender skrifttypen på hele entiteten.

Rullemenuen afspejler skrifttypen for tegnet til venstre for markøren, når der ikke er nogen markering.

Ikke begrænset til den indbyggede liste — klik på **Font Manager**-knappen i værktøjslinjen for at uploade din egen `.ttf`-fil og tilføje den til **User**-gruppen. Se [Font Manager](../../commands/font-manager/) for detaljer.

### Højde

Talfeltet sætter **versalhøjden** (højden på et stort bogstav) i tegneenheder.

- **Med en markering** — overstyrer højden for markerede tegn, uafhængigt af entitetens basishøjde.
- **Ingen markering** — ændrer entitetens basishøjde (gælder alle tegn, der ikke har en individuel højdeoverstyring).

Feltet afspejler højden på tegnet til venstre for markøren. Lad det stå tomt for at bruge entitetens standard.

### Justering

Fire knapper — **Align Left**, **Align Center**, **Align Right**, **Justify** — sætter afsnitsjustering. Tilgængelig kun for **Text**-entiteter; Multileader og dimensionsetiketter viser ikke disse knapper.

- At klikke en knap rejustifierer hver række inden for entitetens eksisterende afgrænsningsboks — den flytter ikke indsætningspunktet eller ændrer boksens størrelse.
- At klikke den allerede aktive knap fjerner overstyringen og falder tilbage til den kolonne, der er impliceret af entitetens fastgørelsespunkt.
- **Justify** strækker mellemrum mellem ord, så hver række fylder hele rækkens bredde.

## Markør og navigation

| Tast | Handling |
|-----|--------|
| `←` / `→` | Flyt markør ét tegn til venstre eller højre |
| `Home` | Hop til starten af den aktuelle hårde linje |
| `End` | Hop til slutningen af den aktuelle hårde linje |
| `Shift` + `←` / `→` | Udvid eller formindsk markeringen |
| `Backspace` | Slet tegnet til venstre (eller markeringen) |
| `Delete` | Slet tegnet til højre (eller markeringen) |
| `Enter` | Indsæt et linjeskift |
| `Escape` | Luk editoren |

Markørhøjden matcher automatisk versalhøjden på det tilstødende tegn, inklusive den mindre størrelse brugt til sænket og hævet skrift.

## Kopiér, klip og indsæt

| Tast | Handling |
|-----|--------|
| `Ctrl+C` / `Cmd+C` | Kopiér den markerede tekst |
| `Ctrl+X` / `Cmd+X` | Klip den markerede tekst |
| `Ctrl+V` / `Cmd+V` | Indsæt ved markøren |

Kopiering og klipning kræver en aktiv tekstmarkering. Indsat tekst er altid ren tekst — den overtager formateringen (fed, kursiv, skrifttype, højde), der allerede er ved markøren, i stedet for at bevare formateringen den havde, da den blev kopieret.

I **rig tilstand** bevares linjeskift i den indsatte tekst. I **simpel tilstand** fjernes linjeskift, da dimensionsetiketter er énlinjes.

## Tekstombrydning

Når en tekstentitet har en **referencebredde** sat, ombrydes lange linjer blødt ved ordgrænser for at passe inden for den bredde.

For at sætte eller ændre referencebredden mens entiteten er markeret, træk i **ændringsgrebene** — de tynde rektangler på venstre og højre kant af den stiplede afgrænsningsboks. Indholdet flyder om i realtid mens du trækker.

At sætte referencebredden til nul (træk grebene sammen eller slet værdien i egenskabspanelet) fjerner tekstombrydningen og lader linjerne vokse frit.

## Flerlinjetekst

Tryk `Enter` for at indsætte et hårdt linjeskift. Hver hård linje er uafhængig — `Home` og `End` navigerer kun inden for den aktuelle hårde linje.

Hårde linjeskift og per-tegn formatering gemmes ved hjælp af MTEXT-formatet og overlever en fuld DXF-rundtur.

## DXF-kompatibilitet

Tekstentiteter gemmes som **MTEXT** i DXF-filer. Fed og kursiv kodes som `\L`, `\K`, `\O`, og indlejrede skriftskift (`\f`). Per-tegn højde kodes som `\H`. Al formatering bevares ved eksport og kan læses af LibreCAD, FreeCAD og andre DXF-kompatible applikationer.
