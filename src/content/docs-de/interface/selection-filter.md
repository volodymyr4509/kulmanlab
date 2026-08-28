---
title: Auswahlfilter — Eine Mehrfachauswahl nach Eigenschaft eingrenzen
description: Sind viele Elemente ausgewählt, öffnet ein Filtersymbol in der Kopfzeile des Eigenschaftenfensters ein Popup mit dynamischen Checklisten für Typ, Layer, Farbe, Linienstärke und Linientyp, gebildet aus dem, was tatsächlich in der Auswahl steckt — so lässt sich eine große gemischte Auswahl vor der Sammelbearbeitung eingrenzen.
keywords: [Auswahlfilter, Auswahl filtern CAD, facettierter Filter, Auswahl eingrenzen, Sammelbearbeitung CAD, Filter im Eigenschaftenfenster, kulmanlab]
group: interface
order: 7
---

# Auswahlfilter

Werden mehrere Elemente auf einmal ausgewählt, öffnet sich das Eigenschaftenfenster in seiner Mehrfachauswahl-Ansicht („Selection (N)"). Ein **Filtersymbol** neben der Schließen-Schaltfläche erlaubt es, diese Auswahl vor der Sammelbearbeitung nach Eigenschaften einzugrenzen.

## Den Filter öffnen

1. Wählen Sie mehrere Elemente aus — ziehen Sie einen Auswahlrahmen, klicken Sie mit Shift oder drücken Sie Strg+A.
2. Klicken Sie auf das **Filtersymbol** (Trichter) in der Kopfzeile des Eigenschaftenfensters.
3. Unterhalb der Schaltfläche öffnet sich ein Popup mit einer Checkliste für jede Eigenschaft, die innerhalb der Auswahl tatsächlich variiert.

## Facetten

Das Popup kann bis zu fünf Facetten zeigen, jede live aus der aktuellen Auswahl gebildet:

| Facette | Angezeigte Werte |
|---------|------------------|
| **Typ** | Name des Elementtyps (Line, Circle, Hatch, …) |
| **Layer** | Layername, mit einem Farbfeld passend zu diesem Layer |
| **Farbe** | ACI-Farbindex |
| **Linienstärke** | Wert der Linienstärke |
| **Linientyp** | Name des Linientyps |

Eine Facette erscheint nur, wenn die Auswahl dafür tatsächlich mehr als einen unterschiedlichen Wert enthält — wählt man zehn Linien aus, die alle auf demselben Layer liegen, erscheint keine Layer-Facette, da ein Anhaken dort nichts eingrenzen könnte. Elemente, die eine bestimmte Eigenschaft gar nicht besitzen (Hatch und Text haben zum Beispiel weder Linienstärke noch Linientyp), zählen für diese Facette einfach nicht mit — sie werden dadurch aber auch nie ausgeschlossen.

## Die Auswahl eingrenzen

Haken Sie in einer beliebigen Facette einen oder mehrere Werte an, um die Auswahl auf Elemente einzugrenzen, die **allen** angehakten Facetten entsprechen (ein Element muss in *jeder* von Ihnen berührten Facette mindestens einen angehakten Wert treffen, nicht nur in einer). Die Kontrollkästchen und Zähler jeder Facette spiegeln wider, worauf die *anderen* angehakten Facetten bereits eingegrenzt haben, sodass eine Facette ihre eigenen bereits angehakten Optionen nie ausblendet — das übliche Verhalten facettierter Suche.

Die Ergebniszahl aktualisiert sich live beim An- und Abhaken, und die Auswahl auf der Zeichenfläche selbst wird mit eingegrenzt — das ist kein reiner Anzeigefilter: Die nicht mehr passenden Elemente werden tatsächlich abgewählt, sodass Sie genau die herausgefilterte Teilmenge sammelbearbeiten können.

## Filter zurücksetzen

Verwenden Sie das Zurücksetzen-Element des Popups, um alle Häkchen zu entfernen und zur vollständigen ursprünglichen Auswahl zurückzukehren, oder schließen Sie das Popup (es öffnet sich beim nächsten Klick auf das Filtersymbol mit einer frischen Ausgangslage für die neue Auswahl).

## Verwandt

- [Match Properties](../../commands/match-properties/) — Eigenschaften von einem Element auf andere übertragen, sobald Sie eingegrenzt haben, welche das sind
- [LayerIsolate](../../commands/layer-isolate/) — eine layerweite Alternative, wenn Sie allein nach Layer isolieren wollen, unabhängig von der aktuellen Auswahl
