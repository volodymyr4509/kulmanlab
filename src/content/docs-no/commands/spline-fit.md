---
title: Spline Fit — Tegn Interpolerende Splines gjennom Klikkede Punkter
description: Spline Fit-kommandoen tegner en kubisk spline som går gjennom nøyaktig hvert klikkede punkt. Internt lagres kurven med både tilpasningspunkter og beregnede kontrollpunkter. Å dra et tilpasningspunkt-grep re-interpolerer hele kurven. Full DXF-rundtur som SPLINE-entiteter.
keywords: [CAD spline fit-kommando, interpolerende spline CAD, spline gjennom punkter, tegn jevn kurve CAD, SPLINE DXF tilpasningspunkter, spline-grepredigering, kulmanlab]
group: shapes
order: 9
---

# Spline Fit

Kommandoen `splinefit` tegner en kubisk spline som går gjennom hvert punkt du klikker — en interpolerende kurve. I motsetning til [Spline CV](../spline-cv/), der kurven kun trekkes mot kontrollpunkter, tvinges kurven her til å treffe hver klikkede koordinat nøyaktig. Internt tilpasser editoren kontrollpunkter for å oppnå dette, og disse CV-ene lagres sammen med tilpasningspunktene i DXF-filen.

## Tegne en spline gjennom tilpasningspunkter

1. Skriv `splinefit` i terminalen eller klikk på **Spline Fit**-knappen i verktøylinjen.
2. **Klikk for å plassere tilpasningspunkter** — kurven vil gå gjennom hvert av dem. Eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
3. Trykk **Enter** for å avslutte (minst 2 punkter kreves).

```
  ●──────●──────●──────●  ← kurven går nøyaktig gjennom hvert klikk
  p1     p2     p3     p4
```

Den levende forhåndsvisningen viser den gjeldende interpolerte kurven mens du flytter markøren, inkludert det potensielle neste punktet ved markørposisjonen. Trykk **Escape** for å forkaste alle plasserte punkter og gå ut.

## Koordinatinntasting

I stedet for å klikke kan du skrive inn en eksakt posisjon for et hvilket som helst tilpasningspunkt:

1. Skriv X-verdien.
2. Trykk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-verdien.
4. Trykk **Enter** for å plassere tilpasningspunktet.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting |
| `,` | Lås X og gå til Y-inntasting |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft inntastet koordinat, eller avslutt splinen hvis ingen inntasting pågår og ≥ 2 punkter finnes |
| `Escape` | Forkast alle punkter og gå ut |

## Grep-redigering — omforme via tilpasningspunkter

En markert fit-spline viser ett grep per tilpasningspunkt:

| Grep | Posisjon | Hva den gjør |
|------|----------|--------------|
| **Tilpasningspunkt** | Ved hver klikket posisjon | Dra for å flytte det tilpasningspunktet — hele kurven re-interpoleres for å gå gjennom den nye posisjonen |

Å dra ett grep re-tilpasser hele kurven, ikke bare de tilstøtende segmentene. Dette skiller seg fra polylinje-grepredigering, der å flytte et hjørne kun omformer de to tilstøtende segmentene.

Det finnes ikke noe "flytt hele splinen"-grep. For å flytte hele splinen, bruk [Move](../move/)-kommandoen.

## Markere fit-splines

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Markerer hvis klikket lander nær et hvilket som helst punkt på kurven |
| **Dra til høyre** (streng) | Alle prøvepunkter langs kurven må ligge inni markeringsboksen |
| **Dra til venstre** (krysning) | Enhver del av kurven som krysser markeringsboksens kant markerer den |

## Støttede redigeringskommandoer

| Kommando | Hva som skjer med splinen |
|---------|---------------------------|
| [Move](../move/) | Flytter alle tilpasningspunkter og gjenberegnede CV-er med samme forskyvning |
| [Copy](../copy/) | Oppretter en identisk spline på en ny posisjon |
| [Rotate](../rotate/) | Roterer alle tilpasningspunkter rundt det valgte basispunktet |
| [Mirror](../mirror/) | Speilvender alle tilpasningspunkter over speilaksen |
| [Scale](../scale/) | Skalerer alle tilpasningspunkter jevnt fra basispunktet |
| [Delete](../delete/) | Fjerner splinen |

Splines støtter ikke **Offset**, **Trim** eller **Extend**.

## Egenskaper

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
| Degree | Polynomgrad — alltid 3 (kubisk) |
| Fit Points | Koordinater for alle klikkede gjennomgangspunkter |
| Control Vertices | Internt beregnede CV-er brukt til å gjengi kurven |

## Spline Fit vs Spline CV — hva du bør bruke

| | Spline Fit | Spline CV |
|---|------------|-----------|
| Kurven går gjennom punkter | Nøyaktig hvert klikkede punkt | Kun første og siste (klemt) |
| Grep-redigeringseffekt | Tilpasningspunkt flytter → hele kurven re-interpoleres | CV flytter → kurven trekkes mot ny posisjon |
| Formforutsigbarhet | Høy — kurven følger klikkene | Lavere — kurven henger etter CV-ene |
| Best til | Kurver som må treffe spesifikke koordinater | Jevne estetiske kurver, frihåndsbaner |

## DXF — SPLINE-entitet (tilpasningspunktform)

Fit-splines lagres som `SPLINE`-entiteter i DXF-filen, og lagrer både tilpasningspunktkoordinatene og de beregnede kontrollpunktene. `splineFlag` settes til `8` (fit-point-spline) slik at en gjeninnlastende applikasjon vet hvilket sett med punkter som skal vises som redigerbare grep. Alle egenskaper — farge, lag, linetype, linetype-skala og tykkelse — overlever en rundtur uten tap. DXF-applikasjoner som støtter fit-point-splines (LibreCAD, FreeCAD) vil vise tilpasningspunktene som den primære redigerbare dataen.
