---
title: FontAdd — Caricare un font TTF personalizzato dal terminale
description: Il comando FontAdd apre il selettore file del sistema per caricare un font .ttf, senza prima aprire la finestra di dialogo Font Manager. È lo stesso caricamento attivato dal pulsante «Add Font» del Font Manager, disponibile qui come comando di terminale a sé stante.
keywords: [comando font add, comando fontadd, caricare ttf terminale, font personalizzato CAD, kulmanlab]
group: style
order: 3
---

# FontAdd

Il comando `AggiungiFont` apre il selettore file del sistema per caricare un font `.ttf` personalizzato, senza prima aprire la finestra di dialogo [Font Manager](../font-manager/). È lo stesso caricamento attivato dal pulsante **Add Font** del Font Manager — FontAdd è solo un modo diretto per raggiungerlo dal terminale.

## Caricare un font

1. Digita `AggiungiFont` nel terminale, oppure clicca **Add Font** in fondo alla finestra di dialogo [Font Manager](../font-manager/).
2. Scegli un file `.ttf` nel selettore di sistema. Sono supportati solo i font TrueType — `.otf` e `.woff`/`.woff2` non lo sono.

Il comando termina non appena si apre il selettore file — non segue nessun altro clic o input da terminale. Il font viene registrato e compare nel gruppo **User** non appena il file viene scelto.

## Cosa succede al caricamento

- Il nome del file (senza estensione) diventa il nome del font. Caricare `MyFont.ttf` aggiunge un font chiamato `MyFont`.
- Caricare un file il cui nome corrisponde a un font personalizzato già esistente lo **sostituisce**.
- Il font viene salvato permanentemente nel browser (IndexedDB) e si ricarica automaticamente la volta successiva che apri KulmanLab CAD — non è legato al disegno corrente.

## Riferimento tastiera

FontAdd non ha un'interazione da tastiera propria — l'intero comando consiste nel selettore file nativo del browser. Annullare quella finestra di dialogo (o non scegliere alcun file) lascia invariato l'elenco dei font.

## Comandi correlati

| Comando | Cosa fa |
|---------|---------|
| [Font Manager](../font-manager/) | Sfoglia, visualizza in anteprima, seleziona e rimuovi font, inclusi quelli caricati da te |
| [Text](../text/) | Posiziona le etichette di testo a cui si applicano le scelte del font |
