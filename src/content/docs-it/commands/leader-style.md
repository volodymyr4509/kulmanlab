---
title: Comando StileGuida — Gestire gli stili linea di richiamo
description: Crea stili linea di richiamo CAD con punta, aggancio, distanza, rotazione, carattere, altezza e cornice.
keywords: [stile linea di richiamo CAD, stile multileader, MLEADERSTYLE, punta freccia CAD, aggancio testo, stile DXF, kulmanlab]
group: style
order: 7
---

# LeaderStyle

Il comando `StileGuida` apre il gestore degli stili linea di richiamo con nome. Ogni nuova [Direttrice](../leader/) copia le impostazioni dello stile *corrente* al momento della creazione.

## Modificare uno stile

Digita `StileGuida` o fai clic su **Stile linea di richiamo** nel pannello annotazioni. ✓ identifica lo stile corrente; la matita accanto al nome consente di rinominarlo. L’anteprima si aggiorna subito usando lo stesso renderer del disegno.

| Campo | Funzione |
|---|---|
| Aggancio testo | Alto, Centro, Basso o Sottolineato |
| Punta / Dimensione frecce | Simbolo e dimensione all’estremità dei bracci |
| Distanza approdo | Spazio tra approdo e testo |
| Rotazione testo | Angolo dell’etichetta in gradi |
| Stile testo | Copia una volta carattere, altezza, grassetto e corsivo da [TextStyle](../text-style/) |
| Carattere / Altezza testo | Tipo di carattere e altezza dell’etichetta |
| Grassetto / Corsivo | Formattazione indipendente |
| Cornice testo | Cornice rettangolare attorno all’etichetta |

**Nuovo** duplica lo stile selezionato. `Standard` non può essere rinominato o eliminato; anche lo stile corrente non può essere eliminato. **Imposta corrente** interessa solo le direttrici create in seguito: quelle esistenti non cambiano. Nomi vuoti, duplicati o non validi per DXF bloccano **OK**. Gli stili annotativi importati sono nascosti ma conservati.

## Salvataggio e DXF

**OK** applica tutte le modifiche; **Chiudi** o `Escape` le annulla. KulmanLab legge e scrive record `MLEADERSTYLE`. Nome, punta e dimensione freccia, distanza approdo, altezza, aggancio, cornice e indicatore annotativo sono salvati come campi dello stile. Rotazione, carattere, grassetto e corsivo sono valori predefiniti di KulmanLab copiati sulla direttrice alla creazione.

Vedi anche [Leader](../leader/), [LeaderAdd](../leader-add/) e [LeaderRemove](../leader-remove/).
