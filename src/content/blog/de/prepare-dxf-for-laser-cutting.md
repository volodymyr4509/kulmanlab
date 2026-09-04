---
title: "DXF-Datei für den Laserschnitt vorbereiten"
description: "Warum Schneiddienste DXF-Dateien ablehnen und wie Sie Ihre in Ordnung bringen — geschlossene Konturen, Einheiten, Schnittfuge und Layer. Kostenlos im Browser."
keywords: [DXF für Laserschnitt, DXF Lasercutter vorbereiten, Laserschnitt Dateiformat, DXF abgelehnt Laser, geschlossene Konturen DXF, Schnittfuge Laser, Laserschnitt Datei einrichten, DXF Einheiten Laser, Schneiden Gravieren Layer, kostenloser DXF Editor]
date: 2026-09-02
author: KulmanLab
tag: Anleitung
---

Eine DXF für den Laserschnitt braucht vier Dinge: geschlossene Konturen, korrekte Einheiten, ausschließlich Schnittgeometrie — keine Bemaßungen, Notizen oder Schraffuren — und Layer, die Schneiden, Ritzen und Gravieren trennen. Dieser Artikel behandelt jeden Punkt und zeigt, wie Sie Ihre Datei prüfen, bevor ein Dienstleister sie ablehnt.

Alles davon geht kostenlos im Browser unter [app.kulmanlab.com](https://app.kulmanlab.com) — nichts zu installieren, kein Konto, und die Datei verlässt Ihren Rechner nie. Für genau diesen Ablauf haben wir KulmanLab ursprünglich gebaut, deshalb gelten die Einschränkungen, die bei anderen CAD-Aufgaben zu beachten sind, hier größtenteils nicht: Laserschneiden ist 2D, und DXF ist das, was Schneiddienste haben wollen.

## Warum Dateien abgelehnt werden

Fünf Gründe decken nahezu alles ab.

**Offene Konturen.** Eine Form, die geschlossen aussieht, aber an einer Ecke eine haarfeine Lücke hat, ist kein Bereich, sondern eine Ansammlung unverbundener Linien. Schneidmaschinen müssen wissen, was innen und was außen liegt, und eine offene Kontur hat kein Innen. Das ist der mit Abstand häufigste Ablehnungsgrund.

**Falsche oder unklare Einheiten.** DXF hält nicht zuverlässig fest, was seine Zahlen bedeuten. Dieselbe Datei kann Millimeter, Zentimeter, Zoll oder Fuß sein, und oft steht es nicht darin. Ein Teil, das 25,4-mal zu groß oder zu klein ankommt, hat genau diese Ursache.

**Alles außer Geometrie.** Bemaßungen, Schriftfelder, Notizen, Schraffuren, Hilfslinien. Die Maschine versucht bereitwillig, Ihre Beschriftung zu schneiden.

**Doppelte Linien.** Zwei identische Linien übereinander bedeuten, dass der Laser denselben Pfad zweimal fährt — verlorene Zeit, verbrannte Kanten und bei dünnem Material eine Brandgefahr.

**Alles auf einem Layer.** Sind Schneiden, Ritzen und Gravieren nicht getrennt, kann der Dienstleister sie nicht auseinanderhalten und wird Sie um eine neue Datei bitten.

## Die Datei vorbereiten

Ziehen Sie Ihre `.dxf` auf die Zeichenfläche unter [app.kulmanlab.com](https://app.kulmanlab.com) oder nutzen Sie die Schaltfläche **Import** im Datei-Panel. Die Zeichnung wird geladen und die Ansicht passt sich an.

**1. Sehen Sie sich an, was Sie wirklich haben.** Tippen Sie `fit`, um alles ins Bild zu holen. Zoomen Sie dann in jede Ecke jedes Teils — Lücken sind bei voller Zeichnungsansicht unsichtbar und bei 10-facher Vergrößerung offensichtlich. Diese Prüfung erspart Ihnen die Ablehnungs-E-Mail.

**2. Löschen Sie, was nicht geschnitten werden soll.** Hilfslinien, Notizen, Rahmen, Bemaßungen. `layer-isolate` zeigt jeweils einen Layer und ist damit der Weg, Übriggebliebenes zu finden, das sich unter der eigentlichen Geometrie versteckt.

**3. Schließen Sie die Lücken.** `trim` kürzt überstehende Enden dort, wo zwei Linien übereinander hinausschießen. Wo Linien zu kurz sind, ziehen Sie einen Endpunkt-Grip auf seinen Nachbarn — Grips fangen, die Enden treffen sich also wirklich, statt sich nur beinahe zu treffen.

**4. Prüfen Sie die Maße.** `distance` misst zwischen zwei Punkten, `area` misst eine umschlossene Fläche aus angeklickten Punkten. Messen Sie ein Merkmal, dessen echtes Maß Sie kennen. Weicht es um den Faktor 25,4 ab, liegt Ihre Datei im falschen Einheitensystem.

**5. Trennen Sie Schneiden, Ritzen und Gravieren.** Legen Sie jeden Vorgang auf einen eigenen, eindeutig benannten Layer — `CUT`, `SCORE`, `ENGRAVE`. Die meisten Dienstleister verlangen entweder das oder getrennte Dateien. `layer-manager` legt sie an und weist sie zu.

Dann exportieren: **Export** → **DXF**. KulmanLab schreibt schlichtes AC1032-DXF, also genau das, was Schneiddienste und Maschinensoftware erwarten.

## Schnittfuge

Der Laser trägt beim Schneiden Material ab — je nach Maschine, Material und Dicke rund 0,1 bis 0,3 mm. Schneiden Sie ein 50-mm-Quadrat, erhalten Sie ein knapp untermaßiges Quadrat, und ein Teil, das sich hineinpressen soll, passt nicht.

Zwei Wege damit umzugehen:

**Den Dienstleister machen lassen.** Die meisten Schneiddienste kompensieren die Schnittfuge selbst, und wenn sie das tun, macht eine eigene Kompensation die Teile in die andere Richtung falsch. Fragen Sie nach, bevor Sie etwas anpassen.

**Selbst kompensieren.** `offset` erzeugt eine parallele Kopie einer Form in festem Abstand — die halbe Schnittfugenbreite, nach außen für Teile, die ihr Maß behalten sollen, nach innen für Löcher. Es funktioniert mit Linien, Kreisen, Bögen, Ellipsen und Polylinien. Es arbeitet jeweils an einer Geometrie, ist also für eine Handvoll kritischer Merkmale praktikabel, nicht für eine Platte mit zweihundert Teilen.

Wenn es auf Toleranz ankommt, schneiden Sie ein Probestück, bevor Sie Material festlegen.

## Was Sie beim DXF-Export prüfen sollten

Wissenswert, bevor Sie sich darauf verlassen:

- **Wählen Sie Beschriftung ab, statt sie zu löschen.** Text, Bemaßungen, Leader und Schraffuren werden jetzt alle exportiert, alles in der Zeichnung Verbliebene landet also in der Datei. Löschen müssen Sie es nicht: Der Export-Manager listet jeden Elementtyp mit eigenem Kontrollkästchen, und wenn Sie Text, die Bemaßungszeilen, Leaders und Hatches abwählen, bekommen Sie eine DXF mit Schnittgeometrie und sonst nichts — die Zeichnung selbst bleibt unangetastet.
- **Text landet als `MTEXT`, und das ist nicht dasselbe wie gravierbare Geometrie.** Die Beschriftung wird mit ihrer Formatierung exportiert, doch viele Maschinenprogramme wollen auf einem Gravurlayer Konturen statt lebendigem Text. Prüfen Sie, was Ihres annimmt, bevor Sie eine Gravur darauf aufbauen.
- **Blockreferenzen werden nicht importiert.** Eine aus wiederkehrenden Blocksymbolen aufgebaute Zeichnung kommt unvollständig an; prüfen Sie die Teilezahl gegen das Original.

Splines *werden* exportiert. Manche Maschinensoftware kommt schlecht damit zurecht und bevorzugt Polylinien — trifft das auf Ihre zu, zeichnen Sie Kurven als Polylinien oder Bögen nach.

## Eine Warnung zur Automatisierung

KulmanLab hat **keine Vorabprüfung**. Nichts sucht nach offenen Konturen, doppelten Linien oder Einheitenproblemen und meldet sie. Die obigen Prüfungen sind Handarbeit: hineinzoomen, messen, hinsehen.

Für eine Handvoll Teile ist das in Ordnung, für eine voll geschachtelte Platte mühsam. Wenn Sie regelmäßig ganze Platten produzieren, sind Sie mit einem Werkzeug mit automatischem Prüflauf besser bedient — und für Einzelteile, was für die meisten Menschen meistens zutrifft, findet aufmerksames Hinsehen dieselben Probleme.

## Bevor Sie sie abschicken

- Jede Schnittkontur geschlossen — Ecken bei hoher Vergrößerung geprüft
- Ein bekanntes Maß gemessen und korrekt
- Keine Bemaßungen, Notizen, Rahmen oder Hilfsgeometrie übrig
- Keine doppelten Linien übereinander
- Schneiden, Ritzen und Gravieren auf getrennten, klar benannten Layern
- Schnittfuge: entweder angewandt oder bewusst dem Dienstleister überlassen
- Als DXF exportiert und einmal wieder geöffnet, um zu bestätigen, dass alles stimmt

Der letzte Punkt kostet zehn Sekunden und findet Export-Überraschungen vor dem Dienstleister.

---

*Weiterführend: [Import](/de/docs/commands/import/) dazu, was KulmanLab aus einer DXF liest, [Export Manager](/de/docs/commands/export-manager/) für den genauen Inhalt jedes Formats, [Offset](/de/docs/commands/offset/) für die Schnittfugenkompensation und [LayerManager](/de/docs/commands/layer-manager/) zum Einrichten von Schneid- und Gravur-Layern.*
