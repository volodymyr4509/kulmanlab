---
title: Comando Print — Esportare il Disegno come PNG, JPEG, WebP o PDF
description: Il comando Print apre il Print Manager — una finestra di esportazione dedicata con anteprima live, selettore di formato, opzione monocromatica e selezione area opzionale. Esporta fino a 2000×2000 px. Supporta PNG, JPEG, WebP e PDF.
keywords: [CAD esporta PNG, CAD esporta PDF, stampa disegno CAD, print manager, esporta monocromatico, kulmanlab export]
group: file
order: 4
---

# Print

Il comando `print` apre il **Print Manager** — una finestra di esportazione dedicata con canvas di anteprima live, selettore di formato (PNG / JPEG / WebP / PDF), opzione monocromatica e ritaglio area opzionale. Nulla viene inviato a una stampante fisica; l'output viene scaricato come file.

## Aprire il Print Manager

Clicca il pulsante **Print** nella barra degli strumenti o digita `print` nel terminale. Il Print Manager si apre immediatamente mostrando un'anteprima del viewport corrente.

## Layout del Print Manager

La finestra ha due pannelli:
- **Barra laterale sinistra** — tutti i controlli di esportazione.
- **Pannello destro** — canvas di anteprima live che si aggiorna al cambio delle impostazioni.

### Controlli della barra laterale

| Controllo | Descrizione |
|-----------|-------------|
| **Cambia Area** | Ritaglia su un rettangolo personalizzato sul canvas (vedi sotto) |
| **Monocromatico** (attiva/disattiva) | Converte tutte le linee colorate in nero — attivo per impostazione predefinita per output di stampa pulito |
| **Formato** (menu a discesa) | PNG, JPEG, WebP o PDF |
| **Esporta** (pulsante) | Genera e scarica il file |

## Selezione di un'area di esportazione personalizzata

Per impostazione predefinita l'anteprima mostra esattamente ciò che era visibile sul canvas quando hai aperto il Print Manager. Per esportare una regione specifica:

1. Clicca **Cambia Area** — il Print Manager si nasconde e il canvas diventa interattivo.
2. **Clicca il primo angolo** del rettangolo di esportazione.
3. **Clicca l'angolo opposto** — il Print Manager si riapre con l'area selezionata nell'anteprima.

Premi `Esc` durante la selezione dell'area per annullare e ripristinare l'area precedente.

Il canvas di anteprima si ridimensiona dinamicamente per corrispondere al **rapporto d'aspetto esatto** dell'area selezionata, in modo che l'anteprima sia accurata al pixel.

## Formati di esportazione

| Formato | Ideale per | Note |
|---------|-----------|------|
| **PNG** | Senza perdita, linee nitide | Sfondo bianco, senza trasparenza |
| **JPEG** | File più piccolo per la condivisione | Qualità 95%, leggera compressione |
| **WebP** | File più piccolo per il web | Stessa qualità 95%, compressione migliore di JPEG |
| **PDF** | Documenti pronti per la stampa | Immagine incorporata a 150 DPI nel contenitore PDF |

Il file esportato si chiama `kulman-<timestamp>.<ext>` e viene scaricato automaticamente.

## Risoluzione e sfondo di esportazione

- Risoluzione massima: **2000 × 2000 pixel**, scalata proporzionalmente all'area selezionata.
- Lo sfondo è sempre **bianco**.
- I livelli contrassegnati come **non-plotting** sono esclusi dall'esportazione.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Esc` (durante la selezione area) | Annulla la selezione area, ripristina l'area precedente |
| `Esc` (nel Print Manager) | Chiude il Print Manager |
