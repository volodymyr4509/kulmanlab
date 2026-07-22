---
title: Dimension Linear-kommando — Horisontale og Vertikale Mål
description: Dimension Linear-kommandoen måler den horisontale eller vertikale avstanden mellom to punkter. Mållinjen er alltid akse-justert — trykk H eller V for å låse retning, eller la markørposisjonen avgjøre automatisk. Full DXF-rundtur som DIMENSION-entiteter.
keywords: [CAD dimension linear, horisontalt mål CAD, vertikalt mål CAD, dimlinear, H V retningslås, målforskyvning, kulmanlab]
group: markup
order: 4
---

# Dimension Linear

Kommandoen `dimlinear` plasserer et horisontalt eller vertikalt mål mellom to hjelpelinjeopprinnelser. Mållinjen går alltid enten perfekt horisontalt eller perfekt vertikalt — den kan ikke plasseres i en vilkårlig vinkel. Bruk [Dimension Aligned](../dim-aligned/) når du trenger et mål parallelt med en diagonal linje.

## Anatomien til et lineært mål

```
  |←————— 5.00 —————→|
  |                   |
  ●  (hjelpelinje 1)  ●  (hjelpelinje 2)
  p1                  p2
```

- **Hjelpelinjer** — går ned fra hvert målte punkt, vinkelrett på mållinjen.
- **Mållinje** — horisontal (måler X-avstand) eller vertikal (måler Y-avstand).
- **Verdi** — den projiserte avstanden langs den valgte aksen, ikke den sanne punkt-til-punkt-avstanden.

## Plassere et lineært mål

1. Skriv `dimlinear` i terminalen eller klikk på **Dimension Linear**-knappen i verktøylinjen.
2. **Klikk opprinnelsen til den første hjelpelinjen** (p1), eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
3. **Klikk opprinnelsen til den andre hjelpelinjen** (p2). Koordinatinntasting fungerer også her.
4. **Flytt markøren** for å posisjonere mållinjen. Retningen registreres automatisk fra markørposisjonen.
5. **Klikk** for å plassere, eller skriv en forskyvningsavstand og trykk **Enter** for presis plassering.

## Automatisk retningsregistrering

Når ingen retning er tvunget, leser kommandoen markørposisjonen relativt til de to målte punktene:

| Markørposisjon | Registrert retning | Hva som måles |
|-----------------|---------------------|-----------------|
| Over eller under punktene | Horisontal | Δ X mellom p1 og p2 |
| Til venstre eller høyre for punktene | Vertikal | Δ Y mellom p1 og p2 |

Trykk **H** for å låse horisontalt eller **V** for å låse vertikalt når som helst under plasseringsfasen. Når den er låst, endres ikke retningen mens du beveger markøren.

## Inntastet forskyvningsavstand

Skriv et tall under plassering for å feste mållinjen i en eksakt avstand fra de målte punktene:

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Legg til siffer i forskyvningsavstanden |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` / `Space` | Plasser ved den inntastede avstanden |

Markørsiden (over/under for horisontal, venstre/høyre for vertikal) avgjør fortegnet — mållinjen vises på siden markøren for øyeblikket er på.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting (p1/p2-fasene), eller forskyvningsavstand (plasseringsfasen) |
| `,` | Lås X og gå til Y-inntasting (p1/p2-fasene) |
| `H` | Lås horisontal retning (kun plasseringsfasen) |
| `V` | Lås vertikal retning (kun plasseringsfasen) |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` / `Space` | Bekreft inntastet koordinat eller forskyvning |
| `Escape` | Avbryt |

## Dimension Linear vs Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Akse | Alltid H eller V | Parallell med den målte linjen |
| Måler | Kun X- eller Y-komponent | Sann euklidsk avstand |
| H/V-taster | Ja — låser retning | Nei — følger alltid p1→p2 |
| Best til | Ortogonale layouter, plantegninger | Diagonale elementer, vinklede kutt |

## Redigere etiketten — enkel modus

**Dobbeltklikk** på et plassert lineært mål for å åpne teksteditoren i **enkel** modus. Editoren er forhåndsutfylt med gjeldende gjengitte verdi, slik at du kan plassere markøren og redigere den direkte.

| Funksjon | Oppførsel |
|---------|-----------|
| Fet / Kursiv / Skrift / Høyde | Gjelder **hele** etiketten samtidig |
| Per-tegn formatering | Støttes ikke |
| `Enter` | Bekrefter verdien og lukker editoren |
| Flerlinje | Støttes ikke |

Se [Tekstredigering — enkel modus](../../interface/text-editor/#simple-mode) for den fullstendige referansen.

## Kjede mål

For å legge til flere mål som fortsetter fra den siste hjelpelinjen, bruk [Dimension Continue](../dim-continue/) umiddelbart etter å ha plassert dette.

## DXF — DIMENSION-entitet

Lineære mål lagres som `DIMENSION`-entiteter med `rotationDeg` satt til `0` (horisontal) eller `90` (vertikal). Hjelpelinjeopprinnelser, mållinjeposisjon, tekstposisjon, målt verdi, pilstil, teksthøyde og alle visningsflagg overlever en rundtur uten tap.
