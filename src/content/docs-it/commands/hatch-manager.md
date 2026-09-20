---
title: Comando Hatch Manager — Sfoglia e carica motivi .pat
description: Il comando Hatch Manager apre una finestra di dialogo per sfogliare i motivi hatch con anteprima dal vivo dei campioni, e per caricare i tuoi file di motivi .pat. I file caricati vengono salvati nel browser e oscurano i motivi integrati con lo stesso nome.
keywords: [hatch manager, motivo hatch personalizzato CAD, carica file pat, acad.pat, libreria motivi hatch, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

Il comando `GestoreTratteggi` apre una finestra di dialogo per sfogliare i motivi hatch con anteprima dal vivo dei campioni, e per caricare i tuoi file di motivi `.pat` da usare con [Hatch](../hatch/).

## Aprire Hatch Manager

Digita `GestoreTratteggi` nel terminale. Questo è separato dal selettore di motivi che si apre quando clicchi sul chip **Pattern** di un hatch — il selettore sceglie un motivo per un singolo hatch, Hatch Manager è dove aggiungi o rimuovi file `.pat`.

## Gruppi di motivi

| Gruppo | Contenuto |
|--------|-----------|
| **User** | Motivi dai tuoi file `.pat` caricati, sotto-raggruppati in base al file da cui proviene ciascun motivo (mostrato solo dopo averne caricato uno) |
| **Standard** | `SOLID` più la tabella dei motivi propria di questo disegno — ogni nuovo disegno inizia con la stessa libreria integrata, proprio come i suoi layer e tipi di linea |

Clicca su qualsiasi motivo nell'elenco (o usa `↑`/`↓`) per vederne l'anteprima a destra — un campione disegnato con lo stesso codice con cui viene riempita la lavagna, quindi è esattamente ciò che mostrerà il disegno, oltre al nome, alla descrizione e al numero di linee del motivo.

## Caricare un file di motivi personalizzato

1. Clicca su **Add .pat File** nel piè di pagina della finestra di dialogo.
2. Scegli un file `.pat` — il formato standard dei motivi hatch. Un singolo file spesso definisce molti motivi con nome contemporaneamente; appaiono tutti come voci separate raggruppate sotto il nome di quel file.
3. I file caricati vengono salvati permanentemente nel browser (IndexedDB), ordinati con i più recenti aggiunti per primi, e ricaricati automaticamente la prossima volta che apri KulmanLab CAD.

Caricare un file che definisce un motivo con lo stesso nome di uno integrato **oscura** il predefinito — questo è il modo supportato per ottenere le definizioni ufficiali dei motivi di Autodesk: carica un vero `acad.pat`, e le sue versioni di ANSI31 e degli altri nomi standard subentrano alle approssimazioni proprie di KulmanLab.

Se un disegno fa riferimento a un nome di motivo assente dalla tua libreria — importato da un DXF che usava un motivo da un `acad.pat` che non hai caricato — l'hatch viene comunque renderizzato, usando `ANSI31` come sostituto, invece di ricadere su un riempimento piatto e senza motivo.

## Rimuovere un file di motivi

Clicca sulla **×** accanto a un nome di file nel gruppo **User** per rimuoverlo insieme a ogni motivo che definiva. Qualsiasi hatch che già usa uno di quei motivi ricade immediatamente su `ANSI31`. I motivi **Standard** integrati non possono essere rimossi.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `↑` / `↓` | Sposta la selezione su o giù nell'elenco dei motivi |
| `Escape` | Chiude Hatch Manager |

## Comandi correlati

- [Hatch](../hatch/) — riempie un'area cliccata usando il motivo attualmente selezionato
- [Font Manager](../font-manager/) — lo stesso modello di caricamento/sfoglia, per font personalizzati anziché motivi hatch
