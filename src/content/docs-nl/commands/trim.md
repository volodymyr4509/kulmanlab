---
title: Trim-commando — Snijd segmenten bij snijpunten
description: Het Trim-commando verwijdert het deel van een Line, Arc, Circle, Ellipse of Polyline tussen twee aangrenzende snijpunten dichtst bij de cursor. De preview toont precies welk segment wordt gesneden voordat u klikt.
keywords: [CAD trim commando, lijn snijden CAD, cirkel snijden CAD, boog snijden CAD, ellips snijden CAD, polylijn snijden CAD, lijn snijpunt afsnijden, hover trim preview, kulmanlab]
group: edit
order: 8
---

# Trim

Het `Inkorten`-commando verwijdert het deel van een [Line](../line/), [Arc](../arc/), [Circle](../circle/), [Ellipse](../ellipse/) of [Polyline](../polyline/) dat tussen twee aangrenzende snijpunten ligt, waardoor de entiteit in één of meer overblijvende delen wordt gesplitst. Het te snijden segment wordt bepaald door de cursorpositie — beweeg over het deel dat u wilt verwijderen en klik om het te snijden.

## Een entiteit snijden

1. Typ `Inkorten` in de terminal of klik op de **Trim**-werkbalkknop.
2. **Beweeg over het segment** dat u wilt verwijderen — een preview markeert precies het deel dat wordt gesneden.
3. **Klik** om dat segment te verwijderen.

Het commando blijft actief na elke snede, zodat u kunt doorgaan met bewegen en klikken om meer segmenten te snijden — op dezelfde entiteit of een andere. Druk op **Enter**, **Space** of **Escape** om af te sluiten.

```
  Ervoor:                     Na het snijden van het middelste segment:

  ──────●──────●──────        ──────●          ●──────
      snijpunt  snijpunt       (linkerdeel)  (rechterdeel)
                                 (middelste segment verwijderd)
```

## Hoe het te snijden segment wordt bepaald

Het commando projecteert de cursorpositie op de gehoverde entiteit en zoekt alle snijpunten die deze entiteit heeft met andere entiteiten. Deze snijpunten verdelen de entiteit in segmenten — voor een Line, Arc of open Polyline fungeren de eigen eindpunten van de entiteit als extra vaste grenzen. Een volledige Circle of Ellipse, of een gesloten Polyline (inclusief een Rectangle), heeft geen eigen eindpunten, dus zijn er minstens twee snijpunten nodig voordat er überhaupt gesneden kan worden. Het segment waarvan het interval de projectie van de cursor bevat, wordt gemarkeerd en verwijderd bij een klik.

- **Line, Arc en open Polyline** — het verwijderde segment kan het leidende deel zijn (vóór het eerste snijpunt), een middendeel (tussen twee snijpunten, waardoor de entiteit in tweeën wordt gesplitst), of het achterste deel (na het laatste snijpunt).
- **Circle, Ellipse en gesloten Polyline/Rectangle** — omdat er geen vast begin of einde is, kan alleen de boog tussen twee *snijpunten* worden verwijderd. Bij minder dan twee snijpunten wordt geen preview getoond en klikken doet niets. De rest van de vorm wordt het enige overblijvende deel.

## Wat het snijden oplevert

| Entiteit | Resultaat na snijden |
|--------|------------------------|
| Line | Tot twee kortere Line-entiteiten |
| Arc | Tot twee kortere Arc-entiteiten |
| Circle | Eén [Arc](../arc/)-entiteit — de gesloten vorm van de cirkel verdwijnt, dus het overblijvende deel wordt opgeslagen als boog |
| Ellipse | Eén Ellipse-entiteit met begin- en eindhoek — het overblijvende deel blijft een Ellipse, nu gedeeltelijk |
| Polyline (open) | Tot twee kortere Polyline-entiteiten |
| Polyline (gesloten) / Rectangle | Eén open Polyline-entiteit — de gesloten vorm verdwijnt, dus het overblijvende deel wordt opgeslagen als open |
| Spline | Maximaal twee kortere Spline-objecten — elk stuk is dezelfde curve over een kleiner deel van zichzelf, opgeslagen via controlepunten (de fit-punten van een Fit-spline vervallen); een gesloten spline laat één open stuk over |

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Enter` / `Space` | Sluit trimmodus af |
| `Escape` | Sluit trimmodus af |

## Ondersteunde entiteiten

| Entiteit | Kan worden gesneden? |
|--------|----------------|
| Line | Ja |
| Arc | Ja |
| Circle | Ja — vereist 2 of meer snijpunten |
| Ellipse | Ja — vereist 2 of meer snijpunten |
| Polyline (open) | Ja |
| Polyline (gesloten) / Rectangle | Ja — vereist 2 of meer snijpunten |
| Spline | Ja — een gesloten spline vereist 2 of meer snijpunten; een spline wordt ook geknipt waar hij zichzelf kruist |
| Text, Dimension, Leader | Nee |

De objecten die als **knipgrenzen** worden gebruikt, kunnen Line, Arc, Circle, Ellipse, Polyline of Spline zijn. Text-, Dimension- en Leader-objecten registreren nooit snijpunten en kunnen dus ook geen grenzen zijn.

De **boogsegmenten** van een Polyline (getekend met de Arc-schakelaar, of geïmporteerd) worden precies zo gesneden als de rechte segmenten — beweeg de cursor over het booggedeelte tussen twee snijpunten en klik. De gesneden rand behoudt zijn kromming; alleen de lengte verandert.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Wat het doet | Verwijdert een segment van een entiteit | Rekt een lijneindpunt uit tot een grens |
| Trigger | Beweeg over het te snijden segment | Beweeg bij het eindpunt om te verlengen |
| Resultaat | Entiteit wordt gesplitst of verkort | Lijneindpunt verplaatst naar de grens |
| Ondersteunde entiteiten | Line, Arc, Circle, Ellipse, Polyline, Spline | Line, Arc, Ellipse, Polyline |
