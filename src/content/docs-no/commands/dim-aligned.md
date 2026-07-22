---
title: Dimension Aligned-kommando — Sanne Avstandsmål i Enhver Vinkel
description: Dimension Aligned-kommandoen måler den sanne rettlinjede avstanden mellom to punkter. Mållinjen går parallelt med linjen p1→p2 i en hvilken som helst vinkel — i motsetning til Dimension Linear, som er begrenset til horisontalt eller vertikalt. Full DXF-rundtur som DIMENSION-entiteter.
keywords: [CAD dimension aligned, dimaligned, diagonalt mål CAD, sant avstandsmål, vinklet mål CAD, kulmanlab]
group: markup
order: 5
---

# Dimension Aligned

Kommandoen `dimaligned` plasserer et mål som måler den **sanne rettlinjede avstanden** mellom to punkter. Mållinjen går parallelt med linjen som forbinder de to punktene, så den kan være i en hvilken som helst vinkel. Dette er den sentrale forskjellen fra [Dimension Linear](../dim-linear/), som er begrenset til horisontalt eller vertikalt.

## Anatomien til et justert mål

```
     ●  p2
    /|
   / |  (hjelpelinje 2, vinkelrett på mållinjen)
  /  |
 /←5.00→/
/  /
●  /  (hjelpelinje 1, vinkelrett på mållinjen)
p1
```

- **Hjelpelinjer** — vinkelrett på mållinjen, tegnet fra hvert målte punkt.
- **Mållinje** — parallell med p1→p2, forskjøvet til én side etter markørposisjon.
- **Verdi** — den sanne euklidske avstanden `|p1 – p2|`.

## Plassere et justert mål

1. Skriv `dimaligned` i terminalen eller klikk på **Dimension Aligned**-knappen i verktøylinjen.
2. **Klikk opprinnelsen til den første hjelpelinjen** (p1), eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
3. **Klikk opprinnelsen til den andre hjelpelinjen** (p2). Koordinatinntasting fungerer også her.
4. **Flytt markøren** til én side for å sette den vinkelrette forskyvningen av mållinjen.
5. **Klikk** for å plassere, eller skriv en forskyvningsavstand og trykk **Enter** for presis plassering.

## Inntastet forskyvningsavstand

Skriv et tall under plassering for å feste mållinjen i en eksakt vinkelrett avstand fra linjen p1→p2:

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Legg til siffer i forskyvningen |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` / `Space` | Plasser ved den inntastede forskyvningen |

Markørsiden avgjør hvilken side mållinjen vises på.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting (p1/p2-fasene), eller forskyvningsavstand (plasseringsfasen) |
| `,` | Lås X og gå til Y-inntasting (p1/p2-fasene) |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` / `Space` | Bekreft inntastet koordinat eller forskyvning |
| `Escape` | Avbryt |

## Dimension Aligned vs Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Mållinjevinkel | Parallell med p1→p2 — enhver vinkel | Alltid horisontalt eller vertikalt |
| Måler | Sann euklidsk avstand | Kun X- eller Y-komponent |
| H/V-retningslås | Nei | Ja — `H`- og `V`-tastene |
| Best til | Diagonale elementer, vinklede kutt | Ortogonale layouter, rutenettjusterte deler |

## Redigere etiketten — enkel modus

**Dobbeltklikk** på et plassert justert mål for å åpne teksteditoren i **enkel** modus. Editoren er forhåndsutfylt med gjeldende gjengitte verdi, slik at du kan plassere markøren og redigere den direkte.

| Funksjon | Oppførsel |
|---------|-----------|
| Fet / Kursiv / Skrift / Høyde | Gjelder **hele** etiketten samtidig |
| Per-tegn formatering | Støttes ikke |
| `Enter` | Bekrefter verdien og lukker editoren |
| Flerlinje | Støttes ikke |

Se [Tekstredigering — enkel modus](../../interface/text-editor/#simple-mode) for den fullstendige referansen.

## Kjede mål

For å legge til flere mål som fortsetter fra den andre hjelpelinjen til dette, bruk [Dimension Continue](../dim-continue/) — den låser til samme målevinkel som dette justerte målet.

## DXF — DIMENSION-entitet (justert type)

Justerte mål lagres som `DIMENSION`-entiteter med `dimType = 1` (aligned). Opprinnelser for hjelpelinjer, mållinjeposisjon, tekstposisjon, målt verdi, rotasjon, pilstil og alle visningsflagg overlever en rundtur uten tap.
