---
title: Area-kommando — Mål Polygonareal og Omkrets
description: Area-kommandoen måler omsluttet areal og omkrets av en polygon definert av 3 eller flere klikkede punkter, ved hjelp av kileformelen (shoelace formula). Støtter vinkellåst retningsstyrt inntasting og en vedvarende utheving av resultatet på lerretet.
keywords: [CAD mål areal, area-kommando, polygonareal-kalkulator, omkretsmåling, kileformel, kulmanlab CAD-måling]
group: measure
order: 3
---

# Area

Kommandoen `area` måler omsluttet areal og omkrets av en polygon definert av tre eller flere klikkede punkter, og skriver ut begge resultatene i terminalen med 4 desimaler. Det er den tredje målekommandoen, ved siden av [Distance](../distance/) (rett linjelengde) og [Angle](../angle/) (innvendig vinkel ved et toppunkt).

## Anatomien til en arealmåling

```
  ● første punkt
   \
    \
     ● andre punkt
      \
       \             (stiplet) forhåndsvisning av lukkekant
        ●───────────────┐
      tredje punkt       │  (stiplet) forhåndsvisning av neste kant til markøren
                         ✕ markør  →  terminal: "Area: 12.3456  Perimeter: 45.6789"
```

- **Hjørner** — hvert klikkede (eller inntastede) punkt blir et polygonhjørne; bekreftede kanter tegnes heltrukne, og det indre fylles med en gjennomsiktig utheving.
- **Forhåndsvisningskanter** — stiplede linjer viser den ventende kanten fra siste hjørne til markøren, og lukkekanten fra markøren tilbake til det første hjørnet, slik at du kan se formen før du bekrefter den.
- **Lukkekant** — du klikker aldri det første punktet igjen; å trykke Enter lukker polygonen automatisk.

## Måle et areal

1. Skriv `area` i terminalen eller klikk på **Area**-knappen i verktøylinjen (nederste rad i Measure-panelet).
2. **Klikk det første punktet**, eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
3. **Klikk hvert ekstra hjørne** i rekkefølge rundt formen. Koordinatinntasting fungerer i hvert steg.
4. Når minst **3 punkter** er plassert, trykk **Enter** (uten ventende koordinat- eller avstandsinntasting) for å lukke polygonen og beregne resultatet.
5. Terminalen skriver ut `Area: <verdi>  Perimeter: <verdi>`, og den lukkede polygonen — fylling, omriss og hjørnegrep — forblir uthevet på lerretet.
6. **Klikk hvor som helst, trykk en hvilken som helst tast, eller trykk `Escape`** for å fjerne resultatet og avslutte kommandoen.

## Vinkellås og eksakt avstand

Etter at det første hjørnet er plassert, låses den neste kanten til retningen når du beveger deg mot ett av de konfigurerte vinkelsporingsintervallene (10°, 15°, 20°, 30°, 45° eller 90°, satt via nedtrekksmenyen i verktøylinjen):

- Kantforhåndsvisningen festes til den låste retningen, og en vinkelsporingsindikator tegnes ved ankerhjørnet.
- Skriv en lengde og trykk **Enter** for å plassere det neste hjørnet nøyaktig i den avstanden langs den låste retningen.
- Å klikke mens låst (uten inntastet lengde) plasserer hjørnet ved markørens projeksjon på den låste retningen.

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Legg til kantlengdeverdien |
| `-` | Negativ lengde (kun første tegn) |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Plasser det neste hjørnet ved den inntastede lengden |

## Lukke polygonen

- Enter lukker formen kun når **3 eller flere** hjørner er plassert — med færre har det ingen effekt.
- Kanten fra det siste hjørnet tilbake til det første legges til automatisk og telles med i både arealet og omkretsen.
- Punkter kan plasseres i hvilken som helst rekkefølge (med eller mot klokken) — resultatet er identisk uansett.

## Area vs Distance vs Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| Hva den måler | Omsluttet areal og omkrets av en polygon | Rett linjelengde | Innvendig vinkel ved et toppunkt |
| Antall klikk | 3 eller flere, lukket med Enter | 2 | 3 |
| Resultatformat | `12.3456  Perimeter: 45.6789` | `12.3456` (enheter) | `45.0000°` |
| Forhåndsvisning på lerret | Fylt polygon med stiplet lukkekant | Linje fra første punkt til markøren | To linjer fra toppunktet til begge endene |
| Etter resultat | Fjern med hvilken som helst inntasting, deretter avsluttes kommandoen | Klikk for å kjede en ny måling | Klikk for å kjede en ny måling |
| Best til | Omsluttede områder, rom- eller panelareal | Lengden på et mellomrom eller segment | Åpningsvinkel mellom to elementer |

## Koordinatinntasting

I stedet for å klikke kan du skrive inn en eksakt posisjon for et hvilket som helst hjørne:

1. Skriv X-verdien.
2. Trykk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-verdien.
4. Trykk **Enter** for å bekrefte.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting, eller kantlengdeinntasting mens vinkellåst |
| `,` | Lås X og gå til Y-inntasting |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft en inntastet koordinat eller lengde; med 3+ hjørner og ingen ventende inntasting lukkes polygonen |
| `Escape` | Mens du plasserer hjørner, forkast dem og start på nytt ved det første punktet; når resultatet vises, fjern det og avslutt |

## Merknader

- Arealet beregnes med [kileformelen](https://en.wikipedia.org/wiki/Shoelace_formula) og rapporteres alltid som en positiv verdi, uansett klikkerekkefølge.
- Selvkryssende polygoner (kanter som krysser hverandre) gir fortsatt et numerisk resultat, men verdien samsvarer kanskje ikke med det visuelt omsluttede området — hold klikkerekkefølgen ikke-kryssende for et meningsfullt areal.
- Resultater vises **kun i terminalen og som en midlertidig utheving på lerretet** — ingenting legges til i tegningen som en permanent entitet.
- I motsetning til Distance og Angle kjeder Area **ikke** automatisk til en ny måling — etter at du fjerner resultatet, kjør `area` igjen for å måle en annen polygon.
- Presisjonen er alltid 4 desimaler for både areal og omkrets, i samme enheter som tegningens koordinater (ingen enhetskonvertering).
