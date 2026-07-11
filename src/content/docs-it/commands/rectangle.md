---
title: Comando Rectangle — Disegnare Rettangoli Allineati agli Assi in KulmanLab CAD
description: Il comando Rectangle crea un rettangolo allineato agli assi da due angoli opposti. Il risultato è una LWPOLYLINE chiusa con quattro vertici — identica a qualsiasi altra polilinea una volta posizionata, quindi ogni comando di modifica delle polilinee si applica ad essa.
keywords: [CAD comando rectangle, disegna rettangolo CAD, rettangolo allineato agli assi, polilinea chiusa CAD, LWPOLYLINE DXF, modifica grip rettangolo, kulmanlab]
group: shapes
order: 3
---

# Rectangle

Il comando `rectangle` disegna un rettangolo allineato agli assi definito da due clic su angoli opposti. Il risultato è memorizzato come una **`LWPOLYLINE` chiusa** con quattro vertici — uno per ogni angolo. Non esiste un tipo di entità rettangolo dedicato: dopo la creazione la forma si comporta esattamente come qualsiasi altra [Polilinea](../polyline/) e ogni modifica alle polilinee si applica ad essa.

## Disegnare un rettangolo

1. Digita `rectangle` nel terminale o clicca il pulsante **Rectangle** nella barra degli strumenti.
2. **Clicca il primo angolo**, oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
3. **Clicca l'angolo opposto** — il rettangolo viene posizionato istantaneamente e il comando termina. Anche qui è disponibile l'inserimento coordinate.

```
  ● (primo clic)──────────────────┐
  |                               |
  |   anteprima live segue        |
  |   il cursore dopo il passo 2  |
  └───────────────────────────────● (secondo clic)
```

I due clic possono essere qualsiasi coppia di angoli diagonalmente opposti — alto-sinistra + basso-destra, o basso-sinistra + alto-destra, ecc. L'ordine non importa.

## Inserimento coordinate

In entrambi i passi degli angoli puoi digitare una posizione esatta:

1. Digita il valore X.
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per posizionare l'angolo.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Inizia l'inserimento coordinata X |
| `,` | Blocca X e passa all'inserimento Y |
| `Invio` | Conferma la coordinata digitata |
| `Esc` | Annulla |

I lati sono sempre orizzontali e verticali — non c'è blocco angolo per il comando rettangolo.

## Modifica con grip — ridisegnare dopo la creazione

Un rettangolo selezionato mostra grip in ogni vertice e al punto medio di ogni lato:

| Grip | Posizione | Funzione |
|------|-----------|---------|
| **Angolo** | Ognuno dei 4 vertici | Trascina per spostare quel vertice; i due lati adiacenti si allungano per seguire — l'angolo opposto rimane fisso |
| **Punto medio del lato** | Centro di ognuno dei 4 lati | Trascina per traslare entrambi gli endpoint di quel lato insieme, mantenendo lunghezza e angolo del lato |

Trascinare un grip d'angolo trasforma il rettangolo in un quadrilatero non rettangolare. Se hai bisogno solo di un rettangolo di dimensioni diverse, trascina un angolo mantenendo i lati approssimativamente ortogonali, o cancellalo e disegnane uno nuovo.

## Comandi di modifica supportati

Si applicano tutti i comandi di modifica delle polilinee. Trim e Extend sono solo per [Linea](../line/) e non funzionano sui rettangoli:

| Comando | Effetto sul rettangolo |
|---------|----------------------|
| [Move](../move/) | Trasla tutti e quattro i vertici dello stesso spostamento |
| [Copy](../copy/) | Crea un rettangolo identico in una nuova posizione |
| [Rotate](../rotate/) | Ruota tutti e quattro i vertici intorno al punto base scelto |
| [Mirror](../mirror/) | Riflette tutti e quattro i vertici rispetto all'asse speculare |
| [Scale](../scale/) | Scala tutti e quattro i vertici uniformemente dal punto base |
| [Offset](../offset/) | Crea un rettangolo parallelo (interno o esterno) a una distanza fissa |
| [Delete](../delete/) | Rimuove il rettangolo dal disegno |

## Rectangle vs Polyline vs Linea

| | Rettangolo | Polilinea | Linea |
|---|-----------|---------|-------|
| Come disegnarlo | 2 clic (angoli) | Clic su ogni vertice | Clic su ogni endpoint |
| Tipo di entità | `LWPOLYLINE` chiusa | `LWPOLYLINE` aperta o chiusa | `LINE` per segmento |
| Lati sempre ortogonali | Sì (alla creazione) | No | No |
| Trim / Extend | No | No | Sì |
| Ideale per | Riquadri, cornici, aree rettangolari | Contorni e percorsi arbitrari | Segmenti singoli, linee di costruzione |

## DXF — entità LWPOLYLINE

I rettangoli vengono salvati come entità `LWPOLYLINE` chiuse con quattro vertici. Tutte le proprietà — coordinate dei vertici, colore, livello, tipo di linea, scala del tipo di linea e spessore — vengono salvate e ripristinate senza perdita.

Non esiste un tipo `RECTANGLE` dedicato in DXF. Quando un file viene riaperto, la forma appare come una polilinea chiusa a quattro vertici anziché come un rettangolo. Qualsiasi visualizzatore o editor DXF che supporti `LWPOLYLINE` la visualizzerà correttamente.
