---
title: "Sådan forbereder du en DXF-fil til laserskæring"
description: "Hvorfor skæretjenester afviser DXF-filer, og hvordan du retter din — lukkede konturer, enheder, skærefuge og lag. Gratis i browseren, intet at installere."
keywords: [DXF laserskæring, forberede DXF laser, laserskæring filformat, DXF afvist laser, lukkede konturer DXF, skærefuge kerf laser, laserfil forberedelse, DXF enheder laser, lag skære gravere, gratis DXF-editor]
date: 2026-09-02
author: KulmanLab
tag: Guide
---

En DXF til laserskæring kræver fire ting: lukkede konturer, korrekte enheder, udelukkende skæregeometri — ingen mål, noter eller skraveringer — og lag, der adskiller skæring, ridsning og gravering. Denne guide gennemgår hver af dem og viser, hvordan du tjekker din fil, før en tjeneste afviser den.

Det hele kan du gøre gratis i browseren på [app.kulmanlab.com](https://app.kulmanlab.com): intet at installere, ingen konto, og filen forlader aldrig din computer. Det er netop dette arbejdsforløb, vi oprindeligt byggede KulmanLab til, så de begrænsninger, der gælder andre CAD-opgaver, gælder for det meste ikke her: laserskæring er 2D, og DXF er det, skæretjenesterne vil have.

## Hvorfor filer bliver afvist

Fem årsager dækker stort set det hele.

**Åbne konturer.** En form, der ser lukket ud, men har en hårfin åbning i et hjørne, er ikke et område — det er en samling usammenhængende linjer. Skæremaskiner skal vide, hvad der er indenfor og udenfor, og en åben kontur har intet indenfor. Det er med afstand den hyppigste afvisningsgrund.

**Forkerte eller uklare enheder.** DXF registrerer ikke pålideligt, hvad dens tal betyder. Den samme fil kan være i millimeter, centimeter, tommer eller fod, og ofte står det ikke i filen. En del, der ankommer 25,4 gange for stor eller for lille, er dette.

**Alt andet end geometri.** Mål, tegningshoveder, noter, skraveringer, hjælpelinjer. Maskinen forsøger gladeligt at skære dine noter med.

**Dubletlinjer.** To identiske linjer oven på hinanden betyder, at laseren kører den samme bane to gange: spildt tid, brændte kanter og i tyndt materiale brandfare.

**Alt på ét lag.** Er skæring, ridsning og gravering ikke adskilt, kan tjenesten ikke skelne dem og beder dig sende filen igen.

## At forberede filen

Træk din `.dxf` ind på tegnefladen på [app.kulmanlab.com](https://app.kulmanlab.com), eller brug knappen **Import** i filpanelet. Tegningen indlæses, og visningen tilpasses den.

**1. Se, hvad du faktisk har.** Skriv `fit` for at få det hele i billedet. Zoom derefter ind på hvert hjørne på hver del — åbninger er usynlige i hele tegningens målestok og indlysende ved ti gangers forstørrelse. Det er dette tjek, der sparer dig for afvisningsmailen.

**2. Slet det, der ikke skal skæres.** Hjælpelinjer, noter, rammer, mål. `layer-isolate` viser ét lag ad gangen, og sådan finder man rester, der gemmer sig under den egentlige geometri.

**3. Luk åbningerne.** `trim` skærer udhængende ender af, hvor to linjer krydser forbi hinanden. Hvor linjer kommer til kort, trækker du et endepunktsgreb hen på naboen — greb hægter sig fast, så enderne mødes rigtigt i stedet for næsten.

**4. Tjek målene.** `distance` måler mellem to punkter, `area` måler et lukket område ud fra klikkede punkter. Mål noget, hvis rigtige mål du kender. Afviger det med en faktor 25,4, ligger din fil i det forkerte enhedssystem.

**5. Adskil skæring, ridsning og gravering.** Læg hver handling på sit eget lag med et oplagt navn: `CUT`, `SCORE`, `ENGRAVE`. De fleste tjenester beder enten om dette eller om separate filer. `layer-manager` opretter og tildeler dem.

Eksportér så: **Export** → **DXF**. KulmanLab skriver almindelig AC1032-DXF, hvilket er præcis det, skæretjenester og maskinsoftware forventer.

## Skærefuge

Laseren fjerner materiale, mens den skærer — cirka 0,1 til 0,3 mm afhængigt af maskine, materiale og tykkelse. Skær et 50 mm-kvadrat, og du får et en anelse mindre kvadrat, og delen, der skulle presses ned i det, passer ikke.

To måder at håndtere det på:

**Lad tjenesten om det.** De fleste skæretjenester kompenserer selv for skærefugen, og gør de det, gør din egen kompensation delene forkerte den anden vej. Spørg, før du justerer noget.

**Gør det selv.** `offset` laver en parallel kopi af en form i en fast afstand — den halve skærefugebredde, udad for dele der skal holde målet, indad for huller. Det virker på linjer, cirkler, buer, ellipser og polylinjer. Det tager ét objekt ad gangen, så det er praktisk til en håndfuld kritiske mål, ikke til en plade med to hundrede dele.

Betyder tolerancen noget, så skær et prøvestykke, før du binder materiale op.

## Hvad der ikke overlever DXF-eksporten

Værd at vide, før du regner med det:

- **Tekst eksporteres ikke til DXF.** Havde du planlagt graveret tekst, er den ikke i filen. Konvertér teksten til konturer i et andet program, eller brug en tjeneste, der tager imod SVG til graveringslaget.
- **Skraveringer og mål eksporteres heller ikke.** Til en skærefil er det netop det, man vil have — men gå ikke ud fra, at et skraveret område bliver til en graveret flade, for det er slet ikke i filen.
- **Blokreferencer importeres ikke.** En tegning bygget af gentagne bloksymboler kommer ind ufuldstændig, så hold antallet af dele op mod originalen.

Splines *bliver* eksporteret. Nogle maskinprogrammer håndterer dem dårligt og foretrækker polylinjer — er dit sådan et, så tegn kurverne om som polylinjer eller buer.

## En advarsel om automatik

KulmanLab har **ingen forhåndskontrol**. Intet scanner for åbne konturer, dubletlinjer eller enhedsproblemer og melder dem. Tjekkene ovenfor er manuelle: zoom ind, mål, kig.

Det er fint til en håndfuld dele og trættende til en fuldt nestet plade. Producerer du plader jævnligt, er du bedre tjent med et værktøj med automatisk validering — og til enkeltdele, hvilket er hvad de fleste gør det meste af tiden, fanger et omhyggeligt kig de samme problemer.

## Før du sender

- Hver skærekontur lukket — hjørner tjekket ved høj forstørrelse
- Ét kendt mål målt og korrekt
- Ingen mål, noter, rammer eller hjælpegeometri tilbage
- Ingen dubletlinjer oven på hinanden
- Skæring, ridsning og gravering på separate, tydeligt navngivne lag
- Skærefuge: enten anvendt eller bevidst overladt til tjenesten
- Eksporteret som DXF og åbnet igen én gang for at bekræfte, at den ser rigtig ud

Det sidste punkt koster ti sekunder og fanger eksportoverraskelser før tjenesten.

---

*Relateret: [Import](/da/docs/commands/import/) for hvad KulmanLab læser fra en DXF, [Export Manager](/da/docs/commands/export-manager/) for præcis hvad hvert eksportformat rummer, [Offset](/da/docs/commands/offset/) til kompensation for skærefuge, og [LayerManager](/da/docs/commands/layer-manager/) til at sætte skære- og graveringslag op.*
