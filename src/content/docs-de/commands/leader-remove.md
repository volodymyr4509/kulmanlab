---
title: "Leader− — Pfeilspitzen-Arm von Mehrfachführungslinie entfernen"
description: "Der Befehl Leader− entfernt einen Pfeilspitzen-Arm von einer Mehrfachführungslinie mit zwei oder mehr Armen. Fahren Sie mit dem Cursor über den zu entfernenden Arm — der nächstgelegene Arm wird hervorgehoben. Knickpunkt, Text und verbleibende Arme bleiben erhalten."
keywords: [CAD Führungslinie Arm entfernen, leader- Befehl, Pfeil von Führungslinie entfernen, Mehrfachführungslinie Arm löschen, kulmanlab]
group: markup
order: 3
---

# Leader−

Der Befehl `leader-` entfernt einen Pfeilspitzen-Arm von einer vorhandenen Mehrfachführungslinie. Die Textbeschriftung, der Knickpunkt und alle verbleibenden Arme bleiben erhalten — nur der ausgewählte Arm wird gelöscht. Eine Mehrfachführungslinie mit nur einem Arm kann dessen Arm nicht entfernen.

## Einen Arm entfernen

1. Geben Sie `leader-` im Terminal ein.
2. **Klicken Sie auf eine Mehrfachführungslinie** mit zwei oder mehr Armen. Hat die angeklickte Führungslinie nur einen Arm, zeigt das Terminal eine Fehlermeldung an und wartet auf eine gültige Auswahl.
3. **Bewegen Sie den Cursor in die Nähe des Arms**, den Sie entfernen möchten — der nächstgelegene Arm wird mit einer Markierung hervorgehoben.
4. **Klicken**, um diesen Arm zu entfernen.

Der Arm wird entfernt und der Befehl bleibt aktiv — Sie können sofort auf eine andere Führungslinie (oder dieselbe) klicken, um weitere Arme zu entfernen. Drücken Sie **Enter**, **Space** oder **Escape** zum Beenden.

```
  Vorher:                   Nachher:
  ◄── Arm 1                 ◄── Arm 1
       \                          \
        ●──── Knick ──── Text      ●──── Knick ──── Text
       /
  Arm 2 ──►  ← dieser Arm entfernt
```

## Wie der nächstgelegene Arm bestimmt wird

Der Befehl misst den senkrechten Abstand vom Cursor zu den Liniensegmenten jedes Arms (einschließlich des Segments vom letzten Armpunkt zum Knickpunkt). Der Arm mit dem kleinsten Abstand wird hervorgehoben und beim Klicken entfernt.

## Tastaturkürzel

| Taste | Aktion |
|-------|--------|
| `Enter` / `Space` | Arme entfernen beenden |
| `Escape` | Abbrechen und zurücksetzen |

## Hinweise

- Eine Führungslinie mit **nur einem Arm** ist geschützt — Sie müssen zuerst einen Arm hinzufügen, bevor Sie einen entfernen können.
- Die Knickposition und der Textinhalt bleiben immer erhalten, unabhängig davon, welcher Arm entfernt wird.

## Verwandte Befehle

| Befehl | Funktion |
|--------|----------|
| [Leader](../leader/) | Eine neue Mehrfachführungslinie von Grund auf erstellen |
| [Leader+](../leader-add/) | Einen Arm zu einer vorhandenen Mehrfachführungslinie hinzufügen |
