---
sidebar_position: 2
title: New File — Avviare un Disegno Vuoto in KulmanLab CAD
description: Il comando New File svuota il canvas e apre un disegno vuoto. Un nome file con timestamp viene generato automaticamente e salvato nell'archivio del browser.
keywords: [nuovo file CAD, nuovo disegno, canvas vuoto CAD, crea nuovo disegno online, nuovo DXF, KulmanLab nuovo file, reimposta canvas, cancella disegno]
---

# New File

Il comando **New File** svuota il canvas e avvia un disegno vuoto. Un nome file univoco con timestamp viene generato automaticamente.

## Come creare un nuovo file

Clicca il pulsante **New File** nella barra degli strumenti (icona nuova pagina) nel pannello File. Il canvas si svuota immediatamente — nessuna richiesta o finestra di conferma.

## Cosa contiene il nuovo file

Un file appena creato inizia con:

- **Nessuna entità** sul canvas.
- **Un livello predefinito** chiamato `0` con colore bianco e tipo di linea `Continuous`.
- Un **nome file generato** nel formato `kulman-Lun01_HH:MM:SS.dxf` (es. `kulman-Mag22_14:30:00.dxf`).

Il file viene salvato automaticamente nell'archivio del browser e appare in [File Recenti](../files/).

## Attenzione — il lavoro non salvato viene eliminato

Cliccare **New File** elimina tutte le entità sul canvas corrente senza avviso. Se vuoi mantenere il disegno corrente, [esportalo](../export/) prima.

## Quando usare New File vs Importa

| Situazione | Azione consigliata |
|------------|-------------------|
| Iniziare un disegno da zero | **New File** |
| Aprire un file DXF o JSON esistente | [Importa](../import/) |
| Copiare un disegno per lavorare su una variante | [Esporta](../export/) il file corrente, poi [Importa](../import/) la copia |

## Comandi correlati

- [Importa](../import/) — apri un disegno DXF o JSON esistente
- [Esporta](../export/) — scarica il disegno prima di iniziarne uno nuovo
- [Files](../files/) — ripristina un disegno precedente dall'archivio del browser
