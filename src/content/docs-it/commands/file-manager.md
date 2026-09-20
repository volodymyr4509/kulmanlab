---
title: File Manager — Griglia Miniature in KulmanLab CAD
description: Il comando File Manager apre una griglia di miniature di ogni disegno salvato — clicca una miniatura per aprirlo, rinominalo sul posto o eliminalo con conferma.
keywords: [file manager CAD, file recenti CAD, rinomina disegno, elimina disegno, griglia miniature CAD, ripristina disegno, riapri DXF, archivio browser CAD, KulmanLab files, disegni salvati, IndexedDB CAD, backup disegno CAD]
group: file
order: 3
---

# File Manager

Il comando `GestoreFile` apre una **griglia di miniature** di ogni disegno che è stato salvato nell'archivio locale del tuo browser, ordinata in base a quando ciascuno è stato salvato l'ultima volta. Usala per riaprire un disegno precedente, rinominarlo o eliminarlo.

## Come aprire il File Manager

- Digita `GestoreFile` nel terminale, **oppure**
- Clicca il pulsante **File Manager** nella barra degli strumenti (icona cronologia) nel pannello File in cima allo schermo.

Il pannello si apre sul lato sinistro del canvas e si chiude automaticamente non appena avvii un altro comando o [Importa](../import/) un file — così non resta mai aperto sopra un disegno che ancora non elenca. Si riapre con un elenco aggiornato ogni volta.

## La griglia di miniature

Ogni disegno salvato è una scheda che mostra una miniatura renderizzata al momento, il suo nome e quando è stato aggiornato l'ultima volta. Le miniature vengono generate sul posto ogni volta che il pannello si apre — nulla viene pre-renderizzato o memorizzato — quindi una scheda mostra per un istante un'icona segnaposto mentre la sua miniatura viene disegnata. La stessa icona segnaposto compare anche se la generazione fallisce, o se il disegno non ha ancora davvero alcuna entità.

| Azione | Come |
|--------|------|
| **Aprire** un disegno | Clicca la sua miniatura — sostituisce il contenuto corrente del canvas |
| **Rinominare** | Clicca l'icona della matita, oppure fai doppio click sul nome |
| **Eliminare** | Clicca l'icona del cestino, poi conferma |

Se non sono stati salvati file, il pannello mostra "Nessun file salvato". Con più file di quanti ne entrino in una schermata, sotto la griglia compaiono i controlli **Pagina 1 di N**.

La scheda del file attualmente aperto nell'editor è contrassegnata da un anello colorato in evidenza e non ha il **pulsante elimina** — eliminare il file aperto cancellerebbe i suoi dati salvati mentre il canvas continuerebbe a mostrarlo, e la modifica successiva lo salverebbe semplicemente di nuovo. Rinominarlo resta comunque possibile.

## Eliminare un file

Cliccare l'icona del cestino non elimina immediatamente — arma un overlay di conferma su quella scheda ("Eliminare questo file?" con i pulsanti **Elimina** / **Annulla**), poiché l'eliminazione è permanente e non può essere annullata. Cliccare **Annulla**, cliccare l'icona del cestino di un'altra scheda, o cliccare altrove sulla scheda fanno tutti cadere la conferma in sospeso senza eliminare nulla.

## Rinominare un file

Clicca l'icona della matita (o fai doppio click sul nome del file) per modificarlo sul posto, poi premi **Invio** per confermare o **Esc** per annullare. Una rinomina viene rifiutata se il nuovo nome è:

- vuoto, o più lungo di 100 caratteri,
- già usato da un altro file salvato (senza distinzione tra maiuscole e minuscole),
- termina con un punto, oppure
- un nome di dispositivo riservato da Windows come `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, o `LPT1`–`LPT9`.

I caratteri non validi in un nome file (`\ / : * ? " < > |`) vengono rimossi automaticamente mentre digiti. Rinominare cambia solo l'etichetta — non influisce sulla posizione del disegno nella griglia, poiché quest'ultima è ordinata in base all'ultimo salvataggio, non al nome.

## Esegui il backup del tuo lavoro — l'archivio del browser non è permanente

KulmanLab salva i disegni in **IndexedDB**, un database integrato nel tuo browser:

- I file vengono archiviati **localmente sul tuo dispositivo soltanto** — nulla viene caricato su un server.
- Ciascun browser e dispositivo ha il proprio archivio indipendente. Un disegno salvato in Chrome su un computer non compare in Firefox, né su un'altra macchina.
- Questo archivio **può essere cancellato senza preavviso** — cancellando i dati del sito o la cronologia di navigazione, per spazio su disco insufficiente, usando una finestra privata/in incognito, reinstallando il browser o il sistema operativo, o cambiando dispositivo. Nessuno di questi casi ti dà la possibilità di recuperare ciò che c'era.

**L'unico modo affidabile per mettere al sicuro un disegno è [esportarlo](../export-manager/) nel tuo archivio personale.** Usa `.json` (il formato nativo di KulmanLab) quando possibile — preserva ogni entità esattamente; usa `.dxf` quando ti serve compatibilità con altri strumenti CAD. Fallo per qualsiasi cosa di cui ti dispiacerebbe la perdita, e prima di cancellare i dati del browser, cambiare browser o dispositivo, o mettere via la macchina per un po'.

## Caricamento automatico dei file all'avvio

Quando apri KulmanLab CAD, l'app carica automaticamente il **file modificato più di recente** dall'archivio. Non devi aprirlo manualmente dal File Manager ogni volta.

## Gestione dell'archivio

Non c'è un limite fisso al numero di disegni che puoi salvare, ma l'archivio del browser è finito. Se noti avvisi di archivio, elimina i file più vecchi dal File Manager — o meglio, esportali prima così nulla va perso.

Per rimuovere tutti i disegni salvati in una volta, usa il comando [WipeStorage](../wipestorage/).

## Nomi file

I file nuovi e importati ricevono un nome semplice — nessun timestamp viene incorporato. Se quel nome è già in uso, viene aggiunto automaticamente un suffisso in stile Finder/Explorer (`piano (2)`, `piano (3)`, …) così nulla viene sovrascritto. Puoi sempre dare a un file un nome più chiaro in seguito usando la [rinomina](#rinominare-un-file).

## Comandi correlati

- [Import](../import/) — carica un disegno dal tuo file system nell'archivio del browser
- [Export Manager](../export-manager/) — scarica un disegno nel tuo file system
- [New File](../new-file/) — inizia un disegno vuoto (salvato anche automaticamente)
- [WipeStorage](../wipestorage/) — cancella tutti i file salvati dall'archivio del browser
