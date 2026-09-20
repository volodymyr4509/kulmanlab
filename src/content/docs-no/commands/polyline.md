---
title: Polyline-kommando — Tegn Fleresegment-baner som Én Enkelt Entitet
description: Polyline-kommandoen tegner et hvilket som helst antall tilkoblede segmenter lagret som én LWPOLYLINE-entitet. Hjørne- og segmentmidtpunktgrep lar deg omforme en hvilken som helst del av banen etter opprettelse. Støtter offset; støtter ikke trim eller extend.
keywords: [CAD polyline-kommando, tegn polylinje CAD, fleresegment-bane CAD, LWPOLYLINE DXF, omform polylinje, hjørnegrep CAD, offset polylinje, kulmanlab]
group: shapes
order: 2
---

# Polyline

Kommandoen `Polylinje` tegner en tilkoblet bane med et hvilket som helst antall rette eller buesegmenter, alle lagret som én enkelt `LWPOLYLINE`-entitet. Fordi hele banen er ett objekt, markerer det å velge den alle segmentene samtidig — flytt, roter eller skaler hele formen i én enkelt operasjon. Dette er den sentrale forskjellen fra kjedede [Lines](../line/), der hvert segment er en uavhengig entitet.

Polylinjer kan også være **lukket**: [Rectangle](../rectangle/)-kommandoen bruker den samme `LWPOLYLINE`-entiteten med et close-flagg satt.

## Tegne en polylinje

1. Skriv `Polylinje` i terminalen eller klikk på **Polyline**-knappen i verktøylinjen.
2. **Klikk det første punktet**, eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
3. **Klikk hvert påfølgende punkt** — hvert klikk legger til et segment. Koordinatinntasting fungerer i hvert steg.
4. Trykk **Enter** eller **Space** for å avslutte (krever minst 2 plasserte punkter).

```
  ●──────●
  1.     2.
          \
           \  segment 3 (pågår — markøren her)
            ●  ← klikk for å legge til, Enter/Space for å avslutte
```

Å trykke **Escape** når som helst forkaster alle plasserte punkter og avslutter kommandoen.

## Tegne et buesegment

Trykk **A** når som helst etter det første hjørnet for å veksle Arc-modus — det samme inline-alternativmønsteret som Copy-alternativet til Rotate bruker. Spørringen viser gjeldende tilstand som `[Arc=true]` / `[Arc=false]`; å trykke **A** igjen bytter den tilbake, slik at rette og buesegmenter fritt kan blandes i én polylinje.

Når Arc-modus er på, er hvert nytt segment en tangentiell fortsettelsesbue — den starter tangentielt til det som kom rett før den (retningen til det forrige rette segmentet, eller sluttangensen til den forrige buen); det aller første segmentet peker som standard mot øst, siden det ikke har noe å være tangentiell til.

## Koordinatinntasting

I stedet for å klikke kan du skrive inn en eksakt posisjon for et hvilket som helst hjørne:

1. Skriv X-verdien.
2. Trykk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-verdien.
4. Trykk **Enter** for å plassere hjørnet.

## Vinkellås og eksakt segmentlengde

Den samme 45°-festelogikken som [Line](../line/#angle-locking-and-exact-length-input)-kommandoen gjelder mellom to påfølgende punkter. Når låst til en akse:

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Legg til siffer i segmentlengden |
| `-` | Negativ lengde — reverserer retningen langs aksen (kun første tegn) |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Plasser det neste punktet ved den inntastede avstanden |

Den gjeldende akkumulerte lengden vises i terminalledeteksten i sanntid. Å klikke mens låst projiserer på aksen, slik at det nye hjørnet havner nøyaktig på den.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting, eller segmentlengde mens vinkellåst |
| `,` | Lås X og gå til Y-inntasting |
| `A` | Veksle Arc-modus for neste segment (etter det første hjørnet, uten pågående inntasting) |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft inntastet koordinat eller lengde, eller avslutt polylinjen hvis ingenting er skrevet og ≥ 2 punkter finnes |
| `Space` | Avslutt polylinjen (samme som Enter når ingen inntasting pågår) |
| `Escape` | Forkast alle punkter og gå ut |

## Grep-redigering — hjørner og segmentmidtpunkter

En markert polylinje viser to typer grep:

| Grep | Posisjon | Hva den gjør |
|------|----------|--------------|
| **Hjørne** | Ved hvert plasserte punkt | Dra for å omplassere det hjørnet; alle tilkoblede segmenter strekker seg for å følge |
| **Segmentmidtpunkt** | Senter av hvert segment | Dra for å forskyve **begge** endepunktene til det segmentet sammen, og beholde segmentets lengde og vinkel intakt |

Segmentmidtpunkt-grepet er unikt for polylinjer — det lar deg gli et enkelt segment sidelengs uten å endre lengden. På en [Line](../line/) aktiverer midtpunktgrepet i stedet Move-kommandoen for hele entiteten.

Det finnes ikke noe enkelt "flytt hele polylinjen"-grep. For å flytte hele banen, bruk [Move](../move/)-kommandoen.

## Markere polylinjer

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Markerer polylinjen hvis klikket lander innenfor treffavstand for et hvilket som helst segment |
| **Dra til høyre** (streng) | Alle hjørner må falle inni boksen |
| **Dra til venstre** (krysning) | Ethvert segment som krysser boksens kant markerer hele polylinjen |

Fordi en polylinje er én entitet, markerer en krysningsmarkering som berører et hvilket som helst segment alle segmentene.

## Støttede redigeringskommandoer

Polylinjer støtter enhver generell transformasjon, i tillegg til offset, trim, extend, fillet og chamfer (ved chamfer telles kun rette segmenter):

| Kommando | Hva som skjer med polylinjen |
|---------|------------------------------|
| [Move](../move/) | Flytter alle hjørner med samme forskyvning |
| [Copy](../copy/) | Oppretter en identisk polylinje på en ny posisjon |
| [Rotate](../rotate/) | Roterer alle hjørner rundt det valgte basispunktet |
| [Mirror](../mirror/) | Speilvender alle hjørner over speilaksen |
| [Scale](../scale/) | Skalerer alle hjørner jevnt fra basispunktet |
| [Offset](../offset/) | Oppretter en parallell polylinje i en fast vinkelrett avstand |
| [Trim](../trim/) | Fjerner delen mellom to skjæringspunkter, for rette og buesegmenter likt |
| [Extend](../extend/) | Forlenger det første eller siste segmentet til neste grense |
| [Fillet](../fillet/) | Avrunder et hjørne mellom to **tilstøtende** segmenter, rette eller buer, med en tangentbue satt inn i polylinjen som et nytt buesegment |
| [Chamfer](../chamfer/) | Faser et hjørne mellom to tilstøtende rette segmenter |
| [Explode](../explode/) | Deler polylinjen opp i frittstående linje- og bueenheter, én per segment |
| [Delete](../delete/) | Fjerner polylinjen fra tegningen |

Å filete et polylinjesegment mot noe annet enn sitt eget nabosegment forblir ikke en enkel redigering på stedet — se [Fillet](../fillet/) for resultatet (sammenslåing til én ny polylinje, bundet sammen av fillet-buen).

## Egenskaper

Når en polylinje er markert, viser egenskapspanelet:

**Generelt**

| Egenskap | Standard | Betydning |
|----------|---------|---------|
| Farge | 256 (ByLayer) | ACI-fargeindeks |
| Lag | `0` | Lagtilhørighet |
| Linetype | ByLayer | Navngitt strekmønster |
| Linetype Scale | 1 | Skaleringsfaktor for strekmønsteret |
| Thickness | 0 | Ekstruderingstykkelse |

**Geometri**

| Egenskap | Betydning |
|----------|---------|
| Closed | Om det siste hjørnet kobles tilbake til det første |
| Vertex Count | Totalt antall hjørner |
| Vertices | Koordinatliste for alle hjørner |

## Polyline vs Line — hva du bør bruke

| | Polyline | Line |
|---|---------|------|
| Antall entiteter | Én `LWPOLYLINE` for hele banen | Én `LINE` per segment |
| Lukket form | Ja (close-flagg) | Nei |
| Buesegmenter | Ja, per segment via `Arc`-bryteren | Nei — et buet segment trenger en separat [Arc](../arc/)-entitet |
| Trim / Extend | Ja | Ja — segment for segment |
| Segmentmidtpunkt-grep | Forskyver hele segmentet | Aktiverer Move for entiteten |
| Best til | Omriss, konturer, former du beholder hele | Hjelpelinjer, geometri du skal trimme |

## DXF — LWPOLYLINE-entitet

Polylinjer lagres som `LWPOLYLINE`-entiteter i DXF-filen. Alle egenskaper — hjørnekoordinater, close-flagg, farge, lag, linetype, linetype-skala og tykkelse — overlever en rundtur uten tap. Rektangler tegnet med [Rectangle](../rectangle/)-kommandoen lagres også som `LWPOLYLINE` (lukket, fire hjørner) og er umulige å skille fra på DXF-nivå.

`LWPOLYLINE`-entiteter fra enhver DXF-kompatibel applikasjon (LibreCAD, FreeCAD osv.) leses tilbake som fullt redigerbare polylinjer i editoren.
