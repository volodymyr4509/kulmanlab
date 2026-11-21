---
title: "Comando BlockCreate — Creare un blocco da oggetti"
description: "Il comando BlockCreate crea un blocco con nome dagli oggetti selezionati, con il punto base che scegli, e li sostituisce con un riferimento al blocco. Il blocco si può poi posizionare più volte con BlockInsert."
keywords: ["creare blocco CAD", "blocco da oggetti CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

Il comando `CreaBlocco` crea un **blocco**: un gruppo di oggetti con nome, memorizzato una sola volta nel disegno e posizionato quante volte vuoi con [Block Insert](../block-insert/). Gli oggetti scelti diventano il blocco e nel disegno sono sostituiti da un riferimento ad esso, quindi nulla cambia d’aspetto.

## Creare un blocco

1. Se vuoi, seleziona prima gli oggetti, poi digita `CreaBlocco` o fai clic su **Crea blocco** nel pannello **Blocchi**. Si apre una finestra con la selezione già inclusa.
2. Digita un **Nome**. Non può essere vuoto, non può contenere nessuno dei caratteri `< > / \ " : ; ? * | , =` né un apice inverso, e non può essere il nome di un altro blocco.
3. Fai clic su **Seleziona oggetti** per aggiungere o togliere oggetti: la finestra si nasconde e fai clic sugli oggetti o trascini un’area. Premi **Enter** o **Space** per tornare alla finestra, dove **Oggetti** mostra quanti sono.
4. Imposta il **Punto base**, il punto con cui il blocco viene posizionato: digita X e Y, oppure fai clic su **Specifica punto** e poi sull’area di disegno (o digita lì X,Y). Parte da 0,0.
5. Fai clic su **OK**. Il blocco viene memorizzato, gli oggetti lasciano il posto a un riferimento ad esso nel punto base e il terminale registra il nome del blocco e quanti oggetti contiene.

## Da sapere

- **OK** resta disattivato finché qualcosa non va, e il messaggio sotto i campi dice cosa: un nome vuoto o inutilizzabile, un nome già in uso o nessun oggetto.
- **Esc** durante la scelta degli oggetti o del punto base torna alla finestra con il blocco com’era. **Esc** nella finestra annulla il comando.
- Il blocco viene salvato con il disegno e scritto in DXF insieme ai suoi riferimenti.

---

*Correlati: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
