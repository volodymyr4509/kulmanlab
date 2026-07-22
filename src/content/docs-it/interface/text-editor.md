---
title: Editor di Testo — Modalità Rich e Simple in KulmanLab CAD
description: L'editor di testo di KulmanLab CAD ha due modalità — rich (formattazione per carattere, multiriga, a capo automatico per Text e Multileader) e simple (stile uniforme, riga singola per entità di quota). Un mode chip nell'intestazione mostra quale modalità è attiva.
keywords: [CAD editor di testo, MTEXT, grassetto corsivo CAD, formattazione testo CAD, testo multiriga CAD, a capo automatico CAD, editor testo rich, editor testo simple, editor testo quota, font personalizzato CAD, caricare ttf CAD, kulmanlab]
group: interface
order: 5
---

# Editor di testo

L'editor di testo si apre quando posizioni o fai doppio clic su un'entità modificabile. Un piccolo **mode chip** nell'intestazione — **rich** (colore accento) o **simple** (attenuato) — mostra quale modalità è attiva per l'entità corrente.

## Modalità dell'editor

### Rich mode

Usato da: **Text** (etichette MTEXT) e annotazioni **Multileader**.

| Feature | Comportamento |
|---------|--------------|
| Bold / Italic / Strikethrough | Per carattere (applica alla selezione, o all'intera entità se nessuna selezione) |
| Font e Height | Sostituzione per carattere, o valore predefinito dell'entità |
| Alignment (Left / Center / Right / Justify) | **Solo testo** — non disponibile per Multileader |
| `Enter` | Inserisce un'interruzione di riga dura |
| `Shift+←/→` | Estende o riduce una selezione di testo |
| `Home` / `End` | Salta all'inizio / fine della riga dura corrente |
| A capo automatico | Supportato tramite grip di ridimensionamento della larghezza di riferimento |

### Simple mode

Usato da: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

L'editor è precompilato con l'etichetta visualizzata corrente della quota in modo da poter posizionare il cursore e modificare il valore direttamente.

| Feature | Comportamento |
|---------|--------------|
| Bold / Italic / Font / Height | Disponibile — si applica all'**intera** etichetta in una volta |
| Formattazione per carattere | Non supportata |
| `Enter` | **Conferma** il valore e chiude l'editor (nessuna interruzione di riga) |
| Multiriga | Non supportato |
| A capo automatico | Non supportato |

## Aprire l'editor

| Azione | Risultato |
|--------|-----------|
| Comando `text` → clicca la posizione | Crea una nuova entità testo e apre l'editor (**rich**) |
| Doppio clic su un'entità **Text** esistente | Riapre l'editor in **rich** mode |
| Doppio clic su un **Multileader** esistente | Apre l'editor in **rich** mode |
| Doppio clic su un'entità **quota** | Apre l'editor in **simple** mode |
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

Il menu raggruppa i font disponibili in **Default** (il font sans-serif integrato), **User** (i tuoi font personalizzati caricati, se presenti), **Free** (un insieme di Google Fonts incluse) e **System** (font comuni del sistema operativo come Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console e Impact).

- **Con una selezione** — sostituisce il font per i soli caratteri selezionati.
- **Nessuna selezione** — applica il font all'intera entità.

Il menu riflette il font del carattere a sinistra del cursore quando non c'è selezione.

Non sei limitato all'elenco integrato — clicca il pulsante **Font Manager** nella barra degli strumenti per caricare il tuo file `.ttf` personalizzato e aggiungerlo al gruppo **User**. Consulta [Font Manager](../../commands/font-manager/) per i dettagli.

### Altezza

Il campo numerico imposta l'**altezza dei capitali** (altezza di una lettera maiuscola) nelle unità di disegno.

- **Con una selezione** — sostituisce l'altezza per i caratteri selezionati, indipendentemente dall'altezza di base dell'entità.
- **Nessuna selezione** — cambia l'altezza di base dell'entità (si applica a tutti i caratteri che non hanno una sostituzione di altezza individuale).

Il campo riflette l'altezza del carattere a sinistra del cursore. Lascialo vuoto per usare il valore predefinito dell'entità.

### Allineamento

Quattro pulsanti — **Align Left**, **Align Center**, **Align Right**, **Justify** — impostano l'allineamento del paragrafo. Disponibile solo per entità **Text**; le etichette Multileader e di quota non mostrano questi pulsanti.

- Cliccando un pulsante si riallinea ogni riga all'interno del riquadro di delimitazione esistente dell'entità — non sposta il punto di inserimento né ridimensiona il riquadro.
- Cliccando il pulsante già attivo si rimuove la sostituzione, tornando alla colonna implicita nel punto di ancoraggio dell'entità.
- **Justify** allarga la spaziatura tra le parole in modo che ogni riga riempia l'intera larghezza della riga.

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

## Copia, taglia e incolla

| Tasto | Azione |
|-------|--------|
| `Ctrl+C` / `Cmd+C` | Copia il testo selezionato |
| `Ctrl+X` / `Cmd+X` | Taglia il testo selezionato |
| `Ctrl+V` / `Cmd+V` | Incolla al cursore |

Copia e taglia richiedono una selezione di testo attiva. Il testo incollato è sempre semplice — assume la formattazione (grassetto, corsivo, font, altezza) già presente al cursore invece di mantenere quella che aveva al momento della copia.

In **Rich mode**, le interruzioni di riga nel testo incollato vengono mantenute. In **Simple mode**, le interruzioni di riga vengono rimosse, poiché le etichette delle quote sono a riga singola.

## A capo automatico

Quando un'entità testo ha una **larghezza di riferimento** impostata, le righe lunghe vengono suddivise automaticamente ai confini delle parole per adattarsi a quella larghezza.

Per impostare o cambiare la larghezza di riferimento mentre l'entità è selezionata, trascina i **grip di ridimensionamento** — i rettangoli sottili sui bordi sinistro e destro del riquadro di delimitazione tratteggiato. Il contenuto si riscalcola in tempo reale mentre trascini.

Impostare la larghezza di riferimento a zero (trascina i grip insieme o elimina il valore nel pannello proprietà) rimuove l'a capo automatico e lascia crescere liberamente le righe.

## Testo multiriga

Premi `Invio` per inserire un'interruzione di riga dura. Ogni riga dura è indipendente — `Home` e `End` navigano all'interno della sola riga dura corrente.

Le interruzioni di riga dure e la formattazione per carattere sono memorizzate usando il formato MTEXT e sopravvivono a un round-trip DXF completo.

## Compatibilità DXF

Le entità testo sono memorizzate come **MTEXT** nei file DXF. Grassetto e corsivo sono codificati usando `\L`, `\K`, `\O` e cambi di font inline (`\f`). L'altezza per carattere è codificata come `\H`. Tutta la formattazione è preservata all'esportazione ed è leggibile da LibreCAD, FreeCAD e altre applicazioni compatibili DXF.
