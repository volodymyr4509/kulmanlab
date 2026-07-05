---
sidebar_position: 16
title: Comando Dimension Radius — Annota i Raggi di Archi e Cerchi in KulmanLab CAD
description: Il comando Dimension Radius posiziona una quota radiale con prefisso R su un arco o cerchio. Clicca l'entità, poi sposta il cursore per orientare la linea di quota dal centro alla circonferenza. Compatibilità DXF completa come entità DIMENSION raggio.
keywords: [CAD quota raggio, dimradius, annota raggio cerchio, quota raggio arco, quota con prefisso R, kulmanlab]
---

# Dimension Radius

Il comando `dimradius` posiziona una quota raggio su un arco o cerchio. La linea di quota va dal centro a un punto sulla circonferenza nella direzione del cursore, etichettata `R <valore>`. Per quotare un diametro completo invece, usa [Dimension Diameter](../dim-diameter/).

## Anatomia di una quota raggio

```
  ● (centro)
   \
    \  R 5.00
     \
      ●────── testo (lato cursore)
   (punto arco)
```

- **Linea di quota** — dal centro attraverso un punto dell'arco verso il cursore, con punta di freccia nell'arco.
- **Etichetta** — `R` seguito dal valore del raggio.

## Posizionamento di una quota raggio

1. Digita `dimradius` nel terminale o clicca il pulsante **Dimension Radius** nella barra degli strumenti.
2. **Clicca un arco o cerchio** per selezionarlo.
3. **Sposta il cursore** per orientare la linea di quota — il punto dell'arco segue la direzione del cursore dal centro.
4. **Clicca** per posizionare la quota.

Solo le entità **Arc** e **Circle** possono essere selezionate. Cliccare qualsiasi altro tipo di entità non fa nulla.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Escape` | Annulla |

## Dimension Radius vs Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Misura | Raggio (centro al bordo) | Diametro (bordo a bordo attraverso il centro) |
| Linea di quota | Centro → punto arco | Punto arco → punto arco (attraverso il centro) |
| Prefisso etichetta | `R` | `⌀` |
| Punte di freccia | Una (nel punto dell'arco) | Due (in entrambi i punti dell'arco) |
| Ideale per | Annotare un lato di un elemento curvo | Annotare quote circolari complete |

## Modifica dell'etichetta — simple mode

**Doppio clic** su una quota raggio posizionata per aprire l'editor di testo in **simple** mode. L'editor è precompilato con il valore visualizzato corrente (es. `R 5.00`) in modo da poter posizionare il cursore e modificarlo direttamente.

| Feature | Comportamento |
|---------|--------------|
| Bold / Italic / Font / Height | Si applica all'**intera** etichetta in una volta |
| Formattazione per carattere | Non supportata |
| `Enter` | Conferma il valore e chiude l'editor |
| Multiriga | Non supportato |

Vedi [Editor di Testo — simple mode](../../interface/text-editor/#simple-mode) per il riferimento completo.

## DXF — entità DIMENSION raggio

Le quote raggio vengono salvate come entità `DIMENSION` con geometria di tipo raggio, memorizzando le coordinate del centro, la posizione del punto dell'arco e il valore del raggio misurato. Tutte le proprietà vengono mantenute senza perdita.
