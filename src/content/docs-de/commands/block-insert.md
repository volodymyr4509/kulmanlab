---
title: "BlockInsert-Befehl — Einen Block der Zeichnung platzieren"
description: "Der Befehl BlockInsert öffnet eine Palette mit Vorschauen der Blöcke der Zeichnung. Wählen Sie einen, legen Sie Maßstab und Drehung fest und klicken oder tippen Sie einen Punkt, um ihn einmal oder wiederholt zu platzieren."
keywords: ["Block einfügen CAD", "Blockpalette CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

Der Befehl `BlockEinfügen` öffnet eine Palette mit Vorschauen aller Blöcke der Zeichnung und platziert den gewählten. Erstellen Sie Blöcke mit [Block Create](../block-create/) oder öffnen Sie eine DXF-Datei, die welche enthält.

## Einen Block platzieren

1. Tippen Sie `BlockEinfügen` oder klicken Sie in der Gruppe **Blöcke** auf **Block einfügen**. Die Palette dockt links an, mit einer Vorschaukachel je Block, zwölf pro Seite; mit den Pfeilen unter den Kacheln blättern Sie.
2. Tippen Sie in **Blöcke suchen**, um die Kacheln nach Namen einzugrenzen.
3. Legen Sie **Skalierung** (muss größer als 0 sein) und **Drehung** in Grad fest. **Platzierung wiederholen** ist standardmäßig an.
4. Klicken Sie auf die Kachel eines Blocks. Der Block folgt dem Cursor: Klicken platziert ihn an seinem Basispunkt, oder tippen Sie X,Y für eine exakte Position. Ist der Cursor auf einen Winkel gesperrt, können Sie stattdessen eine Länge tippen.
5. Bei **Platzierung wiederholen** an folgt der Block dem Cursor für die nächste Kopie, bis Sie **Escape** drücken. Bei aus endet der Befehl nach einer Kopie.

## Gut zu wissen

- Um einen Block zu löschen, klicken Sie auf den Papierkorb in seiner Kachel und bestätigen. Ein Block mit Referenzen in der Zeichnung lässt sich nicht löschen: Seine Kachel zeigt **In Verwendung, kann nicht gelöscht werden**.
- Eine Zeichnung ohne Blöcke zeigt in der Palette **Diese Zeichnung enthält keine Blöcke**.
- **Escape** schließt die Palette, wenn nichts platziert wird. Sie ist eines der angedockten Panels, von denen links jeweils nur eines sichtbar ist.

---

*Verwandt: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
