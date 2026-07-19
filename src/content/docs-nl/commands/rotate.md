---
title: Rotate-commando — Roteer entiteiten rond een basispunt
description: Het Rotate-commando roteert geselecteerde entiteiten rond een gekozen basispunt. De hoek kan precies worden getypt of ingesteld door te klikken — de cursorrichting vanaf het basispunt naar de klik bepaalt de hoek. Positieve hoeken zijn tegen de klok in DXF-coördinaten.
keywords: [CAD rotate commando, entiteiten roteren CAD, objecten roteren hoek, tegen de klok in rotatie CAD, getypte hoek roteren, kulmanlab]
group: edit
order: 3
---

# Rotate

Het `rotate`-commando roteert geselecteerde entiteiten rond een basispunt. U geeft de rotatiehoek op door een getal in graden te typen of door te klikken — de hoek wordt berekend uit de richting tussen het basispunt en de klikpositie.

## Twee manieren om te starten

**Eerst selecteren, dan roteren** — selecteer eerst entiteiten en activeer daarna het commando:

1. Selecteer een of meer entiteiten op het canvas.
2. Typ `rotate` in de terminal of klik op de **Rotate**-werkbalkknop.
3. **Klik het basispunt** aan — het rotatiecentrum. Of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
4. **Typ een hoek en druk op Enter**, of **klik** om de hoek in te stellen op basis van de cursorrichting.

**Eerst activeren, dan selecteren** — start het commando zonder selectie:

1. Typ `rotate` of klik op de werkbalkknop.
2. **Selecteer objecten** — klik om te schakelen, of sleep om per gebied te selecteren.
3. Druk op **Enter** of **Space** om de selectie te bevestigen.
4. **Klik het basispunt** aan (coördinaatinvoer beschikbaar) en stel vervolgens de hoek in.

```
  Ervoor:            Erna (90°-rotatie rond ●):
                        ╔══╗
  ●  [entiteit]  →   ● ║    ║
                        ╚══╝
```

Een live spookpreview van de geroteerde entiteiten volgt de cursorhoek nadat het basispunt is ingesteld.

## De hoek instellen

**Getypte hoek** — typ op elk moment nadat het basispunt is geplaatst een getal (in graden). De preview springt naar de getypte hoek terwijl u nog kunt bijstellen voordat u op Enter drukt.

**Kliekhoek** — als er geen getypte waarde aanwezig is, stelt klikken de hoek in op `atan2(cursorY − baseY, cursorX − baseX)` — de richting van basispunt naar klik, in graden.

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.` | Voeg cijfer toe aan de hoekwaarde |
| `-` | Negatieve hoek (alleen als eerste teken) |
| `Backspace` | Verwijder het laatst getypte teken |
| `Enter` | Pas rotatie toe met de getypte hoek |

## Hoekrichting

Hoeken volgen de **DXF-conventie**:

- **Positieve** waarden roteren **tegen de klok in** in tekeningcoördinaten (Y-omhoog).
- Op het scherm, waar de Y-as omgekeerd is (Y-omlaag), lijken positieve hoeken **met de klok mee** te draaien.

Veelgebruikte waarden: `90` = kwartslag, `180` = halve slag, `-90` = tegenovergestelde kwartslag.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Enter` / `Space` | Bevestig selectie |
| `0`–`9`, `.`, `-` | Start X-coördinaatinvoer (basispuntfase), of hoekwaarde (hoekfase) |
| `,` | Vergrendel X en ga naar Y-invoer (basispuntfase) |
| `Backspace` | Verwijder laatst getypte teken |
| `Enter` | Bevestig coördinaat of pas rotatie toe |
| `Escape` | Annuleren en resetten |

## Selectie tijdens het commando

| Methode | Gedrag |
|--------|-----------|
| **Klik** | Schakelt de entiteit onder de cursor |
| **Slepen naar rechts** (strikt) | Voegt entiteiten toe die volledig binnen het vak liggen |
| **Slepen naar links** (kruisend) | Voegt entiteiten toe die het vak snijden |
| **Enter** / **Space** | Bevestigt de selectie |

## Ondersteunde entiteiten

Rotate werkt op elk entiteitstype. De geometrie van elke entiteit wordt rond het basispunt geroteerd — bijvoorbeeld: bij een Circle verplaatst het middelpunt terwijl de straal gelijk blijft; bij een Arc verplaatst het middelpunt en verschuiven de begin- en eindhoek met de rotatiehoek; bij een Text-entiteit verplaatst het ankerpunt en wordt de hoek opgeteld bij de eigenschap Rotation Degree.
