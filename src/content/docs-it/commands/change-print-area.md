---
title: ChangePrintArea — Ritagliare l'esportazione di Print Manager a un rettangolo
description: Il comando ChangePrintArea sceglie due angoli opposti sulla tela per definire la regione esportata da Print Manager. Supporta coordinate X,Y digitate e snap, e ricorda l'area separatamente per lo spazio Modello e per ogni layout.
keywords: [area di stampa CAD, ritaglio esportazione CAD, comando change print area, ritaglio print manager, regione di esportazione CAD, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

Il comando `ChangePrintArea` definisce la regione rettangolare che [Print Manager](../print-manager/) esporta. Viene eseguito sulla tela con Print Manager nascosto e prende due angoli opposti — gli stessi due clic di [Rectangle](../rectangle/), quindi coordinate digitate e snap si comportano esattamente come lì.

## Selezionare un'area

1. Digita `ChangePrintArea` nel terminale, oppure fai clic su **Change Area** nella barra laterale di Print Manager. Print Manager si nasconde e la tela diventa interattiva.
2. **Fai clic sul primo angolo**, oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
3. **Fai clic sull'angolo opposto**, oppure digita di nuovo `X,Y`.

Print Manager si riapre con la nuova area nell'anteprima, che si ridimensiona alle sue proporzioni esatte.

Gli angoli si agganciano a grip e intersezioni come qualsiasi altro punto, così puoi ritagliare sulla geometria disegnata invece che a occhio. L'ordine dei due angoli è indifferente: angoli opposti definiscono lo stesso rettangolo.

Premi `Escape` per annullare. Non viene scritto nulla, quindi Print Manager si riapre con l'area che aveva già.

## Dove viene ricordata l'area

La selezione è memorizzata per contesto, non globalmente:

| Contesto | Slot |
|---|---|
| Spazio modello | Uno slot condiviso |
| Ogni layout | Il proprio slot, tenuto separato |

Riaprire Print Manager sullo stesso layout — o sul Modello — ripristina il suo ultimo ritaglio invece di azzerarlo, e passare da un layout all'altro lascia intatta l'area di ciascuno.

Questo è tenuto solo in memoria. Ricaricare la pagina cancella tutte le aree memorizzate e Print Manager torna ai valori predefiniti qui sotto.

## Area predefinita

Senza nulla di memorizzato per il contesto corrente, Print Manager si apre su:

| Contesto | Predefinito |
|---|---|
| Spazio modello | Il riquadro di delimitazione di tutte le entità — la stessa estensione a cui fa zoom [Fit](../fit/) |
| Ogni layout | L'intero foglio |

## Comandi correlati

| Comando | Cosa fa |
|---|---|
| [Print Manager](../print-manager/) | La finestra di esportazione a cui si applica quest'area |
| [Rectangle](../rectangle/) | Lo stesso clic a due angoli, ma disegna una polilinea |
| [Fit](../fit/) | Fa zoom sull'estensione usata per impostazione predefinita nello spazio Modello |
