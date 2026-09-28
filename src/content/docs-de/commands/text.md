---
title: Text-Befehl — MTEXT-Beschriftungen in KulmanLab CAD platzieren
description: Der Text-Befehl platziert eine mehrzeilige, reich formatierte MTEXT-Beschriftung. Klicken Sie eine Position an, tippen Sie im Popup-Editor und drücken Sie Escape zum Bestätigen. Doppelklicken Sie eine vorhandene Beschriftung, um den Editor erneut zu öffnen.
keywords: [CAD Text-Befehl, MTEXT, Textbeschriftung platzieren CAD, Textanmerkung CAD, fett kursiv CAD, mehrzeiliger Text CAD, kulmanlab]
group: markup
order: 0
---

# Text

Der `Text`-Befehl platziert eine mehrzeilige Textbeschriftung. Nachdem Sie eine Position auf der Zeichenfläche angeklickt haben, öffnet sich ein Popup-Editor im **rich** mode — Sie können Inhalt eingeben, Fett/Kursiv/Unterstrichen/Durchgestrichen zeichenweise anwenden, Schriftarten und -höhen ändern und Zeilenumbrüche einfügen. Drücken Sie **Escape**, um zu bestätigen und den Editor zu schließen.

Auf der Seite [Texteditor](../../interface/text-editor/) finden Sie die vollständige Editor-Referenz, einschließlich eines Vergleichs von **rich** und **simple** mode.

## Eine Textbeschriftung platzieren

1. Geben Sie `Text` im Terminal ein oder klicken Sie auf die **Text**-Schaltfläche in der Werkzeugleiste.
2. **Klicken Sie die Ankerposition** auf der Zeichenfläche. Oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine exakte Koordinate.
3. Das **Texteditor-Popup** öffnet sich über der neuen Beschriftung. Geben Sie Ihren Inhalt ein.
4. Drücken Sie **Escape**, um die Beschriftung zu bestätigen und den Editor zu schließen.

Neuer Text übernimmt Schrift, Höhe, Fett, Kursiv, Zeilenabstand, horizontale Ausrichtung und Rahmen aus dem aktuellen [Textstil](../text-style/). Der integrierte Stil `Standard` verwendet eine Höhe von **1 Zeichnungseinheit** und Linksausrichtung.

## Eine vorhandene Beschriftung bearbeiten

**Doppelklicken** Sie eine beliebige Textbeschriftung auf der Zeichenfläche, um den Editor für diese Beschriftung erneut zu öffnen.

## Koordinateneingabe für den Anker

Statt zu klicken, geben Sie eine exakte Position ein:

1. Geben Sie den X-Wert ein.
2. Drücken Sie `,` — das Terminal zeigt `[X], [Y{Cursor}]`.
3. Geben Sie den Y-Wert ein.
4. Drücken Sie **Enter**, um den Anker zu platzieren und den Editor zu öffnen.

## Tastaturübersicht

**Ankerphase**

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Backspace` | Letztes eingegebenes Zeichen löschen |
| `Enter` | Eingegebene Koordinate bestätigen |

**Texteditor-Phase** (vollständige Referenz unter [Texteditor](../../interface/text-editor/))

| Taste | Aktion |
|-------|--------|
| Beliebiges druckbares Zeichen | Am Cursor einfügen |
| `Backspace` / `Delete` | Angrenzendes Zeichen oder Auswahl löschen |
| `Enter` | Zeilenumbruch einfügen |
| `←` / `→` | Cursor bewegen |
| `Home` / `End` | Zum Anfang / Ende der harten Zeile springen |
| `Escape` | Bestätigen und Editor schließen |

## Griffpunkt-Bearbeitung — Neupositionierung

Eine ausgewählte Textbeschriftung zeigt einen Griffpunkt am Ankerpunkt:

| Griffpunkt | Position | Funktion |
|------------|----------|----------|
| **Anker** | Unten-links des Textes | Ziehen zum Neupositionieren der Beschriftung |

## Text auswählen

| Methode | Verhalten |
|---------|-----------|
| **Klick** | Wählt aus, wenn der Klick innerhalb des rotierten Begrenzungsrahmens des Textes landet |
| **Nach rechts ziehen** (streng) | Alle vier Ecken des Begrenzungsrahmens müssen innerhalb des Auswahlbereichs liegen |
| **Nach links ziehen** (schneidend) | Jede Überschneidung zwischen dem Text-Begrenzungsrahmen und dem Auswahlbereich wählt ihn aus |

## Unterstützte Bearbeitungsbefehle

| Befehl | Auswirkung auf den Text |
|--------|------------------------|
| [Move](../move/) | Verschiebt den Ankerpunkt |
| [Copy](../copy/) | Erstellt eine identische Beschriftung an einer neuen Position |
| [Rotate](../rotate/) | Dreht die Ankerposition und addiert den Winkel zu Rotationsgrad |
| [Mirror](../mirror/) | Spiegelt den Ankerpunkt an der Spiegelachse (die Textzeichenkette wird nicht umgekehrt) |
| [Scale](../scale/) | Skaliert die Ankerposition und multipliziert die Höhe mit dem Skalierungsfaktor |
| [Delete](../delete/) | Entfernt die Beschriftung |

Text unterstützt weder **Offset**, **Trim** noch **Extend**.

## Eigenschaften

Wenn eine Textbeschriftung ausgewählt ist, zeigt das Eigenschaftenpanel:

**Allgemein**

| Eigenschaft | Standard | Bedeutung |
|-------------|----------|-----------|
| Farbe | 256 (ByLayer) | ACI-Farbindex |
| Layer | `0` | Layer-Zuweisung |

**Geometrie**

| Eigenschaft | Bedeutung |
|-------------|-----------|
| Position X / Position Y | Ankerpunktkoordinaten |
| Höhe | Grundhöhe des Textes in Zeichnungseinheiten; wird beim Erstellen aus dem aktuellen Textstil übernommen |
| Rotationsgrad | Gegen-Uhrzeigersinn-Rotation in Grad |

**Eigenschaften**

| Eigenschaft | Bedeutung |
|-------------|-----------|
| Inhalt | Die Textzeichenkette (MTEXT-Inline-Codes erhalten) |
| Einfügepunkt | Ausrichtungscode (1 = oben-links … 9 = unten-rechts) |

Text hat keine Linientyp-, Linientyp-Skalierungs- oder Stärke-Eigenschaften.

Unter **Eigenschaften** stehen außerdem horizontale Ausrichtung, Referenzbreite, Zeilenabstand und Rahmen zur Verfügung.

## DXF — MTEXT-Entität

Textbeschriftungen werden als **MTEXT** gespeichert. Fett und Kursiv verwenden `\f`, Unterstreichen `\L`/`\l`, Durchstreichen `\K`/`\k` und zeichenweise Höhen `\H`. Referenzbreite, Zeilenabstand, Absatzausrichtung, Drehung und Anheftung werden ebenfalls rundgeführt. Ein Textrahmen wird mit dem MTEXT-Rahmenflag und einem AutoCAD-kompatiblen Randmaßstab exportiert. Siehe auch [Textstil](../text-style/) und [Schriftartenmanager](../font-manager/).
