---
title: Line — Disegnare, Concatenare, Tagliare ed Estendere Linee
description: Il comando Line disegna singoli segmenti di linea retta che possono essere concatenati testa a coda. Le linee sono l'unico tipo di entità su cui Trim ed Extend funzionano. Round-trip DXF completo come entità LINE.
keywords: [CAD comando line, disegna linea retta CAD, concatena segmenti linea, trim linea CAD, estendi linea CAD, blocco angolo CAD, entità DXF LINE, kulmanlab]
group: shapes
order: 1
---

# Line

Il comando `line` disegna singoli segmenti di linea retta memorizzati come entità `LINE` separate nel modello DXF. Dopo ogni segmento il comando rimane attivo e riutilizza l'endpoint come nuovo punto di partenza, così puoi costruire percorsi connessi un segmento alla volta. A differenza di una [Polilinea](../polyline/), le linee concatenate rimangono entità indipendenti — ciascuna può essere tagliata, estesa o eliminata senza influenzare le vicine.

## Disegnare linee

1. Digita `line` nel terminale o clicca il pulsante **Line** nella barra degli strumenti.
2. **Clicca il punto di partenza**, oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
3. **Clicca il punto finale** — il segmento viene posizionato e l'endpoint diventa il prossimo punto di partenza. Anche qui è disponibile l'inserimento coordinate.
4. Continua a cliccare (o digitare) per concatenare più segmenti.
5. Premi **Invio** o **Esc** per fermarti.

```
  ●──────────●──────────●──────────●
 inizio   2° clic    3° clic   Invio per terminare
            (diventa automaticamente il prossimo inizio)
```

Hai bisogno di un solo segmento? Premi **Invio** o **Esc** subito dopo il passo 3.

## Inserimento coordinate

Invece di cliccare, digita una posizione esatta per il punto iniziale o qualsiasi punto successivo:

1. Digita il valore X (cifre, `.` o `-`).
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per posizionare il punto.

## Blocco angolo e inserimento lunghezza esatta

Mentre sposti il cursore dopo aver posizionato un punto, il comando rileva un asse di aggancio a 45° (0°, 45°, 90°, 135°, …). L'angolo si **blocca** quando:

- il cursore è almeno **5 × dimensione grip** dall'ancora, **e**
- è entro **1 dimensione grip** di distanza perpendicolare dall'asse più vicino.

Quando bloccato, l'anteprima si aggancia all'asse e puoi inserire una lunghezza esatta:

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiunge cifra al valore di lunghezza |
| `-` | Lunghezza negativa — inverte la direzione lungo l'asse (solo primo carattere) |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` | Posiziona l'endpoint alla distanza digitata |

Il valore accumulato è mostrato in tempo reale nel terminale (es. `clicca punto finale o inserisci lunghezza: 12.5`). Clicca mentre è bloccato e il clic viene proiettato sull'asse, così l'endpoint cade sempre esattamente su di esso.

Avvicinarsi di nuovo al punto ancora disinserisce il blocco.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Inizia l'inserimento coordinata X, o distanza con angolo bloccato |
| `,` | Blocca X e passa all'inserimento Y |
| `Canc ←` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma la coordinata o la lunghezza digitata, o termina la catena se nulla è digitato |
| `Esc` | Termina la catena ed esce |

## Modifica con grip — estendere gli endpoint

Una linea selezionata mostra tre grip:

| Grip | Dove | Funzione |
|------|------|---------|
| **Inizio** | Primo endpoint | Trascina per riposizionare — la fine rimane ferma |
| **Centro** | Centro della linea | Attiva **Move** per l'intera linea |
| **Fine** | Secondo endpoint | Trascina per riposizionare — l'inizio rimane fermo |

Stirare un endpoint non influenza mai l'altro. Questo è diverso dalla modifica dei grip delle [Polilinee](../polyline/), dove spostare un vertice ridisegna l'intero percorso.

## Selezionare le linee

| Metodo | Comportamento |
|--------|--------------|
| **Clic** | Seleziona la linea se il clic è entro la distanza di hit-test dal segmento |
| **Trascina a destra** (stretta) | La linea viene selezionata solo se entrambi gli endpoint cadono dentro il riquadro |
| **Trascina a sinistra** (incrociante) | La linea viene selezionata se qualsiasi parte del segmento attraversa il riquadro |

## Comandi di modifica supportati

Le linee sono la **sola** entità su cui [Trim](../trim/) ed [Extend](../extend/) operano. Si applicano anche tutti i comandi di trasformazione standard:

| Comando | Cosa succede alla linea |
|---------|------------------------|
| [Move](../move/) | Trasla entrambi gli endpoint dello stesso spostamento |
| [Copy](../copy/) | Crea una linea identica in una nuova posizione |
| [Rotate](../rotate/) | Ruota entrambi gli endpoint attorno al punto base scelto |
| [Mirror](../mirror/) | Riflette entrambi gli endpoint rispetto all'asse speculare |
| [Scale](../scale/) | Scala entrambi gli endpoint uniformemente dal punto base |
| [Offset](../offset/) | Crea una linea parallela a distanza perpendicolare fissa |
| [Trim](../trim/) | Taglia la linea alle intersezioni — **solo linee** |
| [Extend](../extend/) | Allunga l'endpoint più vicino fino a raggiungere un bordo — **solo linee** |
| [Delete](../delete/) | Rimuove la linea dal disegno |

## Proprietà

Quando una linea è selezionata il pannello proprietà mostra tutti i campi del record DXF `LINE`:

**Generale**

| Proprietà | Predefinito | Significato |
|-----------|-------------|------------|
| Colore | 256 (ByLayer) | Indice colore ACI |
| Livello | `0` | Assegnazione livello |
| Tipo di linea | ByLayer | Schema tipo di linea |
| Scala tipo di linea | 1 | Fattore di scala sullo schema tipo di linea |
| Spessore | 0 | Spessore estrusione |

**Geometria**

| Proprietà | Significato |
|-----------|------------|
| Inizio X / Inizio Y | Coordinate primo endpoint |
| Fine X / Fine Y | Coordinate secondo endpoint |

Tutti i campi sono modificabili direttamente nel pannello senza rieseguire il comando.

## Linea vs Polilinea — quando usare quale

| | Linea | Polilinea |
|---|-------|-----------|
| Numero entità | Una `LINE` per segmento | Una `LWPOLYLINE` per l'intero percorso |
| Trim / Extend | Sì — segmento per segmento | No |
| Forma chiusa | No | Sì (flag di chiusura) |
| Modifica grip | Estende endpoint individuali | Sposta qualsiasi vertice lungo il percorso |
| Ideale per | Linee di costruzione, segmenti singoli, geometria da tagliare | Contorni, profili, forme da mantenere intere |

## DXF — entità LINE

Le linee sono salvate come entità `LINE` nel file DXF. Ogni proprietà — coordinate inizio/fine, colore, livello, tipo di linea, scala del tipo di linea e spessore — sopravvive al round-trip senza perdita. Quando apri un DXF che contiene entità `LINE` diventano oggetti `Line` completamente modificabili nell'editor.
