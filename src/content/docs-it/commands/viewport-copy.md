---
title: Comando ViewportCopy — Duplicare una Finestra di Visualizzazione in KulmanLab CAD
description: Il comando ViewportCopy duplica una finestra di visualizzazione selezionata in una nuova posizione nello stesso layout, preservando le impostazioni di scala e vista del modello. Supporta inserimento coordinate esatto, blocco angolo e inserimento distanza digitata.
keywords: [viewport copy, duplica viewport, copia viewport layout, blocco angolo viewport, coordinata esatta viewport, kulmanlab]
group: layouts
order: 2
---

# ViewportCopy

Il comando `ViewportCopy` copia una finestra di visualizzazione in una nuova posizione, preservando la sua scala e il centro del modello. Disponibile solo nello spazio layout.

## Copiare una finestra di visualizzazione

1. Passa a una scheda di layout carta.
2. Facoltativamente clicca una finestra di visualizzazione per preselezionarla.
3. Digita `ViewportCopy` nel terminale o clicca il pulsante **Viewport Copy** nella barra degli strumenti.
4. Se nessuna finestra di visualizzazione era preselezionata, **clicca la finestra di visualizzazione** da copiare.
5. **Clicca il punto base** — il riferimento per lo spostamento. Oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
6. **Clicca la destinazione** — la finestra di visualizzazione viene posizionata all'offset base→destinazione. Oppure usa l'inserimento coordinate / blocco angolo.

Dopo il posizionamento, il comando rimane attivo — clicca un'altra destinazione per posizionare un'altra copia della stessa finestra di visualizzazione. Premi **Invio**, **Spazio** o **Esc** per terminare.

## Inserimento coordinate

Nei passi del punto base e della destinazione puoi digitare una coordinata esatta invece di cliccare:

1. Digita il valore X.
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per confermare.

## Blocco angolo e distanza esatta

Dopo che il punto base è impostato, il comando si aggancia agli assi a 45° (0°, 45°, 90°, 135°, …) quando il cursore si allinea. Mentre è bloccato:

- L'anteprima si aggancia all'asse.
- Digita una distanza e premi **Invio** per posizionare la copia esattamente a quell'offset nella direzione bloccata.

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiunge cifra al valore di distanza |
| `-` | Distanza negativa (inverte la direzione; solo primo carattere) |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` | Posiziona la copia alla distanza digitata |

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Inizia l'inserimento coordinata X, o la distanza con angolo bloccato |
| `,` | Blocca X e passa all'inserimento Y |
| `Invio` | Conferma la coordinata o la distanza digitata |
| `Invio` / `Spazio` | Termina (quando nessun input è in corso) |
| `Esc` | Annulla e ripristina |

## Note

- ViewportCopy è disponibile solo quando una scheda di layout carta è attiva.
- La finestra di visualizzazione copiata eredita la stessa scala, centro del modello, stato di blocco e dimensioni dell'originale.
- Per creare una nuova finestra di visualizzazione da zero, usa [ViewportRectangle](../viewport-rectangle/).
