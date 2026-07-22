---
title: Vector Pins — Fest deg Langs Referanselinjer i KulmanLab CAD
description: Med Vector Pins kan du feste et snap-punkt ved å holde markøren over det i et halvt sekund, og deretter følge markøren langs stiplede horisontale og vertikale referanselinjer gjennom det festede punktet — juster ny geometri med eksisterende punkter uten hjelpelinjer.
keywords: [vector pins, object snap tracking, referanselinjer, justeringssporing, snap tracking CAD, hjelpelinjer, kulmanlab]
group: interface
order: 2
---

# Vector Pins

**Vector Pins** er et tegnehjelpemiddel som lar deg justere ny geometri med eksisterende punkter uten å tegne hjelpelinjer. Hold markøren over et snap-punkt i et halvt sekund for å *feste* det — pinnen projiserer deretter usynlige horisontale og vertikale referanselinjer, og markøren fester seg til dem når den kommer nær. Dette er KulmanLab CADs motstykke til object snap tracking i desktop CAD-programvare.

Funksjonen styres av **Pins**-bryteren i kontrollinjen (ved siden av Grid, Snap og ANGL). Den er **påslått som standard**, og innstillingen lagres på tvers av økter.

## Feste et punkt

1. Start en kommando som ber om et punkt — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/) og så videre.
2. Beveg markøren over et snap-punkt på eksisterende geometri — et endepunkt, midtpunkt eller sentermarkør.
3. **Hold markøren stille i 500 ms.** Markøren blir til et fylt aksentfarget **kvadrat** — punktet er nå festet.
4. Gjenta for å feste så mange punkter du trenger. Hver pinne fortsetter å projisere referanselinjene sine.

Festing fungerer også utenfor en kommando: å holde markøren over et **grep** på en markert entitet fester det på samme måte.

## Følge langs referanselinjer

Hvert festede punkt projiserer to usynlige referanselinjer — én **horisontal** og én **vertikal** — gjennom sine eksakte koordinater. Etter hvert som du beveger markøren:

- Innenfor **12 px** av en pinnes vertikale linje fester markøren seg til den: en stiplet aksentlinje tegnes gjennom pinnen over hele visningen, og en **X-markør** viser den festede posisjonen. X-koordinaten din er nå *nøyaktig* pinnens X.
- Det samme gjelder den horisontale linjen for pinnens Y-koordinat.
- I nærheten av én linje av hver retning — selv fra **to forskjellige pinner** — fester markøren seg til **skjæringspunktet** deres, og begge stiplede linjer vises. Dette plasserer et punkt nøyaktig ved (X fra pinne A, Y fra pinne B).

```
                    ┆ (stiplet, vertikal linje til pinne ■)
                    ┆
   ■ pinne A ┄┄┄┄┄┄┄┄ ✕ ← markør festet til skjæringspunktet:
                    ┆    X fra pinne B, Y fra pinne A
                    ┆
                    ■ pinne B
```

Festede koordinater hentes direkte fra pinnen, så justeringen er eksakt — ingen avrunding eller flyttall-avvik.

## Snap-prioritet

Vanlige geometriske snap — endepunkt, midtpunkt, senter og skjæringspunkt — **har forrang** over pinnenes referanselinjer. Hvis markøren er nærmere et punktsnap enn en referanselinje, vinner punktsnappet. Pin-sporing fyller gapene mellom geometri, den blokkerer aldri snapping til selve geometrien.

## Kombinere med vinkellås

Vector pins fungerer sammen med vinkelsporing (**ANGL**-bryteren i kontrollinjen). Når en kommando har låst markøren til en vinkelsporingsstråle:

- Markøren forblir begrenset til den låste retningen.
- Pin-snapping bytter til å målrette **skjæringspunktene mellom den låste strålen og pinnenes referanselinjer** (kun foran strålens origo).

Dette besvarer spørsmål som *"hvor krysser 45°-retningen fra mitt siste punkt høyden til den sirkelens senter?"* — lås vinkelen, og markøren klikker inn i krysningspunktet. Stråle-snapping fungerer i alle kommandoer med vinkellås: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader og ViewportCopy.

## Pinnenes livssyklus

Pinner er ment for oppgaven du holder på med, ikke som permanente markører. Alle pinner fjernes når:

| Hendelse | Hvorfor |
|-------|-----|
| En **ny kommando** starter | Hver operasjon starter med et rent sett med referanser |
| **Escape** trykkes | Standard avbryt-alt-oppførsel |
| **Pins**-bryteren slås av | Å slå av funksjonen fjerner tilstanden dens |
| Bytte mellom **modell- og papirrom** | Pin-koordinater er spesifikke for ett rom |

Innenfor én enkelt kommando kan du feste, tegne, feste igjen og fortsette — pinner overlever hvert klikk i en flerpunktskommando som Polyline.

## Typisk arbeidsflyt

Tegn en linje som starter rett under senteret til en sirkel:

1. Skriv `line` (eller klikk Line-knappen).
2. Hold markøren over sirkelens **sentermarkør** i et halvt sekund — den blir til et aksentfarget kvadrat.
3. Beveg markøren nedover: nær sirkelens vertikale linje låser markøren seg til den stiplede referanselinjen.
4. Klikk — linjen starter nøyaktig ved sirkelens X-koordinat.
5. Fortsett linjen som vanlig; pinnen forblir tilgjengelig for de neste punktene.

## Merknader

- 500 ms-hovringen fungerer på enhver snap-markør markøren kan nå — inkludert snap-punkter som dukker opp midt i en kommando.
- Å holde over et punkt som allerede er festet gjør ingenting; det finnes ingen løsne-ved-hovring. Fjern pinner med **Escape** eller ved å slå av **Pins**.
- Snap-avstanden for referanselinjer er de samme 12 skjermpikslene som brukes av vanlig punktsnapping, slik at følelsen er konsistent på ethvert zoomnivå.
- Festede punkter vises som aksentfargede kvadrater i stedet for sine vanlige snap-markører.
