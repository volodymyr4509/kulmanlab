---
title: ViewportCopy-kommandot — Duplicera en viewport i KulmanLab CAD
description: ViewportCopy-kommandot duplicerar en markerad viewport till en ny position i samma layout, med bevarad skala och modellvyinställningar. Stöder exakt koordinatinmatning, vinkellås och skriven avståndsinmatning.
keywords: [kopiera viewport, duplicera viewport, kopiera viewportlayout, vinkellås viewport, exakt koordinat viewport, kulmanlab]
---

# ViewportCopy

`ViewportCopy`-kommandot kopierar en viewport till en ny position, med bevarad skala och modellcentrum. Endast tillgängligt i layoututrymme.

## Kopiera en viewport

1. Växla till en papperslayoutflik.
2. Klicka eventuellt på en viewport för att förvälja den.
3. Skriv `ViewportCopy` i terminalen eller klicka på verktygsfältsknappen **Viewport Copy**.
4. Om ingen viewport var förvald, **klicka på viewporten** som ska kopieras.
5. **Klicka på baspunkten** — referensen för förskjutningen. Eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
6. **Klicka på destinationen** — viewporten placeras vid bas→destination-förskjutningen. Eller använd koordinatinmatning / vinkellås.

Efter placeringen förblir kommandot aktivt — klicka på en annan destination för att placera ytterligare en kopia av samma viewport. Tryck **Enter**, **Space** eller **Escape** för att avsluta.

## Koordinatinmatning

I stegen för baspunkt och destination kan du skriva en exakt koordinat istället för att klicka:

1. Skriv X-värdet.
2. Tryck `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck **Enter** för att bekräfta.

## Vinkellås och exakt avstånd

När baspunkten är satt fångar kommandot 45°-axlar (0°, 45°, 90°, 135°, …) när markören riktas in mot dem. När låst:

- Förhandsvisningen fångas till axeln.
- Skriv ett avstånd och tryck **Enter** för att placera kopian exakt på det avståndet längs den låsta riktningen.

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.` | Lägger till en siffra i avståndsvärdet |
| `-` | Negativt avstånd (vänder riktningen; endast första tecknet) |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` | Placerar kopian på det inskrivna avståndet |

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Startar X-koordinatinmatning, eller avstånd vid vinkellås |
| `,` | Låser X och går vidare till Y-inmatning |
| `Enter` | Bekräftar inskriven koordinat eller avstånd |
| `Enter` / `Space` | Avslutar (när ingen inmatning pågår) |
| `Escape` | Avbryter och återställer |

## Anteckningar

- ViewportCopy är endast tillgängligt när en papperslayoutflik är aktiv.
- Den kopierade viewporten ärver samma skala, modellcentrum, låsta tillstånd och dimensioner som originalet.
- För att skapa en ny viewport från grunden, använd [ViewportRectangle](./viewport-rectangle).
