---
sidebar_position: 4
title: "Mirror-kommandot — Spegla entiteter över en tvåpunktsaxel i KulmanLab CAD"
description: "Mirror-kommandot speglar valda entiteter över en spegellinje definierad av två klick. Originalen behålls alltid — Mirror skapar nya speglade kopior. Spegelaxeln kan ha vilken vinkel som helst och fångas till 45°-steg."
keywords: [CAD mirror-kommando, spegla entiteter CAD, spegelsymmetri CAD, vänd objekt CAD, spegelaxel CAD, kulmanlab]
---

# Mirror

`mirror`-kommandot skapar speglade kopior av valda entiteter, reflekterade över en tvåpunktsaxel. Originalen **behålls alltid** — till skillnad från [Move](./move) eller [Rotate](./rotate) ändrar Mirror aldrig befintliga entiteter; den lägger bara till nya.

## Två sätt att starta

**Förval, sedan spegling** — välj entiteter först, aktivera sedan:

1. Välj en eller flera entiteter på ritytan.
2. Skriv `mirror` i terminalen eller klicka på **Mirror**-knappen i verktygsfältet.
3. **Klicka på den första punkten** på spegelaxeln, eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
4. **Klicka på den andra punkten** — speglade kopior placeras och kommandot avslutas. Koordinatinmatning fungerar även här.

**Aktivera, välj sedan** — starta kommandot utan att något är valt:

1. Skriv `mirror` eller klicka på verktygsfältsknappen.
2. **Välj objekt** — klicka för att växla, eller dra för att välja med ett område.
3. Tryck **Enter** eller **Space** för att bekräfta valet.
4. **Klicka på den första punkten**, klicka sedan på **den andra punkten** på spegelaxeln (koordinatinmatning tillgänglig i båda stegen).

```
  Original:          Spegelaxel:         Resultat:
                     |
  [entitet A]   →    |    →    [entitet A] + [speglad A]
                     |
```

En levande förhandsvisning av de speglade kopiorna följer markören medan du placerar den andra axelpunkten.

## Spegelaxel

Axeln är en oändlig linje genom de två klickade punkterna. Den kan ha vilken vinkel som helst:

- Flytta markören nära en **45°-fångningsaxel** (0°, 45°, 90°, 135°, …) så låses axeln till den vinkeln — användbart för rena horisontella, vertikala eller diagonala speglingar.
- Klicka utanför fångningszonen för en axel med fri vinkel.

## Koordinatinmatning

I vart och ett av axelpunktsstegen kan du skriva en exakt position istället för att klicka:

1. Skriv X-värdet.
2. Tryck `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck **Enter** för att bekräfta.

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `Enter` / `Space` | Bekräftar valet |
| `0`–`9`, `.`, `-` | Startar X-koordinatinmatning |
| `,` | Låser X och går vidare till Y-inmatning |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` | Bekräftar inskriven koordinat |
| `Escape` | Avbryter och återställer |

## Val under kommandot

| Metod | Beteende |
|--------|-----------|
| **Klick** | Växlar entiteten under markören |
| **Dra höger** (strikt) | Lägger till entiteter som ligger helt inom rutan |
| **Dra vänster** (korsande) | Lägger till entiteter som skär rutan |
| **Enter** / **Space** | Bekräftar valet |

## Vad som speglas

Alla entitetstyper stöds. Geometrin reflekteras matematiskt över axeln:

| Entitet | Vad som ändras |
|--------|-------------|
| Line | Båda ändpunkterna speglas |
| Circle | Centrum speglas; radien oförändrad |
| Arc | Centrum speglas; start- och slutvinklar omräknas över axeln |
| Ellipse | Centrum speglas; huvudaxelns riktning vänds över axeln |
| Polyline / Rectangle | Varje hörnpunkt speglas |
| Text | Ankarpunkt speglas; textsträngen skrivs **inte** om i omvänd ordning |
| Spline | Alla kontrollpunkter/anpassningspunkter speglas |

## Mirror jämfört med Copy

| | Mirror | Copy |
|---|--------|------|
| Original | Behålls alltid | Behålls alltid |
| Ny entitets position | Speglad över en axel | Förskjuten med en förflyttningsvektor |
| Bäst för | Symmetriska konstruktioner, bilaterala detaljer | Upprepa geometri i valfri riktning |
