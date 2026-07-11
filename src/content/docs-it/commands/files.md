---
title: Files — Pannello File Recenti in KulmanLab CAD
description: Il comando Files apre il pannello File Recenti — sfoglia tutti i disegni salvati nel tuo browser, ripristina qualsiasi disegno sul canvas, o elimina quelli non più necessari.
keywords: [file recenti CAD, cronologia file browser CAD, ripristina disegno, riapri DXF, archivio browser CAD, KulmanLab files, disegni salvati, IndexedDB CAD, gestisci disegni]
group: file
order: 3
---

# Files

Il comando **Files** apre il pannello **File Recenti** — un elenco di tutti i disegni che sono stati salvati nell'archivio locale del tuo browser. Usalo per riaprire un disegno precedente o rimuovere file non più necessari.

## Come aprire il pannello File Recenti

Clicca il pulsante **Files** nella barra degli strumenti (icona cronologia) nel pannello File in cima allo schermo. Il pannello si apre sul lato sinistro del canvas.

## Pannello File Recenti

Ciascuna voce nell'elenco mostra il nome del file e due pulsanti di azione:

| Pulsante | Azione |
|----------|--------|
| ✓ **Ripristina** | Carica il disegno sul canvas — sostituisce il contenuto corrente |
| ✕ **Elimina** | Rimuove il file dall'archivio del browser in modo permanente |

Se non sono stati salvati file, il pannello mostra "Nessun file salvato".

## Come vengono salvati i file

KulmanLab salva i disegni in **IndexedDB** — un database in-browser persistente. Questo significa che:

- I file sopravvivono ai ricaricamenti della pagina e ai riavvii del browser.
- I file vengono archiviati **localmente sul tuo dispositivo** — non vengono caricati su nessun server.
- Ciascun browser e dispositivo ha il proprio archivio indipendente. Un disegno salvato in Chrome su un computer non è disponibile in Firefox o su un'altra macchina.
- Cancellare i dati del sito del browser eliminerà tutti i file salvati.

## Caricamento automatico dei file all'avvio

Quando apri KulmanLab CAD, l'app carica automaticamente il **file modificato più di recente** dall'archivio. Non devi aprirlo manualmente dal pannello Files ogni volta.

## Gestione dell'archivio

Non c'è un limite fisso al numero di disegni che puoi salvare, ma l'archivio del browser è finito. Se noti avvisi di archivio, elimina i file più vecchi dal pannello Files.

Per rimuovere tutti i disegni salvati in una volta, usa il comando [Wipe Storage](../wipestorage/).

## Nomi file e versioning

Ciascun file ha un timestamp nel suo nome (es. `miopiano_Mag22_14:30:00.dxf`). Questo timestamp viene aggiunto automaticamente quando [importi](../import/) un file, garantendo che reimportare lo stesso file sorgente crei una nuova voce invece di sovrascrivere la versione precedente.

## Comandi correlati

- [Import](../import/) — carica un disegno dal tuo file system nell'archivio del browser
- [Export](../export/) — scarica un disegno nel tuo file system
- [New File](../new-file/) — inizia un disegno vuoto (salvato anche automaticamente)
- [Wipe Storage](../wipestorage/) — cancella tutti i file salvati dall'archivio del browser
