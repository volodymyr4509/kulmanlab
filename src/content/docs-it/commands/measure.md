---
title: "Comando Measure — leggere distanze, lunghezze, angoli e aree attorno al cursore"
description: "Il comando Measure legge il disegno attorno al cursore mentre lo muovi — la distanza dalla geometria più vicina, la lunghezza o il raggio di ciò che incontra, l’angolo in cui le linee si incontrano — e con un clic dà area e perimetro di un’area chiusa. Nel disegno non cambia nulla."
keywords: ["comando misura CAD", "misurare area e perimetro CAD", "misura di distanza in tempo reale CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

Il comando `Misura` legge il disegno attorno al cursore mentre lo muovi, senza punti da scegliere: quanto è distante la geometria più vicina, quanto è lunga o tonda e l’angolo in cui le linee si incontrano. Un clic dentro un’area chiusa ne dà area e perimetro. Nel disegno non cambia nulla.

## Misurare

1. Digita `Misura` nel terminale o fai clic su **Measure**, il primo pulsante del pannello Measure.
2. **Muovi il cursore.** Da lì il comando guarda a destra, in alto, a sinistra e in basso la geometria più vicina e mostra ciò che trova.
3. **Fai clic dentro un’area chiusa** per riempirla e leggerne area e perimetro — vedi sotto.
4. Premi **Enter**, **Space** o **Escape** per terminare.

## Cosa mostra

- **Distanza da lato a lato** — da ciò che il cursore incontra da una parte a ciò che incontra dall’altra, in orizzontale e in verticale. Se solo un lato ha qualcosa, la distanza parte dal cursore. Ogni estremo che incontra qualcosa ha un piccolo punto pieno; un estremo al cursore no.
- **Lunghezza o raggio** — ogni oggetto raggiunto dal comando viene evidenziato con la sua lunghezza, o il suo raggio quando fa parte di un cerchio.
- **Angolo** — dove due rette raggiunte si incontrano, viene scritto l’angolo fra loro; un angolo retto è segnato con un piccolo quadrato.

Lunghezze e angoli sono scritti come li scrive il [DimensionStyle](../dimension-style/) corrente, nel suo formato delle unità e con la sua precisione.

## Area e perimetro

Un clic dentro un’area chiusa la riempie e mette area e perimetro nel prompt e nella cronologia. La regione si trova come la trova [Hatch](../hatch/): linee separate che si incontrano estremo con estremo chiudono un’area proprio come una polilinea, e tutto ciò che è chiuso al suo interno viene escluso come isola — il suo bordo conta nel perimetro e la sua area viene sottratta.

L’area è un semplice numero di unità di disegno al quadrato — piedi e pollici non sanno scrivere un’area — mentre il perimetro segue il formato delle unità. Fai clic dentro un’altra area per misurarla. Se nulla di chiuso circonda il punto, il terminale ne dice il motivo con gli stessi messaggi di Hatch: no boundary found, point is not enclosed o boundary is open.

## Da sapere

- Misura rispetto a linee, archi, cerchi, ellissi, polilinee e spline; lunghezze e aree sono esatte, anche per ellissi e spline.
- Gli oggetti sui layer congelati vengono ignorati; quelli sui layer bloccati vengono misurati.
- In un disegno grande guarda solo ciò che è vicino al cursore, quindi resta reattivo.

---

*Correlati: [Distance](../distance/), [Angle](../angle/) e [Area](../area/) per misure fra punti che scegli, e [Hatch](../hatch/) per come si trovano le aree chiuse.*
