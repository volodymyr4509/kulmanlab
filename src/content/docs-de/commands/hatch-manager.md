---
title: Hatch Manager-Befehl — .pat-Muster durchsuchen und hochladen
description: Der Hatch Manager-Befehl öffnet einen Dialog zum Durchsuchen von Hatch-Mustern mit einer Live-Vorschau und zum Hochladen eigener .pat-Musterdateien. Hochgeladene Dateien werden im Browser gespeichert und überlagern eingebaute Muster mit demselben Namen.
keywords: [hatch manager, benutzerdefiniertes hatch-muster CAD, pat-datei hochladen, acad.pat, hatch-musterbibliothek, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

Der Befehl `Schraffurmanager` öffnet einen Dialog zum Durchsuchen von Hatch-Mustern mit einer Live-Vorschau und zum Hochladen eigener `.pat`-Musterdateien zur Verwendung mit [Hatch](../hatch/).

## Den Hatch Manager öffnen

Geben Sie `Schraffurmanager` im Terminal ein. Dies ist getrennt von der Musterauswahl, die sich öffnet, wenn Sie auf den **Pattern**-Chip eines Hatch klicken — die Auswahl wählt ein Muster für einen einzelnen Hatch, der Hatch Manager ist, wo Sie `.pat`-Dateien hinzufügen oder entfernen.

## Mustergruppen

| Gruppe | Inhalt |
|--------|--------|
| **User** | Muster aus Ihren eigenen hochgeladenen `.pat`-Dateien, untergruppiert danach, aus welcher Datei jedes Muster stammt (wird erst angezeigt, sobald Sie eine hochgeladen haben) |
| **Standard** | `SOLID` plus die eigene Mustertabelle dieser Zeichnung — jede neue Zeichnung startet mit derselben eingebauten Bibliothek, genau wie ihre Layer und Linientypen |

Klicken Sie auf ein beliebiges Muster in der Liste (oder verwenden Sie `↑`/`↓`), um es rechts in der Vorschau anzuzeigen — eine Vorschau, gezeichnet mit demselben Code, mit dem die Zeichenfläche gefüllt wird, sodass sie genau zeigt, was die Zeichnung anzeigen wird, plus Name, Beschreibung und Linienanzahl des Musters.

## Eine benutzerdefinierte Musterdatei hochladen

1. Klicken Sie in der Fußzeile des Dialogs auf **Add .pat File**.
2. Wählen Sie eine `.pat`-Datei — das übliche Hatch-Musterformat. Eine einzelne Datei definiert oft viele benannte Muster auf einmal; alle erscheinen als separate Einträge, gruppiert unter dem Namen dieser Datei.
3. Hochgeladene Dateien werden dauerhaft im Browser (IndexedDB) gespeichert, sortiert nach zuletzt hinzugefügt zuerst, und werden beim nächsten Öffnen von KulmanLab CAD automatisch neu geladen.

Das Hochladen einer Datei, die ein Muster mit demselben Namen wie ein eingebautes definiert, **überlagert** den Standard — dies ist der unterstützte Weg, um Autodesks maßgebliche Musterdefinitionen zu erhalten: Laden Sie eine echte `acad.pat` hoch, und ihre Versionen von ANSI31 und den anderen Standardnamen übernehmen von KulmanLabs eigenen Näherungen.

Wenn eine Zeichnung auf einen Musternamen verweist, der nicht in Ihrer Bibliothek ist — importiert aus einer DXF, die ein Muster aus einer nicht hochgeladenen `acad.pat` verwendet hat — wird der Hatch dennoch gerendert, mit `ANSI31` als Platzhalter, statt auf eine flache, musterlose Füllung zurückzufallen.

## Eine Musterdatei entfernen

Klicken Sie auf das **×** neben einem Dateinamen in der **User**-Gruppe, um sie und jedes von ihr definierte Muster zu entfernen. Jeder Hatch, der bereits eines dieser Muster verwendet, fällt sofort auf `ANSI31` zurück. Eingebaute **Standard**-Muster können nicht entfernt werden.

## Tastaturreferenz

| Taste | Aktion |
|-------|--------|
| `↑` / `↓` | Auswahl in der Musterliste nach oben oder unten bewegen |
| `Escape` | Hatch Manager schließen |

## Verwandte Befehle

- [Hatch](../hatch/) — füllt eine angeklickte Fläche mit dem aktuell ausgewählten Muster
- [Font Manager](../font-manager/) — dasselbe Hochlade-/Durchsuch-Muster, für benutzerdefinierte Schriftarten statt Hatch-Muster
