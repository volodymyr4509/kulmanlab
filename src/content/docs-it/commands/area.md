---
title: Comando Area — Misura l'Area e il Perimetro di un Poligono
description: Il comando Area misura l'area racchiusa e il perimetro di un poligono definito da 3 o più punti cliccati, usando la formula di Gauss (shoelace). Supporta l'inserimento direzionale con blocco angolare e un'evidenziazione persistente del risultato sul canvas.
keywords: [CAD misura area, comando area, calcolo area poligono, misurazione perimetro, formula di Gauss, kulmanlab]
group: measure
order: 3
---

# Area

Il comando `area` misura l'area racchiusa e il perimetro di un poligono definito da tre o più punti cliccati, e stampa entrambi i risultati nel terminale con 4 decimali. È il terzo comando di misurazione, insieme a [Distance](../distance/) (lunghezza in linea retta) e [Angle](../angle/) (angolo interno in un vertice).

## Anatomia di una misurazione di area

```
  ● primo punto
   \
    \
     ● secondo punto
      \
       \             (tratteggiato) anteprima del lato di chiusura
        ●───────────────┐
      terzo punto       │  (tratteggiato) anteprima del lato successivo verso il cursore
                        ✕ cursore  →  terminale: "Area: 12.3456  Perimeter: 45.6789"
```

- **Vertici** — ogni punto cliccato (o digitato) diventa un vertice del poligono; i lati confermati vengono disegnati con linea continua e l'interno viene riempito con un'evidenziazione traslucida.
- **Lati di anteprima** — linee tratteggiate mostrano il lato in sospeso dall'ultimo vertice al cursore, e il lato di chiusura dal cursore al primo vertice.
- **Lato di chiusura** — non si clicca mai di nuovo sul primo punto; premere Invio chiude automaticamente il poligono.

## Misurare un'area

1. Digita `area` nel terminale o clicca il pulsante **Area** nella barra degli strumenti (riga inferiore del pannello Measure).
2. **Clicca il primo punto**, oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
3. **Clicca ogni vertice aggiuntivo** in ordine intorno alla forma. L'inserimento di coordinate funziona a ogni passo.
4. Una volta posizionati almeno **3 punti**, premi **Invio** (senza un inserimento di coordinata o distanza in sospeso) per chiudere il poligono e calcolare il risultato.
5. Il terminale stampa `Area: <valore>  Perimeter: <valore>`, e il poligono chiuso — riempimento, contorno e maniglie dei vertici — rimane evidenziato sul canvas.
6. **Clicca ovunque, premi un tasto qualsiasi, oppure premi `Escape`** per nascondere il risultato e terminare il comando.

## Blocco angolare e distanza esatta

Dopo aver posizionato il primo vertice, spostandosi verso uno degli incrementi di tracciamento angolare configurati (10°, 15°, 20°, 30°, 45° o 90°, impostabili dal menu a tendina della barra degli strumenti) il lato successivo si blocca su quella direzione:

- L'anteprima del lato si allinea alla direzione bloccata, e un indicatore di tracciamento angolare viene disegnato sul vertice di ancoraggio.
- Digita una lunghezza e premi **Invio** per posizionare il vertice successivo esattamente a quella distanza lungo la direzione bloccata.
- Cliccando mentre è bloccato (senza lunghezza digitata) il vertice viene posizionato sulla proiezione del cursore sulla direzione bloccata.

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiungi al valore di lunghezza del lato |
| `-` | Lunghezza negativa (solo come primo carattere) |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` | Posiziona il vertice successivo alla lunghezza digitata |

## Chiudere il poligono

- Invio chiude la forma solo una volta posizionati **3 o più** vertici — con meno, non ha alcun effetto.
- Il lato dall'ultimo vertice al primo viene aggiunto automaticamente e conteggiato sia nell'area che nel perimetro.
- I punti possono essere posizionati in qualsiasi ordine (orario o antiorario) — il risultato è identico.

## Area vs Distance vs Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| Cosa misura | Area racchiusa e perimetro di un poligono | Lunghezza in linea retta | Angolo interno in un vertice |
| Numero di clic | 3 o più, chiuso con Invio | 2 | 3 |
| Formato risultato | `12.3456  Perimeter: 45.6789` | `12.3456` (unità) | `45.0000°` |
| Anteprima canvas | Poligono riempito con lato di chiusura tratteggiato | Linea dal primo punto al cursore | Due linee dal vertice al cursore |
| Dopo il risultato | Si nasconde con qualsiasi input, poi il comando termina | Un clic concatena una nuova misurazione | Un clic concatena una nuova misurazione |
| Ideale per | Regioni racchiuse, area di una stanza o pannello | Lunghezza di un segmento o intervallo | Apertura angolare tra due elementi |

## Inserimento coordinate

Invece di cliccare, digita una posizione esatta per qualsiasi vertice:

1. Digita il valore X.
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per confermare.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Avvia l'inserimento della coordinata X, o l'inserimento della lunghezza del lato con blocco angolare attivo |
| `,` | Blocca X e passa all'inserimento Y |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma una coordinata o lunghezza digitata; con 3 o più vertici e nessun inserimento in sospeso, chiude il poligono |
| `Escape` | Durante la selezione dei vertici: scarta i punti e ricomincia dal primo punto; una volta mostrato il risultato: lo nasconde e termina il comando |

## Note

- L'area viene calcolata con la formula di Gauss (shoelace) ed è sempre riportata come valore positivo, indipendentemente dall'ordine dei clic.
- I poligoni auto-intersecanti (lati che si incrociano) producono comunque un risultato numerico, ma il valore potrebbe non corrispondere alla regione visivamente racchiusa — mantieni un ordine di clic senza incroci per un'area significativa.
- I risultati vengono mostrati solo nel **terminale e come evidenziazione temporanea sul canvas** — nulla viene aggiunto permanentemente al disegno.
- A differenza di Distance e Angle, Area **non** concatena automaticamente una nuova misurazione — dopo aver nascosto il risultato, esegui di nuovo `area` per misurare un altro poligono.
- La precisione è sempre di 4 decimali sia per l'area che per il perimetro, nelle stesse unità delle coordinate del disegno (nessuna conversione di unità).
