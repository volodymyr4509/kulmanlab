---
title: "Waarom je DXF op het verkeerde formaat opende (en hoe je dat oplost)"
description: "Een DXF die 25,4 keer te klein of 1000 keer te groot opent, is een eenhedenmismatch, geen kapot bestand. Herken de verhouding, schaal opnieuw en controleer het."
keywords: [DXF verkeerde schaal, DXF verkeerd formaat, DXF eenheden, DXF mm of inch, DXF te klein geïmporteerd, DXF schaalfactor, DXF 25.4, DXF schaal corrigeren, DXF eenheden kloppen niet, DXF herschalen]
date: 2026-09-04
author: KulmanLab
tag: Gids
---

Een DXF opent en het onderdeel dat 40 mm breed hoort te zijn, meet 1,575. Of er komt een plattegrond binnen ter grootte van een heel huizenblok. Het bestand is niet stuk en niemand heeft iets fout gedaan — de tekening klopt, en wat onderweg verloren ging is het getal dat erbij hoorde.

Dat is de moeite van het begrijpen waard vóór je iets herschaalt, want de correctie kost tien seconden zodra je weet met welke verhouding je te maken hebt, en gokken is hoe je twee keer het verkeerde formaat zaagt.

## DXF draagt nauwelijks eenheden

Een DXF slaat coördinaten op als kale getallen. Een lijn van `0,0` naar `40,0` is veertig *iets* lang. Het formaat hangt geen eenheid aan een coördinaat, en er zou ook nergens plaats voor zijn — het getal *is* de geometrie.

Het dichtstbijzijnde is een headervariabele met de naam `$INSUNITS`, één code voor het hele bestand: `1` voor inches, `4` voor millimeters, `6` voor meters, enzovoort. Twee dingen maken haar zwakker dan ze klinkt. Het is één waarde voor een hele tekening, dus ze kan een bestand dat uit gemengde bronnen is samengesteld helemaal niet beschrijven. En ze is adviserend, geen belofte: veel toepassingen lezen haar alleen bij het *invoegen* van de ene tekening in de andere en negeren haar wanneer je het bestand gewoon opent, op de redelijke grond dat wie een tekening opent meestal weet wat hij getekend heeft.

Dus "40" reist ongeschonden mee en "millimeter" niet. Elke DXF met het verkeerde formaat die je ooit zult ontvangen, is precies die zin.

## Bepaal eerst de verhouding

Meet één element waarvan je de echte maat werkelijk kent: een gatdiameter, een plaatrand, een genormeerde hart-op-hart-afstand. Deel de maat die het zou moeten zijn door de maat die je meet. De uitkomst is bijna altijd een van deze:

| Verhouding | Wat er gebeurd is |
|---|---|
| **25,4** | In inches getekend, als millimeters gelezen |
| **0,03937** | In millimeters getekend, als inches gelezen |
| **1000** | In meters getekend, als millimeters gelezen |
| **0,001** | In millimeters getekend, als meters gelezen |
| **12** | Voet gelezen als inches |
| **304,8** | Voet gelezen als millimeters |

Staat jouw getal daarbij, dan heb je een eenhedenmismatch en niets anders, en de rest kost een minuut.

Staat het er niet bij — 1,37 bijvoorbeeld, of 3,2 — stop dan. Dat is geen eenhedenprobleem, en herschalen levert een tekening op die op een veel lastiger te ontdekken manier fout is. Ga door naar de laatste paragraaf.

## De oplossing

Je hebt iets nodig dat meet en iets dat schaalt. Elk CAD-programma kan dat; hier staat het in [KulmanLab](https://kulmanlab.com/nl/), dat een DXF opent in een browsertabblad zonder installatie:

1. Open het bestand — sleep het op de pagina, of gebruik [Import](/nl/docs/commands/import/).
2. Start [Distance](/nl/docs/commands/distance/) en klik de twee uiteinden van je bekende element aan. Vangen is hier belangrijk: pak de echte eindpunten, niet iets in de buurt, anders bak je je eigen fout in de factor.
3. Deel. Bekende maat ÷ gemeten maat. Een gat van 40 mm dat 1,575 aangeeft geeft 40 ÷ 1,575 ≈ **25,4**.
4. Selecteer alles, start [Scale](/nl/docs/commands/scale/), kies een basispunt en typ de factor.

Het basispunt blijft vast terwijl al het andere beweegt, dus leg het ergens waar je erover kunt nadenken: een hoek van het onderdeel, of de oorsprong. Voor een tekening die zo naar de snijder gaat, is de oorsprong meestal de verstandige keuze.

Het helpt dat KulmanLab geen eigen eenhedeninstelling heeft. Coördinaten zijn gewoon getallen, en dat is precies de toestand waarin je een tekening wilt hebben terwijl je uitzoekt wat haar getallen betekenen. Er gebeurt geen omrekening achter je rug en er is niets om tegen te vechten.

## Controleer de correctie voordat je erop vertrouwt

Meet een *tweede* element, ergens anders in de tekening, waarvan je de echte maat ook kent. En controleer die dan.

Dit is de stap die mensen overslaan, en de enige die het nare geval vangt. Klopt de tweede meting nu, dan stond de tekening uniform in de verkeerde eenheden en staat ze nu uniform in de goede. Klaar.

Is de tweede meting *nog steeds* fout, en fout met een ander bedrag, dan was het nooit een eenvoudige eenhedenmismatch. Je hebt zojuist een inconsistente tekening geschaald, wat erger is dan waar je begon, omdat de fout geen nette verhouding meer is die iemand kan opmerken.

[Area](/nl/docs/commands/area/) is hier een nuttige tweede mening, zeker bij plaatmateriaal. Oppervlak schaalt met het *kwadraat* van de factor, dus een lengtefout van 25,4 verschijnt als een oppervlaktefout van 645 — een verschil dat je moeilijk kunt wegredeneren.

## Voorkomen dat het weer gebeurt

Eenheden gaan tussen mensen verloren, dus daar zit de oplossing ook.

**Noem de eenheid als je het bestand stuurt.** Eén regel in het bericht. "Alle maten in mm." Het kost niets en haalt het hele probleem weg.

**Stuur er een referentiemaat bij.** Geef één echte maat door — "de buitenplaat is 300 mm breed". Nu kan de ontvanger het bestand verifiëren in plaats van aannemen, en als er tóch iets misging lost hij het in een minuut op zonder bij jou terug te komen.

**Vraag het, als jij de ontvanger bent.** Komt er een bestand binnen zonder vermelde eenheden en ga je er materiaal mee zagen, dan is één bericht goedkoper dan één verpeste plaat.

**Teken in de eenheden die je uitvoer verwacht.** Lasersnijden, CNC en de meeste fabricageprocessen verwachten millimeters. Gaat het bestand daarheen, teken dan in millimeters en er blijft geen omrekening over om fout te doen. Zie [een DXF voorbereiden voor lasersnijden](/nl/blog/prepare-dxf-for-laser-cutting/).

## Als het geen eenhedenprobleem is

Was jouw verhouding geen nette eenhedenomrekening, dan zijn de waarschijnlijke oorzaken van een andere aard:

- **De tekening mengt schalen.** Iemand tekende een deel op 1:1 en plakte er een detail op 1:5 in, of een blok werd met een schaalfactor ingevoegd en nooit gecorrigeerd. Repareer de betreffende geometrie, niet het hele bestand.
- **Je hebt papierruimte-geometrie gemeten.** Een titelblok of annotatiekader wordt op bladgrootte getekend, niet op modelgrootte. Meet iets dat bij het werkelijke object hoort.
- **Je hebt het verkeerde gemeten.** Een nominaal gat van 40 mm kan voor de passing op 39,8 getekend zijn, en een paneel van "300 mm" kan 300 meten tot de buitenkant van een sponning die je niet ziet. Kies een element met een ondubbelzinnige rand.

In al die gevallen is het antwoord uitzoeken wat de tekening werkelijk is, niet haar schalen. Een tekening waarvan de delen elkaar tegenspreken blijft je materiaal kosten tot iemand haar opent en kijkt.

---

*Gerelateerd: [Distance](/nl/docs/commands/distance/) om te meten, [Scale](/nl/docs/commands/scale/) voor de correctie, [Area](/nl/docs/commands/area/) voor de tweede mening en [Export Manager](/nl/docs/commands/export-manager/) voor wat elk formaat meeneemt als je het terugstuurt.*
