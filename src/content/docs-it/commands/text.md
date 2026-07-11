---
title: Comando Text — Posizionare Etichette MTEXT in KulmanLab CAD
description: Il comando Text posiziona un'etichetta di testo multi-riga con formattazione avanzata. Clicca una posizione, digita nell'editor popup, e premi Esc per confermare. Doppio clic su un'etichetta esistente per riaprire l'editor.
keywords: [CAD comando text, MTEXT, posiziona etichetta testo CAD, annotazione testo CAD, grassetto corsivo CAD, testo multi-riga CAD, kulmanlab]
group: shapes
order: 7
---

# Text

Il comando `text` posiziona un'etichetta di testo multi-riga. Dopo aver cliccato una posizione sul canvas, si apre un editor popup in **rich** mode — puoi digitare il contenuto, applicare grassetto/corsivo/barrato per carattere, cambiare font e altezze, e inserire interruzioni di riga. Premi **Esc** per confermare e chiudere l'editor.

Vedi la pagina [Editor di Testo](../../interface/text-editor/) per il riferimento completo dell'editor, incluso un confronto tra le modalità **rich** e **simple**.

## Posizionare un'etichetta di testo

1. Digita `text` nel terminale o clicca il pulsante **Text** nella barra degli strumenti.
2. **Clicca la posizione di ancoraggio** sul canvas. Oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
3. Si apre il **popup dell'editor di testo** sopra la nuova etichetta. Digita il contenuto.
4. Premi **Esc** per confermare l'etichetta e chiudere l'editor.

L'altezza predefinita è **12 unità di disegno**.

## Modificare un'etichetta esistente

**Doppio clic** su qualsiasi etichetta di testo sul canvas per riaprire l'editor per quell'etichetta.

## Inserimento coordinate per l'ancoraggio

Invece di cliccare, digita una posizione esatta:

1. Digita il valore X.
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per posizionare l'ancoraggio e aprire l'editor.

## Riferimento tastiera

**Fase di ancoraggio**

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Inizia l'inserimento coordinata X |
| `,` | Blocca X e passa all'inserimento Y |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma la coordinata digitata |

**Fase dell'editor di testo** (vedi [Editor di Testo](../../interface/text-editor/) per il riferimento completo)

| Tasto | Azione |
|-------|--------|
| Qualsiasi carattere stampabile | Inserisce al cursore |
| `Canc ←` / `Canc` | Elimina il carattere o la selezione adiacente |
| `Invio` | Inserisce un'interruzione di riga |
| `←` / `→` | Sposta il cursore |
| `Home` / `End` | Salta all'inizio / fine della riga |
| `Esc` | Conferma e chiude l'editor |

## Modifica con grip — riposizionamento

Un'etichetta di testo selezionata espone un grip nel punto di ancoraggio:

| Grip | Posizione | Funzione |
|------|-----------|---------|
| **Ancoraggio** | In basso a sinistra del testo | Trascina per riposizionare l'etichetta |

## Selezione del testo

| Metodo | Comportamento |
|--------|--------------|
| **Clic** | Seleziona se il clic cade dentro il riquadro di delimitazione ruotato del testo |
| **Trascina a destra** (stretta) | Tutti i quattro angoli del riquadro di delimitazione devono essere dentro l'area di selezione |
| **Trascina a sinistra** (incrociante) | Qualsiasi sovrapposizione tra il riquadro del testo e l'area di selezione lo seleziona |

## Comandi di modifica supportati

| Comando | Effetto sul testo |
|---------|-----------------|
| [Move](../move/) | Sposta il punto di ancoraggio |
| [Copy](../copy/) | Crea un'etichetta identica in una nuova posizione |
| [Rotate](../rotate/) | Ruota la posizione dell'ancoraggio e aggiunge l'angolo al Grado di Rotazione |
| [Mirror](../mirror/) | Riflette il punto di ancoraggio rispetto all'asse speculare (la stringa di testo non viene capovolta) |
| [Scale](../scale/) | Scala la posizione dell'ancoraggio e moltiplica l'altezza per il fattore di scala |
| [Delete](../delete/) | Rimuove l'etichetta |

Il testo non supporta **Offset**, **Trim** o **Extend**.

## DXF — entità MTEXT

Le etichette di testo sono memorizzate come entità **MTEXT** nel file DXF. Grassetto e corsivo sono codificati usando `\L`, `\K`, `\O` e cambi di font inline (`\f`). L'altezza per carattere è codificata come `\H`. Tutta la formattazione sopravvive a un round-trip DXF completo ed è leggibile da LibreCAD, FreeCAD e altre applicazioni compatibili DXF.
