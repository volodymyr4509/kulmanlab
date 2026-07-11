---
title: LayerUnfreezeAll — Scongelare Tutti i Livelli in KulmanLab CAD
description: Il comando LayerUnfreezeAll rimuove il flag di congelamento da ogni livello del disegno in un solo passaggio.
keywords: [layer unfreeze, scongela tutti i livelli CAD, kulmanlab gestione livelli]
group: layer
order: 4
---

# LayerUnfreezeAll

Il comando `LayerUnfreezeAll` rimuove il flag di congelamento da **ogni livello** del disegno istantaneamente. Non è richiesta nessuna selezione né conferma — il comando viene eseguito e termina in un unico passaggio.

## Utilizzo

Digita `LayerUnfreezeAll` nel terminale oppure clicca il pulsante **Unfreeze All** nella barra degli strumenti (icona sole). Tutti i livelli congelati diventano immediatamente visibili.

## Quando usarlo

Tipicamente usato dopo [LayerIsolate](../layer-isolate/) per ripristinare tutti i livelli allo stato visibile normale.

## Dettagli di comportamento

- Si applica a tutti i livelli indipendentemente dal loro stato attuale.
- Non modifica i flag di blocco o di stampa — viene modificato solo il flag di congelamento.
- Il comando termina immediatamente senza nessuna richiesta.
