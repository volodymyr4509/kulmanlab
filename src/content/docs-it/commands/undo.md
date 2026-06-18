---
sidebar_position: 1
title: Comando Undo — Tornare Indietro nella Cronologia del Disegno in KulmanLab CAD
description: Il comando Undo inverte l'ultima azione di disegno uno step alla volta. Fino a 20 step sono memorizzati per file e persistiti nel browser tra i ricaricamenti della pagina. Eseguire una nuova azione dopo l'annullamento cancella lo stack di redo.
keywords: [CAD comando undo, cronologia undo CAD, inverti azione CAD, step undo CAD, undo persistente browser, kulmanlab]
---

# Undo

Il comando `undo` inverte l'ultima modifica al disegno — uno step per invocazione. Ogni aggiunta, eliminazione o modifica di entità viene registrata come una voce separata nella cronologia. Undo torna indietro attraverso queste voci in ordine inverso.

## Come eseguire l'undo

- Digita `undo` nel terminale, oppure
- Clicca il pulsante **Undo** nella barra degli strumenti.

Ogni invocazione inverte un'azione registrata. Invocalo ripetutamente per tornare ulteriormente indietro.

## Comportamento della cronologia

| Dettaglio | Valore |
|-----------|--------|
| Step per file | Fino a **20** |
| Archiviazione | Browser (IndexedDB / localStorage), per nome file |
| Sopravvive al ricaricamento della pagina | Sì — la cronologia viene ripristinata quando riapri il file |
| Nuova azione dopo undo | Cancella tutte le voci di redo prima della posizione corrente |
| Voce più vecchia quando piena | Eliminata per fare spazio alla modifica più recente |

Ogni mutazione di entità viene registrata: disegnare nuove entità, eliminare entità, modificare endpoint con grip, applicare Move, Rotate, Scale, Mirror, Trim, Extend e Offset creano tutti voci nella cronologia.

## Undo vs Redo

| | Undo | Redo |
|---|------|------|
| Direzione | Avanza **indietro** nella cronologia | Avanza **in avanti** attraverso le voci annullate |
| Disponibile quando | Esiste almeno un'azione registrata | Almeno un Undo è stato eseguito e nessuna nuova azione è stata effettuata |
| Cancellato da | Nulla — la cronologia si accumula fino al limite dei 20 step | Qualsiasi nuova azione di disegno |

Usa [Redo](./redo) per riapplicare un'azione annullata. I pulsanti della barra degli strumenti sono disattivati quando la direzione rispettiva non è disponibile.
