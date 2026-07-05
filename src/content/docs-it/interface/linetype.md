---
sidebar_position: 2
title: Selettore Tipo di Linea — Controllare gli Schemi di Tratteggio in KulmanLab CAD
description: Il selettore del tipo di linea nella barra degli strumenti di KulmanLab CAD imposta lo schema di tratteggio applicato a tutte le entità disegnate successivamente. Supporta tutti i tipi di linea caricati dal file DXF corrente più le opzioni ByLayer, ByBlock e Continuous integrate.
keywords: [CAD tipo linea, schema tratteggio, linea tratteggiata, DXF linetype, ByLayer linetype, kulmanlab]
---

# Tipo di linea

Il selettore **tipo di linea** nella barra degli strumenti controlla lo schema di tratteggio assegnato a ogni nuova entità che disegni. Cliccalo per aprire il menu a tendina.

## Opzioni

| Valore | Significato |
|--------|------------|
| **Dal livello** | L'entità eredita il tipo di linea definito nel suo livello. Mostrato come `ByLayer` nel DXF. |
| **ByBlock** | L'entità eredita il tipo di linea del blocco a cui appartiene. Non ha effetto visibile fuori da un blocco. |
| **Continuous** | Linea continua senza interruzioni — nessuno schema di tratteggio. |
| **Tipi di linea nominati** | Qualsiasi tipo di linea caricato dal file DXF corrente (es. `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, …). Il menu mostra un'anteprima live di ogni schema e la sua stringa di definizione. |

## Come si applica

Il tipo di linea selezionato viene applicato a ogni entità creata dopo la modifica. Non influenza retroattivamente le entità esistenti.

Per cambiare il tipo di linea delle entità esistenti, selezionale e modifica il campo **Tipo di linea** nel pannello proprietà, o usa [MatchProperties](../../commands/match-properties/) per copiarlo da un'altra entità.

## Scala tipo di linea

Ogni entità ha anche una proprietà **Scala tipo di linea** (predefinito `1`). Lo schema di tratteggio viene moltiplicato per questo fattore. Un valore di `2` rende i trattini il doppio più lunghi; `0,5` li rende la metà. Modificalo nel pannello proprietà dopo aver selezionato un'entità.

## Tipi di linea disponibili

Il menu elenca solo i tipi di linea presenti nel file DXF attualmente caricato. Un file appena creato contiene solo `ByLayer`, `ByBlock` e `Continuous`. Quando importi un DXF, tutti i tipi di linea definiti nella tabella `$LTYPE` del file diventano disponibili.

Se hai bisogno di un tipo di linea specifico (es. `DASHED2`) che non è nell'elenco, importa un file DXF che lo contiene — il tipo di linea apparirà poi nel selettore per la sessione corrente.

## Compatibilità DXF

I nomi dei tipi di linea sono memorizzati come stringhe nei record entità. `ByLayer` e `ByBlock` sono i valori sentinel DXF standard. Tutti i tipi di linea nominati e i loro schemi di tratteggio vengono preservati esattamente all'esportazione e sopravvivono al round-trip senza perdita in LibreCAD, FreeCAD e altre applicazioni compatibili DXF.
