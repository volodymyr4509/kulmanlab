---
title: Spline Fit — Spline Interpolatrici Attraverso Punti Cliccati
description: Il comando Spline Fit disegna una spline cubica che passa esattamente per ogni punto cliccato. Internamente la curva è memorizzata sia con punti di adattamento che con vertici di controllo calcolati. Trascinare un grip del punto di adattamento ri-interpola l'intera curva. Round-trip DXF completo come entità SPLINE.
keywords: [CAD comando spline fit, spline interpolatrice CAD, spline per punti, disegna curva liscia CAD, SPLINE DXF punti adattamento, modifica grip spline, kulmanlab]
group: shapes
order: 9
---

# Spline Fit

Il comando `splinefit` disegna una spline cubica che passa per ogni punto cliccato — una curva interpolatrice. A differenza di [Spline CV](../spline-cv/), dove la curva è solo attratta verso i vertici di controllo, qui la curva è costretta a toccare ogni coordinata cliccata esattamente. Internamente l'editor adatta i vertici di controllo per raggiungere questo risultato, e quei CV vengono memorizzati insieme ai punti di adattamento nel file DXF.

## Disegnare una spline per punti di adattamento

1. Digita `splinefit` nel terminale o clicca il pulsante **Spline Fit** nella barra degli strumenti.
2. **Clicca per posizionare i punti di adattamento** — la curva passerà per ciascuno di essi. Oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
3. Premi **Invio** per terminare (almeno 2 punti richiesti).

```
  ●──────●──────●──────●  ← la curva passa esattamente per ogni clic
  p1     p2     p3     p4
```

L'anteprima live mostra la curva interpolata corrente mentre sposti il cursore, incluso il prospettico punto successivo nella posizione del cursore. Premi **Esc** per scartare tutti i punti posizionati e uscire.

## Inserimento coordinate

Invece di cliccare, digita una posizione esatta per qualsiasi punto di adattamento:

1. Digita il valore X.
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per posizionare il punto di adattamento.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Inizia l'inserimento coordinata X |
| `,` | Blocca X e passa all'inserimento Y |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma la coordinata digitata, o termina la spline se nessun input è in corso e ≥ 2 punti esistono |
| `Esc` | Scarta tutti i punti ed esce |

## Modifica con grip — ridisegnare tramite punti di adattamento

Una spline fit selezionata espone un grip per ogni punto di adattamento:

| Grip | Posizione | Funzione |
|------|-----------|---------|
| **Punto di adattamento** | In ogni posizione cliccata | Trascina per spostare quel punto — l'intera curva si ri-interpola per passare per la nuova posizione |

Trascinare un grip ri-adatta l'intera curva, non solo i segmenti adiacenti. Questo è diverso dalla modifica dei grip delle polilinee, dove spostare un vertice ridisegna solo i due segmenti adiacenti.

Non esiste un grip "sposta tutta la spline". Per traslare l'intera spline, usa il comando [Move](../move/).

## Comandi di modifica supportati

| Comando | Effetto sulla spline |
|---------|---------------------|
| [Move](../move/) | Trasla tutti i punti di adattamento e i CV ricalcolati dello stesso spostamento |
| [Copy](../copy/) | Crea una spline identica in una nuova posizione |
| [Rotate](../rotate/) | Ruota tutti i punti di adattamento attorno al punto base scelto |
| [Mirror](../mirror/) | Riflette tutti i punti di adattamento rispetto all'asse speculare |
| [Scale](../scale/) | Scala tutti i punti di adattamento uniformemente dal punto base |
| [Delete](../delete/) | Rimuove la spline |

Le spline non supportano **Offset**, **Trim** o **Extend**.

## Spline Fit vs Spline CV — quale usare

| | Spline Fit | Spline CV |
|---|------------|-----------|
| La curva passa attraverso i punti | Ogni punto cliccato esattamente | Solo primo e ultimo (bloccati) |
| Effetto modifica grip | Il punto di adattamento si sposta → intera curva ri-interpolata | Il CV si sposta → curva attratta verso la nuova posizione |
| Prevedibilità della forma | Alta — la curva segue i clic | Più bassa — la curva segue i CV con ritardo |
| Ideale per | Curve che devono passare per coordinate specifiche | Curve estetiche morbide, percorsi a forma libera |

## DXF — entità SPLINE (forma a punti di adattamento)

Le spline fit vengono salvate come entità `SPLINE` nel file DXF, memorizzando sia le coordinate dei punti di adattamento che i vertici di controllo calcolati. Il `splineFlag` è impostato a `8` (spline a punti di adattamento) in modo che un'applicazione di ricaricamento sappia quale set di punti visualizzare come grip modificabili. Tutte le proprietà — colore, livello, tipo di linea, scala del tipo di linea e spessore — vengono salvate e ripristinate senza perdita.
