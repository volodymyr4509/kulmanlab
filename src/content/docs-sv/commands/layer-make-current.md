---
title: LayerMakeCurrent — Ställ in en entitets lager som aktuellt i KulmanLab CAD
description: LayerMakeCurrent-kommandot ställer in det aktuella ritningslagret så att det matchar lagret för en klickad entitet.
keywords: [ställ in aktuellt lager, ange aktuellt lager CAD, kulmanlab lagerhantering]
group: layer
order: 1
---

# LayerMakeCurrent

`LayerMakeCurrent`-kommandot ställer in **det aktuella ritningslagret** till vilket lager den klickade entiteten än tillhör. Nya entiteter ritas därefter automatiskt på det lagret.

## Användning

1. Skriv `LayerMakeCurrent` i terminalen eller klicka på verktygsfältsknappen **Make Current** (pipettikon).
2. **Klicka på valfri entitet** på ritytan.
3. Det aktuella lagret uppdateras så att det matchar den entitetens lager. Kommandot avslutas omedelbart.

## Beteendedetaljer

- Om du klickar på tom rityta (ingen entitet träffas) visar terminalen `no object found` och kommandot förblir aktivt så att du kan försöka igen.
- Endast inställningen för aktuellt lager ändras — inga entiteter ändras.
- Det uppdaterade lagret återspeglas i lagerväljaren i verktygsfältet.
