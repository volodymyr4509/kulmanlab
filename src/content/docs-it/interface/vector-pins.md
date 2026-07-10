---
sidebar_position: 5
title: Vector Pins — Agganciare il Cursore alle Linee di Riferimento dei Punti Fissati in KulmanLab CAD
description: I Vector Pins permettono di fissare un punto di snap tenendo il cursore fermo su di esso per mezzo secondo, e poi di tracciare il cursore lungo linee di riferimento orizzontali e verticali tratteggiate passanti per il punto fissato — allinea la nuova geometria ai punti esistenti senza linee di costruzione.
keywords: [vector pins, puntamento snap oggetti, linee di riferimento, tracciamento allineamento, tracciamento snap CAD, linee di costruzione, kulmanlab]
---

# Vector Pins

I **Vector Pins** sono un aiuto al disegno che permette di allineare la nuova geometria ai punti esistenti senza disegnare linee di costruzione. Tieni il cursore su un punto di snap per mezzo secondo per *fissarlo* — il pin proietta quindi linee di riferimento orizzontali e verticali invisibili, e il cursore vi si aggancia ogni volta che si avvicina. È l'equivalente in KulmanLab CAD del puntamento snap oggetti delle applicazioni CAD desktop.

La funzione è controllata dal pulsante **Pins** nella barra di controllo (accanto a Grid, Snap e ANGL). È **attiva per impostazione predefinita**, e l'impostazione persiste tra le sessioni.

## Fissare un punto

1. Avvia un comando che richiede un punto — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/) e così via.
2. Sposta il cursore su un punto di snap della geometria esistente — un indicatore di estremità, punto medio o centro.
3. **Tieni il cursore fermo per 500 ms.** L'indicatore diventa un **quadrato** pieno color accento — il punto è ora fissato.
4. Ripeti per fissare tutti i punti necessari. Ogni pin continua a proiettare le sue linee di riferimento.

Il fissaggio funziona anche fuori da un comando: passare il cursore su un **grip** di un'entità selezionata lo fissa allo stesso modo.

## Tracciamento lungo le linee di riferimento

Ogni punto fissato proietta due linee di riferimento invisibili — una **orizzontale** e una **verticale** — attraverso le sue coordinate esatte. Muovendo il cursore:

- Entro **12 px** dalla linea verticale di un pin, il cursore vi si aggancia: una linea tratteggiata color accento viene disegnata attraverso il pin per tutta la vista, e un **indicatore X** mostra la posizione agganciata. La tua coordinata X è ora *esattamente* la X del pin.
- Lo stesso vale per la linea orizzontale e la coordinata Y del pin.
- Vicino a una linea per ciascun orientamento — anche di **due pin diversi** — il cursore si aggancia alla loro **intersezione**, e vengono mostrate entrambe le linee tratteggiate. Questo posiziona un punto esattamente in (X del pin A, Y del pin B).

```
                    ┆ (tratteggiata, linea verticale del pin ■)
                    ┆
   ■ pin A ┄┄┄┄┄┄┄┄ ✕ ← cursore agganciato all'intersezione:
                    ┆    X del pin B, Y del pin A
                    ┆
                    ■ pin B
```

Le coordinate agganciate sono prese direttamente dal pin, quindi l'allineamento è esatto — senza arrotondamenti né derive in virgola mobile.

## Priorità di snap

Gli snap geometrici normali — estremità, punto medio, centro e intersezione — **hanno la precedenza** sulle linee di riferimento dei pin. Se il cursore è più vicino a uno snap puntuale che a una linea di riferimento, vince lo snap puntuale. Il tracciamento dei pin riempie gli spazi tra le geometrie; non blocca mai l'aggancio alla geometria stessa.

## Combinazione con il blocco angolare

I vector pins lavorano insieme al tracciamento angolare (il pulsante **ANGL** nella barra di controllo). Quando un comando ha bloccato il cursore su un raggio di tracciamento angolare:

- Il cursore rimane vincolato alla direzione bloccata.
- L'aggancio ai pin passa a puntare alle **intersezioni del raggio bloccato con le linee di riferimento dei pin** (solo davanti all'origine del raggio).

Questo risponde a domande come *"dove la direzione a 45° dal mio ultimo punto incrocia l'altezza del centro di quel cerchio?"* — blocca l'angolo, e il cursore scatta nel punto di incrocio. L'aggancio al raggio funziona in ogni comando con blocco angolare: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader e ViewportCopy.

## Ciclo di vita dei pin

I pin sono pensati per l'operazione in corso, non come marcatori permanenti. Tutti i pin vengono cancellati quando:

| Evento | Motivo |
|--------|--------|
| Parte un **nuovo comando** | Ogni operazione inizia con un insieme pulito di riferimenti |
| Si preme **Escape** | Comportamento standard di annullamento totale |
| Il pulsante **Pins** viene disattivato | Spegnere la funzione ne rimuove lo stato |
| Si passa tra **spazio modello e spazio carta** | Le coordinate dei pin sono specifiche di uno spazio |

All'interno di un singolo comando puoi fissare, disegnare, fissare di nuovo e continuare — i pin sopravvivono a ogni clic di un comando multi-punto come Polyline.

## Flusso di lavoro tipico

Disegnare una linea che parte direttamente sotto il centro di un cerchio:

1. Digita `line` (o clicca il pulsante Line).
2. Tieni il cursore sull'**indicatore di centro** del cerchio per mezzo secondo — diventa un quadrato color accento.
3. Sposta il cursore verso il basso: vicino alla verticale del cerchio, il cursore si blocca sulla linea di riferimento tratteggiata.
4. Clicca — la linea inizia esattamente alla coordinata X del cerchio.
5. Continua la linea come al solito; il pin resta disponibile per i punti successivi.

## Note

- L'attesa di 500 ms funziona su qualsiasi indicatore di snap raggiungibile dal cursore — inclusi i punti di snap che compaiono a metà comando.
- Passare il cursore su un punto già fissato non fa nulla; non esiste lo sblocco tramite hover. Cancella i pin con **Escape** o disattivando **Pins**.
- La distanza di aggancio delle linee di riferimento è la stessa dei normali snap puntuali, 12 pixel di schermo, quindi la sensazione è coerente a qualsiasi livello di zoom.
- I punti fissati vengono disegnati come quadrati color accento al posto dei loro normali indicatori di snap.
