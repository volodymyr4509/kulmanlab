---
title: "PointInterval-opdracht — punten op vaste afstand langs een object plaatsen"
description: "De opdracht PointInterval plaatst punten op een getypte afstand langs een lijn, polylijn, boog, cirkel, ellips of spline, vanaf het uiteinde waar u het dichtst bij klikt, met een voorbeeld terwijl u de lengte typt."
keywords: ["punten op interval CAD", "punten op vaste afstand langs lijn CAD", "CAD meten langs object", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

De opdracht `PuntenOpAfstand` plaatst [punten](../point/) op vaste afstand langs een object, zoals u stations langs een tracé markeert. Het object zelf verandert niet: de punten zijn nieuwe entiteiten op de huidige laag en in de huidige kleur, handig om op te snappen.

## Punten op een interval

1. Typ `PuntenOpAfstand` in de terminal of kies **Point Interval** in het array-uitklapmenu van het paneel Edit.
2. **Klik op het object bij het uiteinde waar u wilt beginnen** — een lijn, polylijn, boog, cirkel, ellips of spline. Al het andere wordt geweigerd en u kunt opnieuw kiezen.
3. **Typ de intervallengte.** De punten verschijnen tijdens het typen als voorbeeld op het object.
4. Druk op **Enter** of **Space** om ze te plaatsen. De opdracht eindigt.

## Waar de punten komen

- Het eerste punt komt één interval na het begin en de rest volgt telkens één interval verder, gemeten langs het object, bochten inbegrepen. Op het begin zelf komt geen punt.
- Op een open object — lijn, open polylijn, boog, gedeeltelijke ellips of open spline — wordt gemeten vanaf het uiteinde waar u het dichtst bij klikte. Wat aan het verre uiteinde overblijft, blijft ongemarkeerd: dat uiteinde krijgt alleen een punt als het interval precies uitkomt.
- Op een gesloten object — cirkel, gesloten polylijn, volledige ellips of gesloten spline — wordt gemeten vanaf het eigen begin van het object, waar u ook klikt: een cirkel vanaf hoek 0 tegen de klok in, een gesloten polylijn vanaf het eerste hoekpunt. De punten stoppen vóór het begin.
- Een lengte van 0 of minder, langer dan het object of een die meer dan 32767 punten zou geven, wordt geweigerd: de terminal zegt waarom en wist hem, zodat u opnieuw kunt typen.

Backspace wist het laatste teken. Escape begint opnieuw, zodat u een ander object kunt kiezen. Enter of Space voordat een object is gekozen, beëindigt de opdracht.

---

*Gerelateerd: [Point Divide](../point-divide/) om een object in een aantal gelijke lengtes te verdelen en [Point](../point/) voor losse punten.*
