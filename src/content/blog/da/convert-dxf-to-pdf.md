---
title: "Sådan konverterer du DXF til PDF (i det rigtige mål)"
description: "Konvertér DXF til PDF gratis i browseren — også i et præcist målforhold som 1:50 på A3, hvilket konverteringssider ikke kan. Intet at installere, ingen konto."
keywords: [konvertere DXF til PDF, DXF til PDF gratis, DXF PDF online, DXF PDF målforhold, printe DXF i mål, DXF PDF konverter, CAD-tegning til PDF, DXF PDF A3, målforhold 1:50 PDF, DXF PDF uden AutoCAD]
date: 2026-09-03
author: KulmanLab
tag: Guide
---

For at konvertere en DXF til PDF åbner du den i en CAD-editor, der kører i browseren, og eksporterer: intet at installere, ingen konto, og filen bliver på din computer. Skal PDF'en kunne måles korrekt i print, har du brug for et papirlayout og et præcist målforhold — og netop det trin springer konverteringstjenesterne helt over.

Den forskel er hele pointen med denne guide. En almindelig filkonverter giver dig et billede af din tegning. En PDF i mål giver dig en tegning, man kan lægge en lineal på.

## Den hurtige vej: bare lave en PDF

Når du kun skal bruge noget læsbart at sende:

1. Gå til [app.kulmanlab.com](https://app.kulmanlab.com) og træk din `.dxf` ind på tegnefladen, eller brug knappen **Import** i filpanelet.
2. Klik på **Print**, eller skriv `printmanager`.
3. Sæt **Format** til **PDF**.
4. Klik på **Export**. Filen hentes.

Det var det. Forhåndsvisningen gengives ad samme kodevej og i samme opløsning som den eksporterede fil, så det du ser, er det du får — ikke en tilnærmelse.

Én ting er værd at vide: **PDF'en bevarer alt det, der står på skærmen** — mål, tekst, skraveringer, henvisninger — sat op præcis som tegnet. DXF-eksporten tager det hele med sig også, så valget mellem dem handler ikke om, hvad der overlever. Det handler om, hvad modtageren skal bruge: PDF, hvis den blot skal læses eller printes, DXF, hvis den skal redigeres.

## Den rigtige vej: konvertere i et præcist målforhold

Skal nogen måle eller bygge efter det her, er "kan være på siden" ikke nok. Målforhold 1:50 betyder, at 1 mm på papiret er 50 mm i virkeligheden, og det holder kun, hvis du sætter det bevidst.

1. **Skift til et papirlayout.** Klik på en layoutfane nederst; knappen **+** tilføjer et nyt. Layouts er papirrum; modelrummet har ingen side at måle op mod.
2. **Fastlæg arket.** Skriv `pagemanager`, eller højreklik på layoutfanen og vælg **Page Manager**. Vælg papirformat (A4, A3, A2, Letter…) og retning.
3. **Placér et vindue.** Skriv `viewportrectangle` og udpeg to modstående hjørner. Vinduet er en åbning ind til din model.
4. **Sæt målforholdet.** Med vinduet aktivt bruger du **målforholdsvælgeren** i kontrollinjen. Vælg et standardforhold, eller skriv dit eget — den tager forholdsform (`1:200`, `5:1`) eller et decimaltal (`0.005`), og så Enter.
5. **Eksportér.** Print Manager → PDF → Export.

PDF'en dimensioneres, så siden printer i sand fysisk målestok. Print den i 100 % — aldrig med "tilpas til side", som stille og roligt skalerer alt om og spolerer arbejdet — så passer målene på papiret.

Ændrer du bagefter papirstørrelse eller målforhold, skaleres eksisterende vinduer proportionalt med, så layoutet ikke falder fra hinanden.

## Valg af kvalitet

Rullelisten **Quality** bestemmer, hvilken DPI PDF'en gengives i:

| Quality | DPI | Til hvad |
|---|---|---|
| Draft | 72 | Hurtigt tjek, mindste fil |
| Normal | 150 | Standard — fint til A4-vedhæftninger |
| Presentation | 300 | Når den bliver nærlæst |
| Max | 600 | Store formater, fine detaljer |

Stregtykkelser skalerer med opløsningen, så en streg beholder samme *fysiske* tykkelse på papiret ved enhver indstilling — højere kvalitet giver en skarpere streg, ikke en tyndere. Undtagelsen er hårstregen (stregtykkelse `0`), som efter konvention bliver ved med at være én pixel bred på alle niveauer.

## Printstile

Rullelisten **Style** ændrer både blæk og side:

- **Monochrome** — helsort på hvidt, og standardvalget. Det er, hvad du vil have til alt, der skal på papir: farvede lag, der læses fint på skærmen, bliver til grumsede gråtoner på en laserprinter.
- **Default** — hvert objekt i sin egen farve, hvid side.
- **Blueprint** — hvide streger på dyb preussisk blå, i stil med en klassisk blåkopi. Til fremvisning, ikke til værkstedet.

## Kun at konvertere en del af tegningen

**Change Area** beskærer eksporten til et rektangel, du trækker op på tegnefladen. Den beskærer den faktisk eksporterede fil, ikke kun forhåndsvisningen, og virker både i et layout og i modelrum.

Hjørnerne hægter sig på greb og skæringer som ethvert andet punktvalg, så du kan beskære efter tegnet geometri i stedet for på øjemål — nyttigt når et ark bærer fire detaljer, og du kun vil have den tredje.

## Hvad det her ikke gør

Ærlige begrænsninger, før du regner med det:

- **PDF'en er et rasterbillede i en PDF-beholder, ikke vektor.** På A4 med kvalitet Normal ses det ikke. På A1, eller når nogen zoomer helt ind på en detalje, er en vektor-PDF fra et CAD-program til computeren skarpere. Skru Quality op til Presentation eller Max til store formater — vektor bliver den ikke af det.
- **Intet går til en fysisk printer.** Du får en fil; at printe den er printerens opgave.
- **Kun browsere på computer** — Chrome, Firefox, Safari, Edge. Der findes ingen mobilversion.
- **Kun 2D, DXF og ikke DWG.** Er din fil en `.dwg`, så bed afsenderen eksportere DXF.

## Hvornår noget andet er bedre

**En almindelig filkonverter** (CloudConvert, Zamzar og lignende) er fin, hvis du virkelig bare skal bruge et billede og er ligeglad med, i hvilken størrelse det printer. De er hurtige og klarer formater, ingen andre læser. De giver dig ikke 1:50 på A3.

**CAD til computeren** — LibreCAD, QCAD, eller AutoCAD hvis du har det — laver vektor-PDF'er og er det rigtige svar til storformattegninger, der skal printes ordentligt og granskes nøje.

**Det her** er til den brede midte: en DXF, du skal bruge i dag som en korrekt målsat PDF med påskrifter, uden at installere noget.

## Før du sender

- Målforhold sat bevidst i vinduet, ikke efterladt på det, der lige passede
- Papirformat svarer til det, modtageren rent faktisk printer på
- Quality hævet over Normal, hvis det skal på noget større end A4
- Stilen Monochrome, medmindre du bevidst vil have farve
- PDF'en åbnet én gang til kontrol, før du vedhæfter den
- Modtageren fortalt, at der skal printes i 100 %, ikke "tilpas til side"

Den sidste linje redder flere måltro tegninger end alt andet på listen.

---

*Relateret: [Print Manager](/da/docs/commands/print-manager/) for alle eksportindstillinger, [Page Manager](/da/docs/commands/page-manager/) for papirstørrelse og layoutmål, [ViewportRectangle](/da/docs/commands/viewport-rectangle/) til at placere og skalere vinduer, og [Import](/da/docs/commands/import/) for hvad KulmanLab læser fra en DXF.*
