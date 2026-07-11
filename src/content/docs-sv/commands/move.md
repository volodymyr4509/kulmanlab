---
title: "Move-kommandot — Flytta valda entiteter via en basspunkt i KulmanLab CAD"
description: "Move-kommandot flyttar en eller flera valda entiteter från en basspunkt till en destination. Stöder förval, vinkellås och exakt avståndsinmatning. Efter flytten förblir entiteterna valda på sin nya position. Alla entitetstyper stöds."
keywords: [CAD move-kommando, flytta entiteter CAD, flytta objekt CAD, vinkellås flytt, exakt avstånd flytt, greppflytt CAD, kulmanlab]
group: edit
order: 1
---

# Move

`move`-kommandot flyttar valda entiteter från en basspunkt till en destinationspunkt. Förskjutningen som appliceras på varje vald entitet är vektorn från bas till destination. Efter flytten förblir alla entiteter valda på sin nya position, redo för fortsatt redigering.

## Två sätt att starta

**Förval, sedan flytt** — välj entiteter först, aktivera sedan:

1. Välj en eller flera entiteter på ritytan.
2. Skriv `move` i terminalen eller klicka på **Move**-knappen i verktygsfältet.
3. **Klicka på basspunkten**, eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
4. **Klicka på destinationen** — alla valda entiteter förskjuts längs bas→destination-vektorn. Koordinatinmatning fungerar även här.

**Aktivera, välj sedan** — starta kommandot utan att något är valt:

1. Skriv `move` eller klicka på verktygsfältsknappen.
2. **Välj objekt** — klicka för att växla enskilda entiteter, eller dra för att välja med ett område.
3. Tryck **Enter** eller **Space** för att bekräfta valet.
4. **Klicka på basspunkten**, klicka sedan på **destinationen** (koordinatinmatning tillgänglig i båda stegen).

```
  Före:                       Efter:
  ● bas                         → ● destination
  [entitet A]                     [entitet A flyttad]
  [entitet B]                     [entitet B flyttad]
```

En ghost-förhandsvisning av alla valda entiteter följer markören från basspunkten till destinationen och visar resultatet innan du klickar.

## Koordinatinmatning

I steget för basspunkt eller destination kan du skriva en exakt position istället för att klicka:

1. Skriv X-värdet.
2. Tryck `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck **Enter** för att bekräfta.

## Vinkellås och exakt avstånd

När basspunkten är satt bevakar kommandot en 45°-fångningsaxel (0°, 45°, 90°, 135°, …). Riktningen **låses** när markören är tillräckligt långt från basen och inom en greppbredd från axeln. När den är låst:

- Ghost-förhandsvisningen fångas till axeln.
- Skriv ett avstånd och tryck **Enter** för att flytta exakt så långt längs den låsta riktningen.
- Ett klick projiceras på axeln, så destinationen hamnar alltid exakt på den.

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.` | Lägger till avståndsvärdet |
| `-` | Negativt avstånd — vänder riktningen längs axeln (endast första tecknet) |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` | Utför flytten med det inskrivna avståndet |

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `Enter` / `Space` | Bekräftar valet och går vidare till basspunktsfasen |
| `0`–`9`, `.`, `-` | Startar X-koordinatinmatning, eller avstånd vid vinkellås |
| `,` | Låser X och går vidare till Y-inmatning |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` | Bekräftar koordinat eller utför flytten med det inskrivna avståndet |
| `Escape` | Avbryter och återställer |

## Aktivera Move från ett grepp

Att klicka på **mittpunktsgreppet** på en vald [Line](../line/) startar Move automatiskt, med mittpunkten redan satt som basspunkt och flyttfasen aktiv. Detta är det snabbaste sättet att omplacera en enskild linje utan att gå igenom valsteget.

## Val under kommandot

När kommandot startar i valfasen:

| Metod | Beteende |
|--------|-----------|
| **Klick** | Växlar entiteten under markören in/ur valet |
| **Dra höger** (strikt) | Lägger till entiteter som ligger helt inom rutan |
| **Dra vänster** (korsande) | Lägger till entiteter som skär rutans gräns |
| **Enter** / **Space** | Bekräftar valet och går vidare till basspunktsfasen |

## Efter flytten

De flyttade entiteterna förblir valda på sin nya position. Det innebär att du direkt kan:
- Köra **Move** igen för att flytta dem ytterligare.
- Köra [Copy](../copy/), [Rotate](../rotate/) eller [Scale](../scale/) utan att välja om.
- Trycka **Delete** för att ta bort dem.

## Move jämfört med Copy

| | Move | Copy |
|---|------|------|
| Ursprunglig position | Tömd — entiteterna finns inte längre kvar där | Behålls — originalen ligger kvar |
| Antal resultat | Samma antal entiteter | En extra uppsättning per operation |
| Val efteråt | Flyttade entiteter valda på ny position | Kopierade entiteter valda på ny position |
| Bäst för | Omplacera geometri | Duplicera geometri |

## Entiteter som stöds

Move fungerar på alla entitetstyper: Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader och alla övriga. Alla entiteter implementerar `translate(dx, dy)` så inga är undantagna.
