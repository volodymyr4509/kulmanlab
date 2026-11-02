---
title: "Comando Explode — scomporre una polilinea o un blocco nelle sue parti"
description: "Il comando Explode scompone una polilinea nelle sue entità Line e Arc, o un riferimento a blocco nelle entità che il suo blocco disegna, sul posto. I pezzi appaiono esattamente come l’originale."
keywords: [comando explode CAD, esplodere polilinea CAD, scomporre polilinea in linee, convertire polilinea in linea e arco, kulmanlab]
group: edit
order: 19
---

# Explode

Il comando `Esplodi` scompone una [Polilinea](../polyline/) nelle sue entità [Linea](../line/) e [Arco](../arc/) individuali — una per segmento, esattamente dove si trovavano i vertici della polilinea. I pezzi sostituiscono la polilinea sul posto e mantengono il suo spessore linea, colore, layer e tipo di linea.

Explode funziona sulle entità **Polyline** e sui **riferimenti a blocco**.

## Usare explode

Due modi per eseguirlo, lo stesso schema di [Delete](../delete/):

**Seleziona prima, poi esplodi** — il percorso più veloce:

1. Seleziona una o più polilinee sul canvas.
2. Digita `Esplodi` nel terminale o scegli **Explode** dal menu a discesa del pannello Edit.

Le polilinee selezionate vengono esplose istantaneamente — nessun passaggio di conferma separato, poiché qualcosa è già selezionato.

**Attiva, poi seleziona**:

1. Digita `Esplodi` o scegli **Explode** dal menu a discesa senza nulla selezionato.
2. **Seleziona polilinee o riferimenti a blocco** — fai clic per alternare o trascina per selezionare per area.
3. Premi **Invio** o **Spazio** per confermare ed esplodere le polilinee selezionate.

Durante la selezione vengono presi solo polilinee e riferimenti a blocco: un clic su una Line, un Circle o qualsiasi altra entità non fa nulla, e un trascinamento d’area ignora tutto il resto all’interno o che lo attraversa.

## Cosa ne esce

Ogni segmento della polilinea diventa un'entità a sé:

- Un **segmento dritto** diventa una **Linea**.
- Un **segmento ad arco** (dall'[opzione Arc](../polyline/) di Polyline) diventa un **Arco**, corrispondente esattamente al centro, al raggio e all'ampiezza della curva originale.

Ogni Linea e Arco risultante eredita **lo spessore linea, il colore, il layer, il tipo di linea e la scala del tipo di linea** della polilinea sorgente — nulla cambia nell'aspetto della geometria, solo che ora sono più entità indipendenti invece di un'unica polilinea connessa.

Un **riferimento a blocco** diventa le entità che il suo blocco disegna, collocate dove il riferimento le mostrava. Le entità che il blocco tiene nascoste — gli altri stati di un blocco dinamico — vengono tralasciate; ogni attributo diventa un Text semplice con il suo valore; i pezzi disegnati ByBlock prendono il colore del riferimento e quelli sul layer 0 il suo layer. Un blocco annidato esce come riferimento a blocco a sé, che puoi scomporre a sua volta. Un riferimento scalato diversamente in X e in Y non viene preso, perché i suoi cerchi dovrebbero diventare ellissi.

L'esplosione è annullabile in un solo passaggio con [Undo](../undo/), come qualsiasi altra modifica.

## Selezione durante il comando

| Metodo | Comportamento |
|--------|---------------|
| **Clic** | Aggiunge o toglie dalla selezione la polilinea o il riferimento a blocco sotto il cursore; un clic su un’altra entità non fa nulla |
| **Trascina a destra** (rigido) | Seleziona solo polilinee e riferimenti a blocco interamente nel riquadro |
| **Trascina a sinistra** (intersezione) | Seleziona polilinee e riferimenti a blocco che intersecano il bordo del riquadro |
| **Enter** / **Space** | Conferma e scompone la selezione |

## Entità supportate

| Entità | Supportata |
|--------|------------|
| Polyline / Rectangle | Sì |
| Riferimento a blocco | Sì, a meno che sia scalato diversamente in X e in Y |
| Line, Arc, Circle, Ellipse | No — niente da esplodere |
| Text, Spline, Dimension, Leader, Hatch | No |
