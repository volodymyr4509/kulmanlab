---
title: "PointDivide-opdracht — punten op gelijke lengtes langs een object plaatsen"
description: "De opdracht PointDivide deelt een lijn, polylijn, boog, cirkel, ellips of spline in stukken van gelijke lengte en plaatst een punt bij elke deling, met een voorbeeld terwijl u het aantal stukken typt."
keywords: ["CAD verdeelopdracht", "lijn in gelijke delen verdelen CAD", "punten langs een object CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

De opdracht `VerdeelMetPunten` plaatst [punten](../point/) die een object in stukken van gelijke lengte verdelen. Het object zelf verandert niet: de punten zijn nieuwe entiteiten op de huidige laag en in de huidige kleur, handig om op te snappen.

## Een object verdelen

1. Typ `VerdeelMetPunten` in de terminal of kies **Point Divide** in het array-uitklapmenu van het paneel Edit.
2. **Klik op het object** — een lijn, polylijn, boog, cirkel, ellips of spline. Al het andere wordt geweigerd en u kunt opnieuw kiezen.
3. **Typ het aantal stukken**, een geheel getal van 2 tot 32767. De punten verschijnen tijdens het typen als voorbeeld op het object.
4. Druk op **Enter** of **Space** om ze te plaatsen. De opdracht eindigt.

## Waar de punten komen

- De afstand wordt gemeten als lengte langs het object, niet als hoek, dus een ellips of spline wordt in stukken van gelijke lengte gedeeld. Boogsegmenten van een polylijn worden langs hun kromming gevolgd.
- Op een open object — lijn, open polylijn, boog, gedeeltelijke ellips of open spline — komen de punten tussen de stukken, nooit op de uiteinden: 5 stukken geven 4 punten.
- Op een gesloten object — cirkel, gesloten polylijn, volledige ellips of gesloten spline — gaan de punten helemaal rond vanaf het begin, dat ook een punt krijgt: een cirkel begint bij hoek 0, een gesloten polylijn bij het eerste hoekpunt. 5 stukken geven 5 punten.
- Een getal buiten 2–32767 wordt geweigerd: de terminal zegt waarom en wist het, zodat u opnieuw kunt typen.

Backspace wist het laatste cijfer. Escape begint opnieuw, zodat u een ander object kunt kiezen. Enter of Space voordat een object is gekozen, beëindigt de opdracht.

---

*Gerelateerd: [Point Interval](../point-interval/) voor punten op een vaste afstand, [Point](../point/) voor losse punten en [ArrayPolar](../array-polar/) om objecten in plaats van punten te herhalen.*
