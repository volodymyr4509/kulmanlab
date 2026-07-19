---
title: LayerMatch — Riassegna i Layer delle Entità a una Sorgente
description: Il comando LayerMatch riassegna il layer di una o più entità target per corrispondere al layer di un'entità sorgente che clicchi.
keywords: [layer match, corrispondenza layer CAD, riassegna layer kulmanlab, gestione layer CAD]
group: layer
order: 2
---

# LayerMatch

Il comando `LayerMatch` riassegna il layer delle entità selezionate per corrispondere al layer di un'entità sorgente che clicchi. È il modo più veloce per spostare un gruppo di oggetti sul layer corretto senza aprire il Gestore Layer.

## Flusso di lavoro

**Pre-seleziona, poi corrispondi**:

1. Seleziona le entità il cui layer vuoi cambiare.
2. Digita `LayerMatch` o clicca il pulsante **Layer Match** nella barra degli strumenti (icona pennello).
3. **Clicca l'oggetto sorgente** — quello il cui layer vuoi copiare.
4. Tutte le entità selezionate si spostano immediatamente sul layer dell'oggetto sorgente.

**Attiva, poi seleziona**:

1. Digita `LayerMatch` o clicca il pulsante nella barra degli strumenti senza nulla selezionato.
2. **Seleziona le entità target** — clicca per attivare/disattivare singole entità o trascina per selezionare per area.
3. Premi **Invio** o **Spazio** per confermare la selezione.
4. **Clicca l'oggetto sorgente** — il suo layer viene applicato a tutti i target.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Invio` / `Spazio` | Conferma la selezione target e avanza alla fase di pick sorgente |
| `Escape` | Reimposta — torna alla selezione target o annulla completamente |

## Dettagli di comportamento

- Solo la proprietà `layer` viene modificata — colore, tipo linea, peso linea e geometria rimangono intatti.
- L'oggetto sorgente stesso non viene modificato.
- Il comando termina dopo aver cliccato la sorgente.
- Cliccare sul canvas vuoto durante la fase di pick sorgente non fa nulla.
