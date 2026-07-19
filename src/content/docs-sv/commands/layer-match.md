---
title: LayerMatch — Omtilldela entiteters lager för att matcha en källa
description: LayerMatch-kommandot omtilldelar lagret för en eller flera målentiteter så att det matchar lagret för en källentitet du klickar på.
keywords: [lagermatchning, matcha lager CAD, omtilldela lager kulmanlab, CAD-lagerhantering]
group: layer
order: 2
---

# LayerMatch

`LayerMatch`-kommandot omtilldelar lagret för markerade entiteter så att det matchar lagret för en källentitet du klickar på. Det är det snabbaste sättet att flytta en grupp objekt till rätt lager utan att öppna Layer Manager.

## Arbetsflöde

**Förval, sedan matchning**:

1. Markera de entiteter vars lager du vill ändra.
2. Skriv `LayerMatch` eller klicka på verktygsfältsknappen **Layer Match** (penselikon).
3. **Klicka på källobjektet** — det vars lager du vill kopiera.
4. Alla markerade entiteter flyttas omedelbart till källobjektets lager.

**Aktivera, markera sedan**:

1. Skriv `LayerMatch` eller klicka på verktygsfältsknappen utan att något är markerat.
2. **Välj målobjekt** — klicka för att växla enskilda entiteter, eller dra för att markera efter område.
3. Tryck **Enter** eller **Space** för att bekräfta markeringen.
4. **Klicka på källobjektet** — dess lager appliceras på alla mål.

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `Enter` / `Space` | Bekräftar målmarkeringen och går vidare till källvalsfasen |
| `Escape` | Återställer — går tillbaka till målmarkering eller avbryter helt |

## Beteendedetaljer

- Endast egenskapen `layer` ändras — färg, linjetyp, linjebredd och geometri påverkas inte.
- Källobjektet självt ändras inte.
- Kommandot avslutas när källan har klickats.
- Att klicka på en tom rityta under källvalsfasen gör ingenting.
