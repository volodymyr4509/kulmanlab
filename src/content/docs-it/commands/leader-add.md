---
sidebar_position: 12
title: Comando Leader+ — Aggiungere un Braccio con Freccia a un Multileader in KulmanLab CAD
description: Il comando Leader+ aggiunge un nuovo braccio con punta di freccia a un multileader esistente. Il nuovo braccio condivide il dogleg, il testo e tutto lo stile del leader selezionato. Due clic — seleziona il leader, posiziona la nuova punta.
keywords: [CAD leader aggiungi braccio, comando leader+, aggiungi freccia al leader, braccio multileader, kulmanlab]
---

# Leader+

Il comando `leader+` aggiunge un nuovo braccio con punta di freccia a un multileader esistente. Il nuovo braccio parte dal dogleg esistente del leader fino a una nuova punta di freccia che clicchi. Tutto lo stile — posizione del dogleg, testo, tipo di freccia e dimensione — viene ereditato dal leader selezionato.

## Aggiungere un braccio

1. Digita `leader+` nel terminale.
2. **Clicca un multileader esistente** per selezionarlo.
3. **Clicca la nuova punta della freccia**, oppure digita `X,Y` e premi **Invio** per una coordinata esatta. Una linea di anteprima mostra dal cursore al dogleg del leader.

Il braccio viene posizionato e il comando rimane attivo — puoi immediatamente cliccare un altro leader per aggiungere altri bracci. Premi **Invio**, **Spazio** o **Esc** per terminare.

```
  Prima:                         Dopo:
  ◄── braccio 1                  ◄── braccio 1
       \                               \
        ●──── dogleg ──── testo         ●──── dogleg ──── testo
                                       /
                                  braccio 2 ──►  (nuova punta cliccata)
```

## Inserimento coordinata per la punta

Invece di cliccare, puoi digitare una posizione esatta:

1. Digita il valore X.
2. Premi `,` — il terminale conferma che X è bloccato.
3. Digita il valore Y.
4. Premi **Invio** per posizionare.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Inizia a digitare la coordinata X |
| `,` | Blocca X e passa all'inserimento Y |
| `Invio` | Conferma la coordinata digitata e posiziona il braccio |
| `Invio` / `Spazio` | Termina (quando nessun input è in corso) |
| `Esc` | Annulla e ripristina |

## Note

- Solo le entità **Multileader** possono essere selezionate — cliccare qualsiasi altro tipo di entità non fa nulla.
- Il nuovo braccio parte dal dogleg esistente; scegli solo dove va la punta della freccia.
- Non c'è limite al numero di bracci che un multileader può avere.

## Comandi correlati

| Comando | Funzione |
|---------|---------|
| [Leader](../leader/) | Crea un nuovo multileader da zero |
| [Leader−](../leader-remove/) | Rimuove un braccio da un multileader con due o più bracci |
