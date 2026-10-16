---
title: "Comando ArrayPolar — copiare oggetti attorno a un centro in KulmanLab CAD"
description: "Il comando ArrayPolar copia gli oggetti selezionati attorno a un punto centrale — un numero stabilito di elementi distribuiti su un giro completo o su una parte, con copie che ruotano mentre girano o mantengono la propria orientazione."
keywords: ["matrice polare CAD", "disposizione circolare CAD", "copiare oggetti attorno a un punto CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

Il comando `ArrayPolar` crea copie degli oggetti selezionati attorno a un punto centrale, distribuite uniformemente su un giro completo o su una parte. L’originale è il primo elemento; ogni altro elemento è una copia ruotata attorno al centro — oppure solo spostata attorno a esso, se disattivi Rotate.

## Creare una matrice polare

1. Seleziona gli oggetti, poi digita `SeriePolare` nel terminale o fai clic sul pulsante **Array Polar** della barra degli strumenti. Se avviato senza selezione, ti chiede prima di selezionarli — premi **Enter** o **Space** per confermare.
2. **Fai clic sul centro** attorno a cui girano le copie, oppure digita `X,Y` e premi **Enter** per una coordinata esatta.
3. Controlla la matrice. Tutte le copie sono mostrate in anteprima dal vivo e il terminale mostra `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — premi la lettera di un’opzione per modificarla.
4. Premi **Enter** o **Space** per creare le copie. Gli originali restano dove sono e la selezione viene cancellata.

## Opzioni

| Opzione | Tasto | Effetto |
|---|---|---|
| Items | `I` | Quanti elementi ci sono, originale compreso — un intero da 2 a 1024. Parte da 6. |
| Angle | `A` | Gradi da un elemento al successivo, in senso antiorario; un angolo negativo va in senso orario. Fino a 180°. |
| Fill | `F` | Gradi dal primo all’ultimo elemento. 360 (predefinito) è un giro completo; un numero minore distribuisce gli elementi su una parte. Negativo va in senso orario. Fino a 360°. |
| Rotate | `R` | Attiva (predefinito): ogni copia ruota mentre gira. Disattiva: ogni copia viene spostata al suo posto e guarda nella stessa direzione dell’originale. Si commuta subito — non c’è alcun numero da digitare. |

- Angle e Fill sono due modi di dire la stessa cosa, quindi cambiarne uno riformula l’altro. Su un giro completo l’ultimo elemento si ferma un passo prima del primo; su una parte di giro cade esattamente sull’angolo di riempimento.
- Per cambiare un numero, premi la lettera della sua opzione. Il prompt è precompilato con il valore attuale — digita per sostituirlo e premi **Enter** o **Space**; confermarlo invariato lascia la matrice com’era.
- Items accetta solo numeri interi; Angle e Fill accettano decimali e un `-` iniziale per il senso orario. Un angolo o riempimento pari a 0 viene rifiutato, come un angolo oltre 180° o un riempimento oltre 360° — il terminale ne spiega il motivo.
- Un Angle troppo piccolo per contenere tutti gli elementi scarta quelli senza spazio, e il terminale riporta il nuovo numero.
- Funziona su ogni tipo di entità: ogni copia è l’originale ruotato attorno al centro, o spostato, esattamente come farebbero [Rotate](../rotate/) e [Move](../move/).

## Riferimento tastiera

| Tasto | Azione |
|---|---|
| `Enter` / `Space` | Confermare la selezione, la matrice o un numero digitato |
| `I` `A` `F` `R` | Cambiare Items, Angle o Fill digitando un numero; commutare Rotate |
| `0`–`9`, `.`, `-` | Digitare il numero (`.` e `-` solo per Angle e Fill, con `-` per primo) |
| `Backspace` | Cancellare l’ultimo carattere digitato |
| `Escape` | Annullare |
