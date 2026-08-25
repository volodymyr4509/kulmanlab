---
title: Comando ClipboardCopy — Copiare entità negli appunti di sistema
description: Il comando ClipboardCopy scrive le entità selezionate negli appunti di sistema come testo JSON, insieme ai layer e ai tipi di linea a cui fanno riferimento, così da poterle incollare in un altro disegno o in un'altra scheda del browser con ClipboardPaste.
keywords: [copia appunti CAD, copiare entità tra disegni, copiare oggetti CAD negli appunti, Ctrl+C CAD, copiare tra schede, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

Il comando `ClipboardCopy` scrive le entità selezionate negli **appunti di sistema** come testo JSON. Poiché usa gli appunti reali e non un buffer interno, la geometria copiata sopravvive fuori dal disegno: incollala in un altro file, in una seconda scheda del browser o in una finestra che aprirai più tardi con [ClipboardPaste](../clipboard-paste/).

È questa la differenza rispetto a [Copy](../copy/): Copy duplica le entità all'interno del disegno corrente in un solo gesto, mentre ClipboardCopy le mette in un posto da cui possono essere recuperate da un disegno del tutto diverso.

## Due modi per iniziare

**Preselezionare, poi copiare** — la via rapida:

1. Seleziona una o più entità sull'area di disegno.
2. Premi `Ctrl+C` (`Cmd+C` su macOS), oppure digita `ClipboardCopy` nel terminale.
3. Le entità vengono scritte subito negli appunti e il comando termina.

**Attivare, poi selezionare** — partire senza nulla selezionato:

1. Premi `Ctrl+C` o digita `ClipboardCopy` con la selezione vuota.
2. Il prompt indica **pick objects to copy — Enter or Space to confirm**.
3. **Seleziona gli oggetti** — clicca per attivare/disattivare singole entità, oppure trascina per selezionare per area.
4. Premi **Enter** o **Space** per copiare la selezione e uscire.

Premere **Enter** o **Space** senza nulla di selezionato termina semplicemente il comando senza toccare gli appunti.

## Cosa viene copiato

Il contenuto degli appunti porta con sé più della sola geometria, così un incollaggio in un disegno estraneo resta corretto:

| Parte | Scopo |
|-------|-------|
| **Entità** | La forma serializzata completa di ogni entità selezionata |
| **Punto di riferimento** | L'angolo inferiore sinistro dell'ingombro complessivo della selezione — ciò che ClipboardPaste ancora al cursore |
| **Layer** | Solo i layer effettivamente referenziati dalle entità copiate, per nome |
| **Tipi di linea** | Solo i tipi di linea effettivamente referenziati dalle entità copiate, per nome |

Viaggiano solo le voci di tabella *referenziate*, non le intere tabelle di layer e tipi di linea del disegno di origine. I pattern di campitura non vengono inclusi e non serve: la tabella dei pattern di un disegno è l'insieme predefinito integrato, e i file `.pat` che hai caricato risiedono in un archivio per utente già condiviso tra le schede, quindi una campitura incollata risolve il proprio pattern da sé.

## Conferma

In caso di successo il terminale riporta quante entità sono state scritte:

```
3 entities copied to clipboard
```

Se il browser nega l'accesso agli appunti, il terminale mostra **Copy failed: clipboard access denied** e non viene scritto nulla. È una decisione di permessi del browser, non un errore del disegno — vedi [Permessi degli appunti](#permessi-degli-appunti) più sotto.

## Selezione durante il comando

| Metodo | Comportamento |
|--------|---------------|
| **Clic** | Attiva/disattiva l'entità sotto il cursore nella selezione |
| **Trascinamento a destra** (rigoroso) | Aggiunge le entità interamente dentro il riquadro |
| **Trascinamento a sinistra** (intersezione) | Aggiunge le entità che intersecano il bordo del riquadro |
| **Enter** / **Space** | Conferma la selezione e copia |

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `Ctrl+C` / `Cmd+C` | Attiva ClipboardCopy |
| `Enter` / `Space` | Copia la selezione corrente, o esce se non c'è nulla di selezionato |
| `Escape` | Annulla senza copiare |

## Permessi degli appunti

Scrivere negli appunti di sistema richiede il permesso del browser. In pratica una copia avviata da un tasto viene concessa senza richiesta nei browser desktop attuali, ma una pagina che ha perso il fuoco, o un browser con impostazioni restrittive, può rifiutarla. Se compare il messaggio di accesso negato, clicca una volta sull'area di disegno per dare il fuoco alla pagina e riprova.

Poiché il contenuto è normale testo JSON, qualunque altra cosa tu copi dopo lo sostituisce — una riga di testo, un URL. Ricopia prima di incollare se nel frattempo hai usato gli appunti per altro.

## Entità supportate

ClipboardCopy funziona con ogni tipo di entità. Le entità sono serializzate con lo stesso meccanismo usato dall'esportazione nativa `.json`, quindi nulla va perso lungo il percorso.

## Vedi anche

- [ClipboardPaste](../clipboard-paste/) — rileggere gli appunti e posizionare le entità
- [Copy](../copy/) — duplicare entità all'interno del disegno corrente
- [Export Manager](../export-manager/) — salvare un intero disegno in DXF o JSON
