---
title: Chamfer Command — Snijd een Rechte Hoek tussen Twee Lijnen
description: Het commando Chamfer verbindt twee Line- of Polyline-entiteiten met een rechte diagonale snede. U geeft twee afstanden op — één langs elke entiteit — en het commando trimt beide terug tot die punten en voegt een verbindende lijn in.
keywords: [CAD chamfer commando, lijn afschuinen CAD, diagonale hoeksnede, hoek afschuinen CAD, kulmanlab]
group: edit
order: 12
---

# Chamfer

Het commando `chamfer` snijdt een rechte diagonale hoek tussen twee [Line](../line/)- of [Polyline](../polyline/)-entiteiten. U geeft op hoever er langs elke entiteit teruggesneden moet worden (d1 en d2), en het commando trimt beide entiteiten tot die punten en voegt daartussen een verbindende lijn in.

Het gebruik van gelijke afstanden levert een symmetrische snede van 45° op; verschillende afstanden leveren een asymmetrische afschuining op.

Chamfer werkt op **Line- en Polyline**-entiteiten.

## Chamfer gebruiken

1. Typ `chamfer` in de terminal of klik op de werkbalkknop **Chamfer**.
2. **Typ de eerste chamferafstand** (d1 — afstand langs de eerste entiteit) en druk op **Enter**.
3. **Typ de tweede chamferafstand** (d2 — afstand langs de tweede entiteit) en druk op **Enter**.
4. **Klik op de eerste entiteit** — het deel waarop u klikt, bepaalt welke kant van een eventuele kruising behouden blijft.
5. **Beweeg over de tweede entiteit** — een gestippelde lijnpreview toont de resulterende chamfersnede. Beweeg de cursor naar de kant die u wilt behouden.
6. **Klik** om toe te passen. Beide entiteiten worden getrimd en de chamferlijn wordt ingevoegd.

```
  Voor (d1=5, d2=8):           Na:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Zijde selecteren

Wanneer twee lijnen elkaar kruisen, wordt de chamfer toegepast op de hoek die door de klikposities wordt bepaald — het deel van elke entiteit aan **dezelfde kant als de cursor** blijft behouden.

- Klik bij een uiteinde van de eerste entiteit om die helft te selecteren.
- Beweeg de cursor naar de gewenste helft van de tweede entiteit — de gestippelde preview werkt live bij.

Bij Polylines bepaalt de klikpositie welk **segment** van de polylijn deelneemt, en het dichtstbijzijnde hoekpunt aan de kant van de kruising is degene die wordt getrimd.

## Wat het commando maakt

- Het eindpunt (of polylijnhoekpunt) van de eerste entiteit dat het dichtst bij de kruising ligt, wordt verplaatst naar punt **T1**, gelegen op afstand d1 langs de eerste entiteit vanaf de kruising.
- Het eindpunt (of polylijnhoekpunt) van de tweede entiteit dat het dichtst bij de kruising ligt, wordt verplaatst naar punt **T2**, gelegen op afstand d2 langs de tweede entiteit vanaf de kruising.
- Een nieuwe Line-entiteit wordt ingevoegd van **T1** naar **T2**.

De ingevoegde lijn erft de huidige instellingen voor lijndikte, kleur, laag en lijntype.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.` | Cijfer toevoegen aan de huidige afstandswaarde |
| `Backspace` | Verwijder laatst getypte teken |
| `Enter` | Bevestig de getypte afstand en ga verder |
| `Escape` | Annuleer en reset |

## Ondersteunde entiteiten

| Entiteit | Ondersteund |
|--------|-----------|
| Line | Ja |
| Polyline / Rectangle | Ja |
| Arc, Circle, Ellipse | Nee |
| Text, Spline, Dimension, Leader | Nee |

## Chamfer versus Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Hoektype | Rechte snede | Afgeronde boog |
| Invoer | Twee afstanden (d1, d2) | Eén radius |
| Ingevoegde entiteit | Line | Arc |
| Ondersteunde entiteiten | Lines en Polylines | Alleen Lines |
