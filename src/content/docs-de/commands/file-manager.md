---
title: File Manager — Miniaturraster, Umbenennen & Löschen
description: Der File-Manager-Befehl öffnet ein Raster mit Miniaturansichten aller gespeicherten Zeichnungen — klicken Sie auf eine Miniaturansicht, um sie zu öffnen, direkt umzubenennen oder mit Bestätigung zu löschen.
keywords: [File Manager CAD, zuletzt verwendete Dateien CAD, Zeichnung umbenennen, Zeichnung löschen, Miniaturraster CAD, Zeichnung wiederherstellen, DXF erneut öffnen, Browser-Speicher CAD, KulmanLab Dateien, gespeicherte Zeichnungen, IndexedDB CAD, CAD-Zeichnung sichern]
group: file
order: 3
---

# File Manager

Der Befehl `Dateimanager` öffnet ein **Miniaturraster** aller Zeichnungen, die im lokalen Speicher Ihres Browsers gespeichert wurden, sortiert nach dem Zeitpunkt der letzten Speicherung. Verwenden Sie ihn, um eine frühere Zeichnung erneut zu öffnen, umzubenennen oder zu löschen.

## Den File Manager öffnen

- Geben Sie `Dateimanager` im Terminal ein, **oder**
- Klicken Sie auf die Schaltfläche **File Manager** (Verlaufssymbol) in der Symbolleiste im Datei-Panel oben auf dem Bildschirm.

Das Panel öffnet sich auf der linken Seite der Zeichenfläche und schließt sich automatisch, sobald Sie einen anderen Befehl starten oder eine Datei [importieren](../import/) — sodass es nie über einer Zeichnung stehen bleibt, die es noch nicht auflistet. Es öffnet sich jedes Mal mit einer aktuellen Liste erneut.

## Das Miniaturraster

Jede gespeicherte Zeichnung ist eine Karte mit einer live gerenderten Miniaturansicht, ihrem Namen und dem Zeitpunkt der letzten Aktualisierung. Miniaturansichten werden jedes Mal neu erzeugt, wenn das Panel geöffnet wird — nichts wird vorab gerendert oder gespeichert — daher zeigt eine Karte kurz ein Platzhaltersymbol, während ihre Miniaturansicht gezeichnet wird. Derselbe Platzhalter erscheint auch, wenn die Erzeugung fehlschlägt oder die Zeichnung tatsächlich noch keine Entitäten enthält.

| Aktion | Ausführung |
|--------|------------|
| Zeichnung **öffnen** | Auf die Miniaturansicht klicken — ersetzt den aktuellen Inhalt der Zeichenfläche |
| **Umbenennen** | Auf das Stiftsymbol klicken oder doppelt auf den Namen klicken |
| **Löschen** | Auf das Papierkorbsymbol klicken, dann bestätigen |

Wenn noch keine Dateien gespeichert wurden, zeigt das Panel „No files saved" an. Bei mehr Dateien, als auf einen Bildschirm passen, erscheinen unterhalb des Rasters die Steuerelemente **Page 1 of N**.

Die Karte der Datei, die gerade im Editor geöffnet ist, ist mit einem Ring in der Akzentfarbe markiert und hat **keine Löschschaltfläche** — das Löschen der geöffneten Datei würde ihre gespeicherten Daten entfernen, während die Zeichenfläche sie weiterhin anzeigt, und die nächste Bearbeitung würde sie einfach wieder speichern. Umbenennen ist weiterhin möglich.

## Eine Datei löschen

Ein Klick auf das Papierkorbsymbol löscht nicht sofort — er blendet auf dieser Karte eine Bestätigungsebene ein („Delete this file?" mit den Schaltflächen **Delete** / **Cancel**), da das Löschen dauerhaft ist und nicht rückgängig gemacht werden kann. Ein Klick auf **Cancel**, auf das Papierkorbsymbol einer anderen Karte oder an eine andere Stelle der Karte verwirft die ausstehende Bestätigung, ohne etwas zu löschen.

## Eine Datei umbenennen

Klicken Sie auf das Stiftsymbol (oder doppelklicken Sie auf den Dateinamen), um ihn direkt zu bearbeiten, und drücken Sie dann **Enter** zum Bestätigen oder **Escape** zum Abbrechen. Eine Umbenennung wird abgelehnt, wenn der neue Name:

- leer oder länger als 100 Zeichen ist,
- bereits von einer anderen gespeicherten Datei verwendet wird (ohne Berücksichtigung von Groß-/Kleinschreibung),
- auf einen Punkt endet, oder
- ein unter Windows reservierter Gerätename ist, z. B. `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9` oder `LPT1`–`LPT9`.

Zeichen, die in einem Dateinamen nicht zulässig sind (`\ / : * ? " < > |`), werden während der Eingabe automatisch entfernt. Das Umbenennen ändert nur die Bezeichnung — es beeinflusst nicht die Position der Zeichnung im Raster, da diese nach dem Zeitpunkt der letzten Speicherung sortiert ist, nicht nach dem Namen.

## Sichern Sie Ihre Arbeit — Browser-Speicher ist nicht dauerhaft

KulmanLab speichert Zeichnungen in **IndexedDB**, einer in Ihren Browser eingebauten Datenbank:

- Dateien werden **ausschließlich lokal auf Ihrem Gerät** gespeichert — nichts wird auf einen Server hochgeladen.
- Jeder Browser und jedes Gerät hat seinen eigenen unabhängigen Speicher. Eine in Chrome auf einem Computer gespeicherte Zeichnung erscheint nicht in Firefox oder auf einem anderen Gerät.
- Dieser Speicher **kann ohne Vorwarnung gelöscht werden** — durch das Löschen von Websitedaten oder des Browserverlaufs, bei knappem Speicherplatz, in einem privaten Fenster/Inkognito-Fenster, bei einer Neuinstallation des Browsers oder Betriebssystems, oder beim Wechsel des Geräts. Keiner dieser Fälle gibt Ihnen die Möglichkeit, das Verlorene wiederherzustellen.

**Der einzig verlässliche Weg, eine Zeichnung zu sichern, ist der [Export Manager](../export-manager/)** in Ihren eigenen Speicher. Verwenden Sie nach Möglichkeit `.json` (das native Format von KulmanLab) — es bewahrt jede Entität exakt; verwenden Sie `.dxf`, wenn Sie Kompatibilität mit anderen CAD-Werkzeugen benötigen. Tun Sie dies für alles, dessen Verlust Sie ärgern würde, sowie bevor Sie Browserdaten löschen, den Browser oder das Gerät wechseln oder den Rechner für längere Zeit weglegen.

## Automatisches Laden von Dateien beim Start

Wenn Sie KulmanLab CAD öffnen, lädt die App automatisch die **zuletzt geänderte Datei** aus dem Speicher. Sie müssen sie nicht jedes Mal manuell aus dem File Manager öffnen.

## Speicher verwalten

Es gibt kein festes Limit für die Anzahl der Zeichnungen, die Sie speichern können, aber der Browser-Speicher ist begrenzt. Wenn Sie Speicherwarnungen bemerken, löschen Sie ältere Dateien aus dem File Manager — oder exportieren Sie sie besser zuerst, damit nichts verloren geht.

Um alle gespeicherten Zeichnungen auf einmal zu entfernen, verwenden Sie den Befehl [WipeStorage](../wipestorage/).

## Dateinamen

Neue und importierte Dateien erhalten einen einfachen Namen — ohne eingebetteten Zeitstempel. Ist dieser Name bereits vergeben, wird automatisch ein Suffix im Stil von Finder/Explorer angehängt (`plan (2)`, `plan (3)`, …), damit nichts überschrieben wird. Sie können einer Datei jederzeit im Nachhinein einen klareren Namen geben, indem Sie sie [umbenennen](#eine-datei-umbenennen).

## Verwandte Befehle

- [Import](../import/) — eine Zeichnung von Ihrem Dateisystem in den Browser-Speicher laden
- [Export Manager](../export-manager/) — eine Zeichnung auf Ihr Dateisystem herunterladen
- [New File](../new-file/) — eine leere Zeichnung beginnen (wird ebenfalls automatisch gespeichert)
- [WipeStorage](../wipestorage/) — alle gespeicherten Dateien aus dem Browser-Speicher löschen
