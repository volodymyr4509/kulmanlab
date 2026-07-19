---
title: Comando Trim — Tagliare Segmenti di Linea alle Intersezioni
description: Il comando Trim rimuove la porzione di una Linea tra due punti di intersezione adiacenti più vicini al cursore. Un'anteprima in rosso al passaggio del cursore mostra esattamente quale segmento verrà tagliato prima del clic. Trim funziona solo sulle entità Linea — non su archi, cerchi o polilinee.
keywords: [CAD comando trim, taglia linea CAD, taglia linea intersezione, anteprima trim hover, trim solo linea, kulmanlab]
group: edit
order: 8
---

# Trim

Il comando `trim` rimuove la porzione di una [Linea](../line/) che si trova tra due punti di intersezione adiacenti, dividendo la linea in uno o due segmenti più corti. Il segmento da tagliare è determinato dalla posizione del cursore — passa sul tratto da rimuovere e clicca per tagliarlo.

Trim funziona **solo sulle entità Linea**. Per archi, cerchi, polilinee e altri tipi di entità usa [Delete](../delete/) o la modifica con grip.

## Tagliare una linea

1. Digita `trim` nel terminale o clicca il pulsante **Trim** nella barra degli strumenti.
2. **Passa il cursore sul segmento di linea** che vuoi rimuovere — un'anteprima rossa evidenzia esattamente la porzione che verrà tagliata.
3. **Clicca** per rimuovere quel segmento.

Il comando rimane attivo dopo ogni taglio, quindi puoi continuare a passare il cursore e cliccare per tagliare altri segmenti. Premi **Esc** per uscire.

```
  Prima:                        Dopo il taglio del segmento centrale:

  ──────●──────●──────          ──────●          ●──────
      intersez  intersez            (parte sinistra)  (parte destra)
                                    (segmento centrale rimosso)
```

## Come viene determinato il segmento da tagliare

Il comando proietta la posizione del cursore sulla linea passata e trova tutti i punti di intersezione della linea con altre entità. Questi parametri di intersezione dividono la linea in segmenti. Il segmento il cui intervallo contiene la proiezione del cursore viene evidenziato e sarà rimosso al clic.

- Se il cursore è **prima della prima intersezione**: quella porzione iniziale della linea viene rimossa.
- Se il cursore è **tra due intersezioni**: quella porzione centrale viene rimossa; la linea si divide in due.
- Se il cursore è **dopo l'ultima intersezione**: quella porzione finale viene rimossa.
- Se la linea **non ha intersezioni** con nessun'altra entità: non viene mostrata nessuna anteprima e cliccare non fa nulla.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Esc` | Esce dalla modalità trim |

## Entità supportate

| Entità | Può essere tagliata? |
|--------|---------------------|
| Linea | Sì |
| Arco, Cerchio, Ellisse | No |
| Polilinea / Rettangolo | No |
| Testo, Spline, Quota, Leader | No |

Le entità usate come **bordi di taglio** possono essere di qualsiasi tipo — solo la linea da tagliare deve essere un'entità Linea.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Cosa fa | Rimuove un segmento di una linea | Allunga un endpoint di una linea fino a un bordo |
| Trigger | Passa il cursore sul segmento da tagliare | Passa il cursore vicino all'endpoint da estendere |
| Risultato | La linea si divide o si accorcia | L'endpoint della linea si sposta fino al bordo |
| Entrambi | Solo linee | Solo linee |
