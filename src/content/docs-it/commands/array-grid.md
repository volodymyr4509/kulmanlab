---
title: Comando Array Grid — Ripeti Entità in Righe e Colonne
description: Il comando Array Grid crea una griglia rettangolare di copie dalle entità selezionate — digita il numero di righe, colonne e la spaziatura tra loro direttamente nel terminale, senza dover cliccare punti.
keywords: [comando array CAD, arraygrid, array rettangolare CAD, motivo a griglia CAD, ripeti entità CAD, copia array CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

Il comando `ArrayGrid` crea una griglia rettangolare di copie dalle entità selezionate — inserisci il numero di righe, il numero di colonne e la spaziatura tra loro, tutto digitato nel terminale. La selezione originale occupa la cella riga 0, colonna 0; ogni altra cella è una copia traslata.

## Due modi per iniziare

**Pre-seleziona, poi array** — seleziona prima le entità, poi attiva:

1. Seleziona una o più entità sul canvas.
2. Digita `arraygrid` nel terminale (basta `arr` — è univoco) o clicca il pulsante **Array Grid** nella barra degli strumenti.
3. Digita il numero di **righe** e premi **Invio**.
4. Digita il numero di **colonne** e premi **Invio**.
5. Digita la **spaziatura tra le righe** e premi **Invio**.
6. Digita la **spaziatura tra le colonne** e premi **Invio** — la griglia viene creata immediatamente.

**Attiva, poi seleziona** — avvia il comando senza nulla selezionato:

1. Digita `arraygrid` o clicca il pulsante nella barra degli strumenti.
2. **Seleziona gli oggetti** — clicca per attivare/disattivare singole entità, o trascina per selezionare per area.
3. Premi **Invio** o **Spazio** per confermare la selezione.
4. Continua con righe → colonne → spaziatura righe → spaziatura colonne come sopra.

```
  2 righe x 3 colonne:

  [B] [B] [B]   <- riga 1 (copie traslate)
  [A] [A] [A]   <- riga 0: selezione originale, copie verso destra
```

> Il terminale ha bisogno solo delle lettere sufficienti per essere univoco — digitare `arr` e premere **Invio** attiva direttamente Array Grid, poiché nessun altro nome di comando inizia con quelle tre lettere (Arc, Area, Align e Angle divergono prima).

## Righe, colonne e spaziatura

| Prompt | Accetta | Note |
|--------|---------|------|
| Righe | Numeri interi positivi (1, 2, 3…) | Solo cifre — nessun punto decimale o segno |
| Colonne | Numeri interi positivi (1, 2, 3…) | Solo cifre — nessun punto decimale o segno |
| Spaziatura righe | Decimale con segno (es. `10`, `-5.5`) | Distanza tra le righe; negativo inverte la direzione |
| Spaziatura colonne | Decimale con segno (es. `10`, `-5.5`) | Distanza tra le colonne; negativo inverte la direzione |

Con 1 riga e 1 colonna, non vengono create copie — il comando termina senza modificare il disegno.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Invio` / `Spazio` | Conferma la selezione e avanza al prompt delle righe |
| `0`–`9` | Inserisce cifre per righe o colonne |
| `0`–`9`, `.`, `-` | Inserisce cifre per la spaziatura righe/colonne (`-` solo come primo carattere) |
| `Backspace` | Elimina l'ultimo carattere digitato del prompt corrente |
| `Invio` | Conferma il prompt corrente e avanza al successivo |
| `Escape` | Cancella i valori di righe/colonne/spaziatura digitati e torna alla fase di selezione |

## Selezione durante il comando

| Metodo | Comportamento |
|--------|--------------|
| **Clic** | Attiva/disattiva l'entità sotto il cursore nella/dalla selezione |
| **Trascina a destra** (rigoroso) | Aggiunge entità completamente all'interno del riquadro |
| **Trascina a sinistra** (incrocio) | Aggiunge entità che intersecano il bordo del riquadro |
| **Invio** / **Spazio** | Conferma la selezione e avanza al prompt delle righe |

## Dopo l'array

Le nuove copie vengono aggiunte al disegno e il comando termina — la selezione originale viene azzerata. Esegui di nuovo **Array Grid**, oppure avvia un nuovo comando.

## Array Grid vs Copy

| | Array Grid | Copy |
|---|-----------|------|
| Selezione punti | Nessuna — righe, colonne e spaziatura sono digitate | Punto base e destinazione sono cliccati (o digitati) |
| Copie create | Righe × colonne − 1 | Esattamente 1 per operazione di copia |
| Disposizione | Griglia rettangolare regolare | Ovunque, a qualsiasi sfasamento |
| Ideale per | Ripetere un'unità in un motivo regolare (fori, piastrelle, fissaggi) | Un singolo duplicato in una posizione arbitraria |

## Entità supportate

Array Grid funziona su tutti i tipi di entità. Tutte le entità implementano `translate(dx, dy)` internamente, la stessa operazione usata da [Copy](../copy/) e [Move](../move/), quindi nessuna è esclusa.
