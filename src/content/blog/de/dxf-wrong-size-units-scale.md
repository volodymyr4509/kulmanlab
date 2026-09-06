---
title: "Warum Ihre DXF in der falschen Größe geöffnet wird (und wie Sie das beheben)"
description: "Eine DXF, die 25,4-mal zu klein oder 1000-mal zu groß öffnet, ist keine defekte Datei, sondern eine Einheiten-Verwechslung. Verhältnis erkennen, umskalieren, prüfen."
keywords: [DXF falscher Maßstab, DXF falsche Größe, DXF Einheiten, DXF mm oder Zoll, DXF zu klein importiert, DXF Skalierungsfaktor, DXF 25.4, DXF Maßstab korrigieren, DXF Einheiten stimmen nicht, DXF umskalieren]
date: 2026-09-04
author: KulmanLab
tag: Leitfaden
---

Eine DXF öffnet sich, und das Teil, das 40 mm breit sein sollte, misst 1,575. Oder ein Grundriss kommt in der Größe eines ganzen Häuserblocks an. Die Datei ist nicht kaputt und niemand hat etwas falsch gemacht — die Zeichnung stimmt, nur die Zahl, die dazugehörte, ist unterwegs verloren gegangen.

Das lohnt sich zu verstehen, bevor Sie irgendetwas umskalieren. Denn die Korrektur dauert zehn Sekunden, sobald Sie wissen, welches Verhältnis vor Ihnen liegt — und Raten ist der Weg, zweimal die falsche Größe zu schneiden.

## DXF trägt Einheiten kaum mit

Eine DXF speichert Koordinaten als bloße Zahlen. Eine Linie von `0,0` nach `40,0` ist vierzig *Irgendwas* lang. Das Format hängt an eine Koordinate keine Einheit, und es gäbe auch keinen Ort dafür — die Zahl *ist* die Geometrie.

Das Nächstliegende ist eine Header-Variable namens `$INSUNITS`, ein einzelner Code für die ganze Datei: `1` für Zoll, `4` für Millimeter, `6` für Meter und so weiter. Zwei Dinge machen sie schwächer, als sie klingt. Sie gilt einmal für die gesamte Zeichnung und kann eine aus gemischten Quellen zusammengesetzte Datei deshalb gar nicht beschreiben. Und sie ist ein Hinweis, keine Zusage: Viele Anwendungen lesen sie nur beim *Einfügen* einer Zeichnung in eine andere und ignorieren sie beim schlichten Öffnen — mit dem vernünftigen Argument, dass jemand, der eine Zeichnung öffnet, normalerweise weiß, was er gezeichnet hat.

„40" reist also unversehrt mit, „Millimeter" nicht. Jede falsch dimensionierte DXF, die Sie je erhalten werden, ist genau dieser Satz.

## Zuerst das Verhältnis bestimmen

Messen Sie ein Merkmal, dessen wahre Größe Sie tatsächlich kennen — einen Bohrungsdurchmesser, eine Blechkante, ein genormtes Lochbild. Teilen Sie die Soll-Größe durch die gemessene. Das Ergebnis ist fast immer eines dieser hier:

| Verhältnis | Was passiert ist |
|---|---|
| **25,4** | In Zoll gezeichnet, als Millimeter gelesen |
| **0,03937** | In Millimetern gezeichnet, als Zoll gelesen |
| **1000** | In Metern gezeichnet, als Millimeter gelesen |
| **0,001** | In Millimetern gezeichnet, als Meter gelesen |
| **12** | Fuß als Zoll gelesen |
| **304,8** | Fuß als Millimeter gelesen |

Steht Ihre Zahl in dieser Tabelle, haben Sie eine reine Einheiten-Verwechslung und sonst nichts, und der Rest dauert eine Minute.

Steht sie nicht darin — 1,37 etwa oder 3,2 — halten Sie an. Das ist kein Einheitenproblem, und Umskalieren erzeugt eine Zeichnung, die auf schwerer erkennbare Weise falsch ist. Springen Sie zum letzten Abschnitt.

## Die Korrektur

Sie brauchen etwas zum Messen und etwas zum Skalieren. Jedes CAD-Werkzeug kann das; hier steht es für [KulmanLab](https://kulmanlab.com/de/), das eine DXF ohne Installation in einem Browser-Tab öffnet:

1. Datei öffnen — auf die Seite ziehen oder [Import](/de/docs/commands/import/) verwenden.
2. [Distance](/de/docs/commands/distance/) aufrufen und die beiden Enden Ihres bekannten Merkmals wählen. Der Fang ist hier entscheidend: Greifen Sie die echten Endpunkte, nicht irgendetwas in deren Nähe, sonst backen Sie Ihren eigenen Fehler in den Faktor ein.
3. Teilen. Soll-Größe ÷ gemessene Größe. Eine 40-mm-Bohrung, die 1,575 anzeigt, ergibt 40 ÷ 1,575 ≈ **25,4**.
4. Alles auswählen, [Scale](/de/docs/commands/scale/) aufrufen, einen Basispunkt wählen und den Faktor eintippen.

Der Basispunkt bleibt fest, während sich alles andere bewegt — legen Sie ihn also dorthin, wo Sie ihn nachvollziehen können: an eine Ecke des Teils oder in den Ursprung. Bei einer Zeichnung, die gleich zum Schneiden geht, ist der Ursprung meist die sinnvolle Wahl.

Hilfreich ist dabei, dass KulmanLab selbst keine Einheiteneinstellung hat. Koordinaten sind einfach Zahlen — genau der Zustand, in dem Sie eine Zeichnung haben wollen, während Sie herausfinden, was ihre Zahlen bedeuten. Es läuft keine Umrechnung hinter Ihrem Rücken, und es gibt nichts, wogegen Sie ankämpfen müssten.

## Prüfen Sie die Korrektur, bevor Sie ihr trauen

Messen Sie ein *zweites* Merkmal an einer anderen Stelle der Zeichnung, dessen wahre Größe Sie ebenfalls kennen. Und dann kontrollieren Sie es.

Diesen Schritt lassen die meisten aus, und er ist der einzige, der den schlimmen Fall aufdeckt. Stimmt die zweite Messung jetzt, war die Zeichnung durchgehend in den falschen Einheiten und ist nun durchgehend in den richtigen. Fertig.

Ist die zweite Messung *immer noch* falsch, und zwar um einen anderen Betrag, war es nie eine einfache Einheiten-Verwechslung. Sie haben gerade eine in sich widersprüchliche Zeichnung skaliert — schlimmer als der Ausgangszustand, weil der Fehler nun kein sauberes Verhältnis mehr ist, das jemand bemerken könnte.

[Area](/de/docs/commands/area/) ist hier eine nützliche zweite Meinung, besonders bei Plattenware. Die Fläche skaliert mit dem *Quadrat* des Faktors, ein Längenfehler von 25,4 zeigt sich also als Flächenfehler von 645 — eine Abweichung, die man sich schwer schönreden kann.

## Damit es nächstes Mal nicht passiert

Einheiten gehen zwischen Menschen verloren, also liegt die Lösung auch dort.

**Nennen Sie die Einheit beim Versenden.** Eine Zeile in der Nachricht. „Alle Maße in mm." Kostet nichts und beseitigt das ganze Problem.

**Legen Sie ein Referenzmaß bei.** Nennen Sie ein echtes Maß — „die äußere Platte ist 300 mm breit". Jetzt kann der Empfänger die Datei prüfen statt zu vermuten, und falls doch etwas schiefging, behebt er es in einer Minute, ohne noch einmal nachfragen zu müssen.

**Fragen Sie, wenn Sie der Empfänger sind.** Kommt eine Datei ohne Angabe der Einheiten an und Sie wollen daraus gleich Material schneiden, ist eine Nachricht billiger als eine ruinierte Platte.

**Zeichnen Sie in den Einheiten, die Ihr Ziel erwartet.** Laserschneiden, CNC und die meisten Fertigungsabläufe erwarten Millimeter. Geht die Datei dorthin, zeichnen Sie in Millimetern, und es bleibt keine Umrechnung übrig, die schiefgehen könnte. Siehe [eine DXF fürs Laserschneiden vorbereiten](/de/blog/prepare-dxf-for-laser-cutting/).

## Wenn es kein Einheitenproblem ist

War Ihr Verhältnis keine saubere Einheitenumrechnung, sind die wahrscheinlichen Ursachen anderer Art:

- **Die Zeichnung mischt Maßstäbe.** Jemand hat einen Teil 1:1 gezeichnet und ein Detail in 1:5 hineinkopiert, oder ein Block wurde mit einem Skalierungsfaktor eingefügt und nie korrigiert. Reparieren Sie die betreffende Geometrie, nicht die ganze Datei.
- **Sie haben Papierbereich-Geometrie gemessen.** Ein Schriftfeld oder Beschriftungsrahmen ist in Blattgröße gezeichnet, nicht in Modellgröße. Messen Sie etwas, das zum eigentlichen Objekt gehört.
- **Sie haben das Falsche gemessen.** Eine nominelle 40-mm-Bohrung kann für die Passung mit 39,8 gezeichnet sein, und eine „300-mm"-Platte kann 300 bis zur Außenkante eines Falzes messen, den Sie nicht sehen. Wählen Sie ein Merkmal mit eindeutiger Kante.

In all diesen Fällen lautet die Antwort: herausfinden, was die Zeichnung wirklich ist — nicht sie skalieren. Eine Zeichnung, deren Teile einander widersprechen, kostet so lange Material, bis jemand sie öffnet und hinsieht.

---

*Verwandt: [Distance](/de/docs/commands/distance/) zum Messen, [Scale](/de/docs/commands/scale/) für die Korrektur, [Area](/de/docs/commands/area/) für die zweite Meinung und [Export Manager](/de/docs/commands/export-manager/) dafür, was jedes Format mitnimmt, wenn Sie die Datei zurückschicken.*
