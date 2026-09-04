---
title: "DXF versus DWG: wat is het verschil?"
description: "DWG is het eigen formaat van AutoCAD, DXF het open uitwisselingsformaat. Wat er werkelijk verschilt, welk je nodig hebt, en hoe je een DXF krijgt na een DWG."
keywords: [DXF versus DWG, verschil DXF DWG, DWG of DXF, wat is DWG, wat is DXF, DWG naar DXF, CAD bestandsformaten, DWG bestand openen, DXF formaat, welk CAD formaat]
date: 2026-09-02
author: KulmanLab
tag: Handleiding
---

DWG is het eigen bestandsformaat van AutoCAD: binair, gesloten en niet gedocumenteerd door Autodesk. DXF is het uitwisselingsformaat dat Autodesk wél publiceert, zodat andere programma's dezelfde tekeningen kunnen lezen. Dezelfde geometrie, een andere verpakking — en maar één van de twee is bedoeld om bestanden te geven aan mensen buiten je eigen software.

Dat laatste punt is het hele praktische verschil, en het bepaalt waar je om zou moeten vragen.

## Kort samengevat

| | DXF | DWG |
|---|---|---|
| Staat voor | Drawing Exchange Format | Drawing |
| Gepubliceerde specificatie | Ja, door Autodesk | Nee |
| Codering | Tekst (er is ook een binaire variant) | Binair |
| Doel | Tekeningen tussen programma's verplaatsen | Het eigen werkformaat van AutoCAD |
| Bestandsgrootte | Groter | Kleiner |
| Gelezen door andere software | Zeer breed | Wisselend, via nagebouwde bibliotheken |
| Draagt alles wat AutoCAD kan | Nee — een gedocumenteerde deelverzameling | Ja |

## Waarom er twee formaten bestaan

Autodesk bracht AutoCAD in 1982 uit met DWG als werkformaat. Het is gebouwd voor het gemak van één programma: compact, binair, en vrij om te veranderen wanneer AutoCAD dat nodig heeft.

Daarmee is het een slecht ding om iemand toe te sturen. Dus publiceerde Autodesk daarnaast DXF: dezelfde tekening, uitgeschreven in een gedocumenteerde, leesbare vorm waartegen elke ontwikkelaar kan bouwen. Open een `.dxf` in een teksteditor en je ziet groepscodes en sectienamen in gewone ASCII.

De twee worden samen geversioneerd. Elke AutoCAD-release brengt een DWG-revisie en een bijbehorende DXF-revisie; de aanduiding `AC1032` die je soms in een bestandskop ziet, staat bijvoorbeeld voor de generatie AutoCAD 2018.

DXF is dus niet het oudere of mindere formaat. Het is dezelfde tekening, opzettelijk leesbaar gemaakt.

## Wat er in de praktijk werkelijk verschilt

**Openheid.** Autodesk documenteert DXF en documenteert DWG niet. Programma's die DWG lezen — en dat zijn er veel — leunen op bibliotheken die zijn ontstaan door het formaat na te bouwen. Dat werkt goed en is volstrekt legitiem, maar het betekent dat DWG-ondersteuning achterloopt op nieuwe versies en per applicatie verschilt, terwijl DXF-ondersteuning door iedereen rechtstreeks uit de specificatie te bouwen is.

**Grootte.** Een binaire DWG is doorgaans veel kleiner dan dezelfde tekening als ASCII-DXF. Bij een groot project telt dat; bij één onderdeel niet.

**Getrouwheid.** DWG bevat alles wat AutoCAD kan uitdrukken, inclusief objecttypen waar andere programma's geen begrip van hebben. DXF dekt een gedocumenteerde deelverzameling. Voor gewoon 2D-tekenwerk — lijnen, bogen, cirkels, polylijnen, tekst, maatvoering, lagen — is die deelverzameling alles wat je nodig hebt. Bij een model dat leunt op eigen AutoCAD-objecten gaat bij export naar DXF een deel verloren.

**Breedte van ondersteuning.** Vrijwel elk CAD-, CAM- en vectorprogramma leest DXF. Minder lezen DWG, en die het doen ondersteunen het vaak minder volledig.

## Welke heb je echt nodig?

**Iemand stuurde je een bestand en je krijgt het niet open.** Controleer eerst de werkelijke extensie. De meeste mensen zeggen "DWG" voor allebei, en in de helft van de gevallen ligt er in je downloads een `.dxf` die je al kon openen. Zie [een DXF openen zonder AutoCAD](/nl/blog/open-dxf-file-without-autocad/).

**Je stuurt het naar een lasersnijder, CNC-werkplaats of fabrikant.** DXF, vrijwel altijd. Machinesoftware en snijdiensten zijn eromheen gebouwd, en 2D-snijgeometrie past ruimschoots in de gedocumenteerde deelverzameling. Zie [een DXF voorbereiden voor lasersnijden](/nl/blog/prepare-dxf-for-laser-cutting/).

**Je stuurt het naar een architect of ingenieur die in AutoCAD werkt.** Vraag het. Velen prefereren DWG omdat hun werkwijze dat verwacht, en anders openen ze een DXF prima.

**Je archiveert iets voor de lange termijn.** DXF. Een gedocumenteerd tekstformaat is over twintig jaar nog leesbaar voor iemand met de specificatie en een teksteditor. Dat argument is precies waarom uitwisselingsformaten bestaan.

**Iemand wil er alleen naar kijken.** Geen van beide — stuur een PDF. Zie [een DXF naar PDF omzetten](/nl/blog/convert-dxf-to-pdf/).

## Aan een DXF komen als je een DWG hebt gekregen

De betrouwbare route is vragen. Degene die het bestand stuurde opent het in zijn eigen CAD-programma en doet *Opslaan als* of *Exporteren* → DXF. Het kost een seconde of tien, elke desktop-CAD-applicatie kan het, en het bestand komt uit de software die het gemaakt heeft in plaats van uit de gok van een derde partij erover.

Is vragen geen optie, dan bestaan er converters. Twee dingen om af te wegen: bij conversie gaat de getrouwheid verloren, en je uploadt andermans tekening naar een dienst die je niet in de hand hebt. Voor een hobbyproject prima. Voor werk voor een klant: vraag het.

Als je erom vraagt, is het nuttig een versie te noemen. **DXF R12 is het veiligst** — stokoud, overal ondersteund, en bij vlakke 2D-geometrie gaat er niets van belang verloren. Vooral oudere machinesoftware kan er veel beter mee overweg.

## Twee dingen die mensen verkeerd hebben

**"DXF is lossy."** Alleen in de zin dat het geen eigen AutoCAD-objecttypen meeneemt. Lijnen, bogen, cirkels, polylijnen, tekst, maatvoering en lagen komen ongeschonden door. Bij 2D-tekenwerk is het verlies meestal nul.

**"DXF is het oude formaat."** Het wordt sinds 1982 naast DWG geversioneerd en dat gebeurt nog steeds. De verwarring komt doordat R12 zo breed als compatibiliteitsdoel wordt gebruikt dat men aanneemt dat DXF daar gestopt is.

## Waar dit gereedschap staat

[KulmanLab](https://kulmanlab.com/nl/) leest **DXF, geen DWG**, en het is de moeite waard te zeggen waarom in plaats van het als een omissie te behandelen: DXF is gedocumenteerd, dus een implementatie kan kloppen door de specificatie te lezen. DWG zou betekenen dat je in een browser afhankelijk bent van een nagebouwde bibliotheek, voor een formaat dat verandert op Autodesks schema.

Heb je een `.dwg`, dan opent dit hem niet. Heb je een `.dxf`, dan open je hem in een browsertabblad zonder iets te installeren: [app.kulmanlab.com](https://app.kulmanlab.com).

Wat het terugschrijft is de hele tekening — lijnen, cirkels, bogen, ellipsen, polylijnen, splines, tekst met opmaak, maatvoering, leaders en arceringen, samen met lagen en lijntypen. Een bestand dat hier wordt geopend en opnieuw geëxporteerd, vertrekt met zijn annotaties en niet teruggebracht tot kale geometrie.

---

*Gerelateerd: [Import](/nl/docs/commands/import/) voor wat KulmanLab precies uit een DXF leest, en [Export Manager](/nl/docs/commands/export-manager/) voor wat elk exportformaat meeneemt.*
