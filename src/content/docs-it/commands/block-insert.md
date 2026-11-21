---
title: "Comando BlockInsert — Posizionare un blocco tra quelli del disegno"
description: "Il comando BlockInsert apre una tavolozza con le anteprime dei blocchi del disegno. Scegline uno, imposta scala e rotazione e fai clic o digita un punto per posizionarlo, una volta o ripetutamente."
keywords: ["inserire blocco CAD", "tavolozza blocchi CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

Il comando `InserisciBlocco` apre una tavolozza con le anteprime di tutti i blocchi del disegno e posiziona quello che scegli. Crea blocchi con [Block Create](../block-create/) o apri un file DXF che ne contenga.

## Posizionare un blocco

1. Digita `InserisciBlocco` o fai clic su **Inserisci blocco** nel pannello **Blocchi**. La tavolozza si ancora a sinistra con una tessera di anteprima per blocco, dodici per pagina; le frecce sotto le tessere cambiano pagina.
2. Digita in **Cerca blocchi** per restringere le tessere per nome.
3. Imposta **Scala** (deve essere maggiore di 0) e **Rotazione** in gradi. **Ripeti posizionamento** è attivo per impostazione predefinita.
4. Fai clic sulla tessera di un blocco. Il blocco segue il cursore: fai clic per posizionarlo dal suo punto base, oppure digita X,Y per una posizione esatta. Con il cursore bloccato su un angolo puoi digitare una lunghezza.
5. Con **Ripeti posizionamento** attivo, il blocco continua a seguire il cursore per la copia successiva finché non premi **Esc**. Disattivato, il comando termina dopo una copia.

## Da sapere

- Per eliminare un blocco, fai clic sul cestino della sua tessera e conferma. Un blocco con riferimenti nel disegno non si può eliminare: la sua tessera dice **In uso, non può essere eliminato**.
- Un disegno senza blocchi mostra **Il disegno non contiene blocchi** nella tavolozza.
- **Esc** chiude la tavolozza quando non si sta posizionando nulla. È uno dei pannelli ancorati, che a sinistra si mostrano uno alla volta.

---

*Correlati: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
