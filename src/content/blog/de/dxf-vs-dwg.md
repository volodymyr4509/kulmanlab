---
title: "DXF oder DWG: Was ist der Unterschied?"
description: "DWG ist AutoCADs eigenes Format, DXF das offene Austauschformat. Was sich wirklich unterscheidet, was Sie brauchen und wie Sie aus einer DWG eine DXF bekommen."
keywords: [DXF oder DWG, Unterschied DXF DWG, DWG oder DXF, was ist DWG, was ist DXF, DWG in DXF, DXF DWG Format, CAD Dateiformate, DWG öffnen, DXF Dateiformat]
date: 2026-09-02
author: KulmanLab
tag: Anleitung
---

DWG ist das eigene Dateiformat von AutoCAD — binär, proprietär und von Autodesk nicht dokumentiert. DXF ist das Austauschformat, das Autodesk veröffentlicht, damit andere Programme dieselben Zeichnungen lesen können. Gleiche Geometrie, anderer Behälter — und nur eines von beiden ist dafür gedacht, Dateien an Menschen außerhalb Ihrer eigenen Software zu geben.

Genau dieser letzte Punkt ist der ganze praktische Unterschied, und er entscheidet, wonach Sie fragen sollten.

## Die Kurzfassung

| | DXF | DWG |
|---|---|---|
| Steht für | Drawing Exchange Format | Drawing |
| Veröffentlichte Spezifikation | Ja, von Autodesk | Nein |
| Kodierung | Text (auch als Binärvariante) | Binär |
| Zweck | Zeichnungen zwischen Programmen bewegen | AutoCADs eigenes Arbeitsformat |
| Dateigröße | Größer | Kleiner |
| Von anderer Software gelesen | Sehr breit | Lückenhaft, über nachgebaute Bibliotheken |
| Trägt alles, was AutoCAD kann | Nein — eine dokumentierte Teilmenge | Ja |

## Warum es überhaupt zwei Formate gibt

Autodesk brachte AutoCAD 1982 mit DWG als Arbeitsformat heraus. Es ist auf die Bequemlichkeit eines einzigen Programms hin gebaut: kompakt, binär und jederzeit änderbar, wenn AutoCAD es braucht.

Damit eignet es sich schlecht zum Verschicken. Also veröffentlichte Autodesk zusätzlich DXF — dieselbe Zeichnung, in dokumentierter, lesbarer Form geschrieben, gegen die jeder Entwickler implementieren kann. Öffnen Sie eine `.dxf` in einem Texteditor, und Sie sehen Gruppencodes und Abschnittsnamen in schlichtem ASCII.

Beide werden gemeinsam versioniert. Jede AutoCAD-Version bringt eine DWG-Revision und eine passende DXF-Revision mit; die Kennung `AC1032`, die man mitunter im Dateikopf sieht, bezeichnet etwa die Generation AutoCAD 2018.

DXF ist also nicht das ältere oder geringere Format. Es ist dieselbe Zeichnung, absichtlich lesbar gemacht.

## Was sich in der Praxis unterscheidet

**Offenheit.** Autodesk dokumentiert DXF und dokumentiert DWG nicht. Programme, die DWG lesen — und viele tun das — stützen sich auf Bibliotheken, die durch Nachbau des Formats entstanden sind. Das funktioniert gut und ist völlig legitim, bedeutet aber, dass DWG-Unterstützung neuen Versionen hinterherhinkt und je nach Anwendung schwankt, während DXF-Unterstützung sich direkt aus der Spezifikation umsetzen lässt.

**Größe.** Eine binäre DWG ist typischerweise deutlich kleiner als dieselbe Zeichnung als ASCII-DXF. Bei einem großen Projekt zählt das; bei einem einzelnen Teil nicht.

**Detailtreue.** DWG enthält alles, was AutoCAD ausdrücken kann, einschließlich Objekttypen, für die andere Programme kein Konzept haben. DXF deckt eine dokumentierte Teilmenge ab. Für gewöhnliches 2D-Zeichnen — Linien, Bögen, Kreise, Polylinien, Text, Bemaßungen, Layer — ist diese Teilmenge alles, was Sie brauchen. Bei einem Modell, das auf proprietäre AutoCAD-Objekte setzt, geht beim Export nach DXF ein Teil davon verloren.

**Verbreitung der Unterstützung.** Praktisch jedes CAD-, CAM- und Vektorwerkzeug liest DXF. Weniger lesen DWG, und die es tun, unterstützen es oft weniger vollständig.

## Was brauchen Sie tatsächlich?

**Ihnen wurde eine Datei geschickt und Sie können sie nicht öffnen.** Prüfen Sie zuerst die echte Dateiendung. Die meisten sagen „DWG" für beides, und in der Hälfte der Fälle liegt in Ihren Downloads eine `.dxf`, die Sie längst öffnen könnten. Siehe [DXF ohne AutoCAD öffnen](/de/blog/open-dxf-file-without-autocad/).

**Sie schicken etwas an einen Laserschneider, eine CNC-Werkstatt oder einen Fertiger.** DXF, praktisch immer. Maschinensoftware und Schneiddienste sind darauf ausgelegt, und 2D-Schnittgeometrie liegt bequem innerhalb der dokumentierten Teilmenge. Siehe [DXF für den Laserschnitt vorbereiten](/de/blog/prepare-dxf-for-laser-cutting/).

**Sie schicken etwas an Architekten oder Ingenieure, die in AutoCAD arbeiten.** Fragen Sie nach. Viele bevorzugen DWG, weil ihr Arbeitsablauf es erwartet — und können DXF ohne Weiteres öffnen, wenn nicht.

**Sie archivieren etwas langfristig.** DXF. Ein dokumentiertes Textformat wird in zwanzig Jahren noch von jemandem mit Spezifikation und Texteditor lesbar sein. Genau dafür gibt es Austauschformate.

**Jemand will es nur ansehen.** Weder noch — schicken Sie ein PDF. Siehe [DXF in PDF umwandeln](/de/blog/convert-dxf-to-pdf/).

## Wie Sie an eine DXF kommen, wenn Sie eine DWG erhalten haben

Der verlässliche Weg ist nachzufragen. Wer die Datei geschickt hat, öffnet sie in seinem CAD-Programm und wählt *Speichern unter* oder *Exportieren* → DXF. Das dauert etwa zehn Sekunden, jede Desktop-CAD-Anwendung kann es, und die Datei kommt aus der Software, die sie erzeugt hat, statt aus der Vermutung eines Dritten darüber.

Ist Nachfragen keine Option, gibt es Konverter. Zwei Dinge dabei abzuwägen: Beim Konvertieren geht Detailtreue verloren, und Sie laden die Zeichnung eines anderen zu einem Dienst hoch, den Sie nicht kontrollieren. Für ein Hobbyprojekt ist das in Ordnung. Für Kundenarbeit: nachfragen.

Wenn Sie eine anfordern, nennen Sie am besten eine Version. **DXF R12 ist am sichersten** — uralt, universell unterstützt, und bei schlichter 2D-Geometrie geht nichts Wesentliches verloren. Gerade ältere Maschinensoftware kommt damit deutlich besser zurecht.

## Zwei verbreitete Irrtümer

**„DXF ist verlustbehaftet."** Nur insofern, als es keine proprietären AutoCAD-Objekttypen trägt. Linien, Bögen, Kreise, Polylinien, Text, Bemaßungen und Layer überstehen den Weg unversehrt. Bei 2D-Zeichenarbeit ist der Verlust meist gleich null.

**„DXF ist das alte Format."** Es wird seit 1982 parallel zu DWG versioniert und wird es weiterhin. Die Verwirrung rührt daher, dass R12 so verbreitet als Kompatibilitätsziel dient, dass viele annehmen, DXF sei dort stehen geblieben.

## Wo dieses Werkzeug steht

[KulmanLab](https://kulmanlab.com/de/) liest **DXF, nicht DWG** — und es lohnt sich zu sagen, warum, statt das als Versäumnis zu behandeln: DXF ist dokumentiert, eine Umsetzung kann also allein durch Lesen der Spezifikation korrekt sein. DWG hieße, sich im Browser auf eine nachgebaute Bibliothek zu verlassen, für ein Format, das sich nach Autodesks Zeitplan ändert.

Haben Sie eine `.dwg`, öffnet dies sie nicht. Haben Sie eine `.dxf`, öffnen Sie sie in einem Browser-Tab, ohne etwas zu installieren: [app.kulmanlab.com](https://app.kulmanlab.com).

Zurückgeschrieben wird Geometrie samt Text — Linien, Kreise, Bögen, Ellipsen, Polylinien, Splines und Text, dazu Layer und Linientypen. Schraffuren, Bemaßungen und Leader gelangen derzeit nicht in die exportierte DXF.

---

*Weiterführend: [Import](/de/docs/commands/import/) dazu, was KulmanLab genau aus einer DXF liest, und [Export Manager](/de/docs/commands/export-manager/) dazu, was jedes Exportformat trägt.*
