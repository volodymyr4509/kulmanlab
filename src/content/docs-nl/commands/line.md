---
title: Line Commando — Lijnen Tekenen, Aaneenschakelen, Bijsnijden
description: Het Line-commando tekent losse rechte lijnsegmenten die van punt tot punt kunnen worden aaneengeschakeld. Lijnen zijn het enige entiteitstype waarop Trim en Extend werken. Volledige DXF-roundtrip als LINE-entiteiten.
keywords: [CAD line commando, rechte lijn tekenen CAD, lijnsegmenten aaneenschakelen, lijn bijsnijden CAD, lijn verlengen CAD, hoekvergrendeling CAD, DXF LINE entiteit, kulmanlab]
group: shapes
order: 1
---

# Line

Het `line`-commando tekent losse rechte lijnsegmenten, opgeslagen als afzonderlijke `LINE`-entiteiten in het DXF-model. Na elk segment blijft het commando actief en hergebruikt het eindpunt als nieuw startpunt, zodat u stap voor stap verbonden paden kunt bouwen. In tegenstelling tot een [Polyline](../polyline/) blijven aaneengeschakelde lijnen onafhankelijke entiteiten — elk kan worden bijgesneden, verlengd of verwijderd zonder de buren te beïnvloeden.

## Lijnen tekenen

1. Typ `line` in de terminal of klik op de **Line**-werkbalkknop.
2. **Klik op het startpunt**, of typ `X,Y` en druk op **Enter** voor een exact coördinaat.
3. **Klik op het eindpunt** — het segment wordt geplaatst en het eindpunt wordt het volgende startpunt. Coördinaatinvoer werkt hier ook.
4. Blijf klikken (of typen) om meer segmenten aaneen te schakelen.
5. Druk op **Enter** of **Escape** om te stoppen.

```
  ●──────────●──────────●──────────●
 start     2e klik     3e klik    Enter om te voltooien
            (wordt automatisch nieuw startpunt)
```

Heeft u maar één segment nodig? Druk direct na stap 3 op **Enter** of **Escape**.

## Coördinaatinvoer

In plaats van te klikken, kunt u een exacte positie typen voor het start- of elk volgend punt:

1. Typ de X-waarde (cijfers, `.` of `-`).
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]`.
3. Typ de Y-waarde.
4. Druk op **Enter** om het punt te plaatsen.

## Hoekvergrendeling en exacte lengte-invoer

Terwijl u de cursor beweegt na het plaatsen van een punt, controleert het commando op een 45°-vangas (0°, 45°, 90°, 135°, …). De hoek **vergrendelt** wanneer:

- de cursor zich op ten minste **5 × grip-grootte** van het ankerpunt bevindt, **en**
- de loodrechte afstand tot de dichtstbijzijnde as binnen **1 grip-grootte** ligt.

Bij vergrendeling springt de preview naar de as en kunt u een exacte lengte invoeren:

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.` | Cijfer toevoegen aan de lengtewaarde |
| `-` | Negatieve lengte — keert richting om langs de as (alleen als eerste teken) |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` | Eindpunt plaatsen op de getypte afstand |

De opgebouwde waarde wordt live getoond in de terminal (bijv. `klik eindpunt of voer lengte in: 12.5`). Klikken tijdens vergrendeling projecteert de klik op de as, zodat het eindpunt altijd exact erop ligt.

Terugbewegen dicht bij het ankerpunt ontkoppelt de vergrendeling.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | X-coördinaatinvoer starten, of afstand bij hoekvergrendeling |
| `,` | X vergrendelen en doorgaan naar Y-invoer |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` | Getypt coördinaat of lengte bevestigen, of de keten voltooien als er niets is getypt |
| `Escape` | Keten voltooien en afsluiten |

## Grip-bewerking — eindpunten uitrekken

Een geselecteerde lijn toont drie grips:

| Grip | Waar | Wat het doet |
|------|-------|--------------|
| **Start** | Eerste eindpunt | Sleep om te herpositioneren — het einde blijft vast |
| **Middelpunt** | Midden van de lijn | Activeert **Move** voor de hele lijn |
| **Einde** | Tweede eindpunt | Sleep om te herpositioneren — het start blijft vast |

Het uitrekken van het ene eindpunt heeft nooit invloed op het andere. Dit verschilt van grip-bewerking bij [Polyline](../polyline/), waar het verplaatsen van een hoekpunt het hele pad hervormt.

## Lijnen selecteren

| Methode | Gedrag |
|--------|-----------|
| **Klikken** | Selecteert de lijn als de klik binnen de hit-testafstand van het segment valt |
| **Slepen naar rechts** (strikt) | De lijn wordt alleen geselecteerd als beide eindpunten binnen het vak vallen |
| **Slepen naar links** (kruisend) | De lijn wordt geselecteerd als een deel van het segment de vakrand kruist |

## Ondersteunde bewerkingscommando's

Lijnen zijn de **enige** entiteit waarop [Trim](../trim/) en [Extend](../extend/) werken. Alle standaard transformatiecommando's zijn ook van toepassing:

| Commando | Wat er gebeurt met een lijn |
|---------|------------------------|
| [Move](../move/) | Verplaatst beide eindpunten met dezelfde verschuiving |
| [Copy](../copy/) | Maakt een identieke lijn op een nieuwe positie |
| [Rotate](../rotate/) | Draait beide eindpunten rond het gekozen basispunt |
| [Mirror](../mirror/) | Spiegelt beide eindpunten over de spiegelas |
| [Scale](../scale/) | Schaalt beide eindpunten uniform vanaf het basispunt |
| [Offset](../offset/) | Maakt een parallelle lijn op een vaste loodrechte afstand |
| [Trim](../trim/) | Snijdt de lijn bij snijpunten — **alleen lijnen** |
| [Extend](../extend/) | Rekt het dichtstbijzijnde eindpunt uit tot een grens — **alleen lijnen** |
| [Delete](../delete/) | Verwijdert de lijn uit de tekening |

## Eigenschappen

Wanneer een lijn is geselecteerd, toont het eigenschappenpaneel elk veld dat de DXF `LINE`-record bevat:

**Algemeen**

| Eigenschap | Standaard | Betekenis |
|----------|---------|---------|
| Kleur | 256 (ByLayer) | ACI-kleurindex |
| Laag | `0` | Laagtoewijzing |
| Lijntype | ByLayer | Benoemd lijntypepatroon |
| Lijntypeschaal | 1 | Schaalfactor op het lijntypepatroon |
| Dikte | 0 | Extrusiedikte |

**Geometrie**

| Eigenschap | Betekenis |
|----------|---------|
| Start X / Start Y | Coördinaten van het eerste eindpunt |
| Eind X / Eind Y | Coördinaten van het tweede eindpunt |

Alle velden zijn direct in het paneel bewerkbaar zonder het commando opnieuw uit te voeren.

## Line versus Polyline — wanneer welke gebruiken

| | Line | Polyline |
|---|------|---------|
| Aantal entiteiten | Eén `LINE` per segment | Eén `LWPOLYLINE` voor het hele pad |
| Trim / Extend | Ja — segment voor segment | Nee |
| Gesloten vorm | Nee | Ja (sluitvlag) |
| Grip-bewerking | Individuele eindpunten uitrekken | Elk hoekpunt langs het pad verplaatsen |
| Ideaal voor | Constructielijnen, losse segmenten, geometrie die u gaat bijsnijden | Contouren, omtrekken, vormen die u heel houdt |

## DXF — LINE-entiteit

Lijnen worden opgeslagen als `LINE`-entiteiten in het DXF-bestand. Elke eigenschap — start-/eindcoördinaten, kleur, laag, lijntype, lijntypeschaal en dikte — blijft zonder verlies behouden bij de roundtrip. Wanneer u een DXF opent met `LINE`-entiteiten, worden ze volledig bewerkbare `Line`-objecten in de editor.

Lijnen die in de editor worden getekend, worden bij het opslaan ook als `LINE`-entiteiten geschreven, zodat ze leesbaar zijn voor LibreCAD, FreeCAD en elke andere DXF-compatibele toepassing.
