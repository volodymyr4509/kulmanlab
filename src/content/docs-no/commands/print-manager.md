---
title: Print Manager — Eksporter som PNG, JPEG, WebP eller PDF
description: PrintManager-kommandoen åpner Print Manager — et dedikert eksportvindu med en levende forhåndsvisning som samsvarer nøyaktig med den eksporterte filen, en Kvalitet/DPI-innstilling, formatvelger, en Default/Monochrome/Blueprint-utskriftsstil og valgfri områdemarkering. Støtter PNG, JPEG, WebP og PDF.
keywords: [CAD eksporter PNG, CAD eksporter PDF, skriv ut CAD-tegning, print manager, utskriftskvalitet DPI, monokrom eksport, blueprint utskriftsstil, kulmanlab eksport]
group: file
order: 4
---

# Print Manager

Kommandoen `Utskriftsbehandler` åpner **Print Manager** — et dedikert eksportvindu med et levende forhåndsvisningslerret, formatvelger (PNG / JPEG / WebP / PDF), en Style-velger (Default / Monochrome / Blueprint) og valgfri områdebeskjæring. Ingenting sendes til en fysisk skriver — utdataen lastes ned som en fil.

## Åpne Print Manager

Klikk på **Print**-knappen i verktøylinjen eller skriv `Utskriftsbehandler` i terminalen. Print Manager åpnes umiddelbart og viser en forhåndsvisning av gjeldende viewport.

Forhåndsvisningen rendres gjennom nøyaktig samme kodesti, i nøyaktig samme pikseloppløsning, som filen du til slutt eksporterer — å endre Quality, Style eller eksportområdet rendrer forhåndsvisningen umiddelbart på nytt, slik at det du ser, er det som lastes ned, ikke en tilnærming.

## Print Manager-oppsett

Vinduet har to paneler:
- **Venstre sidefelt** — alle eksportkontroller.
- **Høyre panel** — levende forhåndsvisningslerret som oppdateres etter hvert som du endrer innstillinger.

### Kontroller i sidefeltet

| Kontroll | Beskrivelse |
|---------|-------------|
| **Change Area** | Beskjær til et egendefinert rektangel på lerretet (se nedenfor) — beskjærer faktisk det eksporterte bildet, også på et layout med papirområde, ikke bare forhåndsvisningen på skjermen |
| **Quality**-nedtrekksmeny | Angir eksportoppløsningen (se nedenfor) |
| **Style**-nedtrekksmeny | Default, Monochrome eller Blueprint — se *Utskriftsstiler* nedenfor. Monochrome som standard for ren utskrift |
| **Format**-nedtrekksmeny | PNG, JPEG, WebP eller PDF |
| **Export**-knapp | Generer og last ned filen |

## Utskriftsstiler

**Style**-nedtrekksmenyen styrer både blekkfargen entiteter tegnes med og sidebakgrunnen:

| Stil | Blekk | Sidebakgrunn |
|------|-------|--------------|
| **Default** | Hver entitets egen farge | Hvit |
| **Monochrome** *(standard)* | Ensfarget svart, uansett entitets-/lagfarge | Hvit |
| **Blueprint** | Ensfarget hvit, uansett entitets-/lagfarge | Dyp preussisk blå, med et svakt referanserutenett |

Blueprint gjenskaper utseendet til et tradisjonelt cyanotypi-arkitekturtrykk — hvite streker på et mørkeblått ark. Referanserutenettet er dimensjonert i forhold til sidestørrelsen, ikke DPI, slik at det ser like tett ut ved enhver Quality-innstilling i stedet for å bli tettere med økende oppløsning.

## Kvalitet og oppløsning

Nedtrekksmenyen **Quality** angir DPI-en eksporten rendres med:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(standard)* | 150 |
| Presentation | 300 |
| Max | 600 |

Høyere Quality gir et større, skarpere bilde i samme fysiske størrelse — linjetykkelser skaleres sammen med oppløsningen, slik at en linje beholder samme *fysiske* tykkelse på papir uansett Quality-innstilling, i stedet for å se tynnere ut ved økende DPI. Det ene unntaket er en hårlinje (linjetykkelse `0`), som tradisjonelt defineres som "den tynneste linjen utdataenheten kan tegne" — den forblir en fast bredde på 1 piksel på ethvert Quality-nivå, akkurat som den oppfører seg på det levende lerretet.

Å endre Quality rendrer forhåndsvisningen på nytt umiddelbart, slik at du ser den faktiske skarpheten (og avveiningen i filstørrelse) før eksport.

## Velge et egendefinert eksportområde

Som standard viser forhåndsvisningen det omsluttende rektangelet for alle objekter i modellrommet — samme utstrekning som [Fit](../fit/) zoomer til — eller hele arket i en layout. For å eksportere et bestemt område:

1. Klikk **Change Area** — Print Manager skjules og lerretet blir interaktivt.
2. **Klikk det første hjørnet** av eksportrektangelet.
3. **Klikk det motsatte hjørnet** — Print Manager åpnes igjen med det valgte området i forhåndsvisningen.

Trykk `Escape` under områdevalg for å avbryte og gjenopprette det forrige området.

Forhåndsvisningslerretet endrer størrelse dynamisk for å samsvare med det **eksakte størrelsesforholdet** til det valgte området, slik at forhåndsvisningen er pikselnøyaktig.

Det valgte området huskes separat for modellrommet og for hver layout til du laster siden på nytt — se [ChangePrintArea](../change-print-area/).

## Eksportformater

| Format | Best til | Merknader |
|--------|----------|-------|
| **PNG** | Tapsfri, skarpe linjer | Stilens sidebakgrunn bakt inn, ingen gjennomsiktighet |
| **JPEG** | Mindre fil for deling | 95 % kvalitet, litt komprimering |
| **WebP** | Minste fil for nett | Samme 95 % kvalitet, bedre komprimering enn JPEG |
| **PDF** | Utskriftsklare dokumenter | Bilde bygget inn i en PDF-beholder ved DPI-en til den valgte Quality, dimensjonert slik at siden skrives ut i sann fysisk skala |

Den eksporterte filen får navnet `kulman-<tidsstempel>.<filtype>` og lastes ned automatisk.

## Eksportoppløsning og bakgrunn

- **Model space-/viewport-eksport**: begrenset til 2000 × 2000 piksler ved standard Normal-kvalitet (150 DPI), skalert proporsjonalt til det valgte området; grensen skaleres også med Quality — Draft har en lavere grense, Presentation og Max en høyere (opptil 8000 × 8000 ved Max/600 DPI).
- **Layout-eksport (papirområde)**: dimensjonert direkte ut fra layoutets papirmål ved valgt DPI — f.eks. eksporteres et A4-ark (210 × 297 mm) ved Normal-kvalitet i ca. 1240 × 1754 px — og er dermed ikke underlagt viewportens 2000 px-grense.
- Bakgrunnen følger den valgte utskrifts-**Style** — hvit for Default og Monochrome, dyp preussisk blå for Blueprint (se *Utskriftsstiler* ovenfor).
- Lag merket som **ikke-plottbare** ekskluderes fra eksporten.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Escape` (under områdevalg) | Avbryt områdevalg, gjenopprett det forrige området |
| `Escape` (i Print Manager) | Lukk Print Manager |
