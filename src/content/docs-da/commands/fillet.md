---
title: Fillet-kommando — Afrund et Hjørne med en Tangentbue
description: Fillet-kommandoen afrunder et hjørne mellem to Line-, Arc- eller Polyline-segmenter med en tangentbue med en angivet radius. At afrunde en polylinjes eget hjørne indsætter buen direkte i den; at afrunde over en åben polylinje sammenlægger begge sider til en ny polylinje.
keywords: [CAD fillet-kommando, afrund hjørne CAD, fillet-bue, tangentbue, polylinje fillet, bue fillet, kulmanlab]
group: edit
order: 11
---

# Fillet

Kommandoen `Afrund` afrunder et hjørne mellem to [Line](../line/)-, [Arc](../arc/)- eller [Polyline](../polyline/)-segmenter ved at indsætte en tangentbue med en given radius, og trimmer (eller sammenlægger) de valgte entiteter til det punkt.

Fillet fungerer på **Line-, Arc- og Polyline**-entiteter — inklusive en polylinjes egne lige eller buesegmenter.

## Bruge fillet

1. Skriv `Afrund` i terminalen eller klik på **Fillet**-knappen i værktøjslinjen.
2. **Indtast fillet-radius** og tryk **Enter**.
3. **Klik den første linje, bue eller polylinjesegment** — den del du klikker afgør, hvilken side af et eventuelt skæringspunkt der bevares.
4. **Hold markøren over den anden entitet** — en stiplet bue-forhåndsvisning viser den resulterende fillet. Flyt markøren til den side, du vil bevare.
5. **Klik** for at anvende.

```
  Før:                        Efter fillet (radius r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Sidevalg for krydsende entiteter

Når to entiteter krydser hinanden, anvendes filleten på hjørnet defineret af klikpositionerne — den del af hver entitet på **samme side som markøren** bevares.

- Klik nær den ene ende af den første entitet for at vælge den halvdel.
- Flyt markøren til den ønskede halvdel af den anden entitet — den stiplede forhåndsvisning opdateres live.

## Hvad kommandoen opretter

Hvad du ender med, afhænger af hvad du har valgt:

- **To selvstændige Line/Arc-entiteter**, eller et hvilket som helst par uden en åben polylinje: begge trimmes tilbage til tangentpunkterne **T1**/**T2**, og en ny Arc-entitet indsættes mellem dem.
- **To segmenter af samme polylinje, der deler et hjørnepunkt**: ingen ny entitet — filleten bliver en del af selve polylinjen. Hjørnepunktet erstattes af de to tangentpunkter, og buen mellem dem gemmes som bulge for den kant — præcis som et afrundet polylinjehjørne rundtur gennem DXF.
- **Alt andet, der involverer en åben polylinje** — to forskellige åbne polylinjer, eller en åben polylinje og en selvstændig Line/Arc: begge sammenlægges til **én ny polylinje**, hvor hver side bevares frem til sit tangentpunkt og bindes sammen af fillet-buen som endnu et bulge-segment, som erstatter de oprindelige entiteter.

Den indsatte eller forlængede bue arver de aktuelle lineweight-, farve-, lag- og linetype-indstillinger (eller polylinjens egne, når den bliver en del af den).

## Hjørner uden en reel vinkel at afrunde

Hvis de to valgte segmenter allerede mødes tangentielt i et delt hjørnepunkt — et lige polylinjehjørne, eller en linje der glider blødt over i et tangentielt fortsættelsessegment af en bue — findes der ikke noget reelt hjørne, en cirkel kan afrunde. Fillet opdager dette og nægter med `cannot fillet: no tangent circle fits there` i stedet for at tegne en uønsket løkke.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Tilføj ciffer til radiusværdien |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` / `Space` | Bekræft den indtastede radius og gå videre til entitetsvalg |
| `Escape` | Annullér og nulstil |

## Understøttede entiteter

| Entitet | Understøttet |
|--------|-----------|
| Line | Ja |
| Arc | Ja |
| Polyline (lige eller buesegment) | Ja |
| Circle, Ellipse | Nej |
| Text, Spline, Dimension, Leader | Nej |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Hjørnetype | Afrundet bue | Lige snit |
| Input | Én radius | To afstande (d1, d2) |
| Indsat entitet | Arc | Line |
| Understøttede entiteter | Lines, Arcs og Polylines (lige eller buesegmenter) | Lines og Polylines (kun lige segmenter) |
