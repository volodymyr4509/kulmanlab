---
title: "Come aprire un file DXF senza AutoCAD"
description: "Ti hanno mandato un file .dxf e non hai AutoCAD? Aprilo gratis nel browser, senza installare nulla — più alternative desktop e soluzioni per disegni vuoti o fuori scala."
keywords: [aprire file DXF, aprire DXF senza AutoCAD, visualizzatore DXF gratis, vedere DXF online, aprire DXF nel browser, visualizzatore DXF gratuito, aprire file DXF gratis, leggere file DXF, DXF o DWG, aprire DXF su Mac]
date: 2026-08-31
author: KulmanLab
tag: Guida
---

Per aprire un file DXF senza AutoCAD, trascinalo in un editor CAD che funziona nel browser: niente da installare e nessun account da creare. Anche programmi desktop gratuiti come LibreCAD e QCAD aprono il DXF. Questa guida copre entrambe le strade, e cosa fare quando il disegno si apre vuoto, minuscolo o senza testo.

Sviluppiamo noi uno degli strumenti qui sotto — [KulmanLab](https://kulmanlab.com/it/) — quindi considera quella sezione come quella di parte, e i limiti elencati al suo interno come la parte in cui abbiamo dovuto essere onesti.

## Che cos'è davvero un file DXF

DXF sta per *Drawing Exchange Format* (formato di scambio disegni). Autodesk lo creò perché i programmi CAD potessero passarsi i disegni tra loro, ed è deliberatamente aperto e basato su testo: puoi letteralmente aprire un `.dxf` in un editor di testo e leggerlo.

Questa apertura è il motivo per cui hai delle alternative. Il DXF non è legato a nessun programma in particolare, e decine di strumenti sanno leggerlo.

È anche il motivo per cui un DXF non è un'immagine. Contiene geometria — linee, archi, cerchi, layer, quote — non pixel. Rinominarlo in `.jpg` non lo farà aprire in un visualizzatore di immagini.

## Opzione 1: aprirlo nel browser

La via più rapida, perché non c'è nulla da scaricare né alcuna registrazione.

1. Vai su [app.kulmanlab.com](https://app.kulmanlab.com).
2. Trascina il file `.dxf` direttamente sull'area di disegno — oppure usa il pulsante **Import** (icona della cartella) nel pannello File.
3. Il disegno si carica e la vista si adatta automaticamente alla sua estensione.

Il tuo file non lascia mai il computer. KulmanLab gira interamente nel browser, quindi il disegno viene elaborato in locale invece di essere caricato su un server.

Da lì puoi spostarti e zoomare, accendere e spegnere i layer, misurare distanze e angoli, modificare la geometria ed esportare in PDF, PNG, JPEG o WebP se ti serve solo qualcosa di stampabile da inoltrare.

**Cosa legge da un DXF:** linee, cerchi, archi, ellissi, polilinee, spline, testo, quote, direttrici multiple e campiture, oltre alle tabelle di layer e tipi di linea del file.

**Dove si ferma — leggilo prima di farci affidamento:**

- **Solo 2D.** Un DXF che contiene solidi o mesh 3D è il file sbagliato per questo strumento.
- **Niente blocchi.** I riferimenti a blocco (`INSERT`) non vengono elaborati, quindi un disegno costruito con simboli a blocco ripetuti arriverà incompleto.
- **DXF, non DWG.** Vedi la sezione DWG più avanti.
- **Solo browser desktop** — Chrome, Firefox, Safari ed Edge. Non esiste una versione mobile.
- **L'esportazione DXF contiene solo geometria.** Se modifichi e riesporti in DXF, restano fuori campiture, quote, direttrici e testo. Esporta nel formato nativo JSON se devi conservare tutto, o in PDF se ti basta condividere.

Se uno di questi punti è determinante, uno dei programmi desktop qui sotto ti servirà meglio.

## Opzione 2: programmi desktop gratuiti

Vale la pena installarli se lo farai regolarmente, o se il tuo file usa funzioni che uno strumento nel browser non gestirà.

**LibreCAD** — gratuito e open source, solo 2D, gira su Windows, macOS e Linux. È quello più vicino al disegno 2D classico, e un solido editor DXF.

**QCAD** — il motore da cui è nato LibreCAD. Un'edizione community gratuita più una versione Pro a pagamento con funzioni aggiuntive.

**FreeCAD** — gratuito e open source, pensato per la modellazione parametrica 3D ma in grado di importare DXF. Sovradimensionato se vuoi solo guardare un disegno 2D, e con una curva di apprendimento ripida.

**Autodesk Viewer** — il visualizzatore web gratuito di Autodesk. Solo visualizzazione, e richiede l'accesso con un account Autodesk.

**Inkscape** — non è CAD, ma importa il DXF ed è una scelta ragionevole se ti serve soltanto vedere le forme o convertirle in SVG.

## «In realtà è un DWG, vero?»

Molto spesso sì. DXF e DWG sono entrambi formati Autodesk e i nomi vengono usati come sinonimi, ma non sono la stessa cosa:

| | DXF | DWG |
|---|---|---|
| Formato | Aperto, basato su testo | Proprietario, binario |
| Scopo | Scambio tra programmi | Formato nativo di AutoCAD |
| Supporto altrove | Ampio | Limitato e spesso imperfetto |

Controlla l'estensione reale del file prima di metterti a cercare un visualizzatore. Se è `.dwg`, gli strumenti qui sopra per lo più non ti aiuteranno — KulmanLab compreso, che supporta solo il DXF.

La soluzione affidabile è farsi dare un DXF: chi ti ha mandato il file può aprirlo nel suo programma CAD ed esportarlo o fare *Salva con nome* in DXF. Quasi ogni applicazione CAD desktop può farlo, e gli porterà via una decina di secondi. Convertire il DWG da solo con un convertitore di terze parti è possibile, ma più lossy — e stai affidando il disegno di qualcun altro a uno strumento sconosciuto.

## Quando il disegno si apre ma sembra sbagliato

**L'area di disegno è vuota.** Di solito la geometria si trova molto lontano dall'origine, quindi la vista punta sul vuoto. Usa un comando *adatta* o *zoom estensioni* per saltare al disegno. Controlla anche se ci sono layer spenti: un disegno può arrivare con gran parte dei layer congelati.

**È tutto microscopico, o assurdamente grande.** Il DXF non registra le proprie unità in modo affidabile. Lo stesso disegno può essere stato realizzato in millimetri, centimetri, pollici o piedi, e spesso il file non dice quali. Misura qualcosa di cui conosci la dimensione reale e scala di conseguenza.

**Il testo manca o è sostituito.** I font non vengono incorporati in un DXF. Se il disegno usa un font che la tua macchina non ha, il testo ripiega su un altro o sparisce. Caricare il font originale risolve.

**Parti del disegno non sono arrivate.** Qualcosa nel file usa un tipo di entità che il tuo strumento non legge — di solito blocchi, solidi 3D o estensioni proprietarie scritte dal programma che l'ha generato. Prova un secondo strumento prima di concludere che il file è rotto.

**Non si apre proprio nulla.** Verifica che il file sia davvero un DXF: aprilo in un editor di testo semplice. Un DXF autentico inizia con codici di gruppo ASCII leggibili e nomi di sezione come `SECTION` e `HEADER`. Se vedi rumore binario, è un DWG o una variante binaria del DXF.

## Quale scegliere

**Ti serve solo guardarlo, una volta?** Aprilo nel browser. Installare una suite CAD per leggere un singolo file arrivato via email non è un buon scambio.

**Devi misurare, annotare o stampare?** Gli strumenti nel browser se la cavano bene, e stampare in PDF in scala reale è di solito esattamente ciò che serve.

**Lavoro di disegno vero, ripetuto nel tempo?** Installa LibreCAD o QCAD. Un software desktop dedicato ti servirà meglio alla lunga.

**Hai un DWG?** Chiedi un DXF a chi te l'ha mandato. È più veloce e più sicuro di qualsiasi percorso di conversione.

---

*Correlati: [Import](/it/docs/commands/import/) per l'elenco completo di ciò che KulmanLab legge da un DXF, [Export Manager](/it/docs/commands/export-manager/) per cosa contiene ciascun formato di esportazione, e [Print Manager](/it/docs/commands/print-manager/) per l'output PDF in scala fisica reale.*
