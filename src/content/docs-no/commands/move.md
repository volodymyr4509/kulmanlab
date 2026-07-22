---
title: Move-kommando — Flytt Markerte Entiteter via Basispunkt
description: Move-kommandoen flytter én eller flere markerte entiteter via et basispunkt og et mål. Støtter forhåndsmarkering, vinkellås og eksakt avstandsinntasting. Etter flyttingen forblir entitetene markert på sin nye posisjon. Alle entitetstyper støttes.
keywords: [CAD move-kommando, flytt entiteter CAD, flytt objekter CAD, vinkellås flytting, eksakt avstand flytting, grep-flytting CAD, kulmanlab]
group: edit
order: 1
---

# Move

Kommandoen `move` flytter markerte entiteter fra et basispunkt til et målpunkt. Forskyvningen som brukes på hver markerte entitet er vektoren fra basis til mål. Etter flyttingen forblir alle entiteter markert på sin nye posisjon, klare for videre redigering.

## To måter å starte på

**Marker først, deretter flytt** — marker entiteter først, aktiver deretter:

1. Marker én eller flere entiteter på lerretet.
2. Skriv `move` i terminalen eller klikk på **Move**-knappen i verktøylinjen.
3. **Klikk basispunktet**, eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
4. **Klikk målet** — alle markerte entiteter forskyves med vektoren basis→mål. Koordinatinntasting fungerer også her.

**Aktiver, marker deretter** — start kommandoen uten noe markert:

1. Skriv `move` eller klikk på verktøylinjeknappen.
2. **Marker objekter** — klikk for å slå enkeltentiteter av/på, eller dra for å markere etter område.
3. Trykk **Enter** eller **Space** for å bekrefte markeringen.
4. **Klikk basispunktet**, deretter **klikk målet** (koordinatinntasting tilgjengelig i begge steg).

```
  Før:                       Etter:
  ● basis                       → ● mål
  [entitet A]                      [entitet A flyttet]
  [entitet B]                      [entitet B flyttet]
```

En spøkelsesforhåndsvisning av alle markerte entiteter følger markøren fra basispunktet til målet, og viser resultatet før du klikker.

## Koordinatinntasting

Ved basispunkt- eller målsteget kan du skrive inn en eksakt posisjon i stedet for å klikke:

1. Skriv X-verdien.
2. Trykk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-verdien.
4. Trykk **Enter** for å bekrefte.

## Vinkellås og eksakt avstand

Etter at basispunktet er satt, ser kommandoen etter en 45°-festeakse (0°, 45°, 90°, 135° …). Retningen **låses** når markøren er langt nok fra basisen og innenfor én grepbredde fra aksen. Mens låst:

- Spøkelsesforhåndsvisningen festes til aksen.
- Skriv en avstand og trykk **Enter** for å flytte nøyaktig så langt langs den låste retningen.
- Å klikke projiserer på aksen, slik at målet alltid ligger nøyaktig på den.

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Legg til avstandsverdien |
| `-` | Negativ avstand — reverserer retningen langs aksen (kun første tegn) |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bruk flyttingen ved den inntastede avstanden |

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekreft markering og gå videre til basispunkt-fasen |
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting, eller avstand mens vinkellåst |
| `,` | Lås X og gå til Y-inntasting |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft koordinat eller bruk flytting på inntastet avstand |
| `Escape` | Avbryt og tilbakestill |

## Aktivere Move fra et grep

Å klikke **midtpunktgrepet** på en markert [Line](../line/) starter Move automatisk, med midtpunktet allerede satt som basispunkt og flyttefasen aktiv. Dette er den raskeste måten å omplassere en enkelt linje på uten å gå gjennom markeringssteget.

## Markering under kommandoen

Når kommandoen starter i markeringsfasen:

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Slår entiteten under markøren av/på i markeringen |
| **Dra til høyre** (streng) | Legger til entiteter helt inni boksen |
| **Dra til venstre** (krysning) | Legger til entiteter som krysser boksens kant |
| **Enter** / **Space** | Bekrefter markeringen og går videre til basispunkt-fasen |

## Etter flyttingen

De flyttede entitetene forblir markert på sin nye posisjon. Dette betyr at du umiddelbart kan:
- Kjøre **Move** igjen for å flytte dem videre.
- Kjøre [Copy](../copy/), [Rotate](../rotate/) eller [Scale](../scale/) uten å markere på nytt.
- Trykke **Delete** for å fjerne dem.

## Move vs Copy

| | Move | Copy |
|---|------|------|
| Opprinnelig posisjon | Forlatt — entitetene er ikke lenger der | Beholdt — originalene blir på plass |
| Antall resultater | Samme antall entiteter | Ett ekstra sett per operasjon |
| Markering etterpå | Flyttede entiteter markert på ny posisjon | Kopierte entiteter markert på ny posisjon |
| Best til | Omplassere geometri | Duplisere geometri |

## Støttede entiteter

Move fungerer på alle entitetstyper: Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader og alle andre. Alle entiteter implementerer `translate(dx, dy)`, så ingen er utelatt.
