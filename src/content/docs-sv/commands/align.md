---
title: "Align-kommandot — Flytta, rotera och skala entiteter med punktpar i KulmanLab CAD"
description: "Align-kommandot placerar om valda entiteter med hjälp av ett eller två käll-/målpunktpar — kombinerar förflyttning, rotation och valfri enhetlig skalning i en enda operation. Fungerar som en kombination av Move + Rotate + Scale."
keywords: [CAD align-kommando, justera entiteter CAD, flytta rotera skala, punktparsjustering, motsvarighet till AutoCAD ALIGN, kulmanlab]
group: edit
order: 6
---

# Align

`align`-kommandot placerar om valda entiteter med hjälp av ett eller två käll-/målpunktpar. Med ett par beter det sig precis som [Move](../move/) (endast förflyttning). Med två par roteras även valet så att riktningen källa-till-källa matchar riktningen mål-till-mål, och det kan valfritt skalas så att källsegmentets längd matchar målsegmentets längd — förflyttning, rotation och skalning i en enda operation.

## Två sätt att starta

**Förval, sedan justera** — välj entiteter först, aktivera sedan:

1. Välj en eller flera entiteter på ritytan.
2. Skriv `align` i terminalen eller klicka på **Align**-knappen i verktygsfältet.
3. **Klicka på den första källpunkten (S1)**, klicka sedan på **den första målpunkten (D1)**.
4. **Klicka på den andra källpunkten (S2)**, eller tryck **Enter** för att direkt tillämpa en justering med enbart förflyttning.
5. **Klicka på den andra målpunkten (D2)**.
6. Svara på skalningsfrågan: tryck **Y** för att skala, eller **N** / **Enter** för att behålla originalstorleken.

**Aktivera, välj sedan** — starta kommandot utan att något är valt:

1. Skriv `align` eller klicka på verktygsfältsknappen.
2. **Välj objekt** — klicka för att växla enskilda entiteter, eller dra för att välja med ett område.
3. Tryck **Enter** eller **Space** för att bekräfta valet.
4. Fortsätt med S1 → D1 → S2 → D2 → skalningsfråga som ovan.

> Terminalen behöver bara så många bokstäver som krävs för att vara entydig — att skriva `al` och trycka **Enter** aktiverar Align direkt, eftersom inget annat kommando börjar med dessa två bokstäver.

## Anatomi av en justering

```
  Källpunkter (på entiteterna):        Målpunkter:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Resultat: valet flyttas så att S1 hamnar på D1, roteras sedan
  runt D1 så att riktningen S1→S2 matchar riktningen D1→D2 —
  och, om du väljer att skala, ändras storleken så att |S1S2|
  blir |D1D2|.
```

En ghost-förhandsvisning följer markören vid varje steg: en förflyttningsförhandsvisning när D1 placeras, sedan en roterad (streckad) förhandsvisning när D2 positioneras.

## Enpunktsjustering (endast förflyttning)

Efter att D1 placerats, tryck **Enter** istället för att klicka på en andra källpunkt. Valet flyttas med vektorn S1→D1 — utan rotation eller skalning — identiskt med en [Move](../move/) som använder S1 som basspunkt och D1 som destination.

## Tvåpunktsjustering (förflyttning + rotation + valfri skalning)

När både S2 och D2 är placerade:

- **Rotationsvinkel** — skillnaden mellan målriktningen (`D1 → D2`) och källriktningen (`S1 → S2`).
- **Skalningsfråga** — `scale objects to alignment points? [Yes/No] <N>` visas, med **No** som standard:
  - Tryck **Y** för att också skala valet enhetligt runt D1 så att avståndet `S1–S2` blir avståndet `D1–D2`.
  - Tryck **N** eller **Enter** för att behålla originalstorleken — endast förflyttning och rotation tillämpas.

Att trycka på valfri tangent vid skalningsfrågan tillämpar justeringen omedelbart — det finns inget separat bekräftelsesteg efter att ha valt Ja eller Nej.

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `Enter` / `Space` | Bekräftar valet och går vidare till S1-fasen |
| `Enter` (i S2-steget) | Hoppar över rotation — tillämpar en justering med enbart förflyttning med S1 och D1 |
| `Y` | Tillämpar justeringen med skalning |
| `N` / `Enter` (vid skalningsfrågan) | Tillämpar justeringen utan skalning |
| `Escape` | Vid placering av punkter: förkastar punkterna och återgår till valfasen; utan något valt: avbryter kommandot |

## Val under kommandot

När kommandot startar i valfasen:

| Metod | Beteende |
|--------|-----------|
| **Klick** | Växlar entiteten under markören in/ur valet |
| **Dra höger** (strikt) | Lägger till entiteter som ligger helt inom rutan |
| **Dra vänster** (korsande) | Lägger till entiteter som skär rutans gräns |
| **Enter** / **Space** | Bekräftar valet och går vidare till S1-fasen |

## Efter justeringen

De justerade entiteterna förblir valda på sin nya position, och kommandot avslutas automatiskt — kör **Align** igen, eller växla till [Move](../move/), [Rotate](../rotate/) eller [Scale](../scale/) utan att välja om.

## Align jämfört med Move

| | Align | Move |
|---|-------|------|
| Punktpar | 1 (endast förflyttning) eller 2 (förflyttning + rotation + skalning) | 1 (endast förflyttning) |
| Rotation | Ja, med ett andra punktpar | Nej |
| Skalning | Valfri, med ett andra punktpar | Nej |
| Bäst för | Anpassa en form efter en annan med hjälp av referenspunkter | Enkel omplacering |

## Entiteter som stöds

Align fungerar på alla entitetstyper som stöds av Move, Rotate och Scale — samma `translate`-, `rotate`- och `scale`-operationer som dessa kommandon använder tillämpas i följd, så inga är undantagna.
