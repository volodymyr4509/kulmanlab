---
title: Align — Verplaats, Draai en Schaal Entiteiten met Puntparen
description: Het commando Align verplaatst geselecteerde entiteiten met een of twee paren bron-/doelpunten en combineert verplaatsen, draaien en optioneel uniform schalen in één bewerking. Werkt als een combinatie van Move + Rotate + Scale.
keywords: [CAD align commando, entiteiten uitlijnen CAD, verplaatsen draaien schalen, puntpaar uitlijning, AutoCAD ALIGN equivalent, kulmanlab]
group: edit
order: 6
---

# Align

Het commando `align` verplaatst geselecteerde entiteiten met een of twee paren bron-/doelpunten. Met één paar gedraagt het zich precies als [Move](../move/) (alleen verplaatsen). Met twee paren draait het de selectie ook zodat de richting bron-naar-bron overeenkomt met de richting doel-naar-doel, en kan het optioneel schalen zodat de lengte van het bronsegment overeenkomt met de lengte van het doelsegment — verplaatsen, draaien en schalen in één enkele bewerking.

## Twee manieren om te starten

**Eerst selecteren, dan uitlijnen** — selecteer eerst entiteiten en activeer daarna:

1. Selecteer een of meer entiteiten op het canvas.
2. Typ `align` in de terminal of klik op de werkbalkknop **Align**.
3. **Klik op het eerste bronpunt (S1)**, klik daarna op het **eerste doelpunt (D1)**.
4. **Klik op het tweede bronpunt (S2)**, of druk op **Enter** om nu direct een uitlijning toe te passen die alleen verplaatst.
5. **Klik op het tweede doelpunt (D2)**.
6. Beantwoord de schaalprompt: druk op **Y** om te schalen, of op **N** / **Enter** om de oorspronkelijke grootte te behouden.

**Eerst activeren, dan selecteren** — start het commando zonder dat er iets geselecteerd is:

1. Typ `align` of klik op de werkbalkknop.
2. **Selecteer objecten** — klik om afzonderlijke entiteiten aan/uit te zetten, of sleep om per gebied te selecteren.
3. Druk op **Enter** of **Spatie** om de selectie te bevestigen.
4. Ga verder met S1 → D1 → S2 → D2 → schaalprompt zoals hierboven.

> De terminal heeft alleen genoeg letters nodig om ondubbelzinnig te zijn — door `al` te typen en op **Enter** te drukken activeert u Align direct, omdat geen enkele andere commandonaam met deze twee letters begint.

## Anatomie van een uitlijning

```
  Bronpunten (op de entiteiten):       Doelpunten:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Resultaat: de selectie wordt verplaatst zodat S1 op D1 komt,
  daarna gedraaid rond D1 zodat de richting S1→S2 overeenkomt
  met de richting D1→D2 — en, als u kiest om te schalen,
  wordt de grootte aangepast zodat |S1S2| gelijk wordt aan |D1D2|.
```

Een live ghost-preview volgt de cursor bij elke stap: een verplaatsingspreview terwijl D1 wordt geplaatst, daarna een gedraaide (gestippelde) preview zodra D2 wordt gepositioneerd.

## Uitlijning met één punt (alleen verplaatsen)

Nadat D1 is geplaatst, drukt u op **Enter** in plaats van op een tweede bronpunt te klikken. De selectie wordt verplaatst volgens de vector S1→D1 — geen rotatie of schaling — identiek aan een [Move](../move/) met S1 als basispunt en D1 als bestemming.

## Uitlijning met twee punten (verplaatsen + draaien + optioneel schalen)

Zodra S2 en D2 beide zijn geplaatst:

- **Rotatiehoek** — het verschil tussen de doelrichting (`D1 → D2`) en de bronrichting (`S1 → S2`).
- **Schaalprompt** — `scale objects to alignment points? [Yes/No] <N>` verschijnt, met **No** als standaard:
  - Druk op **Y** om de selectie ook uniform te schalen rond D1, zodat de afstand `S1–S2` gelijk wordt aan de afstand `D1–D2`.
  - Druk op **N** of **Enter** om de oorspronkelijke grootte te behouden — alleen verplaatsen en draaien worden toegepast.

Het indrukken van een toets bij de schaalprompt past de uitlijning direct toe — er is geen aparte bevestigingsstap na het kiezen van Yes of No.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Enter` / `Spatie` | Bevestig selectie en ga verder naar de S1-fase |
| `Enter` (bij de S2-stap) | Sla rotatie over — pas een uitlijning toe die alleen verplaatst, met S1 en D1 |
| `Y` | Pas de uitlijning toe met schaling |
| `N` / `Enter` (bij de schaalprompt) | Pas de uitlijning toe zonder schaling |
| `Escape` | Tijdens het plaatsen van punten: verwijder deze en keer terug naar de selectiefase; zonder selectie: annuleer het commando |

## Selectie tijdens het commando

Wanneer het commando start in de selectiefase:

| Methode | Gedrag |
|--------|-----------|
| **Klik** | Zet de entiteit onder de cursor aan/uit in de selectie |
| **Sleep naar rechts** (strikt) | Voegt entiteiten toe die volledig binnen het vak vallen |
| **Sleep naar links** (kruisend) | Voegt entiteiten toe die de rand van het vak snijden |
| **Enter** / **Spatie** | Bevestigt de selectie en gaat naar de S1-fase |

## Na het uitlijnen

De uitgelijnde entiteiten blijven geselecteerd op hun nieuwe positie, en het commando eindigt automatisch — voer **Align** opnieuw uit, of schakel over naar [Move](../move/), [Rotate](../rotate/) of [Scale](../scale/) zonder opnieuw te selecteren.

## Align versus Move

| | Align | Move |
|---|-------|------|
| Puntparen | 1 (alleen verplaatsen) of 2 (verplaatsen + draaien + schalen) | 1 (alleen verplaatsen) |
| Rotatie | Ja, met een tweede puntpaar | Nee |
| Schaling | Optioneel, met een tweede puntpaar | Nee |
| Beste voor | Eén vorm passend maken op een andere met referentiepunten | Eenvoudig herpositioneren |

## Ondersteunde entiteiten

Align werkt op elk entiteittype dat door Move, Rotate en Scale wordt ondersteund — dezelfde bewerkingen `translate`, `rotate` en `scale` die deze commando's gebruiken, worden achtereenvolgens toegepast, dus niets wordt uitgesloten.
