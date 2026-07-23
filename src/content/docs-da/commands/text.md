---
title: Text-kommando — Placér MTEXT-etiketter i KulmanLab CAD
description: Text-kommandoen placerer en flerlinjes, rigt formateret MTEXT-etiket. Klik en position, skriv i popup-editoren, og tryk Escape for at bekræfte. Dobbeltklik en hvilken som helst eksisterende etiket for at genåbne editoren.
keywords: [CAD text-kommando, MTEXT, placér tekstetiket CAD, tekstannotation CAD, fed kursiv CAD, flerlinjetekst CAD, kulmanlab]
group: markup
order: 0
---

# Text

Kommandoen `text` placerer en flerlinjes tekstetiket. Efter du klikker en position på lærredet, åbnes en popup-editor i **rig** tilstand — du kan skrive indhold, anvende fed/kursiv/gennemstreget pr. tegn, ændre skrifttyper og højder, og indsætte linjeskift. Tryk **Escape** for at bekræfte og lukke editoren.

Se [Tekstredigering](../../interface/text-editor/)-siden for den fulde editorreference, inklusive en sammenligning af **rig** og **simpel** tilstand.

## Placere en tekstetiket

1. Skriv `text` i terminalen eller klik på **Text**-knappen i værktøjslinjen.
2. **Klik ankerpositionen** på lærredet. Eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
3. **Teksteditor-popup'en** åbnes over den nye etiket. Skriv dit indhold.
4. Tryk **Escape** for at bekræfte etiketten og lukke editoren.

Standardhøjden er **12 tegneenheder**.

## Redigere en eksisterende etiket

**Dobbeltklik** en hvilken som helst tekstetiket på lærredet for at genåbne editoren for den etiket.

## Koordinatindtastning for ankeret

I stedet for at klikke kan du indtaste en eksakt position:

1. Skriv X-værdien.
2. Tryk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-værdien.
4. Tryk **Enter** for at placere ankeret og åbne editoren.

## Tastaturreference

**Ankerfase**

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning |
| `,` | Lås X og gå til Y-indtastning |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft indtastet koordinat |

**Teksteditor-fase** (se [Tekstredigering](../../interface/text-editor/) for den fulde reference)

| Tast | Handling |
|-----|--------|
| Ethvert skrivbart tegn | Indsæt ved markøren |
| `Backspace` / `Delete` | Slet tilstødende tegn eller markering |
| `Enter` | Indsæt et linjeskift |
| `←` / `→` | Flyt markøren |
| `Home` / `End` | Hop til start / slut af hård linje |
| `Escape` | Bekræft og luk editoren |

## Grebredigering — omplacering

En markeret tekstetiket viser ét greb ved ankerpunktet:

| Greb | Position | Hvad den gør |
|------|----------|--------------|
| **Anker** | Nederst til venstre for teksten | Træk for at omplacere etiketten |

## Markere tekst

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Markerer, hvis klikket lander inden for tekstens roterede afgrænsningsboks |
| **Træk mod højre** (streng) | Alle fire hjørner af afgrænsningsboksen skal ligge inde i markeringsområdet |
| **Træk mod venstre** (krydsning) | Enhver overlapning mellem tekstens afgrænsningsboks og markeringsområdet markerer den |

## Understøttede redigeringskommandoer

| Kommando | Hvad der sker med teksten |
|---------|--------------------------|
| [Move](../move/) | Flytter ankerpunktet |
| [Copy](../copy/) | Opretter en identisk etiket på en ny position |
| [Rotate](../rotate/) | Roterer ankerpositionen og lægger vinklen til Rotation Degree |
| [Mirror](../mirror/) | Spejler ankerpunktet over spejlaksen (tekststrengen vendes ikke) |
| [Scale](../scale/) | Skalerer ankerpositionen og multiplicerer højden med skaleringsfaktoren |
| [Delete](../delete/) | Fjerner etiketten |

Text understøtter ikke **Offset**, **Trim** eller **Extend**.

## Egenskaber

Når en tekstetiket er markeret, viser egenskabspanelet:

**Generelt**

| Egenskab | Standard | Betydning |
|----------|---------|---------|
| Farve | 256 (ByLayer) | ACI-farveindeks |
| Lag | `0` | Lagtilhørsforhold |

**Geometri**

| Egenskab | Betydning |
|----------|---------|
| Position X / Position Y | Koordinater for ankerpunktet |
| Height | Grundlæggende teksthøjde i tegneenheder (standard: **12**) |
| Rotation Degree | Rotation mod uret i grader |

**Egenskaber**

| Egenskab | Betydning |
|----------|---------|
| Content | Tekststrengen (MTEXT-indbyggede koder bevaret) |
| Attachment Point | Justeringskode (1 = øverst til venstre … 9 = nederst til højre) |

Text har ikke Linetype-, Linetype Scale- eller Thickness-egenskaber.

## DXF — MTEXT-entitet

Tekstetiketter gemmes som **MTEXT**-entiteter i DXF-filen. Fed og kursiv kodes med `\L`, `\K`, `\O` og indlejrede skriftskift (`\f`). Per-tegn højde kodes som `\H`. Al formatering overlever en fuld DXF-rundtur og kan læses af LibreCAD, FreeCAD og andre DXF-kompatible applikationer.
