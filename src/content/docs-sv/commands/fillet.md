---
title: Fillet-kommandot — Runda ett hörn mellan två linjer i KulmanLab CAD
description: Fillet-kommandot förbinder två Line-entiteter med en tangentiell båge av angiven radie och klipper tillbaka varje linje till tangentpunkten. En streckad bågförhandsgranskning hjälper dig att välja rätt hörn innan du klickar.
keywords: [CAD fillet-kommando, runda hörn CAD, fillet-båge, tangentiell båge två linjer, kulmanlab]
group: edit
order: 11
---

# Fillet

`fillet`-kommandot rundar hörnet mellan två [Line](../line/)-entiteter genom att infoga en tangentiell båge med en given radie och klippa tillbaka varje linje till den punkt där bågen börjar. Resultatet är ett mjukt, avrundat hörn som förbinder båda linjerna.

Fillet fungerar endast på **Line-entiteter**.

## Använda fillet

1. Skriv `fillet` i terminalen eller klicka på **Fillet**-knappen i verktygsfältet.
2. **Skriv in fillet-radien** och tryck på **Enter**.
3. **Klicka på den första linjen** — den del du klickar på avgör vilken sida av en eventuell skärning som behålls.
4. **Hovra över den andra linjen** — en streckad bågförhandsgranskning visar den resulterande filleten. Flytta markören till den sida du vill behålla.
5. **Klicka** för att verkställa. Båda linjerna klipps och bågen infogas.

```
  Before:                     After fillet (radius r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Sidval för korsande linjer

När två linjer korsar varandra tillämpas filleten på det hörn som definieras av klickpositionerna — den del av varje linje som ligger på **samma sida som markören** behålls.

- Klicka nära ena änden av den första linjen för att välja den halvan.
- Flytta markören till önskad halva av den andra linjen — den streckade förhandsgranskningen uppdateras live.

## Vad kommandot skapar

- Den första linjens ändpunkt närmast skärningen flyttas till tangentpunkten **T1**.
- Den andra linjens ändpunkt närmast skärningen flyttas till tangentpunkten **T2**.
- En ny Arc-entitet infogas från **T1** till **T2**, tangentiell mot båda linjerna.

Den infogade bågen ärver de aktuella inställningarna för linjevikt, färg, lager och linjetyp.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.` | Lägg till siffra till radievärdet |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` | Bekräfta den inskrivna radien och gå vidare till linjeval |
| `Escape` | Avbryt och återställ |

## Entiteter som stöds

| Entitet | Stöds |
|--------|-----------|
| Line | Ja — som både första och andra entitet |
| Arc, Circle, Ellipse, Polyline | Nej |
| Text, Spline, Dimension, Leader | Nej |

## Fillet jämfört med Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Hörntyp | Rundad båge | Rakt snitt |
| Inmatning | En radie | Två avstånd (d1, d2) |
| Infogad entitet | Arc | Line |
| Entiteter som stöds | Endast linjer | Linjer och Polylines |
