---
title: "Een DXF-bestand voorbereiden voor lasersnijden"
description: "Waarom snijdiensten DXF-bestanden afkeuren en hoe je het jouwe repareert — gesloten contouren, eenheden, snijvoeg en lagen. Gratis in je browser."
keywords: [DXF lasersnijden, DXF voorbereiden laser, lasersnijden bestandsformaat, DXF afgekeurd laser, gesloten contouren DXF, snijvoeg kerf laser, laserbestand voorbereiden, DXF eenheden laser, lagen snijden graveren, gratis DXF editor]
date: 2026-09-02
author: KulmanLab
tag: Handleiding
---

Een DXF voor lasersnijden heeft vier dingen nodig: gesloten contouren, de juiste eenheden, uitsluitend snijgeometrie — geen maatvoering, notities of arceringen — en lagen die snijden, kerven en graveren van elkaar scheiden. Deze handleiding behandelt elk punt en laat zien hoe je je bestand controleert voordat een dienst het afkeurt.

Dit kan allemaal gratis in de browser op [app.kulmanlab.com](https://app.kulmanlab.com): niets te installeren, geen account, en het bestand verlaat je computer nooit. Dit is de werkwijze waarvoor we KulmanLab oorspronkelijk gebouwd hebben, dus de beperkingen die bij andere CAD-taken gelden, gelden hier grotendeels niet: lasersnijden is 2D, en DXF is wat snijdiensten willen hebben.

## Waarom bestanden worden afgekeurd

Vijf redenen dekken zo goed als alles.

**Open contouren.** Een vorm die gesloten lijkt maar in een hoek een haarfijne opening heeft, is geen gebied maar een verzameling losse lijnen. Snijmachines moeten weten wat binnen en wat buiten ligt, en een open contour heeft geen binnenkant. Dit is met afstand de meest voorkomende reden voor afkeuring.

**Verkeerde of onduidelijke eenheden.** DXF legt niet betrouwbaar vast wat zijn getallen betekenen. Hetzelfde bestand kan in millimeters, centimeters, inches of voeten zijn getekend, en vaak vermeldt het bestand dat niet. Een onderdeel dat 25,4 keer te groot of te klein aankomt, is dit.

**Alles wat geen geometrie is.** Maatvoering, titelblokken, notities, arceringen, hulplijnen. De machine probeert je aantekeningen maar wat graag mee te snijden.

**Dubbele lijnen.** Twee identieke lijnen over elkaar betekent dat de laser hetzelfde pad twee keer aflegt: verloren tijd, geschroeide randen, en bij dun materiaal brandgevaar.

**Alles op één laag.** Zijn snijden, kerven en graveren niet gescheiden, dan kan de dienst ze niet uit elkaar houden en vraagt om een nieuwe inzending.

## Het bestand voorbereiden

Sleep je `.dxf` op het tekenvlak van [app.kulmanlab.com](https://app.kulmanlab.com), of gebruik de knop **Import** in het bestandspaneel. De tekening laadt en het beeld past zich erop aan.

**1. Kijk wat je werkelijk hebt.** Typ `fit` om alles in beeld te brengen. Zoom daarna in op elke hoek van elk onderdeel — openingen zijn onzichtbaar op tekeningschaal en onmiskenbaar bij tien keer vergroten. Deze controle bespaart je de afkeuringsmail.

**2. Verwijder wat niet gesneden mag worden.** Hulplijnen, notities, kaders, maatvoering. `layer-isolate` toont één laag tegelijk, en zo vind je restanten die onder de echte geometrie verstopt zitten.

**3. Sluit de openingen.** `trim` snijdt uitstekende uiteinden weg waar twee lijnen elkaar voorbij kruisen. Waar lijnen tekortkomen, sleep je een eindpuntgreep op zijn buur — grepen happen vast, dus de uiteinden raken elkaar echt in plaats van bijna.

**4. Controleer je maten.** `distance` meet tussen twee punten, `area` meet een gesloten gebied vanuit aangeklikte punten. Meet iets waarvan je de werkelijke maat kent. Wijkt het een factor 25,4 af, dan staat je bestand in het verkeerde eenhedenstelsel.

**5. Scheid snijden, kerven en graveren.** Zet elke bewerking op een eigen laag met een duidelijke naam: `CUT`, `SCORE`, `ENGRAVE`. De meeste diensten vragen hierom, of om aparte bestanden. `layer-manager` maakt ze aan en wijst ze toe.

Exporteer daarna: **Export** → **DXF**. KulmanLab schrijft eenvoudige AC1032-DXF, precies wat snijdiensten en machinesoftware verwachten.

## Snijvoeg

De laser neemt materiaal weg tijdens het snijden — ruwweg 0,1 tot 0,3 mm, afhankelijk van machine, materiaal en dikte. Snij een vierkant van 50 mm en je krijgt een iets kleiner vierkant, en het onderdeel dat er klemvast in moest, past niet.

Twee manieren om ermee om te gaan:

**Laat het aan de dienst over.** De meeste snijdiensten compenseren de snijvoeg zelf, en doen ze dat, dan maakt jouw compensatie de onderdelen de andere kant op verkeerd. Vraag het na voordat je iets aanpast.

**Doe het zelf.** `offset` maakt een parallelle kopie van een vorm op een vaste afstand — de halve snijvoegbreedte, naar buiten voor onderdelen die op maat moeten blijven, naar binnen voor gaten. Het werkt op lijnen, cirkels, bogen, ellipsen en polylijnen. Het pakt één object tegelijk, dus praktisch voor een handvol kritieke maten, niet voor een plaat met tweehonderd onderdelen.

Is tolerantie belangrijk, snij dan een proefstuk voordat je materiaal vastlegt.

## Wat je bij DXF-export moet controleren

Goed om te weten voordat je erop vertrouwt:

- **Vink annotatie uit in plaats van haar te verwijderen.** Tekst, maatvoering, leaders en arceringen worden nu allemaal geëxporteerd, dus alles wat je in de tekening laat staan komt in het bestand terecht. Verwijderen hoeft niet: de Export Manager toont elk entiteitstype met een eigen vinkje, dus door Text, de maatvoeringsrijen, Leaders en Hatches uit te vinken krijg je een DXF met alleen snijgeometrie, terwijl de tekening zelf ongemoeid blijft.
- **Tekst komt eruit als `MTEXT`, en dat is niet hetzelfde als graveerbare geometrie.** Het letterwerk wordt met opmaak en al geëxporteerd, maar heel wat machinesoftware wil contouren in plaats van levende tekst op een graveerlaag. Ga na wat de jouwe accepteert voordat je daar een gravure op baseert.
- **Blockverwijzingen worden niet geïmporteerd.** Een tekening die uit herhaalde blocksymbolen is opgebouwd komt onvolledig binnen, dus controleer het aantal onderdelen tegen het origineel.

Splines *worden* wel geëxporteerd. Sommige machinesoftware gaat er slecht mee om en werkt liever met polylijnen — is dat bij jou zo, teken de krommen dan opnieuw als polylijnen of bogen.

## Een waarschuwing over automatisering

KulmanLab heeft **geen preflight-controle**. Niets speurt naar open contouren, dubbele lijnen of eenhedenproblemen om ze te melden. De controles hierboven zijn handwerk: inzoomen, meten, kijken.

Dat is prima voor een handvol onderdelen en vermoeiend voor een volledig genest vel. Produceer je regelmatig vellen, dan ben je beter af met gereedschap dat automatisch valideert — en voor losse onderdelen, wat de meeste mensen meestal doen, vindt aandachtig kijken dezelfde problemen.

## Voordat je het verstuurt

- Elke snijcontour gesloten — hoeken gecontroleerd bij sterke vergroting
- Eén bekende maat gemeten en correct
- Geen maatvoering, notities, kaders of hulpgeometrie meer over
- Geen dubbele lijnen over elkaar
- Snijden, kerven en graveren op aparte, duidelijk benoemde lagen
- Snijvoeg: toegepast, of bewust aan de dienst overgelaten
- Geëxporteerd als DXF en één keer heropend om te bevestigen dat het klopt

Dat laatste punt kost tien seconden en vangt exportverrassingen op vóór de dienst dat doet.

---

*Gerelateerd: [Import](/nl/docs/commands/import/) voor wat KulmanLab uit een DXF leest, [Export Manager](/nl/docs/commands/export-manager/) voor wat elk exportformaat precies meeneemt, [Offset](/nl/docs/commands/offset/) voor snijvoegcompensatie, en [LayerManager](/nl/docs/commands/layer-manager/) voor het opzetten van snij- en graveerlagen.*
