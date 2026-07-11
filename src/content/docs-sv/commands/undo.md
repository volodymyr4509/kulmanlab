---
title: Undo-kommandot — Stega tillbaka genom ritningshistoriken i KulmanLab CAD
description: Undo-kommandot ångrar den senaste ritåtgärden ett steg i taget. Upp till 20 steg lagras per fil och sparas i webbläsaren mellan sidladdningar. Att utföra en ny åtgärd efter en ångring rensar redo-stacken.
keywords: [CAD undo-kommando, ångra historik CAD, ångra åtgärd CAD, ångra-steg CAD, webbläsarpersistent undo, kulmanlab]
group: edit
order: 13
---

# Undo

`undo`-kommandot ångrar den senaste ändringen av ritningen — ett steg per anrop. Varje tillägg, borttagning eller redigering av entiteter registreras som en separat historikpost. Undo stegar tillbaka genom dessa poster i omvänd ordning.

## Så ångrar du

- Skriv `undo` i terminalen, eller
- Klicka på **Undo**-knappen i verktygsfältet.

Varje anrop ångrar en registrerad åtgärd. Anropa det upprepade gånger för att stega längre tillbaka.

## Historikbeteende

| Detalj | Värde |
|--------|-------|
| Steg per fil | Upp till **20** |
| Lagring | Webbläsare (IndexedDB / localStorage), per filnamn |
| Överlever sidladdning | Ja — historiken återställs när du öppnar filen igen |
| Ny åtgärd efter ångring | Rensar alla redo-poster framåt om den aktuella positionen |
| Äldsta posten när full | Tas bort för att göra plats för den senaste ändringen |

Varje entitetsmutation registreras: att rita nya entiteter, ta bort entiteter, grip-redigera ändpunkter, tillämpa Move, Rotate, Scale, Mirror, Trim, Extend och Offset skapar alla historikposter.

## Undo jämfört med Redo

| | Undo | Redo |
|---|------|------|
| Riktning | Stegar **bakåt** genom historiken | Stegar **framåt** genom ångrade poster |
| Tillgängligt när | Minst en registrerad åtgärd finns | Minst en Undo har utförts och ingen ny åtgärd har vidtagits |
| Rensas av | Ingenting — historiken ackumuleras tills 20-stegsgränsen | Alla nya ritåtgärder |

Använd [Redo](../redo/) för att återställa en ångrad åtgärd. Verktygsfältsknapparna är gråtonade när respektive riktning inte är tillgänglig.
