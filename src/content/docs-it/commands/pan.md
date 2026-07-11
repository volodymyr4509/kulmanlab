---
title: Comando Pan — Navigazione della Vista Clic-e-Trascina in KulmanLab CAD
description: Il comando Pan entra in una modalità di scorrimento persistente. Clicca e trascina ovunque sul canvas per spostare la vista senza modificare il livello di zoom. Il trascinamento con clic centrale funziona in qualsiasi momento senza attivare Pan.
keywords: [CAD pan viewport, comando pan, trascina per navigare, scorrimento canvas CAD, navigazione viewport, kulmanlab]
group: navigate
order: 1
---

# Pan

Il comando `pan` entra in una modalità di trascinamento persistente — clicca e trascina ovunque sul canvas per spostare la vista. Il livello di zoom rimane invariato. La modalità Pan rimane attiva finché non premi `Esc`, quindi puoi trascinare più volte in un'unica attivazione.

## Spostare la vista

1. Digita `pan` nel terminale o clicca il pulsante **Pan** nella barra degli strumenti.
2. **Clicca e trascina** ovunque sul canvas per spostare la vista.
3. Rilascia e trascina di nuovo tutte le volte necessarie.
4. Premi `Esc` per uscire dalla modalità pan.

## Trascinamento con clic centrale — pan senza attivare il comando

Il modo più rapido di fare pan: **tieni premuto il tasto centrale del mouse e trascina** in qualsiasi momento, anche mentre un altro comando è attivo. Non è necessaria l'attivazione del comando. Rilasciare il tasto centrale ritorna allo stato precedente.

## Controlli Pan vs Zoom

| Azione | Effetto | Richiede modalità Pan? |
|--------|---------|----------------------|
| Trascinamento clic sinistro (modalità Pan) | Sposta il viewport | Sì |
| Trascinamento clic centrale | Sposta il viewport | No — funziona sempre |
| Rotella di scorrimento | Zoom verso il cursore | No — funziona sempre |
| Doppio clic tasto centrale | Adatta tutte le entità | No — funziona sempre |
| [Zoom In](../zoom-in/) / [Zoom Out](../zoom-out/) | Aumenta/diminuisce zoom di 1,5× | No |
| [Fit](../fit/) | Adatta tutte le entità alla vista | No |

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Esc` | Esce dalla modalità pan |

## Suggerimenti

- Usa la rotella di scorrimento per zoomare su un'area target, poi usa Pan per regolare la posizione.
- **Doppio clic sul tasto centrale del mouse** attiva [Fit](../fit/) istantaneamente — il modo più rapido per reimpostare una vista persa.
- Se sei nel mezzo di un comando (es. posizionamento di un endpoint di linea), trascina con il clic centrale per fare pan senza annullare il comando.
