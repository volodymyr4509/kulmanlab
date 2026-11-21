---
title: "BlockCreate-Befehl — Einen Block aus Objekten erstellen"
description: "Der Befehl BlockCreate erstellt aus den gewählten Objekten einen benannten Block mit frei wählbarem Basispunkt und ersetzt sie durch eine Referenz darauf. Der Block lässt sich danach mit BlockInsert beliebig oft platzieren."
keywords: ["Block erstellen CAD", "Block aus Objekten CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

Der Befehl `BlockErstellen` erstellt einen **Block**: eine benannte Gruppe von Objekten, die einmal in der Zeichnung gespeichert und mit [Block Insert](../block-insert/) beliebig oft platziert wird. Die gewählten Objekte werden zum Block und in der Zeichnung durch eine Referenz darauf ersetzt, sodass sich optisch nichts ändert.

## Einen Block erstellen

1. Wählen Sie auf Wunsch zuerst die Objekte aus und tippen Sie dann `BlockErstellen` oder klicken Sie in der Gruppe **Blöcke** auf **Block erstellen**. Ein Popup öffnet sich, in dem die Auswahl schon enthalten ist.
2. Tippen Sie einen **Name**. Er darf nicht leer sein, keines der Zeichen `< > / \ " : ; ? * | , =` und keinen Backtick enthalten und nicht der Name eines anderen Blocks sein.
3. Klicken Sie auf **Objekte wählen**, um Objekte hinzuzufügen oder zu entfernen: Das Popup verschwindet, und Sie klicken Objekte an oder ziehen einen Bereich. Mit **Enter** oder **Space** kehren Sie zum Popup zurück, wo **Objekte** die Anzahl zeigt.
4. Legen Sie den **Basispunkt** fest, den Punkt, an dem der Block platziert wird: Tippen Sie X und Y oder klicken Sie auf **Punkt wählen** und dann auf die Zeichenfläche (oder tippen Sie dort X,Y). Er beginnt bei 0,0.
5. Klicken Sie auf **OK**. Der Block wird gespeichert, die Objekte weichen einer Referenz darauf am Basispunkt, und das Terminal protokolliert den Namen des Blocks und die Zahl seiner Objekte.

## Gut zu wissen

- **OK** bleibt deaktiviert, solange etwas nicht stimmt, und die Meldung unter den Feldern sagt was: ein leerer oder unbrauchbarer Name, ein bereits vergebener Name oder keine Objekte.
- **Escape** während der Wahl von Objekten oder Basispunkt führt zurück zum Popup, mit dem Block wie zuvor. **Escape** im Popup bricht den Befehl ab.
- Der Block wird mit der Zeichnung gespeichert und samt seinen Referenzen in DXF geschrieben.

---

*Verwandt: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
