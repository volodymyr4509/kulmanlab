---
title: Vector Pins — Snap Langs Referencelinjer i KulmanLab CAD
description: Med Vector Pins kan du fastgøre et snap-punkt ved at holde markøren over det i et halvt sekund, og derefter følge markøren langs stiplede horisontale og vertikale referencelinjer gennem det fastgjorte punkt — justér ny geometri med eksisterende punkter uden hjælpelinjer.
keywords: [vector pins, object snap tracking, referencelinjer, justeringssporing, snap tracking CAD, hjælpelinjer, kulmanlab]
group: interface
order: 2
---

# Vector Pins

**Vector Pins** er et tegnehjælpemiddel, der lader dig justere ny geometri med eksisterende punkter uden at tegne hjælpelinjer. Hold markøren over et snap-punkt i et halvt sekund for at *fastgøre* det — pin'en projicerer derefter usynlige horisontale og vertikale referencelinjer, og markøren snapper til dem, når den kommer tæt på. Det er KulmanLab CADs modstykke til object snap tracking i desktop CAD-software.

Funktionen styres af **Pins**-knappen i kontrollinjen (ved siden af Grid, Snap og ANGL). Den er **slået til som standard**, og indstillingen gemmes på tværs af sessioner.

## Fastgøre et punkt

1. Start en kommando, der beder om et punkt — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/) og så videre.
2. Bevæg markøren over et snap-punkt på eksisterende geometri — et endepunkt, midtpunkt eller centermarkør.
3. **Hold markøren stille i 500 ms.** Markøren bliver til et udfyldt accentfarvet **kvadrat** — punktet er nu fastgjort.
4. Gentag for at fastgøre så mange punkter du har brug for. Hver pin fortsætter med at projicere sine referencelinjer.

Fastgørelse fungerer også uden for en kommando: at holde markøren over et **greb** på en markeret entitet fastgør det på samme måde.

## Følge langs referencelinjer

Hvert fastgjorte punkt projicerer to usynlige referencelinjer — én **horisontal** og én **vertikal** — gennem dets eksakte koordinater. Efterhånden som du flytter markøren:

- Inden for **12 px** af en pins vertikale linje snapper markøren til den: en stiplet accentlinje tegnes gennem pin'en over hele visningen, og en **X-markør** viser den snappede position. Din X-koordinat er nu *nøjagtigt* pin'ens X.
- Det samme gælder den horisontale linje for pin'ens Y-koordinat.
- I nærheden af én linje af hver retning — selv fra **to forskellige pins** — snapper markøren til deres **skæringspunkt**, og begge stiplede linjer vises. Dette placerer et punkt nøjagtigt ved (X fra pin A, Y fra pin B).

```
                    ┆ (stiplet, vertikal linje til pin ■)
                    ┆
   ■ pin A ┄┄┄┄┄┄┄┄ ✕ ← markør snappet til skæringspunktet:
                    ┆    X fra pin B, Y fra pin A
                    ┆
                    ■ pin B
```

Snappede koordinater hentes direkte fra pin'en, så justeringen er eksakt — ingen afrunding eller flydende-decimal-drift.

## Snap-prioritet

Almindelige geometriske snap — endepunkt, midtpunkt, centrum og skæringspunkt — **har forrang** over pin-referencelinjer. Hvis markøren er tættere på et punktsnap end på en referencelinje, vinder punktsnappet. Pin-sporing udfylder hullerne mellem geometri, den blokerer aldrig snapning til selve geometrien.

## Kombinere med vinkellås

Vector pins fungerer sammen med vinkelsporing (**ANGL**-knappen i kontrollinjen). Når en kommando har låst markøren til en vinkelsporingsstråle:

- Markøren forbliver begrænset til den låste retning.
- Pin-snapning skifter til at målrette **skæringspunkterne mellem den låste stråle og pins referencelinjer** (kun foran strålens oprindelse).

Dette besvarer spørgsmål som *"hvor krydser 45°-retningen fra mit sidste punkt højden af den cirkels centrum?"* — lås vinklen, og markøren klikker ind i krydsningspunktet. Stråle-snapning fungerer i alle kommandoer med vinkellås: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader og ViewportCopy.

## Pin-livscyklus

Pins er beregnet til den aktuelle opgave, ikke som permanente markører. Alle pins fjernes, når:

| Hændelse | Hvorfor |
|-------|-----|
| En **ny kommando** starter | Hver operation starter med et rent sæt referencer |
| **Escape** trykkes | Standard annuller-alt-adfærd |
| **Pins**-knappen slås fra | At slå funktionen fra fjerner dens tilstand |
| Skift mellem **model- og papirrum** | Pin-koordinater er specifikke for ét rum |

Inden for én enkelt kommando kan du fastgøre, tegne, fastgøre igen og fortsætte — pins overlever hvert klik i en flerpunktskommando som Polyline.

## Typisk arbejdsgang

Tegn en linje, der starter direkte under centrum af en cirkel:

1. Skriv `line` (eller klik på Line-knappen).
2. Hold markøren over cirklens **centermarkør** i et halvt sekund — den bliver til et accentfarvet kvadrat.
3. Flyt markøren nedad: nær cirklens vertikale linje låser markøren sig til den stiplede referencelinje.
4. Klik — linjen starter nøjagtigt ved cirklens X-koordinat.
5. Fortsæt linjen som normalt; pin'en forbliver tilgængelig for de næste punkter.

## Bemærkninger

- 500 ms-hovringen fungerer på enhver snap-markør, markøren kan nå — inklusive snap-punkter, der dukker op midt i en kommando.
- At holde over et punkt, der allerede er fastgjort, gør ingenting; der findes ingen frigør-ved-hovring. Fjern pins med **Escape** eller ved at slå **Pins** fra.
- Snap-afstanden for referencelinjer er de samme 12 skærmpixels, der bruges af almindelig punktsnapning, så følelsen er konsistent ved ethvert zoomniveau.
- Fastgjorte punkter vises som accentfarvede kvadrater i stedet for deres normale snap-markører.
