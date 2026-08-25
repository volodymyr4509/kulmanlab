---
title: ClipboardPaste-Befehl — Elemente aus der Systemzwischenablage einfügen
description: Der ClipboardPaste-Befehl liest zuvor von ClipboardCopy geschriebene Elemente aus der Systemzwischenablage und platziert sie an einem gewählten Einfügepunkt, wobei fehlende Layer und Linientypen der Zielzeichnung hinzugefügt werden.
keywords: [CAD Zwischenablage einfügen, Elemente zwischen Zeichnungen einfügen, CAD Objekte einfügen, Strg+V CAD, Einfügen zwischen Tabs, Layer beim Einfügen zusammenführen, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

Der `ClipboardPaste`-Befehl liest Elemente, die [ClipboardCopy](../clipboard-copy/) in die **Systemzwischenablage** geschrieben hat, und platziert sie an einem von Ihnen gewählten Punkt in der aktuellen Zeichnung. Da es die echte Systemzwischenablage ist, kann die Quelle eine andere Zeichnung, ein anderer Browser-Tab oder eine Sitzung von früher am Tag sein.

## So wird eingefügt

1. `Strg+V` drücken (`Cmd+V` unter macOS) oder `ClipboardPaste` im Terminal eingeben.
2. Die Eingabeaufforderung lautet **reading clipboard…**, während der Browser den Zwischenablage-Text übergibt.
3. Nach dem Laden wechselt sie zu **pick insertion point**, und eine Vorschau der eingefügten Geometrie folgt Ihrem Mauszeiger.
4. **Klicken**, um die Elemente zu platzieren. Sie werden der Zeichnung hinzugefügt und bleiben ausgewählt.

Die Vorschau ist am **Referenzpunkt** der Kopie verankert — der linken unteren Ecke der kombinierten Ausdehnung der ursprünglichen Auswahl. Diese Ecke liegt unter Ihrem Mauszeiger, sodass die relative Anordnung der kopierten Elemente exakt erhalten bleibt.

## Was beim Einfügen passiert

| Schritt | Verhalten |
|---------|-----------|
| **Neue Identitäten** | Jedes eingefügte Element erhält eine frische ID, sodass zweimaliges Einfügen zwei unabhängige Sätze ergibt |
| **Verschiebung** | Elemente werden um Mauszeiger − Referenzpunkt versetzt |
| **Layer-Zusammenführung** | Jeder referenzierte Layer, der in der Zielzeichnung fehlt, wird per Name hinzugefügt |
| **Linientyp-Zusammenführung** | Jeder referenzierte Linientyp, der in der Zielzeichnung fehlt, wird per Name hinzugefügt |
| **Auswahl** | Die vorherige Auswahl wird gelöscht und die eingefügten Elemente werden zur Auswahl |

### Zusammenführen von Layern und Linientypen

Fehlende Tabelleneinträge werden hinzugefügt; **vorhandene bleiben unangetastet**. Trägt die Zwischenablage einen Layer namens `WALLS` in Rot und die Zielzeichnung hat bereits einen Layer `WALLS` in Blau, gewinnt die Definition des Ziels und die eingefügten Elemente schließen sich ihr an — sie werden blau. Beim Einfügen wird nichts in der Zielzeichnung neu definiert.

Das ist wichtig beim Kopieren zwischen Zeichnungen mit unterschiedlichen Layer-Konventionen: Prüfen Sie nach einem zeichnungsübergreifenden Einfügen den [Layer Manager](../layer-manager/), falls die Farben nicht Ihren Erwartungen entsprechen.

## Wenn die Zwischenablage nichts zum Einfügen enthält

ClipboardPaste akzeptiert nur Nutzlasten, die ClipboardCopy erzeugt hat. Alles andere in der Zwischenablage — reiner Text, eine URL, ein Bild, JSON aus einer anderen Anwendung — wird abgelehnt und das Terminal meldet:

```
Clipboard has no copied entities
```

Verweigert der Browser den Zugriff auf die Zwischenablage vollständig, lautet die Meldung stattdessen **Clipboard access denied**. Beide beenden den Befehl, ohne die Zeichnung zu verändern.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `Strg+V` / `Cmd+V` | ClipboardPaste aktivieren |
| `Escape` | Abbrechen — die Elemente werden verworfen und nichts wird hinzugefügt |

Das Abbrechen während der Lesephase ist unbedenklich: Wenn die Zwischenablage erst antwortet, nachdem Sie bereits abgebrochen oder einen anderen Befehl gestartet haben, wird das späte Ergebnis verworfen, statt das inzwischen Aktive zu stören.

## Kopieren zwischen Tabs

Der typische zeichnungsübergreifende Arbeitsablauf:

1. Quellzeichnung öffnen, Geometrie auswählen, `Strg+C` drücken.
2. Zum anderen Tab wechseln — oder einen zweiten Tab der App öffnen und eine andere Datei laden.
3. `Strg+V` drücken und einen Einfügepunkt anklicken.

Beide Tabs haben denselben Ursprung und teilen sich die Systemzwischenablage, sodass nichts hochgeladen wird und kein Server beteiligt ist. Die Nutzlast bleibt die ganze Zeit JSON-Text in Ihrer eigenen Zwischenablage.

## Unterstützte Elemente

Jeden Elementtyp, den ClipboardCopy schreiben kann, kann ClipboardPaste zurücklesen — mit derselben Serialisierung, die auch das native `.json`-Format verwendet.

## Siehe auch

- [ClipboardCopy](../clipboard-copy/) — die Auswahl in die Zwischenablage schreiben
- [Copy](../copy/) — Elemente innerhalb der aktuellen Zeichnung duplizieren
- [Layer Manager](../layer-manager/) — die durch ein Einfügen hinzugekommenen Layer prüfen
