---
title: Redo-kommando — Bruk Angrede Handlinger på Nytt i KulmanLab CAD
description: Redo-kommandoen bruker på nytt den siste handlingen reversert av Undo, og beveger seg fremover gjennom historikkstabelen. Redo er kun tilgjengelig etter en Undo og tømmes i det øyeblikket en ny tegnehandling utføres.
keywords: [CAD redo-kommando, redo-historikk CAD, bruk handling på nytt CAD, angre gjenta CAD, nettleser vedvarende redo, kulmanlab]
group: edit
order: 14
---

# Redo

Kommandoen `redo` beveger seg fremover gjennom angre-historikken, og bruker på nytt handlinger som ble reversert av [Undo](../undo/). Redo er kun tilgjengelig når du har gått tilbake med Undo og ennå ikke har gjort en ny endring.

## Slik gjør du om

- Skriv `redo` i terminalen, eller
- Klikk på **Redo**-knappen i verktøylinjen.

Hver kalling bruker på nytt én tidligere angret handling. Kall den gjentatte ganger for å bevege deg fremover gjennom alle tilgjengelige redo-oppføringer.

## Redo-stabelens oppførsel

| Detalj | Oppførsel |
|--------|-----------|
| Tilgjengelig etter | Ett eller flere [Undo](../undo/)-steg |
| Tømmes av | **Enhver ny tegnehandling** — å legge til, redigere eller slette en entitet |
| Lagring | Nettleser, per fil — overlever sideinnlasting (så lenge ingen ny handling ble gjort før innlastingen) |
| Maksimal dybde | Opptil 20 oppføringer (samme pool som Undo) |

Når en ny entitet tegnes, slettes eller endres, tømmes redo-stabelen, og disse oppføringene kan ikke gjenopprettes. Kun angrede handlinger som ikke er overskrevet av nytt arbeid kan gjøres om.

## Redo vs Undo

| | Redo | Undo |
|---|------|------|
| Retning | Beveger seg **fremover** gjennom angrede oppføringer | Beveger seg **bakover** gjennom historikken |
| Tilgjengelig når | Etter minst én Undo, uten ny handling utført | Minst én registrert handling finnes |
| Tømmes av | Enhver ny tegnehandling | Ingenting |

Redo-knappen i verktøylinjen er nedtonet når det ikke finnes oppføringer å gjøre om. Bruk [Undo](../undo/) først for å opprette redo-oppføringer.
