---
title: "Comando StileTesto — Creare e gestire gli stili di testo"
description: "Crea e gestisce stili di testo CAD con carattere, altezza, grassetto, corsivo, interlinea, allineamento e cornice. Il nuovo testo usa lo stile corrente."
keywords: [stile di testo CAD, carattere CAD, stile di testo con nome, gestore stili, cornice testo CAD, allineamento testo CAD, stile DXF, kulmanlab]
group: style
order: 6
---

# TextStyle

Il comando `StileTesto` apre il gestore degli stili di testo. Consente di creare e modificare stili con nome e scegliere lo stile *corrente*. Il nuovo [Testo](../text/) ne copia le impostazioni al momento della creazione.

## Aprire la finestra

- Digita `StileTesto` nel terminale, oppure
- fai clic su **Stile di testo** nel pannello **Annota**.

Gli stili visibili sono elencati a sinistra e le proprietà dello stile selezionato a destra. ✓ indica lo stile corrente. Un doppio clic seleziona uno stile e lo rende subito corrente.

## Modificare le proprietà

| Campo | Funzione |
|-------|----------|
| Rinomina | Usa la matita accanto al nome per modificarlo nell’elenco; `Standard` non può essere rinominato. |
| Carattere | Tipo di carattere dall'elenco del [Gestore caratteri](../font-manager/). |
| Altezza | Altezza positiva obbligatoria. I valori zero o negativi diventano `1`; il gestore accetta solo valori maggiori di `0`. |
| Grassetto / Corsivo | Attiva separatamente ciascun formato. |
| Interlinea | Moltiplicatore dello spazio tra le righe. |
| Allineamento orizzontale | Predefinito: sinistra, centro, destra o giustificato. |
| Cornice | Disegna una cornice rettangolare attorno al nuovo testo. |

L’anteprima disegna un pangramma su due righe con lo stesso renderer dell’area di disegno. Font, altezza, grassetto, corsivo, cornice, interlinea e allineamento si aggiornano subito; l’indicatore mostra lo zoom di adattamento. I nuovi stili sono allineati **a sinistra** per impostazione predefinita.

Gli stili annotativi importati da DXF sono attualmente nascosti perché la scala annotativa non è ancora visualizzata. I relativi record vengono conservati.

## Creare, eliminare e impostare come corrente

- **Nuovo** duplica lo stile selezionato come `Style1`, `Style2` e così via.
- **Elimina** funziona solo se lo stile non è `Standard` né quello corrente.
- **Imposta corrente** usa lo stile selezionato per i testi futuri. La stessa scelta è disponibile nel menu del pannello Annota.

Uno stile è un modello applicato durante la creazione. Modificarlo in seguito non cambia il testo esistente.

## Salvare e usare la tastiera

**OK** applica tutte le modifiche. **Chiudi** o `Escape` le annulla.

| Tasto | Azione |
|-------|--------|
| `↑` / `↓` | Sposta la selezione nell'elenco |
| `Escape` | Annulla le modifiche e chiude |

## Compatibilità DXF

Nome, file dei font, grassetto, corsivo e flag annotativo vengono conservati negli stili testo DXF. KulmanLab scrive il gruppo `40` di STYLE come `0` (altezza variabile) e l’ultima altezza usata nel gruppo `42`; così un’altezza STYLE fissa non sostituisce l’altezza propria di uno stile di quota. Cornice, interlinea e allineamento orizzontale sono valori KulmanLab per singolo testo, non campi della tabella STYLE DXF.

## Comandi correlati

| Comando | Funzione |
|---------|----------|
| [Text](../text/) | Disegna testo con lo stile corrente |
| [FontManager](../font-manager/) | Gestisce i caratteri disponibili e personalizzati |
| [MatchProperties](../match-properties/) | Copia l'altezza del testo su altri oggetti |
