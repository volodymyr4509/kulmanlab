---
title: "Textstil-Befehl — Benannte Textstile erstellen und verwalten"
description: "Erstellen und verwalten Sie CAD-Textstile mit Schrift, Höhe, Fett, Kursiv, Zeilenabstand, Ausrichtung und Rahmen. Neuer Text verwendet den aktuellen Stil."
keywords: [Textstil CAD, CAD Schriftstil, benannter Textstil, Textstilmanager, Text Rahmen CAD, Text Ausrichtung CAD, DXF Textstil, kulmanlab]
group: style
order: 6
---

# TextStyle

Der Befehl `Textstil` öffnet den Textstilmanager. Hier erstellen und bearbeiten Sie benannte Stile und wählen den *aktuellen* Stil. Neuer [Text](../text/) kopiert dessen Einstellungen beim Erstellen.

## Dialog öffnen

- Geben Sie `Textstil` im Terminal ein, oder
- klicken Sie im Panel **Beschriften** auf **Textstil**.

Links stehen alle sichtbaren Stile, rechts die Eigenschaften des ausgewählten Stils. Ein ✓ kennzeichnet den aktuellen Stil. Doppelklicken Sie eine Zeile, um sie auszuwählen und sofort aktuell zu setzen.

## Eigenschaften bearbeiten

| Feld | Funktion |
|------|----------|
| Name | Eindeutiger Stilname. `Standard` kann nicht umbenannt werden. |
| Schrift | Schriftart aus derselben Liste wie im [Schriftartenmanager](../font-manager/). |
| Höhe | Feste Texthöhe; `0` bedeutet **Pro Text festgelegt**. |
| Fett / Kursiv | Unabhängige Formatierungsschalter. |
| Zeilenabstand | Multiplikator für den Abstand zwischen Textzeilen. |
| Horizontale Ausrichtung | Standardmäßig Links, Zentriert, Rechts oder Blocksatz. |
| Rahmen | Zeichnet um neuen Text einen rechteckigen Rahmen. |

Die Vorschau zeigt Schrift, Gewicht und Neigung. Rahmen, Zeilenabstand und Ausrichtung gelten für neu erzeugten Text. Leere, doppelte oder für DXF ungültige Namen werden abgelehnt; **OK** bleibt bis zur Korrektur deaktiviert.

Aus DXF importierte annotative Stile sind derzeit verborgen, weil die annotative Skalierung noch nicht gerendert wird. Ihre Datensätze bleiben erhalten.

## Erstellen, löschen und aktuell setzen

- **Neu** dupliziert den ausgewählten Stil als `Style1`, `Style2` usw.
- **Löschen** entfernt einen Stil nur, wenn er weder `Standard` noch aktuell ist.
- **Aktuell setzen** verwendet den ausgewählten Stil für künftig erstellten Text. Dieselbe Auswahl gibt es im Dropdown des Beschriften-Panels.

Ein Stil ist nur eine Vorlage beim Erstellen. Spätere Stiländerungen verändern vorhandenen Text nicht.

## Speichern und Tastatur

**OK** übernimmt alle Änderungen. **Schließen** oder `Escape` verwirft sie.

| Taste | Aktion |
|-------|--------|
| `↑` / `↓` | Auswahl in der Stilliste verschieben |
| `Escape` | Änderungen verwerfen und schließen |

## DXF-Kompatibilität

Name, Schriftdateien, feste Höhe, Fett, Kursiv und das Annotativ-Flag gehören zum DXF-Textstildatensatz und werden importiert und exportiert. Rahmen, Zeilenabstand und horizontale Ausrichtung sind KulmanLab-Vorgaben pro Text und keine Felder der DXF-STYLE-Tabelle.

## Verwandte Befehle

| Befehl | Funktion |
|--------|----------|
| [Text](../text/) | Zeichnet Text mit dem aktuellen Stil |
| [FontManager](../font-manager/) | Verwaltet verfügbare und eigene Schriften |
| [MatchProperties](../match-properties/) | Überträgt die Texthöhe auf andere Objekte |
