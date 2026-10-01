---
title: "Comando StileQuota — creare e gestire stili di quota con nome"
description: "Crea e gestisci stili di quota CAD per frecce, linee di estensione, centri, testo, precisione, allineamento e compatibilità DXF DIMSTYLE."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# StileQuota

Il comando apre una finestra per creare, modificare, vedere in anteprima e selezionare stili di quota con nome. Le nuove quote lineari, allineate, radiali, diametrali e angolari copiano lo stile corrente alla creazione; quelle esistenti non restano collegate.

## Apertura della finestra

Digita il comando localizzato nel terminale oppure fai clic sul pulsante **Stile quota** nel pannello **Annota**. L’elenco a sinistra contiene gli stili visibili; un segno di spunta indica quello corrente e la matita consente di rinominarlo.

## Linee e frecce

**Freccia 1 / Freccia 2 · Dimensione frecce · Offset linee di estensione · Prolungamento linee di estensione · Contrassegno centro · Dimensione contrassegno centro**

Imposta separatamente le due punte freccia, la dimensione, l’offset e l’estensione delle linee di estensione, oltre al tipo e alla dimensione del centro (`Nessuno`, `Segno` o `Linee`).

## Testo

**Stile di testo · Carattere · Altezza testo · Cornice testo · Distanza testo · Aggancio testo · Testo allineato · Precisione · Precisione angolare**

La sezione testo controlla il riempimento rapido da Stile testo, font, altezza, grassetto, corsivo, cornice, distanza, una di nove posizioni di attacco, allineamento alla linea di quota e precisione lineare e angolare. Stile testo copia i valori una sola volta, senza collegamento attivo.

L’anteprima usa gli stessi renderer dell’area di disegno. Passa tra esempi lineari, radiali, diametrali e angolari per verificare frecce, centri, posizione del testo, precisione e cornici.

## Creazione e gestione degli stili

**Nuovo** duplica lo stile selezionato. `Standard` non può essere rinominato né eliminato e nemmeno lo stile corrente può essere eliminato. I nomi devono essere univoci, non vuoti e validi per DXF. Gli stili annotativi importati restano nascosti ma vengono conservati.

## Impostazione dello stile corrente

**Imposta corrente** rende lo stile scelto il modello per le nuove quote; il menu nel pannello Annota offre la stessa scelta. I valori vengono copiati alla creazione. Dimension Continue eredita invece l’intero aspetto della quota di base.

## Salvataggio o annullamento

**OK** applica insieme rinomine, aggiunte, eliminazioni, proprietà e scelta dello stile corrente. **Chiudi**, un clic sullo sfondo o `Escape` annulla le modifiche.

## Compatibilità DXF

KulmanLab importa ed esporta record `DIMSTYLE` con nome, incluse frecce separate, linee di estensione, testo, precisione, centri, cornice, riferimento allo stile testo e flag annotativo. In importazione, le sostituzioni `DSTYLE` specifiche dell’entità hanno la precedenza.

In esportazione, il `STYLE` referenziato usa altezza variabile (`40 = 0`) e salva l’ultima altezza nel gruppo `42`. Così un’altezza fissa dello stile testo non sostituisce quella propria dello stile di quota.

## Comandi correlati

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
