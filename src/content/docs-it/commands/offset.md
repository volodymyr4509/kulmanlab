---
title: Comando Offset — Creare Copie Parallele a Distanza Fissa
description: Il comando Offset crea una copia parallela di una Linea, Cerchio, Arco, Ellisse o Polilinea a una distanza digitata. La distanza viene inserita una volta e riutilizzata per più offset. Un clic sul lato determina in quale direzione appare la copia. Cinque tipi di entità supportati.
keywords: [CAD comando offset, copia parallela CAD, offset linea CAD, offset cerchio CAD, offset polilinea CAD, offset concentrico, kulmanlab]
group: edit
order: 10
---

# Offset

Il comando `offset` crea una copia parallela di un'entità a una distanza perpendicolare fissa. Digiti la distanza una volta, poi clicchi le entità e scegli un lato — il comando rimane pronto alla stessa distanza per consentirti di scostare più oggetti in una sola sessione.

Tipi di entità supportati: **Linea, Cerchio, Arco, Ellisse, Polilinea** (inclusi i Rettangoli).

## Utilizzo dell'offset

1. Digita `offset` nel terminale o clicca il pulsante **Offset** nella barra degli strumenti.
2. **Digita la distanza di offset** e premi **Invio** o **Spazio**.
3. **Clicca un'entità** da scostare — se l'entità non è di un tipo supportato, appare un messaggio di errore e puoi cliccare un'entità diversa.
4. **Sposta il cursore** sul lato dove deve apparire la copia — un'anteprima live segue.
5. **Clicca** per posizionare la copia in offset.

Dopo ogni posizionamento il comando torna al passo 3 alla **stessa distanza**, pronto per il prossimo offset. Premi **Esc** per tornare al passo di inserimento distanza.

```
  Distanza: 10

  ─────────────────    ← linea originale
  ─────────────────    ← copia in offset (10 unità sotto)
```

## Comportamento dell'offset per entità

| Entità | Come viene calcolato l'offset |
|--------|------------------------------|
| **Linea** | Linea parallela spostata perpendicolarmente alla direzione originale |
| **Cerchio** | Cerchio concentrico; clic fuori → raggio maggiore, dentro → raggio minore |
| **Arco** | Arco concentrico a un nuovo raggio; lo stesso arco angolare viene conservato |
| **Ellisse** | Entrambi i semi-assi aumentati o diminuiti della stessa distanza |
| **Polilinea** | Ogni segmento scostato indipendentemente; i segmenti offset adiacenti vengono uniti agli angoli |

Per **Cerchio**, **Arco** ed **Ellisse**: se l'offset verso l'interno ridurrebbe qualsiasi raggio o semi-asse a zero o meno, l'offset non viene applicato.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiunge cifra al valore di distanza |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` / `Spazio` | Conferma la distanza digitata e avanza alla selezione entità |
| `Esc` | Ripristina al passo di inserimento distanza |

## Nota sul flusso di lavoro

La distanza rimane impostata finché non premi **Esc**. Questo rende efficiente scostare molte entità alla stessa spaziatura — digita la distanza una volta, poi clicca e scegli il lato per ogni entità a turno.

## Offset vs Copia

| | Offset | Copia |
|---|--------|-------|
| Spostamento | Perpendicolare alla geometria dell'entità | Vettore arbitrario (base → destinazione) |
| Entità supportate | Linea, Cerchio, Arco, Ellisse, Polilinea | Tutti i tipi di entità |
| Inserimento distanza | Digitato prima di selezionare l'entità | Digitato o cliccato dopo la selezione |
| Ideale per | Linee parallele, cerchi concentrici, percorsi interni/esterni | Posizionare duplicati in posizioni arbitrarie |
