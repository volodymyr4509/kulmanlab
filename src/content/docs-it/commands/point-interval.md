---
title: "Comando PointInterval — posizionare punti a distanza fissa lungo un oggetto"
description: "Il comando PointInterval posiziona punti alla distanza che digiti lungo una linea, polilinea, arco, cerchio, ellisse o spline, partendo dall’estremità vicino a cui fai clic, e li mostra in anteprima mentre digiti la lunghezza."
keywords: ["punti a intervallo CAD", "punti a distanza fissa su una linea CAD", "misurare lungo un oggetto CAD", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

Il comando `PuntiAIntervalli` posiziona [punti](../point/) a distanza fissa lungo un oggetto, come si segnano le progressive lungo un tracciato. L’oggetto non cambia: i punti sono nuove entità sul layer e nel colore correnti, comodi per lo snap.

## Posizionare punti a intervallo

1. Digita `PuntiAIntervalli` nel terminale o scegli **Point Interval** dal menu a discesa delle matrici nel pannello Edit.
2. **Fai clic sull’oggetto vicino all’estremità da cui partire**: linea, polilinea, arco, cerchio, ellisse o spline. Qualsiasi altra cosa viene rifiutata e puoi scegliere di nuovo.
3. **Digita la lunghezza dell’intervallo.** I punti compaiono in anteprima sull’oggetto mentre digiti.
4. Premi **Enter** o **Space** per posizionarli. Il comando termina.

## Dove finiscono i punti

- Il primo punto va a un intervallo dall’inizio e gli altri seguono a un intervallo l’uno dall’altro, misurati lungo l’oggetto, curve comprese. Sull’inizio stesso non va alcun punto.
- Su un oggetto aperto — linea, polilinea aperta, arco, ellisse parziale o spline aperta — la misura parte dall’estremità vicino a cui hai fatto clic. Ciò che avanza all’estremità lontana resta senza segno: quell’estremità riceve un punto solo se l’intervallo ci sta esattamente.
- Su un oggetto chiuso — cerchio, polilinea chiusa, ellisse intera o spline chiusa — la misura parte dall’inizio proprio dell’oggetto, ovunque tu faccia clic: un cerchio dall’angolo 0 in senso antiorario, una polilinea chiusa dal suo primo vertice. I punti si fermano prima dell’inizio.
- Una lunghezza di 0 o meno, maggiore dell’oggetto o che darebbe più di 32767 punti viene rifiutata: il terminale dice perché e la cancella, così puoi digitare di nuovo.

Backspace cancella l’ultimo carattere. Esc ricomincia, così puoi scegliere un altro oggetto. Enter o Space prima di scegliere un oggetto termina il comando.

---

*Correlati: [Point Divide](../point-divide/) per dividere un oggetto in un numero di lunghezze uguali e [Point](../point/) per punti singoli.*
