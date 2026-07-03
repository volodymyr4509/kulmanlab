---
sidebar_position: 10
title: Comando Extend — Allunga il Punto Finale di una Linea fino al Limite più Vicino in KulmanLab CAD
description: Il comando Extend allunga il punto finale più vicino di una Linea hoverable fino alla prima intersezione con un'altra entità. Un'anteprima in tempo reale mostra la linea estesa prima del clic. Extend funziona solo sulle entità Line e ignora Text, Spline e Multileader come limiti.
keywords: [comando extend CAD, estendi linea CAD, allunga linea al limite, estendi punto finale linea, anteprima hover extend, kulmanlab]
---

# Extend

Il comando `extend` allunga il punto finale più vicino di una [Line](../line/) alla prima intersezione che formerebbe con un'altra entità nel disegno. Passa il cursore vicino al punto finale che vuoi estendere — un'anteprima mostra la linea estesa — poi clicca per applicare.

Extend funziona solo sulle entità **Line**. I limiti verso cui la linea si estende possono essere qualsiasi altro tipo di entità eccetto Text, Mtext, Multileader e Spline.

## Estendere una linea

1. Digita `extend` nel terminale o clicca il pulsante **Extend** nella barra degli strumenti.
2. **Passa il cursore vicino a un'estremità di una linea** — l'anteprima mostra la linea estesa fino al limite più vicino in quella direzione.
3. **Clicca** per applicare l'estensione.

Il comando rimane attivo dopo ogni estensione così puoi estendere più linee in sequenza. Premi **Escape** per uscire.

```
  Prima:                       Dopo:

  ──────           |           ──────────────|
  (linea corta)    (limite)    (estesa al limite)
```

## Come viene scelto il punto finale

Il comando guarda quale punto finale è più vicino al cursore:

- Cursore **più vicino al punto finale** → il punto finale viene esteso in avanti lungo la direzione della linea.
- Cursore **più vicino al punto iniziale** → il punto iniziale viene esteso all'indietro (nella direzione opposta).

Un raggio viene proiettato dal punto finale scelto lungo la direzione della linea, e la **prima intersezione** lungo quel raggio con qualsiasi altra entità (esclusa la linea stessa e i tipi ignorati) diventa il nuovo punto finale.

Se non viene trovata nessuna intersezione in quella direzione, non appare nessuna anteprima e il clic non fa nulla.

## Esclusioni limite

I seguenti tipi di entità vengono ignorati come limiti — una linea non si estende per incontrarli:

- Text / Mtext
- Multileader
- Spline

Tutti gli altri tipi (Line, Arc, Circle, Ellipse, Polyline, Dimension) servono come limiti validi.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Escape` | Esci dalla modalità extend |

## Entità supportate

| Entità | Può essere estesa? |
|--------|------------------|
| Line | Sì |
| Arc, Circle, Ellipse | No |
| Polyline / Rectangle | No |
| Text, Spline, Dimension, Leader | No |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Cosa fa | Allunga il punto finale di una linea fino a un limite | Rimuove un segmento di una linea |
| Trigger | Passa il cursore vicino al punto finale da allungare | Passa il cursore sul segmento da tagliare |
| Risultato | Il punto finale della linea si sposta verso l'esterno | La linea si divide o si accorcia |
| Entrambi | Solo line | Solo line |
