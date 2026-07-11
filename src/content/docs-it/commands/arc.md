---
title: Comando Arc — Disegna Archi a Tre Punti con il Metodo della Circonferenza in KulmanLab CAD
description: Il comando Arc disegna un arco circolare attraverso tre punti cliccati usando la geometria della circonferenza. I grip di inizio e fine permettono di trascinare i punti finali a un nuovo angolo e raggio dopo il posizionamento. Compatibilità DXF completa come entità ARC.
keywords: [comando arc CAD, arco a tre punti CAD, arco circonferenza, disegna arco CAD, entità ARC DXF, modifica grip arco, kulmanlab]
group: shapes
order: 5
---

# Arc

Il comando `arc` disegna un arco circolare attraverso tre punti cliccati. L'arco viene calcolato come la circonferenza unica che passa per tutti e tre i punti — non è necessario specificare direttamente centro o raggio. L'arco va dal primo clic al terzo clic, passando per il secondo.

## Disegnare un arco

1. Digita `arc` nel terminale o clicca il pulsante **Arc** nella barra degli strumenti.
2. **Clicca il primo punto** — un'estremità dell'arco. Oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
3. **Clicca il secondo punto** — un punto per cui l'arco deve passare (controlla curvatura e direzione). L'inserimento di coordinate funziona anche qui.
4. **Clicca il terzo punto** — l'altra estremità dell'arco. L'arco viene posizionato e il comando termina. L'inserimento di coordinate funziona anche qui.

```
           ● (2° clic — punto intermedio sulla curva)
          / \
         /   \
        ●     ●
     1°         3°
```

Un'anteprima a linea collega i primi due clic mentre si posiziona il terzo. Dal secondo clic in poi un'anteprima dell'arco in tempo reale segue il cursore.

> **Punti collineari**: se tutti e tre i punti giacciono su una linea retta l'arco non può essere calcolato e non viene posizionata alcuna entità. Sposta il secondo punto fuori dalla linea e riprova.

## Inserimento coordinate

In ognuno dei tre passi puoi digitare una posizione esatta invece di cliccare:

1. Digita il valore X.
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per posizionare il punto.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Avvia inserimento coordinata X |
| `,` | Blocca X e passa all'inserimento Y |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma la coordinata digitata |
| `Escape` | Scarta tutti i punti posizionati ed esce |

## Modifica con i grip — regolazione dei punti finali e del raggio

Un arco selezionato espone tre grip:

| Grip | Posizione | Funzione |
|------|-----------|----------|
| **Centro** | Centro geometrico della circonferenza | Sposta l'intero arco; raggio e angoli invariati |
| **Inizio** | Primo punto finale dell'arco | Trascina per spostare l'inizio lungo la circonferenza — cambia sia l'angolo iniziale che il raggio |
| **Fine** | Ultimo punto finale dell'arco | Trascina per spostare la fine lungo la circonferenza — cambia sia l'angolo finale che il raggio |

Trascinare un grip di inizio o fine lo riposiziona nella posizione di trascinamento e ricalcola sia l'angolo che il raggio da quella nuova posizione rispetto al centro. Il punto finale opposto resta fisso.

## Selezione degli archi

| Metodo | Comportamento |
|--------|--------------|
| **Clic** | Seleziona se il clic è vicino alla curva dell'arco (non alla corda) |
| **Trascina a destra** (rigoroso) | I punti campione distribuiti lungo l'arco devono essere tutti all'interno del riquadro |
| **Trascina a sinistra** (incrocio) | Qualsiasi punto campione sull'arco che cade all'interno del riquadro lo seleziona |

## Comandi di modifica supportati

| Comando | Effetto sull'arco |
|---------|-----------------|
| [Move](../move/) | Trasla il centro; raggio e angoli invariati |
| [Copy](../copy/) | Crea un arco identico in una nuova posizione |
| [Rotate](../rotate/) | Ruota il centro e sposta gli angoli di inizio/fine della quantità di rotazione |
| [Mirror](../mirror/) | Riflette il centro e inverte gli angoli di inizio/fine rispetto all'asse speculare |
| [Scale](../scale/) | Scala la posizione del centro e moltiplica il raggio per il fattore di scala |
| [Offset](../offset/) | Crea un arco concentrico a raggio maggiore o minore, stesso intervallo angolare |
| [Delete](../delete/) | Rimuove l'arco |

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
| Centro X / Centro Y | Centro della circonferenza |
| Raggio | Raggio della circonferenza |
| Angolo iniziale | Angolo in gradi dove inizia l'arco (misurato dall'asse X positivo) |
| Angolo finale | Angolo in gradi dove finisce l'arco |

## Arc vs Circle — quando usare quale

| | Arc | Circle |
|---|-----|--------|
| Estensione | Parziale — dal primo al terzo clic | 360° completo |
| Metodo di input | Tre punti sulla curva | Centro + raggio (clic o digitazione) |
| Input digitato | Coordinata X,Y per ciascun punto | Valore raggio (il centro accetta anche X,Y) |
| Ridimensionamento dopo posizionamento | Trascina i grip di inizio/fine | Trascina qualsiasi grip cardinale |
| Ideale per | Raccordi, angoli arrotondati, percorsi curvilinei | Fori completi, elementi rotondi |

## DXF — entità ARC

Gli archi vengono salvati come entità `ARC` nel file DXF, memorizzando coordinate centro, raggio, angolo iniziale e angolo finale. Tutte le proprietà — compreso colore, layer, tipo linea, scala tipo linea e spessore — vengono mantenute senza perdita. Qualsiasi applicazione compatibile con DXF (LibreCAD, FreeCAD, ecc.) li legge come archi standard.
