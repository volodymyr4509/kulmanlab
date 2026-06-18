---
title: Comando ViewportRectangle — Creare una Finestra di Visualizzazione in un Layout in KulmanLab CAD
description: Il comando ViewportRectangle crea una finestra di visualizzazione in un layout carta selezionando due angoli opposti. La finestra mostra le entità dello spazio modello alla scala predefinita del layout.
keywords: [viewport rectangle, crea viewport, viewport layout, viewport spazio carta, kulmanlab]
---

# ViewportRectangle

Il comando `ViewportRectangle` crea una nuova finestra di visualizzazione nel layout carta attivo selezionando due angoli opposti. Disponibile solo nello spazio layout.

## Creare una finestra di visualizzazione

1. Passa a un layout carta usando la scheda in basso nella schermata.
2. Digita `ViewportRectangle` nel terminale o clicca il pulsante **Viewport Rectangle** nella barra degli strumenti.
3. **Clicca il primo angolo**, oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
4. **Clicca l'angolo opposto** — la finestra di visualizzazione viene posizionata immediatamente. Anche qui è disponibile l'inserimento coordinate.

La nuova finestra di visualizzazione mostra l'intero modello alla scala predefinita del layout. Usa la rotella di scorrimento dentro la finestra di visualizzazione per zoomare, o il trascinamento con il tasto centrale per spostare la vista del modello.

## Inserimento coordinate

In entrambi i passi degli angoli puoi digitare una coordinata esatta:

1. Digita il valore X.
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per posizionare il punto.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Inizia l'inserimento coordinata X |
| `,` | Blocca X e passa all'inserimento Y |
| `Invio` | Conferma la coordinata digitata |
| `Esc` | Annulla |

## Modificare una finestra di visualizzazione

Dopo aver posizionato una finestra di visualizzazione, clicca su di essa per selezionarla:

- **Trascina i bordi o gli angoli** per ridimensionarla.
- **Trascina il grip centrale** per spostarla.
- Usa il **selettore di scala** nella barra di controllo per impostare una scala esatta (es. 1:50). Per inserire una scala non in elenco, digitala direttamente nel campo di input in basso nel menu — accetta formato rapporto (`1:200`, `5:1`) o un decimale puro (`0.005`), poi premi **Invio**.
- Fai clic destro su una finestra di visualizzazione e usa **Blocca** per prevenire modifiche accidentali.

## Note

- ViewportRectangle è disponibile solo quando una scheda di layout carta è attiva. Eseguirlo nello spazio modello mostra un messaggio di errore e termina.
- Per copiare una finestra di visualizzazione esistente, usa [ViewportCopy](./viewport-copy).
