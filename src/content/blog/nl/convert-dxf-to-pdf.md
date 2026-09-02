---
title: "Een DXF naar PDF omzetten (op de juiste schaal)"
description: "Zet DXF gratis om naar PDF in je browser — ook op een exacte schaal als 1:50 op A3, wat conversiesites niet kunnen. Niets installeren, geen account."
keywords: [DXF naar PDF omzetten, DXF naar PDF gratis, DXF PDF online, DXF PDF schaal, DXF op schaal printen, DXF PDF converter, CAD tekening naar PDF, DXF PDF A3, schaal 1:50 PDF, DXF PDF zonder AutoCAD]
date: 2026-09-03
author: KulmanLab
tag: Handleiding
---

Om een DXF naar PDF om te zetten, open je hem in een CAD-editor die in de browser draait en exporteer je: niets te installeren, geen account, en het bestand blijft op je computer. Moet de PDF na afdrukken kloppende maten geven, dan heb je een papierlayout en een exacte schaal nodig — precies de stap die conversiediensten helemaal overslaan.

Dat onderscheid is de hele reden voor deze handleiding. Een algemene bestandsconverter geeft je een plaatje van je tekening. Een PDF op schaal geeft je een tekening waar iemand een liniaal tegenaan kan leggen.

## De snelle route: gewoon een PDF maken

Als je alleen iets leesbaars nodig hebt om te versturen:

1. Ga naar [app.kulmanlab.com](https://app.kulmanlab.com) en sleep je `.dxf` op het tekenvlak, of gebruik de knop **Import** in het bestandspaneel.
2. Klik op **Print**, of typ `printmanager`.
3. Zet **Format** op **PDF**.
4. Klik op **Export**. Het bestand wordt gedownload.

Dat is alles. De voorbeeldweergave wordt via hetzelfde codepad en op dezelfde resolutie gerenderd als het geëxporteerde bestand, dus wat je ziet is wat je krijgt en geen benadering.

Eén ding is het waard te weten: anders dan bij DXF-export **behoudt de PDF alles wat op het scherm staat** — maatvoering, tekst, arceringen, leaders. Is je tekening voorzien van annotatie, dan is PDF het formaat dat die annotatie meeneemt.

## De juiste route: omzetten op een exacte schaal

Gaat iemand hier maten uit halen of iets naar bouwen, dan is "past op de pagina" niet genoeg. Schaal 1:50 betekent dat 1 mm op papier 50 mm in werkelijkheid is, en dat klopt alleen als je het bewust instelt.

1. **Ga naar een papierlayout.** Klik op een layouttab onderin; de knop **+** voegt er een toe. Layouts zijn papierruimte; modelruimte heeft geen pagina om op te schalen.
2. **Stel het blad in.** Typ `pagemanager`, of klik met rechts op de layouttab en kies **Page Manager**. Kies papierformaat (A4, A3, A2, Letter…) en oriëntatie.
3. **Plaats een viewport.** Typ `viewportrectangle` en wijs twee tegenoverliggende hoeken aan. De viewport is een venster op je model.
4. **Stel de schaal in.** Gebruik met de viewport actief de **schaalkiezer** in de bedieningsbalk. Kies een standaardverhouding of typ je eigen — hij accepteert verhoudingsnotatie (`1:200`, `5:1`) of een decimaal getal (`0.005`), gevolgd door Enter.
5. **Exporteer.** Print Manager → PDF → Export.

De PDF krijgt zulke afmetingen dat de pagina op ware fysieke schaal afdrukt. Print op 100% — nooit met "passend maken", dat stilletjes alles herschaalt en het werk tenietdoet — en de maten op papier kloppen.

Verander je daarna het papierformaat of de schaal, dan worden bestaande viewports evenredig meegeschaald, zodat de layout niet uiteenvalt.

## Een kwaliteit kiezen

De keuzelijst **Quality** bepaalt de dpi waarop de PDF wordt gerenderd:

| Quality | DPI | Waarvoor |
|---|---|---|
| Draft | 72 | Snelle controle, kleinste bestand |
| Normal | 150 | Standaard — prima voor A4-bijlagen |
| Presentation | 300 | Als er van dichtbij naar gekeken wordt |
| Max | 600 | Grote formaten, fijn detail |

Lijndiktes schalen mee met de resolutie, dus een lijn houdt bij elke instelling dezelfde *fysieke* dikte op papier — een hogere kwaliteit geeft een scherpere lijn, geen dunnere. Uitzondering is de haarlijn (lijndikte `0`), die per conventie op elk niveau één pixel breed blijft.

## Printstijlen

De keuzelijst **Style** verandert de inkt en de pagina:

- **Monochrome** — vol zwart op wit, en de standaard. Dit wil je voor alles wat op papier gaat: gekleurde lagen die op het scherm goed leesbaar zijn, worden op een laserprinter modderige grijzen.
- **Default** — elk object in zijn eigen kleur, witte pagina.
- **Blueprint** — witte lijnen op diep Pruisisch blauw, in de stijl van een klassieke blauwdruk. Voor presentatie, niet voor de werkplaats.

## Slechts een deel van de tekening omzetten

**Change Area** snijdt de export bij tot een rechthoek die je op het tekenvlak aanwijst. Het snijdt het daadwerkelijk geëxporteerde bestand bij, niet alleen de voorbeeldweergave, en het werkt zowel op een layout als in modelruimte.

De hoeken happen vast op grepen en snijpunten zoals elk ander aangewezen punt, dus je kunt op getekende geometrie bijsnijden in plaats van op het oog — handig als één blad vier details draagt en je alleen de derde wilt.

## Wat dit niet doet

Eerlijke beperkingen, voordat je erop vertrouwt:

- **De PDF is een rasterafbeelding in een PDF-container, geen vector.** Op A4 bij kwaliteit Normal zie je dat niet. Op A1, of wanneer iemand ver inzoomt op een detail, is een vector-PDF uit een desktop-CAD-pakket scherper. Zet Quality op Presentation of Max voor grote formaten — vector wordt het er niet van.
- **Er gaat niets naar een fysieke printer.** Je krijgt een bestand; afdrukken is de taak van je printer.
- **Alleen desktopbrowsers** — Chrome, Firefox, Safari, Edge. Er is geen mobiele versie.
- **Alleen 2D, DXF en geen DWG.** Is je bestand een `.dwg`, vraag de afzender dan om een DXF-export.

## Wanneer je iets anders moet gebruiken

**Een algemene bestandsconverter** (CloudConvert, Zamzar en dergelijke) voldoet als je echt alleen een plaatje nodig hebt en het je niet uitmaakt op welk formaat het afdrukt. Ze zijn snel en verwerken formaten die niemand anders leest. Ze geven je geen 1:50 op A3.

**Desktop-CAD** — LibreCAD, QCAD, of AutoCAD als je dat hebt — produceert vector-PDF's en is het juiste antwoord voor grootformaat technische tekeningen die netjes worden afgedrukt en nauwkeurig bekeken.

**Dit**, voor het brede middenveld: een DXF die je vandaag nodig hebt als correct geschaalde, geannoteerde PDF, zonder iets te installeren.

## Voordat je het verstuurt

- Schaal bewust ingesteld in de viewport, niet gelaten op wat toevallig paste
- Papierformaat komt overeen met wat de ontvanger daadwerkelijk gaat afdrukken
- Quality boven Normal als het op iets groters dan A4 gaat
- Stijl Monochrome, tenzij je bewust kleur wilt
- PDF één keer geopend om te controleren voordat je hem bijvoegt
- Ontvanger verteld op 100% te printen, niet op "passend maken"

Die laatste regel redt meer tekeningen op schaal dan al het andere op deze lijst.

---

*Gerelateerd: [Print Manager](/nl/docs/commands/print-manager/) voor alle exportinstellingen, [Page Manager](/nl/docs/commands/page-manager/) voor papierformaat en layoutschaal, [ViewportRectangle](/nl/docs/commands/viewport-rectangle/) voor het plaatsen en schalen van viewports, en [Import](/nl/docs/commands/import/) voor wat KulmanLab uit een DXF leest.*
