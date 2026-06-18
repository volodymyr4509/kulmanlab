---
sidebar_position: 1
title: Griglia e Snap — Allineare i Disegni a una Griglia Regolare in KulmanLab CAD
description: I pulsanti Griglia e Snap nella barra di controllo di KulmanLab CAD sovrappongono una griglia di riferimento sul canvas e bloccano il cursore ai punti della griglia. La spaziatura della griglia si adatta automaticamente al livello di zoom corrente in modo da mostrare sempre valori modello arrotondati.
keywords: [CAD griglia, snap alla griglia, spaziatura griglia, ausili disegno, kulmanlab, punti griglia, snap ortogonale]
---

# Griglia e Snap

Due pulsanti nella barra di controllo consentono di sovrapporre una griglia di riferimento e di bloccare il cursore alle sue intersezioni durante il disegno.

| Pulsante | Cosa fa |
|----------|---------|
| **Griglia** | Mostra una griglia visiva a punti o linee sul canvas |
| **Snap** | Blocca il cursore al punto della griglia più vicino quando nessuno snap geometrico è più vicino |

I due pulsanti sono indipendenti — puoi mostrare la griglia senza snap, fare snap senza mostrare la griglia, o usarli entrambi insieme.

## Abilitare griglia e snap

Clicca **Griglia** o **Snap** nella barra di controllo. Lo stato attivo è evidenziato. Le impostazioni persistono tra le sessioni.

Quando lo **Snap** è attivo, la griglia passa automaticamente dalla visualizzazione a linee a **punti** — i punti segnano i punti esatti su cui il cursore si aggancerà.

## Spaziatura griglia adattiva

La spaziatura della griglia si regola automaticamente mentre zoomi in modo che le linee della griglia siano sempre a una distanza comoda sullo schermo (~40 px). Il passo è sempre un numero "tondo" — un multiplo di 1, 2 o 5 a qualsiasi potenza di dieci:

| Zoom di esempio / scala modello | Passo griglia |
|---------------------------------|--------------|
| Zoom indietro (area grande) | 100, 500, 1000 … |
| Zoom medio | 10, 20, 50 … |
| Zoom avanti (dettaglio fine) | 1, 2, 5 … |
| Molto vicino | 0,1, 0,2, 0,5 … |

Questo significa che ogni punto di snap cade su una coordinata tonda nello spazio modello — nessun offset in virgola mobile si accumula.

## Priorità dello snap

**Gli snap a endpoint e intersezione hanno sempre la priorità sulla griglia.** Il cursore si aggancia a un punto della griglia solo quando non è vicino a nessun candidato snap geometrico (endpoint, punto medio, centro o intersezione).

Questo significa che puoi disegnare con lo snap alla griglia attivo e comunque agganciarti con precisione alla geometria esistente quando il cursore passa abbastanza vicino a essa. La griglia è un fallback, non un override.

## Modalità layout

- **Spazio modello** — i punti o le linee riempiono l'intera area del canvas visibile.
- **Spazio layout (carta)** — i punti sono ritagliati al rettangolo del foglio e non si estendono oltre.
- **All'interno di una finestra di visualizzazione** — la griglia segue il sistema di coordinate del modello alla scala della finestra, quindi i punti si allineano alle stesse unità modello indipendentemente dall'ingrandimento della finestra.

## Flusso di lavoro tipico

1. Attiva **Griglia** e **Snap** prima di iniziare un disegno che richiede spaziatura regolare.
2. Zooma al livello in cui il passo della griglia corrisponde all'incremento desiderato (es. zooma finché i punti sono a 10 unità di distanza).
3. Disegna — il cursore si aggancia automaticamente ai punti della griglia. La geometria esistente si aggancia normalmente quando sei abbastanza vicino a essa.
4. Disattiva **Snap** quando hai bisogno del movimento libero del cursore o vuoi agganciarti solo alla geometria.
