---
title: Comando Spline CV — Disegnare B-Spline Posizionando Vertici di Controllo in KulmanLab CAD
description: Il comando Spline CV disegna una B-spline cubica posizionando vertici di controllo. La curva è attratta verso i vertici ma passa solo attraverso il primo e l'ultimo (nodi bloccati). Ogni grip CV può essere trascinato per ridisegnare la curva dopo il posizionamento. Round-trip DXF completo come entità SPLINE.
keywords: [CAD comando spline, B-spline vertici controllo, spline bloccata CAD, disegna spline CAD, entità SPLINE DXF, modifica grip spline, kulmanlab]
group: shapes
order: 8
---

# Spline CV

Il comando `splinecv` disegna una **B-spline cubica** posizionando vertici di controllo (CV). La curva risultante è attratta verso ogni CV ma non passa attraverso di essi — tranne che nel primo e nell'ultimo vertice, dove i **nodi bloccati** ancorano la curva esattamente. Questo offre un controllo intuitivo della forma: trascina un vertice per spingere la curva verso di esso senza forzarla a toccare ogni punto.

## Disegnare una spline per vertici di controllo

1. Digita `splinecv` nel terminale o clicca il pulsante **Spline CV** nella barra degli strumenti.
2. **Clicca per posizionare i vertici di controllo** — ogni clic aggiunge un vertice. Oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
3. Premi **Invio** per terminare (almeno 2 vertici richiesti).

```
  CV ●         ● CV
      \       /
       \     /    ← curva attratta verso i CV
        \   /         ma non passa attraverso di essi
  CV ●   ●   ● CV (inizio/fine: la curva tocca qui)
```

L'anteprima live si aggiorna mentre sposti il cursore dopo ogni vertice, mostrando come sarà la spline con il punto successivo nella posizione del cursore. Premi **Esc** per scartare tutti i vertici posizionati e uscire.

## Inserimento coordinate

Invece di cliccare, digita una posizione esatta per qualsiasi vertice di controllo:

1. Digita il valore X.
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per posizionare il vertice.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Inizia l'inserimento coordinata X |
| `,` | Blocca X e passa all'inserimento Y |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma la coordinata digitata, o termina la spline se nessun input è in corso e ≥ 2 vertici esistono |
| `Esc` | Scarta tutti i vertici ed esce |

## Modifica con grip — ridisegnare tramite vertici di controllo

Una spline CV selezionata espone un grip per ogni vertice di controllo:

| Grip | Posizione | Funzione |
|------|-----------|---------|
| **Vertice di controllo** | In ogni posizione CV | Trascina per spostare quel CV — la curva si ridisegna verso la nuova posizione |

Non esiste un grip "sposta tutta la spline". Per traslare l'intera spline, usa il comando [Move](../move/).

## Comandi di modifica supportati

| Comando | Effetto sulla spline |
|---------|---------------------|
| [Move](../move/) | Trasla tutti i vertici di controllo dello stesso spostamento |
| [Copy](../copy/) | Crea una spline identica in una nuova posizione |
| [Rotate](../rotate/) | Ruota tutti i CV attorno al punto base scelto |
| [Mirror](../mirror/) | Riflette tutti i CV rispetto all'asse speculare |
| [Scale](../scale/) | Scala tutti i CV uniformemente dal punto base |
| [Delete](../delete/) | Rimuove la spline |

Le spline non supportano **Offset**, **Trim** o **Extend**.

## Spline CV vs Spline Fit — quale usare

| | Spline CV | Spline Fit |
|---|-----------|------------|
| La curva passa attraverso i punti | Solo primo e ultimo (bloccati) | Ogni punto cliccato esattamente |
| Controllo della forma | Trascina i CV verso una regione | Sposta i punti di adattamento che la curva deve toccare |
| Effetto modifica grip | Il CV si sposta → curva attratta | Il punto di adattamento si sposta → curva ri-interpolata |
| Ideale per | Curve estetiche morbide, percorsi a forma libera | Curve che devono passare per coordinate specifiche |

## DXF — entità SPLINE (forma a vertici di controllo)

Le spline CV vengono salvate come entità `SPLINE` nel file DXF, memorizzando il grado, il vettore dei nodi e tutte le coordinate dei vertici di controllo. Tutte le proprietà — colore, livello, tipo di linea, scala del tipo di linea e spessore — vengono salvate e ripristinate senza perdita. Il `splineFlag` è impostato a `9` (spline CV) in modo che la forma venga preservata al ricaricamento. Qualsiasi applicazione DXF che supporti le entità `SPLINE` con dati CV le legge correttamente.
