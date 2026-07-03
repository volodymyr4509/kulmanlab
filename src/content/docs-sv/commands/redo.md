---
sidebar_position: 2
title: Redo-kommandot — Återställ ångrade åtgärder i KulmanLab CAD
description: Redo-kommandot återställer den senaste åtgärden som ångrades av Undo och flyttar framåt genom historikstacken. Redo är endast tillgängligt efter en Undo och rensas i samma stund som en ny ritåtgärd utförs.
keywords: [CAD redo-kommando, redo-historik CAD, återställ åtgärd CAD, undo redo CAD, webbläsarpersistent redo, kulmanlab]
---

# Redo

`redo`-kommandot flyttar framåt genom ångrahistoriken och återställer åtgärder som ångrades av [Undo](../undo/). Redo är endast tillgängligt när du har stegat tillbaka med Undo och ännu inte har gjort någon ny ändring.

## Så gör du redo

- Skriv `redo` i terminalen, eller
- Klicka på **Redo**-knappen i verktygsfältet.

Varje anrop återställer en tidigare ångrad åtgärd. Anropa det upprepade gånger för att stega framåt genom alla tillgängliga redo-poster.

## Redo-stackens beteende

| Detalj | Beteende |
|--------|-----------|
| Tillgängligt efter | Ett eller flera [Undo](../undo/)-steg |
| Rensas av | **Alla nya ritåtgärder** — att lägga till, redigera eller ta bort en entitet |
| Lagring | Webbläsare, per fil — överlever sidladdning (så länge ingen ny åtgärd gjordes innan omladdningen) |
| Maximalt djup | Upp till 20 poster (samma pool som Undo) |

När en ny entitet ritas, tas bort eller ändras rensas redo-stacken och dessa poster kan inte återställas. Endast ångrade åtgärder som inte har ersatts av nytt arbete kan göras om.

## Redo jämfört med Undo

| | Redo | Undo |
|---|------|------|
| Riktning | Stegar **framåt** genom ångrade poster | Stegar **bakåt** genom historiken |
| Tillgängligt när | Efter minst en Undo, utan att någon ny åtgärd vidtagits | Minst en registrerad åtgärd finns |
| Rensas av | Alla nya ritåtgärder | Ingenting |

Verktygsfältets Redo-knapp är gråtonad när det inte finns några poster att göra om. Använd [Undo](../undo/) först för att skapa redo-poster.
