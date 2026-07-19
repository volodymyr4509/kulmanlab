---
title: Distance — Misura la Distanza in Linea Retta tra Due Punti
description: Il comando Distance misura la distanza euclidea (in linea retta) tra due punti cliccati e mostra il risultato nel terminale con 4 decimali. Clicca di nuovo dopo il risultato per concatenare una nuova misurazione dall'ultimo punto.
keywords: [CAD misura distanza, comando distance, misurazione punto a punto, distanza in linea retta, kulmanlab]
group: measure
order: 1
---

# Distance

Il comando `distance` misura la distanza in linea retta (euclidea) tra due punti cliccati e stampa il risultato nel terminale con 4 decimali. È uno dei tre comandi di misurazione — [Angle](../angle/) misura l'apertura angolare in un vertice, e [Area](../area/) misura l'area racchiusa e il perimetro di un poligono.

## Anatomia di una misurazione di distanza

```
  ● primo punto
   \
    \  linea di anteprima (in tempo reale)
     \
      ● secondo punto    →  terminale: "Distance: 12.3456"
```

- **Primo punto** — punto di origine della misurazione.
- **Secondo punto** — punto finale; il suo posizionamento stampa immediatamente il risultato.
- **Risultato** — mostrato nel terminale, non posizionato sul canvas.

## Misurare una distanza

1. Digita `distance` nel terminale o clicca il pulsante **Distance** nella barra degli strumenti.
2. **Clicca il primo punto**, oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
3. **Clicca il secondo punto** — la distanza misurata appare nel terminale. L'inserimento di coordinate funziona anche qui.
4. **Clicca di nuovo** (opzionale) per avviare una nuova misurazione. Il comando rimane attivo.

Premi `Escape` in qualsiasi momento per tornare al passo 2.

## Concatenamento delle misurazioni

Dopo che il risultato viene mostrato, cliccando si avvia subito la misurazione successiva — il punto cliccato diventa il nuovo primo punto. Questo permette di misurare una sequenza di distanze senza riattivare il comando.

## Distance vs Angle

| | Distance | Angle |
|---|---------|-------|
| Cosa misura | Lunghezza in linea retta | Angolo interno in un vertice |
| Numero di clic | 2 | 3 |
| Formato risultato | `12.3456` (unità) | `45.0000°` |
| Anteprima canvas | Linea dal primo punto al cursore | Due linee dal vertice al cursore |
| Ideale per | Lunghezza di un segmento o intervallo | Apertura angolare tra due elementi |

## Inserimento coordinate

Invece di cliccare, digita una posizione esatta per uno dei due punti:

1. Digita il valore X.
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per confermare.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Avvia inserimento coordinata X |
| `,` | Blocca X e passa all'inserimento Y |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma la coordinata digitata |
| `Escape` | Annulla e torna al passo 2 |

## Note

- I risultati vengono mostrati solo nel **terminale** — nulla viene aggiunto al disegno.
- Il risultato è espresso nelle stesse unità delle coordinate del disegno (nessuna conversione di unità).
- La precisione è sempre di 4 decimali.
