---
sidebar_position: 1
title: Comando Angle — Misura l'Angolo Interno in un Vertice con Tre Punti in KulmanLab CAD
description: Il comando Angle misura l'angolo interno (0°–180°) in un vertice definito da tre punti cliccati. Clicca primo-punto, vertice, secondo-punto. Il risultato viene mostrato nel terminale con 4 decimali.
keywords: [misura angolo CAD, angolo a tre punti, angolo interno CAD, comando misura angolo, angolo vertice, kulmanlab]
---

# Angle

Il comando `angle` misura l'angolo interno in un vertice formato da due segmenti attraverso tre punti cliccati. Il risultato — sempre compreso tra 0° e 180° — viene visualizzato nel terminale con 4 decimali. È uno dei tre comandi di misurazione — [Distance](../distance/) misura la lunghezza in linea retta, e [Area](../area/) misura l'area racchiusa e il perimetro di un poligono.

## Anatomia di una misurazione angolare

```
  ● primo punto (estremità del primo raggio)
   \
    \  anteprima del primo raggio
     \
      ● vertice (passo 3)
     /
    /  anteprima del secondo raggio (verso il cursore)
   /
  ● terzo punto  →  terminale: "Angle: 45.0000°"
```

- **Primo punto** — un'estremità dell'angolo (passo 2).
- **Vertice** — il punto d'angolo in cui viene misurato l'angolo (passo 3).
- **Terzo punto** — l'altra estremità dell'angolo (passo 4).

## Misurare un angolo

1. Digita `angle` nel terminale o clicca il pulsante **Angle** nella barra degli strumenti.
2. **Clicca il primo punto** — un'estremità del braccio dell'angolo. Oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
3. **Clicca il vertice** — il punto in cui si incontrano i due bracci. L'inserimento di coordinate funziona anche qui.
4. **Clicca il terzo punto** — la seconda estremità del braccio. L'inserimento di coordinate funziona anche qui. Il posizionamento di questo punto stampa il risultato.
5. **Clicca di nuovo** (opzionale) per iniziare una nuova misurazione da quel clic come nuovo primo punto.

## Convenzione dell'angolo interno

Il comando calcola l'angolo usando il prodotto scalare dei due raggi dal vertice:

- **Sempre interno**: il risultato è l'angolo minore, compreso tra 0° e 180°.
- L'ordine in cui si cliccano i punti finali non influisce sul risultato — conta solo la posizione del vertice.
- I punti collineari (tutti e tre sulla stessa linea) restituiscono 0° o 180°.

## Concatenamento delle misurazioni

Dopo che il risultato appare, cliccando si avvia subito la misurazione successiva — il punto cliccato diventa il nuovo primo punto. Il comando non si chiude automaticamente finché non si preme `Escape`.

## Angle vs Distance

| | Angle | Distance |
|---|-------|---------|
| Cosa misura | Angolo interno in un vertice | Lunghezza in linea retta |
| Numero di clic | 3 | 2 |
| Formato risultato | `45.0000°` | `12.3456` (unità) |
| Anteprima canvas | Due linee dal vertice a entrambe le estremità | Linea dal primo punto al cursore |
| Ideale per | Apertura angolare tra due elementi | Lunghezza di un segmento o intervallo |

## Inserimento coordinate

Invece di cliccare, digita una posizione esatta per uno qualsiasi dei tre punti:

1. Digita il valore X.
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per confermare.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Avvia inserimento coordinata X |
| `,` | Blocca X e passa all'inserimento Y |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma la coordinata digitata |
| `Escape` | Annulla e torna al passo 2 |

## Note

- I risultati vengono mostrati solo nel **terminale** — nulla viene aggiunto al disegno.
- La precisione è sempre di 4 decimali in gradi.
