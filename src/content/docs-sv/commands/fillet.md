---
title: Fillet-kommandot — Runda ett hörn med en tangentiell båge
description: Fillet-kommandot rundar ett hörn mellan två Line-, Arc- eller Polyline-segment med en tangentiell båge av angiven radie. Att runda en polylinjes eget hörn infogar bågen direkt i den; att runda över en öppen polylinje slår ihop båda sidorna till en ny polylinje.
keywords: [CAD fillet-kommando, runda hörn CAD, fillet-båge, tangentiell båge, polyline fillet, båge fillet, kulmanlab]
group: edit
order: 11
---

# Fillet

`Avrunda`-kommandot rundar ett hörn mellan två [Line](../line/)-, [Arc](../arc/)- eller [Polyline](../polyline/)-segment genom att infoga en tangentiell båge med en given radie, och klipper tillbaka (eller slår ihop) de valda entiteterna till den punkten.

Fillet fungerar på **Line-, Arc- och Polyline**-entiteter — inklusive en polylinjes egna raka eller bågsegment.

## Använda fillet

1. Skriv `Avrunda` i terminalen eller klicka på **Fillet**-knappen i verktygsfältet.
2. **Skriv in fillet-radien** och tryck på **Enter**.
3. **Klicka på den första linjen, bågen eller polylinjesegmentet** — den del du klickar på avgör vilken sida av en eventuell skärning som behålls.
4. **Hovra över den andra entiteten** — en streckad bågförhandsgranskning visar den resulterande filleten. Flytta markören till den sida du vill behålla.
5. **Klicka** för att verkställa.

```
  Before:                     After fillet (radius r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Sidval för korsande entiteter

När två entiteter korsar varandra tillämpas filleten på det hörn som definieras av klickpositionerna — den del av varje entitet som ligger på **samma sida som markören** behålls.

- Klicka nära ena änden av den första entiteten för att välja den halvan.
- Flytta markören till önskad halva av den andra entiteten — den streckade förhandsgranskningen uppdateras live.

## Vad kommandot skapar

Vad som blir resultatet beror på vad du har valt:

- **Två fristående Line/Arc-entiteter**, eller vilket par som helst utan en öppen polylinje: båda klipps tillbaka till tangentpunkterna **T1**/**T2**, och en ny Arc-entitet infogas mellan dem.
- **Två segment av samma polylinje som delar en hörnvertex**: ingen ny entitet — filleten blir en del av själva polylinjen. Hörnvertexen ersätts av de två tangentpunkterna, och bågen mellan dem lagras som den kantens bulge — precis som ett rundat polylinjehörn tur-och-retur genom DXF.
- **Allt annat som involverar en öppen polylinje** — två olika öppna polylinjer, eller en öppen polylinje och en fristående Line/Arc: båda slås ihop till **en enda ny polylinje**, där varje sida behålls fram till sin tangentpunkt och binds ihop av fillet-bågen som ytterligare ett bulge-segment, vilket ersätter de ursprungliga entiteterna.

Den infogade eller förlängda bågen ärver de aktuella inställningarna för linjevikt, färg, lager och linjetyp (eller polylinjens egna, när den går upp i den).

## Hörn utan en verklig vinkel att runda

Om de två valda segmenten redan möts tangentiellt vid en delad vertex — ett rakt polylinjehörn, eller en linje som mjukt övergår i ett tangentiellt fortsättningssegment av en båge — finns det inget verkligt hörn som en cirkel kan runda. Fillet upptäcker detta och vägrar med `cannot fillet: no tangent circle fits there` istället för att rita en oönskad slinga.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.` | Lägg till siffra till radievärdet |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` / `Space` | Bekräfta den inskrivna radien och gå vidare till entitetsval |
| `Escape` | Avbryt och återställ |

## Entiteter som stöds

| Entitet | Stöds |
|--------|-----------|
| Line | Ja |
| Arc | Ja |
| Polyline (rakt eller bågsegment) | Ja |
| Circle, Ellipse | Nej |
| Text, Spline, Dimension, Leader | Nej |

## Fillet jämfört med Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Hörntyp | Rundad båge | Rakt snitt |
| Inmatning | En radie | Två avstånd (d1, d2) |
| Infogad entitet | Arc | Line |
| Entiteter som stöds | Lines, Arcs och Polylines (raka eller bågsegment) | Lines och Polylines (endast raka segment) |
