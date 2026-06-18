---
sidebar_position: 1
title: Import — Apri File DXF o JSON in KulmanLab CAD
description: Usa il comando Import per aprire file DXF o JSON di KulmanLab in KulmanLab CAD. Supporta linee, cerchi, archi, polilinee, spline, testo, quote e leader.
keywords: [importa file DXF, apri DXF nel browser, importa file CAD online, apri file DXF, visualizzatore DXF browser, importa JSON CAD, KulmanLab import, carica disegno]
---

# Import

Il comando **Import** carica un disegno esistente dal tuo file system locale in KulmanLab CAD. Sono supportati sia il formato **DXF** standard che il formato **JSON** nativo di KulmanLab.

## Come importare un file

1. Clicca il pulsante **Import** nella barra degli strumenti (icona cartella) nel pannello File in cima allo schermo.
2. Si apre il selettore file del browser. Naviga al tuo file di disegno e selezionalo.
3. Il disegno viene caricato immediatamente sul canvas. La viewport si adatta automaticamente a tutte le entità.

In alternativa, puoi trascinare e rilasciare un file direttamente sul canvas.

## Formati di file supportati

| Formato | Estensione | Quando usare |
|---------|------------|--------------|
| **DXF** | `.dxf` | Disegni da , FreeCAD, LibreCAD, o altri strumenti CAD |
| **JSON** *(nativo)* | `.json` | Disegni salvati precedentemente da KulmanLab CAD — fedeltà completa |

## Cosa viene importato da DXF

KulmanLab analizza i seguenti tipi di entità DXF:

| Tipo di entità | Codice DXF | Note |
|----------------|------------|------|
| Line | `LINE` | |
| Circle | `CIRCLE` | |
| Arc | `ARC` | |
| Ellipse | `ELLIPSE` | |
| Polyline | `LWPOLYLINE` | |
| Spline | `SPLINE` | |
| Text | `TEXT`, `MTEXT` | |
| Dimension | `DIMENSION` | |
| Multileader | `MULTILEADER` | |

Le definizioni dei layer e le tabelle dei tipi di linea vengono importate dal file DXF quando presenti.

Le entità che usano tipi DXF non supportati vengono ignorate silenziosamente — il resto del disegno viene comunque caricato.

## Nomi file e archiviazione

Quando importi un file, viene aggiunto un timestamp al nome del file (per esempio `miopiano_Mag22_14:30:00.dxf`). Questo ti permette di tenere più versioni dello stesso disegno nei [File Recenti](./files) senza conflitti di nomi. Se il nome del file contiene già un timestamp, viene usato così com'è.

Il disegno viene automaticamente salvato nell'archivio del browser (IndexedDB) dopo l'importazione, quindi appare nel pannello [Files](./files) e sopravvive ai ricaricamenti della pagina.

## Cosa succede al disegno corrente

L'importazione sostituisce il canvas corrente. Non c'è unione o aggiunta. Se hai modifiche non salvate, [esporta](./export) il disegno corrente prima.

## All'avvio

KulmanLab riapre automaticamente il file più recentemente modificato quando la pagina viene caricata. Se non esistono file salvati, viene caricato un disegno di esempio predefinito.

## Risoluzione dei problemi

| Problema | Causa probabile | Soluzione |
|----------|----------------|-----------|
| Il canvas è vuoto dopo l'importazione | Le entità DXF usano tipi non supportati (es. HATCH, INSERT) | Le entità sono state ignorate — controlla il messaggio "nessuna entità trovata" nel terminale |
| Il pulsante Import non fa nulla | Il browser ha bloccato il selettore file | Clicca il pulsante ancora; alcuni browser richiedono un nuovo gesto utente |
| Le quote sembrano sbagliate | DXF da uno strumento che scrive geometria di quota non standard | Riesporta dall'applicazione sorgente usando una versione DXF attuale |

## Comandi correlati

- [Export](./export) — scarica il disegno corrente come DXF o JSON
- [Files](./files) — sfoglia e ripristina i disegni salvati nel browser
- [New File](./new-file) — inizia un disegno vuoto
