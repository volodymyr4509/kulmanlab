---
title: Comando Move — Trascinare Entità Selezionate per Punto Base in KulmanLab CAD
description: Il comando Move trasla una o più entità selezionate per un punto base e destinazione. Supporta pre-selezione, blocco angolo e inserimento distanza esatta. Dopo lo spostamento le entità rimangono selezionate nella nuova posizione. Tutti i tipi di entità sono supportati.
keywords: [CAD comando move, trasla entità CAD, sposta oggetti CAD, blocco angolo move, distanza esatta move, grip move CAD, kulmanlab]
group: edit
order: 1
---

# Move

Il comando `move` trasla le entità selezionate da un punto base a un punto di destinazione. Lo spostamento applicato a ogni entità selezionata è il vettore da base a destinazione. Dopo lo spostamento tutte le entità rimangono selezionate nella nuova posizione, pronte per ulteriori modifiche.

## Due modi per iniziare

**Preseleziona, poi sposta** — seleziona le entità prima, poi attiva:

1. Seleziona una o più entità sul canvas.
2. Digita `move` nel terminale o clicca il pulsante **Move** nella barra degli strumenti.
3. **Clicca il punto base**, oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
4. **Clicca la destinazione** — tutte le entità selezionate si spostano del vettore base→destinazione. Anche qui è disponibile l'inserimento coordinate.

**Attiva, poi seleziona** — avvia il comando senza nulla selezionato:

1. Digita `move` o clicca il pulsante della barra degli strumenti.
2. **Seleziona gli oggetti** — clicca per alternare singole entità, o trascina per selezionare per area.
3. Premi **Invio** o **Spazio** per confermare la selezione.
4. **Clicca il punto base**, poi **clicca la destinazione** (inserimento coordinate disponibile in entrambi i passi).

```
  Prima:                     Dopo:
  ● base                       → ● destinazione
  [entità A]                      [entità A spostata]
  [entità B]                      [entità B spostata]
```

Un'anteprima fantasma di tutte le entità selezionate segue il cursore dal punto base alla destinazione, mostrando il risultato prima del clic.

## Inserimento coordinate

Al passo del punto base o della destinazione, digita una posizione esatta invece di cliccare:

1. Digita il valore X.
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per confermare.

## Blocco angolo e distanza esatta

Dopo che il punto base è impostato, il comando cerca un asse di aggancio a 45° (0°, 45°, 90°, 135°, …). La direzione **si blocca** quando il cursore è abbastanza lontano dalla base e entro una larghezza di grip dall'asse. Mentre è bloccato:

- L'anteprima fantasma si aggancia all'asse.
- Digita una distanza e premi **Invio** per spostarti esattamente di quella distanza nella direzione bloccata.
- Cliccare si proietta sull'asse, quindi la destinazione si trova sempre esattamente su di esso.

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiunge al valore di distanza |
| `-` | Distanza negativa — inverte la direzione lungo l'asse (solo primo carattere) |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` | Applica lo spostamento alla distanza digitata |

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Invio` / `Spazio` | Conferma la selezione e avanza alla fase del punto base |
| `0`–`9`, `.`, `-` | Inizia l'inserimento coordinata X, o la distanza con angolo bloccato |
| `,` | Blocca X e passa all'inserimento Y |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma la coordinata o applica lo spostamento alla distanza digitata |
| `Esc` | Annulla e ripristina |

## Attivare Move da un grip

Cliccare il **grip del punto medio** di una [Linea](../line/) selezionata avvia Move automaticamente, con il punto medio già impostato come punto base e la fase di spostamento attiva. Questo è il modo più rapido per riposizionare una singola linea senza passare per la fase di selezione.

## Selezione durante il comando

Quando il comando inizia nella fase di selezione:

| Metodo | Comportamento |
|--------|--------------|
| **Clic** | Alterna l'entità sotto il cursore nella/fuori dalla selezione |
| **Trascina a destra** (stretta) | Aggiunge le entità completamente dentro il riquadro |
| **Trascina a sinistra** (incrociante) | Aggiunge le entità che intersecano il bordo del riquadro |
| **Invio** / **Spazio** | Conferma la selezione e passa alla fase del punto base |

## Dopo lo spostamento

Le entità spostate rimangono selezionate nella nuova posizione. Questo significa che puoi immediatamente:
- Eseguire di nuovo **Move** per spostarle ulteriormente.
- Eseguire [Copy](../copy/), [Rotate](../rotate/) o [Scale](../scale/) senza ri-selezionare.
- Premere **Canc** per eliminarle.

## Move vs Copia

| | Move | Copia |
|---|------|-------|
| Posizione originale | Liberata — le entità non sono più lì | Mantenuta — gli originali rimangono al loro posto |
| Conteggio risultato | Stesso numero di entità | Un set aggiuntivo per operazione |
| Selezione dopo | Entità spostate selezionate nella nuova posizione | Entità copiate selezionate nella nuova posizione |
| Ideale per | Riposizionare la geometria | Duplicare la geometria |

## Entità supportate

Move funziona su tutti i tipi di entità: Linea, Polilinea, Rettangolo, Cerchio, Arco, Ellisse, Testo, Spline, Quota, Leader e tutti gli altri.
