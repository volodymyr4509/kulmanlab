---
title: FontAdd — TTF-Schriftart direkt aus dem Terminal hochladen
description: Der Befehl FontAdd öffnet die Dateiauswahl des Systems zum Hochladen einer .ttf-Schriftart, ohne zuvor den Font-Manager-Dialog zu öffnen. Es ist derselbe Upload, den die Schaltfläche „Add Font" im Font Manager auslöst, hier als eigener Terminal-Befehl.
keywords: [font add befehl, fontadd befehl, ttf hochladen terminal, benutzerdefinierte schriftart CAD, kulmanlab]
group: style
order: 3
---

# FontAdd

Der Befehl `SchriftartHinzufügen` öffnet die Dateiauswahl des Systems zum Hochladen einer eigenen `.ttf`-Schriftart, ohne zuvor den [Font Manager](../font-manager/)-Dialog zu öffnen. Es ist derselbe Upload, den die Schaltfläche **Add Font** im Font Manager auslöst — FontAdd ist nur ein direkter Weg dorthin über das Terminal.

## Eine Schriftart hochladen

1. Geben Sie `SchriftartHinzufügen` im Terminal ein, oder klicken Sie im Fußbereich des [Font-Manager](../font-manager/)-Dialogs auf **Add Font**.
2. Wählen Sie eine `.ttf`-Datei in der Systemauswahl. Es werden nur TrueType-Schriftarten unterstützt — `.otf` sowie `.woff`/`.woff2` nicht.

Der Befehl endet, sobald die Dateiauswahl geöffnet wird — es folgt kein weiterer Klick oder Terminal-Eingabe. Die Schriftart wird registriert und erscheint in der Gruppe **User**, sobald die Datei ausgewählt wurde.

## Was beim Hochladen passiert

- Der Dateiname (ohne Erweiterung) wird zum Namen der Schriftart. Das Hochladen von `MyFont.ttf` fügt eine Schriftart namens `MyFont` hinzu.
- Das Hochladen einer Datei, deren Name mit einer vorhandenen eigenen Schriftart übereinstimmt, **ersetzt** diese.
- Die Schriftart wird dauerhaft im Browser (IndexedDB) gespeichert und beim nächsten Öffnen von KulmanLab CAD automatisch neu geladen — sie ist nicht an die aktuelle Zeichnung gebunden.

## Tastaturkürzel

FontAdd hat keine eigene Tastaturinteraktion — der gesamte Befehl besteht aus dem nativen Dateiauswahl-Dialog des Browsers. Wird dieser Dialog abgebrochen (oder keine Datei ausgewählt), bleibt die Schriftartliste unverändert.

## Verwandte Befehle

| Befehl | Funktion |
|--------|----------|
| [Font Manager](../font-manager/) | Schriftarten durchsuchen, vorschauen, auswählen und entfernen, einschließlich eigener Uploads |
| [Text](../text/) | Platziert die Textbeschriftungen, auf die Schriftartauswahl angewendet wird |
