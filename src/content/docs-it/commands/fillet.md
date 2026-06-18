---
sidebar_position: 20
title: Comando Fillet — Arrotonda un Angolo tra Due Linee in KulmanLab CAD
description: Il comando Fillet collega due entità Line con un arco tangente di un raggio specificato, tagliando ciascuna linea fino al punto tangente. Un'anteprima ad arco tratteggiata aiuta a scegliere l'angolo corretto prima del clic.
keywords: [comando fillet CAD, arrotonda angolo CAD, raccordo arco, arco tangente due linee, kulmanlab]
---

# Fillet

Il comando `fillet` arrotonda l'angolo tra due entità [Line](./line) inserendo un arco tangente di un dato raggio e tagliando ciascuna linea fino al punto in cui l'arco inizia. Il risultato è un angolo raccordato che collega entrambe le linee.

Fillet funziona solo sulle entità **Line**.

## Usare fillet

1. Digita `fillet` nel terminale o clicca il pulsante **Fillet** nella barra degli strumenti.
2. **Digita il raggio di raccordo** e premi **Invio**.
3. **Clicca la prima linea** — la porzione che clicchi determina quale lato dell'intersezione viene mantenuto.
4. **Passa il cursore sulla seconda linea** — un'anteprima ad arco tratteggiata mostra il raccordo risultante. Sposta il cursore sul lato che vuoi mantenere.
5. **Clicca** per applicare. Entrambe le linee vengono tagliate e l'arco viene inserito.

```
  Prima:                       Dopo raccordo (raggio r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Selezione del lato per linee che si intersecano

Quando due linee si incrociano, il raccordo viene applicato nell'angolo definito dalle posizioni di clic — la porzione di ciascuna linea **sullo stesso lato del cursore** viene mantenuta.

- Clicca vicino a un'estremità della prima linea per selezionare quella metà.
- Sposta il cursore sulla metà desiderata della seconda linea — l'anteprima tratteggiata si aggiorna in tempo reale.

## Cosa crea il comando

- Il punto finale della prima linea più vicino all'intersezione viene spostato al punto tangente **T1**.
- Il punto finale della seconda linea più vicino all'intersezione viene spostato al punto tangente **T2**.
- Una nuova entità Arc viene inserita da **T1** a **T2**, tangente a entrambe le linee.

L'arco inserito eredita le impostazioni correnti di peso linea, colore, layer e tipo linea.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiunge cifra al valore raggio |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma il raggio digitato e passa alla selezione linea |
| `Escape` | Annulla e reimposta |

## Entità supportate

| Entità | Supportata |
|--------|-----------|
| Line | Sì — sia come prima che come seconda entità |
| Arc, Circle, Ellipse, Polyline | No |
| Text, Spline, Dimension, Leader | No |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Tipo angolo | Arco arrotondato | Taglio retto |
| Input | Un raggio | Due distanze (d1, d2) |
| Entità inserita | Arc | Line |
| Entità supportate | Solo Line | Line e Polyline |
