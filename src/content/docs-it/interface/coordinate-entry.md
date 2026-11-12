---
title: "Inserimento coordinate — digitare punti esatti, relativi e polari"
description: "Ovunque un comando chieda un punto, digitalo invece di fare clic: X,Y per una posizione esatta, @X,Y per misurare dall’ultimo punto e distanza<angolo per un punto polare. L’interruttore Rel rende relativo ogni punto digitato."
keywords: ["inserimento coordinate CAD", "coordinate relative CAD", "coordinate polari CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Inserimento coordinate

Ovunque un comando chieda un punto — l’inizio di una [Line](../../commands/line/), un angolo di un [Rectangle](../../commands/rectangle/), il punto base di un [Move](../../commands/move/) o un grip che stai trascinando — puoi digitarlo invece di fare clic. Inizia a digitare un numero e il terminale mostra ciò che scrivi; premi **Enter** o **Space** per posizionare il punto.

## Quattro modi di scrivere un punto

| Digiti | Il punto è |
|---|---|
| `100,50` | In X 100, Y 50 |
| `@100,50` | 100 in X e 50 in Y dall’ultimo punto |
| `100<45` | A 100 dall’origine, a 45° |
| `@100<45` | A 100 dall’ultimo punto, a 45° |

Gli angoli sono in gradi, in senso antiorario dall’asse X, quindi `@50<90` è 50 verso l’alto e `@50<180` è 50 verso sinistra. Entrambi i valori possono essere negativi.

## L’ultimo punto

`@` misura dall’ultimo punto cliccato o digitato in qualsiasi comando: conta l’ultimo clic del comando precedente, e anche un grip appena trascinato. Se non c’è ancora un ultimo punto, `@100,50` si legge come `100,50`. L’ultimo punto si dimentica passando tra spazio modello e layout, e quando si apre un disegno.

## Rel: relativo per impostazione predefinita

L’interruttore **Rel** nella barra di controllo rende relativo ogni punto digitato: appena digiti la prima cifra, davanti compare un `@`, quindi `100,50` diventa `@100,50`. Premi **Backspace** sopra l’`@` per rendere assoluto quel punto. Se non c’è ancora un ultimo punto, non viene aggiunto alcun `@`. Rel è disattivato per impostazione predefinita e viene ricordato con gli altri interruttori della barra di controllo.

## Tasti durante la digitazione

| Tasto | Effetto |
|---|---|
| `0`–`9`, `.`, `-` | Digitare il numero; `-` solo all’inizio |
| `@` | Rendere relativo il punto, all’inizio di X |
| `,` o **Space** | Terminare X e passare a Y |
| `<` | Terminare X come distanza e passare al suo angolo |
| **Enter** o **Space** | Posizionare il punto, quando Y ha un valore |
| **←** **→** **Home** **End** | Spostare il cursore nel valore che si digita |
| **Backspace** | Cancellare prima del cursore; all’inizio di una Y vuota, tornare a X |

Un punto che non si legge come numeri resta nel terminale perché tu lo corregga. Ogni punto digitato lascia una riga nella cronologia del terminale così come l’hai digitato — `Inserito @100<45` — prima della riga del comando con il punto in cui è arrivato.

## Punti digitati e tracciamento angolare

Quando il cursore è bloccato su un raggio di tracciamento angolare, digitare un numero dà una distanza lungo quel raggio invece di una X. Digitando prima `@` inizi un punto completo, quindi `@100,50` funziona anche su un raggio bloccato.

---

*Correlati: [Tracciamento della distanza](../distance-tracking/) per digitare una lunghezza lungo una direzione bloccata, e [Vector Pins](../vector-pins/) per misurare da un punto fissato.*
