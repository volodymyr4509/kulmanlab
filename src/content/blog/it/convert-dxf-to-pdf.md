---
title: "Come convertire un DXF in PDF (alla scala giusta)"
description: "Converti DXF in PDF gratis nel browser — anche a una scala esatta come 1:50 su A3, cosa che i convertitori online non fanno. Senza installare nulla."
keywords: [convertire DXF in PDF, DXF to PDF gratis, DXF PDF online, DXF PDF scala, stampare DXF in scala, convertitore DXF PDF, disegno CAD in PDF, DXF PDF A3, scala 1:50 PDF, DXF PDF senza AutoCAD]
date: 2026-09-03
author: KulmanLab
tag: Guida
---

Per convertire un DXF in PDF, aprilo in un editor CAD che gira nel browser ed esporta: niente da installare, nessun account, e il file resta sul tuo computer. Se il PDF deve essere misurabile una volta stampato, servono un layout su carta e una scala esatta — proprio il passaggio che i convertitori saltano.

È questa distinzione il senso di questa guida. Un convertitore di file generico ti restituisce un'immagine del tuo disegno. Un PDF in scala ti restituisce un disegno su cui qualcuno può appoggiare un righello.

## La via rapida: fare e basta un PDF

Quando ti serve solo qualcosa di leggibile da spedire:

1. Apri [app.kulmanlab.com](https://app.kulmanlab.com) e trascina il tuo `.dxf` sull'area di disegno, oppure usa il pulsante **Import** nel pannello File.
2. Clicca il pulsante **Print**, o digita `printmanager`.
3. Imposta **Format** su **PDF**.
4. Clicca **Export**. Il file viene scaricato.

Fatto. L'anteprima è renderizzata dallo stesso percorso di codice e alla stessa risoluzione del file esportato, quindi quello che vedi è quello che ottieni, non un'approssimazione.

Una cosa vale la pena saperla: **il PDF conserva tutto ciò che è a schermo** — quote, testo, campiture, direttrici — disposto esattamente come disegnato. Anche l'esportazione DXF porta con sé tutto questo, quindi la scelta tra i due non riguarda cosa sopravvive. Riguarda cosa serve a chi lo riceve: PDF se deve solo leggerlo o stamparlo, DXF se deve modificarlo.

## La via giusta: convertire a una scala esatta

Se qualcuno dovrà misurare o costruire partendo da questo, «ci sta nella pagina» non basta. Una scala 1:50 significa che 1 mm sulla carta è 50 mm nella realtà, e vale solo se la imposti di proposito.

1. **Passa a un layout su carta.** Clicca una scheda di layout in basso; il pulsante **+** ne aggiunge una. I layout sono spazio carta; lo spazio modello non ha una pagina su cui scalare.
2. **Definisci il foglio.** Digita `pagemanager`, oppure clic destro sulla scheda del layout e scegli **Page Manager**. Scegli il formato carta (A4, A3, A2, Letter…) e l'orientamento.
3. **Inserisci una finestra.** Digita `viewportrectangle` e indica due angoli opposti. La finestra è un'apertura sul tuo modello.
4. **Imposta la scala.** Con la finestra attiva, usa il **selettore di scala** nella barra dei controlli. Scegli un rapporto standard o digita il tuo: accetta il formato rapporto (`1:200`, `5:1`) o un decimale (`0.005`), poi Invio.
5. **Esporta.** Print Manager → PDF → Export.

Il PDF è dimensionato perché la pagina stampi in scala fisica reale. Stampalo al 100% — mai con «adatta alla pagina», che riscala in silenzio e vanifica tutto il lavoro — e le misure sulla carta saranno corrette.

Se in seguito cambi formato carta o scala, le finestre esistenti vengono riscalate proporzionalmente, così il layout non si scompone.

## Scegliere la qualità

Il menu **Quality** stabilisce i DPI a cui viene renderizzato il PDF:

| Quality | DPI | Per cosa |
|---|---|---|
| Draft | 72 | Controllo rapido, file più leggero |
| Normal | 150 | Predefinito — va bene per allegati in A4 |
| Presentation | 300 | Quando lo guarderanno da vicino |
| Max | 600 | Grande formato, dettagli fini |

Gli spessori di linea scalano insieme alla risoluzione, quindi una linea mantiene lo stesso spessore *fisico* sulla carta a ogni impostazione: una qualità più alta dà una linea più nitida, non più sottile. L'eccezione è la linea sottilissima (spessore `0`), che per convenzione resta di un pixel a ogni livello.

## Stili di stampa

Il menu **Style** cambia inchiostro e pagina:

- **Monochrome** — nero pieno su bianco, ed è il valore predefinito. È quello che vuoi per la carta: layer colorati che si leggono bene a schermo diventano grigi impastati su una stampante laser.
- **Default** — ogni entità con il proprio colore, pagina bianca.
- **Blueprint** — linee bianche su blu di Prussia intenso, nello stile della cianotipia classica. Per presentare, non per l'officina.

## Convertire solo una parte del disegno

**Change Area** ritaglia l'esportazione a un rettangolo che tracci sull'area di disegno. Ritaglia il file effettivamente esportato, non solo l'anteprima, e funziona sia in un layout sia nello spazio modello.

Gli angoli si agganciano a grip e intersezioni come qualunque altro punto, così puoi ritagliare sulla geometria disegnata invece che a occhio — utile quando un foglio contiene quattro dettagli e ti serve solo il terzo.

## Cosa non fa

Limiti onesti, prima di farci affidamento:

- **Il PDF è un'immagine raster dentro un contenitore PDF, non vettoriale.** In A4 e qualità Normal non si nota. In A1, o se qualcuno zooma forte su un dettaglio, un PDF vettoriale da un pacchetto CAD desktop sarà più nitido. Per i grandi formati alza Quality a Presentation o Max — vettoriale però non diventa.
- **Niente va a una stampante fisica.** Ottieni un file; stamparlo spetta alla tua stampante.
- **Solo browser desktop** — Chrome, Firefox, Safari, Edge. Nessuna versione mobile.
- **Solo 2D, DXF e non DWG.** Se il tuo file è un `.dwg`, chiedi al mittente di esportare in DXF.

## Quando usare altro

**Un convertitore generico** (CloudConvert, Zamzar e simili) va bene se davvero ti serve solo un'immagine e non ti importa a che dimensione stampi. Sono rapidi e gestiscono formati che nessun altro legge. Non ti daranno 1:50 su A3.

**Il CAD desktop** — LibreCAD, QCAD, o AutoCAD se ce l'hai — produce PDF vettoriali ed è la risposta giusta per disegni tecnici di grande formato destinati a essere stampati come si deve ed esaminati con attenzione.

**Questo**, per l'ampia fascia intermedia: un DXF che ti serve oggi come PDF annotato e scalato correttamente, senza installare nulla.

## Prima di inviarlo

- Scala impostata di proposito nella finestra, non lasciata su quello che ci stava
- Formato carta coerente con ciò su cui il destinatario stamperà davvero
- Quality sopra Normal se va su qualcosa più grande dell'A4
- Stile Monochrome, a meno che tu non voglia il colore di proposito
- PDF aperto una volta per controllarlo prima di allegarlo
- Detto al destinatario di stampare al 100%, non con «adatta alla pagina»

Quest'ultima riga salva più disegni in scala di tutto il resto di questo elenco.

---

*Correlati: [Print Manager](/it/docs/commands/print-manager/) per tutte le impostazioni di esportazione, [Page Manager](/it/docs/commands/page-manager/) per formato carta e scala del layout, [ViewportRectangle](/it/docs/commands/viewport-rectangle/) per collocare e scalare le finestre, e [Import](/it/docs/commands/import/) per ciò che KulmanLab legge da un DXF.*
