---
sidebar_position: 3
title: Comando Copy — Duplica Entità in una Nuova Posizione in KulmanLab CAD
description: Il comando Copy crea duplicati traslati delle entità selezionate lasciando gli originali al loro posto. Supporta pre-selezione, blocco angolare e input distanza esatta. Le copie vengono posizionate e il comando termina; gli originali rimangono invariati.
keywords: [comando copy CAD, duplica entità CAD, copia oggetti CAD, clona geometria CAD, blocco angolo copia, distanza esatta copia, kulmanlab]
---

# Copy

Il comando `copy` crea duplicati traslati delle entità selezionate e li posiziona sfalsati da un punto base a una destinazione — gli originali restano esattamente dove sono. Questa è la differenza fondamentale rispetto a [Move](../move/): Copy aggiunge nuove entità al disegno; Move riposiziona quelle esistenti.

## Due modi per iniziare

**Pre-seleziona, poi copia** — seleziona prima le entità, poi attiva:

1. Seleziona una o più entità sul canvas.
2. Digita `copy` nel terminale o clicca il pulsante **Copy** nella barra degli strumenti.
3. **Clicca il punto base**, oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
4. **Clicca la destinazione** — i duplicati appaiono allo sfasamento base→destinazione. L'inserimento di coordinate funziona anche qui.

**Attiva, poi seleziona** — avvia il comando senza nulla selezionato:

1. Digita `copy` o clicca il pulsante nella barra degli strumenti.
2. **Seleziona gli oggetti** — clicca per attivare/disattivare singole entità, o trascina per selezionare per area.
3. Premi **Invio** o **Spazio** per confermare la selezione.
4. **Clicca il punto base**, poi **clicca la destinazione** (inserimento coordinate disponibile in entrambi i passi).

```
  Prima:                Dopo:
  [entità A]            [entità A]  ← originali intatti
  [entità B]            [entità B]
                        [copia di A] ← nuove entità
                        [copia di B]
```

Un'anteprima fantasma delle copie segue il cursore dal punto base alla destinazione.

## Inserimento coordinate

Al passo del punto base o della destinazione, digita una posizione esatta invece di cliccare:

1. Digita il valore X.
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per confermare.

## Blocco angolare e distanza esatta

Dopo aver impostato il punto base il comando si aggancia agli assi a 45° (0°, 45°, 90°, 135°, …) quando il cursore è abbastanza lontano e vicino all'asse. Mentre è bloccato, digita una distanza e premi **Invio** per posizionare le copie esattamente a quello sfasamento.

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiunge cifra al valore distanza |
| `-` | Distanza negativa — inverte direzione lungo l'asse (solo primo carattere) |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` | Posiziona copie alla distanza digitata |

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Invio` / `Spazio` | Conferma selezione e avanza alla fase punto base |
| `0`–`9`, `.`, `-` | Avvia inserimento coordinata X, o distanza con blocco angolare attivo |
| `,` | Blocca X e passa all'inserimento Y |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma coordinata o applica copia alla distanza digitata |
| `Escape` | Annulla e reimposta |

## Selezione durante il comando

| Metodo | Comportamento |
|--------|--------------|
| **Clic** | Attiva/disattiva l'entità sotto il cursore nella/dalla selezione |
| **Trascina a destra** (rigoroso) | Aggiunge entità completamente all'interno del riquadro |
| **Trascina a sinistra** (incrocio) | Aggiunge entità che intersecano il bordo del riquadro |
| **Invio** / **Spazio** | Conferma la selezione |

## Dopo la copia

Gli **originali rimangono selezionati** — le nuove copie vengono aggiunte al disegno ma la selezione viene azzerata e il comando termina. Per lavorare subito con le copie, esegui di nuovo Copy sulla selezione, o avvia un nuovo comando.

## Copy vs Move

| | Copy | Move |
|---|------|------|
| Originali | Restano al loro posto | Rimossi dalla posizione originale |
| Conteggio risultante | Aumenta del numero di entità copiate | Invariato |
| Dopo l'operazione | Originali ancora selezionati | Entità spostate selezionate nella nuova posizione |
| Ideale per | Geometria ripetuta, layout simmetrici | Riposizionamento della geometria |

## Entità supportate

Copy funziona su tutti i tipi di entità. Tutte le entità implementano `translate(dx, dy)` internamente quindi nessuna è esclusa.
