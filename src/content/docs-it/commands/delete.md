---
sidebar_position: 6
title: Comando Delete — Rimuovi Entità dal Disegno in KulmanLab CAD
description: Il comando Delete rimuove le entità selezionate in modo permanente (annullabile). Le entità pre-selezionate vengono eliminate immediatamente senza passaggio di conferma. Il tasto Delete funziona come scorciatoia globale anche senza attivare il comando. Supporta selezione singola e per area.
keywords: [comando delete CAD, rimuovi entità CAD, cancella oggetti CAD, tasto delete CAD, annulla delete CAD, kulmanlab]
---

# Delete

Il comando `delete` rimuove le entità selezionate dal disegno. Le eliminazioni vengono registrate nella cronologia [Undo](../undo/) e possono essere annullate fino a 20 passaggi. Non esiste una finestra di dialogo separata "conferma eliminazione" — la conferma è una singola pressione di tasto.

## Due modi per eliminare

**Pre-seleziona, poi elimina** — il percorso più veloce:

1. Seleziona una o più entità sul canvas.
2. Digita `delete` nel terminale, clicca il pulsante **Delete** nella barra degli strumenti, **oppure premi il tasto `Canc`** direttamente.

Le entità vengono rimosse immediatamente — nessun passaggio di conferma aggiuntivo.

**Attiva, poi seleziona**:

1. Digita `delete` o clicca il pulsante nella barra degli strumenti (senza nulla selezionato).
2. **Seleziona gli oggetti** — clicca per attivare/disattivare, o trascina per selezionare per area.
3. Premi **Invio**, **Spazio**, o **Canc** per confermare e rimuovere le entità selezionate.

## Scorciatoia tasto Delete

Il tasto `Canc` (Delete) sulla tastiera funziona come **scorciatoia globale** — se sono presenti entità selezionate, premendolo le elimina immediatamente, anche senza aprire il comando Delete nel terminale. Questo è il flusso di lavoro di eliminazione più veloce in un solo passaggio:

```
Clicca entità → premi Canc → fatto
```

## Selezione durante il comando

| Metodo | Comportamento |
|--------|--------------|
| **Clic** | Attiva/disattiva l'entità sotto il cursore nella/dalla selezione |
| **Trascina a destra** (rigoroso) | Seleziona solo le entità completamente all'interno del riquadro |
| **Trascina a sinistra** (incrocio) | Seleziona le entità che intersecano il bordo del riquadro |
| **Invio** / **Spazio** / **Canc** | Conferma e cancella le entità selezionate |

## Recupero delle entità eliminate

Le eliminazioni sono annullabili con il comando [Undo](../undo/) (digita `undo` o usa il pulsante nella barra degli strumenti). È possibile annullare fino a **20 passaggi** per file, e la cronologia persiste tra i ricaricamenti della pagina. Se hai superato 20 eliminazioni senza salvare, le eliminazioni precedenti non possono essere recuperate.

## Entità supportate

Delete funziona su tutti i tipi di entità — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader e tutte le altre.
