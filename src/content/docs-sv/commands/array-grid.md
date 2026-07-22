---
title: Array Grid-kommandot — Upprepa entiteter i rader och kolumner
description: Array Grid-kommandot skapar ett rektangulärt rutnät av kopior från valda entiteter — skriv antalet rader, kolumner och avståndet mellan dem direkt i terminalen, utan att behöva klicka på punkter.
keywords: [CAD array-kommando, arraygrid, rektangulärt array CAD, rutnätsmönster CAD, upprepa entiteter CAD, kopiera array CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

`ArrayGrid`-kommandot skapar ett rektangulärt rutnät av kopior från valda entiteter — ange antalet rader, antalet kolumner och avståndet mellan dem, allt skrivs i terminalen. Det ursprungliga urvalet upptar cellen rad 0, kolumn 0; varje annan cell är en flyttad kopia.

## Två sätt att starta

**Förval, sedan array** — välj entiteter först, aktivera sedan:

1. Välj en eller flera entiteter på ritytan.
2. Skriv `arraygrid` i terminalen (`arr` räcker — otvetydigt) eller klicka på verktygsfältsknappen **Array Grid**.
3. Skriv antalet **rader** och tryck **Enter**.
4. Skriv antalet **kolumner** och tryck **Enter**.
5. Skriv **avståndet mellan raderna** och tryck **Enter**.
6. Skriv **avståndet mellan kolumnerna** och tryck **Enter** — rutnätet skapas omedelbart.

**Aktivera, välj sedan** — starta kommandot utan att något är valt:

1. Skriv `arraygrid` eller klicka på verktygsfältsknappen.
2. **Välj objekt** — klicka för att växla enskilda entiteter, eller dra för att välja med ett område.
3. Tryck **Enter** eller **Space** för att bekräfta valet.
4. Fortsätt med rader → kolumner → radavstånd → kolumnavstånd som ovan.

```
  2 rader x 3 kolumner:

  [B] [B] [B]   <- rad 1 (flyttade kopior)
  [A] [A] [A]   <- rad 0: ursprungligt urval, kopior till höger
```

> Terminalen behöver bara så många bokstäver som krävs för att vara otvetydigt — att skriva `arr` och trycka på **Enter** aktiverar Array Grid direkt, eftersom inget annat kommandonamn börjar med dessa tre bokstäver (Arc, Area, Align och Angle skiljer sig alla tidigare).

## Rader, kolumner och avstånd

| Prompt | Accepterar | Anteckningar |
|--------|-----------|--------------|
| Rader | Positiva heltal (1, 2, 3…) | Endast siffror — ingen decimalpunkt eller tecken |
| Kolumner | Positiva heltal (1, 2, 3…) | Endast siffror — ingen decimalpunkt eller tecken |
| Radavstånd | Signerad decimal (t.ex. `10`, `-5.5`) | Avstånd mellan rader; negativt vänder riktningen |
| Kolumnavstånd | Signerad decimal (t.ex. `10`, `-5.5`) | Avstånd mellan kolumner; negativt vänder riktningen |

Med 1 rad och 1 kolumn skapas inga kopior — kommandot avslutas utan att ändra ritningen.

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `Enter` / `Space` | Bekräftar valet och går vidare till radprompten |
| `0`–`9` | Ange siffror för rader eller kolumner |
| `0`–`9`, `.`, `-` | Ange siffror för rad-/kolumnavstånd (`-` endast som första tecken) |
| `Backspace` | Tar bort senast skrivna tecken i den aktuella prompten |
| `Enter` | Bekräftar den aktuella prompten och går vidare till nästa |
| `Escape` | Rensar de inskrivna rad-/kolumn-/avståndsvärdena och återgår till valfasen |

## Val under kommandot

| Metod | Beteende |
|--------|-----------|
| **Klick** | Växlar entiteten under markören in/ur valet |
| **Dra höger** (strikt) | Lägger till entiteter som ligger helt inom rutan |
| **Dra vänster** (korsande) | Lägger till entiteter som skär rutans gräns |
| **Enter** / **Space** | Bekräftar valet och går vidare till radprompten |

## Efter array

De nya kopiorna läggs till i ritningen och kommandot avslutas — det ursprungliga urvalet rensas. Kör **Array Grid** igen, eller starta ett nytt kommando.

## Array Grid jämfört med Copy

| | Array Grid | Copy |
|---|-----------|------|
| Punktval | Inget — rader, kolumner och avstånd skrivs in | Basspunkt och destination klickas (eller skrivs in) |
| Skapade kopior | Rader × Kolumner − 1 | Exakt 1 per kopieringsåtgärd |
| Layout | Regelbundet rektangulärt rutnät | Var som helst, med valfri förskjutning |
| Bäst för | Upprepa en enhet i ett regelbundet mönster (hål, plattor, fästelement) | En enda dubblett på en godtycklig position |

## Entiteter som stöds

Array Grid fungerar på alla entitetstyper. Alla entiteter implementerar `translate(dx, dy)` internt — samma åtgärd som [Copy](../copy/) och [Move](../move/) använder — så inga är undantagna.
