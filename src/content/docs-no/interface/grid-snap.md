---
title: Grid & Snap — Juster Tegninger til et Regelmessig Rutenett
description: Grid- og Snap-bryterne i KulmanLab CAD legger et referanserutenett over lerretet og låser markørbevegelsen til rutenettpunkter. Rutenettavstanden tilpasser seg automatisk til gjeldende zoomnivå slik at den alltid viser runde modellverdier.
keywords: [CAD-rutenett, snap til rutenett, rutenettavstand, tegnehjelpemidler, kulmanlab, rutenettprikker, ortogonal snap]
group: interface
order: 1
---

# Grid & Snap

To bryterknapper i kontrollinjen lar deg legge et referanserutenett over lerretet og låse markøren til skjæringspunktene mens du tegner.

| Knapp | Hva den gjør |
|--------|-------------|
| **Grid** | Viser et visuelt prikk- eller linjerutenett på lerretet |
| **Snap** | Låser markøren til nærmeste rutenettpunkt når ingen geometrisk snap er nærmere |

De to bryterne er uavhengige av hverandre — du kan vise rutenettet uten å bruke snap, bruke snap uten å vise rutenettet, eller bruke begge samtidig.

## Aktivere rutenett og snap

Klikk på **Grid** eller **Snap** i verktøylinjen. Aktiv tilstand markeres visuelt. Innstillingene lagres på tvers av økter.

Når **Snap** er aktivert, bytter rutenettet automatisk visning fra linjer til **prikker** — prikkene markerer de eksakte punktene markøren vil feste seg til.

## Adaptiv rutenettavstand

Rutenettavstanden justeres automatisk etter hvert som du zoomer, slik at rutenettlinjene alltid har en behagelig avstand på skjermen (~40 px). Steget er alltid et "pent" tall — et multiplum av 1, 2 eller 5 ved en hvilken som helst tierpotens:

| Eksempel zoom / modellskala | Rutenettsteg |
|---------------------------|-----------|
| Zoomet ut (stort område) | 100, 500, 1000 … |
| Middels zoom | 10, 20, 50 … |
| Zoomet inn (finere detalj) | 1, 2, 5 … |
| Svært nært | 0.1, 0.2, 0.5 … |

Dette betyr at hvert snap-punkt havner på en rund koordinat i modellrommet — ingen flyttall-avvik hoper seg opp.

## Snap-prioritet

**Endepunkt- og skjæringspunkt-snap har alltid prioritet over rutenettet.** Markøren fester seg til et rutenettpunkt kun når den ikke er i nærheten av en geometrisk snap-kandidat (endepunkt, midtpunkt, senter eller skjæringspunkt).

Dette betyr at du kan tegne med snap-til-rutenett aktivert og likevel feste deg presist til eksisterende geometri når markøren passerer nært nok til den. Rutenettet er en reserveløsning, ikke en overstyring.

## Layout-modus

- **Modellrom** — prikker eller linjer fyller hele det synlige lerretsområdet.
- **Layout (papir)-rom** — prikker beskjæres til papirrektangelet og strekker seg ikke utenfor det.
- **Inne i en viewport** — rutenettet følger modellkoordinatsystemet i viewportens skala, slik at prikkene stemmer med de samme modellenhetene uansett viewportens forstørrelse.

## Typisk arbeidsflyt

1. Slå på **Grid** og **Snap** før du starter en tegning som krever regelmessig avstand.
2. Zoom til nivået der rutenettsteget samsvarer med ønsket inkrement (f.eks. zoom til prikkene er 10 enheter fra hverandre).
3. Tegn — markøren fester seg automatisk til rutenettpunkter. Eksisterende geometri festes fortsatt normalt når du er nær den.
4. Slå av **Snap** når du trenger fri markørbevegelse eller kun vil feste deg til geometri.
