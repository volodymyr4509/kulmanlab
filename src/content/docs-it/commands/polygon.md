---
title: "Comando Polygon — disegnare poligoni regolari dal centro o da un lato in KulmanLab CAD"
description: "Il comando Polygon disegna un poligono regolare da 3 a 1024 lati a partire dal centro e da un raggio, oppure da un lato. Il risultato è una LWPOLYLINE chiusa, quindi si applicano tutti i comandi di modifica delle polilinee."
keywords: ["comando poligono CAD", "disegnare poligono regolare CAD", "esagono ottagono pentagono CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

Il comando `polygon` disegna un poligono regolare — tutti i lati e gli angoli uguali — da 3 a 1024 lati. Digita `polygon` nel terminale. Il risultato è una **`LWPOLYLINE` chiusa**, quindi una volta posizionata si comporta come qualsiasi altra [Polyline](../polyline/) e si applicano tutte le modifiche delle polilinee.

## Disegnare un poligono

1. Digita `polygon` nel terminale e inserisci il **numero di lati** — un intero da 3 a 1024 — poi premi **Enter** o **Space**. Il prompt è precompilato con l’ultimo numero usato (4 la prima volta); inizia a digitare per sostituirlo. Qualsiasi altro valore viene rifiutato e resta nel prompt per essere corretto.
2. **Fai clic sul centro**, oppure digita `X,Y` e premi **Enter** per una coordinata esatta. Premi prima `E` per partire invece da un lato (vedi sotto).
3. **Fai clic sul raggio** — il poligono è mostrato in anteprima dal vivo — oppure digita il raggio e premi **Enter** o **Space**.
4. Il poligono viene posizionato e il comando termina.

## Opzioni

| Opzione | Tasto | Effetto |
|---|---|---|
| Edge | `E` | Il primo punto diventa un’estremità di un lato invece del centro. Scegli la seconda estremità; gli altri vertici sono costruiti in senso antiorario, a sinistra del lato dalla prima alla seconda estremità. Premi di nuovo `E` per tornare al centro. |
| Inside | `I` | Attiva per impostazione predefinita e mantenuta da un poligono al successivo. Attiva: i vertici stanno sulla circonferenza del raggio dato. Disattiva: il poligono sta fuori da quella circonferenza, con il punto medio di ogni lato su di essa. |

- Un clic mette un vertice (Inside attiva) o il punto medio di un lato (Inside disattiva) esattamente dove si trova il cursore, quindi il cursore stabilisce anche l’orientamento.
- Un raggio digitato non ha una direzione verso cui puntare, quindi il poligono si dispone con il lato più basso orizzontale — a meno che il blocco angolo sia attivo, nel qual caso segue l’angolo bloccato.
- Ogni opzione viene offerta nel suo passo e può essere commutata anche mentre si digita un numero.

## Riferimento tastiera

| Tasto | Azione |
|---|---|
| `0`–`9`, `.` | Digitare il numero di lati, il raggio, una coordinata o una lunghezza |
| `E` | Attivare o disattivare Edge (passo del primo punto) |
| `I` | Attivare o disattivare Inside (passo del raggio) |
| `Enter` / `Space` | Confermare il numero di lati o il raggio |
| `Escape` | Annullare |

## DXF — entità LWPOLYLINE

Un poligono viene salvato come `LWPOLYLINE` chiusa con un vertice per angolo; DXF non ha un tipo poligono dedicato. Tutte le proprietà — coordinate dei vertici, colore, layer, tipo di linea, scala del tipo di linea e spessore — passano senza perdita, e qualsiasi visualizzatore DXF lo legge come polilinea chiusa.
