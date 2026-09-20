---
title: Extend — Allunga un'Entità al Limite più Vicino
description: Il comando Extend allunga il punto finale più vicino di una Line, Arc, Ellipse o Polyline aperta sotto il cursore fino alla prima intersezione con un'altra entità. Un'anteprima in tempo reale mostra l'entità estesa prima del clic.
keywords: [comando extend CAD, estendi linea CAD, estendi arco CAD, estendi ellisse CAD, estendi polilinea CAD, allunga entità al limite, anteprima hover extend, kulmanlab]
group: edit
order: 9
---

# Extend

Il comando `Estendi` allunga il punto finale più vicino di una [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/) o Polyline aperta su cui si passa il cursore fino alla prima intersezione che formerebbe con un'altra entità nel disegno. Passa il cursore vicino al punto finale che vuoi estendere — un'anteprima mostra l'entità estesa — poi clicca per applicare.

Solo le entità con un punto finale reale possono essere estese. Un [Circle](../circle/) e un'Ellipse completa (360°) sono sempre forme chiuse senza punto finale, quindi non possono mai essere estese — lo stesso vale per una Polyline chiusa o un Rectangle. Un'Ellipse parziale (un arco ellittico) e un Arc hanno invece punti finali e si estendono come una Line.

## Estendere un'entità

1. Digita `Estendi` nel terminale o clicca il pulsante **Extend** nella barra degli strumenti.
2. **Passa il cursore vicino a un'estremità** dell'entità che vuoi estendere — l'anteprima la mostra estesa fino al limite più vicino in quella direzione.
3. **Clicca** per applicare l'estensione.

Il comando rimane attivo dopo ogni estensione, così puoi continuare a passare il cursore e cliccare per estendere altre entità. Premi **Invio**, **Spazio** o **Escape** per uscire.

```
  Prima:                       Dopo:

  ──────           |           ──────────────|
  (linea corta)    (limite)    (estesa al limite)
```

## Come viene scelto il punto finale

Il comando guarda a quale estremità è più vicino il cursore:

- **Line e Polyline aperta** — cursore più vicino al punto finale estende il punto finale in avanti; cursore più vicino al punto iniziale estende l'inizio all'indietro.
- **Arc ed Ellipse parziale** — cursore più vicino a una delle estremità angolari fa crescere l'arco in quella direzione, seguendo lo stesso centro e raggio (o la stessa forma dell'ellisse), fino a raggiungere il limite successivo.

Un raggio — o, per Arc ed Ellipse, la circonferenza o curva sottostante propria dell'entità — viene proiettato dall'estremità scelta, e la **prima intersezione** con qualsiasi altra entità (esclusa l'entità stessa e i tipi ignorati) diventa il nuovo punto finale.

Se non viene trovata nessuna intersezione in quella direzione, non appare nessuna anteprima e il clic non fa nulla.

## Esclusioni limite

I seguenti tipi di entità vengono ignorati come limiti — un'entità non si estende per incontrarli:

- Text / Mtext
- Multileader
- Spline

Tutti gli altri tipi (Line, Arc, Circle, Ellipse, Polyline, Dimension) servono come limiti validi.

Se il primo o l'ultimo segmento di una Polyline è esso stesso un segmento ad arco (disegnato con l'opzione Arc), estenderlo fa crescere l'arco lungo il proprio cerchio — come quando si estende un Arc autonomo — invece di trattarlo come un segmento dritto.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Invio` / `Spazio` | Esci dalla modalità extend |
| `Escape` | Esci dalla modalità extend |

## Entità supportate

| Entità | Può essere estesa? |
|--------|------------------|
| Line | Sì |
| Arc | Sì |
| Ellipse | Sì — solo se è già un arco parziale; un'ellisse completa non ha punto finale |
| Circle | No — sempre una forma chiusa senza punto finale |
| Polyline (aperta) | Sì |
| Polyline (chiusa) / Rectangle | No — sempre una forma chiusa senza punto finale |
| Text, Spline, Dimension, Leader | No |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Cosa fa | Allunga il punto finale di un'entità fino a un limite | Rimuove un segmento di un'entità |
| Trigger | Passa il cursore vicino al punto finale da allungare | Passa il cursore sul segmento da tagliare |
| Risultato | Il punto finale si sposta verso l'esterno | L'entità si divide o si accorcia |
| Entità supportate | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
