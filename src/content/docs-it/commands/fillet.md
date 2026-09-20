---
title: Comando Fillet — Arrotonda un Angolo con un Arco Tangente
description: Il comando Fillet arrotonda un angolo tra due segmenti Line, Arc o Polyline con un arco tangente di un raggio specificato. Raccordare l'angolo di una polilinea lo inserisce direttamente in essa; raccordare attraverso una polilinea aperta fonde entrambi i lati in una nuova polilinea.
keywords: [comando fillet CAD, arrotonda angolo CAD, raccordo arco, arco tangente, raccordo polilinea, raccordo arco, kulmanlab]
group: edit
order: 11
---

# Fillet

Il comando `Raccorda` arrotonda un angolo tra due segmenti [Line](../line/), [Arc](../arc/) o [Polyline](../polyline/) inserendo un arco tangente di un dato raggio, tagliando (o unendo) le entità scelte fino a quel punto.

Fillet funziona con entità **Line, Arc e Polyline** — inclusi i segmenti dritti o ad arco di una polilinea.

## Usare fillet

1. Digita `Raccorda` nel terminale o clicca il pulsante **Fillet** nella barra degli strumenti.
2. **Digita il raggio di raccordo** e premi **Invio**.
3. **Clicca la prima linea, arco o segmento di polilinea** — la porzione che clicchi determina quale lato dell'intersezione viene mantenuto.
4. **Passa il cursore sulla seconda entità** — un'anteprima ad arco tratteggiata mostra il raccordo risultante. Sposta il cursore sul lato che vuoi mantenere.
5. **Clicca** per applicare.

```
  Prima:                       Dopo raccordo (raggio r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Selezione del lato per entità che si intersecano

Quando due entità si incrociano, il raccordo viene applicato nell'angolo definito dalle posizioni di clic — la porzione di ciascuna entità **sullo stesso lato del cursore** viene mantenuta.

- Clicca vicino a un'estremità della prima entità per selezionare quella metà.
- Sposta il cursore sulla metà desiderata della seconda entità — l'anteprima tratteggiata si aggiorna in tempo reale.

## Cosa crea il comando

Il risultato dipende da cosa hai scelto:

- **Due Line/Arc indipendenti**, o qualsiasi coppia che non coinvolga una polilinea aperta: entrambe vengono tagliate fino ai punti tangenti **T1**/**T2**, e una nuova entità Arc viene inserita tra loro.
- **Due segmenti della stessa polilinea che condividono un vertice d'angolo**: nessuna nuova entità — il raccordo diventa parte della polilinea stessa. Il vertice d'angolo viene sostituito dai due punti tangenti, e l'arco tra loro viene memorizzato come bulge di quel lato — esattamente come un angolo di polilinea raccordato viaggia andata e ritorno tramite DXF.
- **Tutto il resto che coinvolge una polilinea aperta** — due polilinee aperte diverse, oppure una polilinea aperta e una Line/Arc indipendente: entrambe vengono unite in una **singola nuova polilinea**, mantenendo ciascun lato fino al proprio punto tangente e collegandole con l'arco di raccordo come segmento bulge aggiuntivo, sostituendo le entità originali.

L'arco inserito o esteso eredita le impostazioni correnti di peso linea, colore, layer e tipo linea (oppure quelle della polilinea stessa, quando vi confluisce).

## Angoli senza un vero angolo da arrotondare

Se i due segmenti scelti si incontrano già tangenzialmente in un vertice condiviso — un angolo di polilinea dritto, o una linea che sfocia dolcemente in un segmento ad arco a continuazione tangente — non c'è un vero angolo che un cerchio possa arrotondare. Fillet lo rileva e rifiuta con `cannot fillet: no tangent circle fits there` invece di tracciare un anello indesiderato.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `0`–`9`, `.` | Aggiunge cifra al valore raggio |
| `Backspace` | Elimina l'ultimo carattere digitato |
| `Invio` / `Spazio` | Conferma il raggio digitato e passa alla selezione entità |
| `Escape` | Annulla e reimposta |

## Entità supportate

| Entità | Supportata |
|--------|-----------|
| Line | Sì |
| Arc | Sì |
| Polyline (segmento dritto o ad arco) | Sì |
| Circle, Ellipse | No |
| Text, Spline, Dimension, Leader | No |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Tipo angolo | Arco arrotondato | Taglio retto |
| Input | Un raggio | Due distanze (d1, d2) |
| Entità inserita | Arc | Line |
| Entità supportate | Line, Arc e Polyline (segmenti dritti o ad arco) | Line e Polyline (solo segmenti dritti) |
