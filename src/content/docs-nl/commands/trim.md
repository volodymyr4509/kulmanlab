---
title: Trim-commando — Snijd lijnsegmenten bij snijpunten
description: Het Trim-commando verwijdert het deel van een Line tussen twee aangrenzende snijpunten dichtst bij de cursor. Een rode hoverpreview toont precies welk segment wordt gesneden voordat u klikt. Trim werkt alleen op Line-entiteiten — niet op bogen, cirkels of polylijnen.
keywords: [CAD trim commando, lijn snijden CAD, lijn snijpunt afsnijden, hover trim preview, alleen lijn trim, kulmanlab]
group: edit
order: 8
---

# Trim

Het `trim`-commando verwijdert het deel van een [Line](../line/) dat tussen twee aangrenzende snijpunten ligt, waardoor de lijn in één of twee kortere segmenten wordt gesplitst. Het te snijden segment wordt bepaald door de cursorpositie — beweeg over het deel dat u wilt verwijderen en klik om het te snijden.

Trim werkt **alleen op Line-entiteiten**. Gebruik voor bogen, cirkels, polylijnen en andere entiteitstypen [Delete](../delete/) of grip-bewerking.

## Een lijn snijden

1. Typ `trim` in de terminal of klik op de **Trim**-werkbalkknop.
2. **Beweeg over het lijnsegment** dat u wilt verwijderen — een rode preview markeert precies het deel dat wordt gesneden.
3. **Klik** om dat segment te verwijderen.

Het commando blijft actief na elke snede, zodat u kunt doorgaan met bewegen en klikken om meer segmenten te snijden. Druk op **Escape** om af te sluiten.

```
  Ervoor:                     Na het snijden van het middelste segment:

  ──────●──────●──────        ──────●          ●──────
      snijpunt  snijpunt       (linkerdeel)  (rechterdeel)
                                 (middelste segment verwijderd)
```

## Hoe het te snijden segment wordt bepaald

Het commando projecteert de cursorpositie op de gehoverde lijn en zoekt alle snijpunten die de lijn heeft met andere entiteiten. Deze snijpuntparameters verdelen de lijn in segmenten. Het segment waarvan het interval de projectie van de cursor bevat, wordt gemarkeerd en verwijderd bij een klik.

- Als de cursor zich **vóór het eerste snijpunt** bevindt: dat leidende deel van de lijn wordt verwijderd.
- Als de cursor zich **tussen twee snijpunten** bevindt: dat middendeel wordt verwijderd; de lijn wordt in tweeën gesplitst.
- Als de cursor zich **na het laatste snijpunt** bevindt: dat achterste deel wordt verwijderd.
- Als de lijn **geen snijpunten** heeft met andere entiteiten: er wordt geen preview getoond en klikken doet niets.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Escape` | Sluit trimmodus af |

## Ondersteunde entiteiten

| Entiteit | Kan worden gesneden? |
|--------|----------------|
| Line | Ja |
| Arc, Circle, Ellipse | Nee |
| Polyline / Rectangle | Nee |
| Text, Spline, Dimension, Leader | Nee |

De entiteiten die als **snijgrenzen** worden gebruikt, kunnen elk type zijn — alleen de te snijden lijn moet een Line-entiteit zijn.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Wat het doet | Verwijdert een segment van een lijn | Rekt een lijneindpunt uit tot een grens |
| Trigger | Beweeg over het te snijden segment | Beweeg bij het eindpunt om te verlengen |
| Resultaat | Lijn wordt gesplitst of verkort | Lijneindpunt verplaatst naar de grens |
| Beide | Alleen lijnen | Alleen lijnen |
