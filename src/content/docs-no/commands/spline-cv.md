---
title: Spline CV — Tegn B-Splines ved å Plassere Kontrollpunkter
description: Spline CV-kommandoen tegner en kubisk B-spline ved å plassere kontrollpunkter. Kurven trekkes mot punktene, men går gjennom kun det første og siste (klemte knuter). Hvert CV-grep kan dras for å omforme kurven etter plassering. Full DXF-rundtur som SPLINE-entiteter.
keywords: [CAD spline-kommando, B-spline kontrollpunkter, klemt spline CAD, tegn spline CAD, SPLINE DXF-entitet, spline-grepredigering, kulmanlab]
group: shapes
order: 8
---

# Spline CV

Kommandoen `splinecv` tegner en **kubisk B-spline** ved å plassere kontrollpunkter (CV-er). Den resulterende kurven trekkes mot hvert CV, men går ikke gjennom dem — unntatt ved det aller første og siste punktet, der **klemte knuter** forankrer kurven nøyaktig. Dette gir deg intuitiv formkontroll: dra et punkt for å skyve kurven mot det uten å tvinge den til å berøre hvert punkt.

## Tegne en spline med kontrollpunkter

1. Skriv `splinecv` i terminalen eller klikk på **Spline CV**-knappen i verktøylinjen.
2. **Klikk for å plassere kontrollpunkter** — hvert klikk legger til et punkt. Eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
3. Trykk **Enter** for å avslutte (minst 2 punkter kreves).

```
  CV ●         ● CV
      \       /
       \     /    ← kurven trekkes mot CV-ene
        \   /         men går ikke gjennom dem
  CV ●   ●   ● CV (start/slutt: kurven berører her)
```

Den levende forhåndsvisningen oppdateres mens du flytter markøren etter hvert punkt, og viser hvordan splinen vil se ut med det neste punktet ved markørposisjonen. Trykk **Escape** for å forkaste alle plasserte punkter og gå ut.

## Koordinatinntasting

I stedet for å klikke kan du skrive inn en eksakt posisjon for et hvilket som helst kontrollpunkt:

1. Skriv X-verdien.
2. Trykk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-verdien.
4. Trykk **Enter** for å plassere punktet.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting |
| `,` | Lås X og gå til Y-inntasting |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft inntastet koordinat, eller avslutt splinen hvis ingen inntasting pågår og ≥ 2 punkter finnes |
| `Escape` | Forkast alle punkter og gå ut |

## Grep-redigering — omforme via kontrollpunkter

En markert CV-spline viser ett grep per kontrollpunkt:

| Grep | Posisjon | Hva den gjør |
|------|----------|--------------|
| **Kontrollpunkt** | Ved hver CV-posisjon | Dra for å flytte det CV-et — kurven omformes mot den nye posisjonen |

Det finnes ikke noe "flytt hele splinen"-grep. For å flytte hele splinen, bruk [Move](../move/)-kommandoen.

## Markere CV-splines

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Markerer hvis klikket lander nær et hvilket som helst punkt på kurven |
| **Dra til høyre** (streng) | Alle prøvepunkter langs kurven må ligge inni markeringsboksen |
| **Dra til venstre** (krysning) | Enhver del av kurven som krysser markeringsboksens kant markerer den |

## Støttede redigeringskommandoer

| Kommando | Hva som skjer med splinen |
|---------|---------------------------|
| [Move](../move/) | Flytter alle kontrollpunkter med samme forskyvning |
| [Copy](../copy/) | Oppretter en identisk spline på en ny posisjon |
| [Rotate](../rotate/) | Roterer alle CV-er rundt det valgte basispunktet |
| [Mirror](../mirror/) | Speilvender alle CV-er over speilaksen |
| [Scale](../scale/) | Skalerer alle CV-er jevnt fra basispunktet |
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
| Control Vertices | Koordinater for alle CV-er |
| Fit Points | Tom for CV-splines; kun fylt for fit-point-splines |

## Spline CV vs Spline Fit — hva du bør bruke

| | Spline CV | Spline Fit |
|---|-----------|------------|
| Kurven går gjennom punkter | Kun første og siste (klemt) | Nøyaktig hvert klikkede punkt |
| Formkontroll | Trekk CV-er mot et område | Flytt tilpasningspunkter kurven må berøre |
| Grep-redigeringseffekt | CV flytter → kurven trekkes | Tilpasningspunkt flytter → kurven re-interpoleres |
| Best til | Jevne estetiske kurver, frihåndsbaner | Kurver som må treffe spesifikke koordinater |

## DXF — SPLINE-entitet (kontrollpunktform)

CV-splines lagres som `SPLINE`-entiteter i DXF-filen, og lagrer graden, knutevektoren og alle kontrollpunktkoordinater. Alle egenskaper — farge, lag, linetype, linetype-skala og tykkelse — overlever en rundtur uten tap. `splineFlag` settes til `9` (CV-spline) slik at formen bevares ved gjeninnlasting. Enhver DXF-applikasjon som støtter `SPLINE`-entiteter med CV-data, leser disse korrekt.
