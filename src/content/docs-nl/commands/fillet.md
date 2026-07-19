---
title: Fillet-commando — Rond een Hoek Tussen Twee Lijnen Af
description: Het Fillet-commando verbindt twee Line-entiteiten met een raakboog van een opgegeven straal en snijdt elke lijn terug tot het raakpunt. Een gestreepte boogpreview helpt u de juiste hoek te kiezen voordat u klikt.
keywords: [CAD fillet commando, hoek afronden CAD, fillet boog, raakboog twee lijnen, kulmanlab]
group: edit
order: 11
---

# Fillet

Het `fillet`-commando rondt de hoek tussen twee [Line](../line/)-entiteiten af door een raakboog van een gegeven straal in te voegen en elke lijn terug te snijden tot het punt waar de boog begint. Het resultaat is een gladde, afgeronde hoek die beide lijnen verbindt.

Fillet werkt **alleen op Line-entiteiten**.

## Fillet gebruiken

1. Typ `fillet` in de terminal of klik op de **Fillet**-werkbalkknop.
2. **Typ de fillet-straal** en druk op **Enter**.
3. **Klik op de eerste lijn** — het deel waarop u klikt, bepaalt welke kant van een eventueel snijpunt wordt behouden.
4. **Beweeg over de tweede lijn** — een gestreepte boogpreview toont de resulterende fillet. Beweeg de cursor naar de kant die u wilt behouden.
5. **Klik** om toe te passen. Beide lijnen worden bijgesneden en de boog wordt ingevoegd.

```
  Ervoor:                     Na fillet (straal r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Kantselectie bij kruisende lijnen

Wanneer twee lijnen elkaar kruisen, wordt de fillet toegepast op de hoek die door de klikposities wordt bepaald — het deel van elke lijn aan **dezelfde kant als de cursor** wordt behouden.

- Klik dicht bij een uiteinde van de eerste lijn om die helft te selecteren.
- Beweeg de cursor naar de gewenste helft van de tweede lijn — de gestreepte preview wordt live bijgewerkt.

## Wat het commando maakt

- Het eindpunt van de eerste lijn dat het dichtst bij het snijpunt ligt, wordt verplaatst naar het raakpunt **T1**.
- Het eindpunt van de tweede lijn dat het dichtst bij het snijpunt ligt, wordt verplaatst naar het raakpunt **T2**.
- Een nieuwe Arc-entiteit wordt ingevoegd van **T1** naar **T2**, rakend aan beide lijnen.

De ingevoegde boog erft de huidige instellingen voor lijndikte, kleur, laag en lijntype.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.` | Cijfer toevoegen aan de straalwaarde |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` | Getypte straal bevestigen en doorgaan naar lijnselectie |
| `Escape` | Annuleren en resetten |

## Ondersteunde entiteiten

| Entiteit | Ondersteund |
|--------|-----------|
| Line | Ja — als zowel eerste als tweede entiteit |
| Arc, Circle, Ellipse, Polyline | Nee |
| Text, Spline, Dimension, Leader | Nee |

## Fillet versus Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Hoektype | Afgeronde boog | Rechte snede |
| Invoer | Eén straal | Twee afstanden (d1, d2) |
| Ingevoegde entiteit | Arc | Line |
| Ondersteunde entiteiten | Alleen lijnen | Lijnen en polylijnen |
