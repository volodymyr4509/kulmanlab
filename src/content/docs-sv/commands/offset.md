---
sidebar_position: 11
title: Offset-kommandot — Skapa parallella kopior på ett fast avstånd i KulmanLab CAD
description: Offset-kommandot skapar en parallell kopia av en Line, Circle, Arc, Ellipse eller Polyline på ett inskrivet avstånd. Avståndet anges en gång och återanvänds för flera offset. Ett klick på önskad sida avgör i vilken riktning kopian visas. Fem entitetstyper stöds.
keywords: [CAD offset-kommando, parallell kopia CAD, offset linje CAD, offset cirkel CAD, offset polyline CAD, koncentrisk offset, kulmanlab]
---

# Offset

`offset`-kommandot skapar en parallell kopia av en entitet på ett fast vinkelrätt avstånd. Du skriver in avståndet en gång, klickar sedan på entiteter och väljer en sida — kommandot förblir redo med samma avstånd så att du kan offseta flera objekt under en session.

Entitetstyper som stöds: **Line, Circle, Arc, Ellipse, Polyline** (inklusive rektanglar).

## Använda offset

1. Skriv `offset` i terminalen eller klicka på **Offset**-knappen i verktygsfältet.
2. **Skriv in offsetavståndet** och tryck på **Enter** eller **Space**.
3. **Klicka på en entitet** att offseta — om entiteten inte är en typ som stöds visas ett felmeddelande och du kan klicka på en annan entitet.
4. **Flytta markören** till den sida där kopian ska visas — en live-förhandsgranskning följer med.
5. **Klicka** för att placera offset-kopian.

Efter varje placering återgår kommandot till steg 3 med **samma avstånd**, redo för nästa offset. Tryck på **Escape** för att återställa till avståndsinmatningssteget.

```
  Distance: 10

  ─────────────────    ← original line
  ─────────────────    ← offset copy (10 units below)
```

## Offset-beteende per entitet

| Entitet | Hur offseten beräknas |
|--------|---------------------------|
| **Line** | Parallell linje förskjuten vinkelrätt mot den ursprungliga riktningen |
| **Circle** | Koncentrisk cirkel; klicka utanför → större radie, innanför → mindre radie |
| **Arc** | Koncentrisk båge med ny radie; samma vinkelspann bevaras |
| **Ellipse** | Båda halvaxlarna ökas eller minskas med samma avstånd |
| **Polyline** | Varje segment offsetas oberoende; angränsande offsetsegment gerade i hörnen |

För **Circle**, **Arc** och **Ellipse**: om en inåtriktad offset skulle reducera en radie eller halvaxel till noll eller lägre, tillämpas inte offseten.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.` | Lägg till siffra till avståndsvärdet |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` / `Space` | Bekräfta det inskrivna avståndet och gå vidare till entitetsval |
| `Escape` | Återställ till avståndsinmatningssteget |

## Om arbetsflödet

Avståndet förblir inställt tills du trycker på **Escape**. Detta gör det effektivt att offseta många entiteter med samma avstånd — skriv in avståndet en gång, klicka sedan och välj sida för varje entitet i tur och ordning.

## Offset jämfört med Copy

| | Offset | Copy |
|---|--------|------|
| Förskjutning | Vinkelrätt mot entitetens geometri | Godtycklig vektor (bas → destination) |
| Entiteter som stöds | Line, Circle, Arc, Ellipse, Polyline | Alla entitetstyper |
| Avståndsinmatning | Skrivs innan entiteten väljs | Skrivs eller klickas efter valet |
| Bäst för | Parallella linjer, koncentriska cirklar, in-/utåtgående banor | Placera dubbletter på godtyckliga positioner |
