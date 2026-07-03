---
sidebar_position: 4
title: Comando Fit — Inquadra Tutte le Entità nella Viewport con un Clic in KulmanLab CAD
description: Il comando Fit calcola il riquadro di delimitazione di tutte le entità e regola zoom e pan così che ogni entità sia visibile con un piccolo margine. Il doppio clic con il tasto centrale del mouse attiva Fit senza aprire il comando.
keywords: [CAD adatta vista, zoom estendi, inquadra tutte le entità, comando fit CAD, zoom riquadro delimitazione, kulmanlab]
---

# Fit

Il comando `fit` calcola il riquadro di delimitazione di tutte le entità nel disegno e regola sia il livello di zoom che la posizione di pan in modo che ogni entità sia visibile con un piccolo margine. È il modo più veloce per recuperare una vista persa o orientarsi dopo aver importato un file DXF.

## Adattare la vista

Clicca il pulsante **Fit** nella barra degli strumenti o digita `fit` nel terminale. La vista si regola immediatamente e il comando termina — non è richiesta nessuna interazione.

**Il doppio clic con il tasto centrale del mouse** attiva la stessa operazione Fit in qualsiasi momento senza attivare alcun comando — il modo più veloce per ripristinare una vista persa durante il disegno.

## Come funziona l'adattamento al riquadro di delimitazione

1. Fit trova il riquadro di delimitazione allineato agli assi che racchiude tutte le entità (min X, max X, min Y, max Y).
2. Il livello di zoom viene impostato in modo che la dimensione più alta o più larga riempia il canvas con un margine.
3. La vista viene centrata sul punto medio del riquadro di delimitazione.

| Stato del disegno | Risultato |
|------------------|-----------|
| Più largo che alto | Zoom limitato dalla larghezza |
| Più alto che largo | Zoom limitato dall'altezza |
| Singola entità | Si adatta intorno a quella sola entità |
| Disegno vuoto | La vista non cambia |

## Fit vs controlli zoom manuali

| | Fit | Zoom In / Zoom Out | Rotella scroll |
|---|-----|--------------------|----------------|
| Centra su | Tutte le entità | Punto centrale viewport | Cursore |
| Incremento | Automatico (una volta) | 1.5× per step | ~1.1× per tick |
| Ideale per | Recuperare vista persa, orientarsi dopo import | Avvicinarsi/allontanarsi dal centro | Zoom preciso mirato al cursore |

## Riferimento tastiera

Non esiste una scorciatoia da tastiera per questo comando. Usa invece la scorciatoia **doppio clic con il tasto centrale del mouse**.

## Comandi di visualizzazione correlati

| Comando | Funzione |
|---------|----------|
| [Pan](../pan/) | Sposta la viewport senza zoomare |
| [Zoom In](../zoom-in/) | Moltiplica lo zoom per 1.5× per step |
| [Zoom Out](../zoom-out/) | Divide lo zoom per 1.5× per step |
