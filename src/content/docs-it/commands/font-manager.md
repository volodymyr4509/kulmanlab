---
title: Comando Font Manager — Caricare e Gestire Font TTF Personalizzati in KulmanLab CAD
description: Il comando Font Manager apre una finestra di dialogo per sfogliare, visualizzare in anteprima e selezionare i font, e per caricare i tuoi file .ttf personalizzati. I font caricati vengono salvati nel browser e incorporati per nome nelle esportazioni DXF.
keywords: [font manager, font personalizzato CAD, caricare ttf, carattere personalizzato CAD, google fonts CAD, font di testo CAD, kulmanlab]
---

# Font Manager

Il comando `FontManager` apre una finestra di dialogo per sfogliare e selezionare i font, e per caricare i tuoi file `.ttf` personalizzati da usare nelle entità [Text](../text/) e [Multileader](../leader/).

## Aprire il Font Manager

- Digita `FontManager` nel terminale, **oppure**
- Clicca il pulsante **Font Manager** nella barra degli strumenti dell'[editor di testo](../../interface/text-editor/).

## Gruppi di font

| Gruppo | Contenuto |
|--------|-----------|
| **Default** | Il font sans-serif integrato — sempre disponibile |
| **User** | I tuoi font `.ttf` personalizzati caricati (mostrato solo dopo averne aggiunto uno) |
| **Free** | 15 Google Fonts incluse (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Font comuni del sistema operativo (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Clicca su un font qualsiasi nell'elenco per visualizzarne l'anteprima a destra — nome, esempio dell'alfabeto, un pangramma e cifre.

## Caricare un font personalizzato

1. Clicca **Add Font** in fondo alla finestra di dialogo (oppure digita `Font+` nel terminale per aprire direttamente il selettore file).
2. Scegli un file `.ttf`. Sono supportati solo i font TrueType — `.otf` e `.woff`/`.woff2` non lo sono.
3. Il nome del file (senza estensione) diventa il nome del font nel gruppo **User**. Ad esempio, caricando `MyFont.ttf` viene aggiunto un font chiamato `MyFont`.

I font caricati vengono salvati permanentemente nel browser (IndexedDB) e si ricaricano automaticamente la volta successiva che apri KulmanLab CAD.

## Rimuovere un font personalizzato

Passa il cursore su un font nel gruppo **User** e clicca sul pulsante **×** accanto ad esso. I font integrati (Default, Free, System) non possono essere rimossi.

## Riferimento tastiera

| Tasto | Azione |
|-------|--------|
| `↑` / `↓` | Sposta la selezione su o giù nell'elenco dei font |
| `Escape` | Chiudere il Font Manager |

## Compatibilità DXF

Il nome del font viene incorporato nelle entità **MTEXT** esportate come codice di formattazione inline, così un DXF che viene esportato e reimportato in KulmanLab CAD mantiene la sua assegnazione del font. I *file* dei font personalizzati non vengono incorporati nel DXF — solo il *nome* del font lo è. Se reimporti un disegno che fa riferimento a un font personalizzato che non hai caricato su questo dispositivo, il testo viene visualizzato con il font predefinito finché non carichi un font con lo stesso nome.

## Comandi correlati

- [Text](../text/) — posiziona le etichette di testo a cui si applicano le scelte del font
- [Match Properties](../match-properties/) — copia l'altezza del testo, ma non il font, tra le entità
