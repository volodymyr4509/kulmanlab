---
title: Lineweight-velger — Styr Strekbredde i KulmanLab CAD
description: Lineweight-velgeren i KulmanLab CAD-verktøylinjen setter strekbredden som brukes på alle nytegnede entiteter. Støtter standard DXF lineweight-verdier fra 0,00 mm til 2,11 mm pluss ByLayer- og Default-modus.
keywords: [CAD lineweight, strekbredde, linjebredde, DXF lineweight, ByLayer lineweight, kulmanlab]
group: interface
order: 4
---

# Lineweight

**Lineweight**-chippen i verktøylinjen styrer strekbredden som tildeles hver ny entitet du tegner. Klikk på den for å åpne nedtrekksmenyen.

## Alternativer

| Verdi | Betydning |
|-------|---------|
| **From Layer** | Entiteten arver lineweighten definert på laget. Den faktiske bredden som vises avhenger av lagets innstilling. |
| **Default** | Bruker applikasjonens standardbredde — vist som en tynn linje (1 px). Overstyrer ikke laginnstillingen i DXF. |
| **0,00 mm – 2,11 mm** | En eksplisitt fast bredde. Entiteten bærer denne verdien uavhengig av lagets lineweight. |

Standard DXF lineweight-verdier er tilgjengelige: 0,00, 0,05, 0,09, 0,13, 0,15, 0,18, 0,20, 0,25, 0,30, 0,35, 0,40, 0,50, 0,53, 0,60, 0,70, 0,80, 0,90, 1,00, 1,06, 1,20, 1,40, 1,58, 2,00 og 2,11 mm.

## Hvordan det brukes

Den valgte lineweighten brukes på alle entiteter som opprettes etter endringen. Den påvirker ikke eksisterende entiteter i ettertid.

For å endre lineweighten til eksisterende entiteter, marker dem og rediger **Lineweight**-feltet i egenskapspanelet, eller bruk [MatchProperties](../../commands/match-properties/) for å kopiere den fra en annen entitet.

## Rendering

Lineweights vises i en skala på **3,78 px per mm** (96 dpi). En 0,25 mm-linje er omtrent 1 px bred på skjermen; en 1,00 mm-linje er omtrent 4 px. Svært tynne verdier (0,00 mm og negative) vises alltid med minst 0,5 px slik at de forblir synlige på ethvert zoomnivå.

## DXF-kompatibilitet

Lineweight-verdier lagres som heltall i hundredeler av en millimeter (f.eks. 25 = 0,25 mm) i DXF-postene `LWPOLYLINE`, `LINE`, `CIRCLE` og andre entitetsposter. **From Layer** lagres som `-1` og **Default** som `-3`, i samsvar med DXF-spesifikasjonen. Filer overlever en fullstendig runde uten tap i enhver DXF-kompatibel applikasjon.
