---
title: Avstandssporing — Skriv en eksakt lengde fra et festet punkt
description: Dist-knappen lar den nyeste vektornålen fungere som ankeret vinkelsporingen måler fra, slik at du kan skrive en eksakt lengde og plassere et punkt i presis avstand og vinkel fra et eksisterende punkt — også formens første punkt.
keywords: [avstandsinntasting CAD, skrive eksakt lengde CAD, Dist-knapp, avstandssporing fra nåler, polar sporing CAD, direkte avstandsinntasting, kulmanlab]
group: interface
order: 3
---

# Avstandssporing

**Avstandssporing** lar deg plassere et punkt ved å skrive en eksakt lengde i stedet for å klikke. Den styres av knappen **Dist** i kontrollinjen, ved siden av [Pins](../vector-pins/) og ANGL, og er **på som standard**, med innstillingen bevart mellom økter.

Det den tilfører er smalt, men nyttig: den lar den **nyeste vektornålen** fungere som ankeret vinkelsporingen måler fra. Uten den kan en kommando bare måle fra et punkt den allerede selv har samlet inn — noe som betyr at formens *første* punkt ikke har noe som helst å måle fra.

## De tre knappene virker sammen

Avstandssporing står ikke alene. To andre knapper må være i riktig stilling før du kan skrive en lengde:

| Knapp | Rolle |
|-------|-------|
| **Pins** | Gir referansepunktet. Hold pekeren over et festepunkt i 500 ms for å feste det — se [Vector Pins](../vector-pins/). |
| **ANGL** | Gir vinkelen. Avstandssporing blir først tilgjengelig når pekeren er vinkellåst, så ANGL må være satt til et trinn (10°, 20°, 30°, 45°, 90°) og ikke til Off. |
| **Dist** | Tillater at nålen brukes som anker i stedet for bare kommandoens eget punkt. |

Med Pins og Dist på, men ANGL på **Off**, skjer det ingenting: det finnes ingen låst retning å måle en lengde langs.

## Hvordan Pins og Dist henger sammen

Avstandssporing er meningsløs med nålene av, så de to knappene følger hverandre:

- **Slå på Pins** slår også på **Dist**.
- **Slå av Pins** slår også av **Dist**.
- **Slå på Dist** slår på **Pins** hvis det ikke allerede var på.
- **Slå av Dist** lar **Pins være på**.

Dist kan altså aldri være aktiv mens Pins er inaktiv, men du kan beholde nålsporingen til oppretting og slå av avstandssporingen — nyttig når du vil ha referanselinjer uten at pekeren låser seg til en nål når du siktet på ditt eget siste punkt.

## Plassere et punkt i eksakt avstand

1. Slå på **Pins** og **Dist**, og sett **ANGL** til et vinkeltrinn.
2. Start en kommando som ber om et punkt — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/) og så videre.
3. **Fest et referansepunkt**: hold pekeren over et eksisterende festepunkt til markøren blir en fylt firkant.
4. Før pekeren bort fra nålen, omtrent i den vinkelen du vil ha. Når den nærmer seg ett av ANGL-trinnene, **låses** retningen — en sporingsindikator vises fra nålen.
5. **Skriv lengden** og trykk **Enter** eller **Space**. Punktet plasseres nøyaktig så langt fra nålen, langs den låste vinkelen.

Ledeteksten i terminalen forteller når du kan skrive. I låst tilstand lyder den:

```
pick start point or enter length: [ ]
```

og verdien du skriver vises inne i klammene.

## Hvorfor det første punktet betyr noe

Dette er tilfellet som ellers ville vært umulig. Anta at en linje skal begynne nøyaktig 250 enheter til høyre for et eksisterende hjørne:

1. Start [Line](../../commands/line/).
2. Fest det eksisterende hjørnet.
3. Beveg deg mot høyre til retningen låser ved 0°.
4. Skriv `250`, trykk **Enter**.

Linjen begynner nå 250 enheter fra hjørnet, uten hjelpegeometri og uten hoderegning. Uten Dist har kommandoen Line ennå ikke samlet inn noe punkt, så det finnes ingenting å måle en skrevet lengde *fra* — du kunne bare klikke omtrentlig, eller trekke en hjelpelinje og slette den etterpå.

For det **andre og senere** punktet har kommandoen allerede sitt eget anker (forrige punkt), og det brukes først. Nålen blir bare brukt som alternativ når ditt eget anker ikke er låst, så det å feste noe kaprer ikke en låsing du allerede har.

## Skriving fryser låsingen

Så snart du begynner å taste sifre, slutter ankeret å endre seg. Uansett hvilket punkt som var låst da det første sifferet kom, forblir det ankeret til du bekrefter eller tømmer feltet — å bevege musen midt i inntastingen flytter ikke stille målingen til en annen nål eller til kommandoens eget punkt.

## Tastaturreferanse

| Tast | Handling |
|------|----------|
| `0`–`9`, `.` | Legg til i lengden |
| `-` | Negativ lengde — snur retningen langs den låste vinkelen (kun første tegn) |
| `Backspace` | Slett siste tegn |
| `Enter` / `Space` | Plasser punktet på den skrevne lengden |
| `Escape` | Avbryt kommandoen; låsing og skrevet verdi tømmes |

Å skrive en lengde er valgfritt. Med retningen låst kan du fortsatt klikke, og punktet projiseres på den låste vinkelen.

## Hvor det virker

Avstandssporing er tilgjengelig i alle kommandoer som ber deg peke ut punkter:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) og [ViewportCopy](../../commands/viewport-copy/).

## Se også

- [Vector Pins](../vector-pins/) — å feste punkter og spore langs referanselinjene deres
- [Grid & Snap](../grid-snap/) — de andre presisjonshjelpemidlene i kontrollinjen
- [Distance](../../commands/distance/) — å måle en eksisterende avstand i stedet for å skrive en ny
