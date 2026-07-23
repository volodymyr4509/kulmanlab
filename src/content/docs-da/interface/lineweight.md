---
title: Lineweight-vælger — Styr Stregbredde i KulmanLab CAD
description: Lineweight-vælgeren i KulmanLab CAD-værktøjslinjen sætter stregbredden der anvendes på alle nytegnede entiteter. Understøtter standard DXF lineweight-værdier fra 0,00 mm til 2,11 mm plus ByLayer- og Default-tilstand.
keywords: [CAD lineweight, stregbredde, linjebredde, DXF lineweight, ByLayer lineweight, kulmanlab]
group: interface
order: 4
---

# Lineweight

**Lineweight**-chippen i værktøjslinjen styrer stregbredden der tildeles hver ny entitet du tegner. Klik på den for at åbne rullemenuen.

## Muligheder

| Værdi | Betydning |
|-------|---------|
| **From Layer** | Entiteten arver lineweighten defineret på dens lag. Den faktiske bredde, der vises, afhænger af lagets indstilling. |
| **Default** | Bruger applikationens standardbredde — vist som en tynd linje (1 px). Overstyrer ikke lagindstillingen i DXF. |
| **0,00 mm – 2,11 mm** | En eksplicit fast bredde. Entiteten bærer denne værdi uanset dens lags lineweight. |

Standard DXF lineweight-værdier er tilgængelige: 0,00, 0,05, 0,09, 0,13, 0,15, 0,18, 0,20, 0,25, 0,30, 0,35, 0,40, 0,50, 0,53, 0,60, 0,70, 0,80, 0,90, 1,00, 1,06, 1,20, 1,40, 1,58, 2,00 og 2,11 mm.

## Hvordan det anvendes

Den valgte lineweight anvendes på alle entiteter, der oprettes efter ændringen. Den påvirker ikke eksisterende entiteter bagudrettet.

For at ændre lineweighten på eksisterende entiteter, markér dem og redigér **Lineweight**-feltet i egenskabspanelet, eller brug [MatchProperties](../../commands/match-properties/) til at kopiere den fra en anden entitet.

## Rendering

Lineweights vises i en skala på **3,78 px pr. mm** (96 dpi). En 0,25 mm-linje er cirka 1 px bred på skærmen; en 1,00 mm-linje er cirka 4 px. Meget tynde værdier (0,00 mm og negative) vises altid med mindst 0,5 px, så de forbliver synlige ved ethvert zoomniveau.

## DXF-kompatibilitet

Lineweight-værdier gemmes som heltal i hundrededele af en millimeter (f.eks. 25 = 0,25 mm) i DXF-posterne `LWPOLYLINE`, `LINE`, `CIRCLE` og andre entitetsposter. **From Layer** gemmes som `-1` og **Default** som `-3`, i overensstemmelse med DXF-specifikationen. Filer overlever en fuld rundtur uden tab i enhver DXF-kompatibel applikation.
