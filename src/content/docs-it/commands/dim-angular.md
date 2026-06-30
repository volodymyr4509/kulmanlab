---
sidebar_position: 9
title: Dimension Angular — Misura Angoli tra Linee, Archi e Cerchi in KulmanLab CAD
description: Il comando DimensionAngular posiziona una quota angolare su linee, archi o cerchi. Supporta le modalità angolo tra due linee, estensione arco e settore cerchio.
keywords: [quota angolare CAD, dimensione angolo, misura angolo tra linee, DimensionAngular, quota arco, annotazione angolo, kulmanlab]
---

# Dimension Angular

Il comando `DimensionAngular` posiziona una **quota angolare** ad arco sul disegno. Misura e annota l'angolo tra due linee, l'estensione di un arco, o un settore di un cerchio.

## Come attivare

Clicca il pulsante **Dimension Angular** nella barra degli strumenti nel pannello Annotazione, oppure digita `DimensionAngular` nel terminale.

## Tre modalità di input

Il primo clic determina quale modalità viene usata:

### Due linee

1. **Clicca la prima linea.** La posizione del cursore determina quale lato della linea viene usato.
2. **Clicca la seconda linea.** Le due linee devono intersecarsi (l'intersezione viene calcolata automaticamente; non deve essere visibile sullo schermo).
3. **Clicca per posizionare** l'arco di quota. Sposta il cursore per scegliere il raggio e quale settore angolare viene etichettato — l'annotazione segue il cursore sul lato del vertice su cui ti trovi.

Le linee parallele non possono formare una quota angolare; il comando ignora il secondo clic se le linee non si intersecano.

### Arco

1. **Clicca un arco.** La quota viene creata immediatamente dall'angolo iniziale all'angolo finale dell'arco, usando il centro dell'arco come vertice.
2. **Clicca per posizionare** l'arco di quota al raggio desiderato.

### Cerchio

1. **Clicca un cerchio.** Il primo punto angolare si aggancia al punto più vicino sul cerchio.
2. **Clicca un secondo punto** sul cerchio per definire il secondo punto angolare.
3. **Clicca per posizionare** l'arco di quota.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Escape` | Annulla e torna al primo pick |

## Dettagli di comportamento

- L'arco di quota viene sempre tracciato sul lato del vertice dove lo posizioni — sposta il cursore attraverso il vertice per passare all'angolo supplementare.
- L'angolo misurato viene mostrato in gradi e si aggiorna in tempo reale mentre sposti il cursore durante il posizionamento.
- L'annotazione risultante è un'entità `DimensionAngular` completa memorizzata sul layer corrente. Le proprietà di aspetto (dimensione freccia, altezza testo, lunghezza linea di estensione) possono essere regolate nel pannello Proprietà.
- Le quote angolari sono incluse nell'esportazione JSON ma non sono supportate dall'esportatore DXF.

## Modifica dell'etichetta — simple mode

**Doppio clic** su una quota angolare posizionata per aprire l'editor di testo in **simple** mode. L'editor è precompilato con il valore visualizzato corrente in modo da poter posizionare il cursore e modificarlo direttamente.

| Feature | Comportamento |
|---------|--------------|
| Bold / Italic / Font / Height | Si applica all'**intera** etichetta in una volta |
| Formattazione per carattere | Non supportata |
| `Enter` | Conferma il valore e chiude l'editor |
| Multiriga | Non supportato |

Vedi [Editor di Testo — simple mode](../interface/text-editor#simple-mode) per il riferimento completo.

## Comandi correlati

- [Dimension Linear](./dim-linear) — quota orizzontale o verticale
- [Dimension Aligned](./dim-aligned) — quota allineata a due punti
- [Dimension Radius](./dim-radius) — quota raggio per archi e cerchi
- [Dimension Diameter](./dim-diameter) — quota diametro per cerchi
