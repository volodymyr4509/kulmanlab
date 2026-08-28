---
title: Tracciamento della distanza — Digitare una lunghezza esatta da un punto fissato
description: L'interruttore Dist consente all'ultimo pin vettoriale di fare da ancoraggio da cui il tracciamento angolare misura, così puoi digitare una lunghezza esatta e collocare un punto a distanza e angolo precisi da un punto esistente — compreso il primo punto di una forma.
keywords: [immissione distanza CAD, digitare distanza esatta CAD, interruttore Dist, tracciamento distanza dai pin, tracciamento polare CAD, immissione diretta della distanza, kulmanlab]
group: interface
order: 3
---

# Tracciamento della distanza

**Il tracciamento della distanza** consente di collocare un punto digitando una lunghezza esatta invece di fare clic. È governato dall'interruttore **Dist** nella barra di controllo, accanto a [Pins](../vector-pins/) e ANGL, ed è **attivo per impostazione predefinita**, con l'impostazione che persiste tra le sessioni.

Quello che aggiunge è circoscritto ma utile: lascia che il **pin vettoriale più recente** faccia da ancoraggio da cui il tracciamento angolare misura. Senza di esso un comando può misurare solo da un punto che ha già raccolto per conto suo — il che significa che il *primo* punto di una forma non ha nulla da cui misurare.

## I tre interruttori lavorano insieme

Il tracciamento della distanza non si regge da solo. Altri due interruttori devono trovarsi nello stato giusto prima che tu possa digitare una lunghezza:

| Interruttore | Ruolo |
|--------------|-------|
| **Pins** | Fornisce il punto di riferimento. Passa il cursore su un punto di aggancio per 500 ms per fissarlo — vedi [Vector Pins](../vector-pins/). |
| **ANGL** | Fornisce l'angolo. Il tracciamento della distanza diventa disponibile solo quando il cursore è bloccato sull'angolo, quindi ANGL deve essere impostato su un passo (10°, 20°, 30°, 45°, 90°) e non su Off. |
| **Dist** | Permette di usare il pin come ancoraggio anziché solo il punto proprio del comando. |

Con Pins e Dist attivi ma ANGL su **Off** non accadrà nulla: non c'è alcuna direzione bloccata lungo cui misurare una lunghezza.

## Come Pins e Dist sono accoppiati

Il tracciamento della distanza non ha senso con i pin disattivati, perciò i due interruttori restano in passo:

- **Attivare Pins** attiva anche **Dist**.
- **Disattivare Pins** disattiva anche **Dist**.
- **Attivare Dist** attiva **Pins** se non lo era già.
- **Disattivare Dist** lascia **Pins attivo**.

Dist non può quindi mai essere attivo mentre Pins è inattivo, ma puoi mantenere il tracciamento dei pin per l'allineamento e spegnere il tracciamento della distanza — utile se vuoi le linee di riferimento senza che il cursore si blocchi su un pin quando intendevi bloccarti sul tuo ultimo punto.

## Collocare un punto a distanza esatta

1. Attiva **Pins** e **Dist**, e imposta **ANGL** su un passo angolare.
2. Avvia un comando che chiede un punto — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/) e così via.
3. **Fissa un punto di riferimento**: passa il cursore su un punto di aggancio esistente finché il marcatore non diventa un quadrato pieno.
4. Allontana il cursore dal pin all'incirca nell'angolo desiderato. Quando si avvicina a uno dei passi di ANGL la direzione si **blocca** — dal pin compare un indicatore di tracciamento.
5. **Digita la lunghezza** e premi **Enter** o **Space**. Il punto viene collocato esattamente a quella distanza dal pin, lungo l'angolo bloccato.

Il prompt del terminale indica quando puoi digitare. Mentre è bloccato recita:

```
pick start point or enter length: [ ]
```

e il valore digitato compare tra le parentesi.

## Perché il primo punto conta

È il caso che altrimenti sarebbe impossibile. Immagina di voler iniziare una linea esattamente 250 unità a destra di uno spigolo esistente:

1. Avvia [Line](../../commands/line/).
2. Fissa lo spigolo esistente.
3. Spostati a destra finché la direzione non si blocca a 0°.
4. Digita `250` e premi **Enter**.

La linea ora inizia in un punto a 250 unità dallo spigolo, senza geometria di costruzione e senza calcoli. Senza Dist il comando Line non ha ancora raccolto alcun punto, quindi non c'è nulla *da cui* misurare una lunghezza digitata — potresti solo fare clic approssimativamente, o tracciare una linea di costruzione e cancellarla dopo.

Per il **secondo punto e i successivi** il comando ha già il proprio ancoraggio (il punto precedente) ed è quello a essere usato per primo. Il pin viene consultato come alternativa solo quando il tuo ancoraggio non è bloccato, quindi fissare qualcosa non dirotta un blocco che hai già.

## Digitare congela il blocco

Appena inizi a digitare cifre, l'ancoraggio smette di cambiare. Qualunque punto fosse bloccato quando è arrivata la prima cifra resta l'ancoraggio finché non confermi o svuoti il campo — muovere il mouse a metà immissione non sposterà silenziosamente la misura su un altro pin o sul punto proprio del comando.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiunge alla lunghezza |
| `-` | Lunghezza negativa — inverte il verso lungo l'angolo bloccato (solo come primo carattere) |
| `Backspace` | Cancella l'ultimo carattere |
| `Enter` / `Space` | Colloca il punto alla lunghezza digitata |
| `Escape` | Annulla il comando; blocco e valore digitato vengono azzerati |

Digitare una lunghezza è facoltativo. Con la direzione bloccata puoi comunque fare clic, e il punto viene proiettato sull'angolo bloccato.

## Dove funziona

Il tracciamento della distanza è disponibile in ogni comando che chiede di scegliere punti:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) e [ViewportCopy](../../commands/viewport-copy/).

## Vedi anche

- [Vector Pins](../vector-pins/) — fissare punti e seguirne le linee di riferimento
- [Grid & Snap](../grid-snap/) — gli altri ausili di precisione nella barra di controllo
- [Distance](../../commands/distance/) — misurare una distanza esistente invece di digitarne una nuova
