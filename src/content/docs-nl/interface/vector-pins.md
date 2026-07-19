---
title: Vector Pins — Snappen langs referentielijnen van pins
description: Met Vector Pins pint u een snappunt vast door er een halve seconde overheen te hoveren, en volgt u vervolgens de cursor langs gestreepte horizontale en verticale referentielijnen door het vastgepinde punt — lijn nieuwe geometrie uit met bestaande punten, zonder constructielijnen.
keywords: [vector pins, objectsnap tracking, referentielijnen, uitlijning tracking, snap tracking CAD, constructielijnen, kulmanlab]
group: interface
order: 2
---

# Vector Pins

**Vector Pins** is een tekenhulpmiddel waarmee u nieuwe geometrie kunt uitlijnen met bestaande punten zonder constructielijnen te tekenen. Hover een halve seconde over een snappunt om het *vast te pinnen* — de pin projecteert vervolgens onzichtbare horizontale en verticale referentielijnen, en de cursor snapt hierop zodra deze in de buurt komt. Het is het equivalent van object snap tracking uit desktop-CAD-toepassingen in KulmanLab CAD.

Deze functie wordt bestuurd door de schakelaar **Pins** in de bedieningsbalk (naast Raster, Snap en ANGL). Deze staat **standaard aan**, en de instelling blijft behouden tussen sessies.

## Een punt vastpinnen

1. Start een commando dat om een punt vraagt — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/), enzovoort.
2. Beweeg de cursor over een snappunt van bestaande geometrie — een eindpunt-, middelpunt- of centrummarkering.
3. **Houd de cursor 500 ms stil.** De markering verandert in een gevuld **vierkant** in accentkleur — het punt is nu vastgepind.
4. Herhaal dit om zoveel punten vast te pinnen als u nodig heeft. Elke pin blijft zijn referentielijnen projecteren.

Vastpinnen werkt ook buiten een commando: door over een **grip** van een geselecteerde entiteit te hoveren, wordt deze op dezelfde manier vastgepind.

## Volgen langs referentielijnen

Elk vastgepind punt projecteert twee onzichtbare referentielijnen — één **horizontale** en één **verticale** — door zijn exacte coördinaten. Terwijl u de cursor beweegt:

- Binnen **12 px** van de verticale lijn van een pin snapt de cursor erop: er wordt een gestreepte accentlijn getekend door de pin over de gehele weergave, en een **X-markering** toont de gesnapte positie. Uw X-coördinaat is nu *exact* de X van de pin.
- Hetzelfde geldt voor de horizontale lijn en de Y-coördinaat van de pin.
- Dichtbij één lijn van elke oriëntatie — zelfs van **twee verschillende pins** — snapt de cursor naar hun **snijpunt**, en beide gestreepte lijnen worden getoond. Dit plaatst een punt precies op (X van pin A, Y van pin B).

```
                    ┆ (gestreept, verticale lijn van pin ■)
                    ┆
   ■ pin A ┄┄┄┄┄┄┄┄ ✕ ← cursor gesnapt naar het snijpunt:
                    ┆    X van pin B, Y van pin A
                    ┆
                    ■ pin B
```

Gesnapte coördinaten worden rechtstreeks van de pin overgenomen, dus de uitlijning is exact — geen afronding of floating-point afwijking.

## Snapprioriteit

Reguliere geometrie-snaps — eindpunt, middelpunt, centrum en snijpunt — **hebben voorrang** op pin-referentielijnen. Als de cursor dichter bij een puntsnap is dan bij een referentielijn, wint de puntsnap. Pin-tracking vult de gaten tussen geometrie, en blokkeert nooit het snappen naar de geometrie zelf.

## Combineren met hoekvergrendeling

Vector Pins werken samen met hoektracking (de schakelaar **ANGL** in de bedieningsbalk). Wanneer een commando de cursor heeft vergrendeld op een hoektracking-straal:

- De cursor blijft beperkt tot de vergrendelde richting.
- Het pin-snappen richt zich vervolgens op de **snijpunten van de vergrendelde straal met de pin-referentielijnen** (alleen vóór de oorsprong van de straal).

Dit beantwoordt vragen zoals *"waar kruist de richting van 45° vanaf mijn laatste punt de hoogte van het middelpunt van die cirkel?"* — vergrendel de hoek, en de cursor klikt vast in het snijpunt. Straal-snappen werkt in elk commando met hoekvergrendeling: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader en ViewportCopy.

## Levenscyclus van pins

Pins zijn bedoeld voor de huidige bewerking, niet als permanente markeringen. Alle pins worden gewist wanneer:

| Gebeurtenis | Waarom |
|-------|-------|
| Een **nieuw commando** wordt gestart | Elke bewerking begint met een schone set referenties |
| **Escape** wordt ingedrukt | Standaardgedrag om alles te annuleren |
| De schakelaar **Pins** wordt uitgeschakeld | Het uitschakelen van de functie verwijdert de status ervan |
| Wisselen tussen **model- en papierruimte** | Pin-coördinaten gelden voor slechts één ruimte |

Binnen één commando kunt u pinnen, tekenen, opnieuw pinnen en doorgaan — pins overleven elke klik van een meerpuntscommando zoals Polyline.

## Typische workflow

Teken een lijn die direct onder het middelpunt van een cirkel begint:

1. Typ `line` (of klik op de knop Line).
2. Hover een halve seconde over de **middelpuntmarkering** van de cirkel — deze wordt een vierkant in accentkleur.
3. Beweeg de cursor omlaag: in de buurt van de verticale lijn van de cirkel vergrendelt de cursor op de gestreepte referentielijn.
4. Klik — de lijn begint precies op de X-coördinaat van de cirkel.
5. Ga verder met de lijn zoals gebruikelijk; de pin blijft beschikbaar voor de volgende punten.

## Opmerkingen

- De hover van 500 ms werkt op elke snapmarkering die de cursor kan bereiken — inclusief snappunten die halverwege een commando verschijnen.
- Hoveren over een punt dat al is vastgepind heeft geen effect; er is geen manier om te ontpinnen door te hoveren. Wis pins met **Escape** of door **Pins** uit te schakelen.
- De snapafstand voor referentielijnen is dezelfde 12 schermpixels die worden gebruikt voor regulier puntsnappen, zodat het gevoel bij elk zoomniveau consistent is.
- Vastgepinde punten worden weergegeven als vierkanten in accentkleur in plaats van hun reguliere snapmarkeringen.
