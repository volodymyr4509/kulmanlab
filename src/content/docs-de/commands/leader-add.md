---
sidebar_position: 12
title: Befehl Leader+ — Einen Pfeilspitzen-Arm zu einer vorhandenen Mehrfachführungslinie hinzufügen in KulmanLab CAD
description: Der Befehl Leader+ fügt einer vorhandenen Mehrfachführungslinie einen neuen Pfeilspitzen-Arm hinzu. Der neue Arm teilt Knickpunkt, Text und alle Stileigenschaften der ausgewählten Führungslinie. Zwei Klicks — Führungslinie auswählen, neue Spitze platzieren.
keywords: [CAD Führungslinie Arm hinzufügen, leader+ Befehl, Pfeil zur Führungslinie hinzufügen, Mehrfachführungslinie Arm, kulmanlab]
---

# Leader+

Der Befehl `leader+` fügt einer vorhandenen Mehrfachführungslinie einen neuen Pfeilspitzen-Arm hinzu. Der neue Arm zeigt vom vorhandenen Knickpunkt der Führungslinie zu einer neuen Pfeilspitze, die Sie anklicken. Alle Stileigenschaften — Knickposition, Text, Pfeilspitzentyp und Größe — werden von der ausgewählten Führungslinie übernommen.

## Einen Arm hinzufügen

1. Geben Sie `leader+` im Terminal ein.
2. **Klicken Sie auf eine vorhandene Mehrfachführungslinie**, um sie auszuwählen.
3. **Klicken Sie auf die neue Pfeilspitze** oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine genaue Koordinate. Eine Vorschaulinie zeigt vom Cursor zum Knickpunkt der Führungslinie.

Der Arm wird platziert und der Befehl bleibt aktiv — Sie können sofort auf eine andere Führungslinie klicken, um weitere Arme hinzuzufügen. Drücken Sie **Enter**, **Space** oder **Escape** zum Beenden.

```
  Vorher:                        Nachher:
  ◄── Arm 1                      ◄── Arm 1
       \                               \
        ●──── Knick ──── Text           ●──── Knick ──── Text
                                       /
                                  Arm 2 ──►  (neue Spitze angeklickt)
```

## Koordinateneingabe für die Spitze

Anstelle eines Klicks können Sie eine genaue Position eingeben:

1. Geben Sie den X-Wert ein.
2. Drücken Sie `,` — das Terminal bestätigt, dass X gesperrt ist.
3. Geben Sie den Y-Wert ein.
4. Drücken Sie **Enter** zum Platzieren.

## Tastaturkürzel

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinate eingeben |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Enter` | Getippte Koordinate bestätigen und Arm platzieren |
| `Enter` / `Space` | Beenden (wenn keine Eingabe läuft) |
| `Escape` | Abbrechen und zurücksetzen |

## Hinweise

- Nur **Mehrfachführungslinie**-Entitäten können ausgewählt werden — das Anklicken anderer Entitätstypen hat keine Wirkung.
- Der neue Arm beginnt am vorhandenen Knickpunkt; Sie wählen nur, wohin die Pfeilspitze zeigt.
- Es gibt keine Begrenzung für die Anzahl der Arme einer Mehrfachführungslinie.

## Verwandte Befehle

| Befehl | Funktion |
|--------|----------|
| [Leader](./leader) | Eine neue Mehrfachführungslinie von Grund auf erstellen |
| [Leader−](./leader-remove) | Einen Arm von einer Mehrfachführungslinie mit zwei oder mehr Armen entfernen |
