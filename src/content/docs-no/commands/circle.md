---
title: Circle-kommando — Tegn Sirkler med Senter og Radius
description: Circle-kommandoen plasserer en sirkel ved å klikke et senterpunkt og deretter klikke eller skrive inn radiusen. Fire kardinalgrep lar deg endre radiusen ved å dra uten å kjøre kommandoen på nytt. Full DXF-rundtur som CIRCLE-entiteter.
keywords: [CAD circle-kommando, tegn sirkel CAD, sirkelradius-inntasting, endre størrelse sirkel-grep, CIRCLE DXF-entitet, dimradius sirkel, kulmanlab]
group: shapes
order: 4
---

# Circle

Kommandoen `circle` tegner en sirkel definert av et senterpunkt og en radius. Etter at senteret er klikket kan du sette radiusen enten ved å klikke et andre punkt på lerretet eller ved å skrive inn et eksakt tall — begge alternativene er aktive samtidig.

## Tegne en sirkel

1. Skriv `circle` i terminalen eller klikk på **Circle**-knappen i verktøylinjen.
2. **Klikk senterpunktet**, eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
3. Sett radiusen — enten:
   - **Klikk et hvilket som helst punkt** på lerretet — avstanden fra senteret blir radiusen, eller
   - **Skriv inn radiusen** og trykk **Enter** for en eksakt verdi.

Sirkelen plasseres umiddelbart og kommandoen avsluttes.

```
  senter ●
          \  forhåndsvisning av radiuslinje
           \
            ● ← klikk her, eller skriv inn et tall
```

Mens du er i radiusfasen viser den levende forhåndsvisningen sirkelen ved gjeldende markøravstand og tegner også en radiuslinje fra senteret til gjeldende punkt.

## Koordinatinntasting for senteret

I stedet for å klikke kan du skrive inn senterposisjonen:

1. Skriv X-verdien.
2. Trykk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-verdien.
4. Trykk **Enter** for å plassere senteret og gå videre til radiusinntasting.

## Inntastet radius

Etter at senteret er plassert, bygger inntasting umiddelbart opp en radiusverdi:

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Legg til siffer i radiusverdien |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Plasser sirkelen med den inntastede radiusen |

Den akkumulerte verdien vises i terminalledeteksten (f.eks. `enter radius of circle: 25`). Forhåndsvisningen oppdateres for å vise den inntastede radiusen mens markøren styrer retningen til radiuslinjemarkøren.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting (senterfase), eller radius-siffer (radiusfase) |
| `,` | Lås X og gå til Y-inntasting (senterfase) |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft inntastet koordinat eller radius |
| `Escape` | Avbryt og tilbakestill |

## Grep-redigering — endre størrelse på radiusen

En markert sirkel viser fem grep:

| Grep | Posisjon | Hva den gjør |
|------|----------|--------------|
| **Senter** | Senterpunkt | Flytter hele sirkelen; radiusen forblir uendret |
| **Venstre** | Venstreste punkt (senter − radius) | Dra for å sette en ny radius = avstand til senteret |
| **Høyre** | Høyreste punkt (senter + radius) | Dra for å sette en ny radius = avstand til senteret |
| **Topp** | Øverste punkt | Dra for å sette en ny radius = avstand til senteret |
| **Bunn** | Nederste punkt | Dra for å sette en ny radius = avstand til senteret |

Alle fire kardinalgrep oppfører seg likt — den nye radiusen tilsvarer avstanden fra senteret til dra-posisjonen. Senteret forblir fast.

## Markere sirkler

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Markerer hvis klikket lander nær omkretsen |
| **Dra til høyre** (streng) | Hele avgrensningskvadratet (senter ± radius) må ligge inni boksen |
| **Dra til venstre** (krysning) | Enhver del av omkretsen som krysser eller berører boksens kant markerer sirkelen |

## Støttede redigeringskommandoer

| Kommando | Hva som skjer med sirkelen |
|---------|---------------------------|
| [Move](../move/) | Flytter senteret; radiusen forblir uendret |
| [Copy](../copy/) | Oppretter en identisk sirkel med et nytt senter |
| [Rotate](../rotate/) | Roterer senteret rundt basispunktet; radiusen forblir uendret |
| [Mirror](../mirror/) | Speilvender senteret over speilaksen; radiusen forblir uendret |
| [Scale](../scale/) | Skalerer senterposisjonen og multipliserer radiusen med skaleringsfaktoren |
| [Offset](../offset/) | Oppretter en konsentrisk sirkel med større eller mindre radius |
| [Delete](../delete/) | Fjerner sirkelen |

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
| Center X / Center Y | Koordinater for senterpunktet |
| Radius | Sirkelradius i tegneenheter |

## Circle vs Arc — hva du bør bruke

| | Circle | Arc |
|---|--------|-----|
| Spenn | Full 360° | Delvis — definert av start- og sluttvinkel |
| Hvordan tegne | Senter + radius | Tre punkter på kurven |
| Inntastet verdi | Radiusverdi | Ingen — kun klikk |
| Endre størrelse-grep | 4 kardinalpunkter | Start- og sluttpunkter (vinkel + radius) |
| Dimensjonering | Radius: [Dim Radius](../dim-radius/) · Diameter: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Best til | Fullstendige hull, boltsirkler, runde elementer | Avrundinger, delvise kurver, buede baner |

## DXF — CIRCLE-entitet

Sirkler lagres som `CIRCLE`-entiteter i DXF-filen. Senterkoordinater, radius, farge, lag, linetype, linetype-skala og tykkelse overlever alle en rundtur uten tap. Enhver DXF-kompatibel applikasjon leser disse som standard sirkler.
