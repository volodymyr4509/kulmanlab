---
title: ViewportRectangle-Befehl — Einen Viewport in einem Layout in KulmanLab CAD erstellen
description: Der ViewportRectangle-Befehl erstellt einen Viewport in einem Papier-Layout durch Auswahl zweier gegenüberliegender Ecken. Der Viewport zeigt die Modellraum-Entitäten im Standard-Maßstab des Layouts.
keywords: [Viewport-Rechteck, Viewport erstellen, Layout-Viewport, Papierraum-Viewport, kulmanlab]
group: layouts
order: 1
---

# ViewportRectangle

Der `ViewportRectangle`-Befehl erstellt einen neuen Viewport im aktiven Papier-Layout durch Auswahl zweier gegenüberliegender Ecken. Nur im Layout-Raum verfügbar.

## Einen Viewport erstellen

1. Wechseln Sie über den Tab am unteren Bildschirmrand zu einem Papier-Layout.
2. Geben Sie `ViewportRectangle` im Terminal ein oder klicken Sie auf die **Viewport Rectangle**-Schaltfläche in der Werkzeugleiste.
3. **Klicken Sie die erste Ecke** an, oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine exakte Koordinate.
4. **Klicken Sie die gegenüberliegende Ecke** — der Viewport wird sofort platziert. Koordinateneingabe funktioniert hier ebenfalls.

Der neue Viewport zeigt das gesamte Modell im Standard-Maßstab des Layouts. Verwenden Sie das Scrollrad innerhalb des Viewports zum Zoomen oder ziehen Sie mit der mittleren Maustaste, um die Modellansicht zu verschieben.

## Koordinateneingabe

Bei jedem Eckenschritt können Sie eine exakte Koordinate eingeben:

1. Geben Sie den X-Wert ein.
2. Drücken Sie `,` — das Terminal zeigt `[X], [Y{Cursor}]`.
3. Geben Sie den Y-Wert ein.
4. Drücken Sie **Enter**, um den Punkt zu platzieren.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Enter` | Eingegebene Koordinate bestätigen |
| `Escape` | Abbrechen |

## Einen Viewport bearbeiten

Nachdem Sie einen Viewport platziert haben, klicken Sie ihn an, um ihn auszuwählen:

- **Kanten oder Ecken ziehen**, um die Größe zu ändern.
- **Mittelpunkt-Griffpunkt ziehen**, um ihn zu verschieben.
- Den **Maßstab-Selektor** in der Steuerleiste verwenden, um einen exakten Maßstab festzulegen (z. B. 1:50). Um einen nicht in der Liste vorhandenen Maßstab einzugeben, geben Sie ihn direkt im Eingabefeld am unteren Rand des Dropdowns ein — akzeptiert Verhältnisformat (`1:200`, `5:1`) oder eine einfache Dezimalzahl (`0.005`), dann **Enter** drücken.
- Rechtsklick auf einen Viewport und **Sperren** verwenden, um versehentliche Änderungen zu verhindern.

## Hinweise

- ViewportRectangle ist nur verfügbar, wenn ein Papier-Layout-Tab aktiv ist. Das Ausführen im Modellraum zeigt eine Fehlermeldung und beendet den Befehl.
- Um einen vorhandenen Viewport zu kopieren, verwenden Sie [ViewportCopy](../viewport-copy/).
