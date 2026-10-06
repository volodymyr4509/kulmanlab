---
title: Comando Hatch — Riempire un'area con un motivo
description: Il comando Hatch riempie la regione che circonda un punto cliccato con un motivo — qualsiasi combinazione di linee, archi, ellissi e spline che si chiude racchiude una regione, e qualsiasi forma chiusa al suo interno resta come un'isola non riempita.
keywords: [comando hatch CAD, riempi area CAD, motivo hatch CAD, ANSI31, riempimento SOLID, riempimento contorno CAD, entità DXF HATCH, kulmanlab]
group: shapes
order: 7
---

# Hatch

Il comando `Tratteggio` riempie la regione che circonda un punto cliccato con un motivo. Il contorno non viene disegnato prima — deriva da ciò che è già presente sulla lavagna, quindi quattro [Line](../line/) separate che si incontrano estremità con estremità racchiudono una regione esattamente come fa una [Polyline](../polyline/) chiusa, e qualsiasi forma chiusa al suo interno diventa un'isola che il riempimento lascia intatta.

## Riempire un'area

1. Digita `Tratteggio` nel terminale o clicca sul pulsante **Hatch** della barra degli strumenti (l'icona del campione).
2. **Clicca su un punto** all'interno della regione che vuoi riempire.
3. Il comando rimane attivo, quindi continua a cliccare per riempire altre aree — ogni clic crea una propria entità `Hatch`.
4. Premi **Invio**, **Spazio** o **Escape** quando hai finito.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   clicca dentro il
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   contorno esterno; il
  └─────────────┘        └─────────────┘   cerchio resta un'isola
```

## Riferimento tastiera

| Tasto | Azione |
|-----|--------|
| `Enter` / `Space` | Termina il comando Hatch |
| `Escape` | Termina il comando Hatch (come Invio/Spazio) |

## Cosa può formare un contorno

Qualsiasi combinazione di questi tipi di entità può formare un contorno, in qualsiasi combinazione, purché si connettano estremità con estremità senza alcuna interruzione:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (il proprio contorno chiuso)
- [Ellipse](../ellipse/) (chiusa, o un arco ellittico aperto come parte di un anello più grande)
- [Polyline](../polyline/) (aperta o chiusa) e [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/) — ogni anello di una spline che si incrocia da sola è una regione a sé

Le entità Text, Multileader e Dimension non sono mai trattate come contorni.

## Isole

Tutto ciò che è completamente chiuso all'interno della regione cliccata — un cerchio, una polilinea chiusa, il contorno di un altro hatch — diventa un'**isola**: il riempimento si ferma al suo bordo e l'isola stessa resta vuota. Metti una forma chiusa dentro un'altra forma chiusa e il riempimento si alterna, buco dentro un riempimento dentro un buco, seguendo la stessa regola dentro/fuori a ogni livello.

## Quando una selezione fallisce

Se il punto che hai cliccato non è racchiuso, o il contorno ha un'interruzione, il terminale spiega il motivo invece di non fare nulla silenziosamente:

| Messaggio | Significato |
|-----------|--------------|
| "no boundary found" | Non è stato incontrato nulla in nessuna direzione dal punto cliccato — non c'è alcun contorno nelle vicinanze |
| "point is not enclosed" | Esiste un contorno nelle vicinanze, ma la forma che forma non contiene il punto che hai cliccato |
| "boundary is open" | Il contorno più vicino ha un'interruzione da qualche parte — seguilo e controlla che ogni giunzione sia esatta |
| "boundary too complex" | L'anello di contorno non ha potuto chiudersi entro il limite di attraversamento — di solito un groviglio di entità sovrapposte |

Il comando rimane attivo dopo una selezione fallita — leggi il messaggio, correggi il disegno o clicca altrove, e riprova.

## Scegliere un motivo

Ogni nuovo hatch inizia riempito con `ANSI31` (o qualsiasi motivo usato dall'*ultimo* hatch che hai modificato) — non c'è un selettore di motivi prima di disegnare. Per usare un motivo diverso:

1. Seleziona un hatch esistente e apri il suo campo **Pattern** nel pannello proprietà — questo apre il selettore di motivi, una griglia di campioni con nome raggruppati in base alla provenienza di ciascun motivo.
2. Clicca su un motivo per applicarlo — il riempimento si aggiorna immediatamente.

Quella selezione diventa anche il predefinito per il *prossimo* hatch che crei con il comando `Tratteggio`, allo stesso modo in cui scegliere un layer o un colore si trasferisce in avanti. Quindi per applicare l'hatch a diverse nuove aree con un motivo particolare: riempi un'area, imposta il suo motivo una volta, poi continua a fare hatch — ogni riempimento successivo inizia già con quel motivo applicato.

Vedi [Hatch Manager](../hatch-manager/) per caricare i tuoi file di motivi `.pat` e sfogliare la libreria completa.

**SOLID** è una voce normale nell'elenco dei motivi, non una casella di controllo o una modalità separata — selezionala allo stesso modo in cui selezioneresti ANSI31 o qualsiasi altro motivo con nome.

## Proprietà

| Proprietà | Significato |
|-----------|--------------|
| Pattern | Il nome del motivo, dal vocabolario di motivi condiviso (vedi [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Scala la spaziatura delle linee del motivo — valori maggiori distanziano di più le linee del motivo |
| Pattern Angle | Ruota il motivo indipendentemente dal contorno |
| Origin X / Origin Y | Dove è ancorata la ripetizione propria del motivo, in coordinate del disegno |

Spostare, ruotare, specchiare o scalare un hatch trasporta con sé il posizionamento del suo motivo, quindi il riempimento resta allineato con il contorno — non serve reimpostare la scala o l'angolo dopo una trasformazione.

## Modifica con le maniglie del contorno

Un hatch selezionato afferra il proprio contorno allo stesso modo in cui una Polyline afferra i propri vertici — una maniglia a ogni angolo dove si incontrano due bordi, e una al centro di ogni bordo (un anello chiuso come un hatch di cerchio o ellisse afferra invece nei suoi quattro punti d'asse).

| Maniglia | Cosa fa |
|----------|---------|
| **Angolo** | Sposta quell'angolo. Un bordo dritto segue esattamente; un arco si riadatta per continuare a passare per entrambi i vicini; un bordo di ellisse o spline può atterrare solo da qualche parte sulla propria curva, quindi l'angolo si aggancia al punto più vicino su di essa |
| **Centro bordo — bordo linea, ellisse o spline** | Fa scorrere l'intero bordo; i bordi su entrambi i lati vengono tagliati o estesi per restare uniti ad esso |
| **Centro bordo — bordo arco** | **Curva** l'arco attraverso il cursore invece di farlo scorrere — entrambe le estremità restano esattamente dove erano, e nient'altro nel contorno si muove |
| **Centro** (intero hatch) | Attiva [Move](../move/) per l'intero hatch |

Un'anteprima di trascinamento mostra il contorno come una linea tratteggiata invece di un riempimento solido mentre trascini — il riempimento originale resta visibile sotto finché non rilasci, poiché un'anteprima può solo dipingere sopra ciò che c'è già, mai rimuovere nulla da esso.

## DXF — entità HATCH

Gli hatch vengono **importati** da entità `HATCH`: KulmanLab legge la geometria del contorno insieme al nome, alla scala e all'angolo del motivo (codici gruppo DXF 70/41/52) — **non** legge le definizioni di linee proprie del motivo incorporate nel file. Invece, il nome del motivo viene cercato nella libreria di motivi propria di KulmanLab (predefiniti integrati più tutto ciò che hai caricato in [Hatch Manager](../hatch-manager/)). Un nome non presente nella tua libreria ricade su ANSI31 affinché il disegno continui a leggersi come hatched, e una nota viene registrata una volta.

Gli anelli delimitati da spline scritti da altre applicazioni (tipo di bordo contorno DXF 4) non vengono ancora letti.

Le campiture si **esportano** in DXF come entità `HATCH`. I contorni escono insieme al nome del motivo (codice di gruppo 2), al flag di riempimento pieno (70) e all'angolo e alla scala di quella campitura (52/41) — e, a differenza del percorso di importazione, vengono scritte inline anche le definizioni di linea risolte del motivo (78, con 53/43/44/45/46/79/49). L'asimmetria è voluta: KulmanLab sa risolvere un nome nella propria libreria, ma l'applicazione che riceve il file potrebbe non avere quel motivo, quindi le linee viaggiano con esso.

## Comandi correlati

- [Hatch Manager](../hatch-manager/) — sfoglia la libreria di motivi e carica file `.pat`
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — tutti trasportano con sé il posizionamento del motivo dell'hatch
- [Delete](../delete/) — elimina l'hatch senza influire sulle entità che ne formavano il contorno
