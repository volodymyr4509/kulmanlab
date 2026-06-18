---
sidebar_position: 6
title: Comando Ellipse — Disegna Ellissi Ruotate per Centro e Due Assi in KulmanLab CAD
description: Il comando Ellipse disegna un'ellisse in tre clic — centro, punto finale del primo asse (in qualsiasi direzione), poi lunghezza del secondo asse. I due assi sono sempre perpendicolari. Ciascun semiasse ha il proprio grip per il ridimensionamento indipendente dopo il posizionamento. Compatibilità DXF completa come entità ELLIPSE.
keywords: [comando ellipse CAD, disegna ellisse CAD, ellisse ruotata CAD, assi ellisse, entità ELLIPSE DXF, modifica grip ellisse, kulmanlab]
---

# Ellipse

Il comando `ellipse` disegna un'ellisse usando tre clic: un punto centrale, il punto finale del primo semiasse (maggiore) in qualsiasi angolazione, e la lunghezza del secondo semiasse (minore). I due assi sono sempre perpendicolari l'uno all'altro — la direzione del secondo asse viene derivata automaticamente dal primo.

## Disegnare un'ellisse

1. Digita `ellipse` nel terminale o clicca il pulsante **Ellipse** nella barra degli strumenti.
2. **Clicca il punto centrale**, oppure digita `X,Y` e premi **Invio** per una coordinata esatta.
3. **Clicca il punto finale del primo asse** — imposta sia la direzione che la lunghezza del primo semiasse. L'inserimento di coordinate funziona anche qui.
4. **Imposta la lunghezza del secondo asse** — sposta il cursore perpendicolare al primo asse, poi clicca o digita una lunghezza.

```
               ● ← punto finale primo asse (passo 3)
              /
  centro ●  /  ← primo asse (qualsiasi angolo)
            |
            ● ← il cursore qui imposta la lunghezza del secondo asse (passo 4)
```

L'ellisse viene posizionata dopo il passo 4 e il comando termina.

## Input asse — clic, coordinata o lunghezza digitata

**Centro (passo 2):** clicca o digita `X,Y` per una posizione esatta.

**Punto finale primo asse (passo 3):** clicca, o digita `X,Y` per una coordinata esatta. Il blocco angolare si aggancia anche agli incrementi di 45° — mentre bloccato, digita una lunghezza e premi **Invio** per posizionare il punto finale a quella distanza esatta.

**Secondo asse (passo 4):** la lunghezza digitata è sempre disponibile — nessun blocco angolare richiesto. La direzione è già fissata perpendicolare al primo asse; la digitazione imposta solo la lunghezza.

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiunge cifra alla lunghezza dell'asse (fase secondo asse) |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` | Posiziona il punto finale dell'asse alla lunghezza digitata |

## Inserimento coordinate (centro e punto finale primo asse)

1. Digita il valore X.
2. Premi `,` — il terminale mostra `[X], [Y{cursore}]`.
3. Digita il valore Y.
4. Premi **Invio** per confermare.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.`, `-` | Avvia inserimento coordinata X (fasi centro/primo asse), o lunghezza asse con blocco angolare attivo |
| `,` | Blocca X e passa all'inserimento Y |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` | Conferma coordinata o lunghezza digitata |
| `Escape` | Annulla e reimposta |

## Modifica con i grip — ridimensionamento indipendente degli assi

Un'ellisse selezionata espone cinque grip:

| Grip | Conteggio | Funzione |
|------|-----------|----------|
| **Centro** | 1 | Sposta l'intera ellisse; entrambi gli assi invariati |
| **Punti finali asse maggiore** | 2 (estremità opposte dell'asse più lungo) | Trascina per ridimensionare la lunghezza del semiasse maggiore; la dimensione assoluta del semiasse minore resta costante |
| **Punti finali asse minore** | 2 (estremità opposte dell'asse più corto) | Trascina per ridimensionare la lunghezza del semiasse minore; l'asse maggiore invariato |

I grip degli assi maggiore e minore sono indipendenti — puoi ridisegnare l'ellisse senza rieseguire il comando.

## Selezione delle ellissi

| Metodo | Comportamento |
|--------|--------------|
| **Clic** | Seleziona se il clic è vicino al contorno dell'ellisse |
| **Trascina a destra** (rigoroso) | Il riquadro di delimitazione allineato all'asse dell'ellisse deve stare completamente all'interno del riquadro di selezione |
| **Trascina a sinistra** (incrocio) | Qualsiasi parte del contorno dell'ellisse che attraversa il bordo del riquadro di selezione la seleziona |

## Comandi di modifica supportati

| Comando | Effetto sull'ellisse |
|---------|--------------------|
| [Move](./move) | Trasla il centro; entrambi gli assi invariati |
| [Copy](./copy) | Crea un'ellisse identica in un nuovo centro |
| [Rotate](./rotate) | Ruota la posizione del centro e il vettore asse maggiore dello stesso angolo |
| [Mirror](./mirror) | Riflette il centro e ricalcola la direzione dell'asse maggiore rispetto all'asse speculare |
| [Scale](./scale) | Scala la posizione del centro e moltiplica le lunghezze di entrambi i semiassi per il fattore |
| [Offset](./offset) | Crea un'ellisse concentrica spostata verso l'esterno o l'interno di una distanza fissa |
| [Delete](./delete) | Rimuove l'ellisse |

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
| Centro X / Centro Y | Centro dell'ellisse |
| Asse maggiore X / Asse maggiore Y | Vettore dal centro al punto finale dell'asse maggiore (codifica sia direzione che lunghezza) |
| Rapporto assi | Rapporto del semiasse minore rispetto al semiasse maggiore (0 < rapporto ≤ 1) |
| Angolo iniziale / Angolo finale | Angoli parametrici in gradi; entrambi 0°/360° per un'ellisse completa |

## Ellipse vs Circle — quando usare quale

| | Ellipse | Circle |
|---|---------|--------|
| Assi | Due semiassi indipendenti in qualsiasi angolo | Un raggio, simmetrico |
| Rotazione | Può essere posizionata in qualsiasi angolo | Nessuna rotazione |
| Input digitato | Per lunghezza di ciascun asse | Solo raggio |
| Ridimensionamento grip | Maggiore e minore indipendentemente | Tutti e quattro i punti cardinali ugualmente |
| Ideale per | Viste oblique, elementi ovali, fori in prospettiva | Elementi rotondi simmetrici |

## DXF — entità ELLIPSE

Le ellissi vengono salvate come entità `ELLIPSE` nel file DXF. Il formato memorizza il punto centrale, l'intero vettore dell'asse maggiore (direzione + lunghezza) e il rapporto degli assi. Rotazione, forma e tutte le proprietà di stile vengono mantenute senza perdita. Un cerchio **non** viene memorizzato come un'ellisse degenere — i due tipi di entità rimangono distinti nel modello DXF.
