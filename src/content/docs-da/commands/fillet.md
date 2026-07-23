---
title: Fillet-kommando — Afrund et Hjørne mellem To Linjer
description: Fillet-kommandoen forbinder to Line-entiteter med en tangentbue med en angivet radius, og trimmer hver linje tilbage til tangentpunktet. En stiplet bue-forhåndsvisning hjælper dig med at vælge det rigtige hjørne, før du klikker.
keywords: [CAD fillet-kommando, afrund hjørne CAD, fillet-bue, tangentbue to linjer, kulmanlab]
group: edit
order: 11
---

# Fillet

Kommandoen `fillet` afrunder hjørnet mellem to [Line](../line/)-entiteter ved at indsætte en tangentbue med en given radius og trimme hver linje tilbage til det punkt, hvor buen begynder. Resultatet er et jævnt, afrundet hjørne, der forbinder begge linjer.

Fillet fungerer kun på **Line-entiteter**.

## Bruge fillet

1. Skriv `fillet` i terminalen eller klik på **Fillet**-knappen i værktøjslinjen.
2. **Indtast fillet-radius** og tryk **Enter**.
3. **Klik den første linje** — den del du klikker afgør, hvilken side af et eventuelt skæringspunkt der bevares.
4. **Hold markøren over den anden linje** — en stiplet bue-forhåndsvisning viser den resulterende fillet. Flyt markøren til den side, du vil bevare.
5. **Klik** for at anvende. Begge linjer trimmes, og buen indsættes.

```
  Før:                        Efter fillet (radius r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Sidevalg for krydsende linjer

Når to linjer krydser hinanden, anvendes filleten på hjørnet defineret af klikpositionerne — den del af hver linje på **samme side som markøren** bevares.

- Klik nær den ene ende af den første linje for at vælge den halvdel.
- Flyt markøren til den ønskede halvdel af den anden linje — den stiplede forhåndsvisning opdateres live.

## Hvad kommandoen opretter

- Den første linjes endepunkt nærmest skæringspunktet flyttes til tangentpunktet **T1**.
- Den anden linjes endepunkt nærmest skæringspunktet flyttes til tangentpunktet **T2**.
- En ny Arc-entitet indsættes fra **T1** til **T2**, tangent til begge linjer.

Den indsatte bue arver de aktuelle lineweight-, farve-, lag- og linetype-indstillinger.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Tilføj ciffer til radiusværdien |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft den indtastede radius og gå videre til linjevalg |
| `Escape` | Annullér og nulstil |

## Understøttede entiteter

| Entitet | Understøttet |
|--------|-----------|
| Line | Ja — som både første og anden entitet |
| Arc, Circle, Ellipse, Polyline | Nej |
| Text, Spline, Dimension, Leader | Nej |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Hjørnetype | Afrundet bue | Lige snit |
| Input | Én radius | To afstande (d1, d2) |
| Indsat entitet | Arc | Line |
| Understøttede entiteter | Kun Lines | Lines og Polylines |
