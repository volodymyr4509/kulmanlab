---
title: Polyline — Disegnare Percorsi Multi-Segmento come Entità Singola
description: Il comando Polyline disegna un numero qualsiasi di segmenti connessi memorizzati come una singola entità LWPOLYLINE. I grip di vertice e punto medio del segmento permettono di ridisegnare qualsiasi parte del percorso dopo la creazione. Supporta offset; non supporta trim o extend.
keywords: [CAD comando polyline, disegna polilinea CAD, percorso multi-segmento CAD, LWPOLYLINE DXF, ridisegna polilinea, grip vertice CAD, offset polilinea, kulmanlab]
group: shapes
order: 2
---

# Polyline

Il comando `polyline` disegna un percorso connesso di un numero qualsiasi di segmenti retti, tutti memorizzati come una singola entità `LWPOLYLINE`. Poiché l'intero percorso è un unico oggetto, selezionarlo seleziona ogni segmento contemporaneamente — sposta, ruota o scala l'intera forma in un'unica operazione. Questa è la distinzione chiave dalle [Linee](../line/) concatenate, dove ogni segmento è un'entità indipendente.

Le polilinee possono anche essere **chiuse**: il comando [Rettangolo](../rectangle/) usa la stessa entità `LWPOLYLINE` con un flag di chiusura impostato.

## Disegnare una polilinea

1. Digita `polyline` nel terminale o clicca il pulsante **Polyline** nella barra degli strumenti.
2. **Clicca il primo punto**, oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
3. **Clicca ogni punto successivo** — ogni clic aggiunge un segmento. L'inserimento coordinate funziona ad ogni passo.
4. Premi **Invio** o **Spazio** per terminare (richiede almeno 2 punti posizionati).

```
  ●──────●
  1°    2°
          \
           \  segmento 3 (in corso — cursore qui)
            ●  ← clic per aggiungere, Invio/Spazio per terminare
```

Premendo **Esc** in qualsiasi momento si scartano tutti i punti posizionati e si esce dal comando.

## Inserimento coordinate

Invece di cliccare, digita una posizione esatta per qualsiasi vertice:

1. Digita il valore X.
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per posizionare il vertice.

## Blocco angolo e lunghezza segmento esatta

La stessa logica di aggancio a 45° del comando [Linea](../line/) si applica tra due punti consecutivi. Quando è bloccato su un asse:

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiunge cifra alla lunghezza del segmento |
| `-` | Lunghezza negativa — inverte la direzione lungo l'asse (solo primo carattere) |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` | Posiziona il punto successivo alla distanza digitata |

La lunghezza accumulata attuale appare nel prompt del terminale in tempo reale. Cliccare mentre è bloccato si proietta sull'asse in modo che il nuovo vertice si trovi esattamente su di esso.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Inizia l'inserimento coordinata X, o la lunghezza del segmento con angolo bloccato |
| `,` | Blocca X e passa all'inserimento Y |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma la coordinata o la lunghezza digitata, o termina la polilinea se nulla è digitato e ≥ 2 punti esistono |
| `Spazio` | Termina la polilinea (come Invio quando nessun input è in corso) |
| `Esc` | Scarta tutti i punti ed esce |

## Modifica con grip — vertici e punti medi dei segmenti

Una polilinea selezionata mostra due tipi di grip:

| Grip | Posizione | Funzione |
|------|-----------|---------|
| **Vertice** | In ogni punto posizionato | Trascina per riposizionare quel vertice; tutti i segmenti connessi si allungano per seguire |
| **Punto medio del segmento** | Al centro di ogni segmento | Trascina per traslare **entrambi** gli endpoint di quel segmento insieme, mantenendo lunghezza e angolo intatti |

Il grip del punto medio del segmento è esclusivo delle polilinee — permette di far scorrere un singolo segmento lateralmente senza modificarne la lunghezza. Su una [Linea](../line/), il grip del punto medio attiva invece il comando Move per l'intera entità.

Non esiste un grip "sposta tutta la polilinea". Per spostare l'intero percorso usa il comando [Move](../move/).

## Selezione delle polilinee

| Metodo | Comportamento |
|--------|--------------|
| **Clic** | Seleziona la polilinea se il clic cade entro la distanza di hit-test da qualsiasi segmento |
| **Trascina a destra** (stretta) | Tutti i vertici devono essere dentro il riquadro |
| **Trascina a sinistra** (incrociante) | Qualsiasi segmento che tocca il bordo del riquadro seleziona l'intera polilinea |

Poiché una polilinea è un'unica entità, una selezione incrociante che tocca qualsiasi segmento seleziona tutti i segmenti.

## Comandi di modifica supportati

Le polilinee supportano tutte le trasformazioni generali e l'offset, ma **non** il trim o l'extend (quelli sono solo per le [Linee](../line/)):

| Comando | Effetto sulla polilinea |
|---------|------------------------|
| [Move](../move/) | Trasla tutti i vertici dello stesso spostamento |
| [Copy](../copy/) | Crea una polilinea identica in una nuova posizione |
| [Rotate](../rotate/) | Ruota tutti i vertici intorno al punto base scelto |
| [Mirror](../mirror/) | Riflette tutti i vertici rispetto all'asse speculare |
| [Scale](../scale/) | Scala tutti i vertici uniformemente dal punto base |
| [Offset](../offset/) | Crea una polilinea parallela a una distanza perpendicolare fissa |
| [Delete](../delete/) | Rimuove la polilinea dal disegno |

## Polyline vs Linea — quando usare quale

| | Polilinea | Linea |
|---|---------|-------|
| Conteggio entità | Una `LWPOLYLINE` per l'intero percorso | Una `LINE` per segmento |
| Forma chiusa | Sì (flag di chiusura) | No |
| Trim / Extend | No | Sì — segmento per segmento |
| Grip punto medio del segmento | Trasla l'intero segmento | Attiva Move per l'entità |
| Ideale per | Contorni, profili, forme da tenere intere | Linee di costruzione, geometria da tagliare |

## DXF — entità LWPOLYLINE

Le polilinee vengono salvate come entità `LWPOLYLINE` nel file DXF. Tutte le proprietà — coordinate dei vertici, flag di chiusura, colore, livello, tipo di linea, scala del tipo di linea e spessore — vengono salvate e ripristinate senza perdita. I rettangoli disegnati con il comando [Rettangolo](../rectangle/) vengono anche salvati come `LWPOLYLINE` (chiusa, quattro vertici) e sono indistinguibili a livello DXF.

Le entità `LWPOLYLINE` da qualsiasi applicazione compatibile DXF (LibreCAD, FreeCAD, ecc.) vengono lette nell'editor come polilinee completamente modificabili.
