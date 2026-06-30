---
sidebar_position: 15
title: Comando Dimension Continue — Concatena Quote da una Linea Base Esistente in KulmanLab CAD
description: Il comando Dimension Continue estende una catena di quote dalla seconda linea di estensione dell'ultima quota posizionata. Eredita automaticamente l'angolo, lo scostamento, la dimensione delle frecce e l'altezza del testo della quota base. Funziona sia con basi lineari che allineate.
keywords: [CAD quota continua, dimcontinue, quote concatenate CAD, quota di riferimento, serie quote continue, kulmanlab]
---

# Dimension Continue

Il comando `dimcontinue` concatena nuove quote dalla **seconda linea di estensione** di una quota esistente. Ogni nuovo segmento viene posizionato lungo lo stesso asse di misurazione e allo stesso scostamento della linea di quota della base. Tutte le proprietà di stile — dimensione frecce, altezza testo, lunghezze linee di estensione — vengono copiate automaticamente dalla base.

## Come appaiono le quote concatenate

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (base    p3           p4
           ext2 → nuovo inizio)
```

Ogni rettangolo è un'entità `DIMENSION` separata. Condividono la stessa posizione della linea di quota e la stessa direzione di misurazione.

## Avviare una catena

1. Digita `dimcontinue` nel terminale o clicca il pulsante **Dimension Continue** nella barra degli strumenti.
2. **Se è stata appena posizionata una quota** — il comando la raccoglie automaticamente come base (nessun clic necessario).
3. **Se non esiste una quota recente** — clicca qualsiasi quota esistente per usarla come base.
4. **Clicca il prossimo punto di estensione** — un'anteprima mostra la nuova quota mentre sposti il cursore. Oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
5. Continua a cliccare (o digitare) per estendere la catena. Ogni quota posizionata diventa automaticamente la nuova base.
6. Premi **Invio**, **Spazio**, o **Escape** per terminare la catena.

## Cosa viene ereditato dalla quota base

| Proprietà | Ereditata dalla base |
|-----------|---------------------|
| Direzione di misurazione / angolo | Sì — bloccata per l'intera catena |
| Scostamento linea di quota | Sì |
| Dimensione frecce | Sì |
| Altezza testo | Sì |
| Scostamento ed estensione linee di estensione | Sì |
| Allineamento testo | Sì |
| Nome stile | Sì |
| Colore, Layer | Non ereditati — usa il layer corrente |

## Blocco direzione di misurazione

La direzione di misurazione della catena è **fissa all'angolo della quota base**:

- Base lineare (O) → tutte le continuazioni misurano distanza orizzontale (Δ X).
- Base lineare (V) → tutte le continuazioni misurano distanza verticale (Δ Y).
- Base allineata a qualsiasi angolo → tutte le continuazioni misurano lungo quello stesso angolo.

Non è possibile cambiare direzione a metà catena. Avvia una nuova [Dimension Linear](./dim-linear) o [Dimension Aligned](./dim-aligned) per quotare in una direzione diversa.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Avvia inserimento coordinata X |
| `,` | Blocca X e passa all'inserimento Y |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma coordinata digitata, o termina la catena se non c'è input in corso |
| `Spazio` / `Escape` | Termina la catena |

## Dimension Continue vs iniziare da zero

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Punto di partenza | Fisso all'ext2 dell'ultima base | Clicca ovunque |
| Angolo | Bloccato alla base | Libero |
| Scostamento | Ereditato dalla base | Impostato dal cursore o digitato |
| Stile | Ereditato dalla base | Stile corrente |
| Ideale per | Misurazioni cumulative lungo una fila | Prima quota o cambiamento direzione |

## Modifica delle etichette dopo il posizionamento — simple mode

**Doppio clic** su qualsiasi quota della catena per aprire l'editor di testo in **simple** mode. Ogni segmento è indipendente e può essere modificato individualmente.

| Feature | Comportamento |
|---------|--------------|
| Bold / Italic / Font / Height | Si applica all'**intera** etichetta in una volta |
| Formattazione per carattere | Non supportata |
| `Enter` | Conferma il valore e chiude l'editor |
| Multiriga | Non supportato |

Vedi [Editor di Testo — simple mode](../interface/text-editor#simple-mode) per il riferimento completo.

## DXF — entità DIMENSION

Ogni segmento della catena viene memorizzato come entità `DIMENSION` indipendente nel file DXF. Non sono collegati nel file — condividono proprietà perché sono stati creati dalla stessa base, ma ciascuno può essere modificato individualmente dopo il posizionamento.
