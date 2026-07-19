---
title: Selettore Spessore di Linea — Controllare la Larghezza del Tratto
description: Il selettore dello spessore di linea nella barra degli strumenti di KulmanLab CAD imposta la larghezza del tratto applicata a tutte le entità disegnate successivamente. Supporta i valori standard DXF da 0,00 mm a 2,11 mm più le modalità ByLayer e Default.
keywords: [CAD spessore linea, larghezza tratto, larghezza linea, DXF lineweight, ByLayer lineweight, kulmanlab]
group: interface
order: 4
---

# Spessore di linea

Il selettore di **spessore di linea** nella barra degli strumenti controlla la larghezza del tratto assegnata a ogni nuova entità che disegni. Cliccalo per aprire il menu a tendina.

## Opzioni

| Valore | Significato |
|--------|------------|
| **Dal livello** | L'entità eredita lo spessore definito nel suo livello. La larghezza effettiva mostrata dipende dall'impostazione del livello. |
| **Default** | Usa la larghezza predefinita dell'applicazione — resa come linea sottile (1 px). Non sostituisce l'impostazione del livello nel DXF. |
| **0,00 mm – 2,11 mm** | Una larghezza fissa esplicita. L'entità porta questo valore indipendentemente dallo spessore del suo livello. |

I valori standard DXF sono disponibili: 0,00, 0,05, 0,09, 0,13, 0,15, 0,18, 0,20, 0,25, 0,30, 0,35, 0,40, 0,50, 0,53, 0,60, 0,70, 0,80, 0,90, 1,00, 1,06, 1,20, 1,40, 1,58, 2,00 e 2,11 mm.

## Come si applica

Lo spessore di linea selezionato viene applicato a ogni entità creata dopo la modifica. Non influenza retroattivamente le entità esistenti.

Per cambiare lo spessore di linea delle entità esistenti, selezionale e modifica il campo **Spessore di linea** nel pannello proprietà, o usa [MatchProperties](../../commands/match-properties/) per copiarlo da un'altra entità.

## Rendering

Gli spessori di linea vengono resi a una scala di **3,78 px per mm** (96 dpi). Una linea da 0,25 mm è circa 1 px di larghezza sullo schermo; una da 1,00 mm è circa 4 px. I valori molto sottili (0,00 mm e negativi) vengono sempre resi come almeno 0,5 px così rimangono visibili a qualsiasi livello di zoom.

## Compatibilità DXF

I valori di spessore di linea sono memorizzati come interi in centesimi di millimetro (es. 25 = 0,25 mm) nei record entità DXF `LWPOLYLINE`, `LINE`, `CIRCLE` e altri. **Dal livello** è memorizzato come `-1` e **Default** come `-3`, corrispondendo alla specifica DXF. I file sopravvivono al round-trip senza perdita in qualsiasi applicazione compatibile DXF.
