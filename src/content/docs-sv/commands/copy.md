---
sidebar_position: 3
title: "Copy-kommandot — Duplicera entiteter till en ny position i KulmanLab CAD"
description: "Copy-kommandot skapar flyttade dubbletter av valda entiteter samtidigt som originalen lämnas kvar. Stöder förval, vinkellås och exakt avståndsinmatning. Kopiorna placeras och kommandot avslutas; originalen förblir oförändrade."
keywords: [CAD copy-kommando, duplicera entiteter CAD, kopiera objekt CAD, klona geometri CAD, vinkellås kopiering, exakt avstånd kopiering, kulmanlab]
---

# Copy

`copy`-kommandot skapar flyttade dubbletter av valda entiteter och placerar dem förskjutna från en basspunkt till en destination — originalen ligger kvar precis där de är. Detta är den enda viktiga skillnaden mot [Move](./move): Copy lägger till nya entiteter i ritningen; Move flyttar befintliga.

## Två sätt att starta

**Förval, sedan kopiering** — välj entiteter först, aktivera sedan:

1. Välj en eller flera entiteter på ritytan.
2. Skriv `copy` i terminalen eller klicka på **Copy**-knappen i verktygsfältet.
3. **Klicka på basspunkten**, eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
4. **Klicka på destinationen** — dubbletter visas vid bas→destination-förskjutningen. Koordinatinmatning fungerar även här.

**Aktivera, välj sedan** — starta kommandot utan att något är valt:

1. Skriv `copy` eller klicka på verktygsfältsknappen.
2. **Välj objekt** — klicka för att växla enskilda entiteter, eller dra för att välja med ett område.
3. Tryck **Enter** eller **Space** för att bekräfta valet.
4. **Klicka på basspunkten**, klicka sedan på **destinationen** (koordinatinmatning tillgänglig i båda stegen).

```
  Före:                 Efter:
  [entitet A]           [entitet A]  ← originalen orörda
  [entitet B]            [entitet B]
                         [kopia av A] ← nya entiteter
                         [kopia av B]
```

En ghost-förhandsvisning av kopiorna följer markören från basspunkten till destinationen.

## Koordinatinmatning

I steget för basspunkt eller destination kan du skriva en exakt position istället för att klicka:

1. Skriv X-värdet.
2. Tryck `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck **Enter** för att bekräfta.

## Vinkellås och exakt avstånd

När basspunkten är satt fångas kommandot till 45°-axlar (0°, 45°, 90°, 135°, …) när markören är tillräckligt långt bort och nära axeln. När den är låst, skriv ett avstånd och tryck **Enter** för att placera kopiorna vid exakt den förskjutningen.

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.` | Lägger till avståndsvärdet |
| `-` | Negativt avstånd — vänder riktningen längs axeln (endast första tecknet) |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` | Placerar kopiorna vid det inskrivna avståndet |

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `Enter` / `Space` | Bekräftar valet och går vidare till basspunktsfasen |
| `0`–`9`, `.`, `-` | Startar X-koordinatinmatning, eller avstånd vid vinkellås |
| `,` | Låser X och går vidare till Y-inmatning |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` | Bekräftar koordinat eller utför kopiering med det inskrivna avståndet |
| `Escape` | Avbryter och återställer |

## Val under kommandot

| Metod | Beteende |
|--------|-----------|
| **Klick** | Växlar entiteten under markören in/ur valet |
| **Dra höger** (strikt) | Lägger till entiteter som ligger helt inom rutan |
| **Dra vänster** (korsande) | Lägger till entiteter som skär rutans gräns |
| **Enter** / **Space** | Bekräftar valet |

## Efter kopieringen

**Originalen förblir valda** — de nya kopiorna läggs till i ritningen men valet rensas och kommandot avslutas. För att arbeta med kopiorna direkt, kör Copy igen på valet, eller starta ett nytt kommando.

## Copy jämfört med Move

| | Copy | Move |
|---|------|------|
| Original | Ligger kvar | Tas bort från ursprunglig position |
| Antal resultat | Ökar med antalet kopierade entiteter | Oförändrat |
| Efter operationen | Originalen fortfarande valda | Flyttade entiteter valda på ny position |
| Bäst för | Upprepa geometri, symmetriska layouter | Omplacera geometri |

## Entiteter som stöds

Copy fungerar på alla entitetstyper. Alla entiteter implementerar `translate(dx, dy)` internt så inga är undantagna.
