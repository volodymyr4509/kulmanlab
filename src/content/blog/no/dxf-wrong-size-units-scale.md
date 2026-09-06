---
title: "Derfor åpnet DXF-en din i feil størrelse (og slik retter du det)"
description: "En DXF som åpner 25,4 ganger for liten eller 1000 ganger for stor er en enhetsforveksling, ikke en ødelagt fil. Slik finner du forholdet, skalerer om og kontrollerer."
keywords: [DXF feil skala, DXF feil størrelse, DXF enheter, DXF mm eller tommer, DXF importert for liten, DXF skalafaktor, DXF 25.4, rette DXF-skala, DXF enheter stemmer ikke, skalere DXF om]
date: 2026-09-04
author: KulmanLab
tag: Guide
---

En DXF åpnes, og delen som skal være 40 mm bred måler 1,575. Eller det kommer en planløsning på størrelse med et helt kvartal. Filen er ikke ødelagt, og ingen har gjort noe galt — tegningen stemmer, og det som ble borte på veien er tallet som fulgte med den.

Dette er verdt å forstå før du skalerer om noe som helst, for rettingen tar ti sekunder så snart du vet hvilket forhold du står overfor, og å gjette er måten å kappe feil mål to ganger.

## DXF bærer nesten ingen enheter

En DXF lagrer koordinater som nakne tall. En linje fra `0,0` til `40,0` er førti *noe* lang. Formatet fester ingen enhet til en koordinat, og det ville heller ikke finnes noe sted å gjøre det — tallet *er* geometrien.

Det nærmeste er en hodevariabel som heter `$INSUNITS`, én enkelt kode for hele filen: `1` for tommer, `4` for millimeter, `6` for meter, og så videre. To ting gjør den svakere enn den høres ut. Den er én verdi for en hel tegning, og kan derfor slett ikke beskrive en fil satt sammen av blandede kilder. Og den er veiledende, ikke bindende: mange programmer leser den bare når én tegning *settes inn* i en annen, og ser helt bort fra den når du rett og slett åpner filen — ut fra det rimelige premisset at den som åpner en tegning som regel vet hva vedkommende har tegnet.

Så "40" kommer fram uskadd, og "millimeter" gjør det ikke. Hver eneste DXF i feil størrelse du noen gang kommer til å få, er nøyaktig den setningen.

## Finn forholdet først

Mål ett trekk du faktisk kjenner den virkelige størrelsen på — en huldiameter, en platekant, en standardisert festeavstand. Del målet det burde være på målet det måler. Resultatet er nesten alltid ett av disse:

| Forhold | Hva som har skjedd |
|---|---|
| **25,4** | Tegnet i tommer, leses som millimeter |
| **0,03937** | Tegnet i millimeter, leses som tommer |
| **1000** | Tegnet i meter, leses som millimeter |
| **0,001** | Tegnet i millimeter, leses som meter |
| **12** | Fot lest som tommer |
| **304,8** | Fot lest som millimeter |

Står tallet ditt der, har du en enhetsforveksling og ingenting annet, og resten tar ett minutt.

Står det ikke der — 1,37 for eksempel, eller 3,2 — så stopp. Det er ikke et enhetsproblem, og å skalere om gir en tegning som er feil på en langt vanskeligere måte å oppdage. Hopp til siste avsnitt.

## Rettingen

Du trenger noe som måler og noe som skalerer. Ethvert CAD-verktøy klarer det; her er det i [KulmanLab](https://kulmanlab.com/no/), som åpner en DXF i en nettleserfane uten installasjon:

1. Åpne filen — dra den inn på siden, eller bruk [Import](/no/docs/commands/import/).
2. Kjør [Distance](/no/docs/commands/distance/) og velg de to endene av det kjente trekket ditt. Festet betyr noe her: ta de virkelige endepunktene, ikke et sted i nærheten, ellers baker du din egen feil inn i faktoren.
3. Del. Kjent mål ÷ målt mål. Et 40 mm hull som viser 1,575 gir 40 ÷ 1,575 ≈ **25,4**.
4. Merk alt, kjør [Scale](/no/docs/commands/scale/), velg et basispunkt og skriv inn faktoren.

Basispunktet står stille mens alt annet flytter seg, så legg det et sted du kan resonnere om — et hjørne på delen, eller origo. For en tegning som er på vei til skjæring, er origo som regel det fornuftige valget.

Det hjelper at KulmanLab ikke har noen egen enhetsinnstilling. Koordinater er bare tall, og det er nøyaktig den tilstanden du vil ha en tegning i mens du finner ut hva tallene betyr. Ingen omregning skjer bak ryggen din, og det er ingenting å kjempe mot.

## Kontroller rettingen før du stoler på den

Mål et *andre* trekk et annet sted i tegningen, som du også kjenner den virkelige størrelsen på. Og kontroller det så.

Dette er trinnet folk hopper over, og det eneste som fanger det stygge tilfellet. Hvis den andre målingen nå stemmer, var tegningen jevnt over i feil enheter og er nå jevnt over i riktige. Ferdig.

Er den andre målingen *fortsatt* feil, og feil med et annet beløp, var det aldri en enkel enhetsforveksling. Du har nettopp skalert en tegning som ikke henger sammen med seg selv, og det er verre enn der du startet, fordi feilen ikke lenger er et rent forhold noen kan oppdage.

[Area](/no/docs/commands/area/) er en nyttig andremening her, særlig på platematerialer. Areal skalerer med faktorens *kvadrat*, så en lengdefeil på 25,4 dukker opp som en arealfeil på 645 — et avvik det er vanskelig å prate seg bort fra.

## Slik unngår du det neste gang

Enheter blir borte mellom mennesker, så løsningen bor der også.

**Si enheten når du sender filen.** Én linje i meldingen. "Alle mål i mm." Det koster ingenting og fjerner hele problemet.

**Send et referansemål med.** Oppgi ett virkelig mål — "den ytre platen er 300 mm bred". Nå kan mottakeren verifisere filen i stedet for å anta, og gikk noe likevel galt, retter vedkommende det på ett minutt uten å komme tilbake til deg.

**Spør, når det er du som mottar.** Kommer det en fil uten oppgitte enheter og du står i ferd med å skjære materiale, er én melding billigere enn én ødelagt plate.

**Tegn i enhetene utdataene dine forventer.** Laserskjæring, CNC og de fleste produksjonsløp forventer millimeter. Skal filen dit, tegn i millimeter, så gjenstår ingen omregning som kan gå galt. Se [å forberede en DXF for laserskjæring](/no/blog/prepare-dxf-for-laser-cutting/).

## Når det ikke er et enhetsproblem

Var forholdet ditt ingen ren enhetsomregning, er de sannsynlige årsakene av et annet slag:

- **Tegningen blander skalaer.** Noen tegnet en del i 1:1 og limte inn en detalj i 1:5, eller en blokk ble satt inn med en skalafaktor og aldri rettet. Reparer geometrien som er gal, ikke hele filen.
- **Du målte geometri i papirrommet.** En tittelfelt eller notatramme tegnes i arkstørrelse, ikke modellstørrelse. Mål noe som hører til selve objektet.
- **Du målte feil ting.** Et nominelt 40 mm hull kan være tegnet til 39,8 av hensyn til passingen, og en "300 mm" plate kan være 300 til utsiden av en fals du ikke ser. Velg et trekk med en utvetydig kant.

I hvert av disse tilfellene er svaret å finne ut hva tegningen faktisk er, ikke å skalere den. En tegning der delene motsier hverandre, fortsetter å koste deg materiale til noen åpner den og ser etter.

---

*Relatert: [Distance](/no/docs/commands/distance/) for å måle, [Scale](/no/docs/commands/scale/) for rettingen, [Area](/no/docs/commands/area/) for andremeningen, og [Export Manager](/no/docs/commands/export-manager/) for hva hvert format tar med seg når du sender den tilbake.*
