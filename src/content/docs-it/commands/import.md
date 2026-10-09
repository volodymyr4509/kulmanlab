---
title: Import — Apri File DXF o JSON in KulmanLab CAD
description: Usa il comando Import per aprire file DXF o JSON di KulmanLab in KulmanLab CAD. Supporta linee, cerchi, archi, polilinee, spline, testo, quote e leader.
keywords: [importa file DXF, apri DXF nel browser, importa file CAD online, apri file DXF, visualizzatore DXF browser, importa JSON CAD, KulmanLab import, carica disegno]
group: file
order: 1
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
| **DXF** | `.dxf` | Disegni da FreeCAD, LibreCAD, o altri strumenti CAD |
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
| Hatch | `HATCH` | Vengono letti il nome, la scala e l'angolo del motivo; un nome assente dalla tua libreria di motivi ricade su ANSI31. Vedi [Hatch](../hatch/) |

Le definizioni dei layer e le tabelle dei tipi di linea vengono importate dal file DXF quando presenti.

Le entità che usano tipi DXF non supportati vengono ignorate silenziosamente — il resto del disegno viene comunque caricato.

## Nomi file e archiviazione

Il file importato mantiene il suo nome originale. Se quel nome è già usato da un altro disegno salvato, viene aggiunto automaticamente un suffisso in stile Finder/Explorer (`miopiano (2)`, `miopiano (3)`, …), così la voce esistente non viene mai sovrascritta. Puoi rinominare il file in seguito dal [File Manager](../file-manager/#renaming-a-file).

Il disegno viene automaticamente salvato nell'archivio del browser (IndexedDB) dopo l'importazione, quindi appare nel pannello [File Manager](../file-manager/) e sopravvive ai ricaricamenti della pagina.

## Cosa succede al disegno corrente

L'importazione sostituisce il canvas corrente. Non c'è unione o aggiunta. Se hai modifiche non salvate, [esporta](../export-manager/) il disegno corrente prima.

## All'avvio

KulmanLab riapre automaticamente il file più recentemente modificato quando la pagina viene caricata. Se non esistono file salvati, viene caricato un disegno di esempio predefinito.

## Risoluzione dei problemi

| Problema | Causa probabile | Soluzione |
|----------|----------------|-----------|
| Il canvas è vuoto dopo l'importazione | Le entità DXF usano tipi non supportati (es. INSERT) | Le entità sono state ignorate — il terminale elenca ogni tipo ignorato con un conteggio, ad esempio `Could not read INSERT: 12`. Un file che non è affatto un disegno valido segnala `Could not read <file>: not a valid drawing file` |
| Il pulsante Import non fa nulla | Il browser ha bloccato il selettore file | Clicca il pulsante ancora; alcuni browser richiedono un nuovo gesto utente |
| Le quote sembrano sbagliate | DXF da uno strumento che scrive geometria di quota non standard | Riesporta dall'applicazione sorgente usando una versione DXF attuale |

## Comandi correlati

- [Export Manager](../export-manager/) — scarica il disegno corrente come DXF o JSON
- [File Manager](../file-manager/) — sfoglia e ripristina i disegni salvati nel browser
- [New File](../new-file/) — inizia un disegno vuoto
