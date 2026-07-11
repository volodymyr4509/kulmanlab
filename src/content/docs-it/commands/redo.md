---
title: Comando Redo — Riapplicare Azioni Annullate in KulmanLab CAD
description: Il comando Redo riapplica l'ultima azione invertita da Undo, avanzando nella cronologia. Redo è disponibile solo dopo un Undo e viene cancellato nel momento in cui viene eseguita qualsiasi nuova azione di disegno.
keywords: [CAD comando redo, cronologia redo CAD, riapplica azione CAD, undo redo CAD, redo persistente browser, kulmanlab]
group: edit
order: 14
---

# Redo

Il comando `redo` avanza nella cronologia degli annullamenti, riapplicando le azioni invertite da [Undo](../undo/). Redo è disponibile solo quando hai fatto un passo indietro con Undo e non hai ancora effettuato una nuova modifica.

## Come eseguire il redo

- Digita `redo` nel terminale, oppure
- Clicca il pulsante **Redo** nella barra degli strumenti.

Ogni invocazione riapplica un'azione precedentemente annullata. Invocalo ripetutamente per avanzare attraverso tutte le voci di redo disponibili.

## Comportamento dello stack di redo

| Dettaglio | Comportamento |
|-----------|--------------|
| Disponibile dopo | Uno o più passi [Undo](../undo/) |
| Cancellato da | **Qualsiasi nuova azione di disegno** — aggiunta, modifica o eliminazione di un'entità |
| Archiviazione | Browser, per file — sopravvive al ricaricamento della pagina (purché nessuna nuova azione sia stata effettuata prima del ricaricamento) |
| Profondità massima | Fino a 20 voci (stesso pool di Undo) |

Una volta che una nuova entità viene disegnata, eliminata o modificata, lo stack di redo viene cancellato e quelle voci non possono essere recuperate. Solo le azioni annullate che non sono state superate da un nuovo lavoro possono essere rifatte.

## Redo vs Undo

| | Redo | Undo |
|---|------|------|
| Direzione | Avanza **in avanti** attraverso le voci annullate | Avanza **indietro** nella cronologia |
| Disponibile quando | Dopo almeno un Undo, senza nuove azioni effettuate | Esiste almeno un'azione registrata |
| Cancellato da | Qualsiasi nuova azione di disegno | Nulla |

Il pulsante Redo nella barra degli strumenti è disattivato quando non ci sono voci da rifare. Usa prima [Undo](../undo/) per creare voci di redo.
