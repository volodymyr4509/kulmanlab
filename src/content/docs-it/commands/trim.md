---
title: Comando Trim — Tagliare Segmenti alle Intersezioni
description: Il comando Trim rimuove la porzione di una Line, Arc, Circle, Ellipse o Polyline tra due punti di intersezione adiacenti più vicini al cursore. Un'anteprima mostra esattamente quale segmento verrà tagliato prima del clic.
keywords: [CAD comando trim, taglia linea CAD, taglia cerchio CAD, taglia arco CAD, taglia ellisse CAD, taglia polilinea CAD, taglia linea intersezione, anteprima trim hover, kulmanlab]
group: edit
order: 8
---

# Trim

Il comando `Taglia` rimuove la porzione di una [Line](../line/), [Arc](../arc/), [Circle](../circle/), [Ellipse](../ellipse/) o [Polyline](../polyline/) che si trova tra due punti di intersezione adiacenti, dividendo l'entità in una o più parti rimanenti. Il segmento da tagliare è determinato dalla posizione del cursore — passa sul tratto da rimuovere e clicca per tagliarlo.

## Tagliare un'entità

1. Digita `Taglia` nel terminale o clicca il pulsante **Trim** nella barra degli strumenti.
2. **Passa il cursore sul segmento** che vuoi rimuovere — un'anteprima evidenzia esattamente la porzione che verrà tagliata.
3. **Clicca** per rimuovere quel segmento.

Il comando rimane attivo dopo ogni taglio, quindi puoi continuare a passare il cursore e cliccare per tagliare altri segmenti — sulla stessa entità o su un'altra. Premi **Invio**, **Spazio** o **Esc** per uscire.

```
  Prima:                        Dopo il taglio del segmento centrale:

  ──────●──────●──────          ──────●          ●──────
      intersez  intersez            (parte sinistra)  (parte destra)
                                    (segmento centrale rimosso)
```

## Come viene determinato il segmento da tagliare

Il comando proietta la posizione del cursore sull'entità passata e trova tutti i punti di intersezione che ha con altre entità. Queste intersezioni dividono l'entità in segmenti — per una Line, un Arc o una Polyline aperta, gli estremi propri dell'entità fungono da confini fissi aggiuntivi. Un Circle o un'Ellipse completi, o una Polyline chiusa (incluso un Rectangle), non hanno estremi propri, quindi sono necessari almeno due punti di intersezione prima di poter essere tagliati. Il segmento il cui intervallo contiene la proiezione del cursore viene evidenziato e sarà rimosso al clic.

- **Line, Arc e Polyline aperta** — il segmento rimosso può essere la porzione iniziale (prima della prima intersezione), una porzione centrale (tra due intersezioni, dividendo l'entità in due parti), o la porzione finale (dopo l'ultima intersezione).
- **Circle, Ellipse e Polyline chiusa/Rectangle** — poiché non c'è un inizio o una fine fissi, può essere rimosso solo l'arco tra due *punti di intersezione*. Con meno di due intersezioni, non appare nessuna anteprima e cliccare non fa nulla. Il resto della forma diventa l'unica parte rimanente.

## Cosa produce il taglio

| Entità | Risultato dopo il taglio |
|--------|------------------------|
| Line | Fino a due entità Line più corte |
| Arc | Fino a due entità Arc più corte |
| Circle | Un'entità [Arc](../arc/) — la forma chiusa del cerchio scompare, quindi la parte rimanente viene memorizzata come arco |
| Ellipse | Un'entità Ellipse con angolo iniziale e finale — la parte rimanente resta un'Ellipse, ora parziale |
| Polyline (aperta) | Fino a due entità Polyline più corte |
| Polyline (chiusa) / Rectangle | Un'entità Polyline aperta — la forma chiusa scompare, quindi la parte rimanente viene memorizzata aperta |

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Invio` / `Spazio` | Esce dalla modalità trim |
| `Esc` | Esce dalla modalità trim |

## Entità supportate

| Entità | Può essere tagliata? |
|--------|---------------------|
| Line | Sì |
| Arc | Sì |
| Circle | Sì — richiede 2 o più punti di intersezione |
| Ellipse | Sì — richiede 2 o più punti di intersezione |
| Polyline (aperta) | Sì |
| Polyline (chiusa) / Rectangle | Sì — richiede 2 o più punti di intersezione |
| Text, Spline, Dimension, Leader | No |

Le entità usate come **bordi di taglio** possono essere una Line, un Arc, Circle, un'Ellipse o Polyline. Le entità Text, Spline, Dimension e Leader non registrano mai intersezioni, quindi non possono nemmeno fungere da bordi.

I **segmenti ad arco** di una Polyline (disegnati con l'opzione Arc, o importati) vengono tagliati esattamente come i segmenti dritti — passa il cursore sulla porzione di arco tra due intersezioni e clicca. Il bordo tagliato mantiene la sua curvatura; cambia solo la lunghezza.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Cosa fa | Rimuove un segmento di un'entità | Allunga un endpoint di una linea fino a un bordo |
| Trigger | Passa il cursore sul segmento da tagliare | Passa il cursore vicino all'endpoint da estendere |
| Risultato | L'entità si divide o si accorcia | L'endpoint della linea si sposta fino al bordo |
| Entità supportate | Line, Arc, Circle, Ellipse, Polyline | Line, Arc, Ellipse, Polyline |
