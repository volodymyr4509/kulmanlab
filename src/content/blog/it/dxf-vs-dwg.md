---
title: "DXF e DWG: qual è la differenza?"
description: "DWG è il formato nativo di AutoCAD, DXF quello aperto di scambio. Cosa cambia davvero, quale ti serve e come ottenere un DXF quando ti mandano un DWG."
keywords: [DXF o DWG, differenza tra DXF e DWG, DWG o DXF, cos'è il DWG, cos'è il DXF, da DWG a DXF, formati file CAD, aprire file DWG, formato DXF, quale formato CAD]
date: 2026-09-02
author: KulmanLab
tag: Guida
---

Il DWG è il formato di file nativo di AutoCAD: binario, proprietario e non documentato da Autodesk. Il DXF è il formato di scambio che Autodesk pubblica perché altri programmi possano leggere gli stessi disegni. Stessa geometria, contenitore diverso, e solo uno dei due è pensato per consegnare file a persone fuori dal tuo software.

Quest'ultimo punto è tutta la differenza pratica, ed è quello che decide cosa dovresti chiedere.

## In breve

| | DXF | DWG |
|---|---|---|
| Sta per | Drawing Exchange Format | Drawing |
| Specifica pubblicata | Sì, da Autodesk | No |
| Codifica | Testo (esiste anche una variante binaria) | Binaria |
| Scopo | Spostare disegni tra programmi | Il formato di lavoro proprio di AutoCAD |
| Dimensione file | Maggiore | Minore |
| Letto da altri software | Molto ampiamente | A macchia di leopardo, tramite librerie ricostruite |
| Porta tutto ciò che AutoCAD sa fare | No — un sottoinsieme documentato | Sì |

## Perché esistono due formati

Autodesk lanciò AutoCAD nel 1982 con il DWG come formato di lavoro. È costruito per la comodità di un singolo programma: compatto, binario e libero di cambiare quando ad AutoCAD serve.

Questo lo rende poco adatto a essere spedito. Così Autodesk pubblicò anche il DXF: lo stesso disegno scritto in forma documentata e leggibile, su cui qualunque sviluppatore può lavorare. Apri un `.dxf` in un editor di testo e vedrai codici di gruppo e nomi di sezione in ASCII leggibile.

I due sono versionati insieme. Ogni versione di AutoCAD porta una revisione del DWG e una corrispondente del DXF; la sigla `AC1032` che a volte si vede nell'intestazione di un file identifica per esempio la generazione AutoCAD 2018.

Quindi il DXF non è il formato più vecchio né quello minore. È lo stesso disegno, reso leggibile di proposito.

## Cosa cambia davvero nella pratica

**Apertura.** Autodesk documenta il DXF e non documenta il DWG. I programmi che leggono DWG — e sono molti — si appoggiano a librerie nate dalla ricostruzione del formato. Funziona bene ed è del tutto legittimo, ma significa che il supporto DWG resta indietro rispetto alle versioni nuove e varia da applicazione ad applicazione, mentre quello DXF chiunque può implementarlo direttamente dalla specifica.

**Dimensione.** Un DWG binario è di norma parecchio più piccolo dello stesso disegno in DXF ASCII. Su un progetto grande conta; su un singolo pezzo no.

**Fedeltà.** Il DWG contiene tutto ciò che AutoCAD sa esprimere, inclusi tipi di oggetto di cui altri programmi non hanno alcuna nozione. Il DXF copre un sottoinsieme documentato. Per il disegno 2D ordinario — linee, archi, cerchi, polilinee, testo, quote, layer — quel sottoinsieme è tutto ciò che serve. Per un modello che poggia su oggetti proprietari di AutoCAD, esportare in DXF ne perde una parte.

**Ampiezza del supporto.** Praticamente ogni strumento CAD, CAM e vettoriale legge il DXF. Meno leggono il DWG, e quelli che lo fanno spesso lo supportano in modo meno completo.

## Quale ti serve davvero?

**Ti hanno mandato un file e non riesci ad aprirlo.** Controlla prima l'estensione vera. Quasi tutti dicono «DWG» per entrambi, e metà delle volte quello nei tuoi download è un `.dxf` che potevi già aprire. Vedi [aprire un DXF senza AutoCAD](/it/blog/open-dxf-file-without-autocad/).

**Lo mandi a un taglio laser, a un'officina CNC o a un fabbricante.** DXF, praticamente sempre. Il software delle macchine e i servizi di taglio sono costruiti attorno a esso, e la geometria di taglio 2D sta comodamente dentro il sottoinsieme documentato. Vedi [preparare un DXF per il taglio laser](/it/blog/prepare-dxf-for-laser-cutting/).

**Lo mandi a un architetto o a un ingegnere che lavora in AutoCAD.** Chiedi. Molti preferiscono il DWG perché è ciò che il loro flusso si aspetta, e in caso contrario aprono benissimo un DXF.

**Stai archiviando a lungo termine.** DXF. Un formato testuale documentato sarà ancora leggibile fra vent'anni da chi abbia la specifica e un editor di testo. È esattamente il motivo per cui esistono i formati di scambio.

**Qualcuno deve solo guardarlo.** Nessuno dei due: manda un PDF. Vedi [convertire un DXF in PDF](/it/blog/convert-dxf-to-pdf/).

## Ottenere un DXF quando ti hanno mandato un DWG

La strada affidabile è chiederlo. Chi ha inviato il file lo apre nel suo programma CAD e fa *Salva con nome* o *Esporta* → DXF. Ci vogliono una decina di secondi, ogni applicazione CAD desktop lo sa fare, e il file esce dal software che l'ha creato invece che dall'ipotesi di terzi su di esso.

Se chiedere non è un'opzione, i convertitori esistono. Due cose da soppesare: la conversione è il punto in cui si perde fedeltà, e stai caricando il disegno di un altro su un servizio che non controlli. Per un progetto hobbistico va bene. Per un lavoro su commessa, chiedi.

Quando ne richiedi uno, conviene indicare una versione. **Il DXF R12 è il più sicuro**: antichissimo, supportato ovunque, e se il disegno è geometria 2D semplice non perde nulla che conti. I software macchina più datati in particolare se la cavano molto meglio con quello.

## Due cose che si fraintendono

**«Il DXF perde dati.»** Solo nel senso che non porta con sé i tipi di oggetto proprietari di AutoCAD. Linee, archi, cerchi, polilinee, testo, quote e layer arrivano intatti. Per il lavoro di disegno 2D la perdita è di solito nulla.

**«Il DXF è il formato vecchio.»** È versionato accanto al DWG dal 1982 e lo è tuttora. La confusione nasce dal fatto che l'R12 è così diffuso come bersaglio di compatibilità da far credere che il DXF si sia fermato lì.

## Dove si colloca questo strumento

[KulmanLab](https://kulmanlab.com/it/) legge **DXF, non DWG**, e vale la pena dire perché invece di trattarlo come una dimenticanza: il DXF è documentato, quindi un'implementazione può essere corretta leggendo la specifica. Il DWG significherebbe dipendere da una libreria ricostruita, dentro un browser, per un formato che cambia secondo il calendario di Autodesk.

Se hai un `.dwg`, questo non lo aprirà. Se hai un `.dxf`, puoi aprirlo in una scheda del browser senza installare niente: [app.kulmanlab.com](https://app.kulmanlab.com).

Quello che riscrive è l'intero disegno: linee, cerchi, archi, ellissi, polilinee, spline, testo con la sua formattazione, quote, direttrici e campiture, insieme a layer e tipi di linea. Un file aperto qui ed esportato di nuovo esce con le sue annotazioni, non ridotto a sola geometria.

---

*Correlati: [Import](/it/docs/commands/import/) per cosa esattamente KulmanLab legge da un DXF, e [Export Manager](/it/docs/commands/export-manager/) per cosa porta ciascun formato di esportazione.*
