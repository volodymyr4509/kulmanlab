---
title: "Come preparare un file DXF per il taglio laser"
description: "Perché i servizi di taglio rifiutano i file DXF e come sistemare il tuo — contorni chiusi, unità, kerf e layer. Gratis nel browser, senza installare nulla."
keywords: [DXF per taglio laser, preparare DXF laser, formato file taglio laser, DXF rifiutato laser, contorni chiusi DXF, kerf taglio laser, preparare file laser, unità DXF laser, layer taglio incisione, editor DXF gratis]
date: 2026-09-02
author: KulmanLab
tag: Guida
---

Un DXF per il taglio laser richiede quattro cose: contorni chiusi, unità corrette, solo la geometria da tagliare — niente quote, note o campiture — e layer che separino taglio, marcatura e incisione. Questa guida affronta ciascun punto e mostra come controllare il tuo file prima che un servizio lo rifiuti.

Puoi fare tutto gratis nel browser su [app.kulmanlab.com](https://app.kulmanlab.com): niente da installare, nessun account, e il file non lascia mai il tuo computer. È il flusso di lavoro per cui abbiamo costruito KulmanLab all'inizio, quindi i limiti che valgono per altre attività CAD qui in gran parte non valgono: il taglio laser è 2D, e il DXF è ciò che i servizi di taglio vogliono.

## Perché i file vengono rifiutati

Cinque motivi coprono quasi tutti i casi.

**Contorni aperti.** Una forma che sembra chiusa ma ha una fessura sottilissima in un angolo non è una regione: è un insieme di linee scollegate. Le macchine devono sapere cosa sta dentro e cosa fuori, e un contorno aperto non ha un dentro. È di gran lunga il motivo di rifiuto più comune.

**Unità sbagliate o ambigue.** Il DXF non registra in modo affidabile cosa significano i suoi numeri. Lo stesso file può essere in millimetri, centimetri, pollici o piedi, e spesso non lo dichiara. Un pezzo che arriva 25,4 volte più grande o più piccolo è questo.

**Tutto ciò che non è geometria.** Quote, cartigli, note, campiture, linee di costruzione. La macchina proverà volentieri a tagliare le tue annotazioni.

**Linee doppie.** Due linee identiche sovrapposte significano che il laser percorre due volte lo stesso tracciato: tempo perso, bordi bruciati e, su materiale sottile, un rischio di incendio.

**Tutto su un solo layer.** Se taglio, marcatura e incisione non sono separati, il servizio non può distinguerli e ti chiederà di rinviare il file.

## Preparare il file

Trascina il tuo `.dxf` sull'area di disegno di [app.kulmanlab.com](https://app.kulmanlab.com), oppure usa il pulsante **Import** nel pannello File. Il disegno si carica e la vista si adatta.

**1. Guarda cosa hai davvero.** Digita `fit` per portare tutto in vista. Poi ingrandisci ogni angolo di ogni pezzo: le fessure sono invisibili alla scala dell'intero disegno e lampanti a 10×. È questo controllo che ti risparmia l'email di rifiuto.

**2. Cancella ciò che non va tagliato.** Linee di costruzione, note, cornici, quote. `layer-isolate` mostra un layer alla volta, ed è così che si trovano i residui nascosti sotto la geometria vera.

**3. Chiudi le fessure.** `trim` accorcia le estremità sporgenti dove due linee si incrociano oltre. Dove le linee restano corte, trascina il grip di un'estremità sulla sua vicina: i grip agganciano, quindi le estremità si toccano davvero invece di sfiorarsi.

**4. Verifica le misure.** `distance` misura fra due punti, `area` misura una regione chiusa a partire da punti cliccati. Misura un elemento di cui conosci la dimensione reale. Se risulta sbagliato di 25,4 volte, il file è nel sistema di unità sbagliato.

**5. Separa taglio, marcatura e incisione.** Metti ogni operazione su un layer dedicato con un nome evidente: `CUT`, `SCORE`, `ENGRAVE`. La maggior parte dei servizi chiede questo oppure file separati. `layer-manager` li crea e li assegna.

Poi esporta: **Export** → **DXF**. KulmanLab scrive DXF AC1032 essenziale, che è ciò che si aspettano i servizi di taglio e il software delle macchine.

## Kerf

Il laser asporta materiale mentre taglia: all'incirca da 0,1 a 0,3 mm a seconda di macchina, materiale e spessore. Taglia un quadrato da 50 mm e ottieni un quadrato leggermente sottodimensionato, e il pezzo che doveva incastrarsi a pressione non entrerà.

Due modi di gestirlo:

**Lascialo fare al servizio.** La maggior parte dei servizi di taglio compensa il kerf per conto proprio, e in quel caso compensarlo anche tu sbaglia i pezzi nella direzione opposta. Chiedi prima di modificare qualcosa.

**Fallo tu.** `offset` crea una copia parallela di una forma a distanza fissa: metà della larghezza di kerf, verso l'esterno per i pezzi che devono restare in quota, verso l'interno per i fori. Funziona su linee, cerchi, archi, ellissi e polilinee. Agisce su una entità per volta, quindi è praticabile per una manciata di quote critiche, non per una lastra da duecento pezzi.

Se la tolleranza conta, taglia un pezzo di prova prima di impegnare il materiale.

## Che cosa controllare nell'esportazione DXF

Utile saperlo prima di farci affidamento:

- **Togli la spunta all'annotazione invece di cancellarla.** Testo, quote, direttrici e campiture ora si esportano tutte, quindi qualunque cosa lasci nel disegno finisce nel file. Non serve cancellarla: l'Export Manager elenca ogni tipo di entità con la propria casella, così togliendo la spunta a Text, alle righe delle quote, a Leaders e a Hatches ottieni un DXF con la sola geometria di taglio, lasciando il disegno intatto.
- **Il testo esce come `MTEXT`, che non è geometria incidibile.** Le scritte vengono esportate con la loro formattazione, ma parecchi software macchina vogliono contorni anziché testo vivo su un layer di incisione. Controlla che cosa accetta il tuo prima di pianificarci sopra un'incisione.
- **I riferimenti a blocchi non vengono importati.** Un disegno costruito con simboli a blocco ripetuti arriva incompleto, quindi confronta il conteggio dei pezzi con l'originale.

Le spline *vengono* esportate. Alcuni software macchina le gestiscono male e preferiscono le polilinee: se è il tuo caso, ridisegna le curve come polilinee o archi.

## Un avvertimento sull'automazione

KulmanLab **non ha un controllo preliminare**. Nulla cerca contorni aperti, linee doppie o problemi di unità per segnalarteli. I controlli qui sopra sono manuali: ingrandire, misurare, guardare.

Va bene per una manciata di pezzi ed è noioso per una lastra interamente nidificata. Se produci lastre regolarmente, uno strumento con validatore automatico ti servirà meglio — e per pezzi singoli, che è ciò che fanno quasi tutti quasi sempre, guardare il file con attenzione intercetta gli stessi problemi.

## Prima di inviarlo

- Ogni contorno di taglio chiuso, angoli controllati a forte ingrandimento
- Una misura nota verificata e corretta
- Nessuna quota, nota, cornice o geometria di costruzione rimasta
- Nessuna linea doppia sovrapposta
- Taglio, marcatura e incisione su layer separati e chiaramente denominati
- Kerf: applicato, oppure deliberatamente lasciato al servizio
- Esportato come DXF e riaperto una volta per confermare che sia a posto

Quest'ultimo punto costa dieci secondi e intercetta le sorprese di esportazione prima del servizio.

---

*Correlati: [Import](/it/docs/commands/import/) per ciò che KulmanLab legge da un DXF, [Export Manager](/it/docs/commands/export-manager/) per cosa contiene esattamente ciascun formato, [Offset](/it/docs/commands/offset/) per la compensazione del kerf, e [LayerManager](/it/docs/commands/layer-manager/) per impostare i layer di taglio e incisione.*
