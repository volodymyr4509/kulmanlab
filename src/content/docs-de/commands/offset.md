---
title: Befehl offset — Parallele Kopien in einem festen Abstand erstellen in KulmanLab CAD
description: Der Befehl offset erstellt eine parallele Kopie einer Linie, eines Kreises, eines Bogens, einer Ellipse oder einer Polylinie in einem eingegebenen Abstand. Der Abstand wird einmal eingegeben und für mehrere Versatze wiederverwendet. Ein Seitenklick bestimmt, in welche Richtung die Kopie erscheint. Fünf Entitätstypen unterstützt.
keywords: [CAD offset Befehl, parallele Kopie CAD, Linie versetzen CAD, Kreis versetzen CAD, Polylinie versetzen CAD, konzentrischer Versatz, kulmanlab]
group: edit
order: 10
---

# Offset

Der Befehl `offset` erstellt eine parallele Kopie einer Entität in einem festen senkrechten Abstand. Sie geben den Abstand einmal ein und klicken dann Entitäten an und wählen eine Seite — der Befehl bleibt auf demselben Abstand bereit, sodass Sie in einer Sitzung mehrere Objekte versetzen können.

Unterstützte Entitätstypen: **Linie, Kreis, Bogen, Ellipse, Polylinie** (einschließlich Rechtecke).

## Offset verwenden

1. Geben Sie `offset` im Terminal ein oder klicken Sie auf die Schaltfläche **Offset** in der Symbolleiste.
2. **Geben Sie den Versatzabstand ein** und drücken Sie **Enter** oder **Space**.
3. **Klicken Sie auf eine Entität** zum Versetzen — wenn die Entität kein unterstützter Typ ist, erscheint eine Fehlermeldung und Sie können eine andere Entität anklicken.
4. **Bewegen Sie den Cursor** auf die Seite, wo die Kopie erscheinen soll — eine Live-Vorschau folgt.
5. **Klicken**, um die versetzte Kopie zu platzieren.

Nach jeder Platzierung kehrt der Befehl zu Schritt 3 beim **gleichen Abstand** zurück und ist bereit für den nächsten Versatz. Drücken Sie **Escape**, um auf den Abstand-Eingabeschritt zurückzusetzen.

```
  Abstand: 10

  ─────────────────    ← Originallinie
  ─────────────────    ← versetzte Kopie (10 Einheiten darunter)
```

## Versatzverhalten je Entität

| Entität | Berechnung des Versatzes |
|---------|--------------------------|
| **Linie** | Parallele Linie senkrecht zur ursprünglichen Richtung verschoben |
| **Kreis** | Konzentrischer Kreis; außen klicken → größerer Radius, innen → kleinerer Radius |
| **Bogen** | Konzentrischer Bogen mit neuem Radius; gleiche Winkelspanne erhalten |
| **Ellipse** | Beide Halbachsen um denselben Abstand vergrößert oder verkleinert |
| **Polylinie** | Jedes Segment unabhängig versetzt; benachbarte Versatzsegmente werden an Ecken auf Gehrung geschnitten |

Bei **Kreis**, **Bogen** und **Ellipse**: Wenn der einwärtige Versatz einen Radius oder eine Halbachse auf null oder darunter reduzieren würde, wird der Versatz nicht angewendet.

## Tastaturkürzel

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Ziffer zum Abstandswert anhängen |
| `Backspace` | Letztes getipptes Zeichen löschen |
| `Enter` / `Space` | Getippten Abstand bestätigen und zur Entitätsauswahl wechseln |
| `Escape` | Auf Abstand-Eingabeschritt zurücksetzen |

## Hinweis zum Arbeitsablauf

Der Abstand bleibt gesetzt, bis Sie **Escape** drücken. Dies macht es effizient, viele Entitäten im gleichen Abstand zu versetzen — geben Sie den Abstand einmal ein, klicken Sie dann auf jede Entität und wählen Sie die Seite.

## offset vs. copy

| | offset | copy |
|---|--------|------|
| Verschiebung | Senkrecht zur Geometrie der Entität | Beliebiger Vektor (Basis → Ziel) |
| Unterstützte Entitäten | Linie, Kreis, Bogen, Ellipse, Polylinie | Alle Entitätstypen |
| Abstandseingabe | Vor der Auswahl der Entität getippt | Getippt oder geklickt nach der Auswahl |
| Am besten für | Parallele Linien, konzentrische Kreise, einwärtige/auswärtige Pfade | Duplikate an beliebigen Positionen platzieren |
