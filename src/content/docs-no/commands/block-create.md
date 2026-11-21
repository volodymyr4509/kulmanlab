---
title: "BlockCreate-kommando — Lag en blokk av objekter"
description: "BlockCreate-kommandoen lager en navngitt blokk av de valgte objektene, med et basepunkt du velger, og erstatter dem med én referanse til den. Blokken kan deretter plasseres igjen og igjen med BlockInsert."
keywords: ["lag blokk CAD", "blokk av objekter CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

Kommandoen `OpprettBlokk` lager en **blokk**: en navngitt gruppe objekter som lagres én gang i tegningen og plasseres så ofte du vil med [Block Insert](../block-insert/). Objektene du velger blir blokken, og i tegningen erstattes de av én referanse til den, så ingenting ser annerledes ut.

## Lage en blokk

1. Velg gjerne objektene først, og skriv deretter `OpprettBlokk` eller klikk **Opprett blokk** i panelet **Blokker**. Et vindu åpnes med utvalget allerede i.
2. Skriv et **Navn**. Det kan ikke være tomt, ikke inneholde noen av tegnene `< > / \ " : ; ? * | , =` eller et grav-aksenttegn, og ikke være navnet på en annen blokk.
3. Klikk **Velg objekter** for å legge til eller ta bort objekter: vinduet skjules, og du klikker objekter eller drar et område. Trykk **Enter** eller **Space** for å gå tilbake til vinduet, der **Objekter** viser hvor mange som er med.
4. Sett **Basispunkt**, punktet blokken plasseres etter: skriv dets X og Y, eller klikk **Velg punkt** og deretter på lerretet (eller skriv X,Y der). Det starter på 0,0.
5. Klikk **OK**. Blokken lagres, objektene viker for én referanse til den ved basepunktet, og terminalen logger blokkens navn og hvor mange objekter den inneholder.

## Greit å vite

- **OK** forblir deaktivert så lenge noe er galt, og meldingen under feltene sier hva: et tomt eller ubrukelig navn, et navn som allerede er i bruk, eller ingen objekter.
- **Escape** under valg av objekter eller basepunkt går tilbake til vinduet med blokken slik den var. **Escape** i vinduet avbryter kommandoen.
- Blokken lagres med tegningen og skrives til DXF sammen med referansene sine.

---

*Relatert: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
