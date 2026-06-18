---
sidebar_position: 2
title: "Comando Zoom In — Ingrandire la Finestra di 1,5× per Passo in KulmanLab CAD"
description: "Il comando Zoom In moltiplica il livello di zoom corrente per 1,5× ed esce immediatamente, centrato sul centro della finestra. Intervallo zoom 0,01–10.000. Usa la rotella del mouse per zoomare verso il cursore invece."
keywords: [CAD zoom in, ingrandire viewport, comando zoom CAD, passo zoom 1.5x, kulmanlab]
---

# Zoom In

Il comando `zoomin` moltiplica il livello di zoom corrente per **1,5×** ed esce immediatamente, centrato sul centro della finestra. È l'equivalente nella barra degli strumenti di un tick della rotella del mouse zoomato verso il centro dello schermo anziché verso il cursore.

## Eseguire lo zoom avanti

Clicca il pulsante **Zoom In** nella barra degli strumenti o digita `zoomin` nel terminale. Lo zoom viene applicato istantaneamente e il comando esce — nessun clic sul canvas richiesto.

## Come funziona il passo da 1,5×

| Zoom corrente | Dopo uno Zoom In |
|---------------|-----------------|
| 1,00× | 1,50× |
| 1,50× | 2,25× |
| 10,00× | 15,00× |
| 6.667× | 10.000× (limite massimo) |

Il livello di zoom è sempre mostrato nell'**angolo in basso a destra** del canvas accanto all'etichetta `zoom`. Il limite superiore è **10.000×**; ulteriori passi non hanno effetto.

## Zoom In dalla barra strumenti vs rotella del mouse

| | Pulsante Zoom In | Rotella del mouse |
|---|-----------------|------------------|
| Centro zoom | Centro della finestra | Posizione del cursore |
| Passo | 1,5× per clic | ~1,1× per tick |
| Attivazione richiesta | No | No — funziona sempre |
| Ideale per | Navigazione grossolana | Zoom preciso verso il cursore |

## Riferimento tastiera

Non esistono scorciatoie da tastiera per questo comando. Usa la rotella del mouse — funziona in qualsiasi momento senza attivare alcun comando.

## Comandi di visualizzazione correlati

| Comando | Cosa fa |
|---------|---------|
| [Zoom Out](./zoom-out) | Divide lo zoom per 1,5× per passo |
| [Fit](./fit) | Reimposta lo zoom per mostrare tutte le entità |
| [Pan](./pan) | Sposta la finestra senza zoomare |
