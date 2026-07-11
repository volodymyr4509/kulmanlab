---
title: Comando Align — Traslare, Ruotare e Scalare Entità con Coppie di Punti in KulmanLab CAD
description: Il comando Align riposiziona le entità selezionate usando una o due coppie di punti origine/destinazione — combinando traslazione, rotazione e una scala uniforme facoltativa in un'unica operazione. Funziona come un Move + Rotate + Scale combinati.
keywords: [CAD comando align, allinea entità CAD, trasla ruota scala, allineamento a coppie di punti, equivalente ALIGN di AutoCAD, kulmanlab]
group: edit
order: 6
---

# Align

Il comando `align` riposiziona le entità selezionate usando una o due coppie di punti origine/destinazione. Con una coppia si comporta esattamente come [Move](../move/) (solo traslazione). Con due coppie ruota anche la selezione in modo che la direzione origine-verso-origine corrisponda alla direzione destinazione-verso-destinazione, e può facoltativamente scalarla in modo che la lunghezza del segmento origine corrisponda a quella del segmento destinazione — traslazione, rotazione e scala in un'unica operazione.

## Due modi per iniziare

**Preseleziona, poi allinea** — seleziona le entità prima, poi attiva:

1. Seleziona una o più entità sul canvas.
2. Digita `align` nel terminale o clicca il pulsante **Align** nella barra degli strumenti.
3. **Clicca il primo punto origine (S1)**, poi **il primo punto destinazione (D1)**.
4. **Clicca il secondo punto origine (S2)**, oppure premi **Invio** per applicare subito un allineamento di sola traslazione.
5. **Clicca il secondo punto destinazione (D2)**.
6. Rispondi alla richiesta di scala: premi **Y** per scalare, oppure **N** / **Invio** per mantenere la dimensione originale.

**Attiva, poi seleziona** — avvia il comando senza nulla selezionato:

1. Digita `align` o clicca il pulsante della barra degli strumenti.
2. **Seleziona gli oggetti** — clicca per alternare singole entità, o trascina per selezionare per area.
3. Premi **Invio** o **Spazio** per confermare la selezione.
4. Continua con S1 → D1 → S2 → D2 → richiesta di scala come sopra.

> Il terminale ha bisogno solo delle lettere sufficienti a essere inequivocabile — digitare `al` e premere **Invio** attiva Align direttamente, poiché nessun altro comando inizia con quelle due lettere.

## Anatomia di un allineamento

```
  Punti origine (sulle entità):        Punti destinazione:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Risultato: la selezione viene traslata in modo che S1 finisca su
  D1, poi ruotata attorno a D1 in modo che la direzione S1→S2
  corrisponda alla direzione D1→D2 — e, se scegli di scalare,
  ridimensionata in modo che |S1S2| diventi |D1D2|.
```

Un'anteprima fantasma segue il cursore a ogni passo: un'anteprima di spostamento durante il posizionamento di D1, poi un'anteprima ruotata (tratteggiata) una volta che D2 viene posizionato.

## Allineamento a un punto (solo traslazione)

Dopo aver posizionato D1, premi **Invio** invece di cliccare un secondo punto origine. La selezione viene traslata del vettore S1→D1 — senza rotazione né scala — identico a un [Move](../move/) usando S1 come punto base e D1 come destinazione.

## Allineamento a due punti (traslazione + rotazione + scala facoltativa)

Una volta posizionati sia S2 che D2:

- **Angolo di rotazione** — la differenza tra la direzione destinazione (`D1 → D2`) e la direzione origine (`S1 → S2`).
- **Richiesta di scala** — appare `scale objects to alignment points? [Yes/No] <N>`, con **No** come impostazione predefinita:
  - Premi **Y** per scalare anche la selezione uniformemente attorno a D1, in modo che la distanza `S1–S2` diventi la distanza `D1–D2`.
  - Premi **N** o **Invio** per mantenere la dimensione originale — vengono applicate solo traslazione e rotazione.

Premere un tasto alla richiesta di scala applica l'allineamento immediatamente — non c'è un passaggio di conferma separato dopo aver scelto Sì o No.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Invio` / `Spazio` | Conferma la selezione e avanza alla fase S1 |
| `Invio` (al passo S2) | Salta la rotazione — applica un allineamento di sola traslazione usando S1 e D1 |
| `Y` | Applica l'allineamento con scala |
| `N` / `Invio` (alla richiesta di scala) | Applica l'allineamento senza scala |
| `Esc` | Durante il posizionamento dei punti: scarta i punti e torna alla fase di selezione; senza nulla selezionato: annulla il comando |

## Selezione durante il comando

Quando il comando inizia nella fase di selezione:

| Metodo | Comportamento |
|--------|--------------|
| **Clic** | Alterna l'entità sotto il cursore nella/fuori dalla selezione |
| **Trascina a destra** (stretta) | Aggiunge le entità completamente dentro il riquadro |
| **Trascina a sinistra** (incrociante) | Aggiunge le entità che intersecano il bordo del riquadro |
| **Invio** / **Spazio** | Conferma la selezione e passa alla fase S1 |

## Dopo l'allineamento

Le entità allineate rimangono selezionate nella nuova posizione, e il comando termina automaticamente — esegui di nuovo **Align**, oppure passa a [Move](../move/), [Rotate](../rotate/) o [Scale](../scale/) senza ri-selezionare.

## Align vs Move

| | Align | Move |
|---|-------|------|
| Coppie di punti | 1 (solo traslazione) o 2 (traslazione + rotazione + scala) | 1 (solo traslazione) |
| Rotazione | Sì, con una seconda coppia di punti | No |
| Scala | Facoltativa, con una seconda coppia di punti | No |
| Ideale per | Adattare una forma su un'altra usando punti di riferimento | Riposizionamento semplice |

## Entità supportate

Align funziona su tutti i tipi di entità supportati da Move, Rotate e Scale — le stesse operazioni `translate`, `rotate` e `scale` usate da quei comandi vengono applicate in sequenza, quindi nessuna è esclusa.
