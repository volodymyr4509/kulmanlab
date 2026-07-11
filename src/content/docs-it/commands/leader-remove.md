---
title: "Comando Leader− — Rimuovere un Braccio con Freccia da un Multileader in KulmanLab CAD"
description: "Il comando Leader− rimuove un braccio con freccia da un multileader che ne ha due o più. Passa il cursore vicino al braccio da rimuovere — il braccio più vicino viene evidenziato. Il dogleg, il testo e i bracci rimanenti vengono conservati."
keywords: [CAD leader rimuovi braccio, comando leader-, rimuovi freccia dal leader, elimina braccio multileader, kulmanlab]
group: markup
order: 3
---

# Leader−

Il comando `leader-` rimuove un braccio con freccia da un multileader esistente. L'etichetta di testo, il dogleg e tutti i bracci rimanenti vengono conservati — viene eliminato solo il braccio selezionato. Un multileader con un solo braccio non può avere il suo braccio rimosso.

## Rimozione di un braccio

1. Digita `leader-` nel terminale.
2. **Clicca un multileader** con due o più bracci. Se il leader cliccato ha un solo braccio, il terminale mostra un errore e attende una selezione valida.
3. **Sposta il cursore vicino al braccio** che vuoi rimuovere — il braccio più vicino viene evidenziato con un indicatore.
4. **Clicca** per rimuovere quel braccio.

Il braccio viene rimosso e il comando rimane attivo — puoi immediatamente cliccare un altro leader (o lo stesso) per rimuovere altri bracci. Premi **Invio**, **Spazio** o **Esc** per terminare.

```
  Prima:                    Dopo:
  ◄── braccio 1             ◄── braccio 1
       \                          \
        ●──── dogleg ──── testo    ●──── dogleg ──── testo
       /
  braccio 2 ──►  ← questo braccio rimosso
```

## Come viene determinato il braccio più vicino

Il comando misura la distanza perpendicolare dal cursore ai segmenti di linea di ogni braccio (incluso il segmento dall'ultimo punto del braccio al dogleg). Il braccio con la distanza minore viene evidenziato e sarà rimosso al clic.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Invio` / `Spazio` | Termina la rimozione dei bracci |
| `Esc` | Annulla e ripristina |

## Note

- Un leader con **un solo braccio** è protetto — devi prima aggiungere un braccio prima di poterne rimuovere uno.
- La posizione del dogleg e il contenuto del testo vengono sempre conservati indipendentemente dal braccio rimosso.

## Comandi correlati

| Comando | Funzione |
|---------|---------|
| [Leader](../leader/) | Crea un nuovo multileader da zero |
| [Leader+](../leader-add/) | Aggiunge un braccio a un multileader esistente |
