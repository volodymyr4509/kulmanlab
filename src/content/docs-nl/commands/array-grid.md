---
title: Array Grid-commando — Entiteiten Herhalen in Rijen en Kolommen
description: Het commando Array Grid maakt een rechthoekig raster van kopieën van geselecteerde entiteiten — typ het aantal rijen, kolommen en de tussenruimte rechtstreeks in de terminal, zonder op punten te hoeven klikken.
keywords: [CAD array-commando, arraygrid, rechthoekig array CAD, rasterpatroon CAD, entiteiten herhalen CAD, array kopiëren CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

Het commando `ArrayGrid` maakt een rechthoekig raster van kopieën van geselecteerde entiteiten — voer het aantal rijen, het aantal kolommen en de tussenruimte in, allemaal getypt in de terminal. De oorspronkelijke selectie bezet de cel rij 0, kolom 0; elke andere cel is een verplaatste kopie.

## Twee manieren om te starten

**Eerst selecteren, dan array** — selecteer eerst entiteiten en activeer daarna:

1. Selecteer een of meer entiteiten op het canvas.
2. Typ `arraygrid` in de terminal (`arr` is al genoeg — ondubbelzinnig) of klik op de werkbalkknop **Array Grid**.
3. Typ het aantal **rijen** en druk op **Enter**.
4. Typ het aantal **kolommen** en druk op **Enter**.
5. Typ de **tussenruimte tussen rijen** en druk op **Enter**.
6. Typ de **tussenruimte tussen kolommen** en druk op **Enter** — het raster wordt direct aangemaakt.

**Eerst activeren, dan selecteren** — start het commando zonder dat er iets geselecteerd is:

1. Typ `arraygrid` of klik op de werkbalkknop.
2. **Selecteer objecten** — klik om afzonderlijke entiteiten aan/uit te zetten, of sleep om per gebied te selecteren.
3. Druk op **Enter** of **Spatie** om de selectie te bevestigen.
4. Ga verder met rijen → kolommen → rijafstand → kolomafstand zoals hierboven.

```
  2 rijen x 3 kolommen:

  [B] [B] [B]   <- rij 1 (verplaatste kopieën)
  [A] [A] [A]   <- rij 0: oorspronkelijke selectie, kopieën naar rechts
```

> De terminal heeft alleen genoeg letters nodig om ondubbelzinnig te zijn — `arr` typen en op **Enter** drukken activeert Array Grid direct, omdat geen enkele andere commandonaam met deze drie letters begint (Arc, Area, Align en Angle wijken allemaal eerder af).

## Rijen, kolommen en tussenruimte

| Prompt | Accepteert | Opmerkingen |
|--------|-----------|-------------|
| Rijen | Positieve gehele getallen (1, 2, 3…) | Alleen cijfers — geen decimaalteken of teken |
| Kolommen | Positieve gehele getallen (1, 2, 3…) | Alleen cijfers — geen decimaalteken of teken |
| Rijafstand | Ondertekende decimaal (bijv. `10`, `-5.5`) | Afstand tussen rijen; negatief keert de richting om |
| Kolomafstand | Ondertekende decimaal (bijv. `10`, `-5.5`) | Afstand tussen kolommen; negatief keert de richting om |

Met 1 rij en 1 kolom worden er geen kopieën gemaakt — het commando sluit af zonder de tekening te wijzigen.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Enter` / `Spatie` | Bevestigt de selectie en gaat verder naar de rijenprompt |
| `0`–`9` | Voer cijfers in voor rijen of kolommen |
| `0`–`9`, `.`, `-` | Voer cijfers in voor rij-/kolomafstand (`-` alleen als eerste teken) |
| `Backspace` | Verwijdert het laatst getypte teken van de huidige prompt |
| `Enter` | Bevestigt de huidige prompt en gaat verder naar de volgende |
| `Escape` | Wist de getypte rijen-/kolommen-/afstandswaarden en keert terug naar de selectiefase |

## Selectie tijdens het commando

| Methode | Gedrag |
|--------|-----------|
| **Klik** | Zet de entiteit onder de cursor aan/uit in de selectie |
| **Sleep naar rechts** (strikt) | Voegt entiteiten toe die volledig binnen het vak vallen |
| **Sleep naar links** (kruisend) | Voegt entiteiten toe die de rand van het vak snijden |
| **Enter** / **Spatie** | Bevestigt de selectie en gaat verder naar de rijenprompt |

## Na de array

De nieuwe kopieën worden aan de tekening toegevoegd en het commando sluit af — de oorspronkelijke selectie wordt gewist. Voer **Array Grid** opnieuw uit, of start een nieuw commando.

## Array Grid versus Copy

| | Array Grid | Copy |
|---|-----------|------|
| Puntselectie | Geen — rijen, kolommen en tussenruimte worden getypt | Basispunt en bestemming worden aangeklikt (of getypt) |
| Gemaakte kopieën | Rijen × Kolommen − 1 | Precies 1 per kopieerbewerking |
| Indeling | Regelmatig rechthoekig raster | Overal, bij elke verschuiving |
| Beste voor | Een eenheid herhalen in een regelmatig patroon (gaten, tegels, bevestigingsmiddelen) | Eén enkel duplicaat op een willekeurige positie |

## Ondersteunde entiteiten

Array Grid werkt op elk entiteittype. Alle entiteiten implementeren intern `translate(dx, dy)` — dezelfde bewerking die [Copy](../copy/) en [Move](../move/) gebruiken — dus er wordt niets uitgesloten.
