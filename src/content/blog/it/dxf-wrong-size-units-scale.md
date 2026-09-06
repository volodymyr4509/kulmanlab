---
title: "Perché il tuo DXF si è aperto con la dimensione sbagliata (e come rimediare)"
description: "Un DXF che si apre 25,4 volte più piccolo o 1000 volte più grande è un disallineamento di unità, non un file rotto. Identifica il rapporto, riscala e verifica."
keywords: [DXF scala sbagliata, DXF dimensione sbagliata, unità DXF, DXF mm o pollici, DXF importato troppo piccolo, fattore di scala DXF, DXF 25.4, correggere scala DXF, unità DXF non corrispondono, riscalare DXF]
date: 2026-09-04
author: KulmanLab
tag: Guida
---

Si apre un DXF e il pezzo che dovrebbe essere largo 40 mm ne misura 1,575. Oppure arriva una pianta grande quanto un isolato. Il file non è rotto e nessuno ha sbagliato niente: il disegno è corretto, si è perso per strada il numero che gli stava accanto.

Vale la pena capirlo prima di riscalare qualsiasi cosa, perché la correzione richiede dieci secondi una volta che sai davanti a quale rapporto ti trovi, e tirare a indovinare è il modo per tagliare due volte la misura sbagliata.

## Il DXF trasporta a malapena le unità

Un DXF salva le coordinate come numeri nudi. Una linea da `0,0` a `40,0` è lunga quaranta *qualcosa*. Il formato non attacca un'unità a una coordinata, e non avrebbe nemmeno dove farlo: il numero *è* la geometria.

La cosa più vicina è una variabile di intestazione chiamata `$INSUNITS`, un singolo codice per l'intero file: `1` per i pollici, `4` per i millimetri, `6` per i metri, e così via. Due cose la rendono più debole di quanto sembri. È un solo valore per un intero disegno, quindi non può descrivere un file assemblato da fonti diverse. Ed è indicativa, non vincolante: molte applicazioni la leggono solo quando *inseriscono* un disegno dentro un altro e la ignorano del tutto quando apri semplicemente il file, sulla ragionevole premessa che chi apre un disegno di solito sa che cosa ha disegnato.

Così «40» viaggia intatto e «millimetri» no. Ogni DXF di dimensione sbagliata che riceverai sta tutto in questa frase.

## Prima individua il rapporto

Misura un elemento di cui conosci davvero la dimensione reale: un diametro di foro, il bordo di una lamiera, un interasse normalizzato. Dividi la dimensione che dovrebbe avere per quella che misura. Il risultato è quasi sempre uno di questi:

| Rapporto | Che cosa è successo |
|---|---|
| **25,4** | Disegnato in pollici, letto come millimetri |
| **0,03937** | Disegnato in millimetri, letto come pollici |
| **1000** | Disegnato in metri, letto come millimetri |
| **0,001** | Disegnato in millimetri, letto come metri |
| **12** | Piedi letti come pollici |
| **304,8** | Piedi letti come millimetri |

Se il tuo numero è lì dentro, hai un disallineamento di unità e nient'altro, e il resto richiede un minuto.

Se non c'è — 1,37, poniamo, oppure 3,2 — fermati. Non è un problema di unità, e riscalare produrrà un disegno sbagliato in un modo molto più difficile da notare. Salta all'ultima sezione.

## La correzione

Ti serve qualcosa che misuri e qualcosa che scali. Qualunque strumento CAD lo fa; ecco come, in [KulmanLab](https://kulmanlab.com/it/), che apre un DXF in una scheda del browser senza installare nulla:

1. Apri il file: trascinalo sulla pagina, oppure usa [Import](/it/docs/commands/import/).
2. Lancia [Distance](/it/docs/commands/distance/) e scegli le due estremità del tuo elemento noto. Lo snap conta: prendi i veri punti finali, non qualcosa lì vicino, altrimenti incorpori il tuo errore nel fattore.
3. Dividi. Dimensione nota ÷ dimensione misurata. Un foro da 40 mm che ne segna 1,575 dà 40 ÷ 1,575 ≈ **25,4**.
4. Seleziona tutto, lancia [Scale](/it/docs/commands/scale/), scegli un punto base e digita il fattore.

Il punto base resta fermo mentre tutto il resto si muove, quindi mettilo dove puoi ragionarci: uno spigolo del pezzo, oppure l'origine. Per un disegno che sta per andare al taglio, l'origine è di solito la scelta sensata.

Aiuta il fatto che KulmanLab non abbia una propria impostazione delle unità. Le coordinate sono solo numeri, che è esattamente lo stato in cui vuoi un disegno mentre stai capendo che cosa significano i suoi numeri. Non c'è nessuna conversione che avviene alle tue spalle e niente contro cui combattere.

## Verifica la correzione prima di fidarti

Misura un *secondo* elemento, altrove nel disegno, di cui conosci anch'esso la dimensione reale. Poi controllalo.

È il passo che si salta, ed è l'unico che intercetta il caso brutto. Se ora la seconda misura torna, il disegno era uniformemente nelle unità sbagliate ed è ora uniformemente in quelle giuste. Fatto.

Se la seconda misura è *ancora* sbagliata, e sbagliata di una quantità diversa, non è mai stato un semplice disallineamento di unità. Hai appena scalato un disegno incoerente, il che è peggio del punto di partenza, perché l'errore non è più un rapporto pulito che qualcuno possa notare.

[Area](/it/docs/commands/area/) è una buona seconda opinione, soprattutto sui pannelli. L'area scala con il *quadrato* del fattore, quindi un errore di lunghezza di 25,4 compare come un errore di area di 645: una discrepanza di cui è difficile convincersi che non esista.

## Evitarlo la prossima volta

Le unità si perdono tra le persone, quindi la soluzione sta lì.

**Dichiara l'unità quando invii il file.** Una riga nel messaggio. «Tutte le quote in mm.» Non costa nulla e cancella l'intero problema.

**Manda con esso una quota di riferimento.** Indica una misura reale: «la piastra esterna è larga 300 mm». Ora chi riceve può verificare il file invece di supporlo, e se qualcosa è andato storto lo sistema in un minuto senza tornare da te.

**Chiedi, quando a ricevere sei tu.** Se arriva un file senza unità dichiarate e stai per tagliare materiale, un messaggio costa meno di un pannello rovinato.

**Disegna nelle unità che il tuo output si aspetta.** Taglio laser, CNC e la maggior parte dei flussi di fabbricazione si aspettano millimetri. Se il file va lì, disegnalo in millimetri e non resta alcuna conversione da sbagliare. Vedi [preparare un DXF per il taglio laser](/it/blog/prepare-dxf-for-laser-cutting/).

## Quando non è un problema di unità

Se il tuo rapporto non era una conversione di unità pulita, le cause probabili sono di natura diversa:

- **Il disegno mescola le scale.** Qualcuno ne ha disegnata una parte a 1:1 e ci ha incollato un dettaglio a 1:5, oppure un blocco è stato inserito con un fattore di scala mai corretto. Sistema la geometria colpevole, non l'intero file.
- **Hai misurato geometria dello spazio carta.** Un cartiglio o una cornice di annotazione è disegnato a misura di foglio, non di modello. Misura qualcosa che appartenga all'oggetto vero.
- **Hai misurato la cosa sbagliata.** Un foro nominale da 40 mm può essere disegnato a 39,8 per l'accoppiamento, e un pannello «da 300 mm» può misurare 300 fino all'esterno di una battuta che non vedi. Scegli un elemento con uno spigolo inequivocabile.

In ognuno di questi casi la risposta è scoprire che cosa sia davvero il disegno, non scalarlo. Un disegno le cui parti si contraddicono continuerà a costarti materiale finché qualcuno non lo apre e guarda.

---

*Correlati: [Distance](/it/docs/commands/distance/) per misurare, [Scale](/it/docs/commands/scale/) per la correzione, [Area](/it/docs/commands/area/) per la seconda opinione e [Export Manager](/it/docs/commands/export-manager/) per che cosa porta con sé ciascun formato quando lo rispedisci.*
