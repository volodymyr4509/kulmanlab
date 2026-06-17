---
title: KulmanLab CAD — Riferimento comandi
description: Riferimento comandi KulmanLab CAD — guida completa a tutti i comandi di disegno, modifica, annotazione, livelli, misura e file in KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, comandi CAD, CAD gratuito browser, editor DXF online, comandi di disegno, kulmanlab]
---

# KulmanLab CAD — Riferimento comandi

Benvenuto nel riferimento comandi di **KulmanLab CAD**. [KulmanLab CAD](https://kulmanlab.com) è uno strumento CAD gratuito basato su browser per disegnare, modificare ed esportare file DXF — senza installazione richiesta. Usa la barra laterale per sfogliare tutti i comandi disponibili raggruppati per pannello.

## Forme

| Comando | Cosa fa |
|---------|---------|
| [Line](./commands/line) | Traccia un segmento tra due punti |
| [Polyline](./commands/polyline) | Traccia un percorso aperto multi-segmento |
| [Rectangle](./commands/rectangle) | Traccia un rettangolo allineato agli assi |
| [Circle](./commands/circle) | Traccia un cerchio per centro e raggio |
| [Arc](./commands/arc) | Traccia un arco attraverso tre punti |
| [Ellipse](./commands/ellipse) | Traccia un'ellisse per centro e due assi |
| [Text](./commands/text) | Posiziona un'etichetta di testo sulla lavagna |
| [Spline CV](./commands/spline-cv) | Traccia una spline posizionando vertici di controllo |
| [Spline Fit](./commands/spline-fit) | Traccia una spline che passa per i punti cliccati |

## Modifica

| Comando | Cosa fa |
|---------|---------|
| [Move](./commands/move) | Sposta le entità selezionate in una nuova posizione |
| [Copy](./commands/copy) | Copia le entità selezionate in una nuova posizione |
| [Rotate](./commands/rotate) | Ruota le entità selezionate attorno a un punto base |
| [Mirror](./commands/mirror) | Riflette le entità selezionate rispetto a una linea |
| [Scale](./commands/scale) | Scala le entità selezionate attorno a un punto base |
| [Delete](./commands/delete) | Elimina le entità selezionate dal disegno |
| [Trim](./commands/trim) | Accorcia un segmento di linea alle sue intersezioni |
| [Extend](./commands/extend) | Prolunga una linea fino all'intersezione limite più vicina |
| [Offset](./commands/offset) | Crea una copia parallela di un'entità a una distanza data |
| [Fillet](./commands/fillet) | Raccorda un angolo tra due linee con un arco tangente |
| [Chamfer](./commands/chamfer) | Taglia un angolo diagonale tra due linee o polilinee |
| [Undo](./commands/undo) | Annulla l'ultima azione |
| [Redo](./commands/redo) | Ripristina l'ultima azione annullata |

## Annotazione

| Comando | Cosa fa |
|---------|---------|
| [Leader](./commands/leader) | Traccia un'annotazione multilinea guida con punta di freccia e testo |
| [Leader+](./commands/leader-add) | Aggiunge un braccio aggiuntivo a una linea guida multipla esistente |
| [Leader−](./commands/leader-remove) | Rimuove un braccio da una linea guida multipla esistente |
| [Dimension Linear](./commands/dim-linear) | Aggiunge una quota orizzontale o verticale |
| [Dimension Aligned](./commands/dim-aligned) | Aggiunge una quota allineata a due punti |
| [Dimension Continue](./commands/dim-continue) | Concatena una nuova quota dall'ultima |
| [Dimension Radius](./commands/dim-radius) | Aggiunge una quota di raggio a un cerchio o arco |
| [Dimension Diameter](./commands/dim-diameter) | Aggiunge una quota di diametro a un cerchio |
| [Dimension Angular](./commands/dim-angular) | Aggiunge una quota angolare a due linee, un arco o un cerchio |

## Livello

| Comando | Cosa fa |
|---------|---------|
| [LayerMakeCurrent](./commands/layer-make-current) | Imposta il livello attivo per corrispondere al livello dell'entità cliccata |
| [LayerMatch](./commands/layer-match) | Riassegna le entità selezionate al livello di un'entità sorgente |
| [LayerIsolate](./commands/layer-isolate) | Congela tutti i livelli tranne quelli delle entità selezionate |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all) | Scongela tutti i livelli in un solo passaggio |

## Tavole

| Comando | Cosa fa |
|---------|---------|
| [ViewportRectangle](./commands/viewport-rectangle) | Crea una finestra di visualizzazione in un layout carta selezionando due angoli |
| [ViewportCopy](./commands/viewport-copy) | Duplica una finestra di visualizzazione in una nuova posizione |
| [PageManager](./commands/page-manager) | Modifica il formato carta e la scala del layout attivo |

## Navigazione

| Comando | Cosa fa |
|---------|---------|
| [Pan](./commands/pan) | Clicca e trascina per spostare la finestra di visualizzazione |
| [Zoom In](./commands/zoom-in) | Esegue lo zoom avanti nella finestra di visualizzazione |
| [Zoom Out](./commands/zoom-out) | Esegue lo zoom indietro nella finestra di visualizzazione |
| [Fit](./commands/fit) | Adatta tutte le entità nella finestra di visualizzazione |

## Misura

| Comando | Cosa fa |
|---------|---------|
| [Distance](./commands/distance) | Misura la distanza tra due punti |
| [Angle](./commands/angle) | Misura l'angolo tra tre punti |

## Stile

| Comando | Cosa fa |
|---------|---------|
| [Match Properties](./commands/match-properties) | Copia il colore, il livello e altre proprietà da un'entità ad altre |

## File

| Comando | Cosa fa |
|---------|---------|
| [Import](./commands/import) | Apre un file di disegno DXF o JSON |
| [New File](./commands/new-file) | Avvia un nuovo disegno vuoto |
| [Files](./commands/files) | Sfoglia e ripristina i disegni recenti |
| [Print](./commands/print) | Esporta un'area del disegno come immagine o PDF |
| [Export](./commands/export) | Scarica il disegno come DXF o JSON |
| [WipeStorage](./commands/wipestorage) | Cancella tutti i disegni dall'archivio del browser |

## Ripristino

Se l'applicazione si blocca ad ogni avvio (ad esempio dopo aver lavorato con coordinate estremamente grandi), puoi cancellare tutti i dati archiviati localmente aggiungendo `?reset` all'URL:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Questo elimina tutto dal database locale del browser e avvia un nuovo disegno vuoto. Il parametro `?reset` si rimuove automaticamente dall'URL. Usalo come ultima risorsa quando [WipeStorage](./commands/wipestorage) non è accessibile perché l'applicazione non si carica del tutto.

## Come funzionano i comandi

Ogni comando segue lo stesso schema:

1. **Attiva** — clicca il pulsante nella barra degli strumenti o digita il nome del comando nel terminale in fondo allo schermo.
2. **Segui il prompt** — il terminale indica quale input è atteso successivamente.
3. **Termina o annulla** — la maggior parte dei comandi termina automaticamente dopo l'ultimo input. Premi **Esc** in qualsiasi momento per annullare.

## Selezionare oggetti

Diversi comandi di modifica (Move, Copy, Rotate, Mirror, Scale, Delete) condividono lo stesso comportamento di selezione:

- **Clicca** su un'entità per selezionarla o deselezionarla.
- **Trascina verso destra** (da sinistra a destra) per la selezione rigorosa — vengono selezionate solo le entità completamente all'interno del riquadro.
- **Trascina verso sinistra** (da destra a sinistra) per la selezione incrociata — viene selezionata qualsiasi entità che interseca il riquadro.
- Premi **Invio** o **Spazio** per confermare la selezione e passare al passaggio successivo.
