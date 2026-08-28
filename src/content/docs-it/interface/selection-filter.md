---
title: Filtro di selezione — Restringere una selezione multipla per proprietà
description: Quando molte entità sono selezionate, un'icona di filtro nell'intestazione del pannello proprietà apre una finestra con elenchi di spunta dal vivo per Tipo, Layer, Colore, Spessore linea e Tipo di linea, costruiti da ciò che c'è davvero nella selezione, così da restringere una selezione ampia e mista prima della modifica in blocco.
keywords: [filtro di selezione, filtrare la selezione CAD, filtro a faccette, restringere la selezione, modifica in blocco CAD, filtro del pannello proprietà, kulmanlab]
group: interface
order: 7
---

# Filtro di selezione

Selezionare molte entità insieme apre il pannello proprietà nella sua vista a selezione multipla («Selection (N)»). Un'**icona di filtro** accanto al pulsante di chiusura permette di restringere quella selezione per proprietà prima di modificarla in blocco.

## Aprire il filtro

1. Seleziona più entità — traccia un riquadro di selezione, fai clic tenendo Maiusc, oppure premi Ctrl+A.
2. Fai clic sull'**icona di filtro** (imbuto) nell'intestazione del pannello proprietà.
3. Sotto il pulsante si apre una finestra con un elenco di spunta per ogni proprietà che varia realmente all'interno della selezione.

## Faccette

La finestra può mostrare fino a cinque faccette, ciascuna costruita dal vivo a partire dalla selezione corrente:

| Faccetta | Valori mostrati |
|----------|-----------------|
| **Tipo** | Nome del tipo di entità (Line, Circle, Hatch, …) |
| **Layer** | Nome del layer, con un campione di colore corrispondente |
| **Colore** | Indice colore ACI |
| **Spessore linea** | Valore dello spessore di linea |
| **Tipo di linea** | Nome del tipo di linea |

Una faccetta compare solo se la selezione contiene davvero più di un valore distinto per essa — selezionando dieci linee tutte sullo stesso layer non comparirà la faccetta Layer, perché spuntarla non restringerebbe nulla. Le entità che non possiedono affatto una data proprietà (Hatch e Text, per esempio, non hanno spessore né tipo di linea) semplicemente non vengono conteggiate in quella faccetta — e da essa non vengono mai nemmeno escluse.

## Restringere la selezione

Spunta uno o più valori in una qualsiasi faccetta per restringere la selezione alle entità che soddisfano **tutte** le faccette spuntate (un'entità deve corrispondere ad almeno un valore spuntato in *ogni* faccetta che hai toccato, non solo in una). Le caselle e i conteggi di ciascuna faccetta riflettono ciò a cui le *altre* faccette spuntate hanno già ristretto, così una faccetta non nasconde mai le proprie opzioni già spuntate — il comportamento consueto della ricerca a faccette.

Il conteggio dei risultati si aggiorna dal vivo mentre spunti e togli la spunta, e la selezione sull'area di disegno viene ristretta di conseguenza: non è un semplice filtro di visualizzazione, le entità che non corrispondono più vengono davvero deselezionate, pronte perché tu modifichi in blocco esattamente il sottoinsieme filtrato.

## Azzerare i filtri

Usa il comando di reimpostazione della finestra per togliere tutte le spunte e tornare alla selezione originale completa, oppure chiudi la finestra (si riaprirà con una base nuova la prossima volta che farai clic sull'icona di filtro con un'altra selezione).

## Correlati

- [Match Properties](../../commands/match-properties/) — copiare le proprietà da un'entità ad altre, una volta ristretto quali sono
- [LayerIsolate](../../commands/layer-isolate/) — un'alternativa a livello di layer quando vuoi isolare solo per layer, indipendentemente da ciò che è selezionato
