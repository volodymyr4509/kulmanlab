---
title: HatchAdd — .pat-Schraffurmusterdatei direkt aus dem Terminal hochladen
description: HatchAdd öffnet die Dateiauswahl zum Hochladen einer .pat-Musterdatei, ohne zuvor den Hatch Manager zu öffnen. Alle darin definierten Muster kommen auf einmal hinzu.
keywords: [hatch add befehl, hatchadd befehl, pat datei hochladen terminal, eigenes schraffurmuster CAD, acad.pat, schraffurbibliothek, kulmanlab]
group: style
order: 5
---

# HatchAdd

Der Befehl `HatchAdd` öffnet die Dateiauswahl des Systems zum Hochladen einer `.pat`-Schraffurmusterdatei, ohne zuvor den [Hatch Manager](../hatch-manager/)-Dialog zu öffnen. Es ist derselbe Upload, den die Schaltfläche **Add .pat File** im Hatch Manager auslöst — HatchAdd ist nur ein direkter Weg dorthin über das Terminal.

## Eine Musterdatei hochladen

1. Geben Sie `HatchAdd` im Terminal ein, oder klicken Sie im Fußbereich des [Hatch-Manager](../hatch-manager/)-Dialogs auf **Add .pat File**.
2. Wählen Sie eine `.pat`-Datei in der Systemauswahl. Akzeptiert wird nur das Standardformat für Schraffurmuster.

Der Befehl endet, sobald die Dateiauswahl geöffnet wird — es folgt kein weiterer Klick oder Terminal-Eingabe. Die Muster werden registriert und erscheinen in der Gruppe **User**, sobald die Datei ausgewählt wurde.

## Was beim Hochladen passiert

- **Eine `.pat`-Datei ist ein Behälter, kein einzelnes Muster.** Eine Datei definiert üblicherweise viele benannte Muster, und alle werden gemeinsam hinzugefügt. Darin unterscheidet sich HatchAdd von [FontAdd](../font-add/), wo eine `.ttf` genau eine Schriftart ist.
- **Die Datei selbst wird nicht aufbewahrt.** Sie wird einmal gelesen, in ihre Muster zerlegt, und jedes Muster wird für sich unter seinem eigenen Namen gespeichert. Deshalb lässt sich später ein einzelnes Muster entfernen, ohne die mitgelieferten anzutasten — und deshalb listet die Gruppe **User** die Muster alphabetisch nach Namen statt nach ihrer Herkunftsdatei.
- **Ein Muster, dessen Name einem vorhandenen entspricht, ersetzt dieses.** Das ist der vorgesehene Weg, autoritative Definitionen über KulmanLabs eigene Näherungen zu legen: Laden Sie eine echte `acad.pat` hoch, und deren Fassungen von `ANSI31` und den übrigen Standardnamen übernehmen.
- **Muster werden pro Benutzer gespeichert, nicht pro Zeichnung.** Sie liegen im Browser (IndexedDB), werden beim nächsten Öffnen von KulmanLab CAD automatisch neu geladen und stehen in jeder Zeichnung zur Verfügung.
- **Eine Datei ohne gültige Musterdefinitionen fügt nichts hinzu.** Die Bibliothek bleibt genau so, wie sie war.

## Tastaturkürzel

HatchAdd hat keine eigene Tastaturinteraktion — der gesamte Befehl besteht aus dem nativen Dateiauswahl-Dialog des Browsers. Wird dieser Dialog abgebrochen (oder keine Datei ausgewählt), bleibt die Musterbibliothek unverändert.

## Verwandte Befehle

| Befehl | Funktion |
|--------|----------|
| [Hatch Manager](../hatch-manager/) | Die Musterbibliothek mit Live-Vorschau durchsuchen und hochgeladene Muster entfernen |
| [Hatch](../hatch/) | Füllt einen geschlossenen Bereich mit einem Muster aus der Bibliothek |
| [FontAdd](../font-add/) | Dieselbe Direkt-Upload-Abkürzung für `.ttf`-Schriftarten |
