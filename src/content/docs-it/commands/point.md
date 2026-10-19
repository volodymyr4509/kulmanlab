---
title: "Comando Point — posizionare punti nel disegno in KulmanLab CAD"
description: "Il comando Point posiziona un punto a ogni clic, X,Y digitato o distanza lungo una direzione bloccata, finché non premi Enter, Space o Escape. I punti sono disegnati come un puntino, portano il layer e il colore correnti e viaggiano come entità DXF POINT."
keywords: ["comando punto CAD", "posizionare un punto CAD", "entità DXF POINT", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

Il comando `Punto` posiziona un punto a ogni scelta e resta attivo finché non premi Enter, Space o Escape. Un punto è una posizione senza dimensione: è disegnato come un piccolo puntino e porta il layer e il colore correnti. Viene salvato come entità `POINT`.

## Posizionare punti

1. Digita `Punto` nel terminale o fai clic su **Point**, l’ultimo pulsante del pannello Shapes.
2. **Fai clic** dove va il punto, oppure digita `X,Y` e premi **Enter** per una posizione esatta. Ogni scelta posiziona un punto e il terminale ne registra le coordinate; il comando resta attivo per il successivo.
3. Oppure blocca una direzione da un [pin vettoriale](../../interface/vector-pins/) e digita una distanza: il punto cade esattamente a quella distanza lungo di essa.
4. Premi **Enter**, **Space** o **Escape** per terminare. Enter e Space terminano solo quando non si sta digitando nulla.

## Come appare un punto

Un punto è disegnato come un puntino di 1 px di raggio a ogni livello di zoom, quindi resta visibile quando si riduce e non cresce quando si ingrandisce. Lo stile dei punti del disegno (`$PDMODE` e `$PDSIZE`) non è ancora letto, quindi ogni punto è un puntino, qualunque cosa dica un DXF.

## Modificare i punti

Un punto selezionato ha una maniglia, che lo sposta. Una selezione a finestra prende un punto quando è dentro la finestra, in qualunque direzione si trascini.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) e [Scale](../scale/) funzionano sui punti come su qualsiasi altra entità. La finestra delle proprietà mostra Position X e Position Y, oltre a colore e layer.

## DXF — entità POINT

I punti vengono letti e scritti in DXF come entità `POINT` con posizione, colore e layer (codici di gruppo 10/20, 62 e 8) e viaggiano anche nel JSON salvato. Prima venivano saltati all’importazione. [Export Manager](../export-manager/) elenca i Points in una riga a sé, così puoi escluderli da un’esportazione.

---

*Correlati: [Line](../line/) per lo stesso inserimento di coordinate e [Vector Pins](../../interface/vector-pins/) per posizionare un punto a una distanza fissa lungo una direzione.*
