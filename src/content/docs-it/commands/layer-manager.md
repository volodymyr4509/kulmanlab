---
title: LayerManager — Gestisci Tutti i Livelli in un'Unica Tabella
description: Il comando LayerManager apre una tabella di tutti i layer del disegno, permettendo di aggiungere layer, eliminare quelli inutilizzati e modificare sul posto congelamento, blocco, stampa, colore, spessore e tipo di linea di ciascuno.
keywords: [gestore layer, tabella layer CAD, gestire layer CAD, aggiungere layer CAD, eliminare layer CAD, rimuovere layer inutilizzato, congela blocca stampa layer, gestione layer kulmanlab]
group: layer
order: 1
---

# LayerManager

Il comando `LayerManager` apre una tabella che elenca tutti i layer del disegno, con le impostazioni **Freeze**, **Lock**, **Plot**, **Colore**, **Spessore linea** e **Tipo di linea** modificabili direttamente nella riga. È il luogo centrale per aggiungere layer, eliminare quelli inutilizzati e regolare il comportamento di quelli esistenti — gli altri comandi di layer ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) fanno ciascuno una cosa sola senza aprirlo.

## Aprire il Gestore Livelli

- Digita `LayerManager` nel terminale, **oppure**
- Clicca il pulsante **Layer Manager** nel pannello dei livelli.

La finestra di dialogo si apre come pannello fluttuante; non serve selezionare nulla prima.

## La tabella dei livelli

| Colonna | Cosa controlla |
|---------|-----------------|
| Name | Il nome del livello, mostrato in sola lettura nella tabella (impostato una volta, alla creazione) |
| Freeze | Nasconde le entità del livello e le esclude dalla selezione finché non viene scongelato |
| Lock | Impedisce la modifica delle entità sul livello, senza nasconderle |
| Plot | Se le entità del livello sono incluse in stampa o nell'esportazione in PDF |
| Color | Il colore ACI del livello — clicca sul campione per aprire il selettore colore |
| Lineweight | Lo spessore linea del livello — clicca sul chip per aprire il selettore dello spessore |
| Linetype | Il motivo tratteggiato del livello — clicca sul chip per aprire il selettore del tipo linea |
| ✕ | Elimina il layer quando nulla lo sta usando — vedi [Eliminare un layer](#eliminare-un-layer) |

Attivare o disattivare Freeze, Lock o Plot ha effetto immediato — non c'è un passaggio di salvataggio separato. Le entità impostate su **ByLayer** per colore, spessore linea o tipo linea (l'impostazione predefinita) adottano ciò che imposti qui; le entità con una propria sovrascrittura esplicita non vengono influenzate.

## Aggiungere un livello

1. Clicca **+ Add Layer** in fondo alla tabella.
2. Digita un nome e premi **Invio** per confermare, oppure **Escape** per annullare.

I nomi dei livelli possono contenere lettere, numeri, spazi e `_`, `-`, `$`. Un nome vuoto, già in uso, o con qualsiasi altro carattere viene rifiutato con un errore mostrato in linea, e la riga resta aperta per un altro tentativo.

I nuovi livelli iniziano **scongelati, sbloccati, stampabili**, con colore 7 (bianco/nero), spessore linea Default e tipo linea Continuous — le stesse impostazioni predefinite che [Import](../import/) assegna al livello `0` in un disegno vuoto.

## Eliminare un layer

Ogni riga termina con un pulsante **✕** che rimuove il layer dal disegno. L'eliminazione è immediata — non c'è alcuna conferma — ma viene offerta solo per i layer da cui non dipende nulla:

| Situazione | Stato del pulsante |
|------------|--------------------|
| Il layer è vuoto | Attivo — *Delete layer* |
| Il layer è assegnato ad almeno un'entità | Disattivato — *Cannot delete: assigned to at least one entity* |
| Layer `0` | Nessun pulsante |

**«In uso» riguarda l'intero disegno**, non solo ciò che stai guardando. Un'entità che si trova su un layout (spazio carta) conta esattamente quanto una nello spazio modello, quindi un layer può sembrare vuoto sullo schermo e rifiutarsi comunque di essere eliminato. I layer congelati non fanno eccezione: il congelamento nasconde le entità ma non ne annulla l'assegnazione, perciò un layer congelato che contiene entità resta non eliminabile.

Il layer `0` non può mai essere eliminato. È il layer di riserva che ogni disegno possiede per certo, quindi il pulsante non viene proprio disegnato per esso, anziché mostrarlo disattivato.

### «…is now in use and can't be deleted»

Ogni tanto la ✕ sembra disponibile ma il clic viene rifiutato con un banner in cima al pannello:

```
"WALLS" is now in use and can't be deleted
```

Non è una contraddizione. Capire quali layer siano in uso richiede di percorrere tutte le entità del disegno, perciò il risultato viene messo in cache e ricostruito solo quando cambia il numero di entità — conveniente con centinaia di entità, non con centinaia di migliaia. Spostare un'entità esistente su un layer non cambia quel numero, così lo stato disattivato della riga può essere per un attimo superato. Il clic ricontrolla da zero prima di eliminare alcunché, ed è per questo che il rifiuto avviene al momento del clic invece di far sparire il layer mentre qualcosa lo referenzia ancora.

Chiudi il banner con la sua **✕**. Il layer resta intatto.

## Cosa non puoi fare qui

La tabella non indica quale sia il layer *corrente*; quello si imposta dal menu a discesa del pannello layer o con [LayerMakeCurrent](../layer-make-current/), non da questa finestra. Anche i nomi dei layer sono fissati alla creazione: un layer può essere eliminato e ricreato, ma non rinominato.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Invio` | Conferma il nome di un nuovo livello (durante l'aggiunta) |
| `Escape` | Annulla l'aggiunta di un livello, oppure chiude la finestra di dialogo |

## Comandi correlati

| Comando | Cosa fa |
|---------|---------|
| [LayerMakeCurrent](../layer-make-current/) | Imposta il livello attivo per corrispondere al livello dell'entità cliccata |
| [LayerMatch](../layer-match/) | Riassegna le entità selezionate al livello di un'entità sorgente |
| [LayerIsolate](../layer-isolate/) | Congela tutti i livelli tranne quelli delle entità selezionate |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Scongela tutti i livelli in un solo passaggio |
