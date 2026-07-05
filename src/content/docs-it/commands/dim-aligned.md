---
sidebar_position: 14
title: Comando Dimension Aligned — Quote alla Distanza Reale in Qualsiasi Angolazione in KulmanLab CAD
description: Il comando Dimension Aligned misura la distanza reale in linea retta tra due punti. La linea di quota è parallela alla linea p1→p2 in qualsiasi angolazione — a differenza di Dimension Linear che è limitata all'orizzontale o verticale. Compatibilità DXF completa come entità DIMENSION.
keywords: [CAD quota allineata, dimaligned, quota diagonale CAD, quota distanza reale, quota angolata CAD, kulmanlab]
---

# Dimension Aligned

Il comando `dimaligned` posiziona una quota che misura la **distanza reale in linea retta** tra due punti. La linea di quota è parallela alla linea che collega i due punti, quindi può essere in qualsiasi angolazione. Questa è la differenza fondamentale rispetto a [Dimension Linear](../dim-linear/), che è limitata all'orizzontale o verticale.

## Anatomia di una quota allineata

```
     ●  p2
    /|
   / |  (linea di estensione 2, perpendicolare alla linea di quota)
  /  |
 /←5.00→/
/  /
●  /  (linea di estensione 1, perpendicolare alla linea di quota)
p1
```

- **Linee di estensione** — perpendicolari alla linea di quota, tracciate da ciascun punto misurato.
- **Linea di quota** — parallela a p1→p2, spostata da un lato dalla posizione del cursore.
- **Valore** — la distanza euclidea reale `|p1 – p2|`.

## Posizionamento di una quota allineata

1. Digita `dimaligned` nel terminale o clicca il pulsante **Dimension Aligned** nella barra degli strumenti.
2. **Clicca il primo punto di estensione** (p1), oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
3. **Clicca il secondo punto di estensione** (p2). L'inserimento di coordinate funziona anche qui.
4. **Sposta il cursore** su un lato per impostare lo scostamento perpendicolare della linea di quota.
5. **Clicca** per posizionare, oppure digita una distanza di scostamento e premi **Invio** per un posizionamento preciso.

## Distanza di scostamento digitata

Digita un numero durante il posizionamento per fissare la linea di quota a una distanza perpendicolare esatta dalla linea p1→p2:

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiunge cifra allo scostamento |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` / `Spazio` | Posiziona allo scostamento digitato |

Il lato del cursore determina da quale lato appare la linea di quota.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Avvia inserimento coordinata X (fasi p1/p2), o distanza scostamento (fase posizionamento) |
| `,` | Blocca X e passa all'inserimento Y (fasi p1/p2) |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` / `Spazio` | Conferma coordinata o scostamento digitato |
| `Escape` | Annulla |

## Dimension Aligned vs Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Angolazione linea di quota | Parallela a p1→p2 — qualsiasi angolo | Sempre orizzontale o verticale |
| Misura | Distanza euclidea reale | Solo componente X o Y |
| Blocco H/V | No | Sì — tasti `H` e `V` |
| Ideale per | Elementi diagonali, tagli angolati | Layout ortogonali, componenti allineati alla griglia |

## Modifica dell'etichetta — simple mode

**Doppio clic** su una quota allineata posizionata per aprire l'editor di testo in **simple** mode. L'editor è precompilato con il valore visualizzato corrente in modo da poter posizionare il cursore e modificarlo direttamente.

| Feature | Comportamento |
|---------|--------------|
| Bold / Italic / Font / Height | Si applica all'**intera** etichetta in una volta |
| Formattazione per carattere | Non supportata |
| `Enter` | Conferma il valore e chiude l'editor |
| Multiriga | Non supportato |

Vedi [Editor di Testo — simple mode](../../interface/text-editor/#simple-mode) per il riferimento completo.

## Concatenamento quote

Per aggiungere altre quote continuando dalla seconda linea di estensione di questa, usa [Dimension Continue](../dim-continue/) — si blocca allo stesso angolo di misurazione di questa quota allineata.

## DXF — entità DIMENSION (tipo allineato)

Le quote allineate vengono salvate come entità `DIMENSION` con `dimType = 1` (allineato). Origini linee di estensione, posizione linea di quota, posizione testo, valore misurato, rotazione, stile frecce e tutti i flag di visualizzazione vengono mantenuti senza perdita.
