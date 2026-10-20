---
title: "Comando PointDivide — posizionare punti a lunghezze uguali lungo un oggetto"
description: "Il comando PointDivide divide una linea, polilinea, arco, cerchio, ellisse o spline in tratti di uguale lunghezza e posiziona un punto a ogni divisione, mostrandoli in anteprima mentre digiti il numero di tratti."
keywords: ["comando dividi CAD", "dividere una linea in parti uguali CAD", "punti lungo un oggetto CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

Il comando `DividiConPunti` posiziona [punti](../point/) che dividono un oggetto in tratti di uguale lunghezza. L’oggetto non cambia: i punti sono nuove entità sul layer e nel colore correnti, comodi per lo snap.

## Dividere un oggetto

1. Digita `DividiConPunti` nel terminale o scegli **Point Divide** dal menu a discesa delle matrici nel pannello Edit.
2. **Fai clic sull’oggetto**: linea, polilinea, arco, cerchio, ellisse o spline. Qualsiasi altra cosa viene rifiutata e puoi scegliere di nuovo.
3. **Digita il numero di tratti**, un intero da 2 a 32767. I punti compaiono in anteprima sull’oggetto mentre digiti.
4. Premi **Enter** o **Space** per posizionarli. Il comando termina.

## Dove finiscono i punti

- La spaziatura è per lunghezza lungo l’oggetto, non per angolo, quindi un’ellisse o una spline viene tagliata in pezzi di uguale lunghezza. I tratti ad arco di una polilinea sono seguiti lungo la loro curva.
- Su un oggetto aperto — linea, polilinea aperta, arco, ellisse parziale o spline aperta — i punti vanno tra i tratti, mai alle estremità: 5 tratti danno 4 punti.
- Su un oggetto chiuso — cerchio, polilinea chiusa, ellisse intera o spline chiusa — i punti fanno tutto il giro dal suo inizio, che riceve anch’esso un punto: un cerchio inizia all’angolo 0, una polilinea chiusa al suo primo vertice. 5 tratti danno 5 punti.
- Un numero fuori da 2–32767 viene rifiutato: il terminale dice perché e lo cancella, così puoi digitare di nuovo.

Backspace cancella l’ultima cifra. Esc ricomincia, così puoi scegliere un altro oggetto. Enter o Space prima di scegliere un oggetto termina il comando.

---

*Correlati: [Point Interval](../point-interval/) per punti a distanza fissa, [Point](../point/) per punti singoli e [ArrayPolar](../array-polar/) per ripetere oggetti anziché punti.*
