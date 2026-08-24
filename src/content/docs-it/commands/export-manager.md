---
title: Export Manager — Scaricare Disegni come DXF o JSON
description: Export Manager scarica il disegno corrente come file DXF o JSON (nativo). Ogni formato elenca esattamente quali tipi di entità trasporta, affiancati, così puoi vedere prima di scaricare cosa DXF lascia fuori — attualmente hatch, quote, leader e testo.
keywords: [esporta DXF, esporta file CAD, scarica DXF browser, salva DXF online, esporta JSON CAD, esportazione KulmanLab, scarica file CAD, esportazione DXF, salva disegno su file, download DXF]
group: file
order: 6
---

# Export Manager

Il comando `exportmanager` scarica il disegno corrente sul tuo file system. Sono disponibili due formati, mostrati come schede affiancate: **DXF** per la compatibilità con altri strumenti CAD e **JSON** per salvataggi a piena fedeltà all'interno di KulmanLab CAD — ogni scheda elenca esattamente quali tipi di entità trasporta quel formato.

## Come esportare

1. Clicca sul pulsante **Export** della barra degli strumenti (icona di download) nel pannello file, oppure digita `exportmanager` nel terminale.
2. Si apre il popup **Export Manager**, che mostra le schede JSON e DXF affiancate, ciascuna con l'elenco di cosa viene esportato (e, per DXF, cosa viene lasciato fuori).
3. Clicca su una scheda per selezionare il formato — **JSON** o **DXF**.
4. Clicca sul pulsante **Export \<FORMAT\>**. Il file viene scaricato automaticamente nella cartella download predefinita.

Premi `Esc` per chiudere il popup senza esportare.

## Scegliere un formato

| Formato | Estensione | Ideale per | Limitazioni |
|---------|-----------|-----------|-------------|
| **JSON** *(nativo)* | `.json` | Salvare il lavoro da riaprire in KulmanLab CAD | Non compatibile con altri strumenti CAD |
| **DXF** | `.dxf` | Condivisione con FreeCAD, LibreCAD, ecc. | Hatch, quote, leader e testo non vengono esportati |

**Quando usare JSON:** ogni volta che vuoi salvare una copia completa del tuo lavoro. JSON è il formato nativo di KulmanLab e preserva ogni entità esattamente — incluse quote, leader, hatch e tutti i dati dei layer.

**Quando usare DXF:** quando devi consegnare il disegno a qualcuno che usa un'altra applicazione CAD. Il file esportato usa il formato DXF AC1032 e può essere aperto nella maggior parte degli strumenti compatibili con DXF.

## Cosa viene esportato per formato

### Esportazione JSON

Ogni tipo di entità è incluso:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Quote (lineare, allineata, continuata, raggio, diametro)
- Leaders (multileader)
- Hatches, incluso il loro motivo, scala, angolo e origine
- Layers e Linetypes

### Esportazione DXF

Sono incluse solo le entità geometriche:

- Lines, Circles, Arcs, Ellipses, Polylines (esportate come `LWPOLYLINE`), Splines
- Layers e Linetypes

**Non esportato in DXF:** hatch, quote, leader e testo. Le quote e i leader usano strutture dati specifiche di KulmanLab che non possono essere rappresentate fedelmente in DXF standard; gli hatch al momento non vengono affatto esportati in DXF, anche se vengono importati da esso; anche l'esportazione del testo non è ancora implementata. Se il tuo disegno contiene uno di questi elementi, usa JSON o [Print Manager](../print-manager/) per acquisirli.

## Nome del file esportato

Il file scaricato prende il nome dal file di disegno corrente (es. `myplan.json`). L'estensione cambia in base al formato scelto.

## Differenza tra Export Manager e Print Manager

| Funzione | Export Manager | Print Manager |
|----------|-----------------|-----------------|
| Output | File sorgente vettoriale (.dxf / .json) | Immagine raster (.png / .jpeg / .webp / .pdf) |
| Modificabile in altri strumenti | Sì (DXF) | No |
| Preserva layer e linetype | Sì | No (renderizzato piatto) |
| Cattura quote e leader | Solo JSON | Sì |

Usa **Export Manager** quando hai bisogno di un file modificabile. Usa [Print Manager](../print-manager/) quando hai bisogno di un'istantanea visiva.

## Comandi correlati

- [Import](../import/) — apri un file DXF o JSON
- [Print Manager](../print-manager/) — esporta la tela come immagine PNG, JPEG, WebP o PDF
- [File Manager](../file-manager/) — sfoglia i disegni salvati nell'archiviazione del browser
