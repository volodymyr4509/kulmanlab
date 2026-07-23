---
title: Undo-kommando — Gå Tilbage gennem Tegnehistorik
description: Undo-kommandoen reverserer den seneste tegnehandling ét trin ad gangen. Op til 20 trin gemmes pr. fil og bevares i browseren på tværs af sideindlæsninger. At udføre en ny handling efter fortrydelse rydder gør om-stakken.
keywords: [CAD undo-kommando, fortryd-historik CAD, reverser handling CAD, fortryd-trin CAD, browser vedvarende fortrydelse, kulmanlab]
group: edit
order: 13
---

# Undo

Kommandoen `undo` reverserer den seneste ændring i tegningen — ét trin pr. kaldelse. Hver tilføjelse, sletning eller redigering af entiteter registreres som en separat historikpost. Undo går tilbage gennem disse poster i omvendt rækkefølge.

## Sådan fortryder du

- Skriv `undo` i terminalen, eller
- Klik på **Undo**-knappen i værktøjslinjen.

Hver kaldelse reverserer én registreret handling. Kald den gentagne gange for at gå længere tilbage.

## Historikadfærd

| Detalje | Værdi |
|--------|-------|
| Trin pr. fil | Op til **20** |
| Lagring | Browser (IndexedDB / localStorage), pr. filnavn |
| Overlever sideindlæsning | Ja — historikken gendannes, når du genåbner filen |
| Ny handling efter fortrydelse | Rydder alle gør om-poster foran den aktuelle position |
| Ældste post når fuld | Fjernes for at give plads til den nyeste ændring |

Hver entitetsændring registreres: at tegne nye entiteter, slette entiteter, grebredigere endepunkter, anvende Move, Rotate, Scale, Mirror, Trim, Extend og Offset opretter alle historikposter.

## Undo vs Redo

| | Undo | Redo |
|---|------|------|
| Retning | Går **bagud** gennem historikken | Går **fremad** gennem fortrudte poster |
| Tilgængelig når | Mindst én registreret handling findes | Mindst én Undo er udført, og ingen ny handling er foretaget |
| Ryddes af | Ingenting — historikken samler sig op til grænsen på 20 trin | Enhver ny tegnehandling |

Brug [Redo](../redo/) til at genanvende en fortrudt handling. Værktøjslinjeknapperne er nedtonede, når den respektive retning ikke er tilgængelig.
