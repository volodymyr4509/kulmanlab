---
title: Comando Explode — Scomporre una Polilinea in Entità Linea e Arco
description: Il comando Explode scompone una polilinea nelle sue entità Linea e Arco individuali, una per segmento, sul posto. Ogni pezzo mantiene lo spessore linea, il colore, il layer e il tipo di linea della polilinea sorgente. Funziona solo con entità Polilinea.
keywords: [comando explode CAD, esplodere polilinea CAD, scomporre polilinea in linee, convertire polilinea in linea e arco, kulmanlab]
group: edit
order: 16
---

# Explode

Il comando `Esplodi` scompone una [Polilinea](../polyline/) nelle sue entità [Linea](../line/) e [Arco](../arc/) individuali — una per segmento, esattamente dove si trovavano i vertici della polilinea. I pezzi sostituiscono la polilinea sul posto e mantengono il suo spessore linea, colore, layer e tipo di linea.

Explode funziona solo con entità **Polilinea**.

## Usare explode

Due modi per eseguirlo, lo stesso schema di [Delete](../delete/):

**Seleziona prima, poi esplodi** — il percorso più veloce:

1. Seleziona una o più polilinee sul canvas.
2. Digita `Esplodi` nel terminale, oppure clicca sul pulsante **Explode** nel pannello Edit.

Le polilinee selezionate vengono esplose istantaneamente — nessun passaggio di conferma separato, poiché qualcosa è già selezionato.

**Attiva, poi seleziona**:

1. Digita `Esplodi` o clicca sul pulsante della barra degli strumenti senza nulla selezionato.
2. **Seleziona polilinee** — clicca per attivare/disattivare, oppure trascina per selezionare un'area.
3. Premi **Invio** o **Spazio** per confermare ed esplodere le polilinee selezionate.

Durante la selezione vengono raccolte solo le polilinee — cliccare su una Linea, un Cerchio o qualsiasi altra entità non fa nulla, e un trascinamento ad area ignora tutto tranne le polilinee al suo interno o che lo attraversano.

## Cosa ne esce

Ogni segmento della polilinea diventa un'entità a sé:

- Un **segmento dritto** diventa una **Linea**.
- Un **segmento ad arco** (dall'[opzione Arc](../polyline/) di Polyline) diventa un **Arco**, corrispondente esattamente al centro, al raggio e all'ampiezza della curva originale.

Ogni Linea e Arco risultante eredita **lo spessore linea, il colore, il layer, il tipo di linea e la scala del tipo di linea** della polilinea sorgente — nulla cambia nell'aspetto della geometria, solo che ora sono più entità indipendenti invece di un'unica polilinea connessa.

L'esplosione è annullabile in un solo passaggio con [Undo](../undo/), come qualsiasi altra modifica.

## Selezione durante il comando

| Metodo | Comportamento |
|--------|---------------|
| **Clic** | Attiva/disattiva la polilinea sotto il cursore nella selezione; cliccare su un'entità che non è una polilinea non fa nulla |
| **Trascina a destra** (rigoroso) | Seleziona solo le polilinee interamente all'interno del rettangolo |
| **Trascina a sinistra** (incrocio) | Seleziona le polilinee che intersecano il confine del rettangolo |
| **Invio** / **Spazio** | Conferma ed esplode le polilinee selezionate |

## Entità supportate

| Entità | Supportata |
|--------|------------|
| Polyline / Rectangle | Sì |
| Line, Arc, Circle, Ellipse | No — niente da esplodere |
| Text, Spline, Dimension, Leader, Hatch | No |
