---
sidebar_position: 4
title: Comando Mirror — Riflettere Entità rispetto a un Asse in KulmanLab CAD
description: Il comando Mirror riflette le entità selezionate rispetto a una linea asse definita da due clic. Gli originali vengono sempre conservati — Mirror crea nuove copie riflesse. L'asse speculare può avere qualsiasi angolo e si aggancia agli incrementi di 45°.
keywords: [CAD comando mirror, rifletti entità CAD, simmetria mirror CAD, capovolgi oggetti CAD, asse speculare CAD, kulmanlab]
---

# Mirror

Il comando `mirror` crea copie riflesse delle entità selezionate rispetto a un asse in due punti. Gli originali vengono **sempre conservati** — a differenza di [Move](../move/) o [Rotate](../rotate/), Mirror non modifica mai le entità esistenti; aggiunge solo nuove entità.

## Due modi per iniziare

**Preseleziona, poi rifletti** — seleziona le entità prima, poi attiva:

1. Seleziona una o più entità sul canvas.
2. Digita `mirror` nel terminale o clicca il pulsante **Mirror** nella barra degli strumenti.
3. **Clicca il primo punto** dell'asse speculare, oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
4. **Clicca il secondo punto** — le copie riflesse vengono posizionate e il comando termina. Anche qui è disponibile l'inserimento coordinate.

**Attiva, poi seleziona** — avvia il comando senza nulla selezionato:

1. Digita `mirror` o clicca il pulsante della barra degli strumenti.
2. **Seleziona gli oggetti** — clicca per alternare, o trascina per selezionare per area.
3. Premi **Invio** o **Spazio** per confermare la selezione.
4. **Clicca il primo punto**, poi **clicca il secondo punto** dell'asse speculare (inserimento coordinate disponibile in entrambi i passi).

```
  Originale:        Asse speculare:      Risultato:
                    |
  [entità A]   →   |    →    [entità A] + [A riflessa]
                    |
```

Un'anteprima live delle copie riflesse segue il cursore mentre posizioni il secondo punto dell'asse.

## Asse speculare

L'asse è una linea infinita attraverso i due punti cliccati. Può avere qualsiasi angolo:

- Sposta il cursore vicino a un **asse di aggancio a 45°** (0°, 45°, 90°, 135°, …) e l'asse si blocca a quell'angolo — utile per riflessioni orizzontali, verticali o diagonali nette.
- Clicca lontano dalla zona di aggancio per un asse ad angolo libero.

## Inserimento coordinate

In entrambi i passi del punto asse, digita una posizione esatta invece di cliccare:

1. Digita il valore X.
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per confermare.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Invio` / `Spazio` | Conferma la selezione |
| `0`–`9`, `.`, `-` | Inizia l'inserimento coordinata X |
| `,` | Blocca X e passa all'inserimento Y |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma la coordinata digitata |
| `Esc` | Annulla e ripristina |

## Selezione durante il comando

| Metodo | Comportamento |
|--------|--------------|
| **Clic** | Alterna l'entità sotto il cursore |
| **Trascina a destra** (stretta) | Aggiunge le entità completamente dentro il riquadro |
| **Trascina a sinistra** (incrociante) | Aggiunge le entità che intersecano il riquadro |
| **Invio** / **Spazio** | Conferma la selezione |

## Cosa viene riflesso

Tutti i tipi di entità sono supportati. La geometria viene riflessa rispetto all'asse matematicamente:

| Entità | Cosa cambia |
|--------|------------|
| Linea | Entrambi gli endpoint riflessi |
| Cerchio | Centro riflesso; raggio invariato |
| Arco | Centro riflesso; angoli di inizio e fine ricalcolati rispetto all'asse |
| Ellisse | Centro riflesso; direzione asse maggiore capovolta rispetto all'asse |
| Polilinea / Rettangolo | Ogni vertice riflesso |
| Testo | Punto di ancoraggio riflesso; la stringa di testo **non** viene invertita |
| Spline | Tutti i vertici di controllo / punti di adattamento riflessi |

## Mirror vs Copia

| | Mirror | Copia |
|---|--------|-------|
| Originali | Sempre conservati | Sempre conservati |
| Posizione nuova entità | Riflessa rispetto a un asse | Spostata da un vettore di traslazione |
| Ideale per | Design simmetrici, elementi bilaterali | Geometria ripetuta in qualsiasi direzione |
