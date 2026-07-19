---
title: LayerIsolate — Congela Tutti i Layer Tranne quelli Selezionati
description: Il comando LayerIsolate congela ogni layer tranne quelli usati dagli oggetti selezionati, permettendoti di concentrarti su geometria specifica senza eliminare nulla.
keywords: [layer isolate, congela layer CAD, isola layer kulmanlab, gestione layer CAD]
group: layer
order: 3
---

# LayerIsolate

Il comando `LayerIsolate` congela ogni layer **tranne** quelli appartenenti agli oggetti selezionati. Usalo per concentrarti rapidamente su geometria specifica senza nascondere o eliminare nulla in modo permanente — scongela con [LayerUnfreezeAll](../layer-unfreeze-all/) quando hai finito.

## Due modi per iniziare

**Pre-seleziona, poi isola** — seleziona le entità prima, poi attiva:

1. Seleziona una o più entità sul canvas.
2. Digita `LayerIsolate` nel terminale o clicca il pulsante **Layer Isolate** nella barra degli strumenti.
3. I layer delle entità selezionate rimangono visibili; tutti gli altri vengono congelati immediatamente.

**Attiva, poi seleziona**:

1. Digita `LayerIsolate` o clicca il pulsante nella barra degli strumenti.
2. **Seleziona gli oggetti** — clicca singole entità o trascina per selezionare per area.
3. Premi **Invio** o **Spazio** per confermare — l'isolamento viene applicato.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Invio` / `Spazio` | Conferma la selezione e applica l'isolamento |
| `Escape` | Annulla e deseleziona |

## Dettagli di comportamento

- Tutti i layer che **non** sono rappresentati nella selezione vengono impostati come congelati.
- I layer che **sono** rappresentati rimangono non congelati, anche se erano congelati prima.
- La selezione viene azzerata dopo l'applicazione dell'isolamento.
- Il comando termina automaticamente dopo l'applicazione.

## Annullare l'isolamento

Esegui [LayerUnfreezeAll](../layer-unfreeze-all/) per ripristinare tutti i layer a visibile in un solo passaggio.
