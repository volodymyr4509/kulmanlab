---
title: "Vector Pins — Fäst längs referenslinjer genom nålade punkter i KulmanLab CAD"
description: "Vector Pins låter dig nåla fast en fästpunkt genom att hålla markören över den i en halv sekund, och sedan spåra markören längs streckade horisontella och vertikala referenslinjer genom den nålade punkten — rikta in ny geometri mot befintliga punkter utan konstruktionslinjer."
keywords: [vector pins, objektfästspårning, referenslinjer, inriktningsspårning, fästspårning CAD, konstruktionslinjer, kulmanlab]
group: interface
order: 2
---

# Vector Pins

**Vector Pins** är ett rithjälpmedel som låter dig rikta in ny geometri mot befintliga punkter utan att rita konstruktionslinjer. Håll markören över en fästpunkt i en halv sekund för att *nåla fast* den — nålen projicerar sedan osynliga horisontella och vertikala referenslinjer, och markören fäster på dem så fort den kommer nära. Det är KulmanLab CAD:s motsvarighet till objektfästspårning i skrivbords-CAD-program.

Funktionen styrs av **Pins**-knappen i kontrollfältet (bredvid Grid, Snap och ANGL). Den är **på som standard**, och inställningen bevaras mellan sessioner.

## Nåla fast en punkt

1. Starta ett kommando som ber om en punkt — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/) och så vidare.
2. Flytta markören över en fästpunkt på befintlig geometri — en ändpunkts-, mittpunkts- eller centrummarkör.
3. **Håll markören stilla i 500 ms.** Markören förvandlas till en fylld **kvadrat** i accentfärg — punkten är nu fastnålad.
4. Upprepa för att nåla fast så många punkter du behöver. Varje nål fortsätter att projicera sina referenslinjer.

Nålning fungerar även utanför kommandon: att hovra över ett **grepp** på en vald entitet nålar fast det på samma sätt.

## Spårning längs referenslinjerna

Varje fastnålad punkt projicerar två osynliga referenslinjer — en **horisontell** och en **vertikal** — genom dess exakta koordinater. När du flyttar markören:

- Inom **12 px** från en nåls vertikala linje fäster markören på den: en streckad linje i accentfärg ritas genom nålen över hela vyn, och en **X-markör** visar den fästa positionen. Din X-koordinat är nu *exakt* nålens X.
- Detsamma gäller den horisontella linjen för nålens Y-koordinat.
- Nära en linje av vardera orientering — även från **två olika nålar** — fäster markören vid deras **skärningspunkt**, och båda streckade linjerna visas. Detta placerar en punkt exakt vid (X från nål A, Y från nål B).

```
                    ┆ (streckad, vertikal linje från nål ■)
                    ┆
   ■ nål A ┄┄┄┄┄┄┄┄ ✕ ← markören fäst vid skärningspunkten:
                    ┆    X från nål B, Y från nål A
                    ┆
                    ■ nål B
```

De fästa koordinaterna hämtas direkt från nålen, så inriktningen är exakt — ingen avrundning eller flyttalsdrift.

## Fästprioritet

Vanliga geometrifästen — ändpunkt, mittpunkt, centrum och skärningspunkt — **har företräde** framför nålarnas referenslinjer. Om markören är närmare ett punktfäste än en referenslinje vinner punktfästet. Nålspårningen fyller luckorna mellan geometrin; den blockerar aldrig fästning mot själva geometrin.

## Kombinera med vinkellås

Vector pins samarbetar med vinkelspårning (**ANGL**-knappen i kontrollfältet). När ett kommando har låst markören till en vinkelspårningsstråle:

- Markören förblir begränsad till den låsta riktningen.
- Nålfästningen övergår till att sikta på **skärningspunkterna mellan den låsta strålen och nålarnas referenslinjer** (endast framför strålens ursprung).

Detta besvarar frågor som *"var korsar 45°-riktningen från min senaste punkt höjden på den där cirkelns centrum?"* — lås vinkeln, så klickar markören fast i korsningspunkten. Strålfästning fungerar i alla kommandon med vinkellås: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader och ViewportCopy.

## Nålarnas livscykel

Nålar är avsedda för den pågående operationen, inte som permanenta markörer. Alla nålar rensas när:

| Händelse | Varför |
|----------|--------|
| Ett **nytt kommando** startar | Varje operation börjar med en ren uppsättning referenser |
| **Escape** trycks | Standardbeteende för avbryt-allt |
| **Pins**-knappen stängs av | Att stänga av funktionen tar bort dess tillstånd |
| Byte mellan **modell- och pappersutrymme** | Nålkoordinater hör till ett utrymme |

Inom ett och samma kommando kan du nåla, rita, nåla igen och fortsätta — nålarna överlever varje klick i ett flerpunktskommando som Polyline.

## Typiskt arbetsflöde

Rita en linje som börjar rakt under en cirkels centrum:

1. Skriv `line` (eller klicka på Line-knappen).
2. Håll markören över cirkelns **centrummarkör** i en halv sekund — den blir en kvadrat i accentfärg.
3. Flytta markören nedåt: nära cirkelns vertikal låser markören fast vid den streckade referenslinjen.
4. Klicka — linjen börjar exakt på cirkelns X-koordinat.
5. Fortsätt linjen som vanligt; nålen förblir tillgänglig för nästa punkter.

## Anmärkningar

- 500 ms-hovringen fungerar på varje fästmarkör som markören kan nå — inklusive fästpunkter som dyker upp mitt i ett kommando.
- Att hovra över en redan fastnålad punkt gör ingenting; det finns ingen avnålning via hovring. Rensa nålar med **Escape** eller genom att stänga av **Pins**.
- Fästavståndet för referenslinjer är samma 12 skärmpixlar som används av vanlig punktfästning, så känslan är konsekvent på alla zoomnivåer.
- Fastnålade punkter ritas som kvadrater i accentfärg i stället för sina vanliga fästmarkörer.
