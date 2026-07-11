---
title: Export — Scarica Disegni come DXF o JSON in KulmanLab CAD
description: Il comando Export scarica il disegno corrente come file DXF () o JSON (nativo). JSON preserva tutte le entità incluse quote e leader; DXF è compatibile con e altri strumenti CAD.
keywords: [esporta DXF, esporta file CAD, scarica DXF browser, salva DXF online, esporta JSON CAD, KulmanLab export, scarica file CAD, download DXF, salva disegno su file]
group: file
order: 5
---

# Export

Il comando **Export** scarica il disegno corrente nel tuo file system. Sono disponibili due formati: **DXF** per la compatibilità con altri strumenti CAD e **JSON** per salvataggi ad alta fedeltà all'interno di KulmanLab CAD.

## Come esportare

1. Clicca il pulsante **Export** nella barra degli strumenti (icona download) nel pannello File.
2. Si apre il popup **Gestore esportazione**.
3. Clicca su una scheda formato per selezionare il formato — **JSON** o **DXF**.
4. Clicca il pulsante **Export**. Il file viene scaricato automaticamente nella cartella dei download predefinita.

## Scelta del formato

| Formato | Estensione | Ideale per | Limitazioni |
|---------|------------|------------|-------------|
| **JSON** *(nativo)* | `.json` | Salvare lavoro da riaprire in KulmanLab CAD | Non compatibile con altri strumenti CAD |
| **DXF** | `.dxf` | Condivisione con , FreeCAD, LibreCAD, ecc. | Quote e leader non vengono esportati |

**Quando usare JSON:** ogni volta che vuoi salvare una copia completa del tuo lavoro. JSON è il formato nativo di KulmanLab e preserva ogni entità esattamente — incluse quote, leader e tutti i dati dei layer.

**Quando usare DXF:** quando devi consegnare il disegno a qualcuno che usa un'altra applicazione CAD. Il file esportato usa il formato DXF AC1012 e può essere aperto dalla maggior parte degli strumenti compatibili con DXF.

## Cosa viene esportato per formato

### Esportazione JSON

Tutti i tipi di entità sono inclusi:

- Linee, cerchi, archi, ellissi, polilinee, spline, testo
- Quote (lineare, allineata, continua, raggio, diametro)
- Multilinee guida
- Definizioni layer e tabelle tipo linea

### Esportazione DXF

Sono incluse solo le entità geometriche:

- Linee, cerchi, archi, ellissi, polilinee (esportate come `LWPOLYLINE`), spline, testo
- Definizioni layer e tabelle tipo linea

**Non inclusi nel DXF:** entità quota e multilinee guida. Queste usano strutture dati specifiche di KulmanLab che non possono essere rappresentate fedelmente in DXF standard. Se il tuo disegno ha annotazioni, usa JSON o [Print](../print/) per catturarle visivamente.

## Nome del file esportato

Il file scaricato prende il nome dal file di disegno corrente (es. `miopiano_Mag22_14:30:00.json`). L'estensione cambia in base al formato scelto.

## Differenza tra Export e Print

| Funzione | Export | Print |
|----------|--------|-------|
| Output | File sorgente vettoriale (.dxf / .json) | Immagine raster (.png / .jpeg / .webp / .pdf) |
| Modificabile in altri strumenti | Sì (DXF) | No |
| Preserva layer e tipi linea | Sì | No (renderizzato piatto) |
| Cattura quote e leader | Solo JSON | Sì |

Usa **Export** quando hai bisogno di un file modificabile. Usa [Print](../print/) quando hai bisogno di un'istantanea visiva.

## Comandi correlati

- [Import](../import/) — apri un file DXF o JSON
- [Print](../print/) — esporta il canvas come immagine PNG, JPEG, WebP o PDF
- [Files](../files/) — sfoglia i disegni salvati nell'archivio del browser
