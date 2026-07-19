---
title: LayerMakeCurrent — Laag van een Entiteit Actief Maken
description: Het LayerMakeCurrent-commando stelt de huidige tekenlaag in op de laag van een aangeklikte entiteit.
keywords: [laag actief maken, huidige laag instellen CAD, kulmanlab laagbeheer]
group: layer
order: 1
---

# LayerMakeCurrent

Het `LayerMakeCurrent`-commando stelt de **huidige tekenlaag** in op de laag waartoe de aangeklikte entiteit behoort. Nieuwe entiteiten worden vervolgens automatisch op die laag getekend.

## Gebruik

1. Typ `LayerMakeCurrent` in de terminal of klik op de werkbalkknop **Make Current** (pipeticoon).
2. **Klik op een entiteit** op het canvas.
3. De huidige laag wordt bijgewerkt naar de laag van die entiteit. Het commando sluit onmiddellijk af.

## Gedragsdetails

- Als u op een leeg deel van het canvas klikt (geen entiteit geraakt), toont de terminal `no object found` en blijft het commando actief zodat u het opnieuw kunt proberen.
- Alleen de instelling voor de huidige laag wordt gewijzigd — er worden geen entiteiten aangepast.
- De bijgewerkte laag wordt weergegeven in de laagkiezer in de werkbalk.
