---
sidebar_position: 4
title: Comando Circle — Disegna Cerchi per Centro e Raggio in KulmanLab CAD
description: Il comando Circle posiziona un cerchio cliccando un centro e poi cliccando o digitando il raggio. Quattro grip cardinali permettono di ridimensionare il raggio trascinando senza rieseguire il comando. Compatibilità DXF completa come entità CIRCLE.
keywords: [comando circle CAD, disegna cerchio CAD, input raggio cerchio, ridimensiona cerchio grip, entità CIRCLE DXF, kulmanlab]
---

# Circle

Il comando `circle` disegna un cerchio definito da un punto centrale e un raggio. Dopo aver cliccato il centro puoi impostare il raggio cliccando un secondo punto sul canvas o digitando un numero esatto — entrambe le opzioni sono attive contemporaneamente.

## Disegnare un cerchio

1. Digita `circle` nel terminale o clicca il pulsante **Circle** nella barra degli strumenti.
2. **Clicca il punto centrale**, oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
3. Imposta il raggio — scegli tra:
   - **Clicca qualsiasi punto** sul canvas — la distanza dal centro diventa il raggio, oppure
   - **Digita il raggio** e premi **Invio** per un valore esatto.

Il cerchio viene posizionato immediatamente e il comando termina.

```
  centro ●
          \  anteprima linea raggio
           \
            ● ← clicca qui, o digita un numero
```

Nella fase del raggio, l'anteprima in tempo reale mostra il cerchio alla distanza corrente del cursore e traccia anche una linea di raggio dal centro al punto corrente.

## Inserimento coordinate per il centro

Invece di cliccare, puoi digitare la posizione del centro:

1. Digita il valore X.
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per posizionare il centro e passare all'input del raggio.

## Input raggio digitato

Dopo aver posizionato il centro, digitare costruisce immediatamente un valore di raggio:

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiunge cifra al valore raggio |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` | Posiziona il cerchio al raggio digitato |

Il valore accumulato viene mostrato nel prompt del terminale (es. `enter radius of circle: 25`). L'anteprima si aggiorna per mostrare il raggio digitato mentre il cursore controlla la direzione del marcatore della linea di raggio.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Avvia inserimento coordinata X (fase centro), o cifra raggio (fase raggio) |
| `,` | Blocca X e passa all'inserimento Y (fase centro) |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma coordinata o raggio digitato |
| `Escape` | Annulla e reimposta |

## Modifica con i grip — ridimensionamento del raggio

Un cerchio selezionato espone cinque grip:

| Grip | Posizione | Funzione |
|------|-----------|----------|
| **Centro** | Punto centrale | Sposta l'intero cerchio; raggio invariato |
| **Sinistra** | Punto più a sinistra (centro − raggio) | Trascina per impostare nuovo raggio = distanza al centro |
| **Destra** | Punto più a destra (centro + raggio) | Trascina per impostare nuovo raggio = distanza al centro |
| **Su** | Punto più in alto | Trascina per impostare nuovo raggio = distanza al centro |
| **Giù** | Punto più in basso | Trascina per impostare nuovo raggio = distanza al centro |

Tutti e quattro i grip cardinali si comportano in modo identico — il nuovo raggio è uguale alla distanza dal centro alla posizione di trascinamento. Il centro rimane fisso.

## Selezione dei cerchi

| Metodo | Comportamento |
|--------|--------------|
| **Clic** | Seleziona se il clic è vicino alla circonferenza |
| **Trascina a destra** (rigoroso) | L'intero riquadro di delimitazione (centro ± raggio) deve essere all'interno del riquadro |
| **Trascina a sinistra** (incrocio) | Qualsiasi parte della circonferenza che attraversa o tocca il bordo del riquadro seleziona il cerchio |

## Comandi di modifica supportati

| Comando | Effetto sul cerchio |
|---------|-------------------|
| [Move](../move/) | Trasla il centro; raggio invariato |
| [Copy](../copy/) | Crea un cerchio identico in un nuovo centro |
| [Rotate](../rotate/) | Ruota il centro attorno al punto base; raggio invariato |
| [Mirror](../mirror/) | Riflette il centro rispetto all'asse speculare; raggio invariato |
| [Scale](../scale/) | Scala la posizione del centro e moltiplica il raggio per il fattore di scala |
| [Offset](../offset/) | Crea un cerchio concentrico a raggio maggiore o minore |
| [Delete](../delete/) | Rimuove il cerchio |

## Proprietà

**Generali**

| Proprietà | Predefinito | Significato |
|-----------|-------------|-------------|
| Colore | 256 (ByLayer) | Indice colore ACI |
| Layer | `0` | Assegnazione layer |
| Tipo linea | ByLayer | Pattern tipo linea con nome |
| Scala tipo linea | 1 | Fattore di scala sul pattern tipo linea |
| Spessore | 0 | Spessore di estrusione |

**Geometria**

| Proprietà | Significato |
|-----------|-------------|
| Centro X / Centro Y | Coordinate del punto centrale |
| Raggio | Raggio del cerchio in unità di disegno |

## Circle vs Arc — quando usare quale

| | Circle | Arc |
|---|--------|-----|
| Estensione | 360° completo | Parziale — definito da angolo iniziale e finale |
| Come disegnare | Centro + raggio | Tre punti sulla curva |
| Input digitato | Valore raggio | Nessuno — solo clic |
| Grip ridimensionamento | 4 punti cardinali | Punti di inizio e fine (angolo + raggio) |
| Quotatura | Raggio: [Dim Radius](../dim-radius/) · Diametro: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Ideale per | Fori completi, cerchi di bulloni, elementi rotondi | Raccordi, curve parziali, percorsi curvilinei |

## DXF — entità CIRCLE

I cerchi vengono salvati come entità `CIRCLE` nel file DXF. Coordinate centro, raggio, colore, layer, tipo linea, scala tipo linea e spessore vengono tutti mantenuti senza perdita. Qualsiasi applicazione compatibile con DXF li legge come cerchi standard.
