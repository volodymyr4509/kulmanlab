---
title: "Een zeshoek of steekcirkel tekenen in CAD (Polygon en polaire array)"
description: "Teken een regelmatige veelhoek vanuit een middelpunt en straal of vanuit één zijde en herhaal daarna gaten op een steekcirkel met een polaire array — gratis in je browser, met exact getypte waarden."
keywords: [zeshoek tekenen in CAD, regelmatige veelhoek CAD, polaire array CAD, steekcirkel tekening, gatenpatroon CAD, cirkelpatroon CAD, zeskantmoer tekenen, achthoek tekenen CAD, steekcirkeldiameter PCD, gratis polygon-gereedschap CAD]
date: 2026-10-11
author: KulmanLab
tag: Handleiding
---

Om in CAD een regelmatige veelhoek te tekenen, geef je het aantal zijden op, kies je het middelpunt en daarna een straal — of je kiest één zijde en de rest volgt. Om een steekcirkel te tekenen, teken je één gat en herhaal je dat rond het middelpunt met een polaire array. Deze handleiding doet beide, met exacte getallen, in een browser op [app.kulmanlab.com](https://app.kulmanlab.com) — gratis, zonder installatie, en het bestand verlaat je computer nooit.

Wij bouwen [KulmanLab](https://kulmanlab.com), dus de stappen hieronder gebruiken de opdrachten daarvan. De ideeën — sleutelwijdte versus hoekmaat, steekcirkeldiameter, of kopieën meedraaien — zijn in elk CAD-programma hetzelfde.

## Een regelmatige veelhoek tekenen

Een regelmatige veelhoek heeft gelijke zijden en gelijke hoeken: een zeshoek voor een moer, een achthoek voor een bord, een vijfhoek voor een decoratieve uitsparing. In KulmanLab is dat de opdracht **Polygon**.

1. Typ `polygon` in de terminal of gebruik de knop Polygon in het paneel Shapes.
2. Voer het **aantal zijden** in — elk geheel getal van 3 tot 1024 — en druk op **Enter**. De prompt is vooraf ingevuld met het aantal dat je de vorige keer gebruikte.
3. **Klik op het middelpunt** of typ `X,Y` voor een exact punt.
4. **Klik op de straal** of typ die en druk op **Enter**.

Het resultaat is één gesloten polylijn, dus alles wat je met een polylijn kunt doen — verplaatsen, draaien, offsetten, schalen — werkt.

### Sleutelwijdte of hoekmaat?

Hier struikelen mensen. "Straal" kan twee verschillende afstanden betekenen, en een zeshoek wordt met de ene of de andere gespecificeerd, afhankelijk van wat je tekent:

| | Gemeten tot | Typisch gebruik |
|---|---|---|
| **Inside aan** (standaard) | De hoekpunten | Een vorm die in een gegeven cirkel moet passen |
| **Inside uit** | Het midden van elke zijde | Een vorm met een gegeven sleutelwijdte — moeren, boutkoppen, sleutelmaten |

Druk bij de straalprompt op `I` om te wisselen. Een zeskantmoer wordt verkocht op sleutelwijdte, dus gebruik **Inside uit** en typ de *helft*. Voor een M8-moer met 13 mm sleutelwijdte:

1. `polygon`, dan `6` voor de zijden, dan het middelpunt aanklikken of typen.
2. Druk op `I` om Inside uit te zetten.
3. Typ `6.5` en druk op **Enter**.

De zijvlakken liggen precies 13 mm uit elkaar; de hoekpunten liggen 7,51 mm van het middelpunt, ongeveer 15 mm hoekmaat. Typ je de straal in plaats van te klikken, dan ligt de veelhoek met zijn laagste zijde horizontaal, vlak op de bodem. Klik je, dan ontleent de veelhoek zijn oriëntatie aan de plek waar je klikt.

### Vanuit één zijde

Soms ken je een zijdelengte, geen straal — bijvoorbeeld een achthoekig tafelblad met zijden van 20 mm. Druk bij de eerstepuntprompt op `E` voor de modus **Edge** en kies de twee uiteinden van één zijde. De overige hoekpunten worden tegen de klok in opgebouwd, links van die zijde. `0,0` gevolgd door `20,0` legt een zijde van 20 mm langs de X-as met de veelhoek erboven.

## Een steekcirkel tekenen

Een steekcirkel — "PCD" op tekeningen — is een ring van gelijkmatig verdeelde gaten rond een middelpunt. Je tekent één gat en herhaalt het. In KulmanLab is dat **ArrayPolar**.

Neem zes gaten van 6,6 mm op een steekcirkeldiameter van 50 mm, gecentreerd op de oorsprong:

1. **Teken het eerste gat.** Start `circle`, typ het middelpunt als `25` `,` `0` — de helft van de PCD langs de X-as —, druk op **Enter**, typ de straal `3.3` en druk op **Enter**.
2. **Selecteer het** door op de cirkel te klikken.
3. **Start de polaire array.** Typ `arraypolar` of gebruik de knop ArrayPolar in het paneel Edit.
4. **Kies het middelpunt van het patroon** — typ `0,0`.
5. De terminal toont de array zoals hij nu is — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — en de vijf kopieën worden live getoond. Druk op **Enter** om te accepteren.

Dat is de hele steekcirkel. Voor een ander aantal druk je vóór het bevestigen op `I` en typ je het aantal items — het origineel telt als één en de hoek ertussen wordt berekend. Of druk op `A` en typ in plaats daarvan de hoekafstand in graden; de vulhoek wordt daarop herberekend.

Een paar details die ertoe doen:

- **Fill** is de hoek van het eerste tot het laatste item. De standaard 360° verdeelt de items over de hele cirkel; een kleiner getal verdeelt ze over een boog — een rij gaten over een kwartslag, bijvoorbeeld. Een negatieve hoek loopt met de klok mee.
- **Rotate** bepaalt of elke kopie meedraait tijdens het rondgaan. Voor ronde gaten maakt het niet uit. Voor een sleuf, een tand of een beugel wel: aan — elke kopie kijkt naar het middelpunt zoals het origineel deed; uit — elke kopie behoudt de oriëntatie van het origineel en wordt alleen op zijn plek gezet. Druk op `R` om vóór het bevestigen te wisselen.
- De array maakt **kopieën** — het origineel blijft waar het is, en elk item is een gewone entiteit die je daarna kunt bewerken.

## Alles samen: een flens

Teken een zeshoek voor de omtrek, een cirkel in het midden voor de boring en een steekcirkel voor de bevestigingsgaten. Drie opdrachten, elke maat exact getypt, niets om van het scherm af te meten.

Gaat het onderdeel naar een lasersnijder, verwijder dan een hulpcirkel die je tekende om de steekcirkel te vinden — die zou net als al het andere worden gesneden — en controleer het bestand aan de hand van onze gids voor het [voorbereiden van een DXF voor lasersnijden](/nl/blog/prepare-dxf-for-laser-cutting/). De veelhoek is van nature een gesloten pad, de meest voorkomende reden waarom snijdiensten bestanden afwijzen.

## Wat dit niet doet

- **Alleen regelmatige veelhoeken.** Alle zijden zijn gelijk. Een onregelmatige omtrek — een vorm met enkele langere zijden — is een [polylijn](/nl/docs/commands/polyline/) die je punt voor punt tekent.
- **Alleen 2D.** Dit tekent platte omtrekken. Je krijgt er geen gemodelleerde moer of draadbout mee.
- **Alleen desktopbrowsers** — Chrome, Firefox, Safari en Edge. Er is geen mobiele versie.

---

*Gerelateerd: [Polygon](/nl/docs/commands/polygon/) en [ArrayPolar](/nl/docs/commands/array-polar/) voor alle opties en toetsen, [Circle](/nl/docs/commands/circle/) voor het typen van exacte stralen en [ArrayGrid](/nl/docs/commands/array-grid/) voor het herhalen van objecten in rijen en kolommen in plaats van rond een middelpunt.*
