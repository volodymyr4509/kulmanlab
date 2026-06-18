---
sidebar_position: 2
title: Comando Rotate — Ruotare Entità Attorno a un Punto Base in KulmanLab CAD
description: Il comando Rotate ruota le entità selezionate attorno a un punto base scelto. L'angolo può essere digitato con precisione o impostato cliccando — la direzione del cursore dal punto base al clic determina l'angolo. Gli angoli positivi sono in senso antiorario nelle coordinate DXF.
keywords: [CAD comando rotate, ruota entità CAD, ruota oggetti angolo, rotazione antioraria CAD, angolo digitato rotate, kulmanlab]
---

# Rotate

Il comando `rotate` ruota le entità selezionate attorno a un punto base. Specifica l'angolo di rotazione digitando un numero in gradi o cliccando — l'angolo viene calcolato dalla direzione tra il punto base e la posizione del clic.

## Due modi per iniziare

**Preseleziona, poi ruota** — seleziona le entità prima, poi attiva:

1. Seleziona una o più entità sul canvas.
2. Digita `rotate` nel terminale o clicca il pulsante **Rotate** nella barra degli strumenti.
3. **Clicca il punto base** — il centro di rotazione. Oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
4. **Digita un angolo e premi Invio**, oppure **clicca** per impostare l'angolo dalla direzione del cursore.

**Attiva, poi seleziona** — avvia il comando senza nulla selezionato:

1. Digita `rotate` o clicca il pulsante della barra degli strumenti.
2. **Seleziona gli oggetti** — clicca per alternare, o trascina per selezionare per area.
3. Premi **Invio** o **Spazio** per confermare la selezione.
4. **Clicca il punto base** (inserimento coordinate disponibile), poi imposta l'angolo.

```
  Prima:             Dopo (rotazione 90° attorno a ●):
                        ╔══╗
  ●  [entità]    →   ● ║    ║
                        ╚══╝
```

Un'anteprima fantasma live delle entità ruotate segue l'angolo del cursore dopo che il punto base è impostato.

## Impostare l'angolo

**Angolo digitato** — digita un numero (in gradi) in qualsiasi momento dopo che il punto base è posizionato. L'anteprima si aggancia all'angolo digitato mentre continui ad aggiustare prima di premere Invio.

**Angolo cliccato** — se nessun valore digitato è presente, cliccare imposta l'angolo uguale a `atan2(cursoreY − baseY, cursoreX − baseX)` — la direzione dal punto base al clic, in gradi.

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiunge cifra al valore dell'angolo |
| `-` | Angolo negativo (solo primo carattere) |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` | Applica la rotazione all'angolo digitato |

## Direzione dell'angolo

Gli angoli seguono la **convenzione DXF**:

- I valori **positivi** ruotano **in senso antiorario** nelle coordinate del disegno (Y verso l'alto).
- Sullo schermo, dove l'asse Y è invertito (Y verso il basso), gli angoli positivi appaiono **in senso orario**.

Valori comuni: `90` = quarto di giro, `180` = mezzo giro, `-90` = quarto di giro opposto.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Invio` / `Spazio` | Conferma la selezione |
| `0`–`9`, `.`, `-` | Inizia l'inserimento coordinata X (fase punto base), o valore angolo (fase angolo) |
| `,` | Blocca X e passa all'inserimento Y (fase punto base) |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma la coordinata o applica la rotazione |
| `Esc` | Annulla e ripristina |

## Selezione durante il comando

| Metodo | Comportamento |
|--------|--------------|
| **Clic** | Alterna l'entità sotto il cursore |
| **Trascina a destra** (stretta) | Aggiunge le entità completamente dentro il riquadro |
| **Trascina a sinistra** (incrociante) | Aggiunge le entità che intersecano il riquadro |
| **Invio** / **Spazio** | Conferma la selezione |

## Entità supportate

Rotate funziona su tutti i tipi di entità. La geometria di ogni entità viene ruotata attorno al punto base — ad esempio, un Cerchio sposta il suo centro mentre il raggio rimane lo stesso; un Arco sposta il suo centro e aggiusta gli angoli di inizio e fine della quantità di rotazione; un'entità Testo sposta il suo punto di ancoraggio e aggiunge l'angolo alla sua proprietà Grado di Rotazione.
