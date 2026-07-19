---
title: Font Manager — Eigene TTF-Schriftarten hochladen und verwalten
description: Der Befehl Font Manager öffnet einen Dialog zum Durchsuchen, Vorschauen und Auswählen von Schriftarten sowie zum Hochladen eigener .ttf-Dateien. Hochgeladene Schriftarten werden im Browser gespeichert und in DXF-Exporten namentlich eingebettet.
keywords: [font manager, eigene Schriftart CAD, TTF hochladen, benutzerdefinierte Schriftart CAD, google fonts CAD, Textschriftart CAD, kulmanlab]
group: style
order: 2
---

# Font Manager

Der Befehl `FontManager` öffnet einen Dialog zum Durchsuchen und Auswählen von Schriftarten sowie zum Hochladen eigener `.ttf`-Dateien zur Verwendung in [Text](../text/)- und [Multileader](../leader/)-Entitäten.

## Den Font Manager öffnen

- Geben Sie `FontManager` im Terminal ein, **oder**
- Klicken Sie auf die Schaltfläche **Font Manager** in der Symbolleiste des [Texteditors](../../interface/text-editor/).

## Schriftartgruppen

| Gruppe | Inhalt |
|--------|--------|
| **Default** | Die integrierte Sans-Serif-Schriftart — immer verfügbar |
| **User** | Ihre eigenen hochgeladenen `.ttf`-Schriftarten (wird erst angezeigt, sobald Sie eine hinzugefügt haben) |
| **Free** | 15 integrierte Google Fonts (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Gängige Betriebssystem-Schriftarten (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Klicken Sie auf eine beliebige Schriftart in der Liste, um sie rechts in der Vorschau zu sehen — Name, Alphabet-Beispiel, ein Pangramm und Ziffern.

## Eigene Schriftart hochladen

1. Klicken Sie im Fußbereich des Dialogs auf **Add Font** (oder geben Sie `Font+` im Terminal ein, um die Dateiauswahl direkt zu öffnen).
2. Wählen Sie eine `.ttf`-Datei aus. Es werden nur TrueType-Schriftarten unterstützt — `.otf` sowie `.woff`/`.woff2` nicht.
3. Der Dateiname (ohne Erweiterung) wird zum Namen der Schriftart in der Gruppe **User**. Wenn Sie beispielsweise `MyFont.ttf` hochladen, wird eine Schriftart namens `MyFont` hinzugefügt.

Hochgeladene Schriftarten werden dauerhaft im Browser (IndexedDB) gespeichert und beim nächsten Öffnen von KulmanLab CAD automatisch neu geladen.

## Eigene Schriftart entfernen

Bewegen Sie den Mauszeiger über eine Schriftart in der Gruppe **User** und klicken Sie auf die Schaltfläche **×** daneben. Integrierte Schriftarten (Default, Free, System) können nicht entfernt werden.

## Tastaturkürzel

| Taste | Aktion |
|-------|--------|
| `↑` / `↓` | Die Auswahl in der Schriftartliste nach oben oder unten bewegen |
| `Escape` | Font Manager schließen |

## DXF-Kompatibilität

Der Schriftartname wird als Inline-Formatierungscode in exportierte **MTEXT**-Entitäten eingebettet, sodass eine DXF-Datei, die einen Durchlauf durch KulmanLab CAD durchläuft, ihre Schriftartzuweisung behält. In die DXF eingebettet werden keine eigenen Schriftart*dateien* — nur der Schriftart*name*. Wenn Sie eine Zeichnung erneut importieren, die auf eine eigene Schriftart verweist, die Sie auf diesem Gerät nicht hochgeladen haben, wird der Text in der Standardschriftart dargestellt, bis Sie eine Schriftart mit demselben Namen hochladen.

## Verwandte Befehle

- [Text](../text/) — platziert die Textbeschriftungen, auf die Schriftartauswahl angewendet wird
- [Match Properties](../match-properties/) — kopiert die Texthöhe, aber nicht die Schriftart, zwischen Entitäten
