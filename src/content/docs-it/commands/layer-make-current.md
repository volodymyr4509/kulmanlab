---
sidebar_position: 1
title: LayerMakeCurrent — Imposta il Layer di un'Entità come Corrente in KulmanLab CAD
description: Il comando LayerMakeCurrent imposta il layer di disegno corrente in modo che corrisponda al layer dell'entità cliccata.
keywords: [layer make current, imposta layer corrente CAD, kulmanlab gestione layer]
---

# LayerMakeCurrent

Il comando `LayerMakeCurrent` imposta il **layer di disegno corrente** sul layer a cui appartiene l'entità cliccata. Le nuove entità verranno poi disegnate automaticamente su quel layer.

## Utilizzo

1. Digita `LayerMakeCurrent` nel terminale o clicca il pulsante **Make Current** nella barra degli strumenti (icona contagocce).
2. **Clicca qualsiasi entità** sul canvas.
3. Il layer corrente viene aggiornato in modo che corrisponda al layer di quella entità. Il comando termina immediatamente.

## Dettagli di comportamento

- Se clicchi sul canvas vuoto (nessuna entità trovata), il terminale mostra `nessun oggetto trovato` e il comando rimane attivo così puoi riprovare.
- Solo l'impostazione del layer corrente viene modificata — nessuna entità viene modificata.
- Il layer aggiornato si riflette nel selettore di layer nella barra degli strumenti.
