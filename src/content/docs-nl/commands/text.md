---
title: Text-commando — Plaats MTEXT-labels in KulmanLab CAD
description: Het Text-commando plaatst een meerregelig, rijk opgemaakt MTEXT-label. Klik een positie aan, typ in de pop-up editor en druk op Escape om te bevestigen. Dubbelklik op een bestaand label om de editor opnieuw te openen.
keywords: [CAD text commando, MTEXT, tekstlabel plaatsen CAD, tekstannotatie CAD, vet cursief CAD, meerregelige tekst CAD, kulmanlab]
group: shapes
order: 7
---

# Text

Het `text`-commando plaatst een meerregelig tekstlabel. Nadat u een positie op het canvas heeft aangeklikt, opent een pop-up editor in **rijke** modus — u kunt inhoud typen, per teken vet/cursief/doorhalen toepassen, lettertypen en hoogtes wijzigen, en regelafbrekingen invoegen. Druk op **Escape** om te bevestigen en de editor te sluiten.

Zie de [Text Editor](../../interface/text-editor/)-pagina voor de volledige editorreferentie, inclusief een vergelijking van de modi **rijk** en **eenvoudig**.

## Een tekstlabel plaatsen

1. Typ `text` in de terminal of klik op de **Text**-werkbalkknop.
2. **Klik de ankerpositie** aan op het canvas. Of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
3. De **tekst-editor pop-up** opent boven het nieuwe label. Typ uw inhoud.
4. Druk op **Escape** om het label te bevestigen en de editor te sluiten.

De standaardhoogte is **12 tekeneenheden**.

## Een bestaand label bewerken

**Dubbelklik** op een tekstlabel op het canvas om de editor voor dat label opnieuw te openen.

## Coördinaatinvoer voor het anker

In plaats van klikken kunt u een exacte positie typen:

1. Typ de X-waarde.
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]`.
3. Typ de Y-waarde.
4. Druk op **Enter** om het anker te plaatsen en de editor te openen.

## Toetsenbordreferentie

**Ankerfase**

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-coördinaatinvoer |
| `,` | Vergrendel X en ga naar Y-invoer |
| `Backspace` | Verwijder laatst getypte teken |
| `Enter` | Bevestig getypte coördinaat |

**Tekst-editorfase** (zie [Text Editor](../../interface/text-editor/) voor de volledige referentie)

| Toets | Actie |
|-----|--------|
| Elk afdrukbaar teken | Invoegen bij cursor |
| `Backspace` / `Delete` | Verwijder aangrenzend teken of selectie |
| `Enter` | Voeg een regelafbreking in |
| `←` / `→` | Verplaats cursor |
| `Home` / `End` | Spring naar begin / einde van harde regel |
| `Escape` | Bevestig en sluit de editor |

## Grip-bewerking — herpositioneren

Een geselecteerd tekstlabel toont één grip op het ankerpunt:

| Grip | Positie | Wat het doet |
|------|----------|--------------|
| **Anchor** | Linksonder van de tekst | Slepen om het label te herpositioneren |

## Tekst selecteren

| Methode | Gedrag |
|--------|-----------|
| **Klik** | Selecteert als de klik binnen het geroteerde begrenzingsvak van de tekst valt |
| **Slepen naar rechts** (strikt) | Alle vier hoeken van het begrenzingsvak moeten binnen het selectiegebied liggen |
| **Slepen naar links** (kruisend) | Elke overlap tussen het begrenzingsvak van de tekst en het selectiegebied selecteert het |

## Ondersteunde bewerkingscommando's

| Commando | Wat er met de tekst gebeurt |
|---------|--------------------------|
| [Move](../move/) | Verplaatst het ankerpunt |
| [Copy](../copy/) | Maakt een identiek label op een nieuwe positie |
| [Rotate](../rotate/) | Roteert de ankerpositie en telt de hoek op bij Rotation Degree |
| [Mirror](../mirror/) | Spiegelt het ankerpunt over de spiegelas (tekststring wordt niet omgedraaid) |
| [Scale](../scale/) | Schaalt de ankerpositie en vermenigvuldigt de hoogte met de schaalfactor |
| [Delete](../delete/) | Verwijdert het label |

Text ondersteunt geen **Offset**, **Trim** of **Extend**.

## Eigenschappen

Wanneer een tekstlabel is geselecteerd, toont het eigenschappenpaneel:

**Algemeen**

| Eigenschap | Standaard | Betekenis |
|----------|---------|---------|
| Color | 256 (ByLayer) | ACI-kleurindex |
| Layer | `0` | Laagtoewijzing |

**Geometrie**

| Eigenschap | Betekenis |
|----------|---------|
| Position X / Position Y | Coördinaten van het ankerpunt |
| Height | Basis tekstoogte in tekeneenheden (standaard: **12**) |
| Rotation Degree | Rotatie tegen de klok in, in graden |

**Eigenschappen**

| Eigenschap | Betekenis |
|----------|---------|
| Content | De tekststring (MTEXT inline-codes behouden) |
| Attachment Point | Uitlijningscode (1 = linksboven … 9 = rechtsonder) |

Text heeft geen eigenschappen Linetype, Linetype Scale of Thickness.

## DXF — MTEXT-entiteit

Tekstlabels worden opgeslagen als **MTEXT**-entiteiten in het DXF-bestand. Vet en cursief worden gecodeerd met `\L`, `\K`, `\O`, en inline-lettertypewisselingen (`\f`). Hoogte per teken wordt gecodeerd als `\H`. Alle opmaak blijft behouden bij een volledige DXF-export en -import en is leesbaar door LibreCAD, FreeCAD en andere DXF-compatibele toepassingen.
