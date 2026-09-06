---
title: "Derfor åbnede din DXF i den forkerte størrelse (og sådan retter du det)"
description: "En DXF, der åbner 25,4 gange for lille eller 1000 gange for stor, er en enhedsforveksling, ikke en ødelagt fil. Sådan finder du forholdet, skalerer om og kontrollerer."
keywords: [DXF forkert skala, DXF forkert størrelse, DXF enheder, DXF mm eller tommer, DXF importeret for lille, DXF skalafaktor, DXF 25.4, ret DXF-skala, DXF enheder passer ikke, skalér DXF om]
date: 2026-09-04
author: KulmanLab
tag: Guide
---

En DXF åbner, og den del, der skal være 40 mm bred, måler 1,575. Eller der ankommer en plantegning på størrelse med en hel karré. Filen er ikke ødelagt, og ingen har gjort noget forkert — tegningen er rigtig, og det, der blev væk undervejs, er tallet, der fulgte med den.

Det er værd at forstå, før du skalerer noget som helst om, for rettelsen tager ti sekunder, så snart du ved, hvilket forhold du står med, og at gætte er måden at save den forkerte størrelse to gange.

## DXF bærer knap nok enheder

En DXF gemmer koordinater som nøgne tal. En linje fra `0,0` til `40,0` er fyrre *et eller andet* lang. Formatet hæfter ingen enhed på en koordinat, og der ville heller ikke være nogen plads til det — tallet *er* geometrien.

Det nærmeste er en headervariabel ved navn `$INSUNITS`, én enkelt kode for hele filen: `1` for tommer, `4` for millimeter, `6` for meter og så videre. To ting gør den svagere, end den lyder. Det er én værdi for en hel tegning, så den kan slet ikke beskrive en fil, der er sat sammen af blandede kilder. Og den er vejledende, ikke bindende: mange programmer læser den kun, når én tegning *indsættes* i en anden, og ser helt bort fra den, når du blot åbner filen — ud fra den rimelige betragtning, at den, der åbner en tegning, som regel ved, hvad vedkommende har tegnet.

Så "40" rejser uskadt med, og "millimeter" gør ikke. Hver eneste DXF i forkert størrelse, du nogensinde vil modtage, er præcis den sætning.

## Find forholdet først

Mål ét træk, hvis rigtige mål du faktisk kender — en huldiameter, en pladekant, en standardiseret fastgørelsesafstand. Divider målet, det burde være, med det mål, det måler. Resultatet er næsten altid et af disse:

| Forhold | Hvad der er sket |
|---|---|
| **25,4** | Tegnet i tommer, læses som millimeter |
| **0,03937** | Tegnet i millimeter, læses som tommer |
| **1000** | Tegnet i meter, læses som millimeter |
| **0,001** | Tegnet i millimeter, læses som meter |
| **12** | Fod læst som tommer |
| **304,8** | Fod læst som millimeter |

Står dit tal der, har du en enhedsforveksling og intet andet, og resten tager et minut.

Står det ikke der — 1,37 for eksempel, eller 3,2 — så stop. Det er ikke et enhedsproblem, og at skalere om giver en tegning, der er forkert på en langt sværere måde at få øje på. Spring til sidste afsnit.

## Rettelsen

Du skal bruge noget, der måler, og noget, der skalerer. Ethvert CAD-værktøj kan det; her er det i [KulmanLab](https://kulmanlab.com/da/), som åbner en DXF i en browserfane uden installation:

1. Åbn filen — træk den ind på siden, eller brug [Import](/da/docs/commands/import/).
2. Kør [Distance](/da/docs/commands/distance/), og vælg de to ender af dit kendte træk. Fangst betyder noget her: tag de rigtige endepunkter, ikke et sted i nærheden, ellers bager du din egen fejl ind i faktoren.
3. Divider. Kendt mål ÷ målt mål. Et 40 mm hul, der viser 1,575, giver 40 ÷ 1,575 ≈ **25,4**.
4. Markér det hele, kør [Scale](/da/docs/commands/scale/), vælg et basispunkt, og tast faktoren.

Basispunktet står fast, mens alt andet flytter sig, så læg det et sted, du kan tænke over — et hjørne af emnet eller origo. Til en tegning, der er på vej til skæring, er origo som regel det fornuftige valg.

Det hjælper, at KulmanLab ikke har sin egen enhedsindstilling. Koordinater er bare tal, og det er præcis den tilstand, du vil have en tegning i, mens du regner ud, hvad dens tal betyder. Der foregår ingen omregning bag din ryg, og der er intet at kæmpe imod.

## Kontrollér rettelsen, før du stoler på den

Mål et *andet* træk et andet sted i tegningen, hvis rigtige mål du også kender. Og kontrollér det så.

Det er trinnet, folk springer over, og det eneste, der fanger det slemme tilfælde. Hvis den anden måling nu passer, var tegningen ensartet i de forkerte enheder og er nu ensartet i de rigtige. Færdig.

Er den anden måling *stadig* forkert, og forkert med et andet beløb, var det aldrig en simpel enhedsforveksling. Du har lige skaleret en tegning, der ikke hænger sammen med sig selv, hvilket er værre end der, hvor du startede, fordi fejlen ikke længere er et rent forhold, nogen kan få øje på.

[Area](/da/docs/commands/area/) er en nyttig second opinion her, især på pladematerialer. Areal skalerer med faktorens *kvadrat*, så en længdefejl på 25,4 dukker op som en arealfejl på 645 — en afvigelse, det er svært at snakke sig fra.

## Sådan undgår du det næste gang

Enheder bliver væk mellem mennesker, så løsningen bor også der.

**Sig enheden, når du sender filen.** Én linje i beskeden. "Alle mål i mm." Det koster ingenting og fjerner hele problemet.

**Send et referencemål med.** Oplys ét rigtigt mål — "den ydre plade er 300 mm bred". Nu kan modtageren verificere filen i stedet for at antage, og gik der alligevel noget galt, retter vedkommende det på et minut uden at vende tilbage til dig.

**Spørg, når det er dig, der modtager.** Kommer der en fil uden angivne enheder, og du står og skal skære materiale, er én besked billigere end én ødelagt plade.

**Tegn i de enheder, dit output forventer.** Laserskæring, CNC og de fleste fremstillingsforløb forventer millimeter. Skal filen derhen, så tegn i millimeter, og der er ingen omregning tilbage at gøre forkert. Se [at forberede en DXF til laserskæring](/da/blog/prepare-dxf-for-laser-cutting/).

## Når det ikke er et enhedsproblem

Var dit forhold ikke en ren enhedsomregning, er de sandsynlige årsager af en anden art:

- **Tegningen blander skalaer.** Nogen tegnede en del i 1:1 og indsatte en detalje i 1:5, eller en blok blev indsat med en skalafaktor og aldrig rettet. Reparer den geometri, der er gal, ikke hele filen.
- **Du målte geometri i papirrummet.** Et tegningshoved eller en noteramme tegnes i arkstørrelse, ikke modelstørrelse. Mål noget, der hører til selve objektet.
- **Du målte det forkerte.** Et nominelt 40 mm hul kan være tegnet til 39,8 af hensyn til pasningen, og et "300 mm" panel kan være 300 til ydersiden af en fals, du ikke kan se. Vælg et træk med en utvetydig kant.

I hvert af de tilfælde er svaret at finde ud af, hvad tegningen faktisk er, ikke at skalere den. En tegning, hvis dele modsiger hinanden, bliver ved med at koste dig materiale, indtil nogen åbner den og kigger.

---

*Relateret: [Distance](/da/docs/commands/distance/) til at måle, [Scale](/da/docs/commands/scale/) til rettelsen, [Area](/da/docs/commands/area/) til second opinion, og [Export Manager](/da/docs/commands/export-manager/) til hvad hvert format tager med, når du sender den tilbage.*
