---
title: Ellipse-kommando — Tegn Roterte Ellipser med Senter og To Akser
description: Ellipse-kommandoen tegner en ellipse med tre klikk — senter, endepunkt for første akse (i en hvilken som helst retning), deretter lengden på andre akse. De to aksene er alltid vinkelrette. Hver halvakse har sitt eget grep for uavhengig størrelsesendring etter plassering. Full DXF-rundtur som ELLIPSE-entiteter.
keywords: [CAD ellipse-kommando, tegn ellipse CAD, rotert ellipse CAD, ellipseakser, ELLIPSE DXF-entitet, ellipsegrep-redigering, akseforhold, kulmanlab]
group: shapes
order: 6
---

# Ellipse

Kommandoen `ellipse` tegner en ellipse med tre klikk: et senterpunkt, endepunktet for den første (store) halvaksen i en hvilken som helst vinkel, og lengden på den andre (lille) halvaksen. De to aksene er alltid vinkelrette på hverandre — retningen til den andre aksen utledes automatisk fra den første.

## Tegne en ellipse

1. Skriv `ellipse` i terminalen eller klikk på **Ellipse**-knappen i verktøylinjen.
2. **Klikk senterpunktet**, eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
3. **Klikk endepunktet for den første aksen** — setter både retningen og lengden på den første halvaksen. Koordinatinntasting fungerer også her.
4. **Sett lengden på den andre aksen** — flytt markøren vinkelrett på den første aksen, klikk deretter eller skriv inn en lengde.

```
               ● ← endepunkt for første akse (steg 3)
              /
  senter ●  /  ← første akse (en hvilken som helst vinkel)
            |
            ● ← markøren her setter lengden på andre akse (steg 4)
```

Ellipsen plasseres etter steg 4 og kommandoen avsluttes.

## Akseinntasting — klikk, koordinat eller inntastet lengde

**Senter (steg 2):** klikk eller skriv `X,Y` for en eksakt posisjon.

**Endepunkt for første akse (steg 3):** klikk, eller skriv `X,Y` for en eksakt koordinat. Vinkellås fester også til 45°-inkrementer — mens låst, skriv en lengde og trykk **Enter** for å plassere endepunktet i nøyaktig den avstanden.

**Andre akse (steg 4):** inntastet lengde er alltid tilgjengelig — ingen vinkellås nødvendig. Retningen er allerede fast vinkelrett på den første aksen; inntasting setter kun lengden.

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Legg til siffer i akselengden (andre akse-fase) |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Plasser akseendepunktet ved den inntastede lengden |

## Koordinatinntasting (senter og endepunkt for første akse)

1. Skriv X-verdien.
2. Trykk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-verdien.
4. Trykk **Enter** for å bekrefte.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting (senter-/første akse-fasene), eller akselengde mens vinkellåst |
| `,` | Lås X og gå til Y-inntasting |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft inntastet koordinat eller lengde |
| `Escape` | Avbryt og tilbakestill |

## Grep-redigering — uavhengig størrelsesendring på aksene

En markert ellipse viser fem grep:

| Grep | Antall | Hva den gjør |
|------|-------|--------------|
| **Senter** | 1 | Flytter hele ellipsen; begge aksene forblir uendret |
| **Hovedakse-endepunkter** | 2 (motsatte ender av den lengste aksen) | Dra for å endre lengden på hovedhalvaksen; den lille aksens absolutte størrelse forblir konstant |
| **Biakse-endepunkter** | 2 (motsatte ender av den korteste aksen) | Dra for å endre lengden på bihalvaksen; hovedaksen forblir uendret |

Hoved- og biakse-grepene er uavhengige — du kan omforme ellipsen uten å kjøre kommandoen på nytt.

## Markere ellipser

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Markerer hvis klikket lander nær ellipsens omriss |
| **Dra til høyre** (streng) | Ellipsens akse-justerte avgrensningsboks må passe helt inni markeringsboksen |
| **Dra til venstre** (krysning) | Enhver del av ellipsens omriss som krysser markeringsboksens kant markerer den |

## Støttede redigeringskommandoer

| Kommando | Hva som skjer med ellipsen |
|---------|-----------------------------|
| [Move](../move/) | Flytter senteret; begge aksene forblir uendret |
| [Copy](../copy/) | Oppretter en identisk ellipse med et nytt senter |
| [Rotate](../rotate/) | Roterer senterposisjonen og hovedaksevektoren med samme vinkel |
| [Mirror](../mirror/) | Speilvender senteret og beregner hovedakseretningen på nytt over speilaksen |
| [Scale](../scale/) | Skalerer senterposisjonen og multipliserer begge halvakselengder med faktoren |
| [Offset](../offset/) | Oppretter en konsentrisk ellipse forskjøvet utover eller innover med en fast avstand |
| [Delete](../delete/) | Fjerner ellipsen |

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
| Center X / Center Y | Senter av ellipsen |
| Major Axis X / Major Axis Y | Vektor fra senteret til hovedakseendepunktet (koder både retning og lengde) |
| Axis Ratio | Forholdet mellom liten halvakse og stor halvakse (0 < forhold ≤ 1) |
| Start Angle / End Angle | Parametriske vinkler i grader; begge er 0°/360° for en full ellipse |

## Ellipse vs Circle — hva du bør bruke

| | Ellipse | Circle |
|---|---------|--------|
| Akser | To uavhengige halvakser i en hvilken som helst vinkel | Én radius, symmetrisk |
| Rotasjon | Kan plasseres i en hvilken som helst vinkel | Ingen rotasjon |
| Inntastet verdi | Lengde per akse | Kun radius |
| Grep-størrelsesendring | Hoved- og biakse uavhengig | Alle fire kardinalpunkter likt |
| Best til | Skrå visninger, ovale elementer, perspektivhull | Symmetriske runde elementer |

## DXF — ELLIPSE-entitet

Ellipser lagres som `ELLIPSE`-entiteter i DXF-filen. Formatet lagrer senterpunktet, den fullstendige hovedaksevektoren (retning + lengde) og akseforholdet. Rotasjon, form og alle stilegenskaper overlever en rundtur uten tap. En sirkel lagres **ikke** som en degenerert ellipse — de to entitetstypene forblir distinkte i DXF-modellen.
