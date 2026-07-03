---
sidebar_position: 21
title: Comando Chamfer — Taglia un Angolo Retto tra Due Linee in KulmanLab CAD
description: Il comando Chamfer collega due entità Line o Polyline con un taglio diagonale retto. Si specificano due distanze — una per ciascuna entità — e il comando taglia entrambe fino a quei punti e inserisce una linea di collegamento.
keywords: [comando chamfer CAD, smusso linea CAD, taglio angolo diagonale, angolo smussato CAD, kulmanlab]
---

# Chamfer

Il comando `chamfer` taglia un angolo diagonale retto tra due entità [Line](../line/) o [Polyline](../polyline/). Si specifica quanto tagliare lungo ciascuna entità (d1 e d2), e il comando taglia entrambe le entità a quei punti e inserisce una linea di collegamento tra loro.

L'uso di distanze uguali produce un taglio simmetrico a 45°; distanze diverse producono uno smusso asimmetrico.

Chamfer funziona su entità **Line e Polyline**.

## Usare chamfer

1. Digita `chamfer` nel terminale o clicca il pulsante **Chamfer** nella barra degli strumenti.
2. **Digita la prima distanza di smusso** (d1 — distanza lungo la prima entità) e premi **Invio**.
3. **Digita la seconda distanza di smusso** (d2 — distanza lungo la seconda entità) e premi **Invio**.
4. **Clicca la prima entità** — la porzione che clicchi determina quale lato dell'intersezione viene mantenuto.
5. **Passa il cursore sulla seconda entità** — un'anteprima tratteggiata mostra il taglio di smusso risultante. Sposta il cursore sul lato che vuoi mantenere.
6. **Clicca** per applicare. Entrambe le entità vengono tagliate e la linea di smusso viene inserita.

```
  Prima (d1=5, d2=8):          Dopo:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Selezione del lato

Quando due linee si incrociano, lo smusso viene applicato nell'angolo definito dalle posizioni di clic — la porzione di ciascuna entità **sullo stesso lato del cursore** viene mantenuta.

- Clicca vicino a un'estremità della prima entità per selezionare quella metà.
- Sposta il cursore sulla metà desiderata della seconda entità — l'anteprima tratteggiata si aggiorna in tempo reale.

Per le Polyline, la posizione di clic determina quale **segmento** della polilinea partecipa, e il vertice più vicino sul lato dell'intersezione è quello che viene tagliato.

## Cosa crea il comando

- Il punto finale della prima entità (o vertice della polilinea) più vicino all'intersezione viene spostato al punto **T1**, situato a d1 lungo la prima entità dall'intersezione.
- Il punto finale della seconda entità (o vertice della polilinea) più vicino all'intersezione viene spostato al punto **T2**, situato a d2 lungo la seconda entità dall'intersezione.
- Una nuova entità Line viene inserita da **T1** a **T2**.

La linea inserita eredita le impostazioni correnti di peso linea, colore, layer e tipo linea.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiunge cifra al valore distanza corrente |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma la distanza digitata e avanza |
| `Escape` | Annulla e reimposta |

## Entità supportate

| Entità | Supportata |
|--------|-----------|
| Line | Sì |
| Polyline / Rectangle | Sì |
| Arc, Circle, Ellipse | No |
| Text, Spline, Dimension, Leader | No |

## Chamfer vs Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Tipo angolo | Taglio retto | Arco arrotondato |
| Input | Due distanze (d1, d2) | Un raggio |
| Entità inserita | Line | Arc |
| Entità supportate | Line e Polyline | Solo Line |
