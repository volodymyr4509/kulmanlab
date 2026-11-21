---
title: "Comando ObjectSnapSettings — Impostazioni della barra di controllo"
description: "Il comando ObjectSnapSettings apre una finestra con tutte le impostazioni della barra di controllo — snap, tangente, tracciamento angolare, pin, input digitato, lazo e visualizzazione —, ognuna spiegata accanto all’elenco con un piccolo disegno."
keywords: ["impostazioni snap agli oggetti CAD", "snap tangente CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

Il comando `ImpostazioniSnap` apre una finestra che raccoglie tutte le impostazioni della barra di controllo. Ogni impostazione è spiegata accanto all’elenco, con un piccolo disegno. Aprila con il pulsante a ingranaggio della barra di controllo o digita `ImpostazioniSnap`. Cambiare un’impostazione qui equivale ad attivare il suo pulsante nella barra.

## Le impostazioni

### Dove si posa il cursore

| Barra di controllo | Cosa fa |
|---|---|
| `Snap` | Il cursore salta al punto di griglia più vicino, così i punti scelti cadono su coordinate tonde. Uno snap a un oggetto vicino al cursore ha comunque la precedenza. Il passo della griglia segue lo zoom. |
| `TANG` | Mentre una linea parte da un punto, avvicina il cursore a dove toccherebbe appena un cerchio, un arco, un'ellisse o una spline e si aggancia lì. Funziona in Linea, Polilinea e altri comandi, e trascinando l'estremità di una linea o polilinea. |

### Guide durante il disegno

| Barra di controllo | Cosa fa |
|---|---|
| `ANGL` | Quando il cursore si avvicina a uno di questi angoli dall'ultimo punto, si blocca in quella direzione, mostrata da un raggio tratteggiato. Mentre è bloccato, digita una lunghezza e premi Invio per posare il punto a quella distanza. |
| `Pins` | Lascia il cursore un attimo su un punto di snap per fissarlo. Un punto fissato emette linee guida orizzontali e verticali, e il cursore si aggancia ad esse e ai loro incroci. |
| `Dist` | L'ultimo punto fissato fa da punto di partenza: quando il cursore si blocca su un angolo da esso, digita una lunghezza e premi Invio per posare il punto a quella distanza. Richiede i pin vettoriali. |

### Input e selezione

| Barra di controllo | Cosa fa |
|---|---|
| `Rel` | Un punto X,Y digitato si misura dall'ultimo punto scelto, come se iniziasse con @. Backspace toglie la @ per un punto nelle coordinate del disegno. Disattivato, digita tu la @ per uno scostamento. |
| `Lasso` | Premi e trascina su uno spazio vuoto per tracciare un lazo libero attorno a ciò che vuoi, invece di un rettangolo. Ciò che il lazo racchiude viene selezionato. |

### Visualizzazione

| Barra di controllo | Cosa fa |
|---|---|
| `Grid` | Mostra la griglia di sfondo. La sua spaziatura cambia con lo zoom. Disattivarla non ferma lo snap alla griglia. |
| `LWT` | Disegna le linee con il loro spessore, così quelle più pesanti appaiono più spesse. Disattivato, ogni linea è disegnata sottile, il che può rendere più leggibile un disegno fitto. |

**ANGL** ha una riga propria per il passo: scegli 10°, 20°, 30°, 45° o 90°, oppure scegli **Personalizzato** e digita un angolo qualsiasi da 1° a 180°.

Lo snap tangente, l’input relativo e il lazo sono disattivati per impostazione predefinita. **Ripristina predefiniti** riporta tutte le impostazioni allo stato iniziale.

---

*Correlati: [Vector Pins](../../interface/vector-pins/), [Tracciamento della distanza](../../interface/distance-tracking/), [Griglia e Snap](../../interface/grid-snap/), [Inserimento coordinate](../../interface/coordinate-entry/)*
