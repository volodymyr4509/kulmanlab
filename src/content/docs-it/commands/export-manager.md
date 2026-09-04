---
title: Export Manager — Scaricare Disegni come DXF o JSON
description: Scarica il disegno come DXF o JSON, spuntando per tipo di entità che cosa ci finisce. Entrambi portano geometria, testo, quote, direttrici e campiture.
keywords: [esporta DXF, esporta file CAD, scarica DXF browser, salva DXF online, esporta JSON CAD, esportazione KulmanLab, scarica file CAD, esportazione DXF, salva disegno su file, download DXF]
group: file
order: 6
---

# Export Manager

Il comando `exportmanager` scarica il disegno corrente sul tuo file system. Due formati affiancati — **DXF** per la compatibilità con altri strumenti CAD e **JSON** per salvataggi a fedeltà piena dentro KulmanLab CAD — e ciascuno ha la propria lista di che cosa mettere nel file.

## Come esportare

1. Clicca sul pulsante **Export** della barra degli strumenti (icona di download) nel pannello file, oppure digita `exportmanager` nel terminale.
2. La finestra **Export Manager** si apre su due colonne, **JSON** e **DXF**, ognuna con i tipi di entità del disegno, una casella e un conteggio.
3. Deseleziona ciò che vuoi lasciare fuori. All'inizio è tutto selezionato.
4. Clicca **Export JSON** o **Export DXF**. Il file scende nella cartella dei download e la finestra si chiude.

Premi `Esc` per chiudere il popup senza esportare.

## Scegliere che cosa esportare

Entrambe le colonne elencano gli stessi tipi di entità, ciascuno con quanti ce ne sono nel disegno:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

All'apertura è tutto spuntato, quindi esportare subito ti dà il disegno intero. Togli la spunta a un tipo per lasciarlo fuori da quel singolo file.

- **Le due colonne sono indipendenti.** Togliere la spunta a Hatches sotto DXF non cambia ciò che produce **Export JSON**: ogni formato conserva la propria selezione.
- **Ciò che non hai è in grigio.** Una riga con conteggio `0` non è spuntabile, così l'elenco funge anche da inventario rapido del disegno.
- **I conteggi sono un'istantanea.** Sono presi all'apertura e non si aggiornano se il disegno cambia dietro. Chiudi e riapri per rinfrescarli.
- **Non viene cancellato nulla.** Togliere la spunta modella solo il file esportato; il disegno resta intatto.

**Linear Dimensions** copre quote lineari, allineate e continue: un unico tipo di entità creato da tre comandi diversi. Raggio, diametro e angolo hanno ciascuno la propria riga.

Per un file di taglio, togli la spunta a Text, alle quattro righe delle quote, a Leaders e a Hatches e clicca **Export DXF** — vedi [preparare un DXF per il taglio laser](/it/blog/prepare-dxf-for-laser-cutting/).

## Scegliere un formato

| Formato | Estensione | Ideale per | Limitazioni |
|---------|-----------|-----------|-------------|
| **JSON** *(nativo)* | `.json` | Salvare il lavoro da riaprire in KulmanLab CAD | Non compatibile con altri strumenti CAD |
| **DXF** | `.dxf` | Condivisione con FreeCAD, LibreCAD, ecc. | Quanto sopravvive dipende dall'applicazione che lo riceve |

**Quando usare JSON:** ogni volta che vuoi salvare una copia completa del tuo lavoro. JSON è il formato nativo di KulmanLab e preserva ogni entità esattamente — incluse quote, leader, hatch e tutti i dati dei layer.

**Quando usare DXF:** quando devi consegnare il disegno a qualcuno che usa un'altra applicazione CAD. Il file esportato usa il formato DXF AC1032 e può essere aperto nella maggior parte degli strumenti compatibili con DXF.

## Cosa viene esportato per formato

### Esportazione JSON

Ogni tipo di entità è incluso:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Quote (lineare, allineata, continuata, raggio, diametro, angolo)
- Leaders (multileader)
- Hatches, incluso il loro motivo, scala, angolo e origine
- Layers e Linetypes

### Esportazione DXF

Ogni tipo di entità è incluso:

- Lines, Circles, Arcs, Ellipses, Polylines (esportate come `LWPOLYLINE`), Splines
- Text
- Quote (lineare, allineata, continuata, raggio, diametro, angolo)
- Leaders (multileader)
- Hatches, incluso il loro motivo, scala, angolo e origine
- Layers e Linetypes

Il file viene scritto come DXF AC1032, così un disegno esportato da KulmanLab si apre negli altri strumenti compatibili DXF con la sua annotazione intatta, invece di arrivare come geometria nuda.

Che cosa ne faccia poi ciascuna applicazione ricevente continua a variare: il supporto DXF cambia da strumento a strumento, e uno più vecchio può ignorare entità che uno più recente legge. Se un disegno deve apparire identico ovunque, [Print Manager](../print-manager/) lo cattura invece come PDF o immagine.

## Nome del file esportato

Il file scaricato prende il nome dal file di disegno corrente (es. `myplan.json`). L'estensione cambia in base al formato scelto. Un disegno mai nominato viene esportato come `drawing.dxf` o `drawing.json`.

## Differenza tra Export Manager e Print Manager

| Funzione | Export Manager | Print Manager |
|----------|-----------------|-----------------|
| Output | File sorgente vettoriale (.dxf / .json) | Immagine raster (.png / .jpeg / .webp / .pdf) |
| Modificabile in altri strumenti | Sì (DXF) | No |
| Preserva layer e linetype | Sì | No (renderizzato piatto) |
| Cattura quote e leader | Sì | Sì |

Usa **Export Manager** quando hai bisogno di un file modificabile. Usa [Print Manager](../print-manager/) quando hai bisogno di un'istantanea visiva.

## Comandi correlati

- [Import](../import/) — apri un file DXF o JSON
- [Print Manager](../print-manager/) — esporta la tela come immagine PNG, JPEG, WebP o PDF
- [File Manager](../file-manager/) — sfoglia i disegni salvati nell'archiviazione del browser
