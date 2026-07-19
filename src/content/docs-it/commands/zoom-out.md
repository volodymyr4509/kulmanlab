---
title: "Zoom Out — Ridurre lo Zoom della Finestra di 1,5× per Passo"
description: "Il comando Zoom Out divide il livello di zoom corrente per 1,5× ed esce immediatamente, centrato sul centro della finestra. Usa la rotella del mouse per ridurre lo zoom verso il cursore per un controllo più fine."
keywords: [CAD zoom out, ridurre zoom viewport, comando zoom out, panoramica CAD, passo zoom 1.5x, kulmanlab]
group: navigate
order: 3
---

# Zoom Out

Il comando `zoomout` divide il livello di zoom corrente per **1,5×** (equivalente a moltiplicare per ~0,667) ed esce immediatamente, centrato sul centro della finestra. È l'inverso di [Zoom In](../zoom-in/).

## Eseguire lo zoom indietro

Clicca il pulsante **Zoom Out** nella barra degli strumenti o digita `zoomout` nel terminale. Lo zoom viene applicato istantaneamente e il comando esce — nessun clic sul canvas richiesto.

## Come funziona il passo da 1,5×

| Zoom corrente | Dopo uno Zoom Out |
|---------------|------------------|
| 1,50× | 1,00× |
| 2,25× | 1,50× |
| 10,00× | 6,67× |
| 0,015× | 0,01× (limite minimo) |

Il livello di zoom è sempre mostrato nell'**angolo in basso a destra** del canvas. Il limite inferiore è **0,01×**; ulteriori passi non hanno effetto.

## Zoom Out dalla barra strumenti vs rotella del mouse

| | Pulsante Zoom Out | Rotella del mouse |
|---|------------------|------------------|
| Centro zoom | Centro della finestra | Posizione del cursore |
| Passo | 1,5× per clic | ~1,1× per tick |
| Attivazione richiesta | No | No — funziona sempre |
| Ideale per | Tornare indietro per vedere più contesto | Zoom indietro fluido ancorato al cursore |

## Riferimento tastiera

Non esistono scorciatoie da tastiera per questo comando. Usa la rotella del mouse — funziona in qualsiasi momento senza attivare alcun comando.

## Comandi di visualizzazione correlati

| Comando | Cosa fa |
|---------|---------|
| [Zoom In](../zoom-in/) | Moltiplica lo zoom per 1,5× per passo |
| [Fit](../fit/) | Reimposta lo zoom per mostrare tutte le entità |
| [Pan](../pan/) | Sposta la finestra senza zoomare |
