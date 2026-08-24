---
title: ChangePrintArea — Druckbereich auf ein Rechteck zuschneiden
description: Der Befehl ChangePrintArea wählt zwei gegenüberliegende Ecken auf der Zeichenfläche, um den vom Druck-Manager exportierten Bereich festzulegen. Unterstützt getippte X,Y-Koordinaten und Fangen und merkt sich den Bereich getrennt für Modellbereich und jedes Layout.
keywords: [CAD druckbereich, export zuschneiden CAD, change print area befehl, druck-manager zuschnitt, exportbereich CAD, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

Der Befehl `ChangePrintArea` legt den rechteckigen Bereich fest, den der [Druck-Manager](../print-manager/) exportiert. Er läuft auf der leeren Zeichenfläche bei ausgeblendetem Druck-Manager und nimmt zwei gegenüberliegende Ecken entgegen — dieselben zwei Klicks wie [Rectangle](../rectangle/), sodass getippte Koordinaten und Fangen sich genau so verhalten wie dort.

## Einen Bereich auswählen

1. Geben Sie `ChangePrintArea` im Terminal ein oder klicken Sie in der Seitenleiste des Druck-Managers auf **Change Area**. Der Druck-Manager wird ausgeblendet und die Zeichenfläche wird interaktiv.
2. **Klicken Sie auf die erste Ecke** oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine exakte Koordinate.
3. **Klicken Sie auf die gegenüberliegende Ecke** oder geben Sie erneut `X,Y` ein.

Der Druck-Manager öffnet sich erneut mit dem neuen Bereich in der Vorschau, die sich auf dessen exaktes Seitenverhältnis anpasst.

Ecken fangen wie jeder andere Punkt an Griffen und Schnittpunkten, sodass Sie auf gezeichnete Geometrie statt nach Augenmaß zuschneiden können. Die Reihenfolge der beiden Ecken spielt keine Rolle — gegenüberliegende Ecken ergeben dasselbe Rechteck.

Drücken Sie `Escape` zum Abbrechen. Es wird nichts geschrieben, der Druck-Manager öffnet sich also wieder mit dem Bereich, den er bereits hatte.

## Wo der Bereich gemerkt wird

Die Auswahl wird pro Kontext gespeichert, nicht global:

| Kontext | Speicherplatz |
|---|---|
| Modellbereich | Ein gemeinsamer Platz |
| Jedes Layout | Ein eigener, getrennt gehaltener Platz |

Wird der Druck-Manager im selben Layout — oder im Modellbereich — erneut geöffnet, stellt er dessen letzten Zuschnitt wieder her, statt zurückzusetzen; ein Wechsel zwischen Layouts lässt den Bereich jedes Layouts unberührt.

Dies wird nur im Arbeitsspeicher gehalten. Ein Neuladen der Seite löscht alle gespeicherten Bereiche, und der Druck-Manager fällt auf die untenstehenden Standardwerte zurück.

## Standardbereich

Ist für den aktuellen Kontext nichts gespeichert, öffnet der Druck-Manager mit:

| Kontext | Standard |
|---|---|
| Modellbereich | Der Begrenzungsrahmen aller Objekte — dieselbe Ausdehnung, auf die [Fit](../fit/) zoomt |
| Jedes Layout | Das gesamte Blatt |

## Verwandte Befehle

| Befehl | Funktion |
|---|---|
| [Print Manager](../print-manager/) | Das Exportfenster, für das dieser Bereich gilt |
| [Rectangle](../rectangle/) | Derselbe Zwei-Ecken-Klick, zeichnet aber eine Polylinie |
| [Fit](../fit/) | Zoomt auf die Ausdehnung, die im Modellbereich als Standard dient |
