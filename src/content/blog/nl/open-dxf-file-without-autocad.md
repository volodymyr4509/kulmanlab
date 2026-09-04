---
title: "Een DXF-bestand openen zonder AutoCAD"
description: "Je hebt een .dxf-bestand gekregen maar geen AutoCAD? Open het gratis in je browser, zonder installatie — plus desktopalternatieven en hulp bij lege tekeningen."
keywords: [DXF bestand openen, DXF openen zonder AutoCAD, gratis DXF viewer, DXF online bekijken, DXF openen in browser, DXF lezer gratis, hoe open ik een DXF, DXF bestand bekijken, DXF of DWG, DXF openen op Mac]
date: 2026-08-31
author: KulmanLab
tag: Handleiding
---

Om een DXF-bestand zonder AutoCAD te openen, sleep je het in een CAD-editor die in de browser draait — niets te installeren en geen account nodig. Gratis desktopprogramma's als LibreCAD en QCAD openen DXF ook. Deze handleiding behandelt beide routes, en wat je doet als de tekening leeg, piepklein of zonder tekst opent.

Wij maken een van de onderstaande tools — [KulmanLab](https://kulmanlab.com/nl/) — dus beschouw dat onderdeel als het bevooroordeelde, en de daar genoemde beperkingen als het deel waarin we eerlijk moesten zijn.

## Wat een DXF-bestand eigenlijk is

DXF staat voor *Drawing Exchange Format* (tekeninguitwisselingsformaat). Autodesk bedacht het zodat CAD-programma's tekeningen aan elkaar konden doorgeven, en het is bewust open en tekstgebaseerd — je kunt een `.dxf` letterlijk in een teksteditor openen en lezen.

Die openheid is de reden dat je keuze hebt. DXF zit niet vast aan één programma, en tientallen tools kunnen het lezen.

Het is ook de reden dat een DXF geen plaatje is. Het bevat geometrie — lijnen, bogen, cirkels, lagen, maatvoering — geen pixels. Hernoemen naar `.jpg` zorgt er niet voor dat het in een fotoviewer opengaat.

## Optie 1: open het in je browser

De snelste route, want er valt niets te downloaden en je hoeft je nergens aan te melden.

1. Ga naar [app.kulmanlab.com](https://app.kulmanlab.com).
2. Sleep je `.dxf`-bestand rechtstreeks op het tekenvlak — of gebruik de knop **Import** (mappictogram) in het bestandspaneel.
3. De tekening laadt en het beeld wordt automatisch op de tekening ingepast.

Je bestand verlaat je computer nooit. KulmanLab draait volledig in de browser, dus de tekening wordt lokaal ingelezen in plaats van naar een server geüpload.

Vanaf daar kun je pannen en zoomen, lagen aan- en uitzetten, afstanden en hoeken meten, de geometrie bewerken en exporteren naar PDF, PNG, JPEG of WebP als je alleen iets afdrukbaars nodig hebt om door te sturen.

**Wat het uit een DXF leest:** lijnen, cirkels, bogen, ellipsen, polylijnen, splines, tekst, maatvoering, multileaders en arceringen, plus de lagen- en lijntypetabellen van het bestand.

**Wat het terugschrijft:** dezelfde lijst. Bewerk een tekening en exporteer haar, en de geometrie, de tekst met opmaak, de maatvoering, de leaders en de arceringen gaan allemaal terug de DXF in, met de lagen- en lijntypetabellen intact — het bestand maakt de heen- en terugreis dus zonder zijn annotatie te verliezen.

**Waar het tekortschiet — lees dit voordat je erop vertrouwt:**

- **Alleen 2D.** Een DXF met 3D-solids of meshes is het verkeerde bestand voor deze tool.
- **Geen blocks.** Blockverwijzingen (`INSERT`) worden niet verwerkt, dus een tekening die uit herhaalde blocksymbolen is opgebouwd komt onvolledig binnen.
- **DXF, geen DWG.** Zie het DWG-onderdeel hieronder.
- **Alleen desktopbrowsers** — Chrome, Firefox, Safari en Edge. Er is geen mobiele versie.

Als een van die punten voor jou doorslaggevend is, ben je beter af met een van de desktoptools hieronder.

## Optie 2: gratis desktopprogramma's

De installatie is de moeite waard als je dit regelmatig gaat doen, of als je bestand functies gebruikt die een browsertool niet aankan.

**LibreCAD** — gratis en opensource, uitsluitend 2D, draait op Windows, macOS en Linux. Het dichtst bij klassiek 2D-tekenwerk, en een degelijke DXF-editor.

**QCAD** — de engine waaruit LibreCAD is voortgekomen. Een gratis community-editie plus een betaalde Pro-versie met extra functies.

**FreeCAD** — gratis en opensource, gericht op parametrisch 3D-modelleren maar in staat DXF te importeren. Overdreven als je alleen een 2D-tekening wilt bekijken, en met een steile leercurve.

**Autodesk Viewer** — Autodesks eigen gratis webviewer. Alleen bekijken, en je moet inloggen met een Autodesk-account.

**Inkscape** — geen CAD, maar het importeert DXF en is een redelijke keuze als je alleen de vormen wilt zien of ze naar SVG wilt omzetten.

## "Het is eigenlijk een DWG, hè?"

Heel vaak wel. DXF en DWG zijn allebei Autodesk-formaten en de namen worden door elkaar gebruikt, maar het is niet hetzelfde:

| | DXF | DWG |
|---|---|---|
| Formaat | Open, tekstgebaseerd | Gesloten, binair |
| Doel | Uitwisseling tussen programma's | Eigen formaat van AutoCAD |
| Ondersteuning elders | Breed | Beperkt en vaak onvolkomen |

Controleer de werkelijke bestandsextensie voordat je op zoek gaat naar een viewer. Is het `.dwg`, dan helpen bovenstaande tools je meestal niet — ook KulmanLab niet, dat uitsluitend DXF ondersteunt.

De betrouwbare oplossing is alsnog een DXF krijgen: degene die het bestand stuurde kan het in zijn eigen CAD-programma openen en exporteren of *Opslaan als* DXF. Vrijwel elke desktop-CAD-applicatie kan dat, en het kost zo'n tien seconden. DWG zelf omzetten met een converter van derden kan wel, maar gaat met meer verlies gepaard — en je vertrouwt andermans tekening toe aan een onbekende tool.

## Als de tekening opent maar er verkeerd uitziet

**Het tekenvlak is leeg.** Meestal ligt de geometrie ver van de oorsprong, dus het beeld kijkt naar lege ruimte. Gebruik een *inpassen*- of *zoom grenzen*-commando om naar de tekening te springen. Kijk ook of er lagen uitstaan — een tekening kan binnenkomen met de meeste lagen bevroren.

**Alles is microscopisch, of absurd groot.** DXF legt zijn eenheden niet betrouwbaar vast. Dezelfde tekening kan in millimeters, centimeters, inches of voeten zijn gemaakt, en vaak vermeldt het bestand niet welke. Meet iets waarvan je de echte maat kent en schaal van daaruit.

**De tekst ontbreekt of is vervangen.** Lettertypen worden niet in een DXF ingesloten. Gebruikt de tekening een lettertype dat jouw machine niet heeft, dan valt de tekst terug op een ander of verdwijnt hij. Het originele lettertype laden lost het op.

**Delen van de tekening zijn niet meegekomen.** Iets in het bestand gebruikt een entiteitstype dat jouw tool niet leest — vaak blocks, 3D-solids of eigen uitbreidingen die het producerende programma heeft weggeschreven. Probeer een tweede tool voordat je concludeert dat het bestand stuk is.

**Er opent helemaal niets.** Bevestig dat het echt een DXF is: open het in een gewone teksteditor. Een echte DXF begint met leesbare ASCII-groepscodes en sectienamen als `SECTION` en `HEADER`. Zie je binaire ruis, dan is het een DWG of een binaire DXF-variant.

## Wat je moet kiezen

**Alleen even bekijken, eenmalig?** Open het in de browser. Een CAD-pakket installeren om één toegestuurd bestand te lezen is geen goede ruil.

**Meten, aantekenen of afdrukken?** Browsertools kunnen dat prima, en afdrukken naar PDF op ware schaal is meestal precies wat mensen willen.

**Echt tekenwerk, herhaaldelijk?** Installeer LibreCAD of QCAD. Toegewijde desktopsoftware bewijst op termijn betere diensten.

**Heb je een DWG?** Vraag de afzender om een DXF. Dat is sneller en veiliger dan welke conversieroute ook.

---

*Gerelateerd: [Import](/nl/docs/commands/import/) voor de volledige lijst van wat KulmanLab uit een DXF leest, [Export Manager](/nl/docs/commands/export-manager/) voor wat elk exportformaat meeneemt, en [Print Manager](/nl/docs/commands/print-manager/) voor PDF-uitvoer op ware fysieke schaal.*
