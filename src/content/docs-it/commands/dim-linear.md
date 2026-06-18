---
sidebar_position: 13
title: Comando Dimension Linear — Quote Orizzontali e Verticali in KulmanLab CAD
description: Il comando Dimension Linear misura la distanza orizzontale o verticale tra due punti. La linea di quota è sempre allineata agli assi — premi H o V per bloccare l'orientamento, o lascia che la posizione del cursore decida automaticamente. Compatibilità DXF completa come entità DIMENSION.
keywords: [CAD quota lineare, quota orizzontale CAD, quota verticale CAD, dimlinear, blocco orientamento H V, scostamento quota, kulmanlab]
---

# Dimension Linear

Il comando `dimlinear` posiziona una quota orizzontale o verticale tra due origini delle linee di estensione. La linea di quota va sempre perfettamente in orizzontale o in verticale — non può essere posizionata a un angolo arbitrario. Usa [Dimension Aligned](./dim-aligned) quando hai bisogno di una quota parallela a una linea diagonale.

## Anatomia di una quota lineare

```
  |←————— 5.00 —————→|
  |                   |
  ●  (linea estensione 1)     ●  (linea estensione 2)
  p1                  p2
```

- **Linee di estensione** — scendono da ciascun punto misurato perpendicolari alla linea di quota.
- **Linea di quota** — orizzontale (misura distanza X) o verticale (misura distanza Y).
- **Valore** — la distanza proiettata lungo l'asse scelto, non la distanza reale punto a punto.

## Posizionamento di una quota lineare

1. Digita `dimlinear` nel terminale o clicca il pulsante **Dimension Linear** nella barra degli strumenti.
2. **Clicca il primo punto di estensione** (p1), oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
3. **Clicca il secondo punto di estensione** (p2). L'inserimento di coordinate funziona anche qui.
4. **Sposta il cursore** per posizionare la linea di quota. L'orientamento viene rilevato automaticamente dalla posizione del cursore.
5. **Clicca** per posizionare, oppure digita una distanza di scostamento e premi **Invio** per un posizionamento preciso.

## Rilevamento automatico dell'orientamento

Quando nessun orientamento è forzato, il comando legge la posizione del cursore rispetto ai due punti misurati:

| Posizione cursore | Orientamento rilevato | Cosa viene misurato |
|-------------------|----------------------|---------------------|
| Sopra o sotto i punti | Orizzontale | Δ X tra p1 e p2 |
| A sinistra o destra dei punti | Verticale | Δ Y tra p1 e p2 |

Premi **O** per bloccare l'orizzontale o **V** per bloccare il verticale in qualsiasi momento durante la fase di posizionamento. Una volta bloccato, l'orientamento non cambia mentre sposti il cursore.

## Distanza di scostamento digitata

Digita un numero durante il posizionamento per fissare la linea di quota a una distanza esatta dai punti misurati:

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiunge cifra alla distanza di scostamento |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` / `Spazio` | Posiziona alla distanza digitata |

Il lato del cursore (sopra/sotto per orizzontale, sinistra/destra per verticale) determina il segno — la linea di quota appare sul lato in cui si trova attualmente il cursore.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Avvia inserimento coordinata X (fasi p1/p2), o distanza scostamento (fase posizionamento) |
| `,` | Blocca X e passa all'inserimento Y (fasi p1/p2) |
| `O` | Blocca orientamento orizzontale (solo fase posizionamento) |
| `V` | Blocca orientamento verticale (solo fase posizionamento) |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` / `Spazio` | Conferma coordinata o scostamento digitato |
| `Escape` | Annulla |

## Dimension Linear vs Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Asse | Sempre O o V | Parallelo alla linea misurata |
| Misura | Solo componente X o Y | Distanza euclidea reale |
| Tasti O/V | Sì — blocca orientamento | No — segue sempre p1→p2 |
| Ideale per | Layout ortogonali, piante | Elementi diagonali, tagli angolati |

## Concatenamento quote

Per aggiungere altre quote continuando dall'ultima linea di estensione, usa [Dimension Continue](./dim-continue) subito dopo aver posizionato questa.

## DXF — entità DIMENSION

Le quote lineari vengono salvate come entità `DIMENSION` con `rotationDeg` impostato a `0` (orizzontale) o `90` (verticale). Origini linee di estensione, posizione linea di quota, posizione testo, valore misurato, stile frecce, altezza testo e tutti i flag di visualizzazione vengono mantenuti senza perdita.
