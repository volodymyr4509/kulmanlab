---
title: "Slik konverterer du DXF til PDF (i riktig målestokk)"
description: "Konverter DXF til PDF gratis i nettleseren — også i eksakt målestokk som 1:50 på A3, noe konverteringssider ikke får til. Ingenting å installere, ingen konto."
keywords: [konvertere DXF til PDF, DXF til PDF gratis, DXF PDF på nett, DXF PDF målestokk, skrive ut DXF i målestokk, DXF PDF konverterer, CAD-tegning til PDF, DXF PDF A3, målestokk 1:50 PDF, DXF PDF uten AutoCAD]
date: 2026-09-03
author: KulmanLab
tag: Guide
---

For å konvertere en DXF til PDF åpner du den i en CAD-editor som kjører i nettleseren og eksporterer: ingenting å installere, ingen konto, og filen blir liggende på maskinen din. Skal PDF-en kunne måles riktig på papir, trenger du et papiroppsett og en eksakt målestokk — og det er nettopp det steget konverteringstjenestene hopper helt over.

Den forskjellen er hele poenget med denne guiden. En vanlig filkonverterer gir deg et bilde av tegningen din. En PDF i målestokk gir deg en tegning noen kan legge en linjal på.

## Den raske veien: bare lage en PDF

Når du bare trenger noe lesbart å sende:

1. Gå til [app.kulmanlab.com](https://app.kulmanlab.com) og dra `.dxf`-filen inn på tegneflaten, eller bruk **Import**-knappen i filpanelet.
2. Klikk på **Print**, eller skriv `printmanager`.
3. Sett **Format** til **PDF**.
4. Klikk på **Export**. Filen lastes ned.

Det var det. Forhåndsvisningen tegnes gjennom nøyaktig samme kodevei og i samme oppløsning som den eksporterte filen, så det du ser er det du får, ikke en tilnærming.

Én ting er verdt å vite: i motsetning til DXF-eksport **beholder PDF-en alt som står på skjermen** — mål, tekst, skravering, henvisninger. Er tegningen påført tekst, er PDF formatet som tar den med seg.

## Den riktige veien: konvertere i eksakt målestokk

Skal noen måle eller bygge etter dette, holder det ikke at «det får plass på siden». Målestokk 1:50 betyr at 1 mm på papiret er 50 mm i virkeligheten, og det stemmer bare hvis du setter det bevisst.

1. **Bytt til et papiroppsett.** Klikk på en oppsettfane nederst; **+**-knappen legger til et nytt. Oppsett er papirrom; modellrommet har ingen side å skalere mot.
2. **Bestem arket.** Skriv `pagemanager`, eller høyreklikk oppsettfanen og velg **Page Manager**. Velg papirformat (A4, A3, A2, Letter…) og retning.
3. **Plasser et vindu.** Skriv `viewportrectangle` og pek ut to motstående hjørner. Vinduet er en åpning inn mot modellen din.
4. **Sett målestokken.** Med vinduet aktivt bruker du **målestokkvelgeren** i kontrollinjen. Velg et standardforhold eller skriv ditt eget — den tar forholdsform (`1:200`, `5:1`) eller et desimaltall (`0.005`), så Enter.
5. **Eksporter.** Print Manager → PDF → Export.

PDF-en dimensjoneres slik at siden skrives ut i sann fysisk målestokk. Skriv den ut i 100 % — aldri med «tilpass til side», som stille skalerer om alt og gjør arbeidet verdiløst — så stemmer målene på papiret.

Endrer du senere papirstørrelse eller målestokk, skaleres eksisterende vinduer proporsjonalt, så oppsettet ikke faller fra hverandre.

## Å velge kvalitet

Nedtrekkslisten **Quality** bestemmer hvilken DPI PDF-en tegnes i:

| Quality | DPI | Til hva |
|---|---|---|
| Draft | 72 | Rask sjekk, minste fil |
| Normal | 150 | Standard — holder til A4-vedlegg |
| Presentation | 300 | Når den granskes på nært hold |
| Max | 600 | Store formater, fine detaljer |

Strektykkelser skaleres med oppløsningen, så en strek beholder samme *fysiske* tykkelse på papiret ved enhver innstilling — høyere kvalitet gir en skarpere strek, ikke en tynnere. Unntaket er hårstreken (strektykkelse `0`), som etter konvensjon forblir én piksel bred på alle nivåer.

## Utskriftsstiler

Nedtrekkslisten **Style** endrer både blekk og side:

- **Monochrome** — helsvart på hvitt, og standardvalget. Dette er hva du vil ha til alt som skal på papir: fargede lag som leses godt på skjerm, blir til grumsete gråtoner på en laserskriver.
- **Default** — hvert objekt i sin egen farge, hvit side.
- **Blueprint** — hvite streker på dyp preussisk blå, i stil med en klassisk blåkopi. Til presentasjon, ikke til verkstedet.

## Konvertere bare en del av tegningen

**Change Area** beskjærer eksporten til et rektangel du drar opp på tegneflaten. Den beskjærer den faktisk eksporterte filen, ikke bare forhåndsvisningen, og virker både i et oppsett og i modellrom.

Hjørnene fester seg til håndtak og skjæringspunkter som ethvert annet punktvalg, så du kan beskjære etter tegnet geometri i stedet for på øyemål — nyttig når ett ark bærer fire detaljer og du bare vil ha den tredje.

## Hva dette ikke gjør

Ærlige begrensninger, før du stoler på det:

- **PDF-en er et rasterbilde i en PDF-beholder, ikke vektor.** På A4 med kvalitet Normal synes det ikke. På A1, eller når noen zoomer godt inn på en detalj, blir en vektor-PDF fra et CAD-program for skrivebordet skarpere. Skru Quality opp til Presentation eller Max for store formater — vektor blir den likevel ikke.
- **Ingenting går til en fysisk skriver.** Du får en fil; å skrive den ut er skriverens jobb.
- **Bare nettlesere på skrivebordet** — Chrome, Firefox, Safari, Edge. Det finnes ingen mobilversjon.
- **Bare 2D, DXF og ikke DWG.** Er filen din en `.dwg`, be avsenderen eksportere DXF.

## Når noe annet passer bedre

**En vanlig filkonverterer** (CloudConvert, Zamzar og liknende) holder hvis du faktisk bare trenger et bilde og ikke bryr deg om hvilken størrelse det skrives ut i. De er raske og håndterer formater ingen andre leser. De gir deg ikke 1:50 på A3.

**CAD for skrivebordet** — LibreCAD, QCAD, eller AutoCAD om du har det — lager vektor-PDF-er og er det riktige svaret for storformats tekniske tegninger som skal skrives ut ordentlig og granskes nøye.

**Dette** er for den brede midten: en DXF du trenger i dag som en riktig skalert PDF med påskrifter, uten å installere noe som helst.

## Før du sender

- Målestokken satt bevisst i vinduet, ikke latt stå på det som tilfeldigvis passet
- Papirformatet samsvarer med det mottakeren faktisk skriver ut på
- Quality hevet over Normal hvis det skal på noe større enn A4
- Stilen Monochrome, med mindre du bevisst vil ha farge
- PDF-en åpnet én gang for kontroll før du legger den ved
- Mottakeren fortalt at den skal skrives ut i 100 %, ikke «tilpass til side»

Den siste linjen redder flere målestokktegninger enn alt annet på denne listen.

---

*Relatert: [Print Manager](/no/docs/commands/print-manager/) for alle eksportinnstillinger, [Page Manager](/no/docs/commands/page-manager/) for papirstørrelse og oppsettmålestokk, [ViewportRectangle](/no/docs/commands/viewport-rectangle/) for å plassere og skalere vinduer, og [Import](/no/docs/commands/import/) for hva KulmanLab leser fra en DXF.*
