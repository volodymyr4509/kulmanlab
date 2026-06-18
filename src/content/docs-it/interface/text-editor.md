---
sidebar_position: 4
title: Editor di Testo — Formattazione RTF in KulmanLab CAD
description: L'editor di testo di KulmanLab CAD consente di posizionare etichette MTEXT multiriga con testo in grassetto, corsivo, barrato, sostituzioni di font e altezze per carattere, a capo automatico e navigazione completa del cursore.
keywords: [CAD editor di testo, MTEXT, grassetto corsivo CAD, formattazione testo CAD, testo multiriga CAD, a capo automatico CAD, kulmanlab]
---

# Editor di testo

L'editor di testo si apre ogni volta che posizioni una nuova etichetta di testo con il comando `text` o fai doppio clic su un'entità di testo esistente. Supporta contenuto multiriga, formattazione per carattere e a capo automatico.

## Aprire l'editor

| Azione | Risultato |
|--------|-----------|
| Comando `text` → clicca la posizione | Crea una nuova entità testo e apre l'editor |
| Doppio clic su un'entità testo esistente | Riapre l'editor per quell'entità |
| `Esc` all'interno dell'editor | Chiude l'editor e mantiene tutte le modifiche |

## Barra degli strumenti

La barra degli strumenti galleggia sopra il riquadro di delimitazione del testo e rimane ancorata all'entità mentre fai pan o zoom.

### Grassetto · Corsivo · Barrato

| Pulsante | Cosa fa |
|----------|---------|
| **G** | Attiva/disattiva grassetto |
| *C* | Attiva/disattiva corsivo |
| ~~S~~ | Attiva/disattiva barrato |

**Come funziona l'attivazione:**

- **Con una selezione di testo** — lo stile viene applicato esattamente ai soli caratteri selezionati.
- **Nessuna selezione, cursore nel testo esistente** — attiva lo stile sull'intera entità (tutti i segmenti).
- **Testo vuoto o nuova entità** — lo stile viene memorizzato sul segmento vuoto e applicato a ogni carattere digitato da quel punto in poi.

Il pulsante appare evidenziato (attivo) quando ogni carattere nella selezione corrente — o il carattere immediatamente alla sinistra del cursore — ha quello stile impostato.

### Font

Il menu elenca una serie curata di caratteri cross-platform (Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console, Impact). La prima opzione **Arial** è quella predefinita.

- **Con una selezione** — sostituisce il font per i soli caratteri selezionati.
- **Nessuna selezione** — applica il font all'intera entità.

Il menu riflette il font del carattere a sinistra del cursore quando non c'è selezione.

### Altezza

Il campo numerico imposta l'**altezza dei capitali** (altezza di una lettera maiuscola) nelle unità di disegno.

- **Con una selezione** — sostituisce l'altezza per i caratteri selezionati, indipendentemente dall'altezza di base dell'entità.
- **Nessuna selezione** — cambia l'altezza di base dell'entità (si applica a tutti i caratteri che non hanno una sostituzione di altezza individuale).

Il campo riflette l'altezza del carattere a sinistra del cursore. Lascialo vuoto per usare il valore predefinito dell'entità.

## Cursore e navigazione

| Tasto | Azione |
|-------|--------|
| `←` / `→` | Sposta il cursore di un carattere a sinistra o a destra |
| `Home` | Salta all'inizio della riga dura corrente |
| `End` | Salta alla fine della riga dura corrente |
| `Shift` + `←` / `→` | Estende o riduce la selezione |
| `Canc ←` | Elimina il carattere a sinistra (o la selezione) |
| `Canc` | Elimina il carattere a destra (o la selezione) |
| `Invio` | Inserisce un'interruzione di riga |
| `Esc` | Chiude l'editor |

L'altezza del cursore corrisponde automaticamente all'altezza dei capitali del carattere adiacente.

## A capo automatico

Quando un'entità testo ha una **larghezza di riferimento** impostata, le righe lunghe vengono suddivise automaticamente ai confini delle parole per adattarsi a quella larghezza.

Per impostare o cambiare la larghezza di riferimento mentre l'entità è selezionata, trascina i **grip di ridimensionamento** — i rettangoli sottili sui bordi sinistro e destro del riquadro di delimitazione tratteggiato. Il contenuto si riscalcola in tempo reale mentre trascini.

Impostare la larghezza di riferimento a zero (trascina i grip insieme o elimina il valore nel pannello proprietà) rimuove l'a capo automatico e lascia crescere liberamente le righe.

## Testo multiriga

Premi `Invio` per inserire un'interruzione di riga dura. Ogni riga dura è indipendente — `Home` e `End` navigano all'interno della sola riga dura corrente.

Le interruzioni di riga dure e la formattazione per carattere sono memorizzate usando il formato MTEXT e sopravvivono a un round-trip DXF completo.

## Compatibilità DXF

Le entità testo sono memorizzate come **MTEXT** nei file DXF. Grassetto e corsivo sono codificati usando `\L`, `\K`, `\O` e cambi di font inline (`\f`). L'altezza per carattere è codificata come `\H`. Tutta la formattazione è preservata all'esportazione ed è leggibile da LibreCAD, FreeCAD e altre applicazioni compatibili DXF.
