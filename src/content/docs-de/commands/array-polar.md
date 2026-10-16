---
title: "ArrayPolar-Befehl — Objekte um einen Mittelpunkt kopieren in KulmanLab CAD"
description: "Der Befehl ArrayPolar kopiert die gewählten Objekte um einen Mittelpunkt — eine festgelegte Anzahl von Elementen über einen vollen Umlauf oder einen Teil davon, mit Kopien, die sich beim Umlauf mitdrehen oder ihre eigene Ausrichtung behalten."
keywords: ["CAD polares Array", "Kreismuster CAD", "Objekte um einen Punkt kopieren CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

Der Befehl `ArrayPolar` erstellt Kopien der gewählten Objekte um einen Mittelpunkt, gleichmäßig über einen vollen Umlauf oder einen Teil davon verteilt. Das Original ist das erste Element; jedes weitere ist eine um den Mittelpunkt gedrehte Kopie — oder nur um ihn herum verschoben, wenn Sie Rotate ausschalten.

## Ein polares Array erstellen

1. Wählen Sie die Objekte aus und geben Sie dann `PolareAnordnung` im Terminal ein oder klicken Sie auf die Schaltfläche **Array Polar**. Ohne Auswahl gestartet, fordert der Befehl zuerst zur Auswahl auf — bestätigen Sie mit **Enter** oder **Space**.
2. **Klicken Sie auf den Mittelpunkt**, um den die Kopien laufen, oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine exakte Koordinate.
3. Prüfen Sie das Array. Alle Kopien erscheinen live in der Vorschau, und das Terminal zeigt `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — drücken Sie den Buchstaben einer Option, um sie zu ändern.
4. Drücken Sie **Enter** oder **Space**, um die Kopien zu erstellen. Die Originale bleiben, wo sie sind, und die Auswahl wird aufgehoben.

## Optionen

| Option | Taste | Wirkung |
|---|---|---|
| Items | `I` | Wie viele Elemente es gibt, das Original eingeschlossen — eine ganze Zahl von 2 bis 1024. Beginnt bei 6. |
| Angle | `A` | Grad von einem Element zum nächsten, gegen den Uhrzeigersinn; ein negativer Winkel läuft im Uhrzeigersinn. Bis 180°. |
| Fill | `F` | Grad vom ersten bis zum letzten Element. 360 (Standard) ist ein voller Umlauf; eine kleinere Zahl verteilt die Elemente über einen Teil davon. Negativ läuft im Uhrzeigersinn. Bis 360°. |
| Rotate | `R` | An (Standard): Jede Kopie dreht sich beim Umlauf mit. Aus: Jede Kopie wird an ihren Platz verschoben und zeigt wie das Original. Schaltet sofort um — es gibt keine Zahl einzugeben. |

- Angle und Fill sind zwei Arten, dasselbe auszudrücken; ändert man eines, wird das andere neu formuliert. Über einen vollen Umlauf endet das letzte Element einen Schritt vor dem ersten; über einen Teilumlauf liegt es genau am Füllwinkel.
- Um eine Zahl zu ändern, drücken Sie den Buchstaben ihrer Option. Die Abfrage ist mit dem aktuellen Wert vorbelegt — tippen Sie, um ihn zu ersetzen, und drücken Sie **Enter** oder **Space**; unverändert bestätigt bleibt das Array, wie es war.
- Items nimmt nur ganze Zahlen; Angle und Fill nehmen Dezimalzahlen und ein führendes `-` für den Uhrzeigersinn. Ein Winkel oder eine Füllung von 0 wird abgelehnt, ebenso ein Winkel über 180° oder eine Füllung über 360° — das Terminal nennt den Grund.
- Ein zu kleiner Angle, in den nicht alle Elemente passen, lässt die ohne Platz weg; das Terminal meldet die neue Anzahl.
- Funktioniert mit jedem Entitätstyp: Jede Kopie ist das um den Mittelpunkt gedrehte oder verschobene Original, genau wie [Rotate](../rotate/) und [Move](../move/) es täten.

## Tastaturübersicht

| Taste | Aktion |
|---|---|
| `Enter` / `Space` | Auswahl, Array oder eine eingegebene Zahl bestätigen |
| `I` `A` `F` `R` | Items, Angle oder Fill per Zahleneingabe ändern; Rotate umschalten |
| `0`–`9`, `.`, `-` | Die Zahl eingeben (`.` und `-` nur bei Angle und Fill, `-` zuerst) |
| `Backspace` | Das zuletzt eingegebene Zeichen löschen |
| `Escape` | Abbrechen |
