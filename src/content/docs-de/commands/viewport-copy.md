---
title: ViewportCopy-Befehl — Einen Viewport in KulmanLab CAD duplizieren
description: Der ViewportCopy-Befehl dupliziert einen ausgewählten Viewport an eine neue Position im selben Layout und bewahrt dabei Maßstab und Modellansichtseinstellungen. Unterstützt exakte Koordinateneingabe, Winkelsperre und eingetippte Abstands-Eingabe.
keywords: [Viewport kopieren, Viewport duplizieren, Viewport-Layout kopieren, Winkelsperre Viewport, exakte Koordinate Viewport, kulmanlab]
---

# ViewportCopy

Der `ViewportCopy`-Befehl kopiert einen Viewport an eine neue Position und bewahrt dabei seinen Maßstab und Modellmittelpunkt. Nur im Layout-Raum verfügbar.

## Einen Viewport kopieren

1. Wechseln Sie zu einem Papier-Layout-Tab.
2. Klicken Sie optional auf einen Viewport, um ihn vorher auszuwählen.
3. Geben Sie `ViewportCopy` im Terminal ein oder klicken Sie auf die **Viewport Copy**-Schaltfläche in der Werkzeugleiste.
4. Wenn kein Viewport vorausgewählt war, **klicken Sie den zu kopierenden Viewport** an.
5. **Klicken Sie den Basispunkt** — die Referenz für den Versatz. Oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine exakte Koordinate.
6. **Klicken Sie das Ziel** — der Viewport wird am Basis→Ziel-Versatz platziert. Oder verwenden Sie Koordinateneingabe / Winkelsperre.

Nach dem Platzieren bleibt der Befehl aktiv — klicken Sie ein weiteres Ziel, um eine weitere Kopie desselben Viewports zu platzieren. Drücken Sie **Enter**, **Space** oder **Escape** zum Fertigstellen.

## Koordinateneingabe

Bei den Basispunkt- und Zielschritten können Sie statt zu klicken eine exakte Koordinate eingeben:

1. Geben Sie den X-Wert ein.
2. Drücken Sie `,` — das Terminal zeigt `[X], [Y{Cursor}]`.
3. Geben Sie den Y-Wert ein.
4. Drücken Sie **Enter** zum Bestätigen.

## Winkelsperre und exakter Abstand

Nachdem der Basispunkt gesetzt wurde, rastet der Befehl an 45°-Achsen (0°, 45°, 90°, 135°, …) ein, wenn der Cursor ausgerichtet ist. Während der Sperre:

- Die Vorschau rastet an der Achse ein.
- Geben Sie einen Abstand ein und drücken Sie **Enter**, um die Kopie exakt in diesem Versatz entlang der gesperrten Richtung zu platzieren.

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Ziffer zum Abstandswert hinzufügen |
| `-` | Negativer Abstand (kehrt Richtung um; nur als erstes Zeichen) |
| `Backspace` | Letztes eingegebenes Zeichen löschen |
| `Enter` | Kopie im eingetippten Abstand platzieren |

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten oder Abstand bei Winkelsperre |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Enter` | Eingegebene Koordinate oder Abstand bestätigen |
| `Enter` / `Space` | Fertigstellen (wenn keine Eingabe aktiv ist) |
| `Escape` | Abbrechen und zurücksetzen |

## Hinweise

- ViewportCopy ist nur verfügbar, wenn ein Papier-Layout-Tab aktiv ist.
- Der kopierte Viewport übernimmt denselben Maßstab, Modellmittelpunkt, Sperrstatus und dieselben Abmessungen wie das Original.
- Um einen neuen Viewport von Grund auf zu erstellen, verwenden Sie [ViewportRectangle](./viewport-rectangle).
