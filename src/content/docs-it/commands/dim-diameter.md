---
title: "Comando Dimension Diameter — Annota il Diametro di Cerchi e Archi"
description: "Il comando Dimension Diameter posiziona una quota diametro (con il simbolo diametro come prefisso) attraverso il centro di un arco o cerchio. Sposta il cursore per ruotare la linea di quota in qualsiasi angolazione. Compatibilità DXF completa come entità DIMENSION diametro."
keywords: [CAD quota diametro, dimdiameter, annota diametro cerchio, quota diametro arco, simbolo diametro CAD, kulmanlab]
group: markup
order: 8
---

# Dimension Diameter

Il comando `dimdiameter` posiziona una quota diametro su un arco o cerchio. La linea di quota attraversa il diametro completo — passando per il centro tra due punti diametralmente opposti dell'arco — ed è etichettata `⌀ <valore>`. Per annotare solo il raggio dal centro a un bordo, usa [Dimension Radius](../dim-radius/).

## Anatomia di una quota diametro

```
  ●──────────── ⌀ 10.00 ────────────●
  (punto arco lontano)         (punto arco vicino / lato testo)
```

- **Linea di quota** — attraversa il diametro completo, con punte di freccia in entrambi i punti di intersezione dell'arco.
- **Punto arco vicino** — il punto della circonferenza sul lato del cursore (dove si trova l'etichetta testo).
- **Punto arco lontano** — il punto diametralmente opposto.
- **Etichetta** — `⌀` seguito dal valore del diametro.

## Posizionamento di una quota diametro

1. Digita `dimdiameter` nel terminale o clicca il pulsante **Dimension Diameter** nella barra degli strumenti.
2. **Clicca un arco o cerchio** per selezionarlo.
3. **Sposta il cursore** per ruotare la linea di quota all'angolazione desiderata.
4. **Clicca** per posizionare la quota.

Solo le entità **Arc** e **Circle** possono essere selezionate.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Escape` | Annulla |

## Dimension Diameter vs Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Misura | Diametro completo (2 × raggio) | Raggio (centro al bordo) |
| Linea di quota | Bordo → bordo attraverso il centro | Centro → bordo |
| Prefisso etichetta | `⌀` | `R` |
| Punte di freccia | Due (in entrambi i punti dell'arco) | Una (nel punto dell'arco) |
| Ideale per | Quote foro circolare o albero completo | Annotare un lato di un elemento curvo |

## Modifica dell'etichetta — simple mode

**Doppio clic** su una quota diametro posizionata per aprire l'editor di testo in **simple** mode. L'editor è precompilato con il valore visualizzato corrente (es. `⌀ 10.00`) in modo da poter posizionare il cursore e modificarlo direttamente.

| Feature | Comportamento |
|---------|--------------|
| Bold / Italic / Font / Height | Si applica all'**intera** etichetta in una volta |
| Formattazione per carattere | Non supportata |
| `Enter` | Conferma il valore e chiude l'editor |
| Multiriga | Non supportato |

Vedi [Editor di Testo — simple mode](../../interface/text-editor/#simple-mode) per il riferimento completo.

## DXF — entità DIMENSION diametro

Le quote diametro vengono salvate come entità `DIMENSION` con geometria di tipo diametro, memorizzando entrambe le posizioni dei punti dell'arco e il valore del diametro misurato (2 × raggio). Tutte le proprietà vengono mantenute senza perdita.
