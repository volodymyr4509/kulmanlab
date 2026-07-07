---
sidebar_position: 3
title: "Area-kommandot — Mät area och omkrets för en polygon i KulmanLab CAD"
description: "Area-kommandot mäter den inneslutna arean och omkretsen av en polygon definierad av 3 eller fler klickade punkter, med hjälp av shoelace-formeln. Stöder vinkellåst riktningsinmatning och en varaktig markering av resultatet på ritytan."
keywords: [CAD mät area, area-kommando, beräkning av polygonarea, omkretsmätning, shoelace-formeln, kulmanlab CAD-mätning]
---

# Area

`area`-kommandot mäter den inneslutna arean och omkretsen av en polygon definierad av tre eller fler klickade punkter, och skriver ut båda resultaten i terminalen med 4 decimalers precision. Det är det tredje mätkommandot, tillsammans med [Distance](../distance/) (rak längd) och [Angle](../angle/) (inre vinkel vid en vertex).

## Anatomi av en areamätning

```
  ● första punkten
   \
    \
     ● andra punkten
      \
       \             (streckad) förhandsvisning av avslutande kant
        ●───────────────┐
      tredje punkten    │  (streckad) förhandsvisning av nästa kant till markören
                        ✕ markör  →  terminal: "Area: 12.3456  Perimeter: 45.6789"
```

- **Hörn** — varje klickad (eller inskriven) punkt blir ett hörn i polygonen; bekräftade kanter ritas med heldragen linje och insidan fylls med en genomskinlig markering.
- **Förhandsvisningskanter** — streckade linjer visar den väntande kanten från det senaste hörnet till markören, och den avslutande kanten från markören tillbaka till det första hörnet.
- **Avslutande kant** — du klickar aldrig på den första punkten igen; att trycka på Enter stänger polygonen automatiskt.

## Mäta en area

1. Skriv `area` i terminalen eller klicka på **Area**-knappen i verktygsfältet (nedre raden i Measure-panelen).
2. **Klicka på första punkten**, eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
3. **Klicka på varje ytterligare hörn** i ordning runt formen. Koordinatinmatning fungerar i varje steg.
4. När minst **3 punkter** har placerats, tryck **Enter** (utan väntande koordinat- eller avståndsinmatning) för att stänga polygonen och beräkna resultatet.
5. Terminalen skriver ut `Area: <värde>  Perimeter: <värde>`, och den stängda polygonen — fyllning, kontur och hörngrepp — förblir markerad på ritytan.
6. **Klicka var som helst, tryck på valfri tangent, eller tryck `Escape`** för att avfärda resultatet och avsluta kommandot.

## Vinkellåsning och exakt avstånd

Efter att det första hörnet har placerats låser en rörelse mot ett av de konfigurerade vinkelspårningsstegen (10°, 15°, 20°, 30°, 45° eller 90°, inställbara via verktygsfältets rullgardinsmeny) nästa kant till den riktningen:

- Kantens förhandsvisning fäster till den låsta riktningen, och en vinkelspårningsindikator ritas vid ankarhörnet.
- Skriv en längd och tryck **Enter** för att placera nästa hörn exakt på det avståndet längs den låsta riktningen.
- Att klicka medan låst (utan inskriven längd) placerar hörnet vid markörens projektion på den låsta riktningen.

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.` | Lägg till i kantlängdsvärdet |
| `-` | Negativ längd (endast som första tecken) |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` | Placerar nästa hörn på den inskrivna längden |

## Stänga polygonen

- Enter stänger endast formen efter att **3 eller fler** hörn har placerats — med färre har det ingen effekt.
- Kanten från det sista hörnet tillbaka till det första läggs till automatiskt och räknas med i både arean och omkretsen.
- Punkter kan placeras i valfri ordning (medurs eller moturs) — resultatet blir detsamma.

## Area jämfört med Distance jämfört med Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| Vad det mäter | Innesluten area & omkrets av en polygon | Rak längd | Inre vinkel vid en vertex |
| Antal klick | 3 eller fler, stängs med Enter | 2 | 3 |
| Resultatformat | `12.3456  Perimeter: 45.6789` | `12.3456` (enheter) | `45.0000°` |
| Förhandsvisning på ritytan | Fylld polygon med streckad avslutande kant | Linje från första punkten till markören | Två linjer från vertex till markören |
| Efter resultatet | Avfärdas med valfri inmatning, sedan avslutas kommandot | Klick kedjar en ny mätning | Klick kedjar en ny mätning |
| Bäst för | Inneslutna områden, area för ett rum eller en panel | Längden på en lucka eller ett segment | Öppningsvinkel mellan två features |

## Koordinatinmatning

Istället för att klicka kan du skriva en exakt position för valfritt hörn:

1. Skriv X-värdet.
2. Tryck `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck **Enter** för att bekräfta.

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Startar X-koordinatinmatning, eller kantlängdsinmatning när vinkellåsning är aktiv |
| `,` | Låser X och går vidare till Y-inmatning |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` | Bekräftar en inskriven koordinat eller längd; med 3+ hörn och ingen väntande inmatning stängs polygonen |
| `Escape` | Vid val av hörn: förkastar placerade punkter och börjar om vid första punkten; efter att resultatet visats: avfärdar det och avslutar kommandot |

## Anmärkningar

- Arean beräknas med shoelace-formeln och redovisas alltid som ett positivt värde, oavsett klickordning.
- Självkorsande polygoner (kanter som korsar varandra) ger fortfarande ett numeriskt resultat, men värdet kanske inte motsvarar det visuellt inneslutna området — behåll en icke-korsande klickordning för en meningsfull area.
- Resultat visas endast i **terminalen och som en tillfällig markering på ritytan** — inget läggs till permanent i ritningen.
- Till skillnad från Distance och Angle kedjar Area **inte** automatiskt en ny mätning — efter att resultatet avfärdats, kör `area` igen för att mäta en annan polygon.
- Precisionen är alltid 4 decimaler för både area och omkrets, i samma enheter som ritningens koordinater (ingen enhetskonvertering).
