---
title: Chamfer-kommando — Skær et Lige Hjørne mellem To Linjer
description: Chamfer-kommandoen forbinder to Line- eller Polyline-entiteter med et lige diagonalt snit. Du angiver to afstande — én langs hver entitet — og kommandoen trimmer begge tilbage til disse punkter og indsætter en forbindelseslinje.
keywords: [CAD chamfer-kommando, skær linje CAD, diagonalt hjørnesnit, affas hjørne CAD, kulmanlab]
group: edit
order: 12
---

# Chamfer

Kommandoen `chamfer` skærer et lige diagonalt hjørne mellem to [Line](../line/)- eller [Polyline](../polyline/)-entiteter. Du angiver, hvor langt tilbage der skal skæres langs hver entitet (d1 og d2), og kommandoen trimmer begge entiteter til disse punkter og indsætter en forbindelseslinje mellem dem.

At bruge lige afstande giver et symmetrisk 45°-snit; forskellige afstande giver en asymmetrisk fasning.

Chamfer fungerer på **Line- og Polyline**-entiteter.

## Bruge chamfer

1. Skriv `chamfer` i terminalen eller klik på **Chamfer**-knappen i værktøjslinjen.
2. **Indtast den første chamfer-afstand** (d1 — afstand langs den første entitet) og tryk **Enter**.
3. **Indtast den anden chamfer-afstand** (d2 — afstand langs den anden entitet) og tryk **Enter**.
4. **Klik den første entitet** — den del du klikker afgør, hvilken side af et eventuelt skæringspunkt der bevares.
5. **Hold markøren over den anden entitet** — en stiplet linjeforhåndsvisning viser det resulterende chamfer-snit. Flyt markøren til den side, du vil bevare.
6. **Klik** for at anvende. Begge entiteter trimmes, og chamfer-linjen indsættes.

```
  Før (d1=5, d2=8):           Efter:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Sidevalg

Når to linjer krydser hinanden, anvendes chamferen på hjørnet defineret af klikpositionerne — den del af hver entitet på **samme side som markøren** bevares.

- Klik nær den ene ende af den første entitet for at vælge den halvdel.
- Flyt markøren til den ønskede halvdel af den anden entitet — den stiplede forhåndsvisning opdateres live.

For Polylines afgør klikpositionen, hvilket **segment** af polylinjen der deltager, og det nærmeste hjørne på skæringssiden er det, der trimmes.

## Hvad kommandoen opretter

- Den første entitets endepunkt (eller polylinje-hjørne) nærmest skæringspunktet flyttes til punktet **T1**, placeret d1 langs den første entitet fra skæringspunktet.
- Den anden entitets endepunkt (eller polylinje-hjørne) nærmest skæringspunktet flyttes til punktet **T2**, placeret d2 langs den anden entitet fra skæringspunktet.
- En ny Line-entitet indsættes fra **T1** til **T2**.

Den indsatte linje arver de aktuelle lineweight-, farve-, lag- og linetype-indstillinger.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Tilføj ciffer til den aktuelle afstandsværdi |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft den indtastede afstand og gå videre |
| `Escape` | Annullér og nulstil |

## Understøttede entiteter

| Entitet | Understøttet |
|--------|-----------|
| Line | Ja |
| Polyline / Rectangle | Ja |
| Arc, Circle, Ellipse | Nej |
| Text, Spline, Dimension, Leader | Nej |

## Chamfer vs Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Hjørnetype | Lige snit | Afrundet bue |
| Input | To afstande (d1, d2) | Én radius |
| Indsat entitet | Line | Arc |
| Understøttede entiteter | Lines og Polylines | Kun Lines |
