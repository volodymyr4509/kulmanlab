---
title: Comando HatchAdd — caricare un file di motivi .pat dal terminale
description: HatchAdd apre il selettore file per caricare un file di motivi .pat senza aprire prima l'Hatch Manager. Tutti i motivi che definisce sono aggiunti in una volta.
keywords: [comando hatch add, comando hatchadd, caricare file pat terminale, motivo campitura personalizzato CAD, acad.pat, libreria motivi, kulmanlab]
group: style
order: 5
---

# HatchAdd

Il comando `AggiungiTratteggio` apre il selettore file del sistema per caricare un file di motivi di campitura `.pat`, senza aprire prima la finestra [Hatch Manager](../hatch-manager/). È lo stesso caricamento che avvia il pulsante **Add .pat File** dell'Hatch Manager: HatchAdd è solo una via diretta dal terminale.

## Caricare un file di motivi

1. Digita `AggiungiTratteggio` nel terminale, oppure fai clic su **Add .pat File** in fondo alla finestra [Hatch Manager](../hatch-manager/).
2. Scegli un file `.pat` nel selettore di sistema. È accettato solo il formato standard dei motivi di campitura.

Il comando termina appena si apre il selettore file: non seguono altre richieste, clic o input da terminale. I motivi vengono registrati e compaiono nel gruppo **User** non appena il file è scelto.

## Cosa succede al caricamento

- **Un file `.pat` è un contenitore, non un singolo motivo.** Un solo file definisce di solito molti motivi con nome, e vengono aggiunti tutti insieme. È qui che HatchAdd si distingue da [FontAdd](../font-add/), dove un `.ttf` è un font.
- **Il file in sé non viene conservato.** Viene letto una volta, suddiviso nei suoi motivi, e ogni motivo è salvato per conto suo col proprio nome. Per questo puoi rimuoverne uno più avanti senza toccare quelli arrivati insieme — e per questo il gruppo **User** li elenca in ordine alfabetico di nome anziché per file di provenienza.
- **Un motivo il cui nome coincide con uno esistente lo sostituisce.** È il modo previsto per installare le definizioni autorevoli sopra le approssimazioni di KulmanLab: carica un vero `acad.pat` e le sue versioni di `ANSI31` e degli altri nomi standard subentrano.
- **I motivi sono salvati per utente, non per disegno.** Vivono nel browser (IndexedDB), si ricaricano da soli alla prossima apertura di KulmanLab CAD e sono disponibili in ogni disegno.
- **Un file senza definizioni di motivo valide non aggiunge nulla.** La libreria resta esattamente com'era.

## Riferimento tastiera

HatchAdd non ha un'interazione da tastiera propria: l'intero comando è la finestra nativa di selezione file del browser. Annullarla (o non scegliere alcun file) lascia invariata la libreria dei motivi.

## Comandi correlati

| Comando | Cosa fa |
|---------|---------|
| [Hatch Manager](../hatch-manager/) | Sfogliare la libreria dei motivi con anteprima dal vivo e rimuovere i motivi caricati |
| [Hatch](../hatch/) | Riempie una regione chiusa con un motivo della libreria |
| [FontAdd](../font-add/) | La stessa scorciatoia di caricamento diretto per i font `.ttf` |
