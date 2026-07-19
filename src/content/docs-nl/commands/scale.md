---
title: Scale-commando — Schaal entiteiten uniform rond een basispunt
description: Het Scale-commando schaalt geselecteerde entiteiten uniform met een getypte factor rond een vast basispunt. De factor wordt altijd via het toetsenbord ingevoerd — er is geen klik-om-te-schalen. Een factor groter dan 1 vergroot; kleiner dan 1 verkleint. Elk entiteitstype wordt ondersteund.
keywords: [CAD scale commando, entiteiten schalen CAD, objecten schalen CAD, uniforme schaal CAD, schaalfactor CAD, vergroten verkleinen CAD, kulmanlab]
group: edit
order: 5
---

# Scale

Het `scale`-commando schaalt geselecteerde entiteiten uniform rond een basispunt. Alle afstanden vanaf het basispunt worden vermenigvuldigd met de schaalfactor — een factor van `2` verdubbelt alle afmetingen, `0.5` halveert ze. De factor wordt altijd getypt; er is geen klik-om-te-schalen.

## Twee manieren om te starten

**Eerst selecteren, dan schalen** — selecteer eerst entiteiten en activeer daarna het commando:

1. Selecteer een of meer entiteiten op het canvas.
2. Typ `scale` in de terminal of klik op de **Scale**-werkbalkknop.
3. **Klik het basispunt** aan — het vaste punt dat niet beweegt tijdens het schalen. Of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
4. **Typ de schaalfactor** en druk op **Enter**.

**Eerst activeren, dan selecteren** — start het commando zonder selectie:

1. Typ `scale` of klik op de werkbalkknop.
2. **Selecteer objecten** — klik om te schakelen, of sleep om per gebied te selecteren.
3. Druk op **Enter** of **Space** om de selectie te bevestigen.
4. **Klik het basispunt** aan (coördinaatinvoer beschikbaar) en typ vervolgens de factor.

```
  Basis ●                Basis ●
        [entiteit]  →          [grotere entiteit]
  factor = 2 → afstanden vanaf ● worden verdubbeld
```

## De schaalfactor typen

Nadat het basispunt is geplaatst, toont de terminal `enter scale factor:` en wacht op toetsenbordinvoer:

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.` | Voeg cijfer toe aan de factor |
| `-` | Negatieve factor (alleen als eerste teken — inverteert en schaalt dan) |
| `Backspace` | Verwijder het laatst getypte teken |
| `Enter` | Pas de schaal toe met de getypte factor |

De factor moet ongelijk aan nul zijn. Veelgebruikte waarden:

| Factor | Effect |
|--------|--------|
| `2` | Verdubbelt alle afmetingen |
| `0.5` | Halveert alle afmetingen |
| `1.5` | Vergroot met 50% |
| `-1` | Spiegelt over het basispunt (gelijk aan een rotatie van 180°) |

Er is geen live preview tijdens het typen — het geschaalde resultaat verschijnt pas na het indrukken van **Enter**.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Enter` / `Space` | Bevestig selectie |
| `0`–`9`, `.`, `-` | Start X-coördinaatinvoer (basispuntfase), of schaalfactor (factorfase) |
| `,` | Vergrendel X en ga naar Y-invoer (basispuntfase) |
| `Backspace` | Verwijder laatst getypte teken |
| `Enter` | Bevestig coördinaat of pas schaal toe |
| `Escape` | Annuleren en resetten |

## Selectie tijdens het commando

| Methode | Gedrag |
|--------|-----------|
| **Klik** | Schakelt de entiteit onder de cursor |
| **Slepen naar rechts** (strikt) | Voegt entiteiten toe die volledig binnen het vak liggen |
| **Slepen naar links** (kruisend) | Voegt entiteiten toe die het vak snijden |
| **Enter** / **Space** | Bevestigt de selectie |

## Wat wordt geschaald

Elk entiteitstype wordt ondersteund. Elke entiteit schaalt zijn geometrie ten opzichte van het basispunt:

| Entiteit | Wat verandert |
|--------|-------------|
| Line | Beide eindpunten geschaald vanaf het basispunt |
| Circle | Middelpunt geschaald vanaf het basispunt; straal vermenigvuldigd met de factor |
| Arc | Middelpunt geschaald; straal vermenigvuldigd met de factor; hoeken ongewijzigd |
| Ellipse | Middelpunt geschaald; beide halfasseslengtes vermenigvuldigd met de factor |
| Polyline / Rectangle | Elk hoekpunt geschaald vanaf het basispunt |
| Text | Ankerpunt geschaald; hoogte vermenigvuldigd met de factor |
| Spline | Alle controlepunten / fit-punten geschaald |
