---
title: "Polygon-opdracht — regelmatige veelhoeken tekenen vanuit middelpunt of zijde in KulmanLab CAD"
description: "De opdracht Polygon tekent een regelmatige veelhoek met 3 tot 1024 zijden vanuit het middelpunt en een straal, of vanuit één zijde. Het resultaat is een gesloten LWPOLYLINE, dus alle polylijn-bewerkingsopdrachten zijn erop van toepassing."
keywords: ["CAD polygon-opdracht", "regelmatige veelhoek tekenen CAD", "zeshoek achthoek vijfhoek CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

De opdracht `Veelhoek` tekent een regelmatige veelhoek — alle zijden en hoeken gelijk — met 3 tot 1024 zijden. Typ `Veelhoek` in de terminal. Het resultaat is een **gesloten `LWPOLYLINE`**, dus na plaatsing gedraagt hij zich als elke andere [Polyline](../polyline/) en gelden alle polylijn-bewerkingen.

## Een polygon tekenen

1. Typ `Veelhoek` in de terminal en voer het **aantal zijden** in — een geheel getal van 3 tot 1024 — en druk op **Enter** of **Space**. De prompt is vooraf ingevuld met het laatst gebruikte aantal (de eerste keer 4); begin te typen om het te vervangen. Al het andere wordt geweigerd en blijft in de prompt staan om te corrigeren.
2. **Klik op het middelpunt**, of typ `X,Y` en druk op **Enter** voor een exacte coördinaat. Druk eerst op `E` om in plaats daarvan vanuit een zijde te beginnen (zie hieronder).
3. **Klik op de straal** — de veelhoek wordt live getoond — of typ de straal en druk op **Enter** of **Space**.
4. De veelhoek wordt geplaatst en de opdracht eindigt.

## Opties

| Optie | Toets | Effect |
|---|---|---|
| Edge | `E` | Het eerste punt wordt in plaats van het middelpunt het ene uiteinde van een zijde. Kies het tweede uiteinde; de overige hoekpunten worden tegen de klok in opgebouwd, links van de zijde van het eerste naar het tweede uiteinde. Druk nogmaals op `E` om terug te gaan naar het middelpunt. |
| Inside | `I` | Standaard aan en bewaard van de ene veelhoek naar de volgende. Aan: de hoekpunten liggen op de cirkel met de opgegeven straal. Uit: de veelhoek ligt buiten die cirkel, met het midden van elke zijde erop. |

- Een klik plaatst een hoekpunt (Inside aan) of het midden van een zijde (Inside uit) precies waar de cursor staat, dus de cursor bepaalt ook de oriëntatie.
- Een getypte straal heeft niets om langs te richten, dus de veelhoek ligt met zijn laagste zijde horizontaal — tenzij hoekvergrendeling aan staat, dan volgt hij de vergrendelde hoek.
- Elke optie wordt in zijn eigen stap aangeboden en kan worden omgeschakeld, ook tijdens het typen van een getal.

## Toetsenbordoverzicht

| Toets | Actie |
|---|---|
| `0`–`9`, `.` | Het aantal zijden, de straal, een coördinaat of een lengte typen |
| `E` | Edge aan- of uitzetten (stap van het eerste punt) |
| `I` | Inside aan- of uitzetten (straalstap) |
| `Enter` / `Space` | Het aantal zijden of de straal bevestigen |
| `Escape` | Annuleren |

## DXF — LWPOLYLINE-entiteit

Een veelhoek wordt opgeslagen als een gesloten `LWPOLYLINE` met één hoekpunt per hoek; DXF heeft geen eigen veelhoektype. Alle eigenschappen — hoekpuntcoördinaten, kleur, laag, lijntype, lijntypeschaal en dikte — blijven zonder verlies behouden, en elke DXF-viewer leest het als een gesloten polylijn.
