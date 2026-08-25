---
title: Comando ClipboardPaste — Incollare entità dagli appunti di sistema
description: Il comando ClipboardPaste legge dagli appunti di sistema le entità scritte in precedenza da ClipboardCopy e le colloca in un punto di inserimento scelto, aggiungendo i layer e i tipi di linea mancanti nel disegno di destinazione.
keywords: [incolla appunti CAD, incollare entità tra disegni, incollare oggetti CAD, Ctrl+V CAD, incollare tra schede, unione layer all'incollaggio, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

Il comando `ClipboardPaste` legge le entità che [ClipboardCopy](../clipboard-copy/) ha scritto negli **appunti di sistema** e le colloca nel disegno corrente in un punto che scegli tu. Poiché gli appunti sono quelli veri di sistema, l'origine può essere un altro disegno, un'altra scheda del browser o una sessione di qualche ora prima.

## Come incollare

1. Premi `Ctrl+V` (`Cmd+V` su macOS), oppure digita `ClipboardPaste` nel terminale.
2. Il prompt indica **reading clipboard…** mentre il browser consegna il testo degli appunti.
3. Una volta caricato, il prompt diventa **pick insertion point** e un'anteprima della geometria segue il cursore.
4. **Clicca** per posizionare le entità. Vengono aggiunte al disegno e restano selezionate.

L'anteprima è ancorata al **punto di riferimento** della copia — l'angolo inferiore sinistro dell'ingombro complessivo della selezione originale. Quell'angolo sta sotto il cursore, così la disposizione relativa delle entità copiate è conservata esattamente.

## Cosa succede quando incolli

| Passo | Comportamento |
|-------|---------------|
| **Nuove identità** | Ogni entità incollata riceve un nuovo id, quindi incollare due volte produce due insiemi indipendenti |
| **Traslazione** | Le entità sono spostate di cursore − punto di riferimento |
| **Unione dei layer** | Ogni layer referenziato che manca nel disegno di destinazione viene aggiunto per nome |
| **Unione dei tipi di linea** | Ogni tipo di linea referenziato che manca nel disegno di destinazione viene aggiunto per nome |
| **Selezione** | La selezione precedente viene azzerata e le entità incollate diventano la selezione |

### Unione di layer e tipi di linea

Le voci di tabella mancanti vengono aggiunte; **quelle esistenti restano intatte**. Se gli appunti portano un layer chiamato `WALLS` in rosso e la destinazione ha già un layer `WALLS` in blu, vince la definizione della destinazione e le entità incollate vi si uniscono — saranno blu. Un incollaggio non ridefinisce nulla nel disegno di destinazione.

Questo conta quando si copia tra disegni con convenzioni di layer diverse: controlla il [Layer Manager](../layer-manager/) dopo un incollaggio tra disegni se i colori non sono quelli che ti aspettavi.

## Quando gli appunti non hanno nulla da incollare

ClipboardPaste accetta solo contenuti prodotti da ClipboardCopy. Qualsiasi altra cosa negli appunti — testo semplice, un URL, un'immagine, JSON di un'altra applicazione — viene rifiutata e il terminale segnala:

```
Clipboard has no copied entities
```

Se il browser nega del tutto l'accesso agli appunti, il messaggio è invece **Clipboard access denied**. Entrambi terminano il comando senza modificare il disegno.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Ctrl+V` / `Cmd+V` | Attiva ClipboardPaste |
| `Escape` | Annulla — le entità vengono scartate e non viene aggiunto nulla |

Annullare durante la fase di lettura è sicuro: se gli appunti rispondono dopo che hai già annullato o avviato un altro comando, il risultato tardivo viene scartato invece di interrompere ciò che nel frattempo è attivo.

## Copiare tra schede

Il flusso di lavoro tipico tra disegni:

1. Apri il disegno di origine, seleziona la geometria, premi `Ctrl+C`.
2. Passa all'altra scheda — oppure apri una seconda scheda dell'app e carica un file diverso.
3. Premi `Ctrl+V` e clicca un punto di inserimento.

Entrambe le schede hanno la stessa origine e condividono gli appunti di sistema, quindi non viene caricato nulla e nessun server è coinvolto. Il contenuto resta testo JSON nei tuoi appunti per tutto il tempo.

## Entità supportate

Ogni tipo di entità che ClipboardCopy sa scrivere, ClipboardPaste sa rileggerlo — con la stessa serializzazione usata dal formato nativo `.json`.

## Vedi anche

- [ClipboardCopy](../clipboard-copy/) — scrivere la selezione negli appunti
- [Copy](../copy/) — duplicare entità all'interno del disegno corrente
- [Layer Manager](../layer-manager/) — ispezionare i layer portati da un incollaggio
