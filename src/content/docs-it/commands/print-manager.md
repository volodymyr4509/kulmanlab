---
title: Print Manager — Esportare il Disegno come PNG, JPEG, WebP o PDF
description: Il comando PrintManager apre il Print Manager — una finestra di esportazione dedicata con anteprima live che corrisponde esattamente al file esportato, un'impostazione Qualità/DPI, selettore di formato, uno stile di stampa Default/Monochrome/Blueprint e selezione area opzionale. Supporta PNG, JPEG, WebP e PDF.
keywords: [CAD esporta PNG, CAD esporta PDF, stampa disegno CAD, print manager, qualità di stampa DPI, esporta monocromatico, stile di stampa blueprint, kulmanlab export]
group: file
order: 4
---

# Print Manager

Il comando `PrintManager` apre il **Print Manager** — una finestra di esportazione dedicata con canvas di anteprima live, selettore di formato (PNG / JPEG / WebP / PDF), un selettore di Stile di stampa (Default / Monochrome / Blueprint) e ritaglio area opzionale. Nulla viene inviato a una stampante fisica; l'output viene scaricato come file.

## Aprire il Print Manager

Clicca il pulsante **Print** nella barra degli strumenti o digita `PrintManager` nel terminale. Il Print Manager si apre immediatamente mostrando un'anteprima del viewport corrente.

L'anteprima viene renderizzata attraverso esattamente lo stesso percorso di codice, alla stessa identica risoluzione in pixel, del file che alla fine esporterai — cambiare Qualità, Stile o l'area di esportazione ri-renderizza subito l'anteprima, quindi ciò che vedi è ciò che viene scaricato, non un'approssimazione.

## Layout del Print Manager

La finestra ha due pannelli:
- **Barra laterale sinistra** — tutti i controlli di esportazione.
- **Pannello destro** — canvas di anteprima live che si aggiorna al cambio delle impostazioni.

### Controlli della barra laterale

| Controllo | Descrizione |
|-----------|-------------|
| **Change Area** | Ritaglia su un rettangolo personalizzato sul canvas (vedi sotto) — ritaglia effettivamente l'immagine esportata, anche su un layout con spazio carta, non solo l'anteprima a schermo |
| Menu a tendina **Quality** | Imposta la risoluzione di esportazione (vedi sotto) |
| Menu a tendina **Style** | Default, Monochrome o Blueprint — vedi *Stili di stampa* sotto. Monochrome per impostazione predefinita per un output di stampa pulito |
| Menu a tendina **Format** | PNG, JPEG, WebP o PDF |
| Pulsante **Export** | Genera e scarica il file |

## Stili di stampa

Il menu a tendina **Style** controlla sia il colore d'inchiostro con cui vengono disegnate le entità sia lo sfondo della pagina:

| Stile | Inchiostro | Sfondo pagina |
|-------|-----------|----------------|
| **Default** | Il colore proprio di ogni entità | Bianco |
| **Monochrome** *(predefinito)* | Nero pieno, indipendentemente dal colore di entità/layer | Bianco |
| **Blueprint** | Bianco pieno, indipendentemente dal colore di entità/layer | Blu Prussia profondo, con una griglia di riferimento tenue |

Blueprint riproduce l'aspetto di una tradizionale stampa architettonica cianotipica — tratti bianchi su un foglio blu scuro. La sua griglia di riferimento è dimensionata in relazione alla pagina anziché ai DPI, quindi appare con la stessa densità a qualsiasi impostazione di Qualità invece di infittirsi all'aumentare della risoluzione.

## Qualità e risoluzione

Il menu a tendina **Quality** imposta il DPI a cui viene renderizzata l'esportazione:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(predefinito)* | 150 |
| Presentation | 300 |
| Max | 600 |

Una Qualità più alta produce un'immagine più grande e nitida alla stessa dimensione fisica — gli spessori delle linee si scalano insieme alla risoluzione, quindi una linea mantiene lo stesso spessore *fisico* su carta a qualsiasi impostazione di Qualità, invece di apparire più sottile all'aumentare del DPI. L'unica eccezione è una linea sottile (spessore `0`), convenzionalmente definita come "la linea più sottile che il dispositivo di output può disegnare" — resta a una larghezza fissa di 1 pixel a qualsiasi livello di Qualità, come si comporta sul canvas live.

Cambiare la Qualità ri-renderizza immediatamente l'anteprima, così vedi la nitidezza reale (e il compromesso sulla dimensione del file) prima di esportare.

## Selezione di un'area di esportazione personalizzata

Per impostazione predefinita l'anteprima mostra esattamente ciò che era visibile sul canvas quando hai aperto il Print Manager. Per esportare una regione specifica:

1. Clicca **Change Area** — il Print Manager si nasconde e il canvas diventa interattivo.
2. **Clicca il primo angolo** del rettangolo di esportazione.
3. **Clicca l'angolo opposto** — il Print Manager si riapre con l'area selezionata nell'anteprima.

Premi `Esc` durante la selezione dell'area per annullare e ripristinare l'area precedente.

Il canvas di anteprima si ridimensiona dinamicamente per corrispondere al **rapporto d'aspetto esatto** dell'area selezionata, in modo che l'anteprima sia accurata al pixel.

## Formati di esportazione

| Formato | Ideale per | Note |
|---------|-----------|------|
| **PNG** | Senza perdita, linee nitide | Sfondo della pagina secondo lo Stile, senza trasparenza |
| **JPEG** | File più piccolo per la condivisione | Qualità 95%, leggera compressione |
| **WebP** | File più piccolo per il web | Stessa qualità 95%, compressione migliore di JPEG |
| **PDF** | Documenti pronti per la stampa | Immagine incorporata in un contenitore PDF al DPI della Qualità selezionata, dimensionata perché la pagina venga stampata alla vera scala fisica |

Il file esportato si chiama `kulman-<timestamp>.<ext>` e viene scaricato automaticamente.

## Risoluzione e sfondo di esportazione

- **Esportazione model space / viewport**: limitata a 2000 × 2000 pixel alla Qualità Normal predefinita (150 DPI), scalata proporzionalmente all'area selezionata; anche il limite si scala con la Qualità — Draft ha un limite inferiore, Presentation e Max un limite superiore (fino a 8000 × 8000 a Max/600 DPI).
- **Esportazione layout (spazio carta)**: dimensionata direttamente dalle dimensioni carta del layout al DPI selezionato — es. un foglio A4 (210 × 297 mm) a Qualità Normal esporta a circa 1240 × 1754 px — quindi non è soggetta al limite di 2000 px del viewport.
- Lo sfondo segue lo **Style** di stampa selezionato — bianco per Default e Monochrome, blu Prussia profondo per Blueprint (vedi *Stili di stampa* sopra).
- I livelli contrassegnati come **non-plotting** sono esclusi dall'esportazione.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Esc` (durante la selezione area) | Annulla la selezione area, ripristina l'area precedente |
| `Esc` (nel Print Manager) | Chiude il Print Manager |
