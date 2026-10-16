---
title: "Come disegnare un esagono o una circonferenza di fori in CAD (Polygon e matrice polare)"
description: "Disegna un poligono regolare da un centro e un raggio o da un lato, poi ripeti i fori su una circonferenza con una matrice polare — gratis nel browser, con valori esatti digitati."
keywords: [disegnare un esagono in CAD, poligono regolare CAD, matrice polare CAD, circonferenza di fori disegno, disposizione fori CAD, disposizione circolare CAD, disegno dado esagonale, disegnare un ottagono CAD, diametro primitivo PCD, strumento poligono CAD gratis]
date: 2026-10-11
author: KulmanLab
tag: Guida
---

Per disegnare un poligono regolare in CAD, indica il numero di lati, scegli il centro e poi un raggio — oppure scegli un lato e il resto segue. Per disegnare una circonferenza di fori, disegna un foro e ripetilo attorno al centro con una matrice polare. Questa guida fa entrambe le cose, con numeri esatti, in un browser su [app.kulmanlab.com](https://app.kulmanlab.com) — gratis, senza installare nulla, e il file non lascia mai il tuo computer.

Sviluppiamo [KulmanLab](https://kulmanlab.com), quindi i passaggi qui sotto usano i suoi comandi. Le idee — apertura tra le facce contro tra gli spigoli, diametro della circonferenza primitiva, copie che ruotano o no mentre girano — sono le stesse in qualsiasi programma CAD.

## Disegnare un poligono regolare

Un poligono regolare ha lati e angoli uguali: un esagono per un dado, un ottagono per un cartello, un pentagono per un ritaglio decorativo. In KulmanLab è il comando **Polygon**.

1. Digita `Poligono` nel terminale, oppure usa il pulsante Polygon nel pannello Shapes.
2. Inserisci il **numero di lati** — un intero qualsiasi da 3 a 1024 — e premi **Enter**. Il prompt è precompilato con il numero usato l’ultima volta.
3. **Fai clic sul centro**, oppure digita `X,Y` per un punto esatto.
4. **Fai clic sul raggio**, oppure digitalo e premi **Enter**.

Il risultato è una singola polilinea chiusa, quindi funziona tutto ciò che si può fare con una polilinea — spostare, ruotare, offset, scalare.

### Tra le facce o tra gli spigoli?

È qui che si inciampa. «Raggio» può significare due distanze diverse, e un esagono si specifica con l’una o con l’altra a seconda di cosa disegni:

| | Misurato fino a | Uso tipico |
|---|---|---|
| **Inside attiva** (predefinito) | Gli spigoli | Una forma che deve stare dentro un cerchio dato |
| **Inside disattiva** | Il punto medio di ogni lato | Una forma con una larghezza tra le facce data — dadi, teste di vite, misure di chiave |

Premi `I` al prompt del raggio per commutare. Un dado esagonale si vende per la larghezza tra le facce, quindi usa **Inside disattiva** e digita la *metà*. Per un dado M8 da 13 mm tra le facce:

1. `Poligono`, poi `6` per i lati, poi fai clic o digita il centro.
2. Premi `I` per disattivare Inside.
3. Digita `6.5` e premi **Enter**.

Le facce sono esattamente a 13 mm; gli spigoli arrivano a 7,51 mm dal centro, circa 15 mm tra gli spigoli. Se digiti il raggio invece di fare clic, il poligono si appoggia con il lato più basso orizzontale, piatto in basso. Se fai clic, prende l’orientamento dal punto in cui clicchi.

### Da un lato

A volte conosci la lunghezza di un lato, non un raggio — per esempio un piano ottagonale con lati da 20 mm. Premi `E` al prompt del primo punto per passare alla modalità **Edge**, poi scegli i due estremi di un lato. Gli altri vertici sono costruiti in senso antiorario, a sinistra di quel lato. Digitando `0,0` e poi `20,0` si ottiene un lato da 20 mm lungo l’asse X con il poligono sopra.

## Disegnare una circonferenza di fori

Una circonferenza di fori — o circonferenza primitiva, «PCD» nei disegni — è un anello di fori equidistanti attorno a un centro. Disegni un foro e lo ripeti. In KulmanLab è **ArrayPolar**.

Prendi sei fori da 6,6 mm su un diametro primitivo di 50 mm, centrato nell’origine:

1. **Disegna il primo foro.** Esegui `Cerchio`, digita il centro come `25` `,` `0` — metà del PCD lungo l’asse X —, premi **Enter**, poi digita il raggio `3.3` e premi **Enter**.
2. **Selezionalo** facendo clic sul cerchio.
3. **Esegui la matrice polare.** Digita `SeriePolare`, oppure usa il pulsante ArrayPolar nel pannello Edit.
4. **Scegli il centro del motivo** — digita `0,0`.
5. Il terminale mostra la matrice com’è — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — e le cinque copie sono in anteprima dal vivo. Premi **Enter** per accettare.

Ecco tutta la circonferenza di fori. Per un numero diverso, premi `I` prima di confermare e digita il numero di elementi — l’originale conta come uno e l’angolo tra loro viene calcolato. Oppure premi `A` e digita invece la spaziatura in gradi; l’angolo di riempimento viene riformulato di conseguenza.

Alcuni dettagli che contano:

- **Fill** è l’angolo dal primo all’ultimo elemento. I 360° predefiniti distribuiscono gli elementi su tutto il cerchio; un numero minore li distribuisce su un arco — per esempio una fila di fori su un quarto di giro. Un angolo negativo va in senso orario.
- **Rotate** decide se ogni copia ruota mentre gira. Per fori circolari non cambia nulla. Per una asola, un dente o una staffa sì: attiva, ogni copia guarda il centro come l’originale; disattiva, ogni copia mantiene l’orientamento dell’originale e viene solo spostata al suo posto. Premi `R` per commutare prima di confermare.
- La matrice crea **copie** — l’originale resta dov’è, e ogni elemento è un’entità ordinaria che puoi modificare dopo.

## Mettere tutto insieme: una flangia

Disegna un esagono per il contorno, un cerchio al centro per l’alesaggio e una circonferenza di fori per i fori di fissaggio. Tre comandi, ogni quota digitata con precisione, nulla da misurare sullo schermo.

Se il pezzo va a un taglio laser, elimina l’eventuale cerchio di costruzione disegnato per trovare la circonferenza primitiva — verrebbe tagliato come tutto il resto — e controlla il file con la nostra guida alla [preparazione di un DXF per il taglio laser](/it/blog/prepare-dxf-for-laser-cutting/). Il poligono è un percorso chiuso per costruzione, che è il motivo più comune per cui i servizi di taglio rifiutano i file.

## Cosa non fa

- **Solo poligoni regolari.** Tutti i lati sono uguali. Un contorno irregolare — una forma con alcuni lati più lunghi — è una [polilinea](/it/docs/commands/polyline/) che disegni punto per punto.
- **Solo 2D.** Disegna contorni piatti. Non ti darà un dado modellato né una vite filettata.
- **Solo browser desktop** — Chrome, Firefox, Safari ed Edge. Non esiste una versione mobile.

---

*Correlati: [Polygon](/it/docs/commands/polygon/) e [ArrayPolar](/it/docs/commands/array-polar/) per tutte le opzioni e i tasti, [Circle](/it/docs/commands/circle/) per digitare raggi esatti e [ArrayGrid](/it/docs/commands/array-grid/) per ripetere oggetti in righe e colonne invece che attorno a un centro.*
