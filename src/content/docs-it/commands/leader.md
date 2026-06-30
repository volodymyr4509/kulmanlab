---
sidebar_position: 10
title: Comando Leader — Disegnare Annotazioni Multileader con Freccia e Testo in KulmanLab CAD
description: "Il comando Leader disegna un'annotazione multileader in quattro fasi: punta della freccia, gomito dogleg, posizione del testo ed etichetta digitata. La direzione del testo si regola automaticamente in base alla posizione del dogleg. Solo importazione in DXF — i leader non vengono scritti al salvataggio."
keywords: [CAD comando leader, annotazione multileader, leader CAD, annotazione con freccia, dogleg leader, direzione testo CAD, kulmanlab]
---

# Leader

Il comando `leader` disegna un'annotazione multileader in quattro passaggi: una freccia che tocca un elemento, una linea guida che si piega al dogleg, un'ancora del testo e un'etichetta digitata. Di tutti i comandi di annotazione, Leader è l'unico che include una fase interattiva di inserimento testo con anteprima del cursore lampeggiante.

## Anatomia di un multileader

```
  ◄── punta freccia  (passo 2 — tocca l'elemento)
      \
       \  linea guida
        \
         ●──── dogleg (passo 3) ──── ancora testo (passo 4)
                                     Testo etichetta  (passo 5)
```

- **Punta freccia** — l'estremità a punta posizionata sull'elemento da annotare.
- **Dogleg** — il gomito dove la linea guida si piega verso il testo.
- **Ancora testo** — dove è posizionata l'etichetta. Il testo si allinea a sinistra o destra automaticamente.

## Disegnare un leader

1. Digita `leader` nel terminale o clicca il pulsante **Leader** nella barra degli strumenti.
2. **Clicca la punta della freccia**, oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
3. **Clicca il dogleg** — la piega nel leader. L'angolo si blocca a incrementi di 45°; digita una lunghezza e premi **Invio** per il posizionamento preciso. Oppure digita `X,Y` per una coordinata assoluta.
4. **Clicca la posizione del testo** — dove si ancora l'etichetta. Valgono le stesse opzioni: clic, blocco angolo + lunghezza, o `X,Y`.
5. **Digita il testo dell'etichetta** — l'anteprima sul canvas si aggiorna in tempo reale con un cursore lampeggiante. Premi **Invio** per posizionare.

## Inserimento coordinate (tutte le fasi di posizionamento punto)

In qualsiasi fase di selezione punto (punta, dogleg, posizione testo) puoi digitare una coordinata esatta invece di cliccare:

1. Digita il valore X (cifre, `.` o `-`).
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]` confermando che X è bloccato.
3. Digita il valore Y.
4. Premi **Invio** per posizionare il punto.

## Blocco angolo (passi 3 e 4)

Dopo ogni punto posizionato, il comando si aggancia agli assi a 45° quando il cursore è sufficientemente lontano. Mentre è bloccato:
- L'anteprima si aggancia all'asse.
- Digita una lunghezza e premi **Invio** per posizionare il punto successivo a quella distanza esatta.

Il blocco angolo e l'inserimento coordinate si escludono a vicenda — una volta digitata una cifra senza una `,` precedente, il comando la interpreta come distanza (il blocco angolo deve essere attivo). Per inserire una coordinata assoluta invece, inizia con il numero X seguito da una virgola.

## Modifica dell'etichetta di testo

Mentre digiti l'etichetta al passo 5, puoi navigare e modificare il testo prima di posizionarlo:

| Tasto | Azione |
|-------|--------|
| Qualsiasi carattere stampabile | Inserisce nella posizione del cursore |
| `←` / `→` | Sposta il cursore a sinistra o destra |
| `Canc ←` | Elimina il carattere a sinistra del cursore |
| `Canc` | Elimina il carattere a destra del cursore |
| `Invio` | Posiziona il leader |

## Direzione automatica del testo

L'allineamento del testo si regola in base alla posizione del cursore rispetto al dogleg:

| Posizione cursore | Direzione testo |
|------------------|----------------|
| A **destra** del dogleg | Da sinistra a destra dall'ancora del testo |
| A **sinistra** del dogleg | Da destra a sinistra (ancorato sul lato destro) |

Nessuna regolazione manuale necessaria — sposta il cursore nel lato dove vuoi l'etichetta e si allinea correttamente.

## Riferimento tastiera

**Fasi di posizionamento punto (punta, dogleg, posizione testo)**

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Inizia a digitare la coordinata X (poi `,` per bloccare X e inserire Y) |
| `,` | Conferma X e passa all'inserimento Y |
| `0`–`9`, `.`, `-` | Accumula la distanza quando è bloccato ad angolo |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma la coordinata o la distanza digitata |

**Fase di inserimento testo**

| Tasto | Azione |
|-------|--------|
| Carattere stampabile | Inserisce al cursore |
| `←` / `→` | Sposta il cursore |
| `Canc ←` | Elimina a sinistra |
| `Canc` | Elimina a destra |
| `Invio` | Posiziona il leader |

| Tasto | Azione |
|-------|--------|
| `Esc` | Annulla e ripristina al passo 2 |

## Modifica di un leader esistente

**Doppio clic** su un multileader posizionato per riaprire l'editor di testo in **rich** mode. In rich mode puoi applicare grassetto, corsivo e sostituzioni di font o altezza per carattere, e inserire interruzioni di riga con `Enter`. Premi **Esc** per confermare e chiudere.

Vedi [Editor di Testo — rich mode](../interface/text-editor#rich-mode) per il riferimento completo.

## Aggiungere e rimuovere bracci

- Per aggiungere un braccio con freccia extra a un leader esistente: [Leader+](./leader-add)
- Per rimuovere un braccio da un leader con due o più: [Leader−](./leader-remove)

## DXF — solo importazione

**I leader sono solo importazione.** Le entità `MLEADER` dai file DXF vengono lette e visualizzate correttamente, ma i leader disegnati nell'editor **non vengono scritti** quando si salva un file DXF. Usa i leader per l'annotazione visiva; evita di fare affidamento su di essi per flussi di lavoro di andata e ritorno.
