---
title: Print-kommando — Eksportér som PNG, JPEG, WebP eller PDF
description: Print-kommandoen åbner Print Manager — et dedikeret eksportvindue med en levende forhåndsvisning, formatvælger, monokrom-knap og valgfri områdemarkering. Eksporterer op til 2000×2000 px. Understøtter PNG, JPEG, WebP og PDF.
keywords: [CAD eksportér PNG, CAD eksportér PDF, print CAD-tegning, print manager, monokrom eksport, kulmanlab eksport]
group: file
order: 4
---

# Print

Kommandoen `print` åbner **Print Manager** — et dedikeret eksportvindue med et levende forhåndsvisningslærred, formatvælger (PNG / JPEG / WebP / PDF), monokrom-knap og valgfri områdebeskæring. Intet sendes til en fysisk printer — output downloades som en fil.

## Åbne Print Manager

Klik på **Print**-knappen i værktøjslinjen eller skriv `print` i terminalen. Print Manager åbnes straks og viser en forhåndsvisning af den aktuelle viewport.

## Print Manager-layout

Vinduet har to paneler:
- **Venstre sidepanel** — alle eksportkontroller.
- **Højre panel** — levende forhåndsvisningslærred der opdateres, mens du ændrer indstillinger.

### Sidepanel-kontroller

| Kontrol | Beskrivelse |
|---------|-------------|
| **Change Area** | Beskær til et brugerdefineret rektangel på lærredet (se nedenfor) |
| **Monochrome**-knap | Konvertér alle farvede linjer til sort — til som standard for rent print-output |
| **Format**-rullemenu | PNG, JPEG, WebP eller PDF |
| **Export**-knap | Generér og download filen |

## Vælge et brugerdefineret eksportområde

Som standard viser forhåndsvisningen nøjagtigt det, der var synligt på lærredet, da du åbnede Print Manager. For at eksportere et specifikt område:

1. Klik **Change Area** — Print Manager skjules, og lærredet bliver interaktivt.
2. **Klik det første hjørne** af eksportrektanglet.
3. **Klik det modsatte hjørne** — Print Manager åbnes igen med det valgte område i forhåndsvisningen.

Tryk `Escape` under områdevalg for at annullere og gendanne det forrige område.

Forhåndsvisningslærredet ændrer størrelse dynamisk for at matche det **eksakte størrelsesforhold** for det valgte område, så forhåndsvisningen er pixelnøjagtig.

## Eksportformater

| Format | Bedst til | Bemærkninger |
|--------|----------|-------|
| **PNG** | Tabsfri, skarpe linjer | Hvid baggrund, ingen gennemsigtighed |
| **JPEG** | Mindre fil til deling | 95% kvalitet, let komprimering |
| **WebP** | Mindste fil til web | Samme 95% kvalitet, bedre komprimering end JPEG |
| **PDF** | Printklare dokumenter | Billede indlejret ved 150 DPI inden i PDF-beholderen |

Den eksporterede fil hedder `kulman-<tidsstempel>.<filtype>` og downloades automatisk.

## Eksportopløsning og baggrund

- Maksimal opløsning: **2000 × 2000 pixels**, skaleret proportionalt til det valgte område.
- Baggrunden er altid **hvid**.
- Lag markeret som **ikke-printende** ekskluderes fra eksporten.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Escape` (under områdevalg) | Annullér områdevalg, gendan forrige område |
| `Escape` (i Print Manager) | Luk Print Manager |
