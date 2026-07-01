---
sidebar_position: 1
title: Match Properties — Copiare Proprietà delle Entità in KulmanLab CAD
description: Il comando MatchProperties copia colore, livello e altre proprietà condivise da un'entità sorgente a una o più entità di destinazione. Corrisponde alle proprietà nello stesso modo degli strumenti CAD desktop.
keywords: [match properties CAD, copia proprietà entità, MATCHPROP, corrispondi livello colore, trasferisci proprietà, kulmanlab match properties, vernice proprietà, copia livello CAD]
---

# Match Properties

Il comando `MatchProperties` copia **proprietà visive e di livello** da un'entità sorgente a una o più entità di destinazione. Vengono trasferite solo le proprietà condivise tra i tipi di entità sorgente e destinazione — la geometria non viene mai modificata.

## Come attivarlo

Clicca il pulsante **Match Properties** nella barra degli strumenti (icona rullo di vernice) nel pannello Stile, oppure digita `MatchProperties` nel terminale.

## Flusso di lavoro

**Attiva prima, poi seleziona la sorgente:**

1. Digita `MatchProperties` o clicca il pulsante della barra degli strumenti senza nulla preselezionato.
2. **Clicca l'entità sorgente** — quella le cui proprietà vuoi copiare.
3. **Clicca ogni entità di destinazione** per applicare le proprietà sorgente. Puoi cliccare più entità una alla volta.
4. Per applicare a un gruppo contemporaneamente, **trascina un riquadro di selezione** sulle destinazioni.
5. Premi **Invio** o **Esc** per terminare.

**Preseleziona la sorgente, poi attiva:**

1. Clicca una singola entità per selezionarla.
2. Attiva `MatchProperties`. L'entità selezionata viene usata come sorgente automaticamente.
3. Clicca le entità di destinazione o trascina per selezionare, poi **Invio** o **Esc** per terminare.

## Quali proprietà vengono copiate

MatchProperties copia le proprietà che appartengono a una classe base condivisa tra sorgente e destinazione. Come minimo, **tutti i tipi di entità** condividono queste proprietà:

| Proprietà | Descrizione |
|-----------|-------------|
| **Colore** | L'indice di colore dell'entità (incluso "Per Livello" / "Per Blocco") |
| **Livello** | Il livello a cui appartiene l'entità |

Quando sorgente e destinazione sono dello stesso tipo di entità (es. entrambe sono quote), vengono copiate anche proprietà aggiuntive specifiche del tipo — ad esempio altezza del testo, dimensione della freccia, impostazioni delle linee di estensione.

La geometria (coordinate, raggio, lunghezza, ecc.) non viene mai influenzata.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Invio` / `Spazio` | Conferma la selezione per area o termina il comando |
| `Esc` | Termina l'applicazione (se la sorgente è impostata) o annulla |

## Dettagli di comportamento

- L'entità sorgente non viene mai modificata.
- Ogni clic o selezione per trascino applica immediatamente le proprietà sorgente — non c'è nessun passo di conferma.
- La selezione per area segue le regole standard: trascina **a destra** per la selezione stretta (completamente racchiusa), trascina **a sinistra** per la selezione incrociante (qualsiasi intersezione).
- Cliccare l'entità sorgente come destinazione viene ignorato.
- Per le entità con testo (**Testo**, **Quote**, **Multileader**), viene copiata solo l'altezza del testo — il font, il grassetto, il corsivo e le altre impostazioni di stile del testo non vengono applicati.

## Comandi correlati

- [LayerMatch](./layer-match) — sposta le entità selezionate sullo stesso livello di una sorgente (solo proprietà del livello)
- [LayerMakeCurrent](./layer-make-current) — imposta il livello di disegno attuale da un'entità cliccata
