---
title: Fillet-commando — Rond een Hoek Af met een Raakboog
description: Het Fillet-commando rondt een hoek tussen twee Line-, Arc- of Polyline-segmenten af met een raakboog van een opgegeven straal. Het afronden van de eigen hoek van een polylijn voegt de boog er direct in in; het afronden over een open polylijn heen voegt beide kanten samen tot één nieuwe polylijn.
keywords: [CAD fillet commando, hoek afronden CAD, fillet boog, raakboog, polylijn fillet, boog fillet, kulmanlab]
group: edit
order: 11
---

# Fillet

Het `Afronden`-commando rondt een hoek tussen twee [Line](../line/)-, [Arc](../arc/)- of [Polyline](../polyline/)-segmenten af door een raakboog van een gegeven straal in te voegen, waarbij de gekozen entiteiten tot dat punt worden bijgesneden (of samengevoegd).

Fillet werkt op **Line-, Arc- en Polyline**-entiteiten — inclusief de rechte of boogsegmenten van een polylijn.

## Fillet gebruiken

1. Typ `Afronden` in de terminal of klik op de **Fillet**-werkbalkknop.
2. **Typ de fillet-straal** en druk op **Enter**.
3. **Klik op de eerste lijn, boog of polylijnsegment** — het deel waarop u klikt, bepaalt welke kant van een eventueel snijpunt wordt behouden.
4. **Beweeg over de tweede entiteit** — een gestreepte boogpreview toont de resulterende fillet. Beweeg de cursor naar de kant die u wilt behouden.
5. **Klik** om toe te passen.

```
  Ervoor:                     Na fillet (straal r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Kantselectie bij kruisende entiteiten

Wanneer twee entiteiten elkaar kruisen, wordt de fillet toegepast op de hoek die door de klikposities wordt bepaald — het deel van elke entiteit aan **dezelfde kant als de cursor** wordt behouden.

- Klik dicht bij een uiteinde van de eerste entiteit om die helft te selecteren.
- Beweeg de cursor naar de gewenste helft van de tweede entiteit — de gestreepte preview wordt live bijgewerkt.

## Wat het commando maakt

Wat eruit komt, hangt af van wat u heeft gekozen:

- **Twee zelfstandige Line/Arc-entiteiten**, of elk paar zonder een open polylijn: beide worden bijgesneden tot de raakpunten **T1**/**T2**, en er wordt een nieuwe Arc-entiteit tussen ingevoegd.
- **Twee segmenten van dezelfde polylijn die een hoekpunt delen**: geen nieuwe entiteit — de fillet wordt onderdeel van de polylijn zelf. Het hoekpunt wordt vervangen door de twee raakpunten, en de boog daartussen wordt opgeslagen als de bulge van die zijde — precies zoals een afgeronde polylijnhoek via DXF heen en weer reist.
- **Al het overige met een open polylijn** — twee verschillende open polylijnen, of een open polylijn en een zelfstandige Line/Arc: beide worden samengevoegd tot **één nieuwe polylijn**, waarbij elke kant tot zijn raakpunt behouden blijft en verbonden wordt door de fillet-boog als extra bulge-segment, ter vervanging van de oorspronkelijke entiteiten.

De ingevoegde of verlengde boog erft de huidige instellingen voor lijndikte, kleur, laag en lijntype (of die van de polylijn zelf, wanneer hij daarin opgaat).

## Hoeken zonder echte hoek om af te ronden

Als de twee gekozen segmenten elkaar al raaklijnig ontmoeten op een gedeeld hoekpunt — een rechte polylijnhoek, of een lijn die soepel overgaat in een tangentieel vervolgd boogsegment — is er geen echte hoek die een cirkel kan afronden. Fillet detecteert dit en weigert met `cannot fillet: no tangent circle fits there` in plaats van een ongewenste lus te tekenen.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.` | Cijfer toevoegen aan de straalwaarde |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` / `Spatie` | Getypte straal bevestigen en doorgaan naar entiteitselectie |
| `Escape` | Annuleren en resetten |

## Ondersteunde entiteiten

| Entiteit | Ondersteund |
|--------|-----------|
| Line | Ja |
| Arc | Ja |
| Polyline (recht of boogsegment) | Ja |
| Circle, Ellipse | Nee |
| Text, Spline, Dimension, Leader | Nee |

## Fillet versus Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Hoektype | Afgeronde boog | Rechte snede |
| Invoer | Eén straal | Twee afstanden (d1, d2) |
| Ingevoegde entiteit | Arc | Line |
| Ondersteunde entiteiten | Lines, Arcs en Polylines (rechte of boogsegmenten) | Lines en Polylines (alleen rechte segmenten) |
