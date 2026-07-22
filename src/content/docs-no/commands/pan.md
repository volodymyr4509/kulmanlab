---
title: Pan-kommando — Klikk-og-Dra Viewport-navigasjon i KulmanLab CAD
description: Pan-kommandoen går inn i en vedvarende dra-for-å-panorere-modus. Klikk og dra hvor som helst på lerretet for å forskyve visningen uten å endre zoomnivået. Midtklikk-dra fungerer når som helst uten å aktivere Pan.
keywords: [CAD pan viewport, pan-kommando, dra for å navigere, lerretrulling CAD, viewport-navigasjon, kulmanlab]
group: navigate
order: 1
---

# Pan

Kommandoen `pan` går inn i en vedvarende dra-for-å-panorere-modus — klikk og dra hvor som helst på lerretet for å forskyve visningen. Zoomnivået endres ikke. Pan-modus forblir aktiv til du trykker `Escape`, slik at du kan dra flere ganger i én aktivering.

## Panorere visningen

1. Skriv `pan` i terminalen eller klikk på **Pan**-knappen i verktøylinjen.
2. **Klikk og dra** hvor som helst på lerretet for å forskyve visningen.
3. Slipp og dra igjen så mange ganger som nødvendig.
4. Trykk `Escape` for å avslutte pan-modus.

## Midtklikk-dra — panorer uten å aktivere kommandoen

Den raskeste måten å panorere på: **hold nede midtre museknapp og dra** når som helst, selv mens en annen kommando er aktiv. Ingen kommandoaktivering nødvendig. Å slippe midtknappen returnerer til uansett hvilken tilstand du var i.

## Pan vs zoom-kontroller

| Handling | Effekt | Krever Pan-modus? |
|--------|--------|-------------------|
| Venstreklikk-dra (Pan-modus) | Forskyver viewporten | Ja |
| Midtklikk-dra | Forskyver viewporten | Nei — fungerer alltid |
| Rullehjul | Zoomer mot markøren | Nei — fungerer alltid |
| Dobbeltklikk midtknapp | Tilpass alle entiteter | Nei — fungerer alltid |
| [Zoom In](../zoom-in/) / [Zoom Out](../zoom-out/) | Trinnvis zoom 1,5× | Nei |
| [Fit](../fit/) | Tilpasser alle entiteter i visningen | Nei |

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Escape` | Avslutt pan-modus |

## Tips

- Bruk rullehjulet til å zoome mot et målområde, og panorer deretter for å finjustere posisjonen.
- **Dobbeltklikk på midtre museknapp** utløser [Fit](../fit/) umiddelbart — den raskeste måten å tilbakestille en tapt visning på.
- Hvis du er midt i en kommando (f.eks. plasserer et linjeendepunkt), bruk midtklikk-dra for å panorere uten å avbryte kommandoen.
