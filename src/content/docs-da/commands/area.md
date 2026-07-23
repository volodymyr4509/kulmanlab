---
title: Area-kommando — Mål Polygonareal og Omkreds
description: Area-kommandoen måler det omsluttede areal og omkredsen af en polygon defineret af 3 eller flere klikkede punkter, ved hjælp af kileformlen (shoelace formula). Understøtter vinkellåst retningsstyret indtastning og en vedvarende fremhævning af resultatet på lærredet.
keywords: [CAD mål areal, area-kommando, polygonareal-beregner, omkredsmåling, kileformel, kulmanlab CAD-måling]
group: measure
order: 3
---

# Area

Kommandoen `area` måler det omsluttede areal og omkredsen af en polygon defineret af tre eller flere klikkede punkter, og udskriver begge resultater i terminalen med 4 decimaler. Det er den tredje målekommando, sammen med [Distance](../distance/) (ret linjelængde) og [Angle](../angle/) (indvendig vinkel ved et toppunkt).

## Anatomien af en arealmåling

```
  ● første punkt
   \
    \
     ● andet punkt
      \
       \             (stiplet) forhåndsvisning af lukkekant
        ●───────────────┐
      tredje punkt       │  (stiplet) forhåndsvisning af næste kant til markøren
                         ✕ markør  →  terminal: "Area: 12.3456  Perimeter: 45.6789"
```

- **Hjørner** — hvert klikket (eller indtastet) punkt bliver et polygonhjørne; bekræftede kanter tegnes massive, og det indre fyldes med en gennemsigtig fremhævning.
- **Forhåndsvisningskanter** — stiplede linjer viser den ventende kant fra sidste hjørne til markøren, og lukkekanten fra markøren tilbage til det første hjørne, så du kan se formen før du bekræfter den.
- **Lukkekant** — du klikker aldrig det første punkt igen; at trykke Enter lukker polygonen automatisk.

## Måle et areal

1. Skriv `area` i terminalen eller klik på **Area**-knappen i værktøjslinjen (nederste række i Measure-panelet).
2. **Klik det første punkt**, eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
3. **Klik hvert ekstra hjørne** i rækkefølge rundt om formen. Koordinatindtastning fungerer ved hvert trin.
4. Når mindst **3 punkter** er placeret, tryk **Enter** (uden ventende koordinat- eller afstandsindtastning) for at lukke polygonen og beregne resultatet.
5. Terminalen udskriver `Area: <værdi>  Perimeter: <værdi>`, og den lukkede polygon — fyld, omrids og hjørnegreb — forbliver fremhævet på lærredet.
6. **Klik hvor som helst, tryk en hvilken som helst tast, eller tryk `Escape`** for at afvise resultatet og afslutte kommandoen.

## Vinkellås og eksakt afstand

Efter at det første hjørne er placeret, låses den næste kant til retningen, når du bevæger dig mod et af de konfigurerede vinkelsporingsintervaller (10°, 15°, 20°, 30°, 45° eller 90°, indstillet via rullemenuen i værktøjslinjen):

- Kantforhåndsvisningen fæstner sig til den låste retning, og en vinkelsporingsindikator tegnes ved ankerhjørnet.
- Skriv en længde og tryk **Enter** for at placere det næste hjørne i nøjagtigt den afstand langs den låste retning.
- At klikke mens låst (uden indtastet længde) placerer hjørnet ved markørens projektion på den låste retning.

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Tilføj til kantlængdeværdien |
| `-` | Negativ længde (kun første tegn) |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Placér det næste hjørne ved den indtastede længde |

## Lukke polygonen

- Enter lukker kun formen, når **3 eller flere** hjørner er placeret — med færre har det ingen effekt.
- Kanten fra det sidste hjørne tilbage til det første tilføjes automatisk og medregnes i både arealet og omkredsen.
- Punkter kan placeres i en hvilken som helst rækkefølge (med eller mod uret) — resultatet er identisk uanset.

## Area vs Distance vs Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| Hvad den måler | Omsluttet areal og omkreds af en polygon | Ret linjelængde | Indvendig vinkel ved et toppunkt |
| Antal klik | 3 eller flere, lukket med Enter | 2 | 3 |
| Resultatformat | `12.3456  Perimeter: 45.6789` | `12.3456` (enheder) | `45.0000°` |
| Forhåndsvisning på lærred | Fyldt polygon med stiplet lukkekant | Linje fra første punkt til markøren | To linjer fra toppunktet til begge ender |
| Efter resultat | Afvis med enhver input, hvorefter kommandoen afsluttes | Klik for at kæde en ny måling | Klik for at kæde en ny måling |
| Bedst til | Omsluttede områder, rum- eller panelareal | Længden af et mellemrum eller segment | Åbningsvinkel mellem to elementer |

## Koordinatindtastning

I stedet for at klikke kan du indtaste en eksakt position for et hvilket som helst hjørne:

1. Skriv X-værdien.
2. Tryk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-værdien.
4. Tryk **Enter** for at bekræfte.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning, eller kantlængdeindtastning mens vinkellåst |
| `,` | Lås X og gå til Y-indtastning |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft en indtastet koordinat eller længde; med 3+ hjørner og ingen ventende indtastning lukkes polygonen |
| `Escape` | Mens du vælger hjørner, kassér dem og genstart ved det første punkt; når resultatet vises, afvis det og afslut |

## Bemærkninger

- Arealet beregnes med [kileformlen](https://en.wikipedia.org/wiki/Shoelace_formula) og rapporteres altid som en positiv værdi, uanset klikrækkefølge.
- Selvkrydsende polygoner (kanter der krydser hinanden) giver stadig et numerisk resultat, men værdien matcher måske ikke det visuelt omsluttede område — hold klikrækkefølgen ikke-krydsende for et meningsfuldt areal.
- Resultater vises **kun i terminalen og som en midlertidig fremhævning på lærredet** — der tilføjes intet til tegningen som en permanent entitet.
- I modsætning til Distance og Angle kæder Area **ikke** automatisk til en ny måling — efter du afviser resultatet, kør `area` igen for at måle en anden polygon.
- Præcisionen er altid 4 decimaler for både areal og omkreds, i samme enheder som tegningens koordinater (ingen enhedskonvertering).
