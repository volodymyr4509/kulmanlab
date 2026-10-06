---
title: Hatch-commando — Een gebied vullen met een patroon
description: Het Hatch-commando vult het gebied rond een aangeklikt punt met een patroon — elke combinatie van lijnen, bogen, ellipsen en splines die zich sluit, omsluit een gebied, en elke gesloten vorm daarbinnen blijft achter als een ongevuld eiland.
keywords: [CAD hatch-commando, gebied vullen CAD, hatch-patroon CAD, ANSI31, SOLID-vulling, randvulling CAD, DXF HATCH-entiteit, kulmanlab]
group: shapes
order: 7
---

# Hatch

Het commando `Arcering` vult het gebied rond een aangeklikt punt met een patroon. De rand wordt niet eerst getekend — die komt voort uit wat al op het canvas staat, dus vier afzonderlijke [Lines](../line/) die kop-staart aan elkaar aansluiten, omsluiten een gebied precies zoals een gesloten [Polyline](../polyline/) dat doet, en elke gesloten vorm daarbinnen wordt een eiland dat de vulling met rust laat.

## Een gebied vullen

1. Typ `Arcering` in de terminal of klik op de werkbalkknop **Hatch** (het swatch-pictogram).
2. **Klik op een punt** binnen het gebied dat u wilt vullen.
3. Het commando blijft actief, dus blijf klikken om meer gebieden te vullen — elke klik maakt een eigen `Hatch`-entiteit aan.
4. Druk op **Enter**, **Space** of **Escape** wanneer u klaar bent.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   klik binnen de buitenste
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   rand; de cirkel blijft
  └─────────────┘        └─────────────┘   een eiland
```

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Enter` / `Space` | Het Hatch-commando voltooien |
| `Escape` | Het Hatch-commando voltooien (hetzelfde als Enter/Space) |

## Wat een rand kan vormen

Elke combinatie van deze entiteitstypen kan een rand vormen, in elke samenstelling, zolang ze kop-staart zonder enige opening aansluiten:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (zijn eigen gesloten rand)
- [Ellipse](../ellipse/) (gesloten, of een open elliptische boog als onderdeel van een grotere lus)
- [Polyline](../polyline/) (open of gesloten) en [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/) — elke lus van een spline die zichzelf kruist is een eigen gebied

Text-, Multileader- en Dimension-entiteiten worden nooit als rand behandeld.

## Eilanden

Alles wat volledig gesloten is binnen het gebied dat u aanklikte — een cirkel, een gesloten polylijn, de rand van een andere hatch — wordt een **eiland**: de vulling stopt bij de rand ervan en het eiland zelf blijft leeg. Plaats een gesloten vorm binnen een andere gesloten vorm en de vulling wisselt af, gat in een vulling in een gat, volgens dezelfde binnen/buiten-regel op elk niveau.

## Wanneer een klik mislukt

Als het punt waarop u klikte niet omsloten is, of de rand heeft een opening, legt de terminal uit waarom in plaats van stilzwijgend niets te doen:

| Bericht | Betekenis |
|---------|-----------|
| "no boundary found" | Er werd in geen enkele richting vanaf het aangeklikte punt iets geraakt — er is helemaal geen rand in de buurt |
| "point is not enclosed" | Er bestaat een rand in de buurt, maar de vorm die deze vormt bevat het punt waarop u klikte niet |
| "boundary is open" | De dichtstbijzijnde rand heeft ergens een opening — volg deze en controleer of elke verbinding exact is |
| "boundary too complex" | De randlus kon niet worden gesloten binnen de doorloopgrens — meestal een kluwen van overlappende entiteiten |

Het commando blijft actief na een mislukte klik — lees het bericht, corrigeer de tekening of klik elders, en probeer opnieuw.

## Een patroon kiezen

Elke nieuwe hatch begint gevuld met `ANSI31` (of welk patroon de *laatst* bewerkte hatch gebruikte) — er is geen patroonkiezer voordat u tekent. Om een ander patroon te gebruiken:

1. Selecteer een bestaande hatch en open het veld **Pattern** ervan in het eigenschappenpaneel — dit opent de patroonkiezer, een raster van benoemde swatches gegroepeerd naar waar elk patroon vandaan komt.
2. Klik op een patroon om het toe te passen — de vulling wordt onmiddellijk bijgewerkt.

Die keuze wordt ook de standaard voor de *volgende* hatch die u maakt met het commando `Arcering`, op dezelfde manier waarop het kiezen van een laag of kleur wordt doorgevoerd. Om dus meerdere nieuwe gebieden met een bepaald patroon te hatchen: vul één gebied, stel het patroon één keer in, en blijf hatchen — elke daaropvolgende vulling begint al met dat patroon toegepast.

Zie [Hatch Manager](../hatch-manager/) om uw eigen `.pat`-patroonbestanden te uploaden en de volledige bibliotheek te doorzoeken.

**SOLID** is een gewoon item in de patroonlijst, geen apart selectievakje of modus — kies het op dezelfde manier waarop u ANSI31 of een ander benoemd patroon zou kiezen.

## Eigenschappen

| Eigenschap | Betekenis |
|------------|-----------|
| Pattern | De naam van het patroon, uit de gedeelde patroonwoordenschat (zie [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Schaalt de lijnafstand van het patroon — grotere waarden plaatsen de patroonlijnen verder uit elkaar |
| Pattern Angle | Roteert het patroon onafhankelijk van de rand |
| Origin X / Origin Y | Waar de eigen herhaling van het patroon verankerd is, in tekeningcoördinaten |

Het verplaatsen, roteren, spiegelen of schalen van een hatch neemt de patroonplaatsing ervan mee, zodat de vulling uitgelijnd blijft met de rand — u hoeft de schaal of hoek niet opnieuw in te stellen na een transformatie.

## Handvatbewerking van de rand

Een geselecteerde hatch grijpt zijn rand op dezelfde manier waarop een Polyline zijn hoekpunten grijpt — een handvat op elke hoek waar twee randen samenkomen, en een in het midden van elke rand (een gesloten lus zoals een hatch van een cirkel of ellips grijpt in plaats daarvan op zijn vier astpunten).

| Handvat | Wat het doet |
|---------|--------------|
| **Hoek** | Verplaatst die hoek. Een rechte rand volgt exact; een boog past zichzelf opnieuw aan om door beide buren te blijven lopen; een ellips- of spline-rand kan alleen ergens op zijn eigen curve landen, dus de hoek klikt vast op het dichtstbijzijnde punt erop |
| **Randmidden — lijn-, ellips- of spline-rand** | Schuift de hele rand; de randen aan beide zijden worden bijgesneden of verlengd om ermee verbonden te blijven |
| **Randmidden — boogrand** | **Buigt** de boog door de cursor in plaats van deze te schuiven — beide uiteinden blijven precies waar ze waren, en verder beweegt niets in de rand |
| **Middelpunt** (hele hatch) | Activeert [Move](../move/) voor de hele hatch |

Een sleepvoorbeeld toont de rand als een gestippelde omtrek in plaats van een volledige vulling terwijl u sleept — de oorspronkelijke vulling blijft eronder zichtbaar totdat u loslaat, omdat een voorbeeld alleen kan schilderen over wat er al is, en er nooit iets van kan verwijderen.

## DXF — HATCH-entiteit

Hatches worden **geïmporteerd** vanuit `HATCH`-entiteiten: KulmanLab leest de randgeometrie samen met de naam, schaal en hoek van het patroon (DXF-groepscodes 70/41/52) — het leest **niet** de eigen lijndefinities van het patroon die inline in het bestand worden geschreven. In plaats daarvan wordt de patroonnaam opgezocht in KulmanLabs eigen patroonbibliotheek (ingebouwde standaarden plus alles wat u heeft geüpload in [Hatch Manager](../hatch-manager/)). Een naam die niet in uw bibliotheek staat, valt terug op ANSI31 zodat de tekening nog steeds als gehatcht leest, en er wordt eenmalig een opmerking gelogd.

Splinebegrensde lussen die door andere toepassingen zijn geschreven (DXF-randtype 4) worden nog niet gelezen.

Arceringen worden als `HATCH`-entiteiten naar DXF **geëxporteerd**. De randlussen gaan mee met de patroonnaam (groepscode 2), de vlakvullingsvlag (70) en de eigen hoek en schaal van die arcering (52/41) — en anders dan bij het importeren worden ook de opgeloste patroonlijnen in het bestand geschreven (78, met 53/43/44/45/46/79/49). Die asymmetrie is bewust: KulmanLab kan een naam in zijn eigen bibliotheek opzoeken, maar de toepassing die het bestand ontvangt heeft dat patroon misschien niet, dus reizen de lijnen mee.

## Gerelateerde commando's

- [Hatch Manager](../hatch-manager/) — blader door de patroonbibliotheek en upload `.pat`-bestanden
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — nemen allemaal de patroonplaatsing van de hatch mee
- [Delete](../delete/) — verwijdert de hatch zonder de entiteiten aan te tasten die de rand ervan vormden
