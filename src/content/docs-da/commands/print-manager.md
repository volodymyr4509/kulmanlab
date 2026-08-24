---
title: Print Manager — Eksportér som PNG, JPEG, WebP eller PDF
description: PrintManager-kommandoen åbner Print Manager — et dedikeret eksportvindue med en live forhåndsvisning der matcher den eksporterede fil nøjagtigt, en Kvalitet/DPI-indstilling, formatvælger, en Default/Monochrome/Blueprint-printstil og valgfri områdemarkering. Understøtter PNG, JPEG, WebP og PDF.
keywords: [CAD eksportér PNG, CAD eksportér PDF, print CAD-tegning, print manager, printkvalitet DPI, monokrom eksport, blueprint printstil, kulmanlab eksport]
group: file
order: 4
---

# Print Manager

Kommandoen `PrintManager` åbner **Print Manager** — et dedikeret eksportvindue med et levende forhåndsvisningslærred, formatvælger (PNG / JPEG / WebP / PDF), en Style-vælger (Default / Monochrome / Blueprint) og valgfri områdebeskæring. Intet sendes til en fysisk printer — output downloades som en fil.

## Åbne Print Manager

Klik på **Print**-knappen i værktøjslinjen eller skriv `PrintManager` i terminalen. Print Manager åbnes straks og viser en forhåndsvisning af den aktuelle viewport.

Forhåndsvisningen renderes gennem nøjagtig samme kodesti, i nøjagtig samme pixelopløsning, som den fil du til sidst eksporterer — ændring af Quality, Style eller eksportområdet genrenderer forhåndsvisningen med det samme, så det du ser, er det der downloades, ikke en tilnærmelse.

## Print Manager-layout

Vinduet har to paneler:
- **Venstre sidepanel** — alle eksportkontroller.
- **Højre panel** — levende forhåndsvisningslærred der opdateres, mens du ændrer indstillinger.

### Sidepanel-kontroller

| Kontrol | Beskrivelse |
|---------|-------------|
| **Change Area** | Beskær til et brugerdefineret rektangel på lærredet (se nedenfor) — beskærer faktisk det eksporterede billede, også på et layout med papirområde, ikke kun forhåndsvisningen på skærmen |
| **Quality**-rullemenu | Angiver eksportopløsningen (se nedenfor) |
| **Style**-rullemenu | Default, Monochrome eller Blueprint — se *Printstile* nedenfor. Monochrome som standard for rent print-output |
| **Format**-rullemenu | PNG, JPEG, WebP eller PDF |
| **Export**-knap | Generér og download filen |

## Printstile

**Style**-rullemenuen styrer både den blækfarve, entiteter tegnes med, og sidebaggrunden:

| Stil | Blæk | Sidebaggrund |
|------|------|--------------|
| **Default** | Hver entitets egen farve | Hvid |
| **Monochrome** *(standard)* | Ensfarvet sort, uanset entitets-/lagfarve | Hvid |
| **Blueprint** | Ensfarvet hvid, uanset entitets-/lagfarve | Dyb preussisk blå, med et svagt referencegitter |

Blueprint genskaber udseendet af et traditionelt cyanotypi-arkitekturprint — hvide streger på et mørkeblåt ark. Referencegitteret er dimensioneret i forhold til sidestørrelsen, ikke DPI, så det ser lige tæt ud ved enhver Quality-indstilling i stedet for at blive tættere med stigende opløsning.

## Kvalitet og opløsning

Rullemenuen **Quality** angiver den DPI, eksporten renderes med:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(standard)* | 150 |
| Presentation | 300 |
| Max | 600 |

Højere Quality giver et større, skarpere billede i samme fysiske størrelse — linjetykkelser skaleres sammen med opløsningen, så en linje bevarer samme *fysiske* tykkelse på papir ved enhver Quality-indstilling, i stedet for at se tyndere ud ved stigende DPI. Den ene undtagelse er en hårlinje (linjetykkelse `0`), der traditionelt defineres som "den tyndeste linje outputenheden kan tegne" — den forbliver en fast bredde på 1 pixel på ethvert Quality-niveau, ligesom den opfører sig på det levende lærred.

At ændre Quality genrenderer forhåndsvisningen med det samme, så du ser den faktiske skarphed (og afvejningen af filstørrelse) før eksport.

## Vælge et brugerdefineret eksportområde

Som standard viser forhåndsvisningen den omsluttende kasse om alle objekter i modelrummet — samme udstrækning som [Fit](../fit/) zoomer til — eller hele arket i et layout. For at eksportere et bestemt område:

1. Klik **Change Area** — Print Manager skjules, og lærredet bliver interaktivt.
2. **Klik det første hjørne** af eksportrektanglet.
3. **Klik det modsatte hjørne** — Print Manager åbnes igen med det valgte område i forhåndsvisningen.

Tryk `Escape` under områdevalg for at annullere og gendanne det forrige område.

Forhåndsvisningslærredet ændrer størrelse dynamisk for at matche det **eksakte størrelsesforhold** for det valgte område, så forhåndsvisningen er pixelnøjagtig.

Det valgte område huskes separat for modelrummet og for hvert layout, indtil du genindlæser siden — se [ChangePrintArea](../change-print-area/).

## Eksportformater

| Format | Bedst til | Bemærkninger |
|--------|----------|-------|
| **PNG** | Tabsfri, skarpe linjer | Stilens sidebaggrund er bagt ind, ingen gennemsigtighed |
| **JPEG** | Mindre fil til deling | 95% kvalitet, let komprimering |
| **WebP** | Mindste fil til web | Samme 95% kvalitet, bedre komprimering end JPEG |
| **PDF** | Printklare dokumenter | Billede indlejret i en PDF-beholder ved den valgte Quality's DPI, dimensioneret så siden printes i sand fysisk skala |

Den eksporterede fil hedder `kulman-<tidsstempel>.<filtype>` og downloades automatisk.

## Eksportopløsning og baggrund

- **Model space-/viewport-eksport**: begrænset til 2000 × 2000 pixels ved standard Normal-kvalitet (150 DPI), skaleret proportionalt til det valgte område; grænsen skalerer også med Quality — Draft har en lavere grænse, Presentation og Max en højere (op til 8000 × 8000 ved Max/600 DPI).
- **Layout-eksport (papirområde)**: dimensioneret direkte ud fra layoutets papirmål ved den valgte DPI — f.eks. eksporteres et A4-ark (210 × 297 mm) ved Normal-kvalitet i ca. 1240 × 1754 px — og er dermed ikke underlagt viewportens 2000 px-grænse.
- Baggrunden følger den valgte print-**Style** — hvid for Default og Monochrome, dyb preussisk blå for Blueprint (se *Printstile* ovenfor).
- Lag markeret som **ikke-printende** ekskluderes fra eksporten.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Escape` (under områdevalg) | Annullér områdevalg, gendan forrige område |
| `Escape` (i Print Manager) | Luk Print Manager |
