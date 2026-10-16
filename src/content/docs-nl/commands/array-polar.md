---
title: "ArrayPolar-opdracht — objecten kopiëren rond een middelpunt in KulmanLab CAD"
description: "De opdracht ArrayPolar kopieert de geselecteerde objecten rond een middelpunt — een vast aantal items verdeeld over een volledige omwenteling of een deel ervan, met kopieën die meedraaien of hun eigen oriëntatie houden."
keywords: ["CAD polaire array", "cirkelpatroon CAD", "objecten rond een punt kopiëren CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

De opdracht `ArrayPolar` maakt kopieën van de geselecteerde objecten rond een middelpunt, gelijkmatig verdeeld over een volledige omwenteling of een deel ervan. Het origineel is het eerste item; elk ander item is een kopie, om het middelpunt gedraaid — of alleen eromheen verplaatst, als u Rotate uitzet.

## Een polaire array maken

1. Selecteer de objecten en typ vervolgens `PolaireReeks` in de terminal of klik op de knop **Array Polar** in de werkbalk. Zonder selectie gestart vraagt de opdracht u eerst ze te selecteren — bevestig met **Enter** of **Space**.
2. **Klik op het middelpunt** waar de kopieën omheen gaan, of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
3. Controleer de array. Alle kopieën worden live getoond en de terminal toont `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — druk op de letter van een optie om die te wijzigen.
4. Druk op **Enter** of **Space** om de kopieën te maken. De originelen blijven waar ze zijn en de selectie wordt gewist.

## Opties

| Optie | Toets | Effect |
|---|---|---|
| Items | `I` | Hoeveel items er zijn, het origineel meegerekend — een geheel getal van 2 tot 1024. Begint bij 6. |
| Angle | `A` | Graden van het ene item naar het volgende, tegen de klok in; een negatieve hoek loopt met de klok mee. Tot 180°. |
| Fill | `F` | Graden van het eerste naar het laatste item. 360 (standaard) is een volledige omwenteling; een kleiner getal verdeelt de items over een deel ervan. Negatief loopt met de klok mee. Tot 360°. |
| Rotate | `R` | Aan (standaard): elke kopie draait mee tijdens het rondgaan. Uit: elke kopie wordt naar haar plek verplaatst en kijkt dezelfde kant op als het origineel. Schakelt ter plekke — er is geen getal om te typen. |

- Angle en Fill zijn twee manieren om hetzelfde te zeggen, dus het wijzigen van de een herformuleert de ander. Over een volledige omwenteling stopt het laatste item één stap vóór het eerste; over een deel van een omwenteling landt het precies op de vulhoek.
- Om een getal te wijzigen, drukt u op de letter van de bijbehorende optie. De prompt is vooraf ingevuld met de huidige waarde — typ om die te vervangen en druk op **Enter** of **Space**; ongewijzigd bevestigen laat de array zoals die was.
- Items accepteert alleen gehele getallen; Angle en Fill accepteren decimalen en een voorafgaande `-` voor met de klok mee. Een hoek of vulling van 0 wordt geweigerd, evenals een hoek boven 180° of een vulling boven 360° — de terminal zegt waarom.
- Een te kleine Angle waarin niet alle items passen, laat de items zonder ruimte vallen, en de terminal meldt het nieuwe aantal.
- Werkt op elk entiteitstype: elke kopie is het origineel om het middelpunt gedraaid of verplaatst, precies zoals [Rotate](../rotate/) en [Move](../move/) dat zouden doen.

## Toetsenbordoverzicht

| Toets | Actie |
|---|---|
| `Enter` / `Space` | De selectie, de array of een getypt getal bevestigen |
| `I` `A` `F` `R` | Items, Angle of Fill wijzigen door een getal te typen; Rotate omschakelen |
| `0`–`9`, `.`, `-` | Het getal typen (`.` en `-` alleen voor Angle en Fill, met `-` eerst) |
| `Backspace` | Het laatst getypte teken verwijderen |
| `Escape` | Annuleren |
