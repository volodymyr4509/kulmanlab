---
title: Scale — Ridimensionare Entità Attorno a un Punto Base
description: Il comando Scale ridimensiona le entità selezionate uniformemente per un fattore digitato attorno a un punto base fisso. Il fattore viene sempre inserito da tastiera — non esiste clic-per-impostare-scala. Un fattore maggiore di 1 ingrandisce; minore di 1 riduce. Tutti i tipi di entità sono supportati.
keywords: [CAD comando scale, ridimensiona entità CAD, scala oggetti CAD, scala uniforme CAD, fattore scala CAD, ingrandisci riduci CAD, kulmanlab]
group: edit
order: 5
---

# Scale

Il comando `scale` ridimensiona le entità selezionate uniformemente attorno a un punto base. Tutte le distanze dal punto base vengono moltiplicate per il fattore di scala — un fattore di `2` raddoppia tutte le dimensioni, `0.5` le dimezza. Il fattore viene sempre inserito digitandolo; non esiste clic-per-impostare-scala.

## Due modi per iniziare

**Preseleziona, poi scala** — seleziona le entità prima, poi attiva:

1. Seleziona una o più entità sul canvas.
2. Digita `scale` nel terminale o clicca il pulsante **Scale** nella barra degli strumenti.
3. **Clicca il punto base** — il punto fisso che non si sposta durante la scalatura. Oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
4. **Digita il fattore di scala** e premi **Invio**.

**Attiva, poi seleziona** — avvia il comando senza nulla selezionato:

1. Digita `scale` o clicca il pulsante della barra degli strumenti.
2. **Seleziona gli oggetti** — clicca per alternare, o trascina per selezionare per area.
3. Premi **Invio** o **Spazio** per confermare la selezione.
4. **Clicca il punto base** (inserimento coordinate disponibile), poi digita il fattore.

```
  Base ●                Base ●
        [entità]   →          [entità più grande]
  fattore = 2 → le distanze da ● vengono raddoppiate
```

## Digitare il fattore di scala

Dopo che il punto base è posizionato il terminale mostra `inserisci fattore di scala:` e attende l'input da tastiera:

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiunge cifra al fattore |
| `-` | Fattore negativo (solo primo carattere — inverte poi scala) |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` | Applica la scala al fattore digitato |

Il fattore deve essere diverso da zero. Valori comuni:

| Fattore | Effetto |
|---------|---------|
| `2` | Raddoppia tutte le dimensioni |
| `0.5` | Dimezza tutte le dimensioni |
| `1.5` | Aumenta del 50% |
| `-1` | Specchia rispetto al punto base (equivale a una rotazione di 180°) |

Non c'è anteprima live durante la digitazione — il risultato scalato appare solo dopo aver premuto **Invio**.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Invio` / `Spazio` | Conferma la selezione |
| `0`–`9`, `.`, `-` | Inizia l'inserimento coordinata X (fase punto base), o fattore di scala (fase fattore) |
| `,` | Blocca X e passa all'inserimento Y (fase punto base) |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma la coordinata o applica la scala |
| `Esc` | Annulla e ripristina |

## Cosa viene scalato

Tutti i tipi di entità sono supportati. Ogni entità scala la sua geometria relativa al punto base:

| Entità | Cosa cambia |
|--------|------------|
| Linea | Entrambi gli endpoint scalati dal punto base |
| Cerchio | Centro scalato dal punto base; raggio moltiplicato per il fattore |
| Arco | Centro scalato; raggio moltiplicato per il fattore; angoli invariati |
| Ellisse | Centro scalato; entrambe le lunghezze dei semi-assi moltiplicate per il fattore |
| Polilinea / Rettangolo | Ogni vertice scalato dal punto base |
| Testo | Punto di ancoraggio scalato; altezza moltiplicata per il fattore |
| Spline | Tutti i vertici di controllo / punti di adattamento scalati |
