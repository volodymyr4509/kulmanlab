---
sidebar_position: 21
title: Chamfer-kommandot — Skär ett rakt hörn mellan två linjer i KulmanLab CAD
description: Chamfer-kommandot förbinder två Line- eller Polyline-entiteter med ett rakt diagonalt snitt. Du anger två avstånd — ett längs varje entitet — och kommandot klipper tillbaka båda till dessa punkter och infogar en förbindande linje.
keywords: [CAD chamfer-kommando, chamfer linje CAD, diagonalt hörnsnitt, fasat hörn CAD, kulmanlab]
---

# Chamfer

`chamfer`-kommandot skär ett rakt diagonalt hörn mellan två [Line](../line/)- eller [Polyline](../polyline/)-entiteter. Du anger hur långt tillbaka som ska skäras längs varje entitet (d1 och d2), och kommandot klipper tillbaka båda entiteterna till dessa punkter och infogar en förbindande linje mellan dem.

Att använda lika avstånd ger ett symmetriskt 45°-snitt; olika avstånd ger en asymmetrisk fasning.

Chamfer fungerar på **Line- och Polyline**-entiteter.

## Använda chamfer

1. Skriv `chamfer` i terminalen eller klicka på **Chamfer**-knappen i verktygsfältet.
2. **Skriv in det första chamferavståndet** (d1 — avstånd längs den första entiteten) och tryck på **Enter**.
3. **Skriv in det andra chamferavståndet** (d2 — avstånd längs den andra entiteten) och tryck på **Enter**.
4. **Klicka på den första entiteten** — den del du klickar på avgör vilken sida av en eventuell skärning som behålls.
5. **Hovra över den andra entiteten** — en streckad linjeförhandsgranskning visar det resulterande chamfersnittet. Flytta markören till den sida du vill behålla.
6. **Klicka** för att verkställa. Båda entiteterna klipps och chamferlinjen infogas.

```
  Before (d1=5, d2=8):        After:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Sidval

När två linjer korsar varandra tillämpas chamfern på det hörn som definieras av klickpositionerna — den del av varje entitet som ligger på **samma sida som markören** behålls.

- Klicka nära ena änden av den första entiteten för att välja den halvan.
- Flytta markören till önskad halva av den andra entiteten — den streckade förhandsgranskningen uppdateras live.

För polylines avgör klickpositionen vilket **segment** av polylinen som deltar, och den närmaste vertexen på skärningssidan är den som klipps.

## Vad kommandot skapar

- Den första entitetens ändpunkt (eller polyline-vertex) närmast skärningen flyttas till punkten **T1**, belägen d1 längs den första entiteten från skärningen.
- Den andra entitetens ändpunkt (eller polyline-vertex) närmast skärningen flyttas till punkten **T2**, belägen d2 längs den andra entiteten från skärningen.
- En ny Line-entitet infogas från **T1** till **T2**.

Den infogade linjen ärver de aktuella inställningarna för linjevikt, färg, lager och linjetyp.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.` | Lägg till siffra till det aktuella avståndsvärdet |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` | Bekräfta det inskrivna avståndet och gå vidare |
| `Escape` | Avbryt och återställ |

## Entiteter som stöds

| Entitet | Stöds |
|--------|-----------|
| Line | Ja |
| Polyline / Rectangle | Ja |
| Arc, Circle, Ellipse | Nej |
| Text, Spline, Dimension, Leader | Nej |

## Chamfer jämfört med Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Hörntyp | Rakt snitt | Rundad båge |
| Inmatning | Två avstånd (d1, d2) | En radie |
| Infogad entitet | Line | Arc |
| Entiteter som stöds | Linjer och Polylines | Endast linjer |
